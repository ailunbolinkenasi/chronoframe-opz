import { e as eventHandler, g as getValidatedRouterParams, L as settingKeys, J as settingNamespaces, K as settingsManager, c as createError, r as requireUserSession, a as readValidatedBody } from '../../../../../nitro/nitro.mjs';
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

const _key_ = eventHandler(async (event) => {
  const { namespace, key } = await getValidatedRouterParams(
    event,
    z.object({
      namespace: z.enum([...settingNamespaces]),
      key: z.enum([...settingKeys])
    }).parse
  );
  if (event.method === "GET") {
    try {
      const value = await settingsManager.get(namespace, key);
      return { namespace, key, value };
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: `Setting ${namespace}:${key} not found`
      });
    }
  }
  if (event.method === "PUT") {
    const session = await requireUserSession(event);
    if (!session || !session.user.isAdmin) {
      throw createError({
        statusCode: 403,
        statusMessage: "Admin privileges required"
      });
    }
    const { value } = await readValidatedBody(
      event,
      z.object({
        value: z.any()
      }).parse
    );
    try {
      await settingsManager.set(namespace, key, value, session.user.id);
      return { namespace, key, value };
    } catch (err) {
      throw createError({
        statusCode: 400,
        statusMessage: err.message || "Failed to update setting"
      });
    }
  }
  throw createError({ statusCode: 405 });
});

export { _key_ as default };
//# sourceMappingURL=_key_.mjs.map
