export const pin = {
  title: 'PIN dos pais',
  subtitleSet: 'Toque para alterar seu PIN de 6 dígitos',
  subtitleNotSet:
    'Crie um PIN de 6 dígitos para proteger a configuração nos dispositivos das crianças',
  statusSet: 'Definido',
  statusNotSet: 'Não definido',
  unlockChildPinTitle: 'Desbloquear o PIN em {{deviceName}}',
  unlockChildPinSubtitle:
    'Zera as tentativas incorretas de PIN neste dispositivo da criança',
  statusLocked: 'Bloqueado',
  toastPinUnlocked: 'PIN desbloqueado em {{deviceName}}.',
  toastPinUnlockFailed: 'Não foi possível desbloquear o PIN. Tente novamente.',
  toastPinSaved:
    'PIN dos pais salvo. Use-o nos dispositivos das crianças antes de mudar os Apps bloqueados.',
  createParentPin: 'Criar PIN dos pais',
  changeParentPin: 'Alterar PIN dos pais',
  parentPinSetupSubtitle:
    'Um PIN de 6 dígitos protege a configuração de Apps bloqueados nos dispositivos das crianças.',
  parentPinSetupHelper:
    'Os dispositivos das crianças pedirão este PIN antes de mudar quais apps estão bloqueados.',
  parentPinMismatch: 'Os novos PINs não coincidem.',
  unableToSaveParentPin: 'Não foi possível salvar o PIN dos pais. Tente novamente.',
  onlyOwnerCanManageChildPin:
    'Apenas o dono da família pode criar ou alterar o PIN dos pais usado nos dispositivos das crianças.',
  parentPinRequired: 'PIN dos pais necessário',
  enterParentPinToContinue: 'Digite o PIN dos pais de 6 dígitos para continuar.',
  parentPinLockoutMessage:
    'Muitas tentativas incorretas. Peça ao responsável que configurou o KidGate para desbloquear o PIN pelo próprio celular, em Ajustes → Segurança.',
  parentPinHelperText:
    'Somente um responsável pode mudar os apps bloqueados ou sair — é para isso que serve o PIN. Se o PIN for esquecido, o responsável que configurou o KidGate pode redefini-lo pelo próprio celular, em Ajustes → Segurança.',
  forgotPin: 'Esqueceu o PIN?',
  resetPinNotice:
    'Você está redefinindo o PIN como dono da conta. A partir de agora os dispositivos das crianças pedirão o novo PIN.',
  unableToVerifyParentPin: 'O PIN dos pais está incorreto. Tente novamente.',
  unableToCheckParentPin:
    'Não foi possível verificar o PIN dos pais. Tente novamente em instantes.',
  parentPinGateSubtitle: 'Digite o PIN dos pais de 6 dígitos para alterar os ajustes.',
  parentPinMustBeSixDigits: 'O PIN dos pais deve ter exatamente 6 dígitos.',
  pinSixDigits: 'PIN (6 dígitos)',
  attemptsRemaining: 'Restam {{count}} tentativas.',
  attemptsRemaining_one: 'Resta {{count}} tentativa.',
  currentPin: 'PIN atual',
  newPin: 'Novo PIN',
  pin: 'PIN',
  confirmPin: 'Confirmar PIN',
  updatePin: 'Atualizar PIN',
  savePin: 'Salvar PIN',
  pinLockedTitle: 'PIN bloqueado',
  pinLockedBody:
    'Muitas tentativas incorretas. Peça ao responsável que configurou o KidGate para desbloquear o PIN pelo próprio celular, em Ajustes → Segurança.',
  parentAccessRequiredTitle: 'Acesso dos pais necessário',
  parentAccessRequiredBody:
    'Digite seu PIN para renomear este dispositivo, escolher Apps bloqueados ou sair.',
  unlockWithParentPinButton: 'Desbloquear com o PIN dos pais',
  whyPinTitle: 'Por que um PIN?',
  whyPinBody:
    'Somente um responsável deve mudar os Apps bloqueados ou desconectar este dispositivo do KidGate. Cores do tema não exigem PIN.',
  pinLockedToast:
    'O PIN foi bloqueado após muitas tentativas incorretas. Peça ao responsável que configurou o KidGate para desbloqueá-lo pelo próprio celular, em Ajustes → Segurança.',
  pinNotConfiguredToast:
    'Ainda não há PIN dos pais. O responsável que configurou o KidGate cria o PIN pelo próprio celular, em Ajustes → Segurança.',
  pairedNoPin:
    'Ainda não há PIN dos pais. Os dispositivos das crianças pedem o PIN antes de mudar os Apps bloqueados ou desconectar um dispositivo.',
  enterSixDigitParentPin: 'Digite o PIN dos pais de 6 dígitos.',
  askParentCreatePin:
    'Peça ao responsável que configurou o KidGate para criar um PIN dos pais pelo próprio celular, em Ajustes → Segurança.',
  incorrectPinAttemptsLeft: 'PIN incorreto. Restam {{count}} tentativas.',
  incorrectPinAttemptsLeft_one: 'PIN incorreto. Resta {{count}} tentativa.',
  enterCurrentParentPin: 'Digite seu PIN dos pais atual.',
  currentParentPinIncorrect:
    'O PIN dos pais atual está incorreto. Confira e tente novamente, ou use “Esqueceu o PIN?” para redefini-lo.',
} as const;
