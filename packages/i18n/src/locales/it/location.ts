export const location = {
  title: 'Posizione',
  fallbackDeviceName: 'Dispositivo del bambino',
  toastUpdateFailed: 'Impossibile aggiornare la condivisione della posizione. Riprova.',
  toggleLabel: 'Condividi posizione',
  toggleHint:
    'Dopo aver attivato questa opzione, apri KidGate una volta su questo dispositivo.',
  toggleAccessibilityLabel: 'Condividi posizione',
  lastKnownLocation: 'Ultima posizione nota',
  noLocationHint:
    'Attiva la condivisione della posizione, quindi apri KidGate una volta su questo dispositivo.',
  waitingForLocation: 'In attesa della posizione',
  updatedAt: 'Aggiornato {{date}}',
  openInMaps: 'Apri in Mappe',
  openInMapsAccessibility: 'Apri in Mappe',
  refreshButton: 'Aggiorna posizione',
  refreshingButton: 'Aggiornamento…',
  refreshAccessibility: 'Aggiorna posizione',
  toastEnableSharingFirst:
    'Attiva prima la condivisione della posizione, quindi richiedi un aggiornamento.',
  activityTitleRefreshRequested: 'Aggiornamento della posizione richiesto',
  activityDescriptionRefreshRequested:
    'È stato richiesto a {{deviceName}} di inviare la posizione aggiornata.',
  toastRefreshSent:
    '{{deviceName}} aggiornerà la propria posizione non appena riceverà la richiesta.',
  toastRefreshFailed:
    'Impossibile richiedere l’aggiornamento della posizione. Riprova.',
  toastChildNeedsNotifications:
    'Apri KidGate sul dispositivo del bambino e consenti le notifiche affinché le richieste di aggiornamento della posizione possano essere ricevute.',
  checkInBadge: 'Check-In',
  movementHistoryTitle: 'Cronologia degli spostamenti',
  historyEmpty:
    'Nessuna cronologia disponibile. I punti verranno visualizzati dopo un aggiornamento della posizione o un Check-In.',
  historyHighlightAccessibility: 'Evidenzia {{place}} sulla mappa',
  historyOpenMapsAccessibility: 'Apri {{place}} in Mappe',
  latestBadge: 'Più recente',
  unableToRequestLocationRefresh:
    'Impossibile richiedere l’aggiornamento della posizione',
  locationBannerTitle: 'Attiva la posizione',
  locationBannerBody:
    'Il tuo genitore desidera vedere la posizione di questo dispositivo per sapere che sei arrivato in sicurezza.',
  allowLocationButton: 'Consenti posizione',
  locationNotAllowed:
    'L’accesso alla posizione non è ancora consentito. Apri Impostazioni → KidGate → Posizione (oppure attiva prima i Servizi di localizzazione). Se la voce Posizione non è presente, seleziona di nuovo “Consenti posizione”.',
  locationServicesOff:
    'I Servizi di localizzazione sono disattivati per il dispositivo. Apri Impostazioni → Privacy e sicurezza → Servizi di localizzazione, attivali, quindi torna in KidGate e seleziona “Consenti posizione”.',
  locationDeniedInSettings:
    'L’accesso alla posizione per KidGate è stato negato. Apri Impostazioni → KidGate → Posizione e scegli “Durante l’uso dell’app” oppure “Sempre”.',
  locationEnabled:
    'La posizione è attiva. Scegli “Sempre” affinché KidGate possa aggiornare la posizione anche quando l’app è chiusa.',
  backgroundLocationTitle: 'Consenti la posizione anche con l’app chiusa',
  backgroundLocationBody:
    'KidGate necessita dell’accesso alla posizione in background affinché i genitori possano vedere dove si trova questo dispositivo anche quando l’app è chiusa, per la sicurezza della famiglia.',
  locationNote:
    'Mostra la posizione del bambino quando la condivisione della posizione è attiva sul suo dispositivo.',
  placeAlertsNote: 'Invia avvisi di posizione per casa, scuola e altri luoghi sicuri.',
  mapNoLocationsEmpty: 'Nessuna posizione da mostrare',
  mapUnavailable: 'Mappa non disponibile. Controlla la connessione e riprova.',
  historyShowMore: 'Mostra altri {{count}} luoghi',
  historyShowMore_one: 'Mostra 1 altro luogo',
} as const;
