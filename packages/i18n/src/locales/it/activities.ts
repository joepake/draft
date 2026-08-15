export const activities = {
  title: 'Attività',
  subtitleAllDevices: 'Eventi più recenti di tutti i dispositivi',
  subtitleTimelineForDevice: 'Cronologia di {{deviceName}}',
  fallbackDeviceName: 'dispositivo',
  liveBadge: 'Live',
  errorTitle: 'Impossibile caricare l’attività',
  tryAgain: 'Riprova',

  emptyTitleAll: 'Nessuna attività',
  emptyTitleDevice: 'Nessuna attività per questo dispositivo',
  emptyDescriptionAll:
    'Gli eventi di blocco, sblocco e SOS dei dispositivi dei tuoi figli verranno visualizzati qui.',
  emptyDescriptionDevice:
    'Seleziona un altro dispositivo oppure attendi gli eventi di blocco, sblocco e SOS di questo dispositivo.',

  guestEmptyTitle: 'La tua attività',
  guestEmptyDescription:
    'Dopo aver collegato un dispositivo del bambino, gli eventi di blocco, sblocco, SOS e delle app verranno visualizzati qui in tempo reale.',
  guestSignInButton: 'Accedi',
  guestCreateAccount: 'Crea un account genitore',
  guestSubtitle: 'Accedi per seguire l’attività dei dispositivi dei tuoi figli.',

  guestPreviewHeading: 'Cosa vedrai',
  guestPreviewLock: 'Dispositivo bloccato',
  guestPreviewSos: 'Avviso SOS',
  guestPreviewScreenTime: 'Aggiornamento Tempo di utilizzo',
  guestPreviewHint:
    'Esempio: gli eventi reali verranno visualizzati dopo aver collegato un dispositivo.',

  activityTypeLocked: 'Bloccato',
  activityTypeUnlocked: 'Sbloccato',
  activityTypeAppOpened: 'App aperta',
  activityTypeAppBlocked: 'App bloccata',
  activityTypeAppInstalled: 'App installata',
  activityTypeAppRemoved: 'App disinstallata',
  activityTypePlaceEnter: 'Ingresso in un luogo',
  activityTypePlaceExit: 'Uscita da un luogo',
  activityTypeTamper: 'Protezione',
  activityTypeScreenTime: 'Tempo di utilizzo',
  activityTypeEmergency: 'Emergenza',
  activityTypeUnknown: 'Attività',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Un’app bloccata è stata aperta e KidGate l’ha chiusa.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'Una nuova app è stata installata sul dispositivo del bambino.',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'Un’app è stata disinstallata dal dispositivo del bambino.',

  placeEnterTitle: 'Entrato in {{placeName}}',
  placeEnterBody: 'Il dispositivo del bambino è entrato in un luogo salvato.',

  placeExitTitle: 'Uscito da {{placeName}}',
  placeExitBody: 'Il dispositivo del bambino ha lasciato un luogo salvato.',

  tamperTitle: 'Un’autorizzazione di protezione è stata disattivata',
  tamperFallbackTitle: 'Un’autorizzazione di protezione è stata disattivata',
  tamperFallbackBody:
    'Un’autorizzazione di protezione è stata disattivata sul dispositivo del bambino.',

  tamperOverlayTitle:
    'È stata disattivata l’autorizzazione “Mostra sopra le altre app”',
  tamperOverlayBody:
    'La schermata di blocco potrebbe non essere più visualizzata sopra le altre app finché questa autorizzazione non verrà riattivata.',

  tamperAccessibilityTitle: 'L’Accessibilità è stata disattivata',
  tamperAccessibilityBody:
    'Il blocco delle app e le restrizioni potrebbero non funzionare correttamente finché l’Accessibilità non verrà riattivata.',
  tamperUsageAccessTitle: 'L’accesso all’utilizzo delle app è stato disattivato',
  tamperUsageAccessBody:
    'I limiti delle app e gli Orari di blocco potrebbero smettere di funzionare finché KidGate non potrà di nuovo leggere l’utilizzo delle app sul dispositivo del bambino.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'L’accesso al Tempo di utilizzo è stato disattivato',
  tamperScreenTimeIosBody:
    'I limiti delle app e gli Orari di blocco potrebbero smettere di funzionare finché l’accesso al Tempo di utilizzo non verrà di nuovo consentito sul dispositivo del bambino.',
  tamperUsageAccessAndroidTitle: 'L’accesso ai dati di utilizzo è stato disattivato',
  tamperUsageAccessAndroidBody:
    'I limiti delle app e gli Orari di blocco potrebbero smettere di funzionare finché l’accesso ai dati di utilizzo non verrà riattivato per KidGate sul dispositivo del bambino.',

  tamperBatteryTitle: 'La modalità Batteria senza restrizioni è stata disattivata',
  tamperBatteryBody:
    'Il sistema potrebbe sospendere KidGate finché la batteria non verrà nuovamente impostata su Senza restrizioni.',

  tamperExactAlarmTitle: 'Sveglie e promemoria disattivato',
  tamperExactAlarmBody:
    'Gli Orari di blocco potrebbero iniziare o finire in ritardo finché Sveglie e promemoria non verrà di nuovo consentito.',

  tamperNotificationsTitle: 'Le notifiche sono state disattivate',
  tamperNotificationsBody:
    'I comandi remoti e gli avvisi per i genitori potrebbero non essere recapitati correttamente a questo dispositivo.',

  tamperLocationTitle: 'La posizione è stata disattivata',
  tamperLocationBody:
    'I genitori non riceveranno aggiornamenti della posizione finché l’accesso alla posizione non verrà ripristinato.',

  tamperCameraTitle: 'La fotocamera è stata disattivata',
  tamperCameraBody:
    'Le foto SOS e Check-In potrebbero non essere inviate finché l’accesso alla fotocamera non verrà ripristinato.',

  tamperBackgroundRefreshTitle: 'Aggiornamento app in background disattivato',
  tamperBackgroundRefreshBody:
    'KidGate potrebbe aggiornarsi meno frequentemente in background finché questa funzione non verrà riattivata.',

  tamperDeviceClockTitle: 'La data o l’ora sono state modificate',
  tamperDeviceClockBody:
    'L’orologio di questo dispositivo non corrisponde più all’ora corretta. Il Tempo di utilizzo e le Ore bloccate continueranno a utilizzare l’ora corretta.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'È stata disattivata l’autorizzazione “Mostra sopra le altre app”.',
  tamperAccessibility: 'Il servizio Accessibilità è stato disattivato.',
  tamperUsageAccess: 'L’accesso all’utilizzo è stato disattivato.',
  tamperBattery: 'La modalità Batteria senza restrizioni è stata disattivata.',
  tamperExactAlarm: 'L’autorizzazione Sveglie e promemoria è stata disattivata.',
  tamperNotifications: 'L’autorizzazione alle notifiche è stata disattivata.',
  tamperLocation: 'L’autorizzazione alla posizione è stata disattivata.',
  tamperCamera: 'L’autorizzazione alla fotocamera è stata disattivata.',
  tamperBackgroundRefresh: 'L’aggiornamento app in background è stato disattivato.',

  filterAllDevices: 'Tutti i dispositivi',
  dateToday: 'Oggi',
  dateYesterday: 'Ieri',

  filterByDevice: 'Filtra per {{label}}',

  openFullSosHistory: 'Apri la cronologia completa degli SOS',

  unknownDevice: 'Dispositivo sconosciuto',

  basicActivityNote:
    'Gli eventi di blocco, sblocco e del dispositivo vengono registrati in Attività.',
  tamperUninstallProtectionTitle: 'Protezione dalla disinstallazione disattivata',
  tamperUninstallProtectionBody: 'Ora KidGate può essere rimosso da questo telefono.',
} as const;
