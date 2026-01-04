import { e as eventHandler, r as requireUserSession, c as createError, a as readValidatedBody, N as s3StorageConfigSchema, O as localStorageConfigSchema, P as openListStorageConfigSchema, K as settingsManager } from '../../../../nitro/nitro.mjs';
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

const index = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  switch (event.method) {
    case "GET": {
      return await settingsManager.storage.getProviders();
    }
    case "POST": {
      const newStorageConfig = await readValidatedBody(
        event,
        z.discriminatedUnion("provider", [
          z.object({
            name: z.string(),
            provider: z.literal("s3"),
            config: s3StorageConfigSchema
          }),
          z.object({
            name: z.string(),
            provider: z.literal("local"),
            config: localStorageConfigSchema
          }),
          z.object({
            name: z.string(),
            provider: z.literal("openlist"),
            config: openListStorageConfigSchema
          })
        ]).parse
      );
      const newId = await settingsManager.storage.addProvider(newStorageConfig);
      return { id: newId };
    }
    default: {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed"
      });
    }
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
