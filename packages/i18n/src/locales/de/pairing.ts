export const pairing = {
  shareInviteButton: 'Code teilen',
  shareInviteMessage:
    'Tritt unserer Familie in KidGate bei: Öffne die App, gehe zu Familie → Code scannen, scanne dann den QR-Code oder gib den Code {{code}} ein. Der Code läuft in 15 Minuten ab.',
  shareChildCodeMessage:
    'Verbinde dieses Kindergerät mit KidGate: Öffne auf dem Elterngerät KidGate → Familie → Code scannen, scanne dann den QR-Code oder gib den Code {{code}} ein. Der Code läuft in 5 Minuten ab.',
  connectChildPhone: 'Ein Kindergerät verbinden',
  parentInstructions:
    'Öffne KidGate auf dem Kindergerät. Wähle auf einem Smartphone oder Tablet „Dies ist ein Kindergerät“. Gib dann den 6-stelligen Code ein, der dort angezeigt wird.',
  parentScanInstructions: 'Richte deine Kamera auf den QR-Code auf dem Kindergerät.',
  childWaitingTitle: 'Warten auf einen Elternteil',
  childWaitingSubtitle:
    'Bitte lasse diesen Bildschirm geöffnet. Ein Elternteil verbindet dieses Gerät über die eigene KidGate-App.',
  childCodeLabel: 'Oder teile diesen Code',
  childScanHint:
    'Elternteil: Öffne KidGate → Familie → {{scan}} → scanne den QR-Code oder gib den Code ein.',
  extensionCloseHint:
    'Dieses Fenster kann geschlossen werden – der Code bleibt gültig. Zum Bestätigen des Elternteils KidGate erneut öffnen.',
  childConnecting: 'Verbunden. Dieses Gerät wird eingerichtet…',
  childPairedTitle: 'Du bist verbunden',
  childPairedSubtitle: 'Dieses Gerät wird eingerichtet…',
  connectChild: 'Kindergerät verbinden',
  waitingChildConfirm: 'Anfrage gesendet. Warten auf Bestätigung auf dem Kindergerät.',
  waitingChildConfirmHint:
    'Wenn das Kindergerät nachfragt, wähle „Ja, verbinden“, um abzuschließen. Ein Fernseher verbindet sich von selbst. Du kannst dies schließen – die Kopplung läuft im Hintergrund weiter.',
  childConfirmedTitle: 'Gerät verbunden',
  childConfirmedBody:
    'Das Kindergerät hat die Kopplung bestätigt. Wähle als Nächstes, wer es nutzt.',
  childRejectedPairing:
    'Das Kindergerät hat diese Kopplung abgelehnt. Hole dir dort einen neuen Code und versuche es erneut.',
  childConfirmExpired:
    'Das Kindergerät hat nicht rechtzeitig bestätigt. Lass dir dort einen neuen Code anzeigen und versuche es erneut.',
  confirmParentTitle: 'Diesen Elternteil bestätigen?',
  confirmParentSubtitle:
    '{{parentLabel}} möchte dieses Gerät verwalten. Akzeptiere nur, wenn du diese Person kennst.',
  confirmParentButton: 'Ja, verbinden',
  rejectParentButton: 'Nicht dieser Elternteil',
  parentAccount: 'Elternkonto',
  unknownParent: 'ein Elternteil',
  expiresIn: 'Läuft in {{countdown}} ab',
  autoRefreshPaused:
    'Die automatische Code-Aktualisierung wurde pausiert, um mobile Daten und Akku zu sparen. Wähle „Neuer Code“, wenn du bereit bist.',
  scanQrTitle: 'QR-Code scannen',
  scanQrSubtitle: 'Richte den QR-Code im Rahmen aus.',
  enterCodeManually: 'Code manuell eingeben',
  manualCodeLabel: 'Code vom Kindergerät',
  openingScanner: 'Kamera wird geöffnet…',
  cameraPermissionRequired:
    'Für das Scannen des QR-Codes ist Kamerazugriff erforderlich.',
  unableToOpenScanner:
    'Der Kamera-Scanner konnte nicht geöffnet werden. Gib den Code stattdessen manuell ein.',
  newCode: 'Neuer Code',
  done: 'Fertig',
  unableToCreateCode:
    'Ein Code konnte nicht erstellt werden. Bitte versuche es erneut.',
  extensionUnsupportedSystem:
    'Dieses Betriebssystem wird nicht unterstützt. KidGate funktioniert auf einem Chromebook, einem Mac oder einem Windows-PC.',
  deviceLimitReachedCeiling:
    'Diese Familie hat die Anzahl der Geräte erreicht, die KidGate abdeckt ({{limit}}). Entferne ein Gerät, das du nicht mehr nutzt, und versuche es dann erneut.',
  tooManyAttemptsWait:
    'Zu viele Versuche. Bitte versuche es in {{minutes}} Min. erneut.',
  inviteParentTitle: 'Weiteres Elterngerät hinzufügen',
  inviteParentInstructions:
    'Öffne auf dem anderen Gerät KidGate → Familie → Code scannen, und scanne dann innerhalb von 15 Minuten diesen QR-Code oder gib den Code ein. Genehmige die Anfrage hier, um diesen Elternteil zu verbinden.',
  inviteCodeLabel: 'Oder teile diesen Code',
  joinFamilyTitle: 'Familie beitreten',
  joinFamilyScanInstructions:
    'Scanne den Einladungs-QR-Code eines Elternteils, der bereits in dieser Familie ist.',
  joinFamilyManualInstructions:
    'Gib den 6-stelligen Einladungscode eines Elternteils ein, der bereits in dieser Familie ist.',
  joinFamilyCodeLabel: 'Einladungscode von einem Elternteil',
  joinFamilyButton: 'Familie beitreten',
  parentJoinRequest: 'Warten auf Genehmigung des Familieninhabers',
  parentJoinApprove: 'Genehmigen',
  parentJoinDecline: 'Ablehnen',
  parentJoinRejected: 'Der Familieninhaber hat deine Anfrage abgelehnt.',
  parentJoinExpired:
    'Die Genehmigungsanfrage ist abgelaufen. Bitte um eine neue Einladung.',
  unableToResolveParentJoin:
    'Diese Beitrittsanfrage konnte nicht beantwortet werden. Bitte versuche es erneut.',
  joinedFamily:
    'Du bist der Familie beigetreten. Die Kindergeräte der Familie erscheinen jetzt hier.',
  joinedFamilyTitle: 'Familie beigetreten',
  joinedFamilyMessage:
    'Du bist „{{familyName}}“ beigetreten. Die Kindergeräte dieser Familie erscheinen jetzt auf diesem Gerät.',
  createFamilyTitle: 'Erstelle deine Familie',
  createFamilyInstructions:
    'Bitte benenne deine Familie, bevor du einen weiteren Elternteil einlädst. Andere Elternteile treten dieser Familie bei und sehen dieselben Kindergeräte.',
  familyNamePlaceholder: 'Familienname',
  createFamilyButton: 'Familie erstellen',
};
