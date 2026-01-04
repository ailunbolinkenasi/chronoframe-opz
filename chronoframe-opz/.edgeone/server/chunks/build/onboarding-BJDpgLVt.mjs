import { v as useRoute, m as motion, Q as _sfc_main$B } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Z as publicAssetsURL } from '../nitro/nitro.mjs';
import 'pinia';
import 'vue-router';
import 'devalue';
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
import 'thumbhash';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';
import 'zod';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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
import 'node:fs/promises';
import 'exiftool-vendored';
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'ipx';

const _imports_0 = publicAssetsURL("/favicon-96x96.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const steps = [
      { label: "欢迎", route: "onboarding" },
      { label: "管理员账户", route: "onboarding-admin" },
      { label: "站点信息", route: "onboarding-site" },
      { label: "存储配置", route: "onboarding-storage" },
      { label: "地图服务", route: "onboarding-map" },
      { label: "完成", route: "onboarding-complete" }
    ];
    const currentStepIndex = computed(() => {
      return steps.findIndex((s) => s.route === route.name);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-neutral-950 text-white relative overflow-hidden selection:bg-primary-500/30" }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute inset-0 bg-[url(&#39;~/assets/images/noise.svg&#39;)] mix-blend-overlay"></div>`);
      _push(ssrRenderComponent(unref(motion).div, {
        class: "absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-primary-500/20 rounded-full blur-[120px]",
        animate: {
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }, null, _parent));
      _push(ssrRenderComponent(unref(motion).div, {
        class: "absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[100px]",
        animate: {
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        },
        transition: {
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }
      }, null, _parent));
      _push(ssrRenderComponent(unref(motion).div, {
        class: "absolute -bottom-[20%] left-[20%] w-[45vw] h-[45vw] bg-blue-500/10 rounded-full blur-[120px]",
        animate: {
          x: [0, 40, 0],
          y: [0, -40, 0]
        },
        transition: {
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 5
        }
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(motion).div, {
        class: "relative z-10 w-full max-w-6xl h-[80vh] max-h-[900px] mx-4 lg:mx-8 flex rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/40 backdrop-blur-2xl shadow-2xl shadow-black/50",
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hidden lg:flex w-80 flex-col gap-6 p-8 border-r border-white/5 bg-white/3 relative"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="ChronoFrame Logo" class="size-14 object-contain"${_scopeId}><span class="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-white/60"${_scopeId}> ChronoFrame </span></div><div class="flex-1"${_scopeId}><div class="space-y-1 relative"${_scopeId}><div class="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/5 rounded-full"${_scopeId}><div class="absolute top-0 left-0 w-full overflow-hidden transition-[height] duration-500 ease-in-out" style="${ssrRenderStyle({
              height: `${Math.min((unref(currentStepIndex) + 1) / (steps.length - 1) * 100, 100)}%`
            })}"${_scopeId}><div class="absolute inset-0" style="${ssrRenderStyle({
              background: `linear-gradient(to bottom, var(--color-primary-500) ${unref(currentStepIndex) / (unref(currentStepIndex) + 1) * 100}%, transparent)`
            })}"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(motion).div, {
              class: "absolute left-0 w-full h-20 bg-linear-to-b from-transparent via-white/60 to-transparent opacity-70",
              animate: { top: ["-100%", "100%"] },
              transition: {
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.5
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><!--[-->`);
            ssrRenderList(steps, (step, index) => {
              _push2(`<div class="relative flex items-center gap-4 py-3 pl-2 group"${_scopeId}>`);
              if (index === unref(currentStepIndex)) {
                _push2(ssrRenderComponent(unref(motion).div, {
                  "layout-id": "activeStep",
                  class: "absolute inset-0 bg-white/5 rounded-xl -z-10",
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass([[
                index < unref(currentStepIndex) ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20" : index === unref(currentStepIndex) ? "bg-neutral-900 border-primary-500 text-primary-400 shadow-lg shadow-primary-500/10" : "bg-neutral-900 border-white/10 text-neutral-500 group-hover:border-white/20"
              ], "relative z-10 size-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 border-2"])}"${_scopeId}>`);
              if (index < unref(currentStepIndex)) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "tabler:check",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
              }
              _push2(`</div><div class="flex flex-col"${_scopeId}><span class="${ssrRenderClass([[
                index <= unref(currentStepIndex) ? "text-white" : "text-neutral-500 group-hover:text-neutral-400"
              ], "text-sm font-medium transition-colors duration-300"])}"${_scopeId}>${ssrInterpolate(step.label)}</span>`);
              if (index === unref(currentStepIndex)) {
                _push2(`<span class="text-xs text-primary-400/80 font-medium"${_scopeId}> 当前进行 </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="text-xs text-neutral-500 font-medium"${_scopeId}> v${ssrInterpolate(_ctx.$config.public.VERSION)}</div></div><div class="flex-1 flex flex-col relative overflow-hidden bg-neutral-900/20"${_scopeId}><div class="lg:hidden flex items-center justify-between p-6 border-b border-white/5 bg-neutral-900/50 backdrop-blur-md z-20"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="ChronoFrame Logo" class="size-8 object-contain"${_scopeId}><span class="font-bold"${_scopeId}>ChronoFrame</span></div><div class="text-sm text-neutral-400"${_scopeId}> Step ${ssrInterpolate(unref(currentStepIndex) + 1)}/${ssrInterpolate(steps.length)}</div></div><div class="flex-1 flex flex-col overflow-hidden"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "hidden lg:flex w-80 flex-col gap-6 p-8 border-r border-white/5 bg-white/3 relative" }, [
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "ChronoFrame Logo",
                    class: "size-14 object-contain"
                  }),
                  createVNode("span", { class: "text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-white/60" }, " ChronoFrame ")
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "space-y-1 relative" }, [
                    createVNode("div", { class: "absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/5 rounded-full" }, [
                      createVNode("div", {
                        class: "absolute top-0 left-0 w-full overflow-hidden transition-[height] duration-500 ease-in-out",
                        style: {
                          height: `${Math.min((unref(currentStepIndex) + 1) / (steps.length - 1) * 100, 100)}%`
                        }
                      }, [
                        createVNode("div", {
                          class: "absolute inset-0",
                          style: {
                            background: `linear-gradient(to bottom, var(--color-primary-500) ${unref(currentStepIndex) / (unref(currentStepIndex) + 1) * 100}%, transparent)`
                          }
                        }, null, 4),
                        createVNode(unref(motion).div, {
                          class: "absolute left-0 w-full h-20 bg-linear-to-b from-transparent via-white/60 to-transparent opacity-70",
                          animate: { top: ["-100%", "100%"] },
                          transition: {
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 0.5
                          }
                        })
                      ], 4)
                    ]),
                    (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                      return createVNode("div", {
                        key: step.route,
                        class: "relative flex items-center gap-4 py-3 pl-2 group"
                      }, [
                        index === unref(currentStepIndex) ? (openBlock(), createBlock(unref(motion).div, {
                          key: 0,
                          "layout-id": "activeStep",
                          class: "absolute inset-0 bg-white/5 rounded-xl -z-10",
                          transition: { type: "spring", stiffness: 300, damping: 30 }
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: ["relative z-10 size-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 border-2", [
                            index < unref(currentStepIndex) ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20" : index === unref(currentStepIndex) ? "bg-neutral-900 border-primary-500 text-primary-400 shadow-lg shadow-primary-500/10" : "bg-neutral-900 border-white/10 text-neutral-500 group-hover:border-white/20"
                          ]]
                        }, [
                          index < unref(currentStepIndex) ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "tabler:check",
                            class: "w-5 h-5"
                          })) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(index + 1), 1))
                        ], 2),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("span", {
                            class: ["text-sm font-medium transition-colors duration-300", [
                              index <= unref(currentStepIndex) ? "text-white" : "text-neutral-500 group-hover:text-neutral-400"
                            ]]
                          }, toDisplayString(step.label), 3),
                          index === unref(currentStepIndex) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-primary-400/80 font-medium"
                          }, " 当前进行 ")) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "text-xs text-neutral-500 font-medium" }, " v" + toDisplayString(_ctx.$config.public.VERSION), 1)
              ]),
              createVNode("div", { class: "flex-1 flex flex-col relative overflow-hidden bg-neutral-900/20" }, [
                createVNode("div", { class: "lg:hidden flex items-center justify-between p-6 border-b border-white/5 bg-neutral-900/50 backdrop-blur-md z-20" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "ChronoFrame Logo",
                      class: "size-8 object-contain"
                    }),
                    createVNode("span", { class: "font-bold" }, "ChronoFrame")
                  ]),
                  createVNode("div", { class: "text-sm text-neutral-400" }, " Step " + toDisplayString(unref(currentStepIndex) + 1) + "/" + toDisplayString(steps.length), 1)
                ]),
                createVNode("div", { class: "flex-1 flex flex-col overflow-hidden" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/onboarding.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=onboarding-BJDpgLVt.mjs.map
