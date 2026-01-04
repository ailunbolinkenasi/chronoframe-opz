import { an as isNullish$1 } from './server.mjs';
import { az as isEqual } from '../nitro/nitro.mjs';

function isValueEqualOrExist(base, current) {
  if (isNullish$1(base)) return false;
  if (Array.isArray(base)) return base.some((val) => isEqual(val, current));
  else return isEqual(base, current);
}

export { isValueEqualOrExist as i };
//# sourceMappingURL=isValueEqualOrExist-BHcybaY2.mjs.map
