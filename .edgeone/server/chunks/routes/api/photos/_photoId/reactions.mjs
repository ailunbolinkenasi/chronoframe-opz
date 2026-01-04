import { n as defineEventHandler, j as getRouterParam, c as createError, u as useDB, t as tables, k as readBody, o as getHeaders, p as getRequestIP } from '../../../../nitro/nitro.mjs';
import { sql, eq, and } from 'drizzle-orm';
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

const REACTION_TYPES = ["like", "love", "amazing", "funny", "wow", "sad", "fire", "sparkle"];
const RATE_LIMIT_WINDOW = 60 * 1e3;
const MAX_REACTIONS_PER_WINDOW = 10;
function generateFingerprint(event) {
  const headers = getHeaders(event);
  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  const userAgent = headers["user-agent"] || "unknown";
  const acceptLanguage = headers["accept-language"] || "unknown";
  const acceptEncoding = headers["accept-encoding"] || "unknown";
  const fingerprint = `${ip}|${userAgent}|${acceptLanguage}|${acceptEncoding}`;
  return Buffer.from(fingerprint).toString("base64");
}
async function checkRateLimit(fingerprint) {
  const db = useDB();
  const now = Date.now();
  const windowStart = new Date(now - RATE_LIMIT_WINDOW);
  const recentReactions = await db.select({ count: sql`count(*)` }).from(tables.photoReactions).where(
    and(
      eq(tables.photoReactions.fingerprint, fingerprint),
      sql`${tables.photoReactions.createdAt} > ${Math.floor(windowStart.getTime() / 1e3)}`
    )
  ).get();
  return ((recentReactions == null ? void 0 : recentReactions.count) || 0) < MAX_REACTIONS_PER_WINDOW;
}
const reactions = defineEventHandler(async (event) => {
  const photoId = getRouterParam(event, "photoId");
  if (!photoId) {
    throw createError({
      statusCode: 400,
      message: "Photo ID is required"
    });
  }
  const db = useDB();
  const method = event.method;
  if (method === "GET") {
    const reactions = await db.select({
      reactionType: tables.photoReactions.reactionType,
      count: sql`count(*)`
    }).from(tables.photoReactions).where(eq(tables.photoReactions.photoId, photoId)).groupBy(tables.photoReactions.reactionType).all();
    const fingerprint = generateFingerprint(event);
    const userReaction = await db.select().from(tables.photoReactions).where(
      and(
        eq(tables.photoReactions.photoId, photoId),
        eq(tables.photoReactions.fingerprint, fingerprint)
      )
    ).get();
    const reactionCounts = {};
    for (const type of REACTION_TYPES) {
      reactionCounts[type] = 0;
    }
    reactions.forEach((r) => {
      if (r.reactionType) {
        reactionCounts[r.reactionType] = r.count;
      }
    });
    return {
      photoId,
      reactions: reactionCounts,
      userReaction: (userReaction == null ? void 0 : userReaction.reactionType) || null
    };
  }
  if (method === "POST") {
    const body = await readBody(event);
    const { reactionType } = body;
    if (!reactionType || !REACTION_TYPES.includes(reactionType)) {
      throw createError({
        statusCode: 400,
        message: "Invalid reaction type"
      });
    }
    const fingerprint = generateFingerprint(event);
    const canReact = await checkRateLimit(fingerprint);
    if (!canReact) {
      throw createError({
        statusCode: 429,
        message: "Too many reactions. Please try again later."
      });
    }
    const photo = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
    if (!photo) {
      throw createError({
        statusCode: 404,
        message: "Photo not found"
      });
    }
    const headers = getHeaders(event);
    const ipAddress = getRequestIP(event, { xForwardedFor: true });
    const userAgent = headers["user-agent"];
    const existingReaction = await db.select().from(tables.photoReactions).where(
      and(
        eq(tables.photoReactions.photoId, photoId),
        eq(tables.photoReactions.fingerprint, fingerprint)
      )
    ).get();
    if (existingReaction) {
      await db.update(tables.photoReactions).set({
        reactionType,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq(tables.photoReactions.id, existingReaction.id));
      return {
        success: true,
        action: "updated",
        reactionType
      };
    } else {
      await db.insert(tables.photoReactions).values({
        photoId,
        reactionType,
        fingerprint,
        ipAddress,
        userAgent
      });
      return {
        success: true,
        action: "created",
        reactionType
      };
    }
  }
  if (method === "DELETE") {
    const fingerprint = generateFingerprint(event);
    const existingReaction = await db.select().from(tables.photoReactions).where(
      and(
        eq(tables.photoReactions.photoId, photoId),
        eq(tables.photoReactions.fingerprint, fingerprint)
      )
    ).get();
    if (!existingReaction) {
      throw createError({
        statusCode: 404,
        message: "Reaction not found"
      });
    }
    await db.delete(tables.photoReactions).where(eq(tables.photoReactions.id, existingReaction.id));
    return {
      success: true,
      action: "deleted"
    };
  }
  throw createError({
    statusCode: 405,
    message: "Method not allowed"
  });
});

export { reactions as default };
//# sourceMappingURL=reactions.mjs.map
