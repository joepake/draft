export const errors = {
  timeRequestAlreadyResolved:
    'Diese Anfrage wurde bereits von einem anderen Elternteil bearbeitet.',
  emailAlreadyInUse: 'Diese E-Mail-Adresse ist bereits registriert.',
  invalidEmail: 'Ungültige E-Mail-Adresse.',
  weakPassword: 'Das Passwort muss mindestens 6 Zeichen lang sein.',
  invalidEmailOrPassword: 'Ungültige E-Mail-Adresse oder falsches Passwort.',
  tooManyRequests: 'Zu viele Versuche. Bitte versuche es später erneut.',
  somethingWentWrong: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
  unableToCreateAccount:
    'Konto konnte nicht erstellt werden. Bitte versuche es erneut.',
  unableToSignIn: 'Anmeldung nicht möglich. Bitte versuche es erneut.',
  unableToJoinFamilyAccount:
    'Beitritt zur Familiengruppe nicht möglich. Bitte versuche es erneut.',
  enterEmailAddress: 'Bitte gib deine E-Mail-Adresse ein.',
  unableToCreatePairingCode:
    'Kopplungscode konnte nicht erstellt werden. Bitte versuche es erneut.',
  unableToRedeemPairingCode: 'Dieser Kopplungscode ist ungültig oder abgelaufen.',
  unableToClaimChildPairing:
    'Das Kindergerät konnte nicht verbunden werden. Bitte versuche es erneut.',
  unableToPollChildPairing: 'Der Kopplungsstatus konnte nicht überprüft werden.',
  unableToConfirmChildPairing:
    'Diese Kopplung konnte nicht bestätigt werden. Bitte versuche es erneut.',
  unableToRejectChildPairing:
    'Diese Kopplung konnte nicht abgelehnt werden. Bitte versuche es erneut.',
  photoCaptureCancelled: 'Die Fotoaufnahme wurde abgebrochen.',
  unableToOpenCamera:
    'Die Kamera konnte nicht geöffnet werden. Bitte erlaube den Kamerazugriff in den Geräteeinstellungen.',
  noPhotoCaptured: 'Es wurde kein Foto aufgenommen.',
  simulatorCameraHint:
    'Aktiviere im Simulator zuerst eine Kamera: Simulator → Camera → Front Camera. Versuche danach SOS erneut. Für ein echtes Foto teste auf einem physischen iPhone.',
  notSignedInReopenApp:
    'Du bist nicht angemeldet. Bitte schließe die App und öffne sie erneut.',
  accountMismatchSignOut: 'Kontokonflikt. Bitte melde dich ab und erneut an.',
  storageUploadUnauthorized:
    'Das Foto konnte derzeit nicht hochgeladen werden. Bitte versuche es gleich noch einmal.',
  storageNotSetup:
    'Das Foto konnte derzeit nicht hochgeladen werden. Bitte versuche es gleich noch einmal.',
  noNetworkConnection:
    'Keine Netzwerkverbindung. Bitte überprüfe WLAN oder mobile Daten und versuche es erneut.',
  connectionFailedTitle: 'Verbindung fehlgeschlagen',
  connectionFailedBody:
    'KidGate konnte keine Verbindung herstellen. Bitte überprüfe WLAN oder mobile Daten und wähle anschließend „Erneut verbinden“.',
  reconnect: 'Erneut verbinden',
  unableToUploadPhoto:
    'Das Foto konnte nicht hochgeladen werden. Bitte versuche es erneut.',
  premiumSubscriptionRequired:
    'Diese Funktion braucht Premium. Tageslimit, Sperrzeiten, Standort und SOS bleiben kostenlos.',
  trialEndedCannotJoinFamily:
    'Deine kostenlose Testversion ist abgelaufen. Bitte abonniere Premium, um einer anderen Familie beizutreten.',

  notFamilyMember:
    'Du gehörst nicht mehr zu dieser Familie. Bitte bitte den Familieninhaber, dich erneut einzuladen.',
  familyNotCreated:
    'Erstelle zuerst deine Familie und lade danach einen weiteren Elternteil ein.',
  childDeviceNotAllowed:
    'Dies ist ein Kindergerät und kann daher die Familieneinstellungen nicht verwalten.',
  deviceCredentialMissing:
    'Dieses Gerät muss erneut verbunden werden. Bitte schließe KidGate und öffne es erneut.',
  deviceNotFound: 'Dieses Gerät gehört nicht mehr zu deiner Familie.',
  registerParentDeviceFirst:
    'Richte dieses Gerät zuerst als Eltern-Gerät ein und versuche es dann erneut.',
  pairingCodeFormat: 'Bitte gib den 6-stelligen Code ein.',
  pairingCodeUsed: 'Dieser Code wurde bereits verwendet. Bitte fordere einen neuen an.',
  pairingCodeExpiredChild:
    'Dieser Code ist abgelaufen. Bitte bitte dein Kind, einen neuen Code zu erstellen.',
  pairingCodeExpiredParent:
    'Dieser Code ist abgelaufen. Bitte bitte den anderen Elternteil um einen neuen Code.',
  pairingOwnFamily:
    'Dies ist bereits deine Familie – ein Beitritt ist nicht erforderlich.',
  pairingSessionNotFound: 'Diese Kopplungsanfrage ist nicht mehr verfügbar.',
  pairingAlreadyCompleted: 'Dieses Gerät ist bereits gekoppelt.',
  pairingDeclined: 'Die Kopplungsanfrage wurde auf dem anderen Gerät abgelehnt.',
  pairingNoParentWaiting:
    'Es wartet kein Elternteil auf die Bestätigung. Starte die Kopplung erneut vom Eltern-Gerät.',
  pairingRequestExpired:
    'Diese Kopplungsanfrage ist abgelaufen. Bitte starte den Vorgang erneut.',
  joinRequestNotFound: 'Diese Beitrittsanfrage ist nicht mehr verfügbar.',
  joinRequestResolved: 'Diese Beitrittsanfrage wurde bereits beantwortet.',
  joinRequestExpired:
    'Diese Beitrittsanfrage ist abgelaufen. Bitte fordere eine neue Einladung an.',
  timeRequestPendingExists: 'Du hast bereits eine ausstehende Anfrage.',
  timeRequestCooldown:
    'Bitte warte einen Moment, bevor du eine weitere Anfrage sendest.',
  deviceClockOutOfRange:
    'Datum und Uhrzeit auf diesem Gerät scheinen nicht korrekt zu sein. Bitte aktiviere die automatische Zeiteinstellung.',
  locationSharingDisabled:
    'Die Standortfreigabe ist für dieses Gerät deaktiviert. Bitte aktiviere sie in den Geräteeinstellungen und versuche es erneut.',
  childDeviceNoPushToken:
    'Dieses Kindergerät kann noch keine Anfragen empfangen. Öffne KidGate auf dem Kindergerät und erlaube Benachrichtigungen.',
  unableToRequestLocation:
    'Der aktualisierte Standort konnte derzeit nicht angefordert werden. Bitte versuche es erneut.',
  unableToVerifyPurchase:
    'Der Kauf konnte nicht überprüft werden. Bitte versuche es in einem Moment erneut.',
  noPurchasesToRestore: 'Für dieses Konto gibt es keine Käufe zum Wiederherstellen.',
  noActiveSubscription: 'Für dieses Konto wurde kein aktives Abonnement gefunden.',
  unableToRestorePurchases:
    'Deine Käufe konnten derzeit nicht wiederhergestellt werden. Bitte versuche es erneut.',
  alreadyInFamily: 'Du bist bereits Mitglied dieser Familie.',
  leaveFamilyBeforeJoining:
    'Bitte verlasse zuerst deine aktuelle Familie, bevor du einer anderen beitrittst.',
  deviceLimitReached:
    'Dieser Plan deckt ein Kindergerät ab. Abonniere, um ein weiteres hinzuzufügen.',
};
