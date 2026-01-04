import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "dashboard" | "masonry" | "onboarding"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}