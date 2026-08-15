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
    'Demasiados intentos incorrectos. Pide a tus padres que desbloqueen el PIN desde los Ajustes parentales.',
  parentPinHelperText:
    'Solo un padre puede cambiar las apps bloqueadas o cerrar la sesión — para eso sirve el PIN. Si lo olvidas, un padre puede iniciar sesión en KidGate desde cualquier dispositivo y restablecerlo en los Ajustes parentales.',
  forgotPin: '¿Olvidaste el PIN?',
  resetPinNotice:
    'Estás restableciendo el PIN como propietario de la cuenta. A partir de ahora los dispositivos de los niños pedirán el PIN nuevo.',
  unableToVerifyParentPin: 'El PIN parental es incorrecto. Inténtalo de nuevo.',
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
    'Demasiados intentos incorrectos. Pide a tus padres que desbloqueen el PIN desde los Ajustes parentales.',
  parentAccessRequiredTitle: 'Se requiere acceso parental',
  parentAccessRequiredBody:
    'Introduce tu PIN para renombrar este dispositivo, elegir Apps bloqueadas o cerrar la sesión.',
  unlockWithParentPinButton: 'Desbloquear con el PIN parental',
  whyPinTitle: '¿Por qué un PIN?',
  whyPinBody:
    'Solo un padre debería cambiar las Apps bloqueadas o cerrar la sesión de KidGate en este dispositivo. Los colores del tema no requieren PIN.',
  pinLockedToast:
    'El PIN quedó bloqueado tras demasiados intentos incorrectos. Pide a tus padres que lo desbloqueen desde los Ajustes parentales.',
  pinNotConfiguredToast:
    'Primero crea un PIN de 6 dígitos en los Ajustes parentales de un dispositivo de padre.',
  enterSixDigitParentPin: 'Introduce el PIN parental de 6 dígitos.',
  askParentCreatePin:
    'Pide a tus padres que primero creen un PIN parental en los Ajustes parentales.',
  incorrectPinAttemptsLeft: 'PIN incorrecto. Quedan {{count}} intentos.',
  incorrectPinAttemptsLeft_one: 'PIN incorrecto. Queda {{count}} intento.',
  enterCurrentParentPin: 'Introduce tu PIN parental actual.',
  currentParentPinIncorrect: 'El PIN parental actual es incorrecto.',
} as const;
