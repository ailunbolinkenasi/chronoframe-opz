import { n as defineEventHandler, r as requireUserSession, a as readValidatedBody, u as useDB, t as tables, c as createError } from '../../../../nitro/nitro.mjs';
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

const retry_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const { taskId } = await readValidatedBody(
      event,
      z.object({
        taskId: z.number().int().positive()
      }).parse
    );
    const db = useDB();
    const task = await db.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.id, taskId)).get();
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: "Task not found"
      });
    }
    if (task.status !== "failed") {
      throw createError({
        statusCode: 400,
        statusMessage: `Task is not in failed status, current status: ${task.status}`
      });
    }
    await db.update(tables.pipelineQueue).set({
      status: "pending",
      statusStage: null,
      errorMessage: null,
      attempts: 0,
      // 重置尝试次数
      createdAt: /* @__PURE__ */ new Date()
      // 更新创建时间以便重新调度
    }).where(eq(tables.pipelineQueue.id, taskId));
    return {
      success: true,
      message: `Task ${taskId} has been reset and will be retried`,
      taskId,
      payload: {
        type: task.payload.type,
        storageKey: task.payload.storageKey
      }
    };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("Failed to retry task:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retry task"
    });
  }
});

export { retry_post as default };
//# sourceMappingURL=retry.post.mjs.map
