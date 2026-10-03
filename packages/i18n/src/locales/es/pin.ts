export const pin = {
  title: 'PIN parental',
  subtitleSet: 'Toca para cambiar tu PIN de 6 dígitos',
  subtitleNotSet:
    'Crea un PIN de 6 dígitos para proteger la configuración en los dispositivos de los niños',
  statusSet: 'Configurado',
  statusNotSet: 'Sin configurar',
  unlockChildPinTitle: 'Desbloquear el PIN en {{deviceName}}',
  unlockChildPinSubtitle:
    'Restablece los intentos fallidos de PIN en este dispositivo del niño',
  statusLocked: 'Bloqueado',
  toastPinUnlocked: 'PIN desbloqueado en {{deviceName}}.',
  toastPinUnlockFailed: 'No se pudo desbloquear el PIN. Inténtalo de nuevo.',
  toastPinSaved:
    'PIN parental guardado. Úsalo en los dispositivos de los niños antes de cambiar las Apps bloqueadas.',
  createParentPin: 'Crear PIN parental',
  changeParentPin: 'Cambiar PIN parental',
  parentPinSetupSubtitle:
    'Un PIN de 6 dígitos protege la configuración de Apps bloqueadas en los dispositivos de los niños.',
  parentPinSetupHelper:
    'Los dispositivos de los niños pedirán este PIN antes de cambiar qué apps están bloqueadas.',
  parentPinMismatch: 'Los nuevos PIN no coinciden.',
  unableToSaveParentPin: 'No se pudo guardar el PIN parental. Inténtalo de nuevo.',
  onlyOwnerCanManageChildPin:
    'Solo el propietario de la familia puede crear o cambiar el PIN parental usado en los dispositivos de los niños.',
  parentPinRequired: 'Se requiere el PIN parental',
  enterParentPinToContinue: 'Introduce el PIN parental de 6 dígitos para continuar.',
  parentPinLockoutMessage:
    'Demasiados intentos incorrectos. Pide al padre o la madre que configuró KidGate que desbloquee el PIN desde su teléfono, en Ajustes → Seguridad.',
  parentPinHelperText:
    'Solo un padre o una madre puede cambiar las apps bloqueadas o cerrar la sesión — para eso sirve el PIN. Si se olvida, el padre o la madre que configuró KidGate puede restablecerlo desde su teléfono, en Ajustes → Seguridad.',
  forgotPin: '¿Olvidaste el PIN?',
  resetPinNotice:
    'Estás restableciendo el PIN como propietario de la cuenta. A partir de ahora los dispositivos de los niños pedirán el PIN nuevo.',
  unableToVerifyParentPin: 'El PIN parental es incorrecto. Inténtalo de nuevo.',
  unableToCheckParentPin:
    'No se pudo comprobar el PIN parental. Inténtalo de nuevo en un momento.',
  parentPinGateSubtitle:
    'Introduce el PIN parental de 6 dígitos para cambiar los ajustes.',
  parentPinMustBeSixDigits: 'El PIN parental debe tener exactamente 6 dígitos.',
  pinSixDigits: 'PIN (6 dígitos)',
  attemptsRemaining: 'Quedan {{count}} intentos.',
  attemptsRemaining_one: 'Queda {{count}} intento.',
  currentPin: 'PIN actual',
  newPin: 'PIN nuevo',
  pin: 'PIN',
  confirmPin: 'Confirmar PIN',
  updatePin: 'Actualizar PIN',
  savePin: 'Guardar PIN',
  pinLockedTitle: 'PIN bloqueado',
  pinLockedBody:
    'Demasiados intentos incorrectos. Pide al padre o la madre que configuró KidGate que desbloquee el PIN desde su teléfono, en Ajustes → Seguridad.',
  parentAccessRequiredTitle: 'Se requiere acceso parental',
  parentAccessRequiredBody:
    'Introduce tu PIN para renombrar este dispositivo, elegir Apps bloqueadas o cerrar la sesión.',
  unlockWithParentPinButton: 'Desbloquear con el PIN parental',
  whyPinTitle: '¿Por qué un PIN?',
  whyPinBody:
    'Solo un padre debería cambiar las Apps bloqueadas o cerrar la sesión de KidGate en este dispositivo. Los colores del tema no requieren PIN.',
  pinLockedToast:
    'El PIN quedó bloqueado tras demasiados intentos incorrectos. Pide al padre o la madre que configuró KidGate que lo desbloquee desde su teléfono, en Ajustes → Seguridad.',
  pinNotConfiguredToast:
    'Todavía no hay PIN parental. El padre o la madre que configuró KidGate lo crea desde su teléfono, en Ajustes → Seguridad.',
  pairedNoPin:
    'Todavía no hay PIN parental. Los dispositivos de los niños lo piden antes de cambiar las Apps bloqueadas o cerrar la sesión de un dispositivo.',
  enterSixDigitParentPin: 'Introduce el PIN parental de 6 dígitos.',
  askParentCreatePin:
    'Pide al padre o la madre que configuró KidGate que cree un PIN parental desde su teléfono, en Ajustes → Seguridad.',
  incorrectPinAttemptsLeft: 'PIN incorrecto. Quedan {{count}} intentos.',
  incorrectPinAttemptsLeft_one: 'PIN incorrecto. Queda {{count}} intento.',
  enterCurrentParentPin: 'Introduce tu PIN parental actual.',
  currentParentPinIncorrect:
    'El PIN parental actual es incorrecto. Revísalo e inténtalo de nuevo, o usa «¿Olvidaste el PIN?» para restablecerlo.',
} as const;
