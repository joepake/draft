import { useEffect, useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { resolveChildPresence } from '@kidgate/core/domain/childPresence';
import { supportsLock } from '@kidgate/core/domain/controlSupport';
import { isActionSupported } from '@kidgate/core/domain/deviceDetailActions';
import { supportsVideoHistory } from '@kidgate/core/domain/videoHistorySupport';
import { supportsAppInstallAlerts } from '@kidgate/core/domain/alertSupport';
import { supportsAppInventory } from '@kidgate/core/domain/appInventorySupport';
import {
  platformLabelKey,
  resolveDisplayFormFactor,
} from '@kidgate/core/domain/deviceFormFactor';
import {
  LOCATION_STALE_AFTER_MS,
  resolveChildLocationView,
} from '@kidgate/core/domain/childLocation';
import Card from './Card.jsx';
import DeviceDot from './DeviceDot.jsx';
import { deviceIconName } from './deviceIcon.js';
import ControlCenter from './ControlCenter.jsx';
import ChildInitial from './ChildInitial.jsx';
import { timeAgo } from './timeAgo.js';

/**
 * The child hub — the person, not one of their machines.
 *
 * `docs/CHILD_HUB.md` is the reasoning; the rule this file exists to obey is
 * that **a child-rule field is never written to a device's own controls** (the
 * next fan-out wipes it, so blocked hours and location sharing both go through
 * `actions.updateChildRules`). The daily budget is one shared total and is
 * only READ here — it is reported on the Daily limit card and edited where
 * that card lands, `ControlsTab`.
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
  /** The child's own location screen — see the Location branch below. */
  onOpenLocation = null,
  onLeave,
}) {
  const { t } = useT();
  const isOwner = Boolean(actions?.isOwner);
  const readOnly = live && !canWrite;

  const [nameDraft, setNameDraft] = useState(child.name ?? '');
  const [editingName, setEditingName] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [assignTo, setAssignTo] = useState('');

  // Another child, or the other parent renaming this one. A draft that
  // outlived either would put one child's name in another's field.
  useEffect(() => {
    setNameDraft(child.name ?? '');
    setEditingName(false);
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

  // Memoised, not a bare `?? {}`: the fallback is a fresh object every render,
  // and `controlFacts` below depends on it.
  const rules = useMemo(() => child.rules ?? {}, [child.rules]);
  const budgetMinutes = rules.dailyLimitMinutes ?? null;

  /**
   * What the control cards say, asked of the PERSON.
   *
   * The readings come from `@kidgate/core/domain/deviceControlState`, shared
   * with the phone; what is folded here is the set. Three rules the hub obeys
   * and a single device's page does not:
   *
   * - **the budget is one shared total** (`Child.rules.dailyLimitMinutes`), not
   *   any one machine's `controls.dailyLimitMinutes`, which the server rewrites
   *   per device as the child spends it;
   * - **blocked hours and the web filter are child rules**, fanned out to every
   *   device, so the child's own copy is the truth;
   * - **app limits and blocked apps are per device** (`docs/CHILD_HUB.md`), so
   *   the cards report the sum, and blocking counts as on when any machine has
   *   it on.
   *
   * **Places and Apps answer here now** (2026-09-17), and they cost no read:
   * `Device.places` is FAMILY-level and already on every view this component
   * was handed, and the two app facts are capability flags off the device
   * document — the same `supportsAppInstallAlerts` / `supportsAppInventory`
   * the single-device grid reads. They were left out along with the feeds
   * because they looked like feeds. They are not.
   *
   * **SOS and Web history are still left out, and still on purpose.**
   * `sos-alerts` needs `sosTotalCount`, a per-device recent query this surface
   * does not run across a child's whole set, and `web-history` needs that
   * device's day. Passing `0` for either is the bug the resolver's `undefined`
   * gate exists to catch — it printed "No alerts" over a working feature.
   * Closing them means a child-wide read, which is a cost decision rather than
   * a default.
   */
  const controlFacts = useMemo(() => {
    const sum = read =>
      childDevices.reduce((total, item) => total + (read(item) ?? 0), 0);
    /* Location never merges: `Child.locationDeviceId` names the machine the
       child carries, and "latest update wins" is the bug — the home tablet
       out-reports the phone at school. */
    const carried = resolveChildLocationView(child, childDevices).carried;
    const fixAt = carried?.lastLocation?.updatedAt
      ? new Date(carried.lastLocation.updatedAt).getTime()
      : null;

    return {
      controls: {
        dailyLimitMinutes: budgetMinutes,
        scheduleEnabled: rules.scheduleEnabled === true,
        scheduleWindows: rules.scheduleWindows ?? [],
        appLimits: new Array(sum(item => item.controls?.appLimits?.length)),
        blockedAppsConfigured: childDevices.some(
          item => item.controls?.blockedAppsConfigured === true,
        ),
        blockedAppCount: sum(item => item.controls?.blockedAppCount),
        blockedCategoryCount: sum(item => item.controls?.blockedCategoryCount),
        appBlockingEnabled: childDevices.some(
          item => item.controls?.appBlockingEnabled === true,
        ),
        webFilterEnabled: rules.webFilterEnabled === true,
        locationSharingEnabled: rules.locationSharingEnabled === true,
        videoHistoryEnabled: childDevices.some(
          item => item.controls?.videoHistoryEnabled === true,
        ),
      },
      hasLocationFix: fixAt !== null,
      locationStale: fixAt !== null && Date.now() - fixAt > LOCATION_STALE_AFTER_MS,
      supportsVideoHistory: childDevices.some(supportsVideoHistory),
      /*
       * Places are FAMILY-level — the fan-out writes the same list to every
       * device — so this is one machine's copy, not a sum. Summing would
       * multiply the family's places by the number of devices the child owns.
       * `undefined` while the child has no device at all, which is the
       * resolver's "not asked" rather than "none".
       */
      placeCount: childDevices.length
        ? (childDevices[0].places?.length ?? 0)
        : undefined,
      /*
       * Any machine that can do it means the child is covered, the same
       * any-of these cards already use for app blocking. `undefined` for a
       * child with nothing paired, so the card keeps its description.
       */
      reportsAppInstalls: childDevices.length
        ? childDevices.some(supportsAppInstallAlerts)
        : undefined,
      listsInstalledApps: childDevices.length
        ? childDevices.some(supportsAppInventory)
        : undefined,
    };
  }, [budgetMinutes, child, childDevices, rules]);

  const lockable = useMemo(() => childDevices.filter(supportsLock), [childDevices]);
  const allLocked = lockable.length > 0 && lockable.every(d => d.isLocked);

  return (
    <section className="child-hub">
      {/* ---- Who ---- */}
      <div className="card child-hero">
        <ChildInitial name={child.name} colorIndex={child.colorIndex} size={56} />
        <div className="child-hero-body">
          {/*
            A heading, not a permanently-open text field.
            
            The field was always on screen and full width, which made the top
            of the page read as a form to fill in rather than as a person's
            name — and put a disabled Save beside every child a parent merely
            wanted to look at. The phone shows the name and an Edit affordance
            and opens a modal; this opens the field in place, which is the
            same two states without a second layer.
            
            Renaming is any parent's, unlike every other write on this screen.
          */}
          <div className="child-hero-name">
            {editingName ? (
              <>
                <input
                  className="reward-input"
                  aria-label={appT('leaderboard.childNameLabel')}
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
                    nameDraft.trim() === child.name
                  }
                  onClick={async () => {
                    const ok = await run(`child-rename-${child.id}`, () =>
                      actions.renameChild(child.id, nameDraft.trim()),
                    );
                    if (ok) setEditingName(false);
                  }}
                >
                  {t('dash.save')}
                </button>
                <button
                  className="login-link"
                  onClick={() => {
                    setNameDraft(child.name ?? '');
                    setEditingName(false);
                  }}
                >
                  {t('dash.close')}
                </button>
              </>
            ) : (
              <>
                <h2>{child.name}</h2>
                {!readOnly && (
                  <button
                    className="icon-button"
                    aria-label={appT('shared.edit')}
                    title={appT('shared.edit')}
                    onClick={() => setEditingName(true)}
                  >
                    <Icon name="pencil" size={14} />
                  </button>
                )}
              </>
            )}
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

      {/*
        Blocked hours, the web filter, location sharing and the daily budget
        used to be hand-built cards here. They are grid cards now: `ControlsTab`
        already routes a child-rule field to `updateChildRules` whenever the
        device it is open on has a `childId`, so opening any of this child's
        machines edits the CHILD's rule and fans out — the same write, through
        the screen that already knew how to make it, instead of a second editor
        per rule that would drift from it.

        The budget was the last holdout and went on 2026-09-16: the Daily limit
        card below already reads the child's number out (`controlFacts` feeds it
        `Child.rules.dailyLimitMinutes`), and it lands on the screen tab, which
        renders the same `ChildBudgetEditor` for an assigned device. Two chip
        rows for one number, one of them above the card naming it.
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
                    {/* The second line the Family list's rows already carry.
                        No new key: `platformLabelKey` is the one both consoles
                        name a machine's platform with. A single-line row left
                        the tile taller than the words beside it. */}
                    <em>
                      {appT(
                        platformLabelKey(
                          device.platform,
                          resolveDisplayFormFactor(device),
                        ),
                      )}
                    </em>
                  </span>
                  <DeviceDot device={device} />
                  <Icon name="chevronRight" size={14} />
                </button>
                {/* A button, not a swipe: this is a pointer, and unassigning
                    leaves the device paired and enforcing — which is why it
                    is not dressed red the way unpairing is. */}
                {isOwner && (
                  <button
                    className="child-device-unassign"
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
          facts={controlFacts}
          appT={appT}
          onOpen={(tab, action) => {
            /*
             * Location is the one card that must not land on a machine.
             * The phone opens a CHILD screen for it — every device the child
             * carries, one coloured route each — and picking "the first
             * device that supports it" answered for a phone while the tablet
             * sat at home. Every other card here is still a device's own.
             */
            if (action?.id === 'location' && onOpenLocation) {
              onOpenLocation();
              return;
            }
            const target =
              childDevices.find(device => isActionSupported(action, device)) ??
              childDevices[0];
            /*
             * Pausing is the one card that ANSWERS in place rather than opening
             * a panel, and here there is nothing to answer for: a pause blocks
             * one machine, and "the first device that supports it" would pick
             * which of a child's two gets cut off. So this lands on that
             * device's grid — `manage`, where the card is — and the parent
             * presses it against the machine they meant. `ACTION_TAB` maps it
             * nowhere, which without this would drop them on Overview, a page
             * with nothing about a pause on it.
             */
            onOpenDevice(target.id, action?.id === 'pause-browsing' ? 'manage' : tab);
          }}
        />
      )}

      {/* ---- Removing the person ----
          Owner only, and it is bookkeeping: the devices stay paired and keep
          enforcing, pointing at nobody. The confirmation names the child,
          because a parent with three on screen has to see which one goes. */}
      {/*
        A danger zone, not a card like the ones above it: the sentence and the
        button share the header row, so the whole block is two lines rather than
        a full-height white card with a lone pink button under it. The tinted
        ground and the glyph say what it is before the title is read — this is
        the last thing on the page and a parent scrolls past it far more often
        than they use it.
      */}
      {isOwner && (
        <Card
          className="danger-zone"
          title={
            <span className="danger-zone-title">
              <span className="danger-zone-glyph">
                <Icon name="trash" size={14} />
              </span>
              {appT('family.childDetailRemoveTitle', { childName: child.name })}
            </span>
          }
          subtitle={appT('leaderboard.removeChildConfirmBody')}
          action={
            confirmRemove ? (
              <span className="danger-zone-actions">
                <button className="btn btn-sm" onClick={() => setConfirmRemove(false)}>
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
              </span>
            ) : (
              /* A tint at rest, never solid: solid red is the confirmation, and
                 this button only asks the question. Same rule as the row
                 removers, same class carrying it. */
              <button
                className="btn btn-sm device-admin-remove"
                disabled={readOnly || busy}
                title={readOnly ? t('dash.unlockToChange') : undefined}
                onClick={() => setConfirmRemove(true)}
              >
                <Icon name="trash" size={13} /> {appT('leaderboard.removeChild')}
              </button>
            )
          }
        />
      )}
    </section>
  );
}
