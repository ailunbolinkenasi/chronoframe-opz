import { x as usePhotos, P as useAsyncData, Q as useMediaQuery, y as __nuxt_component_0, B as _sfc_main$2, E as useRuntimeConfig, a as __nuxt_component_0$1, m as motion, j as __nuxt_component_2, l as __nuxt_component_0$2, _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$1 } from "./Tooltip-DYR4jUlr.js";
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { photos } = usePhotos();
    const { data: albums } = useAsyncData(
      "albums",
      // @ts-nocheck
      () => $fetch("/api/albums"),
      {
        watch: []
      }
    );
    const waterfallPhotos = computed(
      () => photos.value.toSorted(() => 0.5 - Math.random()).slice(0, 30)
    );
    const isMobile = useMediaQuery("(max-width: 768px)");
    const waterfallColumnCount = computed(() => isMobile.value ? 3 : 8);
    const columnDurations = ref([]);
    const columns = computed(() => {
      const cols = Array.from(
        { length: waterfallColumnCount.value },
        () => []
      );
      if (waterfallPhotos.value.length === 0) return cols;
      const photosPerColumn = 8;
      for (let colIndex = 0; colIndex < waterfallColumnCount.value; colIndex++) {
        for (let i = 0; i < photosPerColumn; i++) {
          const photoIndex = (colIndex + i * waterfallColumnCount.value) % waterfallPhotos.value.length;
          cols[colIndex]?.push(waterfallPhotos.value[photoIndex]);
        }
      }
      return cols;
    });
    const getPhotoById = (photoId) => {
      return photos.value.find((p) => p.id === photoId) || null;
    };
    const getAlbumDisplayPhotos = (album) => {
      if (!album.photoIds || album.photoIds.length === 0) return [];
      const displayPhotos = [];
      if (album.coverPhotoId) {
        const coverPhoto = getPhotoById(album.coverPhotoId);
        if (coverPhoto) displayPhotos.push(coverPhoto);
      }
      if (displayPhotos.length === 0 && album.photoIds[0]) {
        const firstPhoto = getPhotoById(album.photoIds[0]);
        if (firstPhoto) displayPhotos.push(firstPhoto);
      }
      for (const photoId of album.photoIds) {
        if (displayPhotos.length >= 3) break;
        const photo = getPhotoById(photoId);
        if (photo && !displayPhotos.find((p) => p.id === photo.id)) {
          displayPhotos.push(photo);
        }
      }
      return displayPhotos;
    };
    const getPhotoTransform = (index2, isHover) => {
      if (index2 === 0) {
        return { x: 0, y: 0, rotate: 0, scale: 1 };
      } else if (index2 === 1) {
        return isHover ? { x: -35, y: -5, rotate: -12, scale: 0.95 } : { x: -4, y: -4, rotate: -3, scale: 0.98 };
      } else {
        return isHover ? { x: 35, y: -5, rotate: 12, scale: 0.95 } : { x: 4, y: -4, rotate: 3, scale: 0.96 };
      }
    };
    const hoveredAlbum = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_ThumbImage = __nuxt_component_2;
      const _component_UTooltip = _sfc_main$1;
      const _component_UButton = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen bg-neutral-50 dark:bg-neutral-950" }, _attrs))} data-v-424863a3><div class="absolute inset-x-0 top-0 h-[40vh] sm:h-[60vh] overflow-hidden -z-10 pointer-events-none" data-v-424863a3><div class="absolute inset-0 flex h-full gap-2 sm:gap-4 opacity-40 dark:opacity-20" data-v-424863a3><!--[-->`);
      ssrRenderList(unref(columns), (column, colIndex) => {
        _push(`<div class="flex-1 relative overflow-hidden" data-v-424863a3><div class="${ssrRenderClass([colIndex % 2 === 0 ? "animate-scroll-down" : "animate-scroll-up", "flex flex-col gap-2 sm:gap-4"])}" style="${ssrRenderStyle({
          animationDuration: unref(columnDurations)[colIndex] ? `${unref(columnDurations)[colIndex]}s` : "120s"
        })}" data-v-424863a3><!--[-->`);
        ssrRenderList(3, (groupIndex) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(column, (photo, photoIndex) => {
            _push(`<div class="w-full rounded-lg overflow-hidden" data-v-424863a3>`);
            _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 bg-gradient-to-b from-neutral-50/60 via-neutral-50/90 to-neutral-50 dark:from-neutral-950/60 dark:via-neutral-950/90 dark:to-neutral-950" data-v-424863a3></div></div><div class="absolute top-0 left-0 p-4 sm:p-6 z-20" data-v-424863a3>`);
      _push(ssrRenderComponent(_component_UTooltip, {
        text: _ctx.$t("ui.action.home.tooltip"),
        popper: { placement: "right" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray",
              icon: "tabler:arrow-left",
              class: "hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md transition-all",
              size: "lg",
              to: "/"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "ghost",
                color: "gray",
                icon: "tabler:arrow-left",
                class: "hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md transition-all",
                size: "lg",
                to: "/"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center pt-24 sm:pt-40 pb-20 px-4 text-center" data-v-424863a3><h1 class="font-black text-5xl sm:text-7xl tracking-tight drop-shadow-sm text-neutral-900 dark:text-white mb-4" data-v-424863a3>${ssrInterpolate(_ctx.$t("title.albums"))}</h1><div class="flex items-center gap-3" data-v-424863a3><span class="h-px w-8 bg-neutral-300 dark:bg-neutral-700" data-v-424863a3></span><p class="text-lg text-neutral-500 dark:text-neutral-400 font-[Pacifico]" data-v-424863a3>${ssrInterpolate(unref(config).public.app.slogan)}</p><span class="h-px w-8 bg-neutral-300 dark:bg-neutral-700" data-v-424863a3></span></div></div><div class="container mx-auto px-6 lg:px-12 pb-24" data-v-424863a3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12" data-v-424863a3><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: album.id,
          to: `/albums/${album.id}`,
          class: "group block relative",
          onMouseenter: ($event) => hoveredAlbum.value = album.id,
          onMouseleave: ($event) => hoveredAlbum.value = null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative h-56 w-full mb-6 flex justify-center items-center perspective-1000" data-v-424863a3${_scopeId}><!--[-->`);
              ssrRenderList(getAlbumDisplayPhotos(album), (photo, index2) => {
                _push2(ssrRenderComponent(unref(motion).div, {
                  key: photo.id,
                  class: ["absolute w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-white/20 dark:border-white/5", {
                    "shadow-xl shadow-neutral-200/50 dark:shadow-black/40": index2 === 0,
                    // 顶层阴影重一点
                    "shadow-md": index2 > 0
                  }],
                  initial: false,
                  animate: {
                    x: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).x,
                    y: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).y,
                    rotate: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).rotate,
                    scale: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).scale || 1,
                    zIndex: 30 - index2
                    // 确保层级正确
                  },
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ThumbImage, {
                        class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                        src: photo.thumbnailUrl,
                        thumbhash: photo.thumbnailHash,
                        alt: album.title
                      }, null, _parent3, _scopeId2));
                      if (index2 > 0) {
                        _push3(`<div class="${ssrRenderClass([unref(hoveredAlbum) === album.id ? "opacity-0" : "opacity-100", "absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-300"])}" data-v-424863a3${_scopeId2}></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode(_component_ThumbImage, {
                          class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                          src: photo.thumbnailUrl,
                          thumbhash: photo.thumbnailHash,
                          alt: album.title
                        }, null, 8, ["src", "thumbhash", "alt"]),
                        index2 > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-300", unref(hoveredAlbum) === album.id ? "opacity-0" : "opacity-100"]
                        }, null, 2)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (!album.photoIds || album.photoIds.length === 0) {
                _push2(`<div class="absolute inset-0 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 flex flex-col items-center justify-center gap-3 group-hover:border-primary-400 transition-colors" data-v-424863a3${_scopeId}><div class="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 group-hover:text-primary-500 group-hover:bg-primary-50 transition-colors" data-v-424863a3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "tabler:photo-off",
                  class: "size-6"
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-sm font-medium text-neutral-400" data-v-424863a3${_scopeId}>${ssrInterpolate(_ctx.$t("ui.album.noImage"))}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="relative px-1" data-v-424863a3${_scopeId}><div class="flex items-start justify-between gap-4 mb-1" data-v-424863a3${_scopeId}><h2 class="text-lg font-bold text-neutral-800 dark:text-neutral-100 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" data-v-424863a3${_scopeId}>${ssrInterpolate(album.title)}</h2><span class="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400" data-v-424863a3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:calendar",
                class: "size-3 mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$dayjs(album.createdAt).format("YYYY/MM"))}</span></div><p class="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2 leading-relaxed" data-v-424863a3${_scopeId}>${ssrInterpolate(album.description || _ctx.$t("ui.album.noDescription"))}</p><div class="mt-3 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-v-424863a3${_scopeId}>${ssrInterpolate(_ctx.$t("ui.action.view_album") || "View Album")} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:arrow-right",
                class: "ml-1 size-3"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative h-56 w-full mb-6 flex justify-center items-center perspective-1000" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(getAlbumDisplayPhotos(album), (photo, index2) => {
                    return openBlock(), createBlock(unref(motion).div, {
                      key: photo.id,
                      class: ["absolute w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-white/20 dark:border-white/5", {
                        "shadow-xl shadow-neutral-200/50 dark:shadow-black/40": index2 === 0,
                        // 顶层阴影重一点
                        "shadow-md": index2 > 0
                      }],
                      initial: false,
                      animate: {
                        x: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).x,
                        y: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).y,
                        rotate: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).rotate,
                        scale: getPhotoTransform(index2, unref(hoveredAlbum) === album.id).scale || 1,
                        zIndex: 30 - index2
                        // 确保层级正确
                      },
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ThumbImage, {
                          class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                          src: photo.thumbnailUrl,
                          thumbhash: photo.thumbnailHash,
                          alt: album.title
                        }, null, 8, ["src", "thumbhash", "alt"]),
                        index2 > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-300", unref(hoveredAlbum) === album.id ? "opacity-0" : "opacity-100"]
                        }, null, 2)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["class", "animate"]);
                  }), 128)),
                  !album.photoIds || album.photoIds.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute inset-0 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 flex flex-col items-center justify-center gap-3 group-hover:border-primary-400 transition-colors"
                  }, [
                    createVNode("div", { class: "p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 group-hover:text-primary-500 group-hover:bg-primary-50 transition-colors" }, [
                      createVNode(_component_Icon, {
                        name: "tabler:photo-off",
                        class: "size-6"
                      })
                    ]),
                    createVNode("p", { class: "text-sm font-medium text-neutral-400" }, toDisplayString(_ctx.$t("ui.album.noImage")), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "relative px-1" }, [
                  createVNode("div", { class: "flex items-start justify-between gap-4 mb-1" }, [
                    createVNode("h2", { class: "text-lg font-bold text-neutral-800 dark:text-neutral-100 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" }, toDisplayString(album.title), 1),
                    createVNode("span", { class: "shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400" }, [
                      createVNode(_component_Icon, {
                        name: "tabler:calendar",
                        class: "size-3 mr-1"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$dayjs(album.createdAt).format("YYYY/MM")), 1)
                    ])
                  ]),
                  createVNode("p", { class: "text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2 leading-relaxed" }, toDisplayString(album.description || _ctx.$t("ui.album.noDescription")), 1),
                  createVNode("div", { class: "mt-3 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" }, [
                    createTextVNode(toDisplayString(_ctx.$t("ui.action.view_album") || "View Album") + " ", 1),
                    createVNode(_component_Icon, {
                      name: "tabler:arrow-right",
                      class: "ml-1 size-3"
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-424863a3"]]);
export {
  index as default
};
