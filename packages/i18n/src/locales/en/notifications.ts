export const notifications = {
  title: 'Notifications',
  subtitleAllOn: 'All alerts on',
  subtitleMuted_one: '1 alert muted',
  subtitleMuted: '{{count}} alerts muted',
  sosAlwaysOn: 'SOS always comes through, even with everything here off.',
  sosFullScreenOff:
    'On this phone an SOS shows as a small banner instead of filling the screen, so it is easier to miss. Allow full-screen alerts to fix this.',
  sosFullScreenAllow: 'Allow full-screen alerts',
  sectionAlerts: 'Alerts',
  sectionAlertsHint: 'Choose which alerts are sent to a parent phone.',
  sectionSummary: 'Summary',
  sectionQuietHours: 'Quiet hours',
  sectionQuietHoursHint:
    'No alerts are sent during this window, and none are sent afterwards. Events still appear in Activities. SOS is never held back, and the most serious Message Alerts still come through.',
  quietHoursLabel: 'Quiet hours',
  quietHoursOff: 'Off — alerts arrive at any time',
  quietHoursActive: 'No alerts sent from {{start}} to {{end}}',
  quietHoursStart: 'From',
  quietHoursEnd: 'To',
  quietHoursSameTime: 'Choose two different times.',
  footnote:
    'These settings apply to one phone only. Other parent devices keep their own.',
  toastSaveFailed: 'Unable to save. Try again.',
  // Reminders the parent’s phone schedules for itself (`hooks/useLocalReminders`,
  // `@kidgate/core/domain/localReminders`). The setup reminder’s body is
  // `family.emptyDescription`.
  localReminderSetupTitle: 'Finish setting up KidGate',
  localReminderIdleTitle: 'Your rules keep working',
  localReminderIdleBody:
    'It’s been a week since you opened KidGate. See today’s screen time and what was blocked.',
  localReminderDormancyTitle: 'Devices may stop reporting',
  localReminderDormancyBody:
    'If no one opens KidGate for {{days}} days, your child’s devices stop reporting until someone opens it again. Your rules keep working.',
  alert: {
    tamperAlerts: {
      label: 'Protection Alerts',
      hint: 'On a child device, a permission KidGate needs was switched off, the date, time or time zone was changed, or SOS was pressed while it was locked. The SOS alert itself always comes through.',
    },
    placeAlerts: {
      label: 'Place Alerts',
      hint: 'Your child arrives at or leaves a saved place.',
    },
    timeRequests: {
      label: 'Time Requests',
      hint: 'Your child asks for more screen time.',
    },
    siteRequests: {
      label: 'Site requests',
      hint: 'Your child asks to open a blocked site.',
    },
    checkIn: {
      label: 'Check-In answers',
      hint: 'Your child replies to a safety Check-In.',
    },
    rewardTasks: {
      label: 'Reward Tasks',
      hint: 'Your child marks a reward task as done.',
    },
    appActivity: {
      label: 'Apps installed or removed',
      hint: 'An app appears or disappears on a child device.',
    },
    anomalyAlerts: {
      label: 'Unusual activity',
      hint: 'Out-of-pattern use on a child device — late nights, spikes, new apps.',
    },
    weeklyDigest: {
      label: 'Weekly report',
      hint: 'A Monday recap of screen time and blocks.',
    },
    messageAlerts: {
      label: 'Message Alerts',
      hint: 'Concerning words appear in your child’s messages or searches.',
    },
    billing: {
      label: 'Premium reminders',
      hint: 'Reminders to subscribe after your trial ends. Notices that your trial or Premium is ending always come through.',
    },
  },
};
