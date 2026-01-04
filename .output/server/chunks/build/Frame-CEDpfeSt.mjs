import { l as __nuxt_component_0$4 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "Frame",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    bg: { type: String, required: false, default: "linear-gradient(to bottom right, #171717, #131313)" },
    icon: { type: String, required: false },
    logo: { type: String, required: false },
    image: { type: String, required: false },
    username: { type: String, required: false },
    socials: { type: Array, required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white",
        style: { backgroundImage: __props.bg }
      }, _attrs))}>`);
      if (__props.image) {
        _push(`<div class="absolute inset-0 w-full h-full bg-center opacity-10" style="${ssrRenderStyle({ backgroundImage: `url(${__props.image})` })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center text-center"><h1 class="flex gap-4 text-7xl font-bold" style="${ssrRenderStyle({ "display": "block", "line-clamp": "2", "text-overflow": "ellipsis" })}">`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.title)}</h1><p class="text-2xl max-w-3xl" style="${ssrRenderStyle({ "display": "block", "line-clamp": "3", "text-overflow": "ellipsis" })}">${ssrInterpolate(__props.description)}</p></div>`);
      if (__props.logo) {
        _push(`<img${ssrRenderAttr("src", __props.logo)} class="absolute bottom-0 left-0 p-5" style="${ssrRenderStyle({ "height": "125px", "width": "153px" })}">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute bottom-5 right-5 flex gap-4">`);
      if (__props.username) {
        _push(`<div class="absolute bottom-12 right-8 font-bold">${ssrInterpolate(__props.username)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.socials, (social) => {
        _push(ssrRenderComponent(_component_Icon, {
          key: social.name,
          name: social.icon,
          class: "w-7 h-7"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Frame-CEDpfeSt.mjs.map
