import { useMemo } from 'react';
import { brandLoaderMarkup } from './brandLoader.js';

/**
 * `brandLoaderMarkup` for React. The markup is built from constants and an
 * escaped label, so `dangerouslySetInnerHTML` carries nothing a user typed.
 */
export default function BrandLoader({ size = 56, label = '', className = '' }) {
  const html = useMemo(() => brandLoaderMarkup({ size, label }), [size, label]);
  return (
    <span
      className={`kg-loader-host ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
