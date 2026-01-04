import { e as eventHandler, r as requireUserSession, i as useStorageProvider, x as useRuntimeConfig, k as readBody, c as createError, q as generateSafePhotoId, u as useDB, t as tables, l as logger } from '../../nitro/nitro.mjs';
import { useTranslation } from '@intlify/h3';
import path from 'path';
import { eq } from 'drizzle-orm';
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

const VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([
  ".mov",
  ".mp4"
]);
const IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".avif",
  ".bmp",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp"
]);
const isVideoFile = (fileName, contentType) => {
  if (contentType == null ? void 0 : contentType.toLowerCase().startsWith("video/")) {
    return true;
  }
  const ext = path.extname(fileName).toLowerCase();
  return ext !== "" && VIDEO_EXTENSIONS.has(ext);
};
const isLikelyImageKey = (storageKey) => {
  if (!storageKey) {
    return false;
  }
  const ext = path.extname(storageKey).toLowerCase();
  return ext !== "" && IMAGE_EXTENSIONS.has(ext);
};
const index_post = eventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const config = useRuntimeConfig(event);
  const t = await useTranslation(event);
  const body = await readBody(event);
  const { fileName, contentType, skipDuplicateCheck } = body;
  const isVideoUpload = fileName ? isVideoFile(fileName, contentType) : false;
  if (!fileName) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.required.title")
    });
  }
  try {
    const objectKey = `${(((_a = storageProvider.config) == null ? void 0 : _a.prefix) || "").replace(/\/+$/, "")}/${fileName}`;
    const duplicateCheckEnabled = config.upload.duplicateCheck.enabled && !skipDuplicateCheck;
    let existingPhoto = null;
    if (duplicateCheckEnabled) {
      const photoId = generateSafePhotoId(objectKey);
      const db = useDB();
      existingPhoto = await db.select({
        id: tables.photos.id,
        title: tables.photos.title,
        storageKey: tables.photos.storageKey,
        originalUrl: tables.photos.originalUrl,
        thumbnailUrl: tables.photos.thumbnailUrl,
        dateTaken: tables.photos.dateTaken
      }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
      if (existingPhoto && isVideoUpload && isLikelyImageKey(existingPhoto.storageKey)) {
        existingPhoto = null;
      }
      if (existingPhoto) {
        const checkMode = config.upload.duplicateCheck.mode || "skip";
        if (checkMode === "block") {
          throw createError({
            statusCode: 409,
            statusMessage: t("upload.duplicate.block.title"),
            data: {
              duplicate: true,
              existingPhoto,
              title: t("upload.duplicate.block.title"),
              message: t("upload.duplicate.block.message", { fileName })
            }
          });
        } else if (checkMode === "skip") {
          return {
            skipped: true,
            duplicate: true,
            existingPhoto,
            fileKey: objectKey,
            title: t("upload.duplicate.skip.title"),
            message: t("upload.duplicate.skip.message", { fileName }),
            info: t("upload.duplicate.skip.info", {
              dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
            })
          };
        }
      }
    }
    if (storageProvider.getSignedUrl) {
      const signedUrl = await storageProvider.getSignedUrl(objectKey, 3600, {
        contentType: contentType || "application/octet-stream"
      });
      const response2 = {
        signedUrl,
        fileKey: objectKey,
        expiresIn: 3600
      };
      if (existingPhoto) {
        response2.duplicate = true;
        response2.existingPhoto = existingPhoto;
        response2.warningInfo = {
          title: t("upload.duplicate.warn.title"),
          message: t("upload.duplicate.warn.message", { fileName }),
          warning: t("upload.duplicate.warn.warning"),
          info: t("upload.duplicate.warn.info", {
            title: existingPhoto.title || fileName,
            dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
          })
        };
      }
      return response2;
    }
    const internalUploadUrl = `/api/photos/upload?key=${encodeURIComponent(objectKey)}`;
    const response = {
      signedUrl: internalUploadUrl,
      fileKey: objectKey,
      expiresIn: 3600
    };
    if (existingPhoto) {
      response.duplicate = true;
      response.existingPhoto = existingPhoto;
      response.warningInfo = {
        title: t("upload.duplicate.warn.title"),
        message: t("upload.duplicate.warn.message", { fileName }),
        warning: t("upload.duplicate.warn.warning"),
        info: t("upload.duplicate.warn.info", {
          title: existingPhoto.title || fileName,
          dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
        })
      };
    }
    return response;
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    logger.chrono.error("Failed to prepare upload:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to prepare upload"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
