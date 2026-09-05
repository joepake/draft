import { useEffect, useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { supportsMessageMonitoring } from '@kidgate/core/domain/alertSupport';
import { termGlossFor } from '@kidgate/core/domain/messageAlertGloss';
import { resolveMessageMonitoringNotice } from '@kidgate/core/domain/messageMonitoringStatus';
import {
  isMessageAlertCategory,
  MESSAGE_ALERT_SEVERITY,
} from '@kidgate/schema/messageAlert';
import { useT } from '@kidgate/web-ui/useT';
import { useActivityTranslate } from './activityCopy.js';
import { timeAgo } from './timeAgo.js';
import Toggle from './Toggle.jsx';

/**
 * Message Alerts on the web — the notice, the switches, the alerts and what the
 * AI tier cleared.
 *
 * **Every sentence comes from the app key space through `appT`.** The phone has
 * said all of them in fourteen languages since the feature shipped; a `dash.*`
 * twin would be one sentence in two packs, and only one of them gets edited
 * next time (`.claude/rules/i18n.md`). That is why `messageMonitoring` joined
 * `activityFeed`'s namespaces rather than being copied into `src/web/locales`.
 *
 * **Nothing here decides anything.** Whether to warn is
 * `resolveMessageMonitoringNotice`, severity is `MESSAGE_ALERT_SEVERITY`, the
 * gloss is `termGlossFor` — the same three the phone calls. Until this card the
 * dashboard was the surface where `revoked` stayed silent: the switch on the
 * child's phone still reads on, Android has dropped the consent behind it, and
 * an empty feed looks exactly like a quiet week.
 *
 * **What it deliberately does not carry**, both in `docs/BACKLOG.md`: the AI
 * consent card (consent is a decision, not a rendering — the phone asks for it
 * in two steps and the web needs its own look at that) and the fourteen-chip
 * keyword-language picker.
 */

/** The phone's caps, so the two surfaces truncate the same feed the same way. */
const MAX_ALERTS = 30;
const MAX_CHECKED = 10;

/** `high` is a row a parent must not scroll past; `low` gets no colour at all. */
function severityTone(category) {
  if (!isMessageAlertCategory(category)) {
    return 'warning';
  }
  const severity = MESSAGE_ALERT_SEVERITY[category];
  if (severity === 'high') return 'critical';
  if (severity === 'medium') return 'warning';
  return '';
}

function noticeTone(kind) {
  if (kind === 'revoked') return 'critical';
  if (kind === 'off') return 'warning';
  return '';
}

export default function MessageAlertsCard({
  device,
  activities = [],
  readOnly,
  actions,
  run,
  busy,
}) {
  const { language } = useT();
  const appT = useActivityTranslate();
  const live = Boolean(actions);
  const controls = device.controls ?? {};
  const supported = supportsMessageMonitoring(device);

  const notice = useMemo(
    () => (supported ? resolveMessageMonitoringNotice([device]) : null),
    [device, supported],
  );

  const alerts = useMemo(
    () => activities.filter(a => a.type === 'message_alert').slice(0, MAX_ALERTS),
    [activities],
  );
  /*
   * Kept out of the alert list entirely, as on the phone. These are the rows
   * that answer "what is being thrown away on my behalf" — and they are also
   * where a keyword misfiring at scale shows up, so mixing them in is how the
   * alert list stops being read.
   */
  const checked = useMemo(
    () => activities.filter(a => a.type === 'message_checked').slice(0, MAX_CHECKED),
    [activities],
  );

  /** Which alert has its advice open, by activity id — one at a time. */
  const [guidanceFor, setGuidanceFor] = useState(null);

  /*
   * The document is the truth; this is only what the parent sees while a write
   * is in the air, re-synced whenever the device document changes so a switch
   * the other parent flips on their phone moves here too. Same shape as
   * `ControlsTab`.
   */
  const [state, setState] = useState({
    incoming: controls.messageMonitoringEnabled === true,
    outgoing: controls.messageMonitoringOutgoingEnabled === true,
    profanity: controls.messageProfanityEnabled === true,
  });
  useEffect(() => {
    setState({
      incoming: controls.messageMonitoringEnabled === true,
      outgoing: controls.messageMonitoringOutgoingEnabled === true,
      profanity: controls.messageProfanityEnabled === true,
    });
  }, [
    controls.messageMonitoringEnabled,
    controls.messageMonitoringOutgoingEnabled,
    controls.messageProfanityEnabled,
  ]);

  /*
   * Per-device, never `updateChildRules`: none of these three is in
   * `CHILD_RULE_KEYS`, and the OS consent they depend on
   * (`Device.messageMonitoring.*.granted`) is granted one phone at a time, so a
   * write fanned out to a child's siblings would claim a grant the other
   * devices may not hold.
   */
  const set = (key, field) => async next => {
    setState(s => ({ ...s, [key]: next }));
    if (!live || readOnly) {
      return;
    }
    const ok = await run(`msg-${key}`, () =>
      actions.updateControls(device.id, { [field]: next }),
    );
    if (!ok) {
      // Back to what the document says rather than to `!next` — the two agree
      // for a plain switch, and only one of them is still right if the listener
      // delivered someone else's change while this was in flight.
      setState(s => ({ ...s, [key]: controls[field] === true }));
    }
  };

  if (!supported) {
    /*
     * An iPhone, a Mac, a television. `messageMonitoring: false` is permanent on
     * iOS — no listener API exists — so this says so once and renders no
     * switches rather than offering a control that can never take effect.
     */
    return <p className="empty">{appT('messageMonitoring.androidOnlyNote')}</p>;
  }

  const rows = [
    {
      key: 'incoming',
      field: 'messageMonitoringEnabled',
      title: appT('messageMonitoring.parentIncomingLabel'),
      desc: device.messageMonitoring?.incoming?.granted
        ? appT('messageMonitoring.parentToggleHintGranted')
        : appT('messageMonitoring.parentToggleHintNotGranted'),
    },
    {
      key: 'outgoing',
      field: 'messageMonitoringOutgoingEnabled',
      title: appT('messageMonitoring.parentOutgoingLabel'),
      desc: device.messageMonitoring?.outgoing?.granted
        ? appT('messageMonitoring.parentToggleHintGranted')
        : appT('messageMonitoring.parentToggleHintNotGranted'),
    },
    {
      key: 'profanity',
      field: 'messageProfanityEnabled',
      title: appT('messageMonitoring.parentProfanityLabel'),
      desc: appT('messageMonitoring.parentProfanityHint'),
    },
  ];

  return (
    <div className="msg-alerts">
      {notice && (
        <ul className="attn">
          <li
            className={
              noticeTone(notice.kind) ? `tone-${noticeTone(notice.kind)}` : undefined
            }
          >
            <span className="attn-icon">
              <Icon
                name={notice.kind === 'outgoingAvailable' ? 'message' : 'alert'}
                size={16}
              />
            </span>
            <span className="attn-body">
              <strong>{appT(notice.titleKey)}</strong>
              <em>{appT(notice.bodyKey)}</em>
            </span>
            {/* Which half stopped, when only one did — badged with the same two
                words the alert rows use, so a parent is not asked to learn a
                second vocabulary for the same distinction. */}
            {notice.kind === 'revoked' && (
              <p className="attn-fix">
                {notice.halves
                  .map(half =>
                    appT(
                      half === 'outgoing'
                        ? 'messageMonitoring.directionOutgoing'
                        : 'messageMonitoring.directionIncoming',
                    ),
                  )
                  .join(' · ')}
              </p>
            )}
          </li>
        </ul>
      )}

      <ul className="ctrl-rows">
        {rows.map(row => (
          <li key={row.key}>
            <span className="ctrl-body">
              <strong>{row.title}</strong>
              <em>{row.desc}</em>
            </span>
            <Toggle
              on={state[row.key]}
              onChange={set(row.key, row.field)}
              label={row.title}
              // Its own write, not any write: these are three independent
              // fields on one document and a parent may flip two in a row.
              disabled={readOnly || busy === `msg-${row.key}`}
            />
          </li>
        ))}
      </ul>

      {alerts.length === 0 ? (
        /*
         * Which empty this is has already been answered above: with a notice on
         * screen the list is empty because nothing was watching, and without one
         * it is empty because nothing was found. Two sentences for the two
         * cases, because they mean opposite things.
         */
        <p className="empty">
          {appT(
            notice && notice.kind !== 'outgoingAvailable'
              ? 'messageMonitoring.emptySubtitleNotWatching'
              : 'messageMonitoring.emptySubtitle',
          )}
        </p>
      ) : (
        <ul className="attn">
          {alerts.map(alert => {
            const params = alert.params ?? {};
            const category = typeof params.category === 'string' ? params.category : '';
            const term = typeof params.term === 'string' ? params.term.trim() : '';
            const gloss = termGlossFor(params, language);
            const appName =
              typeof params.appName === 'string' && params.appName.trim()
                ? params.appName.trim()
                : '';
            const direction =
              params.direction === 'outgoing'
                ? 'directionOutgoing'
                : params.direction === 'search'
                  ? 'directionSearch'
                  : 'directionIncoming';
            // Set only once Gemini has read the masked text and confirmed the
            // risk — never by the keyword path, which is most of them.
            const aiConfirmed = params.source === 'ai';
            const tone = severityTone(category);
            const guidanceKey = `messageMonitoring.guidance.${
              isMessageAlertCategory(category) ? category : 'unknown'
            }`;
            const guidance = appT(guidanceKey);
            // `appT` returns the key itself for anything it cannot resolve, so
            // a category the pack has no line for renders no advice rather than
            // printing the key. The key is built, so `yarn i18n:missing` cannot
            // see this one.
            const advice = guidance === guidanceKey ? '' : guidance;
            const open = guidanceFor === alert.id;
            // When the device saw it, not when the server heard about it: the
            // two are the same second on a connected phone and hours apart for
            // an alert that waited in the device's offline queue.
            const seenAt =
              typeof params.detectedAt === 'string' && params.detectedAt
                ? params.detectedAt
                : alert.createdAt;

            return (
              <li key={alert.id} className={tone ? `tone-${tone}` : undefined}>
                <span className="attn-icon">
                  <Icon name="message" size={16} />
                </span>
                <span className="attn-body">
                  <strong>
                    {appT(
                      isMessageAlertCategory(category)
                        ? `messageMonitoring.category${category.charAt(0).toUpperCase()}${category.slice(1)}`
                        : 'messageMonitoring.categoryUnknown',
                    )}
                    {aiConfirmed && (
                      <>
                        {' '}
                        <Icon
                          name="sparkles"
                          size={13}
                          title={appT('messageMonitoring.aiConfirmed')}
                        />
                      </>
                    )}
                  </strong>
                  {term && <em>{appT('messageMonitoring.flaggedTerm', { term })}</em>}
                  {gloss && (
                    <em>{appT('messageMonitoring.flaggedTermMeaning', { gloss })}</em>
                  )}
                  <em>
                    {appName
                      ? `${appT(
                          direction === 'directionSearch'
                            ? 'messageMonitoring.alertBodySearch'
                            : direction === 'directionOutgoing'
                              ? 'messageMonitoring.alertBodyOutgoing'
                              : 'messageMonitoring.alertBodyIncoming',
                        )} ${appName}`
                      : appT(`messageMonitoring.${direction}`)}
                  </em>
                </span>
                <time>{timeAgo(seenAt)}</time>
                {advice && (
                  <button
                    className="login-link"
                    aria-expanded={open}
                    onClick={() =>
                      setGuidanceFor(current =>
                        current === alert.id ? null : alert.id,
                      )
                    }
                  >
                    {appT(
                      open
                        ? 'messageMonitoring.guidanceHide'
                        : 'messageMonitoring.guidanceToggle',
                    )}
                  </button>
                )}
                {advice && open && (
                  <p className="attn-fix">
                    {advice}
                    <span className="msg-guide-foot">
                      {appT('messageMonitoring.guidanceFooter')}
                    </span>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {checked.length > 0 && (
        <>
          <p className="hint">{appT('messageMonitoring.checkedSubtitle')}</p>
          <ul className="events">
            {checked.map(row => {
              const params = row.params ?? {};
              const term = typeof params.term === 'string' ? params.term.trim() : '';
              const category =
                typeof params.category === 'string' ? params.category : '';
              return (
                <li key={row.id}>
                  <span className="ev-state tone-muted">
                    <Icon name="check" size={13} />
                  </span>
                  <span className="ev-body">
                    <strong>
                      {appT(
                        isMessageAlertCategory(category)
                          ? `messageMonitoring.category${category.charAt(0).toUpperCase()}${category.slice(1)}`
                          : 'messageMonitoring.categoryUnknown',
                      )}
                    </strong>
                    {term && <em>{appT('messageMonitoring.flaggedTerm', { term })}</em>}
                  </span>
                  <time>{timeAgo(row.createdAt)}</time>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
