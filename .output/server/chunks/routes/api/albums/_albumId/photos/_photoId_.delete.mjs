import { e as eventHandler, r as requireUserSession, g as getValidatedRouterParams, u as useDB, t as tables, c as createError } from '../../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { and, eq } from 'drizzle-orm';
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

const _photoId__delete = eventHandler(async (event) => {
  await requireUserSession(event);
  const { albumId } = await getValidatedRouterParams(
    event,
    z.object({
      albumId: z.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const { photoId } = await getValidatedRouterParams(
    event,
    z.object({
      photoId: z.string()
    }).parse
  );
  const db = useDB();
  const relation = await db.select().from(tables.albumPhotos).where(
    and(
      eq(tables.albumPhotos.albumId, albumId),
      eq(tables.albumPhotos.photoId, photoId)
    )
  ).get();
  if (!relation) {
    throw createError({
      statusCode: 404,
      statusMessage: "Photo not found in album"
    });
  }
  db.transaction((tx) => {
    tx.delete(tables.albumPhotos).where(
      and(
        eq(tables.albumPhotos.albumId, albumId),
        eq(tables.albumPhotos.photoId, photoId)
      )
    ).run();
    const album = tx.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
    if (album && album.coverPhotoId === photoId) {
      tx.update(tables.albums).set({ coverPhotoId: null, updatedAt: /* @__PURE__ */ new Date() }).where(eq(tables.albums.id, albumId)).run();
    }
  });
  return { success: true };
});

export { _photoId__delete as default };
//# sourceMappingURL=_photoId_.delete.mjs.map
