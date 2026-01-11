<script lang="ts" setup>
useHead({
  title: $t('auth.form.signin.title'),
})

const { fetch: fetchUserSession } = useUserSession()
const config = useRuntimeConfig()
const toast = useToast()
const route = useRoute()
const router = useRouter()

const isLoading = ref(false)

const onAuthSubmit = async (event: any) => {
  isLoading.value = true
  await $fetch('/api/login', {
    method: 'POST',
    body: event.data,
  })
    .then(async () => {
      await fetchUserSession()
      router.push(route.query.redirect?.toString() || '/')
    })
    .catch((error) => {
      console.error('Login error:', error)
      toast.add({
        color: 'error',
        title: 'Login Failed',
        description:
          error?.data?.message ||
          'An unexpected error occurred. Please try again.',
      })
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <div
    class="relative w-full min-h-svh flex flex-col items-center justify-center p-4 overflow-hidden bg-[#F8F6F6] text-[#132843]"
  >
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div 
        class="absolute top-0 left-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px]
               bg-[#D6DEEB] rounded-full mix-blend-multiply filter blur-3xl opacity-70 
               animate-blob will-change-transform translate-z-0"
      ></div>
      <div 
        class="absolute bottom-0 right-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px]
               bg-[#6191D3] rounded-full mix-blend-multiply filter blur-3xl opacity-30 
               animate-blob animation-delay-2000 will-change-transform translate-z-0"
      ></div>
      <div 
        class="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] min-w-[200px] min-h-[200px]
               bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 
               animate-blob animation-delay-4000 will-change-transform translate-z-0"
      ></div>
    </div>

    <!-- 卡片容器 -->
    <div 
      class="relative w-full max-w-md bg-white/70 backdrop-blur-xl 
             border border-white/50 ring-1 ring-[#132843]/5
             shadow-2xl shadow-[#132843]/10 rounded-3xl p-8 
             contain-layout animate-fade-in-up"
    >
      <div class="mb-8 text-center space-y-2">
        <h1 class="text-3xl font-bold tracking-tight text-[#132843]">
          {{ $t('auth.form.signin.title') }}
        </h1>
        <p class="text-sm font-medium text-[#3966A2]/80">
          {{ $t('auth.form.signin.subtitle', [config.public.app.title]) }}
        </p>
      </div>

      <!-- AuthForm 组件 -->
      <AuthForm
        class="auth-custom-form"
        :title="''"
        :subtitle="''"
        :loading="isLoading"
        :providers="[
          config.public.oauth.github.enabled && {
            icon: 'tabler:brand-github',
            label: 'GitHub',
            block: true,
            size: 'lg',
            to: '/api/auth/github',
            external: true,
          },
        ]"
        @submit="onAuthSubmit"
      />
    </div>
  </div>
</template>

<style scoped>
/* 
   === 动画定义 === 
*/
@keyframes blob {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(30px, -50px, 0) scale(1.1); }
  66% { transform: translate3d(-20px, 20px, 0) scale(0.9); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 20px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 
   === 样式修复说明 ===
   由于 @apply 在当前构建配置中无法识别 rounded-xl 等工具类，
   以下样式已全部转换为标准原生 CSS，效果与原设计完全一致。
*/

/* 1. 输入框 (Input) */
.auth-custom-form :deep(input) {
  /* @apply rounded-xl py-2.5 transition-all duration-300 */
  border-radius: 0.75rem;       /* rounded-xl */
  padding-top: 0.625rem;        /* py-2.5 */
  padding-bottom: 0.625rem;     /* py-2.5 */
  transition: all 300ms;        /* transition-all duration-300 */
  
  /* 颜色定义 */
  background-color: rgba(255, 255, 255, 0.5); 
  border: 1px solid #D6DEEB;
  color: #132843;
}

.auth-custom-form :deep(input:focus) {
  /* @apply outline-none bg-white */
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: #ffffff;
  
  /* 聚焦颜色 */
  border-color: #3966A2;
  box-shadow: 0 0 0 2px rgba(57, 102, 162, 0.2);
}

/* 2. 标签 (Label) */
.auth-custom-form :deep(label) {
  /* @apply font-medium text-sm mb-1.5 block */
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.375rem;
  display: block;
  color: #132843;
}

/* 3. 登录按钮 (Submit Button) */
.auth-custom-form :deep(button[type='submit']) {
  /* @apply mx-auto block w-full min-w-[160px] rounded-full px-8 py-2 mt-6 font-bold transition-all duration-300 ease-out */
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  min-width: 160px;
  border-radius: 9999px; /* rounded-full */
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
  font-weight: 700;
  transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
  
  /* 基础外观 */
  background-color: transparent;
  border: 2px solid #3966A2;
  color: #3966A2;
}

/* 响应式调整 sm:w-auto */
@media (min-width: 640px) {
  .auth-custom-form :deep(button[type='submit']) {
    width: auto;
  }
}

.auth-custom-form :deep(button[type='submit']:hover) {
  background-color: #3966A2;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(57, 102, 162, 0.3);
}

.auth-custom-form :deep(button[type='submit']:active) {
  transform: scale(0.95);
  box-shadow: none;
}

/* 隐藏按钮内的图标 */
.auth-custom-form :deep(button[type='submit'] [class*='i-']),
.auth-custom-form :deep(button[type='submit'] svg) {
  display: none !important;
}

/* 4. 第三方登录按钮 (GitHub等) */
.auth-custom-form :deep(a[href*='github']),
.auth-custom-form :deep(button.variant-subtle) {
  /* @apply flex items-center justify-center gap-2 rounded-xl py-2.5 mt-4 font-medium transition-all duration-200 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-top: 1rem;
  font-weight: 500;
  transition: all 200ms;
  
  /* 外观 */
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #D6DEEB;
  color: #132843;
}

.auth-custom-form :deep(a[href*='github']:hover),
.auth-custom-form :deep(button.variant-subtle:hover) {
  background-color: #F8F6F6;
  border-color: #3966A2;
  color: #3966A2;
}
</style>