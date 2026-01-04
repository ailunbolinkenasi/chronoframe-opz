import { aR as useGtag, aS as useDomRef, aT as useLivePhotoProcessor, P as useMediaQuery, j as __nuxt_component_2$1, m as motion, aU as __nuxt_component_1$2, R as _sfc_main$8, l as __nuxt_component_0$4, aV as formatCameraInfo } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Photo",
  __ssrInlineRender: true,
  props: {
    photo: {},
    index: {}
  },
  emits: ["visibility-change", "openViewer"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useGtag();
    const isLoading = ref(true);
    const photoRef = ref();
    const videoRef = useDomRef();
    ref(false);
    ref(0);
    const isHovering = ref(false);
    const isVideoPlaying = ref(false);
    const isVideoLoaded = ref(false);
    ref(null);
    const videoBlobUrl = ref(null);
    const { getProcessingState } = useLivePhotoProcessor();
    const isTouching = ref(false);
    ref(0);
    ref(null);
    ref(null);
    const isMobile = useMediaQuery("(max-width: 768px)");
    ref(null);
    ref(null);
    const processingState = getProcessingState(props.photo.id);
    const aspectRatio = computed(() => {
      if (props.photo.aspectRatio) {
        return props.photo.aspectRatio;
      }
      if (props.photo.width && props.photo.height) {
        return props.photo.height / props.photo.width;
      }
      return 1.2;
    });
    const shouldShowInfoOverlay = computed(() => {
      if (!props.photo.isLivePhoto) return true;
      if (isMobile.value) {
        if (isTouching.value || isVideoPlaying.value) return false;
        return true;
      }
      if (!isHovering.value) return true;
      if (isVideoPlaying.value) return false;
      return isVideoLoaded.value;
    });
    const handleImageLoad = () => {
      isLoading.value = false;
    };
    const handleImageError = () => {
      isLoading.value = false;
      console.warn(`Failed to load image: ${props.photo.thumbnailUrl}`);
    };
    const handleVideoEnded = () => {
      if (isMobile.value && "vibrate" in void 0) {
        (void 0).vibrate(30);
      }
      setTimeout(() => {
        isVideoPlaying.value = false;
      }, 100);
    };
    const formatExposureTime = (exposureTime) => {
      if (!exposureTime) return "";
      let seconds;
      if (typeof exposureTime === "string") {
        if (exposureTime.includes("/")) {
          const parts = exposureTime.split("/");
          if (parts.length === 2 && parts[0] && parts[1]) {
            const numerator = parseFloat(parts[0]);
            const denominator = parseFloat(parts[1]);
            if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
              seconds = numerator / denominator;
            } else {
              return exposureTime;
            }
          } else {
            return exposureTime;
          }
        } else {
          seconds = parseFloat(exposureTime);
          if (isNaN(seconds)) {
            return exposureTime;
          }
        }
      } else {
        seconds = exposureTime;
      }
      if (seconds >= 1) {
        return `${seconds}s`;
      } else {
        const denominator = Math.round(1 / seconds);
        return `1/${denominator}`;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThumbImage = __nuxt_component_2$1;
      const _component_PhotoLivePhotoIndicator = __nuxt_component_1$2;
      const _component_UBadge = _sfc_main$8;
      const _component_Icon = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "photoRef",
        ref: photoRef,
        class: "w-full transition-all duration-300 cursor-pointer select-none",
        style: {
          transform: "translateZ(0)"
        }
      }, _attrs))}><div class="relative group overflow-hidden transition-all duration-300"><div class="w-full relative" style="${ssrRenderStyle({ aspectRatio: unref(aspectRatio) })}">`);
      _push(ssrRenderComponent(_component_ThumbImage, {
        src: __props.photo.thumbnailUrl || "",
        alt: __props.photo.title || "Photo thumbnail",
        thumbhash: __props.photo.thumbnailHash || "",
        class: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
        onLoad: handleImageLoad,
        onError: handleImageError
      }, null, _parent));
      if (__props.photo.isLivePhoto && unref(videoBlobUrl)) {
        _push(ssrRenderComponent(unref(motion).video, {
          ref_key: "videoRef",
          ref: videoRef,
          src: unref(videoBlobUrl),
          class: ["absolute inset-0 w-full h-full object-cover", { "select-none pointer-events-none": unref(isVideoPlaying) }],
          muted: "",
          playsinline: "",
          preload: "metadata",
          initial: {
            opacity: 0,
            scale: 1.02
          },
          animate: {
            opacity: unref(isVideoPlaying) ? 1 : 0,
            scale: unref(isVideoPlaying) ? 1 : 1.02
          },
          transition: {
            duration: unref(isVideoPlaying) ? 0.3 : 0.2,
            ease: unref(isVideoPlaying) ? [0.23, 1, 0.32, 1] : [0.25, 0.46, 0.45, 0.94],
            delay: unref(isVideoPlaying) ? 0.05 : 0
          },
          onEnded: handleVideoEnded,
          onLoadeddata: () => {
            if (unref(videoRef) && !unref(isVideoPlaying)) {
              unref(videoRef).currentTime = 0.1;
              unref(videoRef).pause();
            }
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>`);
      if (__props.photo.isLivePhoto) {
        _push(ssrRenderComponent(_component_PhotoLivePhotoIndicator, {
          class: "absolute top-2 left-2",
          photo: __props.photo,
          "is-video-playing": unref(isVideoPlaying),
          "processing-state": unref(processingState) || null
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(motion).div, {
        style: unref(shouldShowInfoOverlay) ? null : { display: "none" },
        class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3",
        initial: { y: "100%", opacity: 0 },
        animate: {
          y: unref(shouldShowInfoOverlay) && unref(isHovering) && !unref(isMobile) ? 0 : "100%",
          opacity: unref(shouldShowInfoOverlay) && unref(isHovering) && !unref(isMobile) ? 1 : 0
        },
        transition: {
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white flex flex-col gap-1"${_scopeId}><div class="flex flex-col"${_scopeId}>`);
            if (__props.photo.title) {
              _push2(`<p class="text-base font-medium text-ellipsis line-clamp-1"${_scopeId}>${ssrInterpolate(__props.photo.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.photo.description) {
              _push2(`<p class="text-xs text-justify opacity-80 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.photo.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.photo.dateTaken || __props.photo.city) {
              _push2(`<p class="text-xs font-medium opacity-80"${_scopeId}>`);
              if (__props.photo.dateTaken) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$dayjs(__props.photo.dateTaken).format("YYYY-MM-DD"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.photo.city) {
                _push2(`<span${_scopeId}>`);
                if (__props.photo.dateTaken) {
                  _push2(`<span${_scopeId}> · </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`${ssrInterpolate(__props.photo.city)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.photo.tags?.length) {
              _push2(`<div class="mt-1 flex items-center gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(__props.photo.tags, (tag) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: tag,
                  size: "sm",
                  color: "neutral",
                  class: "bg-white/20 text-white/80 backdrop-blur-3xl"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}>`);
            if (__props.photo.exif && (__props.photo.exif.Make || __props.photo.exif.Model)) {
              _push2(`<div class="text-sm opacity-70 mt-1 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "tabler:camera" }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-medium text-ellipsis line-clamp-1"${_scopeId}>${ssrInterpolate(unref(formatCameraInfo)(__props.photo.exif.Make, __props.photo.exif.Model))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.photo.exif && (__props.photo.exif.FNumber || __props.photo.exif.ExposureTime || __props.photo.exif.ISO)) {
              _push2(`<div class="text-sm opacity-70 mt-1 flex gap-2"${_scopeId}>`);
              if (__props.photo.exif.FocalLengthIn35mmFormat) {
                _push2(`<div class="flex items-center gap-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "streamline:image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens",
                  class: "-mt-0.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs font-medium"${_scopeId}>${ssrInterpolate(__props.photo.exif.FocalLengthIn35mmFormat)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.photo.exif.FNumber) {
                _push2(`<div class="flex items-center gap-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:aperture",
                  class: "-mt-0.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs font-medium"${_scopeId}> f/${ssrInterpolate(__props.photo.exif.FNumber)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.photo.exif.ExposureTime) {
                _push2(`<div class="flex items-center gap-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "material-symbols:shutter-speed",
                  class: "-mt-0.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs font-medium"${_scopeId}>${ssrInterpolate(formatExposureTime(__props.photo.exif.ExposureTime))}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.photo.exif.ISO) {
                _push2(`<div class="flex items-center gap-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "carbon:iso-outline",
                  class: "-mt-0.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs font-medium"${_scopeId}>${ssrInterpolate(__props.photo.exif.ISO)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-white flex flex-col gap-1" }, [
                createVNode("div", { class: "flex flex-col" }, [
                  __props.photo.title ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-base font-medium text-ellipsis line-clamp-1"
                  }, toDisplayString(__props.photo.title), 1)) : createCommentVNode("", true),
                  __props.photo.description ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-xs text-justify opacity-80 line-clamp-2"
                  }, toDisplayString(__props.photo.description), 1)) : createCommentVNode("", true),
                  __props.photo.dateTaken || __props.photo.city ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: "text-xs font-medium opacity-80"
                  }, [
                    __props.photo.dateTaken ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$dayjs(__props.photo.dateTaken).format("YYYY-MM-DD")), 1)) : createCommentVNode("", true),
                    __props.photo.city ? (openBlock(), createBlock("span", { key: 1 }, [
                      __props.photo.dateTaken ? (openBlock(), createBlock("span", { key: 0 }, " · ")) : createCommentVNode("", true),
                      createTextVNode(toDisplayString(__props.photo.city), 1)
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                __props.photo.tags?.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-1 flex items-center gap-1"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.photo.tags, (tag) => {
                    return openBlock(), createBlock(_component_UBadge, {
                      key: tag,
                      size: "sm",
                      color: "neutral",
                      class: "bg-white/20 text-white/80 backdrop-blur-3xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ])) : createCommentVNode("", true),
                createVNode("div", null, [
                  __props.photo.exif && (__props.photo.exif.Make || __props.photo.exif.Model) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-sm opacity-70 mt-1 flex items-center gap-1"
                  }, [
                    createVNode(_component_Icon, { name: "tabler:camera" }),
                    createVNode("span", { class: "text-xs font-medium text-ellipsis line-clamp-1" }, toDisplayString(unref(formatCameraInfo)(__props.photo.exif.Make, __props.photo.exif.Model)), 1)
                  ])) : createCommentVNode("", true),
                  __props.photo.exif && (__props.photo.exif.FNumber || __props.photo.exif.ExposureTime || __props.photo.exif.ISO) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-sm opacity-70 mt-1 flex gap-2"
                  }, [
                    __props.photo.exif.FocalLengthIn35mmFormat ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center gap-0.5"
                    }, [
                      createVNode(_component_Icon, {
                        name: "streamline:image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens",
                        class: "-mt-0.5"
                      }),
                      createVNode("span", { class: "text-xs font-medium" }, toDisplayString(__props.photo.exif.FocalLengthIn35mmFormat), 1)
                    ])) : createCommentVNode("", true),
                    __props.photo.exif.FNumber ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center gap-0.5"
                    }, [
                      createVNode(_component_Icon, {
                        name: "tabler:aperture",
                        class: "-mt-0.5"
                      }),
                      createVNode("span", { class: "text-xs font-medium" }, " f/" + toDisplayString(__props.photo.exif.FNumber), 1)
                    ])) : createCommentVNode("", true),
                    __props.photo.exif.ExposureTime ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex items-center gap-0.5"
                    }, [
                      createVNode(_component_Icon, {
                        name: "material-symbols:shutter-speed",
                        class: "-mt-0.5"
                      }),
                      createVNode("span", { class: "text-xs font-medium" }, toDisplayString(formatExposureTime(__props.photo.exif.ExposureTime)), 1)
                    ])) : createCommentVNode("", true),
                    __props.photo.exif.ISO ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "flex items-center gap-0.5"
                    }, [
                      createVNode(_component_Icon, {
                        name: "carbon:iso-outline",
                        class: "-mt-0.5"
                      }),
                      createVNode("span", { class: "text-xs font-medium" }, toDisplayString(__props.photo.exif.ISO), 1)
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/masonry/item/Photo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_28 = Object.assign(_sfc_main, { __name: "MasonryItemPhoto" });

export { __nuxt_component_28 as _ };
//# sourceMappingURL=Photo-D3FCyxMB.mjs.map
