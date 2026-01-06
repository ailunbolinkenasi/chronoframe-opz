import { computed, toValue } from "vue";
import { b as unrefElement } from "../server.mjs";
function useFormControl(el) {
  return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}
export {
  useFormControl as u
};
