export const appLimits = {
  title: 'Лимиты приложений',
  intro:
    'Задайте, сколько каждое приложение можно использовать в день. Работает вдобавок к общему дневному лимиту.',
  emptyTitle: 'Лимитов пока нет',
  emptySubtitle: 'Выберите приложение ниже, чтобы задать ему свой дневной лимит.',
  usedToday: '{{used}} из {{limit}} сегодня',
  addSectionTitle: 'Добавить лимит',
  addSectionSubtitle: 'Приложения, которыми ребёнок пользовался недавно.',
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
