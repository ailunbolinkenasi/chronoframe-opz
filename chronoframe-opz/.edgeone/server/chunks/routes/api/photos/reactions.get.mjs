import { n as defineEventHandler, C as getQuery, c as createError, u as useDB, t as tables } from '../../../nitro/nitro.mjs';
import { sql, inArray } from 'drizzle-orm';
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

const reactions_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const photoIds = query.ids;
  if (!photoIds) {
    throw createError({
      statusCode: 400,
      message: "Photo IDs are required"
    });
  }
  const ids = Array.isArray(photoIds) ? photoIds : [photoIds];
  if (ids.length === 0) {
    return {};
  }
  const db = useDB();
  const reactions = db.select({
    photoId: tables.photoReactions.photoId,
    reactionType: tables.photoReactions.reactionType,
    count: sql`count(*)`
  }).from(tables.photoReactions).where(inArray(tables.photoReactions.photoId, ids)).groupBy(tables.photoReactions.photoId, tables.photoReactions.reactionType).all();
  const result = {};
  ids.forEach((id) => {
    result[id] = {
      like: 0,
      love: 0,
      amazing: 0,
      funny: 0,
      wow: 0,
      sad: 0,
      fire: 0,
      sparkle: 0
    };
  });
  reactions.forEach((r) => {
    if (r.photoId && r.reactionType) {
      result[r.photoId][r.reactionType] = r.count;
    }
  });
  return result;
});

export { reactions_get as default };
//# sourceMappingURL=reactions.get.mjs.map
