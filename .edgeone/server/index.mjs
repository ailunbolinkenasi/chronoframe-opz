import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import path, { resolve, dirname, join } from 'node:path';
import crypto$1 from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import wsAdapter from 'file://D:/chronoframe-opz/node_modules/.pnpm/crossws@0.3.5/node_modules/crossws/dist/adapters/node.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, deleteCookie, setCookie, getQuery as getQuery$1, getRequestProtocol, getRequestHost, useSession, removeResponseHeader, readBody, setHeader, getRouterParam, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, sendError, getValidatedRouterParams, readValidatedBody, getHeaders, getRequestIP, getMethod, getHeader, readRawBody, createEventStream, getValidatedQuery, sendStream, getResponseStatusText, H3Error } from 'file://D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@vue+shared@3.5.26/node_modules/@vue/shared/dist/shared.cjs.js';
import { migrate as migrate$2 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/drizzle-orm@0.44.7_@cloudfl_33833b556c54c3229140578f131c16f0/node_modules/drizzle-orm/better-sqlite3/migrator.js';
import { fileURLToPath } from 'node:url';
import defu, { defuFn, defu as defu$1, createDefu } from 'file://D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { html as html$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/satori-html@0.3.2/node_modules/satori-html/dist/index.js';
import sizeOf from 'file://D:/chronoframe-opz/node_modules/.pnpm/image-size@2.0.2/node_modules/image-size/dist/index.mjs';
import consola, { createConsola, consola as consola$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { Launcher } from 'file://D:/chronoframe-opz/node_modules/.pnpm/chrome-launcher@1.2.1/node_modules/chrome-launcher/dist/index.js';
import playwrightCore from 'file://D:/chronoframe-opz/node_modules/.pnpm/playwright-core@1.57.0/node_modules/playwright-core/index.mjs';
import { toValue, isVNode, isRef } from 'file://D:/chronoframe-opz/node_modules/.pnpm/vue@3.5.26_typescript@5.9.3/node_modules/vue/index.mjs';
import z$1, { z } from 'file://D:/chronoframe-opz/node_modules/.pnpm/zod@4.2.1/node_modules/zod/index.js';
import { sql, and, eq, desc, asc, getTableColumns, isNotNull, inArray, or, gte } from 'file://D:/chronoframe-opz/node_modules/.pnpm/drizzle-orm@0.44.7_@cloudfl_33833b556c54c3229140578f131c16f0/node_modules/drizzle-orm/index.js';
import { FetchError, createFetch, Headers as Headers$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import { snakeCase, upperFirst } from 'file://D:/chronoframe-opz/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getRandomValues } from 'file://D:/chronoframe-opz/node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs';
import { defineI18nMiddleware, useTranslation } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@intlify+h3@0.7.4/node_modules/@intlify/h3/dist/index.mjs';
import { readFile, mkdir, writeFile, unlink, mkdtemp, rm } from 'node:fs/promises';
import { exiftool } from 'file://D:/chronoframe-opz/node_modules/.pnpm/exiftool-vendored@30.5.0/node_modules/exiftool-vendored/dist/ExifTool.js';
import fs, { promises, readFileSync, createReadStream } from 'node:fs';
import * as si from 'file://D:/chronoframe-opz/node_modules/.pnpm/systeminformation@5.28.5/node_modules/systeminformation/lib/index.js';
import { Hash } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@adonisjs+hash@9.1.1/node_modules/@adonisjs/hash/build/index.js';
import { Scrypt } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@adonisjs+hash@9.1.1/node_modules/@adonisjs/hash/build/src/drivers/scrypt.js';
import sharp from 'file://D:/chronoframe-opz/node_modules/.pnpm/sharp@0.34.4/node_modules/sharp/lib/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://D:/chronoframe-opz/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { parse, stringify, uneval } from 'file://D:/chronoframe-opz/node_modules/.pnpm/devalue@5.6.1/node_modules/devalue/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://D:/chronoframe-opz/node_modules/.pnpm/unhead@2.1.1/node_modules/unhead/dist/server.mjs';
import { createStorage, prefixStorage, normalizeKey } from 'file://D:/chronoframe-opz/node_modules/.pnpm/unstorage@1.17.3_db0@0.3.4__249b788cdfd79360c828fdb59b11c5fa/node_modules/unstorage/dist/index.mjs';
import lruCacheDriver from 'file://D:/chronoframe-opz/node_modules/.pnpm/unstorage@1.17.3_db0@0.3.4__249b788cdfd79360c828fdb59b11c5fa/node_modules/unstorage/drivers/lru-cache.mjs';
import { klona } from 'file://D:/chronoframe-opz/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { createGenerator } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@unocss+core@66.5.12/node_modules/@unocss/core/dist/index.mjs';
import presetWind from 'file://D:/chronoframe-opz/node_modules/.pnpm/@unocss+preset-wind3@66.5.12/node_modules/@unocss/preset-wind3/dist/index.mjs';
import { digest, hash as hash$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/chronoframe-opz/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { createHooks } from 'file://D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://D:/chronoframe-opz/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/chronoframe-opz/node_modules/.pnpm/unstorage@1.17.3_db0@0.3.4__249b788cdfd79360c828fdb59b11c5fa/node_modules/unstorage/drivers/fs.mjs';
import { ErrorParser } from 'file://D:/chronoframe-opz/node_modules/.pnpm/youch-core@0.3.3/node_modules/youch-core/build/index.js';
import { Youch } from 'file://D:/chronoframe-opz/node_modules/.pnpm/youch@4.1.0-beta.13/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://D:/chronoframe-opz/node_modules/.pnpm/source-map@0.7.6/node_modules/source-map/source-map.js';
import devalue from 'file://D:/chronoframe-opz/node_modules/.pnpm/@nuxt+devalue@2.0.2/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { tryQueryLocale, tryCookieLocale, tryHeaderLocale } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@intlify+utils@0.13.0/node_modules/@intlify/utils/dist/h3.mjs';
import { createPathIndexLanguageParser, parseAcceptLanguage } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@intlify+utils@0.13.0/node_modules/@intlify/utils/dist/index.mjs';
import { parse as parse$1 } from 'file://D:/chronoframe-opz/node_modules/.pnpm/cookie-es@2.0.0/node_modules/cookie-es/dist/index.mjs';
import { createRouterMatcher } from 'file://D:/chronoframe-opz/node_modules/.pnpm/vue-router@4.6.4_vue@3.5.26_typescript@5.9.3_/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/chronoframe-opz/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { drizzle } from 'file://D:/chronoframe-opz/node_modules/.pnpm/drizzle-orm@0.44.7_@cloudfl_33833b556c54c3229140578f131c16f0/node_modules/drizzle-orm/better-sqlite3/index.js';
import Database from 'file://D:/chronoframe-opz/node_modules/.pnpm/better-sqlite3@12.5.0/node_modules/better-sqlite3/lib/index.js';
import { sqliteTable, integer, text, real, uniqueIndex } from 'file://D:/chronoframe-opz/node_modules/.pnpm/drizzle-orm@0.44.7_@cloudfl_33833b556c54c3229140578f131c16f0/node_modules/drizzle-orm/sqlite-core/index.js';
import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand, ListObjectsCommand, S3Client } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@aws-sdk+client-s3@3.958.0/node_modules/@aws-sdk/client-s3/dist-cjs/index.js';
import { getSignedUrl } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@aws-sdk+s3-request-presigner@3.958.0/node_modules/@aws-sdk/s3-request-presigner/dist-cjs/index.js';
import bmp from 'file://D:/chronoframe-opz/node_modules/.pnpm/@vingle+bmp-js@0.2.5/node_modules/@vingle/bmp-js/index.js';
import heicConvert from 'file://D:/chronoframe-opz/node_modules/.pnpm/heic-convert@2.1.0/node_modules/heic-convert/index.js';
import { rgbaToThumbHash } from 'file://D:/chronoframe-opz/node_modules/.pnpm/thumbhash@0.1.1/node_modules/thumbhash/thumbhash.js';
import { noop } from 'file://D:/chronoframe-opz/node_modules/.pnpm/es-toolkit@1.43.0/node_modules/es-toolkit/dist/index.mjs';
import { dirname as dirname$1, resolve as resolve$1, basename, isAbsolute } from 'file://D:/chronoframe-opz/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import process$1 from 'node:process';
import { renderToString } from 'file://D:/chronoframe-opz/node_modules/.pnpm/vue@3.5.26_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file://D:/chronoframe-opz/node_modules/.pnpm/unhead@2.1.1/node_modules/unhead/dist/utils.mjs';
import { getIcons } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@iconify+utils@3.1.0/node_modules/@iconify/utils/lib/index.js';
import { collections } from 'file://D:/chronoframe-opz/.nuxt/nuxt-icon-server-bundle.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://D:/chronoframe-opz/node_modules/.pnpm/ipx@2.1.1_db0@0.3.4_better-_0a31be283312bb493ded801a86cbc10a/node_modules/ipx/dist/index.mjs';
import { createUnhead } from 'file://D:/chronoframe-opz/node_modules/.pnpm/unhead@2.1.1/node_modules/unhead/dist/index.mjs';
import { Resvg } from 'file://D:/chronoframe-opz/node_modules/.pnpm/@resvg+resvg-js@2.6.2/node_modules/@resvg/resvg-js/index.js';
import _satori from 'file://D:/chronoframe-opz/node_modules/.pnpm/satori@0.15.2/node_modules/satori/dist/index.js';

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const serverAssets = [{"baseName":"nuxt-og-image:fonts","dir":"D:/chronoframe-opz/.nuxt/cache/nuxt-og-image/_fonts"},{"baseName":"server","dir":"D:/chronoframe-opz/server/assets"}];

const assets$2 = createStorage();

for (const asset of serverAssets) {
  assets$2.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$2);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/chronoframe-opz","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/chronoframe-opz/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/chronoframe-opz/.edgeone"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/chronoframe-opz/.edgeone/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/chronoframe-opz/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    colors: {
      primary: "pink",
      secondary: "purple",
      neutral: "neutral",
      info: "sky",
      success: "emerald",
      warning: "amber",
      danger: "rose"
    },
    button: {
      slots: {
        base: "cursor-pointer"
      }
    },
    popover: {
      slots: {
        content: "bg-white/70 dark:bg-neutral-900/50 backdrop-blur-3xl ring-0 shadow-lg border border-neutral-300/50 dark:border-neutral-500/50 rounded-lg"
      }
    },
    card: {
      slots: {
        header: "font-semibold"
      },
      variants: {
        variant: {
          glassmorphism: {
            root: "shadow-lg divide-y-0 divide-neutral-300/50 dark:divide-neutral-500/50",
            header: "p-2 sm:p-2 pb-0!",
            body: "p-2 sm:p-2",
            footer: "p-2 sm:p-2"
          }
        }
      }
    },
    formField: {
      slots: {
        label: "mb-1",
        help: "mt-0.5"
      }
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowDown": "i-lucide-arrow-down",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "arrowUp": "i-lucide-arrow-up",
      "caution": "i-lucide-circle-alert",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "drag": "i-lucide-grip-vertical",
      "ellipsis": "i-lucide-ellipsis",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "loading": "i-lucide-loader-circle",
      "menu": "i-lucide-menu",
      "minus": "i-lucide-minus",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "plus": "i-lucide-plus",
      "reload": "i-lucide-rotate-ccw",
      "search": "i-lucide-search",
      "stop": "i-lucide-square",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "upload": "i-lucide-upload",
      "warning": "i-lucide-triangle-alert"
    },
    "tv": {
      "twMergeConfig": {}
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  },
  "_MAPBOX_CONFIG": {
    "accessToken": ""
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "VERSION": "1.0.0-beta-fix-2025-12-31",
    "mapbox": {
      "accessToken": "",
      "persistent": true
    },
    "app": {
      "title": "看见.",
      "slogan": "",
      "author": "iren.",
      "avatarUrl": ""
    },
    "map": {
      "provider": "maplibre",
      "mapbox": {
        "style": ""
      },
      "maplibre": {
        "token": "",
        "style": ""
      }
    },
    "analytics": {
      "matomo": {
        "enabled": false,
        "url": "",
        "siteId": ""
      }
    },
    "oauth": {
      "github": {
        "enabled": false
      }
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "zh-Hans",
          "name": "简体中文",
          "language": "zh"
        },
        {
          "code": "zh-Hant-TW",
          "name": "繁体中文(台湾)",
          "language": "zh-TW"
        },
        {
          "code": "zh-Hant-HK",
          "name": "繁体中文(香港)",
          "language": "zh-HK"
        },
        {
          "code": "en",
          "name": "English",
          "language": "en"
        },
        {
          "code": "ja",
          "name": "日本語",
          "language": "ja"
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "chronoframe-locale",
        "cookieSecure": false,
        "fallbackLocale": "en",
        "redirectOn": "root",
        "useCookie": false
      },
      "experimental": {
        "localeDetector": "localeDetector.ts",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true
      },
      "domainLocales": {
        "zh-Hans": {
          "domain": ""
        },
        "zh-Hant-TW": {
          "domain": ""
        },
        "zh-Hant-HK": {
          "domain": ""
        },
        "en": {
          "domain": ""
        },
        "ja": {
          "domain": ""
        }
      }
    }
  },
  "mapbox": {
    "accessToken": ""
  },
  "nominatim": {
    "baseUrl": "https://nominatim.openstreetmap.org"
  },
  "STORAGE_PROVIDER": "s3",
  "provider": {
    "s3": {
      "endpoint": "",
      "bucket": "",
      "region": "auto",
      "accessKeyId": "",
      "secretAccessKey": "",
      "prefix": "",
      "cdnUrl": "",
      "forcePathStyle": false
    },
    "local": {
      "localPath": "./data/storage",
      "baseUrl": "/storage",
      "prefix": "photos/"
    },
    "openlist": {
      "baseUrl": "",
      "rootPath": "",
      "token": "",
      "endpoints": {
        "upload": "/api/fs/put",
        "download": "",
        "list": "",
        "delete": "/api/fs/remove",
        "meta": "/api/fs/get"
      },
      "pathField": "path",
      "cdnUrl": ""
    }
  },
  "upload": {
    "mime": {
      "whitelistEnabled": true,
      "whitelist": "image/jpeg,image/png,image/webp,image/gif,image/bmp,image/tiff,image/heic,image/heif,video/quicktime,video/mp4"
    },
    "duplicateCheck": {
      "enabled": true,
      "mode": "skip"
    }
  },
  "allowInsecureCookie": false,
  "icon": {
    "serverKnownCssClasses": []
  },
  "session": {
    "name": "nuxt-session",
    "password": "",
    "cookie": {
      "sameSite": "lax"
    }
  },
  "hash": {
    "scrypt": {}
  },
  "webauthn": {
    "register": {},
    "authenticate": {}
  },
  "oauth": {
    "gitea": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": ""
    },
    "github": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "gitlab": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "https://gitlab.com"
    },
    "spotify": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "google": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "twitch": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "auth0": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "audience": "",
      "redirectURL": ""
    },
    "workos": {
      "clientId": "",
      "clientSecret": "",
      "connectionId": "",
      "screenHint": "",
      "redirectURL": ""
    },
    "microsoft": {
      "clientId": "",
      "clientSecret": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "azureb2c": {
      "clientId": "",
      "policy": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "discord": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "battledotnet": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "bluesky": {
      "clientMetadataFilename": "",
      "clientName": "",
      "clientUri": "",
      "logoUri": "",
      "policyUri": "",
      "tosUri": "",
      "scope": [
        "atproto"
      ],
      "grantTypes": [
        "authorization_code"
      ],
      "responseTypes": [
        "code"
      ],
      "applicationType": "web",
      "redirectUris": [],
      "dpopBoundAccessTokens": true,
      "tokenEndpointAuthMethod": "none"
    },
    "keycloak": {
      "clientId": "",
      "clientSecret": "",
      "serverUrl": "",
      "serverUrlInternal": "",
      "realm": "",
      "redirectURL": ""
    },
    "linear": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "linkedin": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "cognito": {
      "clientId": "",
      "clientSecret": "",
      "region": "",
      "userPoolId": "",
      "redirectURL": ""
    },
    "facebook": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "instagram": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "paypal": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "steam": {
      "apiKey": "",
      "redirectURL": ""
    },
    "x": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "xsuaa": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "vk": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "yandex": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "tiktok": {
      "clientKey": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "dropbox": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "polar": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "zitadel": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "authentik": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "seznam": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "strava": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "hubspot": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "line": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "atlassian": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "apple": {
      "teamId": "",
      "keyId": "",
      "privateKey": "",
      "redirectURL": "",
      "clientId": ""
    },
    "kick": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "livechat": {
      "clientId": "",
      "clientSecret": ""
    },
    "salesforce": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "",
      "scope": ""
    },
    "slack": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "heroku": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "roblox": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "okta": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "audience": "",
      "scope": [],
      "redirectURL": ""
    },
    "ory": {
      "clientId": "",
      "clientSecret": "",
      "sdkURL": "",
      "redirectURL": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": ""
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "chronoframe-opz",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "chronoframe"
      },
      {
        "_context": "@nuxtjs/i18n",
        "defaultLocale": "en"
      }
    ],
    "version": "3.2.14",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-og-image": {
    "version": "5.1.12",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/5.1.12",
    "fonts": [
      {
        "cacheKey": "Rubik:400",
        "style": "normal",
        "weight": "400",
        "name": "Rubik",
        "path": "",
        "key": "nuxt-og-image:fonts:Rubik-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Rubik:700",
        "style": "normal",
        "weight": "700",
        "name": "Rubik",
        "path": "",
        "key": "nuxt-og-image:fonts:Rubik-normal-700.ttf.base64"
      },
      {
        "cacheKey": "Noto+Sans+SC:400",
        "style": "normal",
        "weight": "400",
        "name": "Noto+Sans+SC",
        "path": "",
        "key": "nuxt-og-image:fonts:Noto+Sans+SC-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Noto+Sans+SC:700",
        "style": "normal",
        "weight": "700",
        "name": "Noto+Sans+SC",
        "path": "",
        "key": "nuxt-og-image:fonts:Noto+Sans+SC-normal-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": true,
    "colorPreference": "light",
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false,
    "componentDirs": [
      "OgImage",
      "og-image",
      "OgImageTemplate"
    ]
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "D:/chronoframe-opz/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const memoryStore = {};

  const NONCE = ${JSON.stringify(nonce)}
  
  const mockStorage = {
    getItem: function(key) {
      return memoryStore[key] !== undefined ? memoryStore[key] : null;
    },
    setItem: function(key, value) {
      memoryStore[key] = String(value);
      window.parent.postMessage({
        type: 'storage-set',
        key: key,
        value: String(value),
        nonce: NONCE
      }, '*');
    },
    removeItem: function(key) {
      delete memoryStore[key];
      window.parent.postMessage({
        type: 'storage-remove',
        key: key,
        nonce: NONCE
      }, '*');
    },
    clear: function() {
      for (const key in memoryStore) {
        delete memoryStore[key];
      }
      window.parent.postMessage({
        type: 'storage-clear',
        nonce: NONCE
      }, '*');
    },
    key: function(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] !== undefined ? keys[index] : null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };
  
  try {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: false,
      configurable: true
    });
  } catch (e) {
    window.localStorage = mockStorage;
  }
  
  window.addEventListener('message', function(event) {
    if (event.data.type === 'storage-sync-data' && event.data.nonce === NONCE) {
      const data = event.data.data;
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          memoryStore[key] = data[key];
        }
      }
      if (typeof window.initTheme === 'function') {
        window.initTheme();
      }
      window.dispatchEvent(new Event('storage-ready'));
    }
  });
  
  window.parent.postMessage({ 
    type: 'storage-sync-request',
    nonce: NONCE
  }, '*');
})();
`
);
const parentStorageBridge = (nonce) => (
  /* js */
  `
(function() {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;
  
  // Wait for shadow root to be attached
  const checkShadow = setInterval(function() {
    if (host.shadowRoot) {
      clearInterval(checkShadow);
      const iframe = host.shadowRoot.getElementById('frame');
      if (!iframe) return;

      const NONCE = ${JSON.stringify(nonce)}
      
      window.addEventListener('message', function(event) {
        if (!event.data || event.data.nonce !== NONCE) return;
        
        const data = event.data;
        
        if (data.type === 'storage-set') {
          localStorage.setItem(data.key, data.value);
        } else if (data.type === 'storage-remove') {
          localStorage.removeItem(data.key);
        } else if (data.type === 'storage-clear') {
          localStorage.clear();
        } else if (data.type === 'storage-sync-request') {
          const allData = {};
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
          }
          iframe.contentWindow.postMessage({
            type: 'storage-sync-data',
            data: allData,
            nonce: NONCE
          }, '*');
        }
      });
    }
  }, 10);
})();
`
);
const errorCSS = (
  /* css */
  `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  right: 5px;
  bottom: 5px;
  left: auto;
  top: auto;
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: bottom right;
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 3px;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`
);
function webComponentScript(base64HTML, startMinimized) {
  return (
    /* js */
    `
  (function() {
    try {
      const host = document.querySelector('nuxt-error-overlay');
      if (!host) return;
      
      const shadow = host.attachShadow({ mode: 'open' });
      
      // Create elements
      const style = document.createElement('style');
      style.textContent = ${JSON.stringify(errorCSS)};
      
      const iframe = document.createElement('iframe');
      iframe.id = 'frame';
      iframe.src = 'data:text/html;base64,${base64HTML}';
      iframe.title = 'Detailed error stack trace';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      
      const preview = document.createElement('div');
      preview.id = 'preview';
      
      const button = document.createElement('button');
      button.id = 'toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('type', 'button');
      button.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';
      
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.className = 'sr-only';
      
      // Update preview snapshot
      function updatePreview() {
        try {
          let previewIframe = preview.querySelector('iframe');
          if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
            previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
            preview.appendChild(previewIframe);
          }
          
          const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
          const cleanedHTML = document.documentElement.outerHTML
            .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
            .replace(/<script[^>]*>.*?<\\/script>/gs, '');
          
          const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(doctype + cleanedHTML);
          iframeDoc.close();
        } catch (error) {
          console.error('Failed to update preview:', error);
        }
      }
      
      function toggleView() {
        const isMinimized = iframe.hasAttribute('inert');
        
        if (isMinimized) {
          updatePreview();
          iframe.removeAttribute('inert');
          button.setAttribute('aria-expanded', 'true');
          liveRegion.textContent = 'Showing detailed error view';
          setTimeout(function() {
            try { iframe.contentWindow.focus(); } catch {}
          }, 100);
        } else {
          iframe.setAttribute('inert', '');
          button.setAttribute('aria-expanded', 'false');
          liveRegion.textContent = 'Showing error page';
          button.focus();
        }
      }
      
      button.onclick = toggleView;
      
      document.addEventListener('keydown', function(e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && !iframe.hasAttribute('inert')) {
          toggleView();
        }
      });
      
      // Append to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(liveRegion);
      shadow.appendChild(iframe);
      shadow.appendChild(preview);
      shadow.appendChild(button);
      
      if (${startMinimized}) {
        iframe.setAttribute('inert', '');
        button.setAttribute('aria-expanded', 'false');
      }
      
      // Initialize preview
      setTimeout(updatePreview, 100);
      
    } catch (error) {
      console.error('Failed to initialize Nuxt error overlay:', error);
    }
  })();
  `
  );
}
function generateErrorOverlayHTML(html, options) {
  const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
  const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
  const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
  return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return error500; });
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  if (!globalThis._importMeta_.test && typeof html === "string") {
    const prettyResponse = await defaultHandler(error, event, { json: false });
    return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= statusCode && statusCode < 500 })}</body>`));
  }
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const _92kiTT_mxr43AMJWgQdIb7juRNHyBImJAnlPvswa9k = defineNitroPlugin((nitroApp) => {
  if (process.env.NUXT_OAUTH_FACEBOOK_CLIENT_ID && process.env.NUXT_OAUTH_FACEBOOK_CLIENT_SECRET || process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_ID && process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_SECRET) {
    nitroApp.hooks.hook("render:html", (html) => {
      html.head.unshift(`
      <script>
        if (window.location.hash === "#_=_"){
          history.replaceState
              ? history.replaceState(null, null, window.location.href.split("#")[0])
              : window.location.hash = "";
        }
      <\/script>
    `);
    });
  }
});

function defineNitroPlugin(def) {
  return def;
}
const nitroPlugin = defineNitroPlugin;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const a=t==="test"||n(o.TEST),h=t==="dev"||t==="development";n(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const scheduledTasks = false;

const tasks = {
  "db:migrate": {
          meta: {
            description: "",
          },
          resolve: () => Promise.resolve().then(function () { return migrate$1; }).then(r => r.default || r),
        },
"db:seed": {
          meta: {
            description: "",
          },
          resolve: () => Promise.resolve().then(function () { return seed$1; }).then(r => r.default || r),
        }
};

function defineTask(def) {
  if (typeof def.run !== "function") {
    def.run = () => {
      throw new TypeError("Task must implement a `run` method!");
    };
  }
  return def;
}
const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function defineI18nLocaleDetector(detector) {
  return detector;
}

const compressUint8Array = (uint8Array) => {
  return Array.from(uint8Array).map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

const s3StorageConfigSchema = z.object({
  provider: z.literal("s3"),
  bucket: z.string(),
  region: z.string().default("auto"),
  endpoint: z.string(),
  prefix: z.string().default("/photos").optional(),
  cdnUrl: z.string().optional(),
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
  forcePathStyle: z.boolean().optional(),
  maxKeys: z.number().optional()
});
const localStorageConfigSchema = z.object({
  provider: z.literal("local"),
  basePath: z.string().min(1),
  baseUrl: z.string().optional(),
  prefix: z.string().optional()
});
const openListStorageConfigSchema = z.object({
  provider: z.literal("openlist"),
  baseUrl: z.string().min(1),
  rootPath: z.string().min(1),
  token: z.string().min(1),
  uploadEndpoint: z.string().default("/api/fs/put").optional(),
  downloadEndpoint: z.string().optional(),
  listEndpoint: z.string().optional(),
  deleteEndpoint: z.string().default("/api/fs/remove").optional(),
  metaEndpoint: z.string().default("/api/fs/get").optional(),
  pathField: z.string().default("path").optional(),
  cdnUrl: z.string().optional()
});
const storageConfigSchema = z.discriminatedUnion("provider", [
  s3StorageConfigSchema,
  localStorageConfigSchema,
  openListStorageConfigSchema
]);

function getOAuthRedirectURL(event) {
  const requestURL = getRequestURL(event);
  return `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
}
async function requestAccessToken(url, options) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...options.headers
  };
  const body = headers["Content-Type"] === "application/x-www-form-urlencoded" ? new URLSearchParams(
    options.body || options.params || {}
  ).toString() : options.body;
  return $fetch(url, {
    method: "POST",
    headers,
    body
  }).catch((error) => {
    if (error instanceof FetchError && error.status === 401) {
      return error.data;
    }
    throw error;
  });
}
function handleAccessTokenErrorResponse(event, oauthProvider, oauthError, onError) {
  const message = `${upperFirst(oauthProvider)} login failed: ${oauthError.error_description || oauthError.error || "Unknown error"}`;
  const error = createError({
    statusCode: 401,
    message,
    data: oauthError
  });
  if (!onError) throw error;
  return onError(event, error);
}
function handleMissingConfiguration(event, provider, missingKeys, onError) {
  const environmentVariables = missingKeys.map((key) => `NUXT_OAUTH_${provider.toUpperCase()}_${snakeCase(key).toUpperCase()}`);
  const error = createError({
    statusCode: 500,
    message: `Missing ${environmentVariables.join(" or ")} env ${missingKeys.length > 1 ? "variables" : "variable"}.`
  });
  if (!onError) throw error;
  return onError(event, error);
}
function handleInvalidState(event, provider, onError) {
  const message = `${upperFirst(provider)} login failed: state mismatch`;
  const error = createError({
    statusCode: 500,
    message
  });
  if (!onError) throw error;
  return onError(event, error);
}
function encodeBase64Url(input) {
  return btoa(String.fromCharCode.apply(null, input)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function getRandomBytes(size = 32) {
  return getRandomValues(new Uint8Array(size));
}
async function handleState(event) {
  let state = getCookie(event, "nuxt-auth-state");
  if (state) {
    deleteCookie(event, "nuxt-auth-state");
    return state;
  }
  state = encodeBase64Url(getRandomBytes(8));
  setCookie(event, "nuxt-auth-state", state);
  return state;
}

function defineOAuthGitHubEventHandler({ config, onSuccess, onError }) {
  return eventHandler(async (event) => {
    config = defu$1(config, useRuntimeConfig(event).oauth?.github, {
      authorizationURL: "https://github.com/login/oauth/authorize",
      tokenURL: "https://github.com/login/oauth/access_token",
      apiURL: "https://api.github.com",
      authorizationParams: {}
    });
    const query = getQuery$1(event);
    if (query.error) {
      const error = createError({
        statusCode: 401,
        message: `GitHub login failed: ${query.error || "Unknown error"}`,
        data: query
      });
      if (!onError) throw error;
      return onError(event, error);
    }
    if (!config.clientId || !config.clientSecret) {
      return handleMissingConfiguration(event, "github", ["clientId", "clientSecret"], onError);
    }
    const redirectURL = config.redirectURL || getOAuthRedirectURL(event);
    const state = await handleState(event);
    if (!query.code) {
      config.scope = config.scope || [];
      if (config.emailRequired && !config.scope.includes("user:email")) {
        config.scope.push("user:email");
      }
      return sendRedirect(
        event,
        withQuery(config.authorizationURL, {
          client_id: config.clientId,
          redirect_uri: redirectURL,
          scope: config.scope.join(" "),
          state,
          ...config.authorizationParams
        })
      );
    }
    if (query.state !== state) {
      return handleInvalidState(event, "github", onError);
    }
    const tokens = await requestAccessToken(config.tokenURL, {
      body: {
        grant_type: "authorization_code",
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: redirectURL,
        code: query.code
      }
    });
    if (tokens.error) {
      return handleAccessTokenErrorResponse(event, "github", tokens, onError);
    }
    const accessToken = tokens.access_token;
    const user = await $fetch(`${config.apiURL}/user`, {
      headers: {
        "User-Agent": `Github-OAuth-${config.clientId}`,
        "Authorization": `token ${accessToken}`
      }
    });
    if (!user.email && config.emailRequired) {
      const emails = await $fetch(`${config.apiURL}/user/emails`, {
        headers: {
          "User-Agent": `Github-OAuth-${config.clientId}`,
          "Authorization": `token ${accessToken}`
        }
      });
      const primaryEmail = emails.find((email) => email.primary);
      if (!primaryEmail) {
        const error = createError({
          statusCode: 500,
          message: "Could not get GitHub user email",
          data: tokens
        });
        if (!onError) throw error;
        return onError(event, error);
      }
      user.email = primaryEmail.email;
      user.email_verified = primaryEmail.verified;
    }
    return onSuccess(event, {
      user,
      tokens
    });
  });
}

let _hash;
function getHash() {
  if (!_hash) {
    const options = useRuntimeConfig().hash?.scrypt;
    const scrypt = new Scrypt(options);
    _hash = new Hash(scrypt);
  }
  return _hash;
}
async function hashPassword(password) {
  return await getHash().make(password);
}
async function verifyPassword(hashedPassword, plainPassword) {
  return await getHash().verify(hashedPassword, plainPassword);
}

function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? h;
  const isPrerender = ctx.isPrerender ?? !!o.prerender;
  let host = "";
  let port = "";
  let protocol = o.NITRO_SSL_CERT && o.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = o.__NUXT_DEV__ || o.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(/^https?:\/\//, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = o.NITRO_HOST || o.HOST || "";
    if (isDev)
      port = o.NITRO_PORT || o.PORT || "3000";
  }
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  host = o.NUXT_SITE_HOST_OVERRIDE || host;
  port = o.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(/^https?:\/\//, "");
  } else if (!host.includes("localhost") && !host.startsWith("127.")) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: true,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    let idx;
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      idx = stack.push(entry);
    return () => {
      if (typeof idx !== "undefined") {
        stack.splice(idx - 1, 1);
      }
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$3 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$3.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function useNitroOrigin(e) {
  return getNitroOrigin(e);
}

function useSiteConfig(e, _options) {
  return getSiteConfig(e, _options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const logDir = path.join(process.cwd(), "data", "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}
const logFilePath = path.join(logDir, "app.log");
const logFileReporter = {
  log: (logObj) => {
    const logLine = `${JSON.stringify(logObj)}
`;
    fs.appendFile(logFilePath, logLine, (err) => {
      if (err) {
        console.error("Failed to write log to file:", err);
      }
    });
  }
};
const mConsola = createConsola({
  formatOptions: {
    date: true,
    colors: true,
    compact: false
  }
});
mConsola.addReporter(logFileReporter);
const logger$1 = {
  chrono: mConsola.withTag("cframe/main"),
  storage: mConsola.withTag("cframe/storage"),
  fs: mConsola.withTag("cframe/fs"),
  image: mConsola.withTag("cframe/image"),
  location: mConsola.withTag("cframe/location"),
  dynamic: (id) => mConsola.withTag(`cframe/${id}`)
};

const logger$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  logger: logger$1
}, Symbol.toStringTag, { value: 'Module' }));

const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("name").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password"),
  avatar: text("avatar"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  isAdmin: integer("is_admin").default(0).notNull()
});
const photos = sqliteTable("photos", {
  id: text("id").primaryKey().unique(),
  title: text("title"),
  description: text("description"),
  width: integer("width"),
  height: integer("height"),
  aspectRatio: real("aspect_ratio"),
  dateTaken: text("date_taken"),
  storageKey: text("storage_key"),
  thumbnailKey: text("thumbnail_key"),
  fileSize: integer("file_size"),
  lastModified: text("last_modified"),
  originalUrl: text("original_url"),
  thumbnailUrl: text("thumbnail_url"),
  thumbnailHash: text("thumbnail_hash"),
  tags: text("tags", { mode: "json" }).$type(),
  exif: text("exif", { mode: "json" }).$type(),
  // 地理位置信息
  latitude: real("latitude"),
  longitude: real("longitude"),
  country: text("country"),
  city: text("city"),
  locationName: text("location_name"),
  // LivePhoto 相关字段
  isLivePhoto: integer("is_live_photo").default(0).notNull(),
  livePhotoVideoUrl: text("live_photo_video_url"),
  livePhotoVideoKey: text("live_photo_video_key")
});
const pipelineQueue = sqliteTable("pipeline_queue", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  payload: text("payload", { mode: "json" }).$type().notNull().default({
    type: "photo",
    storageKey: ""
  }),
  priority: integer("priority").default(0).notNull(),
  attempts: integer("attempts").default(0).notNull(),
  maxAttempts: integer("max_attempts").default(3).notNull(),
  status: text("status", {
    enum: [
      "pending",
      // Waiting to be processed
      "in-stages",
      // Currently being processed
      "completed",
      // Successfully processed
      "failed"
      // Processing failed
    ]
  }).notNull().default("pending"),
  statusStage: text("status_stage", {
    enum: [
      "preprocessing",
      "metadata",
      "thumbnail",
      "exif",
      "motion-photo",
      "reverse-geocoding",
      "live-photo"
    ]
  }),
  errorMessage: text("error_message"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
  completedAt: integer("completed_at", { mode: "timestamp" })
});
const photoReactions = sqliteTable("photo_reactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  photoId: text("photo_id").notNull().references(() => photos.id, { onDelete: "cascade" }),
  reactionType: text("reaction_type", {
    enum: ["like", "love", "amazing", "funny", "wow", "sad", "fire", "sparkle"]
  }).notNull(),
  // 使用指纹而不是 IP 地址，更准确且支持匿名用户
  fingerprint: text("fingerprint").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`)
});
const albums = sqliteTable("albums", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  coverPhotoId: text("cover_photo_id").references(() => photos.id, {
    onDelete: "set null"
  }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`)
});
const albumPhotos = sqliteTable("album_photos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  albumId: integer("album_id").notNull().references(() => albums.id, { onDelete: "cascade" }),
  photoId: text("photo_id").notNull().references(() => photos.id, { onDelete: "cascade" }),
  position: real("position").notNull().default(1e6),
  addedAt: integer("added_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`)
});
const settings$5 = sqliteTable(
  "settings",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    namespace: text("namespace").notNull().default("common"),
    key: text("key").notNull(),
    type: text("type", {
      enum: ["string", "number", "boolean", "json"]
    }).notNull(),
    value: text("value"),
    defaultValue: text("default_value"),
    label: text("label"),
    description: text("description"),
    isPublic: integer("is_public", { mode: "boolean" }).default(false).notNull(),
    isReadonly: integer("is_readonly", { mode: "boolean" }).default(false).notNull(),
    isSecret: integer("is_secret", { mode: "boolean" }).default(false).notNull(),
    enum: text("enum", { mode: "json" }).$type(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
    updatedBy: integer("updated_by").references(() => users.id, {
      onDelete: "set null"
    })
  },
  (t) => [uniqueIndex("idx_namespace_key").on(t.namespace, t.key)]
);
const settings_storage_providers = sqliteTable(
  "settings_storage_providers",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    provider: text("provider", {
      enum: ["s3", "local", "openlist"]
    }).notNull(),
    config: text("config", { mode: "json" }).$type().notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`)
  }
);

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  albumPhotos: albumPhotos,
  albums: albums,
  photoReactions: photoReactions,
  photos: photos,
  pipelineQueue: pipelineQueue,
  settings: settings$5,
  settings_storage_providers: settings_storage_providers,
  users: users
}, Symbol.toStringTag, { value: 'Module' }));

const tables = schema;
let dbInstance = null;
let sqliteInstance = null;
function useDB() {
  if (!dbInstance || !sqliteInstance) {
    sqliteInstance = new Database("data/app.sqlite3", {
      verbose: logger$1.dynamic("db").verbose 
    });
    sqliteInstance.pragma("journal_mode = WAL");
    sqliteInstance.pragma("synchronous = NORMAL");
    sqliteInstance.pragma("cache_size = 1000");
    sqliteInstance.pragma("temp_store = MEMORY");
    dbInstance = drizzle(sqliteInstance, { schema });
  }
  return dbInstance;
}

const sanitizeFileName = (fileName, options = {}) => {
  const {
    maxLength = 50,
    fallbackPrefix = "file",
    minLength = 3
  } = options;
  const cleanedName = fileName.replace(/[^\w\-_.]/g, "_").replace(/_{2,}/g, "_").replace(/^_+|_+$/g, "");
  if (cleanedName.length < minLength) {
    const hash = crypto$1.createHash("md5").update(fileName).digest("hex");
    return `${fallbackPrefix}_${hash.substring(0, 8)}`;
  }
  if (cleanedName.length > maxLength) {
    const hash = crypto$1.createHash("md5").update(fileName).digest("hex");
    const truncateLength = maxLength - 9;
    return `${cleanedName.substring(0, truncateLength)}_${hash.substring(0, 8)}`;
  }
  return cleanedName;
};
const generateSafePhotoId = (s3key) => {
  const baseName = path.basename(s3key, path.extname(s3key));
  return sanitizeFileName(baseName, {
    maxLength: 32,
    fallbackPrefix: "photo",
    minLength: 3
  });
};

async function withRetry(operation, options = {}, logger2) {
  const {
    maxAttempts = 3,
    baseDelay = 1e3,
    maxDelay = 3e4,
    timeout = 3e4,
    retryCondition = () => true,
    delayStrategy = "exponential"
  } = options;
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      logger2 == null ? void 0 : logger2.info(`Operation attempt ${attempt}/${maxAttempts}`);
      const result = await Promise.race([
        operation(),
        new Promise(
          (_, reject) => setTimeout(() => reject(new Error(`Operation timeout after ${timeout}ms`)), timeout)
        )
      ]);
      if (attempt > 1) {
        logger2 == null ? void 0 : logger2.success(`Operation succeeded on attempt ${attempt}`);
      }
      return result;
    } catch (error) {
      lastError = error;
      logger2 == null ? void 0 : logger2.warn(`Attempt ${attempt} failed:`, error);
      const shouldRetry = attempt < maxAttempts && retryCondition(lastError);
      if (shouldRetry) {
        const delay = calculateDelay(attempt, baseDelay, maxDelay, delayStrategy);
        logger2 == null ? void 0 : logger2.info(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  logger2 == null ? void 0 : logger2.error(`All ${maxAttempts} attempts failed`);
  throw lastError;
}
function calculateDelay(attempt, baseDelay, maxDelay, strategy) {
  let delay;
  switch (strategy) {
    case "exponential":
      delay = baseDelay * Math.pow(2, attempt - 1);
      break;
    case "linear":
      delay = baseDelay * attempt;
      break;
    case "fixed":
      delay = baseDelay;
      break;
    default:
      delay = baseDelay;
  }
  return Math.min(delay, maxDelay);
}
const RetryConditions = {
  /** 网络错误重试（排除 4xx 客户端错误） */
  networkErrors: (error) => {
    const message = error.message.toLowerCase();
    if (message.includes("400") || message.includes("401") || message.includes("403") || message.includes("404")) {
      return false;
    }
    return message.includes("timeout") || message.includes("network") || message.includes("fetch") || message.includes("econnreset") || message.includes("enotfound") || message.includes("502") || message.includes("503") || message.includes("504");
  },
  /** 文件系统错误重试（排除权限和不存在错误） */
  fileSystemErrors: (error) => {
    const message = error.message.toLowerCase();
    if (message.includes("eacces") || message.includes("enoent") || message.includes("permission denied")) {
      return false;
    }
    return message.includes("ebusy") || message.includes("emfile") || message.includes("enfile") || message.includes("eagain");
  },
  /** 资源竞争错误重试 */
  resourceErrors: (error) => {
    const message = error.message.toLowerCase();
    return message.includes("busy") || message.includes("locked") || message.includes("resource") || message.includes("memory") || message.includes("cpu");
  },
  /** 始终重试 */
  always: () => true,
  /** 从不重试 */
  never: () => false
};
const RetryPresets = {
  /** 快速重试：适用于轻量级操作 */
  fast: {
    maxAttempts: 3,
    baseDelay: 500,
    timeout: 5e3,
    delayStrategy: "exponential"
  },
  /** 标准重试：适用于一般操作 */
  standard: {
    maxAttempts: 3,
    baseDelay: 1e3,
    timeout: 1e4,
    delayStrategy: "exponential"
  },
  /** 网络重试：适用于网络请求 */
  network: {
    maxAttempts: 3,
    baseDelay: 1e3,
    timeout: 3e4,
    delayStrategy: "exponential",
    retryCondition: RetryConditions.networkErrors
  },
  /** 文件操作重试：适用于文件系统操作 */
  fileSystem: {
    maxAttempts: 5,
    baseDelay: 500,
    timeout: 15e3,
    delayStrategy: "linear",
    retryCondition: RetryConditions.fileSystemErrors
  },
  /** 慢速重试：适用于重量级操作 */
  slow: {
    maxAttempts: 3,
    baseDelay: 2e3,
    timeout: 6e4,
    delayStrategy: "exponential"
  }
};

const useStorageProvider = (event) => {
  var _a, _b;
  const storageProvider = (_b = (_a = event.context) == null ? void 0 : _a.storage) == null ? void 0 : _b.getProvider();
  if (!storageProvider) {
    throw new Error("Storage provider not found");
  }
  return { storageProvider };
};

const sessionHooks = createHooks();
async function getUserSession(event) {
  const session = await _useSession(event);
  return {
    ...session.data,
    id: session.id
  };
}
async function setUserSession(event, data, config) {
  const session = await _useSession(event, config);
  await session.update(defu$1(data, session.data));
  return session.data;
}
async function clearUserSession(event, config) {
  const session = await _useSession(event, config);
  await sessionHooks.callHookParallel("clear", session.data, event);
  await session.clear();
  return true;
}
async function requireUserSession(event, opts = {}) {
  const userSession = await getUserSession(event);
  if (!userSession.user) {
    if (isEvent(event)) {
      throw createError({
        statusCode: opts.statusCode || 401,
        message: opts.message || "Unauthorized"
      });
    } else {
      throw new Response(opts.message || "Unauthorized", {
        status: opts.statusCode || 401
      });
    }
  }
  return userSession;
}
let sessionConfig;
function _useSession(event, config = {}) {
  if (!sessionConfig) {
    const runtimeConfig = useRuntimeConfig(isEvent(event) ? event : void 0);
    const envSessionPassword = `${runtimeConfig.nitro?.envPrefix || "NUXT_"}SESSION_PASSWORD`;
    sessionConfig = defu$1({ password: process.env[envSessionPassword] }, runtimeConfig.session);
    if (!sessionConfig.password) {
      console.error(`[nuxt-auth-utils] ${envSessionPassword} environment variable or runtimeConfig.session.password was not set.`);
    }
  }
  const finalConfig = defu$1(config, sessionConfig);
  return useSession(event, finalConfig);
}

const _FrljCBIJ8MzruDLMHTlHgCajOqa2yZayPVU4Td6XHs = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event) => {
    await getUserSession(event);
  });
});

const _y12kSmB5X7MsEkhIjDr90Xgmuyd219W3Ni_ddw5WZY = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu$1(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => String(g[1]).toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const vals = f.split(":");
      const includesStyle = vals.length === 3;
      let name, weight, style;
      if (includesStyle) {
        name = vals[0];
        style = vals[1];
        weight = vals[2];
      } else {
        name = vals[0];
        weight = vals[1];
      }
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: style || "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.style}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

const theme = {};

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(/&amp;/g, "&");
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

const logger = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const componentNames = [{"hash":"VZLyfH9aqAYUL6G4j2BlPxgE-VkR1b-H6vQh-lTCTBA","pascalName":"OgImagePhoto","kebabName":"og-image-photo","path":"D:/chronoframe-opz/app/components/OgImage/Photo.vue","category":"app"},{"hash":"SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community"},{"hash":"tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY","pascalName":"Frame","kebabName":"frame","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community"},{"hash":"NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM","pascalName":"Nuxt","kebabName":"nuxt","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community"},{"hash":"VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community"},{"hash":"8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM","pascalName":"Pergel","kebabName":"pergel","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community"},{"hash":"b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community"},{"hash":"vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI","pascalName":"UnJs","kebabName":"un-js","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community"},{"hash":"hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw","pascalName":"Wave","kebabName":"wave","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community"},{"hash":"zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws","pascalName":"WithEmoji","kebabName":"with-emoji","path":"D:/chronoframe-opz/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhea_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig(e);
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await Promise.resolve().then(function () { return renderer$3; }).then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await Promise.resolve().then(function () { return renderer$2; }).then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery$1(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  const query = getQuery$1(e);
  let queryParams = {};
  for (const k in query) {
    const v = String(query[k]);
    if (!v)
      continue;
    if (v.startsWith("{")) {
      try {
        queryParams[k] = JSON.parse(v);
      } catch (error) {
        {
          logger.error(`[Nuxt OG Image] Invalid JSON in ${k} parameter: ${error.message}`);
        }
      }
    } else {
      queryParams[k] = v;
    }
  }
  queryParams = separateProps(queryParams);
  let basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  if (queryParams._query && typeof queryParams._query === "object")
    basePath = withQuery(basePath, queryParams._query);
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePath);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePath, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu$1(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is not enabled.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? String(match[1]) : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  let options = false;
  try {
    const payload2 = parse(_payload || "{}");
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
    console.warn("Failed to parse #nuxt-og-image-options", e, options);
  }
  if (options && typeof options?.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options || {});
  {
    const socialPreview = {};
    const socialMetaTags = html.match(/<meta[^>]+(property|name)="(twitter|og):([^"]+)"[^>]*>/g);
    if (socialMetaTags) {
      socialMetaTags.forEach((tag) => {
        const [, , type, key] = tag.match(/(property|name)="(twitter|og):([^"]+)"/);
        const value = tag.match(/content="([^"]+)"/)?.[1];
        if (!value)
          return;
        if (!socialPreview[type])
          socialPreview[type] = {};
        socialPreview[type][key] = value;
      });
    }
    payload.socialPreview = socialPreview;
  }
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 500) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  if (res._data) {
    return [res._data, null];
  } else if (res.text) {
    return [await res.text(), null];
  }
  return ["", null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  await htmlPayloadCache.getItem(key);
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    const payload2 = extractAndNormaliseOgImageOptions(html);
    if (payload2 && typeof payload2 === "object" && payload2.socialPreview?.og?.image) {
      const image = payload2.socialPreview.og.image;
      const p = {
        custom: true,
        url: typeof image === "string" ? image : image
      };
      if (typeof image === "object" && image["image:width"]) {
        p.width = image["image:width"];
      }
      if (typeof image === "object" && image["image:height"]) {
        p.height = image["image:height"];
      }
      return p;
    }
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  return typeof payload === "object" ? payload : createError({
    statusCode: 500,
    statusMessage: "[Nuxt OG Image] Invalid payload type."
  });
}

const _751uSvG2eeDBKip4AlOvPrzHCYH2cunG6NQEktR8I = defineNitroPlugin(async (nitro) => {
  return;
});

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const headers = new Headers({ "x-nuxt-i18n": "internal" });
{
  headers.set("Cache-Control", "no-cache");
}
const fetchMessages = async (locale) => await $fetch(`/_i18n/${"uFnFsl_c"}/${locale}/messages.json`, {
  headers
});
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

/*!
  * shared v11.2.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const localeDetector = defineI18nLocaleDetector((event, config) => {
  const SUPPORTED_LOCALES = ["zh-Hans", "zh-Hant-TW", "zh-Hant-HK", "en", "ja"];
  const normalizeLocale = (locale) => {
    if (!locale) return config.defaultLocale || "en";
    if (SUPPORTED_LOCALES.includes(locale)) {
      return locale;
    }
    const fallbackLocales = config.fallbackLocale;
    if (fallbackLocales && fallbackLocales[locale]) {
      const fallbacks = fallbackLocales[locale];
      for (const fallback of fallbacks) {
        if (SUPPORTED_LOCALES.includes(fallback)) {
          return fallback;
        }
      }
    }
    return config.defaultLocale || "en";
  };
  const query = tryQueryLocale(event, { lang: "" });
  if (query) {
    return normalizeLocale(query.toString());
  }
  const cookie = tryCookieLocale(event, {
    lang: "",
    name: "chronoframe-locale"
  });
  if (cookie) {
    return normalizeLocale(cookie.toString());
  }
  const header = tryHeaderLocale(event, { lang: "" });
  if (header) {
    return normalizeLocale(header.toString());
  }
  return config.defaultLocale;
});

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

// @ts-nocheck
const localeCodes =  [
  "zh-Hans",
  "zh-Hant-TW",
  "zh-Hant-HK",
  "en",
  "ja"
];
const localeLoaders = {
  "zh-Hans": [
    {
      key: "locale_zh_45Hans_46json_c6563189",
      load: () => Promise.resolve().then(function () { return zhHans$1; }),
      cache: true
    }
  ],
  "zh-Hant-TW": [
    {
      key: "locale_zh_45Hant_45TW_46json_4d64709f",
      load: () => Promise.resolve().then(function () { return zhHantTW$1; }),
      cache: true
    }
  ],
  "zh-Hant-HK": [
    {
      key: "locale_zh_45Hant_45HK_46json_1e2186f5",
      load: () => Promise.resolve().then(function () { return zhHantHK$1; }),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_53ca0090",
      load: () => Promise.resolve().then(function () { return en$1; }),
      cache: true
    }
  ],
  ja: [
    {
      key: "locale_ja_46json_70c996a2",
      load: () => Promise.resolve().then(function () { return ja$1; }),
      cache: true
    }
  ]
};
const vueI18nConfigs = [
  () => Promise.resolve().then(function () { return i18n_config$1; })
];
const normalizedLocales = [
  {
    code: "zh-Hans",
    name: "简体中文",
    language: "zh"
  },
  {
    code: "zh-Hant-TW",
    name: "繁体中文(台湾)",
    language: "zh-TW"
  },
  {
    code: "zh-Hant-HK",
    name: "繁体中文(香港)",
    language: "zh-HK"
  },
  {
    code: "en",
    name: "English",
    language: "en"
  },
  {
    code: "ja",
    name: "日本語",
    language: "ja"
  }
];

function createUserLocaleDetector(defaultLocale, fallbackLocale) {
  return async (event, i18nCtx) => {
    const locale = localeDetector(event, { defaultLocale, fallbackLocale });
    const messages = await fetchMessages(locale);
    for (const locale2 of Object.keys(messages)) {
      i18nCtx.messages[locale2] ??= {};
      deepCopy(messages[locale2], i18nCtx.messages[locale2]);
    }
    return locale;
  };
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) return [];
  if (isArray(fallback)) return fallback;
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) continue;
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const merged = {};
  for (const loader of loaders) {
    deepCopy(await nuxtApp.runWithContext(async () => await getLocaleMessages(locale, loader)), merged);
  }
  return merged;
}

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

function useRuntimeI18n(nuxtApp) {
  {
    return useRuntimeConfig().public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) return void 0;
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || // fallback to default locale for the domain
    matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => {
  const cookieValue = getRequestHeader(event, "cookie") || "";
  return parse$1(cookieValue)[cookieName];
};
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => {
  return findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
};
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) return;
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") return;
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") return;
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL("", match.path));
  }
}

const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _QeGze3HmUo_B4RfH7sfHaGdcjahNcUnXFYSLfyWoZZ0 = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  const _defaultLocale = runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") break;
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) break;
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || _defaultLocale);
    const url = getRequestURL(event);
    const ctx = createI18nContext();
    event.context.nuxtI18n = ctx;
    {
      const detector = useDetectors(event, detection);
      const localeSegment = detector.route(event.path);
      const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
      const path = pathLocale && url.pathname.slice(pathLocale.length + 1) || url.pathname;
      if (!url.pathname.includes("/_i18n/") && !isExistingNuxtRoute(path)) {
        return;
      }
      const resolved = resolveRedirectPath(event, path, pathLocale, options.defaultLocale, detector);
      if (resolved.path && resolved.path !== url.pathname) {
        ctx.detectLocale = resolved.locale;
        detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
        await sendRedirect(
          event,
          joinURL(baseUrlGetter(event, options.defaultLocale), resolved.path + url.search),
          resolved.code
        );
        return;
      }
    }
    const localeConfigs = createLocaleConfigs(options.fallbackLocale);
    ctx.vueI18nOptions = options;
    ctx.localeConfigs = localeConfigs;
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
  if (localeDetector != null) {
    const options = await setupVueI18nOptions(_defaultLocale);
    const i18nMiddleware = defineI18nMiddleware({
      ...options,
      locale: createUserLocaleDetector(options.locale, options.fallbackLocale)
    });
    nitro.hooks.hook("request", i18nMiddleware.onRequest);
    nitro.hooks.hook("afterResponse", i18nMiddleware.onAfterResponse);
  }
});

const rootDir = "D:/chronoframe-opz";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _wplTFNnM158qEKV_cvyT0RJvdiuoQP7hc5tKHOTaRY = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"cframe-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _dBXBD733XzljWAdQQq1TalYKGzOd0SYoJb4x35uWBG0 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const _EdHylr7gpzUbtUkuBlaP7UZStHGl0OaGTVzn4q4MPo = defineNitroPlugin(async (_nitroApp) => {
});

const DEFAULT_SETTINGS = [
  // NAMESPACE: system
  {
    namespace: "system",
    key: "firstLaunch",
    type: "boolean",
    value: true,
    defaultValue: true,
    label: "settings.system.firstLaunch.label",
    description: "settings.system.firstLaunch.description",
    isReadonly: true
  },
  // NAMESPACE: app
  {
    namespace: "app",
    key: "title",
    type: "string",
    defaultValue: "ChronoFrame",
    label: "settings.app.title.label",
    description: "settings.app.title.description",
    isPublic: true
  },
  {
    namespace: "app",
    key: "slogan",
    type: "string",
    defaultValue: "",
    label: "settings.app.slogan.label",
    description: "settings.app.slogan.description",
    isPublic: true
  },
  {
    namespace: "app",
    key: "author",
    type: "string",
    defaultValue: "",
    label: "settings.app.author.label",
    description: "settings.app.author.description",
    isPublic: true
  },
  {
    namespace: "app",
    key: "avatarUrl",
    type: "string",
    defaultValue: "",
    label: "settings.app.avatarUrl.label",
    description: "settings.app.avatarUrl.description",
    isPublic: true
  },
  {
    namespace: "app",
    key: "appearance.theme",
    type: "string",
    defaultValue: "system",
    enum: ["light", "dark", "system"],
    label: "settings.app.appearance.theme.label",
    description: "settings.app.appearance.theme.description",
    isPublic: true
  },
  // NAMESPACE: map
  {
    namespace: "map",
    key: "provider",
    type: "string",
    defaultValue: "maplibre",
    enum: ["mapbox", "maplibre"],
    label: "settings.map.provider.label",
    description: "settings.map.provider.description",
    isPublic: true
  },
  {
    namespace: "map",
    key: "mapbox.token",
    type: "string",
    defaultValue: "",
    label: "settings.map.mapbox.token.label",
    description: "settings.map.mapbox.token.description",
    isPublic: true
  },
  {
    namespace: "map",
    key: "mapbox.style",
    type: "string",
    defaultValue: "",
    label: "settings.map.mapbox.style.label",
    description: "settings.map.mapbox.style.description",
    isPublic: true
  },
  {
    namespace: "map",
    key: "maplibre.token",
    type: "string",
    defaultValue: "",
    label: "settings.map.maplibre.token.label",
    description: "settings.map.maplibre.token.description",
    isPublic: true
  },
  {
    namespace: "map",
    key: "maplibre.style",
    type: "string",
    defaultValue: "",
    label: "settings.map.maplibre.style.label",
    description: "settings.map.maplibre.style.description",
    isPublic: true
  },
  // NAMESPACE: location
  {
    namespace: "location",
    key: "mapbox.token",
    type: "string",
    defaultValue: "",
    label: "settings.location.mapbox.token.label",
    description: "settings.location.mapbox.token.description",
    isPublic: true
  },
  {
    namespace: "location",
    key: "nominatim.baseUrl",
    type: "string",
    defaultValue: "",
    label: "settings.location.nominatim.baseUrl.label",
    description: "settings.location.nominatim.baseUrl.description",
    isPublic: true
  },
  // NAMESPACE: storage
  {
    namespace: "storage",
    key: "provider",
    type: "number",
    defaultValue: null,
    label: "settings.storage_provider.provider.label",
    description: "settings.storage_provider.provider.description"
  }
];
const settingNamespaces = [
  ...new Set(DEFAULT_SETTINGS.map((s) => s.namespace))
];
const settingKeys = [
  ...new Set(DEFAULT_SETTINGS.map((s) => s.key))
];

var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$7 = (obj, key, value) => __defNormalProp$7(obj, typeof key !== "symbol" ? key + "" : key, value);
const _SettingsManager = class _SettingsManager {
  constructor() {
    __publicField$7(this, "settingsCache", /* @__PURE__ */ new Map());
    __publicField$7(this, "_logger", logger$1.dynamic("settings-mgr"));
    __publicField$7(this, "isInitializing", false);
    // Storage Providers Management
    __publicField$7(this, "storage", {
      async getProviders() {
        const db = useDB();
        const providers = db.select().from(tables.settings_storage_providers).all();
        return providers;
      },
      async getProviderById(id) {
        const db = useDB();
        const provider = db.select().from(tables.settings_storage_providers).where(eq(tables.settings_storage_providers.id, id)).get();
        return provider || null;
      },
      async getActiveProvider() {
        const providerId = await settingsManager.get(
          "storage",
          "provider"
        );
        if (!providerId) {
          return null;
        }
        return this.getProviderById(providerId);
      },
      async addProvider(providerConfig) {
        const db = useDB();
        const result = db.insert(tables.settings_storage_providers).values({
          name: providerConfig.name,
          provider: providerConfig.provider,
          config: providerConfig.config
        }).run();
        const currentActiveProvider = await settingsManager.get(
          "storage",
          "provider"
        );
        if (!currentActiveProvider && (await this.getProviders()).length === 1) {
          await settingsManager.set(
            "storage",
            "provider",
            result.lastInsertRowid
          );
        }
        return result.lastInsertRowid;
      },
      async updateProvider(id, providerConfig) {
        const db = useDB();
        db.update(tables.settings_storage_providers).set({
          ...providerConfig
        }).where(eq(tables.settings_storage_providers.id, id)).run();
      },
      async deleteProvider(id) {
        const db = useDB();
        db.delete(tables.settings_storage_providers).where(eq(tables.settings_storage_providers.id, id)).run();
      }
    });
  }
  static getInstance() {
    if (!_SettingsManager.instance) {
      _SettingsManager.instance = new _SettingsManager();
    }
    return _SettingsManager.instance;
  }
  /**
   * Set the initializing flag externally
   * Used during plugin initialization to prevent storage provider switch triggers
   * @param flag Boolean flag to set
   */
  setInitializingFlag(flag) {
    this.isInitializing = flag;
  }
  /**
   * Check if currently initializing
   * @returns true if initializing, false otherwise
   */
  isInitializing_() {
    return this.isInitializing;
  }
  /**
   * Validate setting value against enum if defined
   * @param value Setting value
   * @param enumValues Enum values if defined
   * @returns true if valid, false if not valid
   */
  validateEnum(value, enumValues) {
    if (value === null) {
      return !enumValues || enumValues.length === 0;
    }
    if (!enumValues || enumValues.length === 0) {
      return true;
    }
    return enumValues.includes(String(value));
  }
  /**
   * Generate cache key for a setting
   * @param namespace
   * @param key
   * @returns Cache key string
   * @example
   * getCacheKey('app', 'theme') => 'app:theme'
   */
  getCacheKey(namespace, key) {
    return `${namespace}:${key}`;
  }
  /**
   * Serialize setting value to string for storage
   * @param value Setting value
   * @returns Serialized string
   * @example
   * serialize(true) => 'true'
   * serialize({ theme: 'dark' }) => '{"theme":"dark"}'
   * serialize(null) => 'null'
   */
  serialize(value) {
    if (value === null) return null;
    if (typeof value === "string") return value;
    return JSON.stringify(value);
  }
  /**
   * Deserialize setting value from string
   * @param value Serialized string or null
   * @param type Setting type
   * @returns Deserialized setting value
   * @example
   * deserialize('true', 'boolean') => true
   * deserialize('{"theme":"dark"}', 'json') => { theme: 'dark' }
   * deserialize('null', 'string') => null
   * deserialize(null, 'string') => null
   */
  deserialize(value, type) {
    if (value === null || value === "null") {
      return null;
    }
    switch (type) {
      case "string":
        return value;
      case "number":
        return Number(value);
      case "boolean":
        return value === "true";
      default:
        return JSON.parse(value);
    }
  }
  /**
   * Initialize settings manager with default settings
   * @param configs Array of setting configurations
   */
  async init(configs) {
    const db = useDB();
    this._logger.info("Initializing settings manager with default settings");
    for (const config of configs) {
      if (!config.namespace || !config.key) {
        this._logger.warn("Skipping config with missing namespace or key");
        continue;
      }
      const existing = db.select().from(tables.settings).where(
        and(
          eq(tables.settings.namespace, config.namespace),
          eq(tables.settings.key, config.key)
        )
      ).get();
      if (!existing) {
        db.insert(tables.settings).values({
          namespace: config.namespace,
          key: config.key,
          type: config.type,
          value: this.serialize(config.defaultValue),
          defaultValue: this.serialize(config.defaultValue),
          label: config.label,
          description: config.description,
          isPublic: config.isPublic,
          isReadonly: config.isReadonly,
          isSecret: config.isSecret,
          enum: config.enum ? config.enum : null
        }).run();
      }
    }
  }
  async get(namespace, key, defaultValue) {
    const cacheKey = this.getCacheKey(namespace, key);
    if (this.settingsCache.has(cacheKey)) {
      this._logger.debug(`Cache hit for setting ${cacheKey}`);
      return this.settingsCache.get(cacheKey);
    }
    const db = useDB();
    const setting = db.select().from(tables.settings).where(
      and(
        eq(tables.settings.namespace, namespace),
        eq(tables.settings.key, key)
      )
    ).get();
    if (!setting) {
      this._logger.debug(
        `Setting ${cacheKey} not found, returning default value`
      );
      return defaultValue != null ? defaultValue : null;
    }
    this._logger.debug(`Setting ${cacheKey} fetched from database`);
    const value = this.deserialize(setting.value, setting.type);
    this.settingsCache.set(cacheKey, value);
    return value;
  }
  async set(namespace, key, value, updatedBy, sudo = false) {
    var _a, _b;
    const db = useDB();
    const cacheKey = this.getCacheKey(namespace, key);
    const existing = db.select().from(tables.settings).where(
      and(
        eq(tables.settings.namespace, namespace),
        eq(tables.settings.key, key)
      )
    ).get();
    if (!existing) {
      this._logger.warn(`Setting ${namespace}:${key} does not exist`);
      throw new Error(`Setting ${namespace}:${key} does not exist`);
    }
    if (existing.isReadonly && !sudo) {
      this._logger.warn(
        `Attempt to modify readonly setting ${namespace}:${key}`
      );
      throw new Error(`Setting ${namespace}:${key} is readonly`);
    }
    if (!this.validateEnum(value, existing.enum)) {
      this._logger.warn(
        `Invalid value for enum setting ${namespace}:${key}. Value: ${value}, allowed: ${(_a = existing.enum) == null ? void 0 : _a.join(", ")}`
      );
      throw new Error(
        `Invalid value for setting ${namespace}:${key}. Allowed values: ${(_b = existing.enum) == null ? void 0 : _b.join(", ")}`
      );
    }
    const serializedValue = this.serialize(value);
    db.update(tables.settings).set({
      value: serializedValue,
      updatedAt: /* @__PURE__ */ new Date(),
      updatedBy: updatedBy != null ? updatedBy : null
    }).where(
      and(
        eq(tables.settings.namespace, namespace),
        eq(tables.settings.key, key)
      )
    ).run();
    this._logger.info(`Setting ${namespace}:${key} updated`);
    this.settingsCache.set(cacheKey, value);
    if (namespace === "storage" && key === "provider" && !this.isInitializing) {
      setImmediate(() => {
        this.triggerStorageProviderSwitch(value).catch((error) => {
          this._logger.error("Failed to trigger storage provider switch:", error);
        });
      });
    }
  }
  /**
   * Trigger storage provider switch
   * @param providerId Provider ID to switch to
   */
  async triggerStorageProviderSwitch(providerId) {
    try {
      const { getGlobalStorageManager } = await Promise.resolve().then(function () { return events; });
      const loggerModule = await Promise.resolve().then(function () { return logger$2; });
      const storageManager = getGlobalStorageManager();
      if (!storageManager) {
        this._logger.warn(
          "Storage manager not initialized, cannot switch provider"
        );
        return;
      }
      const newProvider = await this.storage.getProviderById(providerId);
      if (!newProvider) {
        this._logger.error(`Provider with ID ${providerId} not found`);
        return;
      }
      this._logger.info(
        `Triggering storage provider switch to: ${newProvider.name} (ID: ${providerId})`
      );
      await storageManager.registerProvider(
        newProvider.config,
        loggerModule.logger.dynamic("storage")
      );
    } catch (error) {
      this._logger.error("Failed to switch storage provider:", error);
    }
  }
  async getNamespace(namespace) {
    const db = useDB();
    const settings = db.select().from(tables.settings).where(eq(tables.settings.namespace, namespace)).all();
    const result = {};
    for (const setting of settings) {
      result[setting.key] = this.deserialize(setting.value, setting.type);
    }
    return result;
  }
  async getSchema() {
    const db = useDB();
    const settings = db.select().from(tables.settings).all();
    return settings.map((setting) => ({
      namespace: setting.namespace,
      key: setting.key,
      type: setting.type,
      value: this.deserialize(setting.value, setting.type),
      defaultValue: setting.defaultValue && this.deserialize(setting.defaultValue, setting.type),
      label: setting.label,
      description: setting.description,
      isReadonly: setting.isReadonly,
      isSecret: setting.isSecret,
      // 包含枚举值，过滤掉 null
      ...setting.enum ? { enum: setting.enum } : {}
    }));
  }
};
__publicField$7(_SettingsManager, "instance");
let SettingsManager = _SettingsManager;
const settingsManager = SettingsManager.getInstance();

const _hXtDGR3jAIt1iDBddeENrLgwcEsoTKmzJMWeHdFlgWM = defineNitroPlugin(async (_nitroApp) => {
  const _settingsManager = settingsManager;
  _settingsManager.setInitializingFlag(true);
  try {
    await _settingsManager.init(DEFAULT_SETTINGS);
    await migrateRuntimeConfigToSettings();
  } finally {
    _settingsManager.setInitializingFlag(false);
  }
});
async function migrateRuntimeConfigToSettings() {
  var _a, _b, _c, _d, _e;
  const config = useRuntimeConfig();
  const _logger = logger$1.dynamic("settings-migration");
  try {
    if (config.public.app) {
      _logger.info("Migrating app settings");
      const appSettings = {
        title: config.public.app.title,
        slogan: config.public.app.slogan,
        author: config.public.app.author,
        avatarUrl: config.public.app.avatarUrl
      };
      for (const [key, value] of Object.entries(appSettings)) {
        if (value) {
          try {
            await settingsManager.set("app", key, value, void 0, true);
            _logger.debug(`Migrated app.${key}`);
          } catch (error) {
            _logger.warn(`Failed to migrate app.${key}:`, error);
          }
        }
      }
    }
    if (config.public.map) {
      _logger.info("Migrating map settings");
      const mapSettings = {
        provider: config.public.map.provider,
        "mapbox.token": ((_a = config.mapbox) == null ? void 0 : _a.accessToken) || "",
        "mapbox.style": ((_b = config.public.map.mapbox) == null ? void 0 : _b.style) || "",
        "maplibre.token": ((_c = config.public.map.maplibre) == null ? void 0 : _c.token) || "",
        "maplibre.style": ((_d = config.public.map.maplibre) == null ? void 0 : _d.style) || ""
      };
      for (const [key, value] of Object.entries(mapSettings)) {
        if (value) {
          try {
            await settingsManager.set("map", key, value, void 0, true);
            _logger.debug(`Migrated map.${key}`);
          } catch (error) {
            _logger.warn(`Failed to migrate map.${key}:`, error);
          }
        }
      }
    }
    if (config.STORAGE_PROVIDER || config.provider) {
      _logger.info("Migrating storage configuration");
      const storageProvider = config.STORAGE_PROVIDER || "s3";
      const providerConfig = (_e = config.provider) == null ? void 0 : _e[storageProvider];
      if (providerConfig) {
        try {
          const existingProviders = await settingsManager.storage.getProviders();
          const sameTypeProviderExists = existingProviders.some(
            (provider) => provider.provider === storageProvider
          );
          if (sameTypeProviderExists) {
            _logger.info(
              `Storage provider of type ${storageProvider} already exists, skipping creation`
            );
          } else {
            const providerName = `Migrated ${storageProvider} Provider`;
            const providerId = await settingsManager.storage.addProvider({
              name: providerName,
              provider: storageProvider,
              config: normalizeProviderConfig(storageProvider, providerConfig)
            });
            await settingsManager.set("storage", "provider", providerId, void 0, true);
            _logger.info(
              `Storage provider migrated and set as active. Provider ID: ${providerId}`
            );
          }
        } catch (error) {
          _logger.error("Failed to migrate storage provider:", error);
        }
      }
    }
    _logger.info("Configuration migration completed");
  } catch (error) {
    _logger.error("Failed to migrate configurations:", error);
  }
}
function normalizeProviderConfig(provider, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  switch (provider) {
    case "s3":
      return {
        provider: "s3",
        endpoint: config.endpoint || "",
        bucket: config.bucket || "",
        region: config.region || "auto",
        accessKeyId: config.accessKeyId || "",
        secretAccessKey: config.secretAccessKey || "",
        prefix: config.prefix || "/photos",
        cdnUrl: config.cdnUrl || "",
        forcePathStyle: (_a = config.forcePathStyle) != null ? _a : false
      };
    case "local":
      return {
        provider: "local",
        basePath: config.localPath || "./data/storage",
        baseUrl: config.baseUrl || "/storage",
        prefix: config.prefix || "photos/"
      };
    case "openlist": {
      const oldEndpoints = config.endpoints || {};
      return {
        provider: "openlist",
        baseUrl: config.baseUrl || "",
        rootPath: config.rootPath || "",
        token: config.token || "",
        uploadEndpoint: (_c = (_b = config.uploadEndpoint) != null ? _b : oldEndpoints.upload) != null ? _c : "/api/fs/put",
        downloadEndpoint: (_d = config.downloadEndpoint) != null ? _d : oldEndpoints.download,
        listEndpoint: (_e = config.listEndpoint) != null ? _e : oldEndpoints.list,
        deleteEndpoint: (_g = (_f = config.deleteEndpoint) != null ? _f : oldEndpoints.delete) != null ? _g : "/api/fs/remove",
        metaEndpoint: (_i = (_h = config.metaEndpoint) != null ? _h : oldEndpoints.meta) != null ? _i : "/api/fs/get",
        pathField: (_j = config.pathField) != null ? _j : "path",
        cdnUrl: config.cdnUrl || ""
      };
    }
    default:
      return config;
  }
}

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
const ensureDir = async (dirPath) => {
  await promises.mkdir(dirPath, { recursive: true });
};
const sanitizeKey = (key) => key.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^\/+/, "");
const combinePrefixAndKey = (prefix, key) => {
  const cleanPrefix = (prefix || "").replace(/\/+$/, "");
  const cleanKey = key.replace(/^\/+/, "");
  if (!cleanPrefix) return cleanKey;
  return cleanKey.startsWith(cleanPrefix + "/") ? cleanKey : `${cleanPrefix}/${cleanKey}`;
};
class LocalStorageProvider {
  constructor(config, logger2) {
    __publicField$6(this, "config");
    __publicField$6(this, "logger");
    this.config = config;
    this.logger = logger2;
  }
  resolveAbsoluteKey(key) {
    const relKey = sanitizeKey(combinePrefixAndKey(this.config.prefix, key));
    const absFile = path.resolve(this.config.basePath, relKey);
    return { absFile, relKey };
  }
  async create(key, fileBuffer) {
    var _a, _b;
    const { absFile, relKey } = this.resolveAbsoluteKey(key);
    await ensureDir(path.dirname(absFile));
    const tempFile = `${absFile}.tmp-${Date.now()}`;
    await promises.writeFile(tempFile, fileBuffer);
    await promises.rename(tempFile, absFile);
    const stat = await promises.stat(absFile);
    (_b = (_a = this.logger) == null ? void 0 : _a.success) == null ? void 0 : _b.call(_a, `Saved file: ${absFile}`);
    return {
      key: relKey,
      size: stat.size,
      lastModified: stat.mtime
    };
  }
  async delete(key) {
    var _a, _b;
    const { absFile } = this.resolveAbsoluteKey(key);
    try {
      await promises.unlink(absFile);
      (_b = (_a = this.logger) == null ? void 0 : _a.success) == null ? void 0 : _b.call(_a, `Deleted file: ${absFile}`);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
  }
  async get(key) {
    const { absFile } = this.resolveAbsoluteKey(key);
    try {
      return await promises.readFile(absFile);
    } catch (err) {
      if (err.code === "ENOENT") return null;
      throw err;
    }
  }
  getPublicUrl(key) {
    const relKey = sanitizeKey(combinePrefixAndKey(this.config.prefix, key));
    const base = (this.config.baseUrl || "/storage").replace(/\/+$/, "");
    return `${base}/${relKey}`;
  }
  async listAll() {
    const results = [];
    const baseDir = this.config.prefix ? path.resolve(this.config.basePath, this.config.prefix) : this.config.basePath;
    const walk = async (dir, relBase) => {
      const entries = await promises.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const abs = path.join(dir, entry.name);
        const rel = sanitizeKey(path.join(relBase, entry.name));
        if (entry.isDirectory()) {
          await walk(abs, rel);
        } else if (entry.isFile()) {
          const stat = await promises.stat(abs);
          results.push({ key: rel, size: stat.size, lastModified: stat.mtime });
        }
      }
    };
    await ensureDir(baseDir);
    await walk(baseDir, this.config.prefix || "");
    return results;
  }
  async listImages() {
    const all = await this.listAll();
    return all.filter((o) => /\.(png|jpe?g|webp|gif|bmp|tiff?)$/i.test(o.key));
  }
  async getFileMeta(key) {
    const { absFile, relKey } = this.resolveAbsoluteKey(key);
    try {
      const stat = await promises.stat(absFile);
      if (!stat.isFile()) return null;
      return { key: relKey, size: stat.size, lastModified: stat.mtime };
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    const rawRel = sanitizeKey(key);
    const rawAbs = path.resolve(this.config.basePath, rawRel);
    try {
      const stat = await promises.stat(rawAbs);
      if (!stat.isFile()) return null;
      return { key: rawRel, size: stat.size, lastModified: stat.mtime };
    } catch (err) {
      if (err.code === "ENOENT") return null;
      throw err;
    }
  }
}

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
class OpenListStorageProvider {
  constructor(config, logger2) {
    __publicField$5(this, "config");
    __publicField$5(this, "logger");
    __publicField$5(this, "token");
    this.config = config;
    this.logger = logger2;
  }
  get baseUrl() {
    return this.config.baseUrl.replace(/\/$/, "");
  }
  get pathField() {
    return this.config.pathField || "path";
  }
  async ensureAuthToken() {
    if (this.token) return this.token;
    if (this.config.token) {
      this.token = this.config.token;
      return this.token;
    }
    throw new Error("OpenList auth requires a token. Please configure NUXT_PROVIDER_OPENLIST_TOKEN.");
  }
  async request(path, init = {}) {
    const token = await this.ensureAuthToken();
    const url = `${this.baseUrl}${path}`;
    const headers = {
      ...init.headers,
      Authorization: token
    };
    return fetch(url, { ...init, headers });
  }
  normalizedRoot() {
    return (this.config.rootPath || "").replace(/\/+$/g, "").replace(/^\/+/, "");
  }
  withRoot(key) {
    const root = this.normalizedRoot();
    const trimmedKey = key.replace(/^\/+/, "");
    if (!root) {
      return trimmedKey;
    }
    if (trimmedKey === root || trimmedKey.startsWith(`${root}/`)) {
      return trimmedKey;
    }
    return `${root}/${trimmedKey}`;
  }
  toAbsolutePath(key) {
    if (!key || key === "/") {
      return "/";
    }
    return key.startsWith("/") ? key : `/${key}`;
  }
  async create(key, fileBuffer, contentType) {
    var _a, _b, _c, _d;
    const rootedKey = this.withRoot(key);
    const absoluteKey = this.toAbsolutePath(rootedKey);
    const uploadPath = this.config.uploadEndpoint || "/api/fs/put";
    const resp = await this.request(uploadPath, {
      method: "PUT",
      headers: {
        "Content-Type": contentType || "application/octet-stream",
        "Content-Length": String(fileBuffer.length),
        "File-Path": encodeURIComponent(absoluteKey)
      },
      body: new Uint8Array(fileBuffer)
    });
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      (_a = this.logger) == null ? void 0 : _a.error("OpenList upload failed", { status: resp.status, body: text });
      throw new Error(`OpenList upload failed: ${resp.status}`);
    }
    (_b = this.logger) == null ? void 0 : _b.success(`Uploaded object: ${absoluteKey}`);
    (_d = (_c = this.logger) == null ? void 0 : _c.debug) == null ? void 0 : _d.call(_c, "OpenList upload details", {
      originalKey: key,
      rootedKey,
      absoluteKey,
      rootPath: this.normalizedRoot()
    });
    const meta = await this.getFileMeta(rootedKey);
    return meta || {
      key: rootedKey,
      size: fileBuffer.length,
      lastModified: /* @__PURE__ */ new Date()
    };
  }
  async delete(key) {
    var _a, _b;
    const deletePath = this.config.deleteEndpoint || "/api/fs/remove";
    const urlPath = `${deletePath}`;
    const rootedKey = this.withRoot(key);
    const normalized = rootedKey.replace(/^\/+/, "");
    const slashIdx = normalized.lastIndexOf("/");
    const dir = this.toAbsolutePath(slashIdx >= 0 ? normalized.slice(0, slashIdx) : this.normalizedRoot());
    const name = slashIdx >= 0 ? normalized.slice(slashIdx + 1) : normalized;
    const body = { dir, names: [name] };
    const resp = await this.request(urlPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      (_a = this.logger) == null ? void 0 : _a.error("OpenList delete failed", { status: resp.status, body: text });
      throw new Error(`OpenList delete failed: ${resp.status}`);
    }
    (_b = this.logger) == null ? void 0 : _b.success(`Deleted object: ${key}`);
  }
  async get(key) {
    const downloadPath = this.config.downloadEndpoint;
    if (!downloadPath) {
      const info = await this.getFileMeta(this.withRoot(key));
      const rawUrl = (info == null ? void 0 : info.raw_url) || void 0;
      if (!rawUrl) return null;
      const resp2 = await fetch(rawUrl);
      if (!resp2.ok) return null;
      const arrayBuffer2 = await resp2.arrayBuffer().catch(() => null);
      if (!arrayBuffer2) return null;
      return Buffer.from(arrayBuffer2);
    }
    const rootedKey = this.withRoot(key);
    const urlPath = `${downloadPath}?${encodeURIComponent(this.pathField)}=${encodeURIComponent(rootedKey)}`;
    const resp = await this.request(urlPath, { method: "GET" });
    if (!resp.ok) return null;
    const arrayBuffer = await resp.arrayBuffer().catch(() => null);
    if (!arrayBuffer) return null;
    return Buffer.from(arrayBuffer);
  }
  getPublicUrl(key) {
    const rootedKey = this.withRoot(key);
    const { cdnUrl, baseUrl } = this.config;
    const base = cdnUrl || (baseUrl ? `${baseUrl.replace(/\/$/, "")}/d` : "");
    if (!base) {
      return "";
    }
    return `${base.replace(/\/$/, "")}/${rootedKey}`;
  }
  async getFileMeta(key) {
    var _a;
    const metaPath = this.config.metaEndpoint || this.config.downloadEndpoint || "/api/fs/get";
    const rootedKey = this.withRoot(key);
    const urlPath = metaPath;
    const payload = {
      [this.pathField]: this.toAbsolutePath(rootedKey),
      password: "",
      page: 1,
      per_page: 0,
      refresh: false
    };
    const resp = await this.request(urlPath, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      (_a = this.logger) == null ? void 0 : _a.error("OpenList get file meta failed", { status: resp.status, body: text });
      return null;
    }
    const data = await resp.json().catch(() => null);
    if (!data) return { key };
    const node = (data == null ? void 0 : data.data) || {};
    const size = node == null ? void 0 : node.size;
    const modified = (node == null ? void 0 : node.modified) || (node == null ? void 0 : node.lastModified);
    const etag = node == null ? void 0 : node.etag;
    const rawUrl = node == null ? void 0 : node.raw_url;
    const result = {
      key: rootedKey,
      size: typeof size === "number" ? size : void 0,
      lastModified: modified ? new Date(modified) : void 0,
      etag: typeof etag === "string" ? etag : void 0
    };
    result.raw_url = typeof rawUrl === "string" ? rawUrl : void 0;
    return result;
  }
  async listAll() {
    const listPath = this.config.listEndpoint;
    if (!listPath) return [];
    const payload = {
      [this.pathField]: this.toAbsolutePath(this.normalizedRoot()),
      password: "",
      page: 1,
      per_page: 0,
      refresh: false
    };
    const resp = await this.request(listPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!resp.ok) return [];
    const data = await resp.json().catch(() => null);
    const items = (data == null ? void 0 : data.data) || data || [];
    return items.map((item) => {
      const rawKey = (item == null ? void 0 : item.path) || (item == null ? void 0 : item.key) || (item == null ? void 0 : item.name);
      if (!rawKey) return null;
      const rootedKey = this.withRoot(rawKey);
      const size = item == null ? void 0 : item.size;
      const lastModified = (item == null ? void 0 : item.modified) || (item == null ? void 0 : item.lastModified) || (item == null ? void 0 : item.mtime);
      const etag = item == null ? void 0 : item.etag;
      return {
        key: rootedKey,
        size: typeof size === "number" ? size : void 0,
        lastModified: lastModified ? new Date(lastModified) : void 0,
        etag: typeof etag === "string" ? etag : void 0
      };
    }).filter(Boolean);
  }
  async listImages() {
    const all = await this.listAll();
    return all.filter((obj) => /\.(jpe?g|png|webp|gif|bmp|tiff?|heic|heif)$/i.test(obj.key));
  }
}

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
class StorageProviderFactory {
  static createProvider(config, logger2) {
    switch (config.provider) {
      case "s3":
        return new S3StorageProvider(config, logger2);
      case "local":
        return new LocalStorageProvider(config, logger2);
      case "openlist":
        return new OpenListStorageProvider(config, logger2);
      default:
        throw new Error(`Unknown storage provider`);
    }
  }
}
class StorageManager {
  constructor(config, logger2) {
    __publicField$4(this, "provider");
    __publicField$4(this, "logger");
    __publicField$4(this, "eventListeners", /* @__PURE__ */ new Map());
    __publicField$4(this, "currentProviderName");
    var _a;
    this.logger = logger2;
    (_a = this.logger) == null ? void 0 : _a.info(`Creating storage provider: ${config.provider}`);
    this.currentProviderName = config.provider;
    this.provider = StorageProviderFactory.createProvider(config, logger2);
  }
  /**
   * Register event listener for storage manager events
   * @param eventType Type of event to listen for
   * @param listener Event listener callback
   */
  on(eventType, listener) {
    var _a;
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, []);
    }
    this.eventListeners.get(eventType).push(listener);
    (_a = this.logger) == null ? void 0 : _a.debug(`Event listener registered for: ${eventType}`);
  }
  /**
   * Unregister event listener
   * @param eventType Type of event
   * @param listener Event listener callback
   */
  off(eventType, listener) {
    var _a;
    const listeners = this.eventListeners.get(eventType);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
        (_a = this.logger) == null ? void 0 : _a.debug(`Event listener unregistered for: ${eventType}`);
      }
    }
  }
  /**
   * Emit event to all registered listeners
   * @param event Event to emit
   */
  async emitEvent(event) {
    var _a;
    const listeners = this.eventListeners.get(event.type) || [];
    for (const listener of listeners) {
      try {
        await listener(event);
      } catch (error) {
        (_a = this.logger) == null ? void 0 : _a.error(`Error in event listener for ${event.type}:`, error);
      }
    }
  }
  /**
   * Register/switch storage provider
   * @param config New storage configuration
   * @param logger Optional logger instance
   */
  async registerProvider(config, logger2) {
    var _a, _b, _c;
    try {
      const oldProviderName = this.currentProviderName;
      this.logger = logger2 || this.logger;
      (_a = this.logger) == null ? void 0 : _a.info(`Switching storage provider from ${oldProviderName} to ${config.provider}`);
      const newProvider = StorageProviderFactory.createProvider(config, this.logger);
      this.provider = newProvider;
      this.currentProviderName = config.provider;
      (_b = this.logger) == null ? void 0 : _b.success(`Storage provider switched to: ${config.provider}`);
      await this.emitEvent({
        type: "provider-changed",
        provider: config.provider,
        oldProvider: oldProviderName,
        timestamp: Date.now()
      });
    } catch (error) {
      (_c = this.logger) == null ? void 0 : _c.error(`Failed to register storage provider: ${config.provider}`, error);
      await this.emitEvent({
        type: "provider-error",
        provider: config.provider,
        error,
        timestamp: Date.now()
      });
      throw error;
    }
  }
  /**
   * Get current storage provider
   */
  getProvider() {
    if (!this.provider) {
      throw new Error(`Storage provider not registered`);
    }
    return this.provider;
  }
  /**
   * Get current provider name
   */
  getCurrentProviderName() {
    return this.currentProviderName;
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
const createClient = (config) => {
  if (config.provider !== "s3") {
    throw new Error("Invalid provider for S3 client creation");
  }
  const { accessKeyId, secretAccessKey, region, endpoint } = config;
  if (!accessKeyId || !secretAccessKey) {
    throw new Error("Missing required accessKeyId or secretAccessKey");
  }
  const clientConfig = {
    endpoint,
    region,
    forcePathStyle: config.forcePathStyle,
    responseChecksumValidation: "WHEN_REQUIRED",
    requestChecksumCalculation: "WHEN_REQUIRED",
    credentials: {
      accessKeyId,
      secretAccessKey
    }
  };
  return new S3Client(clientConfig);
};
const convertToStorageObject = (s3object) => {
  return {
    key: s3object.Key || "",
    size: s3object.Size,
    lastModified: s3object.LastModified,
    etag: s3object.ETag
  };
};
class S3StorageProvider {
  constructor(config, logger2) {
    __publicField$3(this, "config");
    __publicField$3(this, "logger");
    __publicField$3(this, "client");
    this.config = config;
    this.logger = logger2;
    this.client = createClient(config);
  }
  async create(key, data, contentType) {
    var _a, _b;
    try {
      const absoluteKey = `${(this.config.prefix || "").replace(/\/+$/, "")}/${key}`.replace(
        /^\/+/,
        ""
      );
      const cmd = new PutObjectCommand({
        Bucket: this.config.bucket,
        Key: absoluteKey,
        Body: data,
        ContentType: contentType || "application/octet-stream"
      });
      const resp = await this.client.send(cmd);
      (_a = this.logger) == null ? void 0 : _a.success(`Created object with key: ${absoluteKey}`);
      return {
        key: absoluteKey,
        size: data.length,
        lastModified: /* @__PURE__ */ new Date(),
        etag: resp.ETag
      };
    } catch (error) {
      (_b = this.logger) == null ? void 0 : _b.error(`Failed to create object with key: ${key}`, error);
      throw error;
    }
  }
  async delete(key) {
    var _a, _b;
    try {
      const cmd = new DeleteObjectCommand({
        Bucket: this.config.bucket,
        Key: key
      });
      await this.client.send(cmd);
      (_a = this.logger) == null ? void 0 : _a.success(`Deleted object with key: ${key}`);
    } catch (error) {
      (_b = this.logger) == null ? void 0 : _b.error(`Failed to delete object with key: ${key}`, error);
      throw error;
    }
  }
  async get(key) {
    try {
      const cmd = new GetObjectCommand({
        Bucket: this.config.bucket,
        Key: key
      });
      const resp = await this.client.send(cmd);
      if (!resp.Body) {
        return null;
      }
      if (resp.Body instanceof Buffer) {
        return resp.Body;
      }
      const chunks = [];
      const stream = resp.Body;
      return new Promise((resolve, reject) => {
        stream.on("data", (chunk) => {
          chunks.push(chunk);
        });
        stream.on("end", () => {
          resolve(Buffer.concat(chunks));
        });
        stream.on("error", (err) => {
          reject(err);
        });
      });
    } catch {
      return null;
    }
  }
  getPublicUrl(key) {
    const { cdnUrl, bucket, region, endpoint } = this.config;
    if (cdnUrl) {
      return `${cdnUrl.replace(/\/$/, "")}/${key}`;
    }
    if (!endpoint) {
      return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
    } else if (endpoint.includes("amazonaws.com")) {
      return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
    }
    if (endpoint.includes("aliyuncs.com")) {
      const baseUrl = endpoint.replace(/\/$/, "");
      if (baseUrl.indexOf("//") === -1) {
        throw new Error("Invalid endpoint URL");
      }
      const protocol = baseUrl.split("//")[0];
      const remainder = baseUrl.split("//")[1];
      return `${protocol}//${bucket}.${remainder}/${key}`;
    }
    return `${endpoint.replace(/\/$/, "")}/${bucket}/${key}`;
  }
  async getSignedUrl(key, expiresIn = 3600, options) {
    const cmd = new PutObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
      ContentType: (options == null ? void 0 : options.contentType) || "application/octet-stream"
    });
    const url = await getSignedUrl(this.client, cmd, {
      expiresIn,
      // 为了更好的 CORS 支持，添加一些额外参数
      unhoistableHeaders: /* @__PURE__ */ new Set(["Content-Type"])
    });
    return url;
  }
  async getFileMeta(key) {
    var _a, _b;
    try {
      const cmd = new GetObjectCommand({
        Bucket: this.config.bucket,
        Key: key
      });
      const resp = await this.client.send(cmd);
      if (!resp.ETag) {
        return null;
      }
      return {
        key,
        size: resp.ContentLength || 0,
        lastModified: resp.LastModified,
        etag: resp.ETag
      };
    } catch (error) {
      if (((_a = error.$metadata) == null ? void 0 : _a.httpStatusCode) === 404) {
        return null;
      }
      (_b = this.logger) == null ? void 0 : _b.error(`Failed to get metadata for key: ${key}`, error);
      throw error;
    }
  }
  async listAll() {
    var _a, _b, _c;
    const cmd = new ListObjectsCommand({
      Bucket: this.config.bucket,
      Prefix: this.config.prefix,
      MaxKeys: this.config.maxKeys
    });
    const resp = await this.client.send(cmd);
    (_b = this.logger) == null ? void 0 : _b.log((_a = resp.Contents) == null ? void 0 : _a.map(convertToStorageObject));
    return ((_c = resp.Contents) == null ? void 0 : _c.map(convertToStorageObject)) || [];
  }
  async listImages() {
    var _a;
    const cmd = new ListObjectsCommand({
      Bucket: this.config.bucket,
      Prefix: this.config.prefix,
      MaxKeys: this.config.maxKeys
    });
    const resp = await this.client.send(cmd);
    return ((_a = resp.Contents) == null ? void 0 : _a.map(convertToStorageObject)) || [];
  }
}

let globalStorageManager = null;
function setGlobalStorageManager(storageManager) {
  globalStorageManager = storageManager;
}
function getGlobalStorageManager() {
  return globalStorageManager;
}

const events = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getGlobalStorageManager: getGlobalStorageManager,
  setGlobalStorageManager: setGlobalStorageManager
}, Symbol.toStringTag, { value: 'Module' }));

function getStorageManager() {
  const storageManager = getGlobalStorageManager();
  if (!storageManager) {
    throw new Error("Storage manager not initialized");
  }
  return storageManager;
}
const _lcv2hSpevmwzFJQjsacuKclNOm4ZJPMMzJrwDjrqIg = nitroPlugin(async (nitroApp) => {
  let activeProvider = await settingsManager.storage.getActiveProvider();
  if (!activeProvider) {
    let attempts = 0;
    const maxAttempts = 100;
    while (!activeProvider && attempts < maxAttempts && settingsManager.isInitializing_()) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      activeProvider = await settingsManager.storage.getActiveProvider();
      attempts++;
    }
  }
  if (!activeProvider) {
    logger$1.storage.error("No active storage provider configured.");
    return;
  }
  const storageConfiguration = activeProvider.config;
  const storageManager = new StorageManager(
    storageConfiguration,
    logger$1.storage
  );
  setGlobalStorageManager(storageManager);
  nitroApp.hooks.hook("request", (event) => {
    event.context.storage = storageManager;
  });
  const isLocalStorageProvider = (provider) => {
    return (provider == null ? void 0 : provider.provider) === "local";
  };
  if (isLocalStorageProvider(storageConfiguration)) {
    const localBase = storageConfiguration.basePath;
    try {
      if (!path.isAbsolute(localBase)) {
        logger$1.storage.warn(`LOCAL basePath is not absolute: ${localBase}`);
      }
      await import('node:fs').then(async (m) => {
        const fs = m.promises;
        await fs.mkdir(localBase, { recursive: true });
      });
      logger$1.storage.success(`Local storage ready at: ${localBase}`);
    } catch (err) {
      logger$1.storage.error("Failed to prepare local storage directory", err);
    }
  }
  storageManager.on("provider-changed", async (event) => {
    logger$1.storage.info(
      `Storage provider changed from ${event.oldProvider} to ${event.provider}`
    );
    if (event.provider === "local") {
      try {
        const newProvider = await settingsManager.storage.getActiveProvider();
        if (newProvider && isLocalStorageProvider(newProvider.config)) {
          const localBase = newProvider.config.basePath;
          await import('node:fs').then(async (m) => {
            const fs = m.promises;
            await fs.mkdir(localBase, { recursive: true });
          });
          logger$1.storage.success(`Local storage ready at: ${localBase}`);
        }
      } catch (error) {
        logger$1.storage.error("Failed to initialize local storage:", error);
      }
    }
  });
  storageManager.on("provider-error", (event) => {
    var _a;
    logger$1.storage.error(
      `Storage provider error for ${event.provider}: ${(_a = event.error) == null ? void 0 : _a.message}`
    );
  });
  logger$1.storage.success("Storage plugin initialized successfully");
});

const tryExtractJpegSize = (buffer) => {
  if (buffer.length < 4 || buffer[0] !== 255 || buffer[1] !== 216) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 255) {
      offset++;
      continue;
    }
    const marker = buffer[offset + 1];
    offset += 2;
    if (marker === 255) continue;
    if (marker === 216 || marker === 217) continue;
    const length = (buffer[offset] << 8) + buffer[offset + 1];
    if (length < 2) break;
    if (marker >= 192 && marker <= 195 || marker >= 197 && marker <= 199) {
      if (offset + 7 >= buffer.length) break;
      const height = (buffer[offset + 3] << 8) + buffer[offset + 4];
      const width = (buffer[offset + 5] << 8) + buffer[offset + 6];
      if (width > 0 && height > 0) return { width, height };
      break;
    }
    offset += length;
  }
  return null;
};
const isBitmap = (buffer) => {
  if (buffer.length < 2) return false;
  const header = buffer.toString("hex", 0, 2);
  return header === "424d";
};
const getMetadataWithSharp = async (sharpInst) => {
  try {
    return await withRetry(
      async () => {
        let metadata = await sharpInst.metadata();
        if (!metadata.height || !metadata.width || !metadata.format) {
          try {
            metadata = await sharpInst.clone().rotate().metadata();
          } catch {
          }
        }
        if (!metadata.height || !metadata.width || !metadata.format) {
          try {
            const buf = await sharpInst.clone().toBuffer();
            metadata = await sharp(buf).metadata();
          } catch {
          }
        }
        if (!metadata.height || !metadata.width || !metadata.format) {
          try {
            const jpegBuf = await sharpInst.clone().jpeg().toBuffer();
            metadata = await sharp(jpegBuf).metadata();
            if (!metadata.height || !metadata.width) {
              const dims = tryExtractJpegSize(jpegBuf);
              if (dims) {
                metadata.width = dims.width;
                metadata.height = dims.height;
                metadata.format = metadata.format || "jpeg";
              }
            }
          } catch {
          }
        }
        if (!metadata.height || !metadata.width || !metadata.format) {
          logger$1.image.warn("Incomplete metadata received:", {
            hasHeight: !!metadata.height,
            hasWidth: !!metadata.width,
            hasFormat: !!metadata.format
          });
          return null;
        }
        const { orientation } = metadata;
        let { width, height } = metadata;
        if (orientation && [5, 6, 7, 8].includes(orientation)) {
          ;
          [width, height] = [height, width];
        }
        logger$1.image.info(
          `Successfully extracted metadata: ${width}x${height} ${metadata.format}`
        );
        return {
          width,
          height,
          format: metadata.format
        };
      },
      {
        ...RetryPresets.fast,
        timeout: 1e4,
        retryCondition: RetryConditions.resourceErrors
      },
      logger$1.image
    );
  } catch (error) {
    logger$1.image.error("All metadata extraction attempts failed:", error);
    return null;
  }
};
const convertHeicToJpeg = async (heicBuffer) => {
  return await withRetry(
    async () => {
      const fileSizeMB = heicBuffer.length / (1024 * 1024);
      const quality = fileSizeMB > 10 ? 0.8 : 0.95;
      const jpegBuffer = await heicConvert({
        // @ts-expect-error idk why there is a type error here
        buffer: heicBuffer,
        format: "JPEG",
        quality
      });
      logger$1.image.info(
        `Successfully converted HEIC to JPEG (quality: ${quality})`
      );
      return Buffer.from(jpegBuffer);
    },
    {
      ...RetryPresets.slow,
      // HEIC 转换是重量级操作
      timeout: 3e4,
      retryCondition: (error) => {
        return RetryConditions.resourceErrors(error) || error.message.includes("memory") || error.message.includes("timeout");
      }
    },
    logger$1.image
  );
};
const convertBitmapToSharpInst = async (bitmapBuffer) => {
  logger$1.image.info("Converting Bitmap to JPEG...");
  const bmpImage = bmp.decode(bitmapBuffer, true);
  if (!bmpImage) {
    throw new Error("Failed to decode BMP image");
  }
  const channels = bmpImage.data.length / (bmpImage.width * bmpImage.height);
  if (channels !== 3 && channels !== 4) {
    throw new Error(`Unsupported BMP channel count: ${channels}`);
  }
  return sharp(bmpImage.data, {
    raw: { width: bmpImage.width, height: bmpImage.height, channels }
  }).jpeg();
};
const preprocessImageWithJpegUpload = async (s3key) => {
  const storageProvider = getStorageManager().getProvider();
  if (!storageProvider) return null;
  try {
    const rawImageBuffer = await storageProvider.get(s3key);
    if (!rawImageBuffer) {
      logger$1.image.error(`Image not found in storage: ${s3key}`);
      return null;
    }
    const extName = path.extname(s3key).toLowerCase();
    let processedBuffer;
    let jpegKey;
    let jpegStorageKey;
    if ([".heic", ".heif", ".hif"].includes(extName)) {
      logger$1.image.info(
        "HEIC image detected, converting and uploading JPEG version",
        s3key
      );
      try {
        processedBuffer = await convertHeicToJpeg(rawImageBuffer);
        const baseName = path.basename(s3key, path.extname(s3key));
        jpegKey = `${baseName}.jpeg`;
        jpegStorageKey = (await storageProvider.create(jpegKey, processedBuffer, "image/jpeg")).key;
        logger$1.image.info(`Uploaded JPEG version to: ${jpegKey}`);
      } catch (err) {
        logger$1.image.error(`HEIC conversion failed: ${s3key}`, err);
        return null;
      }
    } else {
      processedBuffer = rawImageBuffer;
    }
    return {
      raw: rawImageBuffer,
      processed: processedBuffer,
      jpegKey: jpegStorageKey
    };
  } catch (err) {
    logger$1.image.error(`Image preprocessing failed: ${s3key}`, err);
    return null;
  }
};
const processImageMetadataAndSharp = async (buffer, s3key) => {
  try {
    let sharpInst = sharp(buffer, { limitInputPixels: false });
    let convertedBuffer = buffer;
    if (isBitmap(buffer)) {
      logger$1.image.info("Bitmap image detected, converting to JPEG...", s3key);
      try {
        sharpInst = await convertBitmapToSharpInst(buffer);
        convertedBuffer = await sharpInst.toBuffer();
      } catch (err) {
        logger$1.image.error(`Bitmap conversion failed: ${s3key}`, err);
        return null;
      }
    }
    const metadata = await getMetadataWithSharp(sharpInst);
    if (!metadata) {
      logger$1.image.error(
        "Metadata extraction returned null (after fallbacks):",
        s3key
      );
      return null;
    }
    return {
      sharpInst,
      imageBuffer: convertedBuffer,
      metadata
    };
  } catch (err) {
    logger$1.image.error(`Image processing with Sharp failed: ${s3key}`, err);
    return null;
  }
};

const generateBlurHash = async (buffer, logger2) => {
  try {
    const { data, info } = await sharp(buffer).resize(100, 100, { fit: "inside" }).raw().ensureAlpha().toBuffer({
      resolveWithObject: true
    });
    const thumbHash = rgbaToThumbHash(info.width, info.height, data);
    return thumbHash;
  } catch (error) {
    logger2 == null ? void 0 : logger2.error("Generate thumbhash failed", error);
    return null;
  }
};

const generateThumbnailAndHash = async (buffer, logger2) => {
  return await withRetry(async () => {
    const sharpInst = sharp(buffer).rotate();
    const fileSizeMB = buffer.length / (1024 * 1024);
    const quality = fileSizeMB > 5 ? 85 : 100;
    const thumbnailBuffer = await sharpInst.resize(600, null, {
      withoutEnlargement: true,
      fastShrinkOnLoad: false
      // 提高质量
    }).webp({ quality }).toBuffer();
    logger2 == null ? void 0 : logger2.info(`Successfully generated thumbnail (quality: ${quality})`);
    const thumbnailHash = await generateBlurHash(thumbnailBuffer, logger2);
    return { thumbnailBuffer, thumbnailHash };
  }, {
    ...RetryPresets.standard,
    timeout: 15e3,
    delayStrategy: "linear"
    // 图像处理适合线性退避
  }, logger2);
};

const neededKeys = [
  "Title",
  "XPTitle",
  "Subject",
  "Keywords",
  "XPKeywords",
  "Description",
  "ImageDescription",
  "Caption-Abstract",
  "XPComment",
  "UserComment",
  "tz",
  "tzSource",
  "Orientation",
  "Make",
  "Model",
  "Software",
  "Artist",
  "Copyright",
  "ExposureTime",
  "FNumber",
  "ExposureProgram",
  "ISO",
  "OffsetTime",
  "OffsetTimeOriginal",
  "OffsetTimeDigitized",
  "ShutterSpeedValue",
  "ApertureValue",
  "BrightnessValue",
  "ExposureCompensationSet",
  "ExposureCompensationMode",
  "ExposureCompensationSetting",
  "ExposureCompensation",
  "MaxApertureValue",
  "LightSource",
  "Flash",
  "FocalLength",
  "ColorSpace",
  "ExposureMode",
  "FocalLengthIn35mmFormat",
  "SceneCaptureType",
  "LensMake",
  "LensModel",
  "MeteringMode",
  "WhiteBalance",
  "WBShiftAB",
  "WBShiftGM",
  "WhiteBalanceBias",
  "WhiteBalanceFineTune",
  "FlashMeteringMode",
  "SensingMethod",
  "FocalPlaneXResolution",
  "FocalPlaneYResolution",
  "Aperture",
  "ScaleFactor35efl",
  "ShutterSpeed",
  "LightValue",
  "Rating",
  "GPSAltitude",
  "GPSCoordinates",
  "GPSAltitudeRef",
  "GPSLatitude",
  "GPSLatitudeRef",
  "GPSLongitude",
  "GPSLongitudeRef",
  "MPImageType",
  // Motion Photo (XMP) related keys
  "MotionPhoto",
  "MotionPhotoVersion",
  "MotionPhotoPresentationTimestampUs",
  "MicroVideo",
  "MicroVideoVersion",
  "MicroVideoOffset",
  "MicroVideoPresentationTimestampUs"
];
const formatExifDate = (date) => {
  if (!date) {
    return;
  }
  if (typeof date === "string") {
    return new Date(date).toISOString();
  }
  return date.toISOString();
};
const inferColorSpaceFromMetadata = (metadata) => {
  if (metadata.icc) {
    const colorSpace = parseICCProfile(metadata.icc);
    if (colorSpace) {
      return colorSpace;
    }
  }
  if (metadata.space) {
    const colorSpace = mapSharpSpaceToColorSpace(metadata.space);
    if (colorSpace) {
      return colorSpace;
    }
  }
  if (metadata.format) {
    const colorSpace = getDefaultColorSpaceForFormat(metadata.format);
    if (colorSpace) {
      return colorSpace;
    }
  }
  return void 0;
};
const parseICCProfile = (iccBuffer) => {
  try {
    const iccString = iccBuffer.toString("latin1");
    if (iccString.includes("sRGB") || iccString.includes("IEC61966-2.1")) {
      return "sRGB";
    }
    if (iccString.includes("Adobe RGB") || iccString.includes("ADOBERGB")) {
      return "Adobe RGB";
    }
    if (iccString.includes("Display P3") || iccString.includes("P3")) {
      return "Display P3";
    }
    if (iccString.includes("ProPhoto") || iccString.includes("ROMM")) {
      return "ProPhoto RGB";
    }
    if (iccString.includes("Wide Gamut") || iccString.includes("WideGamut")) {
      return "Wide Gamut RGB";
    }
    if (iccString.includes("Rec2020") || iccString.includes("ITU-R BT.2020")) {
      return "Rec. 2020";
    }
    if (iccString.includes("DCI-P3") || iccString.includes("DCI")) {
      return "DCI-P3";
    }
    if (iccString.includes("Rec709") || iccString.includes("ITU-R BT.709")) {
      return "Rec. 709";
    }
    if (iccBuffer.length >= 20) {
      const colorSpaceSignature = iccBuffer.toString("ascii", 16, 20);
      switch (colorSpaceSignature) {
        case "RGB ":
          return "RGB";
        case "CMYK":
          return "CMYK";
        case "GRAY":
          return "Grayscale";
        case "LAB ":
          return "Lab";
        case "XYZ ":
          return "XYZ";
        default:
          break;
      }
    }
  } catch {
  }
  return void 0;
};
const mapSharpSpaceToColorSpace = (space) => {
  switch (space) {
    case "srgb":
      return "sRGB";
    case "rgb16":
      return "RGB";
    case "cmyk":
      return "CMYK";
    case "lab":
      return "Lab";
    case "xyz":
      return "XYZ";
    case "grey16":
    case "b-w":
      return "Grayscale";
    default:
      return void 0;
  }
};
const getDefaultColorSpaceForFormat = (format) => {
  const formatLower = format.toLowerCase();
  switch (formatLower) {
    case "jpeg":
    case "jpg":
      return "sRGB";
    // JPEG 默认使用 sRGB
    case "png":
      return "sRGB";
    // PNG 通常使用 sRGB
    case "webp":
      return "sRGB";
    // WebP 通常使用 sRGB
    case "tiff":
    case "tif":
      return "sRGB";
    // TIFF 可能使用各种颜色空间，默认 sRGB
    case "heif":
    case "heic":
      return "Display P3";
    // HEIC 通常支持 Display P3
    case "avif":
      return "sRGB";
    // AVIF 通常使用 sRGB，但也可能支持其他
    case "gif":
      return "sRGB";
    // GIF 使用 sRGB
    case "bmp":
      return "sRGB";
    // BMP 通常使用 sRGB
    default:
      return void 0;
  }
};
const processExifData = (exifData, metadata) => {
  const date = {
    DateTimeOriginal: formatExifDate(exifData.DateTimeOriginal),
    DateTimeDigitized: formatExifDate(exifData.DateTimeDigitized),
    OffsetTime: exifData.OffsetTime,
    OffsetTimeOriginal: exifData.OffsetTimeOriginal,
    OffsetTimeDigitized: exifData.OffsetTimeDigitized
  };
  const size = {
    ImageWidth: exifData.ExifImageWidth || metadata.width,
    ImageHeight: exifData.ExifImageHeight || metadata.height
  };
  const result = structuredClone(exifData);
  for (const key in result) {
    Reflect.deleteProperty(result, key);
  }
  for (const key of neededKeys) {
    result[key] = exifData[key];
  }
  const inferredColorSpace = inferColorSpaceFromMetadata(metadata);
  if (inferredColorSpace) {
    result.ColorSpace = inferredColorSpace;
  } else if (!result.ColorSpace) ;
  return {
    ...date,
    ...size,
    ...result
  };
};
const extractExifData = async (imageBuffer, rawImageBuffer, logger2) => {
  try {
    return await withRetry(async () => {
      let tempImagePath = null;
      try {
        let metadata = await sharp(imageBuffer).metadata();
        if (!metadata.exif && rawImageBuffer) {
          try {
            metadata = await sharp(rawImageBuffer).metadata();
          } catch (err) {
            logger2 == null ? void 0 : logger2.warn("Error extracting EXIF data from raw image buffer:", err);
          }
        }
        if (!metadata.exif) {
          logger2 == null ? void 0 : logger2.warn("No EXIF data found in image metadata");
          return null;
        }
        logger2 == null ? void 0 : logger2.info("Extracting EXIF data using exiftool...");
        const tempDir = path.resolve(process.cwd(), "data/.exif_workdir");
        await mkdir(tempDir, { recursive: true });
        tempImagePath = path.resolve(tempDir, `${crypto.randomUUID()}.jpg`);
        await writeFile(tempImagePath, rawImageBuffer || imageBuffer);
        const exifData = await exiftool.read(tempImagePath);
        const result = processExifData(exifData, metadata);
        if (result.ColorSpace) {
          logger2 == null ? void 0 : logger2.success(`Inferred ColorSpace: ${result.ColorSpace}`);
        } else {
          logger2 == null ? void 0 : logger2.info("ColorSpace could not be determined");
        }
        return result;
      } finally {
        if (tempImagePath) {
          await unlink(tempImagePath).catch(noop);
        }
      }
    }, {
      ...RetryPresets.standard,
      timeout: 15e3,
      // EXIF 处理可能需要更长时间
      retryCondition: (error) => {
        return RetryConditions.fileSystemErrors(error) || RetryConditions.resourceErrors(error) || error.message.includes("timeout");
      }
    }, logger2);
  } catch (error) {
    logger2 == null ? void 0 : logger2.error("EXIF extraction failed after all retries:", error);
    return null;
  }
};
const normalizeText = (value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const normalized = normalizeText(item);
      if (normalized) {
        return normalized;
      }
    }
    return void 0;
  }
  const text = String(value).trim();
  return text.length > 0 ? text : void 0;
};
const collectTextValues = (value, options) => {
  var _a;
  const splitDelimited = (_a = options == null ? void 0 : options.splitDelimited) != null ? _a : false;
  const results = [];
  const append = (input) => {
    if (splitDelimited) {
      for (const part of input.split(/[;,]/)) {
        const chunk = part.trim();
        if (chunk.length > 0) {
          results.push(chunk);
        }
      }
    } else if (input.length > 0) {
      results.push(input);
    }
  };
  if (value === null || value === void 0) {
    return results;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const normalized2 = normalizeText(item);
      if (normalized2) {
        append(normalized2);
      }
    }
    return results;
  }
  const normalized = normalizeText(value);
  if (normalized) {
    append(normalized);
  }
  return results;
};
const pickFirstText = (...values) => {
  for (const value of values) {
    const normalized = normalizeText(value);
    if (normalized) {
      return normalized;
    }
  }
  return void 0;
};
const extractPhotoInfo = (s3key, exifData) => {
  const fileName = path.basename(s3key, path.extname(s3key));
  let dateTaken = (/* @__PURE__ */ new Date()).toISOString();
  const tagsSet = /* @__PURE__ */ new Set();
  for (const tag of collectTextValues(exifData == null ? void 0 : exifData.Subject)) {
    tagsSet.add(tag);
  }
  for (const tag of collectTextValues(exifData == null ? void 0 : exifData.Keywords)) {
    tagsSet.add(tag);
  }
  for (const tag of collectTextValues(exifData == null ? void 0 : exifData.XPKeywords, { splitDelimited: true })) {
    tagsSet.add(tag);
  }
  if (exifData == null ? void 0 : exifData.DateTimeOriginal) {
    try {
      const dateTimeOriginal = new Date(exifData.DateTimeOriginal);
      if (dateTimeOriginal instanceof Date) {
        dateTaken = dateTimeOriginal.toISOString();
      }
    } catch (error) {
      logger$1.image.warn(
        `Parse EXIF DateTimeOriginal failed: ${exifData.DateTimeOriginal}`,
        error
      );
    }
  } else {
    const dateMatch = fileName.match(/(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      dateTaken = new Date(dateMatch[1]).toISOString();
    }
  }
  const titleFromExif = pickFirstText(
    exifData == null ? void 0 : exifData.Title,
    exifData == null ? void 0 : exifData.XPTitle,
    exifData == null ? void 0 : exifData.Description,
    exifData == null ? void 0 : exifData.ImageDescription,
    exifData == null ? void 0 : exifData.CaptionAbstract
  );
  let title = titleFromExif;
  const cleanedFileName = fileName.replaceAll(/\d{4}-\d{2}-\d{2}[_-]?/g, "").replaceAll(/[_-]?\d+views?/gi, "").replaceAll(/[_-]+/g, " ").trim();
  if (!title) {
    title = cleanedFileName || path.basename(s3key, path.extname(s3key));
  }
  const description = pickFirstText(
    exifData == null ? void 0 : exifData.Description,
    exifData == null ? void 0 : exifData.ImageDescription,
    exifData == null ? void 0 : exifData.CaptionAbstract,
    exifData == null ? void 0 : exifData.XPComment,
    exifData == null ? void 0 : exifData.UserComment
  ) || "";
  return {
    title,
    dateTaken,
    tags: [...tagsSet],
    description
  };
};

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
class MapboxGeocodingProvider {
  // Mapbox 默认速率限制为 1000/分钟，约60ms间隔
  constructor(accessToken) {
    __publicField$2(this, "accessToken");
    __publicField$2(this, "baseUrl", "https://api.mapbox.com");
    __publicField$2(this, "lastRequestTime", 0);
    __publicField$2(this, "rateLimitMs", 100);
    this.accessToken = accessToken;
  }
  async reverseGeocode(lat, lon) {
    try {
      return await withRetry(
        async () => {
          var _a, _b, _c, _d, _e, _f;
          await this.applyRateLimit();
          const url = new URL("/search/geocode/v6/reverse", this.baseUrl);
          url.searchParams.set("access_token", this.accessToken);
          url.searchParams.set("longitude", lon.toString());
          url.searchParams.set("latitude", lat.toString());
          url.searchParams.set("types", "address,place,district,region,country");
          url.searchParams.set("language", "zh-Hants");
          logger$1.location.info(`Mapbox API URL: ${url.toString()}`);
          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error(
              `Mapbox API error: ${response.status} ${response.statusText}`
            );
          }
          const data = await response.json();
          if (!data || !data.features || data.features.length === 0) {
            logger$1.location.warn("Mapbox API returned no features");
            return null;
          }
          const feature = data.features[0];
          const properties = feature.properties || {};
          const context = properties.context || {};
          const country = (_a = context.country) == null ? void 0 : _a.name;
          const city = ((_b = context.locality) == null ? void 0 : _b.name) || ((_c = context.place) == null ? void 0 : _c.name) || ((_d = context.locality) == null ? void 0 : _d.name) || ((_e = context.district) == null ? void 0 : _e.name) || ((_f = context.region) == null ? void 0 : _f.name);
          const locationName = properties.place_formatted || properties.name;
          logger$1.location.success(
            `Successfully geocoded location: ${city}, ${country}`
          );
          return {
            latitude: lat,
            longitude: lon,
            country,
            city,
            locationName
          };
        },
        {
          ...RetryPresets.network,
          timeout: 1e4,
          delayStrategy: "exponential"
        },
        logger$1.location
      );
    } catch (error) {
      logger$1.location.error(
        "Mapbox reverse geocoding failed after all retries:",
        error
      );
      return null;
    }
  }
  async applyRateLimit() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.rateLimitMs) {
      const delay = this.rateLimitMs - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.lastRequestTime = Date.now();
  }
}
class NominatimGeocodingProvider {
  // Nominatim 要求至少1秒间隔
  constructor(baseUrl) {
    __publicField$2(this, "baseUrl");
    __publicField$2(this, "userAgent", "chronoframe/1.0");
    __publicField$2(this, "lastRequestTime", 0);
    __publicField$2(this, "rateLimitMs", 1e3);
    this.baseUrl = baseUrl || "https://nominatim.openstreetmap.org";
  }
  async reverseGeocode(lat, lon) {
    try {
      return await withRetry(
        async () => {
          var _a;
          await this.applyRateLimit();
          const url = new URL("/reverse", this.baseUrl);
          url.searchParams.set("lat", lat.toString());
          url.searchParams.set("lon", lon.toString());
          url.searchParams.set("format", "json");
          url.searchParams.set("addressdetails", "1");
          url.searchParams.set("accept-language", "zh-CN,zh,en");
          const response = await fetch(url.toString(), {
            headers: {
              "User-Agent": this.userAgent
            }
          });
          if (!response.ok) {
            throw new Error(
              `Nominatim API error: ${response.status} ${response.statusText}`
            );
          }
          const data = await response.json();
          if (!data || data.error) {
            throw new Error(`Nominatim API returned error: ${data == null ? void 0 : data.error}`);
          }
          const address = data.address || {};
          const country = address.country || ((_a = address.country_code) == null ? void 0 : _a.toUpperCase());
          const city = address.district || address.city || address.town || address.county || address.state || address.village || address.hamlet;
          const locationName = data.display_name;
          return {
            latitude: lat,
            longitude: lon,
            country,
            city,
            locationName
          };
        },
        {
          ...RetryPresets.network,
          timeout: 15e3,
          // Nominatim 可能比较慢
          delayStrategy: "linear"
          // 线性退避，避免过快重试
        },
        logger$1.location
      );
    } catch (error) {
      logger$1.location.error(
        "Nominatim reverse geocoding failed after all retries:",
        error
      );
      return null;
    }
  }
  async applyRateLimit() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.rateLimitMs) {
      const delay = this.rateLimitMs - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.lastRequestTime = Date.now();
  }
}
async function createGeocodingProvider() {
  const mapboxToken = await settingsManager.get(
    "location",
    "mapbox.token"
  );
  if (mapboxToken) {
    return new MapboxGeocodingProvider(mapboxToken);
  }
  return new NominatimGeocodingProvider(
    await settingsManager.get("location", "nominatim.baseUrl") || void 0
  );
}
async function extractLocationFromGPS(gpsLatitude, gpsLongitude, provider) {
  if (!gpsLatitude || !gpsLongitude) {
    return null;
  }
  if (Math.abs(gpsLatitude) > 90 || Math.abs(gpsLongitude) > 180) {
    logger$1.location.warn(
      `Invalid GPS coordinates: ${gpsLatitude}, ${gpsLongitude}`
    );
    return null;
  }
  logger$1.location.info(
    `Reverse geocoding coordinates: ${gpsLatitude}, ${gpsLongitude}`
  );
  const geocodingProvider = await createGeocodingProvider();
  try {
    const locationInfo = await geocodingProvider.reverseGeocode(
      gpsLatitude,
      gpsLongitude
    );
    if (locationInfo) {
      logger$1.location.success(
        `Location found: ${locationInfo.city}, ${locationInfo.country}`
      );
    } else {
      logger$1.location.warn("No location found for coordinates");
    }
    return locationInfo;
  } catch (error) {
    logger$1.location.error("Location extraction failed:", error);
    return null;
  }
}
function parseGPSCoordinates(exifData) {
  try {
    let latitude;
    let longitude;
    if (exifData.GPSLatitude && exifData.GPSLongitude) {
      latitude = parseFloat(exifData.GPSLatitude.toString());
      longitude = parseFloat(exifData.GPSLongitude.toString());
    }
    if ((!latitude || !longitude) && exifData.GPSCoordinates) {
      const coords = exifData.GPSCoordinates.toString();
      const match = coords.match(/([-+]?\d+\.?\d*)[°,\s]+([-+]?\d+\.?\d*)/);
      if (match) {
        latitude = parseFloat(match[1]);
        longitude = parseFloat(match[2]);
      }
    }
    if (latitude && exifData.GPSLatitudeRef === "S") {
      latitude = -Math.abs(latitude);
    }
    if (longitude && exifData.GPSLongitudeRef === "W") {
      longitude = -Math.abs(longitude);
    }
    return { latitude, longitude };
  } catch (error) {
    logger$1.location.error("Failed to parse GPS coordinates:", error);
    return {};
  }
}

const processLivePhotoVideo = async (videoKey, _videoSize) => {
  const storageProvider = getStorageManager().getProvider();
  const db = useDB();
  try {
    const videoBaseName = path.basename(videoKey, path.extname(videoKey));
    const videoDir = path.dirname(videoKey);
    logger$1.chrono.info(`Processing LivePhoto video: ${videoKey}, looking for photo with base name: ${videoBaseName}`);
    const possiblePhotoKeys = [
      path.join(videoDir, `${videoBaseName}.HEIC`).replace(/\\/g, "/"),
      path.join(videoDir, `${videoBaseName}.heic`).replace(/\\/g, "/"),
      path.join(videoDir, `${videoBaseName}.JPG`).replace(/\\/g, "/"),
      path.join(videoDir, `${videoBaseName}.jpg`).replace(/\\/g, "/"),
      path.join(videoDir, `${videoBaseName}.JPEG`).replace(/\\/g, "/"),
      path.join(videoDir, `${videoBaseName}.jpeg`).replace(/\\/g, "/")
    ];
    let matchedPhoto = null;
    for (const photoKey of possiblePhotoKeys) {
      const photos = await db.select().from(tables.photos).where(eq(tables.photos.storageKey, photoKey)).limit(1);
      if (photos.length > 0) {
        matchedPhoto = photos[0];
        logger$1.chrono.info(`Found matching photo: ${photoKey}`);
        break;
      }
    }
    if (!matchedPhoto) {
      logger$1.chrono.warn(`No matching photo found for LivePhoto video: ${videoKey}`);
      return false;
    }
    const videoUrl = storageProvider.getPublicUrl(videoKey);
    await db.update(tables.photos).set({
      isLivePhoto: 1,
      livePhotoVideoUrl: videoUrl,
      livePhotoVideoKey: videoKey
    }).where(eq(tables.photos.id, matchedPhoto.id));
    logger$1.chrono.success(`Successfully processed LivePhoto: ${matchedPhoto.id}, video: ${videoKey}`);
    return true;
  } catch (error) {
    logger$1.chrono.error(`Failed to process LivePhoto video ${videoKey}:`, error);
    return false;
  }
};
const findLivePhotoVideoForImage = async (imageKey) => {
  const storageProvider = getStorageManager().getProvider();
  try {
    const imageBaseName = path.basename(imageKey, path.extname(imageKey));
    const imageDir = path.dirname(imageKey);
    logger$1.chrono.info(`Checking for LivePhoto video for image: ${imageKey}, base name: ${imageBaseName}`);
    const possibleVideoKeys = [
      path.join(imageDir, `${imageBaseName}.MOV`).replace(/\\/g, "/"),
      path.join(imageDir, `${imageBaseName}.mov`).replace(/\\/g, "/")
    ];
    for (const videoKey of possibleVideoKeys) {
      try {
        const videoBuffer = await storageProvider.get(videoKey);
        if (videoBuffer) {
          const videoSize = videoBuffer.length;
          const fileName = path.basename(videoKey);
          if (isLivePhotoVideo(fileName, videoSize)) {
            logger$1.chrono.info(`Found matching LivePhoto video: ${videoKey}`);
            return { videoKey, videoSize };
          } else {
            logger$1.chrono.warn(`Video file found but doesn't match LivePhoto criteria: ${videoKey} (size: ${videoSize})`);
          }
        }
      } catch {
        continue;
      }
    }
    logger$1.chrono.info(`No matching LivePhoto video found for image: ${imageKey}`);
    return null;
  } catch (error) {
    logger$1.chrono.error(`Failed to check for LivePhoto video for ${imageKey}:`, error);
    return null;
  }
};
const isLivePhotoVideo = (fileName, fileSize) => {
  const extName = path.extname(fileName).toLowerCase();
  if (extName !== ".mov") {
    return false;
  }
  const maxLivePhotoSize = 12 * 1024 * 1024;
  return fileSize <= maxLivePhotoSize;
};

const MAX_XMP_SCAN_BYTES = 512 * 1024;
const MIN_VIDEO_SIZE_BYTES = 8 * 1024;
const MP4_FTYP = Buffer.from("ftyp");
const toBoolean = (value) => {
  if (value === null || value === void 0) return false;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "bigint") return value !== BigInt(0);
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "yes";
  }
  return false;
};
const toNumber = (value) => {
  if (value === null || value === void 0) return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "bigint") return Number(value);
  if (typeof value === "string") {
    const parsed = Number.parseInt(value.trim(), 10);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};
const extractXmpSegment = (buffer) => {
  const scanSize = Math.min(buffer.length, MAX_XMP_SCAN_BYTES);
  if (scanSize === 0) {
    return null;
  }
  const header = buffer.toString("utf8", 0, scanSize);
  const startIndex = header.indexOf("<x:xmpmeta");
  if (startIndex === -1) {
    return null;
  }
  const endIndex = header.indexOf("</x:xmpmeta>");
  if (endIndex === -1) {
    return null;
  }
  return header.slice(startIndex, endIndex + "</x:xmpmeta>".length);
};
const extractXmpBoolean = (xmp, tagName) => {
  const regex = new RegExp(`<[^:>]*:${tagName}>([^<]+)</[^>]+>`, "i");
  const match = xmp.match(regex);
  if (!match) return null;
  return toBoolean(match[1]);
};
const extractXmpNumber = (xmp, tagName) => {
  const regex = new RegExp(`<[^:>]*:${tagName}>([^<]+)</[^>]+>`, "i");
  const match = xmp.match(regex);
  if (!match) return null;
  return toNumber(match[1]);
};
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const buildAttrPattern = (attrName) => {
  const escaped = escapeRegExp(attrName);
  if (attrName.includes(":")) {
    return escaped;
  }
  return `(?:[\\w-]+:)?${escaped}`;
};
const extractXmpAttributeBoolean = (xmp, attrName) => {
  const regex = new RegExp(`${buildAttrPattern(attrName)}="([^"]+)"`, "i");
  const match = xmp.match(regex);
  if (!match) return null;
  return toBoolean(match[1]);
};
const extractXmpAttributeNumber = (xmp, attrName) => {
  const regex = new RegExp(`${buildAttrPattern(attrName)}="([^"]+)"`, "i");
  const match = xmp.match(regex);
  if (!match) return null;
  return toNumber(match[1]);
};
const validateMp4Buffer = (buffer) => {
  if (buffer.length < MIN_VIDEO_SIZE_BYTES) {
    return false;
  }
  const searchWindow = buffer.subarray(0, 32);
  return searchWindow.indexOf(MP4_FTYP) !== -1;
};
const processMotionPhotoFromXmp = async ({
  photoId,
  storageKey,
  rawImageBuffer,
  exifData,
  storageProvider,
  logger: logger2
}) => {
  var _a, _b, _c, _d, _e;
  try {
    const rawLength = rawImageBuffer.length;
    const exifIndicatesMotion = toBoolean(exifData == null ? void 0 : exifData.MotionPhoto) || toBoolean(exifData == null ? void 0 : exifData.MicroVideo);
    let detectedMotion = exifIndicatesMotion;
    let presentationTimestampUs = toNumber(
      (_a = exifData == null ? void 0 : exifData.MotionPhotoPresentationTimestampUs) != null ? _a : exifData == null ? void 0 : exifData.MicroVideoPresentationTimestampUs
    );
    const offsetCandidates = /* @__PURE__ */ new Set();
    const addOffsetCandidate = (value) => {
      if (value === null || value === void 0) return;
      if (!Number.isFinite(value)) return;
      const numeric = Number(value);
      if (numeric <= 0) return;
      offsetCandidates.add(numeric);
    };
    addOffsetCandidate(toNumber(exifData == null ? void 0 : exifData.MicroVideoOffset));
    const xmpSegment = extractXmpSegment(rawImageBuffer);
    if (xmpSegment) {
      if (!detectedMotion) {
        const motionFlags = [
          extractXmpBoolean(xmpSegment, "MotionPhoto"),
          extractXmpBoolean(xmpSegment, "GCamera:MotionPhoto"),
          extractXmpBoolean(xmpSegment, "MicroVideo"),
          extractXmpBoolean(xmpSegment, "GCamera:MicroVideo"),
          extractXmpAttributeBoolean(xmpSegment, "MotionPhoto"),
          extractXmpAttributeBoolean(xmpSegment, "GCamera:MotionPhoto"),
          extractXmpAttributeBoolean(xmpSegment, "MicroVideo"),
          extractXmpAttributeBoolean(xmpSegment, "GCamera:MicroVideo")
        ].filter((flag) => flag !== null);
        if (motionFlags.some(Boolean)) {
          detectedMotion = true;
          logger2 == null ? void 0 : logger2.info(
            `[motion-photo] XMP detected MotionPhoto flags for ${storageKey}`
          );
        }
      }
      ;
      [
        extractXmpNumber(xmpSegment, "MicroVideoOffset"),
        extractXmpNumber(xmpSegment, "GCamera:MicroVideoOffset"),
        extractXmpAttributeNumber(xmpSegment, "MicroVideoOffset"),
        extractXmpAttributeNumber(xmpSegment, "GCamera:MicroVideoOffset")
      ].forEach((candidate) => addOffsetCandidate(candidate));
      if (presentationTimestampUs === null) {
        presentationTimestampUs = (_e = (_d = (_c = (_b = extractXmpNumber(
          xmpSegment,
          "MotionPhotoPresentationTimestampUs"
        )) != null ? _b : extractXmpNumber(
          xmpSegment,
          "MicroVideoPresentationTimestampUs"
        )) != null ? _c : extractXmpAttributeNumber(
          xmpSegment,
          "MotionPhotoPresentationTimestampUs"
        )) != null ? _d : extractXmpAttributeNumber(
          xmpSegment,
          "MicroVideoPresentationTimestampUs"
        )) != null ? _e : null;
      }
    }
    if (!detectedMotion && offsetCandidates.size === 0) {
      return null;
    }
    let resolvedOffset = null;
    let videoBuffer = null;
    const candidateList = Array.from(offsetCandidates);
    for (const candidate of candidateList) {
      const possibleStarts = /* @__PURE__ */ new Set();
      possibleStarts.add(candidate);
      if (candidate < rawLength) {
        possibleStarts.add(rawLength - candidate);
      }
      for (const start of possibleStarts) {
        if (start <= 0 || start >= rawLength - MIN_VIDEO_SIZE_BYTES) {
          continue;
        }
        const chunk = rawImageBuffer.subarray(start);
        if (validateMp4Buffer(chunk)) {
          resolvedOffset = start;
          videoBuffer = chunk;
          if (start !== candidate && (logger2 == null ? void 0 : logger2.debug)) {
            logger2.debug(
              `[motion-photo] Interpreted offset ${candidate} as start ${start} from file end for ${storageKey}`
            );
          }
          break;
        }
      }
      if (videoBuffer) {
        break;
      }
    }
    if (!videoBuffer) {
      const searchWindowStart = Math.max(0, rawLength - 8 * 1024 * 1024);
      let cursor = rawImageBuffer.indexOf(MP4_FTYP, searchWindowStart);
      while (cursor !== -1) {
        const potentialStart = cursor - 4;
        if (potentialStart > 0 && potentialStart < rawLength - MIN_VIDEO_SIZE_BYTES) {
          const chunk = rawImageBuffer.subarray(potentialStart);
          if (validateMp4Buffer(chunk)) {
            resolvedOffset = potentialStart;
            videoBuffer = chunk;
            logger2 == null ? void 0 : logger2.info(
              `[motion-photo] Located MP4 via fallback scan at offset ${potentialStart} for ${storageKey}`
            );
            break;
          }
        }
        cursor = rawImageBuffer.indexOf(MP4_FTYP, cursor + 1);
      }
    }
    if (!videoBuffer || resolvedOffset === null) {
      logger2 == null ? void 0 : logger2.warn(
        `[motion-photo] Unable to extract MP4 after trying offsets ${candidateList.join(", ") || "none"} for ${storageKey}`
      );
      return null;
    }
    const targetKey = `${photoId}.mp4`;
    let storedObject;
    try {
      storedObject = await storageProvider.create(
        targetKey,
        videoBuffer,
        "video/mp4"
      );
    } catch (error) {
      logger2 == null ? void 0 : logger2.error(
        `[motion-photo] Failed to persist extracted video for ${storageKey}`,
        error
      );
      return null;
    }
    const livePhotoVideoKey = storedObject.key || targetKey;
    const livePhotoVideoUrl = storageProvider.getPublicUrl(livePhotoVideoKey);
    logger2 == null ? void 0 : logger2.success(
      `[motion-photo] Extracted Motion Photo video for ${storageKey} at offset ${resolvedOffset}, saved as ${livePhotoVideoKey}`
    );
    return {
      isMotionPhoto: true,
      livePhotoVideoKey,
      livePhotoVideoUrl,
      offset: resolvedOffset,
      presentationTimestampUs: presentationTimestampUs != null ? presentationTimestampUs : void 0
    };
  } catch (error) {
    logger2 == null ? void 0 : logger2.error(
      `[motion-photo] Unexpected error while processing ${storageKey}`,
      error
    );
    return null;
  }
};

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
const _QueueManager = class _QueueManager {
  constructor(workerId, _logger) {
    __publicField$1(this, "workerId");
    __publicField$1(this, "logger");
    __publicField$1(this, "isProcessing", false);
    __publicField$1(this, "processingInterval", null);
    __publicField$1(this, "processedCount", 0);
    __publicField$1(this, "errorCount", 0);
    __publicField$1(this, "startTime");
    /** 任务处理器 */
    __publicField$1(this, "processors", /* @__PURE__ */ (() => {
      return {
        photo: async (task) => {
          var _a;
          const { id: taskId, payload } = task;
          if (payload.type !== "photo") {
            throw new Error(
              `Invalid payload type for photo task: ${payload.type}`
            );
          }
          const { storageKey } = payload;
          const storageProvider = getStorageManager().getProvider();
          const photoId = generateSafePhotoId(storageKey);
          try {
            this.logger.info(`Start processing task ${taskId}: ${storageKey}`);
            let storageObject = await storageProvider.getFileMeta(storageKey);
            if (!storageObject) {
              const maybeBuffer = await storageProvider.get(storageKey);
              if (maybeBuffer) {
                storageObject = {
                  key: storageKey,
                  size: maybeBuffer.length,
                  lastModified: /* @__PURE__ */ new Date()
                };
              }
            }
            if (!storageObject) {
              throw new Error(`Storage object not found`);
            }
            await this.updateTaskStage(taskId, "preprocessing");
            this.logger.info(`[${taskId}:in-stage] preprocessing`);
            const imageBuffers = await preprocessImageWithJpegUpload(storageKey);
            if (!imageBuffers) {
              throw new Error("Preprocessing failed");
            }
            await this.updateTaskStage(taskId, "metadata");
            this.logger.info(`[${taskId}:in-stage] metadata extraction`);
            const processedData = await processImageMetadataAndSharp(
              imageBuffers.processed,
              storageKey
            );
            if (!processedData) {
              throw new Error("Metadata processing failed");
            }
            const { imageBuffer, metadata } = processedData;
            await this.updateTaskStage(taskId, "thumbnail");
            this.logger.info(`[${taskId}:in-stage] thumbnail generation`);
            const { thumbnailBuffer, thumbnailHash } = await generateThumbnailAndHash(imageBuffer, this.logger);
            const thumbnailObject = await new Promise((resolve, reject) => {
              setImmediate(async () => {
                try {
                  const result2 = await storageProvider.create(
                    `thumbnails/${photoId}.webp`,
                    thumbnailBuffer,
                    "image/webp"
                  );
                  resolve(result2);
                } catch (error) {
                  reject(error);
                }
              });
            });
            await this.updateTaskStage(taskId, "exif");
            this.logger.info(`[${taskId}:in-stage] exif extraction`);
            const exifData = await extractExifData(
              imageBuffer,
              imageBuffers.raw,
              this.logger
            );
            const photoInfo = extractPhotoInfo(storageKey, exifData);
            await this.updateTaskStage(taskId, "reverse-geocoding");
            this.logger.info(`[${taskId}:in-stage] reverse geocoding`);
            let coordinates = null;
            let locationInfo = null;
            if (exifData) {
              const { latitude, longitude } = parseGPSCoordinates(exifData);
              coordinates = { latitude, longitude };
              if (latitude && longitude) {
                locationInfo = await extractLocationFromGPS(latitude, longitude);
              }
            }
            await this.updateTaskStage(taskId, "motion-photo");
            this.logger.info(`[${taskId}:in-stage] motion photo detection`);
            const motionPhotoInfo = imageBuffers.raw ? await processMotionPhotoFromXmp({
              photoId,
              storageKey,
              rawImageBuffer: imageBuffers.raw,
              exifData,
              storageProvider,
              logger: this.logger
            }) : null;
            if (!imageBuffers.raw) {
              this.logger.warn(
                `[${taskId}:in-stage] motion photo detection skipped: missing raw buffer for ${storageKey}`
              );
            }
            await this.updateTaskStage(taskId, "live-photo");
            this.logger.info(`[${taskId}:in-stage] live photo detection`);
            let livePhotoInfo = null;
            if (!(motionPhotoInfo == null ? void 0 : motionPhotoInfo.isMotionPhoto)) {
              const livePhotoVideo = await findLivePhotoVideoForImage(storageKey);
              if (livePhotoVideo) {
                livePhotoInfo = {
                  isLivePhoto: 1,
                  livePhotoVideoUrl: storageProvider.getPublicUrl(
                    livePhotoVideo.videoKey
                  ),
                  livePhotoVideoKey: livePhotoVideo.videoKey
                };
                this.logger.info(
                  `[${taskId}:in-stage] found LivePhoto video: ${livePhotoVideo.videoKey}`
                );
              }
            } else {
              livePhotoInfo = {
                isLivePhoto: 1,
                livePhotoVideoUrl: motionPhotoInfo.livePhotoVideoUrl || null,
                livePhotoVideoKey: motionPhotoInfo.livePhotoVideoKey || null
              };
            }
            const result = {
              id: photoId,
              title: photoInfo.title,
              description: photoInfo.description,
              dateTaken: photoInfo.dateTaken,
              tags: photoInfo.tags,
              width: metadata.width,
              height: metadata.height,
              aspectRatio: metadata.width / metadata.height,
              storageKey,
              thumbnailKey: thumbnailObject.key,
              fileSize: storageObject.size || null,
              lastModified: ((_a = storageObject.lastModified) == null ? void 0 : _a.toISOString()) || (/* @__PURE__ */ new Date()).toISOString(),
              originalUrl: imageBuffers.jpegKey ? storageProvider.getPublicUrl(imageBuffers.jpegKey) : storageProvider.getPublicUrl(storageKey),
              thumbnailUrl: storageProvider.getPublicUrl(thumbnailObject.key),
              thumbnailHash: thumbnailHash ? compressUint8Array(thumbnailHash) : null,
              exif: exifData,
              // 地理位置信息
              latitude: (coordinates == null ? void 0 : coordinates.latitude) || null,
              longitude: (coordinates == null ? void 0 : coordinates.longitude) || null,
              country: (locationInfo == null ? void 0 : locationInfo.country) || null,
              city: (locationInfo == null ? void 0 : locationInfo.city) || null,
              locationName: (locationInfo == null ? void 0 : locationInfo.locationName) || null,
              // LivePhoto 相关字段
              isLivePhoto: (motionPhotoInfo == null ? void 0 : motionPhotoInfo.isMotionPhoto) || (livePhotoInfo == null ? void 0 : livePhotoInfo.isLivePhoto) ? 1 : 0,
              livePhotoVideoUrl: (motionPhotoInfo == null ? void 0 : motionPhotoInfo.livePhotoVideoUrl) || (livePhotoInfo == null ? void 0 : livePhotoInfo.livePhotoVideoUrl) || null,
              livePhotoVideoKey: (motionPhotoInfo == null ? void 0 : motionPhotoInfo.livePhotoVideoKey) || (livePhotoInfo == null ? void 0 : livePhotoInfo.livePhotoVideoKey) || null
            };
            const db = useDB();
            await db.insert(tables.photos).values(result).onConflictDoUpdate({
              target: tables.photos.id,
              set: result
            });
            this.logger.success(`Task ${taskId} processed successfully`);
            return result;
          } catch (error) {
            this.logger.error(`Task ${taskId} processing failed`, error);
            throw error;
          }
        },
        reverseGeocoding: async (task) => {
          var _a, _b, _c, _d, _e, _f, _g;
          const db = useDB();
          const { id: taskId, payload } = task;
          if (payload.type !== "photo-reverse-geocoding") {
            throw new Error(
              `Invalid payload type for reverse geocoding task: ${payload.type}`
            );
          }
          const { photoId } = payload;
          try {
            await this.updateTaskStage(taskId, "reverse-geocoding");
            this.logger.info(
              `[${taskId}:in-stage] reverse geocoding for photo ${photoId}`
            );
            const photo = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
            if (!photo) {
              this.logger.warn(
                `[${taskId}:reverse-geocoding] photo ${photoId} not found`
              );
              throw new Error(`Photo ${photoId} not found`);
            }
            let latitude = (_b = (_a = payload.latitude) != null ? _a : photo.latitude) != null ? _b : void 0;
            let longitude = (_d = (_c = payload.longitude) != null ? _c : photo.longitude) != null ? _d : void 0;
            if (latitude === void 0 || latitude === null || (longitude === void 0 || longitude === null)) {
              if (photo.exif) {
                const coords = parseGPSCoordinates(photo.exif);
                if (latitude === void 0 || latitude === null) {
                  latitude = coords.latitude;
                }
                if (longitude === void 0 || longitude === null) {
                  longitude = coords.longitude;
                }
              }
            }
            const hasLatitude = latitude !== void 0 && latitude !== null;
            const hasLongitude = longitude !== void 0 && longitude !== null;
            if (!hasLatitude || !hasLongitude) {
              this.logger.warn(
                `[${taskId}:reverse-geocoding] missing coordinates for photo ${photoId}`
              );
              await db.update(tables.photos).set({
                latitude: null,
                longitude: null,
                country: null,
                city: null,
                locationName: null
              }).where(eq(tables.photos.id, photoId));
              throw new Error(`Missing coordinates for photo ${photoId}`);
            }
            const locationInfo = await extractLocationFromGPS(
              latitude,
              longitude
            );
            if (!locationInfo) {
              throw new Error(`Failed to extract location from GPS coordinates (${latitude}, ${longitude}), maybe network issue?`);
            }
            await db.update(tables.photos).set({
              latitude,
              longitude,
              country: (_e = locationInfo.country) != null ? _e : null,
              city: (_f = locationInfo.city) != null ? _f : null,
              locationName: (_g = locationInfo.locationName) != null ? _g : null
            }).where(eq(tables.photos.id, photoId));
            this.logger.success(
              `[${taskId}:reverse-geocoding] updated location for photo ${photoId}`
            );
          } catch (error) {
            this.logger.error(
              `[${taskId}:reverse-geocoding] failed for photo ${photoId}`,
              error
            );
            throw error;
          }
        },
        livePhotoDetect: async (task) => {
          const db = useDB();
          const storageProvider = getStorageManager().getProvider();
          const { id: taskId, payload } = task;
          if (payload.type !== "live-photo-video") {
            throw new Error(
              `Invalid payload type for live-photo task: ${payload.type}`
            );
          }
          const { storageKey: videoKey } = payload;
          try {
            this.logger.info(
              `Start processing LivePhoto detection task ${taskId}: ${videoKey}`
            );
            let storageObject = await storageProvider.getFileMeta(videoKey);
            if (!storageObject) {
              const maybeBuffer = await storageProvider.get(videoKey);
              if (maybeBuffer) {
                storageObject = {
                  key: videoKey,
                  size: maybeBuffer.length,
                  lastModified: /* @__PURE__ */ new Date()
                };
              }
            }
            if (!storageObject) {
              throw new Error(`Storage object not found`);
            }
            const videoDir = path.dirname(videoKey);
            const videoBaseName = path.basename(videoKey, path.extname(videoKey));
            const possiblePhotoKeys = [
              path.join(videoDir, `${videoBaseName}.HEIC`).replace(/\\/g, "/"),
              path.join(videoDir, `${videoBaseName}.heic`).replace(/\\/g, "/"),
              path.join(videoDir, `${videoBaseName}.JPG`).replace(/\\/g, "/"),
              path.join(videoDir, `${videoBaseName}.jpg`).replace(/\\/g, "/"),
              path.join(videoDir, `${videoBaseName}.JPEG`).replace(/\\/g, "/"),
              path.join(videoDir, `${videoBaseName}.jpeg`).replace(/\\/g, "/")
            ];
            let matchedPhoto = null;
            for (const photoKey of possiblePhotoKeys) {
              const photos = await db.select().from(tables.photos).where(eq(tables.photos.storageKey, photoKey)).limit(1);
              if (photos.length > 0) {
                matchedPhoto = photos[0];
                this.logger.info(
                  `Found matching photo for LivePhoto video: ${photoKey}`
                );
                break;
              }
            }
            if (!matchedPhoto) {
              this.logger.warn(
                `No matching photo found for LivePhoto video: ${videoKey}`
              );
              throw new Error(
                `No matching photo found for LivePhoto video: ${videoKey}`
              );
            }
            const livePhotoVideoUrl = storageProvider.getPublicUrl(videoKey);
            await db.update(tables.photos).set({
              isLivePhoto: 1,
              livePhotoVideoUrl,
              livePhotoVideoKey: videoKey
            }).where(eq(tables.photos.id, matchedPhoto.id));
            this.logger.success(
              `LivePhoto detection task ${taskId} processed successfully, updated photo ${matchedPhoto.id}`
            );
          } catch (error) {
            this.logger.error(
              `LivePhoto detection task ${taskId} processing failed`,
              error
            );
            throw error;
          }
        }
      };
    })());
    this.workerId = workerId;
    this.logger = _logger ? _logger.withTag(`${workerId}`) : logger$1.dynamic(`queue-${workerId}`);
    this.startTime = /* @__PURE__ */ new Date();
  }
  static getInstance(workerId = "default", logger2) {
    if (!_QueueManager.instances.has(workerId)) {
      _QueueManager.instances.set(workerId, new _QueueManager(workerId, logger2));
    }
    return _QueueManager.instances.get(workerId);
  }
  static getAllInstances() {
    return Array.from(_QueueManager.instances.values());
  }
  getWorkerId() {
    return this.workerId;
  }
  getStats() {
    const uptime = Date.now() - this.startTime.getTime();
    return {
      workerId: this.workerId,
      isProcessing: this.isProcessing,
      processedCount: this.processedCount,
      errorCount: this.errorCount,
      uptime: Math.floor(uptime / 1e3),
      // seconds
      successRate: this.processedCount > 0 ? this.processedCount / (this.processedCount + this.errorCount) * 100 : 0
    };
  }
  /**
   * 插入新任务到队列
   * @param payload 任务负荷
   * @param options 可选的任务设置
   * @returns 新创建任务的 ID
   */
  async addTask(payload, options) {
    const db = useDB();
    const result = db.insert(tables.pipelineQueue).values({
      payload,
      ...options
    }).returning({ id: tables.pipelineQueue.id }).get();
    return result.id;
  }
  /**
   * 获取任务状态
   * @param taskId 任务ID
   * @returns 任务状态信息
   */
  async getTaskStatus(taskId) {
    const db = useDB();
    const task = await db.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.id, taskId)).get();
    return task;
  }
  /**
   * 获取并锁定下一个待处理任务
   * @returns 下一个待处理任务
   */
  async getNextTask() {
    const db = useDB();
    const task = db.transaction((tx) => {
      const highestPriorityPendingTask = tx.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.status, "pending")).orderBy(
        desc(tables.pipelineQueue.priority),
        asc(tables.pipelineQueue.createdAt)
      ).limit(1).get();
      if (!highestPriorityPendingTask) return null;
      const task2 = highestPriorityPendingTask;
      tx.update(tables.pipelineQueue).set({ status: "in-stages" }).where(eq(tables.pipelineQueue.id, task2.id)).run();
      return { ...task2, status: "in-stages" };
    });
    return task;
  }
  /**
   * 更新任务阶段
   * @param taskId 任务ID
   * @param stage 新的任务阶段
   */
  async updateTaskStage(taskId, stage) {
    const db = useDB();
    await db.update(tables.pipelineQueue).set({ statusStage: stage }).where(eq(tables.pipelineQueue.id, taskId));
  }
  /**
   * 标记任务为已完成
   * @param taskId 任务ID
   */
  async markTaskCompleted(taskId) {
    const db = useDB();
    await db.update(tables.pipelineQueue).set({
      status: "completed",
      completedAt: sql`(unixepoch())`
    }).where(eq(tables.pipelineQueue.id, taskId));
  }
  /**
   * 标记任务为失败
   * @param taskId 任务ID
   * @param errorMessage 错误信息
   */
  async markTaskFailed(taskId, errorMessage) {
    const db = useDB();
    const task = await db.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.id, taskId)).get();
    if (!task) return;
    const newAttempts = task.attempts + 1;
    const shouldRetry = newAttempts < task.maxAttempts;
    const retryDelay = shouldRetry ? Math.min(1e3 * Math.pow(2, newAttempts - 1), 3e4) : 0;
    await db.update(tables.pipelineQueue).set({
      status: shouldRetry ? "pending" : "failed",
      attempts: newAttempts,
      errorMessage: errorMessage || "Unknown error",
      // 如果重试，设置延迟重试时间
      ...shouldRetry && retryDelay > 0 ? {
        createdAt: new Date(Date.now() + retryDelay)
      } : {}
    }).where(eq(tables.pipelineQueue.id, taskId));
    if (shouldRetry) {
      this.logger.warn(
        `Task ${taskId} failed (attempt ${newAttempts}/${task.maxAttempts}), will retry in ${retryDelay}ms: ${errorMessage}`
      );
    } else {
      this.logger.error(
        `Task ${taskId} failed permanently after ${newAttempts} attempts: ${errorMessage}`
      );
    }
  }
  /**
   * 处理下一个待处理任务
   */
  async processNextTask() {
    if (this.isProcessing) {
      this.logger.debug("Task is already processing, skipping this poll");
      return;
    }
    this.isProcessing = true;
    try {
      const task = await this.getNextTask();
      if (!task) {
        this.logger.debug("No tasks to process at the moment");
        return;
      }
      try {
        const { type } = task.payload;
        switch (type) {
          case "live-photo-video":
            await this.processors.livePhotoDetect(task);
            break;
          case "photo":
            await this.processors.photo(task);
            break;
          case "photo-reverse-geocoding":
            await this.processors.reverseGeocoding(task);
            break;
          default:
            throw new Error(`Unknown task type: ${type}`);
        }
        await this.markTaskCompleted(task.id);
        this.processedCount++;
        this.logger.success(
          `[${this.workerId}] Task ${task.id} processed successfully (Total: ${this.processedCount})`
        );
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        await this.markTaskFailed(task.id, errorMessage);
        this.errorCount++;
        this.logger.error(
          `[${this.workerId}] Task ${task.id} processing failed (Error: ${this.errorCount}):`,
          errorMessage
        );
      }
    } catch (error) {
      this.logger.error("Error occurred while fetching the next task:", error);
    } finally {
      this.isProcessing = false;
    }
  }
  /**
   * 开始处理队列
   * @param intervalMs 轮询间隔
   */
  startProcessing(intervalMs = 3e3) {
    if (this.processingInterval) return;
    this.processingInterval = setInterval(() => {
      this.processNextTask().catch((error) => {
        this.logger.error("Error occurred while processing the queue:", error);
      });
    }, intervalMs);
    this.logger.success(
      `Queue processing started with interval: ${intervalMs}ms`
    );
    this.processNextTask().catch((error) => {
      this.logger.error("Error occurred while processing the queue:", error);
    });
  }
  /**
   * 停止处理队列
   */
  stopProcessing() {
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = null;
      this.logger.warn("Queue processing stopped");
    }
  }
  /**
   * 获取队列统计信息
   * @returns 队列统计信息
   */
  async getQueueStats() {
    const db = useDB();
    const stats = await db.select({
      status: tables.pipelineQueue.status,
      count: sql`COUNT(*)`
    }).from(tables.pipelineQueue).groupBy(tables.pipelineQueue.status);
    return stats.reduce(
      (acc, stat) => {
        acc[stat.status] = stat.count;
        return acc;
      },
      {}
    );
  }
};
__publicField$1(_QueueManager, "instances", /* @__PURE__ */ new Map());
let QueueManager = _QueueManager;

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class WorkerPool {
  constructor(config, logger2) {
    __publicField(this, "workers", []);
    __publicField(this, "logger");
    __publicField(this, "config");
    __publicField(this, "statsInterval", null);
    __publicField(this, "isRunning", false);
    this.config = {
      workerCount: 3,
      intervalMs: 2e3,
      intervalOffset: 300,
      enableLoadBalancing: true,
      statsReportInterval: 3e4,
      ...config
    };
    this.logger = logger2 || consola$1.withTag("worker-pool");
  }
  /**
   * 启动工作器池
   */
  async start() {
    if (this.isRunning) {
      this.logger.warn("WorkerPool is already running");
      return;
    }
    this.logger.info(
      `Starting WorkerPool with ${this.config.workerCount} workers`
    );
    await this.cleanupDeadTasks();
    for (let i = 1; i <= this.config.workerCount; i++) {
      const workerId = `worker-${i}`;
      const worker = QueueManager.getInstance(workerId, this.logger);
      const workerInterval = this.config.intervalMs + (i - 1) * this.config.intervalOffset;
      this.workers.push(worker);
      worker.startProcessing(workerInterval);
    }
    this.isRunning = true;
    if (this.config.statsReportInterval > 0) {
      this.startStatsReporting();
    }
    this.logger.success(
      `WorkerPool started successfully with ${this.workers.length} workers`
    );
  }
  /**
   * 停止工作器池
   */
  async stop() {
    if (!this.isRunning) {
      this.logger.warn("WorkerPool is not running");
      return;
    }
    this.logger.info("Stopping WorkerPool...");
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
      this.statsInterval = null;
    }
    const stopPromises = this.workers.map(async (worker, _index) => {
      try {
        worker.stopProcessing();
        this.logger.info(`worker [${worker.getWorkerId()}] stopped`);
      } catch (error) {
        this.logger.error(
          `Error stopping worker [${worker.getWorkerId()}]:`,
          error
        );
      }
    });
    await Promise.allSettled(stopPromises);
    this.workers = [];
    this.isRunning = false;
    this.logger.success("WorkerPool stopped successfully");
  }
  /**
   * 获取池统计信息
   */
  getPoolStats() {
    const workerStats = this.workers.map((worker) => worker.getStats());
    const totalProcessed = workerStats.reduce(
      (sum, stats) => sum + stats.processedCount,
      0
    );
    const totalErrors = workerStats.reduce(
      (sum, stats) => sum + stats.errorCount,
      0
    );
    const activeWorkers = workerStats.filter(
      (stats) => stats.isProcessing
    ).length;
    const workersWithActivity = workerStats.filter(
      (stats) => stats.processedCount > 0
    );
    const averageSuccessRate = workersWithActivity.length > 0 ? workersWithActivity.reduce(
      (sum, stats) => sum + stats.successRate,
      0
    ) / workersWithActivity.length : 0;
    return {
      totalWorkers: this.workers.length,
      activeWorkers,
      totalProcessed,
      totalErrors,
      averageSuccessRate: Math.round(averageSuccessRate * 100) / 100,
      workers: workerStats
    };
  }
  /**
   * 启动控制台统计报告
   */
  startStatsReporting() {
    this.statsInterval = setInterval(() => {
      const stats = this.getPoolStats();
      this.logger.info("=== WorkerPool Stats ===");
      this.logger.info(
        `Total Workers: ${stats.totalWorkers}, Active: ${stats.activeWorkers}`
      );
      this.logger.info(
        `Total Processed: ${stats.totalProcessed}, Total Errors: ${stats.totalErrors}`
      );
      this.logger.info(`Average Success Rate: ${stats.averageSuccessRate}%`);
      stats.workers.forEach((worker) => {
        const status = worker.isProcessing ? "Processing" : "Idle";
        this.logger.info(
          `  ${worker.workerId}: ${status} | Processed: ${worker.processedCount} | Errors: ${worker.errorCount} | Success Rate: ${worker.successRate.toFixed(1)}% | Uptime: ${worker.uptime}s`
        );
      });
    }, this.config.statsReportInterval);
  }
  /**
   * 重新平衡工作器负载
   */
  async rebalance() {
    if (!this.config.enableLoadBalancing) {
      return;
    }
    const stats = this.getPoolStats();
    const problematicWorkers = stats.workers.filter(
      (worker) => worker.errorCount > 10 && worker.successRate < 50
    );
    for (const workerStat of problematicWorkers) {
      this.logger.warn(
        `Worker ${workerStat.workerId} has high error rate, preparing to restart`
      );
      const worker = this.workers.find(
        (w) => w.getWorkerId() === workerStat.workerId
      );
      if (worker) {
        worker.stopProcessing();
        setTimeout(() => {
          worker.startProcessing(this.config.intervalMs);
          this.logger.info(`Worker ${workerStat.workerId} has been restarted`);
        }, 5e3);
      }
    }
  }
  /**
   * 获取队列统计信息（从任意一个工作器获取）
   */
  async getQueueStats() {
    if (this.workers.length === 0) {
      return {};
    }
    return await this.workers[0].getQueueStats();
  }
  /**
   * 清理死任务 - 将 in-stages 状态的任务重置为 pending，并设置高优先级
   */
  async cleanupDeadTasks() {
    try {
      const db = useDB();
      const deadTasks = await db.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.status, "in-stages"));
      if (deadTasks.length > 0) {
        this.logger.warn(
          `Found ${deadTasks.length} dead tasks in 'in-stages' status, resetting to pending with priority 1`
        );
        await db.update(tables.pipelineQueue).set({
          status: "pending",
          priority: 1,
          statusStage: null
        }).where(eq(tables.pipelineQueue.status, "in-stages"));
        this.logger.success(
          `Successfully reset ${deadTasks.length} dead tasks to pending status with priority 1`
        );
      } else {
        this.logger.info("No dead tasks found in queue");
      }
    } catch (error) {
      this.logger.error("Failed to cleanup dead tasks:", error);
    }
  }
  /**
   * 检查池是否正在运行
   */
  isActive() {
    return this.isRunning;
  }
  /**
   * 获取工作器数量
   */
  getWorkerCount() {
    return this.workers.length;
  }
  /**
   * 获取第一个工作器（用于添加任务）
   */
  getFirstWorker() {
    return this.workers.length > 0 ? this.workers[0] : null;
  }
  /**
   * 添加任务到队列（通过任意一个工作器）
   */
  async addTask(payload, options) {
    const worker = this.getFirstWorker();
    if (!worker) {
      throw new Error("No workers available");
    }
    return await worker.addTask(payload, options);
  }
  /**
   * 获取任务状态
   * @param taskId 任务ID
   * @returns 任务状态信息
   */
  async getTaskStatus(taskId) {
    const worker = this.getFirstWorker();
    if (!worker) {
      throw new Error("No workers available");
    }
    return await worker.getTaskStatus(taskId);
  }
}

const _OqFedC9jktl3QLrJPCZC7_b8ahblFT79wijkI4v7s8 = defineNitroPlugin(async (_nitroApp) => {
  const _logger = logger$1.dynamic("queue");
  const workerPool = new WorkerPool(
    {
      workerCount: 5,
      intervalMs: 1500,
      intervalOffset: 300,
      enableLoadBalancing: true,
      statsReportInterval: 6e4 * 10
    },
    _logger
  );
  await workerPool.start();
  globalThis.__workerPool = workerPool;
  const exitHandler = async () => {
    _logger.info("Shutting down worker pool...");
    await workerPool.stop();
    process.exit(0);
  };
  process.on("SIGINT", exitHandler);
  process.on("SIGTERM", exitHandler);
  setInterval(
    async () => {
      try {
        await workerPool.rebalance();
      } catch (error) {
        _logger.error("Rebalance failed:", error);
      }
    },
    5 * 60 * 1e3
  );
});

const plugins = [
  _92kiTT_mxr43AMJWgQdIb7juRNHyBImJAnlPvswa9k,
_FrljCBIJ8MzruDLMHTlHgCajOqa2yZayPVU4Td6XHs,
_y12kSmB5X7MsEkhIjDr90Xgmuyd219W3Ni_ddw5WZY,
_751uSvG2eeDBKip4AlOvPrzHCYH2cunG6NQEktR8I,
_QeGze3HmUo_B4RfH7sfHaGdcjahNcUnXFYSLfyWoZZ0,
_wplTFNnM158qEKV_cvyT0RJvdiuoQP7hc5tKHOTaRY,
_dBXBD733XzljWAdQQq1TalYKGzOd0SYoJb4x35uWBG0,
_EdHylr7gpzUbtUkuBlaP7UZStHGl0OaGTVzn4q4MPo,
_hXtDGR3jAIt1iDBddeENrLgwcEsoTKmzJMWeHdFlgWM,
_lcv2hSpevmwzFJQjsacuKclNOm4ZJPMMzJrwDjrqIg,
_OqFedC9jktl3QLrJPCZC7_b8ahblFT79wijkI4v7s8
];

const assets$1 = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets$1[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _NfdGtP = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const createHeadCore = createUnhead;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file://D:/chronoframe-opz/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file://D:/chronoframe-opz/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = void 0 ;
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process$1.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = void 0 ;
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const renderer = createRenderer(() => () => {
  }, {
    precomputed,
    manifest: await getClientManifest() ,
    renderToString: () => spaTemplate,
    buildAssetsURL
  });
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", err);
    throw err;
  });
  if (ssrContext.payload?.error) {
    throw ssrContext.payload.error;
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _zDehEa = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _MVgb_a = eventHandler(async (event) => {
  await clearUserSession(event);
  return { loggedOut: true };
});

const _o0ADgj = eventHandler(async (event) => {
  const session = await getUserSession(event);
  if (Object.keys(session).length > 0) {
    await sessionHooks.callHookParallel("fetch", session, event);
  }
  const { secure, ...data } = session;
  return data;
});

const _hySw45 = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _FedIGS = eventHandler(async (e) => {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) return false;
    return !useI18nContext(event).localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _sXGEXj = _messagesHandler ;

const _1Cq1oJ = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_I8ZT6M = () => Promise.resolve().then(function () { return index_delete$3; });
const _lazy_9VZ4B3 = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_S4Hv3A = () => Promise.resolve().then(function () { return index_put$3; });
const _lazy_2j7u73 = () => Promise.resolve().then(function () { return _photoId__delete$1; });
const _lazy_uPr9cN = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_u1b6Dj = () => Promise.resolve().then(function () { return index_post$3; });
const _lazy_wfG1_f = () => Promise.resolve().then(function () { return github_get$1; });
const _lazy_GkD0av = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_7Gfvgf = () => Promise.resolve().then(function () { return logout_get$1; });
const _lazy_W3q5YB = () => Promise.resolve().then(function () { return albums_get$1; });
const _lazy_lvu88T = () => Promise.resolve().then(function () { return index_delete$1; });
const _lazy_dRjdCS = () => Promise.resolve().then(function () { return index_put$1; });
const _lazy_cXTQtY = () => Promise.resolve().then(function () { return livephoto_get$1; });
const _lazy_kEAmdS = () => Promise.resolve().then(function () { return reactions$1; });
const _lazy_pqdDiC = () => Promise.resolve().then(function () { return checkDuplicate_post$1; });
const _lazy_TV5UMF = () => Promise.resolve().then(function () { return reindex_post$1; });
const _lazy_GiDqsK = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_vmEU3O = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_mYecWI = () => Promise.resolve().then(function () { return manage_post$1; });
const _lazy__1e8dP = () => Promise.resolve().then(function () { return reactions_get$1; });
const _lazy_OlQyex = () => Promise.resolve().then(function () { return status_get$1; });
const _lazy_zf9X9z = () => Promise.resolve().then(function () { return upload_put$1; });
const _lazy_kuI2H7 = () => Promise.resolve().then(function () { return profile_get$1; });
const _lazy_ha6IUC = () => Promise.resolve().then(function () { return addTask_post$1; });
const _lazy_BAsTvs = () => Promise.resolve().then(function () { return addTasks_post$1; });
const _lazy_DmtdSj = () => Promise.resolve().then(function () { return _taskId__get$1; });
const _lazy_aTIoP2 = () => Promise.resolve().then(function () { return index$3; });
const _lazy__WlSqQ = () => Promise.resolve().then(function () { return clear_delete$1; });
const _lazy_PAM2hc = () => Promise.resolve().then(function () { return list_get$1; });
const _lazy_hEI3IJ = () => Promise.resolve().then(function () { return retryBatch_post$1; });
const _lazy_y7RtpT = () => Promise.resolve().then(function () { return retry_post$1; });
const _lazy_4aDnUk = () => Promise.resolve().then(function () { return logs$1; });
const _lazy_8X8XxY = () => Promise.resolve().then(function () { return _namespace__get$1; });
const _lazy_QMDvXn = () => Promise.resolve().then(function () { return _key_$1; });
const _lazy_E_xoSZ = () => Promise.resolve().then(function () { return all_get$1; });
const _lazy_h5Tzwy = () => Promise.resolve().then(function () { return batch_put$1; });
const _lazy_LBuC1X = () => Promise.resolve().then(function () { return fields_get$1; });
const _lazy_x1LvT1 = () => Promise.resolve().then(function () { return schema_get$3; });
const _lazy_WuXfhX = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_czkeiZ = () => Promise.resolve().then(function () { return index$1; });
const _lazy_GOZ_W5 = () => Promise.resolve().then(function () { return stats_get$1; });
const _lazy_ITza5W = () => Promise.resolve().then(function () { return admin_post$1; });
const _lazy_gb1aOW = () => Promise.resolve().then(function () { return complete_post$1; });
const _lazy_DlcA9M = () => Promise.resolve().then(function () { return map_post$1; });
const _lazy_CEY7P6 = () => Promise.resolve().then(function () { return schema_get$1; });
const _lazy_A67rZM = () => Promise.resolve().then(function () { return site_post$1; });
const _lazy_7wFY6e = () => Promise.resolve().then(function () { return storage_post$1; });
const _lazy_LXbhNA = () => Promise.resolve().then(function () { return submit_post$1; });
const _lazy_EMrX_p = () => Promise.resolve().then(function () { return ____key__get$1; });
const _lazy_lMDrRm = () => Promise.resolve().then(function () { return ____path_$1; });
const _lazy_zm1iP1 = () => Promise.resolve().then(function () { return ____thumbnailUrl__get$1; });
const _lazy_XBjA2m = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_tyCA_E = () => Promise.resolve().then(function () { return font$1; });
const _lazy_HdrsPY = () => Promise.resolve().then(function () { return debug_json$1; });
const _lazy_XetQct = () => Promise.resolve().then(function () { return image$1; });

const handlers = [
  { route: '', handler: _NfdGtP, lazy: false, middleware: true, method: undefined },
  { route: '/api/albums/:albumId', handler: _lazy_I8ZT6M, lazy: true, middleware: false, method: "delete" },
  { route: '/api/albums/:albumId', handler: _lazy_9VZ4B3, lazy: true, middleware: false, method: "get" },
  { route: '/api/albums/:albumId', handler: _lazy_S4Hv3A, lazy: true, middleware: false, method: "put" },
  { route: '/api/albums/:albumId/photos/:photoId', handler: _lazy_2j7u73, lazy: true, middleware: false, method: "delete" },
  { route: '/api/albums', handler: _lazy_uPr9cN, lazy: true, middleware: false, method: "get" },
  { route: '/api/albums', handler: _lazy_u1b6Dj, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/github', handler: _lazy_wfG1_f, lazy: true, middleware: false, method: "get" },
  { route: '/api/login', handler: _lazy_GkD0av, lazy: true, middleware: false, method: "post" },
  { route: '/api/logout', handler: _lazy_7Gfvgf, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId/albums', handler: _lazy_W3q5YB, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId', handler: _lazy_lvu88T, lazy: true, middleware: false, method: "delete" },
  { route: '/api/photos/:photoId', handler: _lazy_dRjdCS, lazy: true, middleware: false, method: "put" },
  { route: '/api/photos/:photoId/livephoto', handler: _lazy_cXTQtY, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId/reactions', handler: _lazy_kEAmdS, lazy: true, middleware: false, method: undefined },
  { route: '/api/photos/check-duplicate', handler: _lazy_pqdDiC, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/exif/reindex', handler: _lazy_TV5UMF, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos', handler: _lazy_GiDqsK, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos', handler: _lazy_vmEU3O, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/livephoto/manage', handler: _lazy_mYecWI, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/reactions', handler: _lazy__1e8dP, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/status', handler: _lazy_OlQyex, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/upload', handler: _lazy_zf9X9z, lazy: true, middleware: false, method: "put" },
  { route: '/api/profile', handler: _lazy_kuI2H7, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/add-task', handler: _lazy_ha6IUC, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/add-tasks', handler: _lazy_BAsTvs, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/stats/:taskId', handler: _lazy_DmtdSj, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/stats', handler: _lazy_aTIoP2, lazy: true, middleware: false, method: undefined },
  { route: '/api/queue/task/clear', handler: _lazy__WlSqQ, lazy: true, middleware: false, method: "delete" },
  { route: '/api/queue/task/list', handler: _lazy_PAM2hc, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/task/retry-batch', handler: _lazy_hEI3IJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/task/retry', handler: _lazy_y7RtpT, lazy: true, middleware: false, method: "post" },
  { route: '/api/system/logs', handler: _lazy_4aDnUk, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/:namespace', handler: _lazy_8X8XxY, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/:namespace/:key', handler: _lazy_QMDvXn, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/all', handler: _lazy_E_xoSZ, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/batch', handler: _lazy_h5Tzwy, lazy: true, middleware: false, method: "put" },
  { route: '/api/system/settings/fields', handler: _lazy_LBuC1X, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/schema', handler: _lazy_x1LvT1, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/storage-config/:id', handler: _lazy_WuXfhX, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/storage-config', handler: _lazy_czkeiZ, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/stats', handler: _lazy_GOZ_W5, lazy: true, middleware: false, method: "get" },
  { route: '/api/wizard/admin', handler: _lazy_ITza5W, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/complete', handler: _lazy_gb1aOW, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/map', handler: _lazy_DlcA9M, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/schema', handler: _lazy_CEY7P6, lazy: true, middleware: false, method: "get" },
  { route: '/api/wizard/site', handler: _lazy_A67rZM, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/storage', handler: _lazy_7wFY6e, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/submit', handler: _lazy_LXbhNA, lazy: true, middleware: false, method: "post" },
  { route: '/image/**:key', handler: _lazy_EMrX_p, lazy: true, middleware: false, method: "get" },
  { route: '/storage/**:path', handler: _lazy_lMDrRm, lazy: true, middleware: false, method: undefined },
  { route: '/thumb/**:thumbnailUrl', handler: _lazy_zm1iP1, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_XBjA2m, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _zDehEa, lazy: false, middleware: false, method: undefined },
  { route: '/api/_auth/session', handler: _MVgb_a, lazy: false, middleware: false, method: "delete" },
  { route: '/api/_auth/session', handler: _o0ADgj, lazy: false, middleware: false, method: "get" },
  { route: '/__og-image__/font/**', handler: _lazy_tyCA_E, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _hySw45, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _FedIGS, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/debug.json', handler: _lazy_HdrsPY, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_XetQct, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_XetQct, lazy: true, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _sXGEXj, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _1Cq1oJ, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_XBjA2m, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_XBjA2m, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = crypto$1;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
{
  const { handleUpgrade } = wsAdapter(nitroApp.h3App.websocket);
  server.on("upgrade", handleUpgrade);
}
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "statusCode": 500, "statusMessage": "Internal server error", "description": "This page is temporarily unavailable.", "refresh": "Refresh this page" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage) + " | " + escapeHtml(messages.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(messages.statusCode) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(messages.statusMessage) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const migrate = defineTask({
  meta: {
    name: "db:migrate",
    description: "Migrate the database"
  },
  async run() {
    const log = logger$1.dynamic("db");
    const db = useDB();
    log.info("Migrating database...");
    const __filename = fileURLToPath(globalThis._importMeta_.url);
    const __dirname = dirname(__filename);
    migrate$2(db, {
      migrationsFolder: join(__dirname, "../../server/database/migrations")
    });
    log.success("Database migrated successfully.");
    return {
      result: "success"
    };
  }
});

const migrate$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: migrate
}, Symbol.toStringTag, { value: 'Module' }));

const seed = defineTask({
  meta: {
    name: "db:seed",
    description: "Seed the database with default admin user"
  },
  async run() {
    const log = logger$1.dynamic("db");
    const db = useDB();
    log.info("Seeding database with default admin user...");
    const users = await db.select().from(tables.users);
    if (users.length > 0) {
      log.info("User already exists, skipping seeding.");
    } else {
      log.info("No users found, creating default admin user...");
      await db.insert(tables.users).values({
        username: process.env.CFRAME_ADMIN_NAME || "chronoframe",
        email: process.env.CFRAME_ADMIN_EMAIL || "admin@chronoframe.com",
        password: await hashPassword(
          process.env.CFRAME_ADMIN_PASSWORD || "CF1234@!"
        ),
        createdAt: /* @__PURE__ */ new Date(),
        isAdmin: 1
      });
      log.success("Default admin user created.");
    }
    return {
      result: "success"
    };
  }
});

const seed$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: seed
}, Symbol.toStringTag, { value: 'Module' }));

const compatibility = {"chromium":"chrome-launcher","satori":"node","resvg":"node","sharp":"node","css-inline":false};

const assets = prefixStorage(useStorage(), "/assets");
async function loadFont({ e, publicStoragePath }, font) {
  const { name, weight } = font;
  if (font.data)
    return font;
  if (font.key && await assets.hasItem(font.key)) {
    let fontData = await assets.getItem(font.key);
    if (fontData instanceof Uint8Array) {
      const decoder = new TextDecoder();
      fontData = decoder.decode(fontData);
    }
    font.data = Buffer.from(String(fontData), "base64");
    return font;
  }
  let data;
  if (font.path) {
    {
      const key = `${publicStoragePath}${font.path.replace("./", ":").replace("/", ":")}`;
      if (await useStorage().hasItem(key))
        data = await useStorage().getItemRaw(key) || void 0;
    }
  } else {
    data = await e.$fetch(`/__og-image__/font/${name}/${weight}.ttf`, {
      responseType: "arrayBuffer",
      query: {
        font
      }
    });
  }
  font.data = data;
  return font;
}

const cssInlineInstance = { instance: void 0 };
const sharpInstance = { instance: void 0 };
const resvgInstance = { instance: void 0 };
const satoriInstance = { instance: void 0 };
async function useResvg() {
  resvgInstance.instance = resvgInstance.instance || await Promise.resolve().then(function () { return node$4; }).then((m) => m.default);
  await resvgInstance.instance.initWasmPromise;
  return resvgInstance.instance.Resvg;
}
async function useSatori() {
  satoriInstance.instance = satoriInstance.instance || await Promise.resolve().then(function () { return node$2; }).then((m) => m.default);
  await satoriInstance.instance.initWasmPromise;
  return satoriInstance.instance.satori;
}
async function useSharp() {
  sharpInstance.instance = sharpInstance.instance || await Promise.resolve().then(function () { return node; }).then((m) => m.default);
  return sharpInstance.instance;
}
async function useCssInline() {
  cssInlineInstance.instance = cssInlineInstance.instance || await Promise.resolve().then(function () { return empty; }).then((m) => m.default);
  await cssInlineInstance.instance.initWasmPromise;
  return cssInlineInstance.instance.cssInline;
}

function walkSatoriTree(e, node, plugins) {
  const promises = [];
  if (!node.props?.children || !Array.isArray(node.props.children))
    return promises;
  if (node.props.children.length === 0) {
    delete node.props.children;
    return promises;
  }
  for (const child of node.props.children || []) {
    if (child) {
      for (const plugin of plugins.flat()) {
        if (plugin.filter(child))
          promises.push(plugin.transform(child, e));
      }
      promises.push(
        ...walkSatoriTree(e, child, plugins)
      );
    }
  }
  return promises;
}
function defineSatoriTransformer(transformer) {
  return transformer;
}

const classes = defineSatoriTransformer([
  {
    filter: (node) => !!node.props?.class && !node.props?.tw,
    transform(node) {
      node.props.tw = node.props.class;
      node.props.tw = node.props.tw.replace(/icon|inline-style/g, "");
    }
  },
  {
    filter: (node) => !!node.props?.style?.display,
    transform(node) {
      if (["inline-block", "inline"].includes(node.props.style.display))
        delete node.props.style.display;
    }
  }
]);

function isEmojiFilter(node) {
  return node.type === "svg" && typeof node.props?.["data-emoji"] !== "undefined";
}
const emojis = defineSatoriTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => ["div", "p"].includes(node.type) && Array.isArray(node.props?.children) && node.props.children.some(isEmojiFilter),
    transform: (node) => {
      node.props.style = node.props.style || {};
      node.props.style.display = "flex";
      node.props.style.alignItems = "center";
      node.props.children = node.props.children.map((child) => {
        if (typeof child === "string") {
          return {
            type: "div",
            props: {
              children: child
            }
          };
        }
        if (child.props.class?.includes("emoji"))
          delete child.props.class;
        return child;
      });
    }
  }
]);

const encoding = defineSatoriTransformer([
  // clean up
  {
    filter: (node) => node.props?.["data-v-inspector"],
    transform: (node) => {
      delete node.props["data-v-inspector"];
    }
  },
  {
    filter: (node) => typeof node.props?.children === "string",
    transform: (node) => {
      node.props.children = decodeHtml(node.props.children);
    }
  }
]);

const BLOCK_ELEMENTS = [
  "div",
  "p",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "hr",
  "table",
  "dl"
];
const INLINE_ELEMENTS = [
  "span",
  "a",
  "b",
  "i",
  "u",
  "em",
  "strong",
  "code",
  "abbr",
  "del",
  "ins",
  "mark",
  "sub",
  "sup",
  "small",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5"
];
const flex = defineSatoriTransformer({
  filter: (node) => [...INLINE_ELEMENTS, "div"].includes(node.type) && (Array.isArray(node.props?.children) && node.props?.children.length >= 1) && !node.props?.class?.includes("hidden"),
  transform: (node) => {
    node.props.style = node.props.style || {};
    if (node.props.style?.display && node.props.style?.display !== "flex") {
      return;
    }
    if (node.type === "div") {
      node.props.style.display = "flex";
      if (!node.props?.class?.includes("flex-") && Array.isArray(node.props.children) && node.props.children.some((child) => BLOCK_ELEMENTS.includes(child.type))) {
        node.props.style.flexDirection = "column";
        return;
      }
    }
    let flexWrap = node.props?.class?.includes("flex-wrap");
    if (!node.props?.class?.includes("flex-")) {
      node.props.style.flexWrap = "wrap";
      flexWrap = true;
    }
    if (flexWrap && !node.props?.class?.includes("gap")) {
      node.props.style.gap = "0.2em";
    }
  }
});

async function resolveLocalFilePathImage(publicStoragePath, src) {
  const normalizedSrc = withoutLeadingSlash(
    src.replace("_nuxt/@fs/", "").replace("_nuxt/", "").replace("./", "")
  );
  const key = `${publicStoragePath}:${normalizedSrc}`;
  if (await useStorage().hasItem(key))
    return await useStorage().getItemRaw(key);
}
const imageSrc = defineSatoriTransformer([
  // fix <img src="">
  {
    filter: (node) => node.type === "img" && node.props?.src,
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      let src = node.props.src;
      const isRelative = src.startsWith("/");
      let dimensions;
      let imageBuffer;
      if (src.endsWith(".webp")) {
        logger.warn("Using WebP images with Satori is not supported. Please consider switching image format or use the chromium renderer.", src);
      }
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "");
          imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
        }
        if (!imageBuffer) {
          imageBuffer = await e.$fetch(src, { responseType: "arrayBuffer" }).catch(() => {
          });
          if (!imageBuffer && true) {
            imageBuffer = await e.$fetch(src, {
              baseURL: useNitroOrigin(e),
              responseType: "arrayBuffer"
            }).catch(() => {
            });
          }
        }
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        }
      } else if (!src.startsWith("data:")) {
        src = decodeHtml(src);
        node.props.src = src;
        imageBuffer = await $fetch(src, {
          responseType: "arrayBuffer"
        }).catch(() => {
        });
      }
      if (imageBuffer && (!node.props.width || !node.props.height)) {
        try {
          const imageSize = sizeOf(imageBuffer);
          dimensions = { width: imageSize.width, height: imageSize.height };
        } catch {
        }
        if (dimensions?.width && dimensions?.height) {
          const naturalAspectRatio = dimensions.width / dimensions.height;
          if (node.props.width && !node.props.height) {
            node.props.height = Math.round(node.props.width / naturalAspectRatio);
          } else if (node.props.height && !node.props.width) {
            node.props.width = Math.round(node.props.height * naturalAspectRatio);
          } else if (!node.props.width && !node.props.height) {
            node.props.width = dimensions.width;
            node.props.height = dimensions.height;
          }
        }
      }
      if (typeof node.props.src === "string" && node.props.src.startsWith("/")) {
        if (imageBuffer) {
          const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
          node.props.src = toBase64Image(buffer);
        } else {
          node.props.src = `${withBase(src, `${useNitroOrigin(e)}`)}?${Date.now()}`;
        }
      }
    }
  },
  // fix style="background-image: url('')"
  {
    filter: (node) => node.props?.style?.backgroundImage?.includes("url("),
    transform: async (node, { e, publicStoragePath, runtimeConfig }) => {
      const backgroundImage = node.props.style.backgroundImage;
      const src = backgroundImage.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, "");
      const isRelative = src?.startsWith("/");
      if (isRelative) {
        {
          const srcWithoutBase = src.replace(runtimeConfig.app.baseURL, "/");
          const imageBuffer = await resolveLocalFilePathImage(publicStoragePath, srcWithoutBase);
          if (imageBuffer) {
            const buffer = imageBuffer instanceof ArrayBuffer ? imageBuffer : imageBuffer.buffer;
            const base64 = toBase64Image(buffer);
            node.props.style.backgroundImage = `url(${base64})`;
          }
        }
      }
    }
  }
]);

const nuxtIcon = defineSatoriTransformer([
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "span" && node.props?.class?.includes("iconify"),
    transform: (node, e) => {
      {
        logger.warn(`When using the Nuxt Icon components in \`${e.options.component}\` you must provide \`mode="svg"\` to ensure correct rendering.`);
      }
    }
  },
  // need to make sure parent div has flex for the emoji to render inline
  {
    filter: (node) => node.type === "svg" && node.props?.class?.includes("iconify"),
    transform: (node) => {
      node.props.class = String(node.props.class).split(" ").filter((c) => !c.startsWith("iconify")).join(" ");
    }
  }
]);

function safeSplit(s) {
  const [key, value] = s.split(":");
  return [String(key || "").trim(), String(value || "").trim()];
}
const unocss = defineSatoriTransformer({
  filter: (node) => !!node.props?.class,
  transform: async (node, ctx) => {
    const classes = node.props.class || "";
    const styles = node.props.style || {};
    const replacedClasses = /* @__PURE__ */ new Set();
    for (const token of classes.split(" ").filter((c) => c.trim())) {
      const parsedToken = await ctx.unocss.parseToken(token);
      if (parsedToken) {
        const inlineStyles = String(parsedToken?.[0]?.[2]).split(";").filter((s) => !!s?.trim());
        const vars = {
          "--color-gray-50": "249 250 251",
          "--color-gray-100": "243 244 246",
          "--color-gray-200": "229 231 235",
          "--color-gray-300": "209 213 219",
          "--color-gray-400": "156 163 175",
          "--color-gray-500": "107 114 128",
          "--color-gray-600": "75 85 99",
          "--color-gray-700": "55 65 81",
          "--color-gray-800": "31 41 55",
          "--color-gray-900": "17 24 39",
          "--color-gray-950": "3 7 18"
        };
        inlineStyles.filter((s) => s.startsWith("--")).forEach((s) => {
          const [key, value] = safeSplit(s);
          vars[key] = value;
        });
        inlineStyles.filter((s) => !s.startsWith("--")).forEach((s) => {
          const [key, value] = safeSplit(s);
          const camelCasedKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          if (!styles[camelCasedKey])
            styles[camelCasedKey] = value.replace(/var\((.*?)\)/g, (_, k) => vars[k.trim()]);
          if (styles[camelCasedKey] && styles[camelCasedKey].includes("/")) {
            const [rgb, opacity] = styles[camelCasedKey].split("/");
            if (rgb && opacity) {
              if (opacity.trim() === "1)")
                styles[camelCasedKey] = rgb.replace(/(\d+) (\d+) (\d+).*/, (_, r, g, b) => `${r}, ${g}, ${b})`);
              else
                styles[camelCasedKey] = `${rgb.replace("rgb", "rgba").replaceAll(" ", ", ")}${opacity.trim()}`;
            }
          }
        });
        replacedClasses.add(token);
      }
    }
    node.props.class = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.tw = classes.split(" ").filter((c) => !replacedClasses.has(c)).join(" ");
    node.props.style = styles;
  }
});

const charMap = {
  "2049": "exclamation-question-mark",
  "2122": "trade-mark",
  "2139": "information",
  "2194": "left-right-arrow",
  "2195": "up-down-arrow",
  "2196": "up-left-arrow",
  "2197": "up-right-arrow",
  "2198": "down-right-arrow",
  "2199": "down-left-arrow",
  "2328": "keyboard",
  "2600": "sun",
  "2601": "cloud",
  "2602": "umbrella",
  "2603": "snowman",
  "2604": "comet",
  "2611": "check-box-with-check",
  "2614": "umbrella-with-rain-drops",
  "2615": "hot-beverage",
  "2618": "shamrock",
  "2620": "skull-and-crossbones",
  "2622": "radioactive",
  "2623": "biohazard",
  "2626": "orthodox-cross",
  "2638": "wheel-of-dharma",
  "2639": "frowning-face",
  "2640": "female-sign",
  "2642": "male-sign",
  "2648": "aries",
  "2649": "taurus",
  "2650": "sagittarius",
  "2651": "capricorn",
  "2652": "aquarius",
  "2653": "pisces",
  "2660": "spade-suit",
  "2663": "club-suit",
  "2665": "heart-suit",
  "2666": "diamond-suit",
  "2668": "hot-springs",
  "2692": "hammer-and-pick",
  "2693": "anchor",
  "2694": "crossed-swords",
  "2695": "medical-symbol",
  "2696": "balance-scale",
  "2697": "alembic",
  "2699": "gear",
  "2702": "scissors",
  "2705": "check-mark-button",
  "2708": "airplane",
  "2709": "envelope",
  "2712": "black-nib",
  "2714": "check-mark",
  "2716": "multiply",
  "2721": "star-of-david",
  "2728": "sparkles",
  "2733": "eight-spoked-asterisk",
  "2734": "eight-pointed-star",
  "2744": "snowflake",
  "2747": "sparkle",
  "2753": "red-question-mark",
  "2754": "white-question-mark",
  "2755": "white-exclamation-mark",
  "2757": "red-exclamation-mark",
  "2763": "heart-exclamation",
  "2764": "red-heart",
  "2795": "plus",
  "2796": "minus",
  "2797": "divide",
  "2934": "right-arrow-curving-up",
  "2935": "right-arrow-curving-down",
  "3030": "wavy-dash",
  "3297": "japanese-congratulations-button",
  "3299": "japanese-secret-button",
  "1f947": "1st-place-medal",
  "1f948": "2nd-place-medal",
  "1f949": "3rd-place-medal",
  "1f170": "a-button-blood-type",
  "1f18e": "ab-button-blood-type",
  "1f9ee": "abacus",
  "1fa97": "accordion",
  "1fa79": "adhesive-bandage",
  "1f39f": "admission-tickets",
  "1f6a1": "aerial-tramway",
  "1f6ec": "airplane-arrival",
  "1f6eb": "airplane-departure",
  "23f0": "alarm-clock",
  "1f47d": "alien",
  "1f47e": "alien-monster",
  "1f691": "ambulance",
  "1f3c8": "american-football",
  "1f3fa": "amphora",
  "1fac0": "anatomical-heart",
  "1f4a2": "anger-symbol",
  "1f620": "angry-face",
  "1f47f": "angry-face-with-horns",
  "1f627": "anguished-face",
  "1f41c": "ant",
  "1f4f6": "antenna-bars",
  "1f630": "anxious-face-with-sweat",
  "1f69b": "articulated-lorry",
  "1f9d1-200d-1f3a8": "artist",
  "1f9d1-1f3ff-200d-1f3a8": "artist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a8": "artist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a8": "artist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a8": "artist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a8": "artist-medium-skin-tone",
  "1f3a8": "artist-palette",
  "1f632": "astonished-face",
  "1f9d1-200d-1f680": "astronaut",
  "1f9d1-1f3ff-200d-1f680": "astronaut-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f680": "astronaut-light-skin-tone",
  "1f9d1-1f3fe-200d-1f680": "astronaut-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f680": "astronaut-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f680": "astronaut-medium-skin-tone",
  "1f3e7": "atm-sign",
  "269b": "atom-symbol",
  "1f6fa": "auto-rickshaw",
  "1f697": "automobile",
  "1f951": "avocado",
  "1fa93": "axe",
  "1f171": "b-button-blood-type",
  "1f476": "baby",
  "1f47c": "baby-angel",
  "1f47c-1f3ff": "baby-angel-dark-skin-tone",
  "1f47c-1f3fb": "baby-angel-light-skin-tone",
  "1f47c-1f3fe": "baby-angel-medium-dark-skin-tone",
  "1f47c-1f3fc": "baby-angel-medium-light-skin-tone",
  "1f47c-1f3fd": "baby-angel-medium-skin-tone",
  "1f37c": "baby-bottle",
  "1f424": "baby-chick",
  "1f476-1f3ff": "baby-dark-skin-tone",
  "1f476-1f3fb": "baby-light-skin-tone",
  "1f476-1f3fe": "baby-medium-dark-skin-tone",
  "1f476-1f3fc": "baby-medium-light-skin-tone",
  "1f476-1f3fd": "baby-medium-skin-tone",
  "1f6bc": "baby-symbol",
  "1f519": "back-arrow",
  "1f447": "backhand-index-pointing-down",
  "1f447-1f3ff": "backhand-index-pointing-down-dark-skin-tone",
  "1f447-1f3fb": "backhand-index-pointing-down-light-skin-tone",
  "1f447-1f3fe": "backhand-index-pointing-down-medium-dark-skin-tone",
  "1f447-1f3fc": "backhand-index-pointing-down-medium-light-skin-tone",
  "1f447-1f3fd": "backhand-index-pointing-down-medium-skin-tone",
  "1f448": "backhand-index-pointing-left",
  "1f448-1f3ff": "backhand-index-pointing-left-dark-skin-tone",
  "1f448-1f3fb": "backhand-index-pointing-left-light-skin-tone",
  "1f448-1f3fe": "backhand-index-pointing-left-medium-dark-skin-tone",
  "1f448-1f3fc": "backhand-index-pointing-left-medium-light-skin-tone",
  "1f448-1f3fd": "backhand-index-pointing-left-medium-skin-tone",
  "1f449": "backhand-index-pointing-right",
  "1f449-1f3ff": "backhand-index-pointing-right-dark-skin-tone",
  "1f449-1f3fb": "backhand-index-pointing-right-light-skin-tone",
  "1f449-1f3fe": "backhand-index-pointing-right-medium-dark-skin-tone",
  "1f449-1f3fc": "backhand-index-pointing-right-medium-light-skin-tone",
  "1f449-1f3fd": "backhand-index-pointing-right-medium-skin-tone",
  "1f446": "backhand-index-pointing-up",
  "1f446-1f3ff": "backhand-index-pointing-up-dark-skin-tone",
  "1f446-1f3fb": "backhand-index-pointing-up-light-skin-tone",
  "1f446-1f3fe": "backhand-index-pointing-up-medium-dark-skin-tone",
  "1f446-1f3fc": "backhand-index-pointing-up-medium-light-skin-tone",
  "1f446-1f3fd": "backhand-index-pointing-up-medium-skin-tone",
  "1f392": "backpack",
  "1f953": "bacon",
  "1f9a1": "badger",
  "1f3f8": "badminton",
  "1f96f": "bagel",
  "1f6c4": "baggage-claim",
  "1f956": "baguette-bread",
  "1fa70": "ballet-shoes",
  "1f388": "balloon",
  "1f5f3": "ballot-box-with-ballot",
  "1f34c": "banana",
  "1fa95": "banjo",
  "1f3e6": "bank",
  "1f4ca": "bar-chart",
  "1f488": "barber-pole",
  "26be": "baseball",
  "1f9fa": "basket",
  "1f3c0": "basketball",
  "1f987": "bat",
  "1f6c1": "bathtub",
  "1f50b": "battery",
  "1f3d6": "beach-with-umbrella",
  "1f601": "beaming-face-with-smiling-eyes",
  "1fad8": "beans",
  "1f43b": "bear",
  "1f493": "beating-heart",
  "1f9ab": "beaver",
  "1f6cf": "bed",
  "1f37a": "beer-mug",
  "1fab2": "beetle",
  "1f514": "bell",
  "1fad1": "bell-pepper",
  "1f515": "bell-with-slash",
  "1f6ce": "bellhop-bell",
  "1f371": "bento-box",
  "1f9c3": "beverage-box",
  "1f6b2": "bicycle",
  "1f459": "bikini",
  "1f9e2": "billed-cap",
  "1f426": "bird",
  "1f382": "birthday-cake",
  "1f9ac": "bison",
  "1fae6": "biting-lip",
  "1f426-200d-2b1b": "black-bird",
  "1f408-200d-2b1b": "black-cat",
  "26ab": "black-circle",
  "1f3f4": "black-flag",
  "1f5a4": "black-heart",
  "2b1b": "black-large-square",
  "25fe": "black-medium-small-square",
  "25fc": "black-medium-square",
  "25aa": "black-small-square",
  "1f532": "black-square-button",
  "1f33c": "blossom",
  "1f421": "blowfish",
  "1f4d8": "blue-book",
  "1f535": "blue-circle",
  "1f499": "blue-heart",
  "1f7e6": "blue-square",
  "1fad0": "blueberries",
  "1f417": "boar",
  "1f4a3": "bomb",
  "1f9b4": "bone",
  "1f516": "bookmark",
  "1f4d1": "bookmark-tabs",
  "1f4da": "books",
  "1fa83": "boomerang",
  "1f37e": "bottle-with-popping-cork",
  "1f490": "bouquet",
  "1f3f9": "bow-and-arrow",
  "1f963": "bowl-with-spoon",
  "1f3b3": "bowling",
  "1f94a": "boxing-glove",
  "1f466": "boy",
  "1f466-1f3ff": "boy-dark-skin-tone",
  "1f466-1f3fb": "boy-light-skin-tone",
  "1f466-1f3fe": "boy-medium-dark-skin-tone",
  "1f466-1f3fc": "boy-medium-light-skin-tone",
  "1f466-1f3fd": "boy-medium-skin-tone",
  "1f9e0": "brain",
  "1f35e": "bread",
  "1f931": "breast-feeding",
  "1f931-1f3ff": "breast-feeding-dark-skin-tone",
  "1f931-1f3fb": "breast-feeding-light-skin-tone",
  "1f931-1f3fe": "breast-feeding-medium-dark-skin-tone",
  "1f931-1f3fc": "breast-feeding-medium-light-skin-tone",
  "1f931-1f3fd": "breast-feeding-medium-skin-tone",
  "1f9f1": "brick",
  "1f309": "bridge-at-night",
  "1f4bc": "briefcase",
  "1fa72": "briefs",
  "1f506": "bright-button",
  "1f966": "broccoli",
  "26d3-200d-1f4a5": "broken-chain",
  "1f494": "broken-heart",
  "1f9f9": "broom",
  "1f7e4": "brown-circle",
  "1f90e": "brown-heart",
  "1f344-200d-1f7eb": "brown-mushroom",
  "1f7eb": "brown-square",
  "1f9cb": "bubble-tea",
  "1fae7": "bubbles",
  "1faa3": "bucket",
  "1f41b": "bug",
  "1f3d7": "building-construction",
  "1f685": "bullet-train",
  "1f3af": "bullseye",
  "1f32f": "burrito",
  "1f68c": "bus",
  "1f68f": "bus-stop",
  "1f464": "bust-in-silhouette",
  "1f465": "busts-in-silhouette",
  "1f9c8": "butter",
  "1f98b": "butterfly",
  "1f335": "cactus",
  "1f4c5": "calendar",
  "1f919": "call-me-hand",
  "1f919-1f3ff": "call-me-hand-dark-skin-tone",
  "1f919-1f3fb": "call-me-hand-light-skin-tone",
  "1f919-1f3fe": "call-me-hand-medium-dark-skin-tone",
  "1f919-1f3fc": "call-me-hand-medium-light-skin-tone",
  "1f919-1f3fd": "call-me-hand-medium-skin-tone",
  "1f42a": "camel",
  "1f4f7": "camera",
  "1f4f8": "camera-with-flash",
  "1f3d5": "camping",
  "264b": "cancer",
  "1f56f": "candle",
  "1f36c": "candy",
  "1f96b": "canned-food",
  "1f6f6": "canoe",
  "1f5c3": "card-file-box",
  "1f4c7": "card-index",
  "1f5c2": "card-index-dividers",
  "1f3a0": "carousel-horse",
  "1f38f": "carp-streamer",
  "1fa9a": "carpentry-saw",
  "1f955": "carrot",
  "1f3f0": "castle",
  "1f408": "cat",
  "1f431": "cat-face",
  "1f639": "cat-with-tears-of-joy",
  "1f63c": "cat-with-wry-smile",
  "26d3": "chains",
  "1fa91": "chair",
  "1f4c9": "chart-decreasing",
  "1f4c8": "chart-increasing",
  "1f4b9": "chart-increasing-with-yen",
  "1f9c0": "cheese-wedge",
  "1f3c1": "chequered-flag",
  "1f352": "cherries",
  "1f338": "cherry-blossom",
  "265f": "chess-pawn",
  "1f330": "chestnut",
  "1f414": "chicken",
  "1f9d2": "child",
  "1f9d2-1f3ff": "child-dark-skin-tone",
  "1f9d2-1f3fb": "child-light-skin-tone",
  "1f9d2-1f3fe": "child-medium-dark-skin-tone",
  "1f9d2-1f3fc": "child-medium-light-skin-tone",
  "1f9d2-1f3fd": "child-medium-skin-tone",
  "1f6b8": "children-crossing",
  "1f43f": "chipmunk",
  "1f36b": "chocolate-bar",
  "1f962": "chopsticks",
  "1f384": "christmas-tree",
  "26ea": "church",
  "1f6ac": "cigarette",
  "1f3a6": "cinema",
  "24c2": "circled-m",
  "1f3aa": "circus-tent",
  "1f3d9": "cityscape",
  "1f306": "cityscape-at-dusk",
  "1f191": "cl-button",
  "1f5dc": "clamp",
  "1f3ac": "clapper-board",
  "1f44f": "clapping-hands",
  "1f44f-1f3ff": "clapping-hands-dark-skin-tone",
  "1f44f-1f3fb": "clapping-hands-light-skin-tone",
  "1f44f-1f3fe": "clapping-hands-medium-dark-skin-tone",
  "1f44f-1f3fc": "clapping-hands-medium-light-skin-tone",
  "1f44f-1f3fd": "clapping-hands-medium-skin-tone",
  "1f3db": "classical-building",
  "1f37b": "clinking-beer-mugs",
  "1f942": "clinking-glasses",
  "1f4cb": "clipboard",
  "1f503": "clockwise-vertical-arrows",
  "1f4d5": "closed-book",
  "1f4ea": "closed-mailbox-with-lowered-flag",
  "1f4eb": "closed-mailbox-with-raised-flag",
  "1f302": "closed-umbrella",
  "1f329": "cloud-with-lightning",
  "26c8": "cloud-with-lightning-and-rain",
  "1f327": "cloud-with-rain",
  "1f328": "cloud-with-snow",
  "1f921": "clown-face",
  "1f45d": "clutch-bag",
  "1f9e5": "coat",
  "1fab3": "cockroach",
  "1f378": "cocktail-glass",
  "1f965": "coconut",
  "26b0": "coffin",
  "1fa99": "coin",
  "1f976": "cold-face",
  "1f4a5": "collision",
  "1f9ed": "compass",
  "1f4bd": "computer-disk",
  "1f5b1": "computer-mouse",
  "1f38a": "confetti-ball",
  "1f616": "confounded-face",
  "1f615": "confused-face",
  "1f6a7": "construction",
  "1f477": "construction-worker",
  "1f477-1f3ff": "construction-worker-dark-skin-tone",
  "1f477-1f3fb": "construction-worker-light-skin-tone",
  "1f477-1f3fe": "construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc": "construction-worker-medium-light-skin-tone",
  "1f477-1f3fd": "construction-worker-medium-skin-tone",
  "1f39b": "control-knobs",
  "1f3ea": "convenience-store",
  "1f9d1-200d-1f373": "cook",
  "1f9d1-1f3ff-200d-1f373": "cook-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f373": "cook-light-skin-tone",
  "1f9d1-1f3fe-200d-1f373": "cook-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f373": "cook-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f373": "cook-medium-skin-tone",
  "1f35a": "cooked-rice",
  "1f36a": "cookie",
  "1f373": "cooking",
  "1f192": "cool-button",
  "00a9": "copyright",
  "1fab8": "coral",
  "1f6cb": "couch-and-lamp",
  "1f504": "counterclockwise-arrows-button",
  "1f491": "couple-with-heart",
  "1f491-1f3ff": "couple-with-heart-dark-skin-tone",
  "1f491-1f3fb": "couple-with-heart-light-skin-tone",
  "1f468-200d-2764-200d-1f468": "couple-with-heart-man-man",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f491-1f3fe": "couple-with-heart-medium-dark-skin-tone",
  "1f491-1f3fc": "couple-with-heart-medium-light-skin-tone",
  "1f491-1f3fd": "couple-with-heart-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f9d1-1f3fd": "couple-with-heart-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3ff": "couple-with-heart-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fb": "couple-with-heart-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fe": "couple-with-heart-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f9d1-1f3fc": "couple-with-heart-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f468": "couple-with-heart-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fd": "couple-with-heart-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3ff": "couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fb": "couple-with-heart-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fe": "couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f468-1f3fc": "couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f469": "couple-with-heart-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fd": "couple-with-heart-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3ff": "couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fb": "couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fe": "couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f469-1f3fc": "couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f404": "cow",
  "1f42e": "cow-face",
  "1f920": "cowboy-hat-face",
  "1f980": "crab",
  "1f58d": "crayon",
  "1f4b3": "credit-card",
  "1f319": "crescent-moon",
  "1f997": "cricket",
  "1f3cf": "cricket-game",
  "1f40a": "crocodile",
  "1f950": "croissant",
  "274c": "cross-mark",
  "274e": "cross-mark-button",
  "1f91e": "crossed-fingers",
  "1f91e-1f3ff": "crossed-fingers-dark-skin-tone",
  "1f91e-1f3fb": "crossed-fingers-light-skin-tone",
  "1f91e-1f3fe": "crossed-fingers-medium-dark-skin-tone",
  "1f91e-1f3fc": "crossed-fingers-medium-light-skin-tone",
  "1f91e-1f3fd": "crossed-fingers-medium-skin-tone",
  "1f38c": "crossed-flags",
  "1f451": "crown",
  "1fa7c": "crutch",
  "1f63f": "crying-cat",
  "1f622": "crying-face",
  "1f52e": "crystal-ball",
  "1f952": "cucumber",
  "1f964": "cup-with-straw",
  "1f9c1": "cupcake",
  "1f94c": "curling-stone",
  "27b0": "curly-loop",
  "1f4b1": "currency-exchange",
  "1f35b": "curry-rice",
  "1f36e": "custard",
  "1f6c3": "customs",
  "1f969": "cut-of-meat",
  "1f300": "cyclone",
  "1f5e1": "dagger",
  "1f361": "dango",
  "1f4a8": "dashing-away",
  "1f9cf-200d-2642": "deaf-man",
  "1f9cf-1f3ff-200d-2642": "deaf-man-dark-skin-tone",
  "1f9cf-1f3fb-200d-2642": "deaf-man-light-skin-tone",
  "1f9cf-1f3fe-200d-2642": "deaf-man-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2642": "deaf-man-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2642": "deaf-man-medium-skin-tone",
  "1f9cf": "deaf-person",
  "1f9cf-1f3ff": "deaf-person-dark-skin-tone",
  "1f9cf-1f3fb": "deaf-person-light-skin-tone",
  "1f9cf-1f3fe": "deaf-person-medium-dark-skin-tone",
  "1f9cf-1f3fc": "deaf-person-medium-light-skin-tone",
  "1f9cf-1f3fd": "deaf-person-medium-skin-tone",
  "1f9cf-200d-2640": "deaf-woman",
  "1f9cf-1f3ff-200d-2640": "deaf-woman-dark-skin-tone",
  "1f9cf-1f3fb-200d-2640": "deaf-woman-light-skin-tone",
  "1f9cf-1f3fe-200d-2640": "deaf-woman-medium-dark-skin-tone",
  "1f9cf-1f3fc-200d-2640": "deaf-woman-medium-light-skin-tone",
  "1f9cf-1f3fd-200d-2640": "deaf-woman-medium-skin-tone",
  "1f333": "deciduous-tree",
  "1f98c": "deer",
  "1f69a": "delivery-truck",
  "1f3ec": "department-store",
  "1f3da": "derelict-house",
  "1f3dc": "desert",
  "1f3dd": "desert-island",
  "1f5a5": "desktop-computer",
  "1f575": "detective",
  "1f575-1f3ff": "detective-dark-skin-tone",
  "1f575-1f3fb": "detective-light-skin-tone",
  "1f575-1f3fe": "detective-medium-dark-skin-tone",
  "1f575-1f3fc": "detective-medium-light-skin-tone",
  "1f575-1f3fd": "detective-medium-skin-tone",
  "1f4a0": "diamond-with-a-dot",
  "1f505": "dim-button",
  "1f61e": "disappointed-face",
  "1f978": "disguised-face",
  "1f93f": "diving-mask",
  "1fa94": "diya-lamp",
  "1f4ab": "dizzy",
  "1f9ec": "dna",
  "1f9a4": "dodo",
  "1f415": "dog",
  "1f436": "dog-face",
  "1f4b5": "dollar-banknote",
  "1f42c": "dolphin",
  "1facf": "donkey",
  "1f6aa": "door",
  "1fae5": "dotted-line-face",
  "1f52f": "dotted-six-pointed-star",
  "27bf": "double-curly-loop",
  "203c": "double-exclamation-mark",
  "1f369": "doughnut",
  "1f54a": "dove",
  "2b07": "down-arrow",
  "1f613": "downcast-face-with-sweat",
  "1f53d": "downwards-button",
  "1f409": "dragon",
  "1f432": "dragon-face",
  "1f457": "dress",
  "1f924": "drooling-face",
  "1fa78": "drop-of-blood",
  "1f4a7": "droplet",
  "1f941": "drum",
  "1f986": "duck",
  "1f95f": "dumpling",
  "1f4c0": "dvd",
  "1f4e7": "e-mail",
  "1f985": "eagle",
  "1f442": "ear",
  "1f442-1f3ff": "ear-dark-skin-tone",
  "1f442-1f3fb": "ear-light-skin-tone",
  "1f442-1f3fe": "ear-medium-dark-skin-tone",
  "1f442-1f3fc": "ear-medium-light-skin-tone",
  "1f442-1f3fd": "ear-medium-skin-tone",
  "1f33d": "ear-of-corn",
  "1f9bb": "ear-with-hearing-aid",
  "1f9bb-1f3ff": "ear-with-hearing-aid-dark-skin-tone",
  "1f9bb-1f3fb": "ear-with-hearing-aid-light-skin-tone",
  "1f9bb-1f3fe": "ear-with-hearing-aid-medium-dark-skin-tone",
  "1f9bb-1f3fc": "ear-with-hearing-aid-medium-light-skin-tone",
  "1f9bb-1f3fd": "ear-with-hearing-aid-medium-skin-tone",
  "1f95a": "egg",
  "1f346": "eggplant",
  "1f557": "eight-oclock",
  "1f563": "eight-thirty",
  "23cf": "eject-button",
  "1f50c": "electric-plug",
  "1f418": "elephant",
  "1f6d7": "elevator",
  "1f55a": "eleven-oclock",
  "1f566": "eleven-thirty",
  "1f9dd": "elf",
  "1f9dd-1f3ff": "elf-dark-skin-tone",
  "1f9dd-1f3fb": "elf-light-skin-tone",
  "1f9dd-1f3fe": "elf-medium-dark-skin-tone",
  "1f9dd-1f3fc": "elf-medium-light-skin-tone",
  "1f9dd-1f3fd": "elf-medium-skin-tone",
  "1fab9": "empty-nest",
  "1f51a": "end-arrow",
  "1f621": "enraged-face",
  "1f4e9": "envelope-with-arrow",
  "1f4b6": "euro-banknote",
  "1f332": "evergreen-tree",
  "1f411": "ewe",
  "1f92f": "exploding-head",
  "1f611": "expressionless-face",
  "1f441": "eye",
  "1f441-200d-1f5e8": "eye-in-speech-bubble",
  "1f440": "eyes",
  "1f618": "face-blowing-a-kiss",
  "1f62e-200d-1f4a8": "face-exhaling",
  "1f979": "face-holding-back-tears",
  "1f636-200d-1f32b": "face-in-clouds",
  "1f60b": "face-savoring-food",
  "1f631": "face-screaming-in-fear",
  "1f92e": "face-vomiting",
  "1f635": "face-with-crossed-out-eyes",
  "1fae4": "face-with-diagonal-mouth",
  "1f92d": "face-with-hand-over-mouth",
  "1f915": "face-with-head-bandage",
  "1f637": "face-with-medical-mask",
  "1f9d0": "face-with-monocle",
  "1fae2": "face-with-open-eyes-and-hand-over-mouth",
  "1f62e": "face-with-open-mouth",
  "1fae3": "face-with-peeking-eye",
  "1f928": "face-with-raised-eyebrow",
  "1f644": "face-with-rolling-eyes",
  "1f635-200d-1f4ab": "face-with-spiral-eyes",
  "1f624": "face-with-steam-from-nose",
  "1f92c": "face-with-symbols-on-mouth",
  "1f602": "face-with-tears-of-joy",
  "1f912": "face-with-thermometer",
  "1f61b": "face-with-tongue",
  "1f636": "face-without-mouth",
  "1f3ed": "factory",
  "1f9d1-200d-1f3ed": "factory-worker",
  "1f9d1-1f3ff-200d-1f3ed": "factory-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3ed": "factory-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3ed": "factory-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3ed": "factory-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3ed": "factory-worker-medium-skin-tone",
  "1f9da": "fairy",
  "1f9da-1f3ff": "fairy-dark-skin-tone",
  "1f9da-1f3fb": "fairy-light-skin-tone",
  "1f9da-1f3fe": "fairy-medium-dark-skin-tone",
  "1f9da-1f3fc": "fairy-medium-light-skin-tone",
  "1f9da-1f3fd": "fairy-medium-skin-tone",
  "1f9c6": "falafel",
  "1f342": "fallen-leaf",
  "1f46a": "family",
  "1f9d1-200d-1f9d1-200d-1f9d2": "family-adult-adult-child",
  "1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-adult-child-child",
  "1f9d1-200d-1f9d2": "family-adult-child",
  "1f9d1-200d-1f9d2-200d-1f9d2": "family-adult-child-child",
  "1f468-200d-1f466": "family-man-boy",
  "1f468-200d-1f466-200d-1f466": "family-man-boy-boy",
  "1f468-200d-1f467": "family-man-girl",
  "1f468-200d-1f467-200d-1f466": "family-man-girl-boy",
  "1f468-200d-1f467-200d-1f467": "family-man-girl-girl",
  "1f468-200d-1f468-200d-1f466": "family-man-man-boy",
  "1f468-200d-1f468-200d-1f466-200d-1f466": "family-man-man-boy-boy",
  "1f468-200d-1f468-200d-1f467": "family-man-man-girl",
  "1f468-200d-1f468-200d-1f467-200d-1f466": "family-man-man-girl-boy",
  "1f468-200d-1f468-200d-1f467-200d-1f467": "family-man-man-girl-girl",
  "1f468-200d-1f469-200d-1f466": "family-man-woman-boy",
  "1f468-200d-1f469-200d-1f466-200d-1f466": "family-man-woman-boy-boy",
  "1f468-200d-1f469-200d-1f467": "family-man-woman-girl",
  "1f468-200d-1f469-200d-1f467-200d-1f466": "family-man-woman-girl-boy",
  "1f468-200d-1f469-200d-1f467-200d-1f467": "family-man-woman-girl-girl",
  "1f469-200d-1f466": "family-woman-boy",
  "1f469-200d-1f466-200d-1f466": "family-woman-boy-boy",
  "1f469-200d-1f467": "family-woman-girl",
  "1f469-200d-1f467-200d-1f466": "family-woman-girl-boy",
  "1f469-200d-1f467-200d-1f467": "family-woman-girl-girl",
  "1f469-200d-1f469-200d-1f466": "family-woman-woman-boy",
  "1f469-200d-1f469-200d-1f466-200d-1f466": "family-woman-woman-boy-boy",
  "1f469-200d-1f469-200d-1f467": "family-woman-woman-girl",
  "1f469-200d-1f469-200d-1f467-200d-1f466": "family-woman-woman-girl-boy",
  "1f469-200d-1f469-200d-1f467-200d-1f467": "family-woman-woman-girl-girl",
  "1f9d1-200d-1f33e": "farmer",
  "1f9d1-1f3ff-200d-1f33e": "farmer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f33e": "farmer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f33e": "farmer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f33e": "farmer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f33e": "farmer-medium-skin-tone",
  "23ec": "fast-down-button",
  "23e9": "fast-forward-button",
  "23ea": "fast-reverse-button",
  "23eb": "fast-up-button",
  "1f4e0": "fax-machine",
  "1f628": "fearful-face",
  "1fab6": "feather",
  "1f3a1": "ferris-wheel",
  "26f4": "ferry",
  "1f3d1": "field-hockey",
  "1f5c4": "file-cabinet",
  "1f4c1": "file-folder",
  "1f39e": "film-frames",
  "1f4fd": "film-projector",
  "1f525": "fire",
  "1f692": "fire-engine",
  "1f9ef": "fire-extinguisher",
  "1f9e8": "firecracker",
  "1f9d1-200d-1f692": "firefighter",
  "1f9d1-1f3ff-200d-1f692": "firefighter-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f692": "firefighter-light-skin-tone",
  "1f9d1-1f3fe-200d-1f692": "firefighter-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f692": "firefighter-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f692": "firefighter-medium-skin-tone",
  "1f386": "fireworks",
  "1f313": "first-quarter-moon",
  "1f31b": "first-quarter-moon-face",
  "1f41f": "fish",
  "1f365": "fish-cake-with-swirl",
  "1f3a3": "fishing-pole",
  "1f554": "five-oclock",
  "1f560": "five-thirty",
  "26f3": "flag-in-hole",
  "1f9a9": "flamingo",
  "1f526": "flashlight",
  "1f97f": "flat-shoe",
  "1fad3": "flatbread",
  "269c": "fleur-de-lis",
  "1f4aa": "flexed-biceps",
  "1f4aa-1f3ff": "flexed-biceps-dark-skin-tone",
  "1f4aa-1f3fb": "flexed-biceps-light-skin-tone",
  "1f4aa-1f3fe": "flexed-biceps-medium-dark-skin-tone",
  "1f4aa-1f3fc": "flexed-biceps-medium-light-skin-tone",
  "1f4aa-1f3fd": "flexed-biceps-medium-skin-tone",
  "1f4be": "floppy-disk",
  "1f3b4": "flower-playing-cards",
  "1f633": "flushed-face",
  "1fa88": "flute",
  "1fab0": "fly",
  "1f94f": "flying-disc",
  "1f6f8": "flying-saucer",
  "1f32b": "fog",
  "1f301": "foggy",
  "1f64f": "folded-hands",
  "1f64f-1f3ff": "folded-hands-dark-skin-tone",
  "1f64f-1f3fb": "folded-hands-light-skin-tone",
  "1f64f-1f3fe": "folded-hands-medium-dark-skin-tone",
  "1f64f-1f3fc": "folded-hands-medium-light-skin-tone",
  "1f64f-1f3fd": "folded-hands-medium-skin-tone",
  "1faad": "folding-hand-fan",
  "1fad5": "fondue",
  "1f9b6": "foot",
  "1f9b6-1f3ff": "foot-dark-skin-tone",
  "1f9b6-1f3fb": "foot-light-skin-tone",
  "1f9b6-1f3fe": "foot-medium-dark-skin-tone",
  "1f9b6-1f3fc": "foot-medium-light-skin-tone",
  "1f9b6-1f3fd": "foot-medium-skin-tone",
  "1f463": "footprints",
  "1f374": "fork-and-knife",
  "1f37d": "fork-and-knife-with-plate",
  "1f960": "fortune-cookie",
  "26f2": "fountain",
  "1f58b": "fountain-pen",
  "1f340": "four-leaf-clover",
  "1f553": "four-oclock",
  "1f55f": "four-thirty",
  "1f98a": "fox",
  "1f5bc": "framed-picture",
  "1f193": "free-button",
  "1f35f": "french-fries",
  "1f364": "fried-shrimp",
  "1f438": "frog",
  "1f425": "front-facing-baby-chick",
  "1f626": "frowning-face-with-open-mouth",
  "26fd": "fuel-pump",
  "1f315": "full-moon",
  "1f31d": "full-moon-face",
  "26b1": "funeral-urn",
  "1f3b2": "game-die",
  "1f9c4": "garlic",
  "1f48e": "gem-stone",
  "264a": "gemini",
  "1f9de": "genie",
  "1f47b": "ghost",
  "1fada": "ginger-root",
  "1f992": "giraffe",
  "1f467": "girl",
  "1f467-1f3ff": "girl-dark-skin-tone",
  "1f467-1f3fb": "girl-light-skin-tone",
  "1f467-1f3fe": "girl-medium-dark-skin-tone",
  "1f467-1f3fc": "girl-medium-light-skin-tone",
  "1f467-1f3fd": "girl-medium-skin-tone",
  "1f95b": "glass-of-milk",
  "1f453": "glasses",
  "1f30e": "globe-showing-americas",
  "1f30f": "globe-showing-asia-australia",
  "1f30d": "globe-showing-europe-africa",
  "1f310": "globe-with-meridians",
  "1f9e4": "gloves",
  "1f31f": "glowing-star",
  "1f945": "goal-net",
  "1f410": "goat",
  "1f47a": "goblin",
  "1f97d": "goggles",
  "1fabf": "goose",
  "1f98d": "gorilla",
  "1f393": "graduation-cap",
  "1f347": "grapes",
  "1f34f": "green-apple",
  "1f4d7": "green-book",
  "1f7e2": "green-circle",
  "1f49a": "green-heart",
  "1f957": "green-salad",
  "1f7e9": "green-square",
  "1fa76": "grey-heart",
  "1f62c": "grimacing-face",
  "1f63a": "grinning-cat",
  "1f638": "grinning-cat-with-smiling-eyes",
  "1f600": "grinning-face",
  "1f603": "grinning-face-with-big-eyes",
  "1f604": "grinning-face-with-smiling-eyes",
  "1f605": "grinning-face-with-sweat",
  "1f606": "grinning-squinting-face",
  "1f497": "growing-heart",
  "1f482": "guard",
  "1f482-1f3ff": "guard-dark-skin-tone",
  "1f482-1f3fb": "guard-light-skin-tone",
  "1f482-1f3fe": "guard-medium-dark-skin-tone",
  "1f482-1f3fc": "guard-medium-light-skin-tone",
  "1f482-1f3fd": "guard-medium-skin-tone",
  "1f9ae": "guide-dog",
  "1f3b8": "guitar",
  "1faae": "hair-pick",
  "1f354": "hamburger",
  "1f528": "hammer",
  "1f6e0": "hammer-and-wrench",
  "1faac": "hamsa",
  "1f439": "hamster",
  "1f590": "hand-with-fingers-splayed",
  "1f590-1f3ff": "hand-with-fingers-splayed-dark-skin-tone",
  "1f590-1f3fb": "hand-with-fingers-splayed-light-skin-tone",
  "1f590-1f3fe": "hand-with-fingers-splayed-medium-dark-skin-tone",
  "1f590-1f3fc": "hand-with-fingers-splayed-medium-light-skin-tone",
  "1f590-1f3fd": "hand-with-fingers-splayed-medium-skin-tone",
  "1faf0": "hand-with-index-finger-and-thumb-crossed",
  "1faf0-1f3ff": "hand-with-index-finger-and-thumb-crossed-dark-skin-tone",
  "1faf0-1f3fb": "hand-with-index-finger-and-thumb-crossed-light-skin-tone",
  "1faf0-1f3fe": "hand-with-index-finger-and-thumb-crossed-medium-dark-skin-tone",
  "1faf0-1f3fc": "hand-with-index-finger-and-thumb-crossed-medium-light-skin-tone",
  "1faf0-1f3fd": "hand-with-index-finger-and-thumb-crossed-medium-skin-tone",
  "1f45c": "handbag",
  "1f91d": "handshake",
  "1f91d-1f3ff": "handshake-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fb": "handshake-dark-skin-tone-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fe": "handshake-dark-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fc": "handshake-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3ff-200d-1faf2-1f3fd": "handshake-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fb": "handshake-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3ff": "handshake-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fe": "handshake-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fc": "handshake-light-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fb-200d-1faf2-1f3fd": "handshake-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fe": "handshake-medium-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3ff": "handshake-medium-dark-skin-tone-dark-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fb": "handshake-medium-dark-skin-tone-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fc": "handshake-medium-dark-skin-tone-medium-light-skin-tone",
  "1faf1-1f3fe-200d-1faf2-1f3fd": "handshake-medium-dark-skin-tone-medium-skin-tone",
  "1f91d-1f3fc": "handshake-medium-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3ff": "handshake-medium-light-skin-tone-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fb": "handshake-medium-light-skin-tone-light-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fe": "handshake-medium-light-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fc-200d-1faf2-1f3fd": "handshake-medium-light-skin-tone-medium-skin-tone",
  "1f91d-1f3fd": "handshake-medium-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3ff": "handshake-medium-skin-tone-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fb": "handshake-medium-skin-tone-light-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fe": "handshake-medium-skin-tone-medium-dark-skin-tone",
  "1faf1-1f3fd-200d-1faf2-1f3fc": "handshake-medium-skin-tone-medium-light-skin-tone",
  "1f423": "hatching-chick",
  "1f642-200d-2194": "head-shaking-horizontally",
  "1f642-200d-2195": "head-shaking-vertically",
  "1f3a7": "headphone",
  "1faa6": "headstone",
  "1f9d1-200d-2695": "health-worker",
  "1f9d1-1f3ff-200d-2695": "health-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-2695": "health-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-2695": "health-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2695": "health-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2695": "health-worker-medium-skin-tone",
  "1f649": "hear-no-evil-monkey",
  "1f49f": "heart-decoration",
  "1faf6": "heart-hands",
  "1faf6-1f3ff": "heart-hands-dark-skin-tone",
  "1faf6-1f3fb": "heart-hands-light-skin-tone",
  "1faf6-1f3fe": "heart-hands-medium-dark-skin-tone",
  "1faf6-1f3fc": "heart-hands-medium-light-skin-tone",
  "1faf6-1f3fd": "heart-hands-medium-skin-tone",
  "2764-200d-1f525": "heart-on-fire",
  "1f498": "heart-with-arrow",
  "1f49d": "heart-with-ribbon",
  "1f4b2": "heavy-dollar-sign",
  "1f7f0": "heavy-equals-sign",
  "1f994": "hedgehog",
  "1f681": "helicopter",
  "1f33f": "herb",
  "1f33a": "hibiscus",
  "1f460": "high-heeled-shoe",
  "1f684": "high-speed-train",
  "26a1": "high-voltage",
  "1f97e": "hiking-boot",
  "1f6d5": "hindu-temple",
  "1f99b": "hippopotamus",
  "1f573": "hole",
  "2b55": "hollow-red-circle",
  "1f36f": "honey-pot",
  "1f41d": "honeybee",
  "1fa9d": "hook",
  "1f6a5": "horizontal-traffic-light",
  "1f40e": "horse",
  "1f434": "horse-face",
  "1f3c7": "horse-racing",
  "1f3c7-1f3ff": "horse-racing-dark-skin-tone",
  "1f3c7-1f3fb": "horse-racing-light-skin-tone",
  "1f3c7-1f3fe": "horse-racing-medium-dark-skin-tone",
  "1f3c7-1f3fc": "horse-racing-medium-light-skin-tone",
  "1f3c7-1f3fd": "horse-racing-medium-skin-tone",
  "1f3e5": "hospital",
  "1f32d": "hot-dog",
  "1f975": "hot-face",
  "1f336": "hot-pepper",
  "1f3e8": "hotel",
  "231b": "hourglass-done",
  "23f3": "hourglass-not-done",
  "1f3e0": "house",
  "1f3e1": "house-with-garden",
  "1f3d8": "houses",
  "1f4af": "hundred-points",
  "1f62f": "hushed-face",
  "1f6d6": "hut",
  "1fabb": "hyacinth",
  "1f9ca": "ice",
  "1f368": "ice-cream",
  "1f3d2": "ice-hockey",
  "26f8": "ice-skate",
  "1f194": "id-button",
  "1faaa": "identification-card",
  "1f4e5": "inbox-tray",
  "1f4e8": "incoming-envelope",
  "1faf5": "index-pointing-at-the-viewer",
  "1faf5-1f3ff": "index-pointing-at-the-viewer-dark-skin-tone",
  "1faf5-1f3fb": "index-pointing-at-the-viewer-light-skin-tone",
  "1faf5-1f3fe": "index-pointing-at-the-viewer-medium-dark-skin-tone",
  "1faf5-1f3fc": "index-pointing-at-the-viewer-medium-light-skin-tone",
  "1faf5-1f3fd": "index-pointing-at-the-viewer-medium-skin-tone",
  "261d": "index-pointing-up",
  "261d-1f3ff": "index-pointing-up-dark-skin-tone",
  "261d-1f3fb": "index-pointing-up-light-skin-tone",
  "261d-1f3fe": "index-pointing-up-medium-dark-skin-tone",
  "261d-1f3fc": "index-pointing-up-medium-light-skin-tone",
  "261d-1f3fd": "index-pointing-up-medium-skin-tone",
  "267e": "infinity",
  "1f524": "input-latin-letters",
  "1f521": "input-latin-lowercase",
  "1f520": "input-latin-uppercase",
  "1f522": "input-numbers",
  "1f523": "input-symbols",
  "1f383": "jack-o-lantern",
  "1f251": "japanese-acceptable-button",
  "1f238": "japanese-application-button",
  "1f250": "japanese-bargain-button",
  "1f3ef": "japanese-castle",
  "1f239": "japanese-discount-button",
  "1f38e": "japanese-dolls",
  "1f21a": "japanese-free-of-charge-button",
  "1f201": "japanese-here-button",
  "1f237": "japanese-monthly-amount-button",
  "1f235": "japanese-no-vacancy-button",
  "1f236": "japanese-not-free-of-charge-button",
  "1f23a": "japanese-open-for-business-button",
  "1f234": "japanese-passing-grade-button",
  "1f3e3": "japanese-post-office",
  "1f232": "japanese-prohibited-button",
  "1f22f": "japanese-reserved-button",
  "1f202": "japanese-service-charge-button",
  "1f530": "japanese-symbol-for-beginner",
  "1f233": "japanese-vacancy-button",
  "1fad9": "jar",
  "1f456": "jeans",
  "1fabc": "jellyfish",
  "1f0cf": "joker",
  "1f579": "joystick",
  "1f9d1-200d-2696": "judge",
  "1f9d1-1f3ff-200d-2696": "judge-dark-skin-tone",
  "1f9d1-1f3fb-200d-2696": "judge-light-skin-tone",
  "1f9d1-1f3fe-200d-2696": "judge-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2696": "judge-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2696": "judge-medium-skin-tone",
  "1f54b": "kaaba",
  "1f998": "kangaroo",
  "1f511": "key",
  "20e3": "keycap",
  "0030-20e3": "keycap-0",
  "0031-20e3": "keycap-1",
  "1f51f": "keycap-10",
  "0032-20e3": "keycap-2",
  "0033-20e3": "keycap-3",
  "0034-20e3": "keycap-4",
  "0035-20e3": "keycap-5",
  "0036-20e3": "keycap-6",
  "0037-20e3": "keycap-7",
  "0038-20e3": "keycap-8",
  "0039-20e3": "keycap-9",
  "002a-20e3": "keycap-asterisk",
  "0023-20e3": "keycap-pound",
  "1faaf": "khanda",
  "1f6f4": "kick-scooter",
  "1f458": "kimono",
  "1f48f": "kiss",
  "1f48f-1f3ff": "kiss-dark-skin-tone",
  "1f48f-1f3fb": "kiss-light-skin-tone",
  "1f468-200d-2764-200d-1f48b-200d-1f468": "kiss-man-man",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-light-skin-tone-medium-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-dark-skin-tone-medium-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-light-skin-tone-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-man-man-medium-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-man-man-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-man-man-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-man-man-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-man-man-medium-skin-tone-medium-light-skin-tone",
  "1f48b": "kiss-mark",
  "1f48f-1f3fe": "kiss-medium-dark-skin-tone",
  "1f48f-1f3fc": "kiss-medium-light-skin-tone",
  "1f48f-1f3fd": "kiss-medium-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2764-200d-1f48b-200d-1f9d1-1f3fd": "kiss-person-person-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3ff": "kiss-person-person-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fb": "kiss-person-person-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fe": "kiss-person-person-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-2764-200d-1f48b-200d-1f9d1-1f3fc": "kiss-person-person-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f468": "kiss-woman-man",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fd": "kiss-woman-man-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3ff": "kiss-woman-man-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fb": "kiss-woman-man-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fe": "kiss-woman-man-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f468-1f3fc": "kiss-woman-man-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-2764-200d-1f48b-200d-1f469": "kiss-woman-woman",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-light-skin-tone-medium-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-light-skin-tone-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fd": "kiss-woman-woman-medium-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3ff": "kiss-woman-woman-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fb": "kiss-woman-woman-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fe": "kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-2764-200d-1f48b-200d-1f469-1f3fc": "kiss-woman-woman-medium-skin-tone-medium-light-skin-tone",
  "1f63d": "kissing-cat",
  "1f617": "kissing-face",
  "1f61a": "kissing-face-with-closed-eyes",
  "1f619": "kissing-face-with-smiling-eyes",
  "1f52a": "kitchen-knife",
  "1fa81": "kite",
  "1f95d": "kiwi-fruit",
  "1faa2": "knot",
  "1f428": "koala",
  "1f97c": "lab-coat",
  "1f3f7": "label",
  "1f94d": "lacrosse",
  "1fa9c": "ladder",
  "1f41e": "lady-beetle",
  "1f4bb": "laptop",
  "1f537": "large-blue-diamond",
  "1f536": "large-orange-diamond",
  "1f317": "last-quarter-moon",
  "1f31c": "last-quarter-moon-face",
  "23ee": "last-track-button",
  "271d": "latin-cross",
  "1f343": "leaf-fluttering-in-wind",
  "1f96c": "leafy-green",
  "1f4d2": "ledger",
  "2b05": "left-arrow",
  "21aa": "left-arrow-curving-right",
  "1f91b": "left-facing-fist",
  "1f91b-1f3ff": "left-facing-fist-dark-skin-tone",
  "1f91b-1f3fb": "left-facing-fist-light-skin-tone",
  "1f91b-1f3fe": "left-facing-fist-medium-dark-skin-tone",
  "1f91b-1f3fc": "left-facing-fist-medium-light-skin-tone",
  "1f91b-1f3fd": "left-facing-fist-medium-skin-tone",
  "1f6c5": "left-luggage",
  "1f5e8": "left-speech-bubble",
  "1faf2": "leftwards-hand",
  "1faf2-1f3ff": "leftwards-hand-dark-skin-tone",
  "1faf2-1f3fb": "leftwards-hand-light-skin-tone",
  "1faf2-1f3fe": "leftwards-hand-medium-dark-skin-tone",
  "1faf2-1f3fc": "leftwards-hand-medium-light-skin-tone",
  "1faf2-1f3fd": "leftwards-hand-medium-skin-tone",
  "1faf7": "leftwards-pushing-hand",
  "1faf7-1f3ff": "leftwards-pushing-hand-dark-skin-tone",
  "1faf7-1f3fb": "leftwards-pushing-hand-light-skin-tone",
  "1faf7-1f3fe": "leftwards-pushing-hand-medium-dark-skin-tone",
  "1faf7-1f3fc": "leftwards-pushing-hand-medium-light-skin-tone",
  "1faf7-1f3fd": "leftwards-pushing-hand-medium-skin-tone",
  "1f9b5": "leg",
  "1f9b5-1f3ff": "leg-dark-skin-tone",
  "1f9b5-1f3fb": "leg-light-skin-tone",
  "1f9b5-1f3fe": "leg-medium-dark-skin-tone",
  "1f9b5-1f3fc": "leg-medium-light-skin-tone",
  "1f9b5-1f3fd": "leg-medium-skin-tone",
  "1f34b": "lemon",
  "264c": "leo",
  "1f406": "leopard",
  "1f1e6": "letter-a",
  "1f1e7": "letter-b",
  "1f1e8": "letter-c",
  "1f1e9": "letter-d",
  "1f1ea": "letter-e",
  "1f1eb": "letter-f",
  "1f1ec": "letter-g",
  "1f1ed": "letter-h",
  "1f1ee": "letter-i",
  "1f1ef": "letter-j",
  "1f1f0": "letter-k",
  "1f1f1": "letter-l",
  "1f1f2": "letter-m",
  "1f1f3": "letter-n",
  "1f1f4": "letter-o",
  "1f1f5": "letter-p",
  "1f1f6": "letter-q",
  "1f1f7": "letter-r",
  "1f1f8": "letter-s",
  "1f1f9": "letter-t",
  "1f1fa": "letter-u",
  "1f1fb": "letter-v",
  "1f1fc": "letter-w",
  "1f1fd": "letter-x",
  "1f1fe": "letter-y",
  "1f1ff": "letter-z",
  "1f39a": "level-slider",
  "264e": "libra",
  "1fa75": "light-blue-heart",
  "1f4a1": "light-bulb",
  "1f688": "light-rail",
  "1f34b-200d-1f7e9": "lime",
  "1f517": "link",
  "1f587": "linked-paperclips",
  "1f981": "lion",
  "1f484": "lipstick",
  "1f6ae": "litter-in-bin-sign",
  "1f98e": "lizard",
  "1f999": "llama",
  "1f99e": "lobster",
  "1f512": "locked",
  "1f510": "locked-with-key",
  "1f50f": "locked-with-pen",
  "1f682": "locomotive",
  "1f36d": "lollipop",
  "1fa98": "long-drum",
  "1f9f4": "lotion-bottle",
  "1fab7": "lotus",
  "1f62d": "loudly-crying-face",
  "1f4e2": "loudspeaker",
  "1f3e9": "love-hotel",
  "1f48c": "love-letter",
  "1f91f": "love-you-gesture",
  "1f91f-1f3ff": "love-you-gesture-dark-skin-tone",
  "1f91f-1f3fb": "love-you-gesture-light-skin-tone",
  "1f91f-1f3fe": "love-you-gesture-medium-dark-skin-tone",
  "1f91f-1f3fc": "love-you-gesture-medium-light-skin-tone",
  "1f91f-1f3fd": "love-you-gesture-medium-skin-tone",
  "1faab": "low-battery",
  "1f9f3": "luggage",
  "1fac1": "lungs",
  "1f925": "lying-face",
  "1f9d9": "mage",
  "1f9d9-1f3ff": "mage-dark-skin-tone",
  "1f9d9-1f3fb": "mage-light-skin-tone",
  "1f9d9-1f3fe": "mage-medium-dark-skin-tone",
  "1f9d9-1f3fc": "mage-medium-light-skin-tone",
  "1f9d9-1f3fd": "mage-medium-skin-tone",
  "1fa84": "magic-wand",
  "1f9f2": "magnet",
  "1f50d": "magnifying-glass-tilted-left",
  "1f50e": "magnifying-glass-tilted-right",
  "1f004": "mahjong-red-dragon",
  "1f9a3": "mammoth",
  "1f468": "man",
  "1f468-200d-1f3a8": "man-artist",
  "1f468-1f3ff-200d-1f3a8": "man-artist-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a8": "man-artist-light-skin-tone",
  "1f468-1f3fe-200d-1f3a8": "man-artist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a8": "man-artist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a8": "man-artist-medium-skin-tone",
  "1f468-200d-1f680": "man-astronaut",
  "1f468-1f3ff-200d-1f680": "man-astronaut-dark-skin-tone",
  "1f468-1f3fb-200d-1f680": "man-astronaut-light-skin-tone",
  "1f468-1f3fe-200d-1f680": "man-astronaut-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f680": "man-astronaut-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f680": "man-astronaut-medium-skin-tone",
  "1f468-200d-1f9b2": "man-bald",
  "1f9d4-200d-2642": "man-beard",
  "1f6b4-200d-2642": "man-biking",
  "1f6b4-1f3ff-200d-2642": "man-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2642": "man-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2642": "man-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2642": "man-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2642": "man-biking-medium-skin-tone",
  "1f471-200d-2642": "man-blond-hair",
  "26f9-200d-2642": "man-bouncing-ball",
  "26f9-1f3ff-200d-2642": "man-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2642": "man-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2642": "man-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2642": "man-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2642": "man-bouncing-ball-medium-skin-tone",
  "1f647-200d-2642": "man-bowing",
  "1f647-1f3ff-200d-2642": "man-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2642": "man-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2642": "man-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2642": "man-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2642": "man-bowing-medium-skin-tone",
  "1f938-200d-2642": "man-cartwheeling",
  "1f938-1f3ff-200d-2642": "man-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2642": "man-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2642": "man-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2642": "man-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2642": "man-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2642": "man-climbing",
  "1f9d7-1f3ff-200d-2642": "man-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2642": "man-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2642": "man-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2642": "man-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2642": "man-climbing-medium-skin-tone",
  "1f477-200d-2642": "man-construction-worker",
  "1f477-1f3ff-200d-2642": "man-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2642": "man-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2642": "man-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2642": "man-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2642": "man-construction-worker-medium-skin-tone",
  "1f468-200d-1f373": "man-cook",
  "1f468-1f3ff-200d-1f373": "man-cook-dark-skin-tone",
  "1f468-1f3fb-200d-1f373": "man-cook-light-skin-tone",
  "1f468-1f3fe-200d-1f373": "man-cook-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f373": "man-cook-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f373": "man-cook-medium-skin-tone",
  "1f468-200d-1f9b1": "man-curly-hair",
  "1f57a": "man-dancing",
  "1f57a-1f3ff": "man-dancing-dark-skin-tone",
  "1f57a-1f3fb": "man-dancing-light-skin-tone",
  "1f57a-1f3fe": "man-dancing-medium-dark-skin-tone",
  "1f57a-1f3fc": "man-dancing-medium-light-skin-tone",
  "1f57a-1f3fd": "man-dancing-medium-skin-tone",
  "1f468-1f3ff": "man-dark-skin-tone",
  "1f468-1f3ff-200d-1f9b2": "man-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2642": "man-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2642": "man-dark-skin-tone-blond-hair",
  "1f468-1f3ff-200d-1f9b1": "man-dark-skin-tone-curly-hair",
  "1f468-1f3ff-200d-1f9b0": "man-dark-skin-tone-red-hair",
  "1f468-1f3ff-200d-1f9b3": "man-dark-skin-tone-white-hair",
  "1f575-200d-2642": "man-detective",
  "1f575-1f3ff-200d-2642": "man-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2642": "man-detective-light-skin-tone",
  "1f575-1f3fe-200d-2642": "man-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2642": "man-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2642": "man-detective-medium-skin-tone",
  "1f9dd-200d-2642": "man-elf",
  "1f9dd-1f3ff-200d-2642": "man-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2642": "man-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2642": "man-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2642": "man-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2642": "man-elf-medium-skin-tone",
  "1f926-200d-2642": "man-facepalming",
  "1f926-1f3ff-200d-2642": "man-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2642": "man-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2642": "man-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2642": "man-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2642": "man-facepalming-medium-skin-tone",
  "1f468-200d-1f3ed": "man-factory-worker",
  "1f468-1f3ff-200d-1f3ed": "man-factory-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f3ed": "man-factory-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f3ed": "man-factory-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3ed": "man-factory-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3ed": "man-factory-worker-medium-skin-tone",
  "1f9da-200d-2642": "man-fairy",
  "1f9da-1f3ff-200d-2642": "man-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2642": "man-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2642": "man-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2642": "man-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2642": "man-fairy-medium-skin-tone",
  "1f468-200d-1f33e": "man-farmer",
  "1f468-1f3ff-200d-1f33e": "man-farmer-dark-skin-tone",
  "1f468-1f3fb-200d-1f33e": "man-farmer-light-skin-tone",
  "1f468-1f3fe-200d-1f33e": "man-farmer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f33e": "man-farmer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f33e": "man-farmer-medium-skin-tone",
  "1f468-200d-1f37c": "man-feeding-baby",
  "1f468-1f3ff-200d-1f37c": "man-feeding-baby-dark-skin-tone",
  "1f468-1f3fb-200d-1f37c": "man-feeding-baby-light-skin-tone",
  "1f468-1f3fe-200d-1f37c": "man-feeding-baby-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f37c": "man-feeding-baby-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f37c": "man-feeding-baby-medium-skin-tone",
  "1f468-200d-1f692": "man-firefighter",
  "1f468-1f3ff-200d-1f692": "man-firefighter-dark-skin-tone",
  "1f468-1f3fb-200d-1f692": "man-firefighter-light-skin-tone",
  "1f468-1f3fe-200d-1f692": "man-firefighter-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f692": "man-firefighter-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f692": "man-firefighter-medium-skin-tone",
  "1f64d-200d-2642": "man-frowning",
  "1f64d-1f3ff-200d-2642": "man-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2642": "man-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2642": "man-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2642": "man-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2642": "man-frowning-medium-skin-tone",
  "1f9de-200d-2642": "man-genie",
  "1f645-200d-2642": "man-gesturing-no",
  "1f645-1f3ff-200d-2642": "man-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2642": "man-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2642": "man-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2642": "man-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2642": "man-gesturing-no-medium-skin-tone",
  "1f646-200d-2642": "man-gesturing-ok",
  "1f646-1f3ff-200d-2642": "man-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2642": "man-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2642": "man-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2642": "man-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2642": "man-gesturing-ok-medium-skin-tone",
  "1f487-200d-2642": "man-getting-haircut",
  "1f487-1f3ff-200d-2642": "man-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2642": "man-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2642": "man-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2642": "man-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2642": "man-getting-haircut-medium-skin-tone",
  "1f486-200d-2642": "man-getting-massage",
  "1f486-1f3ff-200d-2642": "man-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2642": "man-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2642": "man-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2642": "man-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2642": "man-getting-massage-medium-skin-tone",
  "1f3cc-200d-2642": "man-golfing",
  "1f3cc-1f3ff-200d-2642": "man-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2642": "man-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2642": "man-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2642": "man-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2642": "man-golfing-medium-skin-tone",
  "1f482-200d-2642": "man-guard",
  "1f482-1f3ff-200d-2642": "man-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2642": "man-guard-light-skin-tone",
  "1f482-1f3fe-200d-2642": "man-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2642": "man-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2642": "man-guard-medium-skin-tone",
  "1f468-200d-2695": "man-health-worker",
  "1f468-1f3ff-200d-2695": "man-health-worker-dark-skin-tone",
  "1f468-1f3fb-200d-2695": "man-health-worker-light-skin-tone",
  "1f468-1f3fe-200d-2695": "man-health-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2695": "man-health-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-2695": "man-health-worker-medium-skin-tone",
  "1f9d8-200d-2642": "man-in-lotus-position",
  "1f9d8-1f3ff-200d-2642": "man-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2642": "man-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2642": "man-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2642": "man-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2642": "man-in-lotus-position-medium-skin-tone",
  "1f468-200d-1f9bd": "man-in-manual-wheelchair",
  "1f468-1f3ff-200d-1f9bd": "man-in-manual-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd-200d-27a1": "man-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bd": "man-in-manual-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bd": "man-in-manual-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bd": "man-in-manual-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bd": "man-in-manual-wheelchair-medium-skin-tone",
  "1f468-200d-1f9bc": "man-in-motorized-wheelchair",
  "1f468-1f3ff-200d-1f9bc": "man-in-motorized-wheelchair-dark-skin-tone",
  "1f468-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right",
  "1f468-1f3ff-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc-200d-27a1": "man-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9bc": "man-in-motorized-wheelchair-light-skin-tone",
  "1f468-1f3fe-200d-1f9bc": "man-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9bc": "man-in-motorized-wheelchair-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9bc": "man-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2642": "man-in-steamy-room",
  "1f9d6-1f3ff-200d-2642": "man-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2642": "man-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2642": "man-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2642": "man-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2642": "man-in-steamy-room-medium-skin-tone",
  "1f935-200d-2642": "man-in-tuxedo",
  "1f935-1f3ff-200d-2642": "man-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2642": "man-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2642": "man-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2642": "man-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2642": "man-in-tuxedo-medium-skin-tone",
  "1f468-200d-2696": "man-judge",
  "1f468-1f3ff-200d-2696": "man-judge-dark-skin-tone",
  "1f468-1f3fb-200d-2696": "man-judge-light-skin-tone",
  "1f468-1f3fe-200d-2696": "man-judge-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2696": "man-judge-medium-light-skin-tone",
  "1f468-1f3fd-200d-2696": "man-judge-medium-skin-tone",
  "1f939-200d-2642": "man-juggling",
  "1f939-1f3ff-200d-2642": "man-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2642": "man-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2642": "man-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2642": "man-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2642": "man-juggling-medium-skin-tone",
  "1f9ce-200d-2642": "man-kneeling",
  "1f9ce-1f3ff-200d-2642": "man-kneeling-dark-skin-tone",
  "1f9ce-200d-2642-200d-27a1": "man-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2642-200d-27a1": "man-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2642-200d-27a1": "man-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642-200d-27a1": "man-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2642": "man-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2642": "man-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2642": "man-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2642": "man-kneeling-medium-skin-tone",
  "1f3cb-200d-2642": "man-lifting-weights",
  "1f3cb-1f3ff-200d-2642": "man-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2642": "man-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2642": "man-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2642": "man-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2642": "man-lifting-weights-medium-skin-tone",
  "1f468-1f3fb": "man-light-skin-tone",
  "1f468-1f3fb-200d-1f9b2": "man-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2642": "man-light-skin-tone-beard",
  "1f471-1f3fb-200d-2642": "man-light-skin-tone-blond-hair",
  "1f468-1f3fb-200d-1f9b1": "man-light-skin-tone-curly-hair",
  "1f468-1f3fb-200d-1f9b0": "man-light-skin-tone-red-hair",
  "1f468-1f3fb-200d-1f9b3": "man-light-skin-tone-white-hair",
  "1f9d9-200d-2642": "man-mage",
  "1f9d9-1f3ff-200d-2642": "man-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2642": "man-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2642": "man-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2642": "man-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2642": "man-mage-medium-skin-tone",
  "1f468-200d-1f527": "man-mechanic",
  "1f468-1f3ff-200d-1f527": "man-mechanic-dark-skin-tone",
  "1f468-1f3fb-200d-1f527": "man-mechanic-light-skin-tone",
  "1f468-1f3fe-200d-1f527": "man-mechanic-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f527": "man-mechanic-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f527": "man-mechanic-medium-skin-tone",
  "1f468-1f3fe": "man-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f9b2": "man-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2642": "man-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2642": "man-medium-dark-skin-tone-blond-hair",
  "1f468-1f3fe-200d-1f9b1": "man-medium-dark-skin-tone-curly-hair",
  "1f468-1f3fe-200d-1f9b0": "man-medium-dark-skin-tone-red-hair",
  "1f468-1f3fe-200d-1f9b3": "man-medium-dark-skin-tone-white-hair",
  "1f468-1f3fc": "man-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f9b2": "man-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2642": "man-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2642": "man-medium-light-skin-tone-blond-hair",
  "1f468-1f3fc-200d-1f9b1": "man-medium-light-skin-tone-curly-hair",
  "1f468-1f3fc-200d-1f9b0": "man-medium-light-skin-tone-red-hair",
  "1f468-1f3fc-200d-1f9b3": "man-medium-light-skin-tone-white-hair",
  "1f468-1f3fd": "man-medium-skin-tone",
  "1f468-1f3fd-200d-1f9b2": "man-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2642": "man-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2642": "man-medium-skin-tone-blond-hair",
  "1f468-1f3fd-200d-1f9b1": "man-medium-skin-tone-curly-hair",
  "1f468-1f3fd-200d-1f9b0": "man-medium-skin-tone-red-hair",
  "1f468-1f3fd-200d-1f9b3": "man-medium-skin-tone-white-hair",
  "1f6b5-200d-2642": "man-mountain-biking",
  "1f6b5-1f3ff-200d-2642": "man-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2642": "man-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2642": "man-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2642": "man-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2642": "man-mountain-biking-medium-skin-tone",
  "1f468-200d-1f4bc": "man-office-worker",
  "1f468-1f3ff-200d-1f4bc": "man-office-worker-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bc": "man-office-worker-light-skin-tone",
  "1f468-1f3fe-200d-1f4bc": "man-office-worker-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bc": "man-office-worker-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bc": "man-office-worker-medium-skin-tone",
  "1f468-200d-2708": "man-pilot",
  "1f468-1f3ff-200d-2708": "man-pilot-dark-skin-tone",
  "1f468-1f3fb-200d-2708": "man-pilot-light-skin-tone",
  "1f468-1f3fe-200d-2708": "man-pilot-medium-dark-skin-tone",
  "1f468-1f3fc-200d-2708": "man-pilot-medium-light-skin-tone",
  "1f468-1f3fd-200d-2708": "man-pilot-medium-skin-tone",
  "1f93e-200d-2642": "man-playing-handball",
  "1f93e-1f3ff-200d-2642": "man-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2642": "man-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2642": "man-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2642": "man-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2642": "man-playing-handball-medium-skin-tone",
  "1f93d-200d-2642": "man-playing-water-polo",
  "1f93d-1f3ff-200d-2642": "man-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2642": "man-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2642": "man-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2642": "man-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2642": "man-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2642": "man-police-officer",
  "1f46e-1f3ff-200d-2642": "man-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2642": "man-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2642": "man-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2642": "man-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2642": "man-police-officer-medium-skin-tone",
  "1f64e-200d-2642": "man-pouting",
  "1f64e-1f3ff-200d-2642": "man-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2642": "man-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2642": "man-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2642": "man-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2642": "man-pouting-medium-skin-tone",
  "1f64b-200d-2642": "man-raising-hand",
  "1f64b-1f3ff-200d-2642": "man-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2642": "man-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2642": "man-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2642": "man-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2642": "man-raising-hand-medium-skin-tone",
  "1f468-200d-1f9b0": "man-red-hair",
  "1f6a3-200d-2642": "man-rowing-boat",
  "1f6a3-1f3ff-200d-2642": "man-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2642": "man-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2642": "man-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2642": "man-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2642": "man-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2642": "man-running",
  "1f3c3-1f3ff-200d-2642": "man-running-dark-skin-tone",
  "1f3c3-200d-2642-200d-27a1": "man-running-facing-right",
  "1f3c3-1f3ff-200d-2642-200d-27a1": "man-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2642-200d-27a1": "man-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2642-200d-27a1": "man-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642-200d-27a1": "man-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642-200d-27a1": "man-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2642": "man-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2642": "man-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2642": "man-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2642": "man-running-medium-skin-tone",
  "1f468-200d-1f52c": "man-scientist",
  "1f468-1f3ff-200d-1f52c": "man-scientist-dark-skin-tone",
  "1f468-1f3fb-200d-1f52c": "man-scientist-light-skin-tone",
  "1f468-1f3fe-200d-1f52c": "man-scientist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f52c": "man-scientist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f52c": "man-scientist-medium-skin-tone",
  "1f937-200d-2642": "man-shrugging",
  "1f937-1f3ff-200d-2642": "man-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2642": "man-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2642": "man-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2642": "man-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2642": "man-shrugging-medium-skin-tone",
  "1f468-200d-1f3a4": "man-singer",
  "1f468-1f3ff-200d-1f3a4": "man-singer-dark-skin-tone",
  "1f468-1f3fb-200d-1f3a4": "man-singer-light-skin-tone",
  "1f468-1f3fe-200d-1f3a4": "man-singer-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3a4": "man-singer-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3a4": "man-singer-medium-skin-tone",
  "1f9cd-200d-2642": "man-standing",
  "1f9cd-1f3ff-200d-2642": "man-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2642": "man-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2642": "man-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2642": "man-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2642": "man-standing-medium-skin-tone",
  "1f468-200d-1f393": "man-student",
  "1f468-1f3ff-200d-1f393": "man-student-dark-skin-tone",
  "1f468-1f3fb-200d-1f393": "man-student-light-skin-tone",
  "1f468-1f3fe-200d-1f393": "man-student-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f393": "man-student-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f393": "man-student-medium-skin-tone",
  "1f9b8-200d-2642": "man-superhero",
  "1f9b8-1f3ff-200d-2642": "man-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2642": "man-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2642": "man-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2642": "man-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2642": "man-superhero-medium-skin-tone",
  "1f9b9-200d-2642": "man-supervillain",
  "1f9b9-1f3ff-200d-2642": "man-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2642": "man-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2642": "man-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2642": "man-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2642": "man-supervillain-medium-skin-tone",
  "1f3c4-200d-2642": "man-surfing",
  "1f3c4-1f3ff-200d-2642": "man-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2642": "man-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2642": "man-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2642": "man-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2642": "man-surfing-medium-skin-tone",
  "1f3ca-200d-2642": "man-swimming",
  "1f3ca-1f3ff-200d-2642": "man-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2642": "man-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2642": "man-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2642": "man-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2642": "man-swimming-medium-skin-tone",
  "1f468-200d-1f3eb": "man-teacher",
  "1f468-1f3ff-200d-1f3eb": "man-teacher-dark-skin-tone",
  "1f468-1f3fb-200d-1f3eb": "man-teacher-light-skin-tone",
  "1f468-1f3fe-200d-1f3eb": "man-teacher-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f3eb": "man-teacher-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f3eb": "man-teacher-medium-skin-tone",
  "1f468-200d-1f4bb": "man-technologist",
  "1f468-1f3ff-200d-1f4bb": "man-technologist-dark-skin-tone",
  "1f468-1f3fb-200d-1f4bb": "man-technologist-light-skin-tone",
  "1f468-1f3fe-200d-1f4bb": "man-technologist-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f4bb": "man-technologist-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f4bb": "man-technologist-medium-skin-tone",
  "1f481-200d-2642": "man-tipping-hand",
  "1f481-1f3ff-200d-2642": "man-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2642": "man-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2642": "man-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2642": "man-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2642": "man-tipping-hand-medium-skin-tone",
  "1f9db-200d-2642": "man-vampire",
  "1f9db-1f3ff-200d-2642": "man-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2642": "man-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2642": "man-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2642": "man-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2642": "man-vampire-medium-skin-tone",
  "1f6b6-200d-2642": "man-walking",
  "1f6b6-1f3ff-200d-2642": "man-walking-dark-skin-tone",
  "1f6b6-200d-2642-200d-27a1": "man-walking-facing-right",
  "1f6b6-1f3ff-200d-2642-200d-27a1": "man-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2642-200d-27a1": "man-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2642-200d-27a1": "man-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642-200d-27a1": "man-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642-200d-27a1": "man-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2642": "man-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2642": "man-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2642": "man-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2642": "man-walking-medium-skin-tone",
  "1f473-200d-2642": "man-wearing-turban",
  "1f473-1f3ff-200d-2642": "man-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2642": "man-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2642": "man-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2642": "man-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2642": "man-wearing-turban-medium-skin-tone",
  "1f468-200d-1f9b3": "man-white-hair",
  "1f470-200d-2642": "man-with-veil",
  "1f470-1f3ff-200d-2642": "man-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2642": "man-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2642": "man-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2642": "man-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2642": "man-with-veil-medium-skin-tone",
  "1f468-200d-1f9af": "man-with-white-cane",
  "1f468-1f3ff-200d-1f9af": "man-with-white-cane-dark-skin-tone",
  "1f468-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right",
  "1f468-1f3ff-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-dark-skin-tone",
  "1f468-1f3fb-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-light-skin-tone",
  "1f468-1f3fe-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af-200d-27a1": "man-with-white-cane-facing-right-medium-skin-tone",
  "1f468-1f3fb-200d-1f9af": "man-with-white-cane-light-skin-tone",
  "1f468-1f3fe-200d-1f9af": "man-with-white-cane-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f9af": "man-with-white-cane-medium-light-skin-tone",
  "1f468-1f3fd-200d-1f9af": "man-with-white-cane-medium-skin-tone",
  "1f9df-200d-2642": "man-zombie",
  "1f96d": "mango",
  "1f45e": "mans-shoe",
  "1f570": "mantelpiece-clock",
  "1f9bd": "manual-wheelchair",
  "1f5fe": "map-of-japan",
  "1f341": "maple-leaf",
  "1fa87": "maracas",
  "1f94b": "martial-arts-uniform",
  "1f9c9": "mate",
  "1f356": "meat-on-bone",
  "1f9d1-200d-1f527": "mechanic",
  "1f9d1-1f3ff-200d-1f527": "mechanic-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f527": "mechanic-light-skin-tone",
  "1f9d1-1f3fe-200d-1f527": "mechanic-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f527": "mechanic-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f527": "mechanic-medium-skin-tone",
  "1f9be": "mechanical-arm",
  "1f9bf": "mechanical-leg",
  "1f4e3": "megaphone",
  "1f348": "melon",
  "1fae0": "melting-face",
  "1f4dd": "memo",
  "1f46c": "men-holding-hands",
  "1f46c-1f3ff": "men-holding-hands-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-dark-skin-tone-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fb": "men-holding-hands-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-light-skin-tone-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fe": "men-holding-hands-medium-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46c-1f3fc": "men-holding-hands-medium-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd": "men-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46c-1f3fd": "men-holding-hands-medium-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff": "men-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb": "men-holding-hands-medium-skin-tone-light-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe": "men-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc": "men-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2642": "men-with-bunny-ears",
  "1f93c-200d-2642": "men-wrestling",
  "1f93c-1f3ff-200d-2642": "men-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2642": "men-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2642": "men-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2642": "men-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2642": "men-wrestling-medium-skin-tone",
  "2764-200d-1fa79": "mending-heart",
  "1f54e": "menorah",
  "1f6b9": "mens-room",
  "1f9dc-200d-2640": "mermaid",
  "1f9dc-1f3ff-200d-2640": "mermaid-dark-skin-tone",
  "1f9dc-1f3fb-200d-2640": "mermaid-light-skin-tone",
  "1f9dc-1f3fe-200d-2640": "mermaid-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2640": "mermaid-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2640": "mermaid-medium-skin-tone",
  "1f9dc-200d-2642": "merman",
  "1f9dc-1f3ff-200d-2642": "merman-dark-skin-tone",
  "1f9dc-1f3fb-200d-2642": "merman-light-skin-tone",
  "1f9dc-1f3fe-200d-2642": "merman-medium-dark-skin-tone",
  "1f9dc-1f3fc-200d-2642": "merman-medium-light-skin-tone",
  "1f9dc-1f3fd-200d-2642": "merman-medium-skin-tone",
  "1f9dc": "merperson",
  "1f9dc-1f3ff": "merperson-dark-skin-tone",
  "1f9dc-1f3fb": "merperson-light-skin-tone",
  "1f9dc-1f3fe": "merperson-medium-dark-skin-tone",
  "1f9dc-1f3fc": "merperson-medium-light-skin-tone",
  "1f9dc-1f3fd": "merperson-medium-skin-tone",
  "1f687": "metro",
  "1f9a0": "microbe",
  "1f3a4": "microphone",
  "1f52c": "microscope",
  "1f595": "middle-finger",
  "1f595-1f3ff": "middle-finger-dark-skin-tone",
  "1f595-1f3fb": "middle-finger-light-skin-tone",
  "1f595-1f3fe": "middle-finger-medium-dark-skin-tone",
  "1f595-1f3fc": "middle-finger-medium-light-skin-tone",
  "1f595-1f3fd": "middle-finger-medium-skin-tone",
  "1fa96": "military-helmet",
  "1f396": "military-medal",
  "1f30c": "milky-way",
  "1f690": "minibus",
  "1fa9e": "mirror",
  "1faa9": "mirror-ball",
  "1f5ff": "moai",
  "1f4f1": "mobile-phone",
  "1f4f4": "mobile-phone-off",
  "1f4f2": "mobile-phone-with-arrow",
  "1f4b0": "money-bag",
  "1f911": "money-mouth-face",
  "1f4b8": "money-with-wings",
  "1f412": "monkey",
  "1f435": "monkey-face",
  "1f69d": "monorail",
  "1f96e": "moon-cake",
  "1f391": "moon-viewing-ceremony",
  "1face": "moose",
  "1f54c": "mosque",
  "1f99f": "mosquito",
  "1f6e5": "motor-boat",
  "1f6f5": "motor-scooter",
  "1f3cd": "motorcycle",
  "1f9bc": "motorized-wheelchair",
  "1f6e3": "motorway",
  "1f5fb": "mount-fuji",
  "26f0": "mountain",
  "1f6a0": "mountain-cableway",
  "1f69e": "mountain-railway",
  "1f401": "mouse",
  "1f42d": "mouse-face",
  "1faa4": "mouse-trap",
  "1f444": "mouth",
  "1f3a5": "movie-camera",
  "1f936": "mrs-claus",
  "1f936-1f3ff": "mrs-claus-dark-skin-tone",
  "1f936-1f3fb": "mrs-claus-light-skin-tone",
  "1f936-1f3fe": "mrs-claus-medium-dark-skin-tone",
  "1f936-1f3fc": "mrs-claus-medium-light-skin-tone",
  "1f936-1f3fd": "mrs-claus-medium-skin-tone",
  "1f344": "mushroom",
  "1f3b9": "musical-keyboard",
  "1f3b5": "musical-note",
  "1f3b6": "musical-notes",
  "1f3bc": "musical-score",
  "1f507": "muted-speaker",
  "1f9d1-200d-1f384": "mx-claus",
  "1f9d1-1f3ff-200d-1f384": "mx-claus-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f384": "mx-claus-light-skin-tone",
  "1f9d1-1f3fe-200d-1f384": "mx-claus-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f384": "mx-claus-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f384": "mx-claus-medium-skin-tone",
  "1f485": "nail-polish",
  "1f485-1f3ff": "nail-polish-dark-skin-tone",
  "1f485-1f3fb": "nail-polish-light-skin-tone",
  "1f485-1f3fe": "nail-polish-medium-dark-skin-tone",
  "1f485-1f3fc": "nail-polish-medium-light-skin-tone",
  "1f485-1f3fd": "nail-polish-medium-skin-tone",
  "1f4db": "name-badge",
  "1f3de": "national-park",
  "1f922": "nauseated-face",
  "1f9ff": "nazar-amulet",
  "1f454": "necktie",
  "1f913": "nerd-face",
  "1faba": "nest-with-eggs",
  "1fa86": "nesting-dolls",
  "1f610": "neutral-face",
  "1f195": "new-button",
  "1f311": "new-moon",
  "1f31a": "new-moon-face",
  "1f4f0": "newspaper",
  "23ed": "next-track-button",
  "1f196": "ng-button",
  "1f303": "night-with-stars",
  "1f558": "nine-oclock",
  "1f564": "nine-thirty",
  "1f977": "ninja",
  "1f977-1f3ff": "ninja-dark-skin-tone",
  "1f977-1f3fb": "ninja-light-skin-tone",
  "1f977-1f3fe": "ninja-medium-dark-skin-tone",
  "1f977-1f3fc": "ninja-medium-light-skin-tone",
  "1f977-1f3fd": "ninja-medium-skin-tone",
  "1f6b3": "no-bicycles",
  "26d4": "no-entry",
  "1f6af": "no-littering",
  "1f4f5": "no-mobile-phones",
  "1f51e": "no-one-under-eighteen",
  "1f6b7": "no-pedestrians",
  "1f6ad": "no-smoking",
  "1f6b1": "non-potable-water",
  "1f443": "nose",
  "1f443-1f3ff": "nose-dark-skin-tone",
  "1f443-1f3fb": "nose-light-skin-tone",
  "1f443-1f3fe": "nose-medium-dark-skin-tone",
  "1f443-1f3fc": "nose-medium-light-skin-tone",
  "1f443-1f3fd": "nose-medium-skin-tone",
  "1f4d3": "notebook",
  "1f4d4": "notebook-with-decorative-cover",
  "1f529": "nut-and-bolt",
  "1f17e": "o-button-blood-type",
  "1f419": "octopus",
  "1f362": "oden",
  "1f3e2": "office-building",
  "1f9d1-200d-1f4bc": "office-worker",
  "1f9d1-1f3ff-200d-1f4bc": "office-worker-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bc": "office-worker-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bc": "office-worker-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bc": "office-worker-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bc": "office-worker-medium-skin-tone",
  "1f479": "ogre",
  "1f6e2": "oil-drum",
  "1f197": "ok-button",
  "1f44c": "ok-hand",
  "1f44c-1f3ff": "ok-hand-dark-skin-tone",
  "1f44c-1f3fb": "ok-hand-light-skin-tone",
  "1f44c-1f3fe": "ok-hand-medium-dark-skin-tone",
  "1f44c-1f3fc": "ok-hand-medium-light-skin-tone",
  "1f44c-1f3fd": "ok-hand-medium-skin-tone",
  "1f5dd": "old-key",
  "1f474": "old-man",
  "1f474-1f3ff": "old-man-dark-skin-tone",
  "1f474-1f3fb": "old-man-light-skin-tone",
  "1f474-1f3fe": "old-man-medium-dark-skin-tone",
  "1f474-1f3fc": "old-man-medium-light-skin-tone",
  "1f474-1f3fd": "old-man-medium-skin-tone",
  "1f475": "old-woman",
  "1f475-1f3ff": "old-woman-dark-skin-tone",
  "1f475-1f3fb": "old-woman-light-skin-tone",
  "1f475-1f3fe": "old-woman-medium-dark-skin-tone",
  "1f475-1f3fc": "old-woman-medium-light-skin-tone",
  "1f475-1f3fd": "old-woman-medium-skin-tone",
  "1f9d3": "older-person",
  "1f9d3-1f3ff": "older-person-dark-skin-tone",
  "1f9d3-1f3fb": "older-person-light-skin-tone",
  "1f9d3-1f3fe": "older-person-medium-dark-skin-tone",
  "1f9d3-1f3fc": "older-person-medium-light-skin-tone",
  "1f9d3-1f3fd": "older-person-medium-skin-tone",
  "1fad2": "olive",
  "1f549": "om",
  "1f51b": "on-exclamation-arrow",
  "1f698": "oncoming-automobile",
  "1f68d": "oncoming-bus",
  "1f44a": "oncoming-fist",
  "1f44a-1f3ff": "oncoming-fist-dark-skin-tone",
  "1f44a-1f3fb": "oncoming-fist-light-skin-tone",
  "1f44a-1f3fe": "oncoming-fist-medium-dark-skin-tone",
  "1f44a-1f3fc": "oncoming-fist-medium-light-skin-tone",
  "1f44a-1f3fd": "oncoming-fist-medium-skin-tone",
  "1f694": "oncoming-police-car",
  "1f696": "oncoming-taxi",
  "1f550": "one-oclock",
  "1fa71": "one-piece-swimsuit",
  "1f55c": "one-thirty",
  "1f9c5": "onion",
  "1f4d6": "open-book",
  "1f4c2": "open-file-folder",
  "1f450": "open-hands",
  "1f450-1f3ff": "open-hands-dark-skin-tone",
  "1f450-1f3fb": "open-hands-light-skin-tone",
  "1f450-1f3fe": "open-hands-medium-dark-skin-tone",
  "1f450-1f3fc": "open-hands-medium-light-skin-tone",
  "1f450-1f3fd": "open-hands-medium-skin-tone",
  "1f4ed": "open-mailbox-with-lowered-flag",
  "1f4ec": "open-mailbox-with-raised-flag",
  "26ce": "ophiuchus",
  "1f4bf": "optical-disk",
  "1f4d9": "orange-book",
  "1f7e0": "orange-circle",
  "1f9e1": "orange-heart",
  "1f7e7": "orange-square",
  "1f9a7": "orangutan",
  "1f9a6": "otter",
  "1f4e4": "outbox-tray",
  "1f989": "owl",
  "1f402": "ox",
  "1f9aa": "oyster",
  "1f17f": "p-button",
  "1f4e6": "package",
  "1f4c4": "page-facing-up",
  "1f4c3": "page-with-curl",
  "1f4df": "pager",
  "1f58c": "paintbrush",
  "1faf3": "palm-down-hand",
  "1faf3-1f3ff": "palm-down-hand-dark-skin-tone",
  "1faf3-1f3fb": "palm-down-hand-light-skin-tone",
  "1faf3-1f3fe": "palm-down-hand-medium-dark-skin-tone",
  "1faf3-1f3fc": "palm-down-hand-medium-light-skin-tone",
  "1faf3-1f3fd": "palm-down-hand-medium-skin-tone",
  "1f334": "palm-tree",
  "1faf4": "palm-up-hand",
  "1faf4-1f3ff": "palm-up-hand-dark-skin-tone",
  "1faf4-1f3fb": "palm-up-hand-light-skin-tone",
  "1faf4-1f3fe": "palm-up-hand-medium-dark-skin-tone",
  "1faf4-1f3fc": "palm-up-hand-medium-light-skin-tone",
  "1faf4-1f3fd": "palm-up-hand-medium-skin-tone",
  "1f932": "palms-up-together",
  "1f932-1f3ff": "palms-up-together-dark-skin-tone",
  "1f932-1f3fb": "palms-up-together-light-skin-tone",
  "1f932-1f3fe": "palms-up-together-medium-dark-skin-tone",
  "1f932-1f3fc": "palms-up-together-medium-light-skin-tone",
  "1f932-1f3fd": "palms-up-together-medium-skin-tone",
  "1f95e": "pancakes",
  "1f43c": "panda",
  "1f4ce": "paperclip",
  "1fa82": "parachute",
  "1f99c": "parrot",
  "303d": "part-alternation-mark",
  "1f389": "party-popper",
  "1f973": "partying-face",
  "1f6f3": "passenger-ship",
  "1f6c2": "passport-control",
  "23f8": "pause-button",
  "1f43e": "paw-prints",
  "1fadb": "pea-pod",
  "262e": "peace-symbol",
  "1f351": "peach",
  "1f99a": "peacock",
  "1f95c": "peanuts",
  "1f350": "pear",
  "1f58a": "pen",
  "270f": "pencil",
  "1f427": "penguin",
  "1f614": "pensive-face",
  "1f9d1-200d-1f91d-200d-1f9d1": "people-holding-hands",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd": "people-holding-hands-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff": "people-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb": "people-holding-hands-medium-skin-tone-light-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe": "people-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc": "people-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1fac2": "people-hugging",
  "1f46f": "people-with-bunny-ears",
  "1f93c": "people-wrestling",
  "1f93c-1f3ff": "people-wrestling-dark-skin-tone",
  "1f93c-1f3fb": "people-wrestling-light-skin-tone",
  "1f93c-1f3fe": "people-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc": "people-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd": "people-wrestling-medium-skin-tone",
  "1f3ad": "performing-arts",
  "1f623": "persevering-face",
  "1f9d1": "person",
  "1f9d1-200d-1f9b2": "person-bald",
  "1f9d4": "person-beard",
  "1f6b4": "person-biking",
  "1f6b4-1f3ff": "person-biking-dark-skin-tone",
  "1f6b4-1f3fb": "person-biking-light-skin-tone",
  "1f6b4-1f3fe": "person-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc": "person-biking-medium-light-skin-tone",
  "1f6b4-1f3fd": "person-biking-medium-skin-tone",
  "1f471": "person-blond-hair",
  "26f9": "person-bouncing-ball",
  "26f9-1f3ff": "person-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb": "person-bouncing-ball-light-skin-tone",
  "26f9-1f3fe": "person-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc": "person-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd": "person-bouncing-ball-medium-skin-tone",
  "1f647": "person-bowing",
  "1f647-1f3ff": "person-bowing-dark-skin-tone",
  "1f647-1f3fb": "person-bowing-light-skin-tone",
  "1f647-1f3fe": "person-bowing-medium-dark-skin-tone",
  "1f647-1f3fc": "person-bowing-medium-light-skin-tone",
  "1f647-1f3fd": "person-bowing-medium-skin-tone",
  "1f938": "person-cartwheeling",
  "1f938-1f3ff": "person-cartwheeling-dark-skin-tone",
  "1f938-1f3fb": "person-cartwheeling-light-skin-tone",
  "1f938-1f3fe": "person-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc": "person-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd": "person-cartwheeling-medium-skin-tone",
  "1f9d7": "person-climbing",
  "1f9d7-1f3ff": "person-climbing-dark-skin-tone",
  "1f9d7-1f3fb": "person-climbing-light-skin-tone",
  "1f9d7-1f3fe": "person-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc": "person-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd": "person-climbing-medium-skin-tone",
  "1f9d1-200d-1f9b1": "person-curly-hair",
  "1f9d1-1f3ff": "person-dark-skin-tone",
  "1f9d1-1f3ff-200d-1f9b2": "person-dark-skin-tone-bald",
  "1f9d4-1f3ff": "person-dark-skin-tone-beard",
  "1f471-1f3ff": "person-dark-skin-tone-blond-hair",
  "1f9d1-1f3ff-200d-1f9b1": "person-dark-skin-tone-curly-hair",
  "1f9d1-1f3ff-200d-1f9b0": "person-dark-skin-tone-red-hair",
  "1f9d1-1f3ff-200d-1f9b3": "person-dark-skin-tone-white-hair",
  "1f926": "person-facepalming",
  "1f926-1f3ff": "person-facepalming-dark-skin-tone",
  "1f926-1f3fb": "person-facepalming-light-skin-tone",
  "1f926-1f3fe": "person-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc": "person-facepalming-medium-light-skin-tone",
  "1f926-1f3fd": "person-facepalming-medium-skin-tone",
  "1f9d1-200d-1f37c": "person-feeding-baby",
  "1f9d1-1f3ff-200d-1f37c": "person-feeding-baby-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f37c": "person-feeding-baby-light-skin-tone",
  "1f9d1-1f3fe-200d-1f37c": "person-feeding-baby-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f37c": "person-feeding-baby-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f37c": "person-feeding-baby-medium-skin-tone",
  "1f93a": "person-fencing",
  "1f64d": "person-frowning",
  "1f64d-1f3ff": "person-frowning-dark-skin-tone",
  "1f64d-1f3fb": "person-frowning-light-skin-tone",
  "1f64d-1f3fe": "person-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc": "person-frowning-medium-light-skin-tone",
  "1f64d-1f3fd": "person-frowning-medium-skin-tone",
  "1f645": "person-gesturing-no",
  "1f645-1f3ff": "person-gesturing-no-dark-skin-tone",
  "1f645-1f3fb": "person-gesturing-no-light-skin-tone",
  "1f645-1f3fe": "person-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc": "person-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd": "person-gesturing-no-medium-skin-tone",
  "1f646": "person-gesturing-ok",
  "1f646-1f3ff": "person-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb": "person-gesturing-ok-light-skin-tone",
  "1f646-1f3fe": "person-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc": "person-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd": "person-gesturing-ok-medium-skin-tone",
  "1f487": "person-getting-haircut",
  "1f487-1f3ff": "person-getting-haircut-dark-skin-tone",
  "1f487-1f3fb": "person-getting-haircut-light-skin-tone",
  "1f487-1f3fe": "person-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc": "person-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd": "person-getting-haircut-medium-skin-tone",
  "1f486": "person-getting-massage",
  "1f486-1f3ff": "person-getting-massage-dark-skin-tone",
  "1f486-1f3fb": "person-getting-massage-light-skin-tone",
  "1f486-1f3fe": "person-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc": "person-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd": "person-getting-massage-medium-skin-tone",
  "1f3cc": "person-golfing",
  "1f3cc-1f3ff": "person-golfing-dark-skin-tone",
  "1f3cc-1f3fb": "person-golfing-light-skin-tone",
  "1f3cc-1f3fe": "person-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc": "person-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd": "person-golfing-medium-skin-tone",
  "1f6cc": "person-in-bed",
  "1f6cc-1f3ff": "person-in-bed-dark-skin-tone",
  "1f6cc-1f3fb": "person-in-bed-light-skin-tone",
  "1f6cc-1f3fe": "person-in-bed-medium-dark-skin-tone",
  "1f6cc-1f3fc": "person-in-bed-medium-light-skin-tone",
  "1f6cc-1f3fd": "person-in-bed-medium-skin-tone",
  "1f9d8": "person-in-lotus-position",
  "1f9d8-1f3ff": "person-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb": "person-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe": "person-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc": "person-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd": "person-in-lotus-position-medium-skin-tone",
  "1f9d1-200d-1f9bd": "person-in-manual-wheelchair",
  "1f9d1-1f3ff-200d-1f9bd": "person-in-manual-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd-200d-27a1": "person-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bd": "person-in-manual-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bd": "person-in-manual-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bd": "person-in-manual-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bd": "person-in-manual-wheelchair-medium-skin-tone",
  "1f9d1-200d-1f9bc": "person-in-motorized-wheelchair",
  "1f9d1-1f3ff-200d-1f9bc": "person-in-motorized-wheelchair-dark-skin-tone",
  "1f9d1-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right",
  "1f9d1-1f3ff-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc-200d-27a1": "person-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9bc": "person-in-motorized-wheelchair-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9bc": "person-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9bc": "person-in-motorized-wheelchair-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9bc": "person-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6": "person-in-steamy-room",
  "1f9d6-1f3ff": "person-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb": "person-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe": "person-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc": "person-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd": "person-in-steamy-room-medium-skin-tone",
  "1f574": "person-in-suit-levitating",
  "1f574-1f3ff": "person-in-suit-levitating-dark-skin-tone",
  "1f574-1f3fb": "person-in-suit-levitating-light-skin-tone",
  "1f574-1f3fe": "person-in-suit-levitating-medium-dark-skin-tone",
  "1f574-1f3fc": "person-in-suit-levitating-medium-light-skin-tone",
  "1f574-1f3fd": "person-in-suit-levitating-medium-skin-tone",
  "1f935": "person-in-tuxedo",
  "1f935-1f3ff": "person-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb": "person-in-tuxedo-light-skin-tone",
  "1f935-1f3fe": "person-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc": "person-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd": "person-in-tuxedo-medium-skin-tone",
  "1f939": "person-juggling",
  "1f939-1f3ff": "person-juggling-dark-skin-tone",
  "1f939-1f3fb": "person-juggling-light-skin-tone",
  "1f939-1f3fe": "person-juggling-medium-dark-skin-tone",
  "1f939-1f3fc": "person-juggling-medium-light-skin-tone",
  "1f939-1f3fd": "person-juggling-medium-skin-tone",
  "1f9ce": "person-kneeling",
  "1f9ce-1f3ff": "person-kneeling-dark-skin-tone",
  "1f9ce-200d-27a1": "person-kneeling-facing-right",
  "1f9ce-1f3ff-200d-27a1": "person-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-27a1": "person-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-27a1": "person-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-27a1": "person-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-27a1": "person-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb": "person-kneeling-light-skin-tone",
  "1f9ce-1f3fe": "person-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc": "person-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd": "person-kneeling-medium-skin-tone",
  "1f3cb": "person-lifting-weights",
  "1f3cb-1f3ff": "person-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb": "person-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe": "person-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc": "person-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd": "person-lifting-weights-medium-skin-tone",
  "1f9d1-1f3fb": "person-light-skin-tone",
  "1f9d1-1f3fb-200d-1f9b2": "person-light-skin-tone-bald",
  "1f9d4-1f3fb": "person-light-skin-tone-beard",
  "1f471-1f3fb": "person-light-skin-tone-blond-hair",
  "1f9d1-1f3fb-200d-1f9b1": "person-light-skin-tone-curly-hair",
  "1f9d1-1f3fb-200d-1f9b0": "person-light-skin-tone-red-hair",
  "1f9d1-1f3fb-200d-1f9b3": "person-light-skin-tone-white-hair",
  "1f9d1-1f3fe": "person-medium-dark-skin-tone",
  "1f9d1-1f3fe-200d-1f9b2": "person-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe": "person-medium-dark-skin-tone-beard",
  "1f471-1f3fe": "person-medium-dark-skin-tone-blond-hair",
  "1f9d1-1f3fe-200d-1f9b1": "person-medium-dark-skin-tone-curly-hair",
  "1f9d1-1f3fe-200d-1f9b0": "person-medium-dark-skin-tone-red-hair",
  "1f9d1-1f3fe-200d-1f9b3": "person-medium-dark-skin-tone-white-hair",
  "1f9d1-1f3fc": "person-medium-light-skin-tone",
  "1f9d1-1f3fc-200d-1f9b2": "person-medium-light-skin-tone-bald",
  "1f9d4-1f3fc": "person-medium-light-skin-tone-beard",
  "1f471-1f3fc": "person-medium-light-skin-tone-blond-hair",
  "1f9d1-1f3fc-200d-1f9b1": "person-medium-light-skin-tone-curly-hair",
  "1f9d1-1f3fc-200d-1f9b0": "person-medium-light-skin-tone-red-hair",
  "1f9d1-1f3fc-200d-1f9b3": "person-medium-light-skin-tone-white-hair",
  "1f9d1-1f3fd": "person-medium-skin-tone",
  "1f9d1-1f3fd-200d-1f9b2": "person-medium-skin-tone-bald",
  "1f9d4-1f3fd": "person-medium-skin-tone-beard",
  "1f471-1f3fd": "person-medium-skin-tone-blond-hair",
  "1f9d1-1f3fd-200d-1f9b1": "person-medium-skin-tone-curly-hair",
  "1f9d1-1f3fd-200d-1f9b0": "person-medium-skin-tone-red-hair",
  "1f9d1-1f3fd-200d-1f9b3": "person-medium-skin-tone-white-hair",
  "1f6b5": "person-mountain-biking",
  "1f6b5-1f3ff": "person-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb": "person-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe": "person-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc": "person-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd": "person-mountain-biking-medium-skin-tone",
  "1f93e": "person-playing-handball",
  "1f93e-1f3ff": "person-playing-handball-dark-skin-tone",
  "1f93e-1f3fb": "person-playing-handball-light-skin-tone",
  "1f93e-1f3fe": "person-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc": "person-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd": "person-playing-handball-medium-skin-tone",
  "1f93d": "person-playing-water-polo",
  "1f93d-1f3ff": "person-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb": "person-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe": "person-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc": "person-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd": "person-playing-water-polo-medium-skin-tone",
  "1f64e": "person-pouting",
  "1f64e-1f3ff": "person-pouting-dark-skin-tone",
  "1f64e-1f3fb": "person-pouting-light-skin-tone",
  "1f64e-1f3fe": "person-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc": "person-pouting-medium-light-skin-tone",
  "1f64e-1f3fd": "person-pouting-medium-skin-tone",
  "1f64b": "person-raising-hand",
  "1f64b-1f3ff": "person-raising-hand-dark-skin-tone",
  "1f64b-1f3fb": "person-raising-hand-light-skin-tone",
  "1f64b-1f3fe": "person-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc": "person-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd": "person-raising-hand-medium-skin-tone",
  "1f9d1-200d-1f9b0": "person-red-hair",
  "1f6a3": "person-rowing-boat",
  "1f6a3-1f3ff": "person-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb": "person-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe": "person-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc": "person-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd": "person-rowing-boat-medium-skin-tone",
  "1f3c3": "person-running",
  "1f3c3-1f3ff": "person-running-dark-skin-tone",
  "1f3c3-200d-27a1": "person-running-facing-right",
  "1f3c3-1f3ff-200d-27a1": "person-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-27a1": "person-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-27a1": "person-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-27a1": "person-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-27a1": "person-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb": "person-running-light-skin-tone",
  "1f3c3-1f3fe": "person-running-medium-dark-skin-tone",
  "1f3c3-1f3fc": "person-running-medium-light-skin-tone",
  "1f3c3-1f3fd": "person-running-medium-skin-tone",
  "1f937": "person-shrugging",
  "1f937-1f3ff": "person-shrugging-dark-skin-tone",
  "1f937-1f3fb": "person-shrugging-light-skin-tone",
  "1f937-1f3fe": "person-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc": "person-shrugging-medium-light-skin-tone",
  "1f937-1f3fd": "person-shrugging-medium-skin-tone",
  "1f9cd": "person-standing",
  "1f9cd-1f3ff": "person-standing-dark-skin-tone",
  "1f9cd-1f3fb": "person-standing-light-skin-tone",
  "1f9cd-1f3fe": "person-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc": "person-standing-medium-light-skin-tone",
  "1f9cd-1f3fd": "person-standing-medium-skin-tone",
  "1f3c4": "person-surfing",
  "1f3c4-1f3ff": "person-surfing-dark-skin-tone",
  "1f3c4-1f3fb": "person-surfing-light-skin-tone",
  "1f3c4-1f3fe": "person-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc": "person-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd": "person-surfing-medium-skin-tone",
  "1f3ca": "person-swimming",
  "1f3ca-1f3ff": "person-swimming-dark-skin-tone",
  "1f3ca-1f3fb": "person-swimming-light-skin-tone",
  "1f3ca-1f3fe": "person-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc": "person-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd": "person-swimming-medium-skin-tone",
  "1f6c0": "person-taking-bath",
  "1f6c0-1f3ff": "person-taking-bath-dark-skin-tone",
  "1f6c0-1f3fb": "person-taking-bath-light-skin-tone",
  "1f6c0-1f3fe": "person-taking-bath-medium-dark-skin-tone",
  "1f6c0-1f3fc": "person-taking-bath-medium-light-skin-tone",
  "1f6c0-1f3fd": "person-taking-bath-medium-skin-tone",
  "1f481": "person-tipping-hand",
  "1f481-1f3ff": "person-tipping-hand-dark-skin-tone",
  "1f481-1f3fb": "person-tipping-hand-light-skin-tone",
  "1f481-1f3fe": "person-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc": "person-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd": "person-tipping-hand-medium-skin-tone",
  "1f6b6": "person-walking",
  "1f6b6-1f3ff": "person-walking-dark-skin-tone",
  "1f6b6-200d-27a1": "person-walking-facing-right",
  "1f6b6-1f3ff-200d-27a1": "person-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-27a1": "person-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-27a1": "person-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-27a1": "person-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-27a1": "person-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb": "person-walking-light-skin-tone",
  "1f6b6-1f3fe": "person-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc": "person-walking-medium-light-skin-tone",
  "1f6b6-1f3fd": "person-walking-medium-skin-tone",
  "1f473": "person-wearing-turban",
  "1f473-1f3ff": "person-wearing-turban-dark-skin-tone",
  "1f473-1f3fb": "person-wearing-turban-light-skin-tone",
  "1f473-1f3fe": "person-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc": "person-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd": "person-wearing-turban-medium-skin-tone",
  "1f9d1-200d-1f9b3": "person-white-hair",
  "1fac5": "person-with-crown",
  "1fac5-1f3ff": "person-with-crown-dark-skin-tone",
  "1fac5-1f3fb": "person-with-crown-light-skin-tone",
  "1fac5-1f3fe": "person-with-crown-medium-dark-skin-tone",
  "1fac5-1f3fc": "person-with-crown-medium-light-skin-tone",
  "1fac5-1f3fd": "person-with-crown-medium-skin-tone",
  "1f472": "person-with-skullcap",
  "1f472-1f3ff": "person-with-skullcap-dark-skin-tone",
  "1f472-1f3fb": "person-with-skullcap-light-skin-tone",
  "1f472-1f3fe": "person-with-skullcap-medium-dark-skin-tone",
  "1f472-1f3fc": "person-with-skullcap-medium-light-skin-tone",
  "1f472-1f3fd": "person-with-skullcap-medium-skin-tone",
  "1f470": "person-with-veil",
  "1f470-1f3ff": "person-with-veil-dark-skin-tone",
  "1f470-1f3fb": "person-with-veil-light-skin-tone",
  "1f470-1f3fe": "person-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc": "person-with-veil-medium-light-skin-tone",
  "1f470-1f3fd": "person-with-veil-medium-skin-tone",
  "1f9d1-200d-1f9af": "person-with-white-cane",
  "1f9d1-1f3ff-200d-1f9af": "person-with-white-cane-dark-skin-tone",
  "1f9d1-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right",
  "1f9d1-1f3ff-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af-200d-27a1": "person-with-white-cane-facing-right-medium-skin-tone",
  "1f9d1-1f3fb-200d-1f9af": "person-with-white-cane-light-skin-tone",
  "1f9d1-1f3fe-200d-1f9af": "person-with-white-cane-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f9af": "person-with-white-cane-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f9af": "person-with-white-cane-medium-skin-tone",
  "1f9eb": "petri-dish",
  "1f426-200d-1f525": "phoenix",
  "26cf": "pick",
  "1f6fb": "pickup-truck",
  "1f967": "pie",
  "1f416": "pig",
  "1f437": "pig-face",
  "1f43d": "pig-nose",
  "1f4a9": "pile-of-poo",
  "1f48a": "pill",
  "1f9d1-200d-2708": "pilot",
  "1f9d1-1f3ff-200d-2708": "pilot-dark-skin-tone",
  "1f9d1-1f3fb-200d-2708": "pilot-light-skin-tone",
  "1f9d1-1f3fe-200d-2708": "pilot-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-2708": "pilot-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-2708": "pilot-medium-skin-tone",
  "1fa85": "pinata",
  "1f90c": "pinched-fingers",
  "1f90c-1f3ff": "pinched-fingers-dark-skin-tone",
  "1f90c-1f3fb": "pinched-fingers-light-skin-tone",
  "1f90c-1f3fe": "pinched-fingers-medium-dark-skin-tone",
  "1f90c-1f3fc": "pinched-fingers-medium-light-skin-tone",
  "1f90c-1f3fd": "pinched-fingers-medium-skin-tone",
  "1f90f": "pinching-hand",
  "1f90f-1f3ff": "pinching-hand-dark-skin-tone",
  "1f90f-1f3fb": "pinching-hand-light-skin-tone",
  "1f90f-1f3fe": "pinching-hand-medium-dark-skin-tone",
  "1f90f-1f3fc": "pinching-hand-medium-light-skin-tone",
  "1f90f-1f3fd": "pinching-hand-medium-skin-tone",
  "1f38d": "pine-decoration",
  "1f34d": "pineapple",
  "1f3d3": "ping-pong",
  "1fa77": "pink-heart",
  "1f3f4-200d-2620": "pirate-flag",
  "1f355": "pizza",
  "1faa7": "placard",
  "1f6d0": "place-of-worship",
  "25b6": "play-button",
  "23ef": "play-or-pause-button",
  "1f6dd": "playground-slide",
  "1f97a": "pleading-face",
  "1faa0": "plunger",
  "1f43b-200d-2744": "polar-bear",
  "1f693": "police-car",
  "1f6a8": "police-car-light",
  "1f46e": "police-officer",
  "1f46e-1f3ff": "police-officer-dark-skin-tone",
  "1f46e-1f3fb": "police-officer-light-skin-tone",
  "1f46e-1f3fe": "police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc": "police-officer-medium-light-skin-tone",
  "1f46e-1f3fd": "police-officer-medium-skin-tone",
  "1f429": "poodle",
  "1f3b1": "pool-8-ball",
  "1f37f": "popcorn",
  "1f3e4": "post-office",
  "1f4ef": "postal-horn",
  "1f4ee": "postbox",
  "1f372": "pot-of-food",
  "1f6b0": "potable-water",
  "1f954": "potato",
  "1fab4": "potted-plant",
  "1f357": "poultry-leg",
  "1f4b7": "pound-banknote",
  "1fad7": "pouring-liquid",
  "1f63e": "pouting-cat",
  "1f4ff": "prayer-beads",
  "1fac3": "pregnant-man",
  "1fac3-1f3ff": "pregnant-man-dark-skin-tone",
  "1fac3-1f3fb": "pregnant-man-light-skin-tone",
  "1fac3-1f3fe": "pregnant-man-medium-dark-skin-tone",
  "1fac3-1f3fc": "pregnant-man-medium-light-skin-tone",
  "1fac3-1f3fd": "pregnant-man-medium-skin-tone",
  "1fac4": "pregnant-person",
  "1fac4-1f3ff": "pregnant-person-dark-skin-tone",
  "1fac4-1f3fb": "pregnant-person-light-skin-tone",
  "1fac4-1f3fe": "pregnant-person-medium-dark-skin-tone",
  "1fac4-1f3fc": "pregnant-person-medium-light-skin-tone",
  "1fac4-1f3fd": "pregnant-person-medium-skin-tone",
  "1f930": "pregnant-woman",
  "1f930-1f3ff": "pregnant-woman-dark-skin-tone",
  "1f930-1f3fb": "pregnant-woman-light-skin-tone",
  "1f930-1f3fe": "pregnant-woman-medium-dark-skin-tone",
  "1f930-1f3fc": "pregnant-woman-medium-light-skin-tone",
  "1f930-1f3fd": "pregnant-woman-medium-skin-tone",
  "1f968": "pretzel",
  "1f934": "prince",
  "1f934-1f3ff": "prince-dark-skin-tone",
  "1f934-1f3fb": "prince-light-skin-tone",
  "1f934-1f3fe": "prince-medium-dark-skin-tone",
  "1f934-1f3fc": "prince-medium-light-skin-tone",
  "1f934-1f3fd": "prince-medium-skin-tone",
  "1f478": "princess",
  "1f478-1f3ff": "princess-dark-skin-tone",
  "1f478-1f3fb": "princess-light-skin-tone",
  "1f478-1f3fe": "princess-medium-dark-skin-tone",
  "1f478-1f3fc": "princess-medium-light-skin-tone",
  "1f478-1f3fd": "princess-medium-skin-tone",
  "1f5a8": "printer",
  "1f6ab": "prohibited",
  "1f7e3": "purple-circle",
  "1f49c": "purple-heart",
  "1f7ea": "purple-square",
  "1f45b": "purse",
  "1f4cc": "pushpin",
  "1f9e9": "puzzle-piece",
  "1f407": "rabbit",
  "1f430": "rabbit-face",
  "1f99d": "raccoon",
  "1f3ce": "racing-car",
  "1f4fb": "radio",
  "1f518": "radio-button",
  "1f683": "railway-car",
  "1f6e4": "railway-track",
  "1f308": "rainbow",
  "1f3f3-200d-1f308": "rainbow-flag",
  "1f91a": "raised-back-of-hand",
  "1f91a-1f3ff": "raised-back-of-hand-dark-skin-tone",
  "1f91a-1f3fb": "raised-back-of-hand-light-skin-tone",
  "1f91a-1f3fe": "raised-back-of-hand-medium-dark-skin-tone",
  "1f91a-1f3fc": "raised-back-of-hand-medium-light-skin-tone",
  "1f91a-1f3fd": "raised-back-of-hand-medium-skin-tone",
  "270a": "raised-fist",
  "270a-1f3ff": "raised-fist-dark-skin-tone",
  "270a-1f3fb": "raised-fist-light-skin-tone",
  "270a-1f3fe": "raised-fist-medium-dark-skin-tone",
  "270a-1f3fc": "raised-fist-medium-light-skin-tone",
  "270a-1f3fd": "raised-fist-medium-skin-tone",
  "270b": "raised-hand",
  "270b-1f3ff": "raised-hand-dark-skin-tone",
  "270b-1f3fb": "raised-hand-light-skin-tone",
  "270b-1f3fe": "raised-hand-medium-dark-skin-tone",
  "270b-1f3fc": "raised-hand-medium-light-skin-tone",
  "270b-1f3fd": "raised-hand-medium-skin-tone",
  "1f64c": "raising-hands",
  "1f64c-1f3ff": "raising-hands-dark-skin-tone",
  "1f64c-1f3fb": "raising-hands-light-skin-tone",
  "1f64c-1f3fe": "raising-hands-medium-dark-skin-tone",
  "1f64c-1f3fc": "raising-hands-medium-light-skin-tone",
  "1f64c-1f3fd": "raising-hands-medium-skin-tone",
  "1f40f": "ram",
  "1f400": "rat",
  "1fa92": "razor",
  "1f9fe": "receipt",
  "23fa": "record-button",
  "267b": "recycling-symbol",
  "1f34e": "red-apple",
  "1f534": "red-circle",
  "1f9e7": "red-envelope",
  "1f3ee": "red-paper-lantern",
  "1f7e5": "red-square",
  "1f53b": "red-triangle-pointed-down",
  "1f53a": "red-triangle-pointed-up",
  "00ae": "registered",
  "1f60c": "relieved-face",
  "1f397": "reminder-ribbon",
  "1f501": "repeat-button",
  "1f502": "repeat-single-button",
  "26d1": "rescue-workers-helmet",
  "1f6bb": "restroom",
  "25c0": "reverse-button",
  "1f49e": "revolving-hearts",
  "1f98f": "rhinoceros",
  "1f380": "ribbon",
  "1f359": "rice-ball",
  "1f358": "rice-cracker",
  "1f5ef": "right-anger-bubble",
  "27a1": "right-arrow",
  "21a9": "right-arrow-curving-left",
  "1f91c": "right-facing-fist",
  "1f91c-1f3ff": "right-facing-fist-dark-skin-tone",
  "1f91c-1f3fb": "right-facing-fist-light-skin-tone",
  "1f91c-1f3fe": "right-facing-fist-medium-dark-skin-tone",
  "1f91c-1f3fc": "right-facing-fist-medium-light-skin-tone",
  "1f91c-1f3fd": "right-facing-fist-medium-skin-tone",
  "1faf1": "rightwards-hand",
  "1faf1-1f3ff": "rightwards-hand-dark-skin-tone",
  "1faf1-1f3fb": "rightwards-hand-light-skin-tone",
  "1faf1-1f3fe": "rightwards-hand-medium-dark-skin-tone",
  "1faf1-1f3fc": "rightwards-hand-medium-light-skin-tone",
  "1faf1-1f3fd": "rightwards-hand-medium-skin-tone",
  "1faf8": "rightwards-pushing-hand",
  "1faf8-1f3ff": "rightwards-pushing-hand-dark-skin-tone",
  "1faf8-1f3fb": "rightwards-pushing-hand-light-skin-tone",
  "1faf8-1f3fe": "rightwards-pushing-hand-medium-dark-skin-tone",
  "1faf8-1f3fc": "rightwards-pushing-hand-medium-light-skin-tone",
  "1faf8-1f3fd": "rightwards-pushing-hand-medium-skin-tone",
  "1f48d": "ring",
  "1f6df": "ring-buoy",
  "1fa90": "ringed-planet",
  "1f360": "roasted-sweet-potato",
  "1f916": "robot",
  "1faa8": "rock",
  "1f680": "rocket",
  "1f9fb": "roll-of-paper",
  "1f5de": "rolled-up-newspaper",
  "1f3a2": "roller-coaster",
  "1f6fc": "roller-skate",
  "1f923": "rolling-on-the-floor-laughing",
  "1f413": "rooster",
  "1f339": "rose",
  "1f3f5": "rosette",
  "1f4cd": "round-pushpin",
  "1f3c9": "rugby-football",
  "1f3bd": "running-shirt",
  "1f45f": "running-shoe",
  "1f625": "sad-but-relieved-face",
  "1f9f7": "safety-pin",
  "1f9ba": "safety-vest",
  "26f5": "sailboat",
  "1f376": "sake",
  "1f9c2": "salt",
  "1fae1": "saluting-face",
  "1f96a": "sandwich",
  "1f385": "santa-claus",
  "1f385-1f3ff": "santa-claus-dark-skin-tone",
  "1f385-1f3fb": "santa-claus-light-skin-tone",
  "1f385-1f3fe": "santa-claus-medium-dark-skin-tone",
  "1f385-1f3fc": "santa-claus-medium-light-skin-tone",
  "1f385-1f3fd": "santa-claus-medium-skin-tone",
  "1f97b": "sari",
  "1f6f0": "satellite",
  "1f4e1": "satellite-antenna",
  "1f995": "sauropod",
  "1f3b7": "saxophone",
  "1f9e3": "scarf",
  "1f3eb": "school",
  "1f9d1-200d-1f52c": "scientist",
  "1f9d1-1f3ff-200d-1f52c": "scientist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f52c": "scientist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f52c": "scientist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f52c": "scientist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f52c": "scientist-medium-skin-tone",
  "264f": "scorpio",
  "1f982": "scorpion",
  "1fa9b": "screwdriver",
  "1f4dc": "scroll",
  "1f9ad": "seal",
  "1f4ba": "seat",
  "1f648": "see-no-evil-monkey",
  "1f331": "seedling",
  "1f933": "selfie",
  "1f933-1f3ff": "selfie-dark-skin-tone",
  "1f933-1f3fb": "selfie-light-skin-tone",
  "1f933-1f3fe": "selfie-medium-dark-skin-tone",
  "1f933-1f3fc": "selfie-medium-light-skin-tone",
  "1f933-1f3fd": "selfie-medium-skin-tone",
  "1f415-200d-1f9ba": "service-dog",
  "1f556": "seven-oclock",
  "1f562": "seven-thirty",
  "1faa1": "sewing-needle",
  "1fae8": "shaking-face",
  "1f958": "shallow-pan-of-food",
  "1f988": "shark",
  "1f367": "shaved-ice",
  "1f33e": "sheaf-of-rice",
  "1f6e1": "shield",
  "26e9": "shinto-shrine",
  "1f6a2": "ship",
  "1f320": "shooting-star",
  "1f6cd": "shopping-bags",
  "1f6d2": "shopping-cart",
  "1f370": "shortcake",
  "1fa73": "shorts",
  "1f6bf": "shower",
  "1f990": "shrimp",
  "1f500": "shuffle-tracks-button",
  "1f92b": "shushing-face",
  "1f918": "sign-of-the-horns",
  "1f918-1f3ff": "sign-of-the-horns-dark-skin-tone",
  "1f918-1f3fb": "sign-of-the-horns-light-skin-tone",
  "1f918-1f3fe": "sign-of-the-horns-medium-dark-skin-tone",
  "1f918-1f3fc": "sign-of-the-horns-medium-light-skin-tone",
  "1f918-1f3fd": "sign-of-the-horns-medium-skin-tone",
  "1f9d1-200d-1f3a4": "singer",
  "1f9d1-1f3ff-200d-1f3a4": "singer-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3a4": "singer-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3a4": "singer-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3a4": "singer-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3a4": "singer-medium-skin-tone",
  "1f555": "six-oclock",
  "1f561": "six-thirty",
  "1f6f9": "skateboard",
  "26f7": "skier",
  "1f3bf": "skis",
  "1f480": "skull",
  "1f9a8": "skunk",
  "1f6f7": "sled",
  "1f634": "sleeping-face",
  "1f62a": "sleepy-face",
  "1f641": "slightly-frowning-face",
  "1f642": "slightly-smiling-face",
  "1f3b0": "slot-machine",
  "1f9a5": "sloth",
  "1f6e9": "small-airplane",
  "1f539": "small-blue-diamond",
  "1f538": "small-orange-diamond",
  "1f63b": "smiling-cat-with-heart-eyes",
  "263a": "smiling-face",
  "1f607": "smiling-face-with-halo",
  "1f60d": "smiling-face-with-heart-eyes",
  "1f970": "smiling-face-with-hearts",
  "1f608": "smiling-face-with-horns",
  "1f917": "smiling-face-with-open-hands",
  "1f60a": "smiling-face-with-smiling-eyes",
  "1f60e": "smiling-face-with-sunglasses",
  "1f972": "smiling-face-with-tear",
  "1f60f": "smirking-face",
  "1f40c": "snail",
  "1f40d": "snake",
  "1f927": "sneezing-face",
  "1f3d4": "snow-capped-mountain",
  "1f3c2": "snowboarder",
  "1f3c2-1f3ff": "snowboarder-dark-skin-tone",
  "1f3c2-1f3fb": "snowboarder-light-skin-tone",
  "1f3c2-1f3fe": "snowboarder-medium-dark-skin-tone",
  "1f3c2-1f3fc": "snowboarder-medium-light-skin-tone",
  "1f3c2-1f3fd": "snowboarder-medium-skin-tone",
  "26c4": "snowman-without-snow",
  "1f9fc": "soap",
  "26bd": "soccer-ball",
  "1f9e6": "socks",
  "1f366": "soft-ice-cream",
  "1f94e": "softball",
  "1f51c": "soon-arrow",
  "1f198": "sos-button",
  "1f35d": "spaghetti",
  "1f387": "sparkler",
  "1f496": "sparkling-heart",
  "1f64a": "speak-no-evil-monkey",
  "1f50a": "speaker-high-volume",
  "1f508": "speaker-low-volume",
  "1f509": "speaker-medium-volume",
  "1f5e3": "speaking-head",
  "1f4ac": "speech-balloon",
  "1f6a4": "speedboat",
  "1f577": "spider",
  "1f578": "spider-web",
  "1f5d3": "spiral-calendar",
  "1f5d2": "spiral-notepad",
  "1f41a": "spiral-shell",
  "1f9fd": "sponge",
  "1f944": "spoon",
  "1f699": "sport-utility-vehicle",
  "1f3c5": "sports-medal",
  "1f433": "spouting-whale",
  "1f991": "squid",
  "1f61d": "squinting-face-with-tongue",
  "1f3df": "stadium",
  "2b50": "star",
  "262a": "star-and-crescent",
  "1f929": "star-struck",
  "1f689": "station",
  "1f5fd": "statue-of-liberty",
  "1f35c": "steaming-bowl",
  "1fa7a": "stethoscope",
  "23f9": "stop-button",
  "1f6d1": "stop-sign",
  "23f1": "stopwatch",
  "1f4cf": "straight-ruler",
  "1f353": "strawberry",
  "1f9d1-200d-1f393": "student",
  "1f9d1-1f3ff-200d-1f393": "student-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f393": "student-light-skin-tone",
  "1f9d1-1f3fe-200d-1f393": "student-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f393": "student-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f393": "student-medium-skin-tone",
  "1f399": "studio-microphone",
  "1f959": "stuffed-flatbread",
  "26c5": "sun-behind-cloud",
  "1f325": "sun-behind-large-cloud",
  "1f326": "sun-behind-rain-cloud",
  "1f324": "sun-behind-small-cloud",
  "1f31e": "sun-with-face",
  "1f33b": "sunflower",
  "1f576": "sunglasses",
  "1f305": "sunrise",
  "1f304": "sunrise-over-mountains",
  "1f307": "sunset",
  "1f9b8": "superhero",
  "1f9b8-1f3ff": "superhero-dark-skin-tone",
  "1f9b8-1f3fb": "superhero-light-skin-tone",
  "1f9b8-1f3fe": "superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc": "superhero-medium-light-skin-tone",
  "1f9b8-1f3fd": "superhero-medium-skin-tone",
  "1f9b9": "supervillain",
  "1f9b9-1f3ff": "supervillain-dark-skin-tone",
  "1f9b9-1f3fb": "supervillain-light-skin-tone",
  "1f9b9-1f3fe": "supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc": "supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd": "supervillain-medium-skin-tone",
  "1f363": "sushi",
  "1f69f": "suspension-railway",
  "1f9a2": "swan",
  "1f4a6": "sweat-droplets",
  "1f54d": "synagogue",
  "1f489": "syringe",
  "1f996": "t-rex",
  "1f455": "t-shirt",
  "1f32e": "taco",
  "1f961": "takeout-box",
  "1fad4": "tamale",
  "1f38b": "tanabata-tree",
  "1f34a": "tangerine",
  "1f695": "taxi",
  "1f9d1-200d-1f3eb": "teacher",
  "1f9d1-1f3ff-200d-1f3eb": "teacher-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f3eb": "teacher-light-skin-tone",
  "1f9d1-1f3fe-200d-1f3eb": "teacher-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f3eb": "teacher-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f3eb": "teacher-medium-skin-tone",
  "1f375": "teacup-without-handle",
  "1fad6": "teapot",
  "1f4c6": "tear-off-calendar",
  "1f9d1-200d-1f4bb": "technologist",
  "1f9d1-1f3ff-200d-1f4bb": "technologist-dark-skin-tone",
  "1f9d1-1f3fb-200d-1f4bb": "technologist-light-skin-tone",
  "1f9d1-1f3fe-200d-1f4bb": "technologist-medium-dark-skin-tone",
  "1f9d1-1f3fc-200d-1f4bb": "technologist-medium-light-skin-tone",
  "1f9d1-1f3fd-200d-1f4bb": "technologist-medium-skin-tone",
  "1f9f8": "teddy-bear",
  "260e": "telephone",
  "1f4de": "telephone-receiver",
  "1f52d": "telescope",
  "1f4fa": "television",
  "1f559": "ten-oclock",
  "1f565": "ten-thirty",
  "1f3be": "tennis",
  "26fa": "tent",
  "1f9ea": "test-tube",
  "1f321": "thermometer",
  "1f914": "thinking-face",
  "1fa74": "thong-sandal",
  "1f4ad": "thought-balloon",
  "1f9f5": "thread",
  "1f552": "three-oclock",
  "1f55e": "three-thirty",
  "1f44e": "thumbs-down",
  "1f44e-1f3ff": "thumbs-down-dark-skin-tone",
  "1f44e-1f3fb": "thumbs-down-light-skin-tone",
  "1f44e-1f3fe": "thumbs-down-medium-dark-skin-tone",
  "1f44e-1f3fc": "thumbs-down-medium-light-skin-tone",
  "1f44e-1f3fd": "thumbs-down-medium-skin-tone",
  "1f44d": "thumbs-up",
  "1f44d-1f3ff": "thumbs-up-dark-skin-tone",
  "1f44d-1f3fb": "thumbs-up-light-skin-tone",
  "1f44d-1f3fe": "thumbs-up-medium-dark-skin-tone",
  "1f44d-1f3fc": "thumbs-up-medium-light-skin-tone",
  "1f44d-1f3fd": "thumbs-up-medium-skin-tone",
  "1f3ab": "ticket",
  "1f405": "tiger",
  "1f42f": "tiger-face",
  "23f2": "timer-clock",
  "1f62b": "tired-face",
  "1f6bd": "toilet",
  "1f5fc": "tokyo-tower",
  "1f345": "tomato",
  "1f445": "tongue",
  "1f9f0": "toolbox",
  "1f9b7": "tooth",
  "1faa5": "toothbrush",
  "1f51d": "top-arrow",
  "1f3a9": "top-hat",
  "1f32a": "tornado",
  "1f5b2": "trackball",
  "1f69c": "tractor",
  "1f686": "train",
  "1f68a": "tram",
  "1f68b": "tram-car",
  "1f3f3-200d-26a7": "transgender-flag",
  "26a7": "transgender-symbol",
  "1f6a9": "triangular-flag",
  "1f4d0": "triangular-ruler",
  "1f531": "trident-emblem",
  "1f9cc": "troll",
  "1f68e": "trolleybus",
  "1f3c6": "trophy",
  "1f379": "tropical-drink",
  "1f420": "tropical-fish",
  "1f3ba": "trumpet",
  "1f337": "tulip",
  "1f943": "tumbler-glass",
  "1f983": "turkey",
  "1f422": "turtle",
  "1f55b": "twelve-oclock",
  "1f567": "twelve-thirty",
  "1f495": "two-hearts",
  "1f42b": "two-hump-camel",
  "1f551": "two-oclock",
  "1f55d": "two-thirty",
  "26f1": "umbrella-on-ground",
  "1f612": "unamused-face",
  "1f984": "unicorn",
  "fe82b": "unknown-flag",
  "1f513": "unlocked",
  "2b06": "up-arrow",
  "1f199": "up-exclamation-button",
  "1f643": "upside-down-face",
  "1f53c": "upwards-button",
  "1f9db": "vampire",
  "1f9db-1f3ff": "vampire-dark-skin-tone",
  "1f9db-1f3fb": "vampire-light-skin-tone",
  "1f9db-1f3fe": "vampire-medium-dark-skin-tone",
  "1f9db-1f3fc": "vampire-medium-light-skin-tone",
  "1f9db-1f3fd": "vampire-medium-skin-tone",
  "1f6a6": "vertical-traffic-light",
  "1f4f3": "vibration-mode",
  "270c": "victory-hand",
  "270c-1f3ff": "victory-hand-dark-skin-tone",
  "270c-1f3fb": "victory-hand-light-skin-tone",
  "270c-1f3fe": "victory-hand-medium-dark-skin-tone",
  "270c-1f3fc": "victory-hand-medium-light-skin-tone",
  "270c-1f3fd": "victory-hand-medium-skin-tone",
  "1f4f9": "video-camera",
  "1f3ae": "video-game",
  "1f4fc": "videocassette",
  "1f3bb": "violin",
  "264d": "virgo",
  "1f30b": "volcano",
  "1f3d0": "volleyball",
  "1f19a": "vs-button",
  "1f596": "vulcan-salute",
  "1f596-1f3ff": "vulcan-salute-dark-skin-tone",
  "1f596-1f3fb": "vulcan-salute-light-skin-tone",
  "1f596-1f3fe": "vulcan-salute-medium-dark-skin-tone",
  "1f596-1f3fc": "vulcan-salute-medium-light-skin-tone",
  "1f596-1f3fd": "vulcan-salute-medium-skin-tone",
  "1f9c7": "waffle",
  "1f318": "waning-crescent-moon",
  "1f316": "waning-gibbous-moon",
  "26a0": "warning",
  "1f5d1": "wastebasket",
  "231a": "watch",
  "1f403": "water-buffalo",
  "1f6be": "water-closet",
  "1f52b": "water-pistol",
  "1f30a": "water-wave",
  "1f349": "watermelon",
  "1f44b": "waving-hand",
  "1f44b-1f3ff": "waving-hand-dark-skin-tone",
  "1f44b-1f3fb": "waving-hand-light-skin-tone",
  "1f44b-1f3fe": "waving-hand-medium-dark-skin-tone",
  "1f44b-1f3fc": "waving-hand-medium-light-skin-tone",
  "1f44b-1f3fd": "waving-hand-medium-skin-tone",
  "1f312": "waxing-crescent-moon",
  "1f314": "waxing-gibbous-moon",
  "1f640": "weary-cat",
  "1f629": "weary-face",
  "1f492": "wedding",
  "1f40b": "whale",
  "1f6de": "wheel",
  "267f": "wheelchair-symbol",
  "1f9af": "white-cane",
  "26aa": "white-circle",
  "1f3f3": "white-flag",
  "1f4ae": "white-flower",
  "1f90d": "white-heart",
  "2b1c": "white-large-square",
  "25fd": "white-medium-small-square",
  "25fb": "white-medium-square",
  "25ab": "white-small-square",
  "1f533": "white-square-button",
  "1f940": "wilted-flower",
  "1f390": "wind-chime",
  "1f32c": "wind-face",
  "1fa9f": "window",
  "1f377": "wine-glass",
  "1fabd": "wing",
  "1f609": "winking-face",
  "1f61c": "winking-face-with-tongue",
  "1f6dc": "wireless",
  "1f43a": "wolf",
  "1f469": "woman",
  "1f46b": "woman-and-man-holding-hands",
  "1f46b-1f3ff": "woman-and-man-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fb": "woman-and-man-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fe": "woman-and-man-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46b-1f3fc": "woman-and-man-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd": "woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46b-1f3fd": "woman-and-man-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff": "woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb": "woman-and-man-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe": "woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc": "woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f469-200d-1f3a8": "woman-artist",
  "1f469-1f3ff-200d-1f3a8": "woman-artist-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a8": "woman-artist-light-skin-tone",
  "1f469-1f3fe-200d-1f3a8": "woman-artist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a8": "woman-artist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a8": "woman-artist-medium-skin-tone",
  "1f469-200d-1f680": "woman-astronaut",
  "1f469-1f3ff-200d-1f680": "woman-astronaut-dark-skin-tone",
  "1f469-1f3fb-200d-1f680": "woman-astronaut-light-skin-tone",
  "1f469-1f3fe-200d-1f680": "woman-astronaut-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f680": "woman-astronaut-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f680": "woman-astronaut-medium-skin-tone",
  "1f469-200d-1f9b2": "woman-bald",
  "1f9d4-200d-2640": "woman-beard",
  "1f6b4-200d-2640": "woman-biking",
  "1f6b4-1f3ff-200d-2640": "woman-biking-dark-skin-tone",
  "1f6b4-1f3fb-200d-2640": "woman-biking-light-skin-tone",
  "1f6b4-1f3fe-200d-2640": "woman-biking-medium-dark-skin-tone",
  "1f6b4-1f3fc-200d-2640": "woman-biking-medium-light-skin-tone",
  "1f6b4-1f3fd-200d-2640": "woman-biking-medium-skin-tone",
  "1f471-200d-2640": "woman-blond-hair",
  "26f9-200d-2640": "woman-bouncing-ball",
  "26f9-1f3ff-200d-2640": "woman-bouncing-ball-dark-skin-tone",
  "26f9-1f3fb-200d-2640": "woman-bouncing-ball-light-skin-tone",
  "26f9-1f3fe-200d-2640": "woman-bouncing-ball-medium-dark-skin-tone",
  "26f9-1f3fc-200d-2640": "woman-bouncing-ball-medium-light-skin-tone",
  "26f9-1f3fd-200d-2640": "woman-bouncing-ball-medium-skin-tone",
  "1f647-200d-2640": "woman-bowing",
  "1f647-1f3ff-200d-2640": "woman-bowing-dark-skin-tone",
  "1f647-1f3fb-200d-2640": "woman-bowing-light-skin-tone",
  "1f647-1f3fe-200d-2640": "woman-bowing-medium-dark-skin-tone",
  "1f647-1f3fc-200d-2640": "woman-bowing-medium-light-skin-tone",
  "1f647-1f3fd-200d-2640": "woman-bowing-medium-skin-tone",
  "1f938-200d-2640": "woman-cartwheeling",
  "1f938-1f3ff-200d-2640": "woman-cartwheeling-dark-skin-tone",
  "1f938-1f3fb-200d-2640": "woman-cartwheeling-light-skin-tone",
  "1f938-1f3fe-200d-2640": "woman-cartwheeling-medium-dark-skin-tone",
  "1f938-1f3fc-200d-2640": "woman-cartwheeling-medium-light-skin-tone",
  "1f938-1f3fd-200d-2640": "woman-cartwheeling-medium-skin-tone",
  "1f9d7-200d-2640": "woman-climbing",
  "1f9d7-1f3ff-200d-2640": "woman-climbing-dark-skin-tone",
  "1f9d7-1f3fb-200d-2640": "woman-climbing-light-skin-tone",
  "1f9d7-1f3fe-200d-2640": "woman-climbing-medium-dark-skin-tone",
  "1f9d7-1f3fc-200d-2640": "woman-climbing-medium-light-skin-tone",
  "1f9d7-1f3fd-200d-2640": "woman-climbing-medium-skin-tone",
  "1f477-200d-2640": "woman-construction-worker",
  "1f477-1f3ff-200d-2640": "woman-construction-worker-dark-skin-tone",
  "1f477-1f3fb-200d-2640": "woman-construction-worker-light-skin-tone",
  "1f477-1f3fe-200d-2640": "woman-construction-worker-medium-dark-skin-tone",
  "1f477-1f3fc-200d-2640": "woman-construction-worker-medium-light-skin-tone",
  "1f477-1f3fd-200d-2640": "woman-construction-worker-medium-skin-tone",
  "1f469-200d-1f373": "woman-cook",
  "1f469-1f3ff-200d-1f373": "woman-cook-dark-skin-tone",
  "1f469-1f3fb-200d-1f373": "woman-cook-light-skin-tone",
  "1f469-1f3fe-200d-1f373": "woman-cook-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f373": "woman-cook-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f373": "woman-cook-medium-skin-tone",
  "1f469-200d-1f9b1": "woman-curly-hair",
  "1f483": "woman-dancing",
  "1f483-1f3ff": "woman-dancing-dark-skin-tone",
  "1f483-1f3fb": "woman-dancing-light-skin-tone",
  "1f483-1f3fe": "woman-dancing-medium-dark-skin-tone",
  "1f483-1f3fc": "woman-dancing-medium-light-skin-tone",
  "1f483-1f3fd": "woman-dancing-medium-skin-tone",
  "1f469-1f3ff": "woman-dark-skin-tone",
  "1f469-1f3ff-200d-1f9b2": "woman-dark-skin-tone-bald",
  "1f9d4-1f3ff-200d-2640": "woman-dark-skin-tone-beard",
  "1f471-1f3ff-200d-2640": "woman-dark-skin-tone-blond-hair",
  "1f469-1f3ff-200d-1f9b1": "woman-dark-skin-tone-curly-hair",
  "1f469-1f3ff-200d-1f9b0": "woman-dark-skin-tone-red-hair",
  "1f469-1f3ff-200d-1f9b3": "woman-dark-skin-tone-white-hair",
  "1f575-200d-2640": "woman-detective",
  "1f575-1f3ff-200d-2640": "woman-detective-dark-skin-tone",
  "1f575-1f3fb-200d-2640": "woman-detective-light-skin-tone",
  "1f575-1f3fe-200d-2640": "woman-detective-medium-dark-skin-tone",
  "1f575-1f3fc-200d-2640": "woman-detective-medium-light-skin-tone",
  "1f575-1f3fd-200d-2640": "woman-detective-medium-skin-tone",
  "1f9dd-200d-2640": "woman-elf",
  "1f9dd-1f3ff-200d-2640": "woman-elf-dark-skin-tone",
  "1f9dd-1f3fb-200d-2640": "woman-elf-light-skin-tone",
  "1f9dd-1f3fe-200d-2640": "woman-elf-medium-dark-skin-tone",
  "1f9dd-1f3fc-200d-2640": "woman-elf-medium-light-skin-tone",
  "1f9dd-1f3fd-200d-2640": "woman-elf-medium-skin-tone",
  "1f926-200d-2640": "woman-facepalming",
  "1f926-1f3ff-200d-2640": "woman-facepalming-dark-skin-tone",
  "1f926-1f3fb-200d-2640": "woman-facepalming-light-skin-tone",
  "1f926-1f3fe-200d-2640": "woman-facepalming-medium-dark-skin-tone",
  "1f926-1f3fc-200d-2640": "woman-facepalming-medium-light-skin-tone",
  "1f926-1f3fd-200d-2640": "woman-facepalming-medium-skin-tone",
  "1f469-200d-1f3ed": "woman-factory-worker",
  "1f469-1f3ff-200d-1f3ed": "woman-factory-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f3ed": "woman-factory-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f3ed": "woman-factory-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3ed": "woman-factory-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3ed": "woman-factory-worker-medium-skin-tone",
  "1f9da-200d-2640": "woman-fairy",
  "1f9da-1f3ff-200d-2640": "woman-fairy-dark-skin-tone",
  "1f9da-1f3fb-200d-2640": "woman-fairy-light-skin-tone",
  "1f9da-1f3fe-200d-2640": "woman-fairy-medium-dark-skin-tone",
  "1f9da-1f3fc-200d-2640": "woman-fairy-medium-light-skin-tone",
  "1f9da-1f3fd-200d-2640": "woman-fairy-medium-skin-tone",
  "1f469-200d-1f33e": "woman-farmer",
  "1f469-1f3ff-200d-1f33e": "woman-farmer-dark-skin-tone",
  "1f469-1f3fb-200d-1f33e": "woman-farmer-light-skin-tone",
  "1f469-1f3fe-200d-1f33e": "woman-farmer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f33e": "woman-farmer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f33e": "woman-farmer-medium-skin-tone",
  "1f469-200d-1f37c": "woman-feeding-baby",
  "1f469-1f3ff-200d-1f37c": "woman-feeding-baby-dark-skin-tone",
  "1f469-1f3fb-200d-1f37c": "woman-feeding-baby-light-skin-tone",
  "1f469-1f3fe-200d-1f37c": "woman-feeding-baby-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f37c": "woman-feeding-baby-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f37c": "woman-feeding-baby-medium-skin-tone",
  "1f469-200d-1f692": "woman-firefighter",
  "1f469-1f3ff-200d-1f692": "woman-firefighter-dark-skin-tone",
  "1f469-1f3fb-200d-1f692": "woman-firefighter-light-skin-tone",
  "1f469-1f3fe-200d-1f692": "woman-firefighter-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f692": "woman-firefighter-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f692": "woman-firefighter-medium-skin-tone",
  "1f64d-200d-2640": "woman-frowning",
  "1f64d-1f3ff-200d-2640": "woman-frowning-dark-skin-tone",
  "1f64d-1f3fb-200d-2640": "woman-frowning-light-skin-tone",
  "1f64d-1f3fe-200d-2640": "woman-frowning-medium-dark-skin-tone",
  "1f64d-1f3fc-200d-2640": "woman-frowning-medium-light-skin-tone",
  "1f64d-1f3fd-200d-2640": "woman-frowning-medium-skin-tone",
  "1f9de-200d-2640": "woman-genie",
  "1f645-200d-2640": "woman-gesturing-no",
  "1f645-1f3ff-200d-2640": "woman-gesturing-no-dark-skin-tone",
  "1f645-1f3fb-200d-2640": "woman-gesturing-no-light-skin-tone",
  "1f645-1f3fe-200d-2640": "woman-gesturing-no-medium-dark-skin-tone",
  "1f645-1f3fc-200d-2640": "woman-gesturing-no-medium-light-skin-tone",
  "1f645-1f3fd-200d-2640": "woman-gesturing-no-medium-skin-tone",
  "1f646-200d-2640": "woman-gesturing-ok",
  "1f646-1f3ff-200d-2640": "woman-gesturing-ok-dark-skin-tone",
  "1f646-1f3fb-200d-2640": "woman-gesturing-ok-light-skin-tone",
  "1f646-1f3fe-200d-2640": "woman-gesturing-ok-medium-dark-skin-tone",
  "1f646-1f3fc-200d-2640": "woman-gesturing-ok-medium-light-skin-tone",
  "1f646-1f3fd-200d-2640": "woman-gesturing-ok-medium-skin-tone",
  "1f487-200d-2640": "woman-getting-haircut",
  "1f487-1f3ff-200d-2640": "woman-getting-haircut-dark-skin-tone",
  "1f487-1f3fb-200d-2640": "woman-getting-haircut-light-skin-tone",
  "1f487-1f3fe-200d-2640": "woman-getting-haircut-medium-dark-skin-tone",
  "1f487-1f3fc-200d-2640": "woman-getting-haircut-medium-light-skin-tone",
  "1f487-1f3fd-200d-2640": "woman-getting-haircut-medium-skin-tone",
  "1f486-200d-2640": "woman-getting-massage",
  "1f486-1f3ff-200d-2640": "woman-getting-massage-dark-skin-tone",
  "1f486-1f3fb-200d-2640": "woman-getting-massage-light-skin-tone",
  "1f486-1f3fe-200d-2640": "woman-getting-massage-medium-dark-skin-tone",
  "1f486-1f3fc-200d-2640": "woman-getting-massage-medium-light-skin-tone",
  "1f486-1f3fd-200d-2640": "woman-getting-massage-medium-skin-tone",
  "1f3cc-200d-2640": "woman-golfing",
  "1f3cc-1f3ff-200d-2640": "woman-golfing-dark-skin-tone",
  "1f3cc-1f3fb-200d-2640": "woman-golfing-light-skin-tone",
  "1f3cc-1f3fe-200d-2640": "woman-golfing-medium-dark-skin-tone",
  "1f3cc-1f3fc-200d-2640": "woman-golfing-medium-light-skin-tone",
  "1f3cc-1f3fd-200d-2640": "woman-golfing-medium-skin-tone",
  "1f482-200d-2640": "woman-guard",
  "1f482-1f3ff-200d-2640": "woman-guard-dark-skin-tone",
  "1f482-1f3fb-200d-2640": "woman-guard-light-skin-tone",
  "1f482-1f3fe-200d-2640": "woman-guard-medium-dark-skin-tone",
  "1f482-1f3fc-200d-2640": "woman-guard-medium-light-skin-tone",
  "1f482-1f3fd-200d-2640": "woman-guard-medium-skin-tone",
  "1f469-200d-2695": "woman-health-worker",
  "1f469-1f3ff-200d-2695": "woman-health-worker-dark-skin-tone",
  "1f469-1f3fb-200d-2695": "woman-health-worker-light-skin-tone",
  "1f469-1f3fe-200d-2695": "woman-health-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2695": "woman-health-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-2695": "woman-health-worker-medium-skin-tone",
  "1f9d8-200d-2640": "woman-in-lotus-position",
  "1f9d8-1f3ff-200d-2640": "woman-in-lotus-position-dark-skin-tone",
  "1f9d8-1f3fb-200d-2640": "woman-in-lotus-position-light-skin-tone",
  "1f9d8-1f3fe-200d-2640": "woman-in-lotus-position-medium-dark-skin-tone",
  "1f9d8-1f3fc-200d-2640": "woman-in-lotus-position-medium-light-skin-tone",
  "1f9d8-1f3fd-200d-2640": "woman-in-lotus-position-medium-skin-tone",
  "1f469-200d-1f9bd": "woman-in-manual-wheelchair",
  "1f469-1f3ff-200d-1f9bd": "woman-in-manual-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd-200d-27a1": "woman-in-manual-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bd": "woman-in-manual-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bd": "woman-in-manual-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bd": "woman-in-manual-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bd": "woman-in-manual-wheelchair-medium-skin-tone",
  "1f469-200d-1f9bc": "woman-in-motorized-wheelchair",
  "1f469-1f3ff-200d-1f9bc": "woman-in-motorized-wheelchair-dark-skin-tone",
  "1f469-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right",
  "1f469-1f3ff-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc-200d-27a1": "woman-in-motorized-wheelchair-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9bc": "woman-in-motorized-wheelchair-light-skin-tone",
  "1f469-1f3fe-200d-1f9bc": "woman-in-motorized-wheelchair-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9bc": "woman-in-motorized-wheelchair-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9bc": "woman-in-motorized-wheelchair-medium-skin-tone",
  "1f9d6-200d-2640": "woman-in-steamy-room",
  "1f9d6-1f3ff-200d-2640": "woman-in-steamy-room-dark-skin-tone",
  "1f9d6-1f3fb-200d-2640": "woman-in-steamy-room-light-skin-tone",
  "1f9d6-1f3fe-200d-2640": "woman-in-steamy-room-medium-dark-skin-tone",
  "1f9d6-1f3fc-200d-2640": "woman-in-steamy-room-medium-light-skin-tone",
  "1f9d6-1f3fd-200d-2640": "woman-in-steamy-room-medium-skin-tone",
  "1f935-200d-2640": "woman-in-tuxedo",
  "1f935-1f3ff-200d-2640": "woman-in-tuxedo-dark-skin-tone",
  "1f935-1f3fb-200d-2640": "woman-in-tuxedo-light-skin-tone",
  "1f935-1f3fe-200d-2640": "woman-in-tuxedo-medium-dark-skin-tone",
  "1f935-1f3fc-200d-2640": "woman-in-tuxedo-medium-light-skin-tone",
  "1f935-1f3fd-200d-2640": "woman-in-tuxedo-medium-skin-tone",
  "1f469-200d-2696": "woman-judge",
  "1f469-1f3ff-200d-2696": "woman-judge-dark-skin-tone",
  "1f469-1f3fb-200d-2696": "woman-judge-light-skin-tone",
  "1f469-1f3fe-200d-2696": "woman-judge-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2696": "woman-judge-medium-light-skin-tone",
  "1f469-1f3fd-200d-2696": "woman-judge-medium-skin-tone",
  "1f939-200d-2640": "woman-juggling",
  "1f939-1f3ff-200d-2640": "woman-juggling-dark-skin-tone",
  "1f939-1f3fb-200d-2640": "woman-juggling-light-skin-tone",
  "1f939-1f3fe-200d-2640": "woman-juggling-medium-dark-skin-tone",
  "1f939-1f3fc-200d-2640": "woman-juggling-medium-light-skin-tone",
  "1f939-1f3fd-200d-2640": "woman-juggling-medium-skin-tone",
  "1f9ce-200d-2640": "woman-kneeling",
  "1f9ce-1f3ff-200d-2640": "woman-kneeling-dark-skin-tone",
  "1f9ce-200d-2640-200d-27a1": "woman-kneeling-facing-right",
  "1f9ce-1f3ff-200d-2640-200d-27a1": "woman-kneeling-facing-right-dark-skin-tone",
  "1f9ce-1f3fb-200d-2640-200d-27a1": "woman-kneeling-facing-right-light-skin-tone",
  "1f9ce-1f3fe-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640-200d-27a1": "woman-kneeling-facing-right-medium-skin-tone",
  "1f9ce-1f3fb-200d-2640": "woman-kneeling-light-skin-tone",
  "1f9ce-1f3fe-200d-2640": "woman-kneeling-medium-dark-skin-tone",
  "1f9ce-1f3fc-200d-2640": "woman-kneeling-medium-light-skin-tone",
  "1f9ce-1f3fd-200d-2640": "woman-kneeling-medium-skin-tone",
  "1f3cb-200d-2640": "woman-lifting-weights",
  "1f3cb-1f3ff-200d-2640": "woman-lifting-weights-dark-skin-tone",
  "1f3cb-1f3fb-200d-2640": "woman-lifting-weights-light-skin-tone",
  "1f3cb-1f3fe-200d-2640": "woman-lifting-weights-medium-dark-skin-tone",
  "1f3cb-1f3fc-200d-2640": "woman-lifting-weights-medium-light-skin-tone",
  "1f3cb-1f3fd-200d-2640": "woman-lifting-weights-medium-skin-tone",
  "1f469-1f3fb": "woman-light-skin-tone",
  "1f469-1f3fb-200d-1f9b2": "woman-light-skin-tone-bald",
  "1f9d4-1f3fb-200d-2640": "woman-light-skin-tone-beard",
  "1f471-1f3fb-200d-2640": "woman-light-skin-tone-blond-hair",
  "1f469-1f3fb-200d-1f9b1": "woman-light-skin-tone-curly-hair",
  "1f469-1f3fb-200d-1f9b0": "woman-light-skin-tone-red-hair",
  "1f469-1f3fb-200d-1f9b3": "woman-light-skin-tone-white-hair",
  "1f9d9-200d-2640": "woman-mage",
  "1f9d9-1f3ff-200d-2640": "woman-mage-dark-skin-tone",
  "1f9d9-1f3fb-200d-2640": "woman-mage-light-skin-tone",
  "1f9d9-1f3fe-200d-2640": "woman-mage-medium-dark-skin-tone",
  "1f9d9-1f3fc-200d-2640": "woman-mage-medium-light-skin-tone",
  "1f9d9-1f3fd-200d-2640": "woman-mage-medium-skin-tone",
  "1f469-200d-1f527": "woman-mechanic",
  "1f469-1f3ff-200d-1f527": "woman-mechanic-dark-skin-tone",
  "1f469-1f3fb-200d-1f527": "woman-mechanic-light-skin-tone",
  "1f469-1f3fe-200d-1f527": "woman-mechanic-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f527": "woman-mechanic-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f527": "woman-mechanic-medium-skin-tone",
  "1f469-1f3fe": "woman-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f9b2": "woman-medium-dark-skin-tone-bald",
  "1f9d4-1f3fe-200d-2640": "woman-medium-dark-skin-tone-beard",
  "1f471-1f3fe-200d-2640": "woman-medium-dark-skin-tone-blond-hair",
  "1f469-1f3fe-200d-1f9b1": "woman-medium-dark-skin-tone-curly-hair",
  "1f469-1f3fe-200d-1f9b0": "woman-medium-dark-skin-tone-red-hair",
  "1f469-1f3fe-200d-1f9b3": "woman-medium-dark-skin-tone-white-hair",
  "1f469-1f3fc": "woman-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f9b2": "woman-medium-light-skin-tone-bald",
  "1f9d4-1f3fc-200d-2640": "woman-medium-light-skin-tone-beard",
  "1f471-1f3fc-200d-2640": "woman-medium-light-skin-tone-blond-hair",
  "1f469-1f3fc-200d-1f9b1": "woman-medium-light-skin-tone-curly-hair",
  "1f469-1f3fc-200d-1f9b0": "woman-medium-light-skin-tone-red-hair",
  "1f469-1f3fc-200d-1f9b3": "woman-medium-light-skin-tone-white-hair",
  "1f469-1f3fd": "woman-medium-skin-tone",
  "1f469-1f3fd-200d-1f9b2": "woman-medium-skin-tone-bald",
  "1f9d4-1f3fd-200d-2640": "woman-medium-skin-tone-beard",
  "1f471-1f3fd-200d-2640": "woman-medium-skin-tone-blond-hair",
  "1f469-1f3fd-200d-1f9b1": "woman-medium-skin-tone-curly-hair",
  "1f469-1f3fd-200d-1f9b0": "woman-medium-skin-tone-red-hair",
  "1f469-1f3fd-200d-1f9b3": "woman-medium-skin-tone-white-hair",
  "1f6b5-200d-2640": "woman-mountain-biking",
  "1f6b5-1f3ff-200d-2640": "woman-mountain-biking-dark-skin-tone",
  "1f6b5-1f3fb-200d-2640": "woman-mountain-biking-light-skin-tone",
  "1f6b5-1f3fe-200d-2640": "woman-mountain-biking-medium-dark-skin-tone",
  "1f6b5-1f3fc-200d-2640": "woman-mountain-biking-medium-light-skin-tone",
  "1f6b5-1f3fd-200d-2640": "woman-mountain-biking-medium-skin-tone",
  "1f469-200d-1f4bc": "woman-office-worker",
  "1f469-1f3ff-200d-1f4bc": "woman-office-worker-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bc": "woman-office-worker-light-skin-tone",
  "1f469-1f3fe-200d-1f4bc": "woman-office-worker-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bc": "woman-office-worker-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bc": "woman-office-worker-medium-skin-tone",
  "1f469-200d-2708": "woman-pilot",
  "1f469-1f3ff-200d-2708": "woman-pilot-dark-skin-tone",
  "1f469-1f3fb-200d-2708": "woman-pilot-light-skin-tone",
  "1f469-1f3fe-200d-2708": "woman-pilot-medium-dark-skin-tone",
  "1f469-1f3fc-200d-2708": "woman-pilot-medium-light-skin-tone",
  "1f469-1f3fd-200d-2708": "woman-pilot-medium-skin-tone",
  "1f93e-200d-2640": "woman-playing-handball",
  "1f93e-1f3ff-200d-2640": "woman-playing-handball-dark-skin-tone",
  "1f93e-1f3fb-200d-2640": "woman-playing-handball-light-skin-tone",
  "1f93e-1f3fe-200d-2640": "woman-playing-handball-medium-dark-skin-tone",
  "1f93e-1f3fc-200d-2640": "woman-playing-handball-medium-light-skin-tone",
  "1f93e-1f3fd-200d-2640": "woman-playing-handball-medium-skin-tone",
  "1f93d-200d-2640": "woman-playing-water-polo",
  "1f93d-1f3ff-200d-2640": "woman-playing-water-polo-dark-skin-tone",
  "1f93d-1f3fb-200d-2640": "woman-playing-water-polo-light-skin-tone",
  "1f93d-1f3fe-200d-2640": "woman-playing-water-polo-medium-dark-skin-tone",
  "1f93d-1f3fc-200d-2640": "woman-playing-water-polo-medium-light-skin-tone",
  "1f93d-1f3fd-200d-2640": "woman-playing-water-polo-medium-skin-tone",
  "1f46e-200d-2640": "woman-police-officer",
  "1f46e-1f3ff-200d-2640": "woman-police-officer-dark-skin-tone",
  "1f46e-1f3fb-200d-2640": "woman-police-officer-light-skin-tone",
  "1f46e-1f3fe-200d-2640": "woman-police-officer-medium-dark-skin-tone",
  "1f46e-1f3fc-200d-2640": "woman-police-officer-medium-light-skin-tone",
  "1f46e-1f3fd-200d-2640": "woman-police-officer-medium-skin-tone",
  "1f64e-200d-2640": "woman-pouting",
  "1f64e-1f3ff-200d-2640": "woman-pouting-dark-skin-tone",
  "1f64e-1f3fb-200d-2640": "woman-pouting-light-skin-tone",
  "1f64e-1f3fe-200d-2640": "woman-pouting-medium-dark-skin-tone",
  "1f64e-1f3fc-200d-2640": "woman-pouting-medium-light-skin-tone",
  "1f64e-1f3fd-200d-2640": "woman-pouting-medium-skin-tone",
  "1f64b-200d-2640": "woman-raising-hand",
  "1f64b-1f3ff-200d-2640": "woman-raising-hand-dark-skin-tone",
  "1f64b-1f3fb-200d-2640": "woman-raising-hand-light-skin-tone",
  "1f64b-1f3fe-200d-2640": "woman-raising-hand-medium-dark-skin-tone",
  "1f64b-1f3fc-200d-2640": "woman-raising-hand-medium-light-skin-tone",
  "1f64b-1f3fd-200d-2640": "woman-raising-hand-medium-skin-tone",
  "1f469-200d-1f9b0": "woman-red-hair",
  "1f6a3-200d-2640": "woman-rowing-boat",
  "1f6a3-1f3ff-200d-2640": "woman-rowing-boat-dark-skin-tone",
  "1f6a3-1f3fb-200d-2640": "woman-rowing-boat-light-skin-tone",
  "1f6a3-1f3fe-200d-2640": "woman-rowing-boat-medium-dark-skin-tone",
  "1f6a3-1f3fc-200d-2640": "woman-rowing-boat-medium-light-skin-tone",
  "1f6a3-1f3fd-200d-2640": "woman-rowing-boat-medium-skin-tone",
  "1f3c3-200d-2640": "woman-running",
  "1f3c3-1f3ff-200d-2640": "woman-running-dark-skin-tone",
  "1f3c3-200d-2640-200d-27a1": "woman-running-facing-right",
  "1f3c3-1f3ff-200d-2640-200d-27a1": "woman-running-facing-right-dark-skin-tone",
  "1f3c3-1f3fb-200d-2640-200d-27a1": "woman-running-facing-right-light-skin-tone",
  "1f3c3-1f3fe-200d-2640-200d-27a1": "woman-running-facing-right-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640-200d-27a1": "woman-running-facing-right-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640-200d-27a1": "woman-running-facing-right-medium-skin-tone",
  "1f3c3-1f3fb-200d-2640": "woman-running-light-skin-tone",
  "1f3c3-1f3fe-200d-2640": "woman-running-medium-dark-skin-tone",
  "1f3c3-1f3fc-200d-2640": "woman-running-medium-light-skin-tone",
  "1f3c3-1f3fd-200d-2640": "woman-running-medium-skin-tone",
  "1f469-200d-1f52c": "woman-scientist",
  "1f469-1f3ff-200d-1f52c": "woman-scientist-dark-skin-tone",
  "1f469-1f3fb-200d-1f52c": "woman-scientist-light-skin-tone",
  "1f469-1f3fe-200d-1f52c": "woman-scientist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f52c": "woman-scientist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f52c": "woman-scientist-medium-skin-tone",
  "1f937-200d-2640": "woman-shrugging",
  "1f937-1f3ff-200d-2640": "woman-shrugging-dark-skin-tone",
  "1f937-1f3fb-200d-2640": "woman-shrugging-light-skin-tone",
  "1f937-1f3fe-200d-2640": "woman-shrugging-medium-dark-skin-tone",
  "1f937-1f3fc-200d-2640": "woman-shrugging-medium-light-skin-tone",
  "1f937-1f3fd-200d-2640": "woman-shrugging-medium-skin-tone",
  "1f469-200d-1f3a4": "woman-singer",
  "1f469-1f3ff-200d-1f3a4": "woman-singer-dark-skin-tone",
  "1f469-1f3fb-200d-1f3a4": "woman-singer-light-skin-tone",
  "1f469-1f3fe-200d-1f3a4": "woman-singer-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3a4": "woman-singer-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3a4": "woman-singer-medium-skin-tone",
  "1f9cd-200d-2640": "woman-standing",
  "1f9cd-1f3ff-200d-2640": "woman-standing-dark-skin-tone",
  "1f9cd-1f3fb-200d-2640": "woman-standing-light-skin-tone",
  "1f9cd-1f3fe-200d-2640": "woman-standing-medium-dark-skin-tone",
  "1f9cd-1f3fc-200d-2640": "woman-standing-medium-light-skin-tone",
  "1f9cd-1f3fd-200d-2640": "woman-standing-medium-skin-tone",
  "1f469-200d-1f393": "woman-student",
  "1f469-1f3ff-200d-1f393": "woman-student-dark-skin-tone",
  "1f469-1f3fb-200d-1f393": "woman-student-light-skin-tone",
  "1f469-1f3fe-200d-1f393": "woman-student-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f393": "woman-student-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f393": "woman-student-medium-skin-tone",
  "1f9b8-200d-2640": "woman-superhero",
  "1f9b8-1f3ff-200d-2640": "woman-superhero-dark-skin-tone",
  "1f9b8-1f3fb-200d-2640": "woman-superhero-light-skin-tone",
  "1f9b8-1f3fe-200d-2640": "woman-superhero-medium-dark-skin-tone",
  "1f9b8-1f3fc-200d-2640": "woman-superhero-medium-light-skin-tone",
  "1f9b8-1f3fd-200d-2640": "woman-superhero-medium-skin-tone",
  "1f9b9-200d-2640": "woman-supervillain",
  "1f9b9-1f3ff-200d-2640": "woman-supervillain-dark-skin-tone",
  "1f9b9-1f3fb-200d-2640": "woman-supervillain-light-skin-tone",
  "1f9b9-1f3fe-200d-2640": "woman-supervillain-medium-dark-skin-tone",
  "1f9b9-1f3fc-200d-2640": "woman-supervillain-medium-light-skin-tone",
  "1f9b9-1f3fd-200d-2640": "woman-supervillain-medium-skin-tone",
  "1f3c4-200d-2640": "woman-surfing",
  "1f3c4-1f3ff-200d-2640": "woman-surfing-dark-skin-tone",
  "1f3c4-1f3fb-200d-2640": "woman-surfing-light-skin-tone",
  "1f3c4-1f3fe-200d-2640": "woman-surfing-medium-dark-skin-tone",
  "1f3c4-1f3fc-200d-2640": "woman-surfing-medium-light-skin-tone",
  "1f3c4-1f3fd-200d-2640": "woman-surfing-medium-skin-tone",
  "1f3ca-200d-2640": "woman-swimming",
  "1f3ca-1f3ff-200d-2640": "woman-swimming-dark-skin-tone",
  "1f3ca-1f3fb-200d-2640": "woman-swimming-light-skin-tone",
  "1f3ca-1f3fe-200d-2640": "woman-swimming-medium-dark-skin-tone",
  "1f3ca-1f3fc-200d-2640": "woman-swimming-medium-light-skin-tone",
  "1f3ca-1f3fd-200d-2640": "woman-swimming-medium-skin-tone",
  "1f469-200d-1f3eb": "woman-teacher",
  "1f469-1f3ff-200d-1f3eb": "woman-teacher-dark-skin-tone",
  "1f469-1f3fb-200d-1f3eb": "woman-teacher-light-skin-tone",
  "1f469-1f3fe-200d-1f3eb": "woman-teacher-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f3eb": "woman-teacher-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f3eb": "woman-teacher-medium-skin-tone",
  "1f469-200d-1f4bb": "woman-technologist",
  "1f469-1f3ff-200d-1f4bb": "woman-technologist-dark-skin-tone",
  "1f469-1f3fb-200d-1f4bb": "woman-technologist-light-skin-tone",
  "1f469-1f3fe-200d-1f4bb": "woman-technologist-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f4bb": "woman-technologist-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f4bb": "woman-technologist-medium-skin-tone",
  "1f481-200d-2640": "woman-tipping-hand",
  "1f481-1f3ff-200d-2640": "woman-tipping-hand-dark-skin-tone",
  "1f481-1f3fb-200d-2640": "woman-tipping-hand-light-skin-tone",
  "1f481-1f3fe-200d-2640": "woman-tipping-hand-medium-dark-skin-tone",
  "1f481-1f3fc-200d-2640": "woman-tipping-hand-medium-light-skin-tone",
  "1f481-1f3fd-200d-2640": "woman-tipping-hand-medium-skin-tone",
  "1f9db-200d-2640": "woman-vampire",
  "1f9db-1f3ff-200d-2640": "woman-vampire-dark-skin-tone",
  "1f9db-1f3fb-200d-2640": "woman-vampire-light-skin-tone",
  "1f9db-1f3fe-200d-2640": "woman-vampire-medium-dark-skin-tone",
  "1f9db-1f3fc-200d-2640": "woman-vampire-medium-light-skin-tone",
  "1f9db-1f3fd-200d-2640": "woman-vampire-medium-skin-tone",
  "1f6b6-200d-2640": "woman-walking",
  "1f6b6-1f3ff-200d-2640": "woman-walking-dark-skin-tone",
  "1f6b6-200d-2640-200d-27a1": "woman-walking-facing-right",
  "1f6b6-1f3ff-200d-2640-200d-27a1": "woman-walking-facing-right-dark-skin-tone",
  "1f6b6-1f3fb-200d-2640-200d-27a1": "woman-walking-facing-right-light-skin-tone",
  "1f6b6-1f3fe-200d-2640-200d-27a1": "woman-walking-facing-right-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640-200d-27a1": "woman-walking-facing-right-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640-200d-27a1": "woman-walking-facing-right-medium-skin-tone",
  "1f6b6-1f3fb-200d-2640": "woman-walking-light-skin-tone",
  "1f6b6-1f3fe-200d-2640": "woman-walking-medium-dark-skin-tone",
  "1f6b6-1f3fc-200d-2640": "woman-walking-medium-light-skin-tone",
  "1f6b6-1f3fd-200d-2640": "woman-walking-medium-skin-tone",
  "1f473-200d-2640": "woman-wearing-turban",
  "1f473-1f3ff-200d-2640": "woman-wearing-turban-dark-skin-tone",
  "1f473-1f3fb-200d-2640": "woman-wearing-turban-light-skin-tone",
  "1f473-1f3fe-200d-2640": "woman-wearing-turban-medium-dark-skin-tone",
  "1f473-1f3fc-200d-2640": "woman-wearing-turban-medium-light-skin-tone",
  "1f473-1f3fd-200d-2640": "woman-wearing-turban-medium-skin-tone",
  "1f469-200d-1f9b3": "woman-white-hair",
  "1f9d5": "woman-with-headscarf",
  "1f9d5-1f3ff": "woman-with-headscarf-dark-skin-tone",
  "1f9d5-1f3fb": "woman-with-headscarf-light-skin-tone",
  "1f9d5-1f3fe": "woman-with-headscarf-medium-dark-skin-tone",
  "1f9d5-1f3fc": "woman-with-headscarf-medium-light-skin-tone",
  "1f9d5-1f3fd": "woman-with-headscarf-medium-skin-tone",
  "1f470-200d-2640": "woman-with-veil",
  "1f470-1f3ff-200d-2640": "woman-with-veil-dark-skin-tone",
  "1f470-1f3fb-200d-2640": "woman-with-veil-light-skin-tone",
  "1f470-1f3fe-200d-2640": "woman-with-veil-medium-dark-skin-tone",
  "1f470-1f3fc-200d-2640": "woman-with-veil-medium-light-skin-tone",
  "1f470-1f3fd-200d-2640": "woman-with-veil-medium-skin-tone",
  "1f469-200d-1f9af": "woman-with-white-cane",
  "1f469-1f3ff-200d-1f9af": "woman-with-white-cane-dark-skin-tone",
  "1f469-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right",
  "1f469-1f3ff-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-dark-skin-tone",
  "1f469-1f3fb-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-light-skin-tone",
  "1f469-1f3fe-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af-200d-27a1": "woman-with-white-cane-facing-right-medium-skin-tone",
  "1f469-1f3fb-200d-1f9af": "woman-with-white-cane-light-skin-tone",
  "1f469-1f3fe-200d-1f9af": "woman-with-white-cane-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f9af": "woman-with-white-cane-medium-light-skin-tone",
  "1f469-1f3fd-200d-1f9af": "woman-with-white-cane-medium-skin-tone",
  "1f9df-200d-2640": "woman-zombie",
  "1f462": "womans-boot",
  "1f45a": "womans-clothes",
  "1f452": "womans-hat",
  "1f461": "womans-sandal",
  "1f46d": "women-holding-hands",
  "1f46d-1f3ff": "women-holding-hands-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-dark-skin-tone-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-dark-skin-tone-medium-dark-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fb": "women-holding-hands-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-light-skin-tone-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-light-skin-tone-medium-light-skin-tone",
  "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fe": "women-holding-hands-medium-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
  "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-dark-skin-tone-medium-skin-tone",
  "1f46d-1f3fc": "women-holding-hands-medium-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-light-skin-tone-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-light-skin-tone-light-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd": "women-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "1f46d-1f3fd": "women-holding-hands-medium-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff": "women-holding-hands-medium-skin-tone-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb": "women-holding-hands-medium-skin-tone-light-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe": "women-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc": "women-holding-hands-medium-skin-tone-medium-light-skin-tone",
  "1f46f-200d-2640": "women-with-bunny-ears",
  "1f93c-200d-2640": "women-wrestling",
  "1f93c-1f3ff-200d-2640": "women-wrestling-dark-skin-tone",
  "1f93c-1f3fb-200d-2640": "women-wrestling-light-skin-tone",
  "1f93c-1f3fe-200d-2640": "women-wrestling-medium-dark-skin-tone",
  "1f93c-1f3fc-200d-2640": "women-wrestling-medium-light-skin-tone",
  "1f93c-1f3fd-200d-2640": "women-wrestling-medium-skin-tone",
  "1f6ba": "womens-room",
  "1fab5": "wood",
  "1f974": "woozy-face",
  "1f5fa": "world-map",
  "1fab1": "worm",
  "1f61f": "worried-face",
  "1f381": "wrapped-gift",
  "1f527": "wrench",
  "270d": "writing-hand",
  "270d-1f3ff": "writing-hand-dark-skin-tone",
  "270d-1f3fb": "writing-hand-light-skin-tone",
  "270d-1f3fe": "writing-hand-medium-dark-skin-tone",
  "270d-1f3fc": "writing-hand-medium-light-skin-tone",
  "270d-1f3fd": "writing-hand-medium-skin-tone",
  "1fa7b": "x-ray",
  "1f9f6": "yarn",
  "1f971": "yawning-face",
  "1f7e1": "yellow-circle",
  "1f49b": "yellow-heart",
  "1f7e8": "yellow-square",
  "1f4b4": "yen-banknote",
  "262f": "yin-yang",
  "1fa80": "yo-yo",
  "1f92a": "zany-face",
  "1f993": "zebra",
  "1f910": "zipper-mouth-face",
  "1f9df": "zombie",
  "1f4a4": "zzz"
};
const RE_MATCH_EMOJIS = /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
async function applyEmojis(ctx, island) {
  const html = island.html;
  const matches = html.match(RE_MATCH_EMOJIS);
  if (!matches)
    return html;
  const replacements = await Promise.all(matches.map(async (match) => {
    const unicode = match.codePointAt(0).toString(16);
    const emoji = charMap[unicode];
    if (emoji) {
      const key = ["1", ctx.options.emojis, emoji].join(":");
      let svg;
      if (await emojiCache.hasItem(key))
        svg = await emojiCache.getItem(key);
      if (!svg) {
        svg = await $fetch(`https://api.iconify.design/${ctx.options.emojis}/${emoji}.svg`, {
          responseType: "text",
          retry: 3,
          retryDelay: 1e3
        });
        if (svg === "404")
          svg = void 0;
        if (svg)
          await emojiCache.setItem(key, svg);
      }
      if (svg)
        return `
${svg.replace("<svg ", '<svg data-emoji style="margin: 0 .05em 0 .15em; vertical-align: -0.1em;" ')}
`;
      return match;
    }
  }));
  const finalHtml = html.replace(RE_MATCH_EMOJIS, () => replacements.shift());
  const modified = finalHtml !== island.html;
  island.html = finalHtml;
  return modified;
}

async function applyInlineCss(ctx, island) {
  const { e } = ctx;
  let html = island.html;
  let css = island.head.style?.map((s) => s.innerHTML).filter(Boolean).join("\n") || "";
  const componentInlineStyles = island.head.link?.filter((l) => l.href.startsWith("/_nuxt/components") && l.href.replaceAll("/", "").includes(ctx.options.component)) || [];
  if (!componentInlineStyles.length) {
    return false;
  }
  let linksToCss = [];
  {
    const cssResults = componentInlineStyles.length ? await Promise.all(
      componentInlineStyles.map((l) => {
        const url = l.href.endsWith("lang.css") ? `${l.href}&hmr=false` : l.href;
        return e.$fetch(url, {
          responseType: "text",
          baseURL: useNitroOrigin(e)
        }).then((res) => {
          if (res.includes("__vite__css"))
            return res.match(/__vite__css = "([^"]+)"/)?.[1] || "";
          return res.trim().split("\n").filter((l2) => !l2.startsWith("//")).join("\n").trim();
        }).catch(() => {
          return "";
        });
      })
    ) : [];
    linksToCss = cssResults;
    css = [linksToCss.join("\n"), css].join("\n");
  }
  if (!css.trim().length)
    return false;
  const cssInline = await useCssInline();
  if (!cssInline || cssInline?.__mock__) {
    if (componentInlineStyles.length) {
      const logger = createConsola().withTag("Nuxt OG Image");
      logger.warn("To have inline styles applied you need to install either the `@css-inline/css-inline` or `@css-inline/css-inline-wasm` package.");
    }
    return false;
  }
  html = cssInline.inline(island.html, {
    loadRemoteStylesheets: false,
    extraCss: css
  });
  const classes = css.match(/\.([\w-]+)/g)?.map((c) => c.replace(".", ""));
  if (classes)
    html = html.replace(new RegExp(`class="(${classes.join("|")})"`, "g"), "");
  island.html = html;
  return true;
}

async function createVNodes(ctx) {
  let html = ctx.options.html;
  if (!html) {
    const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
    island.html = htmlDecodeQuotes(island.html);
    await applyInlineCss(ctx, island);
    await applyEmojis(ctx, island);
    html = island.html;
    if (html?.includes("<body>")) {
      html = html.match(/<body>([\s\S]*)<\/body>/)?.[1] || "";
    }
  }
  const template = `<div style="position: relative; display: flex; margin: 0 auto; width: ${ctx.options.width}px; height: ${ctx.options.height}px; overflow: hidden;">${html}</div>`;
  const satoriTree = html$1(template);
  walkSatoriTree(ctx, satoriTree, [
    emojis,
    classes,
    flex,
    encoding,
    nuxtIcon
  ]);
  await Promise.all(walkSatoriTree(ctx, satoriTree, [
    unocss,
    imageSrc
  ]));
  return satoriTree;
}

const fontPromises = {};
async function resolveFonts(event) {
  const { fonts } = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput([...event.options.fonts || [], ...fonts]);
  const localFontPromises = [];
  const preloadedFonts = [];
  if (fontCache) {
    for (const font of normalisedFonts) {
      if (await fontCache.hasItem(font.cacheKey)) {
        font.data = await fontCache.getItemRaw(font.cacheKey) || void 0;
        preloadedFonts.push(font);
      } else {
        if (!fontPromises[font.cacheKey]) {
          fontPromises[font.cacheKey] = loadFont(event, font).then(async (_font) => {
            if (_font?.data)
              await fontCache?.setItemRaw(_font.cacheKey, _font.data);
            return _font;
          });
        }
        localFontPromises.push(fontPromises[font.cacheKey]);
      }
    }
  }
  const awaitedFonts = await Promise.all(localFontPromises);
  return [...preloadedFonts, ...awaitedFonts].map((_f) => {
    return { name: _f.name, data: _f.data, style: _f.style, weight: Number(_f.weight) };
  });
}
async function createSvg(event) {
  const { options } = event;
  const { satoriOptions: _satoriOptions } = useOgImageRuntimeConfig();
  const [satori, vnodes, fonts] = await Promise.all([
    useSatori(),
    createVNodes(event),
    resolveFonts(event)
  ]);
  await event._nitro.hooks.callHook("nuxt-og-image:satori:vnodes", vnodes, event);
  const satoriOptions = defu$1(options.satori, _satoriOptions, {
    fonts,
    tailwindConfig: { theme },
    embedFont: true,
    width: options.width,
    height: options.height
  });
  return satori(vnodes, satoriOptions).catch((err) => {
    return sendError(event.e, err, true);
  });
}
async function createPng(event) {
  const { resvgOptions } = useOgImageRuntimeConfig();
  const svg = await createSvg(event);
  if (!svg)
    throw new Error("Failed to create SVG");
  const Resvg = await useResvg();
  const resvg = new Resvg(svg, defu$1(
    event.options.resvg,
    resvgOptions
  ));
  const pngData = resvg.render();
  return pngData.asPng();
}
async function createJpeg(event) {
  const { sharpOptions } = useOgImageRuntimeConfig();
  if (compatibility.sharp === false) {
    {
      throw new Error("Sharp dependency is not accessible. Please check you have it installed and are using a compatible runtime.");
    }
  }
  const svg = await createSvg(event);
  if (!svg) {
    throw new Error("Failed to create SVG for JPEG rendering.");
  }
  const svgBuffer = Buffer.from(svg);
  const sharp = await useSharp().catch(() => {
    {
      throw new Error("Sharp dependency could not be loaded. Please check you have it installed and are using a compatible runtime.");
    }
  });
  if (!sharp) {
    console.error("Sharp dependency is not accessible. Please check you have it installed and are using a compatible runtime. Falling back to png.");
    return createPng(event);
  }
  const options = defu$1(event.options.sharp, sharpOptions);
  return sharp(svgBuffer, options).jpeg(options).toBuffer();
}
const SatoriRenderer = {
  name: "satori",
  supportedFormats: ["png", "jpeg", "jpg", "json"],
  async createImage(e) {
    switch (e.extension) {
      case "png":
        return createPng(e);
      case "jpeg":
      case "jpg":
        return createJpeg(e);
    }
  },
  async debug(e) {
    const [vnodes, svg] = await Promise.all([
      createVNodes(e),
      createSvg(e)
    ]);
    return {
      vnodes,
      svg
    };
  }
};

const renderer$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createSvg: createSvg,
  default: SatoriRenderer
}, Symbol.toStringTag, { value: 'Module' }));

const chromePath = Launcher.getFirstInstallation();
async function createBrowser() {
  return playwrightCore.chromium.launch({
    headless: true,
    executablePath: chromePath
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (false && !options.html) ;
    await page.setViewportSize({
      width: toValue(options.width) || 1200,
      height: toValue(options.height) || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

const renderer$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ChromiumRenderer
}, Symbol.toStringTag, { value: 'Module' }));

var map$4 = {
	cluster: {
		details: "点击图片查看详情",
		nearbyPhotos: "附近有 {0} 张照片"
	}
};
var ui$4 = {
	livePhoto: "实况",
	action: {
		dashboard: {
			tooltip: "控制台"
		},
		filter: {
			empty: {
				cameras: "没有相机信息",
				cities: "没有城市信息",
				lenses: "没有镜头信息",
				tags: "没有标签"
			},
			rating: {
				showAll: "展示所有照片",
				showStarsAndAbove: "展示 {count} 星以上的照片"
			},
			tabs: {
				cameras: "相机",
				cities: "城市",
				lenses: "镜头",
				ratings: "评分",
				tags: "标签"
			},
			title: "筛选照片",
			tooltip: "筛选照片",
			clearAll: "清除全部"
		},
		logout: {
			tooltip: "登出"
		},
		sort: {
			options: {
				dateTakenAsc: "日期(最旧的在前)",
				dateTakenDesc: "日期(最新的在前)",
				fileSizeAsc: "文件大小(升序)",
				fileSizeDesc: "文件大小(降序)",
				titleAsc: "标题(A-Z)",
				titleDesc: "标题(Z-A)",
				shuffle: "打乱顺序"
			},
			title: "排序方式",
			tooltip: "照片排序"
		},
		theme: {
			tooltip: "颜色主题"
		},
		globe: {
			tooltip: "地球仪"
		},
		home: {
			tooltip: "返回首页"
		},
		share: {
			tooltip: "分享照片",
			title: "分享照片",
			tabs: {
				social: "社交分享",
				advanced: "高级分享"
			},
			platforms: {
				twitter: "Twitter",
				telegram: "Telegram",
				weibo: "微博",
				facebook: "Facebook",
				whatsapp: "WhatsApp",
				linkedin: "LinkedIn"
			},
			actions: {
				nativeShare: "使用系统分享",
				copyLink: "复制链接",
				copyImage: "复制图片",
				downloadImage: "下载原图",
				generateShareImage: "生成分享图片",
				shareUrl: "分享链接",
				downloadOgImage: "下载预览图",
				downloadOriginal: "下载原图",
				downloadOriginalImage: "下载原图"
			},
			success: {
				linkCopied: "链接已复制到剪贴板",
				imageCopied: "图片已复制到剪贴板",
				ogImageDownloaded: "预览图下载成功",
				originalImageDownloaded: "原图下载成功"
			},
			error: {
				copyNotSupported: "当前浏览器不支持复制功能",
				shareFailed: "分享失败",
				nativeShareFailed: "原生分享失败",
				linkCopyFailed: "链接复制失败",
				ogImageDownloadFailed: "预览图下载失败",
				originalImageDownloadFailed: "原图下载失败"
			},
			ogImage: {
				title: "分享预览图",
				alt: "照片分享预览图",
				loading: "加载中...",
				loadError: "加载失败"
			},
			fallback: {
				photoTitle: "美丽的照片"
			},
			text: {
				prefix: "来看看这张照片:"
			}
		},
		backtotop: {
			tooltip: "回到顶部"
		}
	},
	stats: {
		totalPhotosWithRange: "{range}, 共 @:plural.photo",
		noPhotosTip: "还没有照片，快去上传一些吧！"
	},
	indexPanelCountCity: "等 {count} 个城市",
	album: {
		noImage: "空相簿",
		emptyAlbumTip: "添加照片开始吧",
		noDescription: "无描述"
	}
};
var album$4 = {
	notFound: "相簿未找到",
	noDateInfo: "无日期信息",
	noPhotosTip: "该相簿中还没有照片",
	emptyAlbumTitle: "相簿是空的",
	emptyAlbumDescription: "更多精彩，将会呈现于此。",
	failedToLoadTitle: "加载相簿失败",
	failedToLoadDescription: "加载此相簿时出现问题。",
	failedToLoad: "加载相簿失败",
	backToAlbums: "返回相簿",
	noDescription: "无描述",
	photo: "无照片 | 一张照片 | {count} 张照片",
	createdAt: "创建于 {time}",
	metadata: {
		photos: "照片",
		dateRange: "日期范围",
		created: "创建"
	}
};
var minimap$4 = {
	loading: "加载小地图..."
};
var viewer$4 = {
	hint: {
		livePhoto: {
			mobile: "长按播放实况照片 · 双击或捏合缩放",
			desktop: "悬停左上播放 · 双击/滚轮缩放"
		},
		mobile: "双击或捏合缩放",
		desktop: "双击或用鼠标滚轮缩放"
	},
	reaction: {
		add: "表态",
		change: "已表态",
		count: "无表态 | {count} 个表态 | {count} 个表态",
		like: "点赞",
		love: "爱心",
		amazing: "花痴",
		funny: "笑哭了",
		wow: "吃惊",
		sad: "哭",
		fire: "火焰",
		sparkle: "星星"
	},
	photoload: {
		loadError: "图片加载失败",
		loading: "正在加载图片",
		converting: "正在转换中...",
		loadingWebGL: "正在加载 WebGL...",
		loadingHEIC: "HEIC 图片加载中...",
		loadingTexture: "正在构建纹理"
	}
};
var exif$4 = {
	sections: {
		basic: "基本信息",
		deviceInfomation: "设备信息",
		specification: "技术参数",
		rating: "评分",
		tags: "标签",
		albums: "包含的相册",
		histogram: "直方图",
		capture: {
		},
		shooting: {
			parameters: "拍摄参数",
			mode: "拍摄模式"
		}
	},
	filename: "文件名",
	fileSize: "文件大小",
	resolution: "分辨率",
	pixels: "像素",
	dateTaken: {
		title: "拍摄时间"
	},
	colorSpace: {
		title: "色彩空间"
	},
	artist: "艺术家",
	software: "软件",
	tz: "时区",
	country: "国家",
	city: "城市",
	gps: {
		title: "坐标"
	},
	focal: {
		length: {
			actual: "焦距",
			equivalent: "35mm 等效"
		},
		plane: {
			resolution: "焦平面分辨率"
		}
	},
	maxAperture: "最大光圈",
	aperture: "光圈",
	exposure: {
		time: "曝光时间",
		program: "曝光程序",
		mode: "曝光模式"
	},
	camera: "相机",
	lens: "镜头",
	wb: {
		title: "白平衡",
		shiftAB: "白平衡偏移(琥珀-蓝)",
		shiftGM: "白平衡偏移(绿-品红)",
		bias: "白平衡偏移",
		fineTune: "白平衡微调"
	},
	metering: {
		title: "测光模式"
	},
	flash: {
		title: "闪光灯",
		meteringMode: "闪光灯测光模式"
	},
	scene: {
		captureType: "场景捕捉类型"
	},
	brightness: {
		value: "亮度"
	},
	sensing: {
		method: "感光方式"
	},
	values: {
		exposureProgram: {
			notDefined: "未定义",
			manual: "手动",
			programAe: "程序自动曝光",
			aperturePriorityAe: "光圈优先自动曝光",
			shutterSpeedPriorityAe: "快门优先自动曝光",
			creativeSlowSpeed: "创意（慢速）",
			actionHighSpeed: "动作（高速）",
			portrait: "人像",
			landscape: "风景",
			bulb: "B门"
		},
		exposureMode: {
			auto: "自动",
			manual: "手动",
			autoBracket: "自动包围曝光"
		},
		flash: {
			noFlash: "未闪光",
			fired: "已闪光",
			firedReturnNotDetected: "已闪光，未检测到回光",
			firedReturnDetected: "已闪光，检测到回光",
			onDidNotFire: "开启，未闪光",
			onFired: "开启，已闪光",
			onReturnNotDetected: "开启，未检测到回光",
			onReturnDetected: "开启，检测到回光",
			offDidNotFire: "关闭，未闪光",
			offDidNotFireReturnNotDetected: "关闭，未闪光，未检测到回光",
			autoDidNotFire: "自动，未闪光",
			autoFired: "自动，已闪光",
			autoFiredReturnNotDetected: "自动，已闪光，未检测到回光",
			autoFiredReturnDetected: "自动，已闪光，检测到回光",
			noFlashFunction: "无闪光功能",
			offNoFlashFunction: "关闭，无闪光功能",
			firedRedEyeReduction: "已闪光，防红眼",
			firedRedEyeReductionReturnNotDetected: "已闪光，防红眼，未检测到回光",
			firedRedEyeReductionReturnDetected: "已闪光，防红眼，检测到回光",
			onRedEyeReduction: "开启，防红眼",
			onRedEyeReductionReturnNotDetected: "开启，防红眼，未检测到回光",
			onRedEyeReductionReturnDetected: "开启，防红眼，检测到回光",
			offRedEyeReduction: "关闭，防红眼",
			autoDidNotFireRedEyeReduction: "自动，未闪光，防红眼",
			autoFiredRedEyeReduction: "自动，已闪光，防红眼",
			autoFiredRedEyeReductionReturnNotDetected: "自动，已闪光，防红眼，未检测到回光",
			autoFiredRedEyeReductionReturnDetected: "自动，已闪光，防红眼，检测到回光"
		},
		meteringMode: {
			unknown: "未知",
			average: "平均测光",
			centerWeightedAverage: "中央重点平均测光",
			spot: "点测光",
			multiSpot: "多点测光",
			multiSegment: "矩阵测光",
			partial: "局部测光",
			other: "其他"
		},
		whiteBalance: {
			auto: "自动",
			manual: "手动",
			auto1: "正常校正，中性",
			auto2: "保留环境暖色"
		},
		sceneCaptureType: {
			standard: "标准",
			landscape: "风景",
			portrait: "人像",
			night: "夜景",
			other: "其他"
		},
		sensingMethod: {
			notDefined: "未定义",
			monochromeArea: "单色区域传感器",
			oneChipColorArea: "单片彩色区域传感器",
			twoChipColorArea: "双片彩色区域传感器",
			threeChipColorArea: "三片彩色区域传感器",
			colorSequentialArea: "顺序彩色区域传感器",
			monochromeLinear: "单色线性传感器",
			trilinear: "三线性传感器",
			colorSequentialLinear: "顺序彩色线性传感器"
		},
		colorSpace: {
			srgb: "sRGB",
			adobeRgb: "Adobe RGB",
			wideGamutRgb: "广色域 RGB",
			displayP3: "Display P3",
			iccProfile: "ICC 配置文件",
			uncalibrated: "未校准",
			rgb: "RGB"
		}
	}
};
var plural$4 = {
	photo: "没有照片 | 一张照片 | {count} 张照片"
};
var title$4 = {
	dashboard: "仪表板",
	fallback: {
		photo: "照片"
	},
	gallery: "相册",
	locations: "位置管理",
	photos: "照片库",
	globe: "照片地球仪",
	queue: "队列管理",
	logs: "系统日志",
	albums: "相册分组",
	siteAdministration: "站点设置",
	generalSettings: "基本设置",
	appearanceSettings: "外观设置",
	storageSettings: "存储设置",
	systemSettings: "系统设置",
	mapAndLocation: "地图和位置",
	location: "位置服务"
};
var auth$4 = {
	form: {
		errors: {
			invalidEmail: "无效的电子邮件地址",
			invalidPassword: "密码至少需要6个字符"
		},
		action: {
			backToHome: "回到首页",
			or: "或",
			"continue": "登录"
		},
		signin: {
			title: "登录",
			subtitle: "登录到 {0}"
		},
		labels: {
			email: "电子邮箱",
			password: "密码"
		}
	}
};
var common$4 = {
	unknown: "未知",
	months: {
		jan: "一月",
		feb: "二月",
		mar: "三月",
		apr: "四月",
		may: "五月",
		jun: "六月",
		jul: "七月",
		aug: "八月",
		sep: "九月",
		oct: "十月",
		nov: "十一月",
		dec: "十二月"
	},
	days: {
		sun: "日",
		mon: "一",
		tue: "二",
		wed: "三",
		thu: "四",
		fri: "五",
		sat: "六"
	},
	heatmap: {
		legend: {
			less: "更少",
			more: "更多",
			recentlyYear: "最近一年"
		},
		tooltip: {
			data: "{0}拍摄了 {1} 张照片",
			noData: "{0}没有照片"
		}
	}
};
var upload$1 = {
	duplicate: {
		block: {
			title: "文件已存在",
			message: "照片 \"{fileName}\" 已存在，无法上传重复文件",
			suggestion: "您可以：1) 重命名文件后重新上传；2) 在设置中切换到\"警告模式\"以允许覆盖"
		},
		skip: {
			title: "跳过重复文件",
			message: "照片 \"{fileName}\" 已存在，已自动跳过上传",
			info: "现有照片拍摄于 {dateTaken}"
		},
		warn: {
			title: "检测到重复文件",
			message: "照片 \"{fileName}\" 已存在，继续上传将会覆盖现有照片",
			warning: "覆盖后，原有照片的所有信息（EXIF、标签、表态等）将被替换",
			info: "现有照片：{title}，拍摄于 {dateTaken}"
		}
	},
	success: {
		upload: {
			single: "照片已成功上传，正在处理中...",
			multiple: "已成功上传 {count} 张照片，正在处理中..."
		},
		check: {
			title: "检查完成",
			message: "已检查 {total} 个文件，发现 {duplicates} 个重复文件"
		}
	},
	error: {
		required: {
			title: "缺少必填参数",
			message: "请提供 {field} 参数"
		},
		invalidType: {
			title: "不支持的文件类型",
			message: "不支持的媒体类型：{type}",
			suggestion: "允许的类型：{allowed}"
		},
		tooLarge: {
			title: "文件太大",
			message: "文件大小 {size}MB 超过限制",
			suggestion: "最大允许 {maxSize}MB"
		},
		uploadFailed: {
			title: "上传失败",
			message: "上传过程中发生错误，请稍后重试"
		}
	}
};
var dashboard$4 = {
	photos: {
		title: "照片上传",
		subtitle: "上传后照片会自动处理并添加到库中。您可以随后在 {0} 中组织您的照片。",
		supportedFormats: "JPEG / PNG / HEIC / 实况视频 / Motion Photo",
		maxFileSize: "最大 {size}MB",
		buttons: {
			upload: "上传照片",
			queue: "任务队列"
		},
		uploader: {
			label: "拖放或点击选择照片",
			description: "支持 JPEG、PNG、HEIC 格式照片，以及 MOV 格式 Live Photo 视频，单个文件最大 {maxSize}MB"
		},
		toolbar: {
			title: "照片管理",
			filter: "筛选",
			refresh: "刷新"
		},
		photoFilter: {
			all: "全部照片",
			livephoto: "Live Photo",
			"static": "静态照片"
		},
		stats: {
			photos: "照片",
			livePhotos: "Live Photo"
		},
		table: {
			columns: {
				thumbnail: {
					title: "缩略图",
					action: "在新窗口打开照片"
				},
				id: "照片ID",
				title: "照片标题",
				tags: "关键词",
				rating: "评分",
				isLivePhoto: "Live Photo",
				location: "位置",
				dateTaken: "拍摄日期",
				lastModified: "最后更新",
				fileSize: "文件大小",
				colorSpace: "颜色空间",
				reactions: "表态",
				actions: "操作"
			},
			cells: {
				noTags: "无标签",
				noRating: "未评分",
				noGps: "无 GPS 信息",
				unknown: "未知",
				staticPhoto: "一般照片",
				noReactions: "无表态"
			},
			columnVisibility: {
				button: "列设置",
				description: "切换列的显示/隐藏"
			}
		},
		actions: {
			reprocess: "重新处理",
			refreshLocation: "重新获取城市",
			"delete": "删除",
			editMetadata: "编辑信息",
			previewPhoto: "预览照片"
		},
		selection: {
			selected: "{count} / {total} 行已选择",
			batchReprocess: "重新处理",
			batchDownload: "批量下载",
			batchDelete: "批量删除"
		},
		slideover: {
			title: "上传照片",
			description: "拖拽或选择文件。上传后照片会自动处理并添加到库中。",
			buttons: {
				clear: "清空选择",
				upload: "上传 {count} 个文件"
			},
			footer: {
				noSelection: "请选择要上传的照片",
				prepared: "{count} 个文件 · {size}"
			}
		},
		"delete": {
			single: {
				title: "删除照片",
				message: "确定要删除这张照片吗？"
			},
			batch: {
				title: "批量删除照片",
				message: "确定要删除选中的 {count} 张照片吗？"
			},
			warning: "删除操作会同时移除原图、缩略图和实况视频，且无法恢复。",
			buttons: {
				cancel: "取消",
				confirm: "确认删除"
			}
		},
		livePhotoModal: {
			title: "Live Photo: {title}",
			staticImage: "静态图片",
			livePhotoVideo: "Live Photo 视频",
			buttons: {
				openVideo: "在新窗口打开视频",
				downloadVideo: "下载视频",
				close: "关闭"
			},
			notSupported: "您的浏览器不支持视频播放"
		},
		messages: {
			uploadSuccess: "照片已成功上传，正在处理中...",
			uploadMultipleSuccess: "已成功上传 {count} 张照片，正在处理中...",
			reprocessSuccess: "已添加重新处理任务",
			reprocessTaskId: "任务ID: {taskId}",
			deleteSuccess: "照片删除成功",
			batchDeleteSuccess: "已成功删除 {count} 张照片",
			batchSelectRequired: "请至少选择一张照片进行此操作",
			noStorageKey: "无法处理：缺少存储信息",
			batchNoStorageKey: "{count} 张照片缺少存储信息，无法处理",
			batchNoUrl: "没有可用的下载链接照片",
			batchPartialUrl: "仅有 {count} 张照片（共 {total} 张）具有可用的下载链接",
			downloadStarted: "开始下载",
			downloadingCount: "正在下载 {count} 张照片...",
			batchDownloadSuccess: "批量下载完成",
			batchDownloadFailed: "批量下载失败",
			batchDownloadPartial: "批量下载已完成，部分失败",
			downloadedCount: "已下载 {count} 张照片",
			downloadFailedCount: "下载失败 {count} 张照片",
			downloadPartialCount: "已下载 {success} 张照片，{failed} 张失败",
			warning: "警告",
			error: "发生错误",
			deleteFailed: "删除照片失败",
			batchDeleteFailed: "批量删除失败",
			batchReprocessFailed: "批量重新处理失败",
			reprocessFailed: "重新处理失败",
			livePhotoNotFound: "不是 Live Photo",
			livePhotoLoadError: "无法获取 Live Photo 信息",
			metadataUpdateSuccess: "照片信息已更新",
			metadataUpdateFailed: "更新照片信息失败",
			photoNotFound: "找不到照片",
			photoFileMissing: "照片文件已丢失",
			noChangesProvided: "没有可应用的修改",
			queueUnavailable: "任务队列不可用",
			reverseGeocodeQueued: "已加入重新获取城市任务",
			reverseGeocodeFailed: "重新获取城市任务添加失败"
		},
		errors: {
			noSelection: "请选择要上传的照片",
			fileValidationFailed: "文件验证失败",
			allFilesValidationFailed: "所有文件验证失败",
			unsupportedFormat: "不支持的文件格式: {type}。请选择 JPEG、PNG、HEIC 格式的图片或 MOV 格式的 Live Photo 视频。",
			fileTooLarge: "文件太大: {size}MB。最大支持 {maxSize}MB。",
			uploadFailed: "上传失败",
			uploadNetworkError: "网络连接失败或 CORS 错误。请检查网络连接和存储配置。",
			uploadCorsError: "跨域请求失败。请检查存储服务的 CORS 配置。",
			uploadUnauthorized: "未授权。请重新登录。",
			taskSubmitFailed: "提交处理任务失败",
			taskStatusCheckFailed: "状态检查失败，请刷新页面重试"
		},
		processing: {
			preparing: "准备中",
			uploading: "上传中",
			processing: "处理中",
			completed: "已完成",
			error: "错误",
			skipped: "已跳过",
			blocked: "已阻止"
		},
		uploadQueue: {
			clearCompleted: "清理已完成的任务",
			clearAll: "清理全部任务",
			taskCleared: "已完成的任务清理完成",
			allTasksCleared: "已清除全部上传任务",
			tasksCleared: "已清除 {count} 个任务"
		},
		editModal: {
			title: "编辑照片信息",
			description: "更新标题、描述、标签和拍摄位置。",
			fields: {
				title: "标题",
				description: "描述",
				tags: "标签",
				tagsHint: "按下 Enter 键添加每个标签。",
				location: "拍摄位置",
				locationHint: "点击地图选择或更新拍摄位置。",
				clearLocation: "清除位置",
				coordinates: "坐标",
				noLocation: "未选择位置",
				rating: "评分",
				ratingHint: "点击星星为照片设置评分（0-5 星）。",
				noRating: "未评分"
			},
			actions: {
				cancel: "取消",
				save: "保存更改"
			}
		}
	},
	albums: {
		title: "相簿管理",
		subtitle: "创建和管理您的照片相簿",
		createButton: "创建相簿",
		noAlbums: "还没有相簿",
		noAlbumsTip: "创建您的第一个相簿来组织您的照片",
		form: {
			title: "标题",
			titlePlaceholder: "输入相簿标题",
			titleRequired: "请输入相簿标题",
			description: "描述",
			descriptionPlaceholder: "输入相簿描述（可选）",
			coverPhoto: "相簿封面",
			addCoverPhoto: "添加封面照片",
			selectPhotos: "选择照片",
			editPhotos: "修改照片选择",
			selectedCount: "已选择 {count} 张照片",
			clearAll: "全部清除"
		},
		table: {
			columns: {
				cover: "封面",
				title: "标题",
				description: "描述",
				photoCount: "照片数",
				createdAt: "创建时间",
				actions: "操作"
			}
		},
		modal: {
			selectPhotos: "选择照片",
			totalPhotos: "共 {count} 张",
			selectedPhotos: "已选 {count} 张",
			searchPlaceholder: "搜索照片...",
			searchResults: "结果：{current} / {total}",
			selectAll: "全选",
			setCover: "设为封面",
			noPhotos: "暂无照片",
			noResults: "未找到匹配的照片",
			tryOtherKeywords: "尝试使用其他关键词搜索",
			confirm: "确认 ({count})",
			selectedInfo: "已选择：",
			coverSetInfo: "已设置封面"
		},
		slideover: {
			create: {
				title: "创建相簿",
				description: "创建一个新的相簿来组织您的照片"
			},
			edit: {
				title: "编辑相簿",
				description: "修改相簿的信息和照片"
			},
			submitCreate: "创建",
			submitEdit: "保存",
			cancel: "取消"
		},
		"delete": {
			title: "删除相簿",
			message: "确定要删除相簿\"{title}\"吗？删除相簿不会删除其中的照片，仅删除相簿本身。",
			cancel: "取消",
			confirm: "确认删除"
		},
		messages: {
			createSuccess: "相簿创建成功",
			updateSuccess: "相簿更新成功",
			deleteSuccess: "相簿删除成功",
			createError: "创建相簿失败",
			updateError: "更新相簿失败",
			deleteError: "删除相簿失败",
			loadError: "加载相簿失败",
			loadDetailError: "加载相簿详情失败",
			loadPhotosError: "加载照片失败"
		}
	},
	overview: {
		title: "仪表板概览",
		indicator: {
			totalPhotos: "照片总数",
			thisMonth: "本月新增",
			queueStatus: {
				title: "队列状态",
				processing: "处理中",
				pending: "空闲"
			},
			storageUsage: "存储使用"
		},
		section: {
			runtimeInfo: {
				title: "运行信息",
				version: "运行版本",
				uptime: "运行时间",
				environment: "运行环境",
				lastUpdate: "最后更新",
				systems: {
					windows: "Microsoft Windows",
					windows10: "Microsoft Windows 10",
					windows11: "Microsoft Windows 11",
					ubuntu: "Ubuntu",
					debian: "Debian",
					centos: "CentOS",
					redhat: "Red Hat Enterprise Linux",
					fedora: "Fedora",
					arch: "Arch Linux",
					alpine: "Alpine Linux",
					opensuse: "openSUSE",
					macos: "macOS",
					docker: "Docker 容器",
					unknown: "未知系统"
				}
			},
			memory: {
				title: "内存使用率"
			},
			queue: {
				title: "队列状态",
				activeWorkers: "活跃 Workers",
				totalWorkers: "总 Workers",
				totalProcessed: "已处理",
				totalFailed: "失败计数",
				avgSuccessRate: "成功率"
			}
		}
	},
	queue: {
		title: "队列管理",
		indicator: {
			pending: "等待处理",
			processing: "正在处理",
			completed: "已完成",
			failed: "失败任务"
		},
		actions: {
			refresh: "刷新数据",
			clearCompleted: "清理已完成",
			clearFailed: "清理失败任务",
			clearAll: "清理全部",
			retrySelected: "重试选中",
			retryAll: "重试全部失败",
			clearNonActive: "清理非活跃任务"
		},
		table: {
			id: "任务ID",
			type: "类型",
			status: "状态",
			attempts: "尝试次数",
			priority: "优先级",
			stage: "处理阶段",
			error: "错误信息",
			errorMessage: "错误详情",
			createdAt: "创建时间",
			completedAt: "完成时间",
			actions: "操作"
		},
		status: {
			pending: "等待中",
			"in-stages": "处理中",
			completed: "已完成",
			failed: "失败"
		},
		types: {
			photo: "照片处理",
			"live-photo-video": "LivePhoto视频",
			"photo-reverse-geocoding": "照片逆地理编码"
		},
		stages: {
			preprocessing: "预处理",
			metadata: "元数据",
			thumbnail: "缩略图",
			exif: "EXIF处理",
			"reverse-geocoding": "地理解析",
			"live-photo": "LivePhoto处理"
		},
		buttons: {
			retry: "重试",
			"delete": "删除"
		},
		messages: {
			noTasks: "没有找到任务",
			retrySuccess: "任务重试成功",
			deleteSuccess: "任务删除成功",
			batchRetrySuccess: "批量重试成功",
			clearSuccess: "清理完成",
			operationFailed: "操作失败"
		},
		filters: {
			all: "全部",
			status: "按状态筛选",
			type: "按类型筛选"
		}
	}
};
var settings$4 = {
	app: {
		title: {
			label: "实例名称",
			description: "实例的标题"
		},
		slogan: {
			label: "标语",
			description: "实例的标语",
			help: "标语显示在首页的标题下方"
		},
		author: {
			label: "所有者",
			description: "实例的所有者名称"
		},
		avatarUrl: {
			label: "头像 URL",
			description: "所有者头像的图片链接",
			help: "头像显示加载页面和首页头像中"
		},
		appearance: {
			theme: {
				label: "主题",
				description: "选择应用主题",
				help: "用户可以在自己的浏览器中覆盖此项",
				light: "浅色",
				dark: "深色",
				system: "系统"
			}
		}
	},
	map: {
		provider: {
			label: "地图服务商",
			description: "选择地图服务商提供者"
		},
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 访问令牌",
				help: "应当使用没有域名限制的令牌"
			},
			style: {
				label: "Mapbox 样式",
				description: "Mapbox 地图样式 URL"
			}
		},
		maplibre: {
			token: {
				label: "MapTiler Token",
				description: "MapTiler API 访问令牌",
				help: "MapLibre 默认使用免费地图服务商 MapTiler"
			},
			style: {
				label: "MapLibre 样式",
				description: "MapLibre 地图样式 URL"
			}
		}
	},
	location: {
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 访问令牌",
				help: "配置后将取代 Nominatim 作为位置信息服务"
			}
		},
		nominatim: {
			baseUrl: {
				label: "Nominatim 基础 URL",
				description: "Nominatim 反向地理编码 API 的基础 URL",
				help: "留空则默认使用公共 Nominatim 服务"
			}
		}
	},
	storage: {
		name: {
			label: "配置名称",
			description: "存储提供者配置的名称"
		},
		provider: {
			label: "存储提供者",
			description: "选择存储服务提供者",
			options: {
				local: {
					label: "本地存储",
					description: "直接将照片存储在服务器的文件系统中。"
				},
				s3: {
					label: "S3 兼容存储",
					description: "使用 AWS S3、Cloudflare R2 或其他 S3 兼容服务。"
				},
				openlist: {
					label: "OpenList",
					description: "连接到 Alist 或 OpenList 实例进行存储。"
				}
			}
		},
		s3: {
			bucket: {
				label: "存储桶名称",
				description: "用于存储照片的 S3 存储桶名称"
			},
			region: {
				label: "区域",
				description: "S3 存储桶所在的 AWS 区域"
			},
			endpoint: {
				label: "S3 端点",
				description: "自定义 S3 兼容端点 URL（例如 MinIO）"
			},
			prefix: {
				label: "存储前缀",
				description: "存储桶中对象的前缀路径"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用于访问图像的自定义 CDN URL"
			},
			accessKeyId: {
				label: "访问密钥 ID",
				description: "AWS 访问密钥 ID 或等效项"
			},
			secretAccessKey: {
				label: "秘密访问密钥",
				description: "AWS 秘密访问密钥或等效项"
			},
			forcePathStyle: {
				label: "强制路径风格",
				description: "使用路径风格 URL 而不是虚拟主机风格"
			},
			maxKeys: {
				label: "最大密钥数",
				description: "每个请求检索的最大密钥数"
			}
		},
		local: {
			basePath: {
				label: "存储基础路径",
				description: "用于存储照片的本地文件系统路径"
			},
			baseUrl: {
				label: "基础 URL",
				description: "用于访问存储照片的公开 URL 基础"
			},
			prefix: {
				label: "存储前缀",
				description: "用于在存储中组织照片的前缀路径"
			}
		},
		openlist: {
			baseUrl: {
				label: "OpenList 基础 URL",
				description: "OpenList 服务器的基础 URL"
			},
			rootPath: {
				label: "根路径",
				description: "在 OpenList 中存储照片的根路径"
			},
			token: {
				label: "身份验证令牌",
				description: "OpenList API 身份验证令牌"
			},
			uploadEndpoint: {
				label: "上传端点",
				description: "用于上传文件的 API 端点（默认：/api/fs/put）"
			},
			downloadEndpoint: {
				label: "下载端点",
				description: "用于下载文件的 API 端点（可选）"
			},
			listEndpoint: {
				label: "列表端点",
				description: "用于列出文件的 API 端点（可选）"
			},
			deleteEndpoint: {
				label: "删除端点",
				description: "用于删除文件的 API 端点（默认：/api/fs/remove）"
			},
			metaEndpoint: {
				label: "元数据端点",
				description: "用于检索文件元数据的 API 端点（默认：/api/fs/get）"
			},
			pathField: {
				label: "路径字段名称",
				description: "API 请求中文件路径的参数名称（默认：path）"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用于访问图像的自定义 CDN URL"
			}
		}
	}
};
var wizard$4 = {
	admin: {
		username: {
			label: "用户名"
		},
		email: {
			label: "电子邮箱"
		},
		password: {
			label: "密码"
		},
		confirmPassword: {
			label: "确认密码"
		}
	},
	map: {
		provider: {
			mapbox: {
				label: "Mapbox",
				description: "具有丰富样式选项的高性能地图。"
			},
			maplibre: {
				label: "MapLibre",
				description: "Mapbox GL JS 的开源分支。"
			}
		}
	}
};
const zhHans = {
	map: map$4,
	ui: ui$4,
	album: album$4,
	minimap: minimap$4,
	viewer: viewer$4,
	exif: exif$4,
	plural: plural$4,
	title: title$4,
	auth: auth$4,
	common: common$4,
	upload: upload$1,
	dashboard: dashboard$4,
	settings: settings$4,
	wizard: wizard$4
};

const zhHans$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  album: album$4,
  auth: auth$4,
  common: common$4,
  dashboard: dashboard$4,
  default: zhHans,
  exif: exif$4,
  map: map$4,
  minimap: minimap$4,
  plural: plural$4,
  settings: settings$4,
  title: title$4,
  ui: ui$4,
  upload: upload$1,
  viewer: viewer$4,
  wizard: wizard$4
}, Symbol.toStringTag, { value: 'Module' }));

var map$3 = {
	cluster: {
		details: "點選圖片查看詳細資訊",
		nearbyPhotos: "附近有 {0} 張相片"
	}
};
var ui$3 = {
	livePhoto: "原況",
	action: {
		dashboard: {
			tooltip: "儀表板"
		},
		filter: {
			empty: {
				cameras: "沒有相機資訊",
				cities: "沒有城市資訊",
				lenses: "沒有鏡頭資訊",
				tags: "沒有標籤"
			},
			rating: {
				showAll: "顯示所有相片",
				showStarsAndAbove: "顯示 {count} 星以上的相片"
			},
			tabs: {
				cameras: "相機",
				cities: "城市",
				lenses: "鏡頭",
				ratings: "評分",
				tags: "標籤"
			},
			title: "篩選相片",
			tooltip: "篩選相片",
			clearAll: "清除全部"
		},
		logout: {
			tooltip: "登出"
		},
		sort: {
			options: {
				dateTakenAsc: "日期（最舊的在前）",
				dateTakenDesc: "日期（最新的在前）",
				fileSizeAsc: "檔案大小（升冪）",
				fileSizeDesc: "檔案大小（降冪）",
				titleAsc: "標題（A-Z）",
				titleDesc: "標題（Z-A）",
				shuffle: "打亂順序"
			},
			title: "排序方式",
			tooltip: "相片排序"
		},
		theme: {
			tooltip: "色彩主題"
		},
		globe: {
			tooltip: "地球儀"
		},
		home: {
			tooltip: "返回首頁"
		},
		share: {
			tooltip: "分享相片",
			title: "分享相片",
			tabs: {
				social: "社群分享",
				advanced: "進階分享"
			},
			platforms: {
				twitter: "Twitter",
				telegram: "Telegram",
				weibo: "微博",
				facebook: "Facebook",
				whatsapp: "WhatsApp",
				linkedin: "LinkedIn"
			},
			actions: {
				nativeShare: "使用系統分享",
				copyLink: "複製連結",
				copyImage: "複製圖片",
				downloadImage: "下載原圖",
				generateShareImage: "產生分享圖片",
				shareUrl: "分享連結",
				downloadOgImage: "下載預覽圖",
				downloadOriginal: "下載原圖",
				downloadOriginalImage: "下載原圖"
			},
			success: {
				linkCopied: "連結已複製到剪貼簿",
				imageCopied: "圖片已複製到剪貼簿",
				ogImageDownloaded: "預覽圖下載成功",
				originalImageDownloaded: "原圖下載成功"
			},
			error: {
				copyNotSupported: "目前瀏覽器不支援複製功能",
				shareFailed: "分享失敗",
				nativeShareFailed: "原生分享失敗",
				linkCopyFailed: "連結複製失敗",
				ogImageDownloadFailed: "預覽圖下載失敗",
				originalImageDownloadFailed: "原圖下載失敗"
			},
			ogImage: {
				title: "分享預覽圖",
				alt: "相片分享預覽圖",
				loading: "載入中...",
				loadError: "載入失敗"
			},
			fallback: {
				photoTitle: "美麗的相片"
			},
			text: {
				prefix: "來看看這張相片:"
			}
		},
		backToTop: {
			tooltip: "回到頂部"
		}
	},
	stats: {
		totalPhotosWithRange: "{range}，共 @:plural.photo",
		noPhotosTip: "還沒有照片，快去上傳一些吧！"
	},
	album: {
		noImage: "空相簿",
		emptyAlbumTip: "新增相片開始吧",
		noDescription: "無描述"
	}
};
var album$3 = {
	notFound: "找不到相簿",
	noDateInfo: "無日期資訊",
	noPhotosTip: "該相簿中還沒有相片",
	emptyAlbumTitle: "相簿是空的",
	emptyAlbumDescription: "更多精彩，將會呈現於此。",
	failedToLoadTitle: "載入相簿失敗",
	failedToLoadDescription: "載入此相簿時出現問題。",
	failedToLoad: "載入相簿失敗",
	backToAlbums: "返回相簿",
	noDescription: "無描述",
	photo: "無相片 | 一張相片 | {count} 張相片",
	createdAt: "建立於 {time}",
	metadata: {
		photos: "相片",
		dateRange: "日期範圍",
		created: "建立"
	}
};
var minimap$3 = {
	loading: "正在載入小地圖..."
};
var viewer$3 = {
	hint: {
		livePhoto: {
			mobile: "長按播放原況照片 · 點兩下或雙指縮放",
			desktop: "游標移到左上角播放 · 點兩下／滾輪縮放"
		},
		mobile: "點兩下或雙指縮放",
		desktop: "點兩下或使用滑鼠滾輪縮放"
	},
	reaction: {
		add: "表態",
		change: "已表態",
		count: "無表態 | {count} 個表態 | {count} 個表態",
		like: "讚",
		love: "愛心",
		amazing: "花癡",
		funny: "笑哭",
		wow: "驚訝",
		sad: "哭",
		fire: "火焰",
		sparkle: "星星"
	},
	photoload: {
		loadError: "圖片載入失敗",
		loading: "正在載入圖片",
		converting: "正在轉換中...",
		loadingWebGL: "正在載入 WebGL...",
		loadingHEIC: "HEIC 圖片載入中...",
		loadingTexture: "正在建立紋理"
	}
};
var exif$3 = {
	sections: {
		basic: "基本資訊",
		deviceInfomation: "裝置資訊",
		specification: "技術參數",
		rating: "評分",
		tags: "標籤",
		albums: "包含的相冊",
		histogram: "直方圖",
		capture: {
		},
		shooting: {
			parameters: "拍攝參數",
			mode: "拍攝模式"
		}
	},
	aperture: "光圈",
	filename: "檔名",
	fileSize: "檔案大小",
	resolution: "解析度",
	pixels: "像素",
	dateTaken: {
		title: "拍攝時間"
	},
	colorSpace: {
		title: "色彩空間"
	},
	artist: "攝影師",
	software: "軟體",
	tz: "時區",
	country: "國家",
	city: "城市",
	gps: {
		title: "座標"
	},
	focal: {
		length: {
			actual: "焦距",
			equivalent: "35mm 等效"
		},
		plane: {
			resolution: "焦平面解析度"
		}
	},
	exposure: {
		time: "曝光時間",
		program: "曝光程式",
		mode: "曝光模式"
	},
	camera: "相機",
	lens: "鏡頭",
	maxAperture: "最大光圈",
	wb: {
		title: "白平衡",
		shiftAB: "白平衡偏移（琥珀–藍）",
		shiftGM: "白平衡偏移（綠–洋紅）",
		bias: "白平衡偏移",
		fineTune: "白平衡微調"
	},
	metering: {
		title: "測光模式"
	},
	flash: {
		title: "閃光燈",
		meteringMode: "閃光燈測光模式"
	},
	scene: {
		captureType: "場景拍攝類型"
	},
	brightness: {
		value: "亮度"
	},
	sensing: {
		method: "感光方式"
	},
	values: {
		exposureProgram: {
			notDefined: "未定義",
			manual: "手動",
			programAe: "程式自動曝光",
			aperturePriorityAe: "光圈先決自動曝光",
			shutterSpeedPriorityAe: "快門先決自動曝光",
			creativeSlowSpeed: "創意（慢速）",
			actionHighSpeed: "動作（高速）",
			portrait: "人像",
			landscape: "風景",
			bulb: "B 快門"
		},
		exposureMode: {
			auto: "自動",
			manual: "手動",
			autoBracket: "自動包圍曝光"
		},
		flash: {
			noFlash: "未閃光",
			fired: "已閃光",
			firedReturnNotDetected: "已閃光，未偵測到回光",
			firedReturnDetected: "已閃光，偵測到回光",
			onDidNotFire: "開啟，未閃光",
			onFired: "開啟，已閃光",
			onReturnNotDetected: "開啟，未偵測到回光",
			onReturnDetected: "開啟，偵測到回光",
			offDidNotFire: "關閉，未閃光",
			offDidNotFireReturnNotDetected: "關閉，未閃光，未偵測到回光",
			autoDidNotFire: "自動，未閃光",
			autoFired: "自動，已閃光",
			autoFiredReturnNotDetected: "自動，已閃光，未偵測到回光",
			autoFiredReturnDetected: "自動，已閃光，偵測到回光",
			noFlashFunction: "無閃光功能",
			offNoFlashFunction: "關閉，無閃光功能",
			firedRedEyeReduction: "已閃光，防紅眼",
			firedRedEyeReductionReturnNotDetected: "已閃光，防紅眼，未偵測到回光",
			firedRedEyeReductionReturnDetected: "已閃光，防紅眼，偵測到回光",
			onRedEyeReduction: "開啟，防紅眼",
			onRedEyeReductionReturnNotDetected: "開啟，防紅眼，未偵測到回光",
			onRedEyeReductionReturnDetected: "開啟，防紅眼，偵測到回光",
			offRedEyeReduction: "關閉，防紅眼",
			autoDidNotFireRedEyeReduction: "自動，未閃光，防紅眼",
			autoFiredRedEyeReduction: "自動，已閃光，防紅眼",
			autoFiredRedEyeReductionReturnNotDetected: "自動，已閃光，防紅眼，未偵測到回光",
			autoFiredRedEyeReductionReturnDetected: "自動，已閃光，防紅眼，偵測到回光"
		},
		meteringMode: {
			unknown: "未知",
			average: "平均測光",
			centerWeightedAverage: "中央重點平均測光",
			spot: "點測光",
			multiSpot: "多點測光",
			multiSegment: "矩陣測光",
			partial: "局部測光",
			other: "其他"
		},
		whiteBalance: {
			auto: "自動",
			manual: "手動",
			auto1: "正常校正，中性",
			auto2: "保留環境暖色"
		},
		sceneCaptureType: {
			standard: "標準",
			landscape: "風景",
			portrait: "人像",
			night: "夜景",
			other: "其他"
		},
		sensingMethod: {
			notDefined: "未定義",
			monochromeArea: "單色區域感測器",
			oneChipColorArea: "單晶片彩色區域感測器",
			twoChipColorArea: "雙晶片彩色區域感測器",
			threeChipColorArea: "三晶片彩色區域感測器",
			colorSequentialArea: "順序彩色區域感測器",
			monochromeLinear: "單色線性感測器",
			trilinear: "三線性感測器",
			colorSequentialLinear: "順序彩色線性感測器"
		},
		colorSpace: {
			srgb: "sRGB",
			adobeRgb: "Adobe RGB",
			wideGamutRgb: "廣色域 RGB",
			displayP3: "Display P3",
			iccProfile: "ICC 設定檔",
			uncalibrated: "未校正",
			rgb: "RGB"
		}
	}
};
var plural$3 = {
	photo: "沒有相片 | 一張相片 | {count} 張相片"
};
var title$3 = {
	dashboard: "儀表板",
	fallback: {
		photo: "相片"
	},
	locations: "位置管理",
	photos: "相片庫",
	gallery: "相片集",
	globe: "照片地球儀",
	queue: "佇列管理",
	logs: "系統日誌",
	albums: "相簿",
	siteAdministration: "站點設置",
	generalSettings: "基本設置",
	appearanceSettings: "外觀設置",
	mapAndLocation: "地圖和位置",
	location: "位置服務"
};
var auth$3 = {
	form: {
		signin: {
			title: "登入",
			subtitle: "登錄到 {0}"
		},
		action: {
			or: "或",
			"continue": "繼續"
		},
		labels: {
			email: "電子郵箱",
			password: "密碼"
		}
	}
};
var common$3 = {
	months: {
		jan: "一月",
		feb: "二月",
		mar: "三月",
		apr: "四月",
		may: "五月",
		jun: "六月",
		jul: "七月",
		aug: "八月",
		sep: "九月",
		oct: "十月",
		nov: "十一月",
		dec: "十二月"
	},
	days: {
		sun: "日",
		mon: "一",
		tue: "二",
		wed: "三",
		thu: "四",
		fri: "五",
		sat: "六"
	},
	heatmap: {
		legend: {
			less: "更少",
			more: "更多",
			recentlyYear: "最近一年"
		},
		tooltip: {
			data: "{0}拍攝了 {1} 張照片",
			noData: "{0}沒有照片"
		}
	}
};
var dashboard$3 = {
	photos: {
		title: "上傳照片",
		subtitle: "上傳後照片會自動處理並新增到您的圖庫。您稍後可以在 {0} 中組織您的照片。",
		supportedFormats: "JPEG / PNG / HEIC / 原況照片 / 動態照片",
		maxFileSize: "最大 {size}MB",
		buttons: {
			upload: "上傳照片",
			queue: "任務佇列"
		},
		uploader: {
			label: "拖曳或點擊選擇照片",
			description: "支援 JPEG、PNG、HEIC 格式的照片，以及 MOV 格式的原況照片影片。每個檔案的最大大小：{maxSize}MB"
		},
		toolbar: {
			title: "照片管理",
			filter: "篩選",
			refresh: "重新整理"
		},
		photoFilter: {
			all: "所有照片",
			livephoto: "原況照片",
			"static": "靜態照片"
		},
		stats: {
			photos: "張照片",
			livePhotos: "張原況照片"
		},
		table: {
			columns: {
				thumbnail: {
					title: "縮圖",
					action: "在新視窗開啟照片"
				},
				id: "照片 ID",
				title: "照片標題",
				tags: "關鍵字",
				rating: "評分",
				isLivePhoto: "原況照片",
				location: "位置",
				dateTaken: "拍攝日期",
				lastModified: "上次修改",
				fileSize: "檔案大小",
				colorSpace: "色彩空間",
				reactions: "反應",
				actions: "操作"
			},
			cells: {
				noTags: "無標籤",
				noRating: "未評分",
				noGps: "沒有 GPS 資訊",
				unknown: "未知",
				staticPhoto: "靜態照片",
				noReactions: "無反應"
			},
			columnVisibility: {
				button: "列設定",
				description: "切換列的顯示/隱藏"
			}
		},
		actions: {
			reprocess: "重新處理",
			refreshLocation: "重新取得城市",
			"delete": "刪除",
			editMetadata: "編輯資訊",
			previewPhoto: "照片預覽"
		},
		selection: {
			selected: "已選擇 {count} / {total} 列",
			batchReprocess: "批量重新處理",
			batchDownload: "批量下載",
			batchDelete: "批量刪除"
		},
		slideover: {
			title: "上傳照片",
			description: "拖曳或選擇檔案。照片會自動處理並新增到圖庫。",
			buttons: {
				clear: "清除選擇",
				upload: "上傳 {count} 個檔案"
			},
			footer: {
				noSelection: "請選擇照片進行上傳",
				prepared: "{count} 個檔案 · {size}"
			}
		},
		"delete": {
			single: {
				title: "刪除照片",
				message: "確定要刪除此照片嗎？"
			},
			batch: {
				title: "批量刪除照片",
				message: "確定要刪除已選擇的 {count} 張照片嗎？"
			},
			warning: "刪除照片會移除原始檔案、縮圖和原況照片影片，無法復原。",
			buttons: {
				cancel: "取消",
				confirm: "確認刪除"
			}
		},
		livePhotoModal: {
			title: "原況照片：{title}",
			staticImage: "靜態影像",
			livePhotoVideo: "原況照片影片",
			buttons: {
				openVideo: "在新視窗中開啟影片",
				downloadVideo: "下載影片",
				close: "關閉"
			},
			notSupported: "您的瀏覽器不支援影片播放"
		},
		messages: {
			uploadSuccess: "照片上傳成功，處理中...",
			uploadMultipleSuccess: "{count} 張照片上傳成功，處理中...",
			reprocessSuccess: "重新處理任務已新增",
			reprocessTaskId: "任務 ID：{taskId}",
			deleteSuccess: "照片已成功刪除",
			batchDeleteSuccess: "成功刪除 {count} 張照片",
			batchSelectRequired: "請選擇至少一張照片進行此操作",
			noStorageKey: "無法處理：缺少儲存資訊",
			batchNoStorageKey: "{count} 張照片缺少儲存資訊，無法處理",
			batchNoUrl: "沒有可用下載連結的照片",
			batchPartialUrl: "僅有 {count} 張照片（共 {total} 張）具有可用的下載連結",
			downloadStarted: "開始下載",
			downloadingCount: "正在下載 {count} 張照片...",
			batchDownloadSuccess: "批量下載完成",
			batchDownloadFailed: "批量下載失敗",
			batchDownloadPartial: "批量下載已完成，部分失敗",
			downloadedCount: "已下載 {count} 張照片",
			downloadFailedCount: "下載失敗 {count} 張照片",
			downloadPartialCount: "已下載 {success} 張照片，{failed} 張失敗",
			warning: "警告",
			error: "發生錯誤",
			deleteFailed: "刪除照片失敗",
			batchDeleteFailed: "批量刪除失敗",
			batchReprocessFailed: "批量重新處理失敗",
			reprocessFailed: "重新處理照片失敗",
			livePhotoNotFound: "不是原況照片",
			livePhotoLoadError: "無法載入原況照片資訊",
			metadataUpdateSuccess: "照片資訊已更新",
			metadataUpdateFailed: "更新照片資訊失敗",
			photoNotFound: "找不到照片",
			photoFileMissing: "找不到照片檔案",
			noChangesProvided: "沒有可套用的變更",
			queueUnavailable: "任務佇列不可用",
			reverseGeocodeQueued: "已新增重新取得城市的任務",
			reverseGeocodeFailed: "重新取得城市任務新增失敗"
		},
		errors: {
			noSelection: "請選擇照片進行上傳",
			fileValidationFailed: "檔案驗證失敗",
			allFilesValidationFailed: "所有檔案驗證失敗",
			unsupportedFormat: "不支援的檔案格式：{type}。請選擇 JPEG、PNG 或 HEIC 照片，或 MOV 格式的原況照片影片。",
			fileTooLarge: "檔案過大：{size}MB。最大支援：{maxSize}MB。",
			uploadFailed: "上傳失敗",
			uploadNetworkError: "網路連線失敗或 CORS 錯誤。請檢查網路和儲存配置。",
			uploadCorsError: "CORS 請求失敗。請檢查儲存 CORS 組態。",
			uploadUnauthorized: "未授權。請重新登入。",
			taskSubmitFailed: "提交處理任務失敗",
			taskStatusCheckFailed: "檢查任務狀態失敗。請重新整理頁面後重試。"
		},
		processing: {
			preparing: "準備中",
			uploading: "上傳中",
			processing: "處理中",
			completed: "已完成",
			error: "錯誤",
			skipped: "已跳過",
			blocked: "已封鎖"
		},
		uploadQueue: {
			clearCompleted: "清除已完成的任務",
			clearAll: "清除所有任務",
			taskCleared: "已清除已完成的任務",
			allTasksCleared: "已清除所有上傳任務",
			tasksCleared: "已清除 {count} 個任務"
		},
		editModal: {
			title: "編輯照片資訊",
			description: "更新標題、描述、標籤與拍攝位置。",
			fields: {
				title: "標題",
				description: "描述",
				tags: "標籤",
				tagsHint: "按 Enter 鍵新增每個標籤。",
				location: "拍攝位置",
				locationHint: "點擊地圖選擇或更新拍攝位置。",
				clearLocation: "清除位置",
				coordinates: "座標",
				noLocation: "未選擇位置",
				rating: "評分",
				ratingHint: "點擊星星為照片設定評分（0-5 星）。",
				noRating: "未評分"
			},
			actions: {
				cancel: "取消",
				save: "儲存變更"
			}
		}
	},
	albums: {
		title: "相簿管理",
		subtitle: "建立和管理您的照片相簿",
		createButton: "建立相簿",
		noAlbums: "還沒有相簿",
		noAlbumsTip: "建立您的第一個相簿來組織您的照片",
		form: {
			title: "標題",
			titlePlaceholder: "輸入相簿標題",
			titleRequired: "請輸入相簿標題",
			description: "描述",
			descriptionPlaceholder: "輸入相簿描述（選填）",
			coverPhoto: "相簿封面",
			addCoverPhoto: "新增封面照片",
			selectPhotos: "選擇照片",
			editPhotos: "修改照片選擇",
			selectedCount: "已選擇 {count} 張照片",
			clearAll: "全部清除"
		},
		table: {
			columns: {
				cover: "封面",
				title: "標題",
				description: "描述",
				photoCount: "照片數",
				createdAt: "建立時間",
				actions: "操作"
			}
		},
		modal: {
			selectPhotos: "選擇照片",
			totalPhotos: "共 {count} 張",
			selectedPhotos: "已選 {count} 張",
			searchPlaceholder: "搜尋照片...",
			searchResults: "結果：{current} / {total}",
			selectAll: "全選",
			setCover: "設為封面",
			noPhotos: "暫無照片",
			noResults: "未找到相符的照片",
			tryOtherKeywords: "嘗試使用其他關鍵字搜尋",
			confirm: "確認 ({count})",
			selectedInfo: "已選擇：",
			coverSetInfo: "已設定封面"
		},
		slideover: {
			create: {
				title: "建立相簿",
				description: "建立一個新的相簿來組織您的照片"
			},
			edit: {
				title: "編輯相簿",
				description: "修改相簿的資訊和照片"
			},
			submitCreate: "建立",
			submitEdit: "儲存",
			cancel: "取消"
		},
		"delete": {
			title: "刪除相簿",
			message: "確定要刪除相簿\"{title}\"嗎？刪除相簿不會刪除其中的照片，僅刪除相簿本身。",
			cancel: "取消",
			confirm: "確認刪除"
		},
		messages: {
			createSuccess: "相簿建立成功",
			updateSuccess: "相簿更新成功",
			deleteSuccess: "相簿刪除成功",
			createError: "建立相簿失敗",
			updateError: "更新相簿失敗",
			deleteError: "刪除相簿失敗",
			loadError: "載入相簿失敗",
			loadDetailError: "載入相簿詳情失敗",
			loadPhotosError: "載入照片失敗"
		}
	},
	overview: {
		title: "儀表板總覽",
		indicator: {
			totalPhotos: "照片總數",
			thisMonth: "本月新增",
			queueStatus: {
				title: "隊列狀態",
				processing: "處理中",
				pending: "空閒"
			},
			storageUsage: "存儲使用"
		},
		section: {
			runtimeInfo: {
				title: "運行信息",
				version: "運行版本",
				uptime: "運行時間",
				environment: "運行環境",
				lastUpdate: "最後更新",
				systems: {
					windows: "Microsoft Windows",
					windows10: "Microsoft Windows 10",
					windows11: "Microsoft Windows 11",
					ubuntu: "Ubuntu",
					debian: "Debian",
					centos: "CentOS",
					redhat: "Red Hat Enterprise Linux",
					fedora: "Fedora",
					arch: "Arch Linux",
					alpine: "Alpine Linux",
					opensuse: "openSUSE",
					macos: "macOS",
					docker: "Docker 容器",
					unknown: "未知系統"
				}
			},
			memory: {
				title: "內存使用率"
			},
			queue: {
				title: "隊列狀態",
				activeWorkers: "活躍 Workers",
				totalWorkers: "總 Workers",
				totalProcessed: "已處理",
				totalFailed: "失敗計數",
				avgSuccessRate: "成功率"
			}
		}
	},
	queue: {
		title: "隊列管理",
		indicator: {
			pending: "等待處理",
			processing: "正在處理",
			completed: "已完成",
			failed: "失敗任務"
		},
		actions: {
			refresh: "刷新資料",
			clearCompleted: "清理已完成",
			clearFailed: "清理失敗任務",
			clearAll: "清理全部",
			retrySelected: "重試選中",
			retryAll: "重試全部失敗",
			clearNonActive: "清理非活躍任務"
		},
		table: {
			id: "任務ID",
			type: "類型",
			status: "狀態",
			attempts: "嘗試次數",
			priority: "優先級",
			stage: "處理階段",
			error: "錯誤資訊",
			errorMessage: "錯誤詳情",
			createdAt: "建立時間",
			completedAt: "完成時間",
			actions: "操作"
		},
		status: {
			pending: "等待中",
			"in-stages": "處理中",
			completed: "已完成",
			failed: "失敗"
		},
		types: {
			photo: "照片處理",
			"live-photo-video": "LivePhoto影片",
			"photo-reverse-geocoding": "照片逆地理編碼"
		},
		stages: {
			preprocessing: "預處理",
			metadata: "中繼資料",
			thumbnail: "縮圖",
			exif: "EXIF處理",
			"reverse-geocoding": "地理解析",
			"live-photo": "LivePhoto處理"
		},
		buttons: {
			retry: "重試",
			"delete": "刪除"
		},
		messages: {
			noTasks: "沒有找到任務",
			retrySuccess: "任務重試成功",
			deleteSuccess: "任務刪除成功",
			batchRetrySuccess: "批次重試成功",
			clearSuccess: "清理完成",
			operationFailed: "操作失敗"
		},
		filters: {
			all: "全部",
			status: "按狀態篩選",
			type: "按類型篩選"
		}
	}
};
var settings$3 = {
	app: {
		title: {
			label: "實例名稱",
			description: "實例的標題"
		},
		slogan: {
			label: "標語",
			description: "實例的標語",
			help: "標語顯示在首頁的標題下方"
		},
		author: {
			label: "所有者",
			description: "實例的所有者名稱"
		},
		avatarUrl: {
			label: "頭像 URL",
			description: "所有者頭像的圖片連結",
			help: "頭像顯示加載頁面和首頁頭像中"
		},
		appearance: {
			theme: {
				label: "主題",
				description: "選擇應用主題",
				help: "使用者可以在自己的瀏覽器中覆蓋此項",
				light: "淺色",
				dark: "深色",
				system: "系統"
			}
		}
	},
	map: {
		provider: {
			label: "地圖服務商",
			description: "選擇地圖服務商提供者"
		},
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 訪問令牌",
				help: "應當使用沒有域名限制的令牌"
			},
			style: {
				label: "Mapbox 樣式",
				description: "Mapbox 地圖樣式 URL"
			}
		},
		maplibre: {
			token: {
				label: "MapTiler Token",
				description: "MapTiler API 訪問令牌",
				help: "MapLibre 預設使用免費地圖服務商 MapTiler"
			},
			style: {
				label: "MapLibre 樣式",
				description: "MapLibre 地圖樣式 URL"
			}
		}
	},
	location: {
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 訪問令牌",
				help: "配置後將取代 Nominatim 作為位置信息服務"
			}
		},
		nominatim: {
			baseUrl: {
				label: "Nominatim 基礎 URL",
				description: "Nominatim 反向地理編碼 API 的基礎 URL",
				help: "留空則預設使用公開 Nominatim 服務"
			}
		}
	},
	storage: {
		name: {
			label: "配置名稱",
			description: "儲存提供者配置的名稱"
		},
		provider: {
			label: "儲存提供者",
			description: "選擇儲存服務提供者",
			options: {
				local: {
					label: "本地儲存",
					description: "直接將照片儲存在伺服器的檔案系統中。"
				},
				s3: {
					label: "S3 相容儲存",
					description: "使用 AWS S3、Cloudflare R2 或其他 S3 相容服務。"
				},
				openlist: {
					label: "OpenList",
					description: "連接到 Alist 或 OpenList 實例進行儲存。"
				}
			}
		},
		s3: {
			bucket: {
				label: "儲存桶名稱",
				description: "S3 儲存桶的名稱"
			},
			region: {
				label: "區域",
				description: "S3 儲存桶所在的 AWS 區域"
			},
			endpoint: {
				label: "端點",
				description: "S3 服務的端點 URL"
			},
			prefix: {
				label: "前綴",
				description: "儲存在桶中的檔案前綴路徑"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用於訪問檔案的 CDN 地址"
			},
			accessKeyId: {
				label: "存取金鑰 ID",
				description: "AWS IAM 存取金鑰 ID"
			},
			secretAccessKey: {
				label: "祕密存取金鑰",
				description: "AWS IAM 祕密存取金鑰"
			},
			forcePathStyle: {
				label: "強制路徑方式",
				description: "使用路徑方式 URL 而不是虛擬主機方式"
			},
			maxKeys: {
				label: "最大金鑰數",
				description: "列舉物件時返回的最大數量"
			}
		},
		local: {
			basePath: {
				label: "基本路徑",
				description: "本地儲存的基本目錄路徑"
			},
			baseUrl: {
				label: "基本 URL",
				description: "用於訪問本地檔案的基本 URL"
			},
			prefix: {
				label: "前綴",
				description: "本地儲存中所有檔案的路徑前綴"
			}
		},
		openlist: {
			baseUrl: {
				label: "OpenList 基本 URL",
				description: "OpenList 伺服器的基本 URL"
			},
			rootPath: {
				label: "根路徑",
				description: "在 OpenList 中儲存相片的根路徑"
			},
			token: {
				label: "身份驗證令牌",
				description: "OpenList API 身份驗證令牌"
			},
			uploadEndpoint: {
				label: "上傳端點",
				description: "用於上傳檔案的 API 端點（預設：/api/fs/put）"
			},
			downloadEndpoint: {
				label: "下載端點",
				description: "用於下載檔案的 API 端點（選擇性）"
			},
			listEndpoint: {
				label: "列表端點",
				description: "用於列出檔案的 API 端點（選擇性）"
			},
			deleteEndpoint: {
				label: "刪除端點",
				description: "用於刪除檔案的 API 端點（預設：/api/fs/remove）"
			},
			metaEndpoint: {
				label: "中繼資料端點",
				description: "用於取得檔案中繼資料的 API 端點（預設：/api/fs/get）"
			},
			pathField: {
				label: "路徑欄位名稱",
				description: "API 請求中檔案路徑的參數名稱（預設：path）"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用於訪問圖像的自訂 CDN URL"
			}
		}
	}
};
var wizard$3 = {
	admin: {
		username: {
			label: "使用者名稱"
		},
		email: {
			label: "電子郵件"
		},
		password: {
			label: "密碼"
		},
		confirmPassword: {
			label: "確認密碼"
		}
	},
	map: {
		provider: {
			mapbox: {
				label: "Mapbox",
				description: "具有豐富樣式選項的高效能地圖。"
			},
			maplibre: {
				label: "MapLibre",
				description: "Mapbox GL JS 的開源分支。"
			}
		}
	}
};
const zhHantTW = {
	map: map$3,
	ui: ui$3,
	album: album$3,
	minimap: minimap$3,
	viewer: viewer$3,
	exif: exif$3,
	plural: plural$3,
	title: title$3,
	auth: auth$3,
	common: common$3,
	dashboard: dashboard$3,
	settings: settings$3,
	wizard: wizard$3
};

const zhHantTW$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  album: album$3,
  auth: auth$3,
  common: common$3,
  dashboard: dashboard$3,
  default: zhHantTW,
  exif: exif$3,
  map: map$3,
  minimap: minimap$3,
  plural: plural$3,
  settings: settings$3,
  title: title$3,
  ui: ui$3,
  viewer: viewer$3,
  wizard: wizard$3
}, Symbol.toStringTag, { value: 'Module' }));

var map$2 = {
	cluster: {
		details: "點擊圖片查看詳情",
		nearbyPhotos: "附近有 {0} 張相片"
	}
};
var ui$2 = {
	livePhoto: "原況",
	action: {
		dashboard: {
			tooltip: "控制台"
		},
		filter: {
			empty: {
				cameras: "沒有相機資料",
				cities: "沒有城市資料",
				lenses: "沒有鏡頭資料",
				tags: "沒有標籤"
			},
			rating: {
				showAll: "顯示所有相片",
				showStarsAndAbove: "顯示 {count} 星或以上的相片"
			},
			tabs: {
				cameras: "相機",
				cities: "城市",
				lenses: "鏡頭",
				ratings: "評分",
				tags: "標籤"
			},
			title: "篩選相片",
			tooltip: "篩選相片",
			clearAll: "全部清除"
		},
		logout: {
			tooltip: "登出"
		},
		sort: {
			options: {
				dateTakenAsc: "日期（最舊的在前）",
				dateTakenDesc: "日期（最新的在前）",
				fileSizeAsc: "檔案大小（升冪）",
				fileSizeDesc: "檔案大小（降冪）",
				titleAsc: "標題（A-Z）",
				titleDesc: "標題（Z-A）",
				shuffle: "打亂順序"
			},
			title: "排序方式",
			tooltip: "相片排序"
		},
		theme: {
			tooltip: "色彩主題"
		},
		globe: {
			tooltip: "地球儀"
		},
		home: {
			tooltip: "返回首頁"
		},
		share: {
			tooltip: "分享相片",
			title: "分享相片",
			tabs: {
				social: "社交分享",
				advanced: "進階分享"
			},
			platforms: {
				twitter: "Twitter",
				telegram: "Telegram",
				weibo: "微博",
				facebook: "Facebook",
				whatsapp: "WhatsApp",
				linkedin: "LinkedIn"
			},
			actions: {
				nativeShare: "使用系統分享",
				copyLink: "複製連結",
				copyImage: "複製圖片",
				downloadImage: "下載原圖",
				generateShareImage: "產生分享圖片",
				shareUrl: "分享連結",
				downloadOgImage: "下載預覽圖",
				downloadOriginal: "下載原圖",
				downloadOriginalImage: "下載原圖"
			},
			success: {
				linkCopied: "連結已複製到剪貼簿",
				imageCopied: "圖片已複製到剪貼簿",
				ogImageDownloaded: "預覽圖下載成功",
				originalImageDownloaded: "原圖下載成功"
			},
			error: {
				copyNotSupported: "目前瀏覽器不支援複製功能",
				shareFailed: "分享失敗",
				nativeShareFailed: "原生分享失敗",
				linkCopyFailed: "連結複製失敗",
				ogImageDownloadFailed: "預覽圖下載失敗",
				originalImageDownloadFailed: "原圖下載失敗"
			},
			ogImage: {
				title: "分享預覽圖",
				alt: "相片分享預覽圖",
				loading: "載入中...",
				loadError: "載入失敗"
			},
			fallback: {
				photoTitle: "美麗的相片"
			},
			text: {
				prefix: "來看看這張相片:"
			}
		},
		backtotop: {
			tooltip: "回到頂部"
		}
	},
	stats: {
		totalPhotosWithRange: "{range}，共 @:plural.photo",
		noPhotosTip: "還沒有照片，快去上傳一些吧！"
	},
	album: {
		noImage: "空相簿",
		emptyAlbumTip: "新增相片開始啦",
		noDescription: "無描述"
	}
};
var album$2 = {
	notFound: "搵唔到相簿",
	noDateInfo: "無日期資料",
	noPhotosTip: "呢個相簿仲冇相片",
	emptyAlbumTitle: "相簿係空的",
	emptyAlbumDescription: "更多精彩，將會喺呢度上映。",
	failedToLoadTitle: "載入相簿失敗",
	failedToLoadDescription: "載入呢個相簿嗰陣出咗問題。",
	failedToLoad: "載入相簿失敗",
	backToAlbums: "返回相簿",
	noDescription: "無描述",
	photo: "無相片 | 一張相片 | {count} 張相片",
	createdAt: "建立咗 {time}",
	metadata: {
		photos: "相片",
		dateRange: "日期範圍",
		created: "建立"
	}
};
var minimap$2 = {
	loading: "載入小地圖..."
};
var viewer$2 = {
	hint: {
		livePhoto: {
			mobile: "長按播放原況照片 · 點兩下或兩指縮放",
			desktop: "滑鼠移到左上角播放 · 點兩下／滾輪縮放"
		},
		mobile: "點兩下或兩指縮放",
		desktop: "點兩下或用滑鼠滾輪縮放"
	},
	reaction: {
		add: "表態",
		change: "已表態",
		count: "無表態 | {count} 個表態 | {count} 個表態",
		like: "讚好",
		love: "心心",
		amazing: "花癡",
		funny: "笑哭",
		wow: "驚訝",
		sad: "喊",
		fire: "火焰",
		sparkle: "星星"
	},
	photoload: {
		loadError: "圖片載入失敗",
		loading: "正在載入圖片",
		converting: "正在轉換中...",
		loadingWebGL: "正在載入 WebGL...",
		loadingHEIC: "HEIC 圖片載入中...",
		loadingTexture: "正在建立紋理"
	}
};
var exif$2 = {
	sections: {
		basic: "基本資料",
		deviceInfomation: "裝置資料",
		specification: "技術參數",
		rating: "評分",
		tags: "標籤",
		albums: "包含的相簿",
		histogram: "直方圖",
		capture: {
		},
		shooting: {
			parameters: "拍攝參數",
			mode: "拍攝模式"
		}
	},
	aperture: "光圈",
	filename: "檔名",
	fileSize: "檔案大小",
	resolution: "解像度",
	pixels: "像素",
	dateTaken: {
		title: "拍攝時間"
	},
	colorSpace: {
		title: "色彩空間"
	},
	artist: "攝影師",
	software: "軟件",
	tz: "時區",
	country: "國家／地區",
	city: "城市",
	gps: {
		title: "座標"
	},
	focal: {
		length: {
			actual: "焦距",
			equivalent: "35mm 等效"
		},
		plane: {
			resolution: "焦平面解像度"
		}
	},
	exposure: {
		time: "曝光時間",
		program: "曝光程式",
		mode: "曝光模式"
	},
	camera: "相機",
	lens: "鏡頭",
	maxAperture: "最大光圈",
	wb: {
		title: "白平衡",
		shiftAB: "白平衡偏移（琥珀－藍）",
		shiftGM: "白平衡偏移（綠－洋紅）",
		bias: "白平衡偏移",
		fineTune: "白平衡微調"
	},
	metering: {
		title: "測光模式"
	},
	flash: {
		title: "閃光燈",
		meteringMode: "閃光燈測光模式"
	},
	scene: {
		captureType: "場景拍攝類型"
	},
	brightness: {
		value: "亮度"
	},
	sensing: {
		method: "感光方式"
	},
	values: {
		exposureProgram: {
			notDefined: "未定義",
			manual: "手動",
			programAe: "程式自動曝光",
			aperturePriorityAe: "光圈先決自動曝光",
			shutterSpeedPriorityAe: "快門先決自動曝光",
			creativeSlowSpeed: "創意（慢速）",
			actionHighSpeed: "動作（高速）",
			portrait: "人像",
			landscape: "風景",
			bulb: "B 快門"
		},
		exposureMode: {
			auto: "自動",
			manual: "手動",
			autoBracket: "自動包圍曝光"
		},
		flash: {
			noFlash: "未閃光",
			fired: "已閃光",
			firedReturnNotDetected: "已閃光，未檢測到回光",
			firedReturnDetected: "已閃光，檢測到回光",
			onDidNotFire: "開啟，未閃光",
			onFired: "開啟，已閃光",
			onReturnNotDetected: "開啟，未檢測到回光",
			onReturnDetected: "開啟，檢測到回光",
			offDidNotFire: "關閉，未閃光",
			offDidNotFireReturnNotDetected: "關閉，未閃光，未檢測到回光",
			autoDidNotFire: "自動，未閃光",
			autoFired: "自動，已閃光",
			autoFiredReturnNotDetected: "自動，已閃光，未檢測到回光",
			autoFiredReturnDetected: "自動，已閃光，檢測到回光",
			noFlashFunction: "無閃光功能",
			offNoFlashFunction: "關閉，無閃光功能",
			firedRedEyeReduction: "已閃光，防紅眼",
			firedRedEyeReductionReturnNotDetected: "已閃光，防紅眼，未檢測到回光",
			firedRedEyeReductionReturnDetected: "已閃光，防紅眼，檢測到回光",
			onRedEyeReduction: "開啟，防紅眼",
			onRedEyeReductionReturnNotDetected: "開啟，防紅眼，未檢測到回光",
			onRedEyeReductionReturnDetected: "開啟，防紅眼，檢測到回光",
			offRedEyeReduction: "關閉，防紅眼",
			autoDidNotFireRedEyeReduction: "自動，未閃光，防紅眼",
			autoFiredRedEyeReduction: "自動，已閃光，防紅眼",
			autoFiredRedEyeReductionReturnNotDetected: "自動，已閃光，防紅眼，未檢測到回光",
			autoFiredRedEyeReductionReturnDetected: "自動，已閃光，防紅眼，檢測到回光"
		},
		meteringMode: {
			unknown: "未知",
			average: "平均測光",
			centerWeightedAverage: "中央重點平均測光",
			spot: "點測光",
			multiSpot: "多點測光",
			multiSegment: "矩陣測光",
			partial: "局部測光",
			other: "其他"
		},
		whiteBalance: {
			auto: "自動",
			manual: "手動",
			auto1: "正常校正，中性",
			auto2: "保留環境暖色"
		},
		sceneCaptureType: {
			standard: "標準",
			landscape: "風景",
			portrait: "人像",
			night: "夜景",
			other: "其他"
		},
		sensingMethod: {
			notDefined: "未定義",
			monochromeArea: "單色區域感測器",
			oneChipColorArea: "單晶片彩色區域感測器",
			twoChipColorArea: "雙晶片彩色區域感測器",
			threeChipColorArea: "三晶片彩色區域感測器",
			colorSequentialArea: "順序彩色區域感測器",
			monochromeLinear: "單色線性感測器",
			trilinear: "三線性感測器",
			colorSequentialLinear: "順序彩色線性感測器"
		},
		colorSpace: {
			srgb: "sRGB",
			adobeRgb: "Adobe RGB",
			wideGamutRgb: "廣色域 RGB",
			displayP3: "Display P3",
			iccProfile: "ICC 設定檔",
			uncalibrated: "未校正",
			rgb: "RGB"
		}
	}
};
var plural$2 = {
	photo: "沒有相片 | 一張相片 | {count} 張相片"
};
var title$2 = {
	dashboard: "控制台",
	fallback: {
		photo: "相片"
	},
	locations: "位置管理",
	photos: "相片庫",
	gallery: "相片集",
	globe: "照片地球儀",
	queue: "佇列管理",
	logs: "系統日誌",
	albums: "相簿",
	siteAdministration: "站點設置",
	generalSettings: "基本設置",
	appearanceSettings: "外觀設置",
	mapAndLocation: "地圖和位置",
	location: "位置服務"
};
var auth$2 = {
	form: {
		signin: {
			title: "登入",
			subtitle: "登錄到 {0}"
		},
		action: {
			or: "或",
			"continue": "繼續"
		},
		labels: {
			email: "電子郵箱",
			password: "密碼"
		}
	}
};
var common$2 = {
	months: {
		jan: "一月",
		feb: "二月",
		mar: "三月",
		apr: "四月",
		may: "五月",
		jun: "六月",
		jul: "七月",
		aug: "八月",
		sep: "九月",
		oct: "十月",
		nov: "十一月",
		dec: "十二月"
	},
	days: {
		sun: "日",
		mon: "一",
		tue: "二",
		wed: "三",
		thu: "四",
		fri: "五",
		sat: "六"
	},
	heatmap: {
		legend: {
			less: "更少",
			more: "更多",
			recentlyYear: "最近一年"
		},
		tooltip: {
			data: "{0}拍咗 {1} 張相",
			noData: "{0}冇相"
		}
	}
};
var dashboard$2 = {
	photos: {
		title: "上傳相片",
		subtitle: "上傳後相片會自動處理並新增到您的圖庫。您稍後可以在 {0} 中組織您的相片。",
		supportedFormats: "JPEG / PNG / HEIC / 實況相片 / 動態相片",
		maxFileSize: "最大 {size}MB",
		buttons: {
			upload: "上傳相片",
			queue: "任務佇列"
		},
		uploader: {
			label: "拖曳或點擊選擇相片",
			description: "支援 JPEG、PNG、HEIC 格式的相片，以及 MOV 格式的實況相片影片。每個檔案的最大大小：{maxSize}MB"
		},
		toolbar: {
			title: "相片管理",
			filter: "篩選",
			refresh: "重新整理"
		},
		photoFilter: {
			all: "所有相片",
			livephoto: "實況相片",
			"static": "靜態相片"
		},
		stats: {
			photos: "張相片",
			livePhotos: "張實況相片"
		},
		table: {
			columns: {
				thumbnail: {
					title: "縮圖",
					action: "在新視窗開啟相片"
				},
				id: "相片 ID",
				title: "相片標題",
				tags: "關鍵字",
				rating: "評分",
				isLivePhoto: "實況相片",
				location: "位置",
				dateTaken: "拍攝日期",
				lastModified: "上次修改",
				fileSize: "檔案大小",
				colorSpace: "色彩空間",
				reactions: "反應",
				actions: "操作"
			},
			cells: {
				noTags: "無標籤",
				noRating: "未評分",
				noGps: "沒有 GPS 資料",
				unknown: "未知",
				staticPhoto: "靜態相片",
				noReactions: "無反應"
			},
			columnVisibility: {
				button: "列設定",
				description: "切換列的顯示/隱藏"
			}
		},
		actions: {
			reprocess: "重新處理",
			refreshLocation: "重新取得城市",
			"delete": "刪除",
			editMetadata: "編輯資訊",
			previewPhoto: "相片預覽"
		},
		selection: {
			selected: "已選擇 {count} / {total} 列",
			batchReprocess: "批量重新處理",
			batchDownload: "批量下載",
			batchDelete: "批量刪除"
		},
		slideover: {
			title: "上傳相片",
			description: "拖曳或選擇檔案。相片會自動處理並新增到圖庫。",
			buttons: {
				clear: "清除選擇",
				upload: "上傳 {count} 個檔案"
			},
			footer: {
				noSelection: "請選擇相片進行上傳",
				prepared: "{count} 個檔案 · {size}"
			}
		},
		"delete": {
			single: {
				title: "刪除相片",
				message: "確定要刪除此相片嗎？"
			},
			batch: {
				title: "批量刪除相片",
				message: "確定要刪除已選擇的 {count} 張相片嗎？"
			},
			warning: "刪除相片會移除原始檔案、縮圖和實況相片影片，無法復原。",
			buttons: {
				cancel: "取消",
				confirm: "確認刪除"
			}
		},
		livePhotoModal: {
			title: "實況相片：{title}",
			staticImage: "靜態影像",
			livePhotoVideo: "實況相片影片",
			buttons: {
				openVideo: "在新視窗中開啟影片",
				downloadVideo: "下載影片",
				close: "關閉"
			},
			notSupported: "您的瀏覽器不支援影片播放"
		},
		messages: {
			uploadSuccess: "相片上傳成功，處理中...",
			uploadMultipleSuccess: "{count} 張相片上傳成功，處理中...",
			reprocessSuccess: "重新處理任務已新增",
			reprocessTaskId: "任務 ID：{taskId}",
			deleteSuccess: "相片已成功刪除",
			batchDeleteSuccess: "成功刪除 {count} 張相片",
			batchSelectRequired: "請選擇至少一張相片進行此操作",
			noStorageKey: "無法處理：缺少儲存資料",
			batchNoStorageKey: "{count} 張相片缺少儲存資料，無法處理",
			batchNoUrl: "沒有可用下載連結的相片",
			batchPartialUrl: "僅有 {count} 張相片（共 {total} 張）具有可用的下載連結",
			downloadStarted: "開始下載",
			downloadingCount: "正在下載 {count} 張相片...",
			batchDownloadSuccess: "批量下載完成",
			batchDownloadFailed: "批量下載失敗",
			batchDownloadPartial: "批量下載已完成，部分失敗",
			downloadedCount: "已下載 {count} 張相片",
			downloadFailedCount: "下載失敗 {count} 張相片",
			downloadPartialCount: "已下載 {success} 張相片，{failed} 張失敗",
			warning: "警告",
			error: "發生錯誤",
			deleteFailed: "刪除相片失敗",
			batchDeleteFailed: "批量刪除失敗",
			batchReprocessFailed: "批量重新處理失敗",
			reprocessFailed: "重新處理相片失敗",
			livePhotoNotFound: "不是實況相片",
			livePhotoLoadError: "無法載入實況相片資料",
			metadataUpdateSuccess: "相片資訊已更新",
			metadataUpdateFailed: "更新相片資訊失敗",
			photoNotFound: "找不到相片",
			photoFileMissing: "找不到相片檔案",
			noChangesProvided: "沒有可套用的變更",
			queueUnavailable: "任務隊列不可用",
			reverseGeocodeQueued: "已新增重新取得城市的任務",
			reverseGeocodeFailed: "重新取得城市任務新增失敗"
		},
		errors: {
			noSelection: "請選擇相片進行上傳",
			fileValidationFailed: "檔案驗證失敗",
			allFilesValidationFailed: "所有檔案驗證失敗",
			unsupportedFormat: "不支援的檔案格式：{type}。請選擇 JPEG、PNG 或 HEIC 相片，或 MOV 格式的實況相片影片。",
			fileTooLarge: "檔案過大：{size}MB。最大支援：{maxSize}MB。",
			uploadFailed: "上傳失敗",
			uploadNetworkError: "網路連線失敗或 CORS 錯誤。請檢查網路和儲存配置。",
			uploadCorsError: "CORS 請求失敗。請檢查儲存 CORS 組態。",
			uploadUnauthorized: "未授權。請重新登入。",
			taskSubmitFailed: "提交處理任務失敗",
			taskStatusCheckFailed: "檢查任務狀態失敗。請重新整理頁面後重試。"
		},
		processing: {
			preparing: "準備中",
			uploading: "上傳中",
			processing: "處理中",
			completed: "已完成",
			error: "錯誤",
			skipped: "已跳過",
			blocked: "已封鎖"
		},
		uploadQueue: {
			clearCompleted: "清除已完成的任務",
			clearAll: "清除所有任務",
			taskCleared: "已清除已完成的任務",
			allTasksCleared: "已清除所有上傳任務",
			tasksCleared: "已清除 {count} 個任務"
		},
		editModal: {
			title: "編輯相片資訊",
			description: "更新標題、描述、標籤與拍攝位置。",
			fields: {
				title: "標題",
				description: "描述",
				tags: "標籤",
				tagsHint: "按 Enter 鍵新增每個標籤。",
				location: "拍攝位置",
				locationHint: "點擊地圖選擇或更新拍攝位置。",
				clearLocation: "清除位置",
				coordinates: "座標",
				noLocation: "未選擇位置",
				rating: "評分",
				ratingHint: "點擊星星為相片設定評分（0-5 星）。",
				noRating: "未評分"
			},
			actions: {
				cancel: "取消",
				save: "儲存變更"
			}
		}
	},
	albums: {
		title: "相簿管理",
		subtitle: "建立和管理您的照片相簿",
		createButton: "建立相簿",
		noAlbums: "還沒有相簿",
		noAlbumsTip: "建立您的第一個相簿來組織您的照片",
		form: {
			title: "標題",
			titlePlaceholder: "輸入相簿標題",
			titleRequired: "請輸入相簿標題",
			description: "描述",
			descriptionPlaceholder: "輸入相簿描述（可選）",
			coverPhoto: "相簿封面",
			addCoverPhoto: "新增封面相片",
			selectPhotos: "選擇相片",
			editPhotos: "修改相片選擇",
			selectedCount: "已選擇 {count} 張相片",
			clearAll: "全部清除"
		},
		table: {
			columns: {
				cover: "封面",
				title: "標題",
				description: "描述",
				photoCount: "相片數",
				createdAt: "建立時間",
				actions: "操作"
			}
		},
		modal: {
			selectPhotos: "選擇相片",
			totalPhotos: "共 {count} 張",
			selectedPhotos: "已選 {count} 張",
			searchPlaceholder: "搜尋相片...",
			searchResults: "結果：{current} / {total}",
			selectAll: "全選",
			setCover: "設為封面",
			noPhotos: "暫無相片",
			noResults: "未找到相符的相片",
			tryOtherKeywords: "嘗試使用其他關鍵字搜尋",
			confirm: "確認 ({count})",
			selectedInfo: "已選擇：",
			coverSetInfo: "已設定封面"
		},
		slideover: {
			create: {
				title: "建立相簿",
				description: "建立一個新的相簿來組織您的照片"
			},
			edit: {
				title: "編輯相簿",
				description: "修改相簿的資訊和相片"
			},
			submitCreate: "建立",
			submitEdit: "儲存",
			cancel: "取消"
		},
		"delete": {
			title: "刪除相簿",
			message: "確定要刪除相簿\"{title}\"嗎？刪除相簿不會刪除其中的相片，僅刪除相簿本身。",
			cancel: "取消",
			confirm: "確認刪除"
		},
		messages: {
			createSuccess: "相簿建立成功",
			updateSuccess: "相簿更新成功",
			deleteSuccess: "相簿刪除成功",
			createError: "建立相簿失敗",
			updateError: "更新相簿失敗",
			deleteError: "刪除相簿失敗",
			loadError: "載入相簿失敗",
			loadDetailError: "載入相簿詳情失敗",
			loadPhotosError: "載入相片失敗"
		}
	},
	overview: {
		title: "儀表板概覽",
		indicator: {
			totalPhotos: "照片總數",
			thisMonth: "本月新增",
			queueStatus: {
				title: "隊列狀態",
				processing: "處理中",
				pending: "空閒"
			},
			storageUsage: "存儲使用"
		},
		section: {
			runtimeInfo: {
				title: "運行信息",
				version: "運行版本",
				uptime: "運行時間",
				environment: "運行環境",
				lastUpdate: "最後更新",
				systems: {
					windows: "Microsoft Windows",
					windows10: "Microsoft Windows 10",
					windows11: "Microsoft Windows 11",
					ubuntu: "Ubuntu",
					debian: "Debian",
					centos: "CentOS",
					redhat: "Red Hat Enterprise Linux",
					fedora: "Fedora",
					arch: "Arch Linux",
					alpine: "Alpine Linux",
					opensuse: "openSUSE",
					macos: "macOS",
					docker: "Docker 容器",
					unknown: "未知系統"
				}
			},
			memory: {
				title: "內存使用率"
			},
			queue: {
				title: "隊列狀態",
				activeWorkers: "活躍 Workers",
				totalWorkers: "總 Workers",
				totalProcessed: "已處理",
				totalFailed: "失敗計數",
				avgSuccessRate: "成功率"
			}
		}
	},
	queue: {
		title: "隊列管理",
		indicator: {
			pending: "等待處理",
			processing: "正在處理",
			completed: "已完成",
			failed: "失敗任務"
		},
		actions: {
			refresh: "刷新數據",
			clearCompleted: "清理已完成",
			clearFailed: "清理失敗任務",
			clearAll: "清理全部",
			retrySelected: "重試選中",
			retryAll: "重試全部失敗",
			clearNonActive: "清理非活躍任務"
		},
		table: {
			id: "任務ID",
			type: "類型",
			status: "狀態",
			attempts: "嘗試次數",
			priority: "優先級",
			stage: "處理階段",
			error: "錯誤信息",
			errorMessage: "錯誤詳情",
			createdAt: "創建時間",
			completedAt: "完成時間",
			actions: "操作"
		},
		status: {
			pending: "等待中",
			"in-stages": "處理中",
			completed: "已完成",
			failed: "失敗"
		},
		types: {
			photo: "照片處理",
			"live-photo-video": "LivePhoto視頻",
			"photo-reverse-geocoding": "照片逆地理編碼"
		},
		stages: {
			preprocessing: "預處理",
			metadata: "元數據",
			thumbnail: "縮略圖",
			exif: "EXIF處理",
			"reverse-geocoding": "地理解析",
			"live-photo": "LivePhoto處理"
		},
		buttons: {
			retry: "重試",
			"delete": "刪除"
		},
		messages: {
			noTasks: "沒有找到任務",
			retrySuccess: "任務重試成功",
			deleteSuccess: "任務刪除成功",
			batchRetrySuccess: "批量重試成功",
			clearSuccess: "清理完成",
			operationFailed: "操作失敗"
		},
		filters: {
			all: "全部",
			status: "按狀態篩選",
			type: "按類型篩選"
		}
	}
};
var settings$2 = {
	app: {
		title: {
			label: "實例名稱",
			description: "實例的標題"
		},
		slogan: {
			label: "標語",
			description: "實例的標語",
			help: "標語顯示喺首頁的標題下方"
		},
		author: {
			label: "所有者",
			description: "實例的所有者名稱"
		},
		avatarUrl: {
			label: "頭像 URL",
			description: "所有者頭像的圖片連結",
			help: "頭像顯示加載頁面同首頁頭像中"
		},
		appearance: {
			theme: {
				label: "主題",
				description: "選擇應用主題",
				help: "使用者可以喺自己的瀏覽器中覆蓋此項",
				light: "淺色",
				dark: "深色",
				system: "系統"
			}
		}
	},
	map: {
		provider: {
			label: "地圖服務商",
			description: "選擇地圖服務商提供者"
		},
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 訪問令牌",
				help: "應當使用冇域名限制嘅令牌"
			},
			style: {
				label: "Mapbox 樣式",
				description: "Mapbox 地圖樣式 URL"
			}
		},
		maplibre: {
			token: {
				label: "MapTiler Token",
				description: "MapTiler API 訪問令牌",
				help: "MapLibre 預設使用免費地圖服務商 MapTiler"
			},
			style: {
				label: "MapLibre 樣式",
				description: "MapLibre 地圖樣式 URL"
			}
		}
	},
	location: {
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API 訪問令牌",
				help: "配置後將取代 Nominatim 作為位置信息服務"
			}
		},
		nominatim: {
			baseUrl: {
				label: "Nominatim 基礎 URL",
				description: "Nominatim 反向地理編碼 API 嘅基礎 URL",
				help: "留空則預設使用公開 Nominatim 服務"
			}
		}
	},
	storage: {
		name: {
			label: "配置名稱",
			description: "儲存提供者配置嘅名稱"
		},
		provider: {
			label: "儲存提供者",
			description: "選擇儲存服務提供者",
			options: {
				local: {
					label: "本地儲存",
					description: "直接將相片儲存喺伺服器嘅檔案系統中。"
				},
				s3: {
					label: "S3 兼容儲存",
					description: "使用 AWS S3、Cloudflare R2 或其他 S3 兼容服務。"
				},
				openlist: {
					label: "OpenList",
					description: "連接到 Alist 或 OpenList 實例進行儲存。"
				}
			}
		},
		s3: {
			bucket: {
				label: "儲存桶名稱",
				description: "S3 儲存桶嘅名稱"
			},
			region: {
				label: "地區",
				description: "S3 儲存桶所在嘅 AWS 地區"
			},
			endpoint: {
				label: "端點",
				description: "S3 服務嘅端點 URL"
			},
			prefix: {
				label: "前綴",
				description: "儲存喺桶入面嘅檔案前綴路徑"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用於訪問檔案嘅 CDN 地址"
			},
			accessKeyId: {
				label: "存取金鑰 ID",
				description: "AWS IAM 存取金鑰 ID"
			},
			secretAccessKey: {
				label: "祕密存取金鑰",
				description: "AWS IAM 祕密存取金鑰"
			},
			forcePathStyle: {
				label: "強制路徑方式",
				description: "使用路徑方式 URL 而唔係虛擬主機方式"
			},
			maxKeys: {
				label: "最大金鑰數",
				description: "列舉物件時返回嘅最大數量"
			}
		},
		local: {
			basePath: {
				label: "基本路徑",
				description: "本地儲存嘅基本目錄路徑"
			},
			baseUrl: {
				label: "基本 URL",
				description: "用於訪問本地檔案嘅基本 URL"
			},
			prefix: {
				label: "前綴",
				description: "本地儲存中所有檔案嘅路徑前綴"
			}
		},
		openlist: {
			baseUrl: {
				label: "OpenList 基本 URL",
				description: "OpenList 伺服器嘅基本 URL"
			},
			rootPath: {
				label: "根路徑",
				description: "喺 OpenList 入面儲存相片嘅根路徑"
			},
			token: {
				label: "身份驗證令牌",
				description: "OpenList API 身份驗證令牌"
			},
			uploadEndpoint: {
				label: "上傳端點",
				description: "用於上傳檔案嘅 API 端點（預設：/api/fs/put）"
			},
			downloadEndpoint: {
				label: "下載端點",
				description: "用於下載檔案嘅 API 端點（可選）"
			},
			listEndpoint: {
				label: "列表端點",
				description: "用於列出檔案嘅 API 端點（可選）"
			},
			deleteEndpoint: {
				label: "刪除端點",
				description: "用於刪除檔案嘅 API 端點（預設：/api/fs/remove）"
			},
			metaEndpoint: {
				label: "中繼資料端點",
				description: "用於取得檔案中繼資料嘅 API 端點（預設：/api/fs/get）"
			},
			pathField: {
				label: "路徑欄位名稱",
				description: "API 請求中檔案路徑嘅參數名稱（預設：path）"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "用於訪問圖像嘅自訂 CDN URL"
			}
		}
	}
};
var wizard$2 = {
	admin: {
		username: {
			label: "用戶名"
		},
		email: {
			label: "電子郵箱"
		},
		password: {
			label: "密碼"
		},
		confirmPassword: {
			label: "確認密碼"
		}
	},
	map: {
		provider: {
			mapbox: {
				label: "Mapbox",
				description: "具有豐富樣式選項的高性能地圖。"
			},
			maplibre: {
				label: "MapLibre",
				description: "Mapbox GL JS 的開源分支。"
			}
		}
	}
};
const zhHantHK = {
	map: map$2,
	ui: ui$2,
	album: album$2,
	minimap: minimap$2,
	viewer: viewer$2,
	exif: exif$2,
	plural: plural$2,
	title: title$2,
	auth: auth$2,
	common: common$2,
	dashboard: dashboard$2,
	settings: settings$2,
	wizard: wizard$2
};

const zhHantHK$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  album: album$2,
  auth: auth$2,
  common: common$2,
  dashboard: dashboard$2,
  default: zhHantHK,
  exif: exif$2,
  map: map$2,
  minimap: minimap$2,
  plural: plural$2,
  settings: settings$2,
  title: title$2,
  ui: ui$2,
  viewer: viewer$2,
  wizard: wizard$2
}, Symbol.toStringTag, { value: 'Module' }));

var plural$1 = {
	photo: "no photos | one photo | {count} photos"
};
var ui$1 = {
	action: {
		filter: {
			tooltip: "Filter Photos",
			title: "Filter Photos",
			clearAll: "Clear All",
			tabs: {
				tags: "Tags",
				cameras: "Cameras",
				lenses: "Lenses",
				cities: "Cities",
				ratings: "Ratings"
			},
			empty: {
				tags: "No tags",
				cameras: "No camera information",
				lenses: "No lens information",
				cities: "No city information"
			},
			rating: {
				showAll: "Show all photos",
				showStarsAndAbove: "Show {count} star(s) and above photos"
			}
		},
		sort: {
			tooltip: "Photo Sorting",
			title: "Sort By",
			options: {
				dateTakenDesc: "Date Taken (Newest First)",
				dateTakenAsc: "Date Taken (Oldest First)",
				fileSizeAsc: "File Size (Ascending)",
				fileSizeDesc: "File Size (Descending)",
				titleAsc: "Title (Ascending)",
				titleDesc: "Title (Descending)",
				shuffle: "Shuffle"
			}
		},
		theme: {
			tooltip: "Color Theme"
		},
		dashboard: {
			tooltip: "Dashboard"
		},
		logout: {
			tooltip: "Logout"
		},
		globe: {
			tooltip: "Globe"
		},
		home: {
			tooltip: "Back to Home"
		},
		share: {
			tooltip: "Share Photo",
			title: "Share Photo",
			tabs: {
				social: "Social Share",
				advanced: "Advanced Share"
			},
			platforms: {
				twitter: "Twitter",
				telegram: "Telegram",
				weibo: "Weibo",
				facebook: "Facebook",
				whatsapp: "WhatsApp",
				linkedin: "LinkedIn"
			},
			actions: {
				nativeShare: "Use System Share",
				copyLink: "Copy Link",
				copyImage: "Copy Image",
				downloadImage: "Download Original",
				generateShareImage: "Generate Share Image",
				shareUrl: "Share URL",
				downloadOgImage: "Download Preview",
				downloadOriginal: "Download Original",
				downloadOriginalImage: "Download Original Image"
			},
			success: {
				linkCopied: "Link copied to clipboard",
				imageCopied: "Image copied to clipboard",
				ogImageDownloaded: "Preview image downloaded successfully",
				originalImageDownloaded: "Original image downloaded successfully"
			},
			error: {
				copyNotSupported: "Copy not supported in this browser",
				shareFailed: "Share failed",
				nativeShareFailed: "Native share failed",
				linkCopyFailed: "Failed to copy link",
				ogImageDownloadFailed: "Failed to download preview image",
				originalImageDownloadFailed: "Failed to download original image"
			},
			ogImage: {
				title: "Share Preview",
				alt: "Photo share preview image",
				loading: "Loading...",
				loadError: "Failed to load"
			},
			fallback: {
				photoTitle: "Beautiful Photo"
			},
			text: {
				prefix: "Check out this photo:"
			}
		},
		backtotop: {
			tooltip: "Back to Top"
		}
	},
	stats: {
		totalPhotosWithRange: "{range}, @:plural.photo total",
		noPhotosTip: "Nno photos yet, upload some now!"
	},
	livePhoto: "Live Photo",
	indexPanelCountCity: "and more other cities",
	album: {
		noImage: "Empty Album",
		emptyAlbumTip: "Add photos to get started",
		noDescription: "No description"
	}
};
var album$1 = {
	notFound: "Album not found",
	noDateInfo: "No date info",
	noPhotosTip: "No photos in this album yet",
	emptyAlbumTitle: "This Album Is Empty",
	emptyAlbumDescription: "More wonderful moments will be presented here.",
	failedToLoadTitle: "Failed to Load Album",
	failedToLoadDescription: "An error occurred while loading this album.",
	failedToLoad: "Failed to load album",
	backToAlbums: "Back to Albums",
	noDescription: "No description provided",
	photo: "no photos | one photo | {count} photos",
	createdAt: "Created {time}",
	metadata: {
		photos: "Photos",
		dateRange: "Date Range",
		created: "Created"
	}
};
var map$1 = {
	cluster: {
		details: "Click to view details",
		nearbyPhotos: "{0} photos nearby"
	}
};
var minimap$1 = {
	loading: "Loading minimap..."
};
var viewer$1 = {
	hint: {
		livePhoto: {
			mobile: "Long press to play live photos · Double-click or pinch zoom",
			desktop: "Hover play icon · Double-click/scroll zoom"
		},
		mobile: "Double-click or pinch zoom",
		desktop: "Double-click or zoom with the mouse wheel"
	},
	reaction: {
		add: "React",
		change: "Reacted",
		count: "no reactions | {count} reaction | {count} reactions",
		like: "like",
		love: "love",
		amazing: "amazing",
		funny: "funny",
		wow: "wow",
		sad: "sad",
		fire: "fire",
		sparkle: "sparkle"
	},
	photoload: {
		loadError: "Image loading failed",
		loading: "Loading image",
		converting: "Converting...",
		loadingWebGL: "Loading WebGL...",
		loadingHEIC: "Loading HEIC image...",
		loadingTexture: "Building texture"
	}
};
var exif$1 = {
	sections: {
		basic: "Basic information",
		deviceInfomation: "Equipment Information",
		specification: "Technical parameters",
		rating: "Rating",
		tags: "Keywords",
		albums: "Albums Included",
		histogram: "Histogram",
		capture: {
		},
		shooting: {
			parameters: "Shooting Parameters",
			mode: "Shooting Mode"
		}
	},
	aperture: "Aperture Value",
	dateTaken: {
		title: "Shooting Time"
	},
	filename: "Filename",
	fileSize: "File Size",
	resolution: "Resolution",
	pixels: "Pixels",
	colorSpace: {
		title: "Color Space"
	},
	artist: "Artist",
	software: "Software",
	tz: "Time Zone",
	country: "Country",
	city: "City",
	gps: {
		title: "Coordinate"
	},
	focal: {
		length: {
			actual: "Focal Length",
			equivalent: "35mm Equivalent"
		},
		plane: {
			resolution: "Focal Plane Resolution"
		}
	},
	exposure: {
		time: "Exposure Time",
		program: "Exposure Program",
		mode: "Exposure Mode"
	},
	camera: "Camera",
	lens: "Lens",
	maxAperture: "Maximum Aperture",
	wb: {
		title: "White Balance",
		shiftAB: "WB Offset(amber-blue)",
		shiftGM: "WB Offset(green-magenta)",
		bias: "WB Bias",
		fineTune: "WB FineTune"
	},
	metering: {
		title: "Metering Mode"
	},
	flash: {
		title: "Flash",
		meteringMode: "Flash Metering Mode"
	},
	scene: {
		captureType: "Scene Capture Type"
	},
	brightness: {
		value: "Brightness"
	},
	sensing: {
		method: "Sensing Method"
	},
	values: {
		exposureProgram: {
			notDefined: "Not Defined",
			manual: "Manual",
			programAe: "Program AE",
			aperturePriorityAe: "Aperture-priority AE",
			shutterSpeedPriorityAe: "Shutter speed priority AE",
			creativeSlowSpeed: "Creative (Slow speed)",
			actionHighSpeed: "Action (High speed)",
			portrait: "Portrait",
			landscape: "Landscape",
			bulb: "Bulb"
		},
		exposureMode: {
			auto: "Auto",
			manual: "Manual",
			autoBracket: "Auto bracket"
		},
		flash: {
			noFlash: "No Flash",
			fired: "Fired",
			firedReturnNotDetected: "Fired, Return not detected",
			firedReturnDetected: "Fired, Return detected",
			onDidNotFire: "On, Did not fire",
			onFired: "On, Fired",
			onReturnNotDetected: "On, Return not detected",
			onReturnDetected: "On, Return detected",
			offDidNotFire: "Off, Did not fire",
			offDidNotFireReturnNotDetected: "Off, Did not fire, Return not detected",
			autoDidNotFire: "Auto, Did not fire",
			autoFired: "Auto, Fired",
			autoFiredReturnNotDetected: "Auto, Fired, Return not detected",
			autoFiredReturnDetected: "Auto, Fired, Return detected",
			noFlashFunction: "No flash function",
			offNoFlashFunction: "Off, No flash function",
			firedRedEyeReduction: "Fired, Red-eye reduction",
			firedRedEyeReductionReturnNotDetected: "Fired, Red-eye reduction, Return not detected",
			firedRedEyeReductionReturnDetected: "Fired, Red-eye reduction, Return detected",
			onRedEyeReduction: "On, Red-eye reduction",
			onRedEyeReductionReturnNotDetected: "On, Red-eye reduction, Return not detected",
			onRedEyeReductionReturnDetected: "On, Red-eye reduction, Return detected",
			offRedEyeReduction: "Off, Red-eye reduction",
			autoDidNotFireRedEyeReduction: "Auto, Did not fire, Red-eye reduction",
			autoFiredRedEyeReduction: "Auto, Fired, Red-eye reduction",
			autoFiredRedEyeReductionReturnNotDetected: "Auto, Fired, Red-eye reduction, Return not detected",
			autoFiredRedEyeReductionReturnDetected: "Auto, Fired, Red-eye reduction, Return detected"
		},
		meteringMode: {
			unknown: "Unknown",
			average: "Average",
			centerWeightedAverage: "Center-weighted average",
			spot: "Spot",
			multiSpot: "Multi-spot",
			multiSegment: "Multi-segment",
			partial: "Partial",
			other: "Other"
		},
		whiteBalance: {
			auto: "Auto",
			manual: "Manual",
			auto1: "Normal correction, neutral",
			auto2: "Keep ambient warm tones"
		},
		sceneCaptureType: {
			standard: "Standard",
			landscape: "Landscape",
			portrait: "Portrait",
			night: "Night",
			other: "Other"
		},
		sensingMethod: {
			notDefined: "Not Defined",
			monochromeArea: "Monochrome area",
			oneChipColorArea: "One-chip color area",
			twoChipColorArea: "Two-chip color area",
			threeChipColorArea: "Three-chip color area",
			colorSequentialArea: "Color sequential area",
			monochromeLinear: "Monochrome linear",
			trilinear: "Trilinear",
			colorSequentialLinear: "Color sequential linear"
		},
		colorSpace: {
			srgb: "sRGB",
			adobeRgb: "Adobe RGB",
			wideGamutRgb: "Wide Gamut RGB",
			displayP3: "Display P3",
			iccProfile: "ICC Profile",
			uncalibrated: "Uncalibrated",
			rgb: "RGB"
		}
	}
};
var title$1 = {
	gallery: "Gallery",
	fallback: {
		photo: "Photo"
	},
	dashboard: "Dashboard",
	photos: "Photos",
	locations: "Locations",
	globe: "Photo Globe",
	queue: "Queue Management",
	logs: "System Logs",
	albums: "Albums",
	siteAdministration: "Site settings",
	location: "Location services",
	generalSettings: "General Settings",
	appearanceSettings: "Appearance Settings",
	mapAndLocation: "Map & Location"
};
var auth$1 = {
	form: {
		errors: {
			invalidEmail: "Invalid email address",
			invalidPassword: ""
		},
		signin: {
			title: "Sign In",
			subtitle: "Log in to {0}"
		},
		action: {
			backToHome: "Back to Home",
			or: "OR",
			"continue": "Continue"
		},
		labels: {
			email: "Email",
			password: "Password"
		}
	}
};
var common$1 = {
	unknown: "unknown",
	months: {
		jan: "Jan",
		feb: "Feb",
		mar: "Mar",
		apr: "Apr",
		may: "May",
		jun: "Jun",
		jul: "Jul",
		aug: "Aug",
		sep: "Sep",
		oct: "Oct",
		nov: "Nov",
		dec: "Dec"
	},
	days: {
		sun: "Sun",
		mon: "Mon",
		tue: "Tue",
		wed: "Wed",
		thu: "Thu",
		fri: "Fri",
		sat: "Sat"
	},
	heatmap: {
		legend: {
			less: "Less",
			more: "More",
			recentlyYear: "Past year"
		},
		tooltip: {
			data: "{0} took {1} photos",
			noData: "{0} has no photos"
		}
	}
};
var upload = {
	duplicate: {
		block: {
			title: "File Already Exists",
			message: "Photo \"{fileName}\" already exists and duplicate uploads are not allowed",
			suggestion: "You can: 1) Rename the file and upload again; 2) Switch to \"warn mode\" in settings to allow overwriting"
		},
		skip: {
			title: "Duplicate File Skipped",
			message: "Photo \"{fileName}\" already exists and has been automatically skipped",
			info: "Existing photo taken on {dateTaken}"
		},
		warn: {
			title: "Duplicate File Detected",
			message: "Photo \"{fileName}\" already exists. Continuing will overwrite the existing photo",
			warning: "After overwriting, all information of the original photo (EXIF, tags, reactions, etc.) will be replaced",
			info: "Existing photo: {title}, taken on {dateTaken}"
		}
	},
	success: {
		upload: {
			single: "Photo uploaded successfully, processing...",
			multiple: "{count} photos uploaded successfully, processing..."
		},
		check: {
			title: "Check Complete",
			message: "Checked {total} files, found {duplicates} duplicates"
		}
	},
	error: {
		required: {
			title: "Missing Required Parameter",
			message: "Please provide {field} parameter"
		},
		invalidType: {
			title: "Unsupported File Type",
			message: "Unsupported media type: {type}",
			suggestion: "Allowed types: {allowed}"
		},
		tooLarge: {
			title: "File Too Large",
			message: "File size {size}MB exceeds limit",
			suggestion: "Maximum allowed: {maxSize}MB"
		},
		uploadFailed: {
			title: "Upload Failed",
			message: "An error occurred during upload, please try again later"
		}
	}
};
var dashboard$1 = {
	photos: {
		title: "Photo Upload",
		subtitle: "Photos will be automatically processed and added to your library. You can organize your photos in the {0} section afterwards.",
		supportedFormats: "JPEG / PNG / HEIC / Live Photo / Motion Photo",
		maxFileSize: "Max {size}MB",
		buttons: {
			upload: "Upload Photos",
			queue: "Task Queue"
		},
		uploader: {
			label: "Drag and drop or click to select photos",
			description: "Supports JPEG, PNG, HEIC format photos, and MOV format Live Photo videos. Maximum file size: {maxSize}MB per file"
		},
		toolbar: {
			title: "Photo Management",
			filter: "Filter",
			refresh: "Refresh"
		},
		photoFilter: {
			all: "All Photos",
			livephoto: "Live Photo",
			"static": "Static Photos"
		},
		stats: {
			photos: "photos",
			livePhotos: "Live Photos"
		},
		table: {
			columns: {
				thumbnail: {
					title: "Thumbnail",
					action: "Open Photo in New Tab"
				},
				id: "Photo ID",
				title: "Photo Title",
				tags: "Keywords",
				rating: "Rating",
				isLivePhoto: "Live Photo",
				location: "Location",
				dateTaken: "Date Taken",
				lastModified: "Last Modified",
				fileSize: "File Size",
				colorSpace: "Color Space",
				reactions: "Reactions",
				actions: "Actions"
			},
			cells: {
				noTags: "No tags",
				noRating: "No rating",
				noGps: "No GPS info",
				unknown: "Unknown",
				staticPhoto: "Static Photo",
				noReactions: "No reactions"
			},
			columnVisibility: {
				button: "Columns",
				description: "Toggle column visibility"
			}
		},
		actions: {
			reprocess: "Reprocess",
			refreshLocation: "Re-fetch City",
			"delete": "Delete",
			editMetadata: "Edit Metadata",
			previewPhoto: "Photo Preview"
		},
		selection: {
			selected: "{count} / {total} rows selected",
			batchReprocess: "Reprocess",
			batchDownload: "Download",
			batchDelete: "Batch Delete"
		},
		slideover: {
			title: "Upload Photos",
			description: "Drag and drop or select files. Photos will be automatically processed and added to the library.",
			buttons: {
				clear: "Clear Selection",
				upload: "Upload {count} file(s)"
			},
			footer: {
				noSelection: "Please select photos to upload",
				prepared: "{count} file(s) · {size}"
			}
		},
		"delete": {
			single: {
				title: "Delete Photo",
				message: "Are you sure you want to delete this photo?"
			},
			batch: {
				title: "Batch Delete Photos",
				message: "Are you sure you want to delete {count} selected photos?"
			},
			warning: "Deleting the photo will remove the original, thumbnail and live photo video, and cannot be undone.",
			buttons: {
				cancel: "Cancel",
				confirm: "Confirm Delete"
			}
		},
		livePhotoModal: {
			title: "Live Photo: {title}",
			staticImage: "Static Image",
			livePhotoVideo: "Live Photo Video",
			buttons: {
				openVideo: "Open Video in New Window",
				downloadVideo: "Download Video",
				close: "Close"
			},
			notSupported: "Your browser does not support video playback"
		},
		messages: {
			uploadSuccess: "Photo uploaded successfully, processing...",
			uploadMultipleSuccess: "{count} photos uploaded successfully, processing...",
			reprocessSuccess: "Reprocessing task added",
			reprocessTaskId: "Task ID: {taskId}",
			deleteSuccess: "Photo deleted successfully",
			batchDeleteSuccess: "Successfully deleted {count} photos",
			batchSelectRequired: "Please select at least one photo for this operation",
			noStorageKey: "Unable to process: missing storage information",
			batchNoStorageKey: "{count} photos are missing storage information and cannot be processed",
			batchNoUrl: "No photos with download URLs available",
			batchPartialUrl: "Only {count} out of {total} photos have download URLs available",
			downloadStarted: "Download started",
			downloadingCount: "Downloading {count} photo(s)...",
			batchDownloadSuccess: "Batch download completed successfully",
			batchDownloadFailed: "Batch download failed",
			batchDownloadPartial: "Batch download completed with some failures",
			downloadedCount: "Downloaded {count} photo(s)",
			downloadFailedCount: "Failed to download {count} photo(s)",
			downloadPartialCount: "Downloaded {success} photo(s), {failed} failed",
			warning: "Warning",
			error: "An error occurred",
			deleteFailed: "Failed to delete photo",
			batchDeleteFailed: "Batch delete failed",
			batchReprocessFailed: "Batch reprocess failed",
			reprocessFailed: "Failed to reprocess photo",
			livePhotoNotFound: "Not a Live Photo",
			livePhotoLoadError: "Unable to load Live Photo information",
			metadataUpdateSuccess: "Photo metadata updated",
			metadataUpdateFailed: "Failed to update photo metadata",
			photoNotFound: "Photo not found",
			photoFileMissing: "Photo file is missing",
			noChangesProvided: "No changes to apply",
			queueUnavailable: "Task queue is not available",
			reverseGeocodeQueued: "Reverse geocoding task queued",
			reverseGeocodeFailed: "Failed to queue reverse geocoding"
		},
		errors: {
			noSelection: "Please select photos to upload",
			fileValidationFailed: "File validation failed",
			allFilesValidationFailed: "All files failed validation",
			unsupportedFormat: "Unsupported file format: {type}. Please select JPEG, PNG, or HEIC photos, or MOV format Live Photo videos.",
			fileTooLarge: "File too large: {size}MB. Maximum supported: {maxSize}MB.",
			uploadFailed: "Upload failed",
			uploadNetworkError: "Network connection failed or CORS error. Please check network and storage configuration.",
			uploadCorsError: "CORS request failed. Please check storage CORS configuration.",
			uploadUnauthorized: "Unauthorized. Please log in again.",
			taskSubmitFailed: "Failed to submit processing task",
			taskStatusCheckFailed: "Failed to check task status. Please refresh the page and try again."
		},
		processing: {
			preparing: "Preparing",
			uploading: "Uploading",
			processing: "Processing",
			completed: "Completed",
			error: "Error",
			skipped: "Skipped",
			blocked: "Blocked"
		},
		uploadQueue: {
			clearCompleted: "Clear Completed Tasks",
			clearAll: "Clear All Tasks",
			taskCleared: "Completed tasks cleared",
			allTasksCleared: "All upload tasks cleared",
			tasksCleared: "{count} task(s) cleared"
		},
		editModal: {
			title: "Edit photo details",
			description: "Update the title, description, tags and shooting location.",
			fields: {
				title: "Title",
				description: "Description",
				tags: "Tags",
				tagsHint: "Press Enter to add each tag.",
				location: "Location",
				locationHint: "Click on the map to set the shooting location.",
				clearLocation: "Clear location",
				coordinates: "Coordinates",
				noLocation: "No location selected",
				rating: "Rating",
				ratingHint: "Click on the stars to set the photo rating (0-5 stars).",
				noRating: "No rating"
			},
			actions: {
				cancel: "Cancel",
				save: "Save changes"
			}
		}
	},
	albums: {
		title: "Album Management",
		subtitle: "Create and manage your photo albums",
		createButton: "Create Album",
		noAlbums: "No albums yet",
		noAlbumsTip: "Create your first album to organize your photos",
		form: {
			title: "Title",
			titlePlaceholder: "Enter album title",
			titleRequired: "Please enter album title",
			description: "Description",
			descriptionPlaceholder: "Enter album description (optional)",
			coverPhoto: "Album Cover",
			addCoverPhoto: "Add cover photo",
			selectPhotos: "Select Photos",
			editPhotos: "Edit photo selection",
			selectedCount: "Selected {count} photos",
			clearAll: "Clear all"
		},
		table: {
			columns: {
				cover: "Cover",
				title: "Title",
				description: "Description",
				photoCount: "Photos",
				createdAt: "Created at",
				actions: "Actions"
			}
		},
		modal: {
			selectPhotos: "Select Photos",
			totalPhotos: "Total {count} photos",
			selectedPhotos: "Selected {count} photos",
			searchPlaceholder: "Search photos...",
			searchResults: "Results: {current} / {total}",
			selectAll: "Select All",
			setCover: "Set as cover",
			noPhotos: "No photos",
			noResults: "No matching photos found",
			tryOtherKeywords: "Try other keywords",
			confirm: "Confirm ({count})",
			selectedInfo: "Selected:",
			coverSetInfo: "Cover set"
		},
		slideover: {
			create: {
				title: "Create Album",
				description: "Create a new album to organize your photos"
			},
			edit: {
				title: "Edit Album",
				description: "Modify album information and photos"
			},
			submitCreate: "Create",
			submitEdit: "Save",
			cancel: "Cancel"
		},
		"delete": {
			title: "Delete Album",
			message: "Are you sure you want to delete the album \"{title}\"? Deleting the album will not delete the photos inside, only the album itself.",
			cancel: "Cancel",
			confirm: "Confirm Delete"
		},
		messages: {
			createSuccess: "Album created successfully",
			updateSuccess: "Album updated successfully",
			deleteSuccess: "Album deleted successfully",
			createError: "Failed to create album",
			updateError: "Failed to update album",
			deleteError: "Failed to delete album",
			loadError: "Failed to load albums",
			loadDetailError: "Failed to load album details",
			loadPhotosError: "Failed to load photos"
		}
	},
	overview: {
		title: "Overview",
		indicator: {
			totalPhotos: "Total Photos",
			thisMonth: "New This Month",
			queueStatus: {
				title: "Queue Status",
				processing: "Processing",
				pending: "Idle"
			},
			storageUsage: "Storage Usage"
		},
		section: {
			runtimeInfo: {
				title: "Runtime Information",
				version: "Version",
				uptime: "Uptime",
				environment: "Environment",
				lastUpdate: "Last Updated",
				systems: {
					windows: "Microsoft Windows",
					windows10: "Microsoft Windows 10",
					windows11: "Microsoft Windows 11",
					ubuntu: "Ubuntu",
					debian: "Debian",
					centos: "CentOS",
					redhat: "Red Hat Enterprise Linux",
					fedora: "Fedora",
					arch: "Arch Linux",
					alpine: "Alpine Linux",
					opensuse: "openSUSE",
					macos: "macOS",
					docker: "Docker Container",
					unknown: "Unknown System"
				}
			},
			memory: {
				title: "Memory Usage"
			},
			queue: {
				title: "Queue Status",
				activeWorkers: "Active Workers",
				totalWorkers: "Total Workers",
				totalProcessed: "Processed",
				totalFailed: "Failure count",
				avgSuccessRate: "Success rate"
			}
		}
	},
	queue: {
		title: "Queue Management",
		indicator: {
			pending: "Pending",
			processing: "Processing",
			completed: "Completed",
			failed: "Failed"
		},
		actions: {
			refresh: "Refresh Data",
			clearCompleted: "Clear Completed",
			clearFailed: "Clear Failed",
			clearAll: "Clear All",
			retrySelected: "Retry Selected",
			retryAll: "Retry All Failed",
			clearNonActive: "Clear Non-Active"
		},
		table: {
			id: "Task ID",
			type: "Type",
			status: "Status",
			attempts: "Attempts",
			priority: "Priority",
			stage: "Stage",
			error: "Error",
			errorMessage: "Error Message",
			createdAt: "Created At",
			completedAt: "Completed At",
			actions: "Actions"
		},
		status: {
			pending: "Pending",
			"in-stages": "Processing",
			completed: "Completed",
			failed: "Failed"
		},
		types: {
			photo: "Photo Processing",
			"live-photo-video": "LivePhoto Video",
			"photo-reverse-geocoding": "Photo Reverse Geocoding"
		},
		stages: {
			preprocessing: "Preprocessing",
			metadata: "Metadata",
			thumbnail: "Thumbnail",
			exif: "EXIF Processing",
			"reverse-geocoding": "Geocoding",
			"live-photo": "LivePhoto Processing"
		},
		buttons: {
			retry: "Retry",
			"delete": "Delete"
		},
		messages: {
			noTasks: "No tasks found",
			retrySuccess: "Task retry successful",
			deleteSuccess: "Task deleted successfully",
			batchRetrySuccess: "Batch retry successful",
			clearSuccess: "Clear completed",
			operationFailed: "Operation failed"
		},
		filters: {
			all: "All",
			status: "Filter by Status",
			type: "Filter by Type"
		}
	}
};
var settings$1 = {
	app: {
		title: {
			label: "Instance Name",
			description: "The title of the instance"
		},
		slogan: {
			label: "Slogan",
			description: "The slogan of the instance",
			help: "The slogan displayed below the title on the homepage"
		},
		author: {
			label: "Owner",
			description: "The owner name of the instance"
		},
		avatarUrl: {
			label: "Avatar URL",
			description: "Link to the owner's avatar image",
			help: "The avatar is displayed on the loading page and homepage"
		},
		appearance: {
			theme: {
				label: "Theme",
				description: "Choose the application theme",
				help: "Users can override this in their own browsers",
				light: "Light",
				dark: "Dark",
				system: "System"
			}
		}
	},
	map: {
		provider: {
			label: "Map Provider",
			description: "Select the map service provider"
		},
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API access token",
				help: "Should use a token without domain restrictions"
			},
			style: {
				label: "Mapbox Style",
				description: "Mapbox map style URL"
			}
		},
		maplibre: {
			token: {
				label: "MapTiler Token",
				description: "MapTiler API access token",
				help: "MapLibre uses the free map service provider MapTiler by default"
			},
			style: {
				label: "MapLibre Style",
				description: "MapLibre map style URL"
			}
		}
	},
	location: {
		mapbox: {
			token: {
				label: "Mapbox Token",
				description: "Mapbox API access token",
				help: "When configured, this will replace Nominatim as the location service"
			}
		},
		nominatim: {
			baseUrl: {
				label: "Nominatim Base URL",
				description: "Base URL for Nominatim reverse geocoding API",
				help: "Leave empty to use the public Nominatim service by default"
			}
		}
	},
	storage: {
		name: {
			label: "Provider Name",
			description: "Name of the storage provider configuration"
		},
		provider: {
			label: "Storage Provider",
			description: "Select the storage service provider",
			options: {
				local: {
					label: "Local Storage",
					description: "Store photos directly on the server's filesystem."
				},
				s3: {
					label: "S3 Compatible",
					description: "Use AWS S3, Cloudflare R2, or other S3-compatible services."
				},
				openlist: {
					label: "OpenList",
					description: "Connect to an Alist or OpenList instance for storage."
				}
			}
		},
		s3: {
			bucket: {
				label: "Bucket Name",
				description: "S3 bucket name for storing photos"
			},
			region: {
				label: "Region",
				description: "AWS region for the S3 bucket"
			},
			endpoint: {
				label: "S3 Endpoint",
				description: "Custom S3-compatible endpoint URL (e.g., for MinIO)"
			},
			prefix: {
				label: "Storage Prefix",
				description: "Prefix path for objects in the bucket"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "Custom CDN URL for accessing images"
			},
			accessKeyId: {
				label: "Access Key ID",
				description: "AWS Access Key ID or equivalent"
			},
			secretAccessKey: {
				label: "Secret Access Key",
				description: "AWS Secret Access Key or equivalent"
			},
			forcePathStyle: {
				label: "Force Path Style",
				description: "Use path-style URLs instead of virtual-hosted-style"
			},
			maxKeys: {
				label: "Max Keys",
				description: "Maximum number of keys to retrieve per request"
			}
		},
		local: {
			basePath: {
				label: "Storage Base Path",
				description: "Local filesystem path for storing photos"
			},
			baseUrl: {
				label: "Base URL",
				description: "Public URL base for accessing stored photos"
			},
			prefix: {
				label: "Storage Prefix",
				description: "Prefix path for organizing photos in storage"
			}
		},
		openlist: {
			baseUrl: {
				label: "OpenList Base URL",
				description: "Base URL of the OpenList server"
			},
			rootPath: {
				label: "Root Path",
				description: "Root path for storing photos in OpenList"
			},
			token: {
				label: "Authentication Token",
				description: "OpenList API authentication token"
			},
			uploadEndpoint: {
				label: "Upload Endpoint",
				description: "API endpoint for uploading files (default: /api/fs/put)"
			},
			downloadEndpoint: {
				label: "Download Endpoint",
				description: "API endpoint for downloading files (optional)"
			},
			listEndpoint: {
				label: "List Endpoint",
				description: "API endpoint for listing files (optional)"
			},
			deleteEndpoint: {
				label: "Delete Endpoint",
				description: "API endpoint for deleting files (default: /api/fs/remove)"
			},
			metaEndpoint: {
				label: "Meta Endpoint",
				description: "API endpoint for retrieving file metadata (default: /api/fs/get)"
			},
			pathField: {
				label: "Path Field Name",
				description: "Parameter name for file path in API requests (default: path)"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "Custom CDN URL for accessing images"
			}
		}
	}
};
var wizard$1 = {
	admin: {
		username: {
			label: "Username"
		},
		email: {
			label: "Email"
		},
		password: {
			label: "Password"
		},
		confirmPassword: {
			label: "Confirm Password"
		}
	},
	map: {
		provider: {
			mapbox: {
				label: "Mapbox",
				description: "High-performance maps with rich styling options."
			},
			maplibre: {
				label: "MapLibre",
				description: "Open-source fork of Mapbox GL JS."
			}
		}
	}
};
const en = {
	plural: plural$1,
	ui: ui$1,
	album: album$1,
	map: map$1,
	minimap: minimap$1,
	viewer: viewer$1,
	exif: exif$1,
	title: title$1,
	auth: auth$1,
	common: common$1,
	upload: upload,
	dashboard: dashboard$1,
	settings: settings$1,
	wizard: wizard$1
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  album: album$1,
  auth: auth$1,
  common: common$1,
  dashboard: dashboard$1,
  default: en,
  exif: exif$1,
  map: map$1,
  minimap: minimap$1,
  plural: plural$1,
  settings: settings$1,
  title: title$1,
  ui: ui$1,
  upload: upload,
  viewer: viewer$1,
  wizard: wizard$1
}, Symbol.toStringTag, { value: 'Module' }));

var plural = {
	photo: "写真がありません | 写真 {count} 枚"
};
var ui = {
	action: {
		filter: {
			tooltip: "写真をフィルター",
			title: "写真をフィルター",
			clearAll: "すべてクリア",
			tabs: {
				tags: "タグ",
				cameras: "カメラ",
				lenses: "レンズ",
				cities: "都市",
				ratings: "評価"
			},
			empty: {
				tags: "タグなし",
				cameras: "カメラ情報なし",
				lenses: "レンズ情報なし",
				cities: "都市情報なし"
			},
			rating: {
				showAll: "すべての写真を表示",
				showStarsAndAbove: "{count} 星以上の写真を表示"
			}
		},
		sort: {
			tooltip: "写真の並び替え",
			title: "並び替え",
			options: {
				dateTakenDesc: "撮影日（新しい順）",
				dateTakenAsc: "撮影日（古い順）",
				fileSizeAsc: "ファイルサイズ（昇順）",
				fileSizeDesc: "ファイルサイズ（降順）",
				titleAsc: "タイトル（昇順）",
				titleDesc: "タイトル（降順）",
				shuffle: "シャッフル"
			}
		},
		theme: {
			tooltip: "カラーテーマ"
		},
		dashboard: {
			tooltip: "ダッシュボード"
		},
		logout: {
			tooltip: "ログアウト"
		},
		globe: {
			tooltip: "グローブ"
		},
		home: {
			tooltip: "ホームに戻る"
		},
		share: {
			tooltip: "写真を共有",
			title: "写真を共有",
			tabs: {
				social: "ソーシャル共有",
				advanced: "高度な共有"
			},
			platforms: {
				twitter: "Twitter",
				telegram: "Telegram",
				weibo: "Weibo",
				facebook: "Facebook",
				whatsapp: "WhatsApp",
				linkedin: "LinkedIn"
			},
			actions: {
				nativeShare: "システム共有を使用",
				copyLink: "リンクをコピー",
				copyImage: "画像をコピー",
				downloadImage: "オリジナルをダウンロード",
				generateShareImage: "共有画像を生成",
				shareUrl: "共有URL",
				downloadOgImage: "プレビューをダウンロード",
				downloadOriginal: "オリジナルをダウンロード",
				downloadOriginalImage: "オリジナル画像をダウンロード"
			},
			success: {
				linkCopied: "リンクをクリップボードにコピーしました",
				imageCopied: "画像をクリップボードにコピーしました",
				ogImageDownloaded: "プレビュー画像のダウンロードが完了しました",
				originalImageDownloaded: "オリジナル画像のダウンロードが完了しました"
			},
			error: {
				copyNotSupported: "このブラウザではコピー機能がサポートされていません",
				shareFailed: "共有に失敗しました",
				nativeShareFailed: "ネイティブ共有に失敗しました",
				linkCopyFailed: "リンクのコピーに失敗しました",
				ogImageDownloadFailed: "プレビュー画像のダウンロードに失敗しました",
				originalImageDownloadFailed: "オリジナル画像のダウンロードに失敗しました"
			},
			ogImage: {
				title: "共有プレビュー",
				alt: "写真共有プレビュー画像",
				loading: "読み込み中...",
				loadError: "読み込みに失敗しました"
			},
			fallback: {
				photoTitle: "美しい写真"
			},
			text: {
				prefix: "この写真をご覧ください:"
			}
		},
		backtotop: {
			tooltip: "ページの先頭に戻る"
		}
	},
	stats: {
		totalPhotosWithRange: "{range}、@:plural.photo 合計",
		noPhotosTip: "まだ写真はありません。アップロードしてください！"
	},
	livePhoto: "Live Photo",
	album: {
		noImage: "空のアルバム",
		emptyAlbumTip: "写真を追加して開始しましょう",
		noDescription: "説明がありません"
	}
};
var album = {
	notFound: "アルバムが見つかりません",
	noDateInfo: "日付情報なし",
	noPhotosTip: "このアルバムにはまだ写真がありません",
	emptyAlbumTitle: "アルバムが空です",
	emptyAlbumDescription: "素敵な瞬間がここに表示されます。",
	failedToLoadTitle: "アルバムの読み込みに失敗しました",
	failedToLoadDescription: "このアルバムを読み込む際に問題が発生しました。",
	failedToLoad: "アルバムの読み込みに失敗しました",
	backToAlbums: "アルバムに戻る",
	noDescription: "説明がありません",
	photo: "写真がありません | 写真 {count} 枚",
	createdAt: "{time} に作成されました",
	metadata: {
		photos: "写真",
		dateRange: "日付範囲",
		created: "作成"
	}
};
var map = {
	cluster: {
		details: "クリックして詳細を見る",
		nearbyPhotos: "近くに {0} 枚の写真"
	}
};
var minimap = {
	loading: "ミニマップを読み込み中..."
};
var viewer = {
	hint: {
		livePhoto: {
			mobile: "長押しでライブフォトを再生 · ダブルタップまたはピンチでズーム",
			desktop: "再生アイコンにホバー · ダブルクリック／スクロールでズーム"
		},
		mobile: "ダブルタップまたはピンチでズーム",
		desktop: "ダブルクリックまたはマウスホイールでズーム"
	},
	reaction: {
		add: "リアクション",
		change: "リアクション済み",
		count: "リアクションなし | {count} 件のリアクション | {count} 件のリアクション",
		like: "いいね",
		love: "ハート",
		amazing: "憧れ",
		funny: "笑",
		wow: "驚",
		sad: "泣",
		fire: "炎",
		sparkle: "星"
	},
	photoload: {
		loadError: "画像の読み込みに失敗しました",
		loading: "画像を読み込み中",
		converting: "変換中...",
		loadingWebGL: "WebGLを読み込み中...",
		loadingHEIC: "HEIC画像を読み込み中...",
		loadingTexture: "テクスチャを構築中"
	}
};
var exif = {
	sections: {
		basic: "基本情報",
		deviceInfomation: "機材情報",
		specification: "技術パラメータ",
		rating: "評価",
		tags: "キーワード",
		albums: "含まれたアルバム",
		histogram: "ヒストグラム",
		capture: {
		},
		shooting: {
			parameters: "撮影パラメータ",
			mode: "撮影モード"
		}
	},
	aperture: "絞り値",
	dateTaken: {
		title: "撮影日時"
	},
	filename: "ファイル名",
	fileSize: "ファイルサイズ",
	resolution: "解像度",
	pixels: "画素数",
	colorSpace: {
		title: "カラースペース"
	},
	artist: "作者",
	software: "ソフトウェア",
	tz: "タイムゾーン",
	country: "国",
	city: "都市",
	gps: {
		title: "座標"
	},
	focal: {
		length: {
			actual: "焦点距離",
			equivalent: "35mm 換算"
		},
		plane: {
			resolution: "撮像面解像度"
		}
	},
	exposure: {
		time: "露出時間",
		program: "露出プログラム",
		mode: "露出モード"
	},
	camera: "カメラ",
	lens: "レンズ",
	maxAperture: "開放絞り",
	wb: {
		title: "ホワイトバランス",
		shiftAB: "WB シフト（アンバー–ブルー）",
		shiftGM: "WB シフト（グリーン–マゼンタ）",
		bias: "WB バイアス",
		fineTune: "WB 微調整"
	},
	metering: {
		title: "測光モード"
	},
	flash: {
		title: "フラッシュ",
		meteringMode: "フラッシュ測光モード"
	},
	scene: {
		captureType: "シーン撮影タイプ"
	},
	brightness: {
		value: "輝度"
	},
	sensing: {
		method: "センサー方式"
	},
	values: {
		exposureProgram: {
			notDefined: "未定義",
			manual: "マニュアル",
			programAe: "プログラム AE",
			aperturePriorityAe: "絞り優先 AE",
			shutterSpeedPriorityAe: "シャッター優先 AE",
			creativeSlowSpeed: "クリエイティブ（低速）",
			actionHighSpeed: "アクション（高速）",
			portrait: "ポートレート",
			landscape: "風景",
			bulb: "バルブ"
		},
		exposureMode: {
			auto: "オート",
			manual: "マニュアル",
			autoBracket: "オートブラケット"
		},
		flash: {
			noFlash: "発光なし",
			fired: "発光",
			firedReturnNotDetected: "発光、戻り光なし",
			firedReturnDetected: "発光、戻り光あり",
			onDidNotFire: "オン、発光なし",
			onFired: "オン、発光",
			onReturnNotDetected: "オン、戻り光なし",
			onReturnDetected: "オン、戻り光あり",
			offDidNotFire: "オフ、発光なし",
			offDidNotFireReturnNotDetected: "オフ、発光なし、戻り光なし",
			autoDidNotFire: "オート、発光なし",
			autoFired: "オート、発光",
			autoFiredReturnNotDetected: "オート、発光、戻り光なし",
			autoFiredReturnDetected: "オート、発光、戻り光あり",
			noFlashFunction: "フラッシュ機能なし",
			offNoFlashFunction: "オフ、フラッシュ機能なし",
			firedRedEyeReduction: "発光、赤目軽減",
			firedRedEyeReductionReturnNotDetected: "発光、赤目軽減、戻り光なし",
			firedRedEyeReductionReturnDetected: "発光、赤目軽減、戻り光あり",
			onRedEyeReduction: "オン、赤目軽減",
			onRedEyeReductionReturnNotDetected: "オン、赤目軽減、戻り光なし",
			onRedEyeReductionReturnDetected: "オン、赤目軽減、戻り光あり",
			offRedEyeReduction: "オフ、赤目軽減",
			autoDidNotFireRedEyeReduction: "オート、発光なし、赤目軽減",
			autoFiredRedEyeReduction: "オート、発光、赤目軽減",
			autoFiredRedEyeReductionReturnNotDetected: "オート、発光、赤目軽減、戻り光なし",
			autoFiredRedEyeReductionReturnDetected: "オート、発光、赤目軽減、戻り光あり"
		},
		meteringMode: {
			unknown: "不明",
			average: "平均測光",
			centerWeightedAverage: "中央重点平均測光",
			spot: "スポット測光",
			multiSpot: "マルチスポット測光",
			multiSegment: "分割測光",
			partial: "部分測光",
			other: "その他"
		},
		whiteBalance: {
			auto: "オート",
			manual: "マニュアル",
			auto1: "通常補正、ニュートラル",
			auto2: "環境の暖色を保持"
		},
		sceneCaptureType: {
			standard: "標準",
			landscape: "風景",
			portrait: "ポートレート",
			night: "夜景",
			other: "その他"
		},
		sensingMethod: {
			notDefined: "未定義",
			monochromeArea: "モノクロエリア",
			oneChipColorArea: "1 チップカラーエリア",
			twoChipColorArea: "2 チップカラーエリア",
			threeChipColorArea: "3 チップカラーエリア",
			colorSequentialArea: "順次カラーエリア",
			monochromeLinear: "モノクロリニア",
			trilinear: "トリリニア",
			colorSequentialLinear: "順次カラーニア"
		},
		colorSpace: {
			srgb: "sRGB",
			adobeRgb: "Adobe RGB",
			wideGamutRgb: "ワイドガマット RGB",
			displayP3: "Display P3",
			iccProfile: "ICC プロファイル",
			uncalibrated: "未調整",
			rgb: "RGB"
		}
	}
};
var title = {
	gallery: "ギャラリー",
	fallback: {
		photo: "写真"
	},
	dashboard: "ダッシュボード",
	photos: "写真",
	locations: "場所",
	globe: "写真グローブ",
	queue: "キュー管理",
	logs: "システムログ",
	albums: "アルバム",
	siteAdministration: "サイト設定",
	generalSettings: "一般設定",
	appearanceSettings: "外観設定",
	mapAndLocation: "地図と場所",
	location: "位置情報サービス"
};
var auth = {
	form: {
		signin: {
			title: "サインイン",
			subtitle: "{0} にログインします"
		},
		action: {
			or: "または",
			"continue": "続く"
		},
		labels: {
			email: "メール",
			password: "パスワード"
		}
	}
};
var common = {
	months: {
		jan: "1月",
		feb: "2月",
		mar: "3月",
		apr: "4月",
		may: "5月",
		jun: "6月",
		jul: "7月",
		aug: "8月",
		sep: "9月",
		oct: "10月",
		nov: "11月",
		dec: "12月"
	},
	days: {
		sun: "日",
		mon: "月",
		tue: "火",
		wed: "水",
		thu: "木",
		fri: "金",
		sat: "土"
	},
	heatmap: {
		legend: {
			less: "少ない",
			more: "もっと",
			recentlyYear: "直近1年"
		},
		tooltip: {
			data: "{0}が{1}枚の写真を撮影しました",
			noData: "{0}は写真がありません"
		}
	}
};
var dashboard = {
	photos: {
		title: "写真をアップロード",
		subtitle: "アップロードされた写真は自動的に処理され、ライブラリに追加されます。その後、{0}セクションで写真を整理できます。",
		supportedFormats: "JPEG / PNG / HEIC / ライブフォト / モーションフォト",
		maxFileSize: "最大 {size}MB",
		buttons: {
			upload: "写真をアップロード",
			queue: "タスクキュー"
		},
		uploader: {
			label: "ドラッグアンドドロップするか、クリックして写真を選択します",
			description: "JPEG、PNG、HEIC形式の写真、およびMOV形式のライブフォトビデオをサポート。ファイルあたりの最大サイズ：{maxSize}MB"
		},
		toolbar: {
			title: "写真管理",
			filter: "フィルター",
			refresh: "更新"
		},
		photoFilter: {
			all: "すべての写真",
			livephoto: "ライブフォト",
			"static": "静止画"
		},
		stats: {
			photos: "枚の写真",
			livePhotos: "枚のライブフォト"
		},
		table: {
			columns: {
				thumbnail: {
					title: "サムネイル",
					action: "新しいタブで写真を開く"
				},
				id: "写真ID",
				title: "写真のタイトル",
				tags: "キーワード",
				rating: "評価",
				isLivePhoto: "ライブフォト",
				location: "位置情報",
				dateTaken: "撮影日",
				lastModified: "最終更新",
				fileSize: "ファイルサイズ",
				colorSpace: "カラースペース",
				reactions: "リアクション",
				actions: "操作"
			},
			cells: {
				noTags: "タグなし",
				noRating: "未評価",
				noGps: "GPS情報なし",
				unknown: "不明",
				staticPhoto: "静止画",
				noReactions: "リアクションなし"
			},
			columnVisibility: {
				button: "列設定",
				description: "列の表示/非表示を切り替える"
			}
		},
		actions: {
			reprocess: "再処理",
			refreshLocation: "都市情報を再取得",
			"delete": "削除",
			editMetadata: "メタデータを編集",
			previewPhoto: "プレビュー写真"
		},
		selection: {
			selected: "{count} / {total}行選択済み",
			batchReprocess: "一括再処理",
			batchDownload: "一括ダウンロード",
			batchDelete: "一括削除"
		},
		slideover: {
			title: "写真をアップロード",
			description: "ドラッグアンドドロップするか、ファイルを選択します。写真は自動的に処理され、ライブラリに追加されます。",
			buttons: {
				clear: "選択をクリア",
				upload: "{count}個のファイルをアップロード"
			},
			footer: {
				noSelection: "アップロードする写真を選択してください",
				prepared: "{count}個のファイル · {size}"
			}
		},
		"delete": {
			single: {
				title: "写真を削除",
				message: "この写真を削除してもよろしいですか？"
			},
			batch: {
				title: "写真を一括削除",
				message: "選択された{count}枚の写真を削除してもよろしいですか？"
			},
			warning: "写真を削除すると、元のファイル、サムネイル、およびライブフォトビデオが削除され、元に戻すことはできません。",
			buttons: {
				cancel: "キャンセル",
				confirm: "削除を確認"
			}
		},
		livePhotoModal: {
			title: "ライブフォト：{title}",
			staticImage: "静止画",
			livePhotoVideo: "ライブフォトビデオ",
			buttons: {
				openVideo: "新しいウィンドウでビデオを開く",
				downloadVideo: "ビデオをダウンロード",
				close: "閉じる"
			},
			notSupported: "お使いのブラウザはビデオ再生をサポートしていません"
		},
		messages: {
			uploadSuccess: "写真が正常にアップロードされました。処理中です...",
			uploadMultipleSuccess: "{count}枚の写真が正常にアップロードされました。処理中です...",
			reprocessSuccess: "再処理タスクが追加されました",
			reprocessTaskId: "タスク ID：{taskId}",
			deleteSuccess: "写真が正常に削除されました",
			batchDeleteSuccess: "{count}枚の写真を正常に削除しました",
			batchSelectRequired: "この操作を実行するには、少なくとも1枚の写真を選択してください",
			noStorageKey: "処理できません：ストレージ情報がありません",
			batchNoStorageKey: "{count}枚の写真のストレージ情報がなく、処理できません",
			batchNoUrl: "ダウンロードURLが利用可能な写真がありません",
			batchPartialUrl: "{count}枚の写真（合計{total}枚）のみダウンロードURLが利用可能です",
			downloadStarted: "ダウンロード開始",
			downloadingCount: "{count}枚の写真をダウンロード中...",
			batchDownloadSuccess: "一括ダウンロード完了",
			batchDownloadFailed: "一括ダウンロードに失敗しました",
			batchDownloadPartial: "一括ダウンロードが完了しましたが、一部失敗しました",
			downloadedCount: "{count}枚の写真をダウンロードしました",
			downloadFailedCount: "{count}枚の写真のダウンロードに失敗しました",
			downloadPartialCount: "{success}枚の写真をダウンロードしました。{failed}枚失敗しました",
			warning: "警告",
			error: "エラーが発生しました",
			deleteFailed: "写真の削除に失敗しました",
			batchDeleteFailed: "一括削除に失敗しました",
			batchReprocessFailed: "一括再処理に失敗しました",
			reprocessFailed: "写真の再処理に失敗しました",
			livePhotoNotFound: "ライブフォトではありません",
			livePhotoLoadError: "ライブフォト情報を読み込めません",
			metadataUpdateSuccess: "写真のメタデータを更新しました",
			metadataUpdateFailed: "写真のメタデータを更新できませんでした",
			photoNotFound: "写真が見つかりません",
			photoFileMissing: "写真ファイルが見つかりません",
			noChangesProvided: "適用できる変更がありません",
			queueUnavailable: "タスクキューを利用できません",
			reverseGeocodeQueued: "都市情報の再取得タスクをキューに追加しました",
			reverseGeocodeFailed: "都市情報の再取得タスクの追加に失敗しました"
		},
		errors: {
			noSelection: "アップロードする写真を選択してください",
			fileValidationFailed: "ファイル検証に失敗しました",
			allFilesValidationFailed: "すべてのファイルが検証に失敗しました",
			unsupportedFormat: "サポートされていないファイル形式：{type}。JPEG、PNG、またはHEIC写真、またはMOV形式のライブフォトビデオを選択してください。",
			fileTooLarge: "ファイルが大きすぎます：{size}MB。最大サポート：{maxSize}MB。",
			uploadFailed: "アップロードに失敗しました",
			uploadNetworkError: "ネットワーク接続に失敗したか、CORSエラーが発生しました。ネットワークとストレージ設定を確認してください。",
			uploadCorsError: "CORSリクエストに失敗しました。ストレージCORS設定を確認してください。",
			uploadUnauthorized: "未認可です。もう一度ログインしてください。",
			taskSubmitFailed: "処理タスクの送信に失敗しました",
			taskStatusCheckFailed: "タスク状態の確認に失敗しました。ページを更新して再度お試しください。"
		},
		processing: {
			preparing: "準備中",
			uploading: "アップロード中",
			processing: "処理中",
			completed: "完了",
			error: "エラー",
			skipped: "スキップ",
			blocked: "ブロック済み"
		},
		uploadQueue: {
			clearCompleted: "完了したタスクをクリア",
			clearAll: "すべてのタスクをクリア",
			taskCleared: "完了したタスクをクリアしました",
			allTasksCleared: "すべてのアップロードタスクをクリアしました",
			tasksCleared: "{count}個のタスクをクリアしました"
		},
		editModal: {
			title: "写真情報を編集",
			description: "タイトル・説明・タグ・撮影場所を更新します。",
			fields: {
				title: "タイトル",
				description: "説明",
				tags: "タグ",
				tagsHint: "タグを入力し、Enter キーで追加してください。",
				location: "撮影場所",
				locationHint: "地図をクリックして撮影場所を選択してください。",
				clearLocation: "位置情報をクリア",
				coordinates: "座標",
				noLocation: "位置情報が未設定です",
				rating: "評価",
				ratingHint: "星をクリックして写真の評価を設定します（0～5つ星）。",
				noRating: "未評価"
			},
			actions: {
				cancel: "キャンセル",
				save: "変更を保存"
			}
		}
	},
	albums: {
		title: "アルバム管理",
		subtitle: "写真アルバムを作成・管理する",
		createButton: "アルバムを作成",
		noAlbums: "アルバムがまだありません",
		noAlbumsTip: "最初のアルバムを作成して、写真を整理してください",
		form: {
			title: "タイトル",
			titlePlaceholder: "アルバムのタイトルを入力",
			titleRequired: "アルバムのタイトルを入力してください",
			description: "説明",
			descriptionPlaceholder: "アルバムの説明を入力（オプション）",
			coverPhoto: "アルバムカバー",
			addCoverPhoto: "カバー写真を追加",
			selectPhotos: "写真を選択",
			editPhotos: "写真の選択を編集",
			selectedCount: "{count}枚の写真を選択しました",
			clearAll: "すべてクリア"
		},
		table: {
			columns: {
				cover: "カバー",
				title: "タイトル",
				description: "説明",
				photoCount: "写真数",
				createdAt: "作成時刻",
				actions: "操作"
			}
		},
		modal: {
			selectPhotos: "写真を選択",
			totalPhotos: "全{count}枚",
			selectedPhotos: "{count}枚選択中",
			searchPlaceholder: "写真を検索...",
			searchResults: "結果：{current} / {total}",
			selectAll: "すべて選択",
			setCover: "カバーに設定",
			noPhotos: "写真がありません",
			noResults: "一致する写真が見つかりません",
			tryOtherKeywords: "他のキーワードで検索してみてください",
			confirm: "確認 ({count})",
			selectedInfo: "選択済み：",
			coverSetInfo: "カバーが設定されました"
		},
		slideover: {
			create: {
				title: "アルバムを作成",
				description: "写真を整理するための新しいアルバムを作成します"
			},
			edit: {
				title: "アルバムを編集",
				description: "アルバムの情報と写真を変更"
			},
			submitCreate: "作成",
			submitEdit: "保存",
			cancel: "キャンセル"
		},
		"delete": {
			title: "アルバムを削除",
			message: "アルバム\"{title}\"を削除してもよろしいですか？アルバムを削除しても、その中の写真は削除されず、アルバム自体のみが削除されます。",
			cancel: "キャンセル",
			confirm: "削除を確認"
		},
		messages: {
			createSuccess: "アルバムが正常に作成されました",
			updateSuccess: "アルバムが正常に更新されました",
			deleteSuccess: "アルバムが正常に削除されました",
			createError: "アルバムの作成に失敗しました",
			updateError: "アルバムの更新に失敗しました",
			deleteError: "アルバムの削除に失敗しました",
			loadError: "アルバムの読み込みに失敗しました",
			loadDetailError: "アルバムの詳細の読み込みに失敗しました",
			loadPhotosError: "写真の読み込みに失敗しました"
		}
	},
	overview: {
		title: "概要",
		indicator: {
			totalPhotos: "写真の総数",
			thisMonth: "今月は新しく",
			queueStatus: {
				title: "キューステータス",
				processing: "処理",
				pending: "アイドル"
			},
			storageUsage: "ストレージの使用"
		},
		section: {
			runtimeInfo: {
				title: "操作情報",
				version: "ランニングバージョン",
				uptime: "実行時間",
				environment: "ランニング環境",
				lastUpdate: "最後に更新されました",
				systems: {
					windows: "Microsoft Windows",
					windows10: "Microsoft Windows 10",
					windows11: "Microsoft Windows 11",
					ubuntu: "Ubuntu",
					debian: "Debian",
					centos: "CentOS",
					redhat: "Red Hat Enterprise Linux",
					fedora: "Fedora",
					arch: "Arch Linux",
					alpine: "Alpine Linux",
					opensuse: "openSUSE",
					macos: "macOS",
					docker: "Docker コンテナ",
					unknown: "不明なシステム"
				}
			},
			memory: {
				title: "メモリの使用"
			},
			queue: {
				title: "キューステータス",
				activeWorkers: "アクティブワーカー",
				totalWorkers: "総 Workers",
				totalProcessed: "処理",
				totalFailed: "障害カウント",
				avgSuccessRate: "成功率"
			}
		}
	},
	queue: {
		title: "キュー管理",
		indicator: {
			pending: "処理待ち",
			processing: "処理中",
			completed: "完了",
			failed: "失敗したタスク"
		},
		actions: {
			refresh: "データを更新",
			clearCompleted: "完了済みをクリア",
			clearFailed: "失敗タスクをクリア",
			clearAll: "すべてクリア",
			retrySelected: "選択した項目を再試行",
			retryAll: "すべての失敗を再試行",
			clearNonActive: "非アクティブタスクをクリア"
		},
		table: {
			id: "タスクID",
			type: "タイプ",
			status: "ステータス",
			attempts: "試行回数",
			priority: "優先度",
			stage: "処理段階",
			error: "エラー情報",
			errorMessage: "エラーメッセージ",
			createdAt: "作成日時",
			completedAt: "完了日時",
			actions: "操作"
		},
		status: {
			pending: "待機中",
			"in-stages": "処理中",
			completed: "完了",
			failed: "失敗"
		},
		types: {
			photo: "写真処理",
			"live-photo-video": "LivePhoto動画",
			"photo-reverse-geocoding": "写真の逆ジオコーディング"
		},
		stages: {
			preprocessing: "前処理",
			metadata: "メタデータ",
			thumbnail: "サムネイル",
			exif: "EXIF処理",
			"reverse-geocoding": "地理解析",
			"live-photo": "LivePhoto処理"
		},
		buttons: {
			retry: "再試行",
			"delete": "削除"
		},
		messages: {
			noTasks: "タスクが見つかりません",
			retrySuccess: "タスクの再試行が成功しました",
			deleteSuccess: "タスクの削除が成功しました",
			batchRetrySuccess: "バッチ再試行が成功しました",
			clearSuccess: "クリア完了",
			operationFailed: "操作に失敗しました"
		},
		filters: {
			all: "すべて",
			status: "ステータスでフィルター",
			type: "タイプでフィルター"
		}
	}
};
var settings = {
	app: {
		title: {
			label: "インスタンス名",
			description: "インスタンスのタイトル"
		},
		slogan: {
			label: "スローガン",
			description: "インスタンスのスローガン",
			help: "スローガンはホームページのタイトルの下に表示されます"
		},
		author: {
			label: "オーナー",
			description: "インスタンスのオーナー名"
		},
		avatarUrl: {
			label: "アバター URL",
			description: "オーナーのアバター画像へのリンク",
			help: "アバターはローディングページとホームページに表示されます"
		},
		appearance: {
			theme: {
				label: "テーマ",
				description: "アプリケーションテーマを選択",
				help: "ユーザーは自分のブラウザでこれをオーバーライドできます",
				light: "ライト",
				dark: "ダーク",
				system: "システム"
			}
		}
	},
	map: {
		provider: {
			label: "地図プロバイダー",
			description: "地図サービスプロバイダーを選択"
		},
		mapbox: {
			token: {
				label: "Mapbox トークン",
				description: "Mapbox API アクセストークン",
				help: "ドメイン制限のないトークンを使用すべきです"
			},
			style: {
				label: "Mapbox スタイル",
				description: "Mapbox 地図スタイル URL"
			}
		},
		maplibre: {
			token: {
				label: "MapTiler トークン",
				description: "MapTiler API アクセストークン",
				help: "MapLibre はデフォルトで無料の地図サービスプロバイダー MapTiler を使用します"
			},
			style: {
				label: "MapLibre スタイル",
				description: "MapLibre 地図スタイル URL"
			}
		}
	},
	location: {
		mapbox: {
			token: {
				label: "Mapbox トークン",
				description: "Mapbox API アクセストークン",
				help: "設定すると、位置情報サービスとして Nominatim に代わります"
			}
		},
		nominatim: {
			baseUrl: {
				label: "Nominatim ベース URL",
				description: "Nominatim リバースジオコーディング API のベース URL",
				help: "空のままにすると、デフォルトで公開 Nominatim サービスを使用します"
			}
		}
	},
	storage: {
		name: {
			label: "設定名",
			description: "ストレージプロバイダー設定の名前"
		},
		provider: {
			label: "ストレージプロバイダー",
			description: "ストレージサービスプロバイダーを選択",
			options: {
				local: {
					label: "ローカルストレージ",
					description: "写真をサーバーのファイルシステムに直接保存します。"
				},
				s3: {
					label: "S3 互換",
					description: "AWS S3、Cloudflare R2、またはその他の S3 互換サービスを使用します。"
				},
				openlist: {
					label: "OpenList",
					description: "Alist または OpenList インスタンスに接続して保存します。"
				}
			}
		},
		s3: {
			bucket: {
				label: "バケット名",
				description: "S3 バケットの名前"
			},
			region: {
				label: "リージョン",
				description: "S3 バケットが配置されている AWS リージョン"
			},
			endpoint: {
				label: "エンドポイント",
				description: "S3 サービスのエンドポイント URL"
			},
			prefix: {
				label: "プレフィックス",
				description: "S3 内の全ファイルのパスプレフィックス"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "ファイルにアクセスするための CDN アドレス"
			},
			accessKeyId: {
				label: "アクセスキー ID",
				description: "AWS IAM アクセスキー ID"
			},
			secretAccessKey: {
				label: "シークレットアクセスキー",
				description: "AWS IAM シークレットアクセスキー"
			},
			forcePathStyle: {
				label: "パススタイルを強制",
				description: "仮想ホストスタイルではなく、パススタイル URL を使用"
			},
			maxKeys: {
				label: "最大キー数",
				description: "S3 リスト操作ごとに返される最大オブジェクト数"
			}
		},
		local: {
			basePath: {
				label: "基本パス",
				description: "ローカルファイルシステムでファイルを保存するベースディレクトリパス"
			},
			baseUrl: {
				label: "ベース URL",
				description: "ローカルストレージファイルにアクセスするためのベース URL"
			},
			prefix: {
				label: "プレフィックス",
				description: "ローカルストレージ内の全ファイルのパスプレフィックス"
			}
		},
		openlist: {
			baseUrl: {
				label: "OpenList ベース URL",
				description: "OpenList サーバーのベース URL"
			},
			rootPath: {
				label: "ルートパス",
				description: "OpenList で写真を保存するルートパス"
			},
			token: {
				label: "認証トークン",
				description: "OpenList API の認証トークン"
			},
			uploadEndpoint: {
				label: "アップロードエンドポイント",
				description: "ファイルをアップロードするための API エンドポイント（デフォルト：/api/fs/put）"
			},
			downloadEndpoint: {
				label: "ダウンロードエンドポイント",
				description: "ファイルをダウンロードするための API エンドポイント（オプション）"
			},
			listEndpoint: {
				label: "リストエンドポイント",
				description: "ファイルをリストアップするための API エンドポイント（オプション）"
			},
			deleteEndpoint: {
				label: "削除エンドポイント",
				description: "ファイルを削除するための API エンドポイント（デフォルト：/api/fs/remove）"
			},
			metaEndpoint: {
				label: "メタデータエンドポイント",
				description: "ファイルメタデータを取得するための API エンドポイント（デフォルト：/api/fs/get）"
			},
			pathField: {
				label: "パスフィールド名",
				description: "API リクエストのファイルパスパラメータ名（デフォルト：path）"
			},
			cdnUrl: {
				label: "CDN URL",
				description: "画像にアクセスするためのカスタム CDN URL"
			}
		}
	}
};
var wizard = {
	admin: {
		username: {
			label: "ユーザー名"
		},
		email: {
			label: "メールアドレス"
		},
		password: {
			label: "パスワード"
		},
		confirmPassword: {
			label: "パスワード（確認）"
		}
	},
	map: {
		provider: {
			mapbox: {
				label: "Mapbox",
				description: "豊富なスタイルオプションを備えた高性能マップ。"
			},
			maplibre: {
				label: "MapLibre",
				description: "Mapbox GL JS のオープンソースフォーク。"
			}
		}
	}
};
const ja = {
	plural: plural,
	ui: ui,
	album: album,
	map: map,
	minimap: minimap,
	viewer: viewer,
	exif: exif,
	title: title,
	auth: auth,
	common: common,
	dashboard: dashboard,
	settings: settings,
	wizard: wizard
};

const ja$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  album: album,
  auth: auth,
  common: common,
  dashboard: dashboard,
  default: ja,
  exif: exif,
  map: map,
  minimap: minimap,
  plural: plural,
  settings: settings,
  title: title,
  ui: ui,
  viewer: viewer,
  wizard: wizard
}, Symbol.toStringTag, { value: 'Module' }));

const i18n_config = () => {
  return { fallbackLocale: {
    "zh-CN": ["zh-Hans"],
    "zh-SG": ["zh-Hans"],
    "zh": ["zh-Hans"],
    "zh-Hant": ["zh-Hant-TW", "zh-Hant-HK"],
    "zh-TW": ["zh-Hant-TW"],
    "zh-HK": ["zh-Hant-HK"],
    "zh-MO": ["zh-Hant-HK"],
    "default": ["en"]
  } };
};

const i18n_config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: i18n_config
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const index_delete$2 = eventHandler(async (event) => {
  await requireUserSession(event);
  const { albumId } = await getValidatedRouterParams(
    event,
    z.object({
      albumId: z.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const db = useDB();
  const album = await db.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
  if (!album) {
    throw createError({
      statusCode: 404,
      statusMessage: "Album not found"
    });
  }
  db.transaction((tx) => {
    tx.delete(tables.albumPhotos).where(eq(tables.albumPhotos.albumId, albumId)).run();
    tx.delete(tables.albums).where(eq(tables.albums.id, albumId)).run();
  });
  return { success: true };
});

const index_delete$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_delete$2
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$4 = eventHandler(async (event) => {
  const { albumId } = await getValidatedRouterParams(
    event,
    z$1.object({
      albumId: z$1.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const db = useDB();
  const album = db.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
  if (!album) {
    throw createError({
      statusCode: 404,
      statusMessage: "Album not found"
    });
  }
  const photos = await db.select({
    ...getTableColumns(tables.photos)
  }).from(tables.photos).innerJoin(
    tables.albumPhotos,
    eq(tables.photos.id, tables.albumPhotos.photoId)
  ).where(eq(tables.albumPhotos.albumId, albumId)).orderBy(asc(tables.albumPhotos.position)).all();
  if (!photos || !Array.isArray(photos)) {
    return {
      ...album,
      photos: []
    };
  }
  return {
    ...album,
    photos
  };
});

const index_get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$4
}, Symbol.toStringTag, { value: 'Module' }));

const index_put$2 = eventHandler(async (event) => {
  await requireUserSession(event);
  const { albumId } = await getValidatedRouterParams(
    event,
    z.object({
      albumId: z.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const body = await readValidatedBody(
    event,
    z.object({
      title: z.string().min(1).max(255).optional(),
      description: z.string().max(1e3).optional(),
      coverPhotoId: z.string().optional(),
      photoIds: z.array(z.string()).optional()
    }).parse
  );
  const db = useDB();
  const album = await db.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
  if (!album) {
    throw createError({
      statusCode: 404,
      statusMessage: "Album not found"
    });
  }
  const updatedAlbum = db.transaction((tx) => {
    const updateData = {
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (body.title !== void 0) {
      updateData.title = body.title;
    }
    if (body.description !== void 0) {
      updateData.description = body.description || null;
    }
    if (body.coverPhotoId !== void 0) {
      updateData.coverPhotoId = body.coverPhotoId || null;
    }
    tx.update(tables.albums).set(updateData).where(eq(tables.albums.id, albumId)).run();
    if (body.photoIds !== void 0) {
      tx.delete(tables.albumPhotos).where(eq(tables.albumPhotos.albumId, albumId)).run();
      const photoIds = new Set(body.photoIds);
      if (body.coverPhotoId) {
        photoIds.add(body.coverPhotoId);
      }
      if (photoIds.size > 0) {
        let pos = 1e6;
        for (const photoId of photoIds) {
          tx.insert(tables.albumPhotos).values({
            albumId,
            photoId,
            position: pos += 10
          }).onConflictDoNothing().run();
        }
      }
    }
    return tx.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
  });
  return updatedAlbum;
});

const index_put$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_put$2
}, Symbol.toStringTag, { value: 'Module' }));

const _photoId__delete = eventHandler(async (event) => {
  await requireUserSession(event);
  const { albumId } = await getValidatedRouterParams(
    event,
    z.object({
      albumId: z.string().regex(/^\d+$/).transform((val) => parseInt(val, 10))
    }).parse
  );
  const { photoId } = await getValidatedRouterParams(
    event,
    z.object({
      photoId: z.string()
    }).parse
  );
  const db = useDB();
  const relation = await db.select().from(tables.albumPhotos).where(
    and(
      eq(tables.albumPhotos.albumId, albumId),
      eq(tables.albumPhotos.photoId, photoId)
    )
  ).get();
  if (!relation) {
    throw createError({
      statusCode: 404,
      statusMessage: "Photo not found in album"
    });
  }
  db.transaction((tx) => {
    tx.delete(tables.albumPhotos).where(
      and(
        eq(tables.albumPhotos.albumId, albumId),
        eq(tables.albumPhotos.photoId, photoId)
      )
    ).run();
    const album = tx.select().from(tables.albums).where(eq(tables.albums.id, albumId)).get();
    if (album && album.coverPhotoId === photoId) {
      tx.update(tables.albums).set({ coverPhotoId: null, updatedAt: /* @__PURE__ */ new Date() }).where(eq(tables.albums.id, albumId)).run();
    }
  });
  return { success: true };
});

const _photoId__delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _photoId__delete
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$2 = eventHandler(async (_event) => {
  const db = useDB();
  const albums = await db.select().from(tables.albums);
  const albumsWithPhotoIds = await Promise.all(
    albums.map(async (album) => {
      const photoIds = await db.select({
        photoId: tables.albumPhotos.photoId,
        position: tables.albumPhotos.position
      }).from(tables.albumPhotos).where(eq(tables.albumPhotos.albumId, album.id)).orderBy(tables.albumPhotos.position);
      return {
        ...album,
        // 即使是空相册，也返回空数组而不是 undefined
        photoIds: photoIds.length > 0 ? photoIds.map((p) => p.photoId) : []
      };
    })
  );
  return albumsWithPhotoIds.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
});

const index_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const index_post$2 = eventHandler(async (event) => {
  await requireUserSession(event);
  const body = await readValidatedBody(
    event,
    z$1.object({
      title: z$1.string().min(1).max(255),
      description: z$1.string().max(1e3).optional(),
      coverPhotoId: z$1.string().optional(),
      photoIds: z$1.array(z$1.string()).optional()
    }).parse
  );
  const db = useDB();
  const album = db.transaction((tx) => {
    const newAlbum = tx.insert(tables.albums).values({
      title: body.title,
      description: body.description || null,
      coverPhotoId: body.coverPhotoId || null
    }).returning().get();
    const albumId = newAlbum.id;
    const photoIds = new Set(body.photoIds || []);
    if (body.coverPhotoId) {
      photoIds.add(body.coverPhotoId);
    }
    if (photoIds.size > 0) {
      let pos = 1e6;
      for (const photoId of photoIds) {
        tx.insert(tables.albumPhotos).values({
          albumId,
          photoId,
          position: pos += 10
        }).onConflictDoNothing().run();
      }
    }
    return newAlbum;
  });
  return album;
});

const index_post$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post$2
}, Symbol.toStringTag, { value: 'Module' }));

const _accessDeniedError = createError({
  statusCode: 403,
  statusMessage: "Access denied. Please contact the administrator to activate your account."
});
const github_get = defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    const db = useDB();
    const userFromEmail = db.select().from(tables.users).where(eq(tables.users.email, user.email || "")).get();
    logger$1.chrono.info(
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
    logger$1.chrono.warn("GitHub OAuth login failed", error);
    throw createError({
      statusCode: 401,
      statusMessage: `Authentication failed: ${error.message || "Unknown error"}`
    });
  }
});

const github_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: github_get
}, Symbol.toStringTag, { value: 'Module' }));

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

const login_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: login_post
}, Symbol.toStringTag, { value: 'Module' }));

const logout_get = eventHandler(async (event) => {
  await clearUserSession(event);
});

const logout_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logout_get
}, Symbol.toStringTag, { value: 'Module' }));

const albums_get = eventHandler(async (event) => {
  const { photoId } = await getValidatedRouterParams(
    event,
    z$1.object({
      photoId: z$1.string()
    }).parse
  );
  const db = useDB();
  const albums = await db.select({
    id: tables.albums.id,
    title: tables.albums.title,
    description: tables.albums.description,
    coverPhotoId: tables.albums.coverPhotoId,
    createdAt: tables.albums.createdAt,
    updatedAt: tables.albums.updatedAt
  }).from(tables.albums).innerJoin(
    tables.albumPhotos,
    eq(tables.albums.id, tables.albumPhotos.albumId)
  ).where(eq(tables.albumPhotos.photoId, photoId)).all();
  return albums;
});

const albums_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: albums_get
}, Symbol.toStringTag, { value: 'Module' }));

const HEIC_EXTENSIONS = [".heic", ".heif", ".hif"];
const index_delete = eventHandler(async (event) => {
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const photoId = getRouterParam(event, "photoId");
  if (!photoId) {
    return createError({
      statusCode: 400,
      statusMessage: "Photo ID is required"
    });
  }
  const photo = await useDB().select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
  if (!photo) {
    return createError({
      statusCode: 404,
      statusMessage: "Photo not found"
    });
  }
  logger$1.image.info(`Deleting photo ${photo.title || photo.id || photoId}`);
  if (photo.storageKey) {
    logger$1.image.info(`Deleting photo files for ${photoId} from storage`);
    try {
      await storageProvider.delete(photo.storageKey);
      const lowerStorageKey = photo.storageKey.toLowerCase();
      const heicExtension = HEIC_EXTENSIONS.find(
        (ext) => lowerStorageKey.endsWith(ext)
      );
      if (heicExtension) {
        const jpegKey = photo.storageKey.slice(
          0,
          photo.storageKey.length - heicExtension.length
        ) + ".jpeg";
        if (jpegKey !== photo.storageKey) {
          logger$1.image.info(
            `Deleting converted JPEG for HEIC photo ${photoId}: ${jpegKey}`
          );
          try {
            await storageProvider.delete(jpegKey);
          } catch {
          }
        }
      }
      if (photo.thumbnailKey) {
        await storageProvider.delete(photo.thumbnailKey);
      }
      if (photo.livePhotoVideoKey) {
        await storageProvider.delete(photo.livePhotoVideoKey);
      }
    } catch {
    }
  }
  useDB().delete(tables.photos).where(eq(tables.photos.id, photoId)).run();
  logger$1.image.success(`Photo ${photoId} deleted`);
  return {
    statusCode: 200,
    statusMessage: "Photo deleted successfully"
  };
});

const index_delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_delete
}, Symbol.toStringTag, { value: 'Module' }));

const paramsSchema = z.object({
  photoId: z.string().min(1)
});
const bodySchema = z.object({
  title: z.string().trim().max(512).optional(),
  description: z.string().trim().max(2e3).optional(),
  tags: z.array(z.string().trim().max(128)).max(64).optional(),
  location: z.union([
    z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180)
    }),
    z.null()
  ]).optional(),
  rating: z.union([z.number().int().min(0).max(5), z.null()]).optional()
});
const normalizeTags = (tags) => {
  if (!tags) return void 0;
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  for (const rawTag of tags) {
    const trimmed = rawTag.trim();
    if (!trimmed) continue;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    normalized.push(trimmed);
  }
  return normalized;
};
const index_put = eventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const t = await useTranslation(event);
  const { photoId } = paramsSchema.parse((_a = event.context.params) != null ? _a : {});
  const payload = bodySchema.parse(await readBody(event));
  if (payload.title === void 0 && payload.description === void 0 && payload.tags === void 0 && payload.location === void 0 && payload.rating === void 0) {
    throw createError({
      statusCode: 400,
      statusMessage: t("dashboard.photos.messages.noChangesProvided")
    });
  }
  const db = useDB();
  const photo = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
  if (!photo) {
    throw createError({
      statusCode: 404,
      statusMessage: t("dashboard.photos.messages.photoNotFound")
    });
  }
  if (!photo.storageKey) {
    throw createError({
      statusCode: 400,
      statusMessage: t("dashboard.photos.messages.noStorageKey")
    });
  }
  const { storageProvider } = useStorageProvider(event);
  const originalBuffer = await storageProvider.get(photo.storageKey);
  if (!originalBuffer) {
    throw createError({
      statusCode: 404,
      statusMessage: t("dashboard.photos.messages.photoFileMissing")
    });
  }
  const normalizedTitle = payload.title !== void 0 ? payload.title.trim() : void 0;
  const normalizedDescription = payload.description !== void 0 ? payload.description.trim() : void 0;
  const normalizedTags = normalizeTags(payload.tags);
  let pendingReverseGeocode = null;
  const exifUpdates = {};
  if (normalizedTitle !== void 0) {
    const titleValue = normalizedTitle.length > 0 ? normalizedTitle : null;
    exifUpdates.Title = titleValue;
    exifUpdates.XPTitle = titleValue;
  }
  if (normalizedDescription !== void 0) {
    const descriptionValue = normalizedDescription.length > 0 ? normalizedDescription : null;
    exifUpdates.Description = descriptionValue;
    exifUpdates.ImageDescription = descriptionValue;
    exifUpdates.CaptionAbstract = descriptionValue;
    exifUpdates.XPComment = descriptionValue;
    exifUpdates.UserComment = descriptionValue;
  }
  if (normalizedTags !== void 0) {
    const tagsValue = normalizedTags.length > 0 ? normalizedTags : null;
    exifUpdates.Subject = tagsValue;
    exifUpdates.Keywords = tagsValue;
    exifUpdates.XPKeywords = normalizedTags.length > 0 ? normalizedTags.join("; ") : null;
  }
  if (payload.location !== void 0) {
    if (payload.location) {
      const { latitude, longitude } = payload.location;
      const latAbs = Math.abs(latitude);
      const lonAbs = Math.abs(longitude);
      exifUpdates.GPSLatitude = latAbs;
      exifUpdates.GPSLatitudeRef = latitude >= 0 ? "N" : "S";
      exifUpdates.GPSLongitude = lonAbs;
      exifUpdates.GPSLongitudeRef = longitude >= 0 ? "E" : "W";
      exifUpdates.GPSPosition = `${latitude} ${longitude}`;
    } else {
      exifUpdates.GPSLatitude = null;
      exifUpdates.GPSLatitudeRef = null;
      exifUpdates.GPSLongitude = null;
      exifUpdates.GPSLongitudeRef = null;
      exifUpdates.GPSPosition = null;
    }
  }
  if (payload.rating !== void 0) {
    exifUpdates.Rating = payload.rating !== null ? payload.rating : null;
  }
  const tempDir = await mkdtemp(path.join(tmpdir(), "cframe-edit-"));
  const ext = path.extname(photo.storageKey) || ".jpg";
  const tempFile = path.join(tempDir, `edited${ext}`);
  try {
    await writeFile(tempFile, originalBuffer);
    if (Object.keys(exifUpdates).length > 0) {
      await exiftool.write(tempFile, exifUpdates, ["-overwrite_original"]);
    }
    const updatedBuffer = await readFile(tempFile);
    const prefix = storageProvider.config && "prefix" in storageProvider.config ? storageProvider.config.prefix : "";
    await storageProvider.create(
      photo.storageKey.replace(prefix || "", ""),
      updatedBuffer
    );
    const exifData = await extractExifData(updatedBuffer);
    const updateData = {
      exif: exifData,
      fileSize: updatedBuffer.length,
      lastModified: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (normalizedTitle !== void 0) {
      updateData.title = normalizedTitle || null;
    }
    if (normalizedDescription !== void 0) {
      updateData.description = normalizedDescription || null;
    }
    if (normalizedTags !== void 0) {
      updateData.tags = normalizedTags;
    }
    if (payload.location !== void 0) {
      if (payload.location) {
        updateData.latitude = payload.location.latitude;
        updateData.longitude = payload.location.longitude;
        updateData.country = null;
        updateData.city = null;
        updateData.locationName = null;
        pendingReverseGeocode = {
          latitude: payload.location.latitude,
          longitude: payload.location.longitude
        };
      } else {
        updateData.latitude = null;
        updateData.longitude = null;
        updateData.country = null;
        updateData.city = null;
        updateData.locationName = null;
      }
    }
    await db.update(tables.photos).set(updateData).where(eq(tables.photos.id, photoId));
    const updatedPhoto = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).get();
    if (pendingReverseGeocode) {
      const workerPool = globalThis.__workerPool;
      if (workerPool) {
        try {
          await workerPool.addTask(
            {
              type: "photo-reverse-geocoding",
              photoId,
              latitude: pendingReverseGeocode.latitude,
              longitude: pendingReverseGeocode.longitude
            },
            {
              priority: 1
            }
          );
        } catch (taskError) {
          logger$1.location.warn(
            `Failed to enqueue reverse geocoding for photo ${photoId}:`,
            taskError
          );
        }
      } else {
        logger$1.location.warn(
          `Worker pool not initialized, skipping reverse geocoding enqueue for photo ${photoId}`
        );
      }
    }
    return {
      success: true,
      photo: updatedPhoto
    };
  } catch (error) {
    logger$1.image.error("Failed to update photo metadata", error);
    throw createError({
      statusCode: 500,
      statusMessage: t("dashboard.photos.messages.metadataUpdateFailed")
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

const index_put$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_put
}, Symbol.toStringTag, { value: 'Module' }));

const livephoto_get = eventHandler(async (event) => {
  await requireUserSession(event);
  const photoId = getRouterParam(event, "photoId");
  if (!photoId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Photo ID is required"
    });
  }
  try {
    const db = useDB();
    const photos = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1);
    if (photos.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Photo not found"
      });
    }
    const photo = photos[0];
    return {
      id: photo.id,
      title: photo.title,
      isLivePhoto: Boolean(photo.isLivePhoto),
      livePhotoVideoUrl: photo.livePhotoVideoUrl,
      originalUrl: photo.originalUrl,
      thumbnailUrl: photo.thumbnailUrl
    };
  } catch (error) {
    logger$1.chrono.error("Failed to get photo details:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to get photo details"
    });
  }
});

const livephoto_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: livephoto_get
}, Symbol.toStringTag, { value: 'Module' }));

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

const reactions$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactions
}, Symbol.toStringTag, { value: 'Module' }));

const checkDuplicate_post = defineEventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const t = await useTranslation(event);
  try {
    const { fileNames, storageKeys } = await readValidatedBody(
      event,
      z.object({
        fileNames: z.array(z.string()).optional(),
        storageKeys: z.array(z.string()).optional()
      }).parse
    );
    if (!fileNames && !storageKeys) {
      throw createError({
        statusCode: 400,
        statusMessage: t("upload.error.required.title"),
        data: {
          title: t("upload.error.required.title"),
          message: t("upload.error.required.message", { field: "fileNames or storageKeys" })
        }
      });
    }
    const db = useDB();
    const results = [];
    if (fileNames && fileNames.length > 0) {
      for (const fileName of fileNames) {
        const { storageProvider } = useStorageProvider(event);
        const storageKey = `${(((_a = storageProvider.config) == null ? void 0 : _a.prefix) || "").replace(/\/+$/, "")}/${fileName}`;
        const photoId = generateSafePhotoId(storageKey);
        const existingPhoto = await db.select({
          id: tables.photos.id,
          title: tables.photos.title,
          storageKey: tables.photos.storageKey,
          originalUrl: tables.photos.originalUrl,
          thumbnailUrl: tables.photos.thumbnailUrl,
          dateTaken: tables.photos.dateTaken,
          fileSize: tables.photos.fileSize,
          width: tables.photos.width,
          height: tables.photos.height
        }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
        results.push({
          fileName,
          storageKey,
          photoId,
          exists: !!existingPhoto,
          photo: existingPhoto || null
        });
      }
    }
    if (storageKeys && storageKeys.length > 0) {
      for (const storageKey of storageKeys) {
        const photoId = generateSafePhotoId(storageKey);
        const existingPhoto = await db.select({
          id: tables.photos.id,
          title: tables.photos.title,
          storageKey: tables.photos.storageKey,
          originalUrl: tables.photos.originalUrl,
          thumbnailUrl: tables.photos.thumbnailUrl,
          dateTaken: tables.photos.dateTaken,
          fileSize: tables.photos.fileSize,
          width: tables.photos.width,
          height: tables.photos.height
        }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
        results.push({
          storageKey,
          photoId,
          exists: !!existingPhoto,
          photo: existingPhoto || null
        });
      }
    }
    const duplicatesFound = results.filter((r) => r.exists).length;
    return {
      success: true,
      results,
      duplicatesFound,
      summary: {
        title: t("upload.success.check.title"),
        message: t("upload.success.check.message", {
          total: results.length,
          duplicates: duplicatesFound
        })
      }
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: error.message || t("upload.error.uploadFailed.message")
      }
    });
  }
});

const checkDuplicate_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkDuplicate_post
}, Symbol.toStringTag, { value: 'Module' }));

const reindex_post = eventHandler(async (event) => {
  var _a, _b, _c, _d;
  await requireUserSession(event);
  const body = await readBody(event);
  const { action, photoId } = body;
  try {
    if (action === "single-reindex" && photoId) {
      const photo = await useDB().select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1).then((rows) => rows[0]);
      if (!photo) {
        throw createError({
          statusCode: 404,
          statusMessage: "Photo not found"
        });
      }
      logger$1.chrono.info(`Reindexing EXIF for photo ${photoId}`);
      const { storageProvider } = useStorageProvider(event);
      const fileBuffer = await storageProvider.get(photo.storageKey);
      if (!fileBuffer) {
        throw createError({
          statusCode: 404,
          statusMessage: "File not found in storage"
        });
      }
      const exifData = await extractExifData(
        fileBuffer,
        void 0,
        logger$1.chrono
      );
      const photoInfo = extractPhotoInfo(photo.storageKey, exifData);
      await useDB().update(tables.photos).set({
        exif: exifData,
        title: photoInfo.title,
        dateTaken: photoInfo.dateTaken,
        tags: photoInfo.tags,
        lastModified: (/* @__PURE__ */ new Date()).toISOString(),
        thumbnailKey: `${(_b = (_a = storageProvider.config) == null ? void 0 : _a.prefix) == null ? void 0 : _b.replace(/\/$/, "")}/thumbnails/${photoId}.webp`
      }).where(eq(tables.photos.id, photoId));
      logger$1.chrono.success(`Successfully reindexed EXIF for photo ${photoId}`);
      return {
        success: true,
        message: "EXIF \u6570\u636E\u5DF2\u6210\u529F\u91CD\u65B0\u7D22\u5F15",
        photoId
      };
    } else if (action === "batch-reindex") {
      const { photoIds } = body;
      let photos;
      if (photoIds && Array.isArray(photoIds) && photoIds.length > 0) {
        photos = await useDB().select({
          id: tables.photos.id,
          storageKey: tables.photos.storageKey
        }).from(tables.photos).where(
          and(
            isNotNull(tables.photos.storageKey),
            inArray(tables.photos.id, photoIds)
          )
        );
      } else {
        photos = await useDB().select({
          id: tables.photos.id,
          storageKey: tables.photos.storageKey
        }).from(tables.photos).where(isNotNull(tables.photos.storageKey));
      }
      if (photos.length === 0) {
        return {
          message: "\u6CA1\u6709\u627E\u5230\u9700\u8981\u91CD\u65B0\u7D22\u5F15\u7684\u7167\u7247",
          results: {
            total: 0,
            processed: 0,
            updated: 0,
            errors: []
          }
        };
      }
      logger$1.chrono.info(
        `Starting batch EXIF reindexing for ${photos.length} photos`
      );
      let processed = 0;
      let updated = 0;
      const errors = [];
      const { storageProvider } = useStorageProvider(event);
      for (const photo of photos) {
        try {
          processed++;
          logger$1.chrono.info(
            `Processing photo ${photo.id} (${processed}/${photos.length})`
          );
          const fileBuffer = await storageProvider.get(photo.storageKey);
          if (!fileBuffer) {
            errors.push({
              photoId: photo.id,
              error: "File not found in storage"
            });
            continue;
          }
          const exifData = await extractExifData(
            fileBuffer,
            void 0,
            logger$1.chrono
          );
          const photoInfo = extractPhotoInfo(photo.storageKey, exifData);
          await useDB().update(tables.photos).set({
            exif: exifData,
            title: photoInfo.title,
            dateTaken: photoInfo.dateTaken,
            tags: photoInfo.tags,
            lastModified: (/* @__PURE__ */ new Date()).toISOString(),
            thumbnailKey: `${(_d = (_c = storageProvider.config) == null ? void 0 : _c.prefix) == null ? void 0 : _d.replace(/\/$/, "")}/thumbnails/${photo.id}.webp`
          }).where(eq(tables.photos.id, photo.id));
          updated++;
          logger$1.chrono.success(
            `Updated EXIF for photo ${photo.id} (${updated}/${processed})`
          );
          if (processed % 10 === 0) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          logger$1.chrono.error(`Failed to process photo ${photo.id}:`, error);
          errors.push({
            photoId: photo.id,
            error: errorMessage
          });
        }
      }
      const result = {
        message: `EXIF \u91CD\u65B0\u7D22\u5F15\u5B8C\u6210`,
        results: {
          total: photos.length,
          processed,
          updated,
          errors: errors.length > 0 ? errors : void 0,
          statistics: {
            successRate: processed > 0 ? ((processed - errors.length) / processed * 100).toFixed(1) + "%" : "0%"
          }
        }
      };
      logger$1.chrono.success(
        `EXIF batch reindexing completed: ${updated} photos updated out of ${processed} processed`
      );
      return result;
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid action parameter"
      });
    }
  } catch (error) {
    logger$1.chrono.error("Failed to reindex EXIF data:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to reindex EXIF data"
    });
  }
});

const reindex_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reindex_post
}, Symbol.toStringTag, { value: 'Module' }));

const index_get = eventHandler(async (_event) => {
  return useDB().select().from(tables.photos).orderBy(desc(tables.photos.dateTaken)).all();
});

const index_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get
}, Symbol.toStringTag, { value: 'Module' }));

const VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([
  ".mov",
  ".mp4"
]);
const IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".avif",
  ".bmp",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp"
]);
const isVideoFile = (fileName, contentType) => {
  if (contentType == null ? void 0 : contentType.toLowerCase().startsWith("video/")) {
    return true;
  }
  const ext = path.extname(fileName).toLowerCase();
  return ext !== "" && VIDEO_EXTENSIONS.has(ext);
};
const isLikelyImageKey = (storageKey) => {
  if (!storageKey) {
    return false;
  }
  const ext = path.extname(storageKey).toLowerCase();
  return ext !== "" && IMAGE_EXTENSIONS.has(ext);
};
const index_post = eventHandler(async (event) => {
  var _a;
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const config = useRuntimeConfig(event);
  const t = await useTranslation(event);
  const body = await readBody(event);
  const { fileName, contentType, skipDuplicateCheck } = body;
  const isVideoUpload = fileName ? isVideoFile(fileName, contentType) : false;
  if (!fileName) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.required.title")
    });
  }
  try {
    const objectKey = `${(((_a = storageProvider.config) == null ? void 0 : _a.prefix) || "").replace(/\/+$/, "")}/${fileName}`;
    const duplicateCheckEnabled = config.upload.duplicateCheck.enabled && !skipDuplicateCheck;
    let existingPhoto = null;
    if (duplicateCheckEnabled) {
      const photoId = generateSafePhotoId(objectKey);
      const db = useDB();
      existingPhoto = await db.select({
        id: tables.photos.id,
        title: tables.photos.title,
        storageKey: tables.photos.storageKey,
        originalUrl: tables.photos.originalUrl,
        thumbnailUrl: tables.photos.thumbnailUrl,
        dateTaken: tables.photos.dateTaken
      }).from(tables.photos).where(eq(tables.photos.id, photoId)).get();
      if (existingPhoto && isVideoUpload && isLikelyImageKey(existingPhoto.storageKey)) {
        existingPhoto = null;
      }
      if (existingPhoto) {
        const checkMode = config.upload.duplicateCheck.mode || "skip";
        if (checkMode === "block") {
          throw createError({
            statusCode: 409,
            statusMessage: t("upload.duplicate.block.title"),
            data: {
              duplicate: true,
              existingPhoto,
              title: t("upload.duplicate.block.title"),
              message: t("upload.duplicate.block.message", { fileName })
            }
          });
        } else if (checkMode === "skip") {
          return {
            skipped: true,
            duplicate: true,
            existingPhoto,
            fileKey: objectKey,
            title: t("upload.duplicate.skip.title"),
            message: t("upload.duplicate.skip.message", { fileName }),
            info: t("upload.duplicate.skip.info", {
              dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
            })
          };
        }
      }
    }
    if (storageProvider.getSignedUrl) {
      const signedUrl = await storageProvider.getSignedUrl(objectKey, 3600, {
        contentType: contentType || "application/octet-stream"
      });
      const response2 = {
        signedUrl,
        fileKey: objectKey,
        expiresIn: 3600
      };
      if (existingPhoto) {
        response2.duplicate = true;
        response2.existingPhoto = existingPhoto;
        response2.warningInfo = {
          title: t("upload.duplicate.warn.title"),
          message: t("upload.duplicate.warn.message", { fileName }),
          warning: t("upload.duplicate.warn.warning"),
          info: t("upload.duplicate.warn.info", {
            title: existingPhoto.title || fileName,
            dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
          })
        };
      }
      return response2;
    }
    const internalUploadUrl = `/api/photos/upload?key=${encodeURIComponent(objectKey)}`;
    const response = {
      signedUrl: internalUploadUrl,
      fileKey: objectKey,
      expiresIn: 3600
    };
    if (existingPhoto) {
      response.duplicate = true;
      response.existingPhoto = existingPhoto;
      response.warningInfo = {
        title: t("upload.duplicate.warn.title"),
        message: t("upload.duplicate.warn.message", { fileName }),
        warning: t("upload.duplicate.warn.warning"),
        info: t("upload.duplicate.warn.info", {
          title: existingPhoto.title || fileName,
          dateTaken: existingPhoto.dateTaken || t("common.unknown", "unknown date")
        })
      };
    }
    return response;
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    logger$1.chrono.error("Failed to prepare upload:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to prepare upload"
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post
}, Symbol.toStringTag, { value: 'Module' }));

const scanAndProcessExistingLivePhotos = async () => {
  const results = {
    processed: 0,
    matched: 0,
    errors: []
  };
  try {
    logger$1.chrono.info("Starting scan for existing LivePhoto videos...");
    logger$1.chrono.info(
      "Scan completed. Use processSpecificLivePhotoVideo for individual files."
    );
    return results;
  } catch (error) {
    logger$1.chrono.error("Failed to scan existing LivePhotos:", error);
    results.errors.push(error instanceof Error ? error.message : String(error));
    return results;
  }
};
const processSpecificLivePhotoVideo = async (videoKey) => {
  try {
    const storageProvider = getStorageManager().getProvider();
    const fileBuffer = await storageProvider.get(videoKey);
    if (!fileBuffer) {
      logger$1.chrono.error(`Video file not found: ${videoKey}`);
      return false;
    }
    const fileName = videoKey.split("/").pop() || videoKey;
    if (!isLivePhotoVideo(fileName, fileBuffer.length)) {
      logger$1.chrono.warn(
        `File does not appear to be a LivePhoto video: ${videoKey}`
      );
      return false;
    }
    return await processLivePhotoVideo(videoKey, fileBuffer.length);
  } catch (error) {
    logger$1.chrono.error(
      `Failed to process specific LivePhoto video ${videoKey}:`,
      error
    );
    return false;
  }
};

const testLivePhotoDetection = async (imageKey) => {
  logger$1.chrono.info(`Testing LivePhoto detection for: ${imageKey}`);
  try {
    const result = await findLivePhotoVideoForImage(imageKey);
    if (result) {
      logger$1.chrono.success(`LivePhoto video found:`, {
        imageKey,
        videoKey: result.videoKey,
        videoSize: result.videoSize
      });
      return {
        found: true,
        videoKey: result.videoKey,
        videoSize: result.videoSize
      };
    } else {
      logger$1.chrono.info(`No LivePhoto video found for: ${imageKey}`);
      return {
        found: false
      };
    }
  } catch (error) {
    logger$1.chrono.error(`LivePhoto detection test failed for ${imageKey}:`, error);
    return {
      found: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
const batchTestLivePhotoDetection = async (photoIds) => {
  const db = useDB();
  try {
    let photos;
    if (photoIds && Array.isArray(photoIds) && photoIds.length > 0) {
      photos = await db.select().from(tables.photos).where(
        and(
          eq(tables.photos.isLivePhoto, 0),
          inArray(tables.photos.id, photoIds)
        )
      );
    } else {
      photos = await db.select().from(tables.photos).where(eq(tables.photos.isLivePhoto, 0));
    }
    logger$1.chrono.info(`Testing ${photos.length} photos for LivePhoto detection`);
    const results = [];
    for (const photo of photos) {
      const result = await testLivePhotoDetection(photo.storageKey);
      results.push({
        photoId: photo.id,
        storageKey: photo.storageKey,
        ...result
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const foundCount = results.filter((r) => r.found).length;
    logger$1.chrono.success(`LivePhoto detection test completed. Found ${foundCount} potential LivePhotos out of ${photos.length} photos`);
    return {
      total: photos.length,
      processed: photos.length,
      found: foundCount,
      results: results.filter((r) => r.found)
      // 只返回找到的
    };
  } catch (error) {
    logger$1.chrono.error("Batch LivePhoto detection test failed:", error);
    throw error;
  }
};

const manage_post = eventHandler(async (event) => {
  await requireUserSession(event);
  const body = await readBody(event);
  const { action, videoKey, photoId, photoIds } = body;
  if (!action) {
    throw createError({
      statusCode: 400,
      statusMessage: "Action is required"
    });
  }
  try {
    switch (action) {
      case "scan": {
        const scanResults = await scanAndProcessExistingLivePhotos();
        return {
          message: "Scan completed",
          results: scanResults
        };
      }
      case "detect": {
        const results = await batchTestLivePhotoDetection(photoIds);
        return {
          message: "Batch LivePhoto detection completed",
          results
        };
      }
      case "process": {
        if (!videoKey) {
          throw createError({
            statusCode: 400,
            statusMessage: "videoKey is required for process action"
          });
        }
        const success = await processSpecificLivePhotoVideo(videoKey);
        return {
          message: success ? "LivePhoto processed successfully" : "Failed to process LivePhoto",
          success,
          videoKey
        };
      }
      case "update-photo": {
        if (!photoId) {
          throw createError({
            statusCode: 400,
            statusMessage: "photoId is required for update-photo action"
          });
        }
        const db = useDB();
        const photos = await db.select().from(tables.photos).where(eq(tables.photos.id, photoId)).limit(1);
        if (photos.length === 0) {
          throw createError({
            statusCode: 404,
            statusMessage: "Photo not found"
          });
        }
        const photo = photos[0];
        const livePhotoVideo = await findLivePhotoVideoForImage(
          photo.storageKey
        );
        if (livePhotoVideo) {
          const storageProvider = getStorageManager().getProvider();
          await db.update(tables.photos).set({
            isLivePhoto: 1,
            livePhotoVideoUrl: storageProvider.getPublicUrl(
              livePhotoVideo.videoKey
            ),
            livePhotoVideoKey: livePhotoVideo.videoKey
          }).where(eq(tables.photos.id, photoId));
          return {
            message: "Photo updated to LivePhoto successfully",
            success: true,
            photoId,
            videoKey: livePhotoVideo.videoKey
          };
        } else {
          return {
            message: "No matching video found for this photo",
            success: false,
            photoId
          };
        }
      }
      default:
        throw createError({
          statusCode: 400,
          statusMessage: 'Invalid action. Use "scan", "detect", "process", or "update-photo"'
        });
    }
  } catch (error) {
    logger$1.chrono.error("LivePhoto management error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to process LivePhoto management request"
    });
  }
});

const manage_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manage_post
}, Symbol.toStringTag, { value: 'Module' }));

const reactions_get = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const photoIds = query.ids;
  if (!photoIds) {
    throw createError({
      statusCode: 400,
      message: "Photo IDs are required"
    });
  }
  const ids = Array.isArray(photoIds) ? photoIds : [photoIds];
  if (ids.length === 0) {
    return {};
  }
  const db = useDB();
  const reactions = db.select({
    photoId: tables.photoReactions.photoId,
    reactionType: tables.photoReactions.reactionType,
    count: sql`count(*)`
  }).from(tables.photoReactions).where(inArray(tables.photoReactions.photoId, ids)).groupBy(tables.photoReactions.photoId, tables.photoReactions.reactionType).all();
  const result = {};
  ids.forEach((id) => {
    result[id] = {
      like: 0,
      love: 0,
      amazing: 0,
      funny: 0,
      wow: 0,
      sad: 0,
      fire: 0,
      sparkle: 0
    };
  });
  reactions.forEach((r) => {
    if (r.photoId && r.reactionType) {
      result[r.photoId][r.reactionType] = r.count;
    }
  });
  return result;
});

const reactions_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactions_get
}, Symbol.toStringTag, { value: 'Module' }));

const status_get = eventHandler(async (event) => {
  await requireUserSession(event);
  const method = getMethod(event);
  if (method === "GET") {
    const recentPhotos = await useDB().select().from(photos).orderBy(photos.lastModified).limit(10).all();
    return {
      recentPhotos,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  }
});

const status_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_get
}, Symbol.toStringTag, { value: 'Module' }));

const upload_put = eventHandler(async (event) => {
  await requireUserSession(event);
  const { storageProvider } = useStorageProvider(event);
  const key = getQuery$1(event).key;
  const t = await useTranslation(event);
  if (!key) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.required.title"),
      data: {
        title: t("upload.error.required.title"),
        message: t("upload.error.required.message", { field: "key" })
      }
    });
  }
  const contentType = getHeader(event, "content-type") || "application/octet-stream";
  const config = useRuntimeConfig(event);
  const whitelistEnabled = config.upload.mime.whitelistEnabled;
  if (whitelistEnabled) {
    const whitelistStr = config.upload.mime.whitelist;
    const allowedTypes = whitelistStr ? whitelistStr.split(",").map((type) => type.trim()).filter(Boolean) : [];
    if (allowedTypes.length > 0 && !allowedTypes.includes(contentType)) {
      throw createError({
        statusCode: 415,
        statusMessage: t("upload.error.invalidType.title"),
        data: {
          title: t("upload.error.invalidType.title"),
          message: t("upload.error.invalidType.message", { type: contentType }),
          suggestion: t("upload.error.invalidType.suggestion", { allowed: allowedTypes.join(", ") })
        }
      });
    }
  }
  const raw = await readRawBody(event, false);
  if (!raw || !(raw instanceof Buffer)) {
    throw createError({
      statusCode: 400,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: t("upload.error.uploadFailed.message")
      }
    });
  }
  const maxBytes = 128 * 1024 * 1024;
  if (raw.byteLength > maxBytes) {
    const sizeInMB = (raw.byteLength / 1024 / 1024).toFixed(2);
    throw createError({
      statusCode: 413,
      statusMessage: t("upload.error.tooLarge.title"),
      data: {
        title: t("upload.error.tooLarge.title"),
        message: t("upload.error.tooLarge.message", { size: sizeInMB }),
        suggestion: t("upload.error.tooLarge.suggestion", { maxSize: 128 })
      }
    });
  }
  try {
    await storageProvider.create(key.replace(/^\/+/, ""), raw, contentType);
  } catch (error) {
    logger$1.chrono.error("Storage provider create error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: t("upload.error.uploadFailed.title"),
      data: {
        title: t("upload.error.uploadFailed.title"),
        message: t("upload.error.uploadFailed.message")
      }
    });
  }
  return { ok: true, key };
});

const upload_put$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: upload_put
}, Symbol.toStringTag, { value: 'Module' }));

const profile_get = eventHandler(async (event) => {
  return (await getUserSession(event)).user;
});

const profile_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: profile_get
}, Symbol.toStringTag, { value: 'Module' }));

const addTask_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const payloadSchema = z.discriminatedUnion("type", [
      z.object({
        type: z.literal("photo"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("live-photo-video"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("photo-reverse-geocoding"),
        photoId: z.string().min(1),
        latitude: z.number().min(-90).max(90).optional(),
        longitude: z.number().min(-180).max(180).optional()
      })
    ]);
    const { payload, priority, maxAttempts } = await readValidatedBody(
      event,
      z.object({
        payload: payloadSchema,
        priority: z.number().min(0).max(9).optional().default(0),
        maxAttempts: z.number().min(1).max(5).optional().default(3)
      }).parse
    );
    const workerPool = globalThis.__workerPool;
    if (!workerPool) {
      throw createError({
        statusCode: 503,
        statusMessage: "Worker pool not initialized"
      });
    }
    const taskId = await workerPool.addTask(payload, {
      priority,
      maxAttempts
    });
    return {
      success: true,
      taskId,
      message: "Task added to queue successfully",
      payload
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to add task to queue"
    });
  }
});

const addTask_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addTask_post
}, Symbol.toStringTag, { value: 'Module' }));

const addTasks_post = defineEventHandler(async (event) => {
  var _a, _b;
  await requireUserSession(event);
  try {
    const payloadSchema = z.discriminatedUnion("type", [
      z.object({
        type: z.literal("photo"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("live-photo-video"),
        storageKey: z.string().nonempty()
      }),
      z.object({
        type: z.literal("photo-reverse-geocoding"),
        photoId: z.string().min(1),
        latitude: z.number().min(-90).max(90).optional(),
        longitude: z.number().min(-180).max(180).optional()
      })
    ]);
    const { tasks, defaultPriority, defaultMaxAttempts } = await readValidatedBody(
      event,
      z.object({
        tasks: z.array(
          z.object({
            payload: payloadSchema,
            priority: z.number().min(0).max(9).optional(),
            maxAttempts: z.number().min(1).max(5).optional()
          })
        ).min(1, "At least one task is required").max(1e3, "Too many tasks: maximum 1000 tasks per batch"),
        defaultPriority: z.number().min(0).max(9).optional().default(0),
        defaultMaxAttempts: z.number().min(1).max(5).optional().default(3)
      }).parse
    );
    const workerPool = globalThis.__workerPool;
    if (!workerPool) {
      throw createError({
        statusCode: 503,
        statusMessage: "Worker pool not initialized"
      });
    }
    const results = [];
    const errors = [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      try {
        const taskId = await workerPool.addTask(task.payload, {
          priority: (_a = task.priority) != null ? _a : defaultPriority,
          maxAttempts: (_b = task.maxAttempts) != null ? _b : defaultMaxAttempts
        });
        results.push({ index: i, taskId, payload: task.payload, success: true });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Task ${i}: Unknown error`;
        errors.push({
          index: i,
          payload: task.payload,
          error: errorMessage,
          success: false
        });
      }
    }
    return {
      success: errors.length === 0,
      totalTasks: tasks.length,
      successCount: results.length,
      errorCount: errors.length,
      results,
      errors: errors.length > 0 ? errors : void 0,
      message: `Processed ${tasks.length} tasks: ${results.length} successful, ${errors.length} failed`
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to add tasks to queue"
    });
  }
});

const addTasks_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addTasks_post
}, Symbol.toStringTag, { value: 'Module' }));

const _taskId__get = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const { taskId } = await getValidatedRouterParams(
      event,
      z$1.object({
        taskId: z$1.string().nonempty()
      }).parse
    );
    const workerPool = globalThis.__workerPool;
    if (!workerPool) {
      throw createError({
        statusCode: 503,
        statusMessage: "Worker pool not initialized"
      });
    }
    const taskStats = await workerPool.getTaskStatus(Number(taskId));
    if (!taskStats) {
      throw createError({
        statusCode: 404,
        statusMessage: "Task not found"
      });
    }
    return taskStats;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to get queue status"
    });
  }
});

const _taskId__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _taskId__get
}, Symbol.toStringTag, { value: 'Module' }));

const index$2 = defineEventHandler(async (event) => {
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

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: 'Module' }));

const clear_delete = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const query = getQuery$1(event);
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

const clear_delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clear_delete
}, Symbol.toStringTag, { value: 'Module' }));

const list_get = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const query = getQuery$1(event);
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

const list_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: list_get
}, Symbol.toStringTag, { value: 'Module' }));

const retryBatch_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const { taskIds, retryAll = false } = await readValidatedBody(
      event,
      z.object({
        taskIds: z.array(z.number().int().positive()).optional(),
        retryAll: z.boolean().optional().default(false)
      }).parse
    );
    if (!retryAll && (!taskIds || taskIds.length === 0)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Either taskIds array or retryAll flag must be provided"
      });
    }
    const db = useDB();
    let whereCondition;
    if (retryAll) {
      whereCondition = eq(tables.pipelineQueue.status, "failed");
    } else {
      whereCondition = inArray(tables.pipelineQueue.id, taskIds);
    }
    const tasksToRetry = await db.select().from(tables.pipelineQueue).where(whereCondition);
    const failedTasks = tasksToRetry.filter((task) => task.status === "failed");
    if (failedTasks.length === 0) {
      return {
        success: true,
        message: "No failed tasks found to retry",
        retriedCount: 0,
        skippedCount: retryAll ? 0 : (taskIds == null ? void 0 : taskIds.length) || 0
      };
    }
    const nonFailedTasks = tasksToRetry.filter((task) => task.status !== "failed");
    const failedTaskIds = failedTasks.map((task) => task.id);
    await db.update(tables.pipelineQueue).set({
      status: "pending",
      statusStage: null,
      errorMessage: null,
      attempts: 0,
      // 重置尝试次数
      createdAt: /* @__PURE__ */ new Date()
      // 更新创建时间以便重新调度
    }).where(inArray(tables.pipelineQueue.id, failedTaskIds));
    return {
      success: true,
      message: `Successfully reset ${failedTasks.length} failed tasks for retry`,
      retriedCount: failedTasks.length,
      skippedCount: nonFailedTasks.length,
      retriedTasks: failedTasks.map((task) => ({
        id: task.id,
        type: task.payload.type,
        storageKey: task.payload.storageKey
      })),
      skippedTasks: nonFailedTasks.map((task) => ({
        id: task.id,
        status: task.status,
        reason: `Task is not in failed status (current: ${task.status})`
      }))
    };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("Failed to batch retry tasks:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to batch retry tasks"
    });
  }
});

const retryBatch_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: retryBatch_post
}, Symbol.toStringTag, { value: 'Module' }));

const retry_post = defineEventHandler(async (event) => {
  await requireUserSession(event);
  try {
    const { taskId } = await readValidatedBody(
      event,
      z.object({
        taskId: z.number().int().positive()
      }).parse
    );
    const db = useDB();
    const task = await db.select().from(tables.pipelineQueue).where(eq(tables.pipelineQueue.id, taskId)).get();
    if (!task) {
      throw createError({
        statusCode: 404,
        statusMessage: "Task not found"
      });
    }
    if (task.status !== "failed") {
      throw createError({
        statusCode: 400,
        statusMessage: `Task is not in failed status, current status: ${task.status}`
      });
    }
    await db.update(tables.pipelineQueue).set({
      status: "pending",
      statusStage: null,
      errorMessage: null,
      attempts: 0,
      // 重置尝试次数
      createdAt: /* @__PURE__ */ new Date()
      // 更新创建时间以便重新调度
    }).where(eq(tables.pipelineQueue.id, taskId));
    return {
      success: true,
      message: `Task ${taskId} has been reset and will be retried`,
      taskId,
      payload: {
        type: task.payload.type,
        storageKey: task.payload.storageKey
      }
    };
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("Failed to retry task:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to retry task"
    });
  }
});

const retry_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: retry_post
}, Symbol.toStringTag, { value: 'Module' }));

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

const logs$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logs
}, Symbol.toStringTag, { value: 'Module' }));

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

const _namespace__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _namespace__get
}, Symbol.toStringTag, { value: 'Module' }));

const _key_ = eventHandler(async (event) => {
  const { namespace, key } = await getValidatedRouterParams(
    event,
    z.object({
      namespace: z.enum([...settingNamespaces]),
      key: z.enum([...settingKeys])
    }).parse
  );
  if (event.method === "GET") {
    try {
      const value = await settingsManager.get(namespace, key);
      return { namespace, key, value };
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: `Setting ${namespace}:${key} not found`
      });
    }
  }
  if (event.method === "PUT") {
    const session = await requireUserSession(event);
    if (!session || !session.user.isAdmin) {
      throw createError({
        statusCode: 403,
        statusMessage: "Admin privileges required"
      });
    }
    const { value } = await readValidatedBody(
      event,
      z.object({
        value: z.any()
      }).parse
    );
    try {
      await settingsManager.set(namespace, key, value, session.user.id);
      return { namespace, key, value };
    } catch (err) {
      throw createError({
        statusCode: 400,
        statusMessage: err.message || "Failed to update setting"
      });
    }
  }
  throw createError({ statusCode: 405 });
});

const _key_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _key_
}, Symbol.toStringTag, { value: 'Module' }));

const all_get = eventHandler(async () => {
  const db = useDB();
  const allSettings = db.select().from(tables.settings).where(
    or(
      eq(tables.settings.isPublic, true),
      and(
        eq(tables.settings.namespace, "system"),
        eq(tables.settings.key, "firstLaunch")
      )
    )
  ).all();
  const grouped = {};
  for (const setting of allSettings) {
    if (!grouped[setting.namespace]) {
      grouped[setting.namespace] = {};
    }
    let value = setting.value;
    try {
      if (setting.type === "json") {
        value = setting.value ? JSON.parse(setting.value) : null;
      } else if (setting.type === "number") {
        value = setting.value ? Number(setting.value) : null;
      } else if (setting.type === "boolean") {
        value = setting.value === "true" || setting.value === "1";
      }
    } catch {
    }
    grouped[setting.namespace][setting.key] = value;
  }
  return {
    timestamp: Date.now(),
    data: grouped
  };
});

const all_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: all_get
}, Symbol.toStringTag, { value: 'Module' }));

const batch_put = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session || !session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin privileges required"
    });
  }
  const body = await readValidatedBody(
    event,
    z.object({
      updates: z.array(
        z.object({
          namespace: z.enum([...settingNamespaces]),
          key: z.enum([...settingKeys]),
          value: z.any()
        })
      )
    }).parse
  );
  try {
    let successCount = 0;
    const errors = [];
    for (const update of body.updates) {
      try {
        await settingsManager.set(
          update.namespace,
          update.key,
          update.value,
          session.user.id
        );
        successCount++;
      } catch (err) {
        errors.push({
          namespace: update.namespace,
          key: update.key,
          error: err.message
        });
      }
    }
    if (errors.length > 0) {
      return {
        success: false,
        updated: successCount,
        errors
      };
    }
    return {
      success: true,
      updated: successCount
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message || "Failed to update settings"
    });
  }
});

const batch_put$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: batch_put
}, Symbol.toStringTag, { value: 'Module' }));

const APP_SETTINGS_UI = {
  title: {
    type: "input",
    placeholder: "ChronoFrame",
    required: true
  },
  slogan: {
    type: "input",
    placeholder: "Your gallery slogan",
    help: "settings.app.slogan.help"
  },
  author: {
    type: "input",
    placeholder: "Your name"
  },
  avatarUrl: {
    type: "url",
    placeholder: "https://example.com/avatar.jpg",
    help: "settings.app.avatarUrl.help"
  },
  "appearance.theme": {
    type: "tabs",
    options: [
      {
        label: "settings.app.appearance.theme.light",
        value: "light",
        icon: "tabler:sun"
      },
      {
        label: "settings.app.appearance.theme.dark",
        value: "dark",
        icon: "tabler:moon"
      },
      {
        label: "settings.app.appearance.theme.system",
        value: "system",
        icon: "tabler:device-desktop"
      }
    ],
    help: "settings.app.appearance.theme.help"
  }
};
const MAP_SETTINGS_UI = {
  provider: {
    type: "tabs",
    options: [
      { label: "MapBox", value: "mapbox" },
      { label: "MapLibre", value: "maplibre" }
    ]
  },
  "mapbox.token": {
    type: "password",
    placeholder: "pk.xxxxxx",
    required: true,
    visibleIf: { fieldKey: "provider", value: "mapbox" },
    help: "settings.map.mapbox.token.help"
  },
  "mapbox.style": {
    type: "input",
    placeholder: "mapbox://styles/mapbox/light-v11",
    visibleIf: { fieldKey: "provider", value: "mapbox" }
  },
  "maplibre.token": {
    type: "password",
    placeholder: "pk.xxxxxx",
    required: true,
    visibleIf: { fieldKey: "provider", value: "maplibre" },
    help: "settings.map.maplibre.token.help"
  },
  "maplibre.style": {
    type: "input",
    placeholder: "https://example.com/style.json",
    visibleIf: { fieldKey: "provider", value: "maplibre" }
  }
};
const LOCATION_SETTINGS_UI = {
  "mapbox.token": {
    type: "password",
    placeholder: "pk.xxxxxx",
    help: "settings.location.mapbox.token.help"
  },
  "nominatim.baseUrl": {
    type: "url",
    placeholder: "https://nominatim.openstreetmap.org",
    help: "settings.location.nominatim.baseUrl.help"
  }
};
const STORAGE_SETTINGS_UI = {
  provider: {
    type: "custom",
    options: [
      {
        label: "settings.storage.provider.options.local.label",
        value: "local",
        icon: "tabler:server",
        description: "settings.storage.provider.options.local.description"
      },
      {
        label: "settings.storage.provider.options.s3.label",
        value: "s3",
        icon: "tabler:brand-aws",
        description: "settings.storage.provider.options.s3.description"
      },
      {
        label: "settings.storage.provider.options.openlist.label",
        value: "openlist",
        icon: "tabler:stack",
        description: "settings.storage.provider.options.openlist.description"
      }
    ]
  },
  name: {
    type: "input",
    required: true
  },
  // Local
  "local.basePath": {
    type: "input",
    required: true,
    help: "settings.storage.local.basePath.description",
    visibleIf: { fieldKey: "provider", value: "local" }
  },
  "local.baseUrl": {
    type: "input",
    help: "settings.storage.local.baseUrl.description",
    visibleIf: { fieldKey: "provider", value: "local" }
  },
  "local.prefix": {
    type: "input",
    placeholder: "photos/",
    help: "settings.storage.local.prefix.description",
    visibleIf: { fieldKey: "provider", value: "local" }
  },
  // S3
  "s3.endpoint": {
    type: "input",
    required: true,
    placeholder: "https://s3.amazonaws.com",
    help: "settings.storage.s3.endpoint.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.bucket": {
    type: "input",
    required: true,
    help: "settings.storage.s3.bucket.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.region": {
    type: "input",
    required: true,
    help: "settings.storage.s3.region.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.accessKeyId": {
    type: "input",
    required: true,
    help: "settings.storage.s3.accessKeyId.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.secretAccessKey": {
    type: "password",
    required: true,
    help: "settings.storage.s3.secretAccessKey.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.prefix": {
    type: "input",
    placeholder: "/photos",
    help: "settings.storage.s3.prefix.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.cdnUrl": {
    type: "input",
    help: "settings.storage.s3.cdnUrl.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.forcePathStyle": {
    type: "toggle",
    help: "settings.storage.s3.forcePathStyle.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  "s3.maxKeys": {
    type: "number",
    help: "settings.storage.s3.maxKeys.description",
    visibleIf: { fieldKey: "provider", value: "s3" }
  },
  // OpenList
  "openlist.baseUrl": {
    type: "input",
    required: true,
    placeholder: "https://alist.example.com",
    help: "settings.storage.openlist.baseUrl.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.rootPath": {
    type: "input",
    required: true,
    placeholder: "/photos",
    help: "settings.storage.openlist.rootPath.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.token": {
    type: "password",
    required: true,
    help: "settings.storage.openlist.token.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.cdnUrl": {
    type: "input",
    help: "settings.storage.openlist.cdnUrl.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.uploadEndpoint": {
    type: "input",
    placeholder: "/api/fs/put",
    help: "settings.storage.openlist.uploadEndpoint.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.downloadEndpoint": {
    type: "input",
    help: "settings.storage.openlist.downloadEndpoint.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.listEndpoint": {
    type: "input",
    help: "settings.storage.openlist.listEndpoint.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.deleteEndpoint": {
    type: "input",
    placeholder: "/api/fs/remove",
    help: "settings.storage.openlist.deleteEndpoint.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.metaEndpoint": {
    type: "input",
    placeholder: "/api/fs/get",
    help: "settings.storage.openlist.metaEndpoint.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  },
  "openlist.pathField": {
    type: "input",
    placeholder: "path",
    help: "settings.storage.openlist.pathField.description",
    visibleIf: { fieldKey: "provider", value: "openlist" }
  }
};
function getSettingUIConfig(namespace, key) {
  var _a;
  const uiConfigMap = {
    app: APP_SETTINGS_UI,
    map: MAP_SETTINGS_UI,
    location: LOCATION_SETTINGS_UI,
    storage: STORAGE_SETTINGS_UI
  };
  return (_a = uiConfigMap[namespace]) == null ? void 0 : _a[key];
}

const fields_get = eventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    z.object({
      namespace: z.string().min(1)
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
    const schema = await settingsManager.getSchema();
    const namespaceSettings = schema.filter(
      (s) => s.namespace === query.namespace
    );
    if (namespaceSettings.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: `Namespace ${query.namespace} not found`
      });
    }
    const fields = namespaceSettings.map((setting) => {
      const uiConfig = getSettingUIConfig(query.namespace, setting.key);
      return {
        ...setting,
        ui: uiConfig || {
          type: "input",
          required: false
        }
      };
    });
    const response = {
      namespace: query.namespace,
      fields
    };
    return response;
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to fetch settings fields"
    });
  }
});

const fields_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fields_get
}, Symbol.toStringTag, { value: 'Module' }));

const schema_get$2 = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session || !session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin privileges required"
    });
  }
  const settingsSchema = settingsManager.getSchema();
  return settingsSchema;
});

const schema_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: schema_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const _id_ = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  const { id: storageConfigId } = await getValidatedRouterParams(
    event,
    z.object({
      id: z.string().transform((val) => parseInt(val, 10))
    }).parse
  );
  const storageConfig = await settingsManager.storage.getProviderById(storageConfigId);
  if (!storageConfig) {
    throw createError({
      statusCode: 404,
      statusMessage: "Storage configuration not found"
    });
  }
  switch (event.method) {
    case "GET":
      return storageConfig;
    case "PUT": {
      const updatedStorageConfig = await readValidatedBody(
        event,
        z.discriminatedUnion("provider", [
          z.object({
            name: z.string().optional(),
            provider: z.literal("s3"),
            config: s3StorageConfigSchema.partial()
          }),
          z.object({
            name: z.string().optional(),
            provider: z.literal("local"),
            config: localStorageConfigSchema.partial()
          }),
          z.object({
            name: z.string().optional(),
            provider: z.literal("openlist"),
            config: openListStorageConfigSchema.partial()
          })
        ]).parse
      );
      await settingsManager.storage.updateProvider(
        storageConfigId,
        updatedStorageConfig
      );
      return { success: true };
    }
    case "DELETE": {
      await settingsManager.storage.deleteProvider(storageConfigId);
      return { success: true };
    }
    default: {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed"
      });
    }
  }
});

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id_
}, Symbol.toStringTag, { value: 'Module' }));

const index = eventHandler(async (event) => {
  const session = await requireUserSession(event);
  if (!session.user.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  switch (event.method) {
    case "GET": {
      return await settingsManager.storage.getProviders();
    }
    case "POST": {
      const newStorageConfig = await readValidatedBody(
        event,
        z.discriminatedUnion("provider", [
          z.object({
            name: z.string(),
            provider: z.literal("s3"),
            config: s3StorageConfigSchema
          }),
          z.object({
            name: z.string(),
            provider: z.literal("local"),
            config: localStorageConfigSchema
          }),
          z.object({
            name: z.string(),
            provider: z.literal("openlist"),
            config: openListStorageConfigSchema
          })
        ]).parse
      );
      const newId = await settingsManager.storage.addProvider(newStorageConfig);
      return { id: newId };
    }
    default: {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed"
      });
    }
  }
});

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: 'Module' }));

async function getQueueStats() {
  const workerPool = globalThis.__workerPool;
  return workerPool ? workerPool.getPoolStats() : null;
}
async function checkIfDocker() {
  try {
    const fs = await import('node:fs');
    return fs.existsSync("/.dockerenv") || fs.existsSync("/proc/1/cgroup");
  } catch {
    return false;
  }
}
async function getDockerMemoryInfo() {
  try {
    const meminfo = readFileSync("/proc/meminfo", "utf8");
    const lines = meminfo.split("\n");
    let totalMem = 0;
    let availableMem = 0;
    for (const line of lines) {
      if (line.startsWith("MemTotal:")) {
        totalMem = parseInt(line.split(/\s+/)[1]) * 1024;
      } else if (line.startsWith("MemAvailable:")) {
        availableMem = parseInt(line.split(/\s+/)[1]) * 1024;
      }
    }
    if (totalMem > 0) {
      return {
        total: totalMem,
        used: totalMem - availableMem
      };
    }
    return null;
  } catch (error) {
    console.warn("Failed to read /proc/meminfo:", error);
    return null;
  }
}
async function getMemoryStats() {
  let memoryInfo = null;
  try {
    const isDocker = await checkIfDocker();
    if (isDocker) {
      memoryInfo = await getDockerMemoryInfo();
    }
    if (!memoryInfo) {
      const sysMemInfo = await si.mem();
      memoryInfo = {
        used: sysMemInfo.used,
        total: sysMemInfo.total
      };
    }
  } catch (error) {
    console.warn(
      "Failed to get system memory info, falling back to process info:",
      error
    );
    const memUsage = process.memoryUsage();
    memoryInfo = {
      used: memUsage.heapUsed,
      total: memUsage.heapTotal
    };
  }
  return memoryInfo;
}
function mapSystemInfo(distribution) {
  if (!distribution) return "unknown";
  const distro = distribution.toLowerCase();
  if (distro.includes("windows") || distro.includes("microsoft")) {
    if (distro.includes("11")) return "windows11";
    if (distro.includes("10")) return "windows10";
    return "windows";
  }
  if (distro.includes("ubuntu")) return "ubuntu";
  if (distro.includes("debian")) return "debian";
  if (distro.includes("centos")) return "centos";
  if (distro.includes("redhat") || distro.includes("rhel")) return "redhat";
  if (distro.includes("fedora")) return "fedora";
  if (distro.includes("arch")) return "arch";
  if (distro.includes("alpine")) return "alpine";
  if (distro.includes("suse") || distro.includes("opensuse")) return "opensuse";
  if (distro.includes("macos") || distro.includes("darwin")) return "macos";
  return "unknown";
}
const stats_get = eventHandler(async (event) => {
  await requireUserSession(event);
  const totalPhotos = await useDB().select({ count: sql`count(*)` }).from(tables.photos).get();
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();
  const todayPhotos = await useDB().select({ count: sql`count(*)` }).from(tables.photos).where(gte(tables.photos.dateTaken, todayISO)).get();
  const weekAgo = /* @__PURE__ */ new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  weekAgo.setHours(0, 0, 0, 0);
  const weekAgoISO = weekAgo.toISOString();
  const weekPhotos = await useDB().select({ count: sql`count(*)` }).from(tables.photos).where(gte(tables.photos.dateTaken, weekAgoISO)).get();
  const monthStart = /* @__PURE__ */ new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const monthStartISO = monthStart.toISOString();
  const monthPhotos = await useDB().select({ count: sql`count(*)` }).from(tables.photos).where(gte(tables.photos.dateTaken, monthStartISO)).get();
  const storageStats = await useDB().select({
    totalSize: sql`COALESCE(sum(file_size), 0)`,
    avgSize: sql`COALESCE(avg(file_size), 0)`,
    maxSize: sql`COALESCE(max(file_size), 0)`
  }).from(tables.photos).get();
  today.setHours(0, 0, 0, 0);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 6);
  sevenDaysAgo.setHours(0, 0, 0, 0);
  const sevenDaysAgoISO = sevenDaysAgo.toISOString();
  const rawTrendData = await useDB().select({
    date: sql`DATE(${tables.photos.dateTaken})`,
    count: sql`count(*)`
  }).from(tables.photos).where(gte(tables.photos.dateTaken, sevenDaysAgoISO)).groupBy(sql`DATE(${tables.photos.dateTaken})`).orderBy(sql`DATE(${tables.photos.dateTaken}) ASC`).all();
  const trendData = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(sevenDaysAgo);
    date.setDate(sevenDaysAgo.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];
    const found = rawTrendData.find((row) => row.date === dateStr);
    trendData.push({
      date: dateStr,
      count: found ? found.count : 0
    });
  }
  let systemInfo = "unknown";
  if (await checkIfDocker()) {
    systemInfo = "docker";
  } else {
    try {
      const osInfo = await si.osInfo();
      systemInfo = mapSystemInfo(osInfo.distro);
    } catch (error) {
      console.warn("Failed to get OS info:", error);
      systemInfo = "unknown";
    }
  }
  return {
    uptime: process.uptime() || 0,
    runningOn: systemInfo,
    memory: await getMemoryStats() || { used: 0, total: 0 },
    photos: {
      total: (totalPhotos == null ? void 0 : totalPhotos.count) || 0,
      today: (todayPhotos == null ? void 0 : todayPhotos.count) || 0,
      thisWeek: (weekPhotos == null ? void 0 : weekPhotos.count) || 0,
      thisMonth: (monthPhotos == null ? void 0 : monthPhotos.count) || 0
    },
    workerPool: await getQueueStats() || null,
    storage: {
      totalSize: (storageStats == null ? void 0 : storageStats.totalSize) || 0,
      averageSize: (storageStats == null ? void 0 : storageStats.avgSize) || 0,
      maxSize: (storageStats == null ? void 0 : storageStats.maxSize) || 0
    },
    trends: trendData.toReversed(),
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
});

const stats_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: stats_get
}, Symbol.toStringTag, { value: 'Module' }));

const admin_post = eventHandler(async (event) => {
  const db = useDB();
  const { email, password, username } = await readValidatedBody(
    event,
    z.object({
      email: z.email(),
      password: z.string().min(6),
      username: z.string().min(2).default("admin")
    }).parse
  );
  const existingUser = db.select().from(tables.users).limit(1).get();
  if (existingUser) {
    if (existingUser.email === email) {
      await db.update(tables.users).set({
        password: await hashPassword(password),
        username,
        isAdmin: 1
      }).where(eq(tables.users.id, existingUser.id)).run();
      return { success: true };
    }
    throw createError({
      statusCode: 400,
      message: "User already exists"
    });
  }
  await db.insert(tables.users).values({
    email,
    username,
    password: await hashPassword(password),
    isAdmin: 1,
    createdAt: /* @__PURE__ */ new Date()
  }).run();
  return { success: true };
});

const admin_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: admin_post
}, Symbol.toStringTag, { value: 'Module' }));

const complete_post = eventHandler(async (event) => {
  await settingsManager.set("system", "firstLaunch", false, void 0, true);
  return { success: true };
});

const complete_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: complete_post
}, Symbol.toStringTag, { value: 'Module' }));

const map_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      provider: z.enum(["mapbox", "maplibre"]),
      token: z.string().min(1),
      style: z.string().optional()
    }).parse
  );
  await settingsManager.set("map", "provider", body.provider);
  if (body.provider === "mapbox") {
    await settingsManager.set("map", "mapbox.token", body.token);
    if (body.style) await settingsManager.set("map", "mapbox.style", body.style);
  } else {
    await settingsManager.set("map", "maplibre.token", body.token);
    if (body.style) await settingsManager.set("map", "maplibre.style", body.style);
  }
  return { success: true };
});

const map_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: map_post
}, Symbol.toStringTag, { value: 'Module' }));

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

const schema_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: schema_get
}, Symbol.toStringTag, { value: 'Module' }));

const site_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      title: z.string().min(1),
      slogan: z.string().optional(),
      avatarUrl: z.string().optional(),
      author: z.string().optional()
    }).parse
  );
  await settingsManager.set("app", "title", body.title);
  if (body.slogan) await settingsManager.set("app", "slogan", body.slogan);
  if (body.avatarUrl) await settingsManager.set("app", "avatarUrl", body.avatarUrl);
  if (body.author) await settingsManager.set("app", "author", body.author);
  return { success: true };
});

const site_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: site_post
}, Symbol.toStringTag, { value: 'Module' }));

const storage_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      name: z.string().min(1),
      config: storageConfigSchema
    }).parse
  );
  const id = await settingsManager.storage.addProvider({
    name: body.name,
    provider: body.config.provider,
    config: body.config
  });
  await settingsManager.set("storage", "provider", id);
  return { success: true, id };
});

const storage_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: storage_post
}, Symbol.toStringTag, { value: 'Module' }));

const submit_post = eventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    z.object({
      admin: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        username: z.string().min(2).default("admin")
      }),
      site: z.object({
        title: z.string().min(1),
        slogan: z.string().optional(),
        avatarUrl: z.string().optional(),
        author: z.string().optional()
      }),
      storage: z.object({
        name: z.string().min(1),
        config: storageConfigSchema
      }),
      map: z.object({
        provider: z.enum(["mapbox", "maplibre"]),
        token: z.string().min(1),
        style: z.string().optional()
      })
    }).parse
  );
  const db = useDB();
  const existingUser = db.select().from(tables.users).limit(1).get();
  if (existingUser) {
    if (existingUser.email === body.admin.email) {
      await db.update(tables.users).set({
        password: await hashPassword(body.admin.password),
        username: body.admin.username,
        isAdmin: 1
      }).where(eq(tables.users.id, existingUser.id)).run();
    } else {
      throw createError({
        statusCode: 400,
        message: "User already exists"
      });
    }
  } else {
    await db.insert(tables.users).values({
      email: body.admin.email,
      username: body.admin.username,
      password: await hashPassword(body.admin.password),
      isAdmin: 1,
      createdAt: /* @__PURE__ */ new Date()
    }).run();
  }
  await settingsManager.set("app", "title", body.site.title);
  if (body.site.slogan) await settingsManager.set("app", "slogan", body.site.slogan);
  if (body.site.avatarUrl) await settingsManager.set("app", "avatarUrl", body.site.avatarUrl);
  if (body.site.author) await settingsManager.set("app", "author", body.site.author);
  const id = await settingsManager.storage.addProvider({
    name: body.storage.name,
    provider: body.storage.config.provider,
    config: body.storage.config
  });
  await settingsManager.set("storage", "provider", id);
  await settingsManager.set("map", "provider", body.map.provider);
  if (body.map.provider === "mapbox") {
    await settingsManager.set("map", "mapbox.token", body.map.token);
    if (body.map.style) await settingsManager.set("map", "mapbox.style", body.map.style);
  } else {
    await settingsManager.set("map", "maplibre.token", body.map.token);
    if (body.map.style) await settingsManager.set("map", "maplibre.style", body.map.style);
  }
  await settingsManager.set("system", "firstLaunch", false, void 0, true);
  return { success: true };
});

const submit_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: submit_post
}, Symbol.toStringTag, { value: 'Module' }));

const ____key__get = eventHandler(async (event) => {
  const { storageProvider } = useStorageProvider(event);
  const key = getRouterParam(event, "key");
  if (!key) {
    throw createError({ statusCode: 400, statusMessage: "Invalid key" });
  }
  const photo = await storageProvider.get(key);
  if (!photo) {
    throw createError({ statusCode: 404, statusMessage: "Photo not found" });
  }
  logger$1.chrono.info("Serve image from key", key);
  return photo;
});

const ____key__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____key__get
}, Symbol.toStringTag, { value: 'Module' }));

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

const ____path_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____path_
}, Symbol.toStringTag, { value: 'Module' }));

const ____thumbnailUrl__get = eventHandler(async (event) => {
  var _a;
  const { storageProvider } = useStorageProvider(event);
  let url = getRouterParam(event, "thumbnailUrl");
  if (!url) {
    throw createError({ statusCode: 400, statusMessage: "Invalid thumbnailUrl" });
  }
  url = decodeURIComponent(url);
  if (((_a = storageProvider.config) == null ? void 0 : _a.provider) === "local" && url.startsWith("/storage/")) {
    const scheme = event.node.req.headers["x-forwarded-proto"] || "http";
    url = `${scheme}://${event.node.req.headers.host}${url}`;
  }
  const photo = await fetch(url).then((res) => {
    if (!res.ok) {
      throw createError({ statusCode: 404, statusMessage: "Photo not found" });
    }
    return res.arrayBuffer();
  }).then((buf) => Buffer.from(buf));
  const sharpInst = sharp(photo).rotate();
  return await sharpInst.jpeg({ quality: 85 }).toBuffer();
});

const ____thumbnailUrl__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ____thumbnailUrl__get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    if (typeof ssrError.data === "string") {
      try {
        ssrError.data = destr(ssrError.data);
      } catch {
      }
    }
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    const tagPosition = "head";
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  const result = [];
  for (const _chunk of chunks) {
    const chunk = _chunk?.trim();
    if (chunk) {
      result.push(chunk);
    }
  }
  return result;
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));

async function html(ctx) {
  const { options } = ctx;
  const { fonts } = useOgImageRuntimeConfig();
  if (!options.component) {
    throw createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Rendering an invalid component. Received options: ${JSON.stringify(options)}.`
    });
  }
  const island = await fetchIsland(ctx.e, ctx.options.component, typeof ctx.options.props !== "undefined" ? ctx.options.props : ctx.options);
  const head = createHeadCore();
  head.push(island.head);
  let defaultFontFamily = "sans-serif";
  const normalisedFonts = normaliseFontInput([...options.fonts || [], ...fonts]);
  const firstFont = normalisedFonts[0];
  if (firstFont)
    defaultFontFamily = firstFont.name.replaceAll("+", " ");
  await applyEmojis(ctx, island);
  let html2 = island.html;
  head.push({
    style: [
      {
        // default font is the first font family
        innerHTML: `body { font-family: '${defaultFontFamily}', sans-serif;  }`
      },
      {
        innerHTML: `body {
    transform: scale(${options.props?.scale || 1});
    transform-origin: top left;
    max-height: 100vh;
    position: relative;
    width: ${options.width}px;
    height: ${options.height}px;
    overflow: hidden;
    background-color: ${options.props?.colorMode === "dark" ? "#1b1b1b" : "#fff"};
}
div {
  display: flex;
}
div:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl) {
  display: flex;
  flex-direction: column;
}
div:not(:has(div, p, ul, ol, li, blockquote, pre, hr, table, dl)) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

svg[data-emoji] {
  display: inline-block;
}
`
      },
      ...fonts.map((font) => {
        return `
          @font-face {
            font-family: '${font.name.replaceAll("+", " ")}';
            font-style: normal;
            font-weight: ${font.weight};
            src: url('/__og-image__/font/${font.key}') format('truetype');
          }
          `;
      })
    ],
    meta: [
      {
        charset: "utf-8"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-wind.global.js"
      },
      {
        innerHTML: `
  window.__unocss = {
    theme: ${JSON.stringify(theme)},
    presets: [
      () => window.__unocss_runtime.presets.presetWind(),
    ],
  }
`
      },
      {
        src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"
      }
    ],
    link: [
      {
        // reset css to match svg output
        href: "https://cdn.jsdelivr.net/npm/gardevoir",
        rel: "stylesheet"
      }
    ]
  });
  html2 = html2.replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  const headChunk = await renderSSRHead(head);
  return `<!DOCTYPE html>
<html ${headChunk.htmlAttrs}>
<head>${headChunk.headTags}</head>
<body ${headChunk.bodyAttrs}>${headChunk.bodyTagsOpen}<div data-v-inspector-ignore="true" style="position: relative; display: flex; margin: 0 auto; width: ${options.width}px; height: ${options.height}px; overflow: hidden;">${html2}</div>${headChunk.bodyTags}</body>
</html>`;
}

async function useOgImageBufferCache(ctx, options) {
  let enabled = false;
  prefixStorage(useStorage(), withTrailingSlash(options.baseCacheKey || "/"));
  ctx.key;
  let cachedItem = false;
  {
    setHeader(ctx.e, "Cache-Control", "no-cache, no-store, must-revalidate");
    setHeader(ctx.e, "Pragma", "no-cache");
    setHeader(ctx.e, "Expires", "0");
  }
  return {
    enabled,
    cachedItem,
    async update(item) {
      return;
    }
  };
}

async function fontEventHandler(e) {
  const path = parseURL(e.path).pathname;
  const { fonts } = useOgImageRuntimeConfig();
  const key = path.split("/font/")[1];
  if (key && key.includes(":")) {
    const font2 = fonts.find((f) => f.key === key);
    if (font2?.key && await assets.hasItem(font2.key)) {
      let fontData = await assets.getItem(font2.key);
      if (fontData instanceof Uint8Array) {
        const decoder = new TextDecoder();
        fontData = decoder.decode(fontData);
      }
      if (key.includes(".oft")) {
        setResponseHeader(e, "Content-Type", "font/otf");
      } else if (key.includes(".woff2")) {
        setResponseHeader(e, "Content-Type", "font/woff2");
      } else if (key.includes(".ttf")) {
        setResponseHeader(e, "Content-Type", "font/ttf");
      }
      return Buffer.from(fontData, "base64");
    }
  }
  const [_name, _weight] = String(key?.split(".")[0]).split("/");
  if (!_name || !_weight)
    return "Provide a font name and weight";
  const name = String(_name[0]).toUpperCase() + _name.slice(1);
  const weight = Math.round(Number.parseInt(_weight) / 100) * 100;
  const config = useOgImageRuntimeConfig();
  const normalisedFonts = normaliseFontInput(config.fonts);
  let font;
  if (typeof getQuery$1(e).font === "string")
    font = JSON.parse(getQuery$1(e).font);
  if (!font) {
    font = normalisedFonts.find((font2) => {
      return font2.name.toLowerCase() === name.toLowerCase() && weight === Number(font2.weight);
    });
  }
  if (!font) {
    return createError({
      statusCode: 404,
      statusMessage: `[Nuxt OG Image] Font ${name}:${weight} not found`
    });
  }
  const css = await globalThis.$fetch(`https://fonts.googleapis.com/css2?family=${name}:wght@${weight}`, {
    headers: {
      // Make sure it returns TTF.
      "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
    }
  });
  if (!css) {
    return createError({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Invalid Google Font ${name}:${weight}`
    });
  }
  const ttfResource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (ttfResource?.[1])
    return proxyRequest(e, ttfResource[1], {});
  const woff2Resource = css.match(/src: url\((.+)\) format\('woff2'\)/);
  if (woff2Resource?.[1])
    return sendRedirect(e, woff2Resource[1]);
  return createError({
    statusCode: 500,
    statusMessage: `[Nuxt OG Image] Malformed Google Font CSS ${css}`
  });
}
async function imageEventHandler(e) {
  const ctx = await resolveContext(e);
  if (ctx instanceof H3Error)
    return ctx;
  const { isDebugJsonPayload, extension, options, renderer } = ctx;
  const { debug, baseCacheKey } = useOgImageRuntimeConfig();
  const compatibilityHints = [];
  if (isDebugJsonPayload) {
    const queryExtension = getQuery$1(e).extension || ctx.options.extension;
    if (["jpeg", "jpg"].includes(queryExtension) && options.renderer === "satori")
      compatibilityHints.push("Converting PNGs to JPEGs requires Sharp which only runs on Node based systems.");
    if (options.renderer === "chromium")
      compatibilityHints.push("Using Chromium to generate images is only supported in Node based environments. It's recommended to only use this if you're prerendering");
    setHeader(e, "Content-Type", "application/json");
    return {
      siteConfig: {
        url: e.context.siteConfig.get().url
      },
      compatibilityHints,
      cacheKey: ctx.key,
      options: ctx.options,
      ...options.renderer === "satori" ? await renderer.debug(ctx) : void 0
    };
  }
  switch (extension) {
    case "html":
      setHeader(e, "Content-Type", `text/html`);
      return html(ctx);
    case "svg":
      if (ctx.renderer.name !== "satori") {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/svg+xml`);
      return (await ctx.renderer.debug(ctx)).svg;
    case "png":
    case "jpeg":
    case "jpg":
      if (!renderer.supportedFormats.includes(extension)) {
        return createError({
          statusCode: 400,
          statusMessage: `[Nuxt OG Image] Generating ${extension}'s with ${renderer.name} is not supported.`
        });
      }
      setHeader(e, "Content-Type", `image/${extension === "jpg" ? "jpeg" : extension}`);
      break;
    default:
      return createError({
        statusCode: 400,
        statusMessage: `[Nuxt OG Image] Invalid request for og.${extension}.`
      });
  }
  const cacheApi = await useOgImageBufferCache(ctx, {
    cacheMaxAgeSeconds: ctx.options.cacheMaxAgeSeconds,
    baseCacheKey
  });
  if (typeof cacheApi === "undefined")
    return;
  if (cacheApi instanceof H3Error)
    return cacheApi;
  let image = cacheApi.cachedItem;
  if (!image) {
    image = await renderer.createImage(ctx);
    if (image instanceof H3Error)
      return image;
    if (!image) {
      return createError({
        statusCode: 500,
        statusMessage: `Failed to generate og.${extension}.`
      });
    }
    await cacheApi.update(image);
  }
  return image;
}

const font = defineEventHandler(fontEventHandler);

const font$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: font
}, Symbol.toStringTag, { value: 'Module' }));

const debug_json = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/json");
  const runtimeConfig = useOgImageRuntimeConfig();
  return {
    siteConfigUrl: useSiteConfig(e).url,
    componentNames,
    runtimeConfig,
    compatibility
  };
});

const debug_json$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: debug_json
}, Symbol.toStringTag, { value: 'Module' }));

const image = defineEventHandler(imageEventHandler);

const image$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: image
}, Symbol.toStringTag, { value: 'Module' }));

const node$3 = {
  initWasmPromise: Promise.resolve(),
  Resvg: Resvg
};

const node$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: node$3
}, Symbol.toStringTag, { value: 'Module' }));

const node$1 = {
  initWasmPromise: Promise.resolve(),
  satori: _satori
};

const node$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: node$1
}, Symbol.toStringTag, { value: 'Module' }));

const node = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sharp
}, Symbol.toStringTag, { value: 'Module' }));

const empty$1 = Object.freeze(
  Object.create(null, {
    __mock__: { get: () => true },
  }),
);

const empty = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: empty$1
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
