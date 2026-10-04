export const childSettings = {
  pageTitle: 'Réglages',
  statusUnlocked: 'Accès parent actif',
  statusLocked: 'Code PIN parent requis',
  preferencesSectionTitle: 'Préférences',
  darkModeLabel: 'Mode sombre',
  darkModeHint: 'Plus agréable pour les yeux le soir',
  leaveFamilyAlertTitle: 'Quitter cette famille ?',
  leaveFamilyAlertMessage:
    'Cet appareil sera déconnecté de la famille. Pour la rejoindre, il faudra l’associer de nouveau avec une invitation parentale.',
  leaveFamily: 'Quitter la famille',
  uninstallProtectionSectionTitle: 'Protection contre la désinstallation',
  uninstallProtectionSectionDescription:
    'Empêche ce téléphone de supprimer KidGate. Android demande l’autorisation une fois.',
  uninstallProtectionLabel: 'Empêcher la désinstallation',
  uninstallProtectionHintOn:
    'Activée. Les parents sont prévenus si elle est désactivée.',
  uninstallProtectionHintOff:
    'Désactivée. KidGate peut être désinstallé de ce téléphone.',
  uninstallProtectionTurnedOff:
    'La protection contre la désinstallation est désactivée.',
  uninstallProtectionFailed:
    'Impossible de modifier la protection contre la désinstallation. Réessaie.',
  deviceAdminExplanation:
    'Empêche la désinstallation de KidGate sans un parent. KidGate n’utilise aucun autre droit d’administration de l’appareil : il ne peut pas effacer cet appareil, modifier le verrouillage de l’écran ni désactiver l’appareil photo.',
  deviceAdminDisableWarning:
    'Si tu désactives ceci, KidGate pourra être désinstallé de cet appareil. Tes parents seront prévenus.',
  appPickerUnavailable:
    'La fonction Applications bloquées n’est pas disponible sur cet appareil.',
  messageSafetySectionTitle: 'Alertes de messages',
  messageSafetySectionDescription:
    'L’autorisation s’accorde ici. Les Alertes de messages s’activent ou se désactivent depuis l’app parent ou le tableau de bord web.',
} as const;
