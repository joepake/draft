// errors.ts (Português - Brasil)

export const errors = {
  timeRequestAlreadyResolved: 'Outro responsável já tratou esta solicitação.',
  emailAlreadyInUse: 'Este e-mail já está cadastrado.',
  invalidEmail: 'Endereço de e-mail inválido.',
  weakPassword: 'A senha deve ter pelo menos 6 caracteres.',
  invalidEmailOrPassword: 'E-mail ou senha inválidos.',
  tooManyRequests: 'Muitas tentativas. Tente novamente mais tarde.',
  somethingWentWrong: 'Algo deu errado. Tente novamente.',
  unableToCreateAccount: 'Não foi possível criar sua conta. Tente novamente.',
  unableToSignIn: 'Não foi possível entrar. Tente novamente.',
  unableToJoinFamilyAccount:
    'Não foi possível entrar na conta da família. Tente novamente.',
  enterEmailAddress: 'Digite seu endereço de e-mail.',
  unableToCreatePairingCode:
    'Não foi possível criar um código de pareamento. Tente novamente.',
  unableToRedeemPairingCode: 'Este código de pareamento é inválido ou expirou.',
  unableToClaimChildPairing:
    'Não foi possível conectar o dispositivo da criança. Tente novamente.',
  unableToPollChildPairing: 'Não foi possível verificar o status do pareamento.',
  unableToConfirmChildPairing:
    'Não foi possível confirmar este pareamento. Tente novamente.',
  unableToRejectChildPairing:
    'Não foi possível recusar este pareamento. Tente novamente.',
  photoCaptureCancelled: 'A captura da foto foi cancelada.',
  unableToOpenCamera:
    'Não foi possível abrir a câmera. Permita o acesso à câmera nas configurações do dispositivo.',
  noPhotoCaptured: 'Nenhuma foto foi capturada.',
  simulatorCameraHint:
    'No simulador, ative primeiro uma câmera em Simulator → Camera → Front Camera e tente o SOS novamente. Para uma foto real, teste em um iPhone físico.',
  notSignedInReopenApp:
    'Você não está conectado. Feche e abra o aplicativo novamente e tente outra vez.',
  accountMismatchSignOut: 'A conta não corresponde. Saia da conta e entre novamente.',
  storageUploadUnauthorized:
    'Não foi possível enviar a foto no momento. Tente novamente em instantes.',
  storageNotSetup:
    'Não foi possível enviar a foto no momento. Tente novamente em instantes.',
  noNetworkConnection:
    'Sem conexão com a internet. Verifique o Wi-Fi ou os dados móveis e tente novamente.',
  connectionFailedTitle: 'Falha na conexão',
  connectionFailedBody:
    'O KidGate não conseguiu se conectar. Verifique o Wi-Fi ou os dados móveis e selecione “Reconectar”.',
  reconnect: 'Reconectar',
  unableToUploadPhoto: 'Não foi possível enviar a foto. Tente novamente.',
  premiumSubscriptionRequired:
    'Este recurso precisa do Premium. O Limite diário, os Horários bloqueados, a localização e o SOS continuam gratuitos.',
  trialEndedCannotJoinFamily:
    'Seu período de teste gratuito terminou. Assine o Premium para entrar em outra família.',

  notFamilyMember:
    'Você não faz mais parte desta família. Peça ao proprietário da família para convidá-lo novamente.',
  familyNotCreated: 'Crie sua família primeiro e depois convide outro responsável.',
  childDeviceNotAllowed:
    'Este é um dispositivo infantil e não pode gerenciar as configurações da família.',
  deviceCredentialMissing:
    'Este dispositivo precisa ser reconectado. Feche e abra o KidGate novamente e tente outra vez.',
  deviceNotFound: 'Este dispositivo não faz mais parte da sua família.',
  registerParentDeviceFirst:
    'Configure este dispositivo como dispositivo dos pais primeiro e tente novamente.',
  pairingCodeFormat: 'Digite o código de 6 caracteres.',
  pairingCodeUsed: 'Este código já foi usado. Solicite um novo código.',
  pairingCodeExpiredChild:
    'Este código expirou. Peça à criança para gerar um novo código.',
  pairingCodeExpiredParent:
    'Este código expirou. Solicite um novo código ao outro responsável.',
  pairingOwnFamily: 'Esta já é a sua família. Não é necessário entrar novamente.',
  pairingSessionNotFound: 'Esta solicitação de pareamento não está mais disponível.',
  pairingAlreadyCompleted: 'Este dispositivo já está pareado.',
  pairingDeclined: 'A solicitação de pareamento foi recusada no outro dispositivo.',
  pairingNoParentWaiting:
    'Nenhum responsável está aguardando confirmação. Inicie o pareamento novamente no dispositivo dos pais.',
  pairingRequestExpired: 'Esta solicitação de pareamento expirou. Inicie novamente.',
  joinRequestNotFound: 'Esta solicitação para entrar não está mais disponível.',
  joinRequestResolved: 'Esta solicitação para entrar já foi respondida.',
  joinRequestExpired: 'Esta solicitação para entrar expirou. Solicite um novo convite.',
  timeRequestPendingExists: 'Você já possui uma solicitação de tempo pendente.',
  timeRequestCooldown: 'Aguarde alguns instantes antes de enviar outra solicitação.',
  deviceClockOutOfRange:
    'A data e a hora deste dispositivo parecem incorretas. Ative a atualização automática.',
  locationSharingDisabled:
    'O compartilhamento de localização está desativado neste dispositivo. Ative-o nas configurações do dispositivo e tente novamente.',
  childDeviceNoPushToken:
    'Este dispositivo infantil ainda não pode receber solicitações. Abra o KidGate no dispositivo da criança e permita as notificações.',
  unableToRequestLocation:
    'Não foi possível solicitar a localização neste momento. Tente novamente.',
  unableToVerifyPurchase:
    'Não foi possível verificar esta compra. Tente novamente em instantes.',
  noPurchasesToRestore: 'Nenhuma compra para restaurar foi encontrada nesta conta.',
  noActiveSubscription: 'Nenhuma assinatura ativa foi encontrada nesta conta.',
  unableToRestorePurchases:
    'Não foi possível restaurar suas compras no momento. Tente novamente.',
  alreadyInFamily: 'Você já faz parte desta família.',
  leaveFamilyBeforeJoining: 'Saia da sua família atual antes de entrar em outra.',
  deviceLimitReached: 'Este plano cobre um dispositivo. Assine para adicionar outro.',
};
