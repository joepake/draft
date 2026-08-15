export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate on the web',
  title: 'Allow a browser',
  subtitle: 'Manage the family from a computer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: 'A browser can only reach your family after you allow it from this phone.',
  stepsTitle: 'On your computer',
  step1: 'Open {{url}} in a browser.',
  step2: 'Choose “Sign in with the KidGate app”.',
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
    'It will get the same control as this phone: it can see where your children are, change limits, lock devices and approve requests. Only allow it if you are the one signing in.',
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

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Allowed browsers',
  sessionsEmpty: 'No browser is signed in to your account.',
  sessionsRevoke: 'Sign out',
  sessionExpires: 'Expires {{when}}',
  revokedToast: 'That browser has been signed out.',
} as const;
