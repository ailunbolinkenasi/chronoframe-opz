import { e as eventHandler, r as requireUserSession, a as readValidatedBody, u as useDB, t as tables } from '../../nitro/nitro.mjs';
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
import 'drizzle-orm';
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

const index_post = eventHandler(async (event) => {
  await requireUserSession(event);
  const body = await readValidatedBody(
    event,
    z.object({
      title: z.string().min(1).max(255),
      description: z.string().max(1e3).optional(),
      coverPhotoId: z.string().optional(),
      photoIds: z.array(z.string()).optional()
    }).parse
  );
  const db = useDB();
  const album = db.transaction((tx) => {
    const newAlbum = tx.insert(tables.albums).values({
      title: body.title,
      description: body.description || null,
      coverPhotoId: body.coverPhotoId || null
    }).returning().get();
    const albumId = newAlbum.id;
    const photoIds = new Set(body.photoIds || []);
    if (body.coverPhotoId) {
      photoIds.add(body.coverPhotoId);
    }
    if (photoIds.size > 0) {
      let pos = 1e6;
      for (const photoId of photoIds) {
        tx.insert(tables.albumPhotos).values({
          albumId,
          photoId,
          position: pos += 10
        }).onConflictDoNothing().run();
      }
    }
    return newAlbum;
  });
  return album;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
