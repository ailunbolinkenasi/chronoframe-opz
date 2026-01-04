import { defineComponent, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, renderSlot, createSlots, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { m as motion, B as _sfc_main$v } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Step",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(motion).div, mergeProps({
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.4, ease: "easeOut" },
        class: "flex flex-col h-full"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shrink-0 px-6 lg:px-12 py-8 border-b border-white/10"${_scopeId}><div class="max-w-2xl mx-auto space-y-2"${_scopeId}><h1 class="text-3xl font-bold tracking-tight text-white"${_scopeId}>${ssrInterpolate(__props.title)}</h1>`);
            if (__props.description) {
              _push2(`<p class="text-lg text-neutral-400"${_scopeId}>${ssrInterpolate(__props.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex-1 overflow-y-auto custom-scrollbar px-6 lg:px-12 py-8"${_scopeId}><div class="max-w-2xl mx-auto h-full"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
            if (_ctx.$slots.actions) {
              _push2(`<div class="shrink-0 px-6 lg:px-12 py-6 border-t border-white/10"${_scopeId}><div class="max-w-2xl mx-auto flex items-center justify-end gap-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "shrink-0 px-6 lg:px-12 py-8 border-b border-white/10" }, [
                createVNode("div", { class: "max-w-2xl mx-auto space-y-2" }, [
                  createVNode("h1", { class: "text-3xl font-bold tracking-tight text-white" }, toDisplayString(__props.title), 1),
                  __props.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-lg text-neutral-400"
                  }, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "flex-1 overflow-y-auto custom-scrollbar px-6 lg:px-12 py-8" }, [
                createVNode("div", { class: "max-w-2xl mx-auto h-full" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ]),
              _ctx.$slots.actions ? (openBlock(), createBlock("div", {
                key: 0,
                class: "shrink-0 px-6 lg:px-12 py-6 border-t border-white/10"
              }, [
                createVNode("div", { class: "max-w-2xl mx-auto flex items-center justify-end gap-4" }, [
                  renderSlot(_ctx.$slots, "actions")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wizard/Step.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "WizardStep" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Button",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$v;
      _push(ssrRenderComponent(_component_UButton, mergeProps(_ctx.$attrs, { ui: {
        base: "transition-all duration-300 font-medium",
        rounded: "rounded-xl",
        variant: {
          solid: "bg-linear-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 border border-white/10",
          outline: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20",
          ghost: "text-neutral-400 hover:text-white hover:bg-white/5"
        }
      } }, _attrs), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotData, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, name, slotData, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, name, slotData)
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wizard/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "WizardButton" });

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Button-DavC7gYO.mjs.map
