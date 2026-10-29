import { Fragment, useEffect, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { DEFAULT_NOTIFICATION_PREFS } from '@kidgate/schema/notificationPrefs';
import {
  ALERT_ROW_ORDER,
  DIGEST_ALERT_KEY,
  isValidQuietHoursWindow,
} from '@kidgate/core/domain/notificationPrefs';
import { SCHEDULE_TIME_STEP_MINUTES } from '@kidgate/core/domain/scheduleWindow';
import { notificationPrefsRepository } from '../adapters/repositories.js';
import Card from './Card.jsx';
import Toggle from './Toggle.jsx';
import { useReload } from './useReload.js';

/**
 * Push preferences — for a PHONE, edited from a browser.
 *
 * This is the one card here that is not about the family. Preferences ride on
 * `users/{uid}/parentDevices/{deviceId}`, the document the push fan-out already
 * reads to find the FCM token, so they decide what **that phone** is notified
 * about. A browser receives no push and has no such document; what it can do is
 * edit the phones the signed-in account already registered, which is why the
 * card opens with a device picker rather than a switch.
 *
 * **The signed-in account's own phones, owner or co-parent.** `firestore.rules`
 * gates the path on `isParentAccount(userId)` — literally
 * `request.auth.uid == userId` — so an account can only reach its own root;
 * `useFamilyData` hands a co-parent the phones under their uid (2026-09-17).
 *
 * `accountId` is the signed-in uid and never `familyId`. For the owner they are
 * the same string, which is exactly what would make the wrong one work in
 * testing and fail for everybody else.
 *
 * One row per `ALERT_PREF_KEYS` entry, in core's `ALERT_ROW_ORDER` (which fails typecheck on a missing key), so a key the schema adds
 * arrives here with no edit — `billing`, the trial's win-back offers, did on
 * 2026-09-28. Its hint says the notice that a plan ended cannot be switched off.
 * A browser-only parent has no document to hold a switch and gets no card; it
 * receives no push either, so nothing is left unmuted for them.
 */
export default function NotificationPrefsCard({
  accountId,
  parentDevices,
  appT,
  canWrite,
  live,
}) {
  const { t } = useT();
  const readOnly = live && !canWrite;

  const [deviceId, setDeviceId] = useState(parentDevices[0]?.deviceId ?? '');
  const [prefs, setPrefs] = useState(DEFAULT_NOTIFICATION_PREFS);
  const [reloadKey, reload] = useReload();
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);

  // A phone removed while this was open, or the first list arriving after it.
  useEffect(() => {
    if (parentDevices.some(device => device.deviceId === deviceId)) return;
    setDeviceId(parentDevices[0]?.deviceId ?? '');
  }, [parentDevices, deviceId]);

  /*
   * Live rather than fetched once: this screen is reachable from the phone
   * itself at the same time, and a failed write should visibly snap back
   * rather than leave a switch lying about what was saved.
   */
  useEffect(() => {
    if (!accountId || !deviceId) {
      setPrefs(DEFAULT_NOTIFICATION_PREFS);
      return undefined;
    }
    return notificationPrefsRepository.subscribe(accountId, deviceId, setPrefs);
  }, [accountId, deviceId, reloadKey]);

  if (parentDevices.length === 0) {
    return null;
  }

  // `next` is what the card shows at once: the document only says it after
  // the write lands and the re-read below comes back.
  const write = async (run, next) => {
    const previous = prefs;
    setPrefs(next);
    setNotice(null);
    setBusy(true);
    try {
      await run();
      /*
       * The read above is one-shot (`adapters/oneShot.js`) and these switches
       * render straight off the document — `on={prefs.alerts?.[key] !== false}`,
       * no optimistic copy — so without this the switch a parent just pressed
       * does not move at all.
       */
      reload();
    } catch {
      // A refused write changed nothing, so the document still says what was
      // there before the press: put that back, and say why it moved back.
      setPrefs(previous);
      setNotice(t('controlError.generic'));
    } finally {
      setBusy(false);
    }
  };

  // A cleared field writes `''` and equal bounds make a zero-width window; the
  // server reads both as something other than what the field shows, so the
  // input snaps back to what is stored instead.
  const writeWindow = next => {
    if (!isValidQuietHoursWindow(next)) {
      // Equal bounds snapped back with no word, which read as a broken field.
      // A cleared field needs none: what it snaps back to is the answer.
      if (next.start && next.end) {
        setNotice(appT('notifications.quietHoursSameTime'));
      }
      return;
    }
    write(() => notificationPrefsRepository.setQuietHours(accountId, deviceId, next), {
      ...prefs,
      quietHours: next,
    });
  };

  const disabled = readOnly || busy || !deviceId;

  return (
    <Card
      title={appT('notifications.sectionAlerts')}
      subtitle={appT('notifications.sectionAlertsHint')}
    >
      {/* Which phone. At one, its name instead of a picker offering a single
          option: the footnote says these apply to one phone only, and with
          nothing here it never said which (2026-10-29). */}
      {parentDevices.length === 1 && (
        <p className="hint prefs-phone">
          <Icon name="smartphone" size={14} />
          {parentDevices[0].name}
        </p>
      )}
      {parentDevices.length > 1 && (
        <div className="device-admin-row">
          <select
            className="reward-input"
            aria-label={appT('notifications.sectionAlertsHint')}
            value={deviceId}
            onChange={event => setDeviceId(event.target.value)}
          >
            {parentDevices.map(device => (
              <option key={device.deviceId} value={device.deviceId}>
                {device.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Said first, because it is the one thing none of the switches below
          can turn off. */}
      <p className="hint">{appT('notifications.sosAlwaysOn')}</p>

      {/* The phone's order and its Summary split, from core: the weekly report
          is not an alert, and it sat among them here (2026-10-29). */}
      {[...ALERT_ROW_ORDER, DIGEST_ALERT_KEY].map(key => (
        <Fragment key={key}>
          {key === DIGEST_ALERT_KEY && (
            <h3 className="feed-day-head">{appT('notifications.sectionSummary')}</h3>
          )}
          <div className="row-between">
            <span className="row-between-label">
              {/* A template, like the phone's: the labels are nested two levels
                deep under `alert`, and a literal key would be reported missing
                by `yarn i18n:missing`, which reads top-level entries only. */}
              <strong>{appT(`notifications.alert.${key}.label`)}</strong>
              <span className="row-between-hint">
                {appT(`notifications.alert.${key}.hint`)}
              </span>
            </span>
            <Toggle
              /* `on`, not `checked` — this switch is a `<button role="switch">`,
               not an `<input type="checkbox">`, and the wrong prop name leaves
               it permanently off with `aria-checked="false"` under a document
               that says true. Caught in the browser 2026-09-15. */
              on={prefs.alerts?.[key] !== false}
              label={appT(`notifications.alert.${key}.label`)}
              disabled={disabled}
              onChange={next =>
                write(
                  () =>
                    notificationPrefsRepository.setAlertPref(
                      accountId,
                      deviceId,
                      key,
                      next,
                    ),
                  { ...prefs, alerts: { ...prefs.alerts, [key]: next } },
                )
              }
            />
          </div>
        </Fragment>
      ))}

      <h3 className="feed-day-head">{appT('notifications.sectionQuietHours')}</h3>
      <p className="hint">{appT('notifications.sectionQuietHoursHint')}</p>
      <div className="row-between">
        <span>{appT('notifications.quietHoursLabel')}</span>
        <Toggle
          on={Boolean(prefs.quietHours?.enabled)}
          label={appT('notifications.quietHoursLabel')}
          disabled={disabled}
          onChange={next => {
            const quietHours = {
              ...DEFAULT_NOTIFICATION_PREFS.quietHours,
              ...prefs.quietHours,
              enabled: next,
            };
            write(
              () =>
                notificationPrefsRepository.setQuietHours(
                  accountId,
                  deviceId,
                  quietHours,
                ),
              { ...prefs, quietHours },
            );
          }}
        />
      </div>

      {/* `<input type="time">` rather than the phone's stepper: the browser
          has one, it already speaks the viewer's clock format, and a
          hand-built stepper would be a second place 24-hour parsing lives. */}
      {prefs.quietHours?.enabled && (
        <div className="device-admin-row">
          <label className="sheet-label" htmlFor="quiet-start">
            {appT('notifications.quietHoursStart')}
          </label>
          <input
            id="quiet-start"
            className="reward-input"
            type="time"
            step={SCHEDULE_TIME_STEP_MINUTES * 60}
            value={prefs.quietHours?.start ?? ''}
            disabled={disabled}
            onChange={event =>
              writeWindow({ ...prefs.quietHours, start: event.target.value })
            }
          />
          <label className="sheet-label" htmlFor="quiet-end">
            {appT('notifications.quietHoursEnd')}
          </label>
          <input
            id="quiet-end"
            className="reward-input"
            type="time"
            step={SCHEDULE_TIME_STEP_MINUTES * 60}
            value={prefs.quietHours?.end ?? ''}
            disabled={disabled}
            onChange={event =>
              writeWindow({ ...prefs.quietHours, end: event.target.value })
            }
          />
        </div>
      )}

      {notice && (
        <p className="hint" role="alert">
          {notice}
        </p>
      )}
      <p className="hint">{appT('notifications.footnote')}</p>
      {readOnly && <p className="hint">{t('dash.unlockToChange')}</p>}
    </Card>
  );
}
