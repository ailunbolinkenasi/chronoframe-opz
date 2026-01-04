import { e as eventHandler, u as useDB, a as readValidatedBody, t as tables, c as createError, v as verifyPassword, s as setUserSession, f as setResponseStatus } from '../../nitro/nitro.mjs';
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

const _invalidCredentialsError = createError({
  statusCode: 401,
  message: "Invalid credentials"
});
const login_post = eventHandler(async (event) => {
  const db = useDB();
  const { email, password } = await readValidatedBody(
    event,
    z.object({
      email: z.email(),
      password: z.string().min(6)
    }).parse
  );
  const user = db.select().from(tables.users).where(eq(tables.users.email, email)).get();
  if (!user) {
    throw _invalidCredentialsError;
  }
  if (!await verifyPassword(user.password || "", password)) {
    throw _invalidCredentialsError;
  }
  await setUserSession(
    event,
    { user },
    {
      cookie: {
        // secure: !useRuntimeConfig().allowInsecureCookie,
        secure: false
      }
    }
  );
  return setResponseStatus(event, 201);
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
