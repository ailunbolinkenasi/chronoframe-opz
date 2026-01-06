import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Button-DavC7gYO.js";
import { W as _sfc_main$1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WizardStep = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      const _component_WizardButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_WizardStep, mergeProps({
        title: "欢迎使用 ChronoFrame",
        description: "跟随向导，在几分钟内设置好您的画廊。"
      }, _attrs), {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex justify-between items-center"${_scopeId}><p class="text-xs text-neutral-500 font-medium"${_scopeId}> ChronoFrame 不会收集您的任何数据。 </p>`);
            _push2(ssrRenderComponent(_component_WizardButton, {
              to: "/onboarding/admin",
              color: "primary",
              size: "lg",
              "trailing-icon": "tabler:arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 开始吧 `);
                } else {
                  return [
                    createTextVNode(" 开始吧 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex justify-between items-center" }, [
                createVNode("p", { class: "text-xs text-neutral-500 font-medium" }, " ChronoFrame 不会收集您的任何数据。 "),
                createVNode(_component_WizardButton, {
                  to: "/onboarding/admin",
                  color: "primary",
                  size: "lg",
                  "trailing-icon": "tabler:arrow-right"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 开始吧 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8"${_scopeId}><div class="text-neutral-300 space-y-4 text-lg leading-relaxed"${_scopeId}><p${_scopeId}> ChronoFrame 是一款多功能个人画廊应用程序。在您开始上传照片之前，我们需要先配置一些内容： </p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4"${_scopeId}><div class="size-12 flex items-center justify-center rounded-lg bg-primary-500/20 text-primary-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "tabler:user",
              class: "size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-medium text-white"${_scopeId}>管理员账户</h3><p class="text-sm text-neutral-400 mt-1"${_scopeId}>用于登录管理后台</p></div></div><div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4"${_scopeId}><div class="size-12 flex items-center justify-center rounded-lg bg-purple-500/20 text-purple-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "tabler:device-laptop",
              class: "size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-medium text-white"${_scopeId}>站点信息</h3><p class="text-sm text-neutral-400 mt-1"${_scopeId}>个性化您的画廊</p></div></div><div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4"${_scopeId}><div class="size-12 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "tabler:server",
              class: "size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-medium text-white"${_scopeId}>存储</h3><p class="text-sm text-neutral-400 mt-1"${_scopeId}> 将您的照片存储在本地或云端 </p></div></div><div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4"${_scopeId}><div class="size-12 flex items-center justify-center rounded-lg bg-green-500/20 text-green-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "tabler:map",
              class: "size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="font-medium text-white"${_scopeId}>地图服务</h3><p class="text-sm text-neutral-400 mt-1"${_scopeId}> 位置可视化、照片拍摄地标记 </p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("div", { class: "text-neutral-300 space-y-4 text-lg leading-relaxed" }, [
                  createVNode("p", null, " ChronoFrame 是一款多功能个人画廊应用程序。在您开始上传照片之前，我们需要先配置一些内容： ")
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4" }, [
                    createVNode("div", { class: "size-12 flex items-center justify-center rounded-lg bg-primary-500/20 text-primary-400" }, [
                      createVNode(_component_UIcon, {
                        name: "tabler:user",
                        class: "size-6"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-medium text-white" }, "管理员账户"),
                      createVNode("p", { class: "text-sm text-neutral-400 mt-1" }, "用于登录管理后台")
                    ])
                  ]),
                  createVNode("div", { class: "p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4" }, [
                    createVNode("div", { class: "size-12 flex items-center justify-center rounded-lg bg-purple-500/20 text-purple-400" }, [
                      createVNode(_component_UIcon, {
                        name: "tabler:device-laptop",
                        class: "size-6"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-medium text-white" }, "站点信息"),
                      createVNode("p", { class: "text-sm text-neutral-400 mt-1" }, "个性化您的画廊")
                    ])
                  ]),
                  createVNode("div", { class: "p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4" }, [
                    createVNode("div", { class: "size-12 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400" }, [
                      createVNode(_component_UIcon, {
                        name: "tabler:server",
                        class: "size-6"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-medium text-white" }, "存储"),
                      createVNode("p", { class: "text-sm text-neutral-400 mt-1" }, " 将您的照片存储在本地或云端 ")
                    ])
                  ]),
                  createVNode("div", { class: "p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4" }, [
                    createVNode("div", { class: "size-12 flex items-center justify-center rounded-lg bg-green-500/20 text-green-400" }, [
                      createVNode(_component_UIcon, {
                        name: "tabler:map",
                        class: "size-6"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-medium text-white" }, "地图服务"),
                      createVNode("p", { class: "text-sm text-neutral-400 mt-1" }, " 位置可视化、照片拍摄地标记 ")
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
