import { RichText } from './RichText.jsx';
import { useT } from './useT.js';

/**
 * The account-deletion page stays in English on purpose: a translated clause
 * that drifts from the original is worse than one the reader knows is the
 * original. This tells a non-English reader that up front, in their own
 * language, instead of leaving them to wonder whether the page is simply
 * untranslated by mistake.
 *
 * English readers get nothing — the note has nothing to tell them.
 *
 * **It is no longer on the Privacy Policy or the Terms**, and that is not an
 * omission. Those two now render `@kidgate/i18n`'s `legal` namespace, which
 * ships translated in all fourteen languages and is the same text
 * `apps/mobile` and `apps/desktop` link to — a note apologising for English
 * would be untrue on a page that is not in English.
 */
export default function LegalNote() {
  const { t, language } = useT();
  if (language === 'en') return null;

  return <RichText as="p" className="legal-note" text={t('legalNote')} />;
}
