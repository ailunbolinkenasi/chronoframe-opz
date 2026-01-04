import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Button-DavC7gYO.mjs';
import { w as useRouter, Q as _sfc_main$B } from './server.mjs';
import { _ as _sfc_main$1 } from './FormField-DW0IB9L7.mjs';
import { u as useWizardForm, _ as __nuxt_component_4, a as __nuxt_component_5 } from './useWizardForm-BCJZNHQO.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { z } from 'zod';
import '../nitro/nitro.mjs';
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
import './Input-BDsxCbzM.mjs';
import './wizard-BF4BXn6Q.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { fields, state, loading: fetchingSchema, isFieldVisible } = useWizardForm("admin");
    const schema = z.object({
      username: z.string().min(2, "Username must be at least 2 characters"),
      email: z.email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string()
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"]
    });
    function onSubmit() {
      router.push("/onboarding/site");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WizardStep = __nuxt_component_0;
      const _component_UIcon = _sfc_main$B;
      const _component_UForm = _sfc_main$1;
      const _component_WizardFormField = __nuxt_component_4;
      const _component_WizardInput = __nuxt_component_5;
      const _component_WizardButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_WizardStep, mergeProps({
        title: "管理员账户",
        description: "创建一个管理员账户"
      }, _attrs), {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WizardButton, {
              type: "submit",
              form: "admin-form",
              color: "primary",
              size: "lg",
              disabled: unref(fetchingSchema),
              "trailing-icon": "tabler:arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 下一步 `);
                } else {
                  return [
                    createTextVNode(" 下一步 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WizardButton, {
                type: "submit",
                form: "admin-form",
                color: "primary",
                size: "lg",
                disabled: unref(fetchingSchema),
                "trailing-icon": "tabler:arrow-right"
              }, {
                default: withCtx(() => [
                  createTextVNode(" 下一步 ")
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
              _push2(ssrRenderComponent(_component_UForm, {
                id: "admin-form",
                schema: unref(schema),
                state: unref(state),
                class: "space-y-4",
                onSubmit
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(fields), (field) => {
                      _push3(`<!--[-->`);
                      if (unref(isFieldVisible)(field)) {
                        _push3(ssrRenderComponent(_component_WizardFormField, {
                          label: _ctx.$t(field.label || ""),
                          name: field.key,
                          required: field.ui.required,
                          help: _ctx.$t(field.ui.help || "")
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_WizardInput, {
                                modelValue: unref(state)[field.key],
                                "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                type: field.ui.type === "password" ? "password" : "text",
                                placeholder: field.ui.placeholder
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_WizardInput, {
                                  modelValue: unref(state)[field.key],
                                  "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                  type: field.ui.type === "password" ? "password" : "text",
                                  placeholder: field.ui.placeholder
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
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
                          unref(isFieldVisible)(field) ? (openBlock(), createBlock(_component_WizardFormField, {
                            key: 0,
                            label: _ctx.$t(field.label || ""),
                            name: field.key,
                            required: field.ui.required,
                            help: _ctx.$t(field.ui.help || "")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_WizardInput, {
                                modelValue: unref(state)[field.key],
                                "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                                type: field.ui.type === "password" ? "password" : "text",
                                placeholder: field.ui.placeholder
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
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
              ])) : (openBlock(), createBlock(_component_UForm, {
                key: 1,
                id: "admin-form",
                schema: unref(schema),
                state: unref(state),
                class: "space-y-4",
                onSubmit
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                    return openBlock(), createBlock(Fragment, {
                      key: field.key
                    }, [
                      unref(isFieldVisible)(field) ? (openBlock(), createBlock(_component_WizardFormField, {
                        key: 0,
                        label: _ctx.$t(field.label || ""),
                        name: field.key,
                        required: field.ui.required,
                        help: _ctx.$t(field.ui.help || "")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_WizardInput, {
                            modelValue: unref(state)[field.key],
                            "onUpdate:modelValue": ($event) => unref(state)[field.key] = $event,
                            type: field.ui.type === "password" ? "password" : "text",
                            placeholder: field.ui.placeholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                        ]),
                        _: 2
                      }, 1032, ["label", "name", "required", "help"])) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }, 8, ["schema", "state"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/onboarding/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-CR9W4wCE.mjs.map
