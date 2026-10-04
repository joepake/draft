export const childSettings = {
  pageTitle: 'Ajustes',
  statusUnlocked: 'Acceso parental activo',
  statusLocked: 'Requiere el PIN parental',
  preferencesSectionTitle: 'Preferencias',
  darkModeLabel: 'Modo oscuro',
  darkModeHint: 'Más cómodo para la vista por la noche',
  leaveFamilyAlertTitle: '¿Salir de esta familia?',
  leaveFamilyAlertMessage:
    'Este dispositivo se desconectará de la familia. Vuelve a emparejarlo con una invitación de un padre para reincorporarlo.',
  leaveFamily: 'Salir de la familia',
  uninstallProtectionSectionTitle: 'Protección de desinstalación',
  uninstallProtectionSectionDescription:
    'Impide que este teléfono elimine KidGate. Android pide permiso una vez.',
  uninstallProtectionLabel: 'Impedir desinstalación',
  uninstallProtectionHintOn: 'Activada. Si se desactiva, se avisa a los padres.',
  uninstallProtectionHintOff:
    'Desactivada. KidGate se puede desinstalar de este teléfono.',
  uninstallProtectionTurnedOff: 'La protección de desinstalación está desactivada.',
  uninstallProtectionFailed:
    'No se pudo cambiar la protección de desinstalación. Inténtalo de nuevo.',
  deviceAdminExplanation:
    'Impide que KidGate se desinstale sin un padre o una madre. KidGate no usa ningún otro permiso de administración del dispositivo: no puede borrar este dispositivo, cambiar el bloqueo de pantalla ni apagar la cámara.',
  deviceAdminDisableWarning:
    'Si lo desactivas, KidGate se podrá desinstalar de este dispositivo. Se avisará a tu padre o madre.',
  appPickerUnavailable:
    'La función Apps bloqueadas no está disponible en este dispositivo.',
  messageSafetySectionTitle: 'Alertas de mensajes',
  messageSafetySectionDescription:
    'Concede el permiso aquí. Las Alertas de mensajes se activan o desactivan desde la app parental o el panel web.',
} as const;
