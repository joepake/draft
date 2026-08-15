import type { TranslationParams } from './types';

type ParamValue = NonNullable<TranslationParams[string]>;

/**
 * Replaces `{{key}}` placeholders in a translation template. `formatValue`
 * lets the caller localize values (t() passes a locale-aware number
 * formatter); without it, values are stringified as-is.
 */
export function interpolate(
  template: string,
  params?: TranslationParams,
  formatValue: (value: ParamValue) => string = String,
): string {
  if (!params) {
    return template;
  }

  return template.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
    const value = params[key];
    if (value === null || value === undefined) {
      return match;
    }
    return formatValue(value);
  });
}
