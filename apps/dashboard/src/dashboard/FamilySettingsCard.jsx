import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import Card from './Card.jsx';
import Toggle from './Toggle.jsx';

/**
 * The family itself: its name, the people in it, the star chart.
 *
 * The web half of `FamilyDetailScreen`'s family card. It sits under the Family
 * list rather than in Settings, because that list is the family — a parent who
 * wants to rename it or add a child is already looking at it. Settings keeps
 * what is about the ACCOUNT: the plan, the parents, notifications, support.
 *
 * Its kids tab and devices tab are the list above; its parents tab is
 * `ParentsCard`, which this surface already had.
 *
 * **Owner-only on all three writes**, matching the phone: renaming the family,
 * adding a child and the star-chart switch are the owner's. `controlsApi`
 * refuses again on each, because this render can be stale by the time a
 * co-parent clicks.
 */
export default function FamilySettingsCard({
  family,
  children,
  leaderboardEnabled,
  actions,
  run,
  busy,
  canWrite,
  live,
  appT,
}) {
  const { t } = useT();
  const isOwner = Boolean(actions?.isOwner);
  const readOnly = live && !canWrite;

  const [nameDraft, setNameDraft] = useState(family.name ?? '');
  const [newChild, setNewChild] = useState('');

  // The other parent renames it too, and the meta read re-delivers.
  useEffect(() => {
    setNameDraft(family.name ?? '');
  }, [family.name]);

  return (
    <>
      <Card
        title={appT('settings.renameFamilyTitle')}
        subtitle={isOwner ? appT('settings.renameFamilySubtitle') : undefined}
      >
        {isOwner ? (
          <div className="device-admin-row">
            <input
              className="reward-input"
              aria-label={appT('settings.renameFamilyTitle')}
              placeholder={appT('settings.renameFamilyPlaceholder')}
              value={nameDraft}
              disabled={readOnly || busy}
              onChange={event => setNameDraft(event.target.value)}
            />
            <button
              className="btn btn-sm"
              disabled={
                readOnly ||
                busy ||
                nameDraft.trim().length === 0 ||
                nameDraft.trim() === family.name
              }
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() =>
                run('family-rename', () => actions.setFamilyName(nameDraft.trim()))
              }
            >
              {appT('settings.renameFamilyAction')}
            </button>
          </div>
        ) : (
          /* A joined co-parent reads the name and cannot change it — the
             phone shows the same row without the control rather than a
             disabled field, which would read as "not yet" instead of "not
             yours". */
          <p className="hint">{family.name}</p>
        )}
      </Card>

      <Card title={appT('leaderboard.childrenTitle')}>
        {/* No roster here: the Family list above IS the roster, and a second,
            shorter copy of it is two places a parent opens a child from that
            disagree about what a row shows. This card is only the thing the
            list cannot do — add one. That is bookkeeping, a row to assign
            devices to, and is separate from PAIRING a device, which stays on
            the phone. */}
        {isOwner && (
          <div className="child-assign">
            <label className="sheet-label" htmlFor="new-child">
              {appT('leaderboard.addChild')}
            </label>
            <div className="device-admin-row">
              <input
                id="new-child"
                className="reward-input"
                placeholder={appT('leaderboard.childNameLabel')}
                value={newChild}
                disabled={readOnly || busy}
                onChange={event => setNewChild(event.target.value)}
              />
              <button
                className="btn btn-sm"
                disabled={readOnly || busy || newChild.trim().length === 0}
                title={readOnly ? t('dash.unlockToChange') : undefined}
                onClick={async () => {
                  const ok = await run('child-create', () =>
                    /*
                     * The colour is chosen here rather than asked for: the
                     * phone's picker is a sheet this surface has no equivalent
                     * of, and cycling by roster length gives a new child a
                     * colour none of their siblings has until the accents run
                     * out. Changing it is the phone's, for now.
                     */
                    actions.createChild(newChild.trim(), children.length),
                  );
                  if (ok) setNewChild('');
                }}
              >
                {t('dash.save')}
              </button>
            </div>
          </div>
        )}
      </Card>

      {/* The star chart, owner only. Off is what a family that never asked
          for it sees; this switch is the only place the answer is recorded. */}
      {isOwner && (
        <Card
          title={appT('leaderboard.settingsTitle')}
          subtitle={appT('leaderboard.settingsBody')}
        >
          <div className="row-between">
            <span>{appT('leaderboard.resetsNote')}</span>
            <Toggle
              on={leaderboardEnabled}
              label={appT('leaderboard.settingsTitle')}
              disabled={readOnly || busy}
              onChange={next =>
                run('leaderboard-toggle', () => actions.setLeaderboardEnabled(next))
              }
            />
          </div>
        </Card>
      )}
    </>
  );
}
