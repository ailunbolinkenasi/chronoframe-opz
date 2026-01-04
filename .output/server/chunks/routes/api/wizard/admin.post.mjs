import { e as eventHandler, u as useDB, a as readValidatedBody, t as tables, Q as hashPassword, c as createError } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
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

const admin_post = eventHandler(async (event) => {
  const db = useDB();
  const { email, password, username } = await readValidatedBody(
    event,
    z.object({
      email: z.email(),
      password: z.string().min(6),
      username: z.string().min(2).default("admin")
    }).parse
  );
  const existingUser = db.select().from(tables.users).limit(1).get();
  if (existingUser) {
    if (existingUser.email === email) {
      await db.update(tables.users).set({
        password: await hashPassword(password),
        username,
        isAdmin: 1
      }).where(eq(tables.users.id, existingUser.id)).run();
      return { success: true };
    }
    throw createError({
      statusCode: 400,
      message: "User already exists"
    });
  }
  await db.insert(tables.users).values({
    email,
    username,
    password: await hashPassword(password),
    isAdmin: 1,
    createdAt: /* @__PURE__ */ new Date()
  }).run();
  return { success: true };
});

export { admin_post as default };
//# sourceMappingURL=admin.post.mjs.map
