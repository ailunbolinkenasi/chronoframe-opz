<script lang="ts" setup>
const avatarSrc = computed(() => {
  const url = getSetting('app:avatarUrl')
  return url ? url.toString() : '/web-app-manifest-192x192.png'
})
</script>

<template>
  <div class="relative flex items-center justify-center size-24 group">
    
    <!-- 优化 1: 背景光晕 -->
    <!-- 添加 will-change: opacity 提示浏览器优化脉冲动画 -->
    <!-- 移除了 transform: scale-75，直接用 padding 或 inset 控制大小，减少计算 -->
    <div 
      class="absolute inset-2 bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-xl animate-pulse-slow will-change-opacity"
    ></div>

    <!-- 2. SVG 旋转环 -->
    <svg 
      class="absolute inset-0 size-full -rotate-90 animate-spin-slow text-primary-500 dark:text-primary-400" 
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        class="opacity-10 dark:opacity-20"
      />
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-dasharray="200"
        stroke-dashoffset="80"
      />
    </svg>

    <!-- 3. 头像容器 -->
    <div
      class="absolute inset-2 rounded-full overflow-hidden shadow-sm bg-neutral-100 dark:bg-neutral-800 z-10"
    >
      <!-- 优化 2: 图片动画 -->
      <!-- 移除了 filter 动画，只保留 transform -->
      <img
        class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 animate-breathe"
        :src="avatarSrc"
        alt="Loading..."
        draggable="false"
        loading="eager"
      />
    </div>
  </div>
</template>

<style scoped>
/* 
  性能优化关键：
  只使用 transform 和 opacity 属性进行动画，
  这两者由 GPU 合成器直接处理，不会触发 Layout 或 Paint。
*/

.animate-spin-slow {
  will-change: transform;
  transform: translateZ(0);
  animation: spin 3s linear infinite;
}

.will-change-opacity {
  will-change: opacity;
}

/* 优化后的呼吸动画：移除 brightness */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-breathe {
  /* 只有 transform 变化，不需要 will-change (浏览器通常能自动优化简单的 scale) */
  animation: breathe 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 优化 3: 减弱动态效果支持 (Accessibility) */
@media (prefers-reduced-motion: reduce) {
  .animate-spin-slow,
  .animate-pulse-slow,
  .animate-breathe {
    animation: none !important;
    transform: none !important;
  }
}
</style>