export const webSignIn = {
  title: 'Sign in on the web',
  subtitle: 'Manage the family from a computer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: 'A browser can only reach your family after you allow it from this phone.',
  stepsTitle: 'On your computer',
  step1: 'Open {{url}} in a browser.',
  step2: 'Wait for the sign-in page to show a QR code.',
  step3: 'Scan the code it shows with the camera below.',
  scanHint: 'Keep the QR code inside the frame.',
  manualTitle: 'Enter the 6-character code',
  manualHint: 'The code is printed under the QR code on your computer.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Continue',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Allow this browser?',
  confirmBody:
    'It will get the same control as this phone: it can see where your children are, change limits, lock devices and approve requests. It can make changes for 7 days, and you can remove it any time in Family → Parents. Only allow it if you are the one signing in.',
  confirmCodeLabel: 'Code from your computer',
  approveButton: 'Allow',
  declineButton: 'Don’t allow',
  declinedToast: 'Browser not allowed.',
  approvedTitle: 'Browser allowed',
  approvedBody: 'Your computer is signing in now. You can put the phone down.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'That QR code is not a web sign-in code. Check that your computer is showing the sign-in screen.',
  expired: 'That code has expired. Show a new one on your computer.',
  alreadyUsed: 'That code has already been used. Show a new one on your computer.',
  notFound: 'That code is not valid. Check the six characters and try again.',
  failed: 'Unable to complete the request. Try again.',

  // Browsers list, Family → Parents and the dashboard's Parents area. Removing
  // a browser ends its right to change things; it does not sign it out, and
  // the confirmation says so rather than promising more.
  // `{{browser}}` and `{{os}}` are brand names from `webSessionLabel`, never
  // translated; `sessionRowUnknown` is for a user-agent that names no browser.
  sessionsTitle: 'Browsers that can make changes',
  sessionsHint:
    'These browsers are signed in to the web dashboard with your account and can make changes. A browser that only views your family is not listed.',
  sessionsEmpty: 'No browsers can make changes. When you allow one, it appears here.',
  sessionRow: '{{browser}} on {{os}}',
  sessionRowUnknown: 'Web browser',
  sessionExpires: 'Can make changes until {{date}}',
  sessionViaQr: 'Allowed with a QR code',
  sessionViaPin: 'Allowed with the Parent PIN',
  thisBrowser: 'This browser',
  sessionsRevoke: 'Remove',
  sessionsRevokeConfirmTitle: 'Remove this browser?',
  sessionsRevokeConfirmBody:
    'It can no longer change settings or control devices. Until the date shown, it can still change a few device details, such as a name. It may still show your family’s information until someone signs out there.',
  revokedToast: 'Browser removed.',
  revokeFailed: 'Unable to remove that browser. Try again.',
} as const;
