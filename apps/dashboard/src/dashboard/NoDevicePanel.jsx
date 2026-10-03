import Icon from '@kidgate/web-ui/Icon';
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';
import { downloadPageUrl } from '@kidgate/core/domain/siteLinks';
import { useActivityTranslate } from './activityCopy.js';

/**
 * What a parent reads where a device would be and none is — the Family list,
 * the Devices tab and a child's page, one component so the three cannot drift.
 *
 * The phone's empty Family tab without its button: pairing has never had a web
 * half (`docs/BACKLOG.md`, "The web cannot add a device"), so there is no "Add
 * child device" to offer. What the web can do is say the two steps in the order
 * they happen — the child's device shows a code, the parent's phone scans it —
 * and point at where KidGate is installed from. Until 2026-09-28 each of the
 * three said one sentence and offered nothing to press, and the child page's
 * pointed at a Family tab that cannot pair.
 *
 * Step 1 is the phone's own (`family.step1*`, app pack). Step 2 is a `dash.*`
 * twin, because the phone's says "here" and "this phone"; it ends on Refresh,
 * because nothing streams into this page (`adapters/oneShot.js`) and a device
 * paired a minute ago is not on it until the parent reads again.
 *
 * `title` and `body` are the caller's — each screen keeps the phone's sentence
 * for the same state. The link is a plain text link on purpose: `.btn` is not
 * styled for an anchor, and the answer this panel exists to give is the steps.
 */
export default function NoDevicePanel({ title = null, body = null }) {
  const { t, language } = useT();
  const appT = useActivityTranslate();

  return (
    <div className="empty-panel">
      <span className="empty-panel-icon">
        <Icon name="phone" size={24} />
      </span>
      {title && <strong>{title}</strong>}
      {body && <p className="hint">{body}</p>}
      <ol className="qr-steps">
        <li>
          <b>{appT('family.step1Title')}</b>
          <br />
          {appT('family.step1Description')}
        </li>
        <li>
          <b>{t('dash.pairStep2Title')}</b>
          <br />
          <RichText text={t('dash.noDeviceBody')} />
        </li>
      </ol>
      <a href={downloadPageUrl(language)} target="_blank" rel="noreferrer">
        {t('dash.getKidGate')}
      </a>
    </div>
  );
}
