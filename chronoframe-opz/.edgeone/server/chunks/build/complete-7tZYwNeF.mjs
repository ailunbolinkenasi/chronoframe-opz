import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Button-DavC7gYO.mjs';
import { D as useToast, Q as _sfc_main$B } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useWizardStore } from './wizard-BF4BXn6Q.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "complete",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const store = useWizardStore();
    const toast = useToast();
    async function onComplete() {
      loading.value = true;
      try {
        const adminData = store.admin;
        const siteData = store.site;
        const storageState = store.storage;
        const storageProvider = storageState.provider;
        const storageConfig = { provider: storageProvider };
        Object.keys(storageState).forEach((key) => {
          if (key.startsWith(storageProvider + ".")) {
            const configKey = key.split(".")[1];
            storageConfig[configKey] = storageState[key];
          }
        });
        const storageData = {
          name: storageState.name,
          config: storageConfig
        };
        const mapState = store.map;
        const mapProvider = mapState.provider;
        const mapTokenKey = `${mapProvider}.token`;
        const mapStyleKey = `${mapProvider}.style`;
        const mapData = {
          provider: mapProvider,
          token: mapState[mapTokenKey],
          style: mapState[mapStyleKey]
        };
        await $fetch("/api/wizard/submit", {
          method: "POST",
          body: {
            admin: adminData,
            site: siteData,
            storage: storageData,
            map: mapData
          }
        });
        store.clear();
        (void 0).location.href = "/dashboard";
      } catch (error) {
        console.error(error);
        toast.add({
          title: "Setup Failed",
          description: error.data?.message || "Failed to complete setup",
          color: "error"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WizardStep = __nuxt_component_0;
      const _component_UIcon = _sfc_main$B;
      const _component_WizardButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_WizardStep, mergeProps({
        title: "即将完成！",
        description: "您的 ChronoFrame 画廊已准备好使用。"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center py-12 space-y-8 text-center"${_scopeId}><div class="relative"${_scopeId}><div class="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"${_scopeId}></div><div class="relative size-28 bg-linear-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-2xl shadow-green-500/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "tabler:check",
              class: "size-18 text-green-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="max-w-md text-neutral-300 text-lg"${_scopeId}><p${_scopeId}> 您已完成了所有基本配置。现在可以使用管理员账户登录并开始上传照片。 </p></div>`);
            _push2(ssrRenderComponent(_component_WizardButton, {
              size: "xl",
              color: "primary",
              loading: unref(loading),
              class: "px-6 py-3 text-base font-bold shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300",
              onClick: onComplete
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 前往仪表盘 `);
                } else {
                  return [
                    createTextVNode(" 前往仪表盘 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center py-12 space-y-8 text-center" }, [
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "absolute inset-0 bg-green-500/20 blur-3xl rounded-full" }),
                  createVNode("div", { class: "relative size-28 bg-linear-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-2xl shadow-green-500/20" }, [
                    createVNode(_component_UIcon, {
                      name: "tabler:check",
                      class: "size-18 text-green-400"
                    })
                  ])
                ]),
                createVNode("div", { class: "max-w-md text-neutral-300 text-lg" }, [
                  createVNode("p", null, " 您已完成了所有基本配置。现在可以使用管理员账户登录并开始上传照片。 ")
                ]),
                createVNode(_component_WizardButton, {
                  size: "xl",
                  color: "primary",
                  loading: unref(loading),
                  class: "px-6 py-3 text-base font-bold shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300",
                  onClick: onComplete
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 前往仪表盘 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=complete-7tZYwNeF.mjs.map
