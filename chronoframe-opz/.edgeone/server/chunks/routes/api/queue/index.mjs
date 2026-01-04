import { n as defineEventHandler, r as requireUserSession, c as createError } from '../../../nitro/nitro.mjs';
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

const index = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const workerPool = globalThis.__workerPool;
    if (!workerPool) {
      throw createError({
        statusCode: 503,
        statusMessage: "Worker pool not initialized"
      });
    }
    const poolStats = workerPool.getPoolStats();
    const queueStats = await workerPool.getQueueStats();
    return {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      pool: {
        isActive: workerPool.isActive(),
        workerCount: workerPool.getWorkerCount(),
        ...poolStats
      },
      queue: queueStats
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to get queue status"
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
