import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'carbon': () => require('@iconify-json/carbon/icons.json'),
  'fluent-emoji-flat': () => require('@iconify-json/fluent-emoji-flat/icons.json'),
  'lucide': () => require('@iconify-json/lucide/icons.json'),
  'material-symbols': () => require('@iconify-json/material-symbols/icons.json'),
  'mdi': () => require('@iconify-json/mdi/icons.json'),
  'simple-icons': () => require('@iconify-json/simple-icons/icons.json'),
  'streamline': () => require('@iconify-json/streamline/icons.json'),
  'svg-spinners': () => require('@iconify-json/svg-spinners/icons.json'),
  'tabler': () => require('@iconify-json/tabler/icons.json'),
}