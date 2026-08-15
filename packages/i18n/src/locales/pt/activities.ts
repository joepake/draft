export const activities = {
  title: 'Atividades',
  subtitleAllDevices: 'Eventos mais recentes de todos os dispositivos',
  subtitleTimelineForDevice: 'Linha do tempo de {{deviceName}}',
  fallbackDeviceName: 'dispositivo',
  liveBadge: 'Ao vivo',
  errorTitle: 'Não foi possível carregar as atividades',
  tryAgain: 'Tentar novamente',

  emptyTitleAll: 'Nenhuma atividade ainda',
  emptyTitleDevice: 'Nenhuma atividade para este dispositivo',
  emptyDescriptionAll:
    'Os eventos de bloqueio, desbloqueio e SOS dos dispositivos dos seus filhos aparecerão aqui.',
  emptyDescriptionDevice:
    'Selecione outro dispositivo ou aguarde eventos de bloqueio, desbloqueio e SOS deste dispositivo.',

  guestEmptyTitle: 'Sua atividade',
  guestEmptyDescription:
    'Depois que um dispositivo infantil for conectado, eventos de bloqueio, desbloqueio, SOS e aplicativos aparecerão aqui em tempo real.',
  guestSignInButton: 'Entrar',
  guestCreateAccount: 'Criar conta de responsável',
  guestSubtitle: 'Entre para acompanhar as atividades dos dispositivos dos seus filhos',

  guestPreviewHeading: 'O que você verá',
  guestPreviewLock: 'Dispositivo bloqueado',
  guestPreviewSos: 'Alerta SOS',
  guestPreviewScreenTime: 'Atualização do Tempo de Uso',
  guestPreviewHint:
    'Exemplo — os eventos reais aparecerão após conectar um dispositivo',

  activityTypeLocked: 'Bloqueado',
  activityTypeUnlocked: 'Desbloqueado',
  activityTypeAppOpened: 'Aplicativo aberto',
  activityTypeAppBlocked: 'Aplicativo bloqueado',
  activityTypeAppInstalled: 'Aplicativo instalado',
  activityTypeAppRemoved: 'Aplicativo removido',
  activityTypePlaceEnter: 'Entrou em um local',
  activityTypePlaceExit: 'Saiu de um local',
  activityTypeTamper: 'Proteção',
  activityTypeScreenTime: 'Tempo de Uso',
  activityTypeEmergency: 'Emergência',
  activityTypeUnknown: 'Atividade',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Um app bloqueado foi aberto e o KidGate o fechou.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'Um novo aplicativo foi instalado no dispositivo da criança.',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'Um aplicativo foi removido do dispositivo da criança.',

  placeEnterTitle: 'Entrou em {{placeName}}',
  placeEnterBody: 'O dispositivo da criança entrou em um local salvo.',

  placeExitTitle: 'Saiu de {{placeName}}',
  placeExitBody: 'O dispositivo da criança saiu de um local salvo.',

  tamperTitle: 'Uma permissão de proteção foi desativada',
  tamperFallbackTitle: 'Uma permissão de proteção foi desativada',
  tamperFallbackBody:
    'Uma permissão de proteção foi desativada no dispositivo da criança.',

  tamperOverlayTitle: 'A permissão Exibir sobre outros aplicativos foi desativada',
  tamperOverlayBody:
    'A tela de bloqueio pode deixar de aparecer sobre outros aplicativos até que essa permissão seja ativada novamente.',

  tamperAccessibilityTitle: 'A Acessibilidade foi desativada',
  tamperAccessibilityBody:
    'O bloqueio de aplicativos e a aplicação das restrições podem não funcionar corretamente até que a Acessibilidade seja ativada novamente.',
  tamperUsageAccessTitle: 'O acesso ao uso de aplicativos foi desativado',
  tamperUsageAccessBody:
    'Os limites de aplicativos e os Horários bloqueados podem parar de funcionar até que o KidGate volte a medir o uso de aplicativos no dispositivo da criança.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'O acesso ao Tempo de Uso foi desativado',
  tamperScreenTimeIosBody:
    'Os limites de aplicativos e os Horários bloqueados podem parar de funcionar até que o acesso ao Tempo de Uso seja permitido novamente no dispositivo da criança.',
  tamperUsageAccessAndroidTitle: 'O Acesso de uso foi desativado',
  tamperUsageAccessAndroidBody:
    'Os limites de aplicativos e os Horários bloqueados podem parar de funcionar até que o Acesso de uso seja reativado para o KidGate no dispositivo da criança.',

  tamperBatteryTitle: 'O uso irrestrito da bateria foi desativado',
  tamperBatteryBody:
    'O sistema pode pausar o KidGate até que o uso da bateria seja configurado novamente como Irrestrito.',

  tamperExactAlarmTitle: 'Alarmes e lembretes foram desativados',
  tamperExactAlarmBody:
    'Os Horários bloqueados podem começar ou terminar atrasados até que Alarmes e lembretes seja permitido de novo.',

  tamperNotificationsTitle: 'As notificações foram desativadas',
  tamperNotificationsBody:
    'Comandos remotos e alertas para os responsáveis podem não chegar a este dispositivo de forma confiável.',

  tamperLocationTitle: 'A localização foi desativada',
  tamperLocationBody:
    'Os responsáveis não receberão atualizações de localização até que a permissão seja concedida novamente.',

  tamperCameraTitle: 'A câmera foi desativada',
  tamperCameraBody:
    'As fotos de SOS e Check-In podem não ser enviadas até que a câmera seja permitida novamente.',

  tamperBackgroundRefreshTitle: 'A Atualização em Segundo Plano foi desativada',
  tamperBackgroundRefreshBody:
    'O KidGate poderá ser atualizado com menos frequência em segundo plano até que a Atualização em Segundo Plano seja ativada novamente.',

  tamperDeviceClockTitle: 'A data ou a hora foi alterada',
  tamperDeviceClockBody:
    'O relógio deste dispositivo não corresponde mais ao horário correto. O Tempo de Uso e os Horários Bloqueados continuarão seguindo o horário correto.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'A permissão Exibir sobre outros aplicativos foi desativada.',
  tamperAccessibility: 'O serviço de Acessibilidade foi desativado.',
  tamperUsageAccess: 'O acesso de uso foi desativado.',
  tamperBattery: 'O uso irrestrito da bateria foi desativado.',
  tamperExactAlarm: 'A permissão Alarmes e lembretes foi desativada.',
  tamperNotifications: 'A permissão de notificações foi desativada.',
  tamperLocation: 'A permissão de localização foi desativada.',
  tamperCamera: 'A permissão da câmera foi desativada.',
  tamperBackgroundRefresh: 'A Atualização em Segundo Plano foi desativada.',

  filterAllDevices: 'Todos os dispositivos',
  dateToday: 'Hoje',
  dateYesterday: 'Ontem',

  filterByDevice: 'Filtrar por {{label}}',

  openFullSosHistory: 'Abrir histórico completo de SOS',

  unknownDevice: 'Dispositivo desconhecido',

  basicActivityNote:
    'Eventos de bloqueio, desbloqueio e do dispositivo são registrados em Atividades.',
  tamperUninstallProtectionTitle: 'Proteção contra desinstalação desligada',
  tamperUninstallProtectionBody: 'Agora o KidGate pode ser removido deste telefone.',
} as const;
