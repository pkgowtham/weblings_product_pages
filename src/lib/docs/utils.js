/**
 * Strips 32-character Notion hex hash from string
 * e.g. "Organization Tree 3b47b108817580f6a09fc8a6ccdbbc79" -> "Organization Tree"
 */
export function cleanNotionName(name) {
  if (!name) return ''
  return name.replace(/\s+[a-f0-9]{32}$/i, '').trim()
}

/**
 * Converts a string to URL slug
 */
export function slugify(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
