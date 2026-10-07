export const notifications = {
  title: '通知',
  subtitleAllOn: 'すべての通知がオン',
  subtitleMuted: '{{count}}件をオフ中',
  sosAlwaysOn: 'SOS はここをすべてオフにしても必ず届きます。',
  sectionAlerts: '通知',
  sectionAlertsHint: 'このデバイスで受け取る通知を選びます。',
  sectionSummary: 'サマリー',
  sectionQuietHours: 'サイレント時間',
  sectionQuietHoursHint:
    'この時間帯は通知を鳴らしません。SOSは消音されず、最も重大なメッセージ警告も届きます。',
  quietHoursLabel: 'サイレント時間',
  quietHoursOff: 'オフ — 通知はいつでも届きます',
  quietHoursActive: '{{start}}〜{{end}} はサイレント',
  quietHoursStart: '開始',
  quietHoursEnd: '終了',
  footnote:
    'この設定はこのデバイスのみに適用されます。ほかの保護者デバイスは個別の設定を保ちます。',
  toastSaveFailed: '保存できませんでした。もう一度お試しください。',
  localReminderSetupTitle: '設定を完了しましょう',
  localReminderIdleTitle: 'ルールは引き続き有効です',
  localReminderIdleBody:
    'KidGateを1週間開いていません。今日の利用時間とブロックされた内容を確認しましょう。',
  localReminderDormancyTitle: '報告が止まるかもしれません',
  localReminderDormancyBody:
    '{{days}}日間誰もKidGateを開かないと、次に開かれるまで子どものデバイスからの報告が止まります。ルールはそのまま働いています。',
  alert: {
    tamperAlerts: {
      label: '保護がオフになった',
      hint: 'お子さまのデバイスで、KidGateに必要な権限がオフにされたとき、日付・時刻・タイムゾーンが変更されたとき、またはロック中にSOSが押されたとき。SOSのアラート自体は常に届きます。',
    },
    placeAlerts: {
      label: '到着と出発',
      hint: 'お子さまが登録した場所に到着・出発したとき。',
    },
    timeRequests: {
      label: '延長リクエスト',
      hint: 'お子さまが利用時間の延長を求めたとき。',
    },
    siteRequests: {
      label: 'サイトのリクエスト',
      hint: 'お子さまがブロックされたサイトを開きたいとき。',
    },
    checkIn: {
      label: 'チェックインの返信',
      hint: 'お子さまが安全確認に返信したとき。',
    },
    rewardTasks: {
      label: 'ごほうびの申請',
      hint: 'お子さまがごほうびタスクを完了として報告したとき。',
    },
    appActivity: {
      label: 'アプリの追加・削除',
      hint: 'お子さまのデバイスでアプリが増えたり消えたりしたとき。',
    },
    anomalyAlerts: {
      label: '普段と違う使い方',
      hint: 'お子さまのデバイスでいつもと違う使い方があったとき — 深夜の利用、急増、新しいアプリ。',
    },
    weeklyDigest: {
      label: '週間サマリー',
      hint: '月曜日に届く利用時間とブロック回数のまとめ。',
    },
    messageAlerts: {
      label: 'メッセージ警告',
      hint: 'お子さまのメッセージや検索に気がかりな語句が現れたとき。',
    },
    billing: {
      label: 'Premiumのご案内',
      hint: 'トライアル終了後に届く登録のご案内。トライアルやPremiumの終了のお知らせは常に届きます。',
    },
  },
};
