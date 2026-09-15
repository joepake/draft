import { useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { resolveActivityKind } from '@kidgate/core/domain/activityKind';
import { activityCopy } from './activityCopy.js';
import { activityIconName } from './activityIcon.js';
import { timeAgo } from './timeAgo.js';

/**
 * The family's activity feed — the web half of `apps/mobile`'s Activities tab.
 *
 * **Every sentence here is the app pack's**, read through `appT`. The phone
 * already says all of it in fourteen languages, and a feed is the one surface
 * where that is not a preference: rows are stored as `titleKey` + `params` in
 * the app key space, so a web pack rendering them would be showing a different
 * event. `.claude/rules/i18n.md` carries the rule; the filter chips, the day
 * headings and the empty state come from the same pack for the same reason.
 *
 * **It reads `familyActivities`, never the per-device rows.** Those are scoped
 * to whichever device the Family section has open (`useFamilyData`), and a
 * family feed that changes when a parent picks a phone is not one.
 */
export default function ActivityFeed({
  activities,
  devices,
  children,
  actorNames,
  appT,
  teaserSlot = null,
}) {
  /*
   * Two tiers, like the phone: a child, then one of that child's devices.
   * Device is reset by the child chips rather than kept — a device id that
   * belongs to another child filters the list down to nothing and the reason
   * is off screen.
   */
  const [childId, setChildId] = useState('');
  const [deviceId, setDeviceId] = useState('');

  const deviceById = useMemo(
    () => new Map(devices.map(device => [device.id, device])),
    [devices],
  );

  /** The devices the device chips offer: one child's, or the whole family's. */
  const chipDevices = useMemo(
    () => (childId ? devices.filter(device => device.childId === childId) : devices),
    [devices, childId],
  );

  const groups = useMemo(() => {
    const scoped = activities.filter(activity => {
      if (deviceId) return activity.deviceId === deviceId;
      if (!childId) return true;
      return deviceById.get(activity.deviceId)?.childId === childId;
    });
    /*
     * Grouped by the *viewer's* day, not by a stored day key: this is a
     * browser, so the local calendar is the right one and `Date` already
     * knows it. Rows arrive newest first from the repository and the grouping
     * keeps that order, so the first group is today's whenever there is one.
     */
    const out = [];
    let current = null;
    scoped.forEach(activity => {
      const at = new Date(activity.createdAt);
      const key = Number.isNaN(at.getTime()) ? '' : at.toDateString();
      if (!current || current.key !== key) {
        current = { key, at, rows: [] };
        out.push(current);
      }
      current.rows.push(activity);
    });
    return out;
  }, [activities, childId, deviceId, deviceById]);

  /** Today / Yesterday / the date itself, in the language on screen. */
  function dayHeading(at) {
    if (Number.isNaN(at.getTime())) return '';
    const today = new Date();
    const key = at.toDateString();
    if (key === today.toDateString()) return appT('activities.dateToday');
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (key === yesterday.toDateString()) return appT('activities.dateYesterday');
    return at.toLocaleDateString(undefined, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  }

  return (
    <section className="feed">
      {/* Chips, not a select: a family has a handful of children and the phone
          draws the same row. Hidden for a family with one child — a filter
          offering "Everyone" and one name filters nothing. */}
      {children.length > 1 && (
        <div className="feed-filter" role="group" aria-label={appT('activities.title')}>
          <button
            type="button"
            className={`chip${childId ? '' : ' is-active'}`}
            aria-pressed={!childId}
            onClick={() => {
              setChildId('');
              setDeviceId('');
            }}
          >
            {appT('activities.filterAllChildren')}
          </button>
          {children.map(child => (
            <button
              key={child.id}
              type="button"
              className={`chip${childId === child.id ? ' is-active' : ''}`}
              aria-pressed={childId === child.id}
              aria-label={appT('activities.filterByChild', { label: child.name })}
              onClick={() => {
                setChildId(current => (current === child.id ? '' : child.id));
                setDeviceId('');
              }}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}

      {chipDevices.length > 1 && (
        <div className="feed-filter" role="group" aria-label={appT('activities.title')}>
          <button
            type="button"
            className={`chip${deviceId ? '' : ' is-active'}`}
            aria-pressed={!deviceId}
            onClick={() => setDeviceId('')}
          >
            {appT('activities.filterAllDevices')}
          </button>
          {chipDevices.map(device => (
            <button
              key={device.id}
              type="button"
              className={`chip${deviceId === device.id ? ' is-active' : ''}`}
              aria-pressed={deviceId === device.id}
              aria-label={appT('activities.filterByDevice', { label: device.name })}
              onClick={() =>
                setDeviceId(current => (current === device.id ? '' : device.id))
              }
            >
              {device.name}
            </button>
          ))}
        </div>
      )}

      {groups.length === 0 ? (
        /* Two empty states, because they are two different facts: nothing has
           happened in this family, or nothing has happened on the one device
           being filtered to. The phone splits them the same way. */
        <div className="card feed-empty">
          <h2>
            {deviceId
              ? appT('activities.emptyTitleDevice')
              : appT('activities.emptyTitleAll')}
          </h2>
          <p className="hint">
            {deviceId
              ? appT('activities.emptyDescriptionDevice')
              : appT('activities.emptyDescriptionAll')}
          </p>
        </div>
      ) : (
        groups.map(group => (
          <div className="feed-day" key={group.key}>
            <h2 className="feed-day-head">{dayHeading(group.at)}</h2>
            <ul className="timeline">
              {group.rows.map(activity => {
                const device = deviceById.get(activity.deviceId);
                const copy = activityCopy(
                  activity,
                  appT,
                  /* The phone's own fallback when a row outlives the device
                     that wrote it — a removed phone still has history. */
                  device?.name || appT('activities.unknownDevice'),
                  actorNames,
                );
                const kind = resolveActivityKind(activity);
                return (
                  <li key={activity.id}>
                    <span className={`tl-icon type-${kind}`}>
                      <Icon name={activityIconName(kind)} size={15} />
                    </span>
                    <span className="tl-body">
                      <strong>{copy.title}</strong>
                      <em>{copy.description}</em>
                      {/* Which device, on every row: the per-device feed on the
                          Family section can leave it out because the header
                          above it names one, and this list cannot. */}
                      {devices.length > 1 && (
                        <span className="tl-where">
                          {device?.name || appT('activities.unknownDevice')}
                        </span>
                      )}
                    </span>
                    <time>{timeAgo(activity.createdAt)}</time>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      )}

      {/* Where the list stops, not over it: a free feed ends at today — a
          client query limit, since `firestore.rules` cannot read the plan —
          and a parent reaching the bottom could not tell a quiet week from a
          window that ends there. The phone puts it in the same place. */}
      {teaserSlot}
    </section>
  );
}
