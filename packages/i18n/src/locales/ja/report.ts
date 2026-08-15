export const report = {
  title: '週次レポート',
  subtitle: 'KidGate が今週見つけたこと。',
  weekOf: '第 {{week}} 週',
  range: '{{from}} – {{to}}',
  triggerScheduled: '日曜に送信',
  triggerManual: 'あなたが作成',

  statScreenTime: '利用時間',
  statDailyAverage: '1 日平均',
  statBlockedApps: 'ブロックしたアプリ',
  statBlockedWebVisits: 'フィルタしたサイト',

  trendUp: '前の週より {{value}} 多い',
  trendDown: '前の週より {{value}} 少ない',
  trendFlat: '前の週とほぼ同じ',
  trendFirstWeek: '計測できた最初の週',
  barThisWeek: '今週',
  barLastWeek: '先週',

  highlights: '知っておきたいこと',
  sevAttention: '確認したい',
  sevNotable: '注目',
  sevInfo: '参考まで',

  findingUsageUp:
    '利用時間が {{percent}}% 増えました。先週より {{delta}} 多い状態です。',
  findingUsageDown:
    '利用時間が {{percent}}% 減りました。先週より {{delta}} 少ない状態です。',
  findingUsageFlat: '利用時間は {{total}} のままでした。',
  findingLateNight:
    '23 時以降の夜が {{count}} 回、いちばん遅い日は {{time}} まででした。',
  findingNewTopApp:
    '{{app}} は今週から使われはじめ、すでに {{duration}} を占めています。',
  findingAppSurge:
    '{{app}} が先週より {{delta}} 増え、合計 {{duration}} になりました。',
  findingLimitHit: '1 日 {{limit}} の上限に {{count}} 日到達しました。',
  findingBlockedApps:
    'ブロックしたアプリ起動は {{count}} 回。先週は {{previous}} 回でした。',
  findingBlockedWeb:
    'フィルタしたサイトは {{count}} 件。先週は {{previous}} 件でした。',
  findingQuietWeek:
    '穏やかな一週間でした。合計 {{total}}、対応が必要なことはありません。',

  narrativeTitle: 'ひとことで',
  finePrint:
    '数値は {{from}} から {{to}} まで、家族のすべての端末の合計です。利用時間は端末が報告した分で、計測できなかった時間はどの合計にも含まれません。',

  generate: '今週のレポートを作成',
  generating: '作成中…',
  share: '共有',
  copySummary: '要約をコピー',
  copied: '要約をコピーしました。',
  shareFailed: '共有メニューを開けませんでした。',

  emptyTitle: 'まだレポートがありません',
  emptyBody:
    'レポートは毎週日曜の夜に届きます。今週の分をここで作成することもできます（直近 7 日間が対象です）。',
  noUsage:
    'この 2 週間、利用時間が記録されていないため、まだ報告できることがありません。電源の切れた端末は何も報告しませんが、それは穏やかな一週間とは別のことです。',
  rateLimited: '試行が多すぎます。1 分ほど待ってください。',
  failed: 'レポートを作成できませんでした。少し後にもう一度お試しください。',

  historyTitle: 'これまでの週',
  historyEmpty: 'これから受け取るレポートは、ここに 1 年間保存されます。',
} as const;
