export const protection = {
  permissionOffOnChildDevice:
    'Esta permissão está desativada no dispositivo da criança.',
  permissionNotSetUpYet: 'Esta permissão ainda não foi configurada.',
  permissionRestrictedByIos: 'Esta permissão está restrita pelos ajustes do iOS.',
  permissionStatusUnknown: 'O KidGate não conseguiu ler o status desta permissão.',
  kidGateOffline: 'KidGate em silêncio há mais de 24 h',
  childAppMayBeOffline:
    'O app no dispositivo da criança pode estar fechado, excluído ou off-line.',
  statusNotUpdatedYet: 'Status ainda não atualizado',
  openKidGateOnChildPhone: 'Abra o KidGate uma vez no dispositivo da criança.',
  screenTimePermission: 'Permissão de Tempo de Uso',
  screenTimeAccessOff:
    'O acesso ao Tempo de Uso está desativado, então o bloqueio de apps e os limites podem parar de funcionar.',
  screenTimeSetupIncomplete:
    'A configuração do Tempo de Uso está incompleta no dispositivo da criança.',
  usageAccessPermission: 'Acesso de uso',
  usageAccessOff:
    'O Acesso de uso está desativado, então o KidGate não consegue acompanhar o tempo de tela nem aplicar limites.',
  usageAccessSetupIncomplete:
    'Ative o Acesso de uso para o KidGate nos ajustes do Android.',
  overlayPermission: 'Exibir sobre outros apps',
  batteryOptimizationPermission: 'Bateria sem restrições',
  batteryOptimizationOff:
    'Permita o uso de bateria sem restrições para que o KidGate mantenha as proteções ativas.',
  exactAlarmPermission: 'Alarmes e lembretes',
  exactAlarmOff:
    'Ative Alarmes e lembretes para que os Horários bloqueados comecem na hora certa.',
  accessibilityPermission: 'Acessibilidade (assistente de bloqueio)',
  accessibilityOff:
    'Ative a Acessibilidade para o KidGate para que o bloqueio permaneça sobre os outros apps.',
  overlayOffForLock:
    'Ative Exibir sobre outros apps para que a tela de bloqueio possa cobrir os demais apps.',
  lockNotReadyTitle: 'Bloqueio não está pronto',
  lockNotReadyBody:
    'O KidGate não consegue manter este dispositivo Android bloqueado até que Exibir sobre outros apps e Acessibilidade sejam ativados. Abra o KidGate no dispositivo da criança e conclua o seguinte:',
  lockNotReadyBodyIos:
    'O KidGate não consegue bloquear este iPhone até que o acesso ao Tempo de Uso seja aprovado no dispositivo da criança. Abra o KidGate nesse dispositivo e conclua o seguinte:',
  locationPermission: 'Permissão de localização',
  cameraPermission: 'Permissão de câmera',
  cameraConsentPending:
    'A câmera não foi permitida neste dispositivo, então um SOS ou Check-in enviado dele chega sem foto.',
  locationConsentPending:
    'A localização não foi permitida neste dispositivo, então ele não consegue informar onde está.',
  consentStepOpenSettings:
    'Abra o KidGate no dispositivo do seu filho ou filha e vá em Ajustes.',
  consentStepParentPin: 'Digite o PIN dos pais.',
  consentStepPermissions: 'Abra “Permissões” e permita o que estiver faltando.',
  notificationsPermission: 'Permissão de notificações',
  backgroundUpdates: 'Atualizações em segundo plano',
  backgroundUpdatesRestricted:
    'As atualizações em segundo plano estão restritas neste dispositivo.',
  turnOnBackgroundUpdatesInSettings:
    'Ative isso nos Ajustes do dispositivo para que o KidGate continue sincronizado.',
  inactive: 'Inativo',
  openKidGateToSyncProtections:
    'Abra o KidGate neste dispositivo para que as proteções voltem a sincronizar.',
  needsAttention: 'Requer atenção',
  protectionsNeedSetupAndroid:
    'Algumas proteções precisam de configuração no dispositivo da criança.',
  protectionsNeedSetupIos:
    'Algumas proteções precisam de configuração no dispositivo da criança.',
  protected: 'Protegido',
  protectionsLookHealthy: 'As proteções do KidGate estão funcionando bem.',
  healthBadgeProtected: 'Verde — protegido',
  healthBadgeWarning: 'Amarelo — precisa de configuração',
  healthBadgeInactive: 'Vermelho — dispositivo da criança em silêncio há mais de 24 h',
  iosFeatureSupportEvaluating: 'O suporte a este recurso no iOS está em avaliação.',
  iosUpgradeRequiredNote:
    'Isto precisa do iOS 16 ou mais recente. Atualize o dispositivo da criança em Ajustes › Geral › Atualização de Software. Se nenhuma atualização for oferecida, este iPad ou iPhone é antigo demais para o suporte da Apple.',
  iosUpgradeActionLabel: 'Precisa do iOS 16',
  lockUnlockNote:
    'Bloqueia o dispositivo pelo Tempo de Uso depois que a criança autoriza o acesso.',
  scheduleNote: 'Até 3 faixas de Horários bloqueados bloqueiam apps pelo Tempo de Uso.',
  individualAppBlockingNote:
    'A criança seleciona os apps após digitar o PIN dos responsáveis de 6 dígitos.',
  tamperAlertsNote:
    'Informa mudanças de permissões e quando o app no dispositivo da criança está há muito tempo sem atualizar.',
  appReviewRemindersNote:
    'O iOS não expõe eventos de instalação; revise os apps periodicamente junto com o dispositivo da criança.',
} as const;
