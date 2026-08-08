import { Link } from 'react-router-dom'
import { RichText } from '../i18n/RichText.jsx'
import { useT } from '../i18n/useT.js'

const START_STEPS = [1, 2, 3, 4, 5]
const FAQ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Support() {
  const { t } = useT()

  return (
    <article className="legal">
      <h1>{t('support.title')}</h1>
      <p className="updated">{t('support.updated')}</p>

      <h2>{t('support.contactTitle')}</h2>
      <ul>
        <RichText as="li" text={t('support.contactEmail')} />
        <RichText as="li" text={t('support.contactResponse')} />
      </ul>
      <p>{t('support.contactNote')}</p>

      <h2>{t('support.startTitle')}</h2>
      <ul>
        {START_STEPS.map((n) => (
          <RichText as="li" key={n} text={t(`support.start${n}`)} />
        ))}
      </ul>
      <RichText as="p" text={t('support.startNote')} />

      <h2>{t('support.faqTitle')}</h2>
      {FAQ.map((n) => (
        <div key={n}>
          <p>
            <strong>{t(`support.faq${n}Q`)}</strong>
          </p>
          <RichText as="p" text={t(`support.faq${n}A`)} />
        </div>
      ))}

      <h2>{t('support.legalTitle')}</h2>
      <ul>
        <li>
          <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
        </li>
        <li>
          <Link to="/terms">{t('footer.terms')}</Link>
        </li>
        <li>
          <Link to="/delete-account">{t('support.legalDeletion')}</Link>
        </li>
      </ul>
    </article>
  )
}
