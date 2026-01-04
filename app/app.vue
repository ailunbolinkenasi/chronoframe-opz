<script setup lang="ts">
import dayjsLocale_zhCN from 'dayjs/locale/zh-cn'
import dayjsLocale_zhTW from 'dayjs/locale/zh-tw'
import dayjsLocale_zhHK from 'dayjs/locale/zh-hk'

const router = useRouter()
const dayjs = useDayjs()
const colorMode = useColorMode()
const { locale } = useI18n()

// 初始化设置系统 - 一次性加载所有设置
const settingsStore = useSettingsStore()
await settingsStore.initSettings()

const appTitle = useSettingRef('app:title')

colorMode.preference = useSettingRef('app:appearance.theme').value as string

useHead({
  titleTemplate: (title) =>
    `${title ? title + ' | ' : ''}${appTitle.value || 'ChronoFrame'}`,
})

const { data, refresh, status } = useFetch('/api/photos')
const photos = computed(() => (data.value as Photo[]) || [])

const { switchToIndex, closeViewer, clearReturnRoute } = useViewerState()
const { currentPhotoIndex, isViewerOpen, returnRoute, isDirectAccess } =
  storeToRefs(useViewerState())

const handleIndexChange = (newIndex: number) => {
  switchToIndex(newIndex)
  router.replace(`/${photos.value[newIndex]?.id}`)
}

const handleClose = () => {
  closeViewer()

  // 如果是直接访问详情页面，关闭时返回首页
  if (isDirectAccess.value) {
    isDirectAccess.value = false
    router.replace('/')
  } else if (returnRoute.value) {
    // 如果有指定的返回路由，返回到该路由
    const destination = returnRoute.value
    clearReturnRoute()
    router.replace(destination)
  } else {
    // 否则使用历史记录或默认返回首页
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/')
    }
  }
}

watchEffect(() => {
  dayjs.locale('zh-Hans', dayjsLocale_zhCN)
  dayjs.locale('zh-Hant-TW', dayjsLocale_zhTW)
  dayjs.locale('zh-Hant-HK', dayjsLocale_zhHK)
  dayjs.locale(locale.value)
})

// 在全局级别提供筛选功能的状态管理
provide(
  'photosFiltering',
  reactive({
    activeFilters: {
      tags: [],
      cameras: [],
      lenses: [],
      cities: [],
      ratings: [],
    },
  }),
)

const toast = useToast()
const route = useRoute()
const config = useRuntimeConfig()

onMounted(() => {
  if (route.path === '/') {
    toast.add({
      title: '本版本更新说明',
      description:
        [
          '1. 优化了队列上传的读取速度',
          '2. 优化了首页图片部分展示照片为圆角状态',
          '3. 优化了加载动画',
          `4. 本次优化版本号为v${config.public.VERSION}`,
        ].join('\n'),
      color: 'info',
      icon: 'tabler:info-circle',
      duration: 10000,
    })
  }
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <PhotosProvider
      :photos="photos"
      :refresh="refresh"
      :status="status"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <ClientOnly>
        <PhotoViewer
          :photos="photos"
          :current-index="currentPhotoIndex"
          :is-open="isViewerOpen"
          @close="handleClose"
          @index-change="handleIndexChange"
        />
      </ClientOnly>
    </PhotosProvider>
  </UApp>
</template>

<style></style>
