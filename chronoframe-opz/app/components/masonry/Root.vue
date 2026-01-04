<script setup lang="ts">
import { motion } from 'motion-v'
// 引入性能优化工具
import { useDebounceFn, useWindowScroll, useThrottleFn } from '@vueuse/core'

interface Props {
  photos: Photo[]
  columns?: number | 'auto'
}

const props = withDefaults(defineProps<Props>(), {
  columns: 'auto',
})

const dayjs = useDayjs()
const router = useRouter()

const { filteredPhotos, hasActiveFilters } = usePhotoFilters()
const { sortedPhotos } = usePhotoSort()

const displayPhotos = computed(() => {
  return hasActiveFilters.value ? filteredPhotos.value : sortedPhotos.value
})

const { currentPhotoIndex, isViewerOpen } = storeToRefs(useViewerState())

const FIRST_SCREEN_ITEMS_COUNT = 50
const MASONRY_GAP = 8

const masonryWrapper = ref<HTMLElement>()
const hasAnimated = ref(false)
const dateRange = ref<string>()
const visiblePhotos = ref(new Set<number>())

const isMobile = useMediaQuery('(max-width: 768px)')
const { batchProcessLivePhotos } = useLivePhotoProcessor()

const processedBatch = ref(new Set<string>())
const headerRef = ref<HTMLElement>()
const headerHeight = ref(0)
const headerColumnWidth = ref(0)

// --- 性能优化：滚动监听 ---
// 使用 VueUse 的 useWindowScroll 替代原生监听，自带响应式优化
const { y: scrollY } = useWindowScroll()
const showFloatingActions = computed(() => scrollY.value > 500)

const columnWidth = computed(() => {
  if (props.columns === 'auto') {
    return isMobile.value ? 280 : 280
  }
  return 280
})

const maxColumns = computed(() => {
  if (props.columns !== 'auto') {
    return props.columns
  }
  return isMobile.value ? 2 : 8
})

const minColumns = computed(() => {
  if (props.columns !== 'auto') {
    return props.columns
  }
  return 2
})

// Prepare items for masonry-wall
const masonryItems = computed(() => {
  return (
    displayPhotos.value?.map((photo, index) => ({
      id: photo.id,
      photo,
      originalIndex: index,
    })) ?? []
  )
})

useResizeObserver(headerRef, (entries) => {
  const entry = entries[0]
  if (entry) {
    headerHeight.value = entry.contentRect.height
  }
})

// --- 性能优化：防止布局抖动 ---
// 使用 requestAnimationFrame 避免在同一帧内多次读写 DOM
const updateHeaderWidth = () => {
  requestAnimationFrame(() => {
    if (isMobile.value) {
      headerColumnWidth.value = 0
      return
    }
  
    const columnElement = masonryWrapper.value?.querySelector<HTMLElement>(
      '.masonry-wall .masonry-column',
    )
  
    if (columnElement) {
      headerColumnWidth.value = columnElement.getBoundingClientRect().width
      return
    }
  
    headerColumnWidth.value = columnWidth.value
  })
}

// 使用节流处理 resize
const throttledUpdateHeaderWidth = useThrottleFn(updateHeaderWidth, 100)

useResizeObserver(masonryWrapper, () => {
  throttledUpdateHeaderWidth()
})

const headerOffset = computed(() => {
  if (isMobile.value) {
    return 0
  }
  return headerHeight.value + MASONRY_GAP
})

const headerStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (isMobile.value) {
    styles.width = '100%'
    styles.marginBottom = `${MASONRY_GAP}px`
    return styles
  }

  const width = headerColumnWidth.value || columnWidth.value
  styles.width = `${width}px`

  return styles
})

watch([columnWidth, maxColumns, minColumns], () => {
  if (isMobile.value) {
    return
  }
  nextTick(updateHeaderWidth)
})

watch(isMobile, (mobile) => {
  if (mobile) {
    headerColumnWidth.value = 0
    return
  }
  nextTick(updateHeaderWidth)
})

// --- 性能优化：统计计算 ---
// 原始逻辑包含多次 map 和 sort，改为单次遍历 O(n)
const photoStats = computed(() => {
  const photos = displayPhotos.value || []
  const totalPhotos = photos.length
  
  if (totalPhotos === 0) {
    return { total: 0, withDates: 0, withTitles: 0, withExif: 0, dateRange: null }
  }

  let withDates = 0
  let withTitles = 0
  let withExif = 0
  let minDate = ''
  let maxDate = ''

  // 单次循环完成所有统计
  for (const p of photos) {
    if (p.dateTaken) {
      withDates++
      if (!minDate || p.dateTaken < minDate) minDate = p.dateTaken
      if (!maxDate || p.dateTaken > maxDate) maxDate = p.dateTaken
    }
    if (p.title) withTitles++
    if (p.exif) withExif++
  }

  // 仅在最后转换一次 dayjs
  const range = minDate && maxDate ? {
    start: dayjs(minDate).format('ll'),
    end: dayjs(maxDate).format('ll')
  } : null

  return {
    total: totalPhotos,
    withDates,
    withTitles,
    withExif,
    dateRange: range,
  }
})

const dateRangeText = computed(() => {
  const range = photoStats.value?.dateRange
  if (!range || !range.start || !range.end) return ''
  return `${range.start} - ${range.end}`
})

// --- 性能优化：防抖处理可见性变化 ---
// 将昂贵的计算与高频事件分离
const debouncedProcessUpdates = useDebounceFn(() => {
  updateDateRange()
  processVisibleLivePhotos()
}, 150) // 延迟 150ms，完全消除滚动时的计算卡顿

const handleVisibilityChange = ({
  index,
  isVisible,
}: {
  index: number
  isVisible: boolean
  date: string | Date
}) => {
  // 1. 极速操作：仅更新 Set
  if (isVisible) {
    visiblePhotos.value.add(index)
  } else {
    visiblePhotos.value.delete(index)
  }
  // 2. 延迟执行重计算
  debouncedProcessUpdates()
}

// Process LivePhotos for currently visible photos
const processVisibleLivePhotos = async () => {
  if (visiblePhotos.value.size === 0) return

  const visiblePhotosArray = Array.from(visiblePhotos.value)
  // 优化：先 filter 索引，避免无效的对象查找
  const livePhotosToProcess: Photo[] = []
  
  for (const index of visiblePhotosArray) {
    const photo = displayPhotos.value[index]
    if (
      photo &&
      photo.isLivePhoto === 1 &&
      Boolean(photo.livePhotoVideoUrl) &&
      !processedBatch.value.has(photo.id)
    ) {
      livePhotosToProcess.push(photo)
      processedBatch.value.add(photo.id) // 立即标记，防止防抖期间重复添加
    }
  }

  if (livePhotosToProcess.length === 0) return

  batchProcessLivePhotos(
    livePhotosToProcess.map((photo) => ({
      id: photo.id,
      livePhotoVideoUrl: photo.livePhotoVideoUrl!,
    })),
  )
}

const visibleCities = ref<string>()

// --- 性能优化：日期范围计算 ---
const updateDateRange = () => {
  if (visiblePhotos.value.size === 0) {
    dateRange.value = undefined
    visibleCities.value = undefined
    return
  }

  // 优化：直接获取最小和最大索引，不再对所有日期对象进行 sort
  const indices = Array.from(visiblePhotos.value)
  if (indices.length === 0) return

  const minIndex = Math.min(...indices)
  const maxIndex = Math.max(...indices)

  // 处理城市 (可选：如果城市计算依然卡顿，可以只取 indices 的前20个来计算)
  const cities = indices
    .map((index) => displayPhotos.value[index]?.city)
    .filter((city): city is string => Boolean(city))

  const uniqueCities = [...new Set(cities)]

  if (uniqueCities.length === 0) {
    visibleCities.value = undefined
  } else if (uniqueCities.length === 1) {
    visibleCities.value = uniqueCities[0]
  } else if (uniqueCities.length <= 3) {
    visibleCities.value = uniqueCities.join('、')
  } else {
    visibleCities.value =
      `${uniqueCities.slice(0, 2).join('、')} ` +
      $t('ui.indexPanelCountCity', { count: uniqueCities.length })
  }

  // 优化：只解析开始和结束两张图片，大幅减少 dayjs 实例化开销
  const startPhoto = displayPhotos.value[minIndex]
  const endPhoto = displayPhotos.value[maxIndex]

  if (!startPhoto?.dateTaken || !endPhoto?.dateTaken) {
    dateRange.value = undefined
    return
  }

  const startDate = dayjs(startPhoto.dateTaken)
  const endDate = dayjs(endPhoto.dateTaken)

  // Check if dates are the same day
  if (startDate.isSame(endDate, 'day')) {
    dateRange.value = startDate.format('ll')
  } else if (startDate.isSame(endDate, 'month')) {
    dateRange.value = startDate.format('MMM YYYY')
  } else if (startDate.isSame(endDate, 'year')) {
    dateRange.value = `${startDate.format('MMM')} - ${endDate.format('MMM YYYY')}`
  } else {
    dateRange.value = `${startDate.format('ll')} - ${endDate.format('ll')}`
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  // 移除 scroll 监听，改用 useWindowScroll
  window.addEventListener('resize', throttledUpdateHeaderWidth)

  nextTick(() => {
    updateHeaderWidth()

    if (currentPhotoIndex.value) {
      scrollToPhoto(currentPhotoIndex.value)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', throttledUpdateHeaderWidth)
})

const handleOpenViewer = (index: number) => {
  router.push(`/${displayPhotos.value[index]?.id}`)
}

const scrollToPhoto = (photoIndex: number) => {
  if (!displayPhotos.value[photoIndex]) return

  const photoId = displayPhotos.value[photoIndex].id
  const photoElement = document.querySelector(`[data-photo-id="${photoId}"]`)

  if (photoElement) {
    const elementRect = photoElement.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const currentScrollY = window.pageYOffset

    const targetScrollY =
      currentScrollY +
      elementRect.top -
      windowHeight / 2 +
      elementRect.height / 2

    window.scrollTo({
      top: Math.max(0, targetScrollY),
      behavior: 'smooth',
    })
  }
}

watch(currentPhotoIndex, (newIndex) => {
  if (isViewerOpen.value && newIndex >= 0) {
    nextTick(() => {
      scrollToPhoto(newIndex)
    })
  }
})
</script>

<template>
  <div class="relative w-full">
    <DateRangeIndicator
      :date-range="dateRange"
      :locations="visibleCities"
      :is-visible="!!dateRange && showFloatingActions"
      :is-mobile="isMobile"
    />

    <!-- Back to Top Button -->
    <motion.div
      v-if="showFloatingActions"
      class="fixed bottom-6 right-6 z-50"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.8 }"
      :transition="{ duration: 0.2 }"
    >
      <UTooltip :text="$t('ui.action.backtotop.tooltip') || '回到顶部'">
        <UButton
          variant="soft"
          color="neutral"
          class="cursor-pointer bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex justify-center items-center rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50"
          icon="tabler:arrow-up"
          size="lg"
          :aria-label="$t('ui.action.backtotop.ariaLabel') || '回到顶部'"
          @click="scrollToTop"
        />
      </UTooltip>
    </motion.div>

    <div
      class="lg:px-0 lg:pb-0"
      :class="isMobile ? 'px-1 pb-1' : 'p-1'"
    >
      <div
        ref="masonryWrapper"
        class="relative"
        :class="{ 'pt-2': isMobile }"
        :style="{ '--masonry-header-offset': `${headerOffset}px` }"
      >
        <div
          ref="headerRef"
          class="masonry-header-wrapper"
          :class="{ 'masonry-header-desktop': !isMobile }"
          :style="headerStyle"
        >
          <MasonryItemHeader
            :stats="photoStats"
            :date-range-text
          />
        </div>

        <!-- Masonry Wall -->
        <MasonryWall
          class="masonry-wall-with-header"
          :items="masonryItems"
          :column-width="columnWidth"
          :gap="MASONRY_GAP"
          :min-columns="minColumns"
          :max-columns="maxColumns"
          :ssr-columns="2"
          :key-mapper="
            (_item, _column, _row, index) =>
              masonryItems[index]?.originalIndex ?? index
          "
        >
          <template #default="{ item }">
            <!-- Photo Items -->
            <MasonryItem
              v-if="item.photo && typeof item.originalIndex === 'number'"
              :key="item.photo.id"
              :photo="item.photo"
              :index="item.originalIndex"
              :has-animated
              :first-screen-items="FIRST_SCREEN_ITEMS_COUNT"
              class="masonry-item-optimizer"
              @visibility-change="handleVisibilityChange"
              @open-viewer="handleOpenViewer($event)"
            />
          </template>
        </MasonryWall>
      </div>
    </div>
  </div>
</template>

<style scoped>
.masonry-header-wrapper {
  z-index: 1;
}

.masonry-header-desktop {
  left: 0;
  position: absolute;
  top: 0;
}

.masonry-wall-with-header :deep(.masonry-column:first-child) {
  padding-top: var(--masonry-header-offset, 0px);
}

.masonry-wall-with-header
  :deep(.masonry-column:first-child .masonry-item:first-child) {
  margin-top: 0;
}

/* 
  性能优化重点：
  使用 :deep 穿透到 MasonryItem 内部
*/
.masonry-wall-with-header :deep(.masonry-item-optimizer) {
  overflow: hidden;
  border-radius: 1rem; 
  
  /* 优化 1: 移除高性能消耗的 mask-image，除非必须 */
  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */
  
  /* 优化 2: 开启硬件加速 */
  transform: translate3d(0, 0, 0); 
  backface-visibility: hidden;
  
  /* 优化 3: 提示浏览器该元素会变化，提升为合成层 */
  will-change: transform;
  
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  /* 优化 4: 仅对 transform 做过渡，避免 all */
  transition: transform 0.3s ease;
}

/* 移除 hover 时的圆角变化可以进一步提高滚动时的 FPS，
   因为 hover 效果在滚动中可能会被误触 */
</style>