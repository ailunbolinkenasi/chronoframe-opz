import { n as defineEventHandler, r as requireUserSession, C as getQuery, u as useDB, t as tables, c as createError } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { eq, sql, and, desc } from 'drizzle-orm';
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

const list_get = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const query = getQuery(event);
    const {
      status,
      type
    } = await z.object({
      status: z.enum(["pending", "in-stages", "completed", "failed"]).optional(),
      type: z.enum(["photo", "live-photo-video", "photo-reverse-geocoding"]).optional()
    }).parseAsync(query);
    const db = useDB();
    const conditions = [];
    if (status) {
      conditions.push(eq(tables.pipelineQueue.status, status));
    }
    if (type) {
      conditions.push(eq(sql`json_extract(${tables.pipelineQueue.payload}, '$.type')`, type));
    }
    const whereCondition = conditions.length > 0 ? and(...conditions) : void 0;
    const queryBuilder = db.select({
      id: tables.pipelineQueue.id,
      payload: tables.pipelineQueue.payload,
      priority: tables.pipelineQueue.priority,
      attempts: tables.pipelineQueue.attempts,
      maxAttempts: tables.pipelineQueue.maxAttempts,
      status: tables.pipelineQueue.status,
      statusStage: tables.pipelineQueue.statusStage,
      errorMessage: tables.pipelineQueue.errorMessage,
      createdAt: tables.pipelineQueue.createdAt,
      completedAt: tables.pipelineQueue.completedAt
    }).from(tables.pipelineQueue).orderBy(desc(tables.pipelineQueue.createdAt));
    if (whereCondition) {
      queryBuilder.where(whereCondition);
    }
    const tasks = await queryBuilder;
    return {
      success: true,
      data: tasks
    };
  } catch (error) {
    console.error("Failed to fetch task list:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch task list"
    });
  }
});

export { list_get as default };
//# sourceMappingURL=list.get.mjs.map
