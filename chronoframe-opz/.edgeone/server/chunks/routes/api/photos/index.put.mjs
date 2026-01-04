import { e as eventHandler, r as requireUserSession, k as readBody, c as createError, u as useDB, t as tables, i as useStorageProvider, m as extractExifData, l as logger } from '../../../nitro/nitro.mjs';
import { useTranslation } from '@intlify/h3';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { z } from 'zod';
import { exiftool } from 'exiftool-vendored';
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
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import '@iconify/utils';
import 'ipx';

const paramsSchema = z.object({
  photoId: z.string().min(1)
});
const bodySchema = z.object({
  title: z.string().trim().max(512).optional(),
  description: z.string().trim().max(2e3).optional(),
  tags: z.array(z.string().trim().max(128)).max(64).optional(),
  location: z.union([
    z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180)
    }),
    z.null()
  ]).optional(),
  rating: z.union([z.number().int().min(0).max(5), z.null()]).optional()
});
const normalizeTags = (tags) => {
  if (!tags) return void 0;
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  for (const rawTag of tags) {
    const trimmed = rawTag.trim();
    if (!trimmed) continue;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    normalized.push(trimmed);
  }
  return normalized;
};
const index_put = eventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const t = await useTranslation(event);
  const { photoId } = paramsSchema.parse((_a = event.context.params) != null ? _a : {});
  const payload = bodySchema.parse(await readBody(event));
  if (payload.title === void 0 && payload.description === void 0 && payload.tags === void 0 && payload.location === void 0 && payload.rating === void 0) {
    throw createError({
      statusCode: 400,
      statusMessage: t("dashboard.photos.messages.noChangesProvided")
    });
  }
  const db = useDB();
  const photo = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
  if (!photo) {
    throw createError({
      statusCode: 404,
      statusMessage: t("dashboard.photos.messages.photoNotFound")
    });
  }
  if (!photo.storageKey) {
    throw createError({
      statusCode: 400,
      statusMessage: t("dashboard.photos.messages.noStorageKey")
    });
  }
  const { storageProvider } = useStorageProvider(event);
  const originalBuffer = await storageProvider.get(photo.storageKey);
  if (!originalBuffer) {
    throw createError({
      statusCode: 404,
      statusMessage: t("dashboard.photos.messages.photoFileMissing")
    });
  }
  const normalizedTitle = payload.title !== void 0 ? payload.title.trim() : void 0;
  const normalizedDescription = payload.description !== void 0 ? payload.description.trim() : void 0;
  const normalizedTags = normalizeTags(payload.tags);
  let pendingReverseGeocode = null;
  const exifUpdates = {};
  if (normalizedTitle !== void 0) {
    const titleValue = normalizedTitle.length > 0 ? normalizedTitle : null;
    exifUpdates.Title = titleValue;
    exifUpdates.XPTitle = titleValue;
  }
  if (normalizedDescription !== void 0) {
    const descriptionValue = normalizedDescription.length > 0 ? normalizedDescription : null;
    exifUpdates.Description = descriptionValue;
    exifUpdates.ImageDescription = descriptionValue;
    exifUpdates.CaptionAbstract = descriptionValue;
    exifUpdates.XPComment = descriptionValue;
    exifUpdates.UserComment = descriptionValue;
  }
  if (normalizedTags !== void 0) {
    const tagsValue = normalizedTags.length > 0 ? normalizedTags : null;
    exifUpdates.Subject = tagsValue;
    exifUpdates.Keywords = tagsValue;
    exifUpdates.XPKeywords = normalizedTags.length > 0 ? normalizedTags.join("; ") : null;
  }
  if (payload.location !== void 0) {
    if (payload.location) {
      const { latitude, longitude } = payload.location;
      const latAbs = Math.abs(latitude);
      const lonAbs = Math.abs(longitude);
      exifUpdates.GPSLatitude = latAbs;
      exifUpdates.GPSLatitudeRef = latitude >= 0 ? "N" : "S";
      exifUpdates.GPSLongitude = lonAbs;
      exifUpdates.GPSLongitudeRef = longitude >= 0 ? "E" : "W";
      exifUpdates.GPSPosition = `${latitude} ${longitude}`;
    } else {
      exifUpdates.GPSLatitude = null;
      exifUpdates.GPSLatitudeRef = null;
      exifUpdates.GPSLongitude = null;
      exifUpdates.GPSLongitudeRef = null;
      exifUpdates.GPSPosition = null;
    }
  }
  if (payload.rating !== void 0) {
    exifUpdates.Rating = payload.rating !== null ? payload.rating : null;
  }
  const tempDir = await mkdtemp(path.join(tmpdir(), "cframe-edit-"));
  const ext = path.extname(photo.storageKey) || ".jpg";
  const tempFile = path.join(tempDir, `edited${ext}`);
  try {
    await writeFile(tempFile, originalBuffer);
    if (Object.keys(exifUpdates).length > 0) {
      await exiftool.write(tempFile, exifUpdates, ["-overwrite_original"]);
    }
    const updatedBuffer = await readFile(tempFile);
    const prefix = storageProvider.config && "prefix" in storageProvider.config ? storageProvider.config.prefix : "";
    await storageProvider.create(
      photo.storageKey.replace(prefix || "", ""),
      updatedBuffer
    );
    const exifData = await extractExifData(updatedBuffer);
    const updateData = {
      exif: exifData,
      fileSize: updatedBuffer.length,
      lastModified: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (normalizedTitle !== void 0) {
      updateData.title = normalizedTitle || null;
    }
    if (normalizedDescription !== void 0) {
      updateData.description = normalizedDescription || null;
    }
    if (normalizedTags !== void 0) {
      updateData.tags = normalizedTags;
    }
    if (payload.location !== void 0) {
      if (payload.location) {
        updateData.latitude = payload.location.latitude;
        updateData.longitude = payload.location.longitude;
        updateData.country = null;
        updateData.city = null;
        updateData.locationName = null;
        pendingReverseGeocode = {
          latitude: payload.location.latitude,
          longitude: payload.location.longitude
        };
      } else {
        updateData.latitude = null;
        updateData.longitude = null;
        updateData.country = null;
        updateData.city = null;
        updateData.locationName = null;
      }
    }
    await db.update(tables.photos).set(updateData).where(eq(tables.photos.id, photoId));
    const updatedPhoto = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
    if (pendingReverseGeocode) {
      const workerPool = globalThis.__workerPool;
      if (workerPool) {
        try {
          await workerPool.addTask(
            {
              type: "photo-reverse-geocoding",
              photoId,
              latitude: pendingReverseGeocode.latitude,
              longitude: pendingReverseGeocode.longitude
            },
            {
              priority: 1
            }
          );
        } catch (taskError) {
          logger.location.warn(
            `Failed to enqueue reverse geocoding for photo ${photoId}:`,
            taskError
          );
        }
      } else {
        logger.location.warn(
          `Worker pool not initialized, skipping reverse geocoding enqueue for photo ${photoId}`
        );
      }
    }
    return {
      success: true,
      photo: updatedPhoto
    };
  } catch (error) {
    logger.image.error("Failed to update photo metadata", error);
    throw createError({
      statusCode: 500,
      statusMessage: t("dashboard.photos.messages.metadataUpdateFailed")
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
