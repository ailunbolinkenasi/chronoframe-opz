import { e as eventHandler, u as useDB, t as tables } from '../../nitro/nitro.mjs';
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

const index_get = eventHandler(async (_event) => {
  const db = useDB();
  const albums = await db.select().from(tables.albums);
  const albumsWithPhotoIds = await Promise.all(
    albums.map(async (album) => {
      const photoIds = await db.select({
        photoId: tables.albumPhotos.photoId,
        position: tables.albumPhotos.position
      }).from(tables.albumPhotos).where(eq(tables.albumPhotos.albumId, album.id)).orderBy(tables.albumPhotos.position);
      return {
        ...album,
        // 即使是空相册，也返回空数组而不是 undefined
        photoIds: photoIds.length > 0 ? photoIds.map((p) => p.photoId) : []
      };
    })
  );
  return albumsWithPhotoIds.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
