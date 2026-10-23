export const appLimits = {
  title: 'Лимиты приложений',
  emptyTitle: 'Лимитов пока нет',
  emptySubtitle: 'Выберите приложение ниже, чтобы задать ему свой лимит.',
  usedToday: '{{used}} из {{limit}} сегодня',
  activeSectionTitle: 'Текущие лимиты',
  addSectionTitle: 'Добавить лимит',
  addSectionSubtitle: 'Чаще всего сегодня',
  candidateUsage: '{{duration}} сегодня',
  noUsageYet:
    'Данных об использовании пока нет. Лимиты появятся, как только устройство ребёнка их пришлёт.',
  footnote: 'Лимиты обнуляются в полночь на устройстве ребёнка.',
  toastSaved: 'Лимиты сохранены.',
  toastSaveFailed: 'Не удалось сохранить. Попробуйте ещё раз.',
  removeAccessibility: 'Убрать лимит для {{app}}',
  increaseAccessibility: 'Увеличить лимит для {{app}}',
  decreaseAccessibility: 'Уменьшить лимит для {{app}}',
  addAccessibility: 'Добавить дневной лимит для {{app}}',
} as const;
