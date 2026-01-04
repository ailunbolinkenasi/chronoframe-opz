import { n as defineEventHandler, r as requireUserSession, a as readValidatedBody, c as createError, u as useDB, t as tables } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { eq, inArray } from 'drizzle-orm';
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

const retryBatch_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const { taskIds, retryAll = false } = await readValidatedBody(
      event,
      z.object({
        taskIds: z.array(z.number().int().positive()).optional(),
        retryAll: z.boolean().optional().default(false)
      }).parse
    );
    if (!retryAll && (!taskIds || taskIds.length === 0)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Either taskIds array or retryAll flag must be provided"
      });
    }
    const db = useDB();
    let whereCondition;
    if (retryAll) {
      whereCondition = eq(tables.pipelineQueue.status, "failed");
    } else {
      whereCondition = inArray(tables.pipelineQueue.id, taskIds);
    }
    const tasksToRetry = await db.select().from(tables.pipelineQueue).where(whereCondition);
    const failedTasks = tasksToRetry.filter((task) => task.status === "failed");
    if (failedTasks.length === 0) {
      return {
        success: true,
        message: "No failed tasks found to retry",
        retriedCount: 0,
        skippedCount: retryAll ? 0 : (taskIds == null ? void 0 : taskIds.length) || 0
      };
    }
    const nonFailedTasks = tasksToRetry.filter((task) => task.status !== "failed");
    const failedTaskIds = failedTasks.map((task) => task.id);
    await db.update(tables.pipelineQueue).set({
      status: "pending",
      statusStage: null,
      errorMessage: null,
      attempts: 0,
      // 重置尝试次数
      createdAt: /* @__PURE__ */ new Date()
      // 更新创建时间以便重新调度
    }).where(inArray(tables.pipelineQueue.id, failedTaskIds));
    return {
      success: true,
      message: `Successfully reset ${failedTasks.length} failed tasks for retry`,
      retriedCount: failedTasks.length,
      skippedCount: nonFailedTasks.length,
      retriedTasks: failedTasks.map((task) => ({
        id: task.id,
        type: task.payload.type,
        storageKey: task.payload.storageKey
      })),
      skippedTasks: nonFailedTasks.map((task) => ({
        id: task.id,
        status: task.status,
        reason: `Task is not in failed status (current: ${task.status})`
      }))
    };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("Failed to batch retry tasks:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to batch retry tasks"
    });
  }
});

export { retryBatch_post as default };
//# sourceMappingURL=retry-batch.post.mjs.map
