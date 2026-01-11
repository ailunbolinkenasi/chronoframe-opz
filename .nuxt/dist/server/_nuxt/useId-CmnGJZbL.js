import { al as injectConfigProviderContext } from "../server.mjs";
import * as vue from "vue";
let count = 0;
function useId(deterministicId, prefix = "reka") {
  if (deterministicId) return deterministicId;
  if ("useId" in vue) return `${prefix}-${vue.useId?.()}`;
  const configProviderContext = injectConfigProviderContext({ useId: void 0 });
  if (configProviderContext.useId) return `${prefix}-${configProviderContext.useId()}`;
  return `${prefix}-${++count}`;
}
export {
  useId as u
};
