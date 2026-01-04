import { e as eventHandler, r as requireUserSession, D as getMethod, u as useDB, E as photos, c as createError } from '../../../nitro/nitro.mjs';
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
import 'sharp';
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

const status_get = eventHandler(async (event) => {
  await requireUserSession(event);
  const method = getMethod(event);
  if (method === "GET") {
    const recentPhotos = await useDB().select().from(photos).orderBy(photos.lastModified).limit(10).all();
    return {
      recentPhotos,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
});

export { status_get as default };
//# sourceMappingURL=status.get.mjs.map
