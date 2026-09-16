import { useEffect, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { getEffectiveDeviceStatus } from '@kidgate/core/domain/deviceStatus';
import Card from './Card.jsx';
import ChildInitial from './ChildInitial.jsx';
import ParentsCard from './ParentsCard.jsx';
import Toggle from './Toggle.jsx';
import { deviceIconName } from './deviceIcon.js';
import { timeAgo } from './timeAgo.js';

/**
 * The family screen — the web half of `apps/mobile`'s `FamilyDetailScreen`.
 *
 * **Three tabs with counts, not three stacked cards.** The phone splits this
 * material into Parents / Children / Child devices and the split is the point:
 * each answers a different question, and a parent arriving to invite a
 * co-parent should not scroll past the roster to reach it. Stacked, the three
 * were also the first thing on the Family section, in front of the children a
 * parent actually came for — which is why the list now opens on a row that
 * pushes this instead.
 *
 * Every sentence is the app pack's. The tab labels are the phone's own section
 * titles, so the two consoles name the same three groups identically.
 */

const TABS = [
  { id: 'parents', labelKey: 'settings.sectionFamilyParentsTitle' },
  { id: 'children', labelKey: 'leaderboard.childrenTitle' },
  { id: 'devices', labelKey: 'settings.sectionFamilyChildrenTitle' },
];

export default function FamilySettingsCard({
  family,
  children,
  devices = [],
  leaderboardEnabled,
  actions,
  run,
  busy,
  canWrite,
  live,
  appT,
  onOpenChild,
  onOpenDevice,
}) {
  const { t } = useT();
  const isOwner = Boolean(actions?.isOwner);
  const readOnly = live && !canWrite;

  const [tab, setTab] = useState('parents');
  const [renaming, setRenaming] = useState(false);
  const [nameDraft, setNameDraft] = useState(family.name ?? '');
  const [newChild, setNewChild] = useState('');

  // The other parent renames it too, and the meta read re-delivers.
  useEffect(() => {
    setNameDraft(family.name ?? '');
    setRenaming(false);
  }, [family.name]);

  const counts = {
    parents: family.parents.length,
    children: children.length,
    devices: devices.length,
  };

  return (
    <>
      {/* ---- The family itself ---- */}
      <div className="card family-card">
        <div className="family-card-head">
          <span className="family-row-icon">
            <Icon name="home" size={20} />
          </span>
          <span className="kid-meta">
            <strong>{family.name}</strong>
            <em>
              {isOwner
                ? appT('settings.familyOwnedByYou')
                : appT('family.familyCardJoined')}
            </em>
          </span>
          {/* Renaming is the owner's. A joined co-parent reads the name and
              gets no control at all, rather than a disabled one that reads as
              "not yet" instead of "not yours". */}
          {isOwner && !renaming && (
            <button
              className="btn btn-sm"
              disabled={readOnly}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => setRenaming(true)}
            >
              {appT('settings.renameFamilyAction')}
            </button>
          )}
        </div>

        {renaming && (
          <div className="device-admin-row family-card-rename">
            <input
              className="reward-input"
              aria-label={appT('settings.renameFamilyTitle')}
              placeholder={appT('settings.renameFamilyPlaceholder')}
              value={nameDraft}
              autoFocus
              disabled={busy}
              onChange={event => setNameDraft(event.target.value)}
            />
            <button
              className="btn btn-sm btn-primary"
              disabled={
                busy ||
                nameDraft.trim().length === 0 ||
                nameDraft.trim() === family.name
              }
              onClick={async () => {
                const ok = await run('family-rename', () =>
                  actions.setFamilyName(nameDraft.trim()),
                );
                if (ok) setRenaming(false);
              }}
            >
              {t('dash.save')}
            </button>
            <button
              className="login-link"
              onClick={() => {
                setNameDraft(family.name ?? '');
                setRenaming(false);
              }}
            >
              {t('dash.close')}
            </button>
          </div>
        )}
      </div>

      {/* ---- Which of the three ---- */}
      <nav className="family-tabs" aria-label={appT('settings.sectionFamilyTitle')}>
        {TABS.map(item => (
          <button
            key={item.id}
            className={`chip${tab === item.id ? ' is-active' : ''}`}
            aria-current={tab === item.id ? 'page' : undefined}
            onClick={() => setTab(item.id)}
          >
            {appT(item.labelKey)}
            <span className="family-tab-count">{counts[item.id]}</span>
          </button>
        ))}
      </nav>

      {tab === 'parents' && (
        <Card title={t('dash.parents', { count: family.parents.length })}>
          {/* Inviting, approving and removing are the owner's — the same rule
              the phone's Family screen applies, and `ParentsCard` renders
              nothing at all for a joined co-parent. */}
          {isOwner ? (
            <ParentsCard
              members={family.members ?? []}
              actions={actions}
              run={run}
              busy={
                busy === 'parent-invite' ||
                busy === 'parent-join' ||
                busy === 'parent-remove'
              }
            />
          ) : (
            <p className="hint">{appT('settings.familyOwnerBadge')}</p>
          )}
        </Card>
      )}

      {tab === 'children' && (
        <Card title={appT('leaderboard.childrenTitle')}>
          {children.length === 0 ? (
            <>
              <p className="empty">{appT('leaderboard.emptyTitle')}</p>
              <p className="hint">{appT('leaderboard.emptyBody')}</p>
            </>
          ) : (
            <ul className="child-device-list">
              {children.map(child => (
                <li key={child.id}>
                  <button className="kid" onClick={() => onOpenChild(child.id)}>
                    <ChildInitial name={child.name} colorIndex={child.colorIndex} />
                    <span className="kid-meta">
                      <strong>{child.name}</strong>
                      <em>
                        {t('dash.devices', {
                          count: devices.filter(d => d.childId === child.id).length,
                        })}
                      </em>
                    </span>
                    <Icon name="chevronRight" size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Adding a child is bookkeeping — a row to assign devices to — and
              is separate from PAIRING one, which has no web flow and stays on
              the phone (`docs/BACKLOG.md`). */}
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
                       * The colour is cycled by roster length rather than
                       * asked for: the phone's picker is a sheet this surface
                       * has no equivalent of, and cycling gives a new child a
                       * colour none of their siblings has until the accents
                       * run out.
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
      )}

      {tab === 'devices' && (
        <Card title={appT('settings.sectionFamilyChildrenTitle')}>
          {devices.length === 0 ? (
            <>
              <p className="empty">{appT('settings.familyChildrenEmptyTitle')}</p>
              <p className="hint">{appT('settings.familyChildrenEmpty')}</p>
            </>
          ) : (
            <ul className="child-device-list">
              {devices.map(device => (
                <li key={device.id}>
                  <button className="kid" onClick={() => onOpenDevice(device.id)}>
                    <span className="kid-avatar">
                      <Icon name={deviceIconName(device)} size={15} />
                    </span>
                    <span className="kid-meta">
                      <strong>{device.name}</strong>
                      <em>
                        {device.child
                          ? device.child.name
                          : appT('settings.familyChildDeviceSubtitle')}
                      </em>
                      {/* Last active, on the row the phone puts it — the one
                          fact that says whether this machine is still with the
                          family at all. */}
                      <span className="kid-last-active">
                        <Icon name="activity" size={11} />
                        {device.lastActiveAt
                          ? appT('family.lastActiveDate', {
                              date: timeAgo(device.lastActiveAt),
                            })
                          : appT('family.lastActiveUnknown')}
                      </span>
                    </span>
                    <i
                      className={`kid-dot tone-${
                        getEffectiveDeviceStatus(device, Date.now()) === 'online'
                          ? 'good'
                          : 'muted'
                      }`}
                      aria-hidden="true"
                    />
                    <Icon name="chevronRight" size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Card>
      )}

      {/* The star chart, owner only and outside the tabs: it is about the
          family rather than about any one of the three groups. */}
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
