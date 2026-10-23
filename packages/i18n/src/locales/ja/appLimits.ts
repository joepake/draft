export const appLimits = {
  title: 'アプリの利用時間制限',
  emptyTitle: '上限はまだありません',
  emptySubtitle: '下からアプリを選んで、そのアプリ専用の制限を設定します。',
  usedToday: '本日 {{used}} / {{limit}}',
  activeSectionTitle: '設定中の上限',
  addSectionTitle: '上限を追加',
  addSectionSubtitle: '今日よく使われたアプリ',
  candidateUsage: '本日 {{duration}}',
  noUsageYet:
    '利用記録がまだありません。お子さまのデバイスから利用状況が届くと、アプリごとの上限を設定できるようになります。',
  footnote: '上限はお子さまのデバイスで深夜0時にリセットされます。',
  toastSaved: 'アプリの上限を保存しました。',
  toastSaveFailed: '保存できませんでした。もう一度お試しください。',
  removeAccessibility: '{{app}} の上限を削除',
  increaseAccessibility: '{{app}} の上限を増やす',
  decreaseAccessibility: '{{app}} の上限を減らす',
  addAccessibility: '{{app}} に1日の上限を追加',
} as const;
