import { Link } from 'react-router-dom';
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';
import { resolveDashboardHref } from '../lib/dashboardUrl.js';

const START_STEPS = [1, 2, 3, 4, 5];
const FAQ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * Every `RichText` on this page, with the dashboard path resolved.
 *
 * `support.faq1A` answers "can I manage my family from a computer" with
 * `[web dashboard](/dashboard)`, and `/dashboard` has not been a route here
 * since the dashboard became its own deployment — the link rendered as a
 * router `<Link>` to nothing. It is applied to every string rather than to that
 * one because the next pack to use the token should not have to find this file.
 */
function SupportText(props) {
  return <RichText resolveHref={resolveDashboardHref} {...props} />;
}

export default function Support() {
  const { t } = useT();

  return (
    <article className="legal">
      <h1>{t('support.title')}</h1>
      <p className="updated">{t('support.updated')}</p>

      <h2>{t('support.contactTitle')}</h2>
      <ul>
        <SupportText as="li" text={t('support.contactEmail')} />
        <SupportText as="li" text={t('support.contactResponse')} />
      </ul>
      <p>{t('support.contactNote')}</p>

      <h2>{t('support.startTitle')}</h2>
      <ul>
        {START_STEPS.map(n => (
          <SupportText as="li" key={n} text={t(`support.start${n}`)} />
        ))}
      </ul>
      <SupportText as="p" text={t('support.startNote')} />

      <h2>{t('support.faqTitle')}</h2>
      {FAQ.map(n => (
        <div key={n}>
          <p>
            <strong>{t(`support.faq${n}Q`)}</strong>
          </p>
          <SupportText as="p" text={t(`support.faq${n}A`)} />
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
  );
}
