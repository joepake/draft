import { useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import ChildInitial from './ChildInitial.jsx';
import { resolveActivityKind } from '@kidgate/core/domain/activityKind';
import { activityCopy } from './activityCopy.js';
import { activityIconName } from './activityIcon.js';
import { deviceIconName } from './deviceIcon.js';
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
 * **As the family feed it reads `familyActivities`, never the per-device
 * rows.** Those are scoped to whichever device the Family section has open
 * (`useFamilyData`), and a family feed that changes when a parent picks a
 * phone is not one.
 *
 * **`deviceScope` turns the same component into one device's log** — the
 * device detail's third tab. One renderer, because a second one drifts: the
 * day headings, the rail, the empty states and the free-tier fold are all
 * decisions this file already made. What the scope changes is only what a
 * device log cannot honestly draw — the two filter rows (there is nothing
 * left to filter) and the who-and-what chip (the header above the tab already
 * names the child and the machine) — plus the hard filter itself, which is
 * belt and braces over the already-scoped rows the caller passes.
 */
export default function ActivityFeed({
  activities,
  devices,
  children,
  actorNames,
  appT,
  teaserSlot = null,
  deviceScope = null,
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
      /* The device log's own guarantee, ahead of the chips: whatever the
         caller passed, a row that is not this machine's never renders under
         its name. A row carries `deviceId` and nothing else, so this is the
         whole of "related to this device". */
      if (deviceScope) return activity.deviceId === deviceScope.id;
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
  }, [activities, childId, deviceId, deviceById, deviceScope]);

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
          offering "Everyone" and one name filters nothing, and hidden on a
          device log for the same reason: every row is already one child's. */}
      {!deviceScope && children.length > 1 && (
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
            <span className="family-tab-count">{activities.length}</span>
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
              {/* The child's own accent, the same one the Family list and the
                  hub draw. A row of names in one colour is a list; a row of
                  names each in their own is a family. */}
              <ChildInitial name={child.name} colorIndex={child.colorIndex} size={18} />
              {child.name}
              {/* The count is what makes a chip worth reading before it is
                  pressed — the phone puts it on every one. */}
              <span className="family-tab-count">
                {
                  activities.filter(
                    a => deviceById.get(a.deviceId)?.childId === child.id,
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
      )}

      {!deviceScope && chipDevices.length > 1 && (
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
              {/* The same glyph the Family list puts on that device. A chip
                  reading "iPad" beside one reading "MacBook" is two words; the
                  marks are what a parent picks from at a glance. */}
              <Icon name={deviceIconName(device)} size={14} />
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
            {deviceId || deviceScope
              ? appT('activities.emptyTitleDevice')
              : appT('activities.emptyTitleAll')}
          </h2>
          <p className="hint">
            {deviceId || deviceScope
              ? appT('activities.emptyDescriptionDevice')
              : appT('activities.emptyDescriptionAll')}
          </p>
        </div>
      ) : (
        groups.map(group => (
          <div className="feed-day" key={group.key}>
            <h2 className="feed-day-head">{dayHeading(group.at)}</h2>
            <ul className="feed-rows">
              {group.rows.map(activity => {
                const device = deviceById.get(activity.deviceId);
                const child = device?.childId
                  ? children.find(c => c.id === device.childId)
                  : null;
                const copy = activityCopy(
                  activity,
                  appT,
                  /* The phone's own fallback when a row outlives the device
                     that wrote it — a removed phone still has history. */
                  device?.name || appT('activities.unknownDevice'),
                  actorNames,
                );
                const kind = resolveActivityKind(activity);
                const at = new Date(activity.createdAt);
                return (
                  <li className={`feed-row type-${kind}`} key={activity.id}>
                    {/* The glyph sits OUTSIDE the card, on the day's rail —
                        the phone draws it that way so a column of rows can be
                        skimmed by mark alone without the cards shifting. */}
                    <span className={`feed-row-icon type-${kind}`}>
                      <Icon name={activityIconName(kind)} size={15} />
                    </span>
                    <div className="feed-row-card">
                      {/* Who and on what, as one chip: a family feed is read
                          by person first, and the machine is what tells two of
                          a child's apart. Gone on a device log — the header
                          two rows up already says "Papa · MacBook", and
                          repeating it on every row is the hero's mistake. */}
                      {!deviceScope && (
                        <span className="feed-row-who">
                          {child && <strong>{child.name}</strong>}
                          {device && <Icon name={deviceIconName(device)} size={12} />}
                          <span>
                            {device?.name || appT('activities.unknownDevice')}
                          </span>
                        </span>
                      )}
                      <strong className="feed-row-title">{copy.title}</strong>
                      {copy.description && <p>{copy.description}</p>}
                      <span className="feed-row-foot">
                        <em>{timeAgo(activity.createdAt)}</em>
                        {/* The clock time as well as the age: "13 minutes ago"
                            answers how fresh, and "12:19" is what a parent
                            matches against their own memory of the evening. */}
                        <time>
                          {Number.isNaN(at.getTime())
                            ? ''
                            : at.toLocaleTimeString(undefined, {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                        </time>
                      </span>
                    </div>
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
