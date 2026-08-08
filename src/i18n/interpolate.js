/**
 * Replaces `{{key}}` placeholders in a translation template. `formatValue`
 * lets the caller localise values (t() passes a locale-aware number
 * formatter); without it, values are stringified as-is.
 *
 * Mirrors the app's `src/i18n/interpolate.ts` so a string can move between the
 * two codebases untouched.
 */
export function interpolate(template, params, formatValue = String) {
  if (!params) return template

  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = params[key]
    if (value === null || value === undefined) return match
    return formatValue(value)
  })
}
