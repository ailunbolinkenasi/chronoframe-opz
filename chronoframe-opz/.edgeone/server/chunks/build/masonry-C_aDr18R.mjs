import { _ as _export_sfc, u as useHead, x as usePhotos, y as __nuxt_component_0$6, N as getSetting } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'zod';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'stream';
import 'events';
import 'http';
import 'crypto';
import 'buffer';
import 'zlib';
import 'https';
import 'net';
import 'tls';
import 'url';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import '@intlify/h3';
import '@intlify/utils/h3';
import '@intlify/utils';
import 'vue-router';
import 'fs';
import 'path';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm';
import 'drizzle-orm/sqlite-core';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import '@vingle/bmp-js';
import 'heic-convert';
import 'sharp';
import 'thumbhash';
import 'node:fs/promises';
import 'exiftool-vendored';
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'ipx';
import 'pinia';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/locale/zh-cn.js';
import 'dayjs/locale/zh-hk.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'dayjs/plugin/timezone.js';
import 'dayjs/plugin/duration.js';
import 'dayjs/plugin/localizedFormat.js';
import 'dayjs/plugin/isBetween.js';
import 'tailwindcss/colors';
import '@yeger/vue-masonry-wall';
import 'tailwind-merge';
import 'perfect-debounce';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const avatarSrc = computed(() => {
      const url = getSetting("app:avatarUrl");
      return url ? url.toString() : "/web-app-manifest-192x192.png";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center size-24 group" }, _attrs))} data-v-2612a411><div class="absolute inset-2 bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-xl animate-pulse-slow will-change-opacity" data-v-2612a411></div><svg class="absolute inset-0 size-full -rotate-90 animate-spin-slow text-primary-500 dark:text-primary-400" viewBox="0 0 100 100" data-v-2612a411><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="4" class="opacity-10 dark:opacity-20" data-v-2612a411></circle><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-dasharray="200" stroke-dashoffset="80" data-v-2612a411></circle></svg><div class="absolute inset-2 rounded-full overflow-hidden shadow-sm bg-neutral-100 dark:bg-neutral-800 z-10" data-v-2612a411><img class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 animate-breathe"${ssrRenderAttr("src", unref(avatarSrc))} alt="Loading..." draggable="false" loading="eager" data-v-2612a411></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loader/Avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-2612a411"]]), { __name: "LoaderAvatar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "masonry",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    const { photos } = usePhotos();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$6;
      const _component_LoaderAvatar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen" }, _attrs))} data-v-b82d8a2a><div class="h-svh px-1" data-v-b82d8a2a>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 flex flex-col gap-4 items-center justify-center" data-v-b82d8a2a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LoaderAvatar, null, null, _parent2, _scopeId));
            _push2(`<span class="loading-scan-wrapper" data-v-b82d8a2a${_scopeId}><span class="text-base font-medium loading-scan-text" data-v-b82d8a2a${_scopeId}> LOADING </span></span></div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 flex flex-col gap-4 items-center justify-center" }, [
                createVNode(_component_LoaderAvatar),
                createVNode("span", { class: "loading-scan-wrapper" }, [
                  createVNode("span", { class: "text-base font-medium loading-scan-text" }, " LOADING ")
                ])
              ])
            ];
          }
        })
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/masonry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const masonry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b82d8a2a"]]);

export { masonry as default };
//# sourceMappingURL=masonry-C_aDr18R.mjs.map
