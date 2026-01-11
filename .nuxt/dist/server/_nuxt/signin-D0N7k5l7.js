import { q as useI18n, B as _sfc_main$2, l as __nuxt_component_0$1, u as useHead, C as useUserSession, D as useToast, v as useRoute, w as useRouter, E as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$3 } from "./Separator-C3KRTfZE.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./FormField-CKjh6qS6.js";
import { _ as _sfc_main$6 } from "./Input-DTvqSRuX.js";
import { defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-B9974QXa.js";
import { z } from "zod";
import { twMerge } from "tailwind-merge";
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
import "D:/chronoframe-opz/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "thumbhash";
import "D:/chronoframe-opz/shared/utils/u8array.ts";
import "swiper/vue";
import "swiper/modules";
import "file-type";
import "D:/chronoframe-opz/shared/types/map.ts";
import "dayjs/locale/zh-tw.js";
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
      const _component_UButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_USeparator = _sfc_main$3;
      const _component_UForm = _sfc_main$4;
      const _component_UFormField = _sfc_main$5;
      const _component_UInput = _sfc_main$6;
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-svh flex flex-col items-center justify-center p-4 overflow-hidden bg-[#F8F6F6] text-[#132843]" }, _attrs))} data-v-08628b78><div class="absolute inset-0 overflow-hidden pointer-events-none select-none" data-v-08628b78><div class="absolute top-0 left-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-[#D6DEEB] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob will-change-transform translate-z-0" data-v-08628b78></div><div class="absolute bottom-0 right-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-[#6191D3] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 will-change-transform translate-z-0" data-v-08628b78></div><div class="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] min-w-[200px] min-h-[200px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000 will-change-transform translate-z-0" data-v-08628b78></div></div><div class="relative w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/50 ring-1 ring-[#132843]/5 shadow-2xl shadow-[#132843]/10 rounded-3xl p-8 contain-layout animate-fade-in-up" data-v-08628b78><div class="mb-8 text-center space-y-2" data-v-08628b78><h1 class="text-3xl font-bold tracking-tight text-[#132843]" data-v-08628b78>${ssrInterpolate(unref($t)("auth.form.signin.title"))}</h1><p class="text-sm font-medium text-[#3966A2]/80" data-v-08628b78>${ssrInterpolate(unref($t)("auth.form.signin.subtitle", [unref(config).public.app.title]))}</p></div>`);
      _push(ssrRenderComponent(_component_AuthForm, {
        class: "auth-custom-form",
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
const signin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08628b78"]]);
export {
  signin as default
};
