import { e as eventHandler, i as useStorageProvider, j as getRouterParam, c as createError } from '../../nitro/nitro.mjs';
import sharp from 'sharp';
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
import 'vue';
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
import 'thumbhash';
import 'node:fs/promises';
import 'exiftool-vendored';
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import '@iconify/utils';
import 'ipx';

const ____thumbnailUrl__get = eventHandler(async (event) => {
  var _a;
  const { storageProvider } = useStorageProvider(event);
  let url = getRouterParam(event, "thumbnailUrl");
  if (!url) {
    throw createError({ statusCode: 400, statusMessage: "Invalid thumbnailUrl" });
  }
  url = decodeURIComponent(url);
  if (((_a = storageProvider.config) == null ? void 0 : _a.provider) === "local" && url.startsWith("/storage/")) {
    const scheme = event.node.req.headers["x-forwarded-proto"] || "http";
    url = `${scheme}://${event.node.req.headers.host}${url}`;
  }
  const photo = await fetch(url).then((res) => {
    if (!res.ok) {
      throw createError({ statusCode: 404, statusMessage: "Photo not found" });
    }
    return res.arrayBuffer();
  }).then((buf) => Buffer.from(buf));
  const sharpInst = sharp(photo).rotate();
  return await sharpInst.jpeg({ quality: 85 }).toBuffer();
});

export { ____thumbnailUrl__get as default };
//# sourceMappingURL=_...thumbnailUrl_.get.mjs.map
