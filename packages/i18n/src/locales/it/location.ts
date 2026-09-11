export const location = {
  title: 'Posizione',
  fallbackDeviceName: 'Dispositivo del bambino',
  syncNote:
    'La posizione può richiedere alcuni minuti per aggiornarsi — più a lungo se il dispositivo non ha connessione a Internet o si è chiuso in modo imprevisto.',
  toastUpdateFailed: 'Impossibile aggiornare la condivisione della posizione. Riprova.',
  toggleLabel: 'Condividi posizione',
  toggleHint:
    'Dopo aver attivato questa opzione, apri KidGate una volta su questo dispositivo.',
  toggleAccessibilityLabel: 'Condividi posizione',
  lastKnownLocation: 'Ultima posizione nota',
  nearPlace: 'Vicino a {{place}}',
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
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Cronologia degli spostamenti',
  historyEmpty:
    'Nessuna cronologia disponibile. I punti verranno visualizzati dopo un aggiornamento della posizione o un Check-in.',
  historyHighlightAccessibility: 'Evidenzia {{place}} sulla mappa',
  historyOpenMapsAccessibility: 'Apri {{place}} in Mappe',
  latestBadge: 'Più recente',
  unableToRequestLocationRefresh:
    'Impossibile richiedere l’aggiornamento della posizione',
  locationBannerTitle: 'Attiva la posizione',
  locationBannerBody:
    'I tuoi genitori vogliono vedere la posizione di questo dispositivo per sapere che sei arrivato in sicurezza.',
  locationBannerBodySharingOff:
    'La condivisione della posizione è disattivata, quindi non viene inviato niente. Se dai il permesso qui, funzionerà subito se i tuoi genitori la attivano più avanti.',
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
  childSharingHint: 'Vale per ogni dispositivo assegnato a {{childName}}.',
  childNoCapableDevices:
    'Nessun dispositivo di {{childName}} può segnalare la posizione.',
  childCarriedQuestion: 'Quale dispositivo porta con sé {{childName}}?',
  childCarriedHint:
    'La posizione viene letta da quel dispositivo. Un tablet rimasto a casa può segnalare una posizione più recente del telefono nello zaino, quindi KidGate non tira mai a indovinare.',
  childDevicesOnline: '{{online}} di {{total}} online',
  childNoneOnline: 'Nessun dispositivo online',
  childPickCarried: 'Lo porta',
  childPickCarriedA11y:
    'Imposta {{deviceName}} come il dispositivo che {{childName}} porta con sé',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Tempo nei tuoi luoghi',
  placeTotalsNote:
    'Dagli ultimi {{count}} giorni di cronologia. Contano solo i luoghi salvati qui.',
  placeTotalsNote_one:
    'Dall’ultimo giorno di cronologia. Contano solo i luoghi salvati qui.',
  wizardStepAllow:
    'Seleziona Consenti, poi Sempre così gli aggiornamenti continuano in background.',
  requestNoFix:
    'Questo dispositivo non ha ottenuto una posizione. La localizzazione potrebbe non essere ancora consentita.',
  requestSharingOff:
    'La condivisione della posizione è disattivata su questo dispositivo.',
  requestUnsupported: 'Questo dispositivo non può comunicare la posizione.',
  cardSharingOff: 'La condivisione della posizione è disattivata',
  cardPermissionOff: 'La posizione non è consentita su questo dispositivo',
  cardNotUpdating: 'La posizione non si aggiorna più',
} as const;
