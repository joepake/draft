export const activities = {
  title: 'Atividades',
  subtitleAllDevices: 'Eventos mais recentes de todos os dispositivos',
  subtitleTimelineForDevice: 'Linha do tempo de {{deviceName}}',
  subtitleTimelineForChild: 'Linha do tempo de {{childName}}',
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
  activityTypeCheckIn: 'Check-in',
  activityTypeLocationRequest: 'Localização',
  activityTypeTimeRequest: 'Pedido de tempo',
  activityTypeRewardTask: 'Tarefa de recompensa',
  activityTypeSearchAlert: 'Alerta de busca',
  activityTypeWebFilter: 'Filtro da web',
  activityTypeEmergency: 'Emergência',
  activityTypeUnknown: 'Atividade',

  sosEscapeTitle: 'Desbloqueio de emergência',
  sosEscapeBody: 'O SOS desbloqueou este dispositivo por {{minutes}} minutos.',
  sosEscapeRepeatTitle: 'Desbloqueio de emergência ({{count}} vezes hoje)',
  sosEscapeRepeatBody:
    'O SOS desbloqueou este dispositivo por {{minutes}} minutos. Já são {{count}} vezes hoje.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Um app bloqueado foi aberto e o KidGate o fechou.',
  appInstalledTitle: 'Aplicativo instalado',
  appInstalledBody: 'O aplicativo {{appName}} foi instalado no dispositivo da criança.',
  appInstalledPendingBody:
    'O aplicativo {{appName}} foi instalado no dispositivo da criança e está bloqueado até você permiti-lo.',

  messageAlertTitle: 'Conteúdo de mensagem preocupante',
  messageAlertBody: 'Uma palavra sinalizada foi vista em {{appName}}.',
  messageAlertBodyOutgoing:
    'Uma palavra sinalizada foi vista em uma mensagem que seu filho escreveu em {{appName}}.',
  messageAlertTitleSearch: 'Busca preocupante',
  messageAlertBodySearch:
    'Uma palavra sinalizada foi detectada em uma busca no {{appName}}.',
  activityTypeMessageAlert: 'Alerta de mensagem',
  messageCheckedTitle: 'Verificado, nada preocupante',
  messageCheckedBody:
    'Uma palavra monitorada apareceu em {{appName}} e se mostrou inofensiva no contexto.',
  activityTypeMessageChecked: 'Verificado',
  callAlertTitle: 'Chamada com um número fora dos contactos',
  callAlertBodyOutgoing:
    'O seu filho ligou para um número que não está nos contactos, às {{localTime}}.',
  callAlertBodyOutgoingTimed:
    'O seu filho ligou para um número que não está nos contactos às {{localTime}}, durante {{durationMinutes}} min.',
  callAlertBodyIncoming:
    'Um número que não está nos contactos do seu filho ligou-lhe às {{localTime}}.',
  callAlertBodyIncomingTimed:
    'Um número que não está nos contactos do seu filho ligou-lhe às {{localTime}}, durante {{durationMinutes}} min.',
  activityTypeCallAlert: 'Alerta de chamada',
  appRemovedTitle: 'Aplicativo removido',
  appRemovedBody: 'O aplicativo {{appName}} foi removido do dispositivo da criança.',
  extensionInstalledTitle: 'Extensão do navegador adicionada',
  extensionInstalledBody:
    'A extensão {{appName}} foi adicionada ao navegador da criança.',
  extensionRemovedTitle: 'Extensão do navegador removida',
  extensionRemovedBody: 'A extensão {{appName}} foi removida do navegador da criança.',

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
    'As fotos de SOS e Check-in podem não ser enviadas até que a câmera seja permitida novamente.',

  tamperBackgroundRefreshTitle: 'A Atualização em Segundo Plano foi desativada',
  tamperBackgroundRefreshBody:
    'O KidGate poderá ser atualizado com menos frequência em segundo plano até que a Atualização em Segundo Plano seja ativada novamente.',

  tamperDeviceClockTitle: 'A data ou a hora foi alterada',
  tamperDeviceClockBody:
    'O relógio deste dispositivo não corresponde mais ao horário correto. O Tempo de Uso e os Horários bloqueados continuarão seguindo o horário correto.',

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
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Todos',
  dateToday: 'Hoje',
  dateYesterday: 'Ontem',

  filterByDevice: 'Filtrar por {{label}}',
  filterByChild: 'Mostrar apenas {{label}}',

  openFullSosHistory: 'Abrir histórico completo de SOS',
  openActivityDetails: 'Ver detalhes',

  unknownDevice: 'Dispositivo desconhecido',

  basicActivityNote:
    'Eventos de bloqueio, desbloqueio e do dispositivo são registrados em Atividades.',
  tamperUninstallProtectionTitle: 'Proteção contra desinstalação desligada',
  tamperUninstallProtectionBody: 'Agora o KidGate pode ser removido deste telefone.',
} as const;
