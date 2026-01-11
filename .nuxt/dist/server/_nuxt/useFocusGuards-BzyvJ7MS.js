import { watchEffect } from "vue";
function useFocusGuards() {
  watchEffect((cleanupFn) => {
    return;
  });
}
export {
  useFocusGuards as u
};
