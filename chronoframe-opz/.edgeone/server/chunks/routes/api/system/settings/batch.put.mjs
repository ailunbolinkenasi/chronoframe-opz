import { e as eventHandler, r as requireUserSession, c as createError, a as readValidatedBody, L as settingKeys, J as settingNamespaces, K as settingsManager } from '../../../../nitro/nitro.mjs';
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

const batch_put = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session || !session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin privileges required"
    });
  }
  const body = await readValidatedBody(
    event,
    z.object({
      updates: z.array(
        z.object({
          namespace: z.enum([...settingNamespaces]),
          key: z.enum([...settingKeys]),
          value: z.any()
        })
      )
    }).parse
  );
  try {
    let successCount = 0;
    const errors = [];
    for (const update of body.updates) {
      try {
        await settingsManager.set(
          update.namespace,
          update.key,
          update.value,
          session.user.id
        );
        successCount++;
      } catch (err) {
        errors.push({
          namespace: update.namespace,
          key: update.key,
          error: err.message
        });
      }
    }
    if (errors.length > 0) {
      return {
        success: false,
        updated: successCount,
        errors
      };
    }
    return {
      success: true,
      updated: successCount
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message || "Failed to update settings"
    });
  }
});

export { batch_put as default };
//# sourceMappingURL=batch.put.mjs.map
