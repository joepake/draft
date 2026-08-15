export const checkIn = {
  noPhotoBadge: 'Photo was skipped',
  historyTitle: 'Check-In History',
  historyHint:
    'Tap a photo to enlarge it. You can request a new Check-In above at any time.',
  historyEmpty: 'No Check-Ins yet.',
  screenTitle: 'Check-In',
  statusSafe: 'Safe',
  statusNoResponse: 'No response',
  statusWaiting: 'Waiting',
  metaWaitingForLocationAndPhoto: 'Waiting for location and photo',
  metaNoLocation: 'No location attached',
  viewPhotoAccessibility: 'View Check-In photo',
  responseMessage: 'I’m safe.',
  toastSuccess: 'Thank you. Your parent knows you are safe.',
  toastFailed: 'Unable to send your Check-In. Try again.',
  quickCheckInBadge: 'Check-In',
  areYouOkay: 'Are you okay?',
  checkInWithPhotoBody:
    'Your parent would like to know you are okay. KidGate will send your location and a photo if possible.',
  checkInLocationOnlyBody:
    'Your parent would like to know you are safe. KidGate will send your location if possible.',
  yesImOkay: 'I’m okay',
  yesImOkaySending: 'Sending…',
  iNeedHelp: 'I need help',
  checkInRequested: 'Check-In requested',
  checkInRequestedDescription:
    'Asked {{deviceName}} to confirm they are safe, with location and photo.',
  checkInRequestedDescriptionLocation:
    'Asked {{deviceName}} to confirm they are safe, with location.',
  checkInConfirmed: 'Check-In confirmed',
  checkInConfirmedDescription: '{{deviceName}} confirmed they are safe.',
  childDeviceFallback: 'Child device',
  requestCheckIn: 'Request Check-In',
  requestCheckInNote:
    'Asks the child device for its location and a front-camera photo.',
  needHelpOpenSosAccessibility: 'I need help — open SOS',
  parentSafePopupTitle: 'Your child is safe',
  childSafePopupTitle: 'Parents notified',
  childSafePopupBody: 'Your parents received the message — you are okay.',
  confirmedKicker: 'Check-In',
} as const;
