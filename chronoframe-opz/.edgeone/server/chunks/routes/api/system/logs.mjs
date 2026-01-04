import { n as defineEventHandler, r as requireUserSession, I as createEventStream } from '../../../nitro/nitro.mjs';
import fs from 'node:fs';
import path from 'node:path';
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

const logs = defineEventHandler(async (event) => {
  await requireUserSession(event);
  const eventStream = createEventStream(event);
  const logFilePath = path.join(process.cwd(), "data", "logs", "app.log");
  let lastSentLineCount = 0;
  setImmediate(async () => {
    try {
      if (fs.existsSync(logFilePath)) {
        const logContent = fs.readFileSync(logFilePath, "utf-8");
        const recentLogs = logContent.split("\n").filter((line) => line.trim()).slice(-512);
        const validLines = recentLogs.filter((line) => line.trim());
        for (const line of validLines) {
          await eventStream.push(line);
          await new Promise((resolve) => setTimeout(resolve, 15));
        }
        lastSentLineCount = logContent.split("\n").filter((line) => line.trim()).length;
      }
    } catch (error) {
      console.error("Error initializing log stream:", error);
    }
  });
  const listener = async () => {
    if (fs.existsSync(logFilePath)) {
      const logContent = fs.readFileSync(logFilePath, "utf-8");
      const allLines = logContent.split("\n").filter((line) => line.trim());
      const currentLineCount = allLines.length;
      if (currentLineCount > lastSentLineCount) {
        const newLines = allLines.slice(lastSentLineCount);
        for (const line of newLines) {
          if (line.trim()) {
            await eventStream.push(line);
          }
        }
        lastSentLineCount = currentLineCount;
      }
    }
  };
  fs.watchFile(logFilePath, { interval: 1e3 }, listener);
  eventStream.onClosed(async () => {
    fs.unwatchFile(logFilePath, listener);
    await eventStream.close();
  });
  return eventStream.send();
});

export { logs as default };
//# sourceMappingURL=logs.mjs.map
