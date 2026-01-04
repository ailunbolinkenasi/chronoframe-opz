import { a as _sfc_main$2 } from './FormField-DW0IB9L7.mjs';
import { ref, computed, defineComponent, mergeProps, createSlots, renderList, withCtx, renderSlot, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './Input-BDsxCbzM.mjs';
import { u as useWizardStore } from './wizard-BF4BXn6Q.mjs';
import { D as useToast } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FormField",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = _sfc_main$2;
      _push(ssrRenderComponent(_component_UFormField, mergeProps(_ctx.$attrs, { ui: {
        label: "text-neutral-300 font-medium mb-1.5",
        description: "text-neutral-500 text-xs mt-1",
        error: "text-red-400 text-xs mt-1",
        hint: "text-neutral-500 text-xs"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wizard/FormField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "WizardFormField" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$3;
      _push(ssrRenderComponent(_component_UInput, mergeProps(_ctx.$attrs, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        ui: {
          root: "relative w-full",
          base: "w-full bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 rounded-lg",
          padding: { sm: "px-3 py-2.5", md: "px-4 py-3", lg: "px-5 py-4" },
          variant: {
            outline: "shadow-sm"
          }
        },
        variant: "none"
      }, _attrs), createSlots({ _: 2 }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wizard/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "WizardInput" });
function useWizardForm(namespace) {
  const toast = useToast();
  const fields = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const store = useWizardStore();
  const state = computed({
    get: () => {
      switch (namespace) {
        case "admin":
          return store.admin;
        case "app":
          return store.site;
        case "storage":
          return store.storage;
        case "map":
          return store.map;
        default:
          return {};
      }
    },
    set: (val) => {
      switch (namespace) {
        case "admin":
          store.updateAdmin(val);
          break;
        case "app":
          store.updateSite(val);
          break;
        case "storage":
          store.updateStorage(val);
          break;
        case "map":
          store.updateMap(val);
          break;
      }
    }
  });
  const fetchSchema = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await $fetch("/api/wizard/schema", {
        query: { namespace }
      });
      fields.value = response.fields;
      const defaults = {};
      response.fields.forEach((field) => {
        defaults[field.key] = field.value ?? field.defaultValue ?? "";
      });
      const currentState = state.value;
      const newState = { ...defaults, ...currentState };
      state.value = newState;
    } catch (e) {
      error.value = e.message;
      toast.add({
        title: "Failed to load wizard schema",
        description: e.message,
        color: "error"
      });
    } finally {
      loading.value = false;
    }
  };
  const isFieldVisible = (field) => {
    if (!field.ui?.visibleIf) return true;
    const { fieldKey, value } = field.ui.visibleIf;
    return state.value[fieldKey] === value;
  };
  const getField = (key) => fields.value.find((f) => f.key === key);
  return {
    fields,
    state,
    loading,
    error,
    isFieldVisible,
    fetchSchema,
    getField
  };
}

export { __nuxt_component_4 as _, __nuxt_component_5 as a, useWizardForm as u };
//# sourceMappingURL=useWizardForm-BCJZNHQO.mjs.map
