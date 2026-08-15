export const notifications = {
  title: '通知',
  subtitleAllOn: 'すべての通知がオン',
  subtitleMuted: '{{count}}件をオフ中',
  sosAlwaysOn: 'SOS はここをすべてオフにしても必ず届きます。',
  sectionAlerts: '通知',
  sectionAlertsHint: 'この端末で受け取る通知を選びます。',
  sectionSummary: 'サマリー',
  sectionQuietHours: 'サイレント時間',
  sectionQuietHoursHint: 'この時間帯は通知を鳴らしません。SOS は対象外です。',
  quietHoursLabel: 'サイレント時間',
  quietHoursOff: 'オフ — 通知はいつでも届きます',
  quietHoursActive: '{{start}}〜{{end}} はサイレント',
  quietHoursStart: '開始',
  quietHoursEnd: '終了',
  footnote:
    'この設定はこの端末のみに適用されます。ほかの保護者端末は個別の設定を保ちます。',
  toastSaveFailed: '保存できませんでした。もう一度お試しください。',
  alert: {
    tamperAlerts: {
      label: '保護がオフになった',
      hint: 'お子さまの端末で KidGate に必要な権限がオフにされたとき。',
    },
    placeAlerts: {
      label: '到着と出発',
      hint: 'お子さまが登録した場所に到着・出発したとき。',
    },
    timeRequests: {
      label: '延長リクエスト',
      hint: 'お子さまが利用時間の延長を求めたとき。',
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
      hint: 'お子さまの端末でアプリが増えたり消えたりしたとき。',
    },
    weeklyDigest: {
      label: '週間サマリー',
      hint: '日曜日に届く利用時間とブロック回数のまとめ。',
    },
  },
};
