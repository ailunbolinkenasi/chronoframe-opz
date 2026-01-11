<script lang="ts" setup>
definePageMeta({
  layout: 'masonry',
  key: 'photo-viewer-route',
  keepalive: true,
})

const route = useRoute()
const router = useRouter()
const toast = useToast()

const { switchToIndex, closeViewer, openViewer } = useViewerState()
const { isViewerOpen } = storeToRefs(useViewerState())
const { photos } = usePhotos()

// 使用 shallowRef 减少响应式开销
const slug = shallowRef<string[]>([])
const hasShownUpdateToast = useState('hasShownUpdateToast', () => false)

// 版本更新信息
const UPDATE_MESSAGES = [
  '1.本ChronoFrame程序来自 fork 版本1.0.0-beta-fix-2025-12-31，本版本还在优化修改当中暂未提交。',
  '2.优化了队列上传的读取速度',
  '3.优化了首页图片部分展示照片为圆角状态',
  '4.优化了加载动画',
  '5.当前版本号为v1.0.0-beta-fix-2025-12-31'
]

// 获取当前照片 ID
const photoId = computed(() => slug.value[0] ?? null)

// 使用 shallowComputed 提升性能
const currentPhoto = computed(() => {
  if (!photoId.value) return null
  return photos.value.find(p => p.id === photoId.value) ?? null
}, { onlyTrackArrayElements: false })

// 缓存 OG Image 配置以避免频繁重新计算
const ogImageConfig = computed(() => ({
  headline: currentPhoto.value ? 'PHOTO' : 'ChronoFrame',
  title: currentPhoto.value?.title || getSetting('app:title'),
  description: currentPhoto.value?.description || getSetting('app:title'),
  thumbnailJpegUrl: currentPhoto.value?.thumbnailKey
    ? `/thumb/${encodeURIComponent(currentPhoto.value.thumbnailUrl || '')}`
    : undefined,
  photo: currentPhoto.value || undefined,
}))

defineOgImageComponent('Photo', ogImageConfig)

const { clearAllFilters, toggleFilter } = usePhotoFilters()

// 防抖处理路由查询参数变化
const handleTagFilter = useDebounceFn((tagParam: string | string[] | undefined) => {
  if (tagParam && typeof tagParam === 'string' && !photoId.value) {
    clearAllFilters()
    toggleFilter('tags', tagParam)
    router.replace('/')
  }
}, 300)

// 使用 useBeforeRouteUpdate 替代 watch 路由
onBeforeRouteUpdate(async (to, from) => {
  slug.value = (to.params.slug as string[]) || []
  
  const newPhotoId = slug.value[0] ?? null
  if (newPhotoId && photos.value.length > 0) {
    const foundIndex = photos.value.findIndex(p => p.id === newPhotoId)
    if (foundIndex !== -1) {
      useHead({
        title: photos.value[foundIndex]?.title || $t('title.fallback.photo'),
      })
      
      if (!isViewerOpen.value) {
        openViewer(foundIndex, null)
      } else {
        switchToIndex(foundIndex)
      }
    }
  } else if (!newPhotoId) {
    closeViewer()
    useHead({ title: '' })
  }

  // 处理标签过滤
  handleTagFilter(to.query.tag)
})

// 初始化加载
onMounted(() => {
  slug.value = (route.params.slug as string[]) || []

  // 显示更新提示
  if (!photoId.value && !hasShownUpdateToast.value) {
    toast.add({
      title: '欢迎来到看见.',
      description: UPDATE_MESSAGES.join('\n'),
      icon: 'tabler:info-circle',
      color: 'blue',
      duration: 10000,
      ui: {
        description: 'whitespace-pre-line'
      },
      actions: [{
        label: '关闭',
        click: () => {}
      }]
    })
    hasShownUpdateToast.value = true
  }

  // 初始化照片查看器
  if (photoId.value && photos.value.length > 0) {
    const foundIndex = photos.value.findIndex(p => p.id === photoId.value)
    if (foundIndex !== -1) {
      useHead({
        title: photos.value[foundIndex]?.title || $t('title.fallback.photo'),
      })
      if (!isViewerOpen.value) {
        openViewer(foundIndex, null)
      }
    }
  }
})

// 监听照片数据变化（仅当数组长度改变时）
watch(
  () => photos.value.length,
  (length) => {
    if (photoId.value && length > 0) {
      const foundIndex = photos.value.findIndex(p => p.id === photoId.value)
      if (foundIndex !== -1 && isViewerOpen.value) {
        switchToIndex(foundIndex)
      }
    }
  },
  { immediate: false }
)
</script>

<template>
  <!-- 空模板优化：页面内容由 masonry 布局和 viewer 组件管理 -->
  <div class="sr-only">Photo viewer page</div>
</template>

<style scoped>
/* 屏幕阅读器专用样式 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>