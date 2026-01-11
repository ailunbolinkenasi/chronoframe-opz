import { _ as __nuxt_component_0, a as __nuxt_component_2$1 } from "./Button-DavC7gYO.js";
import { w as useRouter, W as _sfc_main$1 } from "../server.mjs";
import { _ as __nuxt_component_2 } from "./ProviderSelector-CtWL1oRq.js";
import { _ as _sfc_main$2 } from "./FormField-CKjh6qS6.js";
import { u as useWizardForm, _ as __nuxt_component_4, a as __nuxt_component_5 } from "./useWizardForm-CTQTF77-.js";
import { defineComponent, computed, mergeProps, withCtx, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { z } from "zod";
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
import "./Input-DTvqSRuX.js";
import "./wizard-Csv6O9p_.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const {
      fields,
      state,
      loading: fetchingSchema,
      isFieldVisible
    } = useWizardForm("map");
    const schema = computed(() => {
      const s = {};
      fields.value.forEach((field) => {
        if (!isFieldVisible(field)) return;
        let validator = z.string();
        if (field.ui.required) {
          validator = validator.min(
            1,
            `${field.label} is required`
          );
        } else {
          validator = validator.optional();
        }
        s[field.key] = validator;
      });
      return z.object(s);
    });
    function onSubmit() {
      router.push("/onboarding/complete");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WizardStep = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      const _component_WizardProviderSelector = __nuxt_component_2;
      const _component_UForm = _sfc_main$2;
      const _component_WizardFormField = __nuxt_component_4;
      const _component_WizardInput = __nuxt_component_5;
      const _component_WizardButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_WizardStep, mergeProps({
        title: "地图服务",
        description: "为地球仪视图以及照片详情中的小地图配置地图服务"
      }, _attrs), {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WizardButton, {
              type: "submit",
              form: "map-form",
              color: "primary",
              size: "lg",
              disabled: unref(fetchingSchema),
              "trailing-icon": "tabler:arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 完成设置 `);
                } else {
                  return [
                    createTextVNode(" 完成设置 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WizardButton, {
                type: "submit",
                form: "map-form",
                color: "primary",
                size: "lg",
                disabled: unref(fetchingSchema),
                "trailing-icon": "tabler:arrow-right"
              }, {
                default: withCtx(() => [
                  createTextVNode(" 完成设置 ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(fetchingSchema)) {
              _push2(`<div class="flex justify-center py-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "tabler:loader",
                class: "animate-spin w-8 h-8 text-gray-400"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(fields), (field) => {
                _push2(`<!--[-->`);
                if (field.key === "provider" && field.ui.type === "custom") {
                  _push2(ssrRenderComponent(_component_WizardProviderSelector, {
                    modelValue: unref(state)[field.key],
                    "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                    options: field.ui.options || []
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_UForm, {
                id: "map-form",
                state: unref(state),
                schema: unref(schema),
                class: "space-y-4",
                onSubmit
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(fields), (field) => {
                      _push3(`<!--[-->`);
                      if (unref(isFieldVisible)(field) && field.key !== "provider") {
                        _push3(ssrRenderComponent(_component_WizardFormField, {
                          label: _ctx.$t(field.label || ""),
                          name: field.key,
                          required: field.ui.required,
                          help: _ctx.$t(field.ui.help || "")
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (field.ui.type === "password") {
                                _push4(ssrRenderComponent(_component_WizardInput, {
                                  modelValue: unref(state)[field.key],
                                  "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                  type: "password",
                                  placeholder: _ctx.$t(field.ui.placeholder || "")
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(ssrRenderComponent(_component_WizardInput, {
                                  modelValue: unref(state)[field.key],
                                  "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                  type: "text",
                                  placeholder: _ctx.$t(field.ui.placeholder || "")
                                }, null, _parent4, _scopeId3));
                              }
                            } else {
                              return [
                                field.ui.type === "password" ? (openBlock(), createBlock(_component_WizardInput, {
                                  key: 0,
                                  modelValue: unref(state)[field.key],
                                  "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                  type: "password",
                                  placeholder: _ctx.$t(field.ui.placeholder || "")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_WizardInput, {
                                  key: 1,
                                  modelValue: unref(state)[field.key],
                                  "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                  type: "text",
                                  placeholder: _ctx.$t(field.ui.placeholder || "")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                        return openBlock(), createBlock(Fragment, {
                          key: field.key
                        }, [
                          unref(isFieldVisible)(field) && field.key !== "provider" ? (openBlock(), createBlock(_component_WizardFormField, {
                            key: 0,
                            label: _ctx.$t(field.label || ""),
                            name: field.key,
                            required: field.ui.required,
                            help: _ctx.$t(field.ui.help || "")
                          }, {
                            default: withCtx(() => [
                              field.ui.type === "password" ? (openBlock(), createBlock(_component_WizardInput, {
                                key: 0,
                                modelValue: unref(state)[field.key],
                                "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                type: "password",
                                placeholder: _ctx.$t(field.ui.placeholder || "")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_WizardInput, {
                                key: 1,
                                modelValue: unref(state)[field.key],
                                "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                type: "text",
                                placeholder: _ctx.$t(field.ui.placeholder || "")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                            ]),
                            _: 2
                          }, 1032, ["label", "name", "required", "help"])) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              unref(fetchingSchema) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-center py-8"
              }, [
                createVNode(_component_UIcon, {
                  name: "tabler:loader",
                  class: "animate-spin w-8 h-8 text-gray-400"
                })
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                  return openBlock(), createBlock(Fragment, {
                    key: field.key
                  }, [
                    field.key === "provider" && field.ui.type === "custom" ? (openBlock(), createBlock(_component_WizardProviderSelector, {
                      key: 0,
                      modelValue: unref(state)[field.key],
                      "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                      options: field.ui.options || []
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
                  ], 64);
                }), 128)),
                createVNode(_component_UForm, {
                  id: "map-form",
                  state: unref(state),
                  schema: unref(schema),
                  class: "space-y-4",
                  onSubmit
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                      return openBlock(), createBlock(Fragment, {
                        key: field.key
                      }, [
                        unref(isFieldVisible)(field) && field.key !== "provider" ? (openBlock(), createBlock(_component_WizardFormField, {
                          key: 0,
                          label: _ctx.$t(field.label || ""),
                          name: field.key,
                          required: field.ui.required,
                          help: _ctx.$t(field.ui.help || "")
                        }, {
                          default: withCtx(() => [
                            field.ui.type === "password" ? (openBlock(), createBlock(_component_WizardInput, {
                              key: 0,
                              modelValue: unref(state)[field.key],
                              "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                              type: "password",
                              placeholder: _ctx.$t(field.ui.placeholder || "")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (openBlock(), createBlock(_component_WizardInput, {
                              key: 1,
                              modelValue: unref(state)[field.key],
                              "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                              type: "text",
                              placeholder: _ctx.$t(field.ui.placeholder || "")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                          ]),
                          _: 2
                        }, 1032, ["label", "name", "required", "help"])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["state", "schema"])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
