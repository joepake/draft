export const webHistory = {
  title: 'ウェブ履歴',
  fallbackDeviceName: 'お子さまの端末',
  summarySites: '見られたサイト',
  summaryBlocked: 'ブロックしたサイト',
  sourceNoteIos:
    'iPhoneではAppleのスクリーンタイムのレポートが元です。お子さまが時間を使ったサイトであり、開いたすべてのページではありません。',
  sourceNoteAndroid:
    'AndroidではKidGateのDNSフィルターが元です。この端末が問い合わせたサイトであり、開いたすべてのページではありません。',
  filterOffNoteAndroid:
    'ウェブフィルターがオフのため、この端末は記録もブロックもしていません。オンにすると訪問先が見られます。',
  filterOffNoteIos:
    'ウェブフィルターがオフのため、何もブロックされていません。この一覧は端末がどこへ行ったかだけを示します。',
  filterAll: 'すべて',
  filterBlocked: 'ブロックのみ',
  emptyTitle: 'まだ記録がありません',
  emptyBody: 'KidGateが動作中にお子さまの端末がウェブを見ると、ここに表示されます。',
  emptyBlockedBody: 'まだ何もブロックされていません。',
  dayBlockedBadge: '{{count}}件ブロック',
  visitsMeta: '{{count}}回アクセス',
  blockedMeta: '{{count}}回ブロック・{{category}}',
  categoryUnknown: 'ブロックリスト',
  showMoreDays: 'さらに{{count}}日分を表示',
  rollupTitle: '時間の内訳',
  rollupShare: '{{percent}}%',
  rollupNote:
    '記録された訪問のサイト種別ごとの割合です。Androidのみ。iPhoneはドメインの種別をKidGateに伝えません。',
} as const;
