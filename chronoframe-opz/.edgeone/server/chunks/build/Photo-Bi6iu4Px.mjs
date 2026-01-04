import { E as useRuntimeConfig, l as __nuxt_component_0$4, aV as formatCameraInfo } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'pinia';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Photo",
  __ssrInlineRender: true,
  props: {
    photo: { default: void 0 },
    title: { default: "title" },
    description: { default: "" },
    headline: { default: "headline" },
    thumbnailJpegUrl: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const config = useRuntimeConfig();
    const title = computed(() => (props.title || "").slice(0, 60));
    const description = computed(() => (props.description || "").slice(0, 200));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col justify-center bg-neutral-950 relative" }, _attrs))}>`);
      if (__props.thumbnailJpegUrl) {
        _push(`<img${ssrRenderAttr("src", __props.thumbnailJpegUrl)} class="absolute inset-y-0 right-0 object-cover" width="60%" height="100%">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.thumbnailJpegUrl) {
        _push(`<div class="absolute inset-y-0 right-0 w-[60%]" style="${ssrRenderStyle({
          background: "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 35%, rgba(10,10,10,0.1) 100%)"
        })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-full flex flex-col justify-between pl-24 py-16 bg-neutral-950/10"><div class="flex flex-col">`);
      if (__props.headline) {
        _push(`<p class="m-0 uppercase text-4xl text-rose-500 mb-2 font-semibold">${ssrInterpolate(__props.headline)} · ${ssrInterpolate(unref(config).public.app.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(title)) {
        _push(`<h1 class="m-0 text-8xl font-bold mb-2 text-white max-w-4/5" style="${ssrRenderStyle({ "display": "block", "line-clamp": "1", "text-overflow": "ellipsis" })}">${ssrInterpolate(unref(title))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(description)) {
        _push(`<p class="m-0 text-3xl text-neutral-300 font-bold mb-2 max-w-2/3" style="${ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">${ssrInterpolate(unref(description))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.photo) {
        _push(`<div class="flex flex-row items-center gap-3 text-neutral-300 text-3xl font-bold mt-6">`);
        if (__props.photo.city) {
          _push(`<div class="flex flex-row items-center gap-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "tabler:map-pin",
            class: "size-10",
            mode: "svg"
          }, null, _parent));
          _push(`<span class="truncate">${ssrInterpolate(__props.photo.city)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.photo.exif?.Model) {
          _push(`<div class="flex flex-row items-center gap-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "tabler:camera",
            class: "size-10",
            mode: "svg"
          }, null, _parent));
          _push(`<span class="truncate">${ssrInterpolate(unref(formatCameraInfo)(__props.photo.exif.Make, __props.photo.exif.Model))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.photo) {
        _push(`<div class="flex flex-row items-center flex-wrap gap-4 max-w-full text-neutral-300 text-4xl font-medium mt-8"><div class="rounded-3xl border-4 border-neutral-300/30 bg-neutral-300/20 backdrop-blur-2xl px-6 py-4 flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "streamline:image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens",
          class: "size-14 text-amber-400",
          mode: "svg"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(__props.photo.exif?.FocalLengthIn35mmFormat || "—")}</span></div><div class="rounded-3xl border-4 border-neutral-300/30 bg-neutral-300/20 backdrop-blur-2xl px-6 py-4 flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "tabler:aperture",
          class: "size-14 text-purple-400",
          mode: "svg"
        }, null, _parent));
        _push(`<span class="truncate"> f/${ssrInterpolate(__props.photo.exif?.FNumber || "—")}</span></div><div class="rounded-3xl border-4 border-neutral-300/30 bg-neutral-300/20 backdrop-blur-2xl px-6 py-4 flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:shutter-speed",
          class: "size-14 text-emerald-400",
          mode: "svg"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(__props.photo.exif?.ExposureTime || "—")}s </span></div><div class="rounded-3xl border-4 border-neutral-300/30 bg-neutral-300/20 backdrop-blur-2xl px-6 py-4 flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:iso-outline",
          class: "size-14 text-sky-400",
          mode: "svg"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(__props.photo.exif?.ISO || "—")}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/Photo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Photo = Object.assign(_sfc_main, { __name: "OgImagePhoto" });

export { Photo as default };
//# sourceMappingURL=Photo-Bi6iu4Px.mjs.map
