import { useT } from '@kidgate/web-ui/useT';
import Card from './Card.jsx';
import AttentionList from './AttentionList.jsx';

/**
 * What needs a parent — the family's open items, beside whatever they are
 * reading.
 *
 * The page's whole right half was empty at desk width: the content column is
 * capped at 54rem because a list stops being readable past sixty characters, and
 * the cap left a third of a 1600px browser blank. The notices that were stacked
 * over the list (the parked-device banner) and the items that were only visible
 * one device deep come here.
 *
 * **It carries the answers, not just the rows.** The device Overview's own
 * Attention card was removed on 2026-09-16 once this column reached every
 * screen — it was the only place a time request could be approved, so Allow,
 * Resend, Unlock and the fix steps came with it. The rows are `AttentionList`,
 * shared with the device hero's disclosure; the list itself is
 * `buildFamilyAttention`. Never derive a second one.
 */
export default function AttentionRail({
  items,
  banner,
  appT,
  onOpenDevice,
  onAction,
  busyId = null,
  readOnly = false,
}) {
  const { t } = useT();

  return (
    <aside className="dash-attn" aria-label={t('dash.cardAttention')}>
      {banner}
      <Card
        title={t('dash.cardAttention')}
        subtitle={t('dash.cardAttentionSub', { count: items.length })}
      >
        {items.length === 0 ? (
          <p className="empty">{t('dash.cardAttentionEmpty')}</p>
        ) : (
          <AttentionList
            items={items}
            appT={appT}
            onAction={onAction}
            onOpenDevice={onOpenDevice}
            busyId={busyId}
            readOnly={readOnly}
            className="attn-rail"
          />
        )}
      </Card>
    </aside>
  );
}
