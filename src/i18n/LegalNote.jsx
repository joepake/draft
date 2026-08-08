import { RichText } from './RichText.jsx'
import { useT } from './useT.js'

/**
 * The Privacy Policy, Terms and deletion pages stay in English on purpose: a
 * translated clause that drifts from the original is worse than one the reader
 * knows is the original. This tells a non-English reader that up front, in
 * their own language, instead of leaving them to wonder whether the page is
 * simply untranslated by mistake.
 *
 * English readers get nothing — the note has nothing to tell them.
 */
export default function LegalNote() {
  const { t, language } = useT()
  if (language === 'en') return null

  return <RichText as="p" className="legal-note" text={t('legalNote')} />
}
