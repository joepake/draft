import { useEffect, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import Card from './Card.jsx';
import ChildInitial from './ChildInitial.jsx';

/**
 * Whose rules this device's grid is editing — drawn above the grid on the
 * device's Controls tab.
 *
 * **Assigned: the pointer to the child.** The grid below drops the
 * person-level cards (`omitPersonLevelActions`, the phone's list), so this row
 * says where they went and goes there — the phone's `DeviceDetailHero` child
 * row, whose accessibility label is this same `deviceDetail.managedAtChild`
 * sentence. Drawn only when the child is in hand: a `childId` naming a child
 * the family no longer has would be a link to nothing.
 *
 * **Unassigned: the question, and the owner answers it here.** The phone asks
 * it under the device's card on the Family list (`AssignDeviceSheet`); this
 * surface had no way to assign from the device at all, only from the child's
 * page. The words are that sheet's — its title and its "add and assign" — plus
 * `family.unassignedDeviceHint`, the singular twin of the group heading's
 * `unassignedHint`, because "these devices" is false on one machine's page.
 * Owner only, on both consoles: `firestore.rules`' `childAssignmentSafe()`
 * lets only the owner write `Device.childId`, and `actions.assignDevice`
 * refuses anyone else — so a co-parent gets the sentence naming who decides
 * rather than a picker whose every choice fails.
 *
 * The write is the child hub's own (`actions.assignDevice`), not a second
 * path. A family with no child yet gets a name field instead of an empty
 * picker — the phone's sheet offers "Add a child" for the same reason — and
 * the child is created and the device assigned in one press.
 */
export default function DeviceChildRow({
  device,
  familyChildren,
  actions,
  run,
  busy,
  readOnly,
  appT,
  onOpenChild,
  /** This device's open site requests — the per-device feed already in hand. */
  pendingSiteRequests = 0,
  /** Opens this device's Controls panel, where both answers live. */
  onOpenSiteRequests = null,
}) {
  const { t } = useT();
  const isOwner = Boolean(actions?.isOwner);
  const [assignTo, setAssignTo] = useState('');
  const [newChild, setNewChild] = useState('');

  // Another device is another question; a half-made choice must not carry.
  useEffect(() => {
    setAssignTo('');
    setNewChild('');
  }, [device.id]);

  if (device.childId) {
    const child = device.child;
    if (!child) return null;
    return (
      <Card>
        <ul className="child-device-list">
          <li>
            <button className="kid" onClick={() => onOpenChild(child.id)}>
              <span className="kid-avatar kid-avatar-child">
                <ChildInitial name={child.name} colorIndex={child.colorIndex} />
              </span>
              <span className="kid-meta">
                <strong>{child.name}</strong>
                <span className="row-between-hint">
                  {appT('deviceDetail.managedAtChild', { childName: child.name })}
                </span>
              </span>
              <Icon name="chevronRight" size={14} />
            </button>
          </li>
          {/*
            The one per-device answer the dropped cards used to lead to. Site
            requests are subscribed per DEVICE and answered on that device's
            Controls panel (Allow and Decline; the Attention rail carries
            Allow alone), which an assigned device's grid reached through its
            Web Filter card. That card is the child's now, and the hub's copy
            of it lands on the child's FIRST capable machine — so without this
            row a request from their second one could be allowed and never
            declined. The phone answers both on the device page
            (`PendingRequestsCard`); this is the web's door until it has one.
          */}
          {pendingSiteRequests > 0 && onOpenSiteRequests && (
            <li>
              <button className="kid" onClick={onOpenSiteRequests}>
                <span className="kid-avatar">
                  <Icon name="globe" size={15} />
                </span>
                <span className="kid-meta">
                  <strong>{t('dash.siteRequestsTitle')}</strong>
                  <em>
                    {appT('family.chipRequestCount', { count: pendingSiteRequests })}
                  </em>
                </span>
                <Icon name="chevronRight" size={14} />
              </button>
            </li>
          )}
        </ul>
      </Card>
    );
  }

  const question = appT('family.assignSheetTitle', { deviceName: device.name });

  if (!isOwner) {
    return (
      <Card title={question} subtitle={appT('family.unassignedDeviceHintMember')} />
    );
  }

  const children = familyChildren ?? [];
  const locked = readOnly || busy;
  const lockedTitle = readOnly ? t('dash.unlockToChange') : undefined;

  return (
    <Card title={question} subtitle={appT('family.unassignedDeviceHint')}>
      {children.length > 0 ? (
        <div className="device-admin-row">
          <select
            className="reward-input"
            aria-label={question}
            value={assignTo}
            disabled={locked}
            onChange={event => setAssignTo(event.target.value)}
          >
            <option value="">—</option>
            {children.map(child => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-sm"
            disabled={locked || !assignTo}
            title={lockedTitle}
            onClick={async () => {
              const ok = await run(`assign-${device.id}`, () =>
                actions.assignDevice(device.id, assignTo),
              );
              if (ok) setAssignTo('');
            }}
          >
            {t('dash.save')}
          </button>
        </div>
      ) : (
        <div className="device-admin-row">
          <input
            className="reward-input"
            aria-label={appT('leaderboard.childNameLabel')}
            placeholder={appT('leaderboard.childNamePlaceholder')}
            value={newChild}
            disabled={locked}
            onChange={event => setNewChild(event.target.value)}
          />
          <button
            className="btn btn-sm"
            disabled={locked || newChild.trim().length === 0}
            title={lockedTitle}
            onClick={async () => {
              const ok = await run(`assign-${device.id}`, async () => {
                const childId = await actions.createChild(newChild.trim(), 0);
                await actions.assignDevice(device.id, childId);
              });
              if (ok) setNewChild('');
            }}
          >
            {appT('family.assignSheetAddAndAssign')}
          </button>
        </div>
      )}
    </Card>
  );
}
