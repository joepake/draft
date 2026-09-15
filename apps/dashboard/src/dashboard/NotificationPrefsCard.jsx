import { useEffect, useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import {
  ALERT_PREF_KEYS,
  DEFAULT_NOTIFICATION_PREFS,
} from '@kidgate/schema/notificationPrefs';
import { notificationPrefsRepository } from '../adapters/repositories.js';
import Card from './Card.jsx';
import Toggle from './Toggle.jsx';

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
 * **Owner-only, and that is a data-model fact rather than a product rule.**
 * `firestore.rules` gates the path on `isParentAccount(userId)` — literally
 * `request.auth.uid == userId` — so an account can only reach its own root. A
 * joined co-parent's phones live under *their* uid, which this app never
 * subscribes to; there is nothing for it to show.
 *
 * `accountId` is the signed-in uid and never `familyId`. For the owner they are
 * the same string, which is exactly what would make the wrong one work in
 * testing and fail for everybody else.
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
  const [busy, setBusy] = useState(false);

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
  }, [accountId, deviceId]);

  if (parentDevices.length === 0) {
    return null;
  }

  const write = async run => {
    setBusy(true);
    try {
      await run();
    } catch {
      // The listener above is the source of truth; a refused write simply
      // never arrives, and the switch snaps back on the next snapshot.
    } finally {
      setBusy(false);
    }
  };

  const disabled = readOnly || busy || !deviceId;

  return (
    <Card
      title={appT('notifications.sectionAlerts')}
      subtitle={appT('notifications.sectionAlertsHint')}
    >
      {/* Which phone. Hidden at one, where a picker offering a single option
          teaches that the control does nothing. */}
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

      {ALERT_PREF_KEYS.map(key => (
        <div className="row-between" key={key}>
          <span>
            {/* A template, like the phone's: the labels are nested two levels
                deep under `alert`, and a literal key would be reported missing
                by `yarn i18n:missing`, which reads top-level entries only. */}
            <strong>{appT(`notifications.alert.${key}.label`)}</strong>
            <em className="tl-where">{appT(`notifications.alert.${key}.hint`)}</em>
          </span>
          <Toggle
            checked={prefs.alerts?.[key] !== false}
            disabled={disabled}
            onChange={next =>
              write(() =>
                notificationPrefsRepository.setAlertPref(
                  accountId,
                  deviceId,
                  key,
                  next,
                ),
              )
            }
          />
        </div>
      ))}

      <h3 className="feed-day-head">{appT('notifications.sectionQuietHours')}</h3>
      <p className="hint">{appT('notifications.sectionQuietHoursHint')}</p>
      <div className="row-between">
        <span>{appT('notifications.quietHoursLabel')}</span>
        <Toggle
          checked={Boolean(prefs.quietHours?.enabled)}
          disabled={disabled}
          onChange={next =>
            write(() =>
              notificationPrefsRepository.setQuietHours(accountId, deviceId, {
                ...DEFAULT_NOTIFICATION_PREFS.quietHours,
                ...prefs.quietHours,
                enabled: next,
              }),
            )
          }
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
            value={prefs.quietHours?.start ?? ''}
            disabled={disabled}
            onChange={event =>
              write(() =>
                notificationPrefsRepository.setQuietHours(accountId, deviceId, {
                  ...prefs.quietHours,
                  start: event.target.value,
                }),
              )
            }
          />
          <label className="sheet-label" htmlFor="quiet-end">
            {appT('notifications.quietHoursEnd')}
          </label>
          <input
            id="quiet-end"
            className="reward-input"
            type="time"
            value={prefs.quietHours?.end ?? ''}
            disabled={disabled}
            onChange={event =>
              write(() =>
                notificationPrefsRepository.setQuietHours(accountId, deviceId, {
                  ...prefs.quietHours,
                  end: event.target.value,
                }),
              )
            }
          />
        </div>
      )}

      <p className="hint">{appT('notifications.footnote')}</p>
      {readOnly && <p className="hint">{t('dash.unlockToChange')}</p>}
    </Card>
  );
}
