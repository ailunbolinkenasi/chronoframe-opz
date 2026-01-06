import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import "mapbox-gl";
import { getCurrentInstance, ref, watch, nextTick, computed, shallowRef, provide, useSlots, useSSRContext, defineComponent, inject, h as h$1, markRaw, createCommentVNode, Teleport, warn, isRef, reactive, unref, mergeProps, withCtx, renderSlot } from "vue";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import { N as getSetting } from "../server.mjs";
import { Popup, LngLat, FullscreenControl, GeolocateControl, AttributionControl, NavigationControl, ScaleControl, LogoControl } from "maplibre-gl";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const isDef = (val) => typeof val !== "undefined";
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
// @__NO_SIDE_EFFECTS__
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
shallowRef({});
const _sfc_main$1 = {
  __name: "MapboxDefaultMarker",
  __ssrInlineRender: true,
  props: {
    markerId: { type: String, required: true },
    options: { type: Object, required: false, default: () => ({}) },
    lnglat: { type: [Object, Array], required: true }
  },
  emits: ["dragstart", "drag", "dragend", "update:lnglat"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const lnglat = /* @__PURE__ */ useVModel(props, "lnglat", emit);
    const markerRef = ref();
    provide("MarkerRef", markerRef);
    const newOptions = ref({ ...props.options, lnglat: lnglat.value });
    watch(() => newOptions.value.lnglat, () => {
      lnglat.value = newOptions.value.lnglat;
    });
    watch(props, () => {
      newOptions.value = { ...props.options, lnglat: lnglat.value };
    });
    ref(null);
    useSlots();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div></div><div hidden>`);
      ssrRenderSlot(_ctx.$slots, "marker", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-mapbox@1.6.4_magicast@_80558104eb8c66f2159d1a08f8e7b714/node_modules/nuxt-mapbox/dist/runtime/components/DefaultMarker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const se = /* @__PURE__ */ Symbol("map"), h = se, P = /* @__PURE__ */ Symbol("isLoaded"), ce = /* @__PURE__ */ Symbol("isInitialized"), D = ce, L = /* @__PURE__ */ Symbol("componentId"), O = /* @__PURE__ */ Symbol("sourceId"), C = /* @__PURE__ */ Symbol(
  "sourceLayerRegistry"
), $ = /* @__PURE__ */ Symbol("marker");
function ge(e, t) {
  const r = LngLat.convert(e), a = LngLat.convert(t);
  return r.lng === a.lng && r.lat === a.lat;
}
var k = /* @__PURE__ */ ((e) => (e.TOP_LEFT = "top-left", e.TOP_RIGHT = "top-right", e.BOTTOM_LEFT = "bottom-left", e.BOTTOM_RIGHT = "bottom-right", e))(k || {});
const x = Object.values(k), T = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ Symbol("default");
function fe(e, t, r = J) {
  let a = T.get(r);
  return a || (a = reactive({ isLoaded: false, isMounted: false, language: null }), T.set(r, a)), a.isLoaded = t.value?.loaded() || false, a.isMounted = false, a.component = e, a.map = t.value, a;
}
defineComponent({
  name: "MglMap",
  props: {
    /**
     * Width of the map container
     */
    width: {
      type: [Number, String],
      default: "100%"
    },
    /**
     * Height of the map container
     */
    height: {
      type: [Number, String],
      default: "100%"
    },
    /**
     * If set, an AttributionControl will be added to the map with the provided options. To disable the attribution control, pass false. Note: showing the logo of MapLibre is not required for using MapLibre. Default Value ts compact: true, customAttribution: "MapLibre ...".
     */
    attributionControl: {
      type: [Boolean, Object],
      default: void 0
    },
    /**
     * The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Default Value `0`
     * @vmodel v-model:bearing
     */
    bearing: {
      type: Number
    },
    /**
     * The threshold, measured in degrees, that determines when the map's bearing will snap to north. For example, with a bearingSnap of 7, if the user rotates the map within 7 degrees of north, the map will automatically snap to exact north. Default Value `7`
     */
    bearingSnap: {
      type: Number
    },
    /**
     * The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
     */
    bounds: {
      type: [Array, Object]
    },
    /**
     * If true, the "box zoom" interaction is enabled (see BoxZoomHandler). Default Value ts true
     */
    boxZoom: {
      type: Boolean,
      default: void 0
    },
    /**
     *  The initial geographical centerpoint of the map. If center is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to [0, 0] Note: MapLibre GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON. Default Value ts [0, 0]
     * @vmodel v-model:center
     */
    center: {
      type: [Array, Object]
    },
    /**
     * The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag). Default Value ts true
     */
    clickTolerance: {
      type: Number
    },
    /**
     * If true, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a resourceTiming property of relevant data events. Default Value `false`
     */
    collectResourceTiming: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, symbols from multiple sources can collide with each other during collision detection. If false, collision detection is run separately for the symbols in each source. Default Value `true`
     */
    crossSourceCollisions: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, the "drag to pan" interaction is enabled. An Object value is passed as options to DragPanHandler#enable. Default Value `true`
     */
    dragPan: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, the "drag to rotate" interaction is enabled (see DragRotateHandler). Default Value `true`
     */
    dragRotate: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, the "double click to zoom" interaction is enabled (see DoubleClickZoomHandler). Default Value `true`
     */
    doubleClickZoom: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60. An additional string may optionally be provided to indicate a parameter-styled hash, e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo is a custom parameter and bar is an arbitrary hash distinct from the map hash. Default Value `false`
     */
    hash: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * Controls the duration of the fade-in/fade-out animation for label collisions after initial map load, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading. Default Value `300`
     */
    fadeDuration: {
      type: Number
    },
    /**
     * A FitBoundsOptions options object to use only when fitting the initial bounds provided above.
     */
    fitBoundsOptions: {
      type: Object
    },
    /**
     * If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction. Default Value `true`
     */
    interactive: {
      type: Boolean,
      default: void 0
    },
    /**
     * If true, keyboard shortcuts are enabled (see KeyboardHandler). Default Value `true`
     */
    keyboard: {
      type: Boolean,
      default: void 0
    },
    /**
     * A patch to apply to the default localization table for UI strings, e.g. control tooltips. The locale object maps namespaced UI string IDs to translated strings in the target language; see src/ui/default_locale.js for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table). Default Value `null`
     */
    locale: {
      type: Object
    },
    localIdeographFontFamily: {
      type: String
    },
    /**
     * A string representing the position of the MapLibre wordmark on the map. Valid options are top-left,top-right, bottom-left, or bottom-right. Default Value 'bottom-left'
     */
    logoPosition: {
      type: [String],
      validator: (e) => e in k
    },
    /**
     * If set, the map will be constrained to the given bounds.
     */
    maxBounds: {
      type: [Array, Object]
    },
    /**
     * The maximum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `60`
     */
    maxPitch: {
      type: Number
    },
    /**
     * The maximum zoom level of the map (0-24). Default Value `22`
     */
    maxZoom: {
      type: Number
    },
    /**
     * The minimum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `0`
     */
    minPitch: {
      type: Number
    },
    /**
     * The minimum zoom level of the map (0-24). Default Value `0`
     */
    minZoom: {
      type: Number
    },
    /**
     * The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-85). If pitch is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `0`
     * @vmodel v-model:pitch
     */
    pitch: {
      type: Number
    },
    /**
     * If false, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled. Default Value `true`
     */
    pitchWithRotate: {
      type: Boolean,
      default: void 0
    },
    /**
     * Set of WebGLContextAttributes that are applied to the WebGL context of the map. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext for more details. contextType can be set to webgl2 or webgl to force a WebGL version. Not setting it, Maplibre will do it's best to get a suitable context.
     * @since 8.0.0
     */
    canvasContextAttributes: {
      type: Object
    },
    /**
     * If false, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl/expires headers. Default Value `true`
     */
    refreshExpiredTiles: {
      type: Boolean,
      default: void 0
    },
    renderWorldCopies: {
      type: Boolean,
      default: void 0
    },
    scrollZoom: {
      type: Boolean,
      default: void 0
    },
    /**
     * An optional string link to a URL, or an inlined JSON object containing a MapLibre Style Specification.
     * 
     * Documentation: https://maplibre.org/maplibre-style-spec
     * 
     * Example: https://demotiles.maplibre.org/style.json
     */
    mapStyle: {
      type: [String, Object]
    },
    /**
     * If `true`, the map will automatically resize when the browser window resizes.
     * Default value true
     */
    trackResize: {
      type: Boolean,
      default: void 0
    },
    /**
     * A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests.
     * Expected to return an object with a `url` property and optionally `headers` and `credentials` properties.
     */
    transformRequest: {
      type: Function
    },
    /**
     * A callback run before the map's camera is moved due to user input or animation. The callback can be used to modify the new center, zoom, pitch and bearing.
     * Expected to return an object containing center, zoom, pitch or bearing values to overwrite.
     * @since 6.4.0
     */
    transformCameraUpdate: {
      type: Function
    },
    /**
     * The map's TwoFingersTouchZoomRotateHandler, which allows the user to zoom or rotate the map with touch gestures.
     * Find more details and examples using `touchZoomRotate` in the TwoFingersTouchZoomRotateHandler section.
     */
    touchZoomRotate: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map's TwoFingersTouchPitchHandler, which allows the user to pitch the map with touch gestures.
     * Find more details and examples using `touchPitch` in the TwoFingersTouchPitchHandler section.
     */
    touchPitch: {
      type: Boolean,
      default: void 0
    },
    /**
     * The initial zoom level of the map. If zoom is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Default Value `0`
     * @vmodel v-model:zoom
     */
    zoom: {
      type: Number
    },
    /**
     * The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport which can be set using `maxTileCacheZoomLevels` constructor options.
     * Default value null
     */
    maxTileCacheSize: {
      type: Number
    },
    /**
     * The name or symbol to reference a map via useMap composable
     */
    mapKey: { type: [String, Symbol] },
    /**
     * The pixel ratio. The canvas' width attribute will be container.clientWidth * pixelRatio and its height attribute will be container.clientHeight * pixelRatio. Defaults to devicePixelRatio if not specified.
     */
    pixelRatio: {
      type: Number
    },
    /**
     * If false, style validation will be skipped. Useful in production environment.
     * Default value true
     * @since 6.4.0
     */
    validateStyle: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map's {@link CooperativeGesturesHandler}, which allows the user to see cooperative gesture info when user tries to zoom in/out.
     * Find more details and examples using `cooperativeGestures` in the {@link CooperativeGesturesHandler} section.
     */
    cooperativeGestures: {
      type: Boolean
    }
  },
  emits: [
    "map:error",
    "map:load",
    "map:idle",
    "map:remove",
    "map:render",
    "map:resize",
    "map:webglcontextlost",
    "map:webglcontextrestored",
    "map:dataloading",
    "map:data",
    "map:tiledataloading",
    "map:sourcedataloading",
    "map:styledataloading",
    "map:sourcedata",
    "map:styledata",
    "map:styleimagemissing",
    "map:dataabort",
    "map:sourcedataabort",
    "map:boxzoomcancel",
    "map:boxzoomstart",
    "map:boxzoomend",
    "map:touchcancel",
    "map:touchmove",
    "map:touchend",
    "map:touchstart",
    "map:click",
    "map:contextmenu",
    "map:dblclick",
    "map:mousemove",
    "map:mouseup",
    "map:mousedown",
    "map:mouseout",
    "map:mouseover",
    "map:movestart",
    "map:move",
    "map:moveend",
    "map:zoomstart",
    "map:zoom",
    "map:zoomend",
    "map:rotatestart",
    "map:rotate",
    "map:rotateend",
    "map:dragstart",
    "map:drag",
    "map:dragend",
    "map:pitchstart",
    "map:pitch",
    "map:pitchend",
    "map:wheel",
    "map:terrain",
    "map:cooperativegestureprevented",
    "map:projectiontransition",
    /**
     * Center property updated
     */
    "update:center",
    /**
     * Zoom property updated
     */
    "update:zoom",
    /**
     * Pitch property updated
     */
    "update:pitch",
    /**
     * Bearing property updated
     */
    "update:bearing"
  ],
  slots: Object,
  setup(e, t) {
    const r = markRaw(getCurrentInstance()), a = shallowRef(), o = shallowRef(), l = ref(false), c = ref(false);
    fe(r, o, e.mapKey);
    provide(h, o), provide(P, c), provide(D, l), provide(L, r.uid), provide(O, ""), watch(
      () => e.bearing,
      (i) => {
        i && o.value?.setBearing(i);
      }
    ), watch(
      () => e.bounds,
      (i) => {
        i && o.value?.fitBounds(i, e.fitBoundsOptions);
      }
    ), watch(
      () => e.center,
      (i) => {
        const v = o.value?.getCenter();
        i && v && !ge(i, v) && o.value?.setCenter(i);
      }
    ), watch(
      () => e.maxBounds,
      (i) => {
        i && o.value?.setMaxBounds(i);
      }
    ), watch(
      () => e.maxPitch,
      (i) => {
        i && o.value?.setMaxPitch(i);
      }
    ), watch(
      () => e.maxZoom,
      (i) => {
        i && o.value?.setMaxZoom(i);
      }
    ), watch(
      () => e.minPitch,
      (i) => {
        i && o.value?.setMinPitch(i);
      }
    ), watch(
      () => e.minZoom,
      (i) => {
        i && o.value?.setMinZoom(i);
      }
    ), watch(
      () => e.pitch,
      (i) => {
        i && o.value?.setPitch(i);
      }
    ), watch(
      () => e.renderWorldCopies,
      (i) => {
        i && o.value?.setRenderWorldCopies(i);
      }
    ), watch(
      () => e.mapStyle,
      (i) => {
        i && o.value?.setStyle(i);
      }
    ), watch(
      () => e.transformRequest,
      (i) => {
        i && o.value?.setTransformRequest(i);
      }
    ), watch(
      () => e.zoom,
      (i) => {
        i && o.value?.setZoom(i);
      }
    ), watch(
      () => e.zoom,
      (i) => {
        i && o.value?.setZoom(i);
      }
    );
    return t.expose({ map: o }), () => [
      h$1("div", {
        ref: a,
        style: { height: e.height, width: e.width }
      }),
      l.value && t.slots.default ? t.slots.default({}) : void 0
    ];
  },
  /**
   * Slot for controls, sources, marker and popup
   * @slot default
   */
  render() {
    return null;
  }
});
function ve(e, t, r) {
  watch(
    e,
    (a) => {
      a && x.indexOf(a) === -1 || (t.value?.hasControl(r) && t.value.removeControl(r), t.value?.addControl(r, a));
    },
    { immediate: true }
  );
}
function N(e, t) {
  const r = inject(h);
  inject(D);
  const o = shallowRef();
  return o.value = e(), ve(() => t.position, r, o.value), { control: o, map: r };
}
defineComponent({
  name: "MglAttributionControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'bottom-right'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * If true, the attribution control will always collapse when moving the map. If false, force the expanded attribution control. The default is a responsive attribution that collapses when the user moves the map on maps less than 640 pixels wide. Attribution should not be collapsed if it can comfortably fit on the map. compact should only be used to modify default attribution when map size makes it impossible to fit default attribution and when the automatic compact resizing for default settings are not sufficient.
     */
    compact: Boolean,
    /**
     * Attributions to show in addition to any other attributions.
     */
    customAttribution: [String, Array]
  },
  setup(e) {
    N(() => new AttributionControl({
      compact: e.compact,
      customAttribution: e.customAttribution
    }), e);
  },
  render() {
    return null;
  }
});
class be {
  constructor(t, r) {
    this.isAdded = t, this.container = (void 0).createElement("div"), this.setClasses(r);
  }
  container;
  getDefaultPosition() {
    return k.TOP_LEFT;
  }
  onAdd() {
    return nextTick(() => this.isAdded.value = true), this.container;
  }
  onRemove() {
    this.isAdded.value = false, this.container.remove();
  }
  setClasses(t) {
    this.container.className = t;
  }
}
defineComponent({
  name: "MglCustomControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'top-left'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * Set the classes on the control div
     * @since 6.1.0
     */
    class: {
      type: String,
      default: "maplibregl-ctrl maplibregl-ctrl-group"
    }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = ref(false), { control: a } = N(() => new be(r, e.class), e);
    return watch(
      () => e.class,
      () => a.value.setClasses(e.class)
    ), () => r.value ? h$1(Teleport, { to: a.value.container }, t.default?.({})) : createCommentVNode("custom-component");
  },
  /**
   * Slot to render the content of the control
   * @slot default
   */
  render() {
    return null;
  }
});
defineComponent({
  name: "MglFullscreenControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'top-right'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * container is the compatible DOM element which should be made full screen. By default, the map container element will be made full screen.
     */
    container: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const { control: t, map: r } = N(() => new FullscreenControl({
      container: e.container || void 0
    }), e);
    function a() {
      nextTick(() => r.value?.resize());
    }
    t.value.on("fullscreenstart", a), t.value.on("fullscreenend", a);
  },
  render() {
    return null;
  }
});
defineComponent({
  name: "MglGeolocateControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'top-right'.
     */
    position: {
      type: String,
      default: k.TOP_RIGHT,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * A Geolocation API [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object.
     */
    positionOptions: {
      type: Object,
      default: () => ({ enableHighAccuracy: false, timeout: 6e3 })
    },
    /**
     * A options object to use when the map is panned and zoomed to the user's location. The default is to use a maxZoom of 15 to limit how far the map will zoom in for very accurate locations.
     */
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 })
    },
    /**
     * If true the GeolocateControl becomes a toggle button and when active the map will receive updates to the user's location as it changes.
     */
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    /**
     * By default, if showUserLocation is true, a transparent circle will be drawn around the user location indicating the accuracy (95% confidence level) of the user's location. Set to false to disable. Always disabled when showUserLocation is false.
     */
    showAccuracyCircle: {
      type: Boolean,
      default: true
    },
    /**
     * By default a dot will be shown on the map at the user's location. Set to false to disable.
     */
    showUserLocation: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "trackuserlocationstart",
    "trackuserlocationend",
    "userlocationlostfocus",
    "userlocationfocus",
    "geolocate",
    "error",
    "outofmaxbounds"
  ],
  setup(e, t) {
    const { control: r } = N(() => new GeolocateControl({
      positionOptions: e.positionOptions,
      fitBoundsOptions: e.fitBoundsOptions,
      trackUserLocation: e.trackUserLocation,
      showAccuracyCircle: e.showAccuracyCircle,
      showUserLocation: e.showUserLocation
    }), e);
    function a(o) {
      const l = (c) => {
        t.emit(o, c);
      };
      r.value.on(o, l);
    }
    a("trackuserlocationstart"), a("trackuserlocationend"), a("userlocationlostfocus"), a("userlocationfocus"), a("geolocate"), a("error"), a("outofmaxbounds");
  },
  render() {
    return null;
  }
});
defineComponent({
  name: "MglNavigationControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'top-right'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * If true the compass button is included.
     */
    showCompass: { type: Boolean, default: true },
    /**
     * If true the zoom-in and zoom-out buttons are included.
     */
    showZoom: { type: Boolean, default: true },
    /**
     * If true the pitch is visualized by rotating X-axis of compass.
     */
    visualizePitch: Boolean
  },
  setup(e) {
    N(() => new NavigationControl({
      showCompass: e.showCompass,
      showZoom: e.showZoom,
      visualizePitch: e.visualizePitch
    }), e);
  },
  render() {
    return null;
  }
});
var K = /* @__PURE__ */ ((e) => (e.IMPERIAL = "imperial", e.METRIC = "metric", e.NAUTICAL = "nautical", e))(K || {});
const Oe = Object.values(K);
defineComponent({
  name: "MglScaleControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'bottom-left'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * The maximum length of the scale control in pixels. Default Value `100`
     */
    maxWidth: { type: Number, default: 100 },
    /**
     * Set the scale's unit of the distance ('imperial', 'metric' or 'nautical').
     */
    unit: {
      type: String,
      default: "metric",
      validator: (e) => Oe.indexOf(e) !== -1
    }
  },
  setup(e) {
    N(() => new ScaleControl({
      maxWidth: e.maxWidth,
      unit: e.unit
    }), e);
  },
  render() {
    return null;
  }
});
defineComponent({
  name: "MglLogoControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'bottom-left'.
     */
    position: {
      type: String,
      validator: (e) => x.indexOf(e) !== -1
    },
    /**
     * If true, force a compact logo. If false, force the full logo. The default is a responsive logo that collapses when the map is less than 640 pixels wide.
     */
    compact: {
      type: Boolean
    }
  },
  setup(e) {
    N(() => new LogoControl({
      compact: e.compact
    }), e);
  },
  render() {
    return null;
  }
});
const Ie = defineComponent({
  name: "MglMarker",
  emits: [
    /**
     * Fired when dragging starts
     */
    "dragstart",
    /**
     * Fired while dragging
     */
    "drag",
    /**
     * Fired when the marker is finished being dragged
     */
    "dragend",
    /**
     * Fired when the coordinates have been updated when the marker is draggable
     *
     * @property {LgnLatLike} coordinates the new coordinates
     */
    "update:coordinates"
  ],
  props: {
    /**
     * Marker coordinates
     */
    coordinates: {
      type: [Object, Array],
      required: true
    },
    /**
     * Space-separated CSS class names to add to marker container
     * @since 8.3.0
     */
    className: String,
    /**
     * The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up.
     */
    offset: [Object, Array],
    /**
     * A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker#setLngLat. Options are 'center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Default Value 'center'
     */
    anchor: String,
    /**
     * The color to use for the default marker if options.element is not provided. The default is light blue. Default Value '#3FB1CE'
     */
    color: String,
    /**
     * A boolean indicating whether or not a marker is able to be dragged to a new position on the map. Default Value false
     */
    draggable: Boolean,
    /**
     * The max number of pixels a user can shift the mouse pointer during a click on the marker for it to be considered a valid click (as opposed to a marker drag). The default is to inherit map's clickTolerance. Default Value 0
     */
    clickTolerance: Number,
    /**
     * The rotation angle of the marker in degrees, relative to its respective rotationAlignment setting. A positive value will rotate the marker clockwise. Default Value 0
     */
    rotation: Number,
    /**
     * map aligns the Marker's rotation relative to the map, maintaining a bearing as the map rotates. viewport aligns the Marker's rotation relative to the viewport, agnostic to map rotations. auto is equivalent to viewport. Default Value 'auto'
     */
    rotationAlignment: String,
    /**
     * map aligns the Marker to the plane of the map. viewport aligns the Marker to the plane of the viewport. auto automatically matches the value of rotationAlignment. Default Value 'auto'
     */
    pitchAlignment: String,
    /**
     * The scale to use for the default marker if options.element is not provided. The default scale corresponds to a height of 41px and a width of 27px. Default Value 1
     */
    scale: Number,
    /**
     * Marker's opacity when it's in clear view (not behind 3d terrain). Default value `1`
     * @since 7.0.0
     */
    opacity: String,
    /**
     * Marker's opacity when it's behind 3d terrain
     * @defaultValue `0.2`
     * @since 7.0.0
     */
    opacityWhenCovered: String,
    /**
     * If true, rounding is disabled for placement of the marker, allowing for subpixel positioning and smoother movement when the marker is translated.
     * @since 7.5.0
     */
    subpixelPositioning: {
      type: Boolean,
      default: false
    }
  },
  setup(e, { slots: t, emit: r }) {
    inject(h);
    const o = shallowRef(), l = ref(), c = ref(false);
    return provide($, o), watch(
      () => e.coordinates,
      (n) => o.value?.setLngLat(n),
      { deep: true }
    ), watch(
      () => e.draggable,
      (n) => o.value?.setDraggable(n)
    ), watch(
      () => e.offset,
      (n) => o.value?.setOffset(n || [0, 0])
    ), watch(
      () => e.pitchAlignment,
      (n) => o.value?.setPitchAlignment(n || "auto")
    ), watch(
      () => e.rotation,
      (n) => o.value?.setRotation(n)
    ), watch(
      () => e.rotationAlignment,
      (n) => o.value?.setRotationAlignment(n || "auto")
    ), watch(
      () => e.opacity,
      (n) => o.value?.setOpacity(n, e.opacityWhenCovered)
    ), watch(
      () => e.opacityWhenCovered,
      (n) => o.value?.setOpacity(e.opacity, n)
    ), watch(
      () => e.subpixelPositioning,
      (n) => o.value?.setSubpixelPositioning(n)
    ), watch(
      () => e.className,
      (n, f) => {
        f && o.value?.removeClassName(f), n && o.value?.addClassName(n);
      }
    ), () => [
      h$1(
        "div",
        t.default && c.value ? t.default({}) : void 0
      ),
      h$1("div", { ref: l }, t.marker ? t.marker() : void 0)
    ];
  },
  /**
   * Slot for popup component
   * @slot default
   */
  /**
   * Slot for custom marker
   * @slot marker
   */
  render() {
    return null;
  }
});
defineComponent({
  name: "MglPopup",
  emits: [
    /**
     * Fired when the popup is opened manually or programmatically.
     */
    "open",
    /**
     * Fired when the popup is closed manually or programmatically.
     */
    "close"
  ],
  props: {
    /**
     * The geographical location of the popup's anchor.
     * Unused when placed inside a marker.
     */
    coordinates: {
      type: [Object, Array],
      required: false
    },
    /**
     * Display a close button in the top right corner.
     */
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * The popup will be closed when the map is clicked.
     */
    closeOnClick: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * The popup will be closed when the map moves.
     */
    closeOnMove: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The popup will try to focus the first focusable element inside the popup.
     */
    focusAfterOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * A string indicating the part of the Popup that should
     * be positioned closest to the coordinate.
     * Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`,
     * `'top-right'`, `'bottom-left'`, and `'bottom-right'`. If unset the anchor will be
     * dynamically set to ensure the popup falls within the map container with a preference
     * for `'bottom'`.
     */
    anchor: {
      type: String,
      required: false
    },
    /**
     * A pixel offset applied to the popup's location
     */
    offset: {
      type: [Number, Object, Array],
      required: false
    },
    /**
     * Space-separated CSS class names to add to popup container
     */
    className: {
      type: String,
      required: false
    },
    /**
     * A string that sets the CSS property of the popup's maximum width, eg `'300px'`.
     * To ensure the popup resizes to fit its content, set this property to `'none'`.
     */
    maxWidth: {
      type: String,
      default: "240px"
    },
    /**
     * If true, rounding is disabled for placement of the popup, allowing for subpixel positioning and smoother movement when the popup is translated.
     * @since 7.1.0
     */
    subpixelPositioning: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the popup's content to a string of text.
     */
    text: {
      type: String,
      required: false
    }
  },
  setup(e, { slots: t, emit: r, expose: a }) {
    const o = inject(h), l = inject($, void 0), c = ref(), s = new Popup(e);
    l && l.value ? l.value.setPopup(s) : e.coordinates && o && s.setLngLat(e.coordinates).addTo(o.value), e.text && s.setText(e.text);
    function g(n) {
      const f = () => r(n);
      s.on(n, f);
    }
    return g("open"), g("close"), a({
      remove() {
        s.remove();
      }
    }), watch(
      () => e.coordinates,
      (n) => {
        n && s.setLngLat(n);
      },
      { deep: true }
    ), watch(
      () => e.text,
      (n) => s.setText(n || "")
    ), watch(
      () => e.offset,
      (n) => s.setOffset(n)
    ), watch(
      () => e.maxWidth,
      (n) => s.setMaxWidth(n)
    ), watch(
      () => e.className,
      (n, f) => {
        f && s.removeClassName(f), n && s.addClassName(n);
      }
    ), watch(
      () => e.subpixelPositioning,
      (n) => s.setSubpixelPositioning(n)
    ), () => [
      h$1("div", { ref: c }, t.default ? t.default() : void 0)
    ];
  },
  /**
   * Slot for popup content
   * @slot default
   */
  render() {
    return null;
  }
});
defineComponent({
  name: "MglImage",
  props: {
    /**
     * Image id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The image data to add
     * The image as an HTMLImageElement, ImageData, ImageBitmap or object with width, height, and data properties with the same format as ImageData.
     * Required if the url props is not set
     */
    image: Object,
    /**
     * The image url to load via map#loadImage
     * Required if the image props is not set
     */
    url: String,
    /**
     * The options
     */
    options: Object
  },
  setup(e) {
    const t = inject(h);
    if (!e.url && !e.image)
      return warn(`${e.id} image: missing prop url or image`), () => [];
    if (!t.value.hasImage(e.id))
      return (async () => {
        let r = e.image;
        e.url && (r = (await t.value.loadImage(e.url)).data), t.value.addImage(e.id, r, e.options);
      })(), () => [];
  }
});
class _ {
  unmountHandlers = /* @__PURE__ */ new Map();
  registerUnmountHandler(t, r) {
    this.unmountHandlers.set(t, r);
  }
  unregisterUnmountHandler(t) {
    this.unmountHandlers.delete(t);
  }
  unmount() {
    this.unmountHandlers.forEach((t) => t());
  }
}
class p {
  static REFS = /* @__PURE__ */ new Map();
  static genSourceOpts(t) {
    const r = { ...t };
    for (const a of Object.keys(r))
      (r[a] === void 0 || a === "sourceId") && delete r[a];
    return r;
  }
  static getSourceRef(t, r) {
    const a = typeof r == "string", o = String(t) + (a ? r : "");
    let l = p.REFS.get(o);
    return l || (l = ref(a ? null : void 0), p.REFS.set(o, l)), l;
  }
}
function j(e, t, r) {
  const a = inject(h), o = inject(P);
  function l() {
    o.value && (a.value.addSource(t.sourceId, p.genSourceOpts(t)), e.value = a.value.getSource(t.sourceId));
  }
  return watch(o, l, { immediate: true }), a.value.on("style.load", l), false;
}
defineComponent({
  name: "MglCanvasSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    coordinates: Array,
    animate: Boolean,
    canvas: [Object, String]
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "canvas" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), watch(
      [
        isRef(e.coordinates) ? e.coordinates : () => e.coordinates,
        a
      ],
      ([c, s]) => {
        s?.setCoordinates(c);
      },
      { immediate: true }
    ), () => [
      createCommentVNode("Canvas Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglGeoJsonSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    data: {
      type: [Object, String],
      required: true
    },
    maxzoom: Number,
    attribution: String,
    buffer: Number,
    tolerance: Number,
    cluster: Boolean,
    clusterRadius: Number,
    clusterMaxZoom: Number,
    clusterMinPoints: Number,
    clusterProperties: Object,
    lineMetrics: Boolean,
    generateId: Boolean,
    promoteId: [Object, String],
    filter: [Array, String, Object]
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "geojson" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), watch(
      [isRef(e.data) ? e.data : () => e.data, a],
      ([c, s]) => {
        s?.setData(
          c || { type: "FeatureCollection", features: [] }
        );
      },
      { immediate: true }
    ), () => [
      createCommentVNode("GeoJSON Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglImageSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    url: String,
    coordinates: Array
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "image" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), watch(
      [
        isRef(e.coordinates) ? e.coordinates : () => e.coordinates,
        a
      ],
      ([c, s]) => {
        s?.setCoordinates(c);
      },
      { immediate: true }
    ), () => [
      createCommentVNode("Image Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglRasterSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    url: String,
    tiles: Array,
    bounds: Array,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    scheme: String,
    attribution: String,
    volatile: Boolean
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "raster" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), () => [
      createCommentVNode("Raster Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglRasterDemSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    url: String,
    tiles: Array,
    bounds: Array,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    attribution: String,
    encoding: String,
    volatile: Boolean,
    redFactor: Number,
    blueFactor: Number,
    greenFactor: Number,
    baseShift: Number
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "raster-dem" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), () => [
      createCommentVNode("RasterDem Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglVectorSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    url: String,
    tiles: Array,
    bounds: {
      type: Array,
      validator: function(e) {
        return e.length === 4;
      }
    },
    scheme: String,
    minzoom: Number,
    maxzoom: Number,
    attribution: String,
    promoteId: [Object, String],
    volatile: Boolean
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "vector" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), watch(
      [isRef(e.tiles) ? e.tiles : () => e.tiles, a],
      ([c, s]) => {
        s?.setTiles(c || []);
      },
      { immediate: true }
    ), watch(
      [isRef(e.url) ? e.url : () => e.url, a],
      ([c, s]) => {
        s?.setUrl(c || "");
      },
      { immediate: true }
    ), () => [
      createCommentVNode("Vector Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
defineComponent({
  name: "MglVideoSource",
  props: {
    sourceId: {
      type: String,
      required: true
    },
    urls: Array,
    coordinates: Array
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = inject(L), a = p.getSourceRef(r, e.sourceId), o = new _(), l = { ...e, type: "video" };
    return provide(O, e.sourceId), provide(C, o), j(a, l), watch(
      [
        isRef(e.coordinates) ? e.coordinates : () => e.coordinates,
        a
      ],
      ([c, s]) => {
        s?.setCoordinates(c);
      },
      { immediate: true }
    ), () => [
      createCommentVNode("Video Source"),
      a.value && t.default ? t.default({}) : void 0
    ];
  }
});
const b = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
];
function I() {
  return {
    /**
     * The id of the layer
     */
    layerId: {
      type: String,
      required: true
    },
    source: {
      type: String
    },
    /**
     * Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'.
     */
    metadata: {
      type: [Object, Array, String, Number]
    },
    /**
     * Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources.
     */
    sourceLayer: { type: String },
    /**
     * The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden.
     */
    minzoom: { type: Number },
    /**
     * The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden.
     */
    maxzoom: { type: Number },
    /**
     * A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions.
     */
    filter: { type: Object },
    /**
     * The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers.
     */
    before: { type: String },
    /**
     * Layout properties for the layer.
     * See https://maplibre.org/maplibre-style-spec/layers/
     */
    layout: { type: Object },
    /**
     * Default paint properties for this layer.
     * See https://maplibre.org/maplibre-style-spec/layers/
     */
    paint: { type: Object }
  };
}
function ke(e, t, r, a) {
  const o = {
    id: e,
    type: t,
    source: r.source || a,
    metadata: r.metadata,
    minzoom: r.minzoom,
    maxzoom: r.maxzoom,
    "source-layer": r.sourceLayer,
    filter: r.filter,
    paint: r.paint,
    layout: r.layout
  };
  for (const l of Object.keys(o))
    o[l] === void 0 && delete o[l];
  return o;
}
function Ee(e, t, r) {
  if (r.props)
    for (const a of b) {
      const o = "on" + a.charAt(0).toUpperCase() + a.substr(1);
      r.props[o] && e.on(a, t, r.props[o]);
    }
}
function Te(e, t, r) {
  if (r.props)
    for (const a of b) {
      const o = "on" + a.charAt(0).toUpperCase() + a.substr(1);
      r.props[o] && e.off(a, t, r.props[o]);
    }
}
function Y(e, t) {
  const r = inject(h), a = inject(P), o = inject(C);
  function l() {
    a.value && (t && Te(r.value, e, t.vnode), r.value.getLayer(e) && r.value.removeLayer(e));
  }
  o.registerUnmountHandler(e, l);
}
defineComponent({
  name: "MglBackgroundLayer",
  props: {
    /**
     * The id of the layer
     */
    layerId: {
      type: String,
      required: true
    },
    /**
     * Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'.
     */
    metadata: [Object, Array, String, Number],
    /**
     * The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden.
     */
    minzoom: Number,
    /**
     * The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden.
     */
    maxzoom: Number,
    /**
     * The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers.
     */
    before: String,
    /**
     * Layout properties for the layer.
     * See https://maplibre.org/maplibre-style-spec/layers/#background
     */
    layout: Object,
    /**
     * Default paint properties for this layer.
     * See https://maplibre.org/maplibre-style-spec/layers/#background
     */
    paint: Object
  },
  emits: [...b],
  setup(e) {
    const t = inject(h), r = inject(P);
    return Y(e.layerId), watch(
      () => e.layout,
      (a) => {
        if (a)
          for (const [o, l] of Object.entries(a))
            t.value.setLayoutProperty(e.layerId, o, l);
      }
    ), watch(
      () => e.paint,
      (a) => {
        if (a)
          for (const [o, l] of Object.entries(a))
            t.value.setPaintProperty(e.layerId, o, l);
      }
    ), watch(
      r,
      (a) => {
        a && t.value.addLayer(
          {
            id: e.layerId,
            type: "background",
            metadata: e.metadata,
            minzoom: e.minzoom,
            maxzoom: e.maxzoom,
            layout: e.layout,
            paint: e.paint
          },
          e.before || void 0
        );
      },
      { immediate: true }
    ), () => createCommentVNode("Background Layer");
  }
});
function z(e, t) {
  const r = inject(O);
  if (!r && !t.source) {
    warn(
      `${e} Layer: layer must be used inside source tag or source prop must be set`
    );
    return;
  }
  const a = getCurrentInstance(), o = inject(h), l = inject(P), c = inject(L), s = p.getSourceRef(c, t.source || r);
  return Y(t.layerId, a), watch(
    () => t.minzoom,
    () => o.value.setLayerZoomRange(
      t.layerId,
      t.minzoom || 0,
      t.maxzoom || 24
    )
  ), watch(
    () => t.maxzoom,
    () => o.value.setLayerZoomRange(
      t.layerId,
      t.minzoom || 0,
      t.maxzoom || 24
    )
  ), watch(
    () => t.layout,
    (g) => {
      if (g)
        for (const [n, f] of Object.entries(g))
          o.value.setLayoutProperty(t.layerId, n, f);
    },
    { deep: true }
  ), watch(
    () => t.paint,
    (g) => {
      if (g)
        for (const [n, f] of Object.entries(g))
          o.value.setPaintProperty(t.layerId, n, f);
    },
    { deep: true }
  ), watch(
    () => t.filter,
    (g) => o.value.setFilter(t.layerId, g),
    { deep: true }
  ), watch(
    [l, s],
    ([g, n]) => {
      g && (n || n === void 0) && (o.value.addLayer(
        ke(t.layerId, e, t, r),
        t.before || void 0
      ), Ee(o.value, t.layerId, a.vnode));
    },
    { immediate: true }
  ), () => createCommentVNode(`${e} Layer`);
}
defineComponent({
  name: "MglCircleLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("circle", e);
  }
});
defineComponent({
  name: "MglFillLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("fill", e);
  }
});
defineComponent({
  name: "MglFillExtrusionLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("fill-extrusion", e);
  }
});
defineComponent({
  name: "MglHeatmapLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("heatmap", e);
  }
});
defineComponent({
  name: "MglHillshadeLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("hillshade", e);
  }
});
defineComponent({
  name: "MglLineLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("line", e);
  }
});
defineComponent({
  name: "MglRasterLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("raster", e);
  }
});
defineComponent({
  name: "MglSymbolLayer",
  props: I(),
  emits: [...b],
  setup(e) {
    return z("symbol", e);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProviderMarker",
  __ssrInlineRender: true,
  props: {
    markerId: { default: void 0 },
    lnglat: { default: void 0 }
  },
  setup(__props) {
    const mapConfig = computed(() => {
      const config = getSetting("map");
      return typeof config === "object" && config ? config : {};
    });
    const provider = computed(() => mapConfig.value.provider || "maplibre");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MapboxDefaultMarker = _sfc_main$1;
      const _component_MglMarker = Ie;
      if (unref(provider) === "mapbox") {
        _push(ssrRenderComponent(_component_MapboxDefaultMarker, mergeProps({
          "marker-id": __props.markerId,
          lnglat: __props.lnglat
        }, _attrs), {
          marker: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "marker", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "marker")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_MglMarker, mergeProps({ coordinates: __props.lnglat }, _attrs), {
          marker: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "marker", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "marker")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/map/ProviderMarker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "MapProviderMarker" });
export {
  __nuxt_component_1 as _
};
