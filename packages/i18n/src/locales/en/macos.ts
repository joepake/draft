/**
 * The macOS agent's own window.
 *
 * Parent register: calm, factual, no reassurance the platform cannot back up.
 * Most of this namespace exists to say what a Mac *cannot* do, because the
 * capability model reports it honestly and the screen has to as well — see
 * `docs/COPY_STYLE.md` on not dressing up a limitation.
 *
 * The child-facing lock copy is deliberately NOT here: it already exists under
 * `child.*` for the phone screens, and the Mac reuses those keys so the lock
 * screen ships translated into all fourteen languages on day one.
 */
export const macos = {
  headingNow: 'Right now',
  headingEnforce: 'What this Mac can enforce',
  headingEnforceHint: 'What your parent set, and how strongly this Mac can hold it.',
  headingRemovable: 'How removable this is',

  parentAccessBody:
    'Enter the Parent PIN to choose which apps are blocked on this Mac.',
  checking: 'Checking…',

  enforcing: 'Protection running',
  enforcingYes: 'Yes',
  enforcingFailed: 'No — {{count}} checks in a row failed',
  enforcingFailed_one: 'No — the last check failed',

  lockState: 'Device locked',
  lockStateNo: 'No',
  lockStateNotChecked: 'Not checked yet',
  lockStateParent: 'Yes — locked by a parent',
  lockStateSchedule: 'Yes — Blocked Hours',
  lockStateDailyLimit: 'Yes — Daily Limit reached',

  appBlocking: 'App blocking',
  appBlockingBestEffort: 'Best effort — apps are closed after they open, not stopped',

  webFilterLabel: 'Web filtering',
  webFilterUnavailable: 'Not available on this Mac',
  /*
   * The state of a rule this platform cannot hold at all, said on the rule's own
   * row. The child's status screen is the phone's screen — it has no section for
   * platform caveats — so the caveat belongs beside the rule it is about.
   *
   * "This device" rather than "this Mac": the same string renders on Windows.
   */
  notSupportedOnThisDevice: 'Not supported on this device',

  scheduleLabel: 'Blocked Hours',
  dailyLimitLabel: 'Daily Limit',
  enforcedHere: 'On, enforced by KidGate',

  screenTimeLabel: 'Screen Time',
  screenTimeAgentMeasured:
    'Counted by KidGate. Time while KidGate is not running is not counted.',

  batteryLabel: 'Battery',
  batteryReported: 'Reported to the family',
  batteryNone: 'This Mac has no battery',

  locationLabel: 'Location',
  locationOff: 'Off',
  locationCoarse: 'Approximate — from Wi-Fi, not GPS',

  accountLabel: 'Child account',
  accountStandard: 'Standard',
  accountAdmin: 'Administrator — this account can turn KidGate off completely',

  restartLabel: 'Restarts if closed',
  restartYes: 'Yes',
  restartNo: 'No — setup is not finished',

  forceQuitLabel: 'Times KidGate was closed',

  /*
   * Starting with the OS. A desktop-only section with no counterpart on the
   * phone, where an app that is not running is the normal state and a push
   * wakes it. Here the agent measures nothing and blocks nothing while it is
   * closed, so the copy says that rather than promising protection.
   *
   * "This device" rather than "this Mac" — the same strings render on Windows.
   */
  startAtLoginSectionTitle: 'Startup',
  startAtLoginSectionDescription:
    'KidGate measures screen time and applies rules only while it is running.',
  startAtLoginLabel: 'Start KidGate at login',
  startAtLoginHintOn: 'KidGate starts with this device and reopens if it is closed.',
  startAtLoginHintOff:
    'Nothing is measured or blocked until someone opens KidGate again.',
  /*
   * The install was asked for and the OS still reports no job — a read-only
   * home directory, a `launchctl` that refused. Rare, and the row prints it
   * rather than letting the switch flip back with no explanation.
   */
  startAtLoginUnavailable: 'This device would not let KidGate add itself to startup.',

  /*
   * The first time the window is closed, as a notification.
   *
   * Closing hides the window and the agent keeps running, which is the whole
   * point and is invisible: a window that vanishes with nothing said reads as
   * an app that quit. Said once per install, because a notification on every
   * close is one a child learns to swipe away.
   *
   * Two bodies rather than one word swapped in. "Menu bar" and "notification
   * area" are what each OS calls that strip, and a Mac told to look in the
   * notification area is being sent somewhere that does not exist. Neither
   * says "tray": Microsoft has not used that name in its own UI for years, and
   * Apple never did.
   */
  stillRunningTitle: 'KidGate is still running',
  stillRunningBodyMac: 'Open it again from the KidGate icon in the menu bar.',
  stillRunningBodyWindows:
    'Open it again from the KidGate icon in the notification area.',

  /*
   * A newer build has been published. The desktop's whole update channel — the
   * agent has no updater and no OTA, so this is a notice with a link to a
   * download page and nothing else happens without a person acting on it.
   *
   * Parent register even though a child may be the one reading it: it is a
   * statement about the software, not an instruction to the child, and there is
   * nothing here for a child to do wrong. No urgency and no "must" — an update
   * that cannot be installed by whoever is at this keyboard must not sound like
   * a warning. "This device" rather than "this Mac"; the same string renders on
   * Windows.
   */
  updateAvailableTitle: 'A newer KidGate is available',
  updateAvailableBody: 'KidGate {{version}} is ready to download.',
  updateAction: 'Get the update',

  /*
   * The app picker. macOS is the only platform with one of its own: iOS hands
   * the job to Apple's FamilyActivityPicker and Android to a launcher list, so
   * neither needed these words. Everything else on that screen reuses
   * `blockedApps.*`, `pin.*` and `common.*`.
   */
  chooseApps: 'Choose apps to block',
  chooseAppsHint:
    'Pick the apps to block on this Mac. A parent can turn blocking on and off from their phone.',
  saveSelection: 'Save',
  noAppsFound: 'No apps found in the Applications folder.',
};
