import { Q as _sfc_main$B } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { isNil } from 'es-toolkit';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Indicator",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    value: { default: void 0 },
    icon: { default: void 0 },
    color: { default: "blue" },
    clickable: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const colorSchemes = {
      blue: {
        background: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/70 dark:to-cyan-950/70",
        border: "border-cyan-100 dark:border-cyan-900",
        text: "text-blue-400 dark:text-white"
      },
      green: {
        background: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/70 dark:to-emerald-950/70",
        border: "border-emerald-100 dark:border-emerald-900",
        text: "text-green-400 dark:text-white"
      },
      purple: {
        background: "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/70 dark:to-violet-950/70",
        border: "border-violet-100 dark:border-violet-900",
        text: "text-purple-400 dark:text-white"
      },
      orange: {
        background: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/70 dark:to-amber-950/70",
        border: "border-amber-100 dark:border-amber-900",
        text: "text-orange-400 dark:text-white"
      },
      red: {
        background: "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/70 dark:to-rose-950/70",
        border: "border-rose-100 dark:border-rose-900",
        text: "text-red-400 dark:text-white"
      },
      gray: {
        background: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/70 dark:to-slate-950/70",
        border: "border-slate-100 dark:border-slate-900",
        text: "text-gray-400 dark:text-white"
      },
      pink: {
        background: "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/70 dark:to-rose-950/70",
        border: "border-rose-100 dark:border-rose-900",
        text: "text-pink-400 dark:text-white"
      },
      yellow: {
        background: "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/70 dark:to-amber-950/70",
        border: "border-amber-100 dark:border-amber-900",
        text: "text-yellow-400 dark:text-white"
      }
    };
    const currentScheme = computed(() => colorSchemes[props.color]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "flex justify-center border rounded-lg p-4",
          unref(currentScheme).background,
          unref(currentScheme).border,
          unref(currentScheme).text,
          __props.clickable ? "cursor-pointer hover:scale-[1.01] transition-transform duration-200" : ""
        ]
      }, _attrs))}><div class="flex-1 flex items-center justify-between gap-4 overflow-hidden"><div class="flex-1 overflow-hidden">`);
      if (__props.title) {
        _push(`<p class="text-lg opacity-90 font-medium max-w-48 truncate">${ssrInterpolate(__props.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isNil)(__props.value)) {
        _push(`<p class="text-2xl font-bold max-w-full sm:max-w-1/2 truncate">${ssrInterpolate(__props.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: __props.icon,
          class: "size-8 opacity-80"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Indicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "DashboardIndicator" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Indicator-CtYja1at.mjs.map
