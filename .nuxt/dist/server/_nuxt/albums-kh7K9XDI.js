import { _ as _sfc_main$1, a as _sfc_main$c } from "./DashboardNavbar-DXyxgaXz.js";
import { q as useI18n, u as useHead, B as _sfc_main$3, n as useDayjs, am as _sfc_main$4, a as __nuxt_component_0, l as __nuxt_component_0$1, j as __nuxt_component_2, D as useToast } from "../server.mjs";
import { _ as _sfc_main$2 } from "./Table-Cek17xfi.js";
import { _ as _sfc_main$5, a as _sfc_main$a } from "./Modal-B7zVIbEG.js";
import { _ as _sfc_main$6, a as _sfc_main$7 } from "./FormField-CKjh6qS6.js";
import { _ as _sfc_main$8 } from "./Input-DTvqSRuX.js";
import { _ as _sfc_main$9 } from "./Textarea-DypkF1uq.js";
import { _ as _sfc_main$b } from "./Checkbox-Dq2sl8WT.js";
import { defineComponent, ref, reactive, computed, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, isRef, createCommentVNode, Fragment, renderList, withDirectives, vShow, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "D:/chronoframe-opz/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "./DashboardSidebarToggle-B_He8lib.js";
import "D:/chronoframe-opz/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/chronoframe-opz/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "D:/chronoframe-opz/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/devalue@5.6.1/node_modules/devalue/index.js";
import "D:/chronoframe-opz/node_modules/.pnpm/@unhead+vue@2.1.1_vue@3.5.26_typescript@5.9.3_/node_modules/@unhead/vue/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/cookie-es@2.0.0/node_modules/cookie-es/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "D:/chronoframe-opz/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/locale/zh-cn.js";
import "dayjs/locale/zh-hk.js";
import "dayjs/locale/en.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "dayjs/plugin/timezone.js";
import "dayjs/plugin/duration.js";
import "dayjs/plugin/localizedFormat.js";
import "dayjs/plugin/isBetween.js";
import "tailwindcss/colors";
import "@yeger/vue-masonry-wall";
import "tailwind-merge";
import "D:/chronoframe-opz/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "thumbhash";
import "D:/chronoframe-opz/shared/utils/u8array.ts";
import "swiper/vue";
import "swiper/modules";
import "file-type";
import "D:/chronoframe-opz/shared/types/map.ts";
import "dayjs/locale/zh-tw.js";
import "D:/chronoframe-opz/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs";
import "./index-Cm3iXkLk.js";
import "./useId-CmnGJZbL.js";
import "./DismissableLayer-8FDXRr8x.js";
import "./utils-Cr016bia.js";
import "./isValueEqualOrExist-87Clxp1I.js";
import "./useFormControl-UP-XrpNq.js";
import "./RovingFocusItem-Bp2YpNRE.js";
import "./utils-Dht0ZB_U.js";
import "./RovingFocusGroup-U7ENIF_g.js";
import "./useDirection-C-Y8mi8I.js";
import "./VisuallyHiddenInput-8qWid5cT.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "albums",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    useHead({
      title: $t("title.albums")
    });
    const albums = ref([]);
    const isLoadingAlbums = ref(false);
    const allPhotos = ref([]);
    ref(false);
    const isAlbumSlideoverOpen = ref(false);
    const isDeleteConfirmOpen = ref(false);
    const isPhotoSelectorOpen = ref(false);
    const currentAlbum = ref(null);
    const formData = reactive({
      title: "",
      description: ""
    });
    const formRef = ref();
    const isSubmittingForm = ref(false);
    const selectedPhotoIds = ref([]);
    const coverPhotoId = ref("");
    const photoSelectorSearchQuery = ref("");
    const validateForm = (state) => {
      const errors = [];
      if (!state.title?.trim()) {
        errors.push({
          name: "title",
          message: $t("dashboard.albums.form.titleRequired")
        });
      }
      return errors;
    };
    const loadAlbums = async () => {
      isLoadingAlbums.value = true;
      try {
        const response = await $fetch("/api/albums");
        albums.value = response.map((album) => ({
          ...album,
          photoCount: album.photoIds?.length || 0
        }));
        for (const album of albums.value) {
          if (album.coverPhotoId && allPhotos.value.length > 0) {
            const coverPhoto = allPhotos.value.find(
              (p) => p.id === album.coverPhotoId
            );
            if (coverPhoto) {
              album.coverPhoto = coverPhoto;
            }
          }
        }
      } catch (error) {
        console.error("Failed to load albums:", error);
        useToast().add({
          title: $t("dashboard.albums.messages.loadError"),
          color: "error"
        });
      } finally {
        isLoadingAlbums.value = false;
      }
    };
    const openCreateSlideover = () => {
      currentAlbum.value = null;
      formData.title = "";
      formData.description = "";
      selectedPhotoIds.value = [];
      coverPhotoId.value = "";
      formRef.value?.clear();
      isAlbumSlideoverOpen.value = true;
    };
    const openEditSlideover = async (album) => {
      currentAlbum.value = album;
      try {
        const albumDetail = await $fetch(`/api/albums/${album.id}`);
        formData.title = album.title;
        formData.description = album.description || "";
        selectedPhotoIds.value = (albumDetail.photos || []).map((p) => p.id);
        coverPhotoId.value = album.coverPhotoId || "";
        formRef.value?.clear();
      } catch (error) {
        console.error("Failed to load album details:", error);
        useToast().add({
          title: $t("dashboard.albums.messages.loadDetailError"),
          color: "error"
        });
      }
      isAlbumSlideoverOpen.value = true;
    };
    const openDeleteConfirm = (album) => {
      currentAlbum.value = album;
      isDeleteConfirmOpen.value = true;
    };
    const onFormSubmit = async (event) => {
      isSubmittingForm.value = true;
      try {
        if (currentAlbum.value) {
          await $fetch(`/api/albums/${currentAlbum.value.id}`, {
            method: "PUT",
            body: {
              title: event.data.title,
              description: event.data.description || void 0,
              coverPhotoId: coverPhotoId.value || void 0,
              photoIds: selectedPhotoIds.value
            }
          });
          useToast().add({
            title: $t("dashboard.albums.messages.updateSuccess"),
            color: "success"
          });
          isAlbumSlideoverOpen.value = false;
        } else {
          await $fetch("/api/albums", {
            method: "POST",
            body: {
              title: event.data.title,
              description: event.data.description || void 0,
              coverPhotoId: coverPhotoId.value || void 0,
              photoIds: selectedPhotoIds.value
            }
          });
          useToast().add({
            title: $t("dashboard.albums.messages.createSuccess"),
            color: "success"
          });
          isAlbumSlideoverOpen.value = false;
        }
        await loadAlbums();
      } catch (error) {
        console.error("Failed to save album:", error);
        useToast().add({
          title: currentAlbum.value ? $t("dashboard.albums.messages.updateError") : $t("dashboard.albums.messages.createError"),
          color: "error"
        });
      } finally {
        isSubmittingForm.value = false;
      }
    };
    const deleteAlbum = async () => {
      if (!currentAlbum.value) return;
      try {
        await $fetch(`/api/albums/${currentAlbum.value.id}`, {
          method: "DELETE"
        });
        useToast().add({
          title: $t("dashboard.albums.messages.deleteSuccess"),
          color: "success"
        });
        isDeleteConfirmOpen.value = false;
        await loadAlbums();
      } catch (error) {
        console.error("Failed to delete album:", error);
        useToast().add({
          title: $t("dashboard.albums.messages.deleteError"),
          color: "error"
        });
      }
    };
    const togglePhotoSelection = (photoId) => {
      const index = selectedPhotoIds.value.indexOf(photoId);
      if (index > -1) {
        selectedPhotoIds.value.splice(index, 1);
        if (coverPhotoId.value === photoId) {
          coverPhotoId.value = "";
        }
      } else {
        selectedPhotoIds.value.push(photoId);
      }
    };
    const setCoverPhoto = (photoId) => {
      if (!selectedPhotoIds.value.includes(photoId)) {
        selectedPhotoIds.value.push(photoId);
      }
      coverPhotoId.value = photoId;
    };
    const areAllPhotosSelected = computed(() => {
      return allPhotos.value.length > 0 && selectedPhotoIds.value.length === allPhotos.value.length;
    });
    const areSomePhotosSelected = computed(() => {
      return selectedPhotoIds.value.length > 0 && selectedPhotoIds.value.length < allPhotos.value.length;
    });
    const toggleAllPhotos = () => {
      if (areAllPhotosSelected.value) {
        selectedPhotoIds.value = [];
      } else {
        selectedPhotoIds.value = allPhotos.value.map((p) => p.id);
      }
    };
    const filteredPhotos = computed(() => {
      const query = photoSelectorSearchQuery.value.toLowerCase();
      if (!query) return allPhotos.value;
      return allPhotos.value.filter(
        (photo) => (photo.title?.toLowerCase() || "").includes(query) || (photo.description?.toLowerCase() || "").includes(query)
      );
    });
    const dayjs = useDayjs();
    const slideoverTitle = computed(() => {
      return currentAlbum.value ? $t("dashboard.albums.slideover.edit.title") : $t("dashboard.albums.slideover.create.title");
    });
    const slideoverDescription = computed(() => {
      return currentAlbum.value ? $t("dashboard.albums.slideover.edit.description") : $t("dashboard.albums.slideover.create.description");
    });
    const submitButtonLabel = computed(() => {
      return currentAlbum.value ? $t("dashboard.albums.slideover.submitEdit") : $t("dashboard.albums.slideover.submitCreate");
    });
    const columns = [
      {
        id: "coverPhoto",
        accessorKey: "coverPhoto",
        header: $t("dashboard.albums.table.columns.cover")
      },
      {
        id: "title",
        accessorKey: "title",
        header: $t("dashboard.albums.table.columns.title")
      },
      {
        id: "description",
        accessorKey: "description",
        header: $t("dashboard.albums.table.columns.description")
      },
      {
        id: "photoCount",
        accessorKey: "photoCount",
        header: $t("dashboard.albums.table.columns.photoCount")
      },
      {
        id: "createdAt",
        accessorKey: "createdAt",
        header: $t("dashboard.albums.table.columns.createdAt")
      },
      {
        id: "actions",
        header: $t("dashboard.albums.table.columns.actions")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDashboardPanel = _sfc_main$1;
      const _component_UDashboardNavbar = _sfc_main$c;
      const _component_UButton = _sfc_main$3;
      const _component_UTable = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UBadge = _sfc_main$4;
      const _component_USlideover = _sfc_main$5;
      const _component_ThumbImage = __nuxt_component_2;
      const _component_UForm = _sfc_main$6;
      const _component_UFormField = _sfc_main$7;
      const _component_UInput = _sfc_main$8;
      const _component_UTextarea = _sfc_main$9;
      const _component_UModal = _sfc_main$a;
      const _component_UCheckbox = _sfc_main$b;
      _push(ssrRenderComponent(_component_UDashboardPanel, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDashboardNavbar, {
              title: unref($t)("title.albums")
            }, {
              right: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "tabler:plus",
                    variant: "soft",
                    onClick: openCreateSlideover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.createButton"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.createButton")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      icon: "tabler:plus",
                      variant: "soft",
                      onClick: openCreateSlideover
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.albums.createButton")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDashboardNavbar, {
                title: unref($t)("title.albums")
              }, {
                right: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: "tabler:plus",
                    variant: "soft",
                    onClick: openCreateSlideover
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("dashboard.albums.createButton")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6"${_scopeId}>`);
            if (unref(albums).length > 0) {
              _push2(`<div class="bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UTable, {
                data: unref(albums),
                columns
              }, {
                "coverPhoto-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 shrink-0"${_scopeId2}>`);
                    if (row.original.coverPhoto) {
                      _push3(`<img${ssrRenderAttr(
                        "src",
                        row.original.coverPhoto?.thumbnailUrl || ""
                      )}${ssrRenderAttr("alt", row.original.title)} class="w-full h-full object-cover"${_scopeId2}>`);
                    } else {
                      _push3(`<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "tabler:image",
                        size: "20"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-16 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 shrink-0" }, [
                        row.original.coverPhoto ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: row.original.coverPhoto?.thumbnailUrl || "",
                          alt: row.original.title,
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600"
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:image",
                            size: "20"
                          })
                        ]))
                      ])
                    ];
                  }
                }),
                "title-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/albums/${row.original.id}`,
                      target: "_blank",
                      class: "font-medium text-primary-600 dark:text-primary-400 hover:underline cursor-pointer inline-flex items-center gap-2"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(row.original.title)} `);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "tabler:external-link",
                            size: "16",
                            class: "shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(toDisplayString(row.original.title) + " ", 1),
                            createVNode(_component_Icon, {
                              name: "tabler:external-link",
                              size: "16",
                              class: "shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: `/albums/${row.original.id}`,
                        target: "_blank",
                        class: "font-medium text-primary-600 dark:text-primary-400 hover:underline cursor-pointer inline-flex items-center gap-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.title) + " ", 1),
                          createVNode(_component_Icon, {
                            name: "tabler:external-link",
                            size: "16",
                            class: "shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                "description-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (row.original.description) {
                      _push3(`<div class="text-sm text-gray-600 dark:text-gray-400 line-clamp-1"${_scopeId2}>${ssrInterpolate(row.original.description)}</div>`);
                    } else {
                      _push3(`<div class="text-sm text-gray-400 dark:text-gray-600"${_scopeId2}> - </div>`);
                    }
                  } else {
                    return [
                      row.original.description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-gray-600 dark:text-gray-400 line-clamp-1"
                      }, toDisplayString(row.original.description), 1)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm text-gray-400 dark:text-gray-600"
                      }, " - "))
                    ];
                  }
                }),
                "photoCount-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      variant: "soft",
                      color: "neutral"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(row.original.photoCount || 0)} 张 `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(row.original.photoCount || 0) + " 张 ", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBadge, {
                        variant: "soft",
                        color: "neutral"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.photoCount || 0) + " 张 ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                "createdAt-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-sm text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(unref(dayjs)(
                      row.original.createdAt
                    ).format("YYYY-MM-DD"))}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(unref(dayjs)(
                        row.original.createdAt
                      ).format("YYYY-MM-DD")), 1)
                    ];
                  }
                }),
                "actions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "ghost",
                      color: "primary",
                      size: "xs",
                      icon: "tabler:edit",
                      onClick: ($event) => openEditSlideover(row.original)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "ghost",
                      color: "error",
                      size: "xs",
                      icon: "tabler:trash",
                      onClick: ($event) => openDeleteConfirm(row.original)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-1" }, [
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "primary",
                          size: "xs",
                          icon: "tabler:edit",
                          onClick: ($event) => openEditSlideover(row.original)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "error",
                          size: "xs",
                          icon: "tabler:trash",
                          onClick: ($event) => openDeleteConfirm(row.original)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!unref(isLoadingAlbums)) {
              _push2(`<div class="flex flex-col items-center justify-center py-12 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:album",
                size: "48",
                class: "text-gray-400 dark:text-gray-600 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(unref($t)("dashboard.albums.noAlbums"))}</h3><p class="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4"${_scopeId}>${ssrInterpolate(unref($t)("dashboard.albums.noAlbumsTip"))}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "tabler:plus",
                onClick: openCreateSlideover
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref($t)("dashboard.albums.createButton"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref($t)("dashboard.albums.createButton")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex items-center justify-center py-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "tabler:loader",
                size: "32",
                class: "animate-spin text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(ssrRenderComponent(_component_USlideover, {
              open: unref(isAlbumSlideoverOpen),
              "onUpdate:open": ($event) => isRef(isAlbumSlideoverOpen) ? isAlbumSlideoverOpen.value = $event : null,
              title: unref(slideoverTitle),
              description: unref(slideoverDescription),
              ui: { footer: "justify-end", body: "p-0 sm:p-0 space-y-4" }
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(coverPhotoId)) {
                    _push3(`<div class="relative w-full aspect-video bg-gray-100 dark:bg-neutral-800 overflow-hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ThumbImage, {
                      src: unref(allPhotos).find((p) => p.id === unref(coverPhotoId))?.thumbnailUrl || "",
                      alt: unref(coverPhotoId),
                      class: "absolute inset-0 w-full h-full object-cover"
                    }, null, _parent3, _scopeId2));
                    _push3(`<button class="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:x",
                      class: "text-white"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button></div>`);
                  } else {
                    _push3(`<button class="w-full h-48 bg-gray-100 dark:bg-neutral-800 flex flex-col items-center justify-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:photo",
                      size: "40",
                      class: "mb-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.form.addCoverPhoto"))}</p></button>`);
                  }
                  _push3(`<div class="space-y-4 px-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UForm, {
                    ref_key: "formRef",
                    ref: formRef,
                    state: unref(formData),
                    validate: validateForm,
                    class: "space-y-4",
                    onSubmit: onFormSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: unref($t)("dashboard.albums.form.title"),
                          name: "title",
                          required: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(formData).title,
                                "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.titlePlaceholder")
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(formData).title,
                                  "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                                  class: "w-full",
                                  placeholder: unref($t)("dashboard.albums.form.titlePlaceholder")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormField, {
                          label: unref($t)("dashboard.albums.form.description"),
                          name: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                modelValue: unref(formData).description,
                                "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.descriptionPlaceholder"),
                                rows: 3
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  modelValue: unref(formData).description,
                                  "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                                  class: "w-full",
                                  placeholder: unref($t)("dashboard.albums.form.descriptionPlaceholder"),
                                  rows: 3
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.title"),
                            name: "title",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(formData).title,
                                "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.titlePlaceholder")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.description"),
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(formData).description,
                                "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.descriptionPlaceholder"),
                                rows: 3
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "outline",
                    color: "primary",
                    icon: "tabler:photo-plus",
                    size: "lg",
                    class: "w-full",
                    onClick: ($event) => isPhotoSelectorOpen.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(selectedPhotoIds).length > 0 ? unref($t)("dashboard.albums.form.editPhotos") : unref($t)("dashboard.albums.form.selectPhotos"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(selectedPhotoIds).length > 0 ? unref($t)("dashboard.albums.form.editPhotos") : unref($t)("dashboard.albums.form.selectPhotos")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(selectedPhotoIds).length > 0) {
                    _push3(`<div class="space-y-2"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><label class="text-sm font-medium text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.form.selectedCount", {
                      count: unref(selectedPhotoIds).length
                    }))}</label>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "ghost",
                      color: "neutral",
                      size: "xs",
                      icon: "tabler:trash",
                      onClick: ($event) => selectedPhotoIds.value = []
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref($t)("dashboard.albums.form.clearAll"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref($t)("dashboard.albums.form.clearAll")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="grid grid-cols-4 gap-2 p-3 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-200 dark:border-neutral-700"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(selectedPhotoIds), (photoId) => {
                      _push3(`<div class="relative group aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700"${_scopeId2}><img${ssrRenderAttr(
                        "src",
                        unref(allPhotos).find((p) => p.id === photoId)?.thumbnailUrl || ""
                      )}${ssrRenderAttr("alt", photoId)} class="w-full h-full object-cover"${_scopeId2}>`);
                      if (unref(coverPhotoId) === photoId) {
                        _push3(`<div class="absolute top-1 left-1 bg-primary-500 text-white px-1.5 py-0.5 rounded text-xs font-medium"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.setCover"))}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<button class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "tabler:x",
                        class: "text-white"
                      }, null, _parent3, _scopeId2));
                      _push3(`</button></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    unref(coverPhotoId) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative w-full aspect-video bg-gray-100 dark:bg-neutral-800 overflow-hidden"
                    }, [
                      createVNode(_component_ThumbImage, {
                        src: unref(allPhotos).find((p) => p.id === unref(coverPhotoId))?.thumbnailUrl || "",
                        alt: unref(coverPhotoId),
                        class: "absolute inset-0 w-full h-full object-cover"
                      }, null, 8, ["src", "alt"]),
                      createVNode("button", {
                        class: "absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center",
                        onClick: ($event) => coverPhotoId.value = ""
                      }, [
                        createVNode(_component_Icon, {
                          name: "tabler:x",
                          class: "text-white"
                        })
                      ], 8, ["onClick"])
                    ])) : (openBlock(), createBlock("button", {
                      key: 1,
                      class: "w-full h-48 bg-gray-100 dark:bg-neutral-800 flex flex-col items-center justify-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer",
                      onClick: ($event) => isPhotoSelectorOpen.value = true
                    }, [
                      createVNode(_component_Icon, {
                        name: "tabler:photo",
                        size: "40",
                        class: "mb-2"
                      }),
                      createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref($t)("dashboard.albums.form.addCoverPhoto")), 1)
                    ], 8, ["onClick"])),
                    createVNode("div", { class: "space-y-4 px-4" }, [
                      createVNode(_component_UForm, {
                        ref_key: "formRef",
                        ref: formRef,
                        state: unref(formData),
                        validate: validateForm,
                        class: "space-y-4",
                        onSubmit: onFormSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.title"),
                            name: "title",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(formData).title,
                                "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.titlePlaceholder")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.description"),
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(formData).description,
                                "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.descriptionPlaceholder"),
                                rows: 3
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["state"]),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode(_component_UButton, {
                          variant: "outline",
                          color: "primary",
                          icon: "tabler:photo-plus",
                          size: "lg",
                          class: "w-full",
                          onClick: ($event) => isPhotoSelectorOpen.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(selectedPhotoIds).length > 0 ? unref($t)("dashboard.albums.form.editPhotos") : unref($t)("dashboard.albums.form.selectPhotos")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        unref(selectedPhotoIds).length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-2"
                        }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(unref($t)("dashboard.albums.form.selectedCount", {
                              count: unref(selectedPhotoIds).length
                            })), 1),
                            createVNode(_component_UButton, {
                              variant: "ghost",
                              color: "neutral",
                              size: "xs",
                              icon: "tabler:trash",
                              onClick: ($event) => selectedPhotoIds.value = []
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.form.clearAll")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "grid grid-cols-4 gap-2 p-3 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-200 dark:border-neutral-700" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPhotoIds), (photoId) => {
                              return openBlock(), createBlock("div", {
                                key: photoId,
                                class: "relative group aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700"
                              }, [
                                createVNode("img", {
                                  src: unref(allPhotos).find((p) => p.id === photoId)?.thumbnailUrl || "",
                                  alt: photoId,
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"]),
                                unref(coverPhotoId) === photoId ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "absolute top-1 left-1 bg-primary-500 text-white px-1.5 py-0.5 rounded text-xs font-medium"
                                }, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)) : createCommentVNode("", true),
                                createVNode("button", {
                                  class: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                  onClick: ($event) => togglePhotoSelection(photoId)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:x",
                                    class: "text-white"
                                  })
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx(({ close }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "ghost",
                    color: "neutral",
                    onClick: close
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.slideover.cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "tabler:check",
                    loading: unref(isSubmittingForm),
                    onClick: ($event) => unref(formRef)?.submit()
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(submitButtonLabel))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(submitButtonLabel)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "neutral",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      icon: "tabler:check",
                      loading: unref(isSubmittingForm),
                      onClick: ($event) => unref(formRef)?.submit()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(submitButtonLabel)), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              open: unref(isPhotoSelectorOpen),
              "onUpdate:open": ($event) => isRef(isPhotoSelectorOpen) ? isPhotoSelectorOpen.value = $event : null,
              ui: { content: "w-full max-w-6xl overflow-hidden" }
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col h-[85vh] max-h-[85vh]"${_scopeId2}><div class="shrink-0 border-b border-gray-200 dark:border-neutral-700 p-3 sm:p-4 md:p-6"${_scopeId2}><div class="flex items-center justify-between mb-3 sm:mb-4"${_scopeId2}><div${_scopeId2}><h2 class="text-lg sm:text-xl font-bold"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.selectPhotos"))}</h2><p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.totalPhotos", {
                    count: unref(allPhotos).length
                  }))} · ${ssrInterpolate(unref($t)("dashboard.albums.modal.selectedPhotos", {
                    count: unref(selectedPhotoIds).length
                  }))}</p></div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "ghost",
                    color: "neutral",
                    size: "md",
                    icon: "tabler:x",
                    onClick: ($event) => isPhotoSelectorOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(photoSelectorSearchQuery),
                    "onUpdate:modelValue": ($event) => isRef(photoSelectorSearchQuery) ? photoSelectorSearchQuery.value = $event : null,
                    icon: "tabler:search",
                    placeholder: unref($t)("dashboard.albums.modal.searchPlaceholder"),
                    class: "flex-1 text-sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-neutral-800 rounded-lg whitespace-nowrap"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    "model-value": unref(areAllPhotosSelected),
                    indeterminate: unref(areSomePhotosSelected),
                    "onUpdate:modelValue": toggleAllPhotos
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.selectAll"))}</span></div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    style: !unref(areAllPhotosSelected) && unref(allPhotos).length > 0 ? null : { display: "none" },
                    class: "sm:hidden",
                    size: "sm",
                    color: "neutral",
                    variant: "soft",
                    onClick: toggleAllPhotos
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.modal.selectAll"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.selectAll")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(photoSelectorSearchQuery)) {
                    _push3(`<div class="text-xs text-gray-500 dark:text-gray-400 mt-2"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.searchResults", {
                      current: unref(filteredPhotos).length,
                      total: unref(allPhotos).length
                    }))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex-1 overflow-y-auto p-2 sm:p-3 md:p-6"${_scopeId2}>`);
                  if (unref(filteredPhotos).length > 0) {
                    _push3(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(filteredPhotos), (photo) => {
                      _push3(`<div class="relative group cursor-pointer"${_scopeId2}><div class="${ssrRenderClass([{
                        "border-primary-500 shadow-lg ring-2 ring-primary-300 dark:ring-primary-700": unref(selectedPhotoIds).includes(photo.id),
                        "border-gray-300 dark:border-neutral-600 hover:border-gray-400 dark:hover:border-neutral-500": !unref(selectedPhotoIds).includes(photo.id)
                      }, "relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 border-2 sm:border-3 transition-all"])}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_ThumbImage, {
                        src: photo.thumbnailUrl || "",
                        alt: photo.title || "Photo",
                        class: "w-full h-full object-cover"
                      }, null, _parent3, _scopeId2));
                      if (unref(selectedPhotoIds).includes(photo.id)) {
                        _push3(`<div class="absolute top-1 left-1 sm:top-2 sm:left-2 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500 border-2 border-white shadow-md"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "tabler:check",
                          size: "12",
                          class: "text-white sm:hidden"
                        }, null, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "tabler:check",
                          size: "14",
                          class: "text-white hidden sm:block"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(coverPhotoId) === photo.id) {
                        _push3(ssrRenderComponent(_component_UBadge, {
                          class: "absolute top-1 right-1 sm:top-2 sm:right-2",
                          variant: "solid",
                          color: "warning",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: "tabler:star-filled",
                                class: "inline mr-0.5",
                                size: "14"
                              }, null, _parent4, _scopeId3));
                              _push4(` ${ssrInterpolate(unref($t)("dashboard.albums.modal.setCover"))}`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "tabler:star-filled",
                                  class: "inline mr-0.5",
                                  size: "14"
                                }),
                                createTextVNode(" " + toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(coverPhotoId) !== photo.id) {
                        _push3(ssrRenderComponent(_component_UButton, {
                          class: "absolute bottom-1 right-1 sm:bottom-2 sm:right-2 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                          variant: "solid",
                          color: "warning",
                          size: "xs",
                          onClick: ($event) => setCoverPhoto(photo.id)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: "tabler:star",
                                class: "inline",
                                size: "12"
                              }, null, _parent4, _scopeId3));
                              _push4(`<span class="hidden sm:inline ml-1"${_scopeId3}>${ssrInterpolate(unref($t)("dashboard.albums.modal.setCover"))}</span>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "tabler:star",
                                  class: "inline",
                                  size: "12"
                                }),
                                createVNode("span", { class: "hidden sm:inline ml-1" }, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(coverPhotoId) !== photo.id) {
                        _push3(`<button class="sm:hidden absolute bottom-0 right-0 left-0 bg-linear-to-t from-black/80 to-transparent p-1 text-white flex items-center justify-center text-xs gap-1 rounded-b-lg"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "tabler:star",
                          size: "14"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.setCover"))}</span></button>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="flex flex-col items-center justify-center h-64 text-gray-500"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:image-off",
                      size: "48",
                      class: "mb-3 opacity-50"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="font-medium"${_scopeId2}>${ssrInterpolate(unref(photoSelectorSearchQuery) ? unref($t)("dashboard.albums.modal.noResults") : unref($t)("dashboard.albums.modal.noPhotos"))}</p>`);
                    if (unref(photoSelectorSearchQuery)) {
                      _push3(`<p class="text-sm mt-1"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.tryOtherKeywords"))}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  }
                  _push3(`</div><div class="shrink-0 border-t border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 p-3 sm:p-4 md:p-6"${_scopeId2}><div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between"${_scopeId2}><div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm w-full sm:w-auto"${_scopeId2}><div${_scopeId2}><span class="font-medium"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.modal.selectedInfo"))}</span><span class="text-primary-600 dark:text-primary-400 font-bold"${_scopeId2}>${ssrInterpolate(unref(selectedPhotoIds).length)}</span><span class="text-gray-600 dark:text-gray-400"${_scopeId2}>/ ${ssrInterpolate(unref(allPhotos).length)}</span></div>`);
                  if (unref(coverPhotoId)) {
                    _push3(`<div class="text-amber-600 dark:text-amber-400 flex items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "tabler:star-filled",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(unref($t)("dashboard.albums.modal.coverSetInfo"))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex gap-2 w-full sm:w-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    class: "flex-1 sm:flex-none",
                    size: "sm",
                    onClick: ($event) => isPhotoSelectorOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.slideover.cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "tabler:check",
                    color: "primary",
                    class: "flex-1 sm:flex-none",
                    size: "sm",
                    disabled: unref(selectedPhotoIds).length === 0,
                    onClick: ($event) => isPhotoSelectorOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.modal.confirm", {
                          count: unref(selectedPhotoIds).length
                        }))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.confirm", {
                            count: unref(selectedPhotoIds).length
                          })), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col h-[85vh] max-h-[85vh]" }, [
                      createVNode("div", { class: "shrink-0 border-b border-gray-200 dark:border-neutral-700 p-3 sm:p-4 md:p-6" }, [
                        createVNode("div", { class: "flex items-center justify-between mb-3 sm:mb-4" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-lg sm:text-xl font-bold" }, toDisplayString(unref($t)("dashboard.albums.modal.selectPhotos")), 1),
                            createVNode("p", { class: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(unref($t)("dashboard.albums.modal.totalPhotos", {
                              count: unref(allPhotos).length
                            })) + " · " + toDisplayString(unref($t)("dashboard.albums.modal.selectedPhotos", {
                              count: unref(selectedPhotoIds).length
                            })), 1)
                          ]),
                          createVNode(_component_UButton, {
                            variant: "ghost",
                            color: "neutral",
                            size: "md",
                            icon: "tabler:x",
                            onClick: ($event) => isPhotoSelectorOpen.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-2 items-stretch sm:items-center" }, [
                          createVNode(_component_UInput, {
                            modelValue: unref(photoSelectorSearchQuery),
                            "onUpdate:modelValue": ($event) => isRef(photoSelectorSearchQuery) ? photoSelectorSearchQuery.value = $event : null,
                            icon: "tabler:search",
                            placeholder: unref($t)("dashboard.albums.modal.searchPlaceholder"),
                            class: "flex-1 text-sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          createVNode("div", { class: "hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-neutral-800 rounded-lg whitespace-nowrap" }, [
                            createVNode(_component_UCheckbox, {
                              "model-value": unref(areAllPhotosSelected),
                              indeterminate: unref(areSomePhotosSelected),
                              "onUpdate:modelValue": toggleAllPhotos
                            }, null, 8, ["model-value", "indeterminate"]),
                            createVNode("span", { class: "text-sm font-medium" }, toDisplayString(unref($t)("dashboard.albums.modal.selectAll")), 1)
                          ]),
                          withDirectives(createVNode(_component_UButton, {
                            class: "sm:hidden",
                            size: "sm",
                            color: "neutral",
                            variant: "soft",
                            onClick: toggleAllPhotos
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.selectAll")), 1)
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, !unref(areAllPhotosSelected) && unref(allPhotos).length > 0]
                          ])
                        ]),
                        unref(photoSelectorSearchQuery) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 dark:text-gray-400 mt-2"
                        }, toDisplayString(unref($t)("dashboard.albums.modal.searchResults", {
                          current: unref(filteredPhotos).length,
                          total: unref(allPhotos).length
                        })), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex-1 overflow-y-auto p-2 sm:p-3 md:p-6" }, [
                        unref(filteredPhotos).length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPhotos), (photo) => {
                            return openBlock(), createBlock("div", {
                              key: photo.id,
                              class: "relative group cursor-pointer",
                              onClick: ($event) => togglePhotoSelection(photo.id)
                            }, [
                              createVNode("div", {
                                class: ["relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 border-2 sm:border-3 transition-all", {
                                  "border-primary-500 shadow-lg ring-2 ring-primary-300 dark:ring-primary-700": unref(selectedPhotoIds).includes(photo.id),
                                  "border-gray-300 dark:border-neutral-600 hover:border-gray-400 dark:hover:border-neutral-500": !unref(selectedPhotoIds).includes(photo.id)
                                }]
                              }, [
                                createVNode(_component_ThumbImage, {
                                  src: photo.thumbnailUrl || "",
                                  alt: photo.title || "Photo",
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"]),
                                unref(selectedPhotoIds).includes(photo.id) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "absolute top-1 left-1 sm:top-2 sm:left-2 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500 border-2 border-white shadow-md"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:check",
                                    size: "12",
                                    class: "text-white sm:hidden"
                                  }),
                                  createVNode(_component_Icon, {
                                    name: "tabler:check",
                                    size: "14",
                                    class: "text-white hidden sm:block"
                                  })
                                ])) : createCommentVNode("", true),
                                unref(coverPhotoId) === photo.id ? (openBlock(), createBlock(_component_UBadge, {
                                  key: 1,
                                  class: "absolute top-1 right-1 sm:top-2 sm:right-2",
                                  variant: "solid",
                                  color: "warning",
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "tabler:star-filled",
                                      class: "inline mr-0.5",
                                      size: "14"
                                    }),
                                    createTextVNode(" " + toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(coverPhotoId) !== photo.id ? (openBlock(), createBlock(_component_UButton, {
                                  key: 2,
                                  class: "absolute bottom-1 right-1 sm:bottom-2 sm:right-2 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                  variant: "solid",
                                  color: "warning",
                                  size: "xs",
                                  onClick: withModifiers(($event) => setCoverPhoto(photo.id), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "tabler:star",
                                      class: "inline",
                                      size: "12"
                                    }),
                                    createVNode("span", { class: "hidden sm:inline ml-1" }, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                unref(coverPhotoId) !== photo.id ? (openBlock(), createBlock("button", {
                                  key: 3,
                                  class: "sm:hidden absolute bottom-0 right-0 left-0 bg-linear-to-t from-black/80 to-transparent p-1 text-white flex items-center justify-center text-xs gap-1 rounded-b-lg",
                                  onClick: withModifiers(($event) => setCoverPhoto(photo.id), ["stop"])
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:star",
                                    size: "14"
                                  }),
                                  createVNode("span", null, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ], 2)
                            ], 8, ["onClick"]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex flex-col items-center justify-center h-64 text-gray-500"
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:image-off",
                            size: "48",
                            class: "mb-3 opacity-50"
                          }),
                          createVNode("p", { class: "font-medium" }, toDisplayString(unref(photoSelectorSearchQuery) ? unref($t)("dashboard.albums.modal.noResults") : unref($t)("dashboard.albums.modal.noPhotos")), 1),
                          unref(photoSelectorSearchQuery) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm mt-1"
                          }, toDisplayString(unref($t)("dashboard.albums.modal.tryOtherKeywords")), 1)) : createCommentVNode("", true)
                        ]))
                      ]),
                      createVNode("div", { class: "shrink-0 border-t border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 p-3 sm:p-4 md:p-6" }, [
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between" }, [
                          createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm w-full sm:w-auto" }, [
                            createVNode("div", null, [
                              createVNode("span", { class: "font-medium" }, toDisplayString(unref($t)("dashboard.albums.modal.selectedInfo")), 1),
                              createVNode("span", { class: "text-primary-600 dark:text-primary-400 font-bold" }, toDisplayString(unref(selectedPhotoIds).length), 1),
                              createVNode("span", { class: "text-gray-600 dark:text-gray-400" }, "/ " + toDisplayString(unref(allPhotos).length), 1)
                            ]),
                            unref(coverPhotoId) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-amber-600 dark:text-amber-400 flex items-center gap-1"
                            }, [
                              createVNode(_component_Icon, {
                                name: "tabler:star-filled",
                                size: "16"
                              }),
                              createTextVNode(" " + toDisplayString(unref($t)("dashboard.albums.modal.coverSetInfo")), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex gap-2 w-full sm:w-auto" }, [
                            createVNode(_component_UButton, {
                              variant: "outline",
                              color: "neutral",
                              class: "flex-1 sm:flex-none",
                              size: "sm",
                              onClick: ($event) => isPhotoSelectorOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              icon: "tabler:check",
                              color: "primary",
                              class: "flex-1 sm:flex-none",
                              size: "sm",
                              disabled: unref(selectedPhotoIds).length === 0,
                              onClick: ($event) => isPhotoSelectorOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.confirm", {
                                  count: unref(selectedPhotoIds).length
                                })), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              open: unref(isDeleteConfirmOpen),
              "onUpdate:open": ($event) => isRef(isDeleteConfirmOpen) ? isDeleteConfirmOpen.value = $event : null
            }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6 space-y-4"${_scopeId2}><div class="flex items-center gap-3"${_scopeId2}><div class="shrink-0 w-10 h-10 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "tabler:alert-circle",
                    class: "text-error-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><h3 class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.delete.title"))}</h3><p class="text-sm text-gray-600 dark:text-gray-400 mt-1"${_scopeId2}>${ssrInterpolate(unref($t)("dashboard.albums.delete.message", {
                    title: unref(currentAlbum)?.title
                  }))}</p></div></div><div class="flex justify-end gap-2 pt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "ghost",
                    color: "neutral",
                    onClick: ($event) => isDeleteConfirmOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.delete.cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    icon: "tabler:trash",
                    onClick: deleteAlbum
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("dashboard.albums.delete.confirm"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.confirm")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "shrink-0 w-10 h-10 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center" }, [
                          createVNode(_component_Icon, {
                            name: "tabler:alert-circle",
                            class: "text-error-500"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(unref($t)("dashboard.albums.delete.title")), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mt-1" }, toDisplayString(unref($t)("dashboard.albums.delete.message", {
                            title: unref(currentAlbum)?.title
                          })), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2 pt-4" }, [
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "neutral",
                          onClick: ($event) => isDeleteConfirmOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.cancel")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          color: "error",
                          icon: "tabler:trash",
                          onClick: deleteAlbum
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.confirm")), 1)
                          ]),
                          _: 1
                        })
                      ])
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
                unref(albums).length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800"
                }, [
                  createVNode(_component_UTable, {
                    data: unref(albums),
                    columns
                  }, {
                    "coverPhoto-cell": withCtx(({ row }) => [
                      createVNode("div", { class: "w-16 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 shrink-0" }, [
                        row.original.coverPhoto ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: row.original.coverPhoto?.thumbnailUrl || "",
                          alt: row.original.title,
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600"
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:image",
                            size: "20"
                          })
                        ]))
                      ])
                    ]),
                    "title-cell": withCtx(({ row }) => [
                      createVNode(_component_NuxtLink, {
                        to: `/albums/${row.original.id}`,
                        target: "_blank",
                        class: "font-medium text-primary-600 dark:text-primary-400 hover:underline cursor-pointer inline-flex items-center gap-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.title) + " ", 1),
                          createVNode(_component_Icon, {
                            name: "tabler:external-link",
                            size: "16",
                            class: "shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    "description-cell": withCtx(({ row }) => [
                      row.original.description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-gray-600 dark:text-gray-400 line-clamp-1"
                      }, toDisplayString(row.original.description), 1)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm text-gray-400 dark:text-gray-600"
                      }, " - "))
                    ]),
                    "photoCount-cell": withCtx(({ row }) => [
                      createVNode(_component_UBadge, {
                        variant: "soft",
                        color: "neutral"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.photoCount || 0) + " 张 ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    "createdAt-cell": withCtx(({ row }) => [
                      createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(unref(dayjs)(
                        row.original.createdAt
                      ).format("YYYY-MM-DD")), 1)
                    ]),
                    "actions-cell": withCtx(({ row }) => [
                      createVNode("div", { class: "flex gap-1" }, [
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "primary",
                          size: "xs",
                          icon: "tabler:edit",
                          onClick: ($event) => openEditSlideover(row.original)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "error",
                          size: "xs",
                          icon: "tabler:trash",
                          onClick: ($event) => openDeleteConfirm(row.original)
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ])) : !unref(isLoadingAlbums) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex flex-col items-center justify-center py-12 text-center"
                }, [
                  createVNode(_component_Icon, {
                    name: "tabler:album",
                    size: "48",
                    class: "text-gray-400 dark:text-gray-600 mb-4"
                  }),
                  createVNode("h3", { class: "text-lg font-semibold text-gray-700 dark:text-gray-300" }, toDisplayString(unref($t)("dashboard.albums.noAlbums")), 1),
                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4" }, toDisplayString(unref($t)("dashboard.albums.noAlbumsTip")), 1),
                  createVNode(_component_UButton, {
                    icon: "tabler:plus",
                    onClick: openCreateSlideover
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("dashboard.albums.createButton")), 1)
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex items-center justify-center py-12"
                }, [
                  createVNode(_component_Icon, {
                    name: "tabler:loader",
                    size: "32",
                    class: "animate-spin text-primary-500"
                  })
                ])),
                createVNode(_component_USlideover, {
                  open: unref(isAlbumSlideoverOpen),
                  "onUpdate:open": ($event) => isRef(isAlbumSlideoverOpen) ? isAlbumSlideoverOpen.value = $event : null,
                  title: unref(slideoverTitle),
                  description: unref(slideoverDescription),
                  ui: { footer: "justify-end", body: "p-0 sm:p-0 space-y-4" }
                }, {
                  body: withCtx(() => [
                    unref(coverPhotoId) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "relative w-full aspect-video bg-gray-100 dark:bg-neutral-800 overflow-hidden"
                    }, [
                      createVNode(_component_ThumbImage, {
                        src: unref(allPhotos).find((p) => p.id === unref(coverPhotoId))?.thumbnailUrl || "",
                        alt: unref(coverPhotoId),
                        class: "absolute inset-0 w-full h-full object-cover"
                      }, null, 8, ["src", "alt"]),
                      createVNode("button", {
                        class: "absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center",
                        onClick: ($event) => coverPhotoId.value = ""
                      }, [
                        createVNode(_component_Icon, {
                          name: "tabler:x",
                          class: "text-white"
                        })
                      ], 8, ["onClick"])
                    ])) : (openBlock(), createBlock("button", {
                      key: 1,
                      class: "w-full h-48 bg-gray-100 dark:bg-neutral-800 flex flex-col items-center justify-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer",
                      onClick: ($event) => isPhotoSelectorOpen.value = true
                    }, [
                      createVNode(_component_Icon, {
                        name: "tabler:photo",
                        size: "40",
                        class: "mb-2"
                      }),
                      createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref($t)("dashboard.albums.form.addCoverPhoto")), 1)
                    ], 8, ["onClick"])),
                    createVNode("div", { class: "space-y-4 px-4" }, [
                      createVNode(_component_UForm, {
                        ref_key: "formRef",
                        ref: formRef,
                        state: unref(formData),
                        validate: validateForm,
                        class: "space-y-4",
                        onSubmit: onFormSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.title"),
                            name: "title",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(formData).title,
                                "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.titlePlaceholder")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"]),
                          createVNode(_component_UFormField, {
                            label: unref($t)("dashboard.albums.form.description"),
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(formData).description,
                                "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                                class: "w-full",
                                placeholder: unref($t)("dashboard.albums.form.descriptionPlaceholder"),
                                rows: 3
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["state"]),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode(_component_UButton, {
                          variant: "outline",
                          color: "primary",
                          icon: "tabler:photo-plus",
                          size: "lg",
                          class: "w-full",
                          onClick: ($event) => isPhotoSelectorOpen.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(selectedPhotoIds).length > 0 ? unref($t)("dashboard.albums.form.editPhotos") : unref($t)("dashboard.albums.form.selectPhotos")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        unref(selectedPhotoIds).length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-2"
                        }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("label", { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(unref($t)("dashboard.albums.form.selectedCount", {
                              count: unref(selectedPhotoIds).length
                            })), 1),
                            createVNode(_component_UButton, {
                              variant: "ghost",
                              color: "neutral",
                              size: "xs",
                              icon: "tabler:trash",
                              onClick: ($event) => selectedPhotoIds.value = []
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.form.clearAll")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "grid grid-cols-4 gap-2 p-3 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-200 dark:border-neutral-700" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPhotoIds), (photoId) => {
                              return openBlock(), createBlock("div", {
                                key: photoId,
                                class: "relative group aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700"
                              }, [
                                createVNode("img", {
                                  src: unref(allPhotos).find((p) => p.id === photoId)?.thumbnailUrl || "",
                                  alt: photoId,
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"]),
                                unref(coverPhotoId) === photoId ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "absolute top-1 left-1 bg-primary-500 text-white px-1.5 py-0.5 rounded text-xs font-medium"
                                }, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)) : createCommentVNode("", true),
                                createVNode("button", {
                                  class: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                  onClick: ($event) => togglePhotoSelection(photoId)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:x",
                                    class: "text-white"
                                  })
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  footer: withCtx(({ close }) => [
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "neutral",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      icon: "tabler:check",
                      loading: unref(isSubmittingForm),
                      onClick: ($event) => unref(formRef)?.submit()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(submitButtonLabel)), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ]),
                  _: 1
                }, 8, ["open", "onUpdate:open", "title", "description"]),
                createVNode(_component_UModal, {
                  open: unref(isPhotoSelectorOpen),
                  "onUpdate:open": ($event) => isRef(isPhotoSelectorOpen) ? isPhotoSelectorOpen.value = $event : null,
                  ui: { content: "w-full max-w-6xl overflow-hidden" }
                }, {
                  content: withCtx(() => [
                    createVNode("div", { class: "flex flex-col h-[85vh] max-h-[85vh]" }, [
                      createVNode("div", { class: "shrink-0 border-b border-gray-200 dark:border-neutral-700 p-3 sm:p-4 md:p-6" }, [
                        createVNode("div", { class: "flex items-center justify-between mb-3 sm:mb-4" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-lg sm:text-xl font-bold" }, toDisplayString(unref($t)("dashboard.albums.modal.selectPhotos")), 1),
                            createVNode("p", { class: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(unref($t)("dashboard.albums.modal.totalPhotos", {
                              count: unref(allPhotos).length
                            })) + " · " + toDisplayString(unref($t)("dashboard.albums.modal.selectedPhotos", {
                              count: unref(selectedPhotoIds).length
                            })), 1)
                          ]),
                          createVNode(_component_UButton, {
                            variant: "ghost",
                            color: "neutral",
                            size: "md",
                            icon: "tabler:x",
                            onClick: ($event) => isPhotoSelectorOpen.value = false
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-2 items-stretch sm:items-center" }, [
                          createVNode(_component_UInput, {
                            modelValue: unref(photoSelectorSearchQuery),
                            "onUpdate:modelValue": ($event) => isRef(photoSelectorSearchQuery) ? photoSelectorSearchQuery.value = $event : null,
                            icon: "tabler:search",
                            placeholder: unref($t)("dashboard.albums.modal.searchPlaceholder"),
                            class: "flex-1 text-sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                          createVNode("div", { class: "hidden sm:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-neutral-800 rounded-lg whitespace-nowrap" }, [
                            createVNode(_component_UCheckbox, {
                              "model-value": unref(areAllPhotosSelected),
                              indeterminate: unref(areSomePhotosSelected),
                              "onUpdate:modelValue": toggleAllPhotos
                            }, null, 8, ["model-value", "indeterminate"]),
                            createVNode("span", { class: "text-sm font-medium" }, toDisplayString(unref($t)("dashboard.albums.modal.selectAll")), 1)
                          ]),
                          withDirectives(createVNode(_component_UButton, {
                            class: "sm:hidden",
                            size: "sm",
                            color: "neutral",
                            variant: "soft",
                            onClick: toggleAllPhotos
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.selectAll")), 1)
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, !unref(areAllPhotosSelected) && unref(allPhotos).length > 0]
                          ])
                        ]),
                        unref(photoSelectorSearchQuery) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 dark:text-gray-400 mt-2"
                        }, toDisplayString(unref($t)("dashboard.albums.modal.searchResults", {
                          current: unref(filteredPhotos).length,
                          total: unref(allPhotos).length
                        })), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex-1 overflow-y-auto p-2 sm:p-3 md:p-6" }, [
                        unref(filteredPhotos).length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPhotos), (photo) => {
                            return openBlock(), createBlock("div", {
                              key: photo.id,
                              class: "relative group cursor-pointer",
                              onClick: ($event) => togglePhotoSelection(photo.id)
                            }, [
                              createVNode("div", {
                                class: ["relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 border-2 sm:border-3 transition-all", {
                                  "border-primary-500 shadow-lg ring-2 ring-primary-300 dark:ring-primary-700": unref(selectedPhotoIds).includes(photo.id),
                                  "border-gray-300 dark:border-neutral-600 hover:border-gray-400 dark:hover:border-neutral-500": !unref(selectedPhotoIds).includes(photo.id)
                                }]
                              }, [
                                createVNode(_component_ThumbImage, {
                                  src: photo.thumbnailUrl || "",
                                  alt: photo.title || "Photo",
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"]),
                                unref(selectedPhotoIds).includes(photo.id) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "absolute top-1 left-1 sm:top-2 sm:left-2 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500 border-2 border-white shadow-md"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:check",
                                    size: "12",
                                    class: "text-white sm:hidden"
                                  }),
                                  createVNode(_component_Icon, {
                                    name: "tabler:check",
                                    size: "14",
                                    class: "text-white hidden sm:block"
                                  })
                                ])) : createCommentVNode("", true),
                                unref(coverPhotoId) === photo.id ? (openBlock(), createBlock(_component_UBadge, {
                                  key: 1,
                                  class: "absolute top-1 right-1 sm:top-2 sm:right-2",
                                  variant: "solid",
                                  color: "warning",
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "tabler:star-filled",
                                      class: "inline mr-0.5",
                                      size: "14"
                                    }),
                                    createTextVNode(" " + toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(coverPhotoId) !== photo.id ? (openBlock(), createBlock(_component_UButton, {
                                  key: 2,
                                  class: "absolute bottom-1 right-1 sm:bottom-2 sm:right-2 opacity-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                  variant: "solid",
                                  color: "warning",
                                  size: "xs",
                                  onClick: withModifiers(($event) => setCoverPhoto(photo.id), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "tabler:star",
                                      class: "inline",
                                      size: "12"
                                    }),
                                    createVNode("span", { class: "hidden sm:inline ml-1" }, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                unref(coverPhotoId) !== photo.id ? (openBlock(), createBlock("button", {
                                  key: 3,
                                  class: "sm:hidden absolute bottom-0 right-0 left-0 bg-linear-to-t from-black/80 to-transparent p-1 text-white flex items-center justify-center text-xs gap-1 rounded-b-lg",
                                  onClick: withModifiers(($event) => setCoverPhoto(photo.id), ["stop"])
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "tabler:star",
                                    size: "14"
                                  }),
                                  createVNode("span", null, toDisplayString(unref($t)("dashboard.albums.modal.setCover")), 1)
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ], 2)
                            ], 8, ["onClick"]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex flex-col items-center justify-center h-64 text-gray-500"
                        }, [
                          createVNode(_component_Icon, {
                            name: "tabler:image-off",
                            size: "48",
                            class: "mb-3 opacity-50"
                          }),
                          createVNode("p", { class: "font-medium" }, toDisplayString(unref(photoSelectorSearchQuery) ? unref($t)("dashboard.albums.modal.noResults") : unref($t)("dashboard.albums.modal.noPhotos")), 1),
                          unref(photoSelectorSearchQuery) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm mt-1"
                          }, toDisplayString(unref($t)("dashboard.albums.modal.tryOtherKeywords")), 1)) : createCommentVNode("", true)
                        ]))
                      ]),
                      createVNode("div", { class: "shrink-0 border-t border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 p-3 sm:p-4 md:p-6" }, [
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between" }, [
                          createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm w-full sm:w-auto" }, [
                            createVNode("div", null, [
                              createVNode("span", { class: "font-medium" }, toDisplayString(unref($t)("dashboard.albums.modal.selectedInfo")), 1),
                              createVNode("span", { class: "text-primary-600 dark:text-primary-400 font-bold" }, toDisplayString(unref(selectedPhotoIds).length), 1),
                              createVNode("span", { class: "text-gray-600 dark:text-gray-400" }, "/ " + toDisplayString(unref(allPhotos).length), 1)
                            ]),
                            unref(coverPhotoId) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-amber-600 dark:text-amber-400 flex items-center gap-1"
                            }, [
                              createVNode(_component_Icon, {
                                name: "tabler:star-filled",
                                size: "16"
                              }),
                              createTextVNode(" " + toDisplayString(unref($t)("dashboard.albums.modal.coverSetInfo")), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex gap-2 w-full sm:w-auto" }, [
                            createVNode(_component_UButton, {
                              variant: "outline",
                              color: "neutral",
                              class: "flex-1 sm:flex-none",
                              size: "sm",
                              onClick: ($event) => isPhotoSelectorOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.slideover.cancel")), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              icon: "tabler:check",
                              color: "primary",
                              class: "flex-1 sm:flex-none",
                              size: "sm",
                              disabled: unref(selectedPhotoIds).length === 0,
                              onClick: ($event) => isPhotoSelectorOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("dashboard.albums.modal.confirm", {
                                  count: unref(selectedPhotoIds).length
                                })), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["open", "onUpdate:open"]),
                createVNode(_component_UModal, {
                  open: unref(isDeleteConfirmOpen),
                  "onUpdate:open": ($event) => isRef(isDeleteConfirmOpen) ? isDeleteConfirmOpen.value = $event : null
                }, {
                  content: withCtx(() => [
                    createVNode("div", { class: "p-6 space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "shrink-0 w-10 h-10 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center" }, [
                          createVNode(_component_Icon, {
                            name: "tabler:alert-circle",
                            class: "text-error-500"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(unref($t)("dashboard.albums.delete.title")), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mt-1" }, toDisplayString(unref($t)("dashboard.albums.delete.message", {
                            title: unref(currentAlbum)?.title
                          })), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2 pt-4" }, [
                        createVNode(_component_UButton, {
                          variant: "ghost",
                          color: "neutral",
                          onClick: ($event) => isDeleteConfirmOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.cancel")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          color: "error",
                          icon: "tabler:trash",
                          onClick: deleteAlbum
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)("dashboard.albums.delete.confirm")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["open", "onUpdate:open"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/albums.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
