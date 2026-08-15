export const permissions = {
  cameraPermissionRequired: 'Se requiere acceso a la cámara para esta función.',
  allowCameraTitle: 'Permitir la cámara',
  cameraPermissionMessage:
    'KidGate usa la cámara para que puedas enviar una foto rápida con SOS y Check-Ins.',
  allow: 'Permitir',
  notNow: 'Ahora no',
  cameraTurnedOffTitle: 'La cámara está desactivada para KidGate',
  cameraTurnedOffMessage:
    'Abre Ajustes y permite la Cámara para que tus Check-Ins y alertas de SOS puedan incluir una foto.',
  openSettings: 'Abrir Ajustes',
  notificationsLabel: 'Notificaciones',
  notificationsAllowed: 'Las notificaciones están activadas para KidGate.',
  notificationsOpenSettings:
    'Abre los Ajustes del dispositivo para permitir las notificaciones de KidGate.',
  backgroundRefreshLabel: 'Actualización en segundo plano',
  backgroundRefreshHint:
    'Primero activa Ajustes → General → Actualización en segundo plano, y luego actívala para KidGate. Si el interruptor aparece atenuado, el ajuste general de Actualización en segundo plano sigue desactivado.',
  backgroundRefreshLowPowerHint:
    'El Modo de bajo consumo está activado — iOS desactiva la Actualización en segundo plano. Desactiva el Modo de bajo consumo y luego activa la Actualización en segundo plano.',
  overlayLabel: 'Mostrar sobre otras aplicaciones',
  overlayHint:
    'Permite que KidGate muestre una pantalla de bloqueo sobre otras apps cuando se aplican límites.',
  batteryOptimizationLabel: 'Batería sin restricciones',
  batteryOptimizationHint:
    'Selecciona Permitir en el aviso del sistema para que KidGate pueda ejecutarse en segundo plano. Si no aparece ningún aviso: Información de la app → Batería → Sin restricciones.',
  exactAlarmLabel: 'Alarmas y recordatorios',
  exactAlarmHint:
    'Permite Alarmas y recordatorios para que las Horas bloqueadas empiecen y terminen a tiempo.',
  accessibilityLabel: 'Ayuda de bloqueo por Accesibilidad',
  accessibilityHint:
    'Activa KidGate en Accesibilidad → Apps instaladas/descargadas. Esto es necesario para que el bloqueo se mantenga sobre otras apps.',
  oemSectionDescription:
    'Los dispositivos {{brand}} suelen pausar las apps en segundo plano. Completa estos pasos para que el bloqueo y las Horas Bloqueadas sigan funcionando.',
  oemAutostartLabel: 'Permitir el inicio automático',
  oemAutostartHintXiaomi:
    'En Inicio automático, activa KidGate para que la protección se reinicie tras un reinicio del dispositivo.',
  oemAutostartHintSamsung:
    'En Cuidado del dispositivo / Batería, permite que KidGate permanezca activo en segundo plano.',
  oemAutostartHintOppo: 'En Apps de inicio / Inicio automático, permite KidGate.',
  oemAutostartHintVivo:
    'En Inicio automático / Alto rendimiento en segundo plano, permite KidGate.',
  oemAutostartHintHuawei:
    'En Inicio de apps / Gestor de inicio, configura KidGate en “Gestionar manualmente” y permite todas las opciones.',
  oemAutostartHintOther:
    'Permite que KidGate se inicie automáticamente en los ajustes de seguridad o batería de tu dispositivo.',
  markDone: 'Listo',
  notificationsWizardBody:
    'Permite las notificaciones para que este dispositivo reciba aprobaciones de tiempo y recordatorios al instante.',
} as const;
