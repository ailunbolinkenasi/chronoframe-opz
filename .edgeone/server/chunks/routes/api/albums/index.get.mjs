import { e as eventHandler, g as getValidatedRouterParams, u as useDB, t as tables, c as createError } from '../../../nitro/nitro.mjs';
import { eq, getTableColumns, asc } from 'drizzle-orm';
import z from 'zod';
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

const index_get = eventHandler(async (event) => {
  const { albumId } = await getValidatedRouterParams(
    event,
    z.object({
      albumId: z.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const db = useDB();
  const album = db.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
  if (!album) {
    throw createError({
      statusCode: 404,
      statusMessage: "Album not found"
    });
  }
  const photos = await db.select({
    ...getTableColumns(tables.photos)
  }).from(tables.photos).innerJoin(
    tables.albumPhotos,
    eq(tables.photos.id, tables.albumPhotos.photoId)
  ).where(eq(tables.albumPhotos.albumId, albumId)).orderBy(asc(tables.albumPhotos.position)).all();
  if (!photos || !Array.isArray(photos)) {
    return {
      ...album,
      photos: []
    };
  }
  return {
    ...album,
    photos
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
