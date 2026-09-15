import { useEffect, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import Card from './Card.jsx';
import ChildInitial from './ChildInitial.jsx';
import Toggle from './Toggle.jsx';

/**
 * The family itself: its name, the people in it, the star chart.
 *
 * The web half of `FamilyDetailScreen`'s family card and kids tab. Its parents
 * tab is `ParentsCard`, which this surface already had, and its devices tab is
 * the Family section's own list — three tabs on a phone are three cards on a
 * page that has the height for them.
 *
 * **Owner-only on all three writes**, matching the phone: renaming the family,
 * adding a child and the star-chart switch are the owner's. `controlsApi`
 * refuses again on each, because this render can be stale by the time a
 * co-parent clicks.
 */
export default function FamilySettingsCard({
  family,
  children,
  devices,
  leaderboardEnabled,
  actions,
  run,
  busy,
  canWrite,
  live,
  appT,
  onOpenChild,
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
        {children.length === 0 ? (
          <>
            <p className="empty">{appT('leaderboard.emptyTitle')}</p>
            <p className="hint">{appT('leaderboard.emptyBody')}</p>
          </>
        ) : (
          <ul className="child-device-list">
            {children.map(child => {
              const count = devices.filter(d => d.childId === child.id).length;
              return (
                <li key={child.id}>
                  <button className="kid" onClick={() => onOpenChild(child.id)}>
                    <ChildInitial name={child.name} colorIndex={child.colorIndex} />
                    <span className="kid-meta">
                      <strong>{child.name}</strong>
                      {/* The web pack's own count sentence, the one the rail
                          footer already prints — this is a number of devices,
                          not a phone-screen label. */}
                      <em>{t('dash.devices', { count })}</em>
                    </span>
                    <Icon name="chevronRight" size={14} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Adding a child is bookkeeping — a row to assign devices to — and
            is separate from pairing one, which stays on the phone. */}
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
              checked={leaderboardEnabled}
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
