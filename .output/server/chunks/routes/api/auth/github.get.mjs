import { d as defineOAuthGitHubEventHandler, c as createError, u as useDB, t as tables, l as logger, s as setUserSession, b as sendRedirect } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const _accessDeniedError = createError({
  statusCode: 403,
  statusMessage: "Access denied. Please contact the administrator to activate your account."
});
const github_get = defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    const db = useDB();
    const userFromEmail = db.select().from(tables.users).where(eq(tables.users.email, user.email || "")).get();
    logger.chrono.info(
      "GitHub OAuth login:",
      user.email,
      userFromEmail ? "Existing user" : "New user"
    );
    if (!userFromEmail) {
      db.insert(tables.users).values({
        username: user.name || "",
        email: user.email || "",
        avatar: user.avatar_url || null,
        createdAt: /* @__PURE__ */ new Date()
      }).returning().get();
      throw _accessDeniedError;
    } else if (userFromEmail.isAdmin === 0) {
      throw _accessDeniedError;
    } else {
      await setUserSession(
        event,
        { user: userFromEmail },
        {
          cookie: {
            // secure: !useRuntimeConfig().allowInsecureCookie,
            secure: false
          }
        }
      );
    }
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    logger.chrono.warn("GitHub OAuth login failed", error);
    throw createError({
      statusCode: 401,
      statusMessage: `Authentication failed: ${error.message || "Unknown error"}`
    });
  }
});

export { github_get as default };
//# sourceMappingURL=github.get.mjs.map
