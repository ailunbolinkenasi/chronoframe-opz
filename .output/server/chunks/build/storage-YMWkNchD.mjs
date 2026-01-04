import { q as useI18n, u as useHead, D as useToast, aK as useFetch, B as _sfc_main$v, at as _sfc_main$z } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$9 } from './DashboardNavbar-DOwENe-X.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$3 } from './SelectMenu-B-dQe02o.mjs';
import { a as _sfc_main$2, _ as _sfc_main$1$4 } from './FormField-DW0IB9L7.mjs';
import { a as _sfc_main$4, _ as _sfc_main$1$3 } from './Modal-BpC2u0WJ.mjs';
import { _ as _sfc_main$5 } from './Alert-CTrMCRBw.mjs';
import { _ as _sfc_main$7 } from './Input-BDsxCbzM.mjs';
import { _ as _sfc_main$8 } from './Separator-CSvOwv24.mjs';
import { _ as _sfc_main$a } from './Checkbox-rlh6ivBn.mjs';
import { _ as _sfc_main$b } from './Select-CTwrpF8F.mjs';
import { defineComponent, withAsyncContext, reactive, computed, withCtx, unref, createVNode, createTextVNode, h, useTemplateRef, mergeProps, createBlock, createCommentVNode, openBlock, renderSlot, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './Table-BqdcNZXo.mjs';
import { N as s3StorageConfigSchema, P as openListStorageConfigSchema, O as localStorageConfigSchema } from '../nitro/nitro.mjs';
import 'pinia';
import 'vue-router';
import 'devalue';
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
import 'thumbhash';
import 'swiper/vue';
import 'swiper/modules';
import 'file-type';
import 'dayjs/locale/zh-tw.js';
import 'zod';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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
import 'node:fs/promises';
import 'exiftool-vendored';
import 'es-toolkit';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'ipx';
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
import './utils-Cesy8nNq.mjs';
import './isValueEqualOrExist-BHcybaY2.mjs';
import './RovingFocusItem-BqUpVbau.mjs';
import './RovingFocusGroup-CG7oTT_a.mjs';
import './useFocusGuards-BzyvJ7MS.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AutoForm",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    schema: { default: void 0 },
    state: { default: void 0 },
    validate: { type: Function, default: void 0 },
    validateOn: { default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    validateOnInputDelay: { default: void 0 },
    transform: { type: Boolean, default: true },
    nested: { type: Boolean, default: void 0 },
    loadingAuto: { type: Boolean, default: true },
    class: { default: void 0 },
    fieldsConfig: { default: void 0 }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const form = useTemplateRef("form");
    const fields = computed(() => {
      if (!props.schema || !props.schema._def) return [];
      let shape = {};
      if (props.schema._def.discriminatedUnion) {
        const discriminatorKey = props.schema._def.discriminator;
        const discriminatorValue = props.state?.[discriminatorKey];
        const matchedSchema = props.schema._def.optionsMap?.get(discriminatorValue);
        if (matchedSchema) {
          const optShape = matchedSchema._def.shape?.();
          shape = optShape || {};
        }
      } else if (typeof props.schema._def.shape === "function") {
        shape = props.schema._def.shape();
      } else if (props.schema._def.shape) {
        shape = props.schema._def.shape;
      } else {
        return [];
      }
      return Object.entries(shape).map(([key, value]) => {
        const type = value._def?.type;
        const typeName = value._def?.typeName;
        const isOptional = type === "optional" || typeName === "ZodOptional";
        const actualTypeDef = isOptional ? value._def.innerType._def : value._def;
        let fieldType = "text";
        let inputType = "text";
        const actualType = actualTypeDef.type || actualTypeDef.typeName;
        switch (actualType) {
          case "boolean":
          case "ZodBoolean": {
            fieldType = "checkbox";
            break;
          }
          case "number":
          case "ZodNumber": {
            fieldType = "number";
            inputType = "number";
            break;
          }
          case "enum":
          case "ZodEnum": {
            fieldType = "select";
            break;
          }
          case "string":
          case "ZodString": {
            const checks = actualTypeDef.checks || [];
            const emailCheck = checks.find((c) => c.kind === "email");
            const urlCheck = checks.find((c) => c.kind === "url");
            if (emailCheck) {
              inputType = "email";
            } else if (urlCheck) {
              inputType = "url";
            }
            break;
          }
        }
        const defaultLabel = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
        const config = props.fieldsConfig?.[key] || {};
        const label = config.label ?? defaultLabel;
        const description = config.description;
        return {
          key,
          name: key,
          fieldType,
          inputType,
          isOptional,
          label,
          description,
          config
        };
      });
    });
    const handleSubmit = (event) => {
      emit("submit", event);
    };
    const handleError = (event) => {
      emit("error", event);
    };
    __expose({
      submit: () => form.value?.submit(),
      validate: (opts) => form.value?.validate(opts),
      clear: (path) => form.value?.clear(path),
      getErrors: (path) => form.value?.getErrors(path),
      setErrors: (errors, name) => form.value?.setErrors(errors, name),
      get errors() {
        return form.value?.errors;
      },
      get disabled() {
        return form.value?.disabled;
      },
      get dirty() {
        return form.value?.dirty;
      },
      get dirtyFields() {
        return form.value?.dirtyFields;
      },
      get touchedFields() {
        return form.value?.touchedFields;
      },
      get blurredFields() {
        return form.value?.blurredFields;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1$4;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$7;
      const _component_UCheckbox = _sfc_main$a;
      const _component_USelect = _sfc_main$b;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        id: __props.id,
        ref_key: "form",
        ref: form,
        schema: __props.schema,
        state: __props.state,
        validate: __props.validate,
        "validate-on": __props.validateOn,
        disabled: __props.disabled,
        "validate-on-input-delay": __props.validateOnInputDelay,
        transform: __props.transform,
        nested: __props.nested,
        "loading-auto": __props.loadingAuto,
        onSubmit: handleSubmit,
        onError: handleError
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(fields), (field) => {
              _push2(`<!--[-->`);
              if (field.fieldType !== "hidden" && !field.config?.hidden) {
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: field.label,
                  name: field.name,
                  required: !field.isOptional,
                  description: field.description,
                  ui: {
                    container: "sm:max-w-full"
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (field.fieldType === "text") {
                        _push3(ssrRenderComponent(_component_UInput, mergeProps({
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          type: field.inputType,
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (field.fieldType === "number") {
                        _push3(ssrRenderComponent(_component_UInput, mergeProps({
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (field.fieldType === "checkbox") {
                        _push3(ssrRenderComponent(_component_UCheckbox, mergeProps({
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          label: field.label,
                          disabled: field.config?.disabled ?? false
                        }, { ref_for: true }, field.config?.checkboxProps ?? {}), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (field.fieldType === "select") {
                        _push3(ssrRenderComponent(_component_USelect, mergeProps({
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          items: [],
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.selectProps ?? {}), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        field.fieldType === "text" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 0,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          type: field.inputType,
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "number" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 1,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                          key: 2,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          label: field.label,
                          disabled: field.config?.disabled ?? false
                        }, { ref_for: true }, field.config?.checkboxProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "label", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "select" ? (openBlock(), createBlock(_component_USelect, mergeProps({
                          key: 3,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          items: [],
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.selectProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                  return openBlock(), createBlock(Fragment, {
                    key: field.key
                  }, [
                    field.fieldType !== "hidden" && !field.config?.hidden ? (openBlock(), createBlock(_component_UFormField, {
                      key: 0,
                      label: field.label,
                      name: field.name,
                      required: !field.isOptional,
                      description: field.description,
                      ui: {
                        container: "sm:max-w-full"
                      }
                    }, {
                      default: withCtx(() => [
                        field.fieldType === "text" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 0,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          type: field.inputType,
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "type", "placeholder", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "number" ? (openBlock(), createBlock(_component_UInput, mergeProps({
                          key: 1,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          placeholder: field.config?.placeholder ?? `${field.label.toLowerCase()}`,
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.inputProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "checkbox" ? (openBlock(), createBlock(_component_UCheckbox, mergeProps({
                          key: 2,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          label: field.label,
                          disabled: field.config?.disabled ?? false
                        }, { ref_for: true }, field.config?.checkboxProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "label", "disabled"])) : createCommentVNode("", true),
                        field.fieldType === "select" ? (openBlock(), createBlock(_component_USelect, mergeProps({
                          key: 3,
                          modelValue: __props.state[field.key],
                          "onUpdate:modelValue": ($event) => __props.state[field.key] = $event,
                          items: [],
                          disabled: field.config?.disabled ?? false,
                          class: "w-full"
                        }, { ref_for: true }, field.config?.selectProps ?? {}), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["label", "name", "required", "description"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AutoForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = Object.assign(_sfc_main$1, { __name: "AutoForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "storage",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.storageSettings")
    });
    const toast = useToast();
    const { data: currentStorageProvider, refresh: refreshCurrentStorageProvider } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/system/settings/storage/provider", "$ynzDBib5OO")), __temp = await __temp, __restore(), __temp);
    const { data: availableStorage, refresh: refreshAvailableStorage } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/system/settings/storage-config",
      "$YpEhMMMjI5"
    )), __temp = await __temp, __restore(), __temp);
    const PROVIDER_ICON = {
      s3: "tabler:brand-aws",
      local: "tabler:database",
      openlist: "tabler:cloud"
    };
    const availableStorageColumns = [
      {
        accessorKey: "status",
        header: "",
        meta: {
          class: {
            th: "w-10"
          }
        },
        cell: (cell) => {
          const isActive = currentStorageProvider.value?.value === cell.row.original.id;
          return h(_sfc_main$z, {
            size: "md",
            inset: true,
            standalone: true,
            color: isActive ? "success" : void 0,
            ui: {
              base: !isActive ? "bg-neutral-200 dark:bg-neutral-700" : ""
            }
          });
        }
      },
      { accessorKey: "name", header: "存储名称" },
      { accessorKey: "provider", header: "存储类型" },
      {
        accessorKey: "actions",
        header: "操作",
        cell: (cell) => {
          return h("div", { class: "flex items-center gap-2" }, [
            h(
              _sfc_main$v,
              {
                size: "sm",
                variant: "soft",
                color: "error",
                icon: "tabler:trash",
                disabled: currentStorageProvider.value?.value === cell.row.original.id,
                onClick: () => onStorageDelete(cell.row.original.id)
              },
              { default: () => "删除" }
            )
          ]);
        }
      }
    ];
    const storageSettingsState = reactive({
      storageConfigId: currentStorageProvider.value ? currentStorageProvider.value.value : void 0
    });
    const handleStorageSettingsSubmit = async (close) => {
      try {
        await $fetch("/api/system/settings/storage/provider", {
          method: "PUT",
          body: {
            value: storageSettingsState.storageConfigId
          }
        });
        refreshCurrentStorageProvider();
        close?.();
        toast.add({
          title: "设置已保存",
          color: "success"
        });
      } catch (error) {
        toast.add({
          title: "保存设置时出错",
          description: error.message,
          color: "error"
        });
      }
    };
    const providerOptions = [
      { label: "AWS S3 兼容存储", value: "s3", icon: PROVIDER_ICON.s3 },
      { label: "本地存储", value: "local", icon: PROVIDER_ICON.local },
      { label: "OpenList", value: "openlist", icon: PROVIDER_ICON.openlist }
    ];
    const storageConfigState = reactive({
      name: "",
      provider: "s3",
      config: {
        provider: "s3",
        region: "auto",
        prefix: "/photos"
      }
    });
    const currentStorageSchema = computed(() => {
      const provider = storageConfigState.provider;
      switch (provider) {
        case "local":
          return localStorageConfigSchema;
        case "openlist":
          return openListStorageConfigSchema;
        case "s3":
        default:
          return s3StorageConfigSchema;
      }
    });
    const getStorageConfigDefaults = (provider) => {
      switch (provider) {
        case "local":
          return {
            provider: "local",
            basePath: "/data/storage",
            baseUrl: "/storage"
          };
        case "openlist":
          return {
            provider: "openlist",
            uploadEndpoint: "/api/fs/put",
            deleteEndpoint: "/api/fs/remove",
            metaEndpoint: "/api/fs/get",
            pathField: "path"
          };
        case "s3":
        default:
          return {
            provider: "s3",
            region: "auto",
            prefix: "/photos"
          };
      }
    };
    const storageFieldsConfig = computed(() => {
      const provider = storageConfigState.provider;
      const baseKey = `settings.storage.${provider}`;
      switch (provider) {
        case "local":
          return {
            provider: { hidden: true },
            basePath: {
              label: $t(`${baseKey}.basePath.label`),
              description: $t(`${baseKey}.basePath.description`)
            },
            baseUrl: {
              label: $t(`${baseKey}.baseUrl.label`),
              description: $t(`${baseKey}.baseUrl.description`)
            },
            prefix: {
              label: $t(`${baseKey}.prefix.label`),
              description: $t(`${baseKey}.prefix.description`)
            }
          };
        case "openlist":
          return {
            provider: { hidden: true },
            baseUrl: {
              label: $t(`${baseKey}.baseUrl.label`),
              description: $t(`${baseKey}.baseUrl.description`)
            },
            rootPath: {
              label: $t(`${baseKey}.rootPath.label`),
              description: $t(`${baseKey}.rootPath.description`)
            },
            token: {
              label: $t(`${baseKey}.token.label`),
              description: $t(`${baseKey}.token.description`)
            },
            uploadEndpoint: {
              label: $t(`${baseKey}.uploadEndpoint.label`),
              description: $t(`${baseKey}.uploadEndpoint.description`)
            },
            downloadEndpoint: {
              label: $t(`${baseKey}.downloadEndpoint.label`),
              description: $t(`${baseKey}.downloadEndpoint.description`)
            },
            listEndpoint: {
              label: $t(`${baseKey}.listEndpoint.label`),
              description: $t(`${baseKey}.listEndpoint.description`)
            },
            deleteEndpoint: {
              label: $t(`${baseKey}.deleteEndpoint.label`),
              description: $t(`${baseKey}.deleteEndpoint.description`)
            },
            metaEndpoint: {
              label: $t(`${baseKey}.metaEndpoint.label`),
              description: $t(`${baseKey}.metaEndpoint.description`)
            },
            pathField: {
              label: $t(`${baseKey}.pathField.label`),
              description: $t(`${baseKey}.pathField.description`)
            },
            cdnUrl: {
              label: $t(`${baseKey}.cdnUrl.label`),
              description: $t(`${baseKey}.cdnUrl.description`)
            }
          };
        case "s3":
        default:
          return {
            provider: { hidden: true },
            bucket: {
              label: $t(`${baseKey}.bucket.label`),
              description: $t(`${baseKey}.bucket.description`)
            },
            region: {
              label: $t(`${baseKey}.region.label`),
              description: $t(`${baseKey}.region.description`)
            },
            endpoint: {
              label: $t(`${baseKey}.endpoint.label`),
              description: $t(`${baseKey}.endpoint.description`)
            },
            prefix: {
              label: $t(`${baseKey}.prefix.label`),
              description: $t(`${baseKey}.prefix.description`)
            },
            cdnUrl: {
              label: $t(`${baseKey}.cdnUrl.label`),
              description: $t(`${baseKey}.cdnUrl.description`)
            },
            accessKeyId: {
              label: $t(`${baseKey}.accessKeyId.label`),
              description: $t(`${baseKey}.accessKeyId.description`)
            },
            secretAccessKey: {
              label: $t(`${baseKey}.secretAccessKey.label`),
              description: $t(`${baseKey}.secretAccessKey.description`)
            },
            forcePathStyle: {
              label: $t(`${baseKey}.forcePathStyle.label`),
              description: $t(`${baseKey}.forcePathStyle.description`)
            },
            maxKeys: {
              label: $t(`${baseKey}.maxKeys.label`),
              description: $t(`${baseKey}.maxKeys.description`)
            }
          };
      }
    });
    const onStorageConfigSubmit = async (event, close) => {
      try {
        const payload = {
          name: storageConfigState.name,
          provider: storageConfigState.provider,
          config: event.data
        };
        await $fetch("/api/system/settings/storage-config", {
          method: "POST",
          body: payload
        });
        refreshAvailableStorage();
        toast.add({
          title: "存储方案已创建",
          color: "success"
        });
        storageConfigState.name = "";
        storageConfigState.provider = "s3";
        storageConfigState.config = getStorageConfigDefaults("s3");
        close?.();
      } catch (error) {
        toast.add({
          title: "创建存储方案时出错",
          description: error.message,
          color: "error"
        });
      }
    };
    const onStorageDelete = async (storageId) => {
      try {
        await $fetch(`/api/system/settings/storage-config/${storageId}`, {
          method: "DELETE"
        });
        refreshAvailableStorage();
        toast.add({
          title: "存储方案已删除",
          color: "success"
        });
      } catch (error) {
        toast.add({
          title: "删除存储方案失败",
          description: error.message,
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1$1;
      const _component_UDashboardNavbar = _sfc_main$9;
      const _component_UCard = _sfc_main$1$2;
      const _component_UFormField = _sfc_main$2;
      const _component_USelectMenu = _sfc_main$3;
      const _component_UModal = _sfc_main$4;
      const _component_UAlert = _sfc_main$5;
      const _component_USlideover = _sfc_main$1$3;
      const _component_UInput = _sfc_main$7;
      const _component_USeparator = _sfc_main$8;
      const _component_AutoForm = __nuxt_component_12;
      const _component_UTable = _sfc_main$6;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("title.storageSettings")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("title.storageSettings")
              }, null, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6 max-w-6xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { variant: "outline" }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UModal, {
                    title: "变更存储方案",
                    ui: { footer: "justify-end" }
                  }, {
                    body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAlert, {
                          color: "neutral",
                          variant: "subtle",
                          title: "注意",
                          description: "变更存储方案之后上传的文件将会存储到新的存储方案中，原方案中已有文件不会被迁移。",
                          icon: "tabler:arrows-exchange"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAlert, {
                            color: "neutral",
                            variant: "subtle",
                            title: "注意",
                            description: "变更存储方案之后上传的文件将会存储到新的存储方案中，原方案中已有文件不会被迁移。",
                            icon: "tabler:arrows-exchange"
                          })
                        ];
                      }
                    }),
                    footer: withCtx(({ close }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          label: "取消",
                          color: "neutral",
                          variant: "outline",
                          onClick: close
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          label: "登录",
                          variant: "soft",
                          icon: "tabler:arrows-exchange",
                          type: "submit",
                          form: "storageSettingsForm",
                          onClick: ($event) => handleStorageSettingsSubmit(close)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$v), {
                            label: "取消",
                            color: "neutral",
                            variant: "outline",
                            onClick: close
                          }, null, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$v), {
                            label: "登录",
                            variant: "soft",
                            icon: "tabler:arrows-exchange",
                            type: "submit",
                            form: "storageSettingsForm",
                            onClick: ($event) => handleStorageSettingsSubmit(close)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          variant: "soft",
                          icon: "tabler:device-floppy"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 保存设置 `);
                            } else {
                              return [
                                createTextVNode(" 保存设置 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$v), {
                            variant: "soft",
                            icon: "tabler:device-floppy"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 保存设置 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_UModal, {
                        title: "变更存储方案",
                        ui: { footer: "justify-end" }
                      }, {
                        body: withCtx(() => [
                          createVNode(_component_UAlert, {
                            color: "neutral",
                            variant: "subtle",
                            title: "注意",
                            description: "变更存储方案之后上传的文件将会存储到新的存储方案中，原方案中已有文件不会被迁移。",
                            icon: "tabler:arrows-exchange"
                          })
                        ]),
                        footer: withCtx(({ close }) => [
                          createVNode(unref(_sfc_main$v), {
                            label: "取消",
                            color: "neutral",
                            variant: "outline",
                            onClick: close
                          }, null, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$v), {
                            label: "登录",
                            variant: "soft",
                            icon: "tabler:arrows-exchange",
                            type: "submit",
                            form: "storageSettingsForm",
                            onClick: ($event) => handleStorageSettingsSubmit(close)
                          }, null, 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$v), {
                            variant: "soft",
                            icon: "tabler:device-floppy"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 保存设置 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormField, {
                    name: "storageConfigId",
                    label: "存储方案",
                    required: "",
                    ui: {
                      container: "w-full sm:max-w-sm *:w-full"
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(storageSettingsState).storageConfigId,
                          "onUpdate:modelValue": ($event) => unref(storageSettingsState).storageConfigId = $event,
                          icon: PROVIDER_ICON[unref(availableStorage)?.find(
                            (item) => item.id === unref(storageSettingsState).storageConfigId
                          )?.provider || "local"] || "tabler:database",
                          items: unref(availableStorage)?.map((item) => ({
                            icon: PROVIDER_ICON[item.provider] || "tabler:database",
                            label: item.name,
                            value: item.id
                          })),
                          "label-key": "label",
                          "value-key": "value",
                          placeholder: "选择存储方案"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(storageSettingsState).storageConfigId,
                            "onUpdate:modelValue": ($event) => unref(storageSettingsState).storageConfigId = $event,
                            icon: PROVIDER_ICON[unref(availableStorage)?.find(
                              (item) => item.id === unref(storageSettingsState).storageConfigId
                            )?.provider || "local"] || "tabler:database",
                            items: unref(availableStorage)?.map((item) => ({
                              icon: PROVIDER_ICON[item.provider] || "tabler:database",
                              label: item.name,
                              value: item.id
                            })),
                            "label-key": "label",
                            "value-key": "value",
                            placeholder: "选择存储方案"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UFormField, {
                        name: "storageConfigId",
                        label: "存储方案",
                        required: "",
                        ui: {
                          container: "w-full sm:max-w-sm *:w-full"
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(storageSettingsState).storageConfigId,
                            "onUpdate:modelValue": ($event) => unref(storageSettingsState).storageConfigId = $event,
                            icon: PROVIDER_ICON[unref(availableStorage)?.find(
                              (item) => item.id === unref(storageSettingsState).storageConfigId
                            )?.provider || "local"] || "tabler:database",
                            items: unref(availableStorage)?.map((item) => ({
                              icon: PROVIDER_ICON[item.provider] || "tabler:database",
                              label: item.name,
                              value: item.id
                            })),
                            "label-key": "label",
                            "value-key": "value",
                            placeholder: "选择存储方案"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "items"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, {
              variant: "outline",
              ui: {
                body: "p-0 sm:p-0"
              }
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full flex items-center justify-between"${_scopeId2}><span${_scopeId2}>存储方案管理</span><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_USlideover, {
                    title: "创建存储方案",
                    ui: { footer: "justify-end" }
                  }, {
                    body: withCtx(({ close }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "存储类型",
                          class: "w-full",
                          required: "",
                          ui: {
                            container: "sm:max-w-full"
                          }
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_USelectMenu, {
                                modelValue: unref(storageConfigState).provider,
                                "onUpdate:modelValue": [
                                  ($event) => unref(storageConfigState).provider = $event,
                                  (val) => {
                                    unref(storageConfigState).provider = val;
                                    unref(storageConfigState).config = getStorageConfigDefaults(val);
                                  }
                                ],
                                icon: PROVIDER_ICON[unref(storageConfigState).provider] || "tabler:database",
                                items: providerOptions,
                                "label-key": "label",
                                "value-key": "value",
                                placeholder: "选择存储类型"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_USelectMenu, {
                                  modelValue: unref(storageConfigState).provider,
                                  "onUpdate:modelValue": [
                                    ($event) => unref(storageConfigState).provider = $event,
                                    (val) => {
                                      unref(storageConfigState).provider = val;
                                      unref(storageConfigState).config = getStorageConfigDefaults(val);
                                    }
                                  ],
                                  icon: PROVIDER_ICON[unref(storageConfigState).provider] || "tabler:database",
                                  items: providerOptions,
                                  "label-key": "label",
                                  "value-key": "value",
                                  placeholder: "选择存储类型"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: "存储名称",
                          required: "",
                          ui: {
                            container: "sm:max-w-full"
                          }
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(storageConfigState).name,
                                "onUpdate:modelValue": ($event) => unref(storageConfigState).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(storageConfigState).name,
                                  "onUpdate:modelValue": ($event) => unref(storageConfigState).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_USeparator, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AutoForm, {
                          id: "createStorageForm",
                          schema: unref(currentStorageSchema),
                          state: unref(storageConfigState).config,
                          "fields-config": unref(storageFieldsConfig),
                          onSubmit: ($event) => onStorageConfigSubmit($event, close)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode(_component_UFormField, {
                              label: "存储类型",
                              class: "w-full",
                              required: "",
                              ui: {
                                container: "sm:max-w-full"
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_USelectMenu, {
                                  modelValue: unref(storageConfigState).provider,
                                  "onUpdate:modelValue": [
                                    ($event) => unref(storageConfigState).provider = $event,
                                    (val) => {
                                      unref(storageConfigState).provider = val;
                                      unref(storageConfigState).config = getStorageConfigDefaults(val);
                                    }
                                  ],
                                  icon: PROVIDER_ICON[unref(storageConfigState).provider] || "tabler:database",
                                  items: providerOptions,
                                  "label-key": "label",
                                  "value-key": "value",
                                  placeholder: "选择存储类型"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormField, {
                              label: "存储名称",
                              required: "",
                              ui: {
                                container: "sm:max-w-full"
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(storageConfigState).name,
                                  "onUpdate:modelValue": ($event) => unref(storageConfigState).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_USeparator),
                            createVNode(_component_AutoForm, {
                              id: "createStorageForm",
                              schema: unref(currentStorageSchema),
                              state: unref(storageConfigState).config,
                              "fields-config": unref(storageFieldsConfig),
                              onSubmit: ($event) => onStorageConfigSubmit($event, close)
                            }, null, 8, ["schema", "state", "fields-config", "onSubmit"])
                          ])
                        ];
                      }
                    }),
                    footer: withCtx(({ close }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          label: "取消",
                          color: "neutral",
                          variant: "outline",
                          onClick: close
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          label: "创建存储",
                          variant: "soft",
                          icon: "tabler:check",
                          type: "submit",
                          form: "createStorageForm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$v), {
                            label: "取消",
                            color: "neutral",
                            variant: "outline",
                            onClick: close
                          }, null, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$v), {
                            label: "创建存储",
                            variant: "soft",
                            icon: "tabler:check",
                            type: "submit",
                            form: "createStorageForm"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$v), {
                          size: "sm",
                          variant: "soft",
                          icon: "tabler:plus"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 添加存储 `);
                            } else {
                              return [
                                createTextVNode(" 添加存储 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$v), {
                            size: "sm",
                            variant: "soft",
                            icon: "tabler:plus"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 添加存储 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full flex items-center justify-between" }, [
                      createVNode("span", null, "存储方案管理"),
                      createVNode("div", null, [
                        createVNode(_component_USlideover, {
                          title: "创建存储方案",
                          ui: { footer: "justify-end" }
                        }, {
                          body: withCtx(({ close }) => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode(_component_UFormField, {
                                label: "存储类型",
                                class: "w-full",
                                required: "",
                                ui: {
                                  container: "sm:max-w-full"
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_USelectMenu, {
                                    modelValue: unref(storageConfigState).provider,
                                    "onUpdate:modelValue": [
                                      ($event) => unref(storageConfigState).provider = $event,
                                      (val) => {
                                        unref(storageConfigState).provider = val;
                                        unref(storageConfigState).config = getStorageConfigDefaults(val);
                                      }
                                    ],
                                    icon: PROVIDER_ICON[unref(storageConfigState).provider] || "tabler:database",
                                    items: providerOptions,
                                    "label-key": "label",
                                    "value-key": "value",
                                    placeholder: "选择存储类型"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UFormField, {
                                label: "存储名称",
                                required: "",
                                ui: {
                                  container: "sm:max-w-full"
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UInput, {
                                    modelValue: unref(storageConfigState).name,
                                    "onUpdate:modelValue": ($event) => unref(storageConfigState).name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_USeparator),
                              createVNode(_component_AutoForm, {
                                id: "createStorageForm",
                                schema: unref(currentStorageSchema),
                                state: unref(storageConfigState).config,
                                "fields-config": unref(storageFieldsConfig),
                                onSubmit: ($event) => onStorageConfigSubmit($event, close)
                              }, null, 8, ["schema", "state", "fields-config", "onSubmit"])
                            ])
                          ]),
                          footer: withCtx(({ close }) => [
                            createVNode(unref(_sfc_main$v), {
                              label: "取消",
                              color: "neutral",
                              variant: "outline",
                              onClick: close
                            }, null, 8, ["onClick"]),
                            createVNode(unref(_sfc_main$v), {
                              label: "创建存储",
                              variant: "soft",
                              icon: "tabler:check",
                              type: "submit",
                              form: "createStorageForm"
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$v), {
                              size: "sm",
                              variant: "soft",
                              icon: "tabler:plus"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 添加存储 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UTable, {
                    columns: availableStorageColumns,
                    data: unref(availableStorage)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_UTable, {
                        columns: availableStorageColumns,
                        data: unref(availableStorage)
                      }, null, 8, ["data"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 max-w-6xl" }, [
                createVNode(_component_UCard, { variant: "outline" }, {
                  footer: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_UModal, {
                        title: "变更存储方案",
                        ui: { footer: "justify-end" }
                      }, {
                        body: withCtx(() => [
                          createVNode(_component_UAlert, {
                            color: "neutral",
                            variant: "subtle",
                            title: "注意",
                            description: "变更存储方案之后上传的文件将会存储到新的存储方案中，原方案中已有文件不会被迁移。",
                            icon: "tabler:arrows-exchange"
                          })
                        ]),
                        footer: withCtx(({ close }) => [
                          createVNode(unref(_sfc_main$v), {
                            label: "取消",
                            color: "neutral",
                            variant: "outline",
                            onClick: close
                          }, null, 8, ["onClick"]),
                          createVNode(unref(_sfc_main$v), {
                            label: "登录",
                            variant: "soft",
                            icon: "tabler:arrows-exchange",
                            type: "submit",
                            form: "storageSettingsForm",
                            onClick: ($event) => handleStorageSettingsSubmit(close)
                          }, null, 8, ["onClick"])
                        ]),
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$v), {
                            variant: "soft",
                            icon: "tabler:device-floppy"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 保存设置 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UFormField, {
                        name: "storageConfigId",
                        label: "存储方案",
                        required: "",
                        ui: {
                          container: "w-full sm:max-w-sm *:w-full"
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(storageSettingsState).storageConfigId,
                            "onUpdate:modelValue": ($event) => unref(storageSettingsState).storageConfigId = $event,
                            icon: PROVIDER_ICON[unref(availableStorage)?.find(
                              (item) => item.id === unref(storageSettingsState).storageConfigId
                            )?.provider || "local"] || "tabler:database",
                            items: unref(availableStorage)?.map((item) => ({
                              icon: PROVIDER_ICON[item.provider] || "tabler:database",
                              label: item.name,
                              value: item.id
                            })),
                            "label-key": "label",
                            "value-key": "value",
                            placeholder: "选择存储方案"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "items"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, {
                  variant: "outline",
                  ui: {
                    body: "p-0 sm:p-0"
                  }
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "w-full flex items-center justify-between" }, [
                      createVNode("span", null, "存储方案管理"),
                      createVNode("div", null, [
                        createVNode(_component_USlideover, {
                          title: "创建存储方案",
                          ui: { footer: "justify-end" }
                        }, {
                          body: withCtx(({ close }) => [
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode(_component_UFormField, {
                                label: "存储类型",
                                class: "w-full",
                                required: "",
                                ui: {
                                  container: "sm:max-w-full"
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_USelectMenu, {
                                    modelValue: unref(storageConfigState).provider,
                                    "onUpdate:modelValue": [
                                      ($event) => unref(storageConfigState).provider = $event,
                                      (val) => {
                                        unref(storageConfigState).provider = val;
                                        unref(storageConfigState).config = getStorageConfigDefaults(val);
                                      }
                                    ],
                                    icon: PROVIDER_ICON[unref(storageConfigState).provider] || "tabler:database",
                                    items: providerOptions,
                                    "label-key": "label",
                                    "value-key": "value",
                                    placeholder: "选择存储类型"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UFormField, {
                                label: "存储名称",
                                required: "",
                                ui: {
                                  container: "sm:max-w-full"
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UInput, {
                                    modelValue: unref(storageConfigState).name,
                                    "onUpdate:modelValue": ($event) => unref(storageConfigState).name = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_USeparator),
                              createVNode(_component_AutoForm, {
                                id: "createStorageForm",
                                schema: unref(currentStorageSchema),
                                state: unref(storageConfigState).config,
                                "fields-config": unref(storageFieldsConfig),
                                onSubmit: ($event) => onStorageConfigSubmit($event, close)
                              }, null, 8, ["schema", "state", "fields-config", "onSubmit"])
                            ])
                          ]),
                          footer: withCtx(({ close }) => [
                            createVNode(unref(_sfc_main$v), {
                              label: "取消",
                              color: "neutral",
                              variant: "outline",
                              onClick: close
                            }, null, 8, ["onClick"]),
                            createVNode(unref(_sfc_main$v), {
                              label: "创建存储",
                              variant: "soft",
                              icon: "tabler:check",
                              type: "submit",
                              form: "createStorageForm"
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$v), {
                              size: "sm",
                              variant: "soft",
                              icon: "tabler:plus"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 添加存储 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode(_component_UTable, {
                        columns: availableStorageColumns,
                        data: unref(availableStorage)
                      }, null, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/storage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=storage-YMWkNchD.mjs.map
