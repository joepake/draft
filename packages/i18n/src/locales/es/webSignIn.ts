export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate en la web',
  title: 'Autorizar un navegador',
  subtitle: 'Gestiona la familia desde un ordenador',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Un navegador solo puede ver a tu familia si lo autorizas desde este teléfono.',
  stepsTitle: 'En tu ordenador',
  step1: 'Abre {{url}} en un navegador.',
  step2: 'Elige «Iniciar sesión con la app de KidGate».',
  step3: 'Escanea el código que aparece con la cámara de abajo.',
  scanHint: 'Mantén el código QR dentro del marco.',
  manualTitle: 'Introduce el código de 6 caracteres',
  manualHint: 'El código aparece debajo del código QR en tu ordenador.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Continuar',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: '¿Autorizar este navegador?',
  confirmBody:
    'Tendrá el mismo control que este teléfono: podrá ver dónde están tus hijos, cambiar límites, bloquear dispositivos y aprobar solicitudes. Autorízalo solo si eres tú quien inicia sesión.',
  confirmCodeLabel: 'Código de tu ordenador',
  approveButton: 'Autorizar',
  declineButton: 'No autorizar',
  declinedToast: 'Navegador no autorizado.',
  approvedTitle: 'Navegador autorizado',
  approvedBody: 'Tu ordenador está iniciando sesión. Ya puedes dejar el teléfono.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Ese código QR no es de inicio de sesión web. Comprueba que el ordenador muestre la pantalla de inicio de sesión.',
  expired: 'Ese código ha caducado. Muestra uno nuevo en tu ordenador.',
  alreadyUsed: 'Ese código ya se ha usado. Muestra uno nuevo en tu ordenador.',
  notFound: 'Ese código no es válido. Revisa los seis caracteres e inténtalo de nuevo.',
  failed: 'No se pudo completar la solicitud. Inténtalo de nuevo.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Navegadores autorizados',
  sessionsEmpty: 'No hay ningún navegador con sesión iniciada en tu cuenta.',
  sessionsRevoke: 'Cerrar sesión',
  sessionExpires: 'Caduca {{when}}',
  revokedToast: 'Se cerró la sesión de ese navegador.',
} as const;
