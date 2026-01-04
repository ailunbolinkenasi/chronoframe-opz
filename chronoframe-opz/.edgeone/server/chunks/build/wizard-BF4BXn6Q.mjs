import { defineStore } from 'pinia';
import { aJ as useLocalStorage } from './server.mjs';
import { ref } from 'vue';

const useWizardStore = defineStore("wizard", () => {
  const admin = ref(useLocalStorage("wizard-admin", {}));
  const site = ref(useLocalStorage("wizard-site", {}));
  const storage = ref(useLocalStorage("wizard-storage", {}));
  const map = ref(useLocalStorage("wizard-map", {}));
  const updateAdmin = (data) => {
    admin.value = { ...admin.value, ...data };
  };
  const updateSite = (data) => {
    site.value = { ...site.value, ...data };
  };
  const updateStorage = (data) => {
    storage.value = { ...storage.value, ...data };
  };
  const updateMap = (data) => {
    map.value = { ...map.value, ...data };
  };
  const clear = () => {
    admin.value = {};
    site.value = {};
    storage.value = {};
    map.value = {};
  };
  return {
    admin,
    site,
    storage,
    map,
    updateAdmin,
    updateSite,
    updateStorage,
    updateMap,
    clear
  };
});

export { useWizardStore as u };
//# sourceMappingURL=wizard-BF4BXn6Q.mjs.map
