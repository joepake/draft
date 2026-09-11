export const permissions = {
  cameraPermissionRequired:
    'L’accès à l’appareil photo est nécessaire pour cette fonctionnalité.',
  allowCameraTitle: 'Autoriser l’appareil photo',
  cameraPermissionMessage:
    'KidGate utilise l’appareil photo afin que vous puissiez envoyer une photo rapide avec le SOS et les Check-ins.',
  allow: 'Autoriser',
  notNow: 'Pas maintenant',
  cameraTurnedOffTitle: 'L’appareil photo est désactivé pour KidGate',
  cameraTurnedOffMessage:
    'Veuillez ouvrir les Réglages et autoriser l’appareil photo afin que vos Check-ins et alertes SOS puissent inclure une photo.',
  openSettings: 'Ouvrir les Réglages',
  notificationsLabel: 'Notifications',
  notificationsAllowed: 'Les notifications sont activées pour KidGate.',
  notificationsOpenSettings:
    'Veuillez ouvrir les Réglages de l’appareil pour autoriser les notifications pour KidGate.',
  backgroundRefreshLabel: 'Actualisation en arrière-plan',
  backgroundRefreshHint: 'Permet à KidGate de continuer à fonctionner en arrière-plan.',
  backgroundRefreshLowPowerHint:
    'Le mode Économie d’énergie est activé — iOS désactive l’Actualisation en arrière-plan. Veuillez désactiver le mode Économie d’énergie, puis activer l’Actualisation en arrière-plan.',
  overlayLabel: 'Superposition aux autres apps',
  overlayHint:
    'Autorisez KidGate à afficher un écran de verrouillage par-dessus les autres apps lorsque des limites s’appliquent.',
  batteryOptimizationLabel: 'Batterie sans restriction',
  batteryOptimizationHint:
    'Empêche Android de mettre KidGate en pause en arrière-plan.',
  exactAlarmLabel: 'Alarmes et rappels',
  exactAlarmHint:
    'Autorise Alarmes et rappels pour que les Heures bloquées commencent et se terminent à l’heure.',
  accessibilityLabel: 'Assistant d’accessibilité pour le verrouillage',
  accessibilityHint: 'Maintient le verrouillage KidGate au-dessus des autres apps.',
  oemSectionDescription:
    'Les appareils {{brand}} suspendent souvent les apps en arrière-plan. Veuillez suivre ces étapes pour que le verrouillage et les Heures bloquées continuent de fonctionner.',
  oemAutostartLabel: 'Autoriser le démarrage automatique',
  oemAutostartHintXiaomi:
    'Dans Démarrage automatique, activez KidGate afin que la protection redémarre après un redémarrage de l’appareil.',
  oemAutostartHintSamsung:
    'Dans Batterie → Limites d’utilisation en arrière-plan → Applications jamais en veille, ajoutez KidGate. Si KidGate n’apparaît pas dans la liste, il est déjà autorisé et cette étape est terminée.',
  oemAutostartHintOppo:
    'Dans Apps au démarrage / Lancement automatique, autorisez KidGate.',
  oemAutostartHintVivo:
    'Dans Démarrage automatique / Haute consommation en arrière-plan, autorisez KidGate.',
  oemAutostartHintHuawei:
    'Dans Lancement des apps / Gestionnaire de démarrage, réglez KidGate sur Gérer manuellement et autorisez toutes les options.',
  oemAutostartHintOther:
    'Autorisez KidGate à démarrer automatiquement dans les réglages de sécurité ou de batterie de votre appareil.',
  markDone: 'Terminé',
  overlayStepAllow: 'Activez « Superposition aux autres apps » pour KidGate.',
  accessibilityStepOpenSettings:
    'Sélectionnez Réglages ci-dessous : la page Accessibilité de KidGate s’ouvre directement.',
  accessibilityStepFindKidGate:
    'Si la liste complète s’ouvre à la place, sélectionnez KidGate sous « Applications téléchargées ».',
  accessibilityStepTurnOn:
    'Activez l’interrupteur, puis sélectionnez Autoriser dans la confirmation d’Android.',
  accessibilityWarningNote:
    'Android prévient que KidGate peut observer vos actions. C’est ainsi que le verrouillage reste par-dessus les autres apps — KidGate ne lit ni les mots de passe ni les messages personnels.',
  uninstallProtectionWizardBody:
    'Empêche la désinstallation de cette app sans le code PIN parent. Android affiche son propre écran de confirmation.',
  notificationsWizardBody:
    'Autorisez les notifications pour que cet appareil reçoive immédiatement les approbations de temps et les rappels.',
  backgroundRefreshStepOpen: 'Ouvrez la page KidGate dans les Réglages.',
  backgroundRefreshStepTurnOn: 'Activez l’Actualisation en arrière-plan pour KidGate.',
  backgroundRefreshStepGeneral:
    'Si l’interrupteur est grisé, ouvrez Réglages, puis Général, puis Actualisation en arrière-plan et activez-la.',
  batteryStepAllow: 'Sélectionnez Autoriser dans la fenêtre d’Android.',
  batteryStepAppInfo:
    'Si aucune fenêtre n’apparaît, ouvrez Infos sur l’app, puis Batterie, puis choisissez Sans restriction.',
  notificationsStepAllow: 'Sélectionnez Autoriser dans la demande.',
  exactAlarmStepTurnOn: 'Activez Alarmes et rappels pour KidGate.',
  cameraStepTurnOn: 'Activez Appareil photo pour KidGate.',
  uninstallProtectionStepConfirm:
    'Sélectionnez Activer sur l’écran de confirmation d’Android.',
} as const;
