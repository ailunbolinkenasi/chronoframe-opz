import { e as eventHandler, r as requireUserSession, i as useStorageProvider, C as getQuery, c as createError, F as getHeader, x as useRuntimeConfig, G as readRawBody, l as logger } from '../../../nitro/nitro.mjs';
import { useTranslation } from '@intlify/h3';
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

const upload_put = eventHandler(async (event) => {
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const key = getQuery(event).key;
  const t = await useTranslation(event);
  if (!key) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.required.title"),
      data: {
        title: t("upload.error.required.title"),
        message: t("upload.error.required.message", { field: "key" })
      }
    });
  }
  const contentType = getHeader(event, "content-type") || "application/octet-stream";
  const config = useRuntimeConfig(event);
  const whitelistEnabled = config.upload.mime.whitelistEnabled;
  if (whitelistEnabled) {
    const whitelistStr = config.upload.mime.whitelist;
    const allowedTypes = whitelistStr ? whitelistStr.split(",").map((type) => type.trim()).filter(Boolean) : [];
    if (allowedTypes.length > 0 && !allowedTypes.includes(contentType)) {
      throw createError({
        statusCode: 415,
        statusMessage: t("upload.error.invalidType.title"),
        data: {
          title: t("upload.error.invalidType.title"),
          message: t("upload.error.invalidType.message", { type: contentType }),
          suggestion: t("upload.error.invalidType.suggestion", { allowed: allowedTypes.join(", ") })
        }
      });
    }
  }
  const raw = await readRawBody(event, false);
  if (!raw || !(raw instanceof Buffer)) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: t("upload.error.uploadFailed.message")
      }
    });
  }
  const maxBytes = 128 * 1024 * 1024;
  if (raw.byteLength > maxBytes) {
    const sizeInMB = (raw.byteLength / 1024 / 1024).toFixed(2);
    throw createError({
      statusCode: 413,
      statusMessage: t("upload.error.tooLarge.title"),
      data: {
        title: t("upload.error.tooLarge.title"),
        message: t("upload.error.tooLarge.message", { size: sizeInMB }),
        suggestion: t("upload.error.tooLarge.suggestion", { maxSize: 128 })
      }
    });
  }
  try {
    await storageProvider.create(key.replace(/^\/+/, ""), raw, contentType);
  } catch (error) {
    logger.chrono.error("Storage provider create error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: t("upload.error.uploadFailed.message")
      }
    });
  }
  return { ok: true, key };
});

export { upload_put as default };
//# sourceMappingURL=upload.put.mjs.map
