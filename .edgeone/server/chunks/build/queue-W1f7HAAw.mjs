import { _ as _export_sfc, q as useI18n, u as useHead, D as useToast, aK as useFetch, B as _sfc_main$v, aL as setInterval, R as _sfc_main$8 } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$4 } from './DashboardNavbar-DOwENe-X.mjs';
import { _ as __nuxt_component_3 } from './Indicator-CtYja1at.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './SelectMenu-B-dQe02o.mjs';
import { _ as _sfc_main$2 } from './Table-BqdcNZXo.mjs';
import { defineComponent, ref, withAsyncContext, computed, h, withCtx, unref, isRef, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import '@iconify/utils';
import 'ipx';
import 'pinia';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/locale/zh-cn.js';
import 'dayjs/locale/zh-hk.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'dayjs/plugin/timezone.js';
import 'dayjs/plugin/duration.js';
import 'dayjs/plugin/localizedFormat.js';
import 'dayjs/plugin/isBetween.js';
import 'tailwindcss/colors';
import '@yeger/vue-masonry-wall';
import 'tailwind-merge';
import 'perfect-debounce';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';
import './DashboardSidebarToggle-CGdUeE5a.mjs';
import './PopperArrow-Bian-NL1.mjs';
import './floating-ui.vue-JO3O6Egx.mjs';
import './useDirection-C-Y8mi8I.mjs';
import './useFormControl-UP-XrpNq.mjs';
import './useTypeahead-DPVOAvu6.mjs';
import './utils-D69C__0z.mjs';
import './VisuallyHiddenInput-Ct3sxx75.mjs';
import './DismissableLayer-nRn6FzYo.mjs';
import './useId-CmnGJZbL.mjs';
import './handleAndDispatchCustomEvent-Bk_AVSSo.mjs';
import './index-Cm3iXkLk.mjs';
import './Input-BDsxCbzM.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "queue",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t: $t } = useI18n();
    const UButton = _sfc_main$v;
    useHead({
      title: $t("dashboard.queue.title")
    });
    const toast = useToast();
    const isLoading = ref(false);
    const selectedTasks = ref([]);
    const statusFilter = ref("all");
    const typeFilter = ref("all");
    const { data: queueData, refresh: refreshQueue } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/queue/task/list",
      {
        query: computed(() => ({
          ...statusFilter.value !== "all" && { status: statusFilter.value },
          ...typeFilter.value !== "all" && { type: typeFilter.value }
        }))
      },
      "$Uoc06oW9fj"
    )), __temp = await __temp, __restore(), __temp);
    const queueStats = computed(() => {
      if (!queueData.value?.data)
        return { pending: 0, processing: 0, completed: 0, failed: 0 };
      const stats = { pending: 0, processing: 0, completed: 0, failed: 0 };
      queueData.value.data.forEach((task) => {
        if (task.status === "pending") stats.pending++;
        else if (task.status === "in-stages") stats.processing++;
        else if (task.status === "completed") stats.completed++;
        else if (task.status === "failed") stats.failed++;
      });
      return stats;
    });
    const refreshData = async () => {
      isLoading.value = true;
      try {
        await refreshQueue();
        selectedTasks.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const clearNonActiveTasks = async () => {
      try {
        isLoading.value = true;
        const result = await $fetch("/api/queue/task/clear", {
          method: "DELETE",
          query: {
            includeCompleted: "true",
            includeFailed: "true"
          }
        });
        toast.add({
          title: $t("dashboard.queue.messages.clearSuccess"),
          description: `清除了 ${result.deletedCount} 个任务`,
          color: "success"
        });
        await refreshData();
      } catch (error) {
        console.error("Clear tasks failed:", error);
        toast.add({
          title: $t("dashboard.queue.messages.operationFailed"),
          description: error?.message || "清理任务失败",
          color: "error"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const retryTask = async (taskId) => {
      try {
        await $fetch("/api/queue/task/retry", {
          method: "POST",
          body: { taskId }
        });
        toast.add({
          title: $t("dashboard.queue.messages.retrySuccess"),
          color: "success"
        });
        await refreshData();
      } catch (error) {
        console.error("Retry task failed:", error);
        toast.add({
          title: $t("dashboard.queue.messages.operationFailed"),
          description: error?.message || "重试任务失败",
          color: "error"
        });
      }
    };
    const retryAllFailedTasks = async () => {
      try {
        isLoading.value = true;
        const result = await $fetch("/api/queue/task/retry-batch", {
          method: "POST",
          body: { retryAll: true }
        });
        toast.add({
          title: $t("dashboard.queue.messages.batchRetrySuccess"),
          description: `重试了 ${result.retriedCount} 个任务`,
          color: "success"
        });
        await refreshData();
      } catch (error) {
        console.error("Batch retry failed:", error);
        toast.add({
          title: $t("dashboard.queue.messages.operationFailed"),
          description: error?.message || "批量重试失败",
          color: "error"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const deleteTask = async (taskId) => {
      try {
        await $fetch(`/api/queue/failed/${taskId}`, {
          method: "DELETE"
        });
        toast.add({
          title: $t("dashboard.queue.messages.deleteSuccess"),
          color: "success"
        });
        await refreshData();
      } catch (error) {
        console.error("Delete task failed:", error);
        toast.add({
          title: $t("dashboard.queue.messages.operationFailed"),
          description: error?.message || "删除任务失败",
          color: "error"
        });
      }
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "pending":
          return "warning";
        case "in-stages":
          return "info";
        case "completed":
          return "success";
        case "failed":
          return "error";
        default:
          return "neutral";
      }
    };
    const statusOptions = [
      { label: $t("dashboard.queue.filters.all"), value: "all" },
      { label: $t("dashboard.queue.status.pending"), value: "pending" },
      { label: $t("dashboard.queue.status.in-stages"), value: "in-stages" },
      { label: $t("dashboard.queue.status.completed"), value: "completed" },
      { label: $t("dashboard.queue.status.failed"), value: "failed" }
    ];
    const typeOptions = [
      { label: $t("dashboard.queue.filters.all"), value: "all" },
      { label: $t("dashboard.queue.types.photo"), value: "photo" },
      {
        label: $t("dashboard.queue.types.live-photo-video"),
        value: "live-photo-video"
      },
      {
        label: $t("dashboard.queue.types.photo-reverse-geocoding"),
        value: "photo-reverse-geocoding"
      }
    ];
    const expanded = ref({});
    const columns = [
      {
        id: "expand",
        cell: ({ row }) => h(_sfc_main$v, {
          color: "neutral",
          variant: "ghost",
          icon: "tabler:chevron-down",
          square: true,
          "aria-label": "Expand",
          ui: {
            leadingIcon: [
              "transition-transform",
              row.getIsExpanded() ? "duration-200 rotate-180" : ""
            ]
          },
          onClick: () => row.toggleExpanded()
        }),
        enableSorting: false,
        enableHiding: false
      },
      {
        accessorKey: "id",
        header: $t("dashboard.queue.table.id")
      },
      {
        id: "type",
        accessorFn: (row) => row.payload.type,
        header: $t("dashboard.queue.table.type")
      },
      {
        accessorKey: "status",
        header: $t("dashboard.queue.table.status")
      },
      {
        accessorKey: "attempts",
        header: $t("dashboard.queue.table.attempts")
      },
      {
        accessorKey: "priority",
        header: $t("dashboard.queue.table.priority")
      },
      {
        accessorKey: "statusStage",
        header: $t("dashboard.queue.table.stage")
      },
      {
        accessorKey: "createdAt",
        header: $t("dashboard.queue.table.createdAt")
      },
      {
        id: "actions",
        header: $t("dashboard.queue.table.actions")
      }
    ];
    setInterval();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1;
      const _component_UDashboardNavbar = _sfc_main$4;
      const _component_DashboardIndicator = __nuxt_component_3;
      const _component_UCard = _sfc_main$1$1;
      const _component_USelectMenu = _sfc_main$3;
      const _component_UTable = _sfc_main$2;
      const _component_UBadge = _sfc_main$8;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("dashboard.queue.title")
            }, {
              right: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UButton), {
                    icon: "tabler:refresh",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: refreshData
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.queue.actions.refresh"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.refresh")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(UButton), {
                    icon: "tabler:refresh",
                    color: "warning",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: retryAllFailedTasks
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.queue.actions.retryAll"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.retryAll")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(UButton), {
                    icon: "tabler:trash",
                    color: "error",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: clearNonActiveTasks
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.queue.actions.clearNonActive"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.clearNonActive")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(UButton), {
                      icon: "tabler:refresh",
                      variant: "soft",
                      loading: unref(isLoading),
                      onClick: refreshData
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.refresh")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(unref(UButton), {
                      icon: "tabler:refresh",
                      color: "warning",
                      variant: "soft",
                      loading: unref(isLoading),
                      onClick: retryAllFailedTasks
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.retryAll")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(unref(UButton), {
                      icon: "tabler:trash",
                      color: "error",
                      variant: "soft",
                      loading: unref(isLoading),
                      onClick: clearNonActiveTasks
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.clearNonActive")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("dashboard.queue.title")
              }, {
                right: withCtx(() => [
                  createVNode(unref(UButton), {
                    icon: "tabler:refresh",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: refreshData
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.refresh")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(unref(UButton), {
                    icon: "tabler:refresh",
                    color: "warning",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: retryAllFailedTasks
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.retryAll")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(unref(UButton), {
                    icon: "tabler:trash",
                    color: "error",
                    variant: "soft",
                    loading: unref(isLoading),
                    onClick: clearNonActiveTasks
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("dashboard.queue.actions.clearNonActive")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6" data-v-3f5af77b${_scopeId}><div class="grid grid-cols-2 lg:grid-cols-4 gap-4" data-v-3f5af77b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.queue.indicator.pending"),
              icon: "tabler:clock",
              color: "orange",
              value: unref(queueStats).pending
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.queue.indicator.processing"),
              icon: "tabler:loader",
              color: "blue",
              value: unref(queueStats).processing
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.queue.indicator.completed"),
              icon: "tabler:check",
              color: "green",
              value: unref(queueStats).completed
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DashboardIndicator, {
              title: unref($t)("dashboard.queue.indicator.failed"),
              icon: "tabler:alert-triangle",
              color: "red",
              value: unref(queueStats).failed
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between pb-2" data-v-3f5af77b${_scopeId2}><h2 class="text-lg font-semibold" data-v-3f5af77b${_scopeId2}>队列任务列表</h2><div class="flex items-center gap-2" data-v-3f5af77b${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_USelectMenu, {
                    modelValue: unref(statusFilter),
                    "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                    items: statusOptions,
                    "value-key": "value",
                    size: "sm",
                    variant: "soft",
                    class: "w-32",
                    "search-input": false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_USelectMenu, {
                    modelValue: unref(typeFilter),
                    "onUpdate:modelValue": ($event) => isRef(typeFilter) ? typeFilter.value = $event : null,
                    items: typeOptions,
                    "value-key": "value",
                    size: "sm",
                    variant: "soft",
                    class: "w-32",
                    "search-input": false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between pb-2" }, [
                      createVNode("h2", { class: "text-lg font-semibold" }, "队列任务列表"),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(statusFilter),
                          "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                          items: statusOptions,
                          "value-key": "value",
                          size: "sm",
                          variant: "soft",
                          class: "w-32",
                          "search-input": false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(typeFilter),
                          "onUpdate:modelValue": ($event) => isRef(typeFilter) ? typeFilter.value = $event : null,
                          items: typeOptions,
                          "value-key": "value",
                          size: "sm",
                          variant: "soft",
                          class: "w-32",
                          "search-input": false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4" data-v-3f5af77b${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UTable, {
                    expanded: unref(expanded),
                    "onUpdate:expanded": ($event) => isRef(expanded) ? expanded.value = $event : null,
                    data: unref(queueData)?.data || [],
                    columns,
                    loading: unref(isLoading),
                    "empty-state": {
                      icon: "tabler:inbox",
                      label: unref($t)("dashboard.queue.messages.noTasks")
                    },
                    class: "w-full"
                  }, {
                    "type-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          label: unref($t)(`dashboard.queue.types.${row.original.payload.type}`),
                          variant: "soft",
                          color: row.original.payload.type === "photo" ? "info" : "secondary",
                          size: "sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.types.${row.original.payload.type}`),
                            variant: "soft",
                            color: row.original.payload.type === "photo" ? "info" : "secondary",
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    "status-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          label: unref($t)(`dashboard.queue.status.${row.original.status}`),
                          variant: "soft",
                          color: getStatusColor(row.original.status),
                          size: "sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.status.${row.original.status}`),
                            variant: "soft",
                            color: getStatusColor(row.original.status),
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ];
                      }
                    }),
                    "attempts-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(row.original.attempts)}/${ssrInterpolate(row.original.maxAttempts)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm" }, toDisplayString(row.original.attempts) + "/" + toDisplayString(row.original.maxAttempts), 1)
                        ];
                      }
                    }),
                    "statusStage-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (row.original.statusStage) {
                          _push4(`<span class="text-xs text-gray-500" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(unref($t)(`dashboard.queue.stages.${row.original.statusStage}`))}</span>`);
                        } else {
                          _push4(`<span class="text-xs text-gray-400" data-v-3f5af77b${_scopeId3}>-</span>`);
                        }
                      } else {
                        return [
                          row.original.statusStage ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(unref($t)(`dashboard.queue.stages.${row.original.statusStage}`)), 1)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs text-gray-400"
                          }, "-"))
                        ];
                      }
                    }),
                    "createdAt-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(_ctx.$dayjs(row.original.createdAt).format("MM-DD HH:mm:ss"))}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm" }, toDisplayString(_ctx.$dayjs(row.original.createdAt).format("MM-DD HH:mm:ss")), 1)
                        ];
                      }
                    }),
                    "actions-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-1" data-v-3f5af77b${_scopeId3}>`);
                        if (row.original.status === "failed") {
                          _push4(ssrRenderComponent(unref(UButton), {
                            icon: "tabler:refresh",
                            size: "xs",
                            variant: "soft",
                            color: "warning",
                            onClick: ($event) => retryTask(row.original.id)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref($t)("dashboard.queue.buttons.retry"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.retry")), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.original.status !== "in-stage") {
                          _push4(ssrRenderComponent(unref(UButton), {
                            icon: "tabler:trash",
                            size: "xs",
                            variant: "soft",
                            color: "error",
                            onClick: ($event) => deleteTask(row.original.id)
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref($t)("dashboard.queue.buttons.delete"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.delete")), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.original.status === "pending" || row.original.status === "in-stages") {
                          _push4(`<span class="text-xs text-gray-400" data-v-3f5af77b${_scopeId3}> - </span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            row.original.status === "failed" ? (openBlock(), createBlock(unref(UButton), {
                              key: 0,
                              icon: "tabler:refresh",
                              size: "xs",
                              variant: "soft",
                              color: "warning",
                              onClick: ($event) => retryTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.retry")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status !== "in-stage" ? (openBlock(), createBlock(unref(UButton), {
                              key: 1,
                              icon: "tabler:trash",
                              size: "xs",
                              variant: "soft",
                              color: "error",
                              onClick: ($event) => deleteTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.delete")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status === "pending" || row.original.status === "in-stages" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs text-gray-400"
                            }, " - ")) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    expanded: withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="px-2" data-v-3f5af77b${_scopeId3}><div class="space-y-3" data-v-3f5af77b${_scopeId3}><div class="flex gap-4" data-v-3f5af77b${_scopeId3}><div data-v-3f5af77b${_scopeId3}><p class="text-xs text-neutral-500" data-v-3f5af77b${_scopeId3}>PhotoId</p><p class="text-sm capitalize" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(row.original.payload.photoId || "-")}</p></div><div data-v-3f5af77b${_scopeId3}><p class="text-xs text-neutral-500" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(unref($t)("dashboard.queue.table.id"))}</p><p class="font-mono text-sm" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(row.original.id)}</p></div><div data-v-3f5af77b${_scopeId3}><p class="text-xs text-neutral-500" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(unref($t)("dashboard.queue.table.type"))}</p><p class="text-sm capitalize" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(row.original.payload.type)}</p></div></div>`);
                        if (row.original.status === "failed" && row.original.errorMessage) {
                          _push4(`<div class="mt-3" data-v-3f5af77b${_scopeId3}><p class="text-xs text-neutral-500 mb-1" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(unref($t)("dashboard.queue.table.errorMessage"))}</p><div class="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-100 dark:border-red-900/30" data-v-3f5af77b${_scopeId3}><p class="text-sm text-red-700 dark:text-red-300 wrap-break-word font-mono" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(row.original.errorMessage)}</p></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (row.original.payload) {
                          _push4(`<div class="mt-3" data-v-3f5af77b${_scopeId3}><p class="text-xs text-gray-500 mb-1" data-v-3f5af77b${_scopeId3}>Payload</p><pre class="text-xs bg-neutral-100/50 dark:bg-neutral-800/50 p-2 rounded overflow-x-auto text-neutral-700 dark:text-neutral-300" data-v-3f5af77b${_scopeId3}>${ssrInterpolate(JSON.stringify(row.original.payload, null, 2))}</pre></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "px-2" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, "PhotoId"),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.photoId || "-"), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.id")), 1),
                                  createVNode("p", { class: "font-mono text-sm" }, toDisplayString(row.original.id), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.type")), 1),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.type), 1)
                                ])
                              ]),
                              row.original.status === "failed" && row.original.errorMessage ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-neutral-500 mb-1" }, toDisplayString(unref($t)("dashboard.queue.table.errorMessage")), 1),
                                createVNode("div", { class: "p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-100 dark:border-red-900/30" }, [
                                  createVNode("p", { class: "text-sm text-red-700 dark:text-red-300 wrap-break-word font-mono" }, toDisplayString(row.original.errorMessage), 1)
                                ])
                              ])) : createCommentVNode("", true),
                              row.original.payload ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-gray-500 mb-1" }, "Payload"),
                                createVNode("pre", { class: "text-xs bg-neutral-100/50 dark:bg-neutral-800/50 p-2 rounded overflow-x-auto text-neutral-700 dark:text-neutral-300" }, toDisplayString(JSON.stringify(row.original.payload, null, 2)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UTable, {
                        expanded: unref(expanded),
                        "onUpdate:expanded": ($event) => isRef(expanded) ? expanded.value = $event : null,
                        data: unref(queueData)?.data || [],
                        columns,
                        loading: unref(isLoading),
                        "empty-state": {
                          icon: "tabler:inbox",
                          label: unref($t)("dashboard.queue.messages.noTasks")
                        },
                        class: "w-full"
                      }, {
                        "type-cell": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.types.${row.original.payload.type}`),
                            variant: "soft",
                            color: row.original.payload.type === "photo" ? "info" : "secondary",
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ]),
                        "status-cell": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.status.${row.original.status}`),
                            variant: "soft",
                            color: getStatusColor(row.original.status),
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ]),
                        "attempts-cell": withCtx(({ row }) => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(row.original.attempts) + "/" + toDisplayString(row.original.maxAttempts), 1)
                        ]),
                        "statusStage-cell": withCtx(({ row }) => [
                          row.original.statusStage ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(unref($t)(`dashboard.queue.stages.${row.original.statusStage}`)), 1)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs text-gray-400"
                          }, "-"))
                        ]),
                        "createdAt-cell": withCtx(({ row }) => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(_ctx.$dayjs(row.original.createdAt).format("MM-DD HH:mm:ss")), 1)
                        ]),
                        "actions-cell": withCtx(({ row }) => [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            row.original.status === "failed" ? (openBlock(), createBlock(unref(UButton), {
                              key: 0,
                              icon: "tabler:refresh",
                              size: "xs",
                              variant: "soft",
                              color: "warning",
                              onClick: ($event) => retryTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.retry")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status !== "in-stage" ? (openBlock(), createBlock(unref(UButton), {
                              key: 1,
                              icon: "tabler:trash",
                              size: "xs",
                              variant: "soft",
                              color: "error",
                              onClick: ($event) => deleteTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.delete")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status === "pending" || row.original.status === "in-stages" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs text-gray-400"
                            }, " - ")) : createCommentVNode("", true)
                          ])
                        ]),
                        expanded: withCtx(({ row }) => [
                          createVNode("div", { class: "px-2" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, "PhotoId"),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.photoId || "-"), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.id")), 1),
                                  createVNode("p", { class: "font-mono text-sm" }, toDisplayString(row.original.id), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.type")), 1),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.type), 1)
                                ])
                              ]),
                              row.original.status === "failed" && row.original.errorMessage ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-neutral-500 mb-1" }, toDisplayString(unref($t)("dashboard.queue.table.errorMessage")), 1),
                                createVNode("div", { class: "p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-100 dark:border-red-900/30" }, [
                                  createVNode("p", { class: "text-sm text-red-700 dark:text-red-300 wrap-break-word font-mono" }, toDisplayString(row.original.errorMessage), 1)
                                ])
                              ])) : createCommentVNode("", true),
                              row.original.payload ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-gray-500 mb-1" }, "Payload"),
                                createVNode("pre", { class: "text-xs bg-neutral-100/50 dark:bg-neutral-800/50 p-2 rounded overflow-x-auto text-neutral-700 dark:text-neutral-300" }, toDisplayString(JSON.stringify(row.original.payload, null, 2)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["expanded", "onUpdate:expanded", "data", "loading", "empty-state"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, [
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.queue.indicator.pending"),
                    icon: "tabler:clock",
                    color: "orange",
                    value: unref(queueStats).pending
                  }, null, 8, ["title", "value"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.queue.indicator.processing"),
                    icon: "tabler:loader",
                    color: "blue",
                    value: unref(queueStats).processing
                  }, null, 8, ["title", "value"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.queue.indicator.completed"),
                    icon: "tabler:check",
                    color: "green",
                    value: unref(queueStats).completed
                  }, null, 8, ["title", "value"]),
                  createVNode(_component_DashboardIndicator, {
                    title: unref($t)("dashboard.queue.indicator.failed"),
                    icon: "tabler:alert-triangle",
                    color: "red",
                    value: unref(queueStats).failed
                  }, null, 8, ["title", "value"])
                ]),
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("div", { class: "flex items-center justify-between pb-2" }, [
                      createVNode("h2", { class: "text-lg font-semibold" }, "队列任务列表"),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(statusFilter),
                          "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                          items: statusOptions,
                          "value-key": "value",
                          size: "sm",
                          variant: "soft",
                          class: "w-32",
                          "search-input": false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(typeFilter),
                          "onUpdate:modelValue": ($event) => isRef(typeFilter) ? typeFilter.value = $event : null,
                          items: typeOptions,
                          "value-key": "value",
                          size: "sm",
                          variant: "soft",
                          class: "w-32",
                          "search-input": false
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UTable, {
                        expanded: unref(expanded),
                        "onUpdate:expanded": ($event) => isRef(expanded) ? expanded.value = $event : null,
                        data: unref(queueData)?.data || [],
                        columns,
                        loading: unref(isLoading),
                        "empty-state": {
                          icon: "tabler:inbox",
                          label: unref($t)("dashboard.queue.messages.noTasks")
                        },
                        class: "w-full"
                      }, {
                        "type-cell": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.types.${row.original.payload.type}`),
                            variant: "soft",
                            color: row.original.payload.type === "photo" ? "info" : "secondary",
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ]),
                        "status-cell": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            label: unref($t)(`dashboard.queue.status.${row.original.status}`),
                            variant: "soft",
                            color: getStatusColor(row.original.status),
                            size: "sm"
                          }, null, 8, ["label", "color"])
                        ]),
                        "attempts-cell": withCtx(({ row }) => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(row.original.attempts) + "/" + toDisplayString(row.original.maxAttempts), 1)
                        ]),
                        "statusStage-cell": withCtx(({ row }) => [
                          row.original.statusStage ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(unref($t)(`dashboard.queue.stages.${row.original.statusStage}`)), 1)) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs text-gray-400"
                          }, "-"))
                        ]),
                        "createdAt-cell": withCtx(({ row }) => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(_ctx.$dayjs(row.original.createdAt).format("MM-DD HH:mm:ss")), 1)
                        ]),
                        "actions-cell": withCtx(({ row }) => [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            row.original.status === "failed" ? (openBlock(), createBlock(unref(UButton), {
                              key: 0,
                              icon: "tabler:refresh",
                              size: "xs",
                              variant: "soft",
                              color: "warning",
                              onClick: ($event) => retryTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.retry")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status !== "in-stage" ? (openBlock(), createBlock(unref(UButton), {
                              key: 1,
                              icon: "tabler:trash",
                              size: "xs",
                              variant: "soft",
                              color: "error",
                              onClick: ($event) => deleteTask(row.original.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.queue.buttons.delete")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            row.original.status === "pending" || row.original.status === "in-stages" ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-xs text-gray-400"
                            }, " - ")) : createCommentVNode("", true)
                          ])
                        ]),
                        expanded: withCtx(({ row }) => [
                          createVNode("div", { class: "px-2" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, "PhotoId"),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.photoId || "-"), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.id")), 1),
                                  createVNode("p", { class: "font-mono text-sm" }, toDisplayString(row.original.id), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-xs text-neutral-500" }, toDisplayString(unref($t)("dashboard.queue.table.type")), 1),
                                  createVNode("p", { class: "text-sm capitalize" }, toDisplayString(row.original.payload.type), 1)
                                ])
                              ]),
                              row.original.status === "failed" && row.original.errorMessage ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-neutral-500 mb-1" }, toDisplayString(unref($t)("dashboard.queue.table.errorMessage")), 1),
                                createVNode("div", { class: "p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-100 dark:border-red-900/30" }, [
                                  createVNode("p", { class: "text-sm text-red-700 dark:text-red-300 wrap-break-word font-mono" }, toDisplayString(row.original.errorMessage), 1)
                                ])
                              ])) : createCommentVNode("", true),
                              row.original.payload ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "mt-3"
                              }, [
                                createVNode("p", { class: "text-xs text-gray-500 mb-1" }, "Payload"),
                                createVNode("pre", { class: "text-xs bg-neutral-100/50 dark:bg-neutral-800/50 p-2 rounded overflow-x-auto text-neutral-700 dark:text-neutral-300" }, toDisplayString(JSON.stringify(row.original.payload, null, 2)), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["expanded", "onUpdate:expanded", "data", "loading", "empty-state"])
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/queue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const queue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f5af77b"]]);

export { queue as default };
//# sourceMappingURL=queue-W1f7HAAw.mjs.map
