import { e as eventHandler, r as requireUserSession, j as getRouterParam, c as createError, u as useDB, t as tables, l as logger } from '../../../../nitro/nitro.mjs';
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

const livephoto_get = eventHandler(async (event) => {
  await requireUserSession(event);
  const photoId = getRouterParam(event, "photoId");
  if (!photoId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Photo ID is required"
    });
  }
  try {
    const db = useDB();
    const photos = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1);
    if (photos.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Photo not found"
      });
    }
    const photo = photos[0];
    return {
      id: photo.id,
      title: photo.title,
      isLivePhoto: Boolean(photo.isLivePhoto),
      livePhotoVideoUrl: photo.livePhotoVideoUrl,
      originalUrl: photo.originalUrl,
      thumbnailUrl: photo.thumbnailUrl
    };
  } catch (error) {
    logger.chrono.error("Failed to get photo details:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to get photo details"
    });
  }
});

export { livephoto_get as default };
//# sourceMappingURL=livephoto.get.mjs.map
