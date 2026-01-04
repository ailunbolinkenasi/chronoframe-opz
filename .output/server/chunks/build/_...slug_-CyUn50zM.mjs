import { defineComponent, computed, watch, ref, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { q as useI18n, v as useRoute, w as useRouter, D as useToast, L as useViewerState, x as usePhotos, M as useState, N as getSetting, u as useHead, F as useNuxtApp, G as useOgImageRuntimeConfig, H as setHeadOgImagePrebuilt, I as getOgImagePath, K as createOgImageMeta } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as usePhotoFilters } from './usePhotoFilters-aLj9DRyf.mjs';
import '../nitro/nitro.mjs';
import 'zod';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'stream';
import 'events';
import 'http';
import 'crypto';
import 'buffer';
import 'zlib';
import 'https';
import 'net';
import 'tls';
import 'url';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import '@intlify/h3';
import '@intlify/utils/h3';
import '@intlify/utils';
import 'vue-router';
import 'fs';
import 'path';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm';
import 'drizzle-orm/sqlite-core';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';
import '@vingle/bmp-js';
import 'heic-convert';
import 'sharp';
import 'thumbhash';
import 'node:fs/promises';
import 'exiftool-vendored';
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'ipx';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/locale/zh-cn.js';
import 'dayjs/locale/zh-hk.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'dayjs/plugin/timezone.js';
import 'dayjs/plugin/duration.js';
import 'dayjs/plugin/localizedFormat.js';
import 'dayjs/plugin/isBetween.js';
import 'tailwindcss/colors';
import '@yeger/vue-masonry-wall';
import 'tailwind-merge';
import 'perfect-debounce';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';

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
    const route = useRoute();
    const router = useRouter();
    useToast();
    const { switchToIndex, closeViewer, openViewer } = useViewerState();
    const { isViewerOpen } = storeToRefs(useViewerState());
    const { photos } = usePhotos();
    const slug = computed(() => route.params.slug || []);
    const photoId = computed(() => slug.value[0] || null);
    const currentPhoto = computed(
      () => photos.value.find((photo) => photo.id === photoId.value)
    );
    useState("hasShownUpdateToast", () => false);
    defineOgImageComponent("Photo", {
      headline: currentPhoto.value ? "PHOTO" : "ChronoFrame",
      title: currentPhoto.value?.title || getSetting("app:title"),
      description: currentPhoto.value ? currentPhoto.value.description : getSetting("app:title"),
      thumbnailJpegUrl: currentPhoto.value && currentPhoto.value.thumbnailKey ? `/thumb/${encodeURIComponent(currentPhoto.value.thumbnailUrl || "")}` : void 0,
      photo: currentPhoto.value || void 0
    });
    const { clearAllFilters, toggleFilter } = usePhotoFilters();
    watch(
      () => route.query.tag,
      (tagParam) => {
        if (tagParam && typeof tagParam === "string" && !photoId.value) {
          clearAllFilters();
          toggleFilter("tags", tagParam);
          router.replace("/");
        }
      },
      { immediate: true }
    );
    watch(
      [photoId, photos],
      ([currentPhotoId, currentPhotos]) => {
        if (currentPhotoId && currentPhotos.length > 0) {
          const foundIndex = currentPhotos.findIndex(
            (photo) => photo.id === currentPhotoId
          );
          if (foundIndex !== -1) {
            useHead({
              title: currentPhotos[foundIndex]?.title || $t("title.fallback.photo")
            });
            if (!isViewerOpen.value) {
              openViewer(foundIndex, null);
            } else {
              switchToIndex(foundIndex);
            }
          }
        } else if (!currentPhotoId) {
          closeViewer();
          useHead({
            title: ""
          });
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CyUn50zM.mjs.map
