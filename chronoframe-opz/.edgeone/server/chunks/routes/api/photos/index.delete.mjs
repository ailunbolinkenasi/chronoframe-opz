import { e as eventHandler, r as requireUserSession, i as useStorageProvider, j as getRouterParam, c as createError, u as useDB, t as tables, l as logger } from '../../../nitro/nitro.mjs';
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

const HEIC_EXTENSIONS = [".heic", ".heif", ".hif"];
const index_delete = eventHandler(async (event) => {
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const photoId = getRouterParam(event, "photoId");
  if (!photoId) {
    return createError({
      statusCode: 400,
      statusMessage: "Photo ID is required"
    });
  }
  const photo = await useDB().select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
  if (!photo) {
    return createError({
      statusCode: 404,
      statusMessage: "Photo not found"
    });
  }
  logger.image.info(`Deleting photo ${photo.title || photo.id || photoId}`);
  if (photo.storageKey) {
    logger.image.info(`Deleting photo files for ${photoId} from storage`);
    try {
      await storageProvider.delete(photo.storageKey);
      const lowerStorageKey = photo.storageKey.toLowerCase();
      const heicExtension = HEIC_EXTENSIONS.find(
        (ext) => lowerStorageKey.endsWith(ext)
      );
      if (heicExtension) {
        const jpegKey = photo.storageKey.slice(
          0,
          photo.storageKey.length - heicExtension.length
        ) + ".jpeg";
        if (jpegKey !== photo.storageKey) {
          logger.image.info(
            `Deleting converted JPEG for HEIC photo ${photoId}: ${jpegKey}`
          );
          try {
            await storageProvider.delete(jpegKey);
          } catch {
          }
        }
      }
      if (photo.thumbnailKey) {
        await storageProvider.delete(photo.thumbnailKey);
      }
      if (photo.livePhotoVideoKey) {
        await storageProvider.delete(photo.livePhotoVideoKey);
      }
    } catch {
    }
  }
  useDB().delete(tables.photos).where(eq(tables.photos.id, photoId)).run();
  logger.image.success(`Photo ${photoId} deleted`);
  return {
    statusCode: 200,
    statusMessage: "Photo deleted successfully"
  };
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
