import { n as defineEventHandler, r as requireUserSession, C as getQuery, c as createError, u as useDB, t as tables } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { eq, or, sql } from 'drizzle-orm';
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

const clear_delete = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const query = getQuery(event);
    const {
      includeCompleted = "true",
      includeFailed = "true",
      olderThanDays
    } = await z.object({
      includeCompleted: z.string().optional().default("true"),
      includeFailed: z.string().optional().default("true"),
      olderThanDays: z.string().optional()
    }).parseAsync(query);
    const shouldIncludeCompleted = includeCompleted === "true";
    const shouldIncludeFailed = includeFailed === "true";
    if (!shouldIncludeCompleted && !shouldIncludeFailed) {
      throw createError({
        statusCode: 400,
        statusMessage: "At least one of includeCompleted or includeFailed must be true"
      });
    }
    const db = useDB();
    const statusConditions = [];
    if (shouldIncludeCompleted) {
      statusConditions.push(eq(tables.pipelineQueue.status, "completed"));
    }
    if (shouldIncludeFailed) {
      statusConditions.push(eq(tables.pipelineQueue.status, "failed"));
    }
    let whereCondition = or(...statusConditions);
    if (olderThanDays) {
      const daysThreshold = parseInt(olderThanDays);
      if (isNaN(daysThreshold) || daysThreshold < 0) {
        throw createError({
          statusCode: 400,
          statusMessage: "olderThanDays must be a non-negative integer"
        });
      }
      const thresholdTimestamp = Math.floor((Date.now() - daysThreshold * 24 * 60 * 60 * 1e3) / 1e3);
      const timeCondition = sql`${tables.pipelineQueue.createdAt} < ${thresholdTimestamp}`;
      whereCondition = sql`(${whereCondition}) AND ${timeCondition}`;
    }
    const tasksToDelete = await db.select({
      id: tables.pipelineQueue.id,
      status: tables.pipelineQueue.status,
      payload: tables.pipelineQueue.payload,
      createdAt: tables.pipelineQueue.createdAt
    }).from(tables.pipelineQueue).where(whereCondition);
    if (tasksToDelete.length === 0) {
      return {
        success: true,
        message: "No tasks found to clear",
        deletedCount: 0,
        breakdown: {
          completed: 0,
          failed: 0
        }
      };
    }
    await db.delete(tables.pipelineQueue).where(whereCondition);
    const breakdown = tasksToDelete.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});
    return {
      success: true,
      message: `Successfully cleared ${tasksToDelete.length} non-active tasks`,
      deletedCount: tasksToDelete.length,
      breakdown: {
        completed: breakdown.completed || 0,
        failed: breakdown.failed || 0
      },
      ...olderThanDays && {
        filter: {
          olderThanDays: parseInt(olderThanDays),
          thresholdDate: new Date(Date.now() - parseInt(olderThanDays) * 24 * 60 * 60 * 1e3).toISOString()
        }
      }
    };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("Failed to clear tasks:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to clear tasks"
    });
  }
});

export { clear_delete as default };
//# sourceMappingURL=clear.delete.mjs.map
