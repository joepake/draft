export const childSettings = {
  pageTitle: 'Einstellungen',
  statusUnlocked: 'Elternzugriff aktiv',
  statusLocked: 'Eltern-PIN erforderlich',
  preferencesSectionTitle: 'Präferenzen',
  darkModeLabel: 'Dunkelmodus',
  darkModeHint: 'Abends angenehmer für die Augen',
  leaveFamilyAlertTitle: 'Diese Familie verlassen?',
  leaveFamilyAlertMessage:
    'Dieses Gerät wird von der Familie getrennt. Um wieder beizutreten, muss ein Elternteil es in seiner KidGate-App erneut verbinden.',
  leaveFamily: 'Familie verlassen',
  uninstallProtectionSectionTitle: 'Deinstallationsschutz',
  uninstallProtectionSectionDescription:
    'Verhindert, dass dieses Handy KidGate entfernt. Android fragt einmal nach der Berechtigung.',
  uninstallProtectionLabel: 'Deinstallation verhindern',
  uninstallProtectionHintOn:
    'An. Eltern werden benachrichtigt, wenn er ausgeschaltet wird.',
  uninstallProtectionHintOff:
    'Aus. KidGate kann von diesem Handy deinstalliert werden.',
  uninstallProtectionTurnedOff: 'Der Deinstallationsschutz ist aus.',
  uninstallProtectionFailed:
    'Der Deinstallationsschutz konnte nicht geändert werden. Bitte versuche es erneut.',
  deviceAdminExplanation:
    'Erschwert das Entfernen von KidGate: Vor dem Deinstallieren muss dieser Schutz erst ausgeschaltet werden, und dabei wird ein Elternteil benachrichtigt. KidGate nutzt keine weiteren Rechte zur Geräteverwaltung: Es kann dieses Gerät nicht löschen, die Displaysperre nicht ändern und die Kamera nicht ausschalten.',
  deviceAdminDisableWarning:
    'Wenn du das ausschaltest, kann KidGate von diesem Gerät deinstalliert werden. Deine Eltern werden benachrichtigt.',
  appPickerUnavailable:
    'Die Funktion „Blockierte Apps“ ist auf diesem Gerät nicht verfügbar.',
  messageSafetySectionTitle: 'Nachrichtenwarnungen',
  messageSafetySectionDescription:
    'Erteile die Berechtigung hier. Nachrichtenwarnungen werden in der Eltern-App oder im Web-Dashboard ein- oder ausgeschaltet.',
} as const;
