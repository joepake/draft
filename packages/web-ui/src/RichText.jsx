import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the small amount of markup the longer copy needs, from a translation
 * that stays a plain string.
 *
 * Support and onboarding text is full of in-app path names and cross-links.
 * Splitting a sentence into three keys so the middle one can be italic makes
 * it untranslatable — word order moves between languages, and a translator
 * would be handed fragments with no sentence to place them in. So the whole
 * sentence stays one key and carries its own light markup:
 *
 *   `**bold**`            → <strong>
 *   `*emphasis*`          → <em>            (UI paths: *Settings → Security*)
 *   `[label](/route)`     → react-router <Link>
 *   `[label](https://…)`  → plain <a>
 *   `[label](mailto:…)`   → plain <a>
 *
 * Deliberately not Markdown: a full parser would let a mistranslated locale
 * inject arbitrary structure, and these five forms cover every string here.
 *
 * **`resolveHref` is how a path in copy reaches another app.** A locale pack
 * should carry a stable token rather than a hostname — fourteen copies of an
 * origin is fourteen chances to pin production into a staging build — so the
 * caller may map a path to an absolute URL, and anything that comes back not
 * starting with `/` renders as a plain `<a>` rather than a router `<Link>`.
 * `apps/site` uses it for `[…](/dashboard)`, which is a route in no app on this
 * host. Default is identity, so every other call site is unchanged.
 */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

export function RichText({
  text,
  as: Wrapper = Fragment,
  resolveHref = href => href,
  ...rest
}) {
  const nodes = [];
  let last = 0;
  let match;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    const [, linkLabel, rawHref, bold, em] = match;
    const key = `${match.index}`;

    if (linkLabel) {
      const href = resolveHref(rawHref);
      nodes.push(
        href.startsWith('/') ? (
          <Link key={key} to={href}>
            {linkLabel}
          </Link>
        ) : (
          <a key={key} href={href}>
            {linkLabel}
          </a>
        ),
      );
    } else if (bold) {
      nodes.push(<strong key={key}>{bold}</strong>);
    } else {
      nodes.push(<em key={key}>{em}</em>);
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));

  return <Wrapper {...rest}>{nodes}</Wrapper>;
}

export default RichText;
