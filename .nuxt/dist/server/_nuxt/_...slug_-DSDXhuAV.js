import { ref, toValue, defineComponent, shallowRef, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { F as useNuxtApp, v as useRoute, G as useOgImageRuntimeConfig, H as setHeadOgImagePrebuilt, I as getOgImagePath, J as useRequestEvent, K as createOgImageMeta, q as useI18n, w as useRouter, D as useToast, L as useViewerState, x as usePhotos, M as useState, N as getSetting, u as useHead, O as useDebounceFn, _ as _export_sfc } from "../server.mjs";
import { onBeforeRouteUpdate } from "vue-router";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { storeToRefs } from "pinia";
import { appendHeader } from "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import { u as usePhotoFilters } from "./usePhotoFilters-aLj9DRyf.js";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
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
function defineOgImage(_options = {}) {
  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const basePath = route.path || "/";
  if (nuxtApp.payload.path === basePath) {
    const state = ref(false);
    state.value = true;
  }
  const { defaults } = useOgImageRuntimeConfig();
  const options = toValue(_options);
  if (options === false) {
    return;
  }
  const validOptions = options;
  for (const key in defaults) {
    if (validOptions[key] === void 0)
      validOptions[key] = defaults[key];
  }
  if (route.query)
    validOptions._query = route.query;
  if (validOptions.url) {
    setHeadOgImagePrebuilt(validOptions);
    return;
  }
  const path = getOgImagePath(basePath, validOptions);
  if (import.meta.prerender) {
    appendHeader(useRequestEvent(nuxtApp), "x-nitro-prerender", path);
  }
  createOgImageMeta(path, validOptions, nuxtApp.ssrContext);
}
function defineOgImageComponent(component, props = {}, options = {}) {
  return defineOgImage({
    ...options,
    component,
    props
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useRoute();
    const router = useRouter();
    useToast();
    const { switchToIndex, closeViewer, openViewer } = useViewerState();
    const { isViewerOpen } = storeToRefs(useViewerState());
    const { photos } = usePhotos();
    const slug = shallowRef([]);
    useState("hasShownUpdateToast", () => false);
    const photoId = computed(() => slug.value[0] ?? null);
    const currentPhoto = computed(() => {
      if (!photoId.value) return null;
      return photos.value.find((p) => p.id === photoId.value) ?? null;
    }, { onlyTrackArrayElements: false });
    const ogImageConfig = computed(() => ({
      headline: currentPhoto.value ? "PHOTO" : "ChronoFrame",
      title: currentPhoto.value?.title || getSetting("app:title"),
      description: currentPhoto.value?.description || getSetting("app:title"),
      thumbnailJpegUrl: currentPhoto.value?.thumbnailKey ? `/thumb/${encodeURIComponent(currentPhoto.value.thumbnailUrl || "")}` : void 0,
      photo: currentPhoto.value || void 0
    }));
    defineOgImageComponent("Photo", ogImageConfig);
    const { clearAllFilters, toggleFilter } = usePhotoFilters();
    const handleTagFilter = useDebounceFn((tagParam) => {
      if (tagParam && typeof tagParam === "string" && !photoId.value) {
        clearAllFilters();
        toggleFilter("tags", tagParam);
        router.replace("/");
      }
    }, 300);
    onBeforeRouteUpdate(async (to, from) => {
      slug.value = to.params.slug || [];
      const newPhotoId = slug.value[0] ?? null;
      if (newPhotoId && photos.value.length > 0) {
        const foundIndex = photos.value.findIndex((p) => p.id === newPhotoId);
        if (foundIndex !== -1) {
          useHead({
            title: photos.value[foundIndex]?.title || $t("title.fallback.photo")
          });
          if (!isViewerOpen.value) {
            openViewer(foundIndex, null);
          } else {
            switchToIndex(foundIndex);
          }
        }
      } else if (!newPhotoId) {
        closeViewer();
        useHead({ title: "" });
      }
      handleTagFilter(to.query.tag);
    });
    watch(
      () => photos.value.length,
      (length) => {
        if (photoId.value && length > 0) {
          const foundIndex = photos.value.findIndex((p) => p.id === photoId.value);
          if (foundIndex !== -1 && isViewerOpen.value) {
            switchToIndex(foundIndex);
          }
        }
      },
      { immediate: false }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sr-only" }, _attrs))} data-v-099fff77>Photo viewer page</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-099fff77"]]);
export {
  ____slug_ as default
};
