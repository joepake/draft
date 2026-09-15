export const leaderboard = {
  title: 'Таблица звёзд',
  thisWeek: 'На этой неделе',
  resetsNote: 'Каждый понедельник всё начинается заново.',
  rowA11y: '{{rank}}. {{name}}, звёзд: {{count}}',
  settingsTitle: 'Таблица звёзд',
  settingsBody: 'Дети смогут видеть, сколько звёзд каждый из них собрал за эту неделю.',
  screenTimeTitle: 'Экранное время семьи',
  screenTimeSub: 'Сначала меньше всего экранного времени · эта неделя',
  screenTimeRowA11y: '{{rank}}. {{name}}, {{duration}}',
  screenTimeParentBadge: 'Родитель',
  screenTimeParentFallbackName: 'Родитель',
  screenTimeSettingsTitle: 'Экранное время семьи',
  screenTimeSettingsBody:
    'Покажите детям, сколько экранного времени у каждого из них на этой неделе. Выключено, пока вы не включите.',
  screenTimeNote:
    'Считает все устройства человека. Начинается заново каждый понедельник.',
  childrenTitle: 'Дети',
  manageAccessibility: 'Управление детьми и устройствами',
  addChild: 'Добавить ребёнка',
  childAdded: 'Ребёнок добавлен.',
  childNameLabel: 'Имя',
  childNamePlaceholder: 'например, Май',
  unassigned: 'Не назначено',
  removeChild: 'Удалить',
  removeChildConfirmTitle: 'Удалить профиль: {{childName}}?',
  removeChildConfirmBody:
    'Устройства останутся привязанными и продолжат отправлять данные — просто перестанут засчитываться кому-либо, пока вы не назначите их снова.',
  emptyTitle: 'Детей пока нет',
  emptyBody:
    'Добавьте здесь каждого ребёнка, а затем назначьте устройства, которыми он пользуется.',
} as const;
