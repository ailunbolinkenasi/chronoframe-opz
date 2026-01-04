import { _ as _sfc_main$1, a as _sfc_main$2 } from './DashboardNavbar-DOwENe-X.mjs';
import { _ as _sfc_main$1$1 } from './SelectMenu-B-dQe02o.mjs';
import { _ as _sfc_main$1$2 } from './FormField-DW0IB9L7.mjs';
import { u as useSettingsForm, _ as __nuxt_component_4 } from './useSettingsForm-CGAlNuJo.mjs';
import { q as useI18n, u as useHead, b3 as useColorMode, B as _sfc_main$v } from './server.mjs';
import { defineComponent, computed, withCtx, unref, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './DashboardSidebarToggle-CGdUeE5a.mjs';
import './PopperArrow-Bian-NL1.mjs';
import './floating-ui.vue-JO3O6Egx.mjs';
import './useDirection-C-Y8mi8I.mjs';
import './useFormControl-UP-XrpNq.mjs';
import './useTypeahead-DPVOAvu6.mjs';
import './utils-D69C__0z.mjs';
import './VisuallyHiddenInput-Ct3sxx75.mjs';
import './DismissableLayer-nRn6FzYo.mjs';
import './useId-CmnGJZbL.mjs';
import './handleAndDispatchCustomEvent-Bk_AVSSo.mjs';
import './index-Cm3iXkLk.mjs';
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
import './Input-BDsxCbzM.mjs';
import './Textarea-BK55nnMy.mjs';
import './RovingFocusGroup-CG7oTT_a.mjs';
import './RovingFocusItem-BqUpVbau.mjs';
import './Tabs-BgfmQzYA.mjs';
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
  __name: "general",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.generalSettings")
    });
    const colorMode = useColorMode();
    const { fields, state, submit, loading } = useSettingsForm("app");
    const appFields = computed(
      () => fields.value.filter((f) => !f.key.startsWith("appearance."))
    );
    const appearanceFields = computed(
      () => fields.value.filter((f) => f.key.startsWith("appearance."))
    );
    const handleAppSettingsSubmit = async () => {
      const appData = Object.fromEntries(
        appFields.value.map((f) => [f.key, state[f.key]])
      );
      try {
        await submit(appData);
      } catch {
      }
    };
    const handleAppearanceSettingsSubmit = async () => {
      const appearanceData = Object.fromEntries(
        appearanceFields.value.map((f) => [f.key, state[f.key]])
      );
      try {
        await submit(appearanceData);
        if (state["appearance.theme"]) {
          colorMode.preference = state["appearance.theme"];
        }
      } catch {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1;
      const _component_UDashboardNavbar = _sfc_main$2;
      const _component_UCard = _sfc_main$1$1;
      const _component_UForm = _sfc_main$1$2;
      const _component_SettingField = __nuxt_component_4;
      const _component_UButton = _sfc_main$v;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("title.generalSettings")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("title.generalSettings")
              }, null, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6 max-w-6xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { variant: "outline" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref($t)("title.generalSettings"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref($t)("title.generalSettings")), 1)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(loading),
                    type: "submit",
                    form: "appSettingsForm",
                    variant: "soft",
                    icon: "tabler:device-floppy"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 保存设置 `);
                      } else {
                        return [
                          createTextVNode(" 保存设置 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      loading: unref(loading),
                      type: "submit",
                      form: "appSettingsForm",
                      variant: "soft",
                      icon: "tabler:device-floppy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 保存设置 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    id: "appSettingsForm",
                    class: "space-y-4",
                    onSubmit: handleAppSettingsSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(appFields), (field) => {
                          _push4(ssrRenderComponent(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(appFields), (field) => {
                            return openBlock(), createBlock(_component_SettingField, {
                              key: field.key,
                              field,
                              "model-value": unref(state)[field.key],
                              "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                            }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      id: "appSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleAppSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(appFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, { variant: "outline" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref($t)("title.appearanceSettings"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref($t)("title.appearanceSettings")), 1)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(loading),
                    type: "submit",
                    form: "appearanceSettingsForm",
                    variant: "soft",
                    icon: "tabler:device-floppy"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 保存设置 `);
                      } else {
                        return [
                          createTextVNode(" 保存设置 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      loading: unref(loading),
                      type: "submit",
                      form: "appearanceSettingsForm",
                      variant: "soft",
                      icon: "tabler:device-floppy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 保存设置 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    id: "appearanceSettingsForm",
                    class: "space-y-4",
                    onSubmit: handleAppearanceSettingsSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(appearanceFields), (field) => {
                          _push4(ssrRenderComponent(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(appearanceFields), (field) => {
                            return openBlock(), createBlock(_component_SettingField, {
                              key: field.key,
                              field,
                              "model-value": unref(state)[field.key],
                              "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                            }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      id: "appearanceSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleAppearanceSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(appearanceFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 max-w-6xl" }, [
                createVNode(_component_UCard, { variant: "outline" }, {
                  header: withCtx(() => [
                    createVNode("span", null, toDisplayString(unref($t)("title.generalSettings")), 1)
                  ]),
                  footer: withCtx(() => [
                    createVNode(_component_UButton, {
                      loading: unref(loading),
                      type: "submit",
                      form: "appSettingsForm",
                      variant: "soft",
                      icon: "tabler:device-floppy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 保存设置 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UForm, {
                      id: "appSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleAppSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(appFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, { variant: "outline" }, {
                  header: withCtx(() => [
                    createVNode("span", null, toDisplayString(unref($t)("title.appearanceSettings")), 1)
                  ]),
                  footer: withCtx(() => [
                    createVNode(_component_UButton, {
                      loading: unref(loading),
                      type: "submit",
                      form: "appearanceSettingsForm",
                      variant: "soft",
                      icon: "tabler:device-floppy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 保存设置 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UForm, {
                      id: "appearanceSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleAppearanceSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(appearanceFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(state)[field.key],
                            "onUpdate:modelValue": (val) => unref(state)[field.key] = val
                          }, null, 8, ["field", "model-value", "onUpdate:modelValue"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/general.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=general-BaMAO6W-.mjs.map
