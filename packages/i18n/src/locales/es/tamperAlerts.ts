export const tamperAlerts = {
  title: 'Alertas de protección',
  fallbackDeviceName: 'Dispositivo del niño',
  heroTitle: 'Vigila si se desactiva la protección',
  heroSubtitle:
    'Cuando un permiso clave pasa de activado a desactivado en este dispositivo, KidGate lo registra aquí y puede avisarte.',
  statusOn: 'Vigilando',
  emptyTitle: 'Aún no hay cambios de permisos',
  emptySubtitle:
    'Todos los permisos supervisados están activados: la protección funciona. Si alguno se desactiva en el dispositivo del niño, aparecerá aquí.',
  recentTitle: 'Recientes',
  watchedTitle: 'Permisos vigilados',
  watchedOverlay: 'Mostrar sobre otras aplicaciones',
  watchedAccessibility: 'Accesibilidad',
  watchedUsage: 'Acceso de uso',
  watchedScreenTime: 'Tiempo de uso',
  watchedBattery: 'Batería sin restricciones',
  watchedExactAlarm: 'Alarmas y recordatorios',
  watchedNotifications: 'Notificaciones',
  watchedLocation: 'Ubicación',
  watchedCamera: 'Cámara',
  watchedBackgroundRefresh: 'Actualización en segundo plano',
  infoTitle: 'Qué hacer',
  infoLine1:
    'Abre KidGate en el dispositivo del niño y restaura el permiso indicado en la alerta.',
  infoLine2:
    'Mantén la protección completa para que las alertas sigan funcionando cuando la app del dispositivo del niño se reactive.',
} as const;
