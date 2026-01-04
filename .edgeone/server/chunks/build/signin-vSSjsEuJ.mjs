import { _ as _export_sfc, q as useI18n, u as useHead, C as useUserSession, D as useToast, v as useRoute, w as useRouter, E as useRuntimeConfig, B as _sfc_main$v, l as __nuxt_component_0$4 } from './server.mjs';
import { _ as _sfc_main$2 } from './Separator-CSvOwv24.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './FormField-DW0IB9L7.mjs';
import { _ as _sfc_main$4 } from './Input-BDsxCbzM.mjs';
import { defineComponent, ref, mergeProps, unref, reactive, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Z as publicAssetsURL } from '../nitro/nitro.mjs';
import { z } from 'zod';
import { twMerge } from 'tailwind-merge';
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
import 'perfect-debounce';
import 'thumbhash';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';
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

const _imports_0 = publicAssetsURL("/web-app-manifest-192x192.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthForm",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    subtitle: {},
    providers: {},
    class: {},
    loading: { type: Boolean }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const { t: $t } = useI18n();
    const emit = __emit;
    const schema = z.object({
      email: z.email($t("auth.form.errors.invalidEmail")),
      password: z.string().min(6, $t("auth.form.errors.invalidPassword"))
    });
    const state = reactive({
      email: void 0,
      password: ""
    });
    const onSubmit = async (event) => {
      emit("submit", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$v;
      const _component_Icon = __nuxt_component_0$4;
      const _component_USeparator = _sfc_main$2;
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$3;
      const _component_UInput = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(twMerge)("w-full space-y-6 max-w-sm", _ctx.$props.class)
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "button",
        variant: "link",
        color: "neutral",
        icon: "tabler:arrow-left",
        size: "xs",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref($t)("auth.form.action.backToHome"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref($t)("auth.form.action.backToHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-center">`);
      if (__props.icon) {
        _push(`<div class="mb-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: __props.icon,
          class: "size-8 inline-block shrink-0"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-2"><img${ssrRenderAttr("src", _imports_0)} alt="App Logo" class="size-24 rounded-full object-cover"></div>`);
      if (__props.title) {
        _push(`<div class="text-2xl font-medium text-highlighted text-pretty">${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.subtitle) {
        _push(`<div class="mt-1 text-sm text-muted text-pretty">${ssrInterpolate(__props.subtitle)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col gap-4">`);
      if (__props.providers && __props.providers.filter((item) => !!item).length > 0) {
        _push(`<div class="${ssrRenderClass(__props.providers.length > 3 ? "space-y-2" : "flex items-center gap-2")}"><!--[-->`);
        ssrRenderList(__props.providers.filter((item) => !!item), (provider) => {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            key: provider.icon
          }, { ref_for: true }, provider, { loading: __props.loading }), null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.providers && __props.providers.filter((item) => !!item).length > 0) {
        _push(ssrRenderComponent(_component_USeparator, {
          label: unref($t)("auth.form.action.or")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UForm, {
        class: "space-y-4",
        schema: unref(schema),
        state: unref(state),
        disabled: __props.loading,
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref($t)("auth.form.labels.email"),
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    autofocus: false,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      autofocus: false,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref($t)("auth.form.labels.password"),
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    autofocus: false,
                    type: "password",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).password,
                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                      autofocus: false,
                      type: "password",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              variant: "soft",
              color: "info",
              "trailing-icon": "tabler:login-2",
              block: "",
              loading: __props.loading
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref($t)("auth.form.action.continue"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref($t)("auth.form.action.continue")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UFormField, {
                label: unref($t)("auth.form.labels.email"),
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    autofocus: false,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(_component_UFormField, {
                label: unref($t)("auth.form.labels.password"),
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    autofocus: false,
                    type: "password",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(_component_UButton, {
                  type: "submit",
                  variant: "soft",
                  color: "info",
                  "trailing-icon": "tabler:login-2",
                  block: "",
                  loading: __props.loading
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref($t)("auth.form.action.continue")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AuthForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AuthForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useHead({
      title: $t("auth.form.signin.title")
    });
    const { fetch: fetchUserSession } = useUserSession();
    const config = useRuntimeConfig();
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref(false);
    const onAuthSubmit = async (event) => {
      isLoading.value = true;
      await $fetch("/api/login", {
        method: "POST",
        body: event.data
      }).then(async () => {
        await fetchUserSession();
        router.push(route.query.redirect?.toString() || "/");
      }).catch((error) => {
        console.error("Login error:", error);
        toast.add({
          color: "error",
          title: "Login Failed",
          description: error?.data?.message || "An unexpected error occurred. Please try again."
        });
      }).finally(() => {
        isLoading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthForm = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-svh flex flex-col items-center justify-center p-4 pb-12 overflow-hidden bg-[#F8F6F6] text-[#132843]" }, _attrs))} data-v-1056d991><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#D6DEEB] blur-[100px] opacity-60 pointer-events-none" data-v-1056d991></div><div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#6191D3] blur-[120px] opacity-20 pointer-events-none" data-v-1056d991></div><div class="relative w-full max-w-md bg-white/80 backdrop-blur-sm border border-[#D6DEEB] shadow-xl shadow-[#132843]/5 rounded-2xl p-6 md:p-8" data-v-1056d991><div class="mb-6 text-center" data-v-1056d991><h1 class="text-2xl font-bold text-[#132843]" data-v-1056d991>${ssrInterpolate(unref($t)("auth.form.signin.title"))}</h1><p class="mt-2 text-sm text-[#3966A2]/80" data-v-1056d991>${ssrInterpolate(unref($t)("auth.form.signin.subtitle", [unref(config).public.app.title]))}</p></div>`);
      _push(ssrRenderComponent(_component_AuthForm, {
        class: "/* === 1. 登录按钮布局 === */ [&_button[type=submit]]:mx-auto [&_button[type=submit]]:block [&_button[type=submit]]:w-fit [&_button[type=submit]]:min-w-[140px] /* === 2. 登录按钮外观 (无填充) === */ [&_button[type=submit]]:bg-transparent [&_button[type=submit]]:border-2 [&_button[type=submit]]:border-[#3966A2] [&_button[type=submit]]:text-[#3966A2] [&_button[type=submit]]:font-semibold [&_button[type=submit]]:rounded-full [&_button[type=submit]]:transition-all [&_button[type=submit]]:px-10 /* 增加一点内边距保持平衡 */ /* === 3. 【核心修改】彻底隐藏右侧图标 === */ /* 匹配所有以 i- 开头的类名 (Nuxt UI Icon 的标准写法) */ [&_button[type=submit]_[class*='i-']]:!hidden /* 匹配 raw SVG (防止图标是纯 SVG 渲染的) */ [&_button[type=submit]_svg]:!hidden /* === 4. 登录按钮悬停效果 === */ [&_button[type=submit]]:hover:bg-[#3966A2] [&_button[type=submit]]:hover:text-white [&_button[type=submit]]:hover:shadow-lg [&_button[type=submit]]:hover:shadow-[#3966A2]/20 /* === 5. 输入框样式 === */ [&_input]:bg-white [&_input]:border-[#D6DEEB] [&_input]:text-[#132843] [&_input]:rounded-lg [&_input:focus]:!border-[#3966A2] [&_input:focus]:!ring-1 [&_input:focus]:!ring-[#3966A2] [&_label]:text-[#132843] [&_label]:font-medium",
        title: "",
        subtitle: "",
        loading: unref(isLoading),
        providers: [
          unref(config).public.oauth.github.enabled && {
            icon: "tabler:brand-github",
            label: "GitHub",
            block: true,
            size: "lg",
            to: "/api/auth/github",
            external: true
          }
        ],
        onSubmit: onAuthSubmit
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1056d991"]]);

export { signin as default };
//# sourceMappingURL=signin-vSSjsEuJ.mjs.map
