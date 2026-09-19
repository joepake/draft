export const blockedApps = {
  title: 'Apps bloqueadas',
  installApprovalTitle: 'Aprobar aplicaciones nuevas',
  installApprovalSubtitleOn:
    'Las apps instaladas a partir de ahora quedan bloqueadas hasta que las apruebes.',
  installApprovalSubtitleOff:
    'Actívalo para bloquear cada app recién instalada hasta que la apruebes.',
  installApprovalSubtitleIos:
    'En iPhone y iPad esto oculta la App Store en su lugar — Apple no permite aprobar apps una por una.',
  installApprovalStatusOn: 'Las apps nuevas necesitan aprobación',
  installApprovalStatusOff: 'Las apps nuevas se abren libremente',
  installApprovalStatusIos: 'App Store oculta',
  installApprovalAccessibilityLabel: 'Aprobar aplicaciones nuevas',
  installApprovalInfoTitle: 'Cómo funciona la aprobación',
  installApprovalInfoLine1:
    'El dispositivo del niño bloquea cualquier app instalada después de activar esto, sin esperar tu confirmación.',
  installApprovalInfoLine2:
    'Recibirás una notificación, y la app aparecerá abajo y en Aplicaciones hasta que la permitas.',
  installApprovalInfoLine3:
    'Permitir una app hace que se abra de inmediato. Una app que no permitas simplemente sigue bloqueada.',
  pendingSectionTitle: 'Bloqueadas automáticamente, esperando tu decisión',
  pendingSectionSubtitle:
    'Instaladas después de activar la aprobación. Nada de esto se eligió en el dispositivo del niño.',
  pendingInstalledAt: 'Instalada {{when}}',
  pendingEmpty: 'No hay apps nuevas esperando aprobación.',
  allowApp: 'Permitir',
  allowingApp: 'Permitiendo…',
  toastAppAllowed: '{{appName}} ya puede abrirse.',
  toastAllowFailed: 'No se pudo permitir esta app. Inténtalo de nuevo.',
  toastInstallApprovalSaveFailed: 'No se pudo guardar. Inténtalo de nuevo.',
  toastChooseAppsFirst:
    'Pide a tu hijo que abra los ajustes de KidGate y elija primero las apps a bloquear.',
  toastSaveFailed: 'No se pudo guardar. Inténtalo de nuevo.',
  statusBlockingOn: 'Bloqueo activado',
  statusBlockingOff: 'Sin bloqueo',
  heroTitle: 'Apps seleccionadas para bloquear',
  heroSubtitle:
    'Estas apps y categorías se eligen en el dispositivo del niño. KidGate sincroniza la lista aquí para que la revises.',
  statAppsLabel: 'Apps',
  statCategoriesLabel: 'Categorías',
  toggleTitle: 'Activar el bloqueo de apps',
  toggleSubtitleOn:
    'Las apps seleccionadas están bloqueadas en el dispositivo del niño.',
  toggleSubtitleOff: 'Actívalo para bloquear a distancia las apps seleccionadas.',
  toggleAccessibilityLabel: 'Activar el bloqueo de apps',
  emptyTitle: 'Aún no hay apps bloqueadas',
  emptySubtitle:
    'En el dispositivo del niño, abre Ajustes de KidGate → Elegir apps para bloquear, introduce el PIN parental y guarda la selección.',
  sectionTitle: 'Lista de bloqueo',
  privacyTitle: 'La lista de apps viene del dispositivo del niño',
  privacySubtitle:
    'En iOS, Apple puede ocultar los nombres exactos de las apps a los dispositivos de los padres. En otros dispositivos, los nombres seleccionados se sincronizan aquí. Cambiar la lista sigue requiriendo el PIN parental en el dispositivo del niño.',
  infoTitle: 'Cómo funciona',
  infoLine1:
    'Elige las apps en el dispositivo del niño tras introducir el PIN parental.',
  infoLine2:
    'El Bloqueo de dispositivo, las Horas bloqueadas y el Límite diario siguen bloqueando todas las apps.',
  infoLine3: 'Activa o desactiva el bloqueo en cualquier momento desde esta pantalla.',
  appKind: 'App',
  categoryKind: 'Categoría',
  websiteKind: 'Sitio web',
  noAppsSelectedYet: 'Aún no hay apps seleccionadas',
  blockedAppCount: '{{count}} apps',
  blockedAppCount_one: '{{count}} app',
  blockedCategoryCount: '{{count}} categorías',
  blockedCategoryCount_one: '{{count}} categoría',
  blockedItemCount: '{{count}} elementos bloqueados',
  blockedItemCount_one: '{{count}} elemento bloqueado',
  blockedListReady: 'Lista de bloqueo lista',
  blockedAppsLabel: 'Apps bloqueadas',
  appsConfiguredChip: 'Apps configuradas',
  appsNotSetChip: 'Apps sin configurar',
  appBlockingSectionTitle: 'Bloqueo de apps',
  appBlockingSectionDescription:
    'Elige qué apps pueden bloquear los padres en este dispositivo.',
  savedItemsForBlocking: 'Se guardaron {{count}} elementos para bloquear.',
  savedItemsForBlocking_one: 'Se guardó {{count}} elemento para bloquear.',
  noAppsSelected: 'No se seleccionó ninguna app.',
  unableToOpenAppPicker: 'No se pudo abrir el selector de apps. Inténtalo de nuevo.',
  wizardStepPin: 'Introduce el PIN parental cuando Ajustes lo pida.',
  wizardStepChoose: 'Abre Elegir apps para bloquear, marca las apps y guarda.',
} as const;
