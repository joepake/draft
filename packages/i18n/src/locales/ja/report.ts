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

  // レポートの良い半分。何があったかとその数字だけを述べ、ほめません
  // （`docs/COPY_STYLE.md` はお世辞を警告と同じくらい禁じています）。
  // 表記は「お子さま」「デバイス」で統一します。
  findingLimitRespected:
    '1日の利用時間制限（{{limit}}）が{{count}}日間すべてで守られました。',
  findingLateNightGone:
    '今週は深夜の利用がありませんでした。先週は{{count}}日ありました。',
  findingBlockedAppsDown:
    'ブロックされたアプリ起動は{{count}}回で、先週の{{previous}}回から減りました。',
  findingBlockedWebDown:
    'フィルターされたサイトは{{count}}件で、先週の{{previous}}件から減りました。',
  findingLearningTime: '学習アプリの利用が{{duration}}、その多くは{{app}}でした。',
  findingTasksDone: 'お手伝いを{{count}}件達成し、{{bonus}}のボーナスを獲得しました。',
  findingAskedFirst: 'ルールを回避せず、{{count}}件のリクエストが送られました。',
  findingCheckedIn: '{{asked}}件のチェックインすべてに応答がありました。',

  narrativeTitle: 'ひとことで',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'できることが1つあります',
  actionDailyLimit: '1日の上限を{{duration}}に設定する',
  actionDailyLimitWhy: '先週の1日あたりの平均です。',
  actionBlockedHours: '休止時間を設定する',
  actionBlockedHoursLateNight: '深夜の時間帯を休止時間にする',
  actionOnDevice: 'デバイス: {{device}}',
  finePrint:
    '数値は {{from}} から {{to}} まで、家族のすべてのデバイスの合計です。利用時間はデバイスが報告した分で、計測できなかった時間はどの合計にも含まれません。',

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
    'この 2 週間、利用時間が記録されていないため、まだ報告できることがありません。オフラインのデバイスは何も報告しませんが、それは穏やかな一週間とは別のことです。',
  rateLimited: '試行が多すぎます。1 分ほど待ってください。',
  loadFailedTitle: 'レポートを読み込めません',
  loadFailed: 'レポートを開けませんでした。下に引いて再試行してください。',
  failed: 'レポートを作成できませんでした。少し後にもう一度お試しください。',

  historyTitle: 'これまでの週',
  historyEmpty: 'これから受け取るレポートは、ここに 1 年間保存されます。',

  hubToday: '今日',
  hubTodayEmpty: '今日はまだどのデバイスからも記録が届いていません。',
  hubByChild: 'お子さまごと',
  hubByDevice: 'デバイスごと',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'お子さまごと',
  childrenNote: '同じ 2 週間を、デバイスごとに。割合はご家族の合計に対するものです。',
  colChild: 'お子さま',
  colScreenTime: 'スクリーンタイム',
  colShare: '割合',
  colChange: '先週比',
  colLimit: '上限超え',
  colLateNights: '夜更かし',
  colTopApp: '最も使用',
  unnamedChild: '名称未設定',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'ほぼ同じ',
  noLimit: '上限なし',
  noTopApp: '—',
  limitDays: '{{count}} 日',
  lateNightsNone: 'なし',
  busiest: 'スクリーンタイム最多',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: '表示内容',
  guestPreviewHint: 'サンプルです。デバイスを接続すると実際の数値が表示されます',
  guestTitle: '今週がどこへ消えたかを見る',
  guestDescription:
    'ログインすると、今日を普段の日と比べ、子どもたちを並べて確認し、毎週日曜日にレポートを受け取れます。',
  guestBenefitTrendTitle: '今日と、普段の比較',
  guestBenefitTrendBody:
    '数字だけでは何もわかりません。今日は必ずご家庭自身の1日平均と並べて描かれます。',
  guestBenefitChildTitle: '子どもごとに並べて',
  guestBenefitChildBody:
    '各デバイスを通じた1日の使用割合を、子どもごとの色で表示します。',
  guestBenefitWeeklyTitle: '毎週日曜日のレポート',
  guestBenefitWeeklyBody:
    '何が変わったか、どのアプリが増えたか、夜更かしは何度か。1年間保存されます。',
  guestSignInButton: 'ログイン',
  guestCreateAccount: '保護者アカウントを作成',
} as const;
