import { computed, ref, readonly } from "vue";
import { x as usePhotos } from "../server.mjs";
const globalSortState = ref({
  currentSort: "dateTaken-desc",
  // 默认按拍摄时间倒序
  availableSorts: [
    {
      key: "dateTaken-desc",
      labelI18n: "ui.action.sort.options.dateTakenDesc",
      icon: "tabler:sort-descending",
      value: (photo) => photo.dateTaken ? new Date(photo.dateTaken).getTime() : 0,
      order: "desc"
    },
    {
      key: "dateTaken-asc",
      labelI18n: "ui.action.sort.options.dateTakenAsc",
      icon: "tabler:sort-ascending",
      value: (photo) => photo.dateTaken ? new Date(photo.dateTaken).getTime() : 0,
      order: "asc"
    },
    {
      key: "fileSize-asc",
      labelI18n: "ui.action.sort.options.fileSizeAsc",
      icon: "tabler:sort-ascending-small-big",
      value: (photo) => photo.fileSize || 0,
      order: "asc"
    },
    {
      key: "fileSize-desc",
      labelI18n: "ui.action.sort.options.fileSizeDesc",
      icon: "tabler:sort-descending-small-big",
      value: (photo) => photo.fileSize || 0,
      order: "desc"
    },
    {
      key: "title-asc",
      labelI18n: "ui.action.sort.options.titleAsc",
      icon: "tabler:sort-ascending-letters",
      value: (photo) => (photo.title || photo.id).toLowerCase(),
      order: "asc"
    },
    {
      key: "title-desc",
      labelI18n: "ui.action.sort.options.titleDesc",
      icon: "tabler:sort-descending-letters",
      value: (photo) => (photo.title || photo.id).toLowerCase(),
      order: "desc"
    }
  ]
});
function usePhotoSort() {
  const { photos } = usePhotos();
  const currentSortOption = computed(() => {
    return globalSortState.value.availableSorts.find(
      (sort) => sort.key === globalSortState.value.currentSort
    ) || globalSortState.value.availableSorts[0];
  });
  const sortedPhotos = computed(() => {
    const option = currentSortOption.value;
    if (!option) return photos.value;
    const sorted = [...photos.value].sort((a, b) => {
      const valueA = option.value(a);
      const valueB = option.value(b);
      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return 1;
      if (valueB == null) return -1;
      if (typeof valueA === "number" && typeof valueB === "number") {
        return option.order === "asc" ? valueA - valueB : valueB - valueA;
      }
      if (typeof valueA === "string" && typeof valueB === "string") {
        const comparison2 = valueA.localeCompare(valueB);
        return option.order === "asc" ? comparison2 : -comparison2;
      }
      const strA = String(valueA);
      const strB = String(valueB);
      const comparison = strA.localeCompare(strB);
      return option.order === "asc" ? comparison : -comparison;
    });
    return sorted;
  });
  const setSortOption = (sortKey) => {
    if (globalSortState.value.availableSorts.some((sort) => sort.key === sortKey)) {
      globalSortState.value.currentSort = sortKey;
    }
  };
  const toggleDateSortOrder = () => {
    const current = globalSortState.value.currentSort;
    if (current === "dateTaken-desc") {
      setSortOption("dateTaken-asc");
    } else {
      setSortOption("dateTaken-desc");
    }
  };
  const availableSorts = computed(() => globalSortState.value.availableSorts);
  const currentSortLabel = computed(
    () => currentSortOption.value?.labelI18n || "拍摄时间（新到旧）"
  );
  const currentSortIcon = computed(
    () => currentSortOption.value?.icon || "tabler:sort-descending"
  );
  const isDateSort = computed(() => {
    return globalSortState.value.currentSort.startsWith("dateTaken");
  });
  const isDateSortDesc = computed(() => {
    return globalSortState.value.currentSort === "dateTaken-desc";
  });
  const shufflePhotos = () => {
    globalSortState.value.currentSort = "shuffle";
    const shuffleIndex = globalSortState.value.availableSorts.findIndex(
      (sort) => sort.key === "shuffle"
    );
    if (shuffleIndex === -1) {
      globalSortState.value.availableSorts.push({
        key: "shuffle",
        labelI18n: "ui.action.sort.options.shuffle",
        icon: "tabler:dice-3",
        value: () => Math.random(),
        order: "asc"
      });
    }
  };
  return {
    sortedPhotos,
    currentSortOption: readonly(currentSortOption),
    currentSortLabel,
    currentSortIcon,
    availableSorts,
    isDateSort,
    isDateSortDesc,
    setSortOption,
    toggleDateSortOrder,
    shufflePhotos
  };
}
const globalFilters = ref({
  tags: [],
  cameras: [],
  lenses: [],
  cities: [],
  ratings: 0,
  search: ""
});
function usePhotoFilters() {
  const { photos } = usePhotos();
  const { sortedPhotos } = usePhotoSort();
  const activeFilters = globalFilters;
  const filterStats = computed(() => {
    const stats = {
      tags: /* @__PURE__ */ new Map(),
      cameras: /* @__PURE__ */ new Map(),
      lenses: /* @__PURE__ */ new Map(),
      cities: /* @__PURE__ */ new Map(),
      ratings: /* @__PURE__ */ new Map()
    };
    photos.value.forEach((photo) => {
      if (photo.tags && Array.isArray(photo.tags)) {
        photo.tags.forEach((tag) => {
          stats.tags.set(tag, (stats.tags.get(tag) || 0) + 1);
        });
      }
      if (photo.exif?.Make && photo.exif?.Model) {
        const camera = `${photo.exif.Make} ${photo.exif.Model}`;
        stats.cameras.set(camera, (stats.cameras.get(camera) || 0) + 1);
      }
      if (photo.exif?.LensMake && photo.exif?.LensModel) {
        const lens = `${photo.exif.LensMake} ${photo.exif.LensModel}`;
        stats.lenses.set(lens, (stats.lenses.get(lens) || 0) + 1);
      } else if (photo.exif?.LensModel) {
        const lens = photo.exif.LensModel;
        stats.lenses.set(lens, (stats.lenses.get(lens) || 0) + 1);
      }
      if (photo.city) {
        stats.cities.set(photo.city, (stats.cities.get(photo.city) || 0) + 1);
      }
      if (photo.exif?.Rating && photo.exif.Rating > 0) {
        const rating = photo.exif.Rating;
        stats.ratings.set(rating, (stats.ratings.get(rating) || 0) + 1);
      }
    });
    return stats;
  });
  const availableFilters = computed(() => {
    return {
      tags: Array.from(filterStats.value.tags.entries()).sort((a, b) => b[1] - a[1]).map(([tag, count]) => ({ label: tag, count })),
      cameras: Array.from(filterStats.value.cameras.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([camera, count]) => ({ label: camera, count })),
      lenses: Array.from(filterStats.value.lenses.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([lens, count]) => ({ label: lens, count })),
      cities: Array.from(filterStats.value.cities.entries()).sort((a, b) => b[1] - a[1]).map(([city, count]) => ({ label: city, count })),
      ratings: Array.from(filterStats.value.ratings.entries()).sort((a, b) => b[0] - a[0]).map(([rating, count]) => ({ label: rating, count }))
    };
  });
  const selectedCounts = computed(() => {
    return {
      tags: activeFilters.value.tags.length,
      cameras: activeFilters.value.cameras.length,
      lenses: activeFilters.value.lenses.length,
      cities: activeFilters.value.cities.length,
      ratings: activeFilters.value.ratings > 0 ? 1 : 0,
      search: activeFilters.value.search.length > 0 ? 1 : 0
    };
  });
  const filteredPhotos = computed(() => {
    return sortedPhotos.value.filter((photo) => {
      if (activeFilters.value.search) {
        const searchTerm = activeFilters.value.search.toLowerCase();
        const searchableFields = [
          photo.tags?.join(" ") || "",
          photo.exif?.Make || "",
          photo.exif?.Model || "",
          photo.exif?.LensMake || "",
          photo.exif?.LensModel || "",
          photo.city || "",
          photo.country || "",
          photo.title || "",
          photo.description || "",
          photo.storageKey || "",
          photo.locationName || ""
        ].join(" ").toLowerCase();
        if (!searchableFields.includes(searchTerm)) {
          return false;
        }
      }
      if (activeFilters.value.tags.length > 0) {
        const photoTags = photo.tags || [];
        const hasMatchingTag = activeFilters.value.tags.some(
          (tag) => photoTags.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }
      if (activeFilters.value.cameras.length > 0) {
        const photoCamera = photo.exif?.Make && photo.exif?.Model ? `${photo.exif.Make} ${photo.exif.Model}` : null;
        if (!photoCamera || !activeFilters.value.cameras.includes(photoCamera)) {
          return false;
        }
      }
      if (activeFilters.value.lenses.length > 0) {
        const photoLens = photo.exif?.LensMake && photo.exif?.LensModel ? `${photo.exif.LensMake} ${photo.exif.LensModel}` : photo.exif?.LensModel || null;
        if (!photoLens || !activeFilters.value.lenses.includes(photoLens)) {
          return false;
        }
      }
      if (activeFilters.value.cities.length > 0) {
        if (!photo.city || !activeFilters.value.cities.includes(photo.city)) {
          return false;
        }
      }
      if (activeFilters.value.ratings > 0) {
        const photoRating = photo.exif?.Rating || 0;
        if (photoRating < activeFilters.value.ratings) {
          return false;
        }
      }
      return true;
    });
  });
  const toggleFilter = (type, value) => {
    const filters = activeFilters.value[type];
    const index = filters.indexOf(value);
    if (index === -1) {
      filters.push(value);
    } else {
      filters.splice(index, 1);
    }
  };
  const clearAllFilters = () => {
    activeFilters.value = {
      tags: [],
      cameras: [],
      lenses: [],
      cities: [],
      ratings: 0,
      search: ""
    };
  };
  const clearFilterType = (type) => {
    if (type === "ratings" || type === "search") {
      activeFilters.value[type] = type === "ratings" ? 0 : "";
    } else {
      activeFilters.value[type] = [];
    }
  };
  const isFilterSelected = (type, value) => {
    return activeFilters.value[type].includes(value);
  };
  const hasActiveFilters = computed(() => {
    return activeFilters.value.tags.length > 0 || activeFilters.value.cameras.length > 0 || activeFilters.value.lenses.length > 0 || activeFilters.value.cities.length > 0 || activeFilters.value.ratings > 0 || activeFilters.value.search.length > 0;
  });
  return {
    activeFilters,
    availableFilters,
    selectedCounts,
    filteredPhotos,
    hasActiveFilters,
    toggleFilter,
    clearAllFilters,
    clearFilterType,
    isFilterSelected
  };
}
export {
  usePhotoSort as a,
  usePhotoFilters as u
};
