import { e as eventHandler, g as getValidatedRouterParams, u as useDB, t as tables } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const albums_get = eventHandler(async (event) => {
  const { photoId } = await getValidatedRouterParams(
    event,
    z.object({
      photoId: z.string()
    }).parse
  );
  const db = useDB();
  const albums = await db.select({
    id: tables.albums.id,
    title: tables.albums.title,
    description: tables.albums.description,
    coverPhotoId: tables.albums.coverPhotoId,
    createdAt: tables.albums.createdAt,
    updatedAt: tables.albums.updatedAt
  }).from(tables.albums).innerJoin(
    tables.albumPhotos,
    eq(tables.albums.id, tables.albumPhotos.albumId)
  ).where(eq(tables.albumPhotos.photoId, photoId)).all();
  return albums;
});

export { albums_get as default };
//# sourceMappingURL=albums.get.mjs.map
