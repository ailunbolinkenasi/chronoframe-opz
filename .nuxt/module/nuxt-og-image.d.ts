
declare module 'nitropack' {
interface NitroRouteRules {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').VNode, ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module 'nitropack/types' {
interface NitroRouteRules {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').VNode, ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module '#og-image/components' {
  export interface OgImageComponents {
    'Photo': typeof import('../../app/components/OgImage/Photo.vue')['default']
    'BrandedLogo': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue')['default']
    'Frame': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue')['default']
    'Nuxt': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue')['default']
    'NuxtSeo': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue')['default']
    'Pergel': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue')['default']
    'SimpleBlog': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue')['default']
    'UnJs': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue')['default']
    'Wave': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue')['default']
    'WithEmoji': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue')['default']
  }
}
declare module '#og-image/unocss-config' {
  export type theme = any
}

export {}
