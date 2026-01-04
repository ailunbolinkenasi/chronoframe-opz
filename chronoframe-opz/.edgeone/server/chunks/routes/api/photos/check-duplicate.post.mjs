import { n as defineEventHandler, r as requireUserSession, a as readValidatedBody, c as createError, u as useDB, i as useStorageProvider, q as generateSafePhotoId, t as tables } from '../../../nitro/nitro.mjs';
import { useTranslation } from '@intlify/h3';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
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

const checkDuplicate_post = defineEventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const t = await useTranslation(event);
  try {
    const { fileNames, storageKeys } = await readValidatedBody(
      event,
      z.object({
        fileNames: z.array(z.string()).optional(),
        storageKeys: z.array(z.string()).optional()
      }).parse
    );
    if (!fileNames && !storageKeys) {
      throw createError({
        statusCode: 400,
        statusMessage: t("upload.error.required.title"),
        data: {
          title: t("upload.error.required.title"),
          message: t("upload.error.required.message", { field: "fileNames or storageKeys" })
        }
      });
    }
    const db = useDB();
    const results = [];
    if (fileNames && fileNames.length > 0) {
      for (const fileName of fileNames) {
        const { storageProvider } = useStorageProvider(event);
        const storageKey = `${(((_a = storageProvider.config) == null ? void 0 : _a.prefix) || "").replace(/\/+$/, "")}/${fileName}`;
        const photoId = generateSafePhotoId(storageKey);
        const existingPhoto = await db.select({
          id: tables.photos.id,
          title: tables.photos.title,
          storageKey: tables.photos.storageKey,
          originalUrl: tables.photos.originalUrl,
          thumbnailUrl: tables.photos.thumbnailUrl,
          dateTaken: tables.photos.dateTaken,
          fileSize: tables.photos.fileSize,
          width: tables.photos.width,
          height: tables.photos.height
        }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
        results.push({
          fileName,
          storageKey,
          photoId,
          exists: !!existingPhoto,
          photo: existingPhoto || null
        });
      }
    }
    if (storageKeys && storageKeys.length > 0) {
      for (const storageKey of storageKeys) {
        const photoId = generateSafePhotoId(storageKey);
        const existingPhoto = await db.select({
          id: tables.photos.id,
          title: tables.photos.title,
          storageKey: tables.photos.storageKey,
          originalUrl: tables.photos.originalUrl,
          thumbnailUrl: tables.photos.thumbnailUrl,
          dateTaken: tables.photos.dateTaken,
          fileSize: tables.photos.fileSize,
          width: tables.photos.width,
          height: tables.photos.height
        }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
        results.push({
          storageKey,
          photoId,
          exists: !!existingPhoto,
          photo: existingPhoto || null
        });
      }
    }
    const duplicatesFound = results.filter((r) => r.exists).length;
    return {
      success: true,
      results,
      duplicatesFound,
      summary: {
        title: t("upload.success.check.title"),
        message: t("upload.success.check.message", {
          total: results.length,
          duplicates: duplicatesFound
        })
      }
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: error.message || t("upload.error.uploadFailed.message")
      }
    });
  }
});

export { checkDuplicate_post as default };
//# sourceMappingURL=check-duplicate.post.mjs.map
