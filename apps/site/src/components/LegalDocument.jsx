import { useEffect, useState } from 'react';
import { loadLegal, peekLegal } from '@kidgate/i18n/legal';
import { useT } from '@kidgate/web-ui/useT';
import { IS_EMBEDDED } from '../lib/embed.js';

/**
 * The Privacy Policy and the Terms of Service, rendered from the locale packs.
 *
 * **This page is the only renderer of either document, on any platform.**
 * `apps/mobile` and `apps/desktop` used to draw the same tree themselves out of
 * `@kidgate/i18n`, while these two routes served a hand-written English text
 * that had drifted from it — different effective dates, different section
 * counts, same product. Both apps now open these URLs with `?hl=<language>`
 * instead, so there is one text, in fourteen languages, in one place.
 *
 * The pack is not the web key space (`@kidgate/i18n/web`) but the app one, and
 * that exception is argued in `@kidgate/i18n`'s `src/legal.ts`: these are not
 * web strings resembling app strings, they are the same document.
 */
export default function LegalDocument({ documentKey }) {
  const { language } = useT();
  const [pack, setPack] = useState(() => peekLegal(language));

  useEffect(() => {
    const cached = peekLegal(language);
    if (cached) {
      setPack(cached);
      return undefined;
    }

    // Cleared rather than left showing the previous language: a legal document
    // that swaps its text a moment after it appears reads as a page unsure
    // which version applies to the reader.
    setPack(undefined);
    let cancelled = false;
    loadLegal(language).then(next => {
      if (!cancelled) setPack(next);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  // English is bundled, so this is a blank frame only while a translated pack
  // is in flight — one chunk, and never on the default language.
  if (!pack) return <article className="legal" aria-busy="true" />;

  const doc = pack[documentKey];

  return (
    <article className="legal">
      <h1>{doc.title}</h1>
      <p className="updated">{doc.effectiveDate}</p>
      <p>{doc.intro}</p>

      {doc.sections.map(section => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
          {section.links?.length ? (
            <ul>
              {section.links.map(link => (
                <li key={link.url}>
                  {/* The typeface's source and licence — the only two links in
                      either document, and both leave this site.

                      Embedded, they are the label and the URL as text. The
                      apps open this page to be *read*: on the phone a tap here
                      hands the reader to Safari mid-document, and in the
                      desktop agent's iframe `frame-src` refuses the host and
                      leaves a blank panel. Printing the URL keeps the
                      attribution the licence requires without offering a way
                      out of the frame. */}
                  {IS_EMBEDDED ? (
                    <span className="legal-link-text">
                      {link.label} — {link.url}
                    </span>
                  ) : (
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
