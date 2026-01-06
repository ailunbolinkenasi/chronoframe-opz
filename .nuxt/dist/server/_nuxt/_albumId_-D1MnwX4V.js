import { m as motion, v as useRoute, w as useRouter, aL as useFetch, c as createError, n as useDayjs, Q as useMediaQuery, W as _sfc_main$2, j as __nuxt_component_2, B as _sfc_main$3, k as _sfc_main$4, l as __nuxt_component_0, L as useViewerState } from "../server.mjs";
import { _ as __nuxt_component_28 } from "./Photo-BszBA6M8.js";
import { defineComponent, computed, unref, mergeProps, withCtx, createVNode, useSSRContext, withAsyncContext, ref, resolveComponent, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./Tooltip-DYR4jUlr.js";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "tailwind-merge";
import "D:/chronoframe-opz/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "thumbhash";
import "D:/chronoframe-opz/shared/utils/u8array.ts";
import "swiper/vue";
import "swiper/modules";
import "file-type";
import "D:/chronoframe-opz/shared/types/map.ts";
import "dayjs/locale/zh-tw.js";
import "./PopperArrow-Ddp-yvF2.js";
import "./floating-ui.vue-JO3O6Egx.js";
import "./DismissableLayer-8FDXRr8x.js";
import "./useId-CmnGJZbL.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    photo: {},
    index: {},
    hasAnimated: { type: Boolean },
    firstScreenItems: { default: 30 }
  },
  emits: ["animationComplete", "visibility-change", "openViewer"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const itemKey = computed(() => {
      return props.photo.id;
    });
    const shouldAnimate = computed(() => {
      return !props.hasAnimated && props.index < props.firstScreenItems;
    });
    const animateDelay = computed(() => {
      return props.index * 0.02;
    });
    const itemVariants = {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(6px)"
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0,
          delay: animateDelay.value
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MasonryItemPhoto = __nuxt_component_28;
      _push(ssrRenderComponent(unref(motion).div, mergeProps({
        key: unref(itemKey),
        "data-photo-id": __props.photo.id,
        variants: unref(shouldAnimate) ? itemVariants : void 0,
        initial: unref(shouldAnimate) ? "hidden" : "visible",
        animate: "visible",
        class: "w-full",
        onAnimationComplete: () => {
          if (unref(shouldAnimate)) emit("animationComplete");
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MasonryItemPhoto, {
              photo: __props.photo,
              index: __props.index,
              onVisibilityChange: ($event) => emit("visibility-change", $event),
              onOpenViewer: ($event) => emit("openViewer", $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MasonryItemPhoto, {
                photo: __props.photo,
                index: __props.index,
                onVisibilityChange: ($event) => emit("visibility-change", $event),
                onOpenViewer: ($event) => emit("openViewer", $event)
              }, null, 8, ["photo", "index", "onVisibilityChange", "onOpenViewer"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/masonry/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "MasonryItem" });
const MASONRY_GAP = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[albumId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const dayjs = useDayjs();
    const albumId = computed(() => {
      const id = route.params.albumId;
      return parseInt(id, 10);
    });
    const {
      data: album,
      error,
      pending
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/albums/${albumId.value}`, {
      watch: [albumId]
    }, "$uo2msZufrb")), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Album not found"
      });
    }
    const albumData = computed(() => album.value);
    const albumStats = computed(() => {
      if (!albumData.value) return null;
      const photos = albumData.value.photos || [];
      const totalPhotos = photos.length;
      const photosWithDates = photos.filter((p) => p.dateTaken).length;
      const photosWithExif = photos.filter((p) => p.exif).length;
      const allDates = photos.map((p) => p?.dateTaken).filter((date) => Boolean(date)).map((date) => dayjs(date)).sort((a, b) => a.isBefore(b) ? -1 : 1);
      const dateRange = allDates.length > 0 ? {
        start: allDates[0],
        end: allDates[allDates.length - 1]
      } : null;
      return {
        total: totalPhotos,
        withDates: photosWithDates,
        withExif: photosWithExif,
        dateRange
      };
    });
    const dateRangeText = computed(() => {
      const range = albumStats.value?.dateRange;
      if (!range || !range.start || !range.end) return null;
      if (range.start.isSame(range.end, "day")) {
        return range.start.format("ll");
      } else if (range.start.isSame(range.end, "month")) {
        return range.start.format("MMM YYYY");
      } else if (range.start.isSame(range.end, "year")) {
        return `${range.start.format("MMM")} - ${range.end.format("MMM YYYY")}`;
      } else {
        return `${range.start.format("ll")} - ${range.end.format("ll")}`;
      }
    });
    const masonryItems = computed(() => {
      return albumData.value?.photos?.map((photo, index) => ({
        id: photo.id,
        photo,
        originalIndex: index
      })) ?? [];
    });
    const isMobile = useMediaQuery("(max-width: 768px)");
    const columnWidth = computed(() => isMobile.value ? 280 : 280);
    const maxColumns = computed(() => isMobile.value ? 2 : 8);
    const minColumns = computed(() => isMobile.value ? 2 : 2);
    const handleOpenViewer = (index) => {
      const photos = albumData.value?.photos;
      if (photos && photos[index]) {
        const { openViewer } = useViewerState();
        const albumRoute = `/albums/${albumId.value}`;
        openViewer(0, albumRoute);
        router.push(`/${photos[index].id}`);
      }
    };
    const coverPhoto = computed(() => {
      const album2 = albumData.value;
      if (!album2?.photos) return null;
      if (album2.coverPhotoId) {
        const cover = album2.photos.find((p) => p.id === album2.coverPhotoId);
        if (cover) return cover;
      }
      return album2.photos[0] || null;
    });
    const scrollToTop = () => {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    const showFloatingActions = ref(false);
    const goBackToAlbums = () => {
      router.push("/albums");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$2;
      const _component_ThumbImage = __nuxt_component_2;
      const _component_UButton = _sfc_main$3;
      const _component_AnimatePresence = _sfc_main$4;
      const _component_Icon = __nuxt_component_0;
      const _component_MasonryWall = resolveComponent("MasonryWall");
      const _component_MasonryItem = __nuxt_component_5;
      const _component_UTooltip = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="flex flex-col items-center justify-center min-h-[50vh] gap-4">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "tabler:loader",
          class: "animate-spin size-8 text-primary-600"
        }, null, _parent));
        _push(`<p class="text-sm text-neutral-600 dark:text-neutral-400">${ssrInterpolate(_ctx.$t("ui.loading"))}</p></div>`);
      } else if (unref(albumData)) {
        _push(`<!--[-->`);
        if (unref(coverPhoto)) {
          _push(`<div class="absolute inset-0 h-2/3 sm:h-[500px] overflow-hidden -z-10">`);
          _push(ssrRenderComponent(_component_ThumbImage, {
            src: unref(coverPhoto).thumbnailUrl || "",
            thumbhash: unref(coverPhoto).thumbnailHash,
            alt: unref(albumData).title,
            class: "w-full h-full object-cover opacity-40 dark:opacity-20 scale-110 saturate-150"
          }, null, _parent));
          _push(`<div class="absolute -inset-1 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-900/50 dark:to-neutral-900 backdrop-blur-xl sm:backdrop-blur-2xl"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-4 z-10">`);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "ghost",
          color: "neutral",
          icon: "tabler:arrow-left",
          size: "sm",
          onClick: goBackToAlbums
        }, null, _parent));
        _push(`</div><div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">`);
        _push(ssrRenderComponent(_component_AnimatePresence, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(motion).div, {
                class: "flex flex-col gap-6",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4 }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><h1 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight"${_scopeId2}>${ssrInterpolate(unref(albumData).title)}</h1></div><div class="flex flex-col gap-4"${_scopeId2}><p class="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl"${_scopeId2}>${ssrInterpolate(unref(albumData).description || _ctx.$t("album.noDescription"))}</p><div class="flex flex-wrap items-center gap-4 text-sm"${_scopeId2}><div class="flex items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:photo",
                      class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-neutral-700 dark:text-neutral-200"${_scopeId2}><span class="text-neutral-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(albumStats)?.total || 0)}</span><span class="text-neutral-500 dark:text-neutral-400 ml-1"${_scopeId2}>${ssrInterpolate(_ctx.$t("album.metadata.photos"))}</span></span></div>`);
                    if (unref(dateRangeText)) {
                      _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "tabler:calendar",
                        class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-neutral-700 dark:text-neutral-200"${_scopeId2}>${ssrInterpolate(unref(dateRangeText))}</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex items-center gap-1"${ssrRenderAttr("title", `Created: ${_ctx.$dayjs(unref(albumData).createdAt).format("YYYY-MM-DD HH:mm:ss")}`)}${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:clock-plus",
                      class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-neutral-700 dark:text-neutral-200"${_scopeId2}>${ssrInterpolate(_ctx.$t("album.metadata.created"))} ${ssrInterpolate(_ctx.$dayjs(unref(albumData).createdAt).fromNow())}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h1", { class: "text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight" }, toDisplayString(unref(albumData).title), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("p", { class: "text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl" }, toDisplayString(unref(albumData).description || _ctx.$t("album.noDescription")), 1),
                        createVNode("div", { class: "flex flex-wrap items-center gap-4 text-sm" }, [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode(_component_Icon, {
                              name: "tabler:photo",
                              class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                            }),
                            createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, [
                              createVNode("span", { class: "text-neutral-900 dark:text-white" }, toDisplayString(unref(albumStats)?.total || 0), 1),
                              createVNode("span", { class: "text-neutral-500 dark:text-neutral-400 ml-1" }, toDisplayString(_ctx.$t("album.metadata.photos")), 1)
                            ])
                          ]),
                          unref(dateRangeText) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center gap-1"
                          }, [
                            createVNode(_component_Icon, {
                              name: "tabler:calendar",
                              class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                            }),
                            createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, toDisplayString(unref(dateRangeText)), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("div", {
                            class: "flex items-center gap-1",
                            title: `Created: ${_ctx.$dayjs(unref(albumData).createdAt).format("YYYY-MM-DD HH:mm:ss")}`
                          }, [
                            createVNode(_component_Icon, {
                              name: "tabler:clock-plus",
                              class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                            }),
                            createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, toDisplayString(_ctx.$t("album.metadata.created")) + " " + toDisplayString(_ctx.$dayjs(unref(albumData).createdAt).fromNow()), 1)
                          ], 8, ["title"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(motion).div, {
                  class: "flex flex-col gap-6",
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4 }
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h1", { class: "text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight" }, toDisplayString(unref(albumData).title), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("p", { class: "text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl" }, toDisplayString(unref(albumData).description || _ctx.$t("album.noDescription")), 1),
                      createVNode("div", { class: "flex flex-wrap items-center gap-4 text-sm" }, [
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode(_component_Icon, {
                            name: "tabler:photo",
                            class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                          }),
                          createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, [
                            createVNode("span", { class: "text-neutral-900 dark:text-white" }, toDisplayString(unref(albumStats)?.total || 0), 1),
                            createVNode("span", { class: "text-neutral-500 dark:text-neutral-400 ml-1" }, toDisplayString(_ctx.$t("album.metadata.photos")), 1)
                          ])
                        ]),
                        unref(dateRangeText) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-1"
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:calendar",
                            class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                          }),
                          createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, toDisplayString(unref(dateRangeText)), 1)
                        ])) : createCommentVNode("", true),
                        createVNode("div", {
                          class: "flex items-center gap-1",
                          title: `Created: ${_ctx.$dayjs(unref(albumData).createdAt).format("YYYY-MM-DD HH:mm:ss")}`
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:clock-plus",
                            class: "size-4 -mt-0.5 text-neutral-400 dark:text-neutral-500"
                          }),
                          createVNode("span", { class: "text-neutral-700 dark:text-neutral-200" }, toDisplayString(_ctx.$t("album.metadata.created")) + " " + toDisplayString(_ctx.$dayjs(unref(albumData).createdAt).fromNow()), 1)
                        ], 8, ["title"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">`);
        _push(ssrRenderComponent(unref(motion).div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2, duration: 0.4 }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(albumStats)?.total === 0) {
                _push2(`<div class="flex flex-col items-center justify-center gap-6 px-4"${_scopeId}><div class="flex flex-col items-center gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:library-photo",
                  class: "size-20 text-neutral-300 dark:text-neutral-600"
                }, null, _parent2, _scopeId));
                _push2(`<div class="text-center"${_scopeId}><p class="text-xl font-normal text-neutral-800 dark:text-neutral-200 mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("album.emptyAlbumTitle"))}</p></div></div></div>`);
              } else {
                _push2(ssrRenderComponent(_component_MasonryWall, {
                  items: unref(masonryItems),
                  "column-width": unref(columnWidth),
                  gap: MASONRY_GAP,
                  "min-columns": unref(minColumns),
                  "max-columns": unref(maxColumns),
                  "ssr-columns": 2,
                  "key-mapper": (_item, _column, _row, index) => unref(masonryItems)[index]?.originalIndex ?? index
                }, {
                  default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (item.photo && typeof item.originalIndex === "number") {
                        _push3(ssrRenderComponent(_component_MasonryItem, {
                          key: item.photo.id,
                          photo: item.photo,
                          index: item.originalIndex,
                          "has-animated": false,
                          "first-screen-items": 50,
                          onOpenViewer: ($event) => handleOpenViewer($event)
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        item.photo && typeof item.originalIndex === "number" ? (openBlock(), createBlock(_component_MasonryItem, {
                          key: item.photo.id,
                          photo: item.photo,
                          index: item.originalIndex,
                          "has-animated": false,
                          "first-screen-items": 50,
                          onOpenViewer: ($event) => handleOpenViewer($event)
                        }, null, 8, ["photo", "index", "onOpenViewer"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
            } else {
              return [
                unref(albumStats)?.total === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col items-center justify-center gap-6 px-4"
                }, [
                  createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                    createVNode(_component_Icon, {
                      name: "tabler:library-photo",
                      class: "size-20 text-neutral-300 dark:text-neutral-600"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("p", { class: "text-xl font-normal text-neutral-800 dark:text-neutral-200 mb-2" }, toDisplayString(_ctx.$t("album.emptyAlbumTitle")), 1)
                    ])
                  ])
                ])) : (openBlock(), createBlock(_component_MasonryWall, {
                  key: 1,
                  items: unref(masonryItems),
                  "column-width": unref(columnWidth),
                  gap: MASONRY_GAP,
                  "min-columns": unref(minColumns),
                  "max-columns": unref(maxColumns),
                  "ssr-columns": 2,
                  "key-mapper": (_item, _column, _row, index) => unref(masonryItems)[index]?.originalIndex ?? index
                }, {
                  default: withCtx(({ item }) => [
                    item.photo && typeof item.originalIndex === "number" ? (openBlock(), createBlock(_component_MasonryItem, {
                      key: item.photo.id,
                      photo: item.photo,
                      index: item.originalIndex,
                      "has-animated": false,
                      "first-screen-items": 50,
                      onOpenViewer: ($event) => handleOpenViewer($event)
                    }, null, 8, ["photo", "index", "onOpenViewer"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["items", "column-width", "min-columns", "max-columns", "key-mapper"]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center min-h-[50vh] gap-6"><div class="flex flex-col items-center gap-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "tabler:alert-circle",
          class: "size-20 text-red-400"
        }, null, _parent));
        _push(`<div class="text-center"><p class="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">${ssrInterpolate(_ctx.$t("album.failedToLoadTitle"))}</p><p class="text-base text-neutral-600 dark:text-neutral-400 max-w-md">${ssrInterpolate(_ctx.$t("album.failedToLoadDescription"))}</p></div></div>`);
        _push(ssrRenderComponent(_component_UButton, { onClick: goBackToAlbums }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("album.backToAlbums"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("album.backToAlbums")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (unref(showFloatingActions)) {
        _push(ssrRenderComponent(unref(motion).div, {
          class: "fixed bottom-6 right-6 z-50",
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 0.2 }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTooltip, {
                text: _ctx.$t("ui.action.backtotop.tooltip") || "回到顶部"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "soft",
                      color: "neutral",
                      class: "cursor-pointer bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex justify-center items-center rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50",
                      icon: "tabler:arrow-up",
                      size: "lg",
                      "aria-label": _ctx.$t("ui.action.backtotop.ariaLabel") || "回到顶部",
                      onClick: scrollToTop
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        variant: "soft",
                        color: "neutral",
                        class: "cursor-pointer bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex justify-center items-center rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50",
                        icon: "tabler:arrow-up",
                        size: "lg",
                        "aria-label": _ctx.$t("ui.action.backtotop.ariaLabel") || "回到顶部",
                        onClick: scrollToTop
                      }, null, 8, ["aria-label"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTooltip, {
                  text: _ctx.$t("ui.action.backtotop.tooltip") || "回到顶部"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      variant: "soft",
                      color: "neutral",
                      class: "cursor-pointer bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm flex justify-center items-center rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50",
                      icon: "tabler:arrow-up",
                      size: "lg",
                      "aria-label": _ctx.$t("ui.action.backtotop.ariaLabel") || "回到顶部",
                      onClick: scrollToTop
                    }, null, 8, ["aria-label"])
                  ]),
                  _: 1
                }, 8, ["text"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[albumId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
