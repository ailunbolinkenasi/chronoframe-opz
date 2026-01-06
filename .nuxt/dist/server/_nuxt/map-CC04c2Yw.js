import { _ as _sfc_main$1, a as _sfc_main$5 } from "./DashboardNavbar-DXyxgaXz.js";
import { _ as _sfc_main$2 } from "./SelectMenu-BWx3h-Kw.js";
import { _ as _sfc_main$3 } from "./FormField-CKjh6qS6.js";
import { u as useSettingsForm, _ as __nuxt_component_4 } from "./useSettingsForm-lREqFXwe.js";
import { q as useI18n, u as useHead, B as _sfc_main$4 } from "../server.mjs";
import { defineComponent, computed, withCtx, unref, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "./DashboardSidebarToggle-B_He8lib.js";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "./PopperArrow-Ddp-yvF2.js";
import "./floating-ui.vue-JO3O6Egx.js";
import "./useDirection-C-Y8mi8I.js";
import "D:/chronoframe-opz/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs";
import "./useFormControl-UP-XrpNq.js";
import "./useTypeahead-EUwWhm9r.js";
import "./utils-Dht0ZB_U.js";
import "./VisuallyHiddenInput-8qWid5cT.js";
import "./DismissableLayer-8FDXRr8x.js";
import "./useId-CmnGJZbL.js";
import "./handleAndDispatchCustomEvent-Bk_AVSSo.js";
import "./index-Cm3iXkLk.js";
import "./Input-DTvqSRuX.js";
import "./Textarea-DypkF1uq.js";
import "./RovingFocusGroup-U7ENIF_g.js";
import "./RovingFocusItem-Bp2YpNRE.js";
import "./Tabs-BLAj4WIP.js";
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
  __name: "map",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.mapAndLocation")
    });
    const {
      fields: mapFields,
      state: mapState,
      submit: submitMap,
      loading: mapLoading
    } = useSettingsForm("map");
    const {
      fields: locationFields,
      state: locationState,
      submit: submitLocation,
      loading: locationLoading
    } = useSettingsForm("location");
    const visibleMapFields = computed(() => {
      const provider = mapState.provider;
      return mapFields.value.filter((field) => {
        if (!field.ui.visibleIf) return true;
        if (field.ui.visibleIf.fieldKey === "provider") {
          return field.ui.visibleIf.value === provider;
        }
        return true;
      });
    });
    const handleMapSettingsSubmit = async () => {
      const mapData = Object.fromEntries(
        visibleMapFields.value.map((f) => [f.key, mapState[f.key]])
      );
      try {
        await submitMap(mapData);
      } catch {
      }
    };
    const handleLocationSettingsSubmit = async () => {
      const locationData = Object.fromEntries(
        locationFields.value.map((f) => [f.key, locationState[f.key]])
      );
      try {
        await submitLocation(locationData);
      } catch {
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1;
      const _component_UDashboardNavbar = _sfc_main$5;
      const _component_UCard = _sfc_main$2;
      const _component_UForm = _sfc_main$3;
      const _component_SettingField = __nuxt_component_4;
      const _component_UButton = _sfc_main$4;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("title.mapAndLocation")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("title.mapAndLocation")
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
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref($t)("title.mapAndLocation"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref($t)("title.mapAndLocation")), 1)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(mapLoading),
                    type: "submit",
                    form: "mapSettingsForm",
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
                      loading: unref(mapLoading),
                      type: "submit",
                      form: "mapSettingsForm",
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
                    id: "mapSettingsForm",
                    class: "space-y-4",
                    onSubmit: handleMapSettingsSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(visibleMapFields), (field) => {
                          _push4(ssrRenderComponent(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(mapState)[field.key],
                            "onUpdate:modelValue": (val) => unref(mapState)[field.key] = val
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(visibleMapFields), (field) => {
                            return openBlock(), createBlock(_component_SettingField, {
                              key: field.key,
                              field,
                              "model-value": unref(mapState)[field.key],
                              "onUpdate:modelValue": (val) => unref(mapState)[field.key] = val
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
                      id: "mapSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleMapSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(visibleMapFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(mapState)[field.key],
                            "onUpdate:modelValue": (val) => unref(mapState)[field.key] = val
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
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref($t)("title.location"))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref($t)("title.location")), 1)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(locationLoading),
                    type: "submit",
                    form: "locationSettingsForm",
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
                      loading: unref(locationLoading),
                      type: "submit",
                      form: "locationSettingsForm",
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
                    id: "locationSettingsForm",
                    class: "space-y-4",
                    onSubmit: handleLocationSettingsSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(locationFields), (field) => {
                          _push4(ssrRenderComponent(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(locationState)[field.key],
                            "onUpdate:modelValue": (val) => unref(locationState)[field.key] = val
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(locationFields), (field) => {
                            return openBlock(), createBlock(_component_SettingField, {
                              key: field.key,
                              field,
                              "model-value": unref(locationState)[field.key],
                              "onUpdate:modelValue": (val) => unref(locationState)[field.key] = val
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
                      id: "locationSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleLocationSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(locationFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(locationState)[field.key],
                            "onUpdate:modelValue": (val) => unref(locationState)[field.key] = val
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
                    createVNode("span", null, toDisplayString(unref($t)("title.mapAndLocation")), 1)
                  ]),
                  footer: withCtx(() => [
                    createVNode(_component_UButton, {
                      loading: unref(mapLoading),
                      type: "submit",
                      form: "mapSettingsForm",
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
                      id: "mapSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleMapSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(visibleMapFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(mapState)[field.key],
                            "onUpdate:modelValue": (val) => unref(mapState)[field.key] = val
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
                    createVNode("span", null, toDisplayString(unref($t)("title.location")), 1)
                  ]),
                  footer: withCtx(() => [
                    createVNode(_component_UButton, {
                      loading: unref(locationLoading),
                      type: "submit",
                      form: "locationSettingsForm",
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
                      id: "locationSettingsForm",
                      class: "space-y-4",
                      onSubmit: handleLocationSettingsSubmit
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(locationFields), (field) => {
                          return openBlock(), createBlock(_component_SettingField, {
                            key: field.key,
                            field,
                            "model-value": unref(locationState)[field.key],
                            "onUpdate:modelValue": (val) => unref(locationState)[field.key] = val
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
