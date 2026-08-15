export const appLimits = {
  title: 'App使用時間の制限',
  intro: 'アプリごとに1日の上限を決めます。端末全体の1日の上限に加えて適用されます。',
  emptyTitle: '上限はまだありません',
  emptySubtitle: '下からアプリを選んで、そのアプリ専用の上限を設定します。',
  usedToday: '本日 {{used}} / {{limit}}',
  addSectionTitle: '上限を追加',
  addSectionSubtitle: 'お子さまが最近使ったアプリ。',
  candidateUsage: '本日 {{duration}}',
  noUsageYet:
    '利用記録がまだありません。お子さまの端末から届き次第、ここに表示されます。',
  footnote: '上限はお子さまの端末で深夜0時にリセットされます。',
  toastSaved: 'アプリの上限を保存しました。',
  toastSaveFailed: '保存できませんでした。もう一度お試しください。',
  removeAccessibility: '{{app}} の上限を削除',
  increaseAccessibility: '{{app}} の上限を増やす',
  decreaseAccessibility: '{{app}} の上限を減らす',
  addAccessibility: '{{app}} に1日の上限を追加',
} as const;
