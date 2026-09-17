import { useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { isBrowserOnlySurface } from '@kidgate/core/domain/deviceSurface';
import { platformLabelKey } from '@kidgate/core/domain/deviceFormFactor';
import { resolveDisplayFormFactor } from '@kidgate/core/domain/deviceFormFactor';
import {
  defaultShowsAllControls,
  getVisibleActionSections,
  getVisibleActionSectionsForDevices,
  isActionSupported,
  isActionSupportedByAnyDevice,
} from '@kidgate/core/domain/deviceDetailActions';
import { resolveControlCardStatus } from '@kidgate/core/domain/deviceControlState';

/**
 * The control centre — the phone's grid, drawn in a browser.
 *
 * **Nothing about which cards exist is decided here.** The sections, their
 * order, their copy, their icons and the rule that greys one out all come from
 * `@kidgate/core/domain/deviceDetailActions`, which is
 * `apps/mobile/src/features/deviceDetail/deviceDetailConfig.ts` moved up so
 * both consoles read one list. A component that assembled its own is how a
 * browser extension came to be offered a daily limit on the phone, and it is
 * the same mistake either surface can make alone.
 *
 * What IS this file's: the two-column grid, the struck-out card, and where a
 * click lands.
 *
 * ## Two modes, one grid
 *
 * Given a `device`, a card is lit when that machine can do it. Given `devices`
 * — the child hub — a card is lit when ANY of the child's can, which is the
 * rule `docs/CHILD_HUB.md` states and `isActionSupportedByAnyDevice` holds.
 *
 * ## What each card says it is set to
 *
 * `facts` is this surface's fold of the documents; the STATE read off it is
 * `@kidgate/core/domain/deviceControlState`, shared with the phone. Until that
 * existed these cards showed the feature's description and nothing about the
 * machine, so a parent in a browser could not tell a two-hour daily limit from
 * no limit at all.
 *
 * Absent `facts`, or an action the resolver has no state for, falls back to
 * exactly that description — which is what both consoles showed before.
 */

/**
 * Which screen a card opens — one of the four pushed panels, or one of the
 * device's own three tabs.
 *
 * This mapping is the web's own and belongs nowhere else: the phone pushes a
 * screen per action, and this surface divides the same material up. Anything
 * absent falls to Overview rather than doing nothing — a card that does not
 * respond is worse than one that lands a panel away.
 */
const ACTION_TAB = {
  'daily-limit': 'screen',
  schedule: 'screen',
  'app-blocking': 'apps',
  'app-limits': 'apps',
  'reward-tasks': 'controls',
  /* Safety, where the check-in HISTORY is. It pointed at Overview, which holds
     no check-in card at all — and the header's Check in button is on every
     tab, so landing there answered nothing the parent could not already do. */
  'request-check-in': 'safety',
  'web-filter': 'controls',
  /* The web half of the old "Apps & Web" panel, its own since 2026-09-17.
     `web-filter` stays on Controls — that one is a rule being SET, and it
     belongs with the other rules rather than with the history it produces. */
  'web-history': 'web',
  'video-history': 'web',
  location: 'safety',
  'sos-alerts': 'safety',
  /* Safety, where the Protection alerts card is — the card this action owns in
     the approved allocation (`apps/dashboard/CLAUDE.md`). It pointed at Log
     for a while, which showed the raw timeline rather than the card that folds
     those rows into alerts. */
  'tamper-alerts': 'safety',
  'place-alerts': 'safety',
  apps: 'apps',
  'message-alerts': 'safety',
};

export default function ControlCenter({
  device = null,
  devices = null,
  facts = null,
  appT,
  canUsePremiumControls = true,
  onOpen,
}) {
  const { t } = useT();

  /*
   * Seeded from the device's own default and then owned by the parent, per
   * visit — the same shape the phone's header switch has. A surface that hides
   * what it cannot do opens narrow; everything else opens wide, because "Not
   * available on iPhone" teaches a parent something about their phone while a
   * row that silently vanished reads as a feature KidGate lost.
   */
  const [showAll, setShowAll] = useState(
    device ? defaultShowsAllControls(device) : true,
  );

  const sections = useMemo(
    () =>
      devices
        ? getVisibleActionSectionsForDevices(
            appT,
            devices,
            showAll,
            canUsePremiumControls,
          )
        : getVisibleActionSections(appT, device, showAll, canUsePremiumControls),
    [devices, device, appT, showAll, canUsePremiumControls],
  );

  const supported = action =>
    devices
      ? isActionSupportedByAnyDevice(action, devices)
      : isActionSupported(action, device);

  /*
   * What a struck-out card says, and it is not one sentence.
   *
   * On the child hub the honest statement is about the SET — none of their
   * machines can. On one device it is about that machine, and the phone words
   * it by platform, with one exception `useDeviceDetailScreen` already
   * carries: the extension on a Mac is a `platform: 'macos'` row, so "Not
   * available on Mac" would be false about the machine — the desktop agent
   * beside it caps the day fine, only the surface cannot. `isBrowserOnlySurface`
   * is the same test the eye button is seeded from, so the two always agree.
   */
  const unavailableLabel = devices
    ? appT('family.childDetailNotAvailableReason')
    : isBrowserOnlySurface(device)
      ? appT('deviceDetail.notAvailableInExtension')
      : appT('deviceDetail.notAvailableOnPlatform', {
          platform: appT(
            platformLabelKey(device?.platform, resolveDisplayFormFactor(device ?? {})),
          ),
        });

  return (
    <section className="card control-center">
      {/* The glyph names the ACTION, not the state — `eye` reveals, `eyeOff`
          hides. No label: the effect is the grid itself growing or shrinking,
          in view at the moment of the click. */}
      <button
        className="control-filter"
        aria-label={appT(
          showAll
            ? 'deviceDetail.showAvailableFeatures'
            : 'deviceDetail.showAllFeatures',
        )}
        title={appT(
          showAll
            ? 'deviceDetail.showAvailableFeatures'
            : 'deviceDetail.showAllFeatures',
        )}
        onClick={() => setShowAll(current => !current)}
      >
        <Icon name={showAll ? 'eyeOff' : 'eye'} size={16} />
      </button>

      {sections.map(section => (
        <div className="control-section" key={section.title}>
          <h3 className="control-section-title">{section.title}</h3>
          <p className="control-section-sub">{section.subtitle}</p>
          <div className="control-grid">
            {section.actions.map(action => {
              const can = supported(action);
              /* Only for a card that is lit. A machine that cannot carry the
                 feature has no state to report, and "Off" over a struck-out
                 card reads as a switch somebody forgot rather than as a thing
                 this device never had. */
              const status =
                can && facts ? resolveControlCardStatus(action.id, facts) : null;
              return (
                <button
                  key={action.id}
                  /* The state's tone on the card as well as on the figure, so
                     the glyph can carry it too — a parent scanning twelve
                     cards for the one asking something should not have to read
                     twelve numbers first. Written out rather than left to
                     `:has()`: the tone is then visible in the DOM, which is
                     where anyone debugging this looks. */
                  className={`control-card${can ? '' : ' is-muted'}${
                    status ? ` tone-${status.tone}` : ''
                  }`}
                  /* A card this device cannot carry is readable and inert: the
                     copy on it is the point — it says what the feature is and,
                     by being struck out, that this machine is not where it
                     happens. Clicking through to a panel that would be empty
                     teaches the opposite. */
                  disabled={!can}
                  onClick={() => onOpen(ACTION_TAB[action.id] ?? 'overview', action)}
                >
                  <span className="control-card-icon">
                    <Icon name={action.icon} size={18} />
                  </span>
                  <strong>{action.title}</strong>
                  {status && (
                    <span className={`control-card-state tone-${status.tone}`}>
                      <b>
                        {status.count !== null
                          ? /* A floor, not a total — see `countCapped`. */
                            `${status.count}${status.countCapped ? '+' : ''}`
                          : appT(status.valueKey)}
                      </b>
                      {status.unitKey && (
                        <i>{appT(status.unitKey, { count: status.count ?? 0 })}</i>
                      )}
                    </span>
                  )}
                  <em>{can ? action.description : unavailableLabel}</em>
                  {status && (
                    <span className="control-card-cta">
                      {appT(status.actionLabelKey)}
                      <Icon name="chevronRight" size={12} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {sections.length === 0 && <p className="empty">{t('dash.noDeviceBody')}</p>}
    </section>
  );
}
