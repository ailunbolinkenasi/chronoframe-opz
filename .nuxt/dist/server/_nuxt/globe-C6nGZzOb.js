import { b as unrefElement, r as refAutoReset, t as tryOnScopeDispose, d as createEventHook, e as defaultWindow, o as onKeyStroke, f as useMounted, g as computedEager, h as useVModel, s as syncRef, m as motion, j as __nuxt_component_2, k as _sfc_main$3, a as __nuxt_component_0, l as __nuxt_component_0$1, n as useDayjs, p as __nuxt_component_0$2, q as useI18n, u as useHead, v as useRoute, w as useRouter, x as usePhotos, y as __nuxt_component_0$3, z as __nuxt_component_0$4, A as useThrottleFn } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./ProviderMarker-D5gqE7-y.js";
import { inject, provide, Fragment, getCurrentInstance, toHandlerKey, camelize, ref, computed, toRef, watchEffect, watch, nextTick, defineComponent, toRefs, h, Comment, mergeProps, cloneVNode, toValue, reactive, createBlock, openBlock, unref, normalizeStyle, withCtx, renderSlot, createCommentVNode, Teleport, watchPostEffect, mergeDefaults, createElementBlock, createVNode, withModifiers, normalizeProps, guardReactiveProps, toDisplayString, renderList, useSSRContext } from "vue";
import { o as offset, f as flip, s as shift, a as size, b as arrow, h as hide, l as limitShift, u as useFloating, c as autoUpdate } from "./floating-ui.vue-JO3O6Egx.js";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { twMerge } from "tailwind-merge";
import { onBeforeRouteLeave } from "vue-router";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "pinia";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
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
import "mapbox-gl";
import "maplibre-gl";
function createContext(providerComponentName, contextName) {
  const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
  const injectionKey = Symbol(symbolDescription);
  const injectContext = (fallback) => {
    const context2 = inject(injectionKey, fallback);
    if (context2) return context2;
    if (context2 === null) return context2;
    throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
  };
  const provideContext = (contextValue) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };
  return [injectContext, provideContext];
}
function isNullish(value) {
  return value === null || value === void 0;
}
function renderSlotFragments(children) {
  if (!children) return [];
  return children.flatMap((child) => {
    if (child.type === Fragment) return renderSlotFragments(child.children);
    return [child];
  });
}
function useEmitAsProps(emit) {
  const vm = getCurrentInstance();
  const events = vm?.type.emits;
  const result = {};
  if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
  });
  return result;
}
function useForwardExpose() {
  const instance = getCurrentInstance();
  const currentRef = ref();
  const currentElement = computed(() => {
    return ["#text", "#comment"].includes(currentRef.value?.$el.nodeName) ? currentRef.value?.$el.nextElementSibling : unrefElement(currentRef);
  });
  const localExpose = Object.assign({}, instance.exposed);
  const ret = {};
  for (const key in instance.props) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => instance.props[key]
  });
  if (Object.keys(localExpose).length > 0) for (const key in localExpose) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => localExpose[key]
  });
  Object.defineProperty(ret, "$el", {
    enumerable: true,
    configurable: true,
    get: () => instance.vnode.el
  });
  instance.exposed = ret;
  function forwardRef(ref$1) {
    currentRef.value = ref$1;
    if (!ref$1) return;
    Object.defineProperty(ret, "$el", {
      enumerable: true,
      configurable: true,
      get: () => ref$1 instanceof Element ? ref$1 : ref$1.$el
    });
    if (!(ref$1 instanceof Element) && !Object.hasOwn(ref$1, "$el")) {
      const childExposed = ref$1.$.exposed;
      const merged = Object.assign({}, ret);
      for (const key in childExposed) Object.defineProperty(merged, key, {
        enumerable: true,
        configurable: true,
        get: () => childExposed[key]
      });
      instance.exposed = merged;
    }
  }
  return {
    forwardRef,
    currentRef,
    currentElement
  };
}
function useForwardProps(props) {
  const vm = getCurrentInstance();
  const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
    const defaultValue = (vm?.type.props[curr]).default;
    if (defaultValue !== void 0) prev[curr] = defaultValue;
    return prev;
  }, {});
  const refProps = toRef(props);
  return computed(() => {
    const preservedProps = {};
    const assignedProps = vm?.vnode.props ?? {};
    Object.keys(assignedProps).forEach((key) => {
      preservedProps[camelize(key)] = assignedProps[key];
    });
    return Object.keys({
      ...defaultProps,
      ...preservedProps
    }).reduce((prev, curr) => {
      if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
      return prev;
    }, {});
  });
}
function useForwardPropsEmits(props, emit) {
  const parsedProps = useForwardProps(props);
  const emitsAsProps = emit ? useEmitAsProps(emit) : {};
  return computed(() => ({
    ...parsedProps.value,
    ...emitsAsProps
  }));
}
function useGraceArea(triggerElement, containerElement) {
  const isPointerInTransit = refAutoReset(false, 300);
  tryOnScopeDispose(() => {
    isPointerInTransit.value = false;
  });
  const pointerGraceArea = ref(null);
  const pointerExit = createEventHook();
  function handleRemoveGraceArea() {
    pointerGraceArea.value = null;
    isPointerInTransit.value = false;
  }
  function handleCreateGraceArea(event, hoverTarget) {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    pointerGraceArea.value = graceArea;
    isPointerInTransit.value = true;
  }
  watchEffect((cleanupFn) => {
    if (triggerElement.value && containerElement.value) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
      const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
      triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
      containerElement.value.addEventListener("pointerleave", handleContentLeave);
      cleanupFn(() => {
        triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
        containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
      });
    }
  });
  watchEffect((cleanupFn) => {
    if (pointerGraceArea.value) {
      const handleTrackPointerGrace = (event) => {
        if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
        const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
          handleRemoveGraceArea();
          pointerExit.trigger();
        }
      };
      triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
      cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
    }
  });
  return {
    isPointerInTransit,
    onPointerExit: pointerExit.on
  };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function useSize(element) {
  const size2 = ref();
  const width = computed(() => size2.value?.width ?? 0);
  const height = computed(() => size2.value?.height ?? 0);
  return {
    width,
    height
  };
}
function useStateMachine(initialState, machine) {
  const state = ref(initialState);
  function reducer(event) {
    const nextState = machine[state.value][event];
    return nextState ?? state.value;
  }
  const dispatch = (event) => {
    state.value = reducer(event);
  };
  return {
    state,
    dispatch
  };
}
function usePresence(present, node) {
  const stylesRef = ref({});
  const prevAnimationNameRef = ref("none");
  const prevPresentRef = ref(present);
  const initialState = present.value ? "mounted" : "unmounted";
  let timeoutId;
  const ownerWindow = node.value?.ownerDocument.defaultView ?? defaultWindow;
  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  watch(present, async (currentPresent, prevPresent) => {
    const hasPresentChanged = prevPresent !== currentPresent;
    await nextTick();
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.value;
      const currentAnimationName = getAnimationName(node.value);
      if (currentPresent) {
        dispatch("MOUNT");
      } else if (currentAnimationName === "none" || currentAnimationName === "undefined" || stylesRef.value?.display === "none") {
        dispatch("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (prevPresent && isAnimating) {
          dispatch("ANIMATION_OUT");
        } else {
          dispatch("UNMOUNT");
        }
      }
    }
  }, { immediate: true });
  const handleAnimationEnd = (event) => {
    const currentAnimationName = getAnimationName(node.value);
    const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
    state.value === "mounted" ? "enter" : "leave";
    if (event.target === node.value && isCurrentAnimation) {
      dispatch("ANIMATION_END");
      if (!prevPresentRef.value) {
        const currentFillMode = node.value.style.animationFillMode;
        node.value.style.animationFillMode = "forwards";
        timeoutId = ownerWindow?.setTimeout(() => {
          if (node.value?.style.animationFillMode === "forwards") node.value.style.animationFillMode = currentFillMode;
        });
      }
    }
    if (event.target === node.value && currentAnimationName === "none") dispatch("ANIMATION_END");
  };
  const handleAnimationStart = (event) => {
    if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
  };
  watch(node, (newNode, oldNode) => {
    if (newNode) {
      stylesRef.value = getComputedStyle(newNode);
      newNode.addEventListener("animationstart", handleAnimationStart);
      newNode.addEventListener("animationcancel", handleAnimationEnd);
      newNode.addEventListener("animationend", handleAnimationEnd);
    } else {
      dispatch("ANIMATION_END");
      if (timeoutId !== void 0) ownerWindow?.clearTimeout(timeoutId);
      oldNode?.removeEventListener("animationstart", handleAnimationStart);
      oldNode?.removeEventListener("animationcancel", handleAnimationEnd);
      oldNode?.removeEventListener("animationend", handleAnimationEnd);
    }
  }, { immediate: true });
  watch(state, () => {
    const currentAnimationName = getAnimationName(node.value);
    prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
  });
  const isPresent = computed(() => ["mounted", "unmountSuspended"].includes(state.value));
  return { isPresent };
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
var Presence_default = defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(props, { slots, expose }) {
    const { present, forceMount } = toRefs(props);
    const node = ref();
    const { isPresent } = usePresence(present, node);
    expose({ present: isPresent });
    let children = slots.default({ present: isPresent.value });
    children = renderSlotFragments(children || []);
    const instance = getCurrentInstance();
    if (children && children?.length > 1) {
      const componentName = instance?.parent?.type.name ? `<${instance.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
      ].join("\n"));
    }
    return () => {
      if (forceMount.value || present.value || isPresent.value) return h(slots.default({ present: isPresent.value })[0], { ref: (v) => {
        const el = unrefElement(v);
        if (typeof el?.hasAttribute === "undefined") return el;
        if (el?.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
        else node.value = el;
        return el;
      } });
      else return null;
    };
  }
});
const Slot = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null;
      const children = renderSlotFragments(slots.default());
      const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== Comment);
      if (firstNonCommentChildrenIndex === -1) return children;
      const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
      delete firstNonCommentChildren.props?.ref;
      const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
      const cloned = cloneVNode({
        ...firstNonCommentChildren,
        props: {}
      }, mergedProps);
      if (children.length === 1) return cloned;
      children[firstNonCommentChildrenIndex] = cloned;
      return children;
    };
  }
});
const SELF_CLOSING_TAGS = [
  "area",
  "img",
  "input"
];
const Primitive = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? "template" : props.as;
    if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
    if (asTag !== "template") return () => h(props.as, attrs, { default: slots.default });
    return () => h(Slot, attrs, { default: slots.default });
  }
});
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
  element?.value?.ownerDocument ?? globalThis?.document;
  const isPointerInsideDOMTree = ref(false);
  ref(() => {
  });
  watchEffect((cleanupFn) => {
    return;
  });
  return { onPointerDownCapture: () => {
    if (!toValue(enabled)) return;
    isPointerInsideDOMTree.value = true;
  } };
}
function useFocusOutside(onFocusOutside, element, enabled = true) {
  element?.value?.ownerDocument ?? globalThis?.document;
  const isFocusInsideDOMTree = ref(false);
  watchEffect((cleanupFn) => {
    return;
  });
  return {
    onFocusCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = true;
    },
    onBlurCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = false;
    }
  };
}
const context = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement: layerElement } = useForwardExpose();
    const ownerDocument = computed(() => layerElement.value?.ownerDocument ?? globalThis.document);
    const layers = computed(() => context.layersRoot);
    const index = computed(() => {
      return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
    });
    const isBodyPointerEventsDisabled = computed(() => {
      return context.layersWithOutsidePointerEventsDisabled.size > 0;
    });
    const isPointerEventsEnabled = computed(() => {
      const localLayers = Array.from(layers.value);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
    });
    const pointerDownOutside = usePointerDownOutside(async (event) => {
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (!isPointerEventsEnabled.value || isPointerDownOnBranch) return;
      emits("pointerDownOutside", event);
      emits("interactOutside", event);
      await nextTick();
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    const focusOutside = useFocusOutside((event) => {
      const isFocusInBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (isFocusInBranch) return;
      emits("focusOutside", event);
      emits("interactOutside", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    onKeyStroke("Escape", (event) => {
      const isHighestLayer = index.value === layers.value.size - 1;
      if (!isHighestLayer) return;
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) emits("dismiss");
    });
    watchEffect((cleanupFn) => {
      if (!layerElement.value) return;
      if (props.disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          context.originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
          ownerDocument.value.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(layerElement.value);
      }
      layers.value.add(layerElement.value);
      cleanupFn(() => {
        if (props.disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && !isNullish(context.originalBodyPointerEvents)) ownerDocument.value.body.style.pointerEvents = context.originalBodyPointerEvents;
      });
    });
    watchEffect((cleanupFn) => {
      cleanupFn(() => {
        if (!layerElement.value) return;
        layers.value.delete(layerElement.value);
        context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "data-dismissable-layer": "",
        style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
        onFocusCapture: unref(focusOutside).onFocusCapture,
        onBlurCapture: unref(focusOutside).onBlurCapture,
        onPointerdownCapture: unref(pointerDownOutside).onPointerDownCapture
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]);
    };
  }
});
var DismissableLayer_default = DismissableLayer_vue_vue_type_script_setup_true_lang_default;
var Teleport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: false,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const isMounted = useMounted();
    return (_ctx, _cache) => {
      return unref(isMounted) || _ctx.forceMount ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: _ctx.to,
        disabled: _ctx.disabled,
        defer: _ctx.defer
      }, [renderSlot(_ctx.$slots, "default")], 8, [
        "to",
        "disabled",
        "defer"
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var Teleport_default = Teleport_vue_vue_type_script_setup_true_lang_default;
const [injectPopperRootContext, providePopperRootContext] = createContext("PopperRoot");
var PopperRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(__props) {
    const anchor = ref();
    providePopperRootContext({
      anchor,
      onAnchorChange: (element) => anchor.value = element
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var PopperRoot_default = PopperRoot_vue_vue_type_script_setup_true_lang_default;
var PopperAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectPopperRootContext();
    watchPostEffect(() => {
      rootContext.onAnchorChange(props.reference ?? currentElement.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var PopperAnchor_default = PopperAnchor_vue_vue_type_script_setup_true_lang_default;
function isNotNull(value) {
  return value !== null;
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: {
        x,
        y
      } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const PopperContentPropsDefaultValue = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: true,
  align: "center",
  alignOffset: 0,
  alignFlip: true,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
const [injectPopperContentContext, providePopperContentContext] = createContext("PopperContent");
var PopperContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  }, { ...PopperContentPropsDefaultValue }),
  emits: ["placed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopperRootContext();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const floatingRef = ref();
    const arrow$1 = ref();
    const { width: arrowWidth, height: arrowHeight } = useSize();
    const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
    const collisionPadding = computed(() => {
      return typeof props.collisionPadding === "number" ? props.collisionPadding : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...props.collisionPadding
      };
    });
    const boundary = computed(() => {
      return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [props.collisionBoundary];
    });
    const detectOverflowOptions = computed(() => {
      return {
        padding: collisionPadding.value,
        boundary: boundary.value.filter(isNotNull),
        altBoundary: boundary.value.length > 0
      };
    });
    const flipOptions = computed(() => {
      return {
        mainAxis: props.sideFlip,
        crossAxis: props.alignFlip
      };
    });
    const computedMiddleware = computedEager(() => {
      return [
        offset({
          mainAxis: props.sideOffset + arrowHeight.value,
          alignmentAxis: props.alignOffset
        }),
        props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        props.avoidCollisions && shift({
          mainAxis: true,
          crossAxis: !!props.prioritizePosition,
          limiter: props.sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions.value
        }),
        !props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        size({
          ...detectOverflowOptions.value,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1.value && arrow({
          element: arrow$1.value,
          padding: props.arrowPadding
        }),
        transformOrigin({
          arrowWidth: arrowWidth.value,
          arrowHeight: arrowHeight.value
        }),
        props.hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions.value
        })
      ];
    });
    const reference = computed(() => props.reference ?? rootContext.anchor.value);
    const { floatingStyles, placement, isPositioned, middlewareData } = useFloating(reference, floatingRef, {
      strategy: props.positionStrategy,
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          layoutShift: !props.disableUpdateOnLayoutShift,
          animationFrame: props.updatePositionStrategy === "always"
        });
        return cleanup;
      },
      middleware: computedMiddleware
    });
    const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
    const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
    watchPostEffect(() => {
      if (isPositioned.value) emits("placed");
    });
    const cannotCenterArrow = computed(() => middlewareData.value.arrow?.centerOffset !== 0);
    const contentZIndex = ref("");
    watchEffect(() => {
      if (contentElement.value) contentZIndex.value = (void 0).getComputedStyle(contentElement.value).zIndex;
    });
    const arrowX = computed(() => middlewareData.value.arrow?.x ?? 0);
    const arrowY = computed(() => middlewareData.value.arrow?.y ?? 0);
    providePopperContentContext({
      placedSide,
      onArrowChange: (element) => arrow$1.value = element,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: floatingRef,
        "data-reka-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(floatingStyles),
          transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: contentZIndex.value,
          ["--reka-popper-transform-origin"]: [unref(middlewareData).transformOrigin?.x, unref(middlewareData).transformOrigin?.y].join(" "),
          ...unref(middlewareData).hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [createVNode(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, _ctx.$attrs, {
        "as-child": props.asChild,
        as: _ctx.as,
        "data-side": placedSide.value,
        "data-align": placedAlign.value,
        style: { animation: !unref(isPositioned) ? "none" : void 0 }
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
});
var PopperContent_default = PopperContent_vue_vue_type_script_setup_true_lang_default;
const [injectHoverCardRootContext, provideHoverCardRootContext] = createContext("HoverCardRoot");
var HoverCardRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    openDelay: {
      type: Number,
      required: false,
      default: 700
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 300
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openDelay, closeDelay } = toRefs(props);
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const openTimerRef = ref(0);
    const closeTimerRef = ref(0);
    const hasSelectionRef = ref(false);
    const isPointerDownOnContentRef = ref(false);
    const isPointerInTransitRef = ref(false);
    const triggerElement = ref();
    function handleOpen() {
      clearTimeout(closeTimerRef.value);
      openTimerRef.value = (void 0).setTimeout(() => open.value = true, openDelay.value);
    }
    function handleClose() {
      clearTimeout(openTimerRef.value);
      if (!hasSelectionRef.value && !isPointerDownOnContentRef.value) closeTimerRef.value = (void 0).setTimeout(() => open.value = false, closeDelay.value);
    }
    function handleDismiss() {
      open.value = false;
    }
    provideHoverCardRootContext({
      open,
      onOpenChange(value) {
        open.value = value;
      },
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      isPointerInTransitRef,
      triggerElement
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      });
    };
  }
});
var HoverCardRoot_default = HoverCardRoot_vue_vue_type_script_setup_true_lang_default;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
var HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps(props);
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(rootContext.triggerElement, contentElement);
    syncRef(rootContext.isPointerInTransitRef, isPointerInTransit, { direction: "rtl" });
    onPointerExit(() => {
      rootContext.onClose();
    });
    const containSelection = ref(false);
    let originalBodyUserSelect;
    watchEffect((cleanupFn) => {
      if (containSelection.value) {
        const body = (void 0).body;
        originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
        body.style.userSelect = "none";
        body.style.webkitUserSelect = "none";
        cleanupFn(() => {
          body.style.userSelect = originalBodyUserSelect;
          body.style.webkitUserSelect = originalBodyUserSelect;
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
        onFocusOutside: _cache[3] || (_cache[3] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"])),
        onDismiss: unref(rootContext).onDismiss
      }, {
        default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
          ...unref(forwarded),
          ..._ctx.$attrs
        }, {
          ref: unref(forwardRef),
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          style: {
            "userSelect": containSelection.value ? "text" : void 0,
            "WebkitUserSelect": containSelection.value ? "text" : void 0,
            "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
            "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
            "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
          },
          onPointerdown: _cache[0] || (_cache[0] = (event) => {
            if (event.currentTarget.contains(event.target)) containSelection.value = true;
            unref(rootContext).hasSelectionRef.value = false;
            unref(rootContext).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["data-state", "style"])]),
        _: 3
      }, 8, ["onDismiss"]);
    };
  }
});
var HoverCardContentImpl_default = HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default;
var HoverCardContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [createVNode(HoverCardContentImpl_default, mergeProps(unref(forwarded), {
          ref: unref(forwardRef),
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var HoverCardContent_default = HoverCardContent_vue_vue_type_script_setup_true_lang_default;
var HoverCardPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var HoverCardPortal_default = HoverCardPortal_vue_vue_type_script_setup_true_lang_default;
var HoverCardTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "a"
    }
  },
  setup(__props) {
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    rootContext.triggerElement = currentElement;
    function handleLeave() {
      setTimeout(() => {
        if (!rootContext.isPointerInTransitRef.value && !rootContext.open.value) rootContext.onClose();
      }, 0);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event)),
          onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(excludeTouch)(handleLeave)($event)),
          onFocus: _cache[2] || (_cache[2] = ($event) => unref(rootContext).onOpen()),
          onBlur: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "data-state"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var HoverCardTrigger_default = HoverCardTrigger_vue_vue_type_script_setup_true_lang_default;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ClusterPin",
  __ssrInlineRender: true,
  props: {
    clusterPoint: {},
    clusterCount: { default: 6 },
    markerId: { default: void 0 }
  },
  emits: ["click", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dayjs = useDayjs();
    const onClick = () => {
      emit("click", props.clusterPoint);
    };
    const clusteredPhotos = computed(
      () => props.clusterPoint.properties.clusteredPhotos || []
    );
    const pointCount = computed(
      () => props.clusterPoint.properties.point_count || 1
    );
    const representativePhoto = computed(
      () => props.clusterPoint.properties.marker
    );
    const sizeDelta = computed(() => {
      const count = pointCount.value;
      return Math.min(64, Math.max(44, 32 + Math.log(count) * 10));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MapProviderMarker = __nuxt_component_1;
      const _component_HoverCardRoot = HoverCardRoot_default;
      const _component_HoverCardTrigger = HoverCardTrigger_default;
      const _component_HoverCardPortal = HoverCardPortal_default;
      const _component_AnimatePresence = _sfc_main$3;
      const _component_HoverCardContent = HoverCardContent_default;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_MapProviderMarker, mergeProps({
        key: `marker-cluster-${unref(representativePhoto).id}`,
        "marker-id": `marker-cluster-${__props.markerId || unref(representativePhoto).id}`,
        lnglat: props.clusterPoint.geometry.coordinates
      }, _attrs), {
        marker: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HoverCardRoot, {
              "open-delay": 300,
              "close-delay": 100,
              onClose: ($event) => $event.preventDefault()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HoverCardTrigger, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(motion).div, {
                          class: "relative group cursor-pointer",
                          initial: { opacity: 0, scale: 0 },
                          animate: { opacity: 1, scale: 1 },
                          "while-hover": { scale: 1.1 },
                          "while-press": { scale: 0.95 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          },
                          onClick
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="absolute inset-0 overflow-hidden rounded-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(__nuxt_component_2, {
                                src: unref(representativePhoto).thumbnailUrl,
                                alt: unref(representativePhoto).title || `聚类 ${unref(representativePhoto).id}`,
                                thumbhash: unref(representativePhoto).thumbnailHash,
                                threshold: 0.1,
                                "root-margin": "100px",
                                class: "h-full w-full object-cover opacity-50"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="absolute inset-0 bg-gradient-to-br from-blue/40 to-purple/60 dark:from-blue/60 dark:to-purple/80"${_scopeId4}></div></div><div class="${ssrRenderClass(
                                unref(twMerge)(
                                  "relative flex flex-col justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                  "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/60 dark:hover:bg-black/80"
                                )
                              )}" style="${ssrRenderStyle({
                                width: `${unref(sizeDelta)}px`,
                                height: `${unref(sizeDelta)}px`
                              })}"${_scopeId4}><div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5"${_scopeId4}></div><span class="text-neutral-800 dark:text-white text-sm font-bold drop-shadow leading-none"${_scopeId4}>${ssrInterpolate(unref(pointCount))}</span><div class="absolute inset-0 rounded-full shadow-inner shadow-black/5"${_scopeId4}></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                                  createVNode(__nuxt_component_2, {
                                    src: unref(representativePhoto).thumbnailUrl,
                                    alt: unref(representativePhoto).title || `聚类 ${unref(representativePhoto).id}`,
                                    thumbhash: unref(representativePhoto).thumbnailHash,
                                    threshold: 0.1,
                                    "root-margin": "100px",
                                    class: "h-full w-full object-cover opacity-50"
                                  }, null, 8, ["src", "alt", "thumbhash"]),
                                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue/40 to-purple/60 dark:from-blue/60 dark:to-purple/80" })
                                ]),
                                createVNode("div", {
                                  class: unref(twMerge)(
                                    "relative flex flex-col justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                    "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/60 dark:hover:bg-black/80"
                                  ),
                                  style: {
                                    width: `${unref(sizeDelta)}px`,
                                    height: `${unref(sizeDelta)}px`
                                  }
                                }, [
                                  createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                                  createVNode("span", { class: "text-neutral-800 dark:text-white text-sm font-bold drop-shadow leading-none" }, toDisplayString(unref(pointCount)), 1),
                                  createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                                ], 6)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(motion).div, {
                            class: "relative group cursor-pointer",
                            initial: { opacity: 0, scale: 0 },
                            animate: { opacity: 1, scale: 1 },
                            "while-hover": { scale: 1.1 },
                            "while-press": { scale: 0.95 },
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 30
                            },
                            onClick
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                                createVNode(__nuxt_component_2, {
                                  src: unref(representativePhoto).thumbnailUrl,
                                  alt: unref(representativePhoto).title || `聚类 ${unref(representativePhoto).id}`,
                                  thumbhash: unref(representativePhoto).thumbnailHash,
                                  threshold: 0.1,
                                  "root-margin": "100px",
                                  class: "h-full w-full object-cover opacity-50"
                                }, null, 8, ["src", "alt", "thumbhash"]),
                                createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue/40 to-purple/60 dark:from-blue/60 dark:to-purple/80" })
                              ]),
                              createVNode("div", {
                                class: unref(twMerge)(
                                  "relative flex flex-col justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                  "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/60 dark:hover:bg-black/80"
                                ),
                                style: {
                                  width: `${unref(sizeDelta)}px`,
                                  height: `${unref(sizeDelta)}px`
                                }
                              }, [
                                createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                                createVNode("span", { class: "text-neutral-800 dark:text-white text-sm font-bold drop-shadow leading-none" }, toDisplayString(unref(pointCount)), 1),
                                createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                              ], 6)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_HoverCardPortal, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AnimatePresence, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_HoverCardContent, {
                                "as-child": "",
                                side: "top",
                                align: "center",
                                "side-offset": 8
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(motion).div, {
                                      class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                      initial: { opacity: 0, scale: 0.95, y: 4 },
                                      animate: { opacity: 1, scale: 1, y: 0 },
                                      exit: { opacity: 0, scale: 0.95, y: 4 },
                                      transition: { duration: 0.2 }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="relative overflow-hidden p-3 space-y-3"${_scopeId6}><div class="flex items-center justify-between"${_scopeId6}><h3 class="text-sm font-semibold text-neutral-900 dark:text-white"${_scopeId6}>${ssrInterpolate(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length]))}</h3><div class="text-neutral-500 dark:text-muted text-[10px]"${_scopeId6}>${ssrInterpolate(_ctx.$t("map.cluster.details"))}</div></div><div class="grid grid-cols-3 gap-2 h-full"${_scopeId6}><!--[-->`);
                                          ssrRenderList(unref(clusteredPhotos).slice(
                                            0,
                                            __props.clusterCount
                                          ), (photo, index) => {
                                            _push7(ssrRenderComponent(unref(motion).div, {
                                              key: photo.id,
                                              initial: { opacity: 0, scale: 0.5 },
                                              animate: { opacity: 1, scale: 1 },
                                              transition: {
                                                delay: index * 0.05,
                                                type: "spring",
                                                duration: 0.4,
                                                bounce: 0
                                              },
                                              class: "relative overflow-hidden rounded group"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_NuxtLink, {
                                                    class: "block w-full h-full",
                                                    to: `/${photo.id}`,
                                                    target: "_blank",
                                                    rel: "noopener"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(__nuxt_component_2, {
                                                          src: photo.thumbnailUrl,
                                                          alt: photo.title || `照片 ${photo.id}`,
                                                          thumbhash: photo.thumbnailHash,
                                                          threshold: 0.1,
                                                          "root-margin": "200px",
                                                          class: "w-full aspect-square object-cover"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(__nuxt_component_2, {
                                                            src: photo.thumbnailUrl,
                                                            alt: photo.title || `照片 ${photo.id}`,
                                                            thumbhash: photo.thumbnailHash,
                                                            threshold: 0.1,
                                                            "root-margin": "200px",
                                                            class: "w-full aspect-square object-cover"
                                                          }, null, 8, ["src", "alt", "thumbhash"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`<div class="absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none"${_scopeId7}><div class="rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center"${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(_component_Icon, {
                                                    name: "tabler:external-link",
                                                    class: "text-neutral-700 dark:text-white"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div></div>`);
                                                  if (index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount) {
                                                    _push8(`<div class="absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"${_scopeId7}><span class="text-neutral-800 dark:text-white text-lg font-bold"${_scopeId7}> +${ssrInterpolate(unref(clusteredPhotos).length - __props.clusterCount)}</span></div>`);
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                } else {
                                                  return [
                                                    createVNode(_component_NuxtLink, {
                                                      class: "block w-full h-full",
                                                      to: `/${photo.id}`,
                                                      target: "_blank",
                                                      rel: "noopener"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(__nuxt_component_2, {
                                                          src: photo.thumbnailUrl,
                                                          alt: photo.title || `照片 ${photo.id}`,
                                                          thumbhash: photo.thumbnailHash,
                                                          threshold: 0.1,
                                                          "root-margin": "200px",
                                                          class: "w-full aspect-square object-cover"
                                                        }, null, 8, ["src", "alt", "thumbhash"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to"]),
                                                    createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                      createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                        createVNode(_component_Icon, {
                                                          name: "tabler:external-link",
                                                          class: "text-neutral-700 dark:text-white"
                                                        })
                                                      ])
                                                    ]),
                                                    index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                                    }, [
                                                      createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                                    ])) : createCommentVNode("", true)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]--></div><div class="relative space-y-1"${_scopeId6}>`);
                                          if (unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city)) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "tabler:map-pin",
                                              class: "size-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="truncate"${_scopeId6}>${ssrInterpolate(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", "))}</span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          if (unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken)) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "tabler:calendar-week",
                                              class: "size-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="truncate"${_scopeId6}>${ssrInterpolate((() => {
                                              const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                              if (dates.length === 0) return "";
                                              if (dates.length === 1)
                                                return unref(dayjs)(dates[0]).format("l");
                                              return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                            })())}</span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                              createVNode("div", { class: "flex items-center justify-between" }, [
                                                createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                                createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                              ]),
                                              createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                                  0,
                                                  __props.clusterCount
                                                ), (photo, index) => {
                                                  return openBlock(), createBlock(unref(motion).div, {
                                                    key: photo.id,
                                                    initial: { opacity: 0, scale: 0.5 },
                                                    animate: { opacity: 1, scale: 1 },
                                                    transition: {
                                                      delay: index * 0.05,
                                                      type: "spring",
                                                      duration: 0.4,
                                                      bounce: 0
                                                    },
                                                    class: "relative overflow-hidden rounded group"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_NuxtLink, {
                                                        class: "block w-full h-full",
                                                        to: `/${photo.id}`,
                                                        target: "_blank",
                                                        rel: "noopener"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(__nuxt_component_2, {
                                                            src: photo.thumbnailUrl,
                                                            alt: photo.title || `照片 ${photo.id}`,
                                                            thumbhash: photo.thumbnailHash,
                                                            threshold: 0.1,
                                                            "root-margin": "200px",
                                                            class: "w-full aspect-square object-cover"
                                                          }, null, 8, ["src", "alt", "thumbhash"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["to"]),
                                                      createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                        createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                          createVNode(_component_Icon, {
                                                            name: "tabler:external-link",
                                                            class: "text-neutral-700 dark:text-white"
                                                          })
                                                        ])
                                                      ]),
                                                      index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                                      }, [
                                                        createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                                      ])) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["transition"]);
                                                }), 128))
                                              ]),
                                              createVNode("div", { class: "relative space-y-1" }, [
                                                unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:map-pin",
                                                    class: "size-4"
                                                  }),
                                                  createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                                ])) : createCommentVNode("", true),
                                                unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:calendar-week",
                                                    class: "size-4"
                                                  }),
                                                  createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                                    const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                                    if (dates.length === 0) return "";
                                                    if (dates.length === 1)
                                                      return unref(dayjs)(dates[0]).format("l");
                                                    return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                                  })()), 1)
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(motion).div, {
                                        class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                        initial: { opacity: 0, scale: 0.95, y: 4 },
                                        animate: { opacity: 1, scale: 1, y: 0 },
                                        exit: { opacity: 0, scale: 0.95, y: 4 },
                                        transition: { duration: 0.2 }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                            createVNode("div", { class: "flex items-center justify-between" }, [
                                              createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                              createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                            ]),
                                            createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                                0,
                                                __props.clusterCount
                                              ), (photo, index) => {
                                                return openBlock(), createBlock(unref(motion).div, {
                                                  key: photo.id,
                                                  initial: { opacity: 0, scale: 0.5 },
                                                  animate: { opacity: 1, scale: 1 },
                                                  transition: {
                                                    delay: index * 0.05,
                                                    type: "spring",
                                                    duration: 0.4,
                                                    bounce: 0
                                                  },
                                                  class: "relative overflow-hidden rounded group"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_NuxtLink, {
                                                      class: "block w-full h-full",
                                                      to: `/${photo.id}`,
                                                      target: "_blank",
                                                      rel: "noopener"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(__nuxt_component_2, {
                                                          src: photo.thumbnailUrl,
                                                          alt: photo.title || `照片 ${photo.id}`,
                                                          thumbhash: photo.thumbnailHash,
                                                          threshold: 0.1,
                                                          "root-margin": "200px",
                                                          class: "w-full aspect-square object-cover"
                                                        }, null, 8, ["src", "alt", "thumbhash"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to"]),
                                                    createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                      createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                        createVNode(_component_Icon, {
                                                          name: "tabler:external-link",
                                                          class: "text-neutral-700 dark:text-white"
                                                        })
                                                      ])
                                                    ]),
                                                    index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                                    }, [
                                                      createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                                    ])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["transition"]);
                                              }), 128))
                                            ]),
                                            createVNode("div", { class: "relative space-y-1" }, [
                                              unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:map-pin",
                                                  class: "size-4"
                                                }),
                                                createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                              ])) : createCommentVNode("", true),
                                              unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:calendar-week",
                                                  class: "size-4"
                                                }),
                                                createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                                  const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                                  if (dates.length === 0) return "";
                                                  if (dates.length === 1)
                                                    return unref(dayjs)(dates[0]).format("l");
                                                  return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                                })()), 1)
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_HoverCardContent, {
                                  "as-child": "",
                                  side: "top",
                                  align: "center",
                                  "side-offset": 8
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(motion).div, {
                                      class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                      initial: { opacity: 0, scale: 0.95, y: 4 },
                                      animate: { opacity: 1, scale: 1, y: 0 },
                                      exit: { opacity: 0, scale: 0.95, y: 4 },
                                      transition: { duration: 0.2 }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                          createVNode("div", { class: "flex items-center justify-between" }, [
                                            createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                            createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                          ]),
                                          createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                              0,
                                              __props.clusterCount
                                            ), (photo, index) => {
                                              return openBlock(), createBlock(unref(motion).div, {
                                                key: photo.id,
                                                initial: { opacity: 0, scale: 0.5 },
                                                animate: { opacity: 1, scale: 1 },
                                                transition: {
                                                  delay: index * 0.05,
                                                  type: "spring",
                                                  duration: 0.4,
                                                  bounce: 0
                                                },
                                                class: "relative overflow-hidden rounded group"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, {
                                                    class: "block w-full h-full",
                                                    to: `/${photo.id}`,
                                                    target: "_blank",
                                                    rel: "noopener"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(__nuxt_component_2, {
                                                        src: photo.thumbnailUrl,
                                                        alt: photo.title || `照片 ${photo.id}`,
                                                        thumbhash: photo.thumbnailHash,
                                                        threshold: 0.1,
                                                        "root-margin": "200px",
                                                        class: "w-full aspect-square object-cover"
                                                      }, null, 8, ["src", "alt", "thumbhash"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"]),
                                                  createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                    createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                      createVNode(_component_Icon, {
                                                        name: "tabler:external-link",
                                                        class: "text-neutral-700 dark:text-white"
                                                      })
                                                    ])
                                                  ]),
                                                  index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                    key: 0,
                                                    class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                                  }, [
                                                    createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                                  ])) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["transition"]);
                                            }), 128))
                                          ]),
                                          createVNode("div", { class: "relative space-y-1" }, [
                                            unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "tabler:map-pin",
                                                class: "size-4"
                                              }),
                                              createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                            ])) : createCommentVNode("", true),
                                            unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "tabler:calendar-week",
                                                class: "size-4"
                                              }),
                                              createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                                const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                                if (dates.length === 0) return "";
                                                if (dates.length === 1)
                                                  return unref(dayjs)(dates[0]).format("l");
                                                return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                              })()), 1)
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AnimatePresence, null, {
                            default: withCtx(() => [
                              createVNode(_component_HoverCardContent, {
                                "as-child": "",
                                side: "top",
                                align: "center",
                                "side-offset": 8
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(motion).div, {
                                    class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                    initial: { opacity: 0, scale: 0.95, y: 4 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 0.95, y: 4 },
                                    transition: { duration: 0.2 }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                        createVNode("div", { class: "flex items-center justify-between" }, [
                                          createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                          createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                        ]),
                                        createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                            0,
                                            __props.clusterCount
                                          ), (photo, index) => {
                                            return openBlock(), createBlock(unref(motion).div, {
                                              key: photo.id,
                                              initial: { opacity: 0, scale: 0.5 },
                                              animate: { opacity: 1, scale: 1 },
                                              transition: {
                                                delay: index * 0.05,
                                                type: "spring",
                                                duration: 0.4,
                                                bounce: 0
                                              },
                                              class: "relative overflow-hidden rounded group"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  class: "block w-full h-full",
                                                  to: `/${photo.id}`,
                                                  target: "_blank",
                                                  rel: "noopener"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(__nuxt_component_2, {
                                                      src: photo.thumbnailUrl,
                                                      alt: photo.title || `照片 ${photo.id}`,
                                                      thumbhash: photo.thumbnailHash,
                                                      threshold: 0.1,
                                                      "root-margin": "200px",
                                                      class: "w-full aspect-square object-cover"
                                                    }, null, 8, ["src", "alt", "thumbhash"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"]),
                                                createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                  createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                    createVNode(_component_Icon, {
                                                      name: "tabler:external-link",
                                                      class: "text-neutral-700 dark:text-white"
                                                    })
                                                  ])
                                                ]),
                                                index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                                }, [
                                                  createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                                ])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["transition"]);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "relative space-y-1" }, [
                                          unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "tabler:map-pin",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                          ])) : createCommentVNode("", true),
                                          unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "tabler:calendar-week",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                              const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                              if (dates.length === 0) return "";
                                              if (dates.length === 1)
                                                return unref(dayjs)(dates[0]).format("l");
                                              return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                            })()), 1)
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(unref(motion).div, {
                          class: "relative group cursor-pointer",
                          initial: { opacity: 0, scale: 0 },
                          animate: { opacity: 1, scale: 1 },
                          "while-hover": { scale: 1.1 },
                          "while-press": { scale: 0.95 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          },
                          onClick
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                              createVNode(__nuxt_component_2, {
                                src: unref(representativePhoto).thumbnailUrl,
                                alt: unref(representativePhoto).title || `聚类 ${unref(representativePhoto).id}`,
                                thumbhash: unref(representativePhoto).thumbnailHash,
                                threshold: 0.1,
                                "root-margin": "100px",
                                class: "h-full w-full object-cover opacity-50"
                              }, null, 8, ["src", "alt", "thumbhash"]),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue/40 to-purple/60 dark:from-blue/60 dark:to-purple/80" })
                            ]),
                            createVNode("div", {
                              class: unref(twMerge)(
                                "relative flex flex-col justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/60 dark:hover:bg-black/80"
                              ),
                              style: {
                                width: `${unref(sizeDelta)}px`,
                                height: `${unref(sizeDelta)}px`
                              }
                            }, [
                              createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                              createVNode("span", { class: "text-neutral-800 dark:text-white text-sm font-bold drop-shadow leading-none" }, toDisplayString(unref(pointCount)), 1),
                              createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                            ], 6)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_HoverCardPortal, null, {
                      default: withCtx(() => [
                        createVNode(_component_AnimatePresence, null, {
                          default: withCtx(() => [
                            createVNode(_component_HoverCardContent, {
                              "as-child": "",
                              side: "top",
                              align: "center",
                              "side-offset": 8
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(motion).div, {
                                  class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                  initial: { opacity: 0, scale: 0.95, y: 4 },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.95, y: 4 },
                                  transition: { duration: 0.2 }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                        createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                      ]),
                                      createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                          0,
                                          __props.clusterCount
                                        ), (photo, index) => {
                                          return openBlock(), createBlock(unref(motion).div, {
                                            key: photo.id,
                                            initial: { opacity: 0, scale: 0.5 },
                                            animate: { opacity: 1, scale: 1 },
                                            transition: {
                                              delay: index * 0.05,
                                              type: "spring",
                                              duration: 0.4,
                                              bounce: 0
                                            },
                                            class: "relative overflow-hidden rounded group"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                class: "block w-full h-full",
                                                to: `/${photo.id}`,
                                                target: "_blank",
                                                rel: "noopener"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(__nuxt_component_2, {
                                                    src: photo.thumbnailUrl,
                                                    alt: photo.title || `照片 ${photo.id}`,
                                                    thumbhash: photo.thumbnailHash,
                                                    threshold: 0.1,
                                                    "root-margin": "200px",
                                                    class: "w-full aspect-square object-cover"
                                                  }, null, 8, ["src", "alt", "thumbhash"])
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]),
                                              createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                                createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:external-link",
                                                    class: "text-neutral-700 dark:text-white"
                                                  })
                                                ])
                                              ]),
                                              index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                              }, [
                                                createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                              ])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1032, ["transition"]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "relative space-y-1" }, [
                                        unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "tabler:map-pin",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                        ])) : createCommentVNode("", true),
                                        unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "tabler:calendar-week",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                            const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                            if (dates.length === 0) return "";
                                            if (dates.length === 1)
                                              return unref(dayjs)(dates[0]).format("l");
                                            return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                          })()), 1)
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HoverCardRoot, {
                "open-delay": 300,
                "close-delay": 100,
                onClose: ($event) => $event.preventDefault()
              }, {
                default: withCtx(() => [
                  createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(unref(motion).div, {
                        class: "relative group cursor-pointer",
                        initial: { opacity: 0, scale: 0 },
                        animate: { opacity: 1, scale: 1 },
                        "while-hover": { scale: 1.1 },
                        "while-press": { scale: 0.95 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        },
                        onClick
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                            createVNode(__nuxt_component_2, {
                              src: unref(representativePhoto).thumbnailUrl,
                              alt: unref(representativePhoto).title || `聚类 ${unref(representativePhoto).id}`,
                              thumbhash: unref(representativePhoto).thumbnailHash,
                              threshold: 0.1,
                              "root-margin": "100px",
                              class: "h-full w-full object-cover opacity-50"
                            }, null, 8, ["src", "alt", "thumbhash"]),
                            createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-blue/40 to-purple/60 dark:from-blue/60 dark:to-purple/80" })
                          ]),
                          createVNode("div", {
                            class: unref(twMerge)(
                              "relative flex flex-col justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                              "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/60 dark:hover:bg-black/80"
                            ),
                            style: {
                              width: `${unref(sizeDelta)}px`,
                              height: `${unref(sizeDelta)}px`
                            }
                          }, [
                            createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                            createVNode("span", { class: "text-neutral-800 dark:text-white text-sm font-bold drop-shadow leading-none" }, toDisplayString(unref(pointCount)), 1),
                            createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                          ], 6)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HoverCardPortal, null, {
                    default: withCtx(() => [
                      createVNode(_component_AnimatePresence, null, {
                        default: withCtx(() => [
                          createVNode(_component_HoverCardContent, {
                            "as-child": "",
                            side: "top",
                            align: "center",
                            "side-offset": 8
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(motion).div, {
                                class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                initial: { opacity: 0, scale: 0.95, y: 4 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.95, y: 4 },
                                transition: { duration: 0.2 }
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "relative overflow-hidden p-3 space-y-3" }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("h3", { class: "text-sm font-semibold text-neutral-900 dark:text-white" }, toDisplayString(_ctx.$t("map.cluster.nearbyPhotos", [unref(clusteredPhotos).length])), 1),
                                      createVNode("div", { class: "text-neutral-500 dark:text-muted text-[10px]" }, toDisplayString(_ctx.$t("map.cluster.details")), 1)
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 gap-2 h-full" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(clusteredPhotos).slice(
                                        0,
                                        __props.clusterCount
                                      ), (photo, index) => {
                                        return openBlock(), createBlock(unref(motion).div, {
                                          key: photo.id,
                                          initial: { opacity: 0, scale: 0.5 },
                                          animate: { opacity: 1, scale: 1 },
                                          transition: {
                                            delay: index * 0.05,
                                            type: "spring",
                                            duration: 0.4,
                                            bounce: 0
                                          },
                                          class: "relative overflow-hidden rounded group"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              class: "block w-full h-full",
                                              to: `/${photo.id}`,
                                              target: "_blank",
                                              rel: "noopener"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(__nuxt_component_2, {
                                                  src: photo.thumbnailUrl,
                                                  alt: photo.title || `照片 ${photo.id}`,
                                                  thumbhash: photo.thumbnailHash,
                                                  threshold: 0.1,
                                                  "root-margin": "200px",
                                                  class: "w-full aspect-square object-cover"
                                                }, null, 8, ["src", "alt", "thumbhash"])
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]),
                                            createVNode("div", { class: "absolute inset-0 bg-white/30 dark:bg-black/20 duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none" }, [
                                              createVNode("div", { class: "rounded-full bg-white/80 dark:bg-black/50 p-2 backdrop-blur-sm flex justify-center items-center" }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:external-link",
                                                  class: "text-neutral-700 dark:text-white"
                                                })
                                              ])
                                            ]),
                                            index === __props.clusterCount - 1 && unref(clusteredPhotos).length > __props.clusterCount ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "absolute inset-0 bg-white/80 dark:bg-black/60 flex items-center justify-center cursor-pointer pointer-events-none"
                                            }, [
                                              createVNode("span", { class: "text-neutral-800 dark:text-white text-lg font-bold" }, " +" + toDisplayString(unref(clusteredPhotos).length - __props.clusterCount), 1)
                                            ])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["transition"]);
                                      }), 128))
                                    ]),
                                    createVNode("div", { class: "relative space-y-1" }, [
                                      unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.city) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "tabler:map-pin",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "truncate" }, toDisplayString(unref(clusteredPhotos).map((p) => p.city).filter((v, i, a) => v && a.indexOf(v) === i).join(", ")), 1)
                                      ])) : createCommentVNode("", true),
                                      unref(clusteredPhotos).length && unref(clusteredPhotos).some((p) => p.dateTaken) ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mt-2"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "tabler:calendar-week",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "truncate" }, toDisplayString((() => {
                                          const dates = unref(clusteredPhotos).map((p) => p.dateTaken).filter(Boolean).sort();
                                          if (dates.length === 0) return "";
                                          if (dates.length === 1)
                                            return unref(dayjs)(dates[0]).format("l");
                                          return `${unref(dayjs)(dates[0]).format("l")} - ${unref(dayjs)(dates[dates.length - 1]).format("l")}`;
                                        })()), 1)
                                      ])) : createCommentVNode("", true)
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/map/ClusterPin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "MapClusterPin" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PhotoPin",
  __ssrInlineRender: true,
  props: {
    clusterPoint: {},
    isSelected: { type: Boolean, default: false },
    markerId: { default: void 0 }
  },
  emits: ["click", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dayjs = useDayjs();
    const marker = computed(() => props.clusterPoint.properties.marker);
    const onClick = () => {
      emit("click", props.clusterPoint);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MapProviderMarker = __nuxt_component_1;
      const _component_HoverCardRoot = HoverCardRoot_default;
      const _component_HoverCardTrigger = HoverCardTrigger_default;
      const _component_Icon = __nuxt_component_0$1;
      const _component_HoverCardPortal = HoverCardPortal_default;
      const _component_AnimatePresence = _sfc_main$3;
      const _component_HoverCardContent = HoverCardContent_default;
      const _component_GlassButton = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MapProviderMarker, mergeProps({
        ref: "markerRef",
        key: `marker-single-${unref(marker).id}`,
        "marker-id": `marker-single-${__props.markerId || unref(marker).id}`,
        lnglat: props.clusterPoint.geometry.coordinates
      }, _attrs), {
        marker: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HoverCardRoot, {
              open: __props.isSelected || void 0,
              "open-delay": __props.isSelected ? 0 : 600,
              "close-delay": __props.isSelected ? Number.MAX_SAFE_INTEGER : 100,
              onClose: ($event) => $event.preventDefault()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HoverCardTrigger, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(motion).div, {
                          class: "relative group cursor-pointer",
                          initial: { opacity: 0, scale: 0 },
                          animate: { opacity: 1, scale: 1 },
                          "while-hover": { scale: 1.1 },
                          "while-press": { scale: 0.95 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          },
                          onClick
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (__props.isSelected) {
                                _push5(`<div class="bg-primary/20 dark:bg-primary/30 absolute -inset-1 animate-pulse rounded-full"${_scopeId4}></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="absolute inset-0 overflow-hidden rounded-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(__nuxt_component_2, {
                                src: unref(marker).thumbnailUrl,
                                alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                thumbhash: unref(marker).thumbnailHash,
                                threshold: 0.1,
                                "root-margin": "100px",
                                class: "h-full w-full object-cover opacity-50"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="absolute inset-0 bg-gradient-to-br from-green/40 to-emerald/60 dark:from-green/60 dark:to-emerald/80"${_scopeId4}></div></div><div class="${ssrRenderClass(
                                unref(twMerge)(
                                  "relative size-10 flex justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                  __props.isSelected ? "border-primary/60 bg-primary/80 shadow-primary/30 dark:border-primary/40 dark:bg-primary/90 dark:shadow-primary/50" : "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/80 dark:hover:bg-black/90"
                                )
                              )}"${_scopeId4}><div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5"${_scopeId4}></div>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "tabler:photo",
                                class: "size-5 text-neutral-700 dark:text-white drop-shadow"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="absolute inset-0 rounded-full shadow-inner shadow-black/5"${_scopeId4}></div></div>`);
                            } else {
                              return [
                                __props.isSelected ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "bg-primary/20 dark:bg-primary/30 absolute -inset-1 animate-pulse rounded-full"
                                })) : createCommentVNode("", true),
                                createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                                  createVNode(__nuxt_component_2, {
                                    src: unref(marker).thumbnailUrl,
                                    alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                    thumbhash: unref(marker).thumbnailHash,
                                    threshold: 0.1,
                                    "root-margin": "100px",
                                    class: "h-full w-full object-cover opacity-50"
                                  }, null, 8, ["src", "alt", "thumbhash"]),
                                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-green/40 to-emerald/60 dark:from-green/60 dark:to-emerald/80" })
                                ]),
                                createVNode("div", {
                                  class: unref(twMerge)(
                                    "relative size-10 flex justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                    __props.isSelected ? "border-primary/60 bg-primary/80 shadow-primary/30 dark:border-primary/40 dark:bg-primary/90 dark:shadow-primary/50" : "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/80 dark:hover:bg-black/90"
                                  )
                                }, [
                                  createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                                  createVNode(_component_Icon, {
                                    name: "tabler:photo",
                                    class: "size-5 text-neutral-700 dark:text-white drop-shadow"
                                  }),
                                  createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                                ], 2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(motion).div, {
                            class: "relative group cursor-pointer",
                            initial: { opacity: 0, scale: 0 },
                            animate: { opacity: 1, scale: 1 },
                            "while-hover": { scale: 1.1 },
                            "while-press": { scale: 0.95 },
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 30
                            },
                            onClick
                          }, {
                            default: withCtx(() => [
                              __props.isSelected ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "bg-primary/20 dark:bg-primary/30 absolute -inset-1 animate-pulse rounded-full"
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                                createVNode(__nuxt_component_2, {
                                  src: unref(marker).thumbnailUrl,
                                  alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                  thumbhash: unref(marker).thumbnailHash,
                                  threshold: 0.1,
                                  "root-margin": "100px",
                                  class: "h-full w-full object-cover opacity-50"
                                }, null, 8, ["src", "alt", "thumbhash"]),
                                createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-green/40 to-emerald/60 dark:from-green/60 dark:to-emerald/80" })
                              ]),
                              createVNode("div", {
                                class: unref(twMerge)(
                                  "relative size-10 flex justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                  __props.isSelected ? "border-primary/60 bg-primary/80 shadow-primary/30 dark:border-primary/40 dark:bg-primary/90 dark:shadow-primary/50" : "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/80 dark:hover:bg-black/90"
                                )
                              }, [
                                createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                                createVNode(_component_Icon, {
                                  name: "tabler:photo",
                                  class: "size-5 text-neutral-700 dark:text-white drop-shadow"
                                }),
                                createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                              ], 2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_HoverCardPortal, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AnimatePresence, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_HoverCardContent, {
                                "as-child": "",
                                side: "top",
                                align: "center",
                                "side-offset": 8,
                                onPointerDownOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onEscapeKeyDown: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onFocusOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onInteractOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(motion).div, {
                                      class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                      initial: { opacity: 0, scale: 0.95, y: 4 },
                                      animate: { opacity: 1, scale: 1, y: 0 },
                                      exit: { opacity: 0, scale: 0.95, y: 4 },
                                      transition: { duration: 0.2 }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (__props.isSelected) {
                                            _push7(ssrRenderComponent(_component_GlassButton, {
                                              class: "absolute top-2 right-2 z-10",
                                              size: "sm",
                                              icon: "tabler:x",
                                              onClick: ($event) => _ctx.$emit("close")
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<div class="relative h-36 overflow-hidden"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(__nuxt_component_2, {
                                            src: unref(marker).thumbnailUrl,
                                            alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                            thumbhash: unref(marker).thumbnailHash,
                                            threshold: 0.1,
                                            "root-margin": "200px",
                                            class: "w-full h-full object-cover"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="relative px-3 py-2 space-y-1"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_NuxtLink, {
                                            to: `/${unref(marker).id}`,
                                            target: "_blank",
                                            rel: "noopener",
                                            class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h3 class="flex-1 text-lg font-semibold truncate"${_scopeId7}>${ssrInterpolate(unref(marker).title || `照片 ${unref(marker).id}`)}</h3>`);
                                                _push8(ssrRenderComponent(_component_Icon, {
                                                  name: "tabler:external-link",
                                                  class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:external-link",
                                                    class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<div class="space-y-1"${_scopeId6}>`);
                                          if (unref(marker).city || unref(marker).exif?.DateTimeOriginal) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"${_scopeId6}>`);
                                            if (unref(marker).city) {
                                              _push7(`<div${_scopeId6}><span class="truncate"${_scopeId6}>${ssrInterpolate(unref(marker).city)}</span></div>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (unref(marker).city) {
                                              _push7(`<span${_scopeId6}>·</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            if (unref(marker).exif?.DateTimeOriginal) {
                                              _push7(`<div${_scopeId6}><span class="truncate"${_scopeId6}>${ssrInterpolate(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll"))}</span></div>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`</div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          if (unref(marker).exif?.Make || unref(marker).exif?.Model) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "tabler:camera",
                                              class: "size-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="truncate"${_scopeId6}>${ssrInterpolate([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" "))}</span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          if (unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "tabler:map-pin",
                                              class: "size-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="truncate font-mono"${_scopeId6}>${ssrInterpolate(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知")}, ${ssrInterpolate(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知")}</span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          if (unref(marker).exif?.GPSAltitude) {
                                            _push7(`<div class="flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "tabler:mountain",
                                              class: "size-4"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span class="truncate font-mono"${_scopeId6}>${ssrInterpolate(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`)}</span></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                              key: 0,
                                              class: "absolute top-2 right-2 z-10",
                                              size: "sm",
                                              icon: "tabler:x",
                                              onClick: ($event) => _ctx.$emit("close")
                                            }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                            createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                              createVNode(__nuxt_component_2, {
                                                src: unref(marker).thumbnailUrl,
                                                alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                                thumbhash: unref(marker).thumbnailHash,
                                                threshold: 0.1,
                                                "root-margin": "200px",
                                                class: "w-full h-full object-cover"
                                              }, null, 8, ["src", "alt", "thumbhash"])
                                            ]),
                                            createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                              createVNode(_component_NuxtLink, {
                                                to: `/${unref(marker).id}`,
                                                target: "_blank",
                                                rel: "noopener",
                                                class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:external-link",
                                                    class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["to"]),
                                              createVNode("div", { class: "space-y-1" }, [
                                                unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                                  key: 0,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                                }, [
                                                  unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                                    createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                                  ])) : createCommentVNode("", true),
                                                  unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                                  unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                                    createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                                  ])) : createCommentVNode("", true)
                                                ])) : createCommentVNode("", true),
                                                unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:camera",
                                                    class: "size-4"
                                                  }),
                                                  createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                                ])) : createCommentVNode("", true),
                                                unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                                  key: 2,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:map-pin",
                                                    class: "size-4"
                                                  }),
                                                  createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                                ])) : createCommentVNode("", true),
                                                unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                                  key: 3,
                                                  class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: "tabler:mountain",
                                                    class: "size-4"
                                                  }),
                                                  createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(motion).div, {
                                        class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                        initial: { opacity: 0, scale: 0.95, y: 4 },
                                        animate: { opacity: 1, scale: 1, y: 0 },
                                        exit: { opacity: 0, scale: 0.95, y: 4 },
                                        transition: { duration: 0.2 }
                                      }, {
                                        default: withCtx(() => [
                                          __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                            key: 0,
                                            class: "absolute top-2 right-2 z-10",
                                            size: "sm",
                                            icon: "tabler:x",
                                            onClick: ($event) => _ctx.$emit("close")
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                            createVNode(__nuxt_component_2, {
                                              src: unref(marker).thumbnailUrl,
                                              alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                              thumbhash: unref(marker).thumbnailHash,
                                              threshold: 0.1,
                                              "root-margin": "200px",
                                              class: "w-full h-full object-cover"
                                            }, null, 8, ["src", "alt", "thumbhash"])
                                          ]),
                                          createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                            createVNode(_component_NuxtLink, {
                                              to: `/${unref(marker).id}`,
                                              target: "_blank",
                                              rel: "noopener",
                                              class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                                createVNode(_component_Icon, {
                                                  name: "tabler:external-link",
                                                  class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["to"]),
                                            createVNode("div", { class: "space-y-1" }, [
                                              unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                              }, [
                                                unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                                  createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                                ])) : createCommentVNode("", true),
                                                unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                                unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                                  createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                                ])) : createCommentVNode("", true)
                                              ])) : createCommentVNode("", true),
                                              unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                                key: 1,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:camera",
                                                  class: "size-4"
                                                }),
                                                createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                              ])) : createCommentVNode("", true),
                                              unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                                key: 2,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:map-pin",
                                                  class: "size-4"
                                                }),
                                                createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                              ])) : createCommentVNode("", true),
                                              unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                                key: 3,
                                                class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: "tabler:mountain",
                                                  class: "size-4"
                                                }),
                                                createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_HoverCardContent, {
                                  "as-child": "",
                                  side: "top",
                                  align: "center",
                                  "side-offset": 8,
                                  onPointerDownOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                  onEscapeKeyDown: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                  onFocusOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                  onInteractOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(motion).div, {
                                      class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                      initial: { opacity: 0, scale: 0.95, y: 4 },
                                      animate: { opacity: 1, scale: 1, y: 0 },
                                      exit: { opacity: 0, scale: 0.95, y: 4 },
                                      transition: { duration: 0.2 }
                                    }, {
                                      default: withCtx(() => [
                                        __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                          key: 0,
                                          class: "absolute top-2 right-2 z-10",
                                          size: "sm",
                                          icon: "tabler:x",
                                          onClick: ($event) => _ctx.$emit("close")
                                        }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                          createVNode(__nuxt_component_2, {
                                            src: unref(marker).thumbnailUrl,
                                            alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                            thumbhash: unref(marker).thumbnailHash,
                                            threshold: 0.1,
                                            "root-margin": "200px",
                                            class: "w-full h-full object-cover"
                                          }, null, 8, ["src", "alt", "thumbhash"])
                                        ]),
                                        createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                          createVNode(_component_NuxtLink, {
                                            to: `/${unref(marker).id}`,
                                            target: "_blank",
                                            rel: "noopener",
                                            class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                              createVNode(_component_Icon, {
                                                name: "tabler:external-link",
                                                class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["to"]),
                                          createVNode("div", { class: "space-y-1" }, [
                                            unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                            }, [
                                              unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                              ])) : createCommentVNode("", true),
                                              unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                              unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                                createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                              ])) : createCommentVNode("", true)
                                            ])) : createCommentVNode("", true),
                                            unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "tabler:camera",
                                                class: "size-4"
                                              }),
                                              createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                            ])) : createCommentVNode("", true),
                                            unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                              key: 2,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "tabler:map-pin",
                                                class: "size-4"
                                              }),
                                              createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                            ])) : createCommentVNode("", true),
                                            unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                              key: 3,
                                              class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                            }, [
                                              createVNode(_component_Icon, {
                                                name: "tabler:mountain",
                                                class: "size-4"
                                              }),
                                              createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onPointerDownOutside", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AnimatePresence, null, {
                            default: withCtx(() => [
                              createVNode(_component_HoverCardContent, {
                                "as-child": "",
                                side: "top",
                                align: "center",
                                "side-offset": 8,
                                onPointerDownOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onEscapeKeyDown: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onFocusOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                                onInteractOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(motion).div, {
                                    class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                    initial: { opacity: 0, scale: 0.95, y: 4 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 0.95, y: 4 },
                                    transition: { duration: 0.2 }
                                  }, {
                                    default: withCtx(() => [
                                      __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                        key: 0,
                                        class: "absolute top-2 right-2 z-10",
                                        size: "sm",
                                        icon: "tabler:x",
                                        onClick: ($event) => _ctx.$emit("close")
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                      createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                        createVNode(__nuxt_component_2, {
                                          src: unref(marker).thumbnailUrl,
                                          alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                          thumbhash: unref(marker).thumbnailHash,
                                          threshold: 0.1,
                                          "root-margin": "200px",
                                          class: "w-full h-full object-cover"
                                        }, null, 8, ["src", "alt", "thumbhash"])
                                      ]),
                                      createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                        createVNode(_component_NuxtLink, {
                                          to: `/${unref(marker).id}`,
                                          target: "_blank",
                                          rel: "noopener",
                                          class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                            createVNode(_component_Icon, {
                                              name: "tabler:external-link",
                                              class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["to"]),
                                        createVNode("div", { class: "space-y-1" }, [
                                          unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                          }, [
                                            unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                            ])) : createCommentVNode("", true),
                                            unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                            unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                              createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                            ])) : createCommentVNode("", true)
                                          ])) : createCommentVNode("", true),
                                          unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "tabler:camera",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                          ])) : createCommentVNode("", true),
                                          unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                            key: 2,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "tabler:map-pin",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                          ])) : createCommentVNode("", true),
                                          unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                            key: 3,
                                            class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: "tabler:mountain",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onPointerDownOutside", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(unref(motion).div, {
                          class: "relative group cursor-pointer",
                          initial: { opacity: 0, scale: 0 },
                          animate: { opacity: 1, scale: 1 },
                          "while-hover": { scale: 1.1 },
                          "while-press": { scale: 0.95 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          },
                          onClick
                        }, {
                          default: withCtx(() => [
                            __props.isSelected ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "bg-primary/20 dark:bg-primary/30 absolute -inset-1 animate-pulse rounded-full"
                            })) : createCommentVNode("", true),
                            createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                              createVNode(__nuxt_component_2, {
                                src: unref(marker).thumbnailUrl,
                                alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                thumbhash: unref(marker).thumbnailHash,
                                threshold: 0.1,
                                "root-margin": "100px",
                                class: "h-full w-full object-cover opacity-50"
                              }, null, 8, ["src", "alt", "thumbhash"]),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-green/40 to-emerald/60 dark:from-green/60 dark:to-emerald/80" })
                            ]),
                            createVNode("div", {
                              class: unref(twMerge)(
                                "relative size-10 flex justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                                __props.isSelected ? "border-primary/60 bg-primary/80 shadow-primary/30 dark:border-primary/40 dark:bg-primary/90 dark:shadow-primary/50" : "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/80 dark:hover:bg-black/90"
                              )
                            }, [
                              createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                              createVNode(_component_Icon, {
                                name: "tabler:photo",
                                class: "size-5 text-neutral-700 dark:text-white drop-shadow"
                              }),
                              createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                            ], 2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_HoverCardPortal, null, {
                      default: withCtx(() => [
                        createVNode(_component_AnimatePresence, null, {
                          default: withCtx(() => [
                            createVNode(_component_HoverCardContent, {
                              "as-child": "",
                              side: "top",
                              align: "center",
                              "side-offset": 8,
                              onPointerDownOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                              onEscapeKeyDown: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                              onFocusOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                              onInteractOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(motion).div, {
                                  class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                  initial: { opacity: 0, scale: 0.95, y: 4 },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.95, y: 4 },
                                  transition: { duration: 0.2 }
                                }, {
                                  default: withCtx(() => [
                                    __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                      key: 0,
                                      class: "absolute top-2 right-2 z-10",
                                      size: "sm",
                                      icon: "tabler:x",
                                      onClick: ($event) => _ctx.$emit("close")
                                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                    createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                      createVNode(__nuxt_component_2, {
                                        src: unref(marker).thumbnailUrl,
                                        alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                        thumbhash: unref(marker).thumbnailHash,
                                        threshold: 0.1,
                                        "root-margin": "200px",
                                        class: "w-full h-full object-cover"
                                      }, null, 8, ["src", "alt", "thumbhash"])
                                    ]),
                                    createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                      createVNode(_component_NuxtLink, {
                                        to: `/${unref(marker).id}`,
                                        target: "_blank",
                                        rel: "noopener",
                                        class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                          createVNode(_component_Icon, {
                                            name: "tabler:external-link",
                                            class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["to"]),
                                      createVNode("div", { class: "space-y-1" }, [
                                        unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                        }, [
                                          unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                          ])) : createCommentVNode("", true),
                                          unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                          unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                            createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                          ])) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true),
                                        unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "tabler:camera",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                        ])) : createCommentVNode("", true),
                                        unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "tabler:map-pin",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                        ])) : createCommentVNode("", true),
                                        unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                          key: 3,
                                          class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: "tabler:mountain",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onPointerDownOutside", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HoverCardRoot, {
                open: __props.isSelected || void 0,
                "open-delay": __props.isSelected ? 0 : 600,
                "close-delay": __props.isSelected ? Number.MAX_SAFE_INTEGER : 100,
                onClose: ($event) => $event.preventDefault()
              }, {
                default: withCtx(() => [
                  createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(unref(motion).div, {
                        class: "relative group cursor-pointer",
                        initial: { opacity: 0, scale: 0 },
                        animate: { opacity: 1, scale: 1 },
                        "while-hover": { scale: 1.1 },
                        "while-press": { scale: 0.95 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        },
                        onClick
                      }, {
                        default: withCtx(() => [
                          __props.isSelected ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "bg-primary/20 dark:bg-primary/30 absolute -inset-1 animate-pulse rounded-full"
                          })) : createCommentVNode("", true),
                          createVNode("div", { class: "absolute inset-0 overflow-hidden rounded-full" }, [
                            createVNode(__nuxt_component_2, {
                              src: unref(marker).thumbnailUrl,
                              alt: unref(marker).title || `照片 ${unref(marker).id}`,
                              thumbhash: unref(marker).thumbnailHash,
                              threshold: 0.1,
                              "root-margin": "100px",
                              class: "h-full w-full object-cover opacity-50"
                            }, null, 8, ["src", "alt", "thumbhash"]),
                            createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-green/40 to-emerald/60 dark:from-green/60 dark:to-emerald/80" })
                          ]),
                          createVNode("div", {
                            class: unref(twMerge)(
                              "relative size-10 flex justify-center items-center rounded-full border shadow-lg hover:shadow-xl",
                              __props.isSelected ? "border-primary/60 bg-primary/80 shadow-primary/30 dark:border-primary/40 dark:bg-primary/90 dark:shadow-primary/50" : "border-white/50 bg-white/80 hover:bg-white/90 dark:border-white/30 dark:bg-black/80 dark:hover:bg-black/90"
                            )
                          }, [
                            createVNode("div", { class: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" }),
                            createVNode(_component_Icon, {
                              name: "tabler:photo",
                              class: "size-5 text-neutral-700 dark:text-white drop-shadow"
                            }),
                            createVNode("div", { class: "absolute inset-0 rounded-full shadow-inner shadow-black/5" })
                          ], 2)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_HoverCardPortal, null, {
                    default: withCtx(() => [
                      createVNode(_component_AnimatePresence, null, {
                        default: withCtx(() => [
                          createVNode(_component_HoverCardContent, {
                            "as-child": "",
                            side: "top",
                            align: "center",
                            "side-offset": 8,
                            onPointerDownOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                            onEscapeKeyDown: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                            onFocusOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0,
                            onInteractOutside: ($event) => __props.isSelected ? $event.preventDefault() : void 0
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(motion).div, {
                                class: "bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-lg w-xs max-w-xs overflow-hidden relative",
                                initial: { opacity: 0, scale: 0.95, y: 4 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.95, y: 4 },
                                transition: { duration: 0.2 }
                              }, {
                                default: withCtx(() => [
                                  __props.isSelected ? (openBlock(), createBlock(_component_GlassButton, {
                                    key: 0,
                                    class: "absolute top-2 right-2 z-10",
                                    size: "sm",
                                    icon: "tabler:x",
                                    onClick: ($event) => _ctx.$emit("close")
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative h-36 overflow-hidden" }, [
                                    createVNode(__nuxt_component_2, {
                                      src: unref(marker).thumbnailUrl,
                                      alt: unref(marker).title || `照片 ${unref(marker).id}`,
                                      thumbhash: unref(marker).thumbnailHash,
                                      threshold: 0.1,
                                      "root-margin": "200px",
                                      class: "w-full h-full object-cover"
                                    }, null, 8, ["src", "alt", "thumbhash"])
                                  ]),
                                  createVNode("div", { class: "relative px-3 py-2 space-y-1" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: `/${unref(marker).id}`,
                                      target: "_blank",
                                      rel: "noopener",
                                      class: "flex items-center gap-2 text-neutral-900 dark:text-white group/link"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { class: "flex-1 text-lg font-semibold truncate" }, toDisplayString(unref(marker).title || `照片 ${unref(marker).id}`), 1),
                                        createVNode(_component_Icon, {
                                          name: "tabler:external-link",
                                          class: "size-4 text-neutral-500 dark:text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"]),
                                    createVNode("div", { class: "space-y-1" }, [
                                      unref(marker).city || unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted font-medium mb-2"
                                      }, [
                                        unref(marker).city ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode("span", { class: "truncate" }, toDisplayString(unref(marker).city), 1)
                                        ])) : createCommentVNode("", true),
                                        unref(marker).city ? (openBlock(), createBlock("span", { key: 1 }, "·")) : createCommentVNode("", true),
                                        unref(marker).exif?.DateTimeOriginal ? (openBlock(), createBlock("div", { key: 2 }, [
                                          createVNode("span", { class: "truncate" }, toDisplayString(unref(dayjs)(unref(marker).exif.DateTimeOriginal).format("ll")), 1)
                                        ])) : createCommentVNode("", true)
                                      ])) : createCommentVNode("", true),
                                      unref(marker).exif?.Make || unref(marker).exif?.Model ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "tabler:camera",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "truncate" }, toDisplayString([unref(marker).exif?.Make, unref(marker).exif?.Model].filter(Boolean).join(" ")), 1)
                                      ])) : createCommentVNode("", true),
                                      unref(marker).exif?.GPSLatitude || unref(marker).exif?.GPSLongitude ? (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "tabler:map-pin",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "truncate font-mono" }, toDisplayString(unref(marker).exif?.GPSLatitude ? `${Math.abs(Number(unref(marker).exif?.GPSLatitude)).toFixed(4)}°${unref(marker).exif?.GPSLatitudeRef}` : "未知") + ", " + toDisplayString(unref(marker).exif?.GPSLongitude ? `${Math.abs(Number(unref(marker).exif?.GPSLongitude)).toFixed(4)}°${unref(marker).exif?.GPSLongitudeRef}` : "未知"), 1)
                                      ])) : createCommentVNode("", true),
                                      unref(marker).exif?.GPSAltitude ? (openBlock(), createBlock("div", {
                                        key: 3,
                                        class: "flex items-center gap-1 text-xs text-neutral-600 dark:text-muted"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "tabler:mountain",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "truncate font-mono" }, toDisplayString(`${unref(marker).exif.GPSAltitudeRef === "Below Sea Level" ? "-" : ""}${Math.abs(Number(unref(marker).exif.GPSAltitude)).toFixed(1)}m`), 1)
                                      ])) : createCommentVNode("", true)
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onPointerDownOutside", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open", "open-delay", "close-delay", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/map/PhotoPin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "MapPhotoPin" });
function clusterMarkers(markers, zoom) {
  if (markers.length === 0) return [];
  if (zoom >= 15) {
    return markers.map((marker) => ({
      type: "Feature",
      properties: { marker },
      geometry: {
        type: "Point",
        coordinates: [marker.longitude, marker.latitude]
      }
    }));
  }
  const clusters = [];
  const processed = /* @__PURE__ */ new Set();
  const threshold = Math.max(1e-3, 0.01 / Math.pow(2, zoom - 10));
  for (const marker of markers) {
    if (processed.has(marker.id)) continue;
    const nearby = [marker];
    processed.add(marker.id);
    for (const other of markers) {
      if (processed.has(other.id)) continue;
      const distance = Math.sqrt(
        Math.pow(marker.longitude - other.longitude, 2) + Math.pow(marker.latitude - other.latitude, 2)
      );
      if (distance < threshold) {
        nearby.push(other);
        processed.add(other.id);
      }
    }
    if (nearby.length === 1) {
      clusters.push({
        type: "Feature",
        properties: { marker },
        geometry: {
          type: "Point",
          coordinates: [marker.longitude, marker.latitude]
        }
      });
    } else {
      const centerLng = nearby.reduce((sum, m) => sum + m.longitude, 0) / nearby.length;
      const centerLat = nearby.reduce((sum, m) => sum + m.latitude, 0) / nearby.length;
      clusters.push({
        type: "Feature",
        properties: {
          cluster: true,
          point_count: nearby.length,
          point_count_abbreviated: nearby.length.toString(),
          marker: nearby[0],
          // Representative marker for the cluster
          clusteredPhotos: nearby
          // All photos in the cluster
        },
        geometry: {
          type: "Point",
          coordinates: [centerLng, centerLat]
        }
      });
    }
  }
  return clusters;
}
function photosToMarkers(photos) {
  return photos.filter(
    (photo) => photo.latitude !== null && photo.longitude !== null && photo.latitude !== void 0 && photo.longitude !== void 0
  ).map((photo) => ({
    id: photo.id,
    latitude: photo.latitude,
    longitude: photo.longitude,
    title: photo.title || void 0,
    thumbnailUrl: photo.thumbnailUrl || void 0,
    thumbnailHash: photo.thumbnailHash || void 0,
    dateTaken: photo.dateTaken || void 0,
    city: photo.city || void 0,
    exif: photo.exif || void 0
  }));
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "globe",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.globe")
    });
    const route = useRoute();
    const router = useRouter();
    const { photos } = usePhotos();
    const photosWithLocation = computed(() => {
      return photos.value.filter(
        (photo) => photo.latitude !== null && photo.longitude !== null && photo.latitude !== void 0 && photo.longitude !== void 0
      );
    });
    const currentClusterPointId = ref(null);
    const mapInstance = ref(null);
    const currentZoom = ref(4);
    const clusteredMarkers = computed(() => {
      const markers = photosToMarkers(photosWithLocation.value);
      return clusterMarkers(markers, currentZoom.value);
    });
    const clusterGroups = computed(() => {
      return clusteredMarkers.value.filter(
        (point) => point.properties.cluster === true
      );
    });
    const singleMarkers = computed(() => {
      return clusteredMarkers.value.filter(
        (point) => point.properties.cluster !== true
      );
    });
    watch(currentClusterPointId, (newId) => {
      if (newId) {
        router.replace({ query: { ...route.query, photoId: newId } });
      } else {
        const { photoId, ...rest } = route.query;
        router.replace({ query: { ...rest } });
      }
    });
    const mapViewState = computed(() => {
      if (photosWithLocation.value.length === 0) {
        return {
          longitude: -122.4,
          latitude: 37.8,
          zoom: 2
        };
      }
      const latitudes = photosWithLocation.value.map((photo) => photo.latitude);
      const longitudes = photosWithLocation.value.map((photo) => photo.longitude);
      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);
      const centerLat = (minLat + maxLat) / 2;
      const centerLng = (minLng + maxLng) / 2;
      const latDiff = maxLat - minLat;
      const lngDiff = maxLng - minLng;
      const maxDiff = Math.max(latDiff, lngDiff);
      let zoom = 8;
      if (maxDiff < 5e-3) zoom = 16;
      else if (maxDiff < 0.02) zoom = 14;
      else if (maxDiff < 0.05) zoom = 12;
      else if (maxDiff < 0.2) zoom = 10;
      else if (maxDiff < 1) zoom = 8;
      else if (maxDiff < 5) zoom = 6;
      else if (maxDiff < 20) zoom = 5;
      else if (maxDiff < 50) zoom = 4;
      else zoom = 2;
      return {
        longitude: centerLng,
        latitude: centerLat,
        zoom
      };
    });
    const onMarkerPinClick = (clusterPoint) => {
      if (clusterPoint.properties.cluster === true) {
        const clusteredPhotos = clusterPoint.properties.clusteredPhotos || [];
        if (clusteredPhotos.length > 0 && mapInstance.value) {
          const lats = clusteredPhotos.map((p) => p.latitude);
          const lngs = clusteredPhotos.map((p) => p.longitude);
          const minLat = Math.min(...lats);
          const maxLat = Math.max(...lats);
          const minLng = Math.min(...lngs);
          const maxLng = Math.max(...lngs);
          const padding = 1e-3;
          mapInstance.value.fitBounds(
            [
              [minLng - padding, minLat - padding],
              [maxLng + padding, maxLat + padding]
            ],
            {
              padding: 50,
              duration: 1e3
            }
          );
        }
        return;
      }
      if (clusterPoint.properties.marker?.id === currentClusterPointId.value) {
        currentClusterPointId.value = null;
        return;
      }
      currentClusterPointId.value = clusterPoint.properties.marker?.id || null;
    };
    const onMarkerPinClose = () => {
      currentClusterPointId.value = null;
    };
    const onMapLoaded = (map) => {
      mapInstance.value = map;
      const { photoId } = route.query;
      if (photoId && typeof photoId === "string") {
        const photo = photosWithLocation.value.find((photo2) => photo2.id === photoId);
        if (photo && photo.latitude && photo.longitude) {
          setTimeout(() => {
            map.flyTo({
              center: [photo.longitude, photo.latitude],
              zoom: 17,
              essential: true,
              duration: 2e3
            });
            setTimeout(() => {
              nextTick(() => {
                currentClusterPointId.value = photoId;
              });
            }, 2e3);
          }, 600);
        }
      }
      currentZoom.value = map.getZoom();
    };
    const onMapZoom = useThrottleFn(() => {
      if (!mapInstance.value) return;
      currentZoom.value = mapInstance.value.getZoom();
    }, 100);
    const zoomIn = () => {
      if (!mapInstance.value) return;
      mapInstance.value.zoomIn({ duration: 300 });
    };
    const zoomOut = () => {
      if (!mapInstance.value) return;
      mapInstance.value.zoomOut({ duration: 300 });
    };
    const resetMap = () => {
      if (!mapInstance.value) return;
      currentClusterPointId.value = null;
      mapInstance.value.flyTo({
        center: [mapViewState.value.longitude, mapViewState.value.latitude],
        zoom: mapViewState.value.zoom,
        essential: true,
        duration: 1e3
      });
    };
    const generateRandomKey = () => {
      return Math.random().toString(36).substring(2, 15);
    };
    onBeforeRouteLeave(() => {
      if (mapInstance.value) {
        mapInstance.value.remove();
        mapInstance.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GlassButton = __nuxt_component_0$2;
      const _component_ClientOnly = __nuxt_component_0$3;
      const _component_MapProvider = __nuxt_component_0$4;
      const _component_MapClusterPin = __nuxt_component_3;
      const _component_MapPhotoPin = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-svh relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_GlassButton, {
        class: "absolute top-4 left-4 z-10",
        icon: "tabler:home",
        onClick: ($event) => _ctx.$router.push("/")
      }, null, _parent));
      _push(`<div class="absolute bottom-4 left-4 z-10 flex flex-col">`);
      _push(ssrRenderComponent(_component_GlassButton, {
        class: "rounded-b-none border-b-0",
        icon: "tabler:plus",
        onClick: zoomIn
      }, null, _parent));
      _push(ssrRenderComponent(_component_GlassButton, {
        class: "rounded-none",
        icon: "tabler:minus",
        onClick: zoomOut
      }, null, _parent));
      _push(ssrRenderComponent(_component_GlassButton, {
        class: "rounded-t-none border-t-0",
        icon: "tabler:scan-position",
        onClick: resetMap
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(motion).div, {
        initial: { opacity: 0, scale: 1.08 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay: 0.1 },
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full h-full flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "tabler:map-pin-off",
                    class: "size-10 text-gray-500 animate-pulse"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                      createVNode(_component_Icon, {
                        name: "tabler:map-pin-off",
                        class: "size-10 text-gray-500 animate-pulse"
                      })
                    ])
                  ];
                }
              })
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                fallback: withCtx(() => [
                  createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                    createVNode(_component_Icon, {
                      name: "tabler:map-pin-off",
                      class: "size-10 text-gray-500 animate-pulse"
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_MapProvider, {
                    class: "w-full h-full",
                    "map-id": generateRandomKey(),
                    zoom: unref(mapViewState).zoom,
                    center: [unref(mapViewState).longitude, unref(mapViewState).latitude],
                    "attribution-control": false,
                    language: _ctx.$i18n.locale,
                    onLoad: onMapLoaded,
                    onZoom: unref(onMapZoom)
                  }, {
                    default: withCtx(() => [
                      !!unref(mapInstance) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(clusterGroups), (clusterPoint) => {
                        return openBlock(), createBlock(_component_MapClusterPin, {
                          key: `cluster-${clusterPoint.properties.marker?.id}`,
                          "cluster-point": clusterPoint,
                          "marker-id": generateRandomKey(),
                          onClick: onMarkerPinClick,
                          onClose: onMarkerPinClose
                        }, null, 8, ["cluster-point", "marker-id"]);
                      }), 128)) : createCommentVNode("", true),
                      !!unref(mapInstance) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(singleMarkers), (clusterPoint) => {
                        return openBlock(), createBlock(_component_MapPhotoPin, {
                          key: `single-${clusterPoint.properties.marker?.id}`,
                          "cluster-point": clusterPoint,
                          "is-selected": clusterPoint.properties.marker?.id === unref(currentClusterPointId),
                          "marker-id": generateRandomKey(),
                          onClick: onMarkerPinClick,
                          onClose: onMarkerPinClose
                        }, null, 8, ["cluster-point", "is-selected", "marker-id"]);
                      }), 128)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["map-id", "zoom", "center", "language", "onZoom"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/globe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
