import { e as eventHandler, a as readValidatedBody, R as storageConfigSchema, u as useDB, t as tables, Q as hashPassword, c as createError, K as settingsManager } from '../../../nitro/nitro.mjs';
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

const submit_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      admin: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        username: z.string().min(2).default("admin")
      }),
      site: z.object({
        title: z.string().min(1),
        slogan: z.string().optional(),
        avatarUrl: z.string().optional(),
        author: z.string().optional()
      }),
      storage: z.object({
        name: z.string().min(1),
        config: storageConfigSchema
      }),
      map: z.object({
        provider: z.enum(["mapbox", "maplibre"]),
        token: z.string().min(1),
        style: z.string().optional()
      })
    }).parse
  );
  const db = useDB();
  const existingUser = db.select().from(tables.users).limit(1).get();
  if (existingUser) {
    if (existingUser.email === body.admin.email) {
      await db.update(tables.users).set({
        password: await hashPassword(body.admin.password),
        username: body.admin.username,
        isAdmin: 1
      }).where(eq(tables.users.id, existingUser.id)).run();
    } else {
      throw createError({
        statusCode: 400,
        message: "User already exists"
      });
    }
  } else {
    await db.insert(tables.users).values({
      email: body.admin.email,
      username: body.admin.username,
      password: await hashPassword(body.admin.password),
      isAdmin: 1,
      createdAt: /* @__PURE__ */ new Date()
    }).run();
  }
  await settingsManager.set("app", "title", body.site.title);
  if (body.site.slogan) await settingsManager.set("app", "slogan", body.site.slogan);
  if (body.site.avatarUrl) await settingsManager.set("app", "avatarUrl", body.site.avatarUrl);
  if (body.site.author) await settingsManager.set("app", "author", body.site.author);
  const id = await settingsManager.storage.addProvider({
    name: body.storage.name,
    provider: body.storage.config.provider,
    config: body.storage.config
  });
  await settingsManager.set("storage", "provider", id);
  await settingsManager.set("map", "provider", body.map.provider);
  if (body.map.provider === "mapbox") {
    await settingsManager.set("map", "mapbox.token", body.map.token);
    if (body.map.style) await settingsManager.set("map", "mapbox.style", body.map.style);
  } else {
    await settingsManager.set("map", "maplibre.token", body.map.token);
    if (body.map.style) await settingsManager.set("map", "maplibre.style", body.map.style);
  }
  await settingsManager.set("system", "firstLaunch", false, void 0, true);
  return { success: true };
});

export { submit_post as default };
//# sourceMappingURL=submit.post.mjs.map
