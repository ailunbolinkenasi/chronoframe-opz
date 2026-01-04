import { e as eventHandler, M as getValidatedQuery, K as settingsManager, c as createError } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
import { g as getSettingUIConfig } from '../../../_/ui-config.mjs';
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

const schema_get = eventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z.object({
      namespace: z.string().min(1)
    }).parse
  );
  if (query.namespace === "admin") {
    const fields = [
      {
        namespace: "admin",
        key: "username",
        type: "string",
        defaultValue: "admin",
        value: "admin",
        label: "wizard.admin.username.label",
        ui: { type: "input", required: true, placeholder: "admin" }
      },
      {
        namespace: "admin",
        key: "email",
        type: "string",
        defaultValue: "",
        value: "",
        label: "wizard.admin.email.label",
        ui: { type: "input", required: true, placeholder: "admin@example.com" }
      },
      {
        namespace: "admin",
        key: "password",
        type: "string",
        defaultValue: "",
        value: "",
        label: "wizard.admin.password.label",
        ui: { type: "password", required: true }
      },
      {
        namespace: "admin",
        key: "confirmPassword",
        type: "string",
        defaultValue: "",
        value: "",
        label: "wizard.admin.confirmPassword.label",
        ui: { type: "password", required: true }
      }
    ];
    return { namespace: "admin", fields };
  }
  if (query.namespace === "storage") {
    const storageFields = [
      { key: "provider", type: "string", defaultValue: "local", label: "settings.storage.provider.label" },
      { key: "name", type: "string", defaultValue: "Default Storage", label: "settings.storage.name.label" },
      // Local
      { key: "local.basePath", type: "string", defaultValue: "./data/storage", label: "settings.storage.local.basePath.label" },
      { key: "local.baseUrl", type: "string", defaultValue: "/storage", label: "settings.storage.local.baseUrl.label" },
      { key: "local.prefix", type: "string", defaultValue: "photos/", label: "settings.storage.local.prefix.label" },
      // S3
      { key: "s3.endpoint", type: "string", defaultValue: "", label: "settings.storage.s3.endpoint.label" },
      { key: "s3.bucket", type: "string", defaultValue: "", label: "settings.storage.s3.bucket.label" },
      { key: "s3.region", type: "string", defaultValue: "auto", label: "settings.storage.s3.region.label" },
      { key: "s3.accessKeyId", type: "string", defaultValue: "", label: "settings.storage.s3.accessKeyId.label" },
      { key: "s3.secretAccessKey", type: "string", defaultValue: "", label: "settings.storage.s3.secretAccessKey.label" },
      { key: "s3.prefix", type: "string", defaultValue: "/photos", label: "settings.storage.s3.prefix.label" },
      { key: "s3.cdnUrl", type: "string", defaultValue: "", label: "settings.storage.s3.cdnUrl.label" },
      { key: "s3.forcePathStyle", type: "boolean", defaultValue: false, label: "settings.storage.s3.forcePathStyle.label" },
      { key: "s3.maxKeys", type: "number", defaultValue: 1e3, label: "settings.storage.s3.maxKeys.label" },
      // OpenList
      { key: "openlist.baseUrl", type: "string", defaultValue: "", label: "settings.storage.openlist.baseUrl.label" },
      { key: "openlist.rootPath", type: "string", defaultValue: "/photos", label: "settings.storage.openlist.rootPath.label" },
      { key: "openlist.token", type: "string", defaultValue: "", label: "settings.storage.openlist.token.label" },
      { key: "openlist.cdnUrl", type: "string", defaultValue: "", label: "settings.storage.openlist.cdnUrl.label" },
      { key: "openlist.uploadEndpoint", type: "string", defaultValue: "/api/fs/put", label: "settings.storage.openlist.uploadEndpoint.label" },
      { key: "openlist.downloadEndpoint", type: "string", defaultValue: "", label: "settings.storage.openlist.downloadEndpoint.label" },
      { key: "openlist.listEndpoint", type: "string", defaultValue: "", label: "settings.storage.openlist.listEndpoint.label" },
      { key: "openlist.deleteEndpoint", type: "string", defaultValue: "/api/fs/remove", label: "settings.storage.openlist.deleteEndpoint.label" },
      { key: "openlist.metaEndpoint", type: "string", defaultValue: "/api/fs/get", label: "settings.storage.openlist.metaEndpoint.label" },
      { key: "openlist.pathField", type: "string", defaultValue: "path", label: "settings.storage.openlist.pathField.label" }
    ];
    const fields = storageFields.map((field) => {
      const ui = getSettingUIConfig("storage", field.key);
      return {
        namespace: "storage",
        key: field.key,
        type: field.type,
        defaultValue: field.defaultValue,
        value: field.defaultValue,
        label: field.label,
        ui: ui || { type: "input" }
      };
    });
    return { namespace: "storage", fields };
  }
  try {
    const schema = await settingsManager.getSchema();
    const namespaceSettings = schema.filter(
      (s) => s.namespace === query.namespace
    );
    const fields = namespaceSettings.map((setting) => {
      const uiConfig = getSettingUIConfig(query.namespace, setting.key);
      if (query.namespace === "map" && setting.key === "provider") {
        return {
          ...setting,
          ui: {
            type: "custom",
            options: [
              {
                label: "wizard.map.provider.mapbox.label",
                value: "mapbox",
                icon: "simple-icons:mapbox",
                description: "wizard.map.provider.mapbox.description"
              },
              {
                label: "wizard.map.provider.maplibre.label",
                value: "maplibre",
                icon: "simple-icons:maplibre",
                description: "wizard.map.provider.maplibre.description"
              }
            ]
          }
        };
      }
      return {
        ...setting,
        ui: uiConfig || {
          type: "input",
          required: false
        }
      };
    });
    return {
      namespace: query.namespace,
      fields
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch wizard schema"
    });
  }
});

export { schema_get as default };
//# sourceMappingURL=schema.get.mjs.map
