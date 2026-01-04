import { y as getStorageManager, l as logger, z as isLivePhotoVideo, A as processLivePhotoVideo, u as useDB, t as tables, B as findLivePhotoVideoForImage, e as eventHandler, r as requireUserSession, k as readBody, c as createError } from '../../../../nitro/nitro.mjs';
import { and, eq, inArray } from 'drizzle-orm';
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

const scanAndProcessExistingLivePhotos = async () => {
  const results = {
    processed: 0,
    matched: 0,
    errors: []
  };
  try {
    logger.chrono.info("Starting scan for existing LivePhoto videos...");
    logger.chrono.info(
      "Scan completed. Use processSpecificLivePhotoVideo for individual files."
    );
    return results;
  } catch (error) {
    logger.chrono.error("Failed to scan existing LivePhotos:", error);
    results.errors.push(error instanceof Error ? error.message : String(error));
    return results;
  }
};
const processSpecificLivePhotoVideo = async (videoKey) => {
  try {
    const storageProvider = getStorageManager().getProvider();
    const fileBuffer = await storageProvider.get(videoKey);
    if (!fileBuffer) {
      logger.chrono.error(`Video file not found: ${videoKey}`);
      return false;
    }
    const fileName = videoKey.split("/").pop() || videoKey;
    if (!isLivePhotoVideo(fileName, fileBuffer.length)) {
      logger.chrono.warn(
        `File does not appear to be a LivePhoto video: ${videoKey}`
      );
      return false;
    }
    return await processLivePhotoVideo(videoKey, fileBuffer.length);
  } catch (error) {
    logger.chrono.error(
      `Failed to process specific LivePhoto video ${videoKey}:`,
      error
    );
    return false;
  }
};

const testLivePhotoDetection = async (imageKey) => {
  logger.chrono.info(`Testing LivePhoto detection for: ${imageKey}`);
  try {
    const result = await findLivePhotoVideoForImage(imageKey);
    if (result) {
      logger.chrono.success(`LivePhoto video found:`, {
        imageKey,
        videoKey: result.videoKey,
        videoSize: result.videoSize
      });
      return {
        found: true,
        videoKey: result.videoKey,
        videoSize: result.videoSize
      };
    } else {
      logger.chrono.info(`No LivePhoto video found for: ${imageKey}`);
      return {
        found: false
      };
    }
  } catch (error) {
    logger.chrono.error(`LivePhoto detection test failed for ${imageKey}:`, error);
    return {
      found: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
const batchTestLivePhotoDetection = async (photoIds) => {
  const db = useDB();
  try {
    let photos;
    if (photoIds && Array.isArray(photoIds) && photoIds.length > 0) {
      photos = await db.select().from(tables.photos).where(
        and(
          eq(tables.photos.isLivePhoto, 0),
          inArray(tables.photos.id, photoIds)
        )
      );
    } else {
      photos = await db.select().from(tables.photos).where(eq(tables.photos.isLivePhoto, 0));
    }
    logger.chrono.info(`Testing ${photos.length} photos for LivePhoto detection`);
    const results = [];
    for (const photo of photos) {
      const result = await testLivePhotoDetection(photo.storageKey);
      results.push({
        photoId: photo.id,
        storageKey: photo.storageKey,
        ...result
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const foundCount = results.filter((r) => r.found).length;
    logger.chrono.success(`LivePhoto detection test completed. Found ${foundCount} potential LivePhotos out of ${photos.length} photos`);
    return {
      total: photos.length,
      processed: photos.length,
      found: foundCount,
      results: results.filter((r) => r.found)
      // 只返回找到的
    };
  } catch (error) {
    logger.chrono.error("Batch LivePhoto detection test failed:", error);
    throw error;
  }
};

const manage_post = eventHandler(async (event) => {
  await requireUserSession(event);
  const body = await readBody(event);
  const { action, videoKey, photoId, photoIds } = body;
  if (!action) {
    throw createError({
      statusCode: 400,
      statusMessage: "Action is required"
    });
  }
  try {
    switch (action) {
      case "scan": {
        const scanResults = await scanAndProcessExistingLivePhotos();
        return {
          message: "Scan completed",
          results: scanResults
        };
      }
      case "detect": {
        const results = await batchTestLivePhotoDetection(photoIds);
        return {
          message: "Batch LivePhoto detection completed",
          results
        };
      }
      case "process": {
        if (!videoKey) {
          throw createError({
            statusCode: 400,
            statusMessage: "videoKey is required for process action"
          });
        }
        const success = await processSpecificLivePhotoVideo(videoKey);
        return {
          message: success ? "LivePhoto processed successfully" : "Failed to process LivePhoto",
          success,
          videoKey
        };
      }
      case "update-photo": {
        if (!photoId) {
          throw createError({
            statusCode: 400,
            statusMessage: "photoId is required for update-photo action"
          });
        }
        const db = useDB();
        const photos = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1);
        if (photos.length === 0) {
          throw createError({
            statusCode: 404,
            statusMessage: "Photo not found"
          });
        }
        const photo = photos[0];
        const livePhotoVideo = await findLivePhotoVideoForImage(
          photo.storageKey
        );
        if (livePhotoVideo) {
          const storageProvider = getStorageManager().getProvider();
          await db.update(tables.photos).set({
            isLivePhoto: 1,
            livePhotoVideoUrl: storageProvider.getPublicUrl(
              livePhotoVideo.videoKey
            ),
            livePhotoVideoKey: livePhotoVideo.videoKey
          }).where(eq(tables.photos.id, photoId));
          return {
            message: "Photo updated to LivePhoto successfully",
            success: true,
            photoId,
            videoKey: livePhotoVideo.videoKey
          };
        } else {
          return {
            message: "No matching video found for this photo",
            success: false,
            photoId
          };
        }
      }
      default:
        throw createError({
          statusCode: 400,
          statusMessage: 'Invalid action. Use "scan", "detect", "process", or "update-photo"'
        });
    }
  } catch (error) {
    logger.chrono.error("LivePhoto management error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to process LivePhoto management request"
    });
  }
});

export { manage_post as default };
//# sourceMappingURL=manage.post.mjs.map
