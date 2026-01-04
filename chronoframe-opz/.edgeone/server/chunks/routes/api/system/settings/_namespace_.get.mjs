import { e as eventHandler, g as getValidatedRouterParams, J as settingNamespaces, r as requireUserSession, c as createError, K as settingsManager } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
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

const _namespace__get = eventHandler(async (event) => {
  const { namespace } = await getValidatedRouterParams(
    event,
    z.object({
      namespace: z.enum([...settingNamespaces])
    }).parse
  );
  const session = await requireUserSession(event);
  if (!session || !session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin privileges required"
    });
  }
  try {
    const settings = await settingsManager.getNamespace(namespace);
    return { namespace, settings };
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: `Namespace ${namespace} not found or empty`
    });
  }
});

export { _namespace__get as default };
//# sourceMappingURL=_namespace_.get.mjs.map
