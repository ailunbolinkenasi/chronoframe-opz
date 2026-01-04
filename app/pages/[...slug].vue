<script lang="ts" setup>
definePageMeta({
  layout: 'masonry',
  // 固定 key 防止路径参数变化时创建新的实例
  key: 'photo-viewer-route',
})

const route = useRoute()
const router = useRouter()
const toast = useToast()

const { switchToIndex, closeViewer, openViewer } = useViewerState()
const { isViewerOpen } = storeToRefs(useViewerState())

const { photos } = usePhotos()

const slug = computed(() => (route.params.slug as string[]) || [])
const photoId = computed(() => slug.value[0] || null)
const currentPhoto = computed(() =>
  photos.value.find((photo) => photo.id === photoId.value),
)

// 使用 useState 防止页面路由切换时重复弹出，仅在刷新页面后首次加载显示
const hasShownUpdateToast = useState('hasShownUpdateToast', () => false)

// 在页面加载时显示 toast 提示
onMounted(() => {
  // 只在访问根路径（没有 photoId）且未显示过时显示
  if (!photoId.value && !hasShownUpdateToast.value) {
    toast.add({
      title: '欢迎来到看见.',
      description: [
        '1. 本ChronoFrame程序来自 fork 版本1.0.0-beta-fix-2025-12-31，本版本还在优化修改当中暂未提交。',
        '3. 优化了队列上传的读取速度',
        '4. 优化了首页图片部分展示照片为圆角状态',
        '5. 优化了加载动画',
        '6. 本次优化版本号为v1.0.0-beta-fix-2025-12-31,以上为本次优化内容说明。'
      ].join('\n'), // 使用换行符连接数组
      icon: 'tabler:info-circle',
      color: 'primary',
      duration: 10000, // 建议稍微长一点时间给用户阅读
      ui: {
        // 关键配置：添加这个 class 确保 Toast 能识别换行符
        description: 'whitespace-pre-line' 
      },
      // 添加关闭按钮
      actions: [{
        label: '关闭',
        click: () => { /* 关闭动作会自动触发 */ }
      }]
    })
    
    // 标记为已显示
    hasShownUpdateToast.value = true
  }
})

defineOgImageComponent('Photo', {
  headline: currentPhoto.value ? 'PHOTO' : 'ChronoFrame',
  title: currentPhoto.value?.title || getSetting('app:title'),
  description: currentPhoto.value
    ? currentPhoto.value.description
    : getSetting('app:title'),
  thumbnailJpegUrl:
    currentPhoto.value && currentPhoto.value.thumbnailKey
      ? `/thumb/${encodeURIComponent(currentPhoto.value.thumbnailUrl || '')}`
      : undefined,
  photo: currentPhoto.value || undefined,
})

// 处理标签查询参数
const { clearAllFilters, toggleFilter } = usePhotoFilters()

// 监听路由查询参数中的标签
watch(
  () => route.query.tag,
  (tagParam) => {
    if (tagParam && typeof tagParam === 'string' && !photoId.value) {
      clearAllFilters()
      toggleFilter('tags', tagParam)

      router.replace('/')
    }
  },
  { immediate: true },
)

watch(
  [photoId, photos],
  ([currentPhotoId, currentPhotos]) => {
    if (currentPhotoId && currentPhotos.length > 0) {
      const foundIndex = currentPhotos.findIndex(
        (photo) => photo.id === currentPhotoId,
      )
      if (foundIndex !== -1) {
        useHead({
          title: currentPhotos[foundIndex]?.title || $t('title.fallback.photo'),
        })
        if (!isViewerOpen.value) {
          // 直接访问照片详情页时，不设置 returnRoute（传入 null）
          openViewer(foundIndex, null)
        } else {
          switchToIndex(foundIndex)
        }
      }
    } else if (!currentPhotoId) {
      closeViewer()
      useHead({
        title: '',
      })
    }
  },
  { immediate: true },
)
</script>

<template>
  <div />
</template>

<style scoped></style>