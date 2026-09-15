import { useEffect, useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { resolveChildPresence } from '@kidgate/core/domain/childPresence';
import { supportsLock } from '@kidgate/core/domain/controlSupport';
import { isActionSupported } from '@kidgate/core/domain/deviceDetailActions';
import Card from './Card.jsx';
import DeviceDot from './DeviceDot.jsx';
import { deviceIconName } from './deviceIcon.js';
import ControlCenter from './ControlCenter.jsx';
import ChildBudgetEditor from './ChildBudgetEditor.jsx';
import ChildInitial from './ChildInitial.jsx';
import { childMinutesUsedToday } from './childBudgetSpent.js';
import { formatMinutes } from './charts.jsx';
import { timeAgo } from './timeAgo.js';

/**
 * The child hub — the person, not one of their machines.
 *
 * `docs/CHILD_HUB.md` is the reasoning; the two rules this file exists to obey
 * are that **a child-rule field is never written to a device's own controls**
 * (the next fan-out wipes it, so blocked hours and location sharing both go
 * through `actions.updateChildRules`) and that **the daily budget is one
 * shared total**, written through `actions.setChildBudget`, which does the
 * rule plus the per-device seed.
 *
 * Every sentence is the app pack's, read through `appT`: the phone has said
 * all of this in fourteen languages since the hub was built there, and a
 * second console rewording "Unassign" is how two surfaces come to describe the
 * same gesture differently. The handful of `t('dash.*')` calls are the
 * browser's own chrome — Save, Close, the locked-changes tooltip — which the
 * phone has no equivalent of.
 */
export default function ChildHub({
  child,
  childDevices,
  unassignedDevices,
  allDevices,
  actions,
  run,
  busy,
  canWrite,
  live,
  appT,
  onOpenDevice,
  onLeave,
}) {
  const { t } = useT();
  const isOwner = Boolean(actions?.isOwner);
  const readOnly = live && !canWrite;

  const [nameDraft, setNameDraft] = useState(child.name ?? '');
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [assignTo, setAssignTo] = useState('');

  // Another child, or the other parent renaming this one. A draft that
  // outlived either would put one child's name in another's field.
  useEffect(() => {
    setNameDraft(child.name ?? '');
    setConfirmRemove(false);
    setAssignTo('');
  }, [child.id, child.name]);

  /*
   * Reachability folded across the set, never per device: any device checked
   * in means the child is reachable, and a locked phone counts — its agent
   * answered, which is exactly why a parent can unlock it from here. A partial
   * set says "1 of 3 online" rather than a bare Online over two silent
   * machines.
   */
  const presence = useMemo(
    () => resolveChildPresence(childDevices, Date.now()),
    [childDevices],
  );

  const rules = child.rules ?? {};
  const budgetMinutes = rules.dailyLimitMinutes ?? null;
  const spentMinutes = useMemo(
    () => childMinutesUsedToday(childDevices),
    [childDevices],
  );

  const deviceIds = useMemo(() => childDevices.map(d => d.id), [childDevices]);
  const lockable = useMemo(() => childDevices.filter(supportsLock), [childDevices]);
  const allLocked = lockable.length > 0 && lockable.every(d => d.isLocked);

  return (
    <section className="child-hub">
      {/* ---- Who ---- */}
      <div className="card child-hero">
        <ChildInitial name={child.name} colorIndex={child.colorIndex} size={56} />
        <div className="child-hero-body">
          <div className="child-hero-name">
            {/* Renaming is any parent's, unlike every other write on this
                screen — the phone draws the pencil for a joined co-parent
                too. */}
            <input
              className="reward-input"
              aria-label={appT('leaderboard.childNameLabel')}
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
                nameDraft.trim() === child.name
              }
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() =>
                run(`child-rename-${child.id}`, () =>
                  actions.renameChild(child.id, nameDraft.trim()),
                )
              }
            >
              {t('dash.save')}
            </button>
          </div>
          {/* A count, not a word: "Online" over a child with three devices and
              one answering is the reading `resolveChildPresence` exists to
              refuse. */}
          {childDevices.length > 0 && (
            <p className="child-hero-meta">
              <span className={`pill tone-${presence.online ? 'good' : 'muted'}`}>
                <i className="pill-dot" aria-hidden="true" />
                {appT('family.childDetailOnlineCount', {
                  online: presence.onlineCount,
                  total: presence.totalCount,
                })}
              </span>
              {/* `family.lastActiveDate`, not `deviceDetail.lastActive` — the
                  latter is a bare row LABEL on the phone with no placeholder,
                  so it printed "Last active" with the time silently dropped.
                  Measured in the browser 2026-09-15. */}
              <span className="dot-sep">·</span>
              {presence.lastActiveAt
                ? appT('family.lastActiveDate', {
                    date: timeAgo(presence.lastActiveAt),
                  })
                : appT('family.lastActiveUnknown')}
            </p>
          )}
        </div>
        {/* One gesture for the whole person. It writes each device in turn
            because `setLock` is per machine — there is no child-level lock
            field, and inventing one would be a rule no agent reads. */}
        {lockable.length > 0 && (
          <button
            className="btn btn-primary"
            disabled={readOnly || busy}
            title={readOnly ? t('dash.unlockToChange') : undefined}
            aria-label={
              allLocked
                ? appT('family.unlockAllA11y', { childName: child.name })
                : appT('family.lockAllA11y', { childName: child.name })
            }
            onClick={() =>
              run(`child-lock-${child.id}`, async () => {
                for (const device of lockable) {
                  await actions.setLock(device.id, !allLocked);
                }
              })
            }
          >
            {allLocked ? appT('family.unlockAll') : appT('family.lockAll')}
          </button>
        )}
      </div>

      {/* ---- One budget, one place ---- */}
      <Card title={appT('deviceDetail.dailyLimit')}>
        {/* The figure above the control: a parent choosing tonight's number
            reads where the day already stands first. `null` is "no device
            reported today", which is not the same as none used. */}
        {budgetMinutes && spentMinutes !== null && (
          <p className="hint">
            {formatMinutes(spentMinutes)} / {formatMinutes(budgetMinutes)}
          </p>
        )}
        <ChildBudgetEditor
          minutes={budgetMinutes}
          readOnly={readOnly}
          busy={busy}
          onSave={minutes =>
            run(`child-budget-${child.id}`, () =>
              actions.setChildBudget(child.id, minutes, deviceIds),
            )
          }
        />
      </Card>

      {/*
        Blocked hours, the web filter and location sharing used to be three
        hand-built cards here. They are grid cards now: `ControlsTab` already
        routes a child-rule field to `updateChildRules` whenever the device it
        is open on has a `childId`, so opening any of this child's machines
        edits the CHILD's rule and fans out — the same write, through the
        screen that already knew how to make it, instead of a second editor
        per rule that would drift from it.

        The budget above stays, because no device tab holds it: it is the one
        control that is the person's rather than a machine's.
      */}

      {/* ---- Their machines ---- */}
      <Card title={appT('family.childDetailDevicesTitle')}>
        {childDevices.length === 0 ? (
          <p className="empty">
            {isOwner
              ? appT('family.childDetailNoDevices')
              : appT('family.childDetailNoDevicesMember')}
          </p>
        ) : (
          <ul className="child-device-list">
            {childDevices.map(device => (
              <li key={device.id}>
                <button className="kid" onClick={() => onOpenDevice(device.id)}>
                  {/* The same glyph and the same status dot the Family list
                      puts on this machine. A row here carrying only a name was
                      the one place in the product a device appeared without
                      saying whether it was reachable. */}
                  <span className="kid-avatar">
                    <Icon name={deviceIconName(device)} size={15} />
                  </span>
                  <span className="kid-meta">
                    <strong>{device.name}</strong>
                  </span>
                  <DeviceDot device={device} />
                  <Icon name="chevronRight" size={14} />
                </button>
                {/* A button, not a swipe: this is a pointer, and unassigning
                    leaves the device paired and enforcing — which is why it
                    is not dressed red the way unpairing is. */}
                {isOwner && (
                  <button
                    className="login-link"
                    disabled={readOnly || busy}
                    title={readOnly ? t('dash.unlockToChange') : undefined}
                    onClick={() =>
                      run(`unassign-${device.id}`, () =>
                        actions.assignDevice(device.id, null),
                      )
                    }
                  >
                    {appT('family.childDetailUnassignAction')}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}

        {isOwner && unassignedDevices.length > 0 && (
          <div className="child-assign">
            <label className="sheet-label" htmlFor="child-assign">
              {appT('family.childDetailAssignMore')}
            </label>
            <div className="device-admin-row">
              <select
                id="child-assign"
                className="reward-input"
                value={assignTo}
                disabled={readOnly || busy}
                onChange={event => setAssignTo(event.target.value)}
              >
                <option value="">—</option>
                {unassignedDevices.map(device => (
                  <option key={device.id} value={device.id}>
                    {device.name}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-sm"
                disabled={readOnly || busy || !assignTo}
                onClick={async () => {
                  const ok = await run(`assign-${assignTo}`, () =>
                    actions.assignDevice(assignTo, child.id),
                  );
                  if (ok) setAssignTo('');
                }}
              >
                {t('dash.save')}
              </button>
            </div>
          </div>
        )}
      </Card>

      {/*
        The same control centre the device detail draws, asked of the person:
        a card is lit when ANY of this child's machines can carry it
        (`isActionSupportedByAnyDevice`, the rule `docs/CHILD_HUB.md` states).

        A card opens the first of their devices that can actually do it. The
        phone opens a CHILD-scoped screen that merges every device instead —
        this surface has no merged screens yet, so it lands the parent on a
        machine that can, which is honest but not the same. Written down in
        `apps/dashboard/CLAUDE.md`.
      */}
      {childDevices.length > 0 && (
        <ControlCenter
          devices={childDevices}
          appT={appT}
          onOpen={(tab, action) => {
            const target =
              childDevices.find(device => isActionSupported(action, device)) ??
              childDevices[0];
            onOpenDevice(target.id, tab);
          }}
        />
      )}

      {/* ---- Removing the person ----
          Owner only, and it is bookkeeping: the devices stay paired and keep
          enforcing, pointing at nobody. The confirmation names the child,
          because a parent with three on screen has to see which one goes. */}
      {isOwner && (
        <Card title={appT('family.childDetailRemoveTitle', { childName: child.name })}>
          <p className="hint">{appT('leaderboard.removeChildConfirmBody')}</p>
          {confirmRemove ? (
            <div className="reward-actions">
              <button className="login-link" onClick={() => setConfirmRemove(false)}>
                {t('dash.close')}
              </button>
              <button
                className="btn btn-sm btn-danger"
                disabled={busy}
                onClick={async () => {
                  const ok = await run(`child-remove-${child.id}`, () =>
                    actions.removeChild(child.id, allDevices),
                  );
                  // Back to the list: staying would leave the pane rendering a
                  // person the family no longer has.
                  if (ok) onLeave();
                }}
              >
                {busy
                  ? appT('family.childDetailRemovingButton')
                  : appT('leaderboard.removeChild')}
              </button>
            </div>
          ) : (
            <button
              className="login-link device-admin-remove"
              disabled={readOnly || busy}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => setConfirmRemove(true)}
            >
              <Icon name="trash" size={13} /> {appT('leaderboard.removeChild')}
            </button>
          )}
        </Card>
      )}
    </section>
  );
}
