export const location = {
  title: 'Localização',
  fallbackDeviceName: 'Dispositivo da criança',
  syncNote:
    'A localização pode levar alguns minutos para ser atualizada — mais tempo se o dispositivo não tiver conexão com a internet ou tiver sido fechado inesperadamente.',
  toastUpdateFailed:
    'Não foi possível atualizar o compartilhamento de localização. Tente novamente.',
  toggleLabel: 'Compartilhar localização',
  toggleHint: 'Depois de ativar esta opção, abra o KidGate uma vez neste dispositivo.',
  toggleAccessibilityLabel: 'Compartilhar localização',
  lastKnownLocation: 'Última localização conhecida',
  nearPlace: 'Perto de {{place}}',
  noLocationHint:
    'Ative o compartilhamento de localização e abra o KidGate uma vez neste dispositivo.',
  waitingForLocation: 'Aguardando localização',
  updatedAt: 'Atualizado em {{date}}',
  openInMaps: 'Abrir no Mapas',
  openInMapsAccessibility: 'Abrir no Mapas',
  refreshButton: 'Atualizar localização',
  refreshingButton: 'Atualizando…',
  refreshAccessibility: 'Atualizar localização',
  toastEnableSharingFirst:
    'Ative o compartilhamento de localização antes de solicitar uma atualização.',
  activityTitleRefreshRequested: 'Atualização de localização solicitada',
  activityDescriptionRefreshRequested:
    'Foi solicitado que {{deviceName}} envie sua localização atual.',
  toastRefreshSent:
    '{{deviceName}} atualizará sua localização assim que receber a solicitação.',
  toastRefreshFailed:
    'Não foi possível solicitar a atualização da localização. Tente novamente.',
  toastChildNeedsNotifications:
    'Abra o KidGate no dispositivo da criança e permita as notificações para que as solicitações de atualização de localização possam ser recebidas.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Histórico de localização',
  historyEmpty:
    'Ainda não há histórico. Os pontos aparecerão após uma atualização de localização ou um Check-in.',
  historyHighlightAccessibility: 'Destacar {{place}} no mapa',
  historyOpenMapsAccessibility: 'Abrir {{place}} no Mapas',
  latestBadge: 'Mais recente',
  unableToRequestLocationRefresh:
    'Não foi possível solicitar a atualização da localização',
  locationBannerTitle: 'Ativar localização',
  locationBannerBody:
    'Seus pais gostariam de ver a localização deste dispositivo para saber que você chegou em segurança.',
  locationBannerBodySharingOff:
    'O compartilhamento de localização está desligado agora, então nada é enviado. Se você permitir aqui, funciona na hora caso seus pais liguem mais tarde.',
  allowLocationButton: 'Permitir localização',
  locationNotAllowed:
    'A localização ainda não foi permitida. Abra Ajustes → KidGate → Localização (ou ative primeiro os Serviços de Localização). Se a opção Localização não aparecer, selecione novamente “Permitir localização”.',
  locationServicesOff:
    'Os Serviços de Localização estão desativados neste dispositivo. Abra Ajustes → Privacidade e Segurança → Serviços de Localização, ative-os e volte ao KidGate para selecionar “Permitir localização”.',
  locationDeniedInSettings:
    'O acesso à localização foi negado para o KidGate. Abra Ajustes → KidGate → Localização e escolha “Durante o uso do app” ou “Sempre”.',
  locationEnabled:
    'A localização está ativada. Escolha “Sempre” para que o KidGate possa atualizar a localização mesmo quando o aplicativo estiver fechado.',
  backgroundLocationTitle: 'Permitir localização com o aplicativo fechado',
  backgroundLocationBody:
    'O KidGate precisa de acesso à localização em segundo plano para que os pais possam ver onde este dispositivo está, mesmo quando o aplicativo estiver fechado, ajudando a manter a segurança da família.',
  locationNote:
    'Mostra a localização da criança quando o compartilhamento de localização está ativado no dispositivo da criança.',
  placeAlertsNote:
    'Envia alertas de localização para casa, escola e outros locais seguros.',
  mapNoLocationsEmpty: 'Ainda não há localizações para mostrar',
  mapUnavailable: 'Mapa indisponível. Verifique sua conexão e tente novamente.',
  historyShowMore: 'Ver mais {{count}} locais',
  historyShowMore_one: 'Ver mais 1 local',
  childSharingHint: 'Vale para todos os dispositivos atribuídos a {{childName}}.',
  childNoCapableDevices:
    'Nenhum dispositivo de {{childName}} consegue informar a localização.',
  childCarriedQuestion: 'Qual dispositivo vai com {{childName}}?',
  childCarriedHint:
    'A localização é lida desse dispositivo. Um tablet em casa pode informar uma posição mais recente que o celular na mochila, então o KidGate nunca adivinha.',
  childDevicesOnline: '{{online}} de {{total}} online',
  childNoneOnline: 'Nenhum dispositivo online',
  childPickCarried: 'Anda junto',
  childPickCarriedA11y:
    'Marcar {{deviceName}} como o dispositivo que {{childName}} leva',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Tempo nos seus lugares',
  placeTotalsNote:
    'Dos últimos {{count}} dias de histórico. Só contam os lugares salvos aqui.',
  placeTotalsNote_one: 'Do último dia de histórico. Só contam os lugares salvos aqui.',
} as const;
