import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { z } from 'zod';
import { Hash } from '@adonisjs/hash';
import { Scrypt } from '@adonisjs/hash/drivers/scrypt';
import { LRUCache } from 'lru-cache';
import { createGenerator } from '@unocss/core';
import presetWind from '@unocss/preset-wind3';
import { parse as parse$2 } from 'devalue';
import { createConsola, consola } from 'consola';
import { createUnhead } from 'unhead';
import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import nodeCrypto, { createHash } from 'node:crypto';
import require$$0$2 from 'stream';
import require$$0$3 from 'events';
import require$$2 from 'http';
import require$$1 from 'crypto';
import require$$0$1 from 'buffer';
import require$$0 from 'zlib';
import require$$1$1 from 'https';
import require$$3 from 'net';
import require$$4 from 'tls';
import require$$7 from 'url';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import path$2, { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { toValue, isRef, hasInjectionContext, inject, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'vue';
import { defineI18nMiddleware } from '@intlify/h3';
import { tryQueryLocale, tryCookieLocale, tryHeaderLocale } from '@intlify/utils/h3';
import { createPathIndexLanguageParser, parseAcceptLanguage } from '@intlify/utils';
import { createRouterMatcher } from 'vue-router';
import fs from 'fs';
import path$1 from 'path';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sql, and, eq, desc, asc } from 'drizzle-orm';
import { sqliteTable, integer, text, real, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand, ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import bmp from '@vingle/bmp-js';
import heicConvert from 'heic-convert';
import sharp from 'sharp';
import { rgbaToThumbHash } from 'thumbhash';
import { mkdir, writeFile as writeFile$1, unlink as unlink$1 } from 'node:fs/promises';
import { exiftool } from 'exiftool-vendored';
import { noop } from 'es-toolkit';
import { fileURLToPath } from 'node:url';
import { createHead as createHead$1, propsToString } from 'unhead/server';
import { walkResolver } from 'unhead/utils';
import { createRenderer } from 'vue-bundle-renderer/runtime';
import { renderToString } from 'vue/server-renderer';
import { getIcons } from '@iconify/utils';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'ipx';

const subtle = nodeCrypto.webcrypto?.subtle || {};
const randomUUID = () => {
  return nodeCrypto.randomUUID();
};
const getRandomValues = (array) => {
  return nodeCrypto.webcrypto.getRandomValues(array);
};
const _crypto = {
  randomUUID,
  getRandomValues,
  subtle
};

const kNodeInspect = /* @__PURE__ */ Symbol.for(
  "nodejs.util.inspect.custom"
);
function toBufferLike(val) {
  if (val === void 0 || val === null) {
    return "";
  }
  const type = typeof val;
  if (type === "string") {
    return val;
  }
  if (type === "number" || type === "boolean" || type === "bigint") {
    return val.toString();
  }
  if (type === "function" || type === "symbol") {
    return "{}";
  }
  if (val instanceof Uint8Array || val instanceof ArrayBuffer) {
    return val;
  }
  if (isPlainObject$1(val)) {
    return JSON.stringify(val);
  }
  return val;
}
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

class Message {
  /** Access to the original [message event](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/message_event) if available. */
  event;
  /** Access to the Peer that emitted the message. */
  peer;
  /** Raw message data (can be of any type). */
  rawData;
  #id;
  #uint8Array;
  #arrayBuffer;
  #blob;
  #text;
  #json;
  constructor(rawData, peer, event) {
    this.rawData = rawData || "";
    this.peer = peer;
    this.event = event;
  }
  /**
   * Unique random [uuid v4](https://developer.mozilla.org/en-US/docs/Glossary/UUID) identifier for the message.
   */
  get id() {
    if (!this.#id) {
      this.#id = randomUUID();
    }
    return this.#id;
  }
  // --- data views ---
  /**
   * Get data as [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) value.
   *
   * If raw data is in any other format or string, it will be automatically converted and encoded.
   */
  uint8Array() {
    const _uint8Array = this.#uint8Array;
    if (_uint8Array) {
      return _uint8Array;
    }
    const rawData = this.rawData;
    if (rawData instanceof Uint8Array) {
      return this.#uint8Array = rawData;
    }
    if (rawData instanceof ArrayBuffer || rawData instanceof SharedArrayBuffer) {
      this.#arrayBuffer = rawData;
      return this.#uint8Array = new Uint8Array(rawData);
    }
    if (typeof rawData === "string") {
      this.#text = rawData;
      return this.#uint8Array = new TextEncoder().encode(this.#text);
    }
    if (Symbol.iterator in rawData) {
      return this.#uint8Array = new Uint8Array(rawData);
    }
    if (typeof rawData?.length === "number") {
      return this.#uint8Array = new Uint8Array(rawData);
    }
    if (rawData instanceof DataView) {
      return this.#uint8Array = new Uint8Array(
        rawData.buffer,
        rawData.byteOffset,
        rawData.byteLength
      );
    }
    throw new TypeError(
      `Unsupported message type: ${Object.prototype.toString.call(rawData)}`
    );
  }
  /**
   * Get data as [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) value.
   *
   * If raw data is in any other format or string, it will be automatically converted and encoded.
   */
  arrayBuffer() {
    const _arrayBuffer = this.#arrayBuffer;
    if (_arrayBuffer) {
      return _arrayBuffer;
    }
    const rawData = this.rawData;
    if (rawData instanceof ArrayBuffer || rawData instanceof SharedArrayBuffer) {
      return this.#arrayBuffer = rawData;
    }
    return this.#arrayBuffer = this.uint8Array().buffer;
  }
  /**
   * Get data as [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) value.
   *
   * If raw data is in any other format or string, it will be automatically converted and encoded. */
  blob() {
    const _blob = this.#blob;
    if (_blob) {
      return _blob;
    }
    const rawData = this.rawData;
    if (rawData instanceof Blob) {
      return this.#blob = rawData;
    }
    return this.#blob = new Blob([this.uint8Array()]);
  }
  /**
   * Get stringified text version of the message.
   *
   * If raw data is in any other format, it will be automatically converted and decoded.
   */
  text() {
    const _text = this.#text;
    if (_text) {
      return _text;
    }
    const rawData = this.rawData;
    if (typeof rawData === "string") {
      return this.#text = rawData;
    }
    return this.#text = new TextDecoder().decode(this.uint8Array());
  }
  /**
   * Get parsed version of the message text with [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
   */
  json() {
    const _json = this.#json;
    if (_json) {
      return _json;
    }
    return this.#json = JSON.parse(this.text());
  }
  /**
   * Message data (value varies based on `peer.websocket.binaryType`).
   */
  get data() {
    switch (this.peer?.websocket?.binaryType) {
      case "arraybuffer": {
        return this.arrayBuffer();
      }
      case "blob": {
        return this.blob();
      }
      case "nodebuffer": {
        return globalThis.Buffer ? Buffer.from(this.uint8Array()) : this.uint8Array();
      }
      case "uint8array": {
        return this.uint8Array();
      }
      case "text": {
        return this.text();
      }
      default: {
        return this.rawData;
      }
    }
  }
  // --- inspect ---
  toString() {
    return this.text();
  }
  [Symbol.toPrimitive]() {
    return this.text();
  }
  [kNodeInspect]() {
    return { data: this.rawData };
  }
}

class Peer {
  _internal;
  _topics;
  _id;
  #ws;
  constructor(internal) {
    this._topics = /* @__PURE__ */ new Set();
    this._internal = internal;
  }
  get context() {
    return this._internal.context ??= {};
  }
  /**
   * Unique random [uuid v4](https://developer.mozilla.org/en-US/docs/Glossary/UUID) identifier for the peer.
   */
  get id() {
    if (!this._id) {
      this._id = randomUUID();
    }
    return this._id;
  }
  /** IP address of the peer */
  get remoteAddress() {
    return void 0;
  }
  /** upgrade request */
  get request() {
    return this._internal.request;
  }
  /**
   * Get the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) instance.
   *
   * **Note:** crossws adds polyfill for the following properties if native values are not available:
   * - `protocol`: Extracted from the `sec-websocket-protocol` header.
   * - `extensions`: Extracted from the `sec-websocket-extensions` header.
   * - `url`: Extracted from the request URL (http -> ws).
   * */
  get websocket() {
    if (!this.#ws) {
      const _ws = this._internal.ws;
      const _request = this._internal.request;
      this.#ws = _request ? createWsProxy(_ws, _request) : _ws;
    }
    return this.#ws;
  }
  /** All connected peers to the server */
  get peers() {
    return this._internal.peers || /* @__PURE__ */ new Set();
  }
  /** All topics, this peer has been subscribed to. */
  get topics() {
    return this._topics;
  }
  /** Abruptly close the connection */
  terminate() {
    this.close();
  }
  /** Subscribe to a topic */
  subscribe(topic) {
    this._topics.add(topic);
  }
  /** Unsubscribe from a topic */
  unsubscribe(topic) {
    this._topics.delete(topic);
  }
  // --- inspect ---
  toString() {
    return this.id;
  }
  [Symbol.toPrimitive]() {
    return this.id;
  }
  [Symbol.toStringTag]() {
    return "WebSocket";
  }
  [kNodeInspect]() {
    return Object.fromEntries(
      [
        ["id", this.id],
        ["remoteAddress", this.remoteAddress],
        ["peers", this.peers],
        ["webSocket", this.websocket]
      ].filter((p) => p[1])
    );
  }
}
function createWsProxy(ws, request) {
  return new Proxy(ws, {
    get: (target, prop) => {
      const value = Reflect.get(target, prop);
      if (!value) {
        switch (prop) {
          case "protocol": {
            return request?.headers?.get("sec-websocket-protocol") || "";
          }
          case "extensions": {
            return request?.headers?.get("sec-websocket-extensions") || "";
          }
          case "url": {
            return request?.url?.replace(/^http/, "ws") || void 0;
          }
        }
      }
      return value;
    }
  });
}

class AdapterHookable {
  options;
  constructor(options) {
    this.options = options || {};
  }
  callHook(name, arg1, arg2) {
    const globalHook = this.options.hooks?.[name];
    const globalPromise = globalHook?.(arg1, arg2);
    const resolveHooksPromise = this.options.resolve?.(arg1);
    if (!resolveHooksPromise) {
      return globalPromise;
    }
    const resolvePromise = resolveHooksPromise instanceof Promise ? resolveHooksPromise.then((hooks) => hooks?.[name]) : resolveHooksPromise?.[name];
    return Promise.all([globalPromise, resolvePromise]).then(
      ([globalRes, hook]) => {
        const hookResPromise = hook?.(arg1, arg2);
        return hookResPromise instanceof Promise ? hookResPromise.then((hookRes) => hookRes || globalRes) : hookResPromise || globalRes;
      }
    );
  }
  async upgrade(request) {
    let context = request.context;
    if (!context) {
      context = {};
      Object.defineProperty(request, "context", {
        enumerable: true,
        value: context
      });
    }
    try {
      const res = await this.callHook(
        "upgrade",
        request
      );
      if (!res) {
        return { context };
      }
      if (res.ok === false) {
        return { context, endResponse: res };
      }
      if (res.headers) {
        return {
          context,
          upgradeHeaders: res.headers
        };
      }
    } catch (error) {
      const errResponse = error.response || error;
      if (errResponse instanceof Response) {
        return {
          context,
          endResponse: errResponse
        };
      }
      throw error;
    }
    return { context };
  }
}

function adapterUtils(peers) {
  return {
    peers,
    publish(topic, message, options) {
      let firstPeerWithTopic;
      for (const peer of peers) {
        if (peer.topics.has(topic)) {
          firstPeerWithTopic = peer;
          break;
        }
      }
      if (firstPeerWithTopic) {
        firstPeerWithTopic.send(message, options);
        firstPeerWithTopic.publish(topic, message, options);
      }
    }
  };
}

class WSError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "WSError";
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var bufferUtil = {exports: {}};

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	const BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
	const hasBlob = typeof Blob !== 'undefined';

	if (hasBlob) BINARY_TYPES.push('blob');

	constants = {
	  BINARY_TYPES,
	  EMPTY_BUFFER: Buffer.alloc(0),
	  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
	  hasBlob,
	  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
	  kListener: Symbol('kListener'),
	  kStatusCode: Symbol('status-code'),
	  kWebSocket: Symbol('websocket'),
	  NOOP: () => {}
	};
	return constants;
}

var hasRequiredBufferUtil;

function requireBufferUtil () {
	if (hasRequiredBufferUtil) return bufferUtil.exports;
	hasRequiredBufferUtil = 1;

	const { EMPTY_BUFFER } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];

	/**
	 * Merges an array of buffers into a new buffer.
	 *
	 * @param {Buffer[]} list The array of buffers to concat
	 * @param {Number} totalLength The total length of buffers in the list
	 * @return {Buffer} The resulting buffer
	 * @public
	 */
	function concat(list, totalLength) {
	  if (list.length === 0) return EMPTY_BUFFER;
	  if (list.length === 1) return list[0];

	  const target = Buffer.allocUnsafe(totalLength);
	  let offset = 0;

	  for (let i = 0; i < list.length; i++) {
	    const buf = list[i];
	    target.set(buf, offset);
	    offset += buf.length;
	  }

	  if (offset < totalLength) {
	    return new FastBuffer(target.buffer, target.byteOffset, offset);
	  }

	  return target;
	}

	/**
	 * Masks a buffer using the given mask.
	 *
	 * @param {Buffer} source The buffer to mask
	 * @param {Buffer} mask The mask to use
	 * @param {Buffer} output The buffer where to store the result
	 * @param {Number} offset The offset at which to start writing
	 * @param {Number} length The number of bytes to mask.
	 * @public
	 */
	function _mask(source, mask, output, offset, length) {
	  for (let i = 0; i < length; i++) {
	    output[offset + i] = source[i] ^ mask[i & 3];
	  }
	}

	/**
	 * Unmasks a buffer using the given mask.
	 *
	 * @param {Buffer} buffer The buffer to unmask
	 * @param {Buffer} mask The mask to use
	 * @public
	 */
	function _unmask(buffer, mask) {
	  for (let i = 0; i < buffer.length; i++) {
	    buffer[i] ^= mask[i & 3];
	  }
	}

	/**
	 * Converts a buffer to an `ArrayBuffer`.
	 *
	 * @param {Buffer} buf The buffer to convert
	 * @return {ArrayBuffer} Converted buffer
	 * @public
	 */
	function toArrayBuffer(buf) {
	  if (buf.length === buf.buffer.byteLength) {
	    return buf.buffer;
	  }

	  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
	}

	/**
	 * Converts `data` to a `Buffer`.
	 *
	 * @param {*} data The data to convert
	 * @return {Buffer} The buffer
	 * @throws {TypeError}
	 * @public
	 */
	function toBuffer(data) {
	  toBuffer.readOnly = true;

	  if (Buffer.isBuffer(data)) return data;

	  let buf;

	  if (data instanceof ArrayBuffer) {
	    buf = new FastBuffer(data);
	  } else if (ArrayBuffer.isView(data)) {
	    buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
	  } else {
	    buf = Buffer.from(data);
	    toBuffer.readOnly = false;
	  }

	  return buf;
	}

	bufferUtil.exports = {
	  concat,
	  mask: _mask,
	  toArrayBuffer,
	  toBuffer,
	  unmask: _unmask
	};

	/* istanbul ignore else  */
	if (!process.env.WS_NO_BUFFER_UTIL) {
	  try {
	    const bufferUtil$1 = require('bufferutil');

	    bufferUtil.exports.mask = function (source, mask, output, offset, length) {
	      if (length < 48) _mask(source, mask, output, offset, length);
	      else bufferUtil$1.mask(source, mask, output, offset, length);
	    };

	    bufferUtil.exports.unmask = function (buffer, mask) {
	      if (buffer.length < 32) _unmask(buffer, mask);
	      else bufferUtil$1.unmask(buffer, mask);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return bufferUtil.exports;
}

var limiter;
var hasRequiredLimiter;

function requireLimiter () {
	if (hasRequiredLimiter) return limiter;
	hasRequiredLimiter = 1;

	const kDone = Symbol('kDone');
	const kRun = Symbol('kRun');

	/**
	 * A very simple job queue with adjustable concurrency. Adapted from
	 * https://github.com/STRML/async-limiter
	 */
	class Limiter {
	  /**
	   * Creates a new `Limiter`.
	   *
	   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
	   *     to run concurrently
	   */
	  constructor(concurrency) {
	    this[kDone] = () => {
	      this.pending--;
	      this[kRun]();
	    };
	    this.concurrency = concurrency || Infinity;
	    this.jobs = [];
	    this.pending = 0;
	  }

	  /**
	   * Adds a job to the queue.
	   *
	   * @param {Function} job The job to run
	   * @public
	   */
	  add(job) {
	    this.jobs.push(job);
	    this[kRun]();
	  }

	  /**
	   * Removes a job from the queue and runs it if possible.
	   *
	   * @private
	   */
	  [kRun]() {
	    if (this.pending === this.concurrency) return;

	    if (this.jobs.length) {
	      const job = this.jobs.shift();

	      this.pending++;
	      job(this[kDone]);
	    }
	  }
	}

	limiter = Limiter;
	return limiter;
}

var permessageDeflate;
var hasRequiredPermessageDeflate;

function requirePermessageDeflate () {
	if (hasRequiredPermessageDeflate) return permessageDeflate;
	hasRequiredPermessageDeflate = 1;

	const zlib = require$$0;

	const bufferUtil = requireBufferUtil();
	const Limiter = requireLimiter();
	const { kStatusCode } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];
	const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
	const kPerMessageDeflate = Symbol('permessage-deflate');
	const kTotalLength = Symbol('total-length');
	const kCallback = Symbol('callback');
	const kBuffers = Symbol('buffers');
	const kError = Symbol('error');

	//
	// We limit zlib concurrency, which prevents severe memory fragmentation
	// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
	// and https://github.com/websockets/ws/issues/1202
	//
	// Intentionally global; it's the global thread pool that's an issue.
	//
	let zlibLimiter;

	/**
	 * permessage-deflate implementation.
	 */
	class PerMessageDeflate {
	  /**
	   * Creates a PerMessageDeflate instance.
	   *
	   * @param {Object} [options] Configuration options
	   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
	   *     for, or request, a custom client window size
	   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
	   *     acknowledge disabling of client context takeover
	   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
	   *     calls to zlib
	   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
	   *     use of a custom server window size
	   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
	   *     disabling of server context takeover
	   * @param {Number} [options.threshold=1024] Size (in bytes) below which
	   *     messages should not be compressed if context takeover is disabled
	   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
	   *     deflate
	   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
	   *     inflate
	   * @param {Boolean} [isServer=false] Create the instance in either server or
	   *     client mode
	   * @param {Number} [maxPayload=0] The maximum allowed message length
	   */
	  constructor(options, isServer, maxPayload) {
	    this._maxPayload = maxPayload | 0;
	    this._options = options || {};
	    this._threshold =
	      this._options.threshold !== undefined ? this._options.threshold : 1024;
	    this._isServer = !!isServer;
	    this._deflate = null;
	    this._inflate = null;

	    this.params = null;

	    if (!zlibLimiter) {
	      const concurrency =
	        this._options.concurrencyLimit !== undefined
	          ? this._options.concurrencyLimit
	          : 10;
	      zlibLimiter = new Limiter(concurrency);
	    }
	  }

	  /**
	   * @type {String}
	   */
	  static get extensionName() {
	    return 'permessage-deflate';
	  }

	  /**
	   * Create an extension negotiation offer.
	   *
	   * @return {Object} Extension parameters
	   * @public
	   */
	  offer() {
	    const params = {};

	    if (this._options.serverNoContextTakeover) {
	      params.server_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover) {
	      params.client_no_context_takeover = true;
	    }
	    if (this._options.serverMaxWindowBits) {
	      params.server_max_window_bits = this._options.serverMaxWindowBits;
	    }
	    if (this._options.clientMaxWindowBits) {
	      params.client_max_window_bits = this._options.clientMaxWindowBits;
	    } else if (this._options.clientMaxWindowBits == null) {
	      params.client_max_window_bits = true;
	    }

	    return params;
	  }

	  /**
	   * Accept an extension negotiation offer/response.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Object} Accepted configuration
	   * @public
	   */
	  accept(configurations) {
	    configurations = this.normalizeParams(configurations);

	    this.params = this._isServer
	      ? this.acceptAsServer(configurations)
	      : this.acceptAsClient(configurations);

	    return this.params;
	  }

	  /**
	   * Releases all resources used by the extension.
	   *
	   * @public
	   */
	  cleanup() {
	    if (this._inflate) {
	      this._inflate.close();
	      this._inflate = null;
	    }

	    if (this._deflate) {
	      const callback = this._deflate[kCallback];

	      this._deflate.close();
	      this._deflate = null;

	      if (callback) {
	        callback(
	          new Error(
	            'The deflate stream was closed while data was being processed'
	          )
	        );
	      }
	    }
	  }

	  /**
	   *  Accept an extension negotiation offer.
	   *
	   * @param {Array} offers The extension negotiation offers
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsServer(offers) {
	    const opts = this._options;
	    const accepted = offers.find((params) => {
	      if (
	        (opts.serverNoContextTakeover === false &&
	          params.server_no_context_takeover) ||
	        (params.server_max_window_bits &&
	          (opts.serverMaxWindowBits === false ||
	            (typeof opts.serverMaxWindowBits === 'number' &&
	              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
	        (typeof opts.clientMaxWindowBits === 'number' &&
	          !params.client_max_window_bits)
	      ) {
	        return false;
	      }

	      return true;
	    });

	    if (!accepted) {
	      throw new Error('None of the extension offers can be accepted');
	    }

	    if (opts.serverNoContextTakeover) {
	      accepted.server_no_context_takeover = true;
	    }
	    if (opts.clientNoContextTakeover) {
	      accepted.client_no_context_takeover = true;
	    }
	    if (typeof opts.serverMaxWindowBits === 'number') {
	      accepted.server_max_window_bits = opts.serverMaxWindowBits;
	    }
	    if (typeof opts.clientMaxWindowBits === 'number') {
	      accepted.client_max_window_bits = opts.clientMaxWindowBits;
	    } else if (
	      accepted.client_max_window_bits === true ||
	      opts.clientMaxWindowBits === false
	    ) {
	      delete accepted.client_max_window_bits;
	    }

	    return accepted;
	  }

	  /**
	   * Accept the extension negotiation response.
	   *
	   * @param {Array} response The extension negotiation response
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsClient(response) {
	    const params = response[0];

	    if (
	      this._options.clientNoContextTakeover === false &&
	      params.client_no_context_takeover
	    ) {
	      throw new Error('Unexpected parameter "client_no_context_takeover"');
	    }

	    if (!params.client_max_window_bits) {
	      if (typeof this._options.clientMaxWindowBits === 'number') {
	        params.client_max_window_bits = this._options.clientMaxWindowBits;
	      }
	    } else if (
	      this._options.clientMaxWindowBits === false ||
	      (typeof this._options.clientMaxWindowBits === 'number' &&
	        params.client_max_window_bits > this._options.clientMaxWindowBits)
	    ) {
	      throw new Error(
	        'Unexpected or invalid parameter "client_max_window_bits"'
	      );
	    }

	    return params;
	  }

	  /**
	   * Normalize parameters.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Array} The offers/response with normalized parameters
	   * @private
	   */
	  normalizeParams(configurations) {
	    configurations.forEach((params) => {
	      Object.keys(params).forEach((key) => {
	        let value = params[key];

	        if (value.length > 1) {
	          throw new Error(`Parameter "${key}" must have only a single value`);
	        }

	        value = value[0];

	        if (key === 'client_max_window_bits') {
	          if (value !== true) {
	            const num = +value;
	            if (!Number.isInteger(num) || num < 8 || num > 15) {
	              throw new TypeError(
	                `Invalid value for parameter "${key}": ${value}`
	              );
	            }
	            value = num;
	          } else if (!this._isServer) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else if (key === 'server_max_window_bits') {
	          const num = +value;
	          if (!Number.isInteger(num) || num < 8 || num > 15) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	          value = num;
	        } else if (
	          key === 'client_no_context_takeover' ||
	          key === 'server_no_context_takeover'
	        ) {
	          if (value !== true) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else {
	          throw new Error(`Unknown parameter "${key}"`);
	        }

	        params[key] = value;
	      });
	    });

	    return configurations;
	  }

	  /**
	   * Decompress data. Concurrency limited.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  decompress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._decompress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Compress data. Concurrency limited.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  compress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._compress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Decompress data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _decompress(data, fin, callback) {
	    const endpoint = this._isServer ? 'client' : 'server';

	    if (!this._inflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._inflate = zlib.createInflateRaw({
	        ...this._options.zlibInflateOptions,
	        windowBits
	      });
	      this._inflate[kPerMessageDeflate] = this;
	      this._inflate[kTotalLength] = 0;
	      this._inflate[kBuffers] = [];
	      this._inflate.on('error', inflateOnError);
	      this._inflate.on('data', inflateOnData);
	    }

	    this._inflate[kCallback] = callback;

	    this._inflate.write(data);
	    if (fin) this._inflate.write(TRAILER);

	    this._inflate.flush(() => {
	      const err = this._inflate[kError];

	      if (err) {
	        this._inflate.close();
	        this._inflate = null;
	        callback(err);
	        return;
	      }

	      const data = bufferUtil.concat(
	        this._inflate[kBuffers],
	        this._inflate[kTotalLength]
	      );

	      if (this._inflate._readableState.endEmitted) {
	        this._inflate.close();
	        this._inflate = null;
	      } else {
	        this._inflate[kTotalLength] = 0;
	        this._inflate[kBuffers] = [];

	        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	          this._inflate.reset();
	        }
	      }

	      callback(null, data);
	    });
	  }

	  /**
	   * Compress data.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _compress(data, fin, callback) {
	    const endpoint = this._isServer ? 'server' : 'client';

	    if (!this._deflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._deflate = zlib.createDeflateRaw({
	        ...this._options.zlibDeflateOptions,
	        windowBits
	      });

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      this._deflate.on('data', deflateOnData);
	    }

	    this._deflate[kCallback] = callback;

	    this._deflate.write(data);
	    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
	      if (!this._deflate) {
	        //
	        // The deflate stream was closed while data was being processed.
	        //
	        return;
	      }

	      let data = bufferUtil.concat(
	        this._deflate[kBuffers],
	        this._deflate[kTotalLength]
	      );

	      if (fin) {
	        data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
	      }

	      //
	      // Ensure that the callback will not be called again in
	      // `PerMessageDeflate#cleanup()`.
	      //
	      this._deflate[kCallback] = null;

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	        this._deflate.reset();
	      }

	      callback(null, data);
	    });
	  }
	}

	permessageDeflate = PerMessageDeflate;

	/**
	 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function deflateOnData(chunk) {
	  this[kBuffers].push(chunk);
	  this[kTotalLength] += chunk.length;
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function inflateOnData(chunk) {
	  this[kTotalLength] += chunk.length;

	  if (
	    this[kPerMessageDeflate]._maxPayload < 1 ||
	    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
	  ) {
	    this[kBuffers].push(chunk);
	    return;
	  }

	  this[kError] = new RangeError('Max payload size exceeded');
	  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
	  this[kError][kStatusCode] = 1009;
	  this.removeListener('data', inflateOnData);

	  //
	  // The choice to employ `zlib.reset()` over `zlib.close()` is dictated by the
	  // fact that in Node.js versions prior to 13.10.0, the callback for
	  // `zlib.flush()` is not called if `zlib.close()` is used. Utilizing
	  // `zlib.reset()` ensures that either the callback is invoked or an error is
	  // emitted.
	  //
	  this.reset();
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'error'` event.
	 *
	 * @param {Error} err The emitted error
	 * @private
	 */
	function inflateOnError(err) {
	  //
	  // There is no need to call `Zlib#close()` as the handle is automatically
	  // closed when an error is emitted.
	  //
	  this[kPerMessageDeflate]._inflate = null;

	  if (this[kError]) {
	    this[kCallback](this[kError]);
	    return;
	  }

	  err[kStatusCode] = 1007;
	  this[kCallback](err);
	}
	return permessageDeflate;
}

var validation = {exports: {}};

var hasRequiredValidation;

function requireValidation () {
	if (hasRequiredValidation) return validation.exports;
	hasRequiredValidation = 1;

	const { isUtf8 } = require$$0$1;

	const { hasBlob } = requireConstants();

	//
	// Allowed token characters:
	//
	// '!', '#', '$', '%', '&', ''', '*', '+', '-',
	// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
	//
	// tokenChars[32] === 0 // ' '
	// tokenChars[33] === 1 // '!'
	// tokenChars[34] === 0 // '"'
	// ...
	//
	// prettier-ignore
	const tokenChars = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
	  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
	];

	/**
	 * Checks if a status code is allowed in a close frame.
	 *
	 * @param {Number} code The status code
	 * @return {Boolean} `true` if the status code is valid, else `false`
	 * @public
	 */
	function isValidStatusCode(code) {
	  return (
	    (code >= 1000 &&
	      code <= 1014 &&
	      code !== 1004 &&
	      code !== 1005 &&
	      code !== 1006) ||
	    (code >= 3000 && code <= 4999)
	  );
	}

	/**
	 * Checks if a given buffer contains only correct UTF-8.
	 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
	 * Markus Kuhn.
	 *
	 * @param {Buffer} buf The buffer to check
	 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
	 * @public
	 */
	function _isValidUTF8(buf) {
	  const len = buf.length;
	  let i = 0;

	  while (i < len) {
	    if ((buf[i] & 0x80) === 0) {
	      // 0xxxxxxx
	      i++;
	    } else if ((buf[i] & 0xe0) === 0xc0) {
	      // 110xxxxx 10xxxxxx
	      if (
	        i + 1 === len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i] & 0xfe) === 0xc0 // Overlong
	      ) {
	        return false;
	      }

	      i += 2;
	    } else if ((buf[i] & 0xf0) === 0xe0) {
	      // 1110xxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 2 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
	        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
	      ) {
	        return false;
	      }

	      i += 3;
	    } else if ((buf[i] & 0xf8) === 0xf0) {
	      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 3 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i + 3] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
	        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
	        buf[i] > 0xf4 // > U+10FFFF
	      ) {
	        return false;
	      }

	      i += 4;
	    } else {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Determines whether a value is a `Blob`.
	 *
	 * @param {*} value The value to be tested
	 * @return {Boolean} `true` if `value` is a `Blob`, else `false`
	 * @private
	 */
	function isBlob(value) {
	  return (
	    hasBlob &&
	    typeof value === 'object' &&
	    typeof value.arrayBuffer === 'function' &&
	    typeof value.type === 'string' &&
	    typeof value.stream === 'function' &&
	    (value[Symbol.toStringTag] === 'Blob' ||
	      value[Symbol.toStringTag] === 'File')
	  );
	}

	validation.exports = {
	  isBlob,
	  isValidStatusCode,
	  isValidUTF8: _isValidUTF8,
	  tokenChars
	};

	if (isUtf8) {
	  validation.exports.isValidUTF8 = function (buf) {
	    return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
	  };
	} /* istanbul ignore else  */ else if (!process.env.WS_NO_UTF_8_VALIDATE) {
	  try {
	    const isValidUTF8 = require('utf-8-validate');

	    validation.exports.isValidUTF8 = function (buf) {
	      return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return validation.exports;
}

var receiver;
var hasRequiredReceiver;

function requireReceiver () {
	if (hasRequiredReceiver) return receiver;
	hasRequiredReceiver = 1;

	const { Writable } = require$$0$2;

	const PerMessageDeflate = requirePermessageDeflate();
	const {
	  BINARY_TYPES,
	  EMPTY_BUFFER,
	  kStatusCode,
	  kWebSocket
	} = requireConstants();
	const { concat, toArrayBuffer, unmask } = requireBufferUtil();
	const { isValidStatusCode, isValidUTF8 } = requireValidation();

	const FastBuffer = Buffer[Symbol.species];

	const GET_INFO = 0;
	const GET_PAYLOAD_LENGTH_16 = 1;
	const GET_PAYLOAD_LENGTH_64 = 2;
	const GET_MASK = 3;
	const GET_DATA = 4;
	const INFLATING = 5;
	const DEFER_EVENT = 6;

	/**
	 * HyBi Receiver implementation.
	 *
	 * @extends Writable
	 */
	class Receiver extends Writable {
	  /**
	   * Creates a Receiver instance.
	   *
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {String} [options.binaryType=nodebuffer] The type for binary data
	   * @param {Object} [options.extensions] An object containing the negotiated
	   *     extensions
	   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
	   *     client or server mode
	   * @param {Number} [options.maxPayload=0] The maximum allowed message length
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   */
	  constructor(options = {}) {
	    super();

	    this._allowSynchronousEvents =
	      options.allowSynchronousEvents !== undefined
	        ? options.allowSynchronousEvents
	        : true;
	    this._binaryType = options.binaryType || BINARY_TYPES[0];
	    this._extensions = options.extensions || {};
	    this._isServer = !!options.isServer;
	    this._maxPayload = options.maxPayload | 0;
	    this._skipUTF8Validation = !!options.skipUTF8Validation;
	    this[kWebSocket] = undefined;

	    this._bufferedBytes = 0;
	    this._buffers = [];

	    this._compressed = false;
	    this._payloadLength = 0;
	    this._mask = undefined;
	    this._fragmented = 0;
	    this._masked = false;
	    this._fin = false;
	    this._opcode = 0;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragments = [];

	    this._errored = false;
	    this._loop = false;
	    this._state = GET_INFO;
	  }

	  /**
	   * Implements `Writable.prototype._write()`.
	   *
	   * @param {Buffer} chunk The chunk of data to write
	   * @param {String} encoding The character encoding of `chunk`
	   * @param {Function} cb Callback
	   * @private
	   */
	  _write(chunk, encoding, cb) {
	    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

	    this._bufferedBytes += chunk.length;
	    this._buffers.push(chunk);
	    this.startLoop(cb);
	  }

	  /**
	   * Consumes `n` bytes from the buffered data.
	   *
	   * @param {Number} n The number of bytes to consume
	   * @return {Buffer} The consumed bytes
	   * @private
	   */
	  consume(n) {
	    this._bufferedBytes -= n;

	    if (n === this._buffers[0].length) return this._buffers.shift();

	    if (n < this._buffers[0].length) {
	      const buf = this._buffers[0];
	      this._buffers[0] = new FastBuffer(
	        buf.buffer,
	        buf.byteOffset + n,
	        buf.length - n
	      );

	      return new FastBuffer(buf.buffer, buf.byteOffset, n);
	    }

	    const dst = Buffer.allocUnsafe(n);

	    do {
	      const buf = this._buffers[0];
	      const offset = dst.length - n;

	      if (n >= buf.length) {
	        dst.set(this._buffers.shift(), offset);
	      } else {
	        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
	        this._buffers[0] = new FastBuffer(
	          buf.buffer,
	          buf.byteOffset + n,
	          buf.length - n
	        );
	      }

	      n -= buf.length;
	    } while (n > 0);

	    return dst;
	  }

	  /**
	   * Starts the parsing loop.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  startLoop(cb) {
	    this._loop = true;

	    do {
	      switch (this._state) {
	        case GET_INFO:
	          this.getInfo(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_16:
	          this.getPayloadLength16(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_64:
	          this.getPayloadLength64(cb);
	          break;
	        case GET_MASK:
	          this.getMask();
	          break;
	        case GET_DATA:
	          this.getData(cb);
	          break;
	        case INFLATING:
	        case DEFER_EVENT:
	          this._loop = false;
	          return;
	      }
	    } while (this._loop);

	    if (!this._errored) cb();
	  }

	  /**
	   * Reads the first two bytes of a frame.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getInfo(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(2);

	    if ((buf[0] & 0x30) !== 0x00) {
	      const error = this.createError(
	        RangeError,
	        'RSV2 and RSV3 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_2_3'
	      );

	      cb(error);
	      return;
	    }

	    const compressed = (buf[0] & 0x40) === 0x40;

	    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
	      const error = this.createError(
	        RangeError,
	        'RSV1 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_1'
	      );

	      cb(error);
	      return;
	    }

	    this._fin = (buf[0] & 0x80) === 0x80;
	    this._opcode = buf[0] & 0x0f;
	    this._payloadLength = buf[1] & 0x7f;

	    if (this._opcode === 0x00) {
	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (!this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          'invalid opcode 0',
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._opcode = this._fragmented;
	    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
	      if (this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          `invalid opcode ${this._opcode}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._compressed = compressed;
	    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
	      if (!this._fin) {
	        const error = this.createError(
	          RangeError,
	          'FIN must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_FIN'
	        );

	        cb(error);
	        return;
	      }

	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (
	        this._payloadLength > 0x7d ||
	        (this._opcode === 0x08 && this._payloadLength === 1)
	      ) {
	        const error = this.createError(
	          RangeError,
	          `invalid payload length ${this._payloadLength}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    } else {
	      const error = this.createError(
	        RangeError,
	        `invalid opcode ${this._opcode}`,
	        true,
	        1002,
	        'WS_ERR_INVALID_OPCODE'
	      );

	      cb(error);
	      return;
	    }

	    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
	    this._masked = (buf[1] & 0x80) === 0x80;

	    if (this._isServer) {
	      if (!this._masked) {
	        const error = this.createError(
	          RangeError,
	          'MASK must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_MASK'
	        );

	        cb(error);
	        return;
	      }
	    } else if (this._masked) {
	      const error = this.createError(
	        RangeError,
	        'MASK must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_MASK'
	      );

	      cb(error);
	      return;
	    }

	    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
	    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
	    else this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+16).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength16(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    this._payloadLength = this.consume(2).readUInt16BE(0);
	    this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+64).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength64(cb) {
	    if (this._bufferedBytes < 8) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(8);
	    const num = buf.readUInt32BE(0);

	    //
	    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
	    // if payload length is greater than this number.
	    //
	    if (num > Math.pow(2, 53 - 32) - 1) {
	      const error = this.createError(
	        RangeError,
	        'Unsupported WebSocket frame: payload length > 2^53 - 1',
	        false,
	        1009,
	        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
	      );

	      cb(error);
	      return;
	    }

	    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
	    this.haveLength(cb);
	  }

	  /**
	   * Payload length has been read.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  haveLength(cb) {
	    if (this._payloadLength && this._opcode < 0x08) {
	      this._totalPayloadLength += this._payloadLength;
	      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
	        const error = this.createError(
	          RangeError,
	          'Max payload size exceeded',
	          false,
	          1009,
	          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    }

	    if (this._masked) this._state = GET_MASK;
	    else this._state = GET_DATA;
	  }

	  /**
	   * Reads mask bytes.
	   *
	   * @private
	   */
	  getMask() {
	    if (this._bufferedBytes < 4) {
	      this._loop = false;
	      return;
	    }

	    this._mask = this.consume(4);
	    this._state = GET_DATA;
	  }

	  /**
	   * Reads data bytes.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getData(cb) {
	    let data = EMPTY_BUFFER;

	    if (this._payloadLength) {
	      if (this._bufferedBytes < this._payloadLength) {
	        this._loop = false;
	        return;
	      }

	      data = this.consume(this._payloadLength);

	      if (
	        this._masked &&
	        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
	      ) {
	        unmask(data, this._mask);
	      }
	    }

	    if (this._opcode > 0x07) {
	      this.controlMessage(data, cb);
	      return;
	    }

	    if (this._compressed) {
	      this._state = INFLATING;
	      this.decompress(data, cb);
	      return;
	    }

	    if (data.length) {
	      //
	      // This message is not compressed so its length is the sum of the payload
	      // length of all fragments.
	      //
	      this._messageLength = this._totalPayloadLength;
	      this._fragments.push(data);
	    }

	    this.dataMessage(cb);
	  }

	  /**
	   * Decompresses data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Function} cb Callback
	   * @private
	   */
	  decompress(data, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
	      if (err) return cb(err);

	      if (buf.length) {
	        this._messageLength += buf.length;
	        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
	          const error = this.createError(
	            RangeError,
	            'Max payload size exceeded',
	            false,
	            1009,
	            'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	          );

	          cb(error);
	          return;
	        }

	        this._fragments.push(buf);
	      }

	      this.dataMessage(cb);
	      if (this._state === GET_INFO) this.startLoop(cb);
	    });
	  }

	  /**
	   * Handles a data message.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  dataMessage(cb) {
	    if (!this._fin) {
	      this._state = GET_INFO;
	      return;
	    }

	    const messageLength = this._messageLength;
	    const fragments = this._fragments;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragmented = 0;
	    this._fragments = [];

	    if (this._opcode === 2) {
	      let data;

	      if (this._binaryType === 'nodebuffer') {
	        data = concat(fragments, messageLength);
	      } else if (this._binaryType === 'arraybuffer') {
	        data = toArrayBuffer(concat(fragments, messageLength));
	      } else if (this._binaryType === 'blob') {
	        data = new Blob(fragments);
	      } else {
	        data = fragments;
	      }

	      if (this._allowSynchronousEvents) {
	        this.emit('message', data, true);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', data, true);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    } else {
	      const buf = concat(fragments, messageLength);

	      if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	        const error = this.createError(
	          Error,
	          'invalid UTF-8 sequence',
	          true,
	          1007,
	          'WS_ERR_INVALID_UTF8'
	        );

	        cb(error);
	        return;
	      }

	      if (this._state === INFLATING || this._allowSynchronousEvents) {
	        this.emit('message', buf, false);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', buf, false);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    }
	  }

	  /**
	   * Handles a control message.
	   *
	   * @param {Buffer} data Data to handle
	   * @return {(Error|RangeError|undefined)} A possible error
	   * @private
	   */
	  controlMessage(data, cb) {
	    if (this._opcode === 0x08) {
	      if (data.length === 0) {
	        this._loop = false;
	        this.emit('conclude', 1005, EMPTY_BUFFER);
	        this.end();
	      } else {
	        const code = data.readUInt16BE(0);

	        if (!isValidStatusCode(code)) {
	          const error = this.createError(
	            RangeError,
	            `invalid status code ${code}`,
	            true,
	            1002,
	            'WS_ERR_INVALID_CLOSE_CODE'
	          );

	          cb(error);
	          return;
	        }

	        const buf = new FastBuffer(
	          data.buffer,
	          data.byteOffset + 2,
	          data.length - 2
	        );

	        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	          const error = this.createError(
	            Error,
	            'invalid UTF-8 sequence',
	            true,
	            1007,
	            'WS_ERR_INVALID_UTF8'
	          );

	          cb(error);
	          return;
	        }

	        this._loop = false;
	        this.emit('conclude', code, buf);
	        this.end();
	      }

	      this._state = GET_INFO;
	      return;
	    }

	    if (this._allowSynchronousEvents) {
	      this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	      this._state = GET_INFO;
	    } else {
	      this._state = DEFER_EVENT;
	      setImmediate(() => {
	        this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	        this._state = GET_INFO;
	        this.startLoop(cb);
	      });
	    }
	  }

	  /**
	   * Builds an error object.
	   *
	   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
	   * @param {String} message The error message
	   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
	   *     `message`
	   * @param {Number} statusCode The status code
	   * @param {String} errorCode The exposed error code
	   * @return {(Error|RangeError)} The error
	   * @private
	   */
	  createError(ErrorCtor, message, prefix, statusCode, errorCode) {
	    this._loop = false;
	    this._errored = true;

	    const err = new ErrorCtor(
	      prefix ? `Invalid WebSocket frame: ${message}` : message
	    );

	    Error.captureStackTrace(err, this.createError);
	    err.code = errorCode;
	    err[kStatusCode] = statusCode;
	    return err;
	  }
	}

	receiver = Receiver;
	return receiver;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */

var sender;
var hasRequiredSender;

function requireSender () {
	if (hasRequiredSender) return sender;
	hasRequiredSender = 1;

	const { Duplex } = require$$0$2;
	const { randomFillSync } = require$$1;

	const PerMessageDeflate = requirePermessageDeflate();
	const { EMPTY_BUFFER, kWebSocket, NOOP } = requireConstants();
	const { isBlob, isValidStatusCode } = requireValidation();
	const { mask: applyMask, toBuffer } = requireBufferUtil();

	const kByteLength = Symbol('kByteLength');
	const maskBuffer = Buffer.alloc(4);
	const RANDOM_POOL_SIZE = 8 * 1024;
	let randomPool;
	let randomPoolPointer = RANDOM_POOL_SIZE;

	const DEFAULT = 0;
	const DEFLATING = 1;
	const GET_BLOB_DATA = 2;

	/**
	 * HyBi Sender implementation.
	 */
	class Sender {
	  /**
	   * Creates a Sender instance.
	   *
	   * @param {Duplex} socket The connection socket
	   * @param {Object} [extensions] An object containing the negotiated extensions
	   * @param {Function} [generateMask] The function used to generate the masking
	   *     key
	   */
	  constructor(socket, extensions, generateMask) {
	    this._extensions = extensions || {};

	    if (generateMask) {
	      this._generateMask = generateMask;
	      this._maskBuffer = Buffer.alloc(4);
	    }

	    this._socket = socket;

	    this._firstFragment = true;
	    this._compress = false;

	    this._bufferedBytes = 0;
	    this._queue = [];
	    this._state = DEFAULT;
	    this.onerror = NOOP;
	    this[kWebSocket] = undefined;
	  }

	  /**
	   * Frames a piece of data according to the HyBi WebSocket protocol.
	   *
	   * @param {(Buffer|String)} data The data to frame
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @return {(Buffer|String)[]} The framed data
	   * @public
	   */
	  static frame(data, options) {
	    let mask;
	    let merge = false;
	    let offset = 2;
	    let skipMasking = false;

	    if (options.mask) {
	      mask = options.maskBuffer || maskBuffer;

	      if (options.generateMask) {
	        options.generateMask(mask);
	      } else {
	        if (randomPoolPointer === RANDOM_POOL_SIZE) {
	          /* istanbul ignore else  */
	          if (randomPool === undefined) {
	            //
	            // This is lazily initialized because server-sent frames must not
	            // be masked so it may never be used.
	            //
	            randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
	          }

	          randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
	          randomPoolPointer = 0;
	        }

	        mask[0] = randomPool[randomPoolPointer++];
	        mask[1] = randomPool[randomPoolPointer++];
	        mask[2] = randomPool[randomPoolPointer++];
	        mask[3] = randomPool[randomPoolPointer++];
	      }

	      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
	      offset = 6;
	    }

	    let dataLength;

	    if (typeof data === 'string') {
	      if (
	        (!options.mask || skipMasking) &&
	        options[kByteLength] !== undefined
	      ) {
	        dataLength = options[kByteLength];
	      } else {
	        data = Buffer.from(data);
	        dataLength = data.length;
	      }
	    } else {
	      dataLength = data.length;
	      merge = options.mask && options.readOnly && !skipMasking;
	    }

	    let payloadLength = dataLength;

	    if (dataLength >= 65536) {
	      offset += 8;
	      payloadLength = 127;
	    } else if (dataLength > 125) {
	      offset += 2;
	      payloadLength = 126;
	    }

	    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

	    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
	    if (options.rsv1) target[0] |= 0x40;

	    target[1] = payloadLength;

	    if (payloadLength === 126) {
	      target.writeUInt16BE(dataLength, 2);
	    } else if (payloadLength === 127) {
	      target[2] = target[3] = 0;
	      target.writeUIntBE(dataLength, 4, 6);
	    }

	    if (!options.mask) return [target, data];

	    target[1] |= 0x80;
	    target[offset - 4] = mask[0];
	    target[offset - 3] = mask[1];
	    target[offset - 2] = mask[2];
	    target[offset - 1] = mask[3];

	    if (skipMasking) return [target, data];

	    if (merge) {
	      applyMask(data, mask, target, offset, dataLength);
	      return [target];
	    }

	    applyMask(data, mask, data, 0, dataLength);
	    return [target, data];
	  }

	  /**
	   * Sends a close message to the other peer.
	   *
	   * @param {Number} [code] The status code component of the body
	   * @param {(String|Buffer)} [data] The message component of the body
	   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  close(code, data, mask, cb) {
	    let buf;

	    if (code === undefined) {
	      buf = EMPTY_BUFFER;
	    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
	      throw new TypeError('First argument must be a valid error code number');
	    } else if (data === undefined || !data.length) {
	      buf = Buffer.allocUnsafe(2);
	      buf.writeUInt16BE(code, 0);
	    } else {
	      const length = Buffer.byteLength(data);

	      if (length > 123) {
	        throw new RangeError('The message must not be greater than 123 bytes');
	      }

	      buf = Buffer.allocUnsafe(2 + length);
	      buf.writeUInt16BE(code, 0);

	      if (typeof data === 'string') {
	        buf.write(data, 2);
	      } else {
	        buf.set(data, 2);
	      }
	    }

	    const options = {
	      [kByteLength]: buf.length,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x08,
	      readOnly: false,
	      rsv1: false
	    };

	    if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, buf, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(buf, options), cb);
	    }
	  }

	  /**
	   * Sends a ping message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  ping(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x09,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a pong message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  pong(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x0a,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a data message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Object} options Options object
	   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
	   *     or text
	   * @param {Boolean} [options.compress=false] Specifies whether or not to
	   *     compress `data`
	   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  send(data, options, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
	    let opcode = options.binary ? 2 : 1;
	    let rsv1 = options.compress;

	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (this._firstFragment) {
	      this._firstFragment = false;
	      if (
	        rsv1 &&
	        perMessageDeflate &&
	        perMessageDeflate.params[
	          perMessageDeflate._isServer
	            ? 'server_no_context_takeover'
	            : 'client_no_context_takeover'
	        ]
	      ) {
	        rsv1 = byteLength >= perMessageDeflate._threshold;
	      }
	      this._compress = rsv1;
	    } else {
	      rsv1 = false;
	      opcode = 0;
	    }

	    if (options.fin) this._firstFragment = true;

	    const opts = {
	      [kByteLength]: byteLength,
	      fin: options.fin,
	      generateMask: this._generateMask,
	      mask: options.mask,
	      maskBuffer: this._maskBuffer,
	      opcode,
	      readOnly,
	      rsv1
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
	      } else {
	        this.getBlobData(data, this._compress, opts, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, this._compress, opts, cb]);
	    } else {
	      this.dispatch(data, this._compress, opts, cb);
	    }
	  }

	  /**
	   * Gets the contents of a blob as binary data.
	   *
	   * @param {Blob} blob The blob
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     the data
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  getBlobData(blob, compress, options, cb) {
	    this._bufferedBytes += options[kByteLength];
	    this._state = GET_BLOB_DATA;

	    blob
	      .arrayBuffer()
	      .then((arrayBuffer) => {
	        if (this._socket.destroyed) {
	          const err = new Error(
	            'The socket was closed while the blob was being read'
	          );

	          //
	          // `callCallbacks` is called in the next tick to ensure that errors
	          // that might be thrown in the callbacks behave like errors thrown
	          // outside the promise chain.
	          //
	          process.nextTick(callCallbacks, this, err, cb);
	          return;
	        }

	        this._bufferedBytes -= options[kByteLength];
	        const data = toBuffer(arrayBuffer);

	        if (!compress) {
	          this._state = DEFAULT;
	          this.sendFrame(Sender.frame(data, options), cb);
	          this.dequeue();
	        } else {
	          this.dispatch(data, compress, options, cb);
	        }
	      })
	      .catch((err) => {
	        //
	        // `onError` is called in the next tick for the same reason that
	        // `callCallbacks` above is.
	        //
	        process.nextTick(onError, this, err, cb);
	      });
	  }

	  /**
	   * Dispatches a message.
	   *
	   * @param {(Buffer|String)} data The message to send
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     `data`
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  dispatch(data, compress, options, cb) {
	    if (!compress) {
	      this.sendFrame(Sender.frame(data, options), cb);
	      return;
	    }

	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    this._bufferedBytes += options[kByteLength];
	    this._state = DEFLATING;
	    perMessageDeflate.compress(data, options.fin, (_, buf) => {
	      if (this._socket.destroyed) {
	        const err = new Error(
	          'The socket was closed while data was being compressed'
	        );

	        callCallbacks(this, err, cb);
	        return;
	      }

	      this._bufferedBytes -= options[kByteLength];
	      this._state = DEFAULT;
	      options.readOnly = false;
	      this.sendFrame(Sender.frame(buf, options), cb);
	      this.dequeue();
	    });
	  }

	  /**
	   * Executes queued send operations.
	   *
	   * @private
	   */
	  dequeue() {
	    while (this._state === DEFAULT && this._queue.length) {
	      const params = this._queue.shift();

	      this._bufferedBytes -= params[3][kByteLength];
	      Reflect.apply(params[0], this, params.slice(1));
	    }
	  }

	  /**
	   * Enqueues a send operation.
	   *
	   * @param {Array} params Send operation parameters.
	   * @private
	   */
	  enqueue(params) {
	    this._bufferedBytes += params[3][kByteLength];
	    this._queue.push(params);
	  }

	  /**
	   * Sends a frame.
	   *
	   * @param {(Buffer | String)[]} list The frame to send
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  sendFrame(list, cb) {
	    if (list.length === 2) {
	      this._socket.cork();
	      this._socket.write(list[0]);
	      this._socket.write(list[1], cb);
	      this._socket.uncork();
	    } else {
	      this._socket.write(list[0], cb);
	    }
	  }
	}

	sender = Sender;

	/**
	 * Calls queued callbacks with an error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error to call the callbacks with
	 * @param {Function} [cb] The first callback
	 * @private
	 */
	function callCallbacks(sender, err, cb) {
	  if (typeof cb === 'function') cb(err);

	  for (let i = 0; i < sender._queue.length; i++) {
	    const params = sender._queue[i];
	    const callback = params[params.length - 1];

	    if (typeof callback === 'function') callback(err);
	  }
	}

	/**
	 * Handles a `Sender` error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error
	 * @param {Function} [cb] The first pending callback
	 * @private
	 */
	function onError(sender, err, cb) {
	  callCallbacks(sender, err, cb);
	  sender.onerror(err);
	}
	return sender;
}

var eventTarget;
var hasRequiredEventTarget;

function requireEventTarget () {
	if (hasRequiredEventTarget) return eventTarget;
	hasRequiredEventTarget = 1;

	const { kForOnEventAttribute, kListener } = requireConstants();

	const kCode = Symbol('kCode');
	const kData = Symbol('kData');
	const kError = Symbol('kError');
	const kMessage = Symbol('kMessage');
	const kReason = Symbol('kReason');
	const kTarget = Symbol('kTarget');
	const kType = Symbol('kType');
	const kWasClean = Symbol('kWasClean');

	/**
	 * Class representing an event.
	 */
	class Event {
	  /**
	   * Create a new `Event`.
	   *
	   * @param {String} type The name of the event
	   * @throws {TypeError} If the `type` argument is not specified
	   */
	  constructor(type) {
	    this[kTarget] = null;
	    this[kType] = type;
	  }

	  /**
	   * @type {*}
	   */
	  get target() {
	    return this[kTarget];
	  }

	  /**
	   * @type {String}
	   */
	  get type() {
	    return this[kType];
	  }
	}

	Object.defineProperty(Event.prototype, 'target', { enumerable: true });
	Object.defineProperty(Event.prototype, 'type', { enumerable: true });

	/**
	 * Class representing a close event.
	 *
	 * @extends Event
	 */
	class CloseEvent extends Event {
	  /**
	   * Create a new `CloseEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {Number} [options.code=0] The status code explaining why the
	   *     connection was closed
	   * @param {String} [options.reason=''] A human-readable string explaining why
	   *     the connection was closed
	   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
	   *     connection was cleanly closed
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kCode] = options.code === undefined ? 0 : options.code;
	    this[kReason] = options.reason === undefined ? '' : options.reason;
	    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
	  }

	  /**
	   * @type {Number}
	   */
	  get code() {
	    return this[kCode];
	  }

	  /**
	   * @type {String}
	   */
	  get reason() {
	    return this[kReason];
	  }

	  /**
	   * @type {Boolean}
	   */
	  get wasClean() {
	    return this[kWasClean];
	  }
	}

	Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

	/**
	 * Class representing an error event.
	 *
	 * @extends Event
	 */
	class ErrorEvent extends Event {
	  /**
	   * Create a new `ErrorEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.error=null] The error that generated this event
	   * @param {String} [options.message=''] The error message
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kError] = options.error === undefined ? null : options.error;
	    this[kMessage] = options.message === undefined ? '' : options.message;
	  }

	  /**
	   * @type {*}
	   */
	  get error() {
	    return this[kError];
	  }

	  /**
	   * @type {String}
	   */
	  get message() {
	    return this[kMessage];
	  }
	}

	Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
	Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

	/**
	 * Class representing a message event.
	 *
	 * @extends Event
	 */
	class MessageEvent extends Event {
	  /**
	   * Create a new `MessageEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.data=null] The message content
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kData] = options.data === undefined ? null : options.data;
	  }

	  /**
	   * @type {*}
	   */
	  get data() {
	    return this[kData];
	  }
	}

	Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

	/**
	 * This provides methods for emulating the `EventTarget` interface. It's not
	 * meant to be used directly.
	 *
	 * @mixin
	 */
	const EventTarget = {
	  /**
	   * Register an event listener.
	   *
	   * @param {String} type A string representing the event type to listen for
	   * @param {(Function|Object)} handler The listener to add
	   * @param {Object} [options] An options object specifies characteristics about
	   *     the event listener
	   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
	   *     listener should be invoked at most once after being added. If `true`,
	   *     the listener would be automatically removed when invoked.
	   * @public
	   */
	  addEventListener(type, handler, options = {}) {
	    for (const listener of this.listeners(type)) {
	      if (
	        !options[kForOnEventAttribute] &&
	        listener[kListener] === handler &&
	        !listener[kForOnEventAttribute]
	      ) {
	        return;
	      }
	    }

	    let wrapper;

	    if (type === 'message') {
	      wrapper = function onMessage(data, isBinary) {
	        const event = new MessageEvent('message', {
	          data: isBinary ? data : data.toString()
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'close') {
	      wrapper = function onClose(code, message) {
	        const event = new CloseEvent('close', {
	          code,
	          reason: message.toString(),
	          wasClean: this._closeFrameReceived && this._closeFrameSent
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'error') {
	      wrapper = function onError(error) {
	        const event = new ErrorEvent('error', {
	          error,
	          message: error.message
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'open') {
	      wrapper = function onOpen() {
	        const event = new Event('open');

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else {
	      return;
	    }

	    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
	    wrapper[kListener] = handler;

	    if (options.once) {
	      this.once(type, wrapper);
	    } else {
	      this.on(type, wrapper);
	    }
	  },

	  /**
	   * Remove an event listener.
	   *
	   * @param {String} type A string representing the event type to remove
	   * @param {(Function|Object)} handler The listener to remove
	   * @public
	   */
	  removeEventListener(type, handler) {
	    for (const listener of this.listeners(type)) {
	      if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
	        this.removeListener(type, listener);
	        break;
	      }
	    }
	  }
	};

	eventTarget = {
	  CloseEvent,
	  ErrorEvent,
	  Event,
	  EventTarget,
	  MessageEvent
	};

	/**
	 * Call an event listener
	 *
	 * @param {(Function|Object)} listener The listener to call
	 * @param {*} thisArg The value to use as `this`` when calling the listener
	 * @param {Event} event The event to pass to the listener
	 * @private
	 */
	function callListener(listener, thisArg, event) {
	  if (typeof listener === 'object' && listener.handleEvent) {
	    listener.handleEvent.call(listener, event);
	  } else {
	    listener.call(thisArg, event);
	  }
	}
	return eventTarget;
}

var extension;
var hasRequiredExtension;

function requireExtension () {
	if (hasRequiredExtension) return extension;
	hasRequiredExtension = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Adds an offer to the map of extension offers or a parameter to the map of
	 * parameters.
	 *
	 * @param {Object} dest The map of extension offers or parameters
	 * @param {String} name The extension or parameter name
	 * @param {(Object|Boolean|String)} elem The extension parameters or the
	 *     parameter value
	 * @private
	 */
	function push(dest, name, elem) {
	  if (dest[name] === undefined) dest[name] = [elem];
	  else dest[name].push(elem);
	}

	/**
	 * Parses the `Sec-WebSocket-Extensions` header into an object.
	 *
	 * @param {String} header The field value of the header
	 * @return {Object} The parsed object
	 * @public
	 */
	function parse(header) {
	  const offers = Object.create(null);
	  let params = Object.create(null);
	  let mustUnescape = false;
	  let isEscaping = false;
	  let inQuotes = false;
	  let extensionName;
	  let paramName;
	  let start = -1;
	  let code = -1;
	  let end = -1;
	  let i = 0;

	  for (; i < header.length; i++) {
	    code = header.charCodeAt(i);

	    if (extensionName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (
	        i !== 0 &&
	        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	      ) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        const name = header.slice(start, end);
	        if (code === 0x2c) {
	          push(offers, name, params);
	          params = Object.create(null);
	        } else {
	          extensionName = name;
	        }

	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else if (paramName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (code === 0x20 || code === 0x09) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        push(params, header.slice(start, end), true);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        start = end = -1;
	      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
	        paramName = header.slice(start, i);
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else {
	      //
	      // The value of a quoted-string after unescaping must conform to the
	      // token ABNF, so only token characters are valid.
	      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
	      //
	      if (isEscaping) {
	        if (tokenChars[code] !== 1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	        if (start === -1) start = i;
	        else if (!mustUnescape) mustUnescape = true;
	        isEscaping = false;
	      } else if (inQuotes) {
	        if (tokenChars[code] === 1) {
	          if (start === -1) start = i;
	        } else if (code === 0x22 /* '"' */ && start !== -1) {
	          inQuotes = false;
	          end = i;
	        } else if (code === 0x5c /* '\' */) {
	          isEscaping = true;
	        } else {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
	        inQuotes = true;
	      } else if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
	        if (end === -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        let value = header.slice(start, end);
	        if (mustUnescape) {
	          value = value.replace(/\\/g, '');
	          mustUnescape = false;
	        }
	        push(params, paramName, value);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        paramName = undefined;
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    }
	  }

	  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  if (end === -1) end = i;
	  const token = header.slice(start, end);
	  if (extensionName === undefined) {
	    push(offers, token, params);
	  } else {
	    if (paramName === undefined) {
	      push(params, token, true);
	    } else if (mustUnescape) {
	      push(params, paramName, token.replace(/\\/g, ''));
	    } else {
	      push(params, paramName, token);
	    }
	    push(offers, extensionName, params);
	  }

	  return offers;
	}

	/**
	 * Builds the `Sec-WebSocket-Extensions` header field value.
	 *
	 * @param {Object} extensions The map of extensions and parameters to format
	 * @return {String} A string representing the given object
	 * @public
	 */
	function format(extensions) {
	  return Object.keys(extensions)
	    .map((extension) => {
	      let configurations = extensions[extension];
	      if (!Array.isArray(configurations)) configurations = [configurations];
	      return configurations
	        .map((params) => {
	          return [extension]
	            .concat(
	              Object.keys(params).map((k) => {
	                let values = params[k];
	                if (!Array.isArray(values)) values = [values];
	                return values
	                  .map((v) => (v === true ? k : `${k}=${v}`))
	                  .join('; ');
	              })
	            )
	            .join('; ');
	        })
	        .join(', ');
	    })
	    .join(', ');
	}

	extension = { format, parse };
	return extension;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */

var websocket;
var hasRequiredWebsocket;

function requireWebsocket () {
	if (hasRequiredWebsocket) return websocket;
	hasRequiredWebsocket = 1;

	const EventEmitter = require$$0$3;
	const https = require$$1$1;
	const http = require$$2;
	const net = require$$3;
	const tls = require$$4;
	const { randomBytes, createHash } = require$$1;
	const { Duplex, Readable } = require$$0$2;
	const { URL } = require$$7;

	const PerMessageDeflate = requirePermessageDeflate();
	const Receiver = requireReceiver();
	const Sender = requireSender();
	const { isBlob } = requireValidation();

	const {
	  BINARY_TYPES,
	  EMPTY_BUFFER,
	  GUID,
	  kForOnEventAttribute,
	  kListener,
	  kStatusCode,
	  kWebSocket,
	  NOOP
	} = requireConstants();
	const {
	  EventTarget: { addEventListener, removeEventListener }
	} = requireEventTarget();
	const { format, parse } = requireExtension();
	const { toBuffer } = requireBufferUtil();

	const closeTimeout = 30 * 1000;
	const kAborted = Symbol('kAborted');
	const protocolVersions = [8, 13];
	const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
	const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

	/**
	 * Class representing a WebSocket.
	 *
	 * @extends EventEmitter
	 */
	class WebSocket extends EventEmitter {
	  /**
	   * Create a new `WebSocket`.
	   *
	   * @param {(String|URL)} address The URL to which to connect
	   * @param {(String|String[])} [protocols] The subprotocols
	   * @param {Object} [options] Connection options
	   */
	  constructor(address, protocols, options) {
	    super();

	    this._binaryType = BINARY_TYPES[0];
	    this._closeCode = 1006;
	    this._closeFrameReceived = false;
	    this._closeFrameSent = false;
	    this._closeMessage = EMPTY_BUFFER;
	    this._closeTimer = null;
	    this._errorEmitted = false;
	    this._extensions = {};
	    this._paused = false;
	    this._protocol = '';
	    this._readyState = WebSocket.CONNECTING;
	    this._receiver = null;
	    this._sender = null;
	    this._socket = null;

	    if (address !== null) {
	      this._bufferedAmount = 0;
	      this._isServer = false;
	      this._redirects = 0;

	      if (protocols === undefined) {
	        protocols = [];
	      } else if (!Array.isArray(protocols)) {
	        if (typeof protocols === 'object' && protocols !== null) {
	          options = protocols;
	          protocols = [];
	        } else {
	          protocols = [protocols];
	        }
	      }

	      initAsClient(this, address, protocols, options);
	    } else {
	      this._autoPong = options.autoPong;
	      this._isServer = true;
	    }
	  }

	  /**
	   * For historical reasons, the custom "nodebuffer" type is used by the default
	   * instead of "blob".
	   *
	   * @type {String}
	   */
	  get binaryType() {
	    return this._binaryType;
	  }

	  set binaryType(type) {
	    if (!BINARY_TYPES.includes(type)) return;

	    this._binaryType = type;

	    //
	    // Allow to change `binaryType` on the fly.
	    //
	    if (this._receiver) this._receiver._binaryType = type;
	  }

	  /**
	   * @type {Number}
	   */
	  get bufferedAmount() {
	    if (!this._socket) return this._bufferedAmount;

	    return this._socket._writableState.length + this._sender._bufferedBytes;
	  }

	  /**
	   * @type {String}
	   */
	  get extensions() {
	    return Object.keys(this._extensions).join();
	  }

	  /**
	   * @type {Boolean}
	   */
	  get isPaused() {
	    return this._paused;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onclose() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onerror() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onopen() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onmessage() {
	    return null;
	  }

	  /**
	   * @type {String}
	   */
	  get protocol() {
	    return this._protocol;
	  }

	  /**
	   * @type {Number}
	   */
	  get readyState() {
	    return this._readyState;
	  }

	  /**
	   * @type {String}
	   */
	  get url() {
	    return this._url;
	  }

	  /**
	   * Set up the socket and the internal resources.
	   *
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Object} options Options object
	   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Number} [options.maxPayload=0] The maximum allowed message size
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @private
	   */
	  setSocket(socket, head, options) {
	    const receiver = new Receiver({
	      allowSynchronousEvents: options.allowSynchronousEvents,
	      binaryType: this.binaryType,
	      extensions: this._extensions,
	      isServer: this._isServer,
	      maxPayload: options.maxPayload,
	      skipUTF8Validation: options.skipUTF8Validation
	    });

	    const sender = new Sender(socket, this._extensions, options.generateMask);

	    this._receiver = receiver;
	    this._sender = sender;
	    this._socket = socket;

	    receiver[kWebSocket] = this;
	    sender[kWebSocket] = this;
	    socket[kWebSocket] = this;

	    receiver.on('conclude', receiverOnConclude);
	    receiver.on('drain', receiverOnDrain);
	    receiver.on('error', receiverOnError);
	    receiver.on('message', receiverOnMessage);
	    receiver.on('ping', receiverOnPing);
	    receiver.on('pong', receiverOnPong);

	    sender.onerror = senderOnError;

	    //
	    // These methods may not be available if `socket` is just a `Duplex`.
	    //
	    if (socket.setTimeout) socket.setTimeout(0);
	    if (socket.setNoDelay) socket.setNoDelay();

	    if (head.length > 0) socket.unshift(head);

	    socket.on('close', socketOnClose);
	    socket.on('data', socketOnData);
	    socket.on('end', socketOnEnd);
	    socket.on('error', socketOnError);

	    this._readyState = WebSocket.OPEN;
	    this.emit('open');
	  }

	  /**
	   * Emit the `'close'` event.
	   *
	   * @private
	   */
	  emitClose() {
	    if (!this._socket) {
	      this._readyState = WebSocket.CLOSED;
	      this.emit('close', this._closeCode, this._closeMessage);
	      return;
	    }

	    if (this._extensions[PerMessageDeflate.extensionName]) {
	      this._extensions[PerMessageDeflate.extensionName].cleanup();
	    }

	    this._receiver.removeAllListeners();
	    this._readyState = WebSocket.CLOSED;
	    this.emit('close', this._closeCode, this._closeMessage);
	  }

	  /**
	   * Start a closing handshake.
	   *
	   *          +----------+   +-----------+   +----------+
	   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
	   *    |     +----------+   +-----------+   +----------+     |
	   *          +----------+   +-----------+         |
	   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
	   *          +----------+   +-----------+   |
	   *    |           |                        |   +---+        |
	   *                +------------------------+-->|fin| - - - -
	   *    |         +---+                      |   +---+
	   *     - - - - -|fin|<---------------------+
	   *              +---+
	   *
	   * @param {Number} [code] Status code explaining why the connection is closing
	   * @param {(String|Buffer)} [data] The reason why the connection is
	   *     closing
	   * @public
	   */
	  close(code, data) {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this.readyState === WebSocket.CLOSING) {
	      if (
	        this._closeFrameSent &&
	        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
	      ) {
	        this._socket.end();
	      }

	      return;
	    }

	    this._readyState = WebSocket.CLOSING;
	    this._sender.close(code, data, !this._isServer, (err) => {
	      //
	      // This error is handled by the `'error'` listener on the socket. We only
	      // want to know if the close frame has been sent here.
	      //
	      if (err) return;

	      this._closeFrameSent = true;

	      if (
	        this._closeFrameReceived ||
	        this._receiver._writableState.errorEmitted
	      ) {
	        this._socket.end();
	      }
	    });

	    setCloseTimer(this);
	  }

	  /**
	   * Pause the socket.
	   *
	   * @public
	   */
	  pause() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = true;
	    this._socket.pause();
	  }

	  /**
	   * Send a ping.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the ping is sent
	   * @public
	   */
	  ping(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Send a pong.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the pong is sent
	   * @public
	   */
	  pong(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Resume the socket.
	   *
	   * @public
	   */
	  resume() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = false;
	    if (!this._receiver._writableState.needDrain) this._socket.resume();
	  }

	  /**
	   * Send a data message.
	   *
	   * @param {*} data The message to send
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
	   *     text
	   * @param {Boolean} [options.compress] Specifies whether or not to compress
	   *     `data`
	   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when data is written out
	   * @public
	   */
	  send(data, options, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof options === 'function') {
	      cb = options;
	      options = {};
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    const opts = {
	      binary: typeof data !== 'string',
	      mask: !this._isServer,
	      compress: true,
	      fin: true,
	      ...options
	    };

	    if (!this._extensions[PerMessageDeflate.extensionName]) {
	      opts.compress = false;
	    }

	    this._sender.send(data || EMPTY_BUFFER, opts, cb);
	  }

	  /**
	   * Forcibly close the connection.
	   *
	   * @public
	   */
	  terminate() {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this._socket) {
	      this._readyState = WebSocket.CLOSING;
	      this._socket.destroy();
	    }
	  }
	}

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	[
	  'binaryType',
	  'bufferedAmount',
	  'extensions',
	  'isPaused',
	  'protocol',
	  'readyState',
	  'url'
	].forEach((property) => {
	  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
	});

	//
	// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
	// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
	//
	['open', 'error', 'close', 'message'].forEach((method) => {
	  Object.defineProperty(WebSocket.prototype, `on${method}`, {
	    enumerable: true,
	    get() {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) return listener[kListener];
	      }

	      return null;
	    },
	    set(handler) {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) {
	          this.removeListener(method, listener);
	          break;
	        }
	      }

	      if (typeof handler !== 'function') return;

	      this.addEventListener(method, handler, {
	        [kForOnEventAttribute]: true
	      });
	    }
	  });
	});

	WebSocket.prototype.addEventListener = addEventListener;
	WebSocket.prototype.removeEventListener = removeEventListener;

	websocket = WebSocket;

	/**
	 * Initialize a WebSocket client.
	 *
	 * @param {WebSocket} websocket The client to initialize
	 * @param {(String|URL)} address The URL to which to connect
	 * @param {Array} protocols The subprotocols
	 * @param {Object} [options] Connection options
	 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
	 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
	 *     times in the same tick
	 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	 *     automatically send a pong in response to a ping
	 * @param {Function} [options.finishRequest] A function which can be used to
	 *     customize the headers of each http request before it is sent
	 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
	 *     redirects
	 * @param {Function} [options.generateMask] The function used to generate the
	 *     masking key
	 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
	 *     handshake request
	 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	 *     size
	 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
	 *     allowed
	 * @param {String} [options.origin] Value of the `Origin` or
	 *     `Sec-WebSocket-Origin` header
	 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
	 *     permessage-deflate
	 * @param {Number} [options.protocolVersion=13] Value of the
	 *     `Sec-WebSocket-Version` header
	 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	 *     not to skip UTF-8 validation for text and close messages
	 * @private
	 */
	function initAsClient(websocket, address, protocols, options) {
	  const opts = {
	    allowSynchronousEvents: true,
	    autoPong: true,
	    protocolVersion: protocolVersions[1],
	    maxPayload: 100 * 1024 * 1024,
	    skipUTF8Validation: false,
	    perMessageDeflate: true,
	    followRedirects: false,
	    maxRedirects: 10,
	    ...options,
	    socketPath: undefined,
	    hostname: undefined,
	    protocol: undefined,
	    timeout: undefined,
	    method: 'GET',
	    host: undefined,
	    path: undefined,
	    port: undefined
	  };

	  websocket._autoPong = opts.autoPong;

	  if (!protocolVersions.includes(opts.protocolVersion)) {
	    throw new RangeError(
	      `Unsupported protocol version: ${opts.protocolVersion} ` +
	        `(supported versions: ${protocolVersions.join(', ')})`
	    );
	  }

	  let parsedUrl;

	  if (address instanceof URL) {
	    parsedUrl = address;
	  } else {
	    try {
	      parsedUrl = new URL(address);
	    } catch (e) {
	      throw new SyntaxError(`Invalid URL: ${address}`);
	    }
	  }

	  if (parsedUrl.protocol === 'http:') {
	    parsedUrl.protocol = 'ws:';
	  } else if (parsedUrl.protocol === 'https:') {
	    parsedUrl.protocol = 'wss:';
	  }

	  websocket._url = parsedUrl.href;

	  const isSecure = parsedUrl.protocol === 'wss:';
	  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
	  let invalidUrlMessage;

	  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
	    invalidUrlMessage =
	      'The URL\'s protocol must be one of "ws:", "wss:", ' +
	      '"http:", "https:", or "ws+unix:"';
	  } else if (isIpcUrl && !parsedUrl.pathname) {
	    invalidUrlMessage = "The URL's pathname is empty";
	  } else if (parsedUrl.hash) {
	    invalidUrlMessage = 'The URL contains a fragment identifier';
	  }

	  if (invalidUrlMessage) {
	    const err = new SyntaxError(invalidUrlMessage);

	    if (websocket._redirects === 0) {
	      throw err;
	    } else {
	      emitErrorAndClose(websocket, err);
	      return;
	    }
	  }

	  const defaultPort = isSecure ? 443 : 80;
	  const key = randomBytes(16).toString('base64');
	  const request = isSecure ? https.request : http.request;
	  const protocolSet = new Set();
	  let perMessageDeflate;

	  opts.createConnection =
	    opts.createConnection || (isSecure ? tlsConnect : netConnect);
	  opts.defaultPort = opts.defaultPort || defaultPort;
	  opts.port = parsedUrl.port || defaultPort;
	  opts.host = parsedUrl.hostname.startsWith('[')
	    ? parsedUrl.hostname.slice(1, -1)
	    : parsedUrl.hostname;
	  opts.headers = {
	    ...opts.headers,
	    'Sec-WebSocket-Version': opts.protocolVersion,
	    'Sec-WebSocket-Key': key,
	    Connection: 'Upgrade',
	    Upgrade: 'websocket'
	  };
	  opts.path = parsedUrl.pathname + parsedUrl.search;
	  opts.timeout = opts.handshakeTimeout;

	  if (opts.perMessageDeflate) {
	    perMessageDeflate = new PerMessageDeflate(
	      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
	      false,
	      opts.maxPayload
	    );
	    opts.headers['Sec-WebSocket-Extensions'] = format({
	      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
	    });
	  }
	  if (protocols.length) {
	    for (const protocol of protocols) {
	      if (
	        typeof protocol !== 'string' ||
	        !subprotocolRegex.test(protocol) ||
	        protocolSet.has(protocol)
	      ) {
	        throw new SyntaxError(
	          'An invalid or duplicated subprotocol was specified'
	        );
	      }

	      protocolSet.add(protocol);
	    }

	    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
	  }
	  if (opts.origin) {
	    if (opts.protocolVersion < 13) {
	      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
	    } else {
	      opts.headers.Origin = opts.origin;
	    }
	  }
	  if (parsedUrl.username || parsedUrl.password) {
	    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
	  }

	  if (isIpcUrl) {
	    const parts = opts.path.split(':');

	    opts.socketPath = parts[0];
	    opts.path = parts[1];
	  }

	  let req;

	  if (opts.followRedirects) {
	    if (websocket._redirects === 0) {
	      websocket._originalIpc = isIpcUrl;
	      websocket._originalSecure = isSecure;
	      websocket._originalHostOrSocketPath = isIpcUrl
	        ? opts.socketPath
	        : parsedUrl.host;

	      const headers = options && options.headers;

	      //
	      // Shallow copy the user provided options so that headers can be changed
	      // without mutating the original object.
	      //
	      options = { ...options, headers: {} };

	      if (headers) {
	        for (const [key, value] of Object.entries(headers)) {
	          options.headers[key.toLowerCase()] = value;
	        }
	      }
	    } else if (websocket.listenerCount('redirect') === 0) {
	      const isSameHost = isIpcUrl
	        ? websocket._originalIpc
	          ? opts.socketPath === websocket._originalHostOrSocketPath
	          : false
	        : websocket._originalIpc
	          ? false
	          : parsedUrl.host === websocket._originalHostOrSocketPath;

	      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
	        //
	        // Match curl 7.77.0 behavior and drop the following headers. These
	        // headers are also dropped when following a redirect to a subdomain.
	        //
	        delete opts.headers.authorization;
	        delete opts.headers.cookie;

	        if (!isSameHost) delete opts.headers.host;

	        opts.auth = undefined;
	      }
	    }

	    //
	    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
	    // If the `Authorization` header is set, then there is nothing to do as it
	    // will take precedence.
	    //
	    if (opts.auth && !options.headers.authorization) {
	      options.headers.authorization =
	        'Basic ' + Buffer.from(opts.auth).toString('base64');
	    }

	    req = websocket._req = request(opts);

	    if (websocket._redirects) {
	      //
	      // Unlike what is done for the `'upgrade'` event, no early exit is
	      // triggered here if the user calls `websocket.close()` or
	      // `websocket.terminate()` from a listener of the `'redirect'` event. This
	      // is because the user can also call `request.destroy()` with an error
	      // before calling `websocket.close()` or `websocket.terminate()` and this
	      // would result in an error being emitted on the `request` object with no
	      // `'error'` event listeners attached.
	      //
	      websocket.emit('redirect', websocket.url, req);
	    }
	  } else {
	    req = websocket._req = request(opts);
	  }

	  if (opts.timeout) {
	    req.on('timeout', () => {
	      abortHandshake(websocket, req, 'Opening handshake has timed out');
	    });
	  }

	  req.on('error', (err) => {
	    if (req === null || req[kAborted]) return;

	    req = websocket._req = null;
	    emitErrorAndClose(websocket, err);
	  });

	  req.on('response', (res) => {
	    const location = res.headers.location;
	    const statusCode = res.statusCode;

	    if (
	      location &&
	      opts.followRedirects &&
	      statusCode >= 300 &&
	      statusCode < 400
	    ) {
	      if (++websocket._redirects > opts.maxRedirects) {
	        abortHandshake(websocket, req, 'Maximum redirects exceeded');
	        return;
	      }

	      req.abort();

	      let addr;

	      try {
	        addr = new URL(location, address);
	      } catch (e) {
	        const err = new SyntaxError(`Invalid URL: ${location}`);
	        emitErrorAndClose(websocket, err);
	        return;
	      }

	      initAsClient(websocket, addr, protocols, options);
	    } else if (!websocket.emit('unexpected-response', req, res)) {
	      abortHandshake(
	        websocket,
	        req,
	        `Unexpected server response: ${res.statusCode}`
	      );
	    }
	  });

	  req.on('upgrade', (res, socket, head) => {
	    websocket.emit('upgrade', res);

	    //
	    // The user may have closed the connection from a listener of the
	    // `'upgrade'` event.
	    //
	    if (websocket.readyState !== WebSocket.CONNECTING) return;

	    req = websocket._req = null;

	    const upgrade = res.headers.upgrade;

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      abortHandshake(websocket, socket, 'Invalid Upgrade header');
	      return;
	    }

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    if (res.headers['sec-websocket-accept'] !== digest) {
	      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
	      return;
	    }

	    const serverProt = res.headers['sec-websocket-protocol'];
	    let protError;

	    if (serverProt !== undefined) {
	      if (!protocolSet.size) {
	        protError = 'Server sent a subprotocol but none was requested';
	      } else if (!protocolSet.has(serverProt)) {
	        protError = 'Server sent an invalid subprotocol';
	      }
	    } else if (protocolSet.size) {
	      protError = 'Server sent no subprotocol';
	    }

	    if (protError) {
	      abortHandshake(websocket, socket, protError);
	      return;
	    }

	    if (serverProt) websocket._protocol = serverProt;

	    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

	    if (secWebSocketExtensions !== undefined) {
	      if (!perMessageDeflate) {
	        const message =
	          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
	          'was requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      let extensions;

	      try {
	        extensions = parse(secWebSocketExtensions);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      const extensionNames = Object.keys(extensions);

	      if (
	        extensionNames.length !== 1 ||
	        extensionNames[0] !== PerMessageDeflate.extensionName
	      ) {
	        const message = 'Server indicated an extension that was not requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      try {
	        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      websocket._extensions[PerMessageDeflate.extensionName] =
	        perMessageDeflate;
	    }

	    websocket.setSocket(socket, head, {
	      allowSynchronousEvents: opts.allowSynchronousEvents,
	      generateMask: opts.generateMask,
	      maxPayload: opts.maxPayload,
	      skipUTF8Validation: opts.skipUTF8Validation
	    });
	  });

	  if (opts.finishRequest) {
	    opts.finishRequest(req, websocket);
	  } else {
	    req.end();
	  }
	}

	/**
	 * Emit the `'error'` and `'close'` events.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {Error} The error to emit
	 * @private
	 */
	function emitErrorAndClose(websocket, err) {
	  websocket._readyState = WebSocket.CLOSING;
	  //
	  // The following assignment is practically useless and is done only for
	  // consistency.
	  //
	  websocket._errorEmitted = true;
	  websocket.emit('error', err);
	  websocket.emitClose();
	}

	/**
	 * Create a `net.Socket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {net.Socket} The newly created socket used to start the connection
	 * @private
	 */
	function netConnect(options) {
	  options.path = options.socketPath;
	  return net.connect(options);
	}

	/**
	 * Create a `tls.TLSSocket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {tls.TLSSocket} The newly created socket used to start the connection
	 * @private
	 */
	function tlsConnect(options) {
	  options.path = undefined;

	  if (!options.servername && options.servername !== '') {
	    options.servername = net.isIP(options.host) ? '' : options.host;
	  }

	  return tls.connect(options);
	}

	/**
	 * Abort the handshake and emit an error.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
	 *     abort or the socket to destroy
	 * @param {String} message The error message
	 * @private
	 */
	function abortHandshake(websocket, stream, message) {
	  websocket._readyState = WebSocket.CLOSING;

	  const err = new Error(message);
	  Error.captureStackTrace(err, abortHandshake);

	  if (stream.setHeader) {
	    stream[kAborted] = true;
	    stream.abort();

	    if (stream.socket && !stream.socket.destroyed) {
	      //
	      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
	      // called after the request completed. See
	      // https://github.com/websockets/ws/issues/1869.
	      //
	      stream.socket.destroy();
	    }

	    process.nextTick(emitErrorAndClose, websocket, err);
	  } else {
	    stream.destroy(err);
	    stream.once('error', websocket.emit.bind(websocket, 'error'));
	    stream.once('close', websocket.emitClose.bind(websocket));
	  }
	}

	/**
	 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
	 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {*} [data] The data to send
	 * @param {Function} [cb] Callback
	 * @private
	 */
	function sendAfterClose(websocket, data, cb) {
	  if (data) {
	    const length = isBlob(data) ? data.size : toBuffer(data).length;

	    //
	    // The `_bufferedAmount` property is used only when the peer is a client and
	    // the opening handshake fails. Under these circumstances, in fact, the
	    // `setSocket()` method is not called, so the `_socket` and `_sender`
	    // properties are set to `null`.
	    //
	    if (websocket._socket) websocket._sender._bufferedBytes += length;
	    else websocket._bufferedAmount += length;
	  }

	  if (cb) {
	    const err = new Error(
	      `WebSocket is not open: readyState ${websocket.readyState} ` +
	        `(${readyStates[websocket.readyState]})`
	    );
	    process.nextTick(cb, err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'conclude'` event.
	 *
	 * @param {Number} code The status code
	 * @param {Buffer} reason The reason for closing
	 * @private
	 */
	function receiverOnConclude(code, reason) {
	  const websocket = this[kWebSocket];

	  websocket._closeFrameReceived = true;
	  websocket._closeMessage = reason;
	  websocket._closeCode = code;

	  if (websocket._socket[kWebSocket] === undefined) return;

	  websocket._socket.removeListener('data', socketOnData);
	  process.nextTick(resume, websocket._socket);

	  if (code === 1005) websocket.close();
	  else websocket.close(code, reason);
	}

	/**
	 * The listener of the `Receiver` `'drain'` event.
	 *
	 * @private
	 */
	function receiverOnDrain() {
	  const websocket = this[kWebSocket];

	  if (!websocket.isPaused) websocket._socket.resume();
	}

	/**
	 * The listener of the `Receiver` `'error'` event.
	 *
	 * @param {(RangeError|Error)} err The emitted error
	 * @private
	 */
	function receiverOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket._socket[kWebSocket] !== undefined) {
	    websocket._socket.removeListener('data', socketOnData);

	    //
	    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
	    // https://github.com/websockets/ws/issues/1940.
	    //
	    process.nextTick(resume, websocket._socket);

	    websocket.close(err[kStatusCode]);
	  }

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'finish'` event.
	 *
	 * @private
	 */
	function receiverOnFinish() {
	  this[kWebSocket].emitClose();
	}

	/**
	 * The listener of the `Receiver` `'message'` event.
	 *
	 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
	 * @param {Boolean} isBinary Specifies whether the message is binary or not
	 * @private
	 */
	function receiverOnMessage(data, isBinary) {
	  this[kWebSocket].emit('message', data, isBinary);
	}

	/**
	 * The listener of the `Receiver` `'ping'` event.
	 *
	 * @param {Buffer} data The data included in the ping frame
	 * @private
	 */
	function receiverOnPing(data) {
	  const websocket = this[kWebSocket];

	  if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
	  websocket.emit('ping', data);
	}

	/**
	 * The listener of the `Receiver` `'pong'` event.
	 *
	 * @param {Buffer} data The data included in the pong frame
	 * @private
	 */
	function receiverOnPong(data) {
	  this[kWebSocket].emit('pong', data);
	}

	/**
	 * Resume a readable stream
	 *
	 * @param {Readable} stream The readable stream
	 * @private
	 */
	function resume(stream) {
	  stream.resume();
	}

	/**
	 * The `Sender` error event handler.
	 *
	 * @param {Error} The error
	 * @private
	 */
	function senderOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket.readyState === WebSocket.CLOSED) return;
	  if (websocket.readyState === WebSocket.OPEN) {
	    websocket._readyState = WebSocket.CLOSING;
	    setCloseTimer(websocket);
	  }

	  //
	  // `socket.end()` is used instead of `socket.destroy()` to allow the other
	  // peer to finish sending queued data. There is no need to set a timer here
	  // because `CLOSING` means that it is already set or not needed.
	  //
	  this._socket.end();

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * Set a timer to destroy the underlying raw socket of a WebSocket.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @private
	 */
	function setCloseTimer(websocket) {
	  websocket._closeTimer = setTimeout(
	    websocket._socket.destroy.bind(websocket._socket),
	    closeTimeout
	  );
	}

	/**
	 * The listener of the socket `'close'` event.
	 *
	 * @private
	 */
	function socketOnClose() {
	  const websocket = this[kWebSocket];

	  this.removeListener('close', socketOnClose);
	  this.removeListener('data', socketOnData);
	  this.removeListener('end', socketOnEnd);

	  websocket._readyState = WebSocket.CLOSING;

	  let chunk;

	  //
	  // The close frame might not have been received or the `'end'` event emitted,
	  // for example, if the socket was destroyed due to an error. Ensure that the
	  // `receiver` stream is closed after writing any remaining buffered data to
	  // it. If the readable side of the socket is in flowing mode then there is no
	  // buffered data as everything has been already written and `readable.read()`
	  // will return `null`. If instead, the socket is paused, any possible buffered
	  // data will be read as a single chunk.
	  //
	  if (
	    !this._readableState.endEmitted &&
	    !websocket._closeFrameReceived &&
	    !websocket._receiver._writableState.errorEmitted &&
	    (chunk = websocket._socket.read()) !== null
	  ) {
	    websocket._receiver.write(chunk);
	  }

	  websocket._receiver.end();

	  this[kWebSocket] = undefined;

	  clearTimeout(websocket._closeTimer);

	  if (
	    websocket._receiver._writableState.finished ||
	    websocket._receiver._writableState.errorEmitted
	  ) {
	    websocket.emitClose();
	  } else {
	    websocket._receiver.on('error', receiverOnFinish);
	    websocket._receiver.on('finish', receiverOnFinish);
	  }
	}

	/**
	 * The listener of the socket `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function socketOnData(chunk) {
	  if (!this[kWebSocket]._receiver.write(chunk)) {
	    this.pause();
	  }
	}

	/**
	 * The listener of the socket `'end'` event.
	 *
	 * @private
	 */
	function socketOnEnd() {
	  const websocket = this[kWebSocket];

	  websocket._readyState = WebSocket.CLOSING;
	  websocket._receiver.end();
	  this.end();
	}

	/**
	 * The listener of the socket `'error'` event.
	 *
	 * @private
	 */
	function socketOnError() {
	  const websocket = this[kWebSocket];

	  this.removeListener('error', socketOnError);
	  this.on('error', NOOP);

	  if (websocket) {
	    websocket._readyState = WebSocket.CLOSING;
	    this.destroy();
	  }
	}
	return websocket;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^WebSocket$" }] */

var stream;
var hasRequiredStream;

function requireStream () {
	if (hasRequiredStream) return stream;
	hasRequiredStream = 1;

	requireWebsocket();
	const { Duplex } = require$$0$2;

	/**
	 * Emits the `'close'` event on a stream.
	 *
	 * @param {Duplex} stream The stream.
	 * @private
	 */
	function emitClose(stream) {
	  stream.emit('close');
	}

	/**
	 * The listener of the `'end'` event.
	 *
	 * @private
	 */
	function duplexOnEnd() {
	  if (!this.destroyed && this._writableState.finished) {
	    this.destroy();
	  }
	}

	/**
	 * The listener of the `'error'` event.
	 *
	 * @param {Error} err The error
	 * @private
	 */
	function duplexOnError(err) {
	  this.removeListener('error', duplexOnError);
	  this.destroy();
	  if (this.listenerCount('error') === 0) {
	    // Do not suppress the throwing behavior.
	    this.emit('error', err);
	  }
	}

	/**
	 * Wraps a `WebSocket` in a duplex stream.
	 *
	 * @param {WebSocket} ws The `WebSocket` to wrap
	 * @param {Object} [options] The options for the `Duplex` constructor
	 * @return {Duplex} The duplex stream
	 * @public
	 */
	function createWebSocketStream(ws, options) {
	  let terminateOnDestroy = true;

	  const duplex = new Duplex({
	    ...options,
	    autoDestroy: false,
	    emitClose: false,
	    objectMode: false,
	    writableObjectMode: false
	  });

	  ws.on('message', function message(msg, isBinary) {
	    const data =
	      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

	    if (!duplex.push(data)) ws.pause();
	  });

	  ws.once('error', function error(err) {
	    if (duplex.destroyed) return;

	    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
	    //
	    // - If the `'error'` event is emitted before the `'open'` event, then
	    //   `ws.terminate()` is a noop as no socket is assigned.
	    // - Otherwise, the error is re-emitted by the listener of the `'error'`
	    //   event of the `Receiver` object. The listener already closes the
	    //   connection by calling `ws.close()`. This allows a close frame to be
	    //   sent to the other peer. If `ws.terminate()` is called right after this,
	    //   then the close frame might not be sent.
	    terminateOnDestroy = false;
	    duplex.destroy(err);
	  });

	  ws.once('close', function close() {
	    if (duplex.destroyed) return;

	    duplex.push(null);
	  });

	  duplex._destroy = function (err, callback) {
	    if (ws.readyState === ws.CLOSED) {
	      callback(err);
	      process.nextTick(emitClose, duplex);
	      return;
	    }

	    let called = false;

	    ws.once('error', function error(err) {
	      called = true;
	      callback(err);
	    });

	    ws.once('close', function close() {
	      if (!called) callback(err);
	      process.nextTick(emitClose, duplex);
	    });

	    if (terminateOnDestroy) ws.terminate();
	  };

	  duplex._final = function (callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._final(callback);
	      });
	      return;
	    }

	    // If the value of the `_socket` property is `null` it means that `ws` is a
	    // client websocket and the handshake failed. In fact, when this happens, a
	    // socket is never assigned to the websocket. Wait for the `'error'` event
	    // that will be emitted by the websocket.
	    if (ws._socket === null) return;

	    if (ws._socket._writableState.finished) {
	      callback();
	      if (duplex._readableState.endEmitted) duplex.destroy();
	    } else {
	      ws._socket.once('finish', function finish() {
	        // `duplex` is not destroyed here because the `'end'` event will be
	        // emitted on `duplex` after this `'finish'` event. The EOF signaling
	        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
	        callback();
	      });
	      ws.close();
	    }
	  };

	  duplex._read = function () {
	    if (ws.isPaused) ws.resume();
	  };

	  duplex._write = function (chunk, encoding, callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._write(chunk, encoding, callback);
	      });
	      return;
	    }

	    ws.send(chunk, callback);
	  };

	  duplex.on('end', duplexOnEnd);
	  duplex.on('error', duplexOnError);
	  return duplex;
	}

	stream = createWebSocketStream;
	return stream;
}

requireStream();

requireReceiver();

requireSender();

requireWebsocket();

var subprotocol;
var hasRequiredSubprotocol;

function requireSubprotocol () {
	if (hasRequiredSubprotocol) return subprotocol;
	hasRequiredSubprotocol = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
	 *
	 * @param {String} header The field value of the header
	 * @return {Set} The subprotocol names
	 * @public
	 */
	function parse(header) {
	  const protocols = new Set();
	  let start = -1;
	  let end = -1;
	  let i = 0;

	  for (i; i < header.length; i++) {
	    const code = header.charCodeAt(i);

	    if (end === -1 && tokenChars[code] === 1) {
	      if (start === -1) start = i;
	    } else if (
	      i !== 0 &&
	      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	    ) {
	      if (end === -1 && start !== -1) end = i;
	    } else if (code === 0x2c /* ',' */) {
	      if (start === -1) {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }

	      if (end === -1) end = i;

	      const protocol = header.slice(start, end);

	      if (protocols.has(protocol)) {
	        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	      }

	      protocols.add(protocol);
	      start = end = -1;
	    } else {
	      throw new SyntaxError(`Unexpected character at index ${i}`);
	    }
	  }

	  if (start === -1 || end !== -1) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  const protocol = header.slice(start, i);

	  if (protocols.has(protocol)) {
	    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	  }

	  protocols.add(protocol);
	  return protocols;
	}

	subprotocol = { parse };
	return subprotocol;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex$", "caughtErrors": "none" }] */

var websocketServer;
var hasRequiredWebsocketServer;

function requireWebsocketServer () {
	if (hasRequiredWebsocketServer) return websocketServer;
	hasRequiredWebsocketServer = 1;

	const EventEmitter = require$$0$3;
	const http = require$$2;
	const { Duplex } = require$$0$2;
	const { createHash } = require$$1;

	const extension = requireExtension();
	const PerMessageDeflate = requirePermessageDeflate();
	const subprotocol = requireSubprotocol();
	const WebSocket = requireWebsocket();
	const { GUID, kWebSocket } = requireConstants();

	const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

	const RUNNING = 0;
	const CLOSING = 1;
	const CLOSED = 2;

	/**
	 * Class representing a WebSocket server.
	 *
	 * @extends EventEmitter
	 */
	class WebSocketServer extends EventEmitter {
	  /**
	   * Create a `WebSocketServer` instance.
	   *
	   * @param {Object} options Configuration options
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	   *     automatically send a pong in response to a ping
	   * @param {Number} [options.backlog=511] The maximum length of the queue of
	   *     pending connections
	   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
	   *     track clients
	   * @param {Function} [options.handleProtocols] A hook to handle protocols
	   * @param {String} [options.host] The hostname where to bind the server
	   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	   *     size
	   * @param {Boolean} [options.noServer=false] Enable no server mode
	   * @param {String} [options.path] Accept only connections matching this path
	   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
	   *     permessage-deflate
	   * @param {Number} [options.port] The port where to bind the server
	   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
	   *     server to use
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @param {Function} [options.verifyClient] A hook to reject connections
	   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
	   *     class to use. It must be the `WebSocket` class or class that extends it
	   * @param {Function} [callback] A listener for the `listening` event
	   */
	  constructor(options, callback) {
	    super();

	    options = {
	      allowSynchronousEvents: true,
	      autoPong: true,
	      maxPayload: 100 * 1024 * 1024,
	      skipUTF8Validation: false,
	      perMessageDeflate: false,
	      handleProtocols: null,
	      clientTracking: true,
	      verifyClient: null,
	      noServer: false,
	      backlog: null, // use default (511 as implemented in net.js)
	      server: null,
	      host: null,
	      path: null,
	      port: null,
	      WebSocket,
	      ...options
	    };

	    if (
	      (options.port == null && !options.server && !options.noServer) ||
	      (options.port != null && (options.server || options.noServer)) ||
	      (options.server && options.noServer)
	    ) {
	      throw new TypeError(
	        'One and only one of the "port", "server", or "noServer" options ' +
	          'must be specified'
	      );
	    }

	    if (options.port != null) {
	      this._server = http.createServer((req, res) => {
	        const body = http.STATUS_CODES[426];

	        res.writeHead(426, {
	          'Content-Length': body.length,
	          'Content-Type': 'text/plain'
	        });
	        res.end(body);
	      });
	      this._server.listen(
	        options.port,
	        options.host,
	        options.backlog,
	        callback
	      );
	    } else if (options.server) {
	      this._server = options.server;
	    }

	    if (this._server) {
	      const emitConnection = this.emit.bind(this, 'connection');

	      this._removeListeners = addListeners(this._server, {
	        listening: this.emit.bind(this, 'listening'),
	        error: this.emit.bind(this, 'error'),
	        upgrade: (req, socket, head) => {
	          this.handleUpgrade(req, socket, head, emitConnection);
	        }
	      });
	    }

	    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
	    if (options.clientTracking) {
	      this.clients = new Set();
	      this._shouldEmitClose = false;
	    }

	    this.options = options;
	    this._state = RUNNING;
	  }

	  /**
	   * Returns the bound address, the address family name, and port of the server
	   * as reported by the operating system if listening on an IP socket.
	   * If the server is listening on a pipe or UNIX domain socket, the name is
	   * returned as a string.
	   *
	   * @return {(Object|String|null)} The address of the server
	   * @public
	   */
	  address() {
	    if (this.options.noServer) {
	      throw new Error('The server is operating in "noServer" mode');
	    }

	    if (!this._server) return null;
	    return this._server.address();
	  }

	  /**
	   * Stop the server from accepting new connections and emit the `'close'` event
	   * when all existing connections are closed.
	   *
	   * @param {Function} [cb] A one-time listener for the `'close'` event
	   * @public
	   */
	  close(cb) {
	    if (this._state === CLOSED) {
	      if (cb) {
	        this.once('close', () => {
	          cb(new Error('The server is not running'));
	        });
	      }

	      process.nextTick(emitClose, this);
	      return;
	    }

	    if (cb) this.once('close', cb);

	    if (this._state === CLOSING) return;
	    this._state = CLOSING;

	    if (this.options.noServer || this.options.server) {
	      if (this._server) {
	        this._removeListeners();
	        this._removeListeners = this._server = null;
	      }

	      if (this.clients) {
	        if (!this.clients.size) {
	          process.nextTick(emitClose, this);
	        } else {
	          this._shouldEmitClose = true;
	        }
	      } else {
	        process.nextTick(emitClose, this);
	      }
	    } else {
	      const server = this._server;

	      this._removeListeners();
	      this._removeListeners = this._server = null;

	      //
	      // The HTTP/S server was created internally. Close it, and rely on its
	      // `'close'` event.
	      //
	      server.close(() => {
	        emitClose(this);
	      });
	    }
	  }

	  /**
	   * See if a given request should be handled by this server instance.
	   *
	   * @param {http.IncomingMessage} req Request object to inspect
	   * @return {Boolean} `true` if the request is valid, else `false`
	   * @public
	   */
	  shouldHandle(req) {
	    if (this.options.path) {
	      const index = req.url.indexOf('?');
	      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

	      if (pathname !== this.options.path) return false;
	    }

	    return true;
	  }

	  /**
	   * Handle a HTTP Upgrade request.
	   *
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @public
	   */
	  handleUpgrade(req, socket, head, cb) {
	    socket.on('error', socketOnError);

	    const key = req.headers['sec-websocket-key'];
	    const upgrade = req.headers.upgrade;
	    const version = +req.headers['sec-websocket-version'];

	    if (req.method !== 'GET') {
	      const message = 'Invalid HTTP method';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
	      return;
	    }

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      const message = 'Invalid Upgrade header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (key === undefined || !keyRegex.test(key)) {
	      const message = 'Missing or invalid Sec-WebSocket-Key header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (version !== 8 && version !== 13) {
	      const message = 'Missing or invalid Sec-WebSocket-Version header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (!this.shouldHandle(req)) {
	      abortHandshake(socket, 400);
	      return;
	    }

	    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
	    let protocols = new Set();

	    if (secWebSocketProtocol !== undefined) {
	      try {
	        protocols = subprotocol.parse(secWebSocketProtocol);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Protocol header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
	    const extensions = {};

	    if (
	      this.options.perMessageDeflate &&
	      secWebSocketExtensions !== undefined
	    ) {
	      const perMessageDeflate = new PerMessageDeflate(
	        this.options.perMessageDeflate,
	        true,
	        this.options.maxPayload
	      );

	      try {
	        const offers = extension.parse(secWebSocketExtensions);

	        if (offers[PerMessageDeflate.extensionName]) {
	          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
	          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	        }
	      } catch (err) {
	        const message =
	          'Invalid or unacceptable Sec-WebSocket-Extensions header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    //
	    // Optionally call external client verification handler.
	    //
	    if (this.options.verifyClient) {
	      const info = {
	        origin:
	          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
	        secure: !!(req.socket.authorized || req.socket.encrypted),
	        req
	      };

	      if (this.options.verifyClient.length === 2) {
	        this.options.verifyClient(info, (verified, code, message, headers) => {
	          if (!verified) {
	            return abortHandshake(socket, code || 401, message, headers);
	          }

	          this.completeUpgrade(
	            extensions,
	            key,
	            protocols,
	            req,
	            socket,
	            head,
	            cb
	          );
	        });
	        return;
	      }

	      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
	    }

	    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
	  }

	  /**
	   * Upgrade the connection to WebSocket.
	   *
	   * @param {Object} extensions The accepted extensions
	   * @param {String} key The value of the `Sec-WebSocket-Key` header
	   * @param {Set} protocols The subprotocols
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @throws {Error} If called more than once with the same socket
	   * @private
	   */
	  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
	    //
	    // Destroy the socket if the client has already sent a FIN packet.
	    //
	    if (!socket.readable || !socket.writable) return socket.destroy();

	    if (socket[kWebSocket]) {
	      throw new Error(
	        'server.handleUpgrade() was called more than once with the same ' +
	          'socket, possibly due to a misconfiguration'
	      );
	    }

	    if (this._state > RUNNING) return abortHandshake(socket, 503);

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    const headers = [
	      'HTTP/1.1 101 Switching Protocols',
	      'Upgrade: websocket',
	      'Connection: Upgrade',
	      `Sec-WebSocket-Accept: ${digest}`
	    ];

	    const ws = new this.options.WebSocket(null, undefined, this.options);

	    if (protocols.size) {
	      //
	      // Optionally call external protocol selection handler.
	      //
	      const protocol = this.options.handleProtocols
	        ? this.options.handleProtocols(protocols, req)
	        : protocols.values().next().value;

	      if (protocol) {
	        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
	        ws._protocol = protocol;
	      }
	    }

	    if (extensions[PerMessageDeflate.extensionName]) {
	      const params = extensions[PerMessageDeflate.extensionName].params;
	      const value = extension.format({
	        [PerMessageDeflate.extensionName]: [params]
	      });
	      headers.push(`Sec-WebSocket-Extensions: ${value}`);
	      ws._extensions = extensions;
	    }

	    //
	    // Allow external modification/inspection of handshake headers.
	    //
	    this.emit('headers', headers, req);

	    socket.write(headers.concat('\r\n').join('\r\n'));
	    socket.removeListener('error', socketOnError);

	    ws.setSocket(socket, head, {
	      allowSynchronousEvents: this.options.allowSynchronousEvents,
	      maxPayload: this.options.maxPayload,
	      skipUTF8Validation: this.options.skipUTF8Validation
	    });

	    if (this.clients) {
	      this.clients.add(ws);
	      ws.on('close', () => {
	        this.clients.delete(ws);

	        if (this._shouldEmitClose && !this.clients.size) {
	          process.nextTick(emitClose, this);
	        }
	      });
	    }

	    cb(ws, req);
	  }
	}

	websocketServer = WebSocketServer;

	/**
	 * Add event listeners on an `EventEmitter` using a map of <event, listener>
	 * pairs.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @param {Object.<String, Function>} map The listeners to add
	 * @return {Function} A function that will remove the added listeners when
	 *     called
	 * @private
	 */
	function addListeners(server, map) {
	  for (const event of Object.keys(map)) server.on(event, map[event]);

	  return function removeListeners() {
	    for (const event of Object.keys(map)) {
	      server.removeListener(event, map[event]);
	    }
	  };
	}

	/**
	 * Emit a `'close'` event on an `EventEmitter`.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @private
	 */
	function emitClose(server) {
	  server._state = CLOSED;
	  server.emit('close');
	}

	/**
	 * Handle socket errors.
	 *
	 * @private
	 */
	function socketOnError() {
	  this.destroy();
	}

	/**
	 * Close the connection when preconditions are not fulfilled.
	 *
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} [message] The HTTP response body
	 * @param {Object} [headers] Additional HTTP response headers
	 * @private
	 */
	function abortHandshake(socket, code, message, headers) {
	  //
	  // The socket is writable unless the user destroyed or ended it before calling
	  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
	  // error. Handling this does not make much sense as the worst that can happen
	  // is that some of the data written by the user might be discarded due to the
	  // call to `socket.end()` below, which triggers an `'error'` event that in
	  // turn causes the socket to be destroyed.
	  //
	  message = message || http.STATUS_CODES[code];
	  headers = {
	    Connection: 'close',
	    'Content-Type': 'text/html',
	    'Content-Length': Buffer.byteLength(message),
	    ...headers
	  };

	  socket.once('finish', socket.destroy);

	  socket.end(
	    `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
	      Object.keys(headers)
	        .map((h) => `${h}: ${headers[h]}`)
	        .join('\r\n') +
	      '\r\n\r\n' +
	      message
	  );
	}

	/**
	 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
	 * one listener for it, otherwise call `abortHandshake()`.
	 *
	 * @param {WebSocketServer} server The WebSocket server
	 * @param {http.IncomingMessage} req The request object
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} message The HTTP response body
	 * @private
	 */
	function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
	  if (server.listenerCount('wsClientError')) {
	    const err = new Error(message);
	    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

	    server.emit('wsClientError', err, socket, req);
	  } else {
	    abortHandshake(socket, code, message);
	  }
	}
	return websocketServer;
}

var websocketServerExports = requireWebsocketServer();
const _WebSocketServer = /*@__PURE__*/getDefaultExportFromCjs(websocketServerExports);

const nodeAdapter = (options = {}) => {
  const hooks = new AdapterHookable(options);
  const peers = /* @__PURE__ */ new Set();
  const wss = options.wss || new _WebSocketServer({
    noServer: true,
    ...options.serverOptions
  });
  wss.on("connection", (ws, nodeReq) => {
    const request = new NodeReqProxy(nodeReq);
    const peer = new NodePeer({ ws, request, peers, nodeReq });
    peers.add(peer);
    hooks.callHook("open", peer);
    ws.on("message", (data) => {
      if (Array.isArray(data)) {
        data = Buffer.concat(data);
      }
      hooks.callHook("message", peer, new Message(data, peer));
    });
    ws.on("error", (error) => {
      peers.delete(peer);
      hooks.callHook("error", peer, new WSError(error));
    });
    ws.on("close", (code, reason) => {
      peers.delete(peer);
      hooks.callHook("close", peer, {
        code,
        reason: reason?.toString()
      });
    });
  });
  wss.on("headers", (outgoingHeaders, req) => {
    const upgradeHeaders = req._upgradeHeaders;
    if (upgradeHeaders) {
      for (const [key, value] of new Headers(upgradeHeaders)) {
        outgoingHeaders.push(`${key}: ${value}`);
      }
    }
  });
  return {
    ...adapterUtils(peers),
    handleUpgrade: async (nodeReq, socket, head) => {
      const request = new NodeReqProxy(nodeReq);
      const { upgradeHeaders, endResponse, context } = await hooks.upgrade(request);
      if (endResponse) {
        return sendResponse(socket, endResponse);
      }
      nodeReq._request = request;
      nodeReq._upgradeHeaders = upgradeHeaders;
      nodeReq._context = context;
      wss.handleUpgrade(nodeReq, socket, head, (ws) => {
        wss.emit("connection", ws, nodeReq);
      });
    },
    closeAll: (code, data, force) => {
      for (const client of wss.clients) {
        if (force) {
          client.terminate();
        } else {
          client.close(code, data);
        }
      }
    }
  };
};
class NodePeer extends Peer {
  get remoteAddress() {
    return this._internal.nodeReq.socket?.remoteAddress;
  }
  get context() {
    return this._internal.nodeReq._context;
  }
  send(data, options) {
    const dataBuff = toBufferLike(data);
    const isBinary = typeof dataBuff !== "string";
    this._internal.ws.send(dataBuff, {
      compress: options?.compress,
      binary: isBinary,
      ...options
    });
    return 0;
  }
  publish(topic, data, options) {
    const dataBuff = toBufferLike(data);
    const isBinary = typeof data !== "string";
    const sendOptions = {
      compress: options?.compress,
      binary: isBinary,
      ...options
    };
    for (const peer of this._internal.peers) {
      if (peer !== this && peer._topics.has(topic)) {
        peer._internal.ws.send(dataBuff, sendOptions);
      }
    }
  }
  close(code, data) {
    this._internal.ws.close(code, data);
  }
  terminate() {
    this._internal.ws.terminate();
  }
}
class NodeReqProxy {
  _req;
  _headers;
  _url;
  constructor(req) {
    this._req = req;
  }
  get url() {
    if (!this._url) {
      const req = this._req;
      const host = req.headers["host"] || "localhost";
      const isSecure = req.socket?.encrypted ?? req.headers["x-forwarded-proto"] === "https";
      this._url = `${isSecure ? "https" : "http"}://${host}${req.url}`;
    }
    return this._url;
  }
  get headers() {
    if (!this._headers) {
      this._headers = new Headers(this._req.headers);
    }
    return this._headers;
  }
}
async function sendResponse(socket, res) {
  const head = [
    `HTTP/1.1 ${res.status || 200} ${res.statusText || ""}`,
    ...[...res.headers.entries()].map(
      ([key, value]) => `${encodeURIComponent(key)}: ${encodeURIComponent(value)}`
    )
  ];
  socket.write(head.join("\r\n") + "\r\n\r\n");
  if (res.body) {
    for await (const chunk of res.body) {
      socket.write(chunk);
    }
  }
  return new Promise((resolve) => {
    socket.end(() => {
      socket.destroy();
      resolve();
    });
  });
}

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

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
function decode$2(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$2(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$2(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$2(text.replace(PLUS_RE, " "));
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
function getQuery$1(input) {
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

function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode$1;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode$1(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode$1(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode$1(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

// src/utils.ts
var alphabetByEncoding = {};
var alphabetByValue = Array.from({ length: 64 });
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["-"] = 62;
alphabetByValue[62] = "-";
alphabetByEncoding["_"] = 63;
alphabetByValue[63] = "_";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
var stringToBuffer = (value) => {
  return new TextEncoder().encode(value);
};
var bufferToString = (value) => {
  return new TextDecoder().decode(value);
};
var base64urlDecode = (_input) => {
  const input = _input + "=".repeat((4 - _input.length % 4) % 4);
  let totalByteLength = input.length / 4 * 3;
  if (input.endsWith("==")) {
    totalByteLength -= 2;
  } else if (input.endsWith("=")) {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] === "=") {
        bits >>= bitsPerLetter;
      } else {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      }
    }
    const chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};
var base64urlEncode = (_input) => {
  const input = typeof _input === "string" ? stringToBuffer(_input) : _input;
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
  }
  return str;
};

// src/index.ts
var defaults = {
  encryption: { saltBits: 256, algorithm: "aes-256-cbc", iterations: 1, minPasswordlength: 32 },
  integrity: { saltBits: 256, algorithm: "sha256", iterations: 1, minPasswordlength: 32 },
  ttl: 0,
  timestampSkewSec: 60,
  localtimeOffsetMsec: 0
};
var clone = (options) => ({
  ...options,
  encryption: { ...options.encryption },
  integrity: { ...options.integrity }
});
var algorithms = {
  "aes-128-ctr": { keyBits: 128, ivBits: 128, name: "AES-CTR" },
  "aes-256-cbc": { keyBits: 256, ivBits: 128, name: "AES-CBC" },
  sha256: { keyBits: 256, name: "SHA-256" }
};
var macPrefix = "Fe26.2";
var randomBytes = (_crypto, size) => {
  const bytes = new Uint8Array(size);
  _crypto.getRandomValues(bytes);
  return bytes;
};
var randomBits = (_crypto, bits) => {
  if (bits < 1)
    throw new Error("Invalid random bits count");
  const bytes = Math.ceil(bits / 8);
  return randomBytes(_crypto, bytes);
};
var pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {
  const passwordBuffer = stringToBuffer(password);
  const importedKey = await _crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const saltBuffer = stringToBuffer(salt);
  const params = { name: "PBKDF2", hash, salt: saltBuffer, iterations };
  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
  return derivation;
};
var generateKey = async (_crypto, password, options) => {
  var _a;
  if (!(password == null ? void 0 : password.length))
    throw new Error("Empty password");
  if (options == null || typeof options !== "object")
    throw new Error("Bad options");
  if (!(options.algorithm in algorithms))
    throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  const result = {};
  const hmac = (_a = options.hmac) != null ? _a : false;
  const id = hmac ? { name: "HMAC", hash: algorithm.name } : { name: algorithm.name };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength)
      throw new Error(
        `Password string too short (min ${options.minPasswordlength} characters required)`
      );
    let { salt = "" } = options;
    if (!salt) {
      const { saltBits = 0 } = options;
      if (!saltBits)
        throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(_crypto, saltBits);
      salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(
      _crypto,
      password,
      salt,
      options.iterations,
      algorithm.keyBits / 8,
      "SHA-1"
    );
    const importedEncryptionKey = await _crypto.subtle.importKey(
      "raw",
      derivedKey,
      id,
      false,
      usage
    );
    result.key = importedEncryptionKey;
    result.salt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8)
      throw new Error("Key buffer (password) too small");
    result.key = await _crypto.subtle.importKey("raw", password, id, false, usage);
    result.salt = "";
  }
  if (options.iv)
    result.iv = options.iv;
  else if ("ivBits" in algorithm)
    result.iv = randomBits(_crypto, algorithm.ivBits);
  return result;
};
var getEncryptParams = (algorithm, key, data) => {
  return [
    algorithm === "aes-128-ctr" ? { name: "AES-CTR", counter: key.iv, length: 128 } : { name: "AES-CBC", iv: key.iv },
    key.key,
    typeof data === "string" ? stringToBuffer(data) : data
  ];
};
var encrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const encrypted = await _crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return { encrypted: new Uint8Array(encrypted), key };
};
var decrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const decrypted = await _crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return bufferToString(new Uint8Array(decrypted));
};
var hmacWithPassword = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, { ...options, hmac: true });
  const textBuffer = stringToBuffer(data);
  const signed = await _crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
  const digest = base64urlEncode(new Uint8Array(signed));
  return { digest, salt: key.salt };
};
var normalizePassword = (password) => {
  if (typeof password === "string" || password instanceof Uint8Array)
    return { encryption: password, integrity: password };
  if ("secret" in password)
    return { id: password.id, encryption: password.secret, integrity: password.secret };
  return { id: password.id, encryption: password.encryption, integrity: password.integrity };
};
var seal = async (_crypto, object, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const objectString = JSON.stringify(object);
  const pass = normalizePassword(password);
  const { id = "", encryption, integrity } = pass;
  if (id && !/^\w+$/.test(id))
    throw new Error("Invalid password id");
  const { encrypted, key } = await encrypt(_crypto, encryption, opts.encryption, objectString);
  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));
  const iv = base64urlEncode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(_crypto, integrity, opts.integrity, macBaseString);
  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;
  return sealed;
};
var fixedTimeComparison = (a, b) => {
  let mismatch = a.length === b.length ? 0 : 1;
  if (mismatch)
    b = a;
  for (let i = 0; i < a.length; i += 1)
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
};
var unseal = async (_crypto, sealed, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const parts = sealed.split("*");
  if (parts.length !== 8)
    throw new Error("Incorrect number of sealed components");
  const prefix = parts[0];
  let passwordId = parts[1];
  const encryptionSalt = parts[2];
  const encryptionIv = parts[3];
  const encryptedB64 = parts[4];
  const expiration = parts[5];
  const hmacSalt = parts[6];
  const hmac = parts[7];
  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix)
    throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration))
      throw new Error("Invalid expiration");
    const exp = Number.parseInt(expiration, 10);
    if (exp <= now - opts.timestampSkewSec * 1e3)
      throw new Error("Expired seal");
  }
  let pass = "";
  passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array)
    pass = password;
  else if (passwordId in password) {
    pass = password[passwordId];
  } else {
    throw new Error(`Cannot find password: ${passwordId}`);
  }
  pass = normalizePassword(pass);
  const macOptions = opts.integrity;
  macOptions.salt = hmacSalt;
  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);
  if (!fixedTimeComparison(mac.digest, hmac))
    throw new Error("Bad hmac value");
  const encrypted = base64urlDecode(encryptedB64);
  const decryptOptions = opts.encryption;
  decryptOptions.salt = encryptionSalt;
  decryptOptions.iv = base64urlDecode(encryptionIv);
  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);
  if (decrypted)
    return JSON.parse(decrypted);
  return null;
};

function o$1(n){throw new Error(`${n} is not implemented yet!`)}let i$2 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o$1("Readable.asyncIterator")}iterator(e){throw o$1("Readable.iterator")}map(e,t){throw o$1("Readable.map")}filter(e,t){throw o$1("Readable.filter")}forEach(e,t){throw o$1("Readable.forEach")}reduce(e,t,r){throw o$1("Readable.reduce")}find(e,t){throw o$1("Readable.find")}findIndex(e,t){throw o$1("Readable.findIndex")}some(e,t){throw o$1("Readable.some")}toArray(e){throw o$1("Readable.toArray")}every(e,t){throw o$1("Readable.every")}flatMap(e,t){throw o$1("Readable.flatMap")}drop(e,t){throw o$1("Readable.drop")}take(e,t){throw o$1("Readable.take")}asIndexedPairs(e){throw o$1("Readable.asIndexedPairs")}};let l$2 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$2=class c{allowHalfOpen=true;_destroy;constructor(e=new i$2,t=new l$2){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _$1(){return Object.assign(c$2.prototype,i$2.prototype),Object.assign(c$2.prototype,l$2.prototype),c$2}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_$1();let A$1 = class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i$2{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$2{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R$1(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S$1=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R$1(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S$1.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C$1(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function useBase(base, handler) {
  base = withoutTrailingSlash(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = withoutBase(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

async function validateData(data, fn) {
  try {
    const res = await fn(data);
    if (res === false) {
      throw createValidationError();
    }
    if (res === true) {
      return data;
    }
    return res ?? data;
  } catch (error) {
    throw createValidationError(error);
  }
}
function createValidationError(validateError) {
  throw createError$1({
    status: 400,
    statusMessage: "Validation Error",
    message: validateError?.message || "Validation Error",
    data: validateError
  });
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getValidatedQuery(event, validate) {
  const query = getQuery(event);
  return validateData(query, validate);
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode$2(params[key]);
    }
  }
  return params;
}
function getValidatedRouterParams(event, validate, opts = {}) {
  const routerParams = getRouterParams(event, opts);
  return validateData(routerParams, validate);
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function getMethod(event, defaultMethod = "GET") {
  return (event.node.req.method || defaultMethod).toUpperCase();
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
const getHeaders = getRequestHeaders;
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
async function readValidatedBody(event, validate) {
  const _body = await readBody(event, { strict: true });
  return validateData(_body, validate);
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [name, opts.domain || "", opts.path || "/"].join(";");
}

function parseCookies(event) {
  return parse$1(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

const getSessionPromise = Symbol("getSession");
const DEFAULT_NAME = "h3";
const DEFAULT_COOKIE = {
  path: "/",
  secure: true,
  httpOnly: true
};
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      return event.context.sessions?.[sessionName]?.id;
    },
    get data() {
      return event.context.sessions?.[sessionName]?.data || {};
    },
    update: async (update) => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot update read-only session.");
      }
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot clear read-only session.");
      }
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (!event.context.sessions) {
    event.context.sessions = /* @__PURE__ */ Object.create(null);
  }
  const existingSession = event.context.sessions[sessionName];
  if (existingSession) {
    return existingSession[getSessionPromise] || existingSession;
  }
  const session = {
    id: "",
    createdAt: 0,
    data: /* @__PURE__ */ Object.create(null)
  };
  event.context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = _getReqHeader(event, headerName);
    if (typeof headerValue === "string") {
      sealedSession = headerValue;
    }
  }
  if (!sealedSession) {
    const cookieHeader = _getReqHeader(event, "cookie");
    if (cookieHeader) {
      sealedSession = parse$1(cookieHeader + "")[sessionName];
    }
  }
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {
    }).then((unsealed) => {
      Object.assign(session, unsealed);
      delete event.context.sessions[sessionName][getSessionPromise];
      return session;
    });
    event.context.sessions[sessionName][getSessionPromise] = promise;
    await promise;
  }
  if (!session.id) {
    if (!isEvent(event)) {
      throw new Error(
        "Cannot initialize a new session. Make sure using `useSession(event)` in main handler."
      );
    }
    session.id = config.generateId?.() ?? (config.crypto || _crypto).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
function _getReqHeader(event, name) {
  if (event.node) {
    return event.node?.req.headers[name];
  }
  if (event.request) {
    return event.request.headers?.get(name);
  }
  if (event.headers) {
    return event.headers.get(name);
  }
}
async function updateSession(event, config, update) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  if (typeof update === "function") {
    update = update(session.data);
  }
  if (update) {
    Object.assign(session.data, update);
  }
  if (config.cookie !== false) {
    const sealed = await sealSession(event, config);
    setCookie(event, sessionName, sealed, {
      ...DEFAULT_COOKIE,
      expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : void 0,
      ...config.cookie
    });
  }
  return session;
}
async function sealSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  const sealed = await seal(config.crypto || _crypto, session, config.password, {
    ...defaults,
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  return sealed;
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await unseal(
    config.crypto || _crypto,
    sealed,
    config.password,
    {
      ...defaults,
      ttl: config.maxAge ? config.maxAge * 1e3 : 0,
      ...config.seal
    }
  );
  if (config.maxAge) {
    const age = Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY);
    if (age > config.maxAge * 1e3) {
      throw new Error("Session expired!");
    }
  }
  return unsealed;
}
function clearSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (event.context.sessions?.[sessionName]) {
    delete event.context.sessions[sessionName];
  }
  setCookie(event, sessionName, "", {
    ...DEFAULT_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}

function formatEventStreamMessage(message) {
  let result = "";
  if (message.id) {
    result += `id: ${message.id}
`;
  }
  if (message.event) {
    result += `event: ${message.event}
`;
  }
  if (typeof message.retry === "number" && Number.isInteger(message.retry)) {
    result += `retry: ${message.retry}
`;
  }
  result += `data: ${message.data}

`;
  return result;
}
function formatEventStreamMessages(messages) {
  let result = "";
  for (const msg of messages) {
    result += formatEventStreamMessage(msg);
  }
  return result;
}
function setEventStreamHeaders(event) {
  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "private, no-cache, no-store, no-transform, must-revalidate, max-age=0",
    "X-Accel-Buffering": "no"
    // prevent nginx from buffering the response
  };
  if (!isHttp2Request(event)) {
    headers.Connection = "keep-alive";
  }
  setResponseHeaders(event, headers);
}
function isHttp2Request(event) {
  return getHeader(event, ":path") !== void 0 && getHeader(event, ":method") !== void 0;
}

class EventStream {
  _h3Event;
  _transformStream = new TransformStream();
  _writer;
  _encoder = new TextEncoder();
  _writerIsClosed = false;
  _paused = false;
  _unsentData;
  _disposed = false;
  _handled = false;
  constructor(event, opts = {}) {
    this._h3Event = event;
    this._writer = this._transformStream.writable.getWriter();
    this._writer.closed.then(() => {
      this._writerIsClosed = true;
    });
    if (opts.autoclose !== false) {
      this._h3Event.node.req.on("close", () => this.close());
    }
  }
  async push(message) {
    if (typeof message === "string") {
      await this._sendEvent({ data: message });
      return;
    }
    if (Array.isArray(message)) {
      if (message.length === 0) {
        return;
      }
      if (typeof message[0] === "string") {
        const msgs = [];
        for (const item of message) {
          msgs.push({ data: item });
        }
        await this._sendEvents(msgs);
        return;
      }
      await this._sendEvents(message);
      return;
    }
    await this._sendEvent(message);
  }
  async _sendEvent(message) {
    if (this._writerIsClosed) {
      return;
    }
    if (this._paused && !this._unsentData) {
      this._unsentData = formatEventStreamMessage(message);
      return;
    }
    if (this._paused) {
      this._unsentData += formatEventStreamMessage(message);
      return;
    }
    await this._writer.write(this._encoder.encode(formatEventStreamMessage(message))).catch();
  }
  async _sendEvents(messages) {
    if (this._writerIsClosed) {
      return;
    }
    const payload = formatEventStreamMessages(messages);
    if (this._paused && !this._unsentData) {
      this._unsentData = payload;
      return;
    }
    if (this._paused) {
      this._unsentData += payload;
      return;
    }
    await this._writer.write(this._encoder.encode(payload)).catch();
  }
  pause() {
    this._paused = true;
  }
  get isPaused() {
    return this._paused;
  }
  async resume() {
    this._paused = false;
    await this.flush();
  }
  async flush() {
    if (this._writerIsClosed) {
      return;
    }
    if (this._unsentData?.length) {
      await this._writer.write(this._encoder.encode(this._unsentData));
      this._unsentData = void 0;
    }
  }
  /**
   * Close the stream and the connection if the stream is being sent to the client
   */
  async close() {
    if (this._disposed) {
      return;
    }
    if (!this._writerIsClosed) {
      try {
        await this._writer.close();
      } catch {
      }
    }
    if (this._h3Event._handled && this._handled && !this._h3Event.node.res.closed) {
      this._h3Event.node.res.end();
    }
    this._disposed = true;
  }
  /**
   * Triggers callback when the writable stream is closed.
   * It is also triggered after calling the `close()` method.
   */
  onClosed(cb) {
    this._writer.closed.then(cb);
  }
  async send() {
    setEventStreamHeaders(this._h3Event);
    setResponseStatus(this._h3Event, 200);
    this._h3Event._handled = true;
    this._handled = true;
    await sendStream(this._h3Event, this._transformStream.readable);
  }
}

function createEventStream(event, opts) {
  return new EventStream(event, opts);
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i$1=globalThis.AbortController,l$1=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$1;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$1(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i$1;
const ofetch = createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController });
const $fetch$1 = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive$1(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive$1(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$2 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$2,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {
  ["nuxt-og-image:fonts:Noto+Sans+SC-normal-400.ttf.base64"]: {
    import: () => import('../raw/Noto_Sans_SC-normal-400.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"dd0828-22a5m8oJvGh93dea0lutvzW/UU0\"","mtime":"2026-01-04T09:02:14.146Z"}
  },
  ["nuxt-og-image:fonts:Noto+Sans+SC-normal-700.ttf.base64"]: {
    import: () => import('../raw/Noto_Sans_SC-normal-700.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"dba558-XuQv4xDV4puzYCXyKWBVU3doFiA\"","mtime":"2026-01-04T09:02:14.061Z"}
  },
  ["nuxt-og-image:fonts:Rubik-normal-400.ttf.base64"]: {
    import: () => import('../raw/Rubik-normal-400.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"39d20-JvGkQ8rlUMXSNlexnpejRAaD8RU\"","mtime":"2026-01-04T09:02:13.605Z"}
  },
  ["nuxt-og-image:fonts:Rubik-normal-700.ttf.base64"]: {
    import: () => import('../raw/Rubik-normal-700.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"39d48-xfrt/Zo34dIhv8HF6OqhxLHtwkQ\"","mtime":"2026-01-04T09:02:13.613Z"}
  }
};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME$1 = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME$1, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME$1,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME$1,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c$1().serialize(o)}const c$1=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r$1="sha256",s="base64url";function digest(t){if(e)return e(r$1,t,s);const o=createHash(r$1).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
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

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

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

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

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
    "buildId": "25d630ff-86e5-495b-a811-6bd99e733ae5",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
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
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
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
    "gtag": {
      "enabled": true,
      "initMode": "auto",
      "id": "",
      "initCommands": [],
      "config": {},
      "tags": [],
      "loadingStrategy": "defer",
      "url": "https://www.googletagmanager.com/gtag/js"
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
        "name": "chronoframe",
        "env": "production"
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
    "isNuxtContentDocumentDriven": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "../public"
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

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
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
        const query = getQuery$1(event.path);
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
        const query = getQuery$1(event.path);
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
    const { template } = await import('../_/error-500.mjs');
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
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
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
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
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

const _h1zXdQSdRa5e374aHMZ8PG0s_aiWGpeXAgxnXmi8sM = defineNitroPlugin((nitroApp) => {
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

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"production"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const a=t==="test"||n(o.TEST),h=t==="dev"||t==="development";n(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function baseURL() {
  return useRuntimeConfig().app.baseURL;
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
const decompressUint8Array = (compressed) => {
  return Uint8Array.from(
    compressed.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))
  );
};

const isMapboxMap = (map, provider) => {
  return provider === "mapbox";
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
  const error = createError$1({
    statusCode: 401,
    message,
    data: oauthError
  });
  if (!onError) throw error;
  return onError(event, error);
}
function handleMissingConfiguration(event, provider, missingKeys, onError) {
  const environmentVariables = missingKeys.map((key) => `NUXT_OAUTH_${provider.toUpperCase()}_${snakeCase(key).toUpperCase()}`);
  const error = createError$1({
    statusCode: 500,
    message: `Missing ${environmentVariables.join(" or ")} env ${missingKeys.length > 1 ? "variables" : "variable"}.`
  });
  if (!onError) throw error;
  return onError(event, error);
}
function handleInvalidState(event, provider, onError) {
  const message = `${upperFirst(provider)} login failed: state mismatch`;
  const error = createError$1({
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
    config = defu(config, useRuntimeConfig(event).oauth?.github, {
      authorizationURL: "https://github.com/login/oauth/authorize",
      tokenURL: "https://github.com/login/oauth/access_token",
      apiURL: "https://api.github.com",
      authorizationParams: {}
    });
    const query = getQuery(event);
    if (query.error) {
      const error = createError$1({
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
        const error = createError$1({
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
    isDev: false,
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

function getSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
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

const logDir = path$1.join(process.cwd(), "data", "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}
const logFilePath = path$1.join(logDir, "app.log");
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
const settings = sqliteTable(
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
  settings: settings,
  settings_storage_providers: settings_storage_providers,
  users: users
}, Symbol.toStringTag, { value: 'Module' }));

const tables = schema;
let dbInstance = null;
let sqliteInstance = null;
function useDB() {
  if (!dbInstance || !sqliteInstance) {
    sqliteInstance = new Database("data/app.sqlite3", {
      verbose: void 0
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
    const hash = require$$1.createHash("md5").update(fileName).digest("hex");
    return `${fallbackPrefix}_${hash.substring(0, 8)}`;
  }
  if (cleanedName.length > maxLength) {
    const hash = require$$1.createHash("md5").update(fileName).digest("hex");
    const truncateLength = maxLength - 9;
    return `${cleanedName.substring(0, truncateLength)}_${hash.substring(0, 8)}`;
  }
  return cleanedName;
};
const generateSafePhotoId = (s3key) => {
  const baseName = path$1.basename(s3key, path$1.extname(s3key));
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
  await session.update(defu(data, session.data));
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
      throw createError$1({
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
    sessionConfig = defu({ password: process.env[envSessionPassword] }, runtimeConfig.session);
    if (!sessionConfig.password) {
      console.error(`[nuxt-auth-utils] ${envSessionPassword} environment variable or runtimeConfig.session.password was not set.`);
    }
  }
  const finalConfig = defu(config, sessionConfig);
  return useSession(event, finalConfig);
}

const _HWKab0Y25IgJaCkPUfWEBLyH_lvG3Tm5cmlRwkHWVg = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event) => {
    await getUserSession(event);
  });
});

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

const _GUCW73wr9cRPcPwmqDVLkhEmZ1REQVGMzE5jCofD70 = defineNitroPlugin(async (nitroApp) => {
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

const DRIVER_NAME = "lru-cache";
const lruCacheDriver = defineDriver((opts = {}) => {
  const cache = new LRUCache({
    max: 1e3,
    sizeCalculation: opts.maxSize || opts.maxEntrySize ? (value, key) => {
      return key.length + byteLength(value);
    } : void 0,
    ...opts
  });
  return {
    name: DRIVER_NAME,
    options: opts,
    getInstance: () => cache,
    hasItem(key) {
      return cache.has(key);
    },
    getItem(key) {
      return cache.get(key) ?? null;
    },
    getItemRaw(key) {
      return cache.get(key) ?? null;
    },
    setItem(key, value) {
      cache.set(key, value);
    },
    setItemRaw(key, value) {
      cache.set(key, value);
    },
    removeItem(key) {
      cache.delete(key);
    },
    getKeys() {
      return [...cache.keys()];
    },
    clear() {
      cache.clear();
    },
    dispose() {
      cache.clear();
    }
  };
});
function byteLength(value) {
  if (typeof Buffer !== "undefined") {
    try {
      return Buffer.byteLength(value);
    } catch {
    }
  }
  try {
    return typeof value === "string" ? value.length : JSON.stringify(value).length;
  } catch {
  }
  return 0;
}

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
  const _props = defu(options.props, Object.fromEntries(
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
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
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

const componentNames = [{"hash":"kCN-w-0p03as-Mta-3w6zhL-TOIBAqqYucwDtVMF0tw","pascalName":"OgImagePhoto","kebabName":"og-image-photo","path":"/Users/xiaoyou/Desktop/chronoframe/app/components/OgImage/Photo.vue","category":"app"},{"hash":"SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community"},{"hash":"tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY","pascalName":"Frame","kebabName":"frame","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community"},{"hash":"NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM","pascalName":"Nuxt","kebabName":"nuxt","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community"},{"hash":"VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community"},{"hash":"8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM","pascalName":"Pergel","kebabName":"pergel","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community"},{"hash":"b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community"},{"hash":"vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI","pascalName":"UnJs","kebabName":"un-js","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community"},{"hash":"hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw","pascalName":"Wave","kebabName":"wave","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community"},{"hash":"zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws","pascalName":"WithEmoji","kebabName":"with-emoji","path":"/Users/xiaoyou/Desktop/chronoframe/node_modules/.pnpm/nuxt-og-image@5.1.12_@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3___h3@1.15.4_magicast_cc5ffa53446ac9a9d3e84ffe6464de21/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community"}];

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
  satoriRendererInstance.instance = satoriRendererInstance.instance || await import('../_/renderer.mjs').then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await import('../_/empty.mjs').then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey$1(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery(e))
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
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  const query = getQuery(e);
  let queryParams = {};
  for (const k in query) {
    const v = String(query[k]);
    if (!v)
      continue;
    if (v.startsWith("{")) {
      try {
        queryParams[k] = JSON.parse(v);
      } catch (error) {
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
    return createError$1({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError$1({
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
    throw createError$1({
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
    const payload2 = parse$2(_payload || "{}");
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
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
    return [null, createError$1({
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
  const cachedHtmlPayload = await htmlPayloadCache.getItem(key);
  if (cachedHtmlPayload && cachedHtmlPayload.expiresAt < Date.now())
    return cachedHtmlPayload.value;
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
    return createError$1({
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
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  if (payload) {
    await htmlPayloadCache.setItem(key, {
      // 60 minutes for prerender, 10 seconds for runtime
      expiresAt: Date.now() + 1e3 * (10),
      value: payload
    });
  }
  return typeof payload === "object" ? payload : createError$1({
    statusCode: 500,
    statusMessage: "[Nuxt OG Image] Invalid payload type."
  });
}

const _4gKLBF8H2SMHpLP_QCRW0hFpMcSH5nkmnj2x_7MbVFo = defineNitroPlugin(async (nitro) => {
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
const fetchMessages = async (locale) => await $fetch(`/_i18n/${"kF8Cos2X"}/${locale}/messages.json`, {
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
      key: "locale_zh_45Hans_46json_64a8294e",
      load: () => import('../_/zh-Hans.mjs' /* webpackChunkName: "locale_zh_45Hans_46json_64a8294e" */),
      cache: true
    }
  ],
  "zh-Hant-TW": [
    {
      key: "locale_zh_45Hant_45TW_46json_0939d749",
      load: () => import('../_/zh-Hant-TW.mjs' /* webpackChunkName: "locale_zh_45Hant_45TW_46json_0939d749" */),
      cache: true
    }
  ],
  "zh-Hant-HK": [
    {
      key: "locale_zh_45Hant_45HK_46json_aa8eae12",
      load: () => import('../_/zh-Hant-HK.mjs' /* webpackChunkName: "locale_zh_45Hant_45HK_46json_aa8eae12" */),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_838264ce",
      load: () => import('../_/en.mjs' /* webpackChunkName: "locale_en_46json_838264ce" */),
      cache: true
    }
  ],
  ja: [
    {
      key: "locale_ja_46json_7a7620f8",
      load: () => import('../_/ja.mjs' /* webpackChunkName: "locale_ja_46json_7a7620f8" */),
      cache: true
    }
  ]
};
const vueI18nConfigs = [
  () => import('../_/i18n.config.mjs' /* webpackChunkName: "config_i18n_46config_46ts_489b3db7" */)
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

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const getCookieLocale = (event, cookieName) => {
  const cookieValue = getRequestHeader(event, "cookie") || "";
  return parse(cookieValue)[cookieName];
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
const _dgHF9aWzUioZ2eR78uMkNBgyBFWoUVT8kt1FpK390 = defineNitroPlugin(async (nitro) => {
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

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"cframe-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _x67B_rrU2CUQBCUvhZ4xR4rE1ByULTMjwlEbR81bxuU = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const _7p1zZf3T0ockGqAgK6qY5lTam2jrEwBOCA6_Kxckv4c = defineNitroPlugin(async (_nitroApp) => {
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

const __dB7DpWLFARjrTxXeDkUMg9gzt5Sxf9xMOJsc38II = defineNitroPlugin(async (_nitroApp) => {
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
    const absFile = path$2.resolve(this.config.basePath, relKey);
    return { absFile, relKey };
  }
  async create(key, fileBuffer) {
    var _a, _b;
    const { absFile, relKey } = this.resolveAbsoluteKey(key);
    await ensureDir(path$2.dirname(absFile));
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
    const baseDir = this.config.prefix ? path$2.resolve(this.config.basePath, this.config.prefix) : this.config.basePath;
    const walk = async (dir, relBase) => {
      const entries = await promises.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const abs = path$2.join(dir, entry.name);
        const rel = sanitizeKey(path$2.join(relBase, entry.name));
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
    const rawAbs = path$2.resolve(this.config.basePath, rawRel);
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
const _M5qPzb21sc7O0L3jIF82FL5aHjbSseIpsAdb4c42DA = nitroPlugin(async (nitroApp) => {
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
      if (!path$2.isAbsolute(localBase)) {
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
    const extName = path$1.extname(s3key).toLowerCase();
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
        const baseName = path$1.basename(s3key, path$1.extname(s3key));
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
        const tempDir = path$2.resolve(process.cwd(), "data/.exif_workdir");
        await mkdir(tempDir, { recursive: true });
        tempImagePath = path$2.resolve(tempDir, `${crypto.randomUUID()}.jpg`);
        await writeFile$1(tempImagePath, rawImageBuffer || imageBuffer);
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
          await unlink$1(tempImagePath).catch(noop);
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
  const fileName = path$2.basename(s3key, path$2.extname(s3key));
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
    title = cleanedFileName || path$2.basename(s3key, path$2.extname(s3key));
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
    const videoBaseName = path$1.basename(videoKey, path$1.extname(videoKey));
    const videoDir = path$1.dirname(videoKey);
    logger$1.chrono.info(`Processing LivePhoto video: ${videoKey}, looking for photo with base name: ${videoBaseName}`);
    const possiblePhotoKeys = [
      path$1.join(videoDir, `${videoBaseName}.HEIC`).replace(/\\/g, "/"),
      path$1.join(videoDir, `${videoBaseName}.heic`).replace(/\\/g, "/"),
      path$1.join(videoDir, `${videoBaseName}.JPG`).replace(/\\/g, "/"),
      path$1.join(videoDir, `${videoBaseName}.jpg`).replace(/\\/g, "/"),
      path$1.join(videoDir, `${videoBaseName}.JPEG`).replace(/\\/g, "/"),
      path$1.join(videoDir, `${videoBaseName}.jpeg`).replace(/\\/g, "/")
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
    const imageBaseName = path$1.basename(imageKey, path$1.extname(imageKey));
    const imageDir = path$1.dirname(imageKey);
    logger$1.chrono.info(`Checking for LivePhoto video for image: ${imageKey}, base name: ${imageBaseName}`);
    const possibleVideoKeys = [
      path$1.join(imageDir, `${imageBaseName}.MOV`).replace(/\\/g, "/"),
      path$1.join(imageDir, `${imageBaseName}.mov`).replace(/\\/g, "/")
    ];
    for (const videoKey of possibleVideoKeys) {
      try {
        const videoBuffer = await storageProvider.get(videoKey);
        if (videoBuffer) {
          const videoSize = videoBuffer.length;
          const fileName = path$1.basename(videoKey);
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
  const extName = path$1.extname(fileName).toLowerCase();
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
            const videoDir = path$1.dirname(videoKey);
            const videoBaseName = path$1.basename(videoKey, path$1.extname(videoKey));
            const possiblePhotoKeys = [
              path$1.join(videoDir, `${videoBaseName}.HEIC`).replace(/\\/g, "/"),
              path$1.join(videoDir, `${videoBaseName}.heic`).replace(/\\/g, "/"),
              path$1.join(videoDir, `${videoBaseName}.JPG`).replace(/\\/g, "/"),
              path$1.join(videoDir, `${videoBaseName}.jpg`).replace(/\\/g, "/"),
              path$1.join(videoDir, `${videoBaseName}.JPEG`).replace(/\\/g, "/"),
              path$1.join(videoDir, `${videoBaseName}.jpeg`).replace(/\\/g, "/")
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
    this.logger = logger2 || consola.withTag("worker-pool");
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

const _Czhu89IuU3xB5dAovpLryW2BeIOis74O8HmPhbTvg = defineNitroPlugin(async (_nitroApp) => {
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
  _h1zXdQSdRa5e374aHMZ8PG0s_aiWGpeXAgxnXmi8sM,
_HWKab0Y25IgJaCkPUfWEBLyH_lvG3Tm5cmlRwkHWVg,
_GUCW73wr9cRPcPwmqDVLkhEmZ1REQVGMzE5jCofD70,
_4gKLBF8H2SMHpLP_QCRW0hFpMcSH5nkmnj2x_7MbVFo,
_dgHF9aWzUioZ2eR78uMkNBgyBFWoUVT8kt1FpK390,
_x67B_rrU2CUQBCUvhZ4xR4rE1ByULTMjwlEbR81bxuU,
_7p1zZf3T0ockGqAgK6qY5lTam2jrEwBOCA6_Kxckv4c,
__dB7DpWLFARjrTxXeDkUMg9gzt5Sxf9xMOJsc38II,
_M5qPzb21sc7O0L3jIF82FL5aHjbSseIpsAdb4c42DA,
_Czhu89IuU3xB5dAovpLryW2BeIOis74O8HmPhbTvg
];

const assets = {
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"453d-PuTUZy2VloQEpqWiUzH48LpqCcI\"",
    "mtime": "2026-01-04T09:04:55.670Z",
    "size": 17725,
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"23a6-3uye7/h68X0uM1hi/Bx/iknsvk4\"",
    "mtime": "2026-01-04T09:04:55.670Z",
    "size": 9126,
    "path": "../public/favicon-96x96.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-uGvWCg3ZjsyDSx9msZm0BARVwUM\"",
    "mtime": "2026-01-04T09:04:55.670Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"207fcd-M7oI597CCNeXoE7i0V1s7bEZicw\"",
    "mtime": "2026-01-04T09:04:55.676Z",
    "size": 2129869,
    "path": "../public/favicon.svg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE\"",
    "mtime": "2026-01-04T09:04:55.671Z",
    "size": 24,
    "path": "../public/robots.txt"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1b4-OSnexUKym08GhwrwpMz8QjrTx8g\"",
    "mtime": "2026-01-04T09:04:55.671Z",
    "size": 436,
    "path": "../public/site.webmanifest"
  },
  "/web-app-manifest-192x192.png": {
    "type": "image/png",
    "etag": "\"6a2e-sMlys0SqiZjt6ZJ1lvokL4eRGwg\"",
    "mtime": "2026-01-04T09:04:55.671Z",
    "size": 27182,
    "path": "../public/web-app-manifest-192x192.png"
  },
  "/web-app-manifest-512x512.png": {
    "type": "image/png",
    "etag": "\"2d2a2-CHqrK6zAF2/Jhf4Mv9OuK0I1/E8\"",
    "mtime": "2026-01-04T09:04:55.672Z",
    "size": 184994,
    "path": "../public/web-app-manifest-512x512.png"
  },
  "/_nuxt/--MkVbCh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a01-AmMDgXhx0oWOZTSNKZ8Dz7PzXyk\"",
    "mtime": "2026-01-04T09:04:55.663Z",
    "size": 2561,
    "path": "../public/_nuxt/--MkVbCh.js"
  },
  "/_nuxt/-p0RoiZc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"457-gC9oMqIiZ7F1JGErC0hu1AxXMPI\"",
    "mtime": "2026-01-04T09:04:55.663Z",
    "size": 1111,
    "path": "../public/_nuxt/-p0RoiZc.js"
  },
  "/_nuxt/9BuRqA7D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"74e-/rDAqbPn00yuyOY/Js8ry3pDTyw\"",
    "mtime": "2026-01-04T09:04:55.646Z",
    "size": 1870,
    "path": "../public/_nuxt/9BuRqA7D.js"
  },
  "/_nuxt/B3HTTfzI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6a0-Lnz2qrVEsFZFmUnZjRnGGrx+Atc\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 42656,
    "path": "../public/_nuxt/B3HTTfzI.js"
  },
  "/_nuxt/B3yMmeEz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10ad6-cAEV0Q5XLzeQ3InRPPNk54mt4XI\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 68310,
    "path": "../public/_nuxt/B3yMmeEz.js"
  },
  "/_nuxt/B7XY3PeF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64-XQhtFOF0OxcfqF+eJ4EwwTWJtgY\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 100,
    "path": "../public/_nuxt/B7XY3PeF.js"
  },
  "/_nuxt/BHMWGS90.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a1d-IQdmqyyCylniuYpRi5zELx0U6PA\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 6685,
    "path": "../public/_nuxt/BHMWGS90.js"
  },
  "/_nuxt/BJ-5YYua.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3844-BN81hkuSEhFGNWJt9Mt7tEcw9f4\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 14404,
    "path": "../public/_nuxt/BJ-5YYua.js"
  },
  "/_nuxt/BMao8UwI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35e1-UeyOdf9HpGAy8T4XgaHBjmtlW+c\"",
    "mtime": "2026-01-04T09:04:55.647Z",
    "size": 13793,
    "path": "../public/_nuxt/BMao8UwI.js"
  },
  "/_nuxt/BNU43CeG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"929-CShqTqMZ8ergP3SqICHm/fMiQb0\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 2345,
    "path": "../public/_nuxt/BNU43CeG.js"
  },
  "/_nuxt/BRvw2RRB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5cb-j49kJF2+rvvRbQDcYQG6eVz+bsc\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 1483,
    "path": "../public/_nuxt/BRvw2RRB.js"
  },
  "/_nuxt/BUnQTuG_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6aa-ON2jOWSQoVtPsVsDPCp+qQC9Nzc\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 1706,
    "path": "../public/_nuxt/BUnQTuG_.js"
  },
  "/_nuxt/BdLvxhSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21b0-EFmnDz3cClPz5djJk+nODAJYzZY\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 8624,
    "path": "../public/_nuxt/BdLvxhSi.js"
  },
  "/_nuxt/BdRmTPAZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d5-8MX//Ajin/D/C23hPetAafvFYmQ\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 725,
    "path": "../public/_nuxt/BdRmTPAZ.js"
  },
  "/_nuxt/BdrDmh0N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d7f-MHcFwsC2sczLUZs08y+8YCM+Yz4\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 3455,
    "path": "../public/_nuxt/BdrDmh0N.js"
  },
  "/_nuxt/BeeNI1Ez.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e8-1pQFw/6BoQnT/hgrxetaj0y8Yvk\"",
    "mtime": "2026-01-04T09:04:55.648Z",
    "size": 232,
    "path": "../public/_nuxt/BeeNI1Ez.js"
  },
  "/_nuxt/Ber5b4Yw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"228c-IvYStV2wHZcNqIoUnVbvHI+jBms\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 8844,
    "path": "../public/_nuxt/Ber5b4Yw.js"
  },
  "/_nuxt/Bflrq9Dq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46df-Q1IlYsgijF2H3+ljjsLXPhAy2B0\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 18143,
    "path": "../public/_nuxt/Bflrq9Dq.js"
  },
  "/_nuxt/BjUXi3JB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1554-8qbYkJW13QChrewD6KIBu3UPfMk\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 5460,
    "path": "../public/_nuxt/BjUXi3JB.js"
  },
  "/_nuxt/Bk1GAyqG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c0e1-eYv2nACRZSuiSqy5vDbsxaUamfI\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 49377,
    "path": "../public/_nuxt/Bk1GAyqG.js"
  },
  "/_nuxt/Bomo6AKB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"796-to8ThNaX555ksmEtsm0zG/RWIgI\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 1942,
    "path": "../public/_nuxt/Bomo6AKB.js"
  },
  "/_nuxt/BwDbl1Gw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b79-oB9vXtHEhnaUeiopBUNNlBuh9ds\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 39801,
    "path": "../public/_nuxt/BwDbl1Gw.js"
  },
  "/_nuxt/C7QMAU0h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"539b-OAI0e+uTF5puhQCds0nbEu4WysY\"",
    "mtime": "2026-01-04T09:04:55.649Z",
    "size": 21403,
    "path": "../public/_nuxt/C7QMAU0h.js"
  },
  "/_nuxt/CEoFNtWn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2691-5A31pZ9MVKStCn3/ak7LveNgDCQ\"",
    "mtime": "2026-01-04T09:04:55.650Z",
    "size": 9873,
    "path": "../public/_nuxt/CEoFNtWn.js"
  },
  "/_nuxt/CMVuyCNH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b49c-Bb61qEz+7c3OYBCTDVEjLdXxVAc\"",
    "mtime": "2026-01-04T09:04:55.650Z",
    "size": 46236,
    "path": "../public/_nuxt/CMVuyCNH.js"
  },
  "/_nuxt/CNcvAVgZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d3-1Irk9XZxsvz9MgAG4dB2WF7dBSo\"",
    "mtime": "2026-01-04T09:04:55.650Z",
    "size": 467,
    "path": "../public/_nuxt/CNcvAVgZ.js"
  },
  "/_nuxt/CPPfWVL_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a595-9QjVS94VMmcipIW6MdoZCb80M+8\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 42389,
    "path": "../public/_nuxt/CPPfWVL_.js"
  },
  "/_nuxt/CPTTSFvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fe7-OTDTfY+jLjsHhYK3xSE508dE5wM\"",
    "mtime": "2026-01-04T09:04:55.650Z",
    "size": 4071,
    "path": "../public/_nuxt/CPTTSFvb.js"
  },
  "/_nuxt/CUD0rgH9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2231-thfKkAmLViD+AMqwKveSwPGCOSI\"",
    "mtime": "2026-01-04T09:04:55.650Z",
    "size": 8753,
    "path": "../public/_nuxt/CUD0rgH9.js"
  },
  "/_nuxt/CWquY0w7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"172c-UxJNIvoQ+YtOh7xlb3LKlLODzuw\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 5932,
    "path": "../public/_nuxt/CWquY0w7.js"
  },
  "/_nuxt/CXUgo2PS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f80-8ps7Qqjy6mcbeCJdDDow2e5yhDo\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 8064,
    "path": "../public/_nuxt/CXUgo2PS.js"
  },
  "/_nuxt/CYsNApKr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa1-LARIwkTQ+xXbXdlWKYBgKvynMmQ\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 2721,
    "path": "../public/_nuxt/CYsNApKr.js"
  },
  "/_nuxt/CdOLjBaA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dc4-hIPQw530Y2udZSji08CgVMOG3RY\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 15812,
    "path": "../public/_nuxt/CdOLjBaA.js"
  },
  "/_nuxt/ChlxyZLr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"71c-jEAVPh5Cj4av8DNp/hGmyOsfWWs\"",
    "mtime": "2026-01-04T09:04:55.651Z",
    "size": 1820,
    "path": "../public/_nuxt/ChlxyZLr.js"
  },
  "/_nuxt/Chyyx_Sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4138-IWqUzf4jMP+Qt/8ghTxwapYulZk\"",
    "mtime": "2026-01-04T09:04:55.652Z",
    "size": 16696,
    "path": "../public/_nuxt/Chyyx_Sw.js"
  },
  "/_nuxt/CijV29BG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b6a-6kfVrRWAC6QkfvLlYHi6Z+FSIz0\"",
    "mtime": "2026-01-04T09:04:55.652Z",
    "size": 39786,
    "path": "../public/_nuxt/CijV29BG.js"
  },
  "/_nuxt/CkD7dK57.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e0f4-k6SBc5x1EA4lPnkwrhV/7nQqOh4\"",
    "mtime": "2026-01-04T09:04:55.652Z",
    "size": 57588,
    "path": "../public/_nuxt/CkD7dK57.js"
  },
  "/_nuxt/CkRCXFjB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4073-/FN4bgMl8UKg/ONhqzGIHIQxFSw\"",
    "mtime": "2026-01-04T09:04:55.652Z",
    "size": 16499,
    "path": "../public/_nuxt/CkRCXFjB.js"
  },
  "/_nuxt/Cpc0UKJE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3915ff-/uz5UGQlGuiLX6mK3pB3NSWuwzk\"",
    "mtime": "2026-01-04T09:04:55.665Z",
    "size": 3741183,
    "path": "../public/_nuxt/Cpc0UKJE.js"
  },
  "/_nuxt/Ct_BEpIm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ddc-O0vEwiqrt0B7H8OJt+qQNloAq6I\"",
    "mtime": "2026-01-04T09:04:55.652Z",
    "size": 7644,
    "path": "../public/_nuxt/Ct_BEpIm.js"
  },
  "/_nuxt/CwQgfHAY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19c0b-7Bsm/mAJMOKOU9IBBACSzDnH9CU\"",
    "mtime": "2026-01-04T09:04:55.653Z",
    "size": 105483,
    "path": "../public/_nuxt/CwQgfHAY.js"
  },
  "/_nuxt/CxsYCXXx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"95-/riqbNP0sHiluRe91s8eNsb4Whs\"",
    "mtime": "2026-01-04T09:04:55.653Z",
    "size": 149,
    "path": "../public/_nuxt/CxsYCXXx.js"
  },
  "/_nuxt/CzWYPtMs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"86c-05MtcgGeBHQUCPj4zXRReOHqW0E\"",
    "mtime": "2026-01-04T09:04:55.653Z",
    "size": 2156,
    "path": "../public/_nuxt/CzWYPtMs.js"
  },
  "/_nuxt/D3HY_UOx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eae-Ecbx7sXgzwLX0SDbYW0b4ERvvwo\"",
    "mtime": "2026-01-04T09:04:55.653Z",
    "size": 3758,
    "path": "../public/_nuxt/D3HY_UOx.js"
  },
  "/_nuxt/D3oo-TiF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6da-C3hhSepKP5YdKetutSHzpkrLmEk\"",
    "mtime": "2026-01-04T09:04:55.653Z",
    "size": 1754,
    "path": "../public/_nuxt/D3oo-TiF.js"
  },
  "/_nuxt/D6vh96ne.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"754-IkWY6+1RNSf+5cqLkG9ITagLf20\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 1876,
    "path": "../public/_nuxt/D6vh96ne.js"
  },
  "/_nuxt/DAh1Cfes.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"84-3Rcqf5BBLtZSdwVc+/bf3sJ30IY\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 132,
    "path": "../public/_nuxt/DAh1Cfes.js"
  },
  "/_nuxt/DCjp7yB0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"958-OVRYXocTAFkFBRqUdPZqgAZ5Vp8\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 2392,
    "path": "../public/_nuxt/DCjp7yB0.js"
  },
  "/_nuxt/DO3xSySP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"530-FN/02uxsDC/W7vmfQaBiYLgouBM\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 1328,
    "path": "../public/_nuxt/DO3xSySP.js"
  },
  "/_nuxt/DUJhRkkJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c19e-EFkDs+g/4FTjQ6eUiAAPoLFu+9A\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 49566,
    "path": "../public/_nuxt/DUJhRkkJ.js"
  },
  "/_nuxt/DVdp-WJ5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa5-bQROW2Fc36vVzV5r9CkLHzv7qN4\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 2725,
    "path": "../public/_nuxt/DVdp-WJ5.js"
  },
  "/_nuxt/DWoFncj_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c4-A1zQtkUgsI1B6Nyru22wKicQjPw\"",
    "mtime": "2026-01-04T09:04:55.654Z",
    "size": 6084,
    "path": "../public/_nuxt/DWoFncj_.js"
  },
  "/_nuxt/DWqTcxU8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35c-0FG8Zz0wH7g25ibk7VDhLMWNISM\"",
    "mtime": "2026-01-04T09:04:55.655Z",
    "size": 860,
    "path": "../public/_nuxt/DWqTcxU8.js"
  },
  "/_nuxt/DY-ki2PF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bd-GtxK1poLQkrYDAWBdfDEMTMXcIY\"",
    "mtime": "2026-01-04T09:04:55.655Z",
    "size": 701,
    "path": "../public/_nuxt/DY-ki2PF.js"
  },
  "/_nuxt/DZlQVDzI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"284f-wmurD3PViISv37n9fDyeDpgMrXM\"",
    "mtime": "2026-01-04T09:04:55.655Z",
    "size": 10319,
    "path": "../public/_nuxt/DZlQVDzI.js"
  },
  "/_nuxt/DlfXkKGz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bc9-GDh0jkSoW6iChMhGwi56oGlDeLw\"",
    "mtime": "2026-01-04T09:04:55.656Z",
    "size": 7113,
    "path": "../public/_nuxt/DlfXkKGz.js"
  },
  "/_nuxt/DnnPpv4o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1059-Uiv+W676YWo/Wzh5/TOSkIPzQcI\"",
    "mtime": "2026-01-04T09:04:55.656Z",
    "size": 4185,
    "path": "../public/_nuxt/DnnPpv4o.js"
  },
  "/_nuxt/DqB7mOpj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d8c-seEOW6nMvd5pE/wcbbcMzstladE\"",
    "mtime": "2026-01-04T09:04:55.656Z",
    "size": 3468,
    "path": "../public/_nuxt/DqB7mOpj.js"
  },
  "/_nuxt/DxYeMTBz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a18-h6gkgp+nlvNAZgGb9/2yYwkTE3w\"",
    "mtime": "2026-01-04T09:04:55.657Z",
    "size": 2584,
    "path": "../public/_nuxt/DxYeMTBz.js"
  },
  "/_nuxt/GOWfq_GG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1312-g/AYflFZPoZggzMqhBMrWT6yOik\"",
    "mtime": "2026-01-04T09:04:55.656Z",
    "size": 4882,
    "path": "../public/_nuxt/GOWfq_GG.js"
  },
  "/_nuxt/JqEAUhj6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cf9-DrttWDyXHZVYgSJrJmzB5XrIc6A\"",
    "mtime": "2026-01-04T09:04:55.657Z",
    "size": 7417,
    "path": "../public/_nuxt/JqEAUhj6.js"
  },
  "/_nuxt/P0jURR1P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"806-G50MUkR8cVWMyCNnjPR07r9DaDI\"",
    "mtime": "2026-01-04T09:04:55.657Z",
    "size": 2054,
    "path": "../public/_nuxt/P0jURR1P.js"
  },
  "/_nuxt/TORaEdSH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"251-IGCa9iPaBdE/wojECoKTWpmHEVc\"",
    "mtime": "2026-01-04T09:04:55.657Z",
    "size": 593,
    "path": "../public/_nuxt/TORaEdSH.js"
  },
  "/_nuxt/WLSwQphl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d90-YqoDuXAAo798XqdxvPh9Ur8JVFU\"",
    "mtime": "2026-01-04T09:04:55.658Z",
    "size": 3472,
    "path": "../public/_nuxt/WLSwQphl.js"
  },
  "/_nuxt/d9a9iJTn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1577-dCSAqd4HnkwZX9q/Q+aBogyN7tw\"",
    "mtime": "2026-01-04T09:04:55.658Z",
    "size": 5495,
    "path": "../public/_nuxt/d9a9iJTn.js"
  },
  "/_nuxt/entry.CwlJEUht.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66b04-F7bQKJrrTH/TOXfChTNQqYqVHL0\"",
    "mtime": "2026-01-04T09:04:55.660Z",
    "size": 420612,
    "path": "../public/_nuxt/entry.CwlJEUht.css"
  },
  "/_nuxt/error-404.CmChmTQO.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97e-99EozAoxKvpGmNyoxILHtq4tVfA\"",
    "mtime": "2026-01-04T09:04:55.658Z",
    "size": 2430,
    "path": "../public/_nuxt/error-404.CmChmTQO.css"
  },
  "/_nuxt/error-500.CCJUzeKo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"773-7GayD2Lx2t4LL5wrPsyddKfUOpM\"",
    "mtime": "2026-01-04T09:04:55.658Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.CCJUzeKo.css"
  },
  "/_nuxt/fhyz3SjZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1551f-j+cwbtHSc9zguBzvMAN6CABmIns\"",
    "mtime": "2026-01-04T09:04:55.660Z",
    "size": 87327,
    "path": "../public/_nuxt/fhyz3SjZ.js"
  },
  "/_nuxt/globe.DMGnCX0D.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-u4CWTg8oeZmU+hdukAHkpkeFFeg\"",
    "mtime": "2026-01-04T09:04:55.659Z",
    "size": 66,
    "path": "../public/_nuxt/globe.DMGnCX0D.css"
  },
  "/_nuxt/h5q7TK7w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9da0-x3T5sdqVEcThOei62bf7KoBYsYk\"",
    "mtime": "2026-01-04T09:04:55.660Z",
    "size": 40352,
    "path": "../public/_nuxt/h5q7TK7w.js"
  },
  "/_nuxt/index.B82zvgKF.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"19b-H/GdXz/d2hAVPjaITj5ZhpVSdRo\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 411,
    "path": "../public/_nuxt/index.B82zvgKF.css"
  },
  "/_nuxt/index.CUy8DpGa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10be-uZbgK8wtKfGhk98qp0qcgDxGIz4\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 4286,
    "path": "../public/_nuxt/index.CUy8DpGa.css"
  },
  "/_nuxt/logs.CBfnDrfY.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-VS79t0VQ6cG3y9W4eiuTXfm7koE\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 544,
    "path": "../public/_nuxt/logs.CBfnDrfY.css"
  },
  "/_nuxt/masonry.DlwkMSp5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"779-YrrYjjGdcSrMkaFdaJdwumXg2Lo\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 1913,
    "path": "../public/_nuxt/masonry.DlwkMSp5.css"
  },
  "/_nuxt/nRRCFP1b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ac9-pD73K7Lr7AcDHk9dbd+o8VzkjQ8\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 35529,
    "path": "../public/_nuxt/nRRCFP1b.js"
  },
  "/_nuxt/oIv4vp1I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f97d-5+xcPCrDIuKTdmxbm0rDhpYXNt4\"",
    "mtime": "2026-01-04T09:04:55.661Z",
    "size": 63869,
    "path": "../public/_nuxt/oIv4vp1I.js"
  },
  "/_nuxt/oeIOuWWp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4990-ArlfyS0wAAucuC72Jn7WYp/bWXY\"",
    "mtime": "2026-01-04T09:04:55.662Z",
    "size": 18832,
    "path": "../public/_nuxt/oeIOuWWp.js"
  },
  "/_nuxt/photos.Crm_RP7c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77b-d33XkV6P/p83SzOShxEfCD9+GOM\"",
    "mtime": "2026-01-04T09:04:55.662Z",
    "size": 1915,
    "path": "../public/_nuxt/photos.Crm_RP7c.css"
  },
  "/_nuxt/queue.zRh0jZio.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-nfGvFPJC9hOy5qEoCW7hpFmhSXo\"",
    "mtime": "2026-01-04T09:04:55.662Z",
    "size": 50,
    "path": "../public/_nuxt/queue.zRh0jZio.css"
  },
  "/_nuxt/signin.pzOQo0bF.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"162-gT0YwTAgW716EVIxYdPWiOsWx3M\"",
    "mtime": "2026-01-04T09:04:55.662Z",
    "size": 354,
    "path": "../public/_nuxt/signin.pzOQo0bF.css"
  },
  "/_nuxt/tOpLFj0c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19e4-OPKaYOsrskBWXcq3OCHr20Oie/E\"",
    "mtime": "2026-01-04T09:04:55.662Z",
    "size": 6628,
    "path": "../public/_nuxt/tOpLFj0c.js"
  },
  "/_nuxt/uqxPgdyf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"329a-yp04hf+R4ti6YuG3TZL5Su2J5EI\"",
    "mtime": "2026-01-04T09:04:55.663Z",
    "size": 12954,
    "path": "../public/_nuxt/uqxPgdyf.js"
  },
  "/_nuxt/wnGbbVmH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7c-mignqc7cuHlG0JDRPC47HoYp/7w\"",
    "mtime": "2026-01-04T09:04:55.663Z",
    "size": 124,
    "path": "../public/_nuxt/wnGbbVmH.js"
  },
  "/_nuxt/yl6JOf5H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17ce-XCQgZHmRvj4MsaGu2GCygp9bA7g\"",
    "mtime": "2026-01-04T09:04:55.663Z",
    "size": 6094,
    "path": "../public/_nuxt/yl6JOf5H.js"
  },
  "/_fonts/00q7WQCY6lHO2v5YYv05YalmG0PriPcgsD9w0IglOtI-62H8jabzu0eKR36UkVjOJkye0A_MkodsgJqipEA_woU.woff2": {
    "type": "font/woff2",
    "etag": "\"1554-PdD34AH+UntMzqUO+GlZsoQZFts\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 5460,
    "path": "../public/_fonts/00q7WQCY6lHO2v5YYv05YalmG0PriPcgsD9w0IglOtI-62H8jabzu0eKR36UkVjOJkye0A_MkodsgJqipEA_woU.woff2"
  },
  "/_fonts/00q7WQCY6lHO2v5YYv05YalmG0PriPcgsD9w0IglOtI-l2B2xYMjy9ngL5pZJnO_b-Uoyk7DQGk81en2inHsl7k.woff": {
    "type": "font/woff",
    "etag": "\"1ad8-hC7Csd6BALfpaQMucyxoy2MSBuU\"",
    "mtime": "2026-01-04T09:04:55.595Z",
    "size": 6872,
    "path": "../public/_fonts/00q7WQCY6lHO2v5YYv05YalmG0PriPcgsD9w0IglOtI-l2B2xYMjy9ngL5pZJnO_b-Uoyk7DQGk81en2inHsl7k.woff"
  },
  "/_fonts/0i6hh_A9Tvu-xcRWpLnz0fjHUFfYYL4ka2HjnEW3Ek0-RdvTXouXZH_-OO5TSLmsVO4pAMXhVttgT8SMaoT-nKo.woff": {
    "type": "font/woff",
    "etag": "\"2974-kSOh4V2hTmoeUrqVM3tuCgUiUeQ\"",
    "mtime": "2026-01-04T09:04:55.596Z",
    "size": 10612,
    "path": "../public/_fonts/0i6hh_A9Tvu-xcRWpLnz0fjHUFfYYL4ka2HjnEW3Ek0-RdvTXouXZH_-OO5TSLmsVO4pAMXhVttgT8SMaoT-nKo.woff"
  },
  "/_fonts/0i6hh_A9Tvu-xcRWpLnz0fjHUFfYYL4ka2HjnEW3Ek0-zYpB9wHAexOdu9N7tnoh_6GutA7DBbMI5gO883GukI4.woff2": {
    "type": "font/woff2",
    "etag": "\"2148-HfTa3CmdUm3lrGeWarFQkZfL2Hk\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 8520,
    "path": "../public/_fonts/0i6hh_A9Tvu-xcRWpLnz0fjHUFfYYL4ka2HjnEW3Ek0-zYpB9wHAexOdu9N7tnoh_6GutA7DBbMI5gO883GukI4.woff2"
  },
  "/_fonts/1PM25-OeZC1jSE1FtLpiLw6k4R2_g4Gd37t3S4GDJ54-7PFR__NC9I4otx_7QzWg2qkJIP0bZFYKGvJrnAv4c9c.woff": {
    "type": "font/woff",
    "etag": "\"1ff4-rUMpaZ+rTB4JvzvLEXQjkIrQzDU\"",
    "mtime": "2026-01-04T09:04:55.596Z",
    "size": 8180,
    "path": "../public/_fonts/1PM25-OeZC1jSE1FtLpiLw6k4R2_g4Gd37t3S4GDJ54-7PFR__NC9I4otx_7QzWg2qkJIP0bZFYKGvJrnAv4c9c.woff"
  },
  "/_fonts/1PM25-OeZC1jSE1FtLpiLw6k4R2_g4Gd37t3S4GDJ54-_vn0Jvh8qQ6_D3FjE0cZt4lWhm-us6wqWxfZe5SjcFc.woff2": {
    "type": "font/woff2",
    "etag": "\"18a8-H3V/ZdiqAOMwSwMydWLr4OLBINY\"",
    "mtime": "2026-01-04T09:04:55.596Z",
    "size": 6312,
    "path": "../public/_fonts/1PM25-OeZC1jSE1FtLpiLw6k4R2_g4Gd37t3S4GDJ54-_vn0Jvh8qQ6_D3FjE0cZt4lWhm-us6wqWxfZe5SjcFc.woff2"
  },
  "/_fonts/2ukIPTwOzCCApdUsitCBaPCL_yFaLc2Gr-ThOW6YRVQ-9KCsK24dtic9oKNgHgaMPlgSDotUo_UyMFmnYBmOze4.woff": {
    "type": "font/woff",
    "etag": "\"5e94-i7LAVurZu1d26QL3ekhk3SsGzgE\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 24212,
    "path": "../public/_fonts/2ukIPTwOzCCApdUsitCBaPCL_yFaLc2Gr-ThOW6YRVQ-9KCsK24dtic9oKNgHgaMPlgSDotUo_UyMFmnYBmOze4.woff"
  },
  "/_fonts/2ukIPTwOzCCApdUsitCBaPCL_yFaLc2Gr-ThOW6YRVQ-L7caRRqlsdZOCj3Ir3om8YITHp5vyYvpKSw9ehxlCL8.woff2": {
    "type": "font/woff2",
    "etag": "\"4a5c-vwJ50DIEQsT8G9NhSAfXQxjCUcY\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 19036,
    "path": "../public/_fonts/2ukIPTwOzCCApdUsitCBaPCL_yFaLc2Gr-ThOW6YRVQ-L7caRRqlsdZOCj3Ir3om8YITHp5vyYvpKSw9ehxlCL8.woff2"
  },
  "/_fonts/3n7qdgf3gaGSxZNrm99RQKJ8dso5tKcweRirBC8cv2Y-dP2SCOLHwYi9_cQGrg_1dXHAXh8wLW_Vhvze05t1dZg.woff": {
    "type": "font/woff",
    "etag": "\"2690-5CZFCEGXmvSTOgugQEALFIjQ/9c\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 9872,
    "path": "../public/_fonts/3n7qdgf3gaGSxZNrm99RQKJ8dso5tKcweRirBC8cv2Y-dP2SCOLHwYi9_cQGrg_1dXHAXh8wLW_Vhvze05t1dZg.woff"
  },
  "/_fonts/3n7qdgf3gaGSxZNrm99RQKJ8dso5tKcweRirBC8cv2Y-hsvgx8OaM__2EYBdbMVOxMza4oCUjsnR2VCCfs5pdnM.woff2": {
    "type": "font/woff2",
    "etag": "\"1edc-NLoPwt+Gy/xZmj4J53ihnuEz9yA\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 7900,
    "path": "../public/_fonts/3n7qdgf3gaGSxZNrm99RQKJ8dso5tKcweRirBC8cv2Y-hsvgx8OaM__2EYBdbMVOxMza4oCUjsnR2VCCfs5pdnM.woff2"
  },
  "/_fonts/57_9QnUUk61ym1TOD-URC1HfdygQrYKydD56r766F94-k7KmnJrFVrzj1VK53PO6RuYQviRPm_Ua3z87LrC3R1U.woff2": {
    "type": "font/woff2",
    "etag": "\"4458-wovXaINMFva2y6XtVKk1Soos7iA\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 17496,
    "path": "../public/_fonts/57_9QnUUk61ym1TOD-URC1HfdygQrYKydD56r766F94-k7KmnJrFVrzj1VK53PO6RuYQviRPm_Ua3z87LrC3R1U.woff2"
  },
  "/_fonts/57_9QnUUk61ym1TOD-URC1HfdygQrYKydD56r766F94-omaeMTBQshcMy3OwnakM8Uhx6yuj8TT7eZ7oxrVTFEk.woff": {
    "type": "font/woff",
    "etag": "\"5740-n3b2E2SOTu8higX1UeFNyGHhv6U\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 22336,
    "path": "../public/_fonts/57_9QnUUk61ym1TOD-URC1HfdygQrYKydD56r766F94-omaeMTBQshcMy3OwnakM8Uhx6yuj8TT7eZ7oxrVTFEk.woff"
  },
  "/_fonts/5EUeYpQo-cEXEQg3HloHpUIZ_apWKCGvXhm5hrEeckk-1jEh44A8bM5_R5ZrjtfuXV2nFIT2StPnBevq1CNWOnk.woff": {
    "type": "font/woff",
    "etag": "\"57b4-Gs5gco8oAaUsgB6ZlJG6FDrHIHE\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 22452,
    "path": "../public/_fonts/5EUeYpQo-cEXEQg3HloHpUIZ_apWKCGvXhm5hrEeckk-1jEh44A8bM5_R5ZrjtfuXV2nFIT2StPnBevq1CNWOnk.woff"
  },
  "/_fonts/5EUeYpQo-cEXEQg3HloHpUIZ_apWKCGvXhm5hrEeckk-aqZj_Y82llhlSvhvR713eC5q_WBtLS0vAn1hcWOrvgg.woff2": {
    "type": "font/woff2",
    "etag": "\"451c-HZTtuiEmHvPa0A3A5KRQTfQjwNw\"",
    "mtime": "2026-01-04T09:04:55.597Z",
    "size": 17692,
    "path": "../public/_fonts/5EUeYpQo-cEXEQg3HloHpUIZ_apWKCGvXhm5hrEeckk-aqZj_Y82llhlSvhvR713eC5q_WBtLS0vAn1hcWOrvgg.woff2"
  },
  "/_fonts/7XKEJmCTpvLbR21EnIxIQBpKeHvmynnJ39EXXwhg2Fc-4AOfvIRP3UmkPMa8PfE_A4F9d4zzRuObUPBSy2MdPYc.woff2": {
    "type": "font/woff2",
    "etag": "\"1be8-bir5cbjsZuelXL80ayXU8hTzuLQ\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 7144,
    "path": "../public/_fonts/7XKEJmCTpvLbR21EnIxIQBpKeHvmynnJ39EXXwhg2Fc-4AOfvIRP3UmkPMa8PfE_A4F9d4zzRuObUPBSy2MdPYc.woff2"
  },
  "/_fonts/7XKEJmCTpvLbR21EnIxIQBpKeHvmynnJ39EXXwhg2Fc-q74PeHevtl3pNOmsqhS26zS3u8C24Tx_qdZsHupAAyg.woff": {
    "type": "font/woff",
    "etag": "\"23e4-uOvEsxNA1+LOsfRoSlA31UEnGFc\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 9188,
    "path": "../public/_fonts/7XKEJmCTpvLbR21EnIxIQBpKeHvmynnJ39EXXwhg2Fc-q74PeHevtl3pNOmsqhS26zS3u8C24Tx_qdZsHupAAyg.woff"
  },
  "/_fonts/7a4hYJ7lZqG0l4eEfHmjkazC0ivT0kS7f_YzextL9c0-O7VCcR1zbpnb9A8POJsTKi0CYqWkHzssn02_ciYIWAA.woff2": {
    "type": "font/woff2",
    "etag": "\"7e18-gwTOHjnck8KMqNxXUic1JaRi6OU\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 32280,
    "path": "../public/_fonts/7a4hYJ7lZqG0l4eEfHmjkazC0ivT0kS7f_YzextL9c0-O7VCcR1zbpnb9A8POJsTKi0CYqWkHzssn02_ciYIWAA.woff2"
  },
  "/_fonts/7a4hYJ7lZqG0l4eEfHmjkazC0ivT0kS7f_YzextL9c0-rX7ewuqWYArFbyKHVWPx3FCoZ4baN97NMoJtVrJk6SQ.woff": {
    "type": "font/woff",
    "etag": "\"69dc-OJ8H3Xv8z7rs20zqJlfKnIHUxrQ\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 27100,
    "path": "../public/_fonts/7a4hYJ7lZqG0l4eEfHmjkazC0ivT0kS7f_YzextL9c0-rX7ewuqWYArFbyKHVWPx3FCoZ4baN97NMoJtVrJk6SQ.woff"
  },
  "/_fonts/7dqlErbzOdgpVUF2XjXUglk-FY7TCJqrb8Z12rgBdqM-6TkjQH0D27804biV_TGUdCx9pKEhh18L0OqhjyGyGr0.woff": {
    "type": "font/woff",
    "etag": "\"3a80-g2eEfko7TLm+ySzEWuwb58RTnpI\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 14976,
    "path": "../public/_fonts/7dqlErbzOdgpVUF2XjXUglk-FY7TCJqrb8Z12rgBdqM-6TkjQH0D27804biV_TGUdCx9pKEhh18L0OqhjyGyGr0.woff"
  },
  "/_fonts/7dqlErbzOdgpVUF2XjXUglk-FY7TCJqrb8Z12rgBdqM-P_k6h31nK5MgbgPcsJ0qTSlFY_bKyBf5LpcLOrb4sgg.woff2": {
    "type": "font/woff2",
    "etag": "\"2d5c-eQSy2g41cnKBIxelasQeMagnBhY\"",
    "mtime": "2026-01-04T09:04:55.598Z",
    "size": 11612,
    "path": "../public/_fonts/7dqlErbzOdgpVUF2XjXUglk-FY7TCJqrb8Z12rgBdqM-P_k6h31nK5MgbgPcsJ0qTSlFY_bKyBf5LpcLOrb4sgg.woff2"
  },
  "/_fonts/9YpL39J75Yiplnd_M0TgrXdI4OImINJVDLJEPex9JjE-SRxYGYqFq_ycwu3PPI4XGfLPSLQILkg0ZPSM771qWRs.woff2": {
    "type": "font/woff2",
    "etag": "\"156c-AQG5a4NFZjcmQAMuVJxjBSkaCeo\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 5484,
    "path": "../public/_fonts/9YpL39J75Yiplnd_M0TgrXdI4OImINJVDLJEPex9JjE-SRxYGYqFq_ycwu3PPI4XGfLPSLQILkg0ZPSM771qWRs.woff2"
  },
  "/_fonts/9YpL39J75Yiplnd_M0TgrXdI4OImINJVDLJEPex9JjE-gJ10Z6352buzh2RFR_TuquVd2VXqdBOPbN1TkYNgziw.woff": {
    "type": "font/woff",
    "etag": "\"1b20-RFEH52y1etw52Mh3FwuP9F9JQG8\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 6944,
    "path": "../public/_fonts/9YpL39J75Yiplnd_M0TgrXdI4OImINJVDLJEPex9JjE-gJ10Z6352buzh2RFR_TuquVd2VXqdBOPbN1TkYNgziw.woff"
  },
  "/_fonts/AcMD2VxW-yXFblw2mc9Om3P9EBh8SGMPTgNN74s4XZI-0D7Ek3opdFuZMotDovT0fWObLbgc1I1Ah7TuIXPmI_4.woff2": {
    "type": "font/woff2",
    "etag": "\"4ac4-kQGAd3LCggbviSenUctfDRqvti0\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 19140,
    "path": "../public/_fonts/AcMD2VxW-yXFblw2mc9Om3P9EBh8SGMPTgNN74s4XZI-0D7Ek3opdFuZMotDovT0fWObLbgc1I1Ah7TuIXPmI_4.woff2"
  },
  "/_fonts/AcMD2VxW-yXFblw2mc9Om3P9EBh8SGMPTgNN74s4XZI-5sxK_KNPWwpjHtjWf_i3YSqH95fBh6GsnhRYmR5nRro.woff": {
    "type": "font/woff",
    "etag": "\"5e0c-aVCdEuK1AUNsxGNvnn9ej91mpVc\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 24076,
    "path": "../public/_fonts/AcMD2VxW-yXFblw2mc9Om3P9EBh8SGMPTgNN74s4XZI-5sxK_KNPWwpjHtjWf_i3YSqH95fBh6GsnhRYmR5nRro.woff"
  },
  "/_fonts/BVs9zwjzAgd8rHkSzqv5I5cPORwUjFNC1DcxxTHFrY0-2aEv3fEMYs1e54yDVDZwLPQ_yUrNBtohwGjpVMScyxw.woff2": {
    "type": "font/woff2",
    "etag": "\"4bc4-0JJ1SjEHOCX+y1CQoM3H1dsMnq8\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 19396,
    "path": "../public/_fonts/BVs9zwjzAgd8rHkSzqv5I5cPORwUjFNC1DcxxTHFrY0-2aEv3fEMYs1e54yDVDZwLPQ_yUrNBtohwGjpVMScyxw.woff2"
  },
  "/_fonts/BVs9zwjzAgd8rHkSzqv5I5cPORwUjFNC1DcxxTHFrY0-yErUTCqU4Q6qXYixoMBZiBO_5O_CPjSJSvlYzF6T7fM.woff": {
    "type": "font/woff",
    "etag": "\"5f7c-WAULeYuT7g1bocBlZvXNvV+VwRA\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 24444,
    "path": "../public/_fonts/BVs9zwjzAgd8rHkSzqv5I5cPORwUjFNC1DcxxTHFrY0-yErUTCqU4Q6qXYixoMBZiBO_5O_CPjSJSvlYzF6T7fM.woff"
  },
  "/_fonts/CFIz3vS6FaERq7cSHRxNc0U62r_YcnvL34oIjLdlit8-rycqujDCaPIi99xHd3Ft9IDqcOQ_pWGHxnoh6A64Rtk.woff": {
    "type": "font/woff",
    "etag": "\"3648-5jQwijsSMqaAGRJ1mkOQrYAGKEw\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 13896,
    "path": "../public/_fonts/CFIz3vS6FaERq7cSHRxNc0U62r_YcnvL34oIjLdlit8-rycqujDCaPIi99xHd3Ft9IDqcOQ_pWGHxnoh6A64Rtk.woff"
  },
  "/_fonts/CFIz3vS6FaERq7cSHRxNc0U62r_YcnvL34oIjLdlit8-sXWUA8bWMuCPwldQPC2n8bi_tpmq7p9kX5a1XsxlDzg.woff2": {
    "type": "font/woff2",
    "etag": "\"2a68-xrHMR90x5EKlg9hRIN1+I8yQ5VI\"",
    "mtime": "2026-01-04T09:04:55.599Z",
    "size": 10856,
    "path": "../public/_fonts/CFIz3vS6FaERq7cSHRxNc0U62r_YcnvL34oIjLdlit8-sXWUA8bWMuCPwldQPC2n8bi_tpmq7p9kX5a1XsxlDzg.woff2"
  },
  "/_fonts/DVEgWbQ8evc4V67RSkZS0RR_yMISum1vtasiKJ05_Lw-7S1eoZNCgTDWeoqZ1_1o4EKZC5ls4I8DqFUyTabF6a0.woff": {
    "type": "font/woff",
    "etag": "\"57e0-ZKgqiOnOrsjXzBl/hAJVAi40bIw\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 22496,
    "path": "../public/_fonts/DVEgWbQ8evc4V67RSkZS0RR_yMISum1vtasiKJ05_Lw-7S1eoZNCgTDWeoqZ1_1o4EKZC5ls4I8DqFUyTabF6a0.woff"
  },
  "/_fonts/DVEgWbQ8evc4V67RSkZS0RR_yMISum1vtasiKJ05_Lw-Ckeg7W2_qsBA5tda4DpOlBptxdjRBxYU7gAbjudFxLc.woff2": {
    "type": "font/woff2",
    "etag": "\"44fc-HROE6l7zXnciAeMW5XTI53F/HWI\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 17660,
    "path": "../public/_fonts/DVEgWbQ8evc4V67RSkZS0RR_yMISum1vtasiKJ05_Lw-Ckeg7W2_qsBA5tda4DpOlBptxdjRBxYU7gAbjudFxLc.woff2"
  },
  "/_fonts/DrMN3VNiHWm921TptHzPvhuDyFuaJIpixwInNMGJNHk-Uvb5VApyp3RGmFHcXa7kniKqDw1_AJmpP5lXGxsRE0M.woff2": {
    "type": "font/woff2",
    "etag": "\"4be8-A+9lTwI06pal2dB9nw7KhCRSXgY\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 19432,
    "path": "../public/_fonts/DrMN3VNiHWm921TptHzPvhuDyFuaJIpixwInNMGJNHk-Uvb5VApyp3RGmFHcXa7kniKqDw1_AJmpP5lXGxsRE0M.woff2"
  },
  "/_fonts/DrMN3VNiHWm921TptHzPvhuDyFuaJIpixwInNMGJNHk-Y9U_tTuU2OHGFhKCepqxEzhKfY4e3K1sO34FUNcbDuY.woff": {
    "type": "font/woff",
    "etag": "\"5fa0-jqMnq447SU36JWvNqS+l8MbnVSU\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 24480,
    "path": "../public/_fonts/DrMN3VNiHWm921TptHzPvhuDyFuaJIpixwInNMGJNHk-Y9U_tTuU2OHGFhKCepqxEzhKfY4e3K1sO34FUNcbDuY.woff"
  },
  "/_fonts/FCxPRobMIdExNBOaSG6MsX4T46qo49T36f9YPVdrfH0-5Ffn5QOk0KO6gwWngEnVXrB6K01Myapunhf__BHfkr8.woff": {
    "type": "font/woff",
    "etag": "\"23c4-5TtDEqn8E3mSp2OF0TsGKxvqE7U\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 9156,
    "path": "../public/_fonts/FCxPRobMIdExNBOaSG6MsX4T46qo49T36f9YPVdrfH0-5Ffn5QOk0KO6gwWngEnVXrB6K01Myapunhf__BHfkr8.woff"
  },
  "/_fonts/FCxPRobMIdExNBOaSG6MsX4T46qo49T36f9YPVdrfH0-QBHqlLrnFdPATkZkOFNz___LTzr8PA1HWD4EDVVmrnc.woff2": {
    "type": "font/woff2",
    "etag": "\"1bec-jk/Nt5QWYcQkUxfD4zm73DIJpZ8\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 7148,
    "path": "../public/_fonts/FCxPRobMIdExNBOaSG6MsX4T46qo49T36f9YPVdrfH0-QBHqlLrnFdPATkZkOFNz___LTzr8PA1HWD4EDVVmrnc.woff2"
  },
  "/_fonts/G-G5eA1Ro1xOzVwT19fFbDHof-h2nR0h4t3Hcp8RQKo-AXJ7gXEGs3U0gvEbxjssoh_q-0EYvT-Rm4KGK2hu-Yo.woff": {
    "type": "font/woff",
    "etag": "\"42c4-It+rsf5ztn50Ri4nYSidAq5YME8\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 17092,
    "path": "../public/_fonts/G-G5eA1Ro1xOzVwT19fFbDHof-h2nR0h4t3Hcp8RQKo-AXJ7gXEGs3U0gvEbxjssoh_q-0EYvT-Rm4KGK2hu-Yo.woff"
  },
  "/_fonts/G-G5eA1Ro1xOzVwT19fFbDHof-h2nR0h4t3Hcp8RQKo-dL02b756c5W50A_Qyl4CIl4gnpjlKaa5GRNJmK5dpGE.woff2": {
    "type": "font/woff2",
    "etag": "\"596c-4NaN5fbsRfrUqoR5iI7Rm9sxg9w\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 22892,
    "path": "../public/_fonts/G-G5eA1Ro1xOzVwT19fFbDHof-h2nR0h4t3Hcp8RQKo-dL02b756c5W50A_Qyl4CIl4gnpjlKaa5GRNJmK5dpGE.woff2"
  },
  "/_fonts/HIyiD3RzLmjn5vNevmoNawaKFAsm166FT2aRXm3Wrb0-4RZuA6RsUx2FR30_LSESztOfsDkqs86zgWOrKFOysxc.woff": {
    "type": "font/woff",
    "etag": "\"2994-WX8r3FYWvN+xq4pp67msUSuH0dw\"",
    "mtime": "2026-01-04T09:04:55.600Z",
    "size": 10644,
    "path": "../public/_fonts/HIyiD3RzLmjn5vNevmoNawaKFAsm166FT2aRXm3Wrb0-4RZuA6RsUx2FR30_LSESztOfsDkqs86zgWOrKFOysxc.woff"
  },
  "/_fonts/HIyiD3RzLmjn5vNevmoNawaKFAsm166FT2aRXm3Wrb0-IHqLCAJsGk_3LtdOh05ELmm6jeCVSoLnj_ZKHhQVGRI.woff2": {
    "type": "font/woff2",
    "etag": "\"21a8-CZSkPhe9y4L0PmezXfLbVHiihfs\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 8616,
    "path": "../public/_fonts/HIyiD3RzLmjn5vNevmoNawaKFAsm166FT2aRXm3Wrb0-IHqLCAJsGk_3LtdOh05ELmm6jeCVSoLnj_ZKHhQVGRI.woff2"
  },
  "/_fonts/HcbX8bHSMTUXchrpkoCzrezQ_7ldYWMZElH-zWH_Jm4-2_88RMhLyd3lgjk7MzaV2weBztHRtauSUNKMDAIjJOc.woff": {
    "type": "font/woff",
    "etag": "\"22d4-yivbbMbr3V043+5Uzo6AsmrM8iQ\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 8916,
    "path": "../public/_fonts/HcbX8bHSMTUXchrpkoCzrezQ_7ldYWMZElH-zWH_Jm4-2_88RMhLyd3lgjk7MzaV2weBztHRtauSUNKMDAIjJOc.woff"
  },
  "/_fonts/HcbX8bHSMTUXchrpkoCzrezQ_7ldYWMZElH-zWH_Jm4-DrUM33tW_4CZxM52AXWe_iRzZTTyB0QUYZpgTzIibgE.woff2": {
    "type": "font/woff2",
    "etag": "\"2c44-AsRj+UBbRwFoJpLU+GPMyNrfw/0\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 11332,
    "path": "../public/_fonts/HcbX8bHSMTUXchrpkoCzrezQ_7ldYWMZElH-zWH_Jm4-DrUM33tW_4CZxM52AXWe_iRzZTTyB0QUYZpgTzIibgE.woff2"
  },
  "/_fonts/I_C-sQOIqi_0oYhMvDYtx0bdEKbD7yYxpxsWodusarY-o_VMncBcC594dzpcWmetmMiQeQvoHmGcQfGhOYuTLvk.woff2": {
    "type": "font/woff2",
    "etag": "\"4bac-qKCKwCP4Aqe8/NpvjnhK1MvZHXY\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 19372,
    "path": "../public/_fonts/I_C-sQOIqi_0oYhMvDYtx0bdEKbD7yYxpxsWodusarY-o_VMncBcC594dzpcWmetmMiQeQvoHmGcQfGhOYuTLvk.woff2"
  },
  "/_fonts/I_C-sQOIqi_0oYhMvDYtx0bdEKbD7yYxpxsWodusarY-ogTKLuxilCd3jBpyWmhhqjGLguibg8dm8b0V6AZK9Y8.woff": {
    "type": "font/woff",
    "etag": "\"5f88-AJvcz8IRXCXT/oix8f4/CnN9mEo\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 24456,
    "path": "../public/_fonts/I_C-sQOIqi_0oYhMvDYtx0bdEKbD7yYxpxsWodusarY-ogTKLuxilCd3jBpyWmhhqjGLguibg8dm8b0V6AZK9Y8.woff"
  },
  "/_fonts/J8vNiPI1qENJhIcmsw6UZXefWhchD6nPxuVZ1s7Nk14-l2E2vBQRBe7A25N_9oNgnM1nrE0Xojn6L4NB_iWua8o.woff2": {
    "type": "font/woff2",
    "etag": "\"1b20-wA7zjHhhBjnQhSYP4z8BpVPIgbE\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 6944,
    "path": "../public/_fonts/J8vNiPI1qENJhIcmsw6UZXefWhchD6nPxuVZ1s7Nk14-l2E2vBQRBe7A25N_9oNgnM1nrE0Xojn6L4NB_iWua8o.woff2"
  },
  "/_fonts/J8vNiPI1qENJhIcmsw6UZXefWhchD6nPxuVZ1s7Nk14-z_-OSho54a2ROubwqrCR9XCMp8lKY7UnrmCQ-ePvviY.woff": {
    "type": "font/woff",
    "etag": "\"234c-0f8qLtD1K/EQOCRBJCKOyWHvba8\"",
    "mtime": "2026-01-04T09:04:55.601Z",
    "size": 9036,
    "path": "../public/_fonts/J8vNiPI1qENJhIcmsw6UZXefWhchD6nPxuVZ1s7Nk14-z_-OSho54a2ROubwqrCR9XCMp8lKY7UnrmCQ-ePvviY.woff"
  },
  "/_fonts/KU1kTISqpyopruim0ibEC-kbS0fEOTZic9QGp-WVvlU-OTqjDK__EB_kT9EF46jRshuVllDnLcaFXg8oJeEuwM4.woff": {
    "type": "font/woff",
    "etag": "\"2054-aT2oO5UMXxZY2cfP94RA36/ql8s\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 8276,
    "path": "../public/_fonts/KU1kTISqpyopruim0ibEC-kbS0fEOTZic9QGp-WVvlU-OTqjDK__EB_kT9EF46jRshuVllDnLcaFXg8oJeEuwM4.woff"
  },
  "/_fonts/KU1kTISqpyopruim0ibEC-kbS0fEOTZic9QGp-WVvlU-i0oVUYZCNxa9eLchfq4_G56R3TYvZIu0S_I6bWhNqPY.woff2": {
    "type": "font/woff2",
    "etag": "\"193c-K1JuV38fAWTY4+jzeF1QC4AbJWQ\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 6460,
    "path": "../public/_fonts/KU1kTISqpyopruim0ibEC-kbS0fEOTZic9QGp-WVvlU-i0oVUYZCNxa9eLchfq4_G56R3TYvZIu0S_I6bWhNqPY.woff2"
  },
  "/_fonts/OvjbhO5E3cDcs6GHRo9hCnX_MGDq061dDHGH4EVZkQ8-UVKi7Culce0xwGR4Ny8W0mzFg7m_M2MW7FAeHDcTu84.woff2": {
    "type": "font/woff2",
    "etag": "\"1ec0-rpLA67SJTZ/2hCgAjnw2AR4imf0\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 7872,
    "path": "../public/_fonts/OvjbhO5E3cDcs6GHRo9hCnX_MGDq061dDHGH4EVZkQ8-UVKi7Culce0xwGR4Ny8W0mzFg7m_M2MW7FAeHDcTu84.woff2"
  },
  "/_fonts/OvjbhO5E3cDcs6GHRo9hCnX_MGDq061dDHGH4EVZkQ8-V43Ua6Wwg_vX3628Qpl_lKGJog6HSIYbHWmDefVQUas.woff": {
    "type": "font/woff",
    "etag": "\"2698-GGL9EywXTHHNgtfxve/54TnV6tc\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 9880,
    "path": "../public/_fonts/OvjbhO5E3cDcs6GHRo9hCnX_MGDq061dDHGH4EVZkQ8-V43Ua6Wwg_vX3628Qpl_lKGJog6HSIYbHWmDefVQUas.woff"
  },
  "/_fonts/P94zOfMo9Ix7l-QnHZsGAJHQdZHReDxn1H8Zb2EDjcs-CpKvCpfwHUgby3y2VRIUU0ZJBS_JgOc48b991URJAEA.woff2": {
    "type": "font/woff2",
    "etag": "\"1960-9EBI9RUKC+p5gw2U21sOHOPfYRQ\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 6496,
    "path": "../public/_fonts/P94zOfMo9Ix7l-QnHZsGAJHQdZHReDxn1H8Zb2EDjcs-CpKvCpfwHUgby3y2VRIUU0ZJBS_JgOc48b991URJAEA.woff2"
  },
  "/_fonts/P94zOfMo9Ix7l-QnHZsGAJHQdZHReDxn1H8Zb2EDjcs-MhKb_yZUMLPauJ6Xp2HyqHhDOBID6L1tOMrvGX6_Wbs.woff": {
    "type": "font/woff",
    "etag": "\"2080-gafXhs4zyemGUdJ+SHu6K31q7fc\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 8320,
    "path": "../public/_fonts/P94zOfMo9Ix7l-QnHZsGAJHQdZHReDxn1H8Zb2EDjcs-MhKb_yZUMLPauJ6Xp2HyqHhDOBID6L1tOMrvGX6_Wbs.woff"
  },
  "/_fonts/PPeWayG20ZXBNzj7BCYRz-lAvY32qzDJUzVQ_-63mRs-_3jIxv5r7Oc2nrfN9edGslXuaN8WP47m_cJ-DIr6q-I.woff": {
    "type": "font/woff",
    "etag": "\"1b24-CtrhmSHVTlb9pYMu581OSTAtD2g\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 6948,
    "path": "../public/_fonts/PPeWayG20ZXBNzj7BCYRz-lAvY32qzDJUzVQ_-63mRs-_3jIxv5r7Oc2nrfN9edGslXuaN8WP47m_cJ-DIr6q-I.woff"
  },
  "/_fonts/PPeWayG20ZXBNzj7BCYRz-lAvY32qzDJUzVQ_-63mRs-fEBOpnQ0RIvQt_cZ_iz1Cr907QtuBUbBM4YjCeZBotI.woff2": {
    "type": "font/woff2",
    "etag": "\"1560-pqmzpaAQCZWk6STpshWPWE/NaDk\"",
    "mtime": "2026-01-04T09:04:55.602Z",
    "size": 5472,
    "path": "../public/_fonts/PPeWayG20ZXBNzj7BCYRz-lAvY32qzDJUzVQ_-63mRs-fEBOpnQ0RIvQt_cZ_iz1Cr907QtuBUbBM4YjCeZBotI.woff2"
  },
  "/_fonts/QCsvrKb5mCGRHrxjsMXPoHVqJs922Myn4ldQgWc9Xog-gHop3tUbH1XtxfFdJuwLafGtU3kU4i2adD0Nnc55FA8.woff2": {
    "type": "font/woff2",
    "etag": "\"4530-RfRMJqfiTM9GiUWTk/hDPiECtKg\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 17712,
    "path": "../public/_fonts/QCsvrKb5mCGRHrxjsMXPoHVqJs922Myn4ldQgWc9Xog-gHop3tUbH1XtxfFdJuwLafGtU3kU4i2adD0Nnc55FA8.woff2"
  },
  "/_fonts/QCsvrKb5mCGRHrxjsMXPoHVqJs922Myn4ldQgWc9Xog-yU8rlTtIunGfr5tY05u_UYn_zAOqWdh2fe0l1KRkHRA.woff": {
    "type": "font/woff",
    "etag": "\"57f8-J8okgug5mm8IVRvrRwzRZHHR/ao\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 22520,
    "path": "../public/_fonts/QCsvrKb5mCGRHrxjsMXPoHVqJs922Myn4ldQgWc9Xog-yU8rlTtIunGfr5tY05u_UYn_zAOqWdh2fe0l1KRkHRA.woff"
  },
  "/_fonts/QRJmZ8oLB9YZpRJGzXBrKpi2v3iDCj7ZDHEOSkHrE-s-QfoaWykVvRL7d7VHOppQ5dQ4qUbRwibMk3xkoJr_0pI.woff": {
    "type": "font/woff",
    "etag": "\"5820-6+mhgvJW2vjt6qw3mvB0hJ73yJ0\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 22560,
    "path": "../public/_fonts/QRJmZ8oLB9YZpRJGzXBrKpi2v3iDCj7ZDHEOSkHrE-s-QfoaWykVvRL7d7VHOppQ5dQ4qUbRwibMk3xkoJr_0pI.woff"
  },
  "/_fonts/QRJmZ8oLB9YZpRJGzXBrKpi2v3iDCj7ZDHEOSkHrE-s-bHZ6FnkHNHFTXzgv3ycftiwDwYGXGt_5sprMHCo4aBA.woff2": {
    "type": "font/woff2",
    "etag": "\"4560-G1s/hPes6iy0RMeOvNu/4KpgS9Q\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 17760,
    "path": "../public/_fonts/QRJmZ8oLB9YZpRJGzXBrKpi2v3iDCj7ZDHEOSkHrE-s-bHZ6FnkHNHFTXzgv3ycftiwDwYGXGt_5sprMHCo4aBA.woff2"
  },
  "/_fonts/RG89VHUTimew5XY00NNAhBfuy0DxY1iIgLIovd_M3s-RUy1YAoJof5eNnapbB2ikV7dBG2cqLwiMKP_-m6ipRU.woff2": {
    "type": "font/woff2",
    "etag": "\"151c-pD9Z/oUD2w1dQmAY+R1SxRx8l1I\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 5404,
    "path": "../public/_fonts/RG89VHUTimew5XY00NNAhBfuy0DxY1iIgLIovd_M3s-RUy1YAoJof5eNnapbB2ikV7dBG2cqLwiMKP_-m6ipRU.woff2"
  },
  "/_fonts/RG89VHUTimew5XY00NNAhBfuy0DxY1iIgLIovd_M3s-nyhBuvl5nbeDwNRVAlOeO39sKOImIqWp47hllERzOFQ.woff": {
    "type": "font/woff",
    "etag": "\"1ae0-sfIUcI/lyeb4q07/zM+KY1gPHGc\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 6880,
    "path": "../public/_fonts/RG89VHUTimew5XY00NNAhBfuy0DxY1iIgLIovd_M3s-nyhBuvl5nbeDwNRVAlOeO39sKOImIqWp47hllERzOFQ.woff"
  },
  "/_fonts/RhoA2AkgdN5JBd2RYBj2Zik6_kAMkXji2haD2EWXkZY-Jq5mAWI_fS2KazQ0tRWnCXqdMDlq2iq_ZHPmu1yCsJw.woff": {
    "type": "font/woff",
    "etag": "\"6420-JuLFlbyVHwSdLSrUryeg3Ag7BJw\"",
    "mtime": "2026-01-04T09:04:55.603Z",
    "size": 25632,
    "path": "../public/_fonts/RhoA2AkgdN5JBd2RYBj2Zik6_kAMkXji2haD2EWXkZY-Jq5mAWI_fS2KazQ0tRWnCXqdMDlq2iq_ZHPmu1yCsJw.woff"
  },
  "/_fonts/RhoA2AkgdN5JBd2RYBj2Zik6_kAMkXji2haD2EWXkZY-aocQ9plzuYkL_fQsDinDQ356uHeL5RDYUrzZmJXJwk4.woff2": {
    "type": "font/woff2",
    "etag": "\"7968-CQcKzkwMoKmbcQhwD/a9EFFM1Cc\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 31080,
    "path": "../public/_fonts/RhoA2AkgdN5JBd2RYBj2Zik6_kAMkXji2haD2EWXkZY-aocQ9plzuYkL_fQsDinDQ356uHeL5RDYUrzZmJXJwk4.woff2"
  },
  "/_fonts/S7SuCCEpaar9y9Ymmo2aUFmVT3kZgQjKyISuA5hgC6c-9w1j9VGTrgh52Mho60PN4caElkHwFe6f9PwvrBlhmKY.woff": {
    "type": "font/woff",
    "etag": "\"26a4-9vhenCtAofo0oxrQOVzXIeRFRWI\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 9892,
    "path": "../public/_fonts/S7SuCCEpaar9y9Ymmo2aUFmVT3kZgQjKyISuA5hgC6c-9w1j9VGTrgh52Mho60PN4caElkHwFe6f9PwvrBlhmKY.woff"
  },
  "/_fonts/S7SuCCEpaar9y9Ymmo2aUFmVT3kZgQjKyISuA5hgC6c-MRLXKURc7sY4EeysriKj54zVGKf1CdJa8ClwOhXmOwQ.woff2": {
    "type": "font/woff2",
    "etag": "\"1edc-/5FyLRxDstpn/SarB2H0wWWAX/U\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 7900,
    "path": "../public/_fonts/S7SuCCEpaar9y9Ymmo2aUFmVT3kZgQjKyISuA5hgC6c-MRLXKURc7sY4EeysriKj54zVGKf1CdJa8ClwOhXmOwQ.woff2"
  },
  "/_fonts/SXDdknQiRgfP_xkfimyc2CAlAsGDO4YSShd6CdQI-t4-UtiUw4OOAtrnlA4tGliVU29gUaTetOHTT2Zt5izKOpk.woff": {
    "type": "font/woff",
    "etag": "\"2990-tbTahad1cqu5do39OicAvxEGuhY\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 10640,
    "path": "../public/_fonts/SXDdknQiRgfP_xkfimyc2CAlAsGDO4YSShd6CdQI-t4-UtiUw4OOAtrnlA4tGliVU29gUaTetOHTT2Zt5izKOpk.woff"
  },
  "/_fonts/SXDdknQiRgfP_xkfimyc2CAlAsGDO4YSShd6CdQI-t4-esY00SIR1kkdpj9iT6Eu7iSR6EdgRWqepQUjkFOQ1Ko.woff2": {
    "type": "font/woff2",
    "etag": "\"2174-ttKVvWZbprfvlF8E5Zg/9svzh3c\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 8564,
    "path": "../public/_fonts/SXDdknQiRgfP_xkfimyc2CAlAsGDO4YSShd6CdQI-t4-esY00SIR1kkdpj9iT6Eu7iSR6EdgRWqepQUjkFOQ1Ko.woff2"
  },
  "/_fonts/StlIFNcz6XHYGyCMsgEs1QpufKjklngrDtKTlCCUbOc-0KdwoQTC312ycSfbFN8gMVC3uhfxS3CHJ2oxrQdgnCY.woff2": {
    "type": "font/woff2",
    "etag": "\"4aa8-oMT88rdUGeoD+8AwOXwM4+6MNG4\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 19112,
    "path": "../public/_fonts/StlIFNcz6XHYGyCMsgEs1QpufKjklngrDtKTlCCUbOc-0KdwoQTC312ycSfbFN8gMVC3uhfxS3CHJ2oxrQdgnCY.woff2"
  },
  "/_fonts/StlIFNcz6XHYGyCMsgEs1QpufKjklngrDtKTlCCUbOc-V6Rbv7ZT3msMyx_dM6qnBAaPCelJNo_MYfxk6w6BhdI.woff": {
    "type": "font/woff",
    "etag": "\"5edc-X7eKfgoHGpaHhVV9QVQnfTc0ncQ\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 24284,
    "path": "../public/_fonts/StlIFNcz6XHYGyCMsgEs1QpufKjklngrDtKTlCCUbOc-V6Rbv7ZT3msMyx_dM6qnBAaPCelJNo_MYfxk6w6BhdI.woff"
  },
  "/_fonts/SudTEguJpL3jsYisO1or61vA4Lc0Bc3Ls7ZwX8Q-W1o-404zR55pExruHxWMrgTI7gNvAvBf1lIXXoWKcs5FWxs.woff2": {
    "type": "font/woff2",
    "etag": "\"14c8-b7uxvoHYLbIiLx/noT+vU23VJ1I\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 5320,
    "path": "../public/_fonts/SudTEguJpL3jsYisO1or61vA4Lc0Bc3Ls7ZwX8Q-W1o-404zR55pExruHxWMrgTI7gNvAvBf1lIXXoWKcs5FWxs.woff2"
  },
  "/_fonts/SudTEguJpL3jsYisO1or61vA4Lc0Bc3Ls7ZwX8Q-W1o-T8jsuD2OoCoQy2bb2Pv5_a1Ndj2ZCB4xnTwvGByPxLI.woff": {
    "type": "font/woff",
    "etag": "\"1a70-p7v3p+icD7UNZJwrYIyZKXBsKyo\"",
    "mtime": "2026-01-04T09:04:55.604Z",
    "size": 6768,
    "path": "../public/_fonts/SudTEguJpL3jsYisO1or61vA4Lc0Bc3Ls7ZwX8Q-W1o-T8jsuD2OoCoQy2bb2Pv5_a1Ndj2ZCB4xnTwvGByPxLI.woff"
  },
  "/_fonts/VSWNZrBLfJmBc8tQYOqShl9PLTB5JCyz9J0G2WC8BqY-G4gwQyTFawKkCHzIIdWuhQjmLHHlua1kps4PYoNFyUk.woff2": {
    "type": "font/woff2",
    "etag": "\"2dfc-91Wrd4AFm90Acldmcf+rkNeXUHM\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 11772,
    "path": "../public/_fonts/VSWNZrBLfJmBc8tQYOqShl9PLTB5JCyz9J0G2WC8BqY-G4gwQyTFawKkCHzIIdWuhQjmLHHlua1kps4PYoNFyUk.woff2"
  },
  "/_fonts/VSWNZrBLfJmBc8tQYOqShl9PLTB5JCyz9J0G2WC8BqY-OgRgbgSMd1onb4DsRZ1OXzcOmhw31LLY4mJk7G7v3ZA.woff": {
    "type": "font/woff",
    "etag": "\"3a58-ze6MTbOYStrKZMV2DFZa304jehU\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 14936,
    "path": "../public/_fonts/VSWNZrBLfJmBc8tQYOqShl9PLTB5JCyz9J0G2WC8BqY-OgRgbgSMd1onb4DsRZ1OXzcOmhw31LLY4mJk7G7v3ZA.woff"
  },
  "/_fonts/VgKDkgMs5_snnPHkG3Mgsrj3WHE3g1RHYC0jVTDeTsI-5_XKqIVbRlU-5PswNMW70lAwNE5q1ykSdQlU0ySyEkw.woff": {
    "type": "font/woff",
    "etag": "\"366c-rkbT88HseRtRcAlSHdiL2ef6VKI\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 13932,
    "path": "../public/_fonts/VgKDkgMs5_snnPHkG3Mgsrj3WHE3g1RHYC0jVTDeTsI-5_XKqIVbRlU-5PswNMW70lAwNE5q1ykSdQlU0ySyEkw.woff"
  },
  "/_fonts/VgKDkgMs5_snnPHkG3Mgsrj3WHE3g1RHYC0jVTDeTsI-A_MyWKI_Lj6Z_dJCi90Al3AogGmyIKISPmbl3hEg-vE.woff2": {
    "type": "font/woff2",
    "etag": "\"2a64-Uck3dDpgTdxMVJRM5mDyktAkX8Q\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 10852,
    "path": "../public/_fonts/VgKDkgMs5_snnPHkG3Mgsrj3WHE3g1RHYC0jVTDeTsI-A_MyWKI_Lj6Z_dJCi90Al3AogGmyIKISPmbl3hEg-vE.woff2"
  },
  "/_fonts/YrMFE_uIvWke6LX25uZ88gTJX-pi92Juu_gEHtUeQvU-Tf5K2fZakVv5D_ytO7nQf7DJ1bhxwBjPrnYhc8LCWoA.woff": {
    "type": "font/woff",
    "etag": "\"1a84-/5Cs8b3niOrNxqWroMVb+9P9pWM\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 6788,
    "path": "../public/_fonts/YrMFE_uIvWke6LX25uZ88gTJX-pi92Juu_gEHtUeQvU-Tf5K2fZakVv5D_ytO7nQf7DJ1bhxwBjPrnYhc8LCWoA.woff"
  },
  "/_fonts/YrMFE_uIvWke6LX25uZ88gTJX-pi92Juu_gEHtUeQvU-VbV5mZIFTrDpuMX8jftCmecXi4BuW_3ds4BasiCZ6B4.woff2": {
    "type": "font/woff2",
    "etag": "\"1550-b6G4yf3JDyL830mWgNvrkiR5fI8\"",
    "mtime": "2026-01-04T09:04:55.605Z",
    "size": 5456,
    "path": "../public/_fonts/YrMFE_uIvWke6LX25uZ88gTJX-pi92Juu_gEHtUeQvU-VbV5mZIFTrDpuMX8jftCmecXi4BuW_3ds4BasiCZ6B4.woff2"
  },
  "/_fonts/biCgInJo-XwxI9XstTe2wA35lnJLytMELWJR63PDUU0-Z98NjGsO7SckA9xcTZlfCHJWtKoECK27xYcn1uXZZn0.woff2": {
    "type": "font/woff2",
    "etag": "\"1bc0-wfG5NIuab+MHb5IiWKM8DFbDShA\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 7104,
    "path": "../public/_fonts/biCgInJo-XwxI9XstTe2wA35lnJLytMELWJR63PDUU0-Z98NjGsO7SckA9xcTZlfCHJWtKoECK27xYcn1uXZZn0.woff2"
  },
  "/_fonts/biCgInJo-XwxI9XstTe2wA35lnJLytMELWJR63PDUU0-fL6WnWFkJxKfT6IbeMJPp5LmGXbyLRoN3pLYag_IE_g.woff": {
    "type": "font/woff",
    "etag": "\"23ac-Pen2kUz1OuS3g2I0nZl8IblObvY\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 9132,
    "path": "../public/_fonts/biCgInJo-XwxI9XstTe2wA35lnJLytMELWJR63PDUU0-fL6WnWFkJxKfT6IbeMJPp5LmGXbyLRoN3pLYag_IE_g.woff"
  },
  "/_fonts/bo5tuZM8RqHYVPzefIkHXqIFrGvg2FUJZERe8TXwMvU-_9h5MZy91y_MotwKKvIs1fbHAiD1CoolHZhWIDUvAE8.woff2": {
    "type": "font/woff2",
    "etag": "\"1524-XD44l8xeZw9NILA3dIAVjY5dxoQ\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 5412,
    "path": "../public/_fonts/bo5tuZM8RqHYVPzefIkHXqIFrGvg2FUJZERe8TXwMvU-_9h5MZy91y_MotwKKvIs1fbHAiD1CoolHZhWIDUvAE8.woff2"
  },
  "/_fonts/bo5tuZM8RqHYVPzefIkHXqIFrGvg2FUJZERe8TXwMvU-gA922hLDNyM_h_6ra3D8h_C4Kzviz_a7UqR2p9J5r6M.woff": {
    "type": "font/woff",
    "etag": "\"1ab0-1YPEB0fIP3etM57TV6OehbJx4EY\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 6832,
    "path": "../public/_fonts/bo5tuZM8RqHYVPzefIkHXqIFrGvg2FUJZERe8TXwMvU-gA922hLDNyM_h_6ra3D8h_C4Kzviz_a7UqR2p9J5r6M.woff"
  },
  "/_fonts/deI5ph6csnI_1Lq6eX9r8jII3ndxSFUQYUze741QiEY-FLBMVRPpi_PmP8gh25Pu9W8oU5BdaKKzCJmZnOq70j4.woff2": {
    "type": "font/woff2",
    "etag": "\"44c8-886pndNKO0UFVOqju9OZ+WctVEU\"",
    "mtime": "2026-01-04T09:04:55.606Z",
    "size": 17608,
    "path": "../public/_fonts/deI5ph6csnI_1Lq6eX9r8jII3ndxSFUQYUze741QiEY-FLBMVRPpi_PmP8gh25Pu9W8oU5BdaKKzCJmZnOq70j4.woff2"
  },
  "/_fonts/deI5ph6csnI_1Lq6eX9r8jII3ndxSFUQYUze741QiEY-Hljhxa8cTRox_5-Zyuk76NBZb-aw_kshZgAEuKMO6-Y.woff": {
    "type": "font/woff",
    "etag": "\"5750-GyHuZmvtT8zX7qm2xPm1DJmsDNw\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 22352,
    "path": "../public/_fonts/deI5ph6csnI_1Lq6eX9r8jII3ndxSFUQYUze741QiEY-Hljhxa8cTRox_5-Zyuk76NBZb-aw_kshZgAEuKMO6-Y.woff"
  },
  "/_fonts/dq8LHxQaK7avPHYGu_bf5P_enEIl3muu80_a6oKwYjw-9VtguNkVx4dNWBVz8YNdT7tPw4XdqgJYmlTdqBMzsrg.woff": {
    "type": "font/woff",
    "etag": "\"5d70-zP4Zkryfdxgt0pAd2fZn/q4KXUo\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 23920,
    "path": "../public/_fonts/dq8LHxQaK7avPHYGu_bf5P_enEIl3muu80_a6oKwYjw-9VtguNkVx4dNWBVz8YNdT7tPw4XdqgJYmlTdqBMzsrg.woff"
  },
  "/_fonts/dq8LHxQaK7avPHYGu_bf5P_enEIl3muu80_a6oKwYjw-kygelkSHLvM_77QTL52jHntg4PkMFzKxKHEmqQfLmtw.woff2": {
    "type": "font/woff2",
    "etag": "\"49f8-BrAxpmhcGcrP0D0Q3SFm+W/0XH8\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 18936,
    "path": "../public/_fonts/dq8LHxQaK7avPHYGu_bf5P_enEIl3muu80_a6oKwYjw-kygelkSHLvM_77QTL52jHntg4PkMFzKxKHEmqQfLmtw.woff2"
  },
  "/_fonts/dyLhWLKft2W-f0hhxmvDgWwq23p-1GylsQZZEtn2ZBs-Dftx4YKZWa9wrtywIOjkpJHe5v152f2Z7eqIxxwLiZo.woff": {
    "type": "font/woff",
    "etag": "\"578c-J+fPFVxx5mr+dJQnaqMI0/v04Xk\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 22412,
    "path": "../public/_fonts/dyLhWLKft2W-f0hhxmvDgWwq23p-1GylsQZZEtn2ZBs-Dftx4YKZWa9wrtywIOjkpJHe5v152f2Z7eqIxxwLiZo.woff"
  },
  "/_fonts/dyLhWLKft2W-f0hhxmvDgWwq23p-1GylsQZZEtn2ZBs-pgwueUjze7lWANotecFZARiq9xfiV1bnoBQTNyj3pOU.woff2": {
    "type": "font/woff2",
    "etag": "\"44cc-cG83N9IY8aeaffmkvIQPQ6bEEe4\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 17612,
    "path": "../public/_fonts/dyLhWLKft2W-f0hhxmvDgWwq23p-1GylsQZZEtn2ZBs-pgwueUjze7lWANotecFZARiq9xfiV1bnoBQTNyj3pOU.woff2"
  },
  "/_fonts/enrRMKXzmO13DKak-wj5ulctfCTzIuNLLbwxteSzIew-NHB5HHeyDtgE9jEL5wkkf2XKIKtzXcTnaueh0xONNUA.woff2": {
    "type": "font/woff2",
    "etag": "\"2cc0-Iym3t/niRyIR45fMCTrW1R6JxbQ\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 11456,
    "path": "../public/_fonts/enrRMKXzmO13DKak-wj5ulctfCTzIuNLLbwxteSzIew-NHB5HHeyDtgE9jEL5wkkf2XKIKtzXcTnaueh0xONNUA.woff2"
  },
  "/_fonts/enrRMKXzmO13DKak-wj5ulctfCTzIuNLLbwxteSzIew-mi4QJh6O7M7IVF3m8VOzUZkXlXjpFhCLyNCVvSsZiTk.woff": {
    "type": "font/woff",
    "etag": "\"3974-PfGHSajDVf2+sTdt0KD62qAhGHM\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 14708,
    "path": "../public/_fonts/enrRMKXzmO13DKak-wj5ulctfCTzIuNLLbwxteSzIew-mi4QJh6O7M7IVF3m8VOzUZkXlXjpFhCLyNCVvSsZiTk.woff"
  },
  "/_fonts/f63Oe-7YZmRsTOPgEGlRSAExYIeZ0rlaSn31gXEgIbg-IfxS3EC4PgNp8js__u0r4ay_0bx9_UaOlbohAjXYaZA.woff": {
    "type": "font/woff",
    "etag": "\"2060-UVeXhRmYnZFKYvKg2UdlE5J+52Y\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 8288,
    "path": "../public/_fonts/f63Oe-7YZmRsTOPgEGlRSAExYIeZ0rlaSn31gXEgIbg-IfxS3EC4PgNp8js__u0r4ay_0bx9_UaOlbohAjXYaZA.woff"
  },
  "/_fonts/f63Oe-7YZmRsTOPgEGlRSAExYIeZ0rlaSn31gXEgIbg-p6pME8_g9V3pKH192iiJ9PcQXpKMdZTZRUI9WK0aPoc.woff2": {
    "type": "font/woff2",
    "etag": "\"18fc-YsLHv/i2b6/SurBsjvFLFR8iflw\"",
    "mtime": "2026-01-04T09:04:55.607Z",
    "size": 6396,
    "path": "../public/_fonts/f63Oe-7YZmRsTOPgEGlRSAExYIeZ0rlaSn31gXEgIbg-p6pME8_g9V3pKH192iiJ9PcQXpKMdZTZRUI9WK0aPoc.woff2"
  },
  "/_fonts/gPkUxySqOfy8vZuVxqHNxiK5NJMyKw-p8OLH6ziuiuI-dKVoNO_eiYagyRd3vUWVDwUdfMbq70NDNz2-2ywn8vs.woff": {
    "type": "font/woff",
    "etag": "\"3664-hFzTEtz9s1TfYB8EAmy7qPtDgXU\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 13924,
    "path": "../public/_fonts/gPkUxySqOfy8vZuVxqHNxiK5NJMyKw-p8OLH6ziuiuI-dKVoNO_eiYagyRd3vUWVDwUdfMbq70NDNz2-2ywn8vs.woff"
  },
  "/_fonts/gPkUxySqOfy8vZuVxqHNxiK5NJMyKw-p8OLH6ziuiuI-sQ5PIitq98bpu5jnonzPtVswqm93tf5yj5EJyq8NAPQ.woff2": {
    "type": "font/woff2",
    "etag": "\"2a30-s+PFfkqKjenrLLVsFpBcVAXCYNs\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 10800,
    "path": "../public/_fonts/gPkUxySqOfy8vZuVxqHNxiK5NJMyKw-p8OLH6ziuiuI-sQ5PIitq98bpu5jnonzPtVswqm93tf5yj5EJyq8NAPQ.woff2"
  },
  "/_fonts/hM5AwZQNQAj_P_THVD-qd0GGgX2n9hPn-N4A8ZyCb_U-aNNfgQmS2TFaLRZ7fwcOoMvl_0O2TxKGslElqkeIuks.woff2": {
    "type": "font/woff2",
    "etag": "\"43f8-hA/8YSHL+rU3bT14B3rtGpdyN4s\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 17400,
    "path": "../public/_fonts/hM5AwZQNQAj_P_THVD-qd0GGgX2n9hPn-N4A8ZyCb_U-aNNfgQmS2TFaLRZ7fwcOoMvl_0O2TxKGslElqkeIuks.woff2"
  },
  "/_fonts/hM5AwZQNQAj_P_THVD-qd0GGgX2n9hPn-N4A8ZyCb_U-srLcViyOCYcohXJ11OBYDOm26nWaZs2fCJIWAB2J8l8.woff": {
    "type": "font/woff",
    "etag": "\"5724-J/c/EAf7F8kwrsZxJf0itrbF6Eo\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 22308,
    "path": "../public/_fonts/hM5AwZQNQAj_P_THVD-qd0GGgX2n9hPn-N4A8ZyCb_U-srLcViyOCYcohXJ11OBYDOm26nWaZs2fCJIWAB2J8l8.woff"
  },
  "/_fonts/loVIXyDo1EHR7k0dIBeuKH6OzoO_aHkrTevMUA5f0rU-HUn2N4H2RBY2ZoYHFJ2iD8PeOXTMec5Lyxkq684ULVc.woff2": {
    "type": "font/woff2",
    "etag": "\"2d7c-Pd/MTUZx/OXwKQol6aFiS5pzC9I\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 11644,
    "path": "../public/_fonts/loVIXyDo1EHR7k0dIBeuKH6OzoO_aHkrTevMUA5f0rU-HUn2N4H2RBY2ZoYHFJ2iD8PeOXTMec5Lyxkq684ULVc.woff2"
  },
  "/_fonts/loVIXyDo1EHR7k0dIBeuKH6OzoO_aHkrTevMUA5f0rU-WNIsi1SlakAjdygV_x6tA2h_eShvIOcVd5xO59MCTC0.woff": {
    "type": "font/woff",
    "etag": "\"3a84-aHuZ/WbVEzQ0isBblpAprER5waM\"",
    "mtime": "2026-01-04T09:04:55.608Z",
    "size": 14980,
    "path": "../public/_fonts/loVIXyDo1EHR7k0dIBeuKH6OzoO_aHkrTevMUA5f0rU-WNIsi1SlakAjdygV_x6tA2h_eShvIOcVd5xO59MCTC0.woff"
  },
  "/_fonts/mSACzPEA1sdafSjNdHpJ1LKc1aj4JDD1qEUONjw_wIk-NpC00N9UpQDoqvSw_LfUUw2Hij-zd3EWX4p_Dhs7LfA.woff2": {
    "type": "font/woff2",
    "etag": "\"709c-v/F2wr7AeHvIkzoNuDOPmXVI9MU\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 28828,
    "path": "../public/_fonts/mSACzPEA1sdafSjNdHpJ1LKc1aj4JDD1qEUONjw_wIk-NpC00N9UpQDoqvSw_LfUUw2Hij-zd3EWX4p_Dhs7LfA.woff2"
  },
  "/_fonts/mSACzPEA1sdafSjNdHpJ1LKc1aj4JDD1qEUONjw_wIk-oDCkl591WTuZZvF2VGEUvbSzXo5_C45xlkqlZMUluMk.woff": {
    "type": "font/woff",
    "etag": "\"517c-0OKofAJA0SWYsNdul5ZDPR0F+/A\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 20860,
    "path": "../public/_fonts/mSACzPEA1sdafSjNdHpJ1LKc1aj4JDD1qEUONjw_wIk-oDCkl591WTuZZvF2VGEUvbSzXo5_C45xlkqlZMUluMk.woff"
  },
  "/_fonts/rIYb9yWeAkL5Pu8VkqSnmsD6VKoawwGs5q5T8vy_93Y-RWcOOUYTpOrvRudLpFBtXI6mu5kRE9BFPz75L3Mjhmo.woff2": {
    "type": "font/woff2",
    "etag": "\"2148-hvTV3WNtLdaVBh7B7ueu88enZ/I\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 8520,
    "path": "../public/_fonts/rIYb9yWeAkL5Pu8VkqSnmsD6VKoawwGs5q5T8vy_93Y-RWcOOUYTpOrvRudLpFBtXI6mu5kRE9BFPz75L3Mjhmo.woff2"
  },
  "/_fonts/rIYb9yWeAkL5Pu8VkqSnmsD6VKoawwGs5q5T8vy_93Y-hpUMznfchQIoQ7GEFIcb4FAuEWiN7QAN6JAAvexrEkc.woff": {
    "type": "font/woff",
    "etag": "\"299c-9SS1JAru4NO5582WP1TdLdhz5Og\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 10652,
    "path": "../public/_fonts/rIYb9yWeAkL5Pu8VkqSnmsD6VKoawwGs5q5T8vy_93Y-hpUMznfchQIoQ7GEFIcb4FAuEWiN7QAN6JAAvexrEkc.woff"
  },
  "/_fonts/sLJVQ0kPczNb7HhhMFGzz_a-OE_HG9CF1725Chp-k-Y-_IhEm9cOcqHCvLe3_tN6op2dxLFPCzq-7FOWfWm7xME.woff2": {
    "type": "font/woff2",
    "etag": "\"1ef0-L+YZy0XxAj5Uqk2QBERyhDZX7EU\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 7920,
    "path": "../public/_fonts/sLJVQ0kPczNb7HhhMFGzz_a-OE_HG9CF1725Chp-k-Y-_IhEm9cOcqHCvLe3_tN6op2dxLFPCzq-7FOWfWm7xME.woff2"
  },
  "/_fonts/sLJVQ0kPczNb7HhhMFGzz_a-OE_HG9CF1725Chp-k-Y-v0AU1I857fuUGXgXKIc2pbfQX7sjUmnEAj2NzX3JgGA.woff": {
    "type": "font/woff",
    "etag": "\"26c0-NNRls9kj6JVtAp0xLVqARjFRzHc\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 9920,
    "path": "../public/_fonts/sLJVQ0kPczNb7HhhMFGzz_a-OE_HG9CF1725Chp-k-Y-v0AU1I857fuUGXgXKIc2pbfQX7sjUmnEAj2NzX3JgGA.woff"
  },
  "/_fonts/t9teDt1hVEhyCEBof4XTBtowndO50fDSLxqhT3oghY4-nb2Ysmg7cxgM4YMUpBjjzZqXSea5_bvG63qe_n_W-ng.woff": {
    "type": "font/woff",
    "etag": "\"35a8-2Q7pWRbfH0s9hNSJpg2sWnH0CP4\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 13736,
    "path": "../public/_fonts/t9teDt1hVEhyCEBof4XTBtowndO50fDSLxqhT3oghY4-nb2Ysmg7cxgM4YMUpBjjzZqXSea5_bvG63qe_n_W-ng.woff"
  },
  "/_fonts/t9teDt1hVEhyCEBof4XTBtowndO50fDSLxqhT3oghY4-w79Qt1E3WwXxqb_p2GoxdN9nJ0_JP8FFL24Dz7DrdtA.woff2": {
    "type": "font/woff2",
    "etag": "\"2988-mJ18gwxlu02dx8sUIifdPfraECM\"",
    "mtime": "2026-01-04T09:04:55.609Z",
    "size": 10632,
    "path": "../public/_fonts/t9teDt1hVEhyCEBof4XTBtowndO50fDSLxqhT3oghY4-w79Qt1E3WwXxqb_p2GoxdN9nJ0_JP8FFL24Dz7DrdtA.woff2"
  },
  "/_fonts/vpXXrJMGDdwKh90XAwDvOmonBZ3r_o9poQS7h6TvMUs-EbtK_O15ikcs1_GpFSqafyVjj1Pvtf6yDyPf_qF3OU4.woff2": {
    "type": "font/woff2",
    "etag": "\"151c-nP+L8KjP5nHu6tlD7TC9tfrrbgU\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 5404,
    "path": "../public/_fonts/vpXXrJMGDdwKh90XAwDvOmonBZ3r_o9poQS7h6TvMUs-EbtK_O15ikcs1_GpFSqafyVjj1Pvtf6yDyPf_qF3OU4.woff2"
  },
  "/_fonts/vpXXrJMGDdwKh90XAwDvOmonBZ3r_o9poQS7h6TvMUs-LzO8cTZYcBNoGwTq4CNLgjf_9vVDz3Nd4Q_hHuqXdbg.woff": {
    "type": "font/woff",
    "etag": "\"1b04-LMGDjz9sUmPiKgT9RUPSalVDt6Q\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 6916,
    "path": "../public/_fonts/vpXXrJMGDdwKh90XAwDvOmonBZ3r_o9poQS7h6TvMUs-LzO8cTZYcBNoGwTq4CNLgjf_9vVDz3Nd4Q_hHuqXdbg.woff"
  },
  "/_fonts/yexSHjRchKiOfce8gYhQHi1BMHqYiiF6sAPiLLtJWPo-2Zaok_P5vYX_joyz8wnOP-WCIAyEGsX8LcsTKUnj3mQ.woff2": {
    "type": "font/woff2",
    "etag": "\"4a74-Pu+vsQn8iY/NoJN9+jrAE20UsRY\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 19060,
    "path": "../public/_fonts/yexSHjRchKiOfce8gYhQHi1BMHqYiiF6sAPiLLtJWPo-2Zaok_P5vYX_joyz8wnOP-WCIAyEGsX8LcsTKUnj3mQ.woff2"
  },
  "/_fonts/yexSHjRchKiOfce8gYhQHi1BMHqYiiF6sAPiLLtJWPo-zjNELPAxgntgRHwas1JBgpx0s8do6LifT1psg4Xk5t8.woff": {
    "type": "font/woff",
    "etag": "\"5e94-gg50Hx8x2MVXhr947AGMktyDMT8\"",
    "mtime": "2026-01-04T09:04:55.610Z",
    "size": 24212,
    "path": "../public/_fonts/yexSHjRchKiOfce8gYhQHi1BMHqYiiF6sAPiLLtJWPo-zjNELPAxgntgRHwas1JBgpx0s8do6LifT1psg4Xk5t8.woff"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-c9oMrw+nZhDsDSjWt7XmsBjIvFo\"",
    "mtime": "2026-01-04T09:04:55.558Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/25d630ff-86e5-495b-a811-6bd99e733ae5.json": {
    "type": "application/json",
    "etag": "\"8b-oy4SAWYzBwlNepACI04zEE44SRs\"",
    "mtime": "2026-01-04T09:04:55.547Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/25d630ff-86e5-495b-a811-6bd99e733ae5.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _Z5ZBdx = eventHandler((event) => {
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
      throw createError$1({ statusCode: 404 });
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
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
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
const getServerEntry = () => import('../build/server.mjs').then((r) => r.default || r);
const getPrecomputedDependencies = () => import('../build/client.precomputed.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = await getPrecomputedDependencies();
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: void 0,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = await getPrecomputedDependencies();
  const spaTemplate = await import('../virtual/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "").then((r) => {
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
    manifest: void 0,
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
const getSSRStyles = lazyCachedFunction(() => import('../build/styles.mjs').then((r) => r.default || r));

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
  const context = event.method === "GET" ? getQuery(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const collections = {
  'carbon': () => import('../_/icons.mjs').then(m => m.default),
  'fluent-emoji-flat': () => import('../_/icons2.mjs').then(m => m.default),
  'lucide': () => import('../_/icons3.mjs').then(m => m.default),
  'material-symbols': () => import('../_/icons4.mjs').then(m => m.default),
  'mdi': () => import('../_/icons5.mjs').then(m => m.default),
  'simple-icons': () => import('../_/icons6.mjs').then(m => m.default),
  'streamline': () => import('../_/icons7.mjs').then(m => m.default),
  'svg-spinners': () => import('../_/icons8.mjs').then(m => m.default),
  'tabler': () => import('../_/icons9.mjs').then(m => m.default),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _UyQuY3 = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError$1({ status: 400, message: "Invalid icon request" });
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
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError$1({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError$1({ status: 404 });
      else
        return createError$1({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError$1({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _gyKVxd = eventHandler(async (event) => {
  await clearUserSession(event);
  return { loggedOut: true };
});

const _XaEaSY = eventHandler(async (event) => {
  const session = await getUserSession(event);
  if (Object.keys(session).length > 0) {
    await sessionHooks.callHookParallel("fetch", session, event);
  }
  const { secure, ...data } = session;
  return data;
});

const _oiQE2D = eventHandler(async (e) => {
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
const _getMessagesCached = cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: 60 * 60 * 24,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessagesCached;
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
  maxAge: 60 * 60 * 24,
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
  maxAge: 60 * 60 * 24,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError$1({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError$1({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: 60 * 60 * 24,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) return false;
    return !useI18nContext(event).localeConfigs?.[locale]?.cacheable;
  }
});
const _messagesHandlerCached = defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: 10,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _Ei4Tra = _messagesHandlerCached;

const _0c84ya = lazyEventHandler(() => {
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

const _lazy_MCNwR8 = () => import('../routes/api/albums/index.delete.mjs');
const _lazy_4odk7W = () => import('../routes/api/albums/index.get.mjs');
const _lazy_Cwd98U = () => import('../routes/api/albums/index.put.mjs');
const _lazy_l1KlT0 = () => import('../routes/api/albums/_albumId/photos/_photoId_.delete.mjs');
const _lazy_w0aqUN = () => import('../routes/api/index.get.mjs');
const _lazy_FnLBRk = () => import('../routes/api/index.post.mjs');
const _lazy_YOLRyI = () => import('../routes/api/auth/github.get.mjs');
const _lazy_P_nUTM = () => import('../routes/api/login.post.mjs');
const _lazy_ilzEFx = () => import('../routes/api/logout.get.mjs');
const _lazy_Va30Uy = () => import('../routes/api/photos/_photoId/albums.get.mjs');
const _lazy_A0njb3 = () => import('../routes/api/photos/index.delete.mjs');
const _lazy_xM65l2 = () => import('../routes/api/photos/index.put.mjs');
const _lazy_ywHfJK = () => import('../routes/api/photos/_photoId/livephoto.get.mjs');
const _lazy_V_vPc5 = () => import('../routes/api/photos/_photoId/reactions.mjs');
const _lazy_9KFqmj = () => import('../routes/api/photos/check-duplicate.post.mjs');
const _lazy_M65H8i = () => import('../routes/api/photos/exif/reindex.post.mjs');
const _lazy_cuZlHW = () => import('../routes/api/index.get2.mjs');
const _lazy_pR4Lc5 = () => import('../routes/api/index.post2.mjs');
const _lazy_l3BJy7 = () => import('../routes/api/photos/livephoto/manage.post.mjs');
const _lazy_i3VUPC = () => import('../routes/api/photos/reactions.get.mjs');
const _lazy_y5_vCX = () => import('../routes/api/photos/status.get.mjs');
const _lazy_AFqgCC = () => import('../routes/api/photos/upload.put.mjs');
const _lazy_EoPusK = () => import('../routes/api/profile.get.mjs');
const _lazy_os5S9h = () => import('../routes/api/queue/add-task.post.mjs');
const _lazy_K4vT6D = () => import('../routes/api/queue/add-tasks.post.mjs');
const _lazy_2HpLIH = () => import('../routes/api/queue/stats/_taskId_.get.mjs');
const _lazy_M_0I31 = () => import('../routes/api/queue/index.mjs');
const _lazy_KyFLSR = () => import('../routes/api/queue/task/clear.delete.mjs');
const _lazy_A9WE4r = () => import('../routes/api/queue/task/list.get.mjs');
const _lazy_gzaaVo = () => import('../routes/api/queue/task/retry-batch.post.mjs');
const _lazy_dQbq39 = () => import('../routes/api/queue/task/retry.post.mjs');
const _lazy__Fz3ZP = () => import('../routes/api/system/logs.mjs');
const _lazy_M_TxKR = () => import('../routes/api/system/settings/_namespace_.get.mjs');
const _lazy_rOuytS = () => import('../routes/api/system/settings/_namespace/_key_.mjs');
const _lazy_d4J6kY = () => import('../routes/api/system/settings/all.get.mjs');
const _lazy_Qp1uOf = () => import('../routes/api/system/settings/batch.put.mjs');
const _lazy_mg9ZYm = () => import('../routes/api/system/settings/fields.get.mjs');
const _lazy_ncweVx = () => import('../routes/api/system/settings/schema.get.mjs');
const _lazy_1w0gtQ = () => import('../routes/api/system/settings/storage-config/_id_.mjs');
const _lazy_Hfs_ZN = () => import('../routes/api/system/settings/index.mjs');
const _lazy_UbsDcQ = () => import('../routes/api/system/stats.get.mjs');
const _lazy_b9Pi7B = () => import('../routes/api/wizard/admin.post.mjs');
const _lazy_FL59rL = () => import('../routes/api/wizard/complete.post.mjs');
const _lazy_96S18o = () => import('../routes/api/wizard/map.post.mjs');
const _lazy_TzTvDF = () => import('../routes/api/wizard/schema.get.mjs');
const _lazy_rcaYZd = () => import('../routes/api/wizard/site.post.mjs');
const _lazy_WG7jqv = () => import('../routes/api/wizard/storage.post.mjs');
const _lazy_jR6jm6 = () => import('../routes/api/wizard/submit.post.mjs');
const _lazy_eU1JrH = () => import('../routes/image/_...key_.get.mjs');
const _lazy_TgVvLW = () => import('../routes/storage/_...path_.mjs');
const _lazy_MxAL9C = () => import('../routes/thumb/_...thumbnailUrl_.get.mjs');
const _lazy_9td0xI = () => import('../routes/renderer.mjs');
const _lazy_mL1US7 = () => import('../routes/__og-image__/font/font.mjs');
const _lazy_QCmKEV = () => import('../routes/__og-image__/image/image.mjs');

const handlers = [
  { route: '', handler: _Z5ZBdx, lazy: false, middleware: true, method: undefined },
  { route: '/api/albums/:albumId', handler: _lazy_MCNwR8, lazy: true, middleware: false, method: "delete" },
  { route: '/api/albums/:albumId', handler: _lazy_4odk7W, lazy: true, middleware: false, method: "get" },
  { route: '/api/albums/:albumId', handler: _lazy_Cwd98U, lazy: true, middleware: false, method: "put" },
  { route: '/api/albums/:albumId/photos/:photoId', handler: _lazy_l1KlT0, lazy: true, middleware: false, method: "delete" },
  { route: '/api/albums', handler: _lazy_w0aqUN, lazy: true, middleware: false, method: "get" },
  { route: '/api/albums', handler: _lazy_FnLBRk, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/github', handler: _lazy_YOLRyI, lazy: true, middleware: false, method: "get" },
  { route: '/api/login', handler: _lazy_P_nUTM, lazy: true, middleware: false, method: "post" },
  { route: '/api/logout', handler: _lazy_ilzEFx, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId/albums', handler: _lazy_Va30Uy, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId', handler: _lazy_A0njb3, lazy: true, middleware: false, method: "delete" },
  { route: '/api/photos/:photoId', handler: _lazy_xM65l2, lazy: true, middleware: false, method: "put" },
  { route: '/api/photos/:photoId/livephoto', handler: _lazy_ywHfJK, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/:photoId/reactions', handler: _lazy_V_vPc5, lazy: true, middleware: false, method: undefined },
  { route: '/api/photos/check-duplicate', handler: _lazy_9KFqmj, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/exif/reindex', handler: _lazy_M65H8i, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos', handler: _lazy_cuZlHW, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos', handler: _lazy_pR4Lc5, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/livephoto/manage', handler: _lazy_l3BJy7, lazy: true, middleware: false, method: "post" },
  { route: '/api/photos/reactions', handler: _lazy_i3VUPC, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/status', handler: _lazy_y5_vCX, lazy: true, middleware: false, method: "get" },
  { route: '/api/photos/upload', handler: _lazy_AFqgCC, lazy: true, middleware: false, method: "put" },
  { route: '/api/profile', handler: _lazy_EoPusK, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/add-task', handler: _lazy_os5S9h, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/add-tasks', handler: _lazy_K4vT6D, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/stats/:taskId', handler: _lazy_2HpLIH, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/stats', handler: _lazy_M_0I31, lazy: true, middleware: false, method: undefined },
  { route: '/api/queue/task/clear', handler: _lazy_KyFLSR, lazy: true, middleware: false, method: "delete" },
  { route: '/api/queue/task/list', handler: _lazy_A9WE4r, lazy: true, middleware: false, method: "get" },
  { route: '/api/queue/task/retry-batch', handler: _lazy_gzaaVo, lazy: true, middleware: false, method: "post" },
  { route: '/api/queue/task/retry', handler: _lazy_dQbq39, lazy: true, middleware: false, method: "post" },
  { route: '/api/system/logs', handler: _lazy__Fz3ZP, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/:namespace', handler: _lazy_M_TxKR, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/:namespace/:key', handler: _lazy_rOuytS, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/all', handler: _lazy_d4J6kY, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/batch', handler: _lazy_Qp1uOf, lazy: true, middleware: false, method: "put" },
  { route: '/api/system/settings/fields', handler: _lazy_mg9ZYm, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/schema', handler: _lazy_ncweVx, lazy: true, middleware: false, method: "get" },
  { route: '/api/system/settings/storage-config/:id', handler: _lazy_1w0gtQ, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/settings/storage-config', handler: _lazy_Hfs_ZN, lazy: true, middleware: false, method: undefined },
  { route: '/api/system/stats', handler: _lazy_UbsDcQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/wizard/admin', handler: _lazy_b9Pi7B, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/complete', handler: _lazy_FL59rL, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/map', handler: _lazy_96S18o, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/schema', handler: _lazy_TzTvDF, lazy: true, middleware: false, method: "get" },
  { route: '/api/wizard/site', handler: _lazy_rcaYZd, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/storage', handler: _lazy_WG7jqv, lazy: true, middleware: false, method: "post" },
  { route: '/api/wizard/submit', handler: _lazy_jR6jm6, lazy: true, middleware: false, method: "post" },
  { route: '/image/**:key', handler: _lazy_eU1JrH, lazy: true, middleware: false, method: "get" },
  { route: '/storage/**:path', handler: _lazy_TgVvLW, lazy: true, middleware: false, method: undefined },
  { route: '/thumb/**:thumbnailUrl', handler: _lazy_MxAL9C, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_9td0xI, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _UyQuY3, lazy: false, middleware: false, method: undefined },
  { route: '/api/_auth/session', handler: _gyKVxd, lazy: false, middleware: false, method: "delete" },
  { route: '/api/_auth/session', handler: _XaEaSY, lazy: false, middleware: false, method: "get" },
  { route: '/__og-image__/font/**', handler: _lazy_mL1US7, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _oiQE2D, lazy: false, middleware: true, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_QCmKEV, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_QCmKEV, lazy: true, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _Ei4Tra, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _0c84ya, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_9td0xI, lazy: true, middleware: false, method: undefined }
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
    debug: destr(false),
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
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b$1(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C$1(
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

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
{
  const { handleUpgrade } = nodeAdapter(nitroApp.h3App.websocket);
  server.on("upgrade", handleUpgrade);
}
const nodeServer = {};

export { appTeleportAttrs as $, processLivePhotoVideo as A, findLivePhotoVideoForImage as B, getQuery as C, getMethod as D, photos as E, getHeader as F, readRawBody as G, getUserSession as H, createEventStream as I, settingNamespaces as J, settingsManager as K, settingKeys as L, getValidatedQuery as M, s3StorageConfigSchema as N, localStorageConfigSchema as O, openListStorageConfigSchema as P, hashPassword as Q, storageConfigSchema as R, setHeader as S, sendStream as T, getResponseStatusText as U, getResponseStatus as V, appId as W, defineRenderHandler as X, buildAssetsURL as Y, publicAssetsURL as Z, appTeleportTag as _, readValidatedBody as a, createSSRContext as a0, appHead as a1, destr as a2, setSSRError as a3, getRouteRules as a4, getRenderer as a5, renderInlineStyles as a6, replaceIslandTeleports as a7, useNitroApp as a8, prefixStorage as a9, getContext as aA, setCookie as aB, getCookie as aC, deleteCookie as aD, sanitizeStatusCode as aE, decompressUint8Array as aF, $fetch$1 as aG, baseURL as aH, resolveUnrefHeadInput as aI, isMapboxMap as aJ, createHooks as aK, executeAsync as aL, toRouteMatcher as aM, createRouter$1 as aN, getRequestURL as aO, createDefu as aP, decodeHtml as aQ, logger as aR, toBase64Image as aS, withBase as aT, htmlDecodeQuotes as aU, sendError as aV, fontCache as aW, upperFirst as aX, nodeServer as aY, useStorage as aa, useNitroOrigin as ab, emojiCache as ac, useOgImageRuntimeConfig as ad, fetchIsland as ae, createHeadCore as af, normaliseFontInput as ag, theme as ah, withTrailingSlash as ai, handleCacheHeaders as aj, setHeaders as ak, hash$1 as al, parseURL as am, setResponseHeader as an, proxyRequest as ao, resolveContext as ap, H3Error as aq, defu as ar, klona as as, defuFn as at, headSymbol as au, useHead as av, appendResponseHeader as aw, parse as ax, getRequestHeader as ay, isEqual as az, sendRedirect as b, createError$1 as c, defineOAuthGitHubEventHandler as d, eventHandler as e, setResponseStatus as f, getValidatedRouterParams as g, clearUserSession as h, useStorageProvider as i, getRouterParam as j, readBody as k, logger$1 as l, extractExifData as m, defineEventHandler as n, getHeaders as o, getRequestIP as p, generateSafePhotoId as q, requireUserSession as r, setUserSession as s, tables as t, useDB as u, verifyPassword as v, extractPhotoInfo as w, useRuntimeConfig as x, getStorageManager as y, isLivePhotoVideo as z };
//# sourceMappingURL=nitro.mjs.map
