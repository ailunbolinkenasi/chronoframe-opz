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
  'carbon': () => import('@iconify-json/carbon/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'fluent-emoji-flat': () => import('@iconify-json/fluent-emoji-flat/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'lucide': () => import('@iconify-json/lucide/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'material-symbols': () => import('@iconify-json/material-symbols/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'mdi': () => import('@iconify-json/mdi/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'simple-icons': () => import('@iconify-json/simple-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'streamline': () => import('@iconify-json/streamline/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'svg-spinners': () => import('@iconify-json/svg-spinners/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'tabler': () => import('@iconify-json/tabler/icons.json', { with: { type: 'json' } }).then(m => m.default),
}