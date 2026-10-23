/** `en/childReport.ts` を参照。同じ register で、2 つの合計を混同しないこと。 */
export const childReport = {
  title: 'レポート',
  devicesCount: '{{count}} 台',

  periodToday: '今日',
  periodWeek: '7日間',
  periodMonth: '30日間',

  heroScreenOn: '実際に使った時間',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    '推定値です。使った長さは分かっても、いつ使ったかを報告できないデバイスがあります。',
  heroEmpty: 'まだ使用状況の報告がありません',

  trendUp: '前の期間より {{value}} 多い',
  trendDown: '前の期間より {{value}} 少ない',
  trendFlat: '前の期間とほぼ同じ',
  trendFirst: '比較できる前の期間がありません',

  coverage: 'この期間の {{percent}}% を計測',
  wellLateNights: '夜更かし',
  coverageNone: 'この子のデバイスはどれも画面が点いていた時刻を報告できません',

  barCombined: 'デバイスの合計',

  sectionDays: '日ごと',
  backToPeriod: '期間全体の表示に戻す',
  sectionWhen: '画面が点いていた時間帯',
  bandMerged: 'すべてのデバイス',
  bandTooThin: 'この日は計測できた部分が少なすぎて描けません。',

  sectionDevices: 'どのデバイスか',
  openDeviceReport: '{{name}} のレポートを開く',
  deviceNoScreenTime: 'スクリーンタイムは計測しません',

  sectionApps: 'よく使ったアプリ',
  appOnDevices: '{{count}} 台で使用',
  appsEmpty: 'アプリ別の内訳はまだありません。',
  deviceJoinedNote:
    '{{device}}は{{time}}にファミリーに参加しました。それ以前の使用時間は不完全か、「その他のアプリ」に含まれている場合があります。',

  emptyNoDevices: 'この子にはまだデバイスが割り当てられていません。',
  emptyAssign: 'デバイスを割り当てる',
  partialError:
    '1 台を読み取れませんでした。以下の数値にはそのデバイスは含まれていません。',
};
