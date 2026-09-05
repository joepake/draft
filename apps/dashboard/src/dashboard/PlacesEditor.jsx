import { useState } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import Icon from '@kidgate/web-ui/Icon';
import {
  DEFAULT_PLACE_RADIUS_METERS,
  MAX_DEVICE_PLACES,
} from '@kidgate/schema/devicePlace';
import {
  PLACE_RADIUS_STEPS,
  findPlaceConflict,
  minimumUsefulRadiusMeters,
  nearestRadiusStep,
} from '@kidgate/core/domain/placeAlerts';

/**
 * The family's geofences, editable from the web.
 *
 * **Every rule comes from `@kidgate/core/domain/placeAlerts`.** That is not
 * tidiness: on 2026-08-26 the phone's duplicate check was a flat 80m constant
 * that ignored `radiusMeters`, and through `mergeDevicePlaces` it silently
 * deleted one of any two real places within 80m of each other. `docs/BACKLOG.md`
 * named a second editor written from scratch as a second chance to invent that
 * rule, so this one calls `findPlaceConflict` and never measures a distance
 * itself.
 *
 * **One list for the whole family.** `updateFamilyPlaces` sanitises and fans
 * the list into every child device, which is why the write is whole-list and
 * why the editor reads `device.familyPlaces` — any device's copy is the
 * family's copy.
 *
 * ## What this cannot do, and why it is not hidden
 *
 * **A place can only be added where the device last reported itself.** The
 * dashboard has no map — the square on the Safety tab is a decorative grid
 * with pins at fixed percentages, not a surface anyone can drop a pin on. The
 * phone has the map and stays the only place to put a geofence somewhere the
 * child has never been. Adding a map here is its own piece of work, and
 * shipping a coordinate box for a parent to type latitude into would be worse
 * than the gap.
 */
/*
 * `appT` reads the APP key space through `@kidgate/i18n/activityFeed`, the
 * same door the activity feed uses. Every label here already exists on the
 * phone in fourteen languages; copying those sentences into `dash.*` would put
 * one sentence in two packs, and only one of them would be edited next time.
 * `t` stays for the handful this surface says and the phone does not.
 */
export default function PlacesEditor({ device, readOnly, busy, onSave }) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const places = device.familyPlaces ?? [];
  const [editing, setEditing] = useState(null);
  const [warning, setWarning] = useState(null);
  const [error, setError] = useState(null);

  const last = device.lastLocation ?? null;
  const canAdd = Boolean(last?.latitude != null && last?.longitude != null);
  const full = places.length >= MAX_DEVICE_PLACES;

  /*
   * The accuracy advice, measured from THIS device rather than asserted about
   * GPS in general. **Null when the device has never reported an accuracy** —
   * the domain function refuses to guess one, so every use below has to cope
   * with its absence rather than printing a number nothing measured.
   */
  const advisedRadius = minimumUsefulRadiusMeters(last?.accuracy);

  const write = async next => {
    setError(null);
    setWarning(null);
    const ok = await onSave(next);
    if (ok) setEditing(null);
    return ok;
  };

  const commitDraft = async draft => {
    // `excludeId` rather than a pre-filtered list: the domain function takes
    // one, and filtering here would be this editor deciding what "the same
    // place" means — the exact judgement it must not make.
    const conflict = findPlaceConflict(places, draft, draft.id);

    if (conflict?.kind === 'name') {
      setError(appT('placeAlerts.duplicateNameToast'));
      return;
    }
    if (conflict?.kind === 'samePin') {
      setError(t('dash.placeSamePin', { name: conflict.place.name }));
      return;
    }
    /*
     * `contained` warns and the parent may proceed — the same answer the phone
     * gives. Saving again is the confirmation, which is why the warning stays
     * on screen rather than opening a dialog.
     *
     * **Keyed to the place it is about**, not to "a warning is showing". The
     * first version tested `!warning`, so a parent who saw the warning, then
     * dragged the radius until it reached a DIFFERENT place, had that second
     * overlap written with nothing said.
     */
    if (conflict?.kind === 'contained' && warning?.placeId !== conflict.place.id) {
      setWarning({
        placeId: conflict.place.id,
        text: appT('placeAlerts.overlapWarning', {
          name: conflict.place.name,
          meters: conflict.meters,
        }),
      });
      return;
    }

    const exists = places.some(place => place.id === draft.id);
    await write(
      exists
        ? places.map(place => (place.id === draft.id ? draft : place))
        : [...places, draft],
    );
  };

  return (
    <div className="places-editor">
      {places.map(place =>
        editing?.id === place.id ? (
          <PlaceRowForm
            key={place.id}
            draft={editing}
            advisedRadius={advisedRadius}
            busy={busy}
            warning={warning}
            error={error}
            onChange={setEditing}
            onCancel={() => {
              setEditing(null);
              setWarning(null);
              setError(null);
            }}
            onSubmit={() => commitDraft(editing)}
          />
        ) : (
          <div key={place.id} className="place-row">
            <span className="place-name">{place.name}</span>
            <em>{t('dash.placeRadius', { meters: place.radiusMeters })}</em>
            <button
              disabled={readOnly || busy}
              aria-label={appT('placeAlerts.editPlaceAccessibility', {
                name: place.name,
              })}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => setEditing({ ...place })}
            >
              <Icon name="sliders" size={14} />
            </button>
            <button
              className="place-remove"
              disabled={readOnly || busy}
              aria-label={appT('placeAlerts.deletePlace', { name: place.name })}
              title={readOnly ? t('dash.unlockToChange') : undefined}
              onClick={() => write(places.filter(p => p.id !== place.id))}
            >
              <Icon name="trash" size={14} />
            </button>
          </div>
        ),
      )}

      {editing?.id === null && (
        <PlaceRowForm
          draft={editing}
          advisedRadius={advisedRadius}
          busy={busy}
          warning={warning}
          error={error}
          onChange={setEditing}
          onCancel={() => {
            setEditing(null);
            setWarning(null);
            setError(null);
          }}
          onSubmit={() =>
            commitDraft({
              ...editing,
              // A generated id, the shape the phone writes. The server
              // sanitises the list either way.
              id: `web-${Date.now().toString(36)}`,
            })
          }
        />
      )}

      {!editing && (
        <button
          className="btn btn-sm"
          disabled={readOnly || busy || full || !canAdd}
          title={
            readOnly
              ? t('dash.unlockToChange')
              : full
                ? appT('placeAlerts.placesFull', { max: MAX_DEVICE_PLACES })
                : !canAdd
                  ? t('dash.placeNeedsLocation')
                  : undefined
          }
          onClick={() =>
            setEditing({
              id: null,
              name: '',
              latitude: last.latitude,
              longitude: last.longitude,
              radiusMeters: nearestRadiusStep(
                advisedRadius ?? DEFAULT_PLACE_RADIUS_METERS,
              ),
              notifyOnEnter: true,
              notifyOnExit: false,
            })
          }
        >
          {appT('placeAlerts.addPlaceButton')}
        </button>
      )}

      {/* Said once, under the button, because it is the reason the button is
          disabled on a device that has never reported a position — and the
          reason a parent cannot put a place anywhere else. */}
      <p className="hint">{t('dash.placeWebHint')}</p>
    </div>
  );
}

function PlaceRowForm({
  draft,
  advisedRadius,
  busy,
  warning,
  error,
  onChange,
  onCancel,
  onSubmit,
}) {
  const { t } = useT();
  const appT = useActivityTranslate();
  const stepIndex = PLACE_RADIUS_STEPS.indexOf(nearestRadiusStep(draft.radiusMeters));
  const belowAccuracy = advisedRadius != null && draft.radiusMeters < advisedRadius;

  return (
    <form
      className="place-form"
      onSubmit={event => {
        event.preventDefault();
        if (!draft.name.trim() || busy) return;
        onSubmit();
      }}
    >
      <label className="sheet-label" htmlFor="place-name">
        {appT('placeAlerts.nameLabel')}
      </label>
      <input
        id="place-name"
        className="reward-input"
        value={draft.name}
        disabled={busy}
        placeholder={appT('placeAlerts.namePlaceholder')}
        onChange={event => onChange({ ...draft, name: event.target.value })}
      />

      <ul className="chips chips-toggle">
        {PLACE_RADIUS_STEPS.map(step => (
          <li
            key={step}
            className={
              stepIndex >= 0 && PLACE_RADIUS_STEPS[stepIndex] === step ? 'is-on' : ''
            }
          >
            <button
              type="button"
              disabled={busy}
              aria-pressed={PLACE_RADIUS_STEPS[stepIndex] === step}
              onClick={() => onChange({ ...draft, radiusMeters: step })}
            >
              {t('dash.placeRadius', { meters: step })}
            </button>
          </li>
        ))}
      </ul>

      {belowAccuracy && (
        <p className="hint">
          {appT('placeAlerts.radiusBelowAccuracy', {
            accuracy: Math.round(advisedRadius / 2),
            minimum: Math.round(advisedRadius),
          })}
        </p>
      )}

      <label className="reward-repeat">
        <input
          type="checkbox"
          checked={draft.notifyOnEnter}
          disabled={busy}
          onChange={event =>
            onChange({ ...draft, notifyOnEnter: event.target.checked })
          }
        />
        <span>{appT('placeAlerts.notifyEnterLabel')}</span>
      </label>
      <label className="reward-repeat">
        <input
          type="checkbox"
          checked={draft.notifyOnExit}
          disabled={busy}
          onChange={event => onChange({ ...draft, notifyOnExit: event.target.checked })}
        />
        <span>{appT('placeAlerts.notifyExitLabel')}</span>
      </label>

      {!draft.notifyOnEnter && !draft.notifyOnExit && (
        <p className="hint">{appT('placeAlerts.notifyNoneHint')}</p>
      )}

      {warning && <p className="sched-error">{warning.text}</p>}
      {error && <p className="sched-error">{error}</p>}

      <div className="reward-actions">
        <button type="button" className="login-link" onClick={onCancel}>
          {t('dash.close')}
        </button>
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          disabled={!draft.name.trim() || busy}
        >
          {busy ? t('dash.working') : appT('placeAlerts.addButton')}
        </button>
      </div>
    </form>
  );
}
