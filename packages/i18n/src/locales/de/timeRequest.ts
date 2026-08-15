export const timeRequest = {
  alertMorePending: '{{count}} weitere Anfragen warten unter Familie.',
  pauseConfirmTitle: '{{deviceName}} sperren?',
  pauseConfirmBody:
    'Damit wird das Gerät jetzt gesperrt, statt mehr Zeit zu gewähren. {{deviceName}} ist nicht nutzbar, bis du es entsperrst.',
  pauseConfirmAction: 'Gerät sperren',
  alertTitle: 'Zeitanfrage erhalten',
  alertMessage: '{{deviceName}} hat {{minutes}} zusätzliche Minuten angefragt.',
  alertReasonLine: 'Grund: {{reason}}',
  alertNotNow: 'Nicht jetzt',
  alertApprove: 'Genehmigen',
  alertPauseInstead: 'Stattdessen sperren',
  alertLater: 'Später',
  toastDeclineFailed:
    'Anfrage konnte nicht abgelehnt werden. Bitte versuche es erneut.',
  toastApproveFailed:
    'Anfrage konnte nicht genehmigt werden. Bitte versuche es erneut.',
  toastLockFailed: 'Gerät konnte nicht gesperrt werden. Bitte versuche es erneut.',
  statusWaitingForApproval:
    'Warte auf Antwort deiner Eltern ({{minutes}} Minuten angefragt).',
  statusCooldown: 'Du kannst in {{time}} eine neue Anfrage senden.',
  statusDailyLimitExceeded:
    'Du hast deine gesamte Bildschirmzeit für heute aufgebraucht. Apps öffnen sich morgen wieder — oder früher, wenn deine Eltern mehr Zeit hinzufügen.',
  errorDeviceNotRegistered: 'Dieses Gerät ist nicht registriert.',
  errorMinutesRange: 'Gib einen Wert zwischen {{min}} und {{max}} Minuten ein.',
  toastRequestSent: 'Anfrage gesendet. Deine Eltern werden sie in Kürze prüfen.',
  toastDeviceNotRegistered: 'Dieses Gerät ist noch nicht registriert.',
  toastSendFailed:
    'Deine Anfrage konnte nicht gesendet werden. Bitte versuche es erneut.',
  askForMoreTime: 'Mehr Zeit anfragen',
  askForMoreTimeSubtitle:
    'Wenn deine Eltern zustimmen, bekommst du heute mehr Bildschirmzeit.',
  sendToParent: 'An Eltern senden',
  howManyMinutes: 'Wie viele Minuten brauchst du?',
  minutesNeeded: 'Benötigte Minuten',
  reasonOptional: 'Grund (optional)',
  reasonPlaceholder: 'Hausaufgaben, Gruppenlernen usw.',
  enterAtLeastMinutes: 'Gib mindestens {{min}} Minuten ein.',
  requestsLimitedToMinutes: 'Jede Anfrage ist auf {{max}} Minuten begrenzt.',
  unableToSendRequest:
    'Deine Anfrage kann gerade nicht gesendet werden. Bitte versuche es erneut.',
  needsApproval: 'Genehmigung erforderlich',
  timeRequests: 'Zeitanfragen',
  plusMinutesBadge: '+{{minutes}} Min.',
  notNow: 'Nicht jetzt',
  approve: 'Genehmigen',
  unableToDeclineRequest:
    'Anfrage konnte nicht abgelehnt werden. Bitte versuche es erneut.',
  unableToApproveRequest:
    'Anfrage konnte nicht genehmigt werden. Bitte versuche es erneut.',
  pendingRequestExists:
    'Du hast bereits eine Anfrage gesendet. Bitte warte auf die Antwort deiner Eltern.',
  waitBeforeAnotherRequest:
    'Bitte warte ein paar Minuten, bevor du eine weitere Anfrage sendest.',
  timeRequestSent: 'Zeitanfrage gesendet',
  timeRequestSentDescription:
    '{{deviceName}} hat {{minutes}} zusätzliche Minuten angefragt.',
  timeRequestApproved: 'Zeitanfrage genehmigt',
  timeRequestDenied: 'Zeitanfrage abgelehnt',
  timeRequestApprovedDescription:
    '{{deviceName}} hat heute {{minutes}} Extra-Minuten erhalten.',
  timeRequestDeniedDescription: '{{minutes}} Minuten für {{deviceName}} abgelehnt.',
  needMoreTimeTitle: 'Mehr Zeit nötig?',
  askParentForMoreTime:
    'Du kannst deine Eltern heute um etwas mehr Bildschirmzeit bitten.',
  requestMoreTime: 'Mehr Zeit anfragen',
  requestMoreTimeAccessibilityLabel: 'Mehr Zeit anfragen',
  requestPendingButton: 'Anfrage ausstehend',
  requestPendingChip: 'Anfrage ausstehend',
  waitCooldown: 'Warte {{cooldown}}',
  timeRequestNote:
    'Wenn deine Eltern zustimmen, bekommst du heute mehr Bildschirmzeit.',
} as const;
