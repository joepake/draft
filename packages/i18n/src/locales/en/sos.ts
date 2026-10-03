export const sos = {
  title: 'SOS Alerts',
  subtitle: '{{deviceName}} · photos appear below when sent',
  fallbackDeviceName: 'Child device',
  fallbackChildName: 'Child',
  locationUnavailable: 'Location unavailable',
  statusNeedsAttention: 'Needs attention',
  statusAcknowledged: 'Responded',
  viewPhotoAccessibility: 'View SOS photo',
  photoTapHint: 'Tap to view the full photo',
  photoLoadFailed: 'Unable to load this photo. Check your connection and try again.',
  noPhoto: 'No photo attached to this alert.',
  audioLabel: 'Sound recording',
  audioPlayAccessibility: 'Play SOS recording',
  audioStopAccessibility: 'Stop playing SOS recording',
  audioLoadFailed:
    'Unable to play this recording. Check your connection and try again.',
  acknowledgedAt: 'Responded {{time}}',
  openInMaps: 'Open in Maps',
  acknowledgeButton: 'I’m on it',
  acknowledgingButton: 'Saving…',
  toastAcknowledgeFailed: 'Unable to acknowledge. Try again in a moment.',
  emptyTitle: 'No SOS alerts yet',
  emptyDescription:
    'When your child holds SOS for 5 seconds, alerts appear here with a photo and location.',
  alertMessage: '{{childName}} needs help — SOS was sent',
  toastSent:
    'SOS sent. Stay somewhere safe if you can — your parent has been notified.',
  // Shown to the child on a *desktop* only, and only when the SOS lifted a
  // lock. The lock window closes within about a second of the press, so the
  // line above can be gone before it is read — and the child is left with a
  // Mac that simply unlocked, which is the one thing this escape must not
  // teach. Says the two things that line cannot: how long, and what happens
  // after. The phone needs neither; its escape ends when the child leaves the
  // SOS screen, with no lock involved.
  escapeGrantedTitle: 'SOS sent',
  escapeGrantedBody: 'Your parent has been notified. This device stays locked.',
  toastSentWithoutPhoto: 'SOS sent without a photo.',
  // Only when the camera permission is what stopped the photo. "Try again"
  // would mean a second SOS, so the step is for next time.
  toastSentWithoutPhotoCamera:
    'SOS sent without a photo. To add one next time, allow Camera in Settings.',
  toastSendFailed: 'Unable to send the SOS. Try again, or call someone you trust.',
  sendFailedBannerTitle: 'Your last SOS did not go through',
  sendFailedBannerBody:
    'Hold the button again to retry. If it keeps failing, call someone you trust right away.',
  headerTitle: 'Emergency SOS',
  headerSubtitle: 'Use this when you feel unsafe or need help right away.',
  infoInstantAlertLabel: 'Instant alert',
  infoInstantAlertDetail:
    'KidGate sends your parent an urgent notification right away.',
  infoYourLocationLabel: 'Your location',
  infoYourLocationDetail: 'Shared with your parent so they know where you are.',
  infoQuickSelfieLabel: 'A quick photo',
  // The desktop agent's wording: it takes a frame without opening anything.
  infoQuickSelfieDetail:
    'Added after the alert is sent, if the camera is already available.',
  // The phone's: `launchCamera` opens the full-screen camera for the child.
  infoQuickSelfieDetailPhone:
    'After the alert is sent, the camera opens so you can add a photo. You can skip it.',
  infoSoundLabel: 'Up to 15 seconds of sound',
  infoSoundDetail:
    'Recorded from the moment you send it, so your parent can hear what is happening.',
  simulatorTipTitle: 'Simulator tip',
  simulatorTipBody:
    'Turn on Camera in the Simulator menu (Front Camera) before sending SOS so a test photo can be captured.',
  guidanceTitle: 'Before you send',
  guidanceItem1: 'Try to stay somewhere safe while help is on the way.',
  guidanceItem2: 'If you can, also call a trusted adult or emergency services.',
  whatParentsReceive: 'What parents receive',
  holdToSendFiveSeconds: 'Hold to send · 5 seconds',
  keepHolding: 'Keep holding',
  secondsLeft: '{{seconds}}s',
  pressAndHoldToCancel: 'Press and hold — release early to cancel',
  holdToSendSosAccessibility: 'Hold for 5 seconds to send SOS',
  sosEmergencyAccessibility: 'SOS emergency',
  sosEmergencyAlert: 'SOS emergency alert',
  sosAlertSent: 'SOS alert sent',
  sosAlertSentDescription: '{{deviceName}} sent an SOS — they need help.',
  deviceNeedsHelp: '{{deviceName}} needs help',
  tapPhotoToEnlarge: 'Tap the photo to enlarge it',
  noPhotoAttached: 'No photo was attached to this alert.',
  sentRelativeTime: 'Sent {{relativeTime}}',
  imOnIt: 'I’m on it',
  acknowledging: 'Saving…',
  unableToAcknowledgeSos: 'Unable to acknowledge. Try again in a moment.',
  noLocationSharedWithSos: 'No location was shared with this SOS.',
  emergencySos: 'Emergency SOS',
  devicePausedAccessibility: 'Device locked by a parent',
  openEmergencySos: 'Open emergency SOS',
  sosAlertsNote: 'Shows emergency SOS alerts from the child device, with location.',
  openLocationInMapsAccessibility: 'Open location in Maps',
  badgeLabel: 'SOS',
  muteAlarm: 'Silence this alert',
  alertCount: '{{current}} of {{total}}',
  trustedContactsTitle: 'Trusted contacts',
  trustedContactsSubtitle:
    'Emailed with an SOS and its last known location, up to a few alerts an hour',
  trustedContactsRowSubtitle: 'People emailed when your child sends an SOS',
  trustedContactsListSection: 'Who gets the SOS',
  trustedContactsEmpty:
    'No one yet. Add a grandparent, a neighbour or a family friend.',
  trustedContactsAddSection: 'Add a contact',
  trustedContactsAddHint:
    'Up to {{max}}. Tell them first — the email arrives with no warning.',
  trustedContactsNameLabel: 'Name',
  trustedContactsEmailLabel: 'Email',
  trustedContactsAddButton: 'Add contact',
  trustedContactsFull: 'The list is full. Remove one to add another.',
  trustedContactsInvalid: 'Enter a name and a valid email address.',
  trustedContactsSaveFailed: 'Could not save. Try again in a moment.',
  trustedContactsRemoveAccessibility: 'Remove {{name}}',
  trustedContactsPrivacyNote:
    'Each contact receives the device name and the last known location by email. No photo is sent.',
} as const;
