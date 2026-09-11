export const permissions = {
  cameraPermissionRequired: 'Se requiere acceso a la cámara para esta función.',
  allowCameraTitle: 'Permitir la cámara',
  cameraPermissionMessage:
    'KidGate usa la cámara para que puedas enviar una foto rápida con SOS y Check-ins.',
  allow: 'Permitir',
  notNow: 'Ahora no',
  cameraTurnedOffTitle: 'La cámara está desactivada para KidGate',
  cameraTurnedOffMessage:
    'Abre Ajustes y permite la Cámara para que tus Check-ins y alertas de SOS puedan incluir una foto.',
  openSettings: 'Abrir Ajustes',
  notificationsLabel: 'Notificaciones',
  notificationsAllowed: 'Las notificaciones están activadas para KidGate.',
  notificationsOpenSettings:
    'Abre los Ajustes del dispositivo para permitir las notificaciones de KidGate.',
  backgroundRefreshLabel: 'Actualización en segundo plano',
  backgroundRefreshHint: 'Permite que KidGate siga funcionando en segundo plano.',
  backgroundRefreshLowPowerHint:
    'El Modo de bajo consumo está activado — iOS desactiva la Actualización en segundo plano. Desactiva el Modo de bajo consumo y luego activa la Actualización en segundo plano.',
  overlayLabel: 'Mostrar sobre otras aplicaciones',
  overlayHint:
    'Permite que KidGate muestre una pantalla de bloqueo sobre otras apps cuando se aplican límites.',
  batteryOptimizationLabel: 'Batería sin restricciones',
  batteryOptimizationHint: 'Evita que Android pause KidGate en segundo plano.',
  exactAlarmLabel: 'Alarmas y recordatorios',
  exactAlarmHint:
    'Permite Alarmas y recordatorios para que las Horas bloqueadas empiecen y terminen a tiempo.',
  accessibilityLabel: 'Ayuda de bloqueo por Accesibilidad',
  accessibilityHint: 'Mantiene el bloqueo de KidGate sobre otras apps.',
  oemSectionDescription:
    'Los dispositivos {{brand}} suelen pausar las apps en segundo plano. Completa estos pasos para que el bloqueo y las Horas bloqueadas sigan funcionando.',
  oemAutostartLabel: 'Permitir el inicio automático',
  oemAutostartHintXiaomi:
    'En Inicio automático, activa KidGate para que la protección se reinicie tras un reinicio del dispositivo.',
  oemAutostartHintSamsung:
    'En Batería → Límites de uso en segundo plano → Aplicaciones que nunca duermen, añade KidGate. Si KidGate no aparece en la lista ya está permitido y este paso está hecho.',
  oemAutostartHintOppo: 'En Apps de inicio / Inicio automático, permite KidGate.',
  oemAutostartHintVivo:
    'En Inicio automático / Alto rendimiento en segundo plano, permite KidGate.',
  oemAutostartHintHuawei:
    'En Inicio de apps / Gestor de inicio, configura KidGate en «Gestionar manualmente» y permite todas las opciones.',
  oemAutostartHintOther:
    'Permite que KidGate se inicie automáticamente en los ajustes de seguridad o batería de tu dispositivo.',
  markDone: 'Listo',
  overlayStepAllow: 'Activa «Mostrar sobre otras aplicaciones» para KidGate.',
  accessibilityStepOpenSettings:
    'Selecciona Ajustes abajo: abre directamente la página de Accesibilidad de KidGate.',
  accessibilityStepFindKidGate:
    'Si en su lugar se abre la lista completa, selecciona KidGate en Aplicaciones descargadas.',
  accessibilityStepTurnOn:
    'Activa el interruptor y luego selecciona Permitir en el aviso de Android.',
  accessibilityWarningNote:
    'Android avisa de que KidGate puede observar tus acciones. Así es como el bloqueo se mantiene sobre otras apps: KidGate no lee contraseñas ni mensajes personales.',
  uninstallProtectionWizardBody:
    'Impide que esta app se desinstale sin el PIN parental. Android muestra su propia pantalla de confirmación.',
  notificationsWizardBody:
    'Permite las notificaciones para que este dispositivo reciba aprobaciones de tiempo y recordatorios al instante.',
  backgroundRefreshStepOpen: 'Abre la página de KidGate en Ajustes.',
  backgroundRefreshStepTurnOn: 'Activa Actualización en segundo plano para KidGate.',
  backgroundRefreshStepGeneral:
    'Si el interruptor está atenuado, abre Ajustes, luego General y activa Actualización en segundo plano.',
  batteryStepAllow: 'Selecciona Permitir en el aviso de Android.',
  batteryStepAppInfo:
    'Si no aparece ningún aviso, abre Información de la app, luego Batería y elige Sin restricciones.',
  notificationsStepAllow: 'Selecciona Permitir en el aviso.',
  exactAlarmStepTurnOn: 'Activa Alarmas y recordatorios para KidGate.',
  cameraStepTurnOn: 'Activa Cámara para KidGate.',
  uninstallProtectionStepConfirm:
    'Selecciona Activar en la pantalla de confirmación de Android.',
} as const;
