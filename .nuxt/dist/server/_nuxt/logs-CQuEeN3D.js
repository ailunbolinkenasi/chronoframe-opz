import { _ as _sfc_main$1, a as _sfc_main$7 } from "./DashboardNavbar-DXyxgaXz.js";
import { _ as _sfc_main$2 } from "./Input-DTvqSRuX.js";
import { B as _sfc_main$3, W as _sfc_main$5, am as _sfc_main$6, _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$4 } from "./Select-VmxCjknZ.js";
import { defineComponent, ref, computed, watch, withCtx, unref, isRef, createSlots, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "./DashboardSidebarToggle-B_He8lib.js";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "pinia";
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
import "./useDirection-C-Y8mi8I.js";
import "./useFormControl-UP-XrpNq.js";
import "./PopperArrow-Ddp-yvF2.js";
import "./floating-ui.vue-JO3O6Egx.js";
import "./useFocusGuards-BzyvJ7MS.js";
import "./useTypeahead-EUwWhm9r.js";
import "./DismissableLayer-8FDXRr8x.js";
import "./utils-Cr016bia.js";
import "./useId-CmnGJZbL.js";
import "./handleAndDispatchCustomEvent-Bk_AVSSo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logs",
  __ssrInlineRender: true,
  setup(__props) {
    const logs2 = ref([]);
    const searchQuery = ref("");
    const selectedLevels = ref([]);
    const autoScroll = ref(true);
    ref(false);
    const connectionStatus = ref("");
    const logContainer = ref();
    const isInitialLoading = ref(false);
    const loadingProgress = ref(0);
    ref([]);
    ref(false);
    const logLevels = ["error", "warn", "info", "success", "debug"];
    const getLevelType = (level) => {
      const levelMap = {
        0: "error",
        1: "warn",
        2: "info",
        3: "info",
        4: "debug"
      };
      return levelMap[level] || "info";
    };
    const filteredLogs = computed(() => {
      let filtered = logs2.value;
      if (selectedLevels.value.length > 0) {
        filtered = filtered.filter((log) => {
          const logType = log.type || getLevelType(log.level);
          return selectedLevels.value.includes(logType);
        });
      }
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter((log) => {
          const content = log.args.join(" ").toLowerCase();
          const tag = log.tag.toLowerCase();
          return content.includes(query) || tag.includes(query);
        });
      }
      return filtered;
    });
    const getBadgeColor = (level) => {
      const colorMap = {
        error: "error",
        warn: "warning",
        info: "info",
        success: "success",
        debug: "neutral"
      };
      return colorMap[level] || "info";
    };
    const getLogLineStyle = (log) => {
      const baseStyle = "hover:bg-neutral-200 dark:hover:bg-neutral-800";
      const logType = log.type || getLevelType(log.level);
      const levelStyles = {
        error: "text-red-500 dark:text-red-400 border-l-2 border-red-500 font-bold",
        warn: "text-yellow-500 dark:text-yellow-400 border-l-2 border-yellow-500 font-bold",
        info: "text-neutral-400 dark:text-neutral-300 border-l-2 border-blue-500",
        success: "text-green-500 dark:text-green-400 border-l-2 border-green-500",
        debug: "text-neutral-300 dark:text-neutral-400 border-l-2 border-neutral-500"
      };
      return `${baseStyle} ${levelStyles[logType] || levelStyles.info} border-none`;
    };
    const getConnectionStatusClass = () => {
      if (connectionStatus.value.includes("实时")) {
        return "text-success";
      } else if (connectionStatus.value.includes("连接")) {
        return "text-info";
      } else if (connectionStatus.value.includes("错误")) {
        return "text-error";
      }
      return "text-warning";
    };
    const highlightSearch = (content) => {
      if (!searchQuery.value.trim()) return content;
      const query = searchQuery.value.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${query})`, "gi");
      return content.replace(
        regex,
        '<mark class="bg-yellow-300 dark:bg-yellow-700 text-black dark:text-white rounded">$1</mark>'
      );
    };
    const formatLogArgs = (args) => {
      return args.join(" ");
    };
    const toggleAutoScroll = () => {
      autoScroll.value = !autoScroll.value;
      if (autoScroll.value) {
        scrollToBottom();
      }
    };
    const scrollToBottom = async () => {
      await nextTick();
      if (logContainer.value) {
        logContainer.value.scrollTop = logContainer.value.scrollHeight;
      }
    };
    const handleScroll = () => {
      if (!logContainer.value) return;
      const { scrollTop, scrollHeight, clientHeight } = logContainer.value;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
      const isAtTop = scrollTop + clientHeight < scrollHeight - 200;
      if (isNearBottom && !autoScroll.value) {
        autoScroll.value = true;
      } else if (isAtTop && autoScroll.value) {
        autoScroll.value = false;
      }
    };
    watch(
      [selectedLevels, searchQuery],
      () => {
        if (autoScroll.value) {
          scrollToBottom();
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1;
      const _component_UDashboardNavbar = _sfc_main$7;
      const _component_UInput = _sfc_main$2;
      const _component_UButton = _sfc_main$3;
      const _component_USelect = _sfc_main$4;
      const _component_UIcon = _sfc_main$5;
      const _component_UBadge = _sfc_main$6;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: _ctx.$t("title.logs")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: _ctx.$t("title.logs")
              }, null, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1 overflow-hidden bg-neutral-100 dark:bg-neutral-950 rounded-md relative" data-v-90e8dcbf${_scopeId}><div class="px-4 py-2 border-b border-neutral-300 dark:border-neutral-900 flex items-center justify-between" data-v-90e8dcbf${_scopeId}><div data-v-90e8dcbf${_scopeId}><h2 class="text-lg font-medium text-blue-600" data-v-90e8dcbf${_scopeId}>app.log</h2><p class="text-xs text-gray-500 dark:text-gray-400" data-v-90e8dcbf${_scopeId}>`);
            if (unref(connectionStatus)) {
              _push2(`<span class="${ssrRenderClass(getConnectionStatusClass())}" data-v-90e8dcbf${_scopeId}>${ssrInterpolate(unref(connectionStatus))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p></div><div class="flex items-center gap-2" data-v-90e8dcbf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(searchQuery),
              "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
              placeholder: "搜索日志内容...",
              size: "sm",
              class: "w-48",
              icon: "tabler:search",
              ui: { trailing: "pe-1" }
            }, createSlots({ _: 2 }, [
              unref(searchQuery)?.length ? {
                name: "trailing",
                fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "link",
                      size: "sm",
                      icon: "tabler:x",
                      "aria-label": "Clear search input",
                      onClick: ($event) => searchQuery.value = ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "link",
                        size: "sm",
                        icon: "tabler:x",
                        "aria-label": "Clear search input",
                        onClick: ($event) => searchQuery.value = ""
                      }, null, 8, ["onClick"])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(selectedLevels),
              "onUpdate:modelValue": ($event) => isRef(selectedLevels) ? selectedLevels.value = $event : null,
              items: logLevels.map((level) => ({
                label: level.toUpperCase(),
                value: level
              })),
              multiple: "",
              size: "sm",
              placeholder: "过滤级别",
              class: "w-24",
              clearable: false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "tabler:arrow-bar-to-down",
              color: "neutral",
              size: "sm",
              variant: unref(autoScroll) ? "outline" : "soft",
              onClick: toggleAutoScroll
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(isInitialLoading)) {
              _push2(`<div class="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-10" data-v-90e8dcbf${_scopeId}><div class="text-center" data-v-90e8dcbf${_scopeId}><div class="mb-4" data-v-90e8dcbf${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "tabler:loader-2",
                class: "animate-spin w-8 h-8 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="text-sm text-gray-600 dark:text-gray-400 mb-2" data-v-90e8dcbf${_scopeId}> 正在加载历史日志... </div><div class="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2" data-v-90e8dcbf${_scopeId}><div class="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out" style="${ssrRenderStyle({ width: `${unref(loadingProgress)}%` })}" data-v-90e8dcbf${_scopeId}></div></div><div class="text-xs text-gray-500 dark:text-gray-400 mt-1" data-v-90e8dcbf${_scopeId}>${ssrInterpolate(Math.round(unref(loadingProgress)))}% </div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="h-[calc(100vh-10rem)] overflow-y-auto overflow-x-auto scroll-smooth font-mono text-sm relative" data-v-90e8dcbf${_scopeId}><div class="p-2 space-y-1" data-v-90e8dcbf${_scopeId}><!--[-->`);
            ssrRenderList(unref(filteredLogs), (log, index) => {
              _push2(`<div class="${ssrRenderClass(["px-2 py-0.5 rounded border-l-4", getLogLineStyle(log)])}" data-v-90e8dcbf${_scopeId}><div class="flex items-start space-x-3 text-sm" data-v-90e8dcbf${_scopeId}><span class="text-neutral-400 dark:text-neutral-500 text-xs whitespace-nowrap min-w-0 flex-shrink-0 mt-0.5" data-v-90e8dcbf${_scopeId}>${ssrInterpolate(_ctx.$dayjs(log.date).format("HH:mm:ss.SSS"))}</span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                size: "sm",
                variant: log.level <= 1 ? "solid" : "soft",
                color: getBadgeColor(log.type || getLevelType(log.level))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate((log.type || getLevelType(log.level)).toUpperCase().slice(0, 4))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((log.type || getLevelType(log.level)).toUpperCase().slice(0, 4)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex-1 min-w-0" data-v-90e8dcbf${_scopeId}><span class="whitespace-pre-wrap break-words" data-v-90e8dcbf${_scopeId}>${highlightSearch(formatLogArgs(log.args)) ?? ""}</span></div>`);
              if (log.tag) {
                _push2(`<span class="text-xs whitespace-nowrap flex-shrink-0 truncate text-neutral-400/80" data-v-90e8dcbf${_scopeId}>${ssrInterpolate(log.tag)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
            if (unref(filteredLogs).length === 0) {
              _push2(`<div class="text-center py-8 text-gray-500 dark:text-gray-400" data-v-90e8dcbf${_scopeId}>`);
              if (unref(logs2).length === 0) {
                _push2(`<div data-v-90e8dcbf${_scopeId}>等待日志数据...</div>`);
              } else {
                _push2(`<div data-v-90e8dcbf${_scopeId}>没有匹配的日志条目</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex-1 overflow-hidden bg-neutral-100 dark:bg-neutral-950 rounded-md relative" }, [
                createVNode("div", { class: "px-4 py-2 border-b border-neutral-300 dark:border-neutral-900 flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-lg font-medium text-blue-600" }, "app.log"),
                    createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, [
                      unref(connectionStatus) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: getConnectionStatusClass()
                      }, toDisplayString(unref(connectionStatus)), 3)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UInput, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "搜索日志内容...",
                      size: "sm",
                      class: "w-48",
                      icon: "tabler:search",
                      ui: { trailing: "pe-1" }
                    }, createSlots({ _: 2 }, [
                      unref(searchQuery)?.length ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "link",
                            size: "sm",
                            icon: "tabler:x",
                            "aria-label": "Clear search input",
                            onClick: ($event) => searchQuery.value = ""
                          }, null, 8, ["onClick"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_USelect, {
                      modelValue: unref(selectedLevels),
                      "onUpdate:modelValue": ($event) => isRef(selectedLevels) ? selectedLevels.value = $event : null,
                      items: logLevels.map((level) => ({
                        label: level.toUpperCase(),
                        value: level
                      })),
                      multiple: "",
                      size: "sm",
                      placeholder: "过滤级别",
                      class: "w-24",
                      clearable: false
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_UButton, {
                      icon: "tabler:arrow-bar-to-down",
                      color: "neutral",
                      size: "sm",
                      variant: unref(autoScroll) ? "outline" : "soft",
                      onClick: toggleAutoScroll
                    }, null, 8, ["variant"])
                  ])
                ]),
                unref(isInitialLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-10"
                }, [
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "tabler:loader-2",
                        class: "animate-spin w-8 h-8 text-blue-500"
                      })
                    ]),
                    createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, " 正在加载历史日志... "),
                    createVNode("div", { class: "w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2" }, [
                      createVNode("div", {
                        class: "bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out",
                        style: { width: `${unref(loadingProgress)}%` }
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(Math.round(unref(loadingProgress))) + "% ", 1)
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", {
                  ref_key: "logContainer",
                  ref: logContainer,
                  class: "h-[calc(100vh-10rem)] overflow-y-auto overflow-x-auto scroll-smooth font-mono text-sm relative",
                  onScroll: handleScroll
                }, [
                  createVNode("div", { class: "p-2 space-y-1" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredLogs), (log, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: ["px-2 py-0.5 rounded border-l-4", getLogLineStyle(log)]
                      }, [
                        createVNode("div", { class: "flex items-start space-x-3 text-sm" }, [
                          createVNode("span", { class: "text-neutral-400 dark:text-neutral-500 text-xs whitespace-nowrap min-w-0 flex-shrink-0 mt-0.5" }, toDisplayString(_ctx.$dayjs(log.date).format("HH:mm:ss.SSS")), 1),
                          createVNode(_component_UBadge, {
                            size: "sm",
                            variant: log.level <= 1 ? "solid" : "soft",
                            color: getBadgeColor(log.type || getLevelType(log.level))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString((log.type || getLevelType(log.level)).toUpperCase().slice(0, 4)), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant", "color"]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("span", {
                              class: "whitespace-pre-wrap break-words",
                              innerHTML: highlightSearch(formatLogArgs(log.args))
                            }, null, 8, ["innerHTML"])
                          ]),
                          log.tag ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs whitespace-nowrap flex-shrink-0 truncate text-neutral-400/80"
                          }, toDisplayString(log.tag), 1)) : createCommentVNode("", true)
                        ])
                      ], 2);
                    }), 128)),
                    unref(filteredLogs).length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center py-8 text-gray-500 dark:text-gray-400"
                    }, [
                      unref(logs2).length === 0 ? (openBlock(), createBlock("div", { key: 0 }, "等待日志数据...")) : (openBlock(), createBlock("div", { key: 1 }, "没有匹配的日志条目"))
                    ])) : createCommentVNode("", true)
                  ])
                ], 544)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/logs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const logs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90e8dcbf"]]);
export {
  logs as default
};
