import { computed, toValue } from 'vue';
import { b as unrefElement$1 } from './server.mjs';

function useFormControl(el) {
  return computed(() => toValue(el) ? Boolean(unrefElement$1(el)?.closest("form")) : true);
}

export { useFormControl as u };
//# sourceMappingURL=useFormControl-UP-XrpNq.mjs.map
