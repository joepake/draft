export const sos = {
  title: 'SOS-Alarme',
  subtitle: '{{deviceName}} · gesendete Fotos erscheinen unten',
  fallbackDeviceName: 'Kindergerät',
  fallbackChildName: 'Kind',
  locationUnavailable: 'Standort nicht verfügbar',
  statusNeedsAttention: 'Erfordert Aufmerksamkeit',
  statusAcknowledged: 'Bestätigt',
  viewPhotoAccessibility: 'SOS-Foto ansehen',
  photoTapHint: 'Tippen, um das vollständige Foto anzuzeigen',
  photoLoadFailed:
    'Dieses Foto konnte nicht geladen werden. Bitte prüfe deine Verbindung und versuche es erneut.',
  noPhoto: 'Diesem Alarm ist kein Foto angehängt.',
  acknowledgedAt: 'Bestätigt {{time}}',
  openInMaps: 'In Karten öffnen',
  acknowledgeButton: 'Ich kümmere mich darum',
  acknowledgingButton: 'Wird gespeichert…',
  toastAcknowledgeFailed:
    'Bestätigung fehlgeschlagen. Bitte versuche es gleich noch einmal.',
  emptyTitle: 'Noch keine SOS-Alarme',
  emptyDescription:
    'Wenn dein Kind SOS 5 Sekunden lang gedrückt hält, erscheinen hier Alarme mit Foto und Standort.',
  alertMessage: '{{childName}} braucht Hilfe — SOS wurde gesendet',
  toastSent:
    'SOS gesendet. Bleib nach Möglichkeit an einem sicheren Ort — deine Eltern wurden benachrichtigt.',
  toastSentWithoutPhoto:
    'SOS gesendet, aber ohne Foto. Bitte erlaube den Kamerazugriff in den Einstellungen und versuche es nach Möglichkeit erneut.',
  toastSendFailed:
    'SOS konnte nicht gesendet werden. Bitte versuche es erneut oder ruf jemanden an, dem du vertraust.',
  sendFailedBannerTitle: 'Dein letzter SOS-Alarm wurde nicht gesendet',
  sendFailedBannerBody:
    'Halte die Taste erneut gedrückt, um es noch einmal zu versuchen. Falls es weiterhin fehlschlägt, ruf sofort jemanden an, dem du vertraust.',
  headerTitle: 'SOS-Notfall',
  headerSubtitle:
    'Nutze dies, wenn du dich unsicher fühlst oder sofort Hilfe brauchst.',
  infoInstantAlertLabel: 'Sofortiger Alarm',
  infoInstantAlertDetail:
    'Deine Eltern erhalten sofort eine dringende Benachrichtigung.',
  infoYourLocationLabel: 'Dein Standort',
  infoYourLocationDetail:
    'Wird mit deinen Eltern geteilt, damit sie wissen, wo du bist.',
  infoQuickSelfieLabel: 'Ein schnelles Foto',
  infoQuickSelfieDetail:
    'Wird nach dem Senden des Alarms hinzugefügt, falls die Kamera bereits verfügbar ist.',
  simulatorTipTitle: 'Simulator-Tipp',
  simulatorTipBody:
    'Aktiviere die Kamera im Simulator-Menü (Front Camera), bevor du SOS sendest, damit ein Testfoto aufgenommen werden kann.',
  guidanceTitle: 'Bevor du sendest',
  guidanceItem1:
    'Versuche, an einem sicheren Ort zu bleiben, während Hilfe unterwegs ist.',
  guidanceItem2:
    'Ruf nach Möglichkeit auch eine vertraute erwachsene Person oder den Notruf an.',
  whatParentsReceive: 'Was die Eltern erhalten',
  holdToSendFiveSeconds: 'Gedrückt halten zum Senden · 5 Sekunden',
  keepHolding: 'Weiter gedrückt halten',
  pressAndHoldToCancel: 'Gedrückt halten — vorzeitig loslassen zum Abbrechen',
  holdToSendSosAccessibility: '5 Sekunden gedrückt halten, um SOS zu senden',
  sosEmergencyAccessibility: 'SOS-Notfall',
  sosEmergencyAlert: 'SOS-Notfallalarm',
  sosAlertSent: 'SOS-Alarm gesendet',
  sosAlertSentDescription:
    '{{deviceName}} hat einen SOS-Alarm gesendet — Hilfe wird benötigt.',
  deviceNeedsHelp: '{{deviceName}} braucht Hilfe',
  tapPhotoToEnlarge: 'Tippe auf das Foto, um es zu vergrößern',
  noPhotoAttached: 'Diesem Alarm wurde kein Foto angehängt.',
  sentRelativeTime: 'Gesendet {{relativeTime}}',
  imOnIt: 'Ich kümmere mich darum',
  acknowledging: 'Wird bestätigt…',
  unableToAcknowledgeSos:
    'Bestätigung fehlgeschlagen. Bitte versuche es gleich noch einmal.',
  noLocationSharedWithSos: 'Mit diesem SOS wurde kein Standort geteilt.',
  emergencySos: 'SOS-Notfall',
  devicePausedAccessibility: 'Gerät von einem Elternteil gesperrt',
  openEmergencySos: 'SOS-Notfall öffnen',
  sosAlertsNote: 'Zeigt SOS-Notfallalarme vom Kindergerät mit Standort an.',
  openLocationInMapsAccessibility: 'Standort in Karten öffnen',
  badgeLabel: 'SOS',
  muteAlarm: 'Diesen Alarm stummschalten',
  alertCount: '{{current}} von {{total}}',
} as const;
