import { e as eventHandler, a as readValidatedBody, K as settingsManager } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
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

const site_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      title: z.string().min(1),
      slogan: z.string().optional(),
      avatarUrl: z.string().optional(),
      author: z.string().optional()
    }).parse
  );
  await settingsManager.set("app", "title", body.title);
  if (body.slogan) await settingsManager.set("app", "slogan", body.slogan);
  if (body.avatarUrl) await settingsManager.set("app", "avatarUrl", body.avatarUrl);
  if (body.author) await settingsManager.set("app", "author", body.author);
  return { success: true };
});

export { site_post as default };
//# sourceMappingURL=site.post.mjs.map
