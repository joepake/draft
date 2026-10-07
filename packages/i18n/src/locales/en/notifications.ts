export const notifications = {
  title: 'Notifications',
  subtitleAllOn: 'All alerts on',
  subtitleMuted_one: '1 alert muted',
  subtitleMuted: '{{count}} alerts muted',
  sosAlwaysOn: 'SOS always comes through, even with everything here off.',
  sectionAlerts: 'Alerts',
  sectionAlertsHint: 'Choose what this phone is notified about.',
  sectionSummary: 'Summary',
  sectionQuietHours: 'Quiet hours',
  sectionQuietHoursHint:
    'Alerts stay silent during this window. SOS is never silenced, and the most serious Message Alerts still come through.',
  quietHoursLabel: 'Quiet hours',
  quietHoursOff: 'Off — alerts arrive at any time',
  quietHoursActive: 'Silent from {{start}} to {{end}}',
  quietHoursStart: 'From',
  quietHoursEnd: 'To',
  footnote:
    'These settings apply to this phone only. Other parent devices keep their own.',
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
      label: 'Protection turned off',
      hint: 'On a child device, a permission KidGate needs was switched off, the date, time or time zone was changed, or SOS was pressed while it was locked. The SOS alert itself always comes through.',
    },
    placeAlerts: {
      label: 'Arrivals and departures',
      hint: 'Your child arrives at or leaves a saved place.',
    },
    timeRequests: {
      label: 'Extra time requests',
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
      label: 'Reward claims',
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
      label: 'Weekly summary',
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
