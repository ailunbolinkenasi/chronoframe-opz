import { W as _sfc_main$1 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProviderSelector",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<div class="${ssrRenderClass([[
          __props.modelValue === option.value ? "bg-primary-500/10 border-primary-500 ring-1 ring-primary-500/50" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        ], "relative cursor-pointer group rounded-xl border p-4 transition-all duration-200"])}"><div class="flex items-start justify-between mb-3">`);
        if (option.icon) {
          _push(`<div class="${ssrRenderClass([__props.modelValue === option.value ? "bg-primary-500 text-white" : "bg-white/10 text-neutral-400 group-hover:text-white", "size-10 flex items-center justify-center rounded-lg transition-colors"])}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: option.icon,
            class: "size-6"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.modelValue === option.value) {
          _push(`<div class="text-primary-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "tabler:circle-check",
            class: "size-6"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h3 class="font-medium text-white mb-1">${ssrInterpolate(_ctx.$t(option.label) || option.label)}</h3>`);
        if (option.description) {
          _push(`<p class="text-xs text-neutral-400 leading-relaxed">${ssrInterpolate(_ctx.$t(option.description) || option.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wizard/ProviderSelector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "WizardProviderSelector" });
export {
  __nuxt_component_2 as _
};
