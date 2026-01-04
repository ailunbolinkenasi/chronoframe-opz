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
    class="relative w-full min-h-svh flex flex-col items-center justify-center p-4 pb-12 overflow-hidden bg-[#F8F6F6] text-[#132843]"
  >
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D6DEEB] blur-[100px] opacity-60 pointer-events-none"></div>
    
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#6191D3] blur-[120px] opacity-20 pointer-events-none"></div>

    <div class="relative w-full max-w-md bg-white/80 backdrop-blur-sm border border-[#D6DEEB] shadow-xl shadow-[#132843]/5 rounded-2xl p-6 md:p-8">
      
      <div class="mb-6 text-center">
        <h1 class="text-2xl font-bold text-[#132843]">
          {{ $t('auth.form.signin.title') }}
        </h1>
        <p class="mt-2 text-sm text-[#3966A2]/80">
          {{ $t('auth.form.signin.subtitle', [config.public.app.title]) }}
        </p>
      </div>

      <AuthForm
        class="
          [&_button[type=submit]]:mx-auto
          [&_button[type=submit]]:block
          [&_button[type=submit]]:w-fit
          [&_button[type=submit]]:min-w-[140px]
          
          [&_button[type=submit]]:bg-transparent
          [&_button[type=submit]]:border-2
          [&_button[type=submit]]:border-[#3966A2]
          [&_button[type=submit]]:text-[#3966A2]
          [&_button[type=submit]]:font-semibold
          [&_button[type=submit]]:rounded-full
          [&_button[type=submit]]:transition-all
          [&_button[type=submit]]:px-10  /* 增加一点内边距保持平衡 */

          /* === 3. 【核心修改】彻底隐藏右侧图标 === */
          /* 匹配所有以 i- 开头的类名 (Nuxt UI Icon 的标准写法) */
          [&_button[type=submit]_[class*='i-']]:!hidden
          /* 匹配 raw SVG (防止图标是纯 SVG 渲染的) */
          [&_button[type=submit]_svg]:!hidden

          [&_button[type=submit]]:hover:bg-[#3966A2]
          [&_button[type=submit]]:hover:text-white
          [&_button[type=submit]]:hover:shadow-lg
          [&_button[type=submit]]:hover:shadow-[#3966A2]/20
          
          [&_input]:bg-white
          [&_input]:border-[#D6DEEB]
          [&_input]:text-[#132843]
          [&_input]:rounded-lg
          
          [&_input:focus]:!border-[#3966A2]
          [&_input:focus]:!ring-1
          [&_input:focus]:!ring-[#3966A2]

          [&_label]:text-[#132843]
          [&_label]:font-medium
        "
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
:deep(a[href*="github"]),
:deep(button.variant-subtle) {
  background-color: white !important;
  border: 1px solid #D6DEEB !important;
  color: #132843 !important;
  margin-top: 0.5rem;
  transition: all 0.2s;
}

:deep(a[href*="github"]:hover),
:deep(button.variant-subtle:hover) {
  border-color: #3966A2 !important;
  background-color: #F8F6F6 !important;
}
</style>