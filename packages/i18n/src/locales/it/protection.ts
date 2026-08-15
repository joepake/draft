export const protection = {
  permissionOffOnChildDevice:
    'Questa autorizzazione è disattivata sul dispositivo del bambino.',
  permissionNotSetUpYet: 'Questa autorizzazione non è ancora stata configurata.',
  permissionRestrictedByIos: 'Questa autorizzazione è limitata dalle impostazioni iOS.',
  permissionStatusUnknown:
    'KidGate non è riuscito a leggere lo stato di questa autorizzazione.',
  kidGateOffline: 'KidGate offline',
  childAppMayBeOffline:
    'L’app sul dispositivo del bambino potrebbe essere chiusa, eliminata o offline.',
  statusNotUpdatedYet: 'Stato non ancora aggiornato',
  openKidGateOnChildPhone: 'Apri KidGate una volta sul dispositivo del bambino.',
  screenTimePermission: 'Autorizzazione Tempo di utilizzo',
  screenTimeAccessOff:
    'L’accesso a Tempo di utilizzo è disattivato, quindi il blocco delle app e i limiti potrebbero smettere di funzionare.',
  screenTimeSetupIncomplete:
    'La configurazione di Tempo di utilizzo è incompleta sul dispositivo del bambino.',
  usageAccessPermission: 'Accesso ai dati di utilizzo',
  usageAccessOff:
    'L’Accesso ai dati di utilizzo è disattivato, quindi KidGate non può monitorare il tempo di utilizzo né applicare i limiti.',
  usageAccessSetupIncomplete:
    'Attiva l’Accesso ai dati di utilizzo per KidGate nelle impostazioni Android.',
  overlayPermission: 'Visualizza sopra altre app',
  batteryOptimizationPermission: 'Batteria senza limitazioni',
  batteryOptimizationOff:
    'Consenti l’uso della batteria senza limitazioni così KidGate può mantenere attive le protezioni.',
  exactAlarmPermission: 'Sveglie e promemoria',
  exactAlarmOff:
    'Consenti Sveglie e promemoria così gli Orari di blocco iniziano in orario.',
  accessibilityPermission: 'Accessibilità (assistente di blocco)',
  accessibilityOff:
    'Attiva l’Accessibilità per KidGate così il blocco resta sopra le altre app.',
  overlayOffForLock:
    'Attiva Visualizza sopra altre app così la schermata di blocco può coprire le altre app.',
  lockNotReadyTitle: 'Blocco non pronto',
  lockNotReadyBody:
    'KidGate non può mantenere bloccato questo dispositivo Android finché Visualizza sopra altre app e Accessibilità non sono attivi. Apri KidGate sul dispositivo del bambino e completa questi passaggi:',
  lockNotReadyBodyIos:
    'KidGate non può bloccare questo iPhone finché l’accesso a Tempo di utilizzo non viene approvato sul dispositivo del bambino. Apri KidGate su quel dispositivo e completa questi passaggi:',
  locationPermission: 'Autorizzazione alla posizione',
  notificationsPermission: 'Autorizzazione alle notifiche',
  backgroundUpdates: 'Aggiornamenti in background',
  backgroundUpdatesRestricted:
    'Gli aggiornamenti in background sono limitati su questo dispositivo.',
  turnOnBackgroundUpdatesInSettings:
    'Attivali nelle Impostazioni del dispositivo così KidGate resta sincronizzato.',
  inactive: 'Inattivo',
  openKidGateToSyncProtections:
    'Apri KidGate su questo dispositivo così le protezioni possono sincronizzarsi di nuovo.',
  needsAttention: 'Richiede attenzione',
  protectionsNeedSetupAndroid:
    'Alcune protezioni richiedono la configurazione sul dispositivo del bambino.',
  protectionsNeedSetupIos:
    'Alcune protezioni richiedono la configurazione sul dispositivo del bambino.',
  protected: 'Protetto',
  protectionsLookHealthy: 'Le protezioni di KidGate funzionano correttamente.',
  healthBadgeProtected: 'Verde — protetto',
  healthBadgeWarning: 'Giallo — richiede configurazione',
  healthBadgeInactive: 'Rosso — dispositivo del bambino offline',
  iosFeatureSupportEvaluating:
    'Il supporto di questa funzione su iOS è in fase di valutazione.',
  iosUpgradeRequiredNote:
    'Serve iOS 16 o versioni successive. Aggiorna il dispositivo del bambino in Impostazioni › Generali › Aggiornamento software. Se non viene offerto alcun aggiornamento, questo iPad o iPhone è troppo vecchio per essere supportato da Apple.',
  iosUpgradeActionLabel: 'Richiede iOS 16',
  lockUnlockNote:
    'Blocca il dispositivo tramite Tempo di utilizzo dopo che il bambino ha autorizzato l’accesso.',
  scheduleNote:
    'Fino a 3 fasce di Ore bloccate bloccano le app tramite Tempo di utilizzo.',
  individualAppBlockingNote:
    'Il bambino seleziona le app dopo aver inserito il PIN genitore a 6 cifre.',
  tamperAlertsNote:
    'Segnala i cambiamenti delle autorizzazioni e quando l’app sul dispositivo del bambino non si aggiorna da un po’.',
  appReviewRemindersNote:
    'iOS non espone gli eventi di installazione; controlla periodicamente le app insieme al dispositivo del bambino.',
} as const;
