import { n as defineEventHandler, r as requireUserSession, a as readValidatedBody, c as createError } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
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

const addTask_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const payloadSchema = z.discriminatedUnion("type", [
      z.object({
        type: z.literal("photo"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("live-photo-video"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("photo-reverse-geocoding"),
        photoId: z.string().min(1),
        latitude: z.number().min(-90).max(90).optional(),
        longitude: z.number().min(-180).max(180).optional()
      })
    ]);
    const { payload, priority, maxAttempts } = await readValidatedBody(
      event,
      z.object({
        payload: payloadSchema,
        priority: z.number().min(0).max(9).optional().default(0),
        maxAttempts: z.number().min(1).max(5).optional().default(3)
      }).parse
    );
    const workerPool = globalThis.__workerPool;
    if (!workerPool) {
      throw createError({
        statusCode: 503,
        statusMessage: "Worker pool not initialized"
      });
    }
    const taskId = await workerPool.addTask(payload, {
      priority,
      maxAttempts
    });
    return {
      success: true,
      taskId,
      message: "Task added to queue successfully",
      payload
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to add task to queue"
    });
  }
});

export { addTask_post as default };
//# sourceMappingURL=add-task.post.mjs.map
