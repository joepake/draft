// errors.ts (Español)

export const errors = {
  timeRequestAlreadyResolved: 'Otra madre o padre ya gestionó esta solicitud.',
  emailAlreadyInUse: 'Este correo electrónico ya está registrado.',
  invalidEmail: 'Dirección de correo electrónico no válida.',
  weakPassword: 'La contraseña debe tener al menos 6 caracteres.',
  invalidEmailOrPassword: 'Correo electrónico o contraseña incorrectos.',
  tooManyRequests: 'Demasiados intentos. Inténtalo de nuevo más tarde.',
  somethingWentWrong: 'Algo salió mal. Inténtalo de nuevo.',
  unableToCreateAccount: 'No se pudo crear tu cuenta. Inténtalo de nuevo.',
  unableToSignIn: 'No se pudo iniciar sesión. Inténtalo de nuevo.',
  unableToJoinFamilyAccount:
    'No se pudo unirte a la cuenta familiar. Inténtalo de nuevo.',
  enterEmailAddress: 'Introduce tu dirección de correo electrónico.',
  unableToCreatePairingCode:
    'No se pudo crear el código de vinculación. Inténtalo de nuevo.',
  unableToRedeemPairingCode: 'Ese código de vinculación es incorrecto o ha caducado.',
  unableToClaimChildPairing:
    'No se pudo conectar el dispositivo del menor. Inténtalo de nuevo.',
  unableToPollChildPairing: 'No se pudo comprobar el estado de la vinculación.',
  unableToConfirmChildPairing:
    'No se pudo confirmar esta vinculación. Inténtalo de nuevo.',
  unableToRejectChildPairing:
    'No se pudo rechazar esta vinculación. Inténtalo de nuevo.',
  photoCaptureCancelled: 'Se canceló la captura de la foto.',
  unableToOpenCamera:
    'No se pudo abrir la cámara. Permite el acceso a la cámara en la configuración del dispositivo.',
  noPhotoCaptured: 'No se capturó ninguna foto.',
  simulatorCameraHint:
    'En el simulador, activa primero una cámara: Simulator → Camera → Front Camera y vuelve a probar SOS. Para una foto real, prueba en un iPhone físico.',
  notSignedInReopenApp:
    'No has iniciado sesión. Cierra y vuelve a abrir la aplicación, luego inténtalo de nuevo.',
  accountMismatchSignOut:
    'La cuenta no coincide. Cierra sesión e inicia sesión de nuevo.',
  storageUploadUnauthorized:
    'No se pudo subir la foto en este momento. Inténtalo de nuevo dentro de unos instantes.',
  storageNotSetup:
    'No se pudo subir la foto en este momento. Inténtalo de nuevo dentro de unos instantes.',
  noNetworkConnection:
    'No hay conexión a Internet. Comprueba la conexión Wi-Fi o los datos móviles e inténtalo de nuevo.',
  connectionFailedTitle: 'Conexión fallida',
  connectionFailedBody:
    'KidGate no pudo conectarse. Comprueba la conexión Wi-Fi o los datos móviles y selecciona Volver a conectar.',
  reconnect: 'Volver a conectar',
  unableToUploadPhoto: 'No se pudo subir la foto. Inténtalo de nuevo.',
  premiumSubscriptionRequired:
    'Esta función necesita Premium. El Límite diario, las Horas bloqueadas, la ubicación y el SOS siguen siendo gratis.',
  trialEndedCannotJoinFamily:
    'Tu prueba gratuita ha finalizado. Suscríbete a Premium para unirte a otra familia.',

  notFamilyMember:
    'Ya no formas parte de esta familia. Pide al propietario de la familia que te invite de nuevo.',
  familyNotCreated: 'Primero crea tu familia y luego invita a otro padre o madre.',
  childDeviceNotAllowed:
    'Este es un dispositivo del menor, por lo que no puede administrar la configuración familiar.',
  deviceCredentialMissing:
    'Este dispositivo necesita volver a conectarse. Cierra y vuelve a abrir KidGate, luego inténtalo de nuevo.',
  deviceNotFound: 'Ese dispositivo ya no pertenece a tu familia.',
  registerParentDeviceFirst:
    'Configura primero este dispositivo como dispositivo de los padres y vuelve a intentarlo.',
  pairingCodeFormat: 'Introduce el código de 6 caracteres.',
  pairingCodeUsed: 'Ese código ya ha sido utilizado. Solicita uno nuevo.',
  pairingCodeExpiredChild:
    'Ese código ha caducado. Pide a tu hijo que genere uno nuevo.',
  pairingCodeExpiredParent:
    'Ese código ha caducado. Pide al otro padre o madre uno nuevo.',
  pairingOwnFamily: 'Esta ya es tu familia; no es necesario unirse.',
  pairingSessionNotFound: 'Esa solicitud de vinculación ya no está disponible.',
  pairingAlreadyCompleted: 'Este dispositivo ya está vinculado.',
  pairingDeclined: 'La solicitud de vinculación fue rechazada en el otro dispositivo.',
  pairingNoParentWaiting:
    'No hay ningún padre o madre esperando para confirmar. Inicia la vinculación de nuevo desde el dispositivo de los padres.',
  pairingRequestExpired: 'La solicitud de vinculación ha caducado. Vuelve a empezar.',
  joinRequestNotFound: 'Esa solicitud para unirse ya no está disponible.',
  joinRequestResolved: 'Esa solicitud para unirse ya fue respondida.',
  joinRequestExpired:
    'La solicitud para unirse ha caducado. Solicita una nueva invitación.',
  timeRequestPendingExists: 'Ya tienes una solicitud pendiente de respuesta.',
  timeRequestCooldown: 'Espera un momento antes de enviar otra solicitud.',
  deviceClockOutOfRange:
    'La fecha y la hora de este dispositivo parecen ser incorrectas. Configúralas para que se actualicen automáticamente.',
  locationSharingDisabled:
    'La ubicación compartida está desactivada en este dispositivo. Actívala en la configuración del dispositivo e inténtalo de nuevo.',
  childDeviceNoPushToken:
    'Este dispositivo del menor aún no puede recibir solicitudes. Abre KidGate en el dispositivo del menor y permite las notificaciones.',
  unableToRequestLocation:
    'No se pudo solicitar una ubicación actualizada en este momento. Inténtalo de nuevo.',
  unableToVerifyPurchase:
    'No se pudo verificar esa compra. Inténtalo de nuevo dentro de unos instantes.',
  noPurchasesToRestore: 'No hay compras para restaurar en esta cuenta.',
  noActiveSubscription: 'No se encontró ninguna suscripción activa para esta cuenta.',
  unableToRestorePurchases:
    'No se pudieron restaurar tus compras en este momento. Inténtalo de nuevo.',
  alreadyInFamily: 'Ya formas parte de esta familia.',
  leaveFamilyBeforeJoining: 'Sal de tu familia actual antes de unirte a otra.',
  deviceLimitReached: 'Este plan incluye un dispositivo. Suscríbete para añadir otro.',
};
