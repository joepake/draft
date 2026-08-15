export const timeRequest = {
  alertMorePending: '{{count}} solicitudes más esperan en Familia.',
  pauseConfirmTitle: '¿Bloquear {{deviceName}}?',
  pauseConfirmBody:
    'Esto bloquea el dispositivo ahora en lugar de dar más tiempo. {{deviceName}} no se podrá usar hasta que lo desbloquees.',
  pauseConfirmAction: 'Bloquear dispositivo',
  alertTitle: 'Solicitud de tiempo recibida',
  alertMessage: '{{deviceName}} solicitó {{minutes}} minutos adicionales.',
  alertReasonLine: 'Motivo: {{reason}}',
  alertNotNow: 'Ahora no',
  alertApprove: 'Aprobar',
  alertPauseInstead: 'Bloquear en su lugar',
  alertLater: 'Más tarde',
  toastDeclineFailed: 'No se pudo rechazar la solicitud. Inténtalo de nuevo.',
  toastApproveFailed: 'No se pudo aprobar la solicitud. Inténtalo de nuevo.',
  toastLockFailed: 'No se pudo bloquear el dispositivo. Inténtalo de nuevo.',
  statusWaitingForApproval:
    'Esperando la respuesta de tu padre o madre ({{minutes}} minutos solicitados).',
  statusCooldown: 'Puedes enviar una nueva solicitud en {{time}}.',
  statusDailyLimitExceeded:
    'Has usado todo tu tiempo de pantalla de hoy. Las apps volverán a abrirse mañana, o antes si tu padre o madre añade más tiempo.',
  errorDeviceNotRegistered: 'Este dispositivo no está registrado.',
  errorMinutesRange: 'Introduce entre {{min}} y {{max}} minutos.',
  toastRequestSent: 'Solicitud enviada. Tu padre o madre la revisará en breve.',
  toastDeviceNotRegistered: 'Este dispositivo aún no está registrado.',
  toastSendFailed: 'No se pudo enviar tu solicitud. Inténtalo de nuevo.',
  askForMoreTime: 'Solicitar más tiempo',
  askForMoreTimeSubtitle:
    'Si tu padre o madre lo aprueba, tendrás más tiempo de pantalla hoy.',
  sendToParent: 'Enviar a tu padre o madre',
  howManyMinutes: '¿Cuántos minutos necesitas?',
  minutesNeeded: 'Minutos necesarios',
  reasonOptional: 'Motivo (opcional)',
  reasonPlaceholder: 'Tareas, estudio en grupo, etc.',
  enterAtLeastMinutes: 'Introduce al menos {{min}} minutos.',
  requestsLimitedToMinutes: 'Cada solicitud está limitada a {{max}} minutos.',
  unableToSendRequest:
    'No se pudo enviar tu solicitud en este momento. Inténtalo de nuevo.',
  needsApproval: 'Requiere aprobación',
  timeRequests: 'Solicitudes de tiempo',
  plusMinutesBadge: '+{{minutes}} min',
  notNow: 'Ahora no',
  approve: 'Aprobar',
  unableToDeclineRequest: 'No se pudo rechazar la solicitud. Inténtalo de nuevo.',
  unableToApproveRequest: 'No se pudo aprobar la solicitud. Inténtalo de nuevo.',
  pendingRequestExists:
    'Ya has enviado una solicitud. Espera la respuesta de tu padre o madre.',
  waitBeforeAnotherRequest: 'Espera unos minutos antes de enviar otra solicitud.',
  timeRequestSent: 'Solicitud de tiempo enviada',
  timeRequestSentDescription:
    '{{deviceName}} solicitó {{minutes}} minutos adicionales.',
  timeRequestApproved: 'Solicitud de tiempo aprobada',
  timeRequestDenied: 'Solicitud de tiempo rechazada',
  timeRequestApprovedDescription:
    'Se añadieron {{minutes}} minutos extra para {{deviceName}} hoy.',
  timeRequestDeniedDescription:
    'Se rechazaron {{minutes}} minutos para {{deviceName}}.',
  needMoreTimeTitle: '¿Necesitas más tiempo?',
  askParentForMoreTime:
    'Puedes pedirle a tu padre o madre un poco más de tiempo de pantalla hoy.',
  requestMoreTime: 'Solicitar más tiempo',
  requestMoreTimeAccessibilityLabel: 'Solicitar más tiempo',
  requestPendingButton: 'Solicitud pendiente',
  requestPendingChip: 'Solicitud pendiente',
  waitCooldown: 'Espera {{cooldown}}',
  timeRequestNote:
    'Si tu padre o madre lo aprueba, tendrás más tiempo de pantalla hoy.',
} as const;
