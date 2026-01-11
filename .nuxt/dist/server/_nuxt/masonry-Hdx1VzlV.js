import { _ as _export_sfc, N as getSetting, u as useHead, x as usePhotos, y as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, unref, useSSRContext, defineComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-B9974QXa.js";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "pinia";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "D:/chronoframe-opz/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/devalue@5.6.1/node_modules/devalue/index.js";
import "D:/chronoframe-opz/node_modules/.pnpm/@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3_/node_modules/@unhead/vue/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/cookie-es@2.0.0/node_modules/cookie-es/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/locale/zh-cn.js";
import "dayjs/locale/zh-hk.js";
import "dayjs/locale/en.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "dayjs/plugin/timezone.js";
import "dayjs/plugin/duration.js";
import "dayjs/plugin/localizedFormat.js";
import "dayjs/plugin/isBetween.js";
import "tailwindcss/colors";
import "@yeger/vue-masonry-wall";
import "tailwind-merge";
import "D:/chronoframe-opz/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "thumbhash";
import "D:/chronoframe-opz/shared/utils/u8array.ts";
import "swiper/vue";
import "swiper/modules";
import "file-type";
import "D:/chronoframe-opz/shared/types/map.ts";
import "dayjs/locale/zh-tw.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative size-24" }, _attrs))} data-v-715727ec><div class="absolute inset-0 rounded-full border-2 border-transparent border-x-primary-600 border-y-secondary-600 dark:border-x-primary-400 dark:border-y-secondary-400 animate-spin drop-shadow-xl drop-shadow-primary/10" data-v-715727ec></div><div class="absolute inset-1 rounded-full overflow-hidden drop-shadow-xl drop-shadow-primary/10 bg-neutral-100 dark:bg-neutral-800" data-v-715727ec>`);
  if (("getSetting" in _ctx ? _ctx.getSetting : unref(getSetting))("app:avatarUrl")) {
    _push(`<img class="w-full h-full object-cover"${ssrRenderAttr("src", ("getSetting" in _ctx ? _ctx.getSetting : unref(getSetting))("app:avatarUrl")?.toString())} alt="Loading..." data-v-715727ec>`);
  } else {
    _push(`<img class="w-full h-full object-cover"${ssrRenderAttr("src", _imports_0)} alt="Loading..." data-v-715727ec>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loader/Avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-715727ec"]]), { __name: "LoaderAvatar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "masonry",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    const { photos } = usePhotos();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_LoaderAvatar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen" }, _attrs))} data-v-866278bf><div class="h-svh px-1" data-v-866278bf>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 flex flex-col gap-4 items-center justify-center" data-v-866278bf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LoaderAvatar, null, null, _parent2, _scopeId));
            _push2(`<span class="loading-scan-wrapper" data-v-866278bf${_scopeId}><span class="text-base font-medium loading-scan-text" data-v-866278bf${_scopeId}> LOADING </span></span></div>`);
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
const masonry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-866278bf"]]);
export {
  masonry as default
};
