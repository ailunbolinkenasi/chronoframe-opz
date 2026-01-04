<script lang="ts" setup>
import { motion } from 'motion-v'

const config = useRuntimeConfig()
const { photos } = usePhotos()
const { data: albums } = useAsyncData(
  'albums',
  // @ts-nocheck
  () => $fetch('/api/albums'),
  {
    watch: [],
  },
)

// --- 瀑布流逻辑保持不变 ---
const waterfallPhotos = computed(() =>
  photos.value.toSorted(() => 0.5 - Math.random()).slice(0, 30),
)
const isMobile = useMediaQuery('(max-width: 768px)')
const waterfallColumnCount = computed(() => (isMobile.value ? 3 : 8))
const columnDurations = ref<number[]>([])

onMounted(() => {
  columnDurations.value = Array.from(
    { length: waterfallColumnCount.value },
    () => {
      return 120 + (Math.random() * 90 - 60)
    },
  )
})

const columns = computed(() => {
  const cols: (typeof waterfallPhotos.value)[] = Array.from(
    { length: waterfallColumnCount.value },
    () => [],
  )
  if (waterfallPhotos.value.length === 0) return cols
  const photosPerColumn = 8
  for (let colIndex = 0; colIndex < waterfallColumnCount.value; colIndex++) {
    for (let i = 0; i < photosPerColumn; i++) {
      const photoIndex =
        (colIndex + i * waterfallColumnCount.value) %
        waterfallPhotos.value.length
      cols[colIndex]?.push(waterfallPhotos.value[photoIndex]!)
    }
  }
  return cols
})

const getPhotoById = (photoId: string) => {
  return photos.value.find((p) => p.id === photoId) || null
}

const getAlbumDisplayPhotos = (album: any) => {
  if (!album.photoIds || album.photoIds.length === 0) return []
  const displayPhotos = []
  if (album.coverPhotoId) {
    const coverPhoto = getPhotoById(album.coverPhotoId)
    if (coverPhoto) displayPhotos.push(coverPhoto)
  }
  if (displayPhotos.length === 0 && album.photoIds[0]) {
    const firstPhoto = getPhotoById(album.photoIds[0])
    if (firstPhoto) displayPhotos.push(firstPhoto)
  }
  for (const photoId of album.photoIds) {
    if (displayPhotos.length >= 3) break
    const photo = getPhotoById(photoId)
    if (photo && !displayPhotos.find((p) => p.id === photo.id)) {
      displayPhotos.push(photo)
    }
  }
  return displayPhotos
}

// --- 优化了动画参数，使散开效果更自然 ---
const getPhotoTransform = (index: number, isHover: boolean) => {
  if (index === 0) {
    return { x: 0, y: 0, rotate: 0, scale: 1 }
  } else if (index === 1) {
    // 第二张向左偏
    return isHover
      ? { x: -35, y: -5, rotate: -12, scale: 0.95 }
      : { x: -4, y: -4, rotate: -3, scale: 0.98 }
  } else {
    // 第三张向右偏
    return isHover
      ? { x: 35, y: -5, rotate: 12, scale: 0.95 }
      : { x: 4, y: -4, rotate: 3, scale: 0.96 }
  }
}

const hoveredAlbum = ref<number | null>(null)
</script>

<template>
  <div class="relative min-h-screen bg-neutral-50 dark:bg-neutral-950">
    <!-- 
      背景瀑布流区域 
      优化：增加了底部更柔和的遮罩，使文字更易读
    -->
    <div class="absolute inset-x-0 top-0 h-[40vh] sm:h-[60vh] overflow-hidden -z-10 pointer-events-none">
      <div class="absolute inset-0 flex h-full gap-2 sm:gap-4 opacity-40 dark:opacity-20">
        <!-- 列循环 -->
        <div
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          class="flex-1 relative overflow-hidden"
        >
          <div
            class="flex flex-col gap-2 sm:gap-4"
            :class="colIndex % 2 === 0 ? 'animate-scroll-down' : 'animate-scroll-up'"
            :style="{
              animationDuration: columnDurations[colIndex]
                ? `${columnDurations[colIndex]}s`
                : '120s',
            }"
          >
            <template v-for="groupIndex in 3" :key="groupIndex">
              <div
                v-for="(photo, photoIndex) in column"
                :key="`${photo.id}-${groupIndex}-${photoIndex}`"
                class="w-full rounded-lg overflow-hidden"
              >
                <ClientOnly>
                  <ThumbImage
                    class="w-full h-auto object-cover saturate-[0.8]"
                    :lazy="false"
                    :src="photo.thumbnailUrl!"
                    :thumbhash="photo.thumbnailHash"
                    :style="{ aspectRatio: photo.aspectRatio || 1 }"
                  />
                </ClientOnly>
              </div>
            </template>
          </div>
        </div>
      </div>
      
      <!-- 遮罩层：从透明过渡到页面背景色 -->
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-50/60 via-neutral-50/90 to-neutral-50 dark:from-neutral-950/60 dark:via-neutral-950/90 dark:to-neutral-950" />
    </div>

    <!-- 顶部导航 -->
    <div class="absolute top-0 left-0 p-4 sm:p-6 z-20">
      <UTooltip :text="$t('ui.action.home.tooltip')" :popper="{ placement: 'right' }">
        <UButton
          variant="ghost"
          color="gray"
          icon="tabler:arrow-left"
          class="hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md transition-all"
          size="lg"
          to="/"
        />
      </UTooltip>
    </div>

    <!-- 标题区域 -->
    <div class="flex flex-col items-center pt-24 sm:pt-40 pb-20 px-4 text-center">
      <h1
        class="font-black text-5xl sm:text-7xl tracking-tight drop-shadow-sm text-neutral-900 dark:text-white mb-4"
      >
        {{ $t('title.albums') }}
      </h1>
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-neutral-300 dark:bg-neutral-700"></span>
        <p class="text-lg text-neutral-500 dark:text-neutral-400 font-[Pacifico]">
          {{ config.public.app.slogan }}
        </p>
        <span class="h-px w-8 bg-neutral-300 dark:bg-neutral-700"></span>
      </div>
    </div>

    <!-- 相册网格 -->
    <div class="container mx-auto px-6 lg:px-12 pb-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        <NuxtLink
          v-for="album in albums"
          :key="album.id"
          :to="`/albums/${album.id}`"
          class="group block relative"
          @mouseenter="hoveredAlbum = album.id"
          @mouseleave="hoveredAlbum = null"
        >
          <!-- 照片堆叠区 (增加了高度给散开动画预留空间) -->
          <div class="relative h-56 w-full mb-6 flex justify-center items-center perspective-1000">
            <!-- 堆叠动画层 -->
            <motion.div
              v-for="(photo, index) in getAlbumDisplayPhotos(album)"
              :key="photo.id"
              class="absolute w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-white/20 dark:border-white/5"
              :class="{
                'shadow-xl shadow-neutral-200/50 dark:shadow-black/40': index === 0, // 顶层阴影重一点
                'shadow-md': index > 0 
              }"
              :initial="false"
              :animate="{
                x: getPhotoTransform(index, hoveredAlbum === album.id).x,
                y: getPhotoTransform(index, hoveredAlbum === album.id).y,
                rotate: getPhotoTransform(index, hoveredAlbum === album.id).rotate,
                scale: getPhotoTransform(index, hoveredAlbum === album.id).scale || 1,
                zIndex: 30 - index, // 确保层级正确
              }"
              :transition="{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }"
            >
              <ThumbImage
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                :src="photo.thumbnailUrl!"
                :thumbhash="photo.thumbnailHash"
                :alt="album.title"
              />
              
              <!-- 遮罩：非顶层照片变暗，制造层次感 -->
              <div 
                v-if="index > 0"
                class="absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-300"
                :class="hoveredAlbum === album.id ? 'opacity-0' : 'opacity-100'"
              />
            </motion.div>

            <!-- 空相册状态 (虚线边框) -->
            <div
              v-if="!album.photoIds || album.photoIds.length === 0"
              class="absolute inset-0 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 flex flex-col items-center justify-center gap-3 group-hover:border-primary-400 transition-colors"
            >
              <div class="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 group-hover:text-primary-500 group-hover:bg-primary-50 transition-colors">
                 <Icon name="tabler:photo-off" class="size-6" />
              </div>
              <p class="text-sm font-medium text-neutral-400">
                {{ $t('ui.album.noImage') }}
              </p>
            </div>
          </div>

          <!-- 相册信息区 -->
          <div class="relative px-1">
            <div class="flex items-start justify-between gap-4 mb-1">
              <h2
                class="text-lg font-bold text-neutral-800 dark:text-neutral-100 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              >
                {{ album.title }}
              </h2>
              
              <!-- 时间/数量 Badge -->
              <span class="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                 <Icon name="tabler:calendar" class="size-3 mr-1" />
                 {{ $dayjs(album.createdAt).format('YYYY/MM') }}
              </span>
            </div>

            <p class="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2 leading-relaxed">
              {{ album.description || $t('ui.album.noDescription') }}
            </p>
            
            <!-- 查看更多提示 (Hover时浮现) -->
            <div class="mt-3 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {{ $t('ui.action.view_album') || 'View Album' }}
              <Icon name="tabler:arrow-right" class="ml-1 size-3" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 瀑布流动画保持不变，稍微减慢速度增加优雅感 */
@keyframes scroll-down {
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-100% / 3)); }
}

@keyframes scroll-up {
  0% { transform: translateY(calc(-100% / 3)); }
  100% { transform: translateY(0); }
}

.animate-scroll-down {
  animation: scroll-down linear infinite;
}

.animate-scroll-up {
  animation: scroll-up linear infinite;
}

/* 增加一点透视感，让 3D 旋转更真实 */
.perspective-1000 {
  perspective: 1000px;
}
</style>