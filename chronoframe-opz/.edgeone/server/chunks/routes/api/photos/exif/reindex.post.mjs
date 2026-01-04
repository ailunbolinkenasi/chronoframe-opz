import { e as eventHandler, r as requireUserSession, k as readBody, u as useDB, t as tables, c as createError, l as logger, i as useStorageProvider, m as extractExifData, w as extractPhotoInfo } from '../../../../nitro/nitro.mjs';
import { eq, and, isNotNull, inArray } from 'drizzle-orm';
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

const reindex_post = eventHandler(async (event) => {
  var _a, _b, _c, _d;
  await requireUserSession(event);
  const body = await readBody(event);
  const { action, photoId } = body;
  try {
    if (action === "single-reindex" && photoId) {
      const photo = await useDB().select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1).then((rows) => rows[0]);
      if (!photo) {
        throw createError({
          statusCode: 404,
          statusMessage: "Photo not found"
        });
      }
      logger.chrono.info(`Reindexing EXIF for photo ${photoId}`);
      const { storageProvider } = useStorageProvider(event);
      const fileBuffer = await storageProvider.get(photo.storageKey);
      if (!fileBuffer) {
        throw createError({
          statusCode: 404,
          statusMessage: "File not found in storage"
        });
      }
      const exifData = await extractExifData(
        fileBuffer,
        void 0,
        logger.chrono
      );
      const photoInfo = extractPhotoInfo(photo.storageKey, exifData);
      await useDB().update(tables.photos).set({
        exif: exifData,
        title: photoInfo.title,
        dateTaken: photoInfo.dateTaken,
        tags: photoInfo.tags,
        lastModified: (/* @__PURE__ */ new Date()).toISOString(),
        thumbnailKey: `${(_b = (_a = storageProvider.config) == null ? void 0 : _a.prefix) == null ? void 0 : _b.replace(/\/$/, "")}/thumbnails/${photoId}.webp`
      }).where(eq(tables.photos.id, photoId));
      logger.chrono.success(`Successfully reindexed EXIF for photo ${photoId}`);
      return {
        success: true,
        message: "EXIF \u6570\u636E\u5DF2\u6210\u529F\u91CD\u65B0\u7D22\u5F15",
        photoId
      };
    } else if (action === "batch-reindex") {
      const { photoIds } = body;
      let photos;
      if (photoIds && Array.isArray(photoIds) && photoIds.length > 0) {
        photos = await useDB().select({
          id: tables.photos.id,
          storageKey: tables.photos.storageKey
        }).from(tables.photos).where(
          and(
            isNotNull(tables.photos.storageKey),
            inArray(tables.photos.id, photoIds)
          )
        );
      } else {
        photos = await useDB().select({
          id: tables.photos.id,
          storageKey: tables.photos.storageKey
        }).from(tables.photos).where(isNotNull(tables.photos.storageKey));
      }
      if (photos.length === 0) {
        return {
          message: "\u6CA1\u6709\u627E\u5230\u9700\u8981\u91CD\u65B0\u7D22\u5F15\u7684\u7167\u7247",
          results: {
            total: 0,
            processed: 0,
            updated: 0,
            errors: []
          }
        };
      }
      logger.chrono.info(
        `Starting batch EXIF reindexing for ${photos.length} photos`
      );
      let processed = 0;
      let updated = 0;
      const errors = [];
      const { storageProvider } = useStorageProvider(event);
      for (const photo of photos) {
        try {
          processed++;
          logger.chrono.info(
            `Processing photo ${photo.id} (${processed}/${photos.length})`
          );
          const fileBuffer = await storageProvider.get(photo.storageKey);
          if (!fileBuffer) {
            errors.push({
              photoId: photo.id,
              error: "File not found in storage"
            });
            continue;
          }
          const exifData = await extractExifData(
            fileBuffer,
            void 0,
            logger.chrono
          );
          const photoInfo = extractPhotoInfo(photo.storageKey, exifData);
          await useDB().update(tables.photos).set({
            exif: exifData,
            title: photoInfo.title,
            dateTaken: photoInfo.dateTaken,
            tags: photoInfo.tags,
            lastModified: (/* @__PURE__ */ new Date()).toISOString(),
            thumbnailKey: `${(_d = (_c = storageProvider.config) == null ? void 0 : _c.prefix) == null ? void 0 : _d.replace(/\/$/, "")}/thumbnails/${photo.id}.webp`
          }).where(eq(tables.photos.id, photo.id));
          updated++;
          logger.chrono.success(
            `Updated EXIF for photo ${photo.id} (${updated}/${processed})`
          );
          if (processed % 10 === 0) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          logger.chrono.error(`Failed to process photo ${photo.id}:`, error);
          errors.push({
            photoId: photo.id,
            error: errorMessage
          });
        }
      }
      const result = {
        message: `EXIF \u91CD\u65B0\u7D22\u5F15\u5B8C\u6210`,
        results: {
          total: photos.length,
          processed,
          updated,
          errors: errors.length > 0 ? errors : void 0,
          statistics: {
            successRate: processed > 0 ? ((processed - errors.length) / processed * 100).toFixed(1) + "%" : "0%"
          }
        }
      };
      logger.chrono.success(
        `EXIF batch reindexing completed: ${updated} photos updated out of ${processed} processed`
      );
      return result;
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid action parameter"
      });
    }
  } catch (error) {
    logger.chrono.error("Failed to reindex EXIF data:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to reindex EXIF data"
    });
  }
});

export { reindex_post as default };
//# sourceMappingURL=reindex.post.mjs.map
