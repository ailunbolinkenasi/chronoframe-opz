import { e as eventHandler, r as requireUserSession, u as useDB, t as tables } from '../../../nitro/nitro.mjs';
import { sql, gte } from 'drizzle-orm';
import * as si from 'systeminformation';
import { readFileSync } from 'node:fs';
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

async function getQueueStats() {
  const workerPool = globalThis.__workerPool;
  return workerPool ? workerPool.getPoolStats() : null;
}
async function checkIfDocker() {
  try {
    const fs = await import('fs');
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

export { stats_get as default };
//# sourceMappingURL=stats.get.mjs.map
