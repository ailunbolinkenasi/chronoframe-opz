import { n as defineEventHandler, y as getStorageManager, c as createError, j as getRouterParam, S as setHeader, F as getHeader, T as sendStream } from '../../nitro/nitro.mjs';
import path from 'node:path';
import { promises, createReadStream } from 'node:fs';
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

const guessContentType = (filePath) => {
  const ext = (filePath.split(".").pop() || "").toLowerCase();
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "gif":
      return "image/gif";
    case "bmp":
      return "image/bmp";
    case "tif":
    case "tiff":
      return "image/tiff";
    case "mp4":
      return "video/mp4";
    case "mov":
      return "video/quicktime";
    case "json":
      return "application/json";
    default:
      return "application/octet-stream";
  }
};
const ____path_ = defineEventHandler(async (event) => {
  var _a;
  const manager = getStorageManager();
  const provider = manager.getProvider();
  if (((_a = provider.config) == null ? void 0 : _a.provider) !== "local") {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }
  const p = getRouterParam(event, "path") || "";
  const relPathRaw = Array.isArray(p) ? p.join("/") : p;
  const decodedPath = decodeURIComponent(relPathRaw);
  const relPath = decodedPath.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^\/+/, "");
  if (relPath.includes("..")) {
    throw createError({ statusCode: 400, statusMessage: "Invalid path" });
  }
  const basePath = provider.config.basePath;
  const absolute = path.resolve(basePath, relPath);
  if (!absolute.startsWith(path.resolve(basePath) + path.sep)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid path" });
  }
  try {
    const stat = await promises.stat(absolute);
    if (!stat.isFile()) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }
    const etag = `W/"${stat.size}-${stat.mtimeMs}"`;
    setHeader(event, "ETag", etag);
    setHeader(event, "Last-Modified", stat.mtime.toUTCString());
    setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");
    const contentType = guessContentType(absolute);
    setHeader(event, "Content-Type", contentType);
    const inm = getHeader(event, "if-none-match");
    const ims = getHeader(event, "if-modified-since");
    if (inm === etag || ims && new Date(ims).getTime() >= stat.mtime.getTime()) {
      event.node.res.statusCode = 304;
      return null;
    }
    const range = getHeader(event, "range");
    if (range) {
      const matches = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (matches) {
        const start = matches[1] ? parseInt(matches[1], 10) : 0;
        const end = matches[2] ? parseInt(matches[2], 10) : stat.size - 1;
        if (start <= end && end < stat.size) {
          event.node.res.statusCode = 206;
          setHeader(event, "Content-Range", `bytes ${start}-${end}/${stat.size}`);
          setHeader(event, "Accept-Ranges", "bytes");
          event.node.res.setHeader("Content-Length", String(end - start + 1));
          const stream2 = createReadStream(absolute, { start, end });
          return sendStream(event, stream2);
        }
      }
    }
  } catch {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }
  const stream = createReadStream(absolute);
  return sendStream(event, stream);
});

export { ____path_ as default };
//# sourceMappingURL=_...path_.mjs.map
