export const webHistory = {
  title: 'ウェブ履歴',
  fallbackDeviceName: 'お子さまの端末',
  syncNote:
    'ウェブ履歴がこの画面に反映されるまで数分かかることがあります。デバイスがインターネットに接続していない場合や、予期せず終了した場合は、さらに時間がかかることがあります。',
  syncNoteTv:
    'このテレビは定期的にしか通信しないため、ウェブ履歴がこの画面に反映されるまで最大30分かかることがあります。インターネットに接続していない場合はさらに時間がかかります。',
  summarySites: '見られたサイト',
  summaryBlocked: 'ブロックしたサイト',
  sourceNoteIos:
    'iPhoneではAppleのスクリーンタイムのレポートが元です。お子さまが時間を使ったサイトであり、開いたすべてのページではありません。',
  sourceNoteAndroid:
    'AndroidではKidGateのDNSフィルターが元です。この端末が問い合わせたサイトであり、開いたすべてのページではありません。',
  sourceNoteMacos:
    'MacではKidGateのフィルターが元です。このMacが問い合わせたサイトであり、開いたすべてのページではありません。',
  sourceNoteExtension:
    'このブラウザでは、実際に開いたページが記録されます。このブラウザだけで、パソコン全体ではありません。',
  filterOffNoteAndroid:
    'ウェブフィルターがオフのため、この端末は記録もブロックもしていません。オンにすると訪問先が見られます。',
  filterOffNoteMacos:
    'ウェブフィルターがオフのため、このMacは記録もブロックもしていません。オンにすると訪問先が見られます。',
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
  sectionUncategorized: 'その他のサイト',
  blockCategory: '{{category}}をブロック',
  blockCategoryConfirmTitle: '{{category}}をブロックしますか？',
  blockCategoryConfirmBody:
    'KidGateが{{category}}に分類するすべてのサイトが、この端末で拒否されます。ウェブフィルターでいつでも解除できます。',
  blockCategoryConfirmAction: 'ブロック',
  blockCategoryDone: '{{category}}をブロックしました。',
  unblockCategory: '{{category}}のブロックを解除',
  unblockCategoryConfirmTitle: '{{category}}のブロックを解除しますか？',
  unblockCategoryConfirmBody:
    'KidGateが{{category}}に分類するサイトに、この端末から再びアクセスできるようになります。',
  unblockCategoryConfirmAction: '解除',
  unblockCategoryDone: '{{category}}のブロックを解除しました。',
  serviceSites: '{{count}}件のサイト',
  serviceNote:
    'サービスが自動的に読み込むサイトは1行にまとめています。YouTubeを一度開くだけで複数に接続します。行をタップすると内訳が表示されます。',
  showMoreDays: 'さらに{{count}}日分を表示',
  rollupTitle: 'サイトの種類別アクセス数',
  rollupShare: '{{percent}}%',
  rollupNote:
    '分ではなく参照回数です。長い動画は数回、10分のブラウジングは数十回になります。',
  rollupNoteAi:
    '一部はサイト名からの推定で、既知のサイトとの照合ではありません。外れているものもあります。',
  rollupNoteExtension:
    '分ではなくページ数です。長い動画は1回、10分のブラウジングは数十回になります。',
  hoursTitle: 'いつ見ていたか',
  hoursNote:
    '時間帯ごとのページ読み込み数（端末の時計）。午後ずっと開いたままのタブは1回です。',
  hoursEmpty: '今日はまだページがありません。',
  sourceNoteChild:
    '{{count}}台のデバイスをまとめて表示。各デバイスは自分のフィルターが見たものだけを記録します。',
  filterOffNoteChild:
    'すべてのデバイスでウェブフィルターがオフのため、新しいアクセスは記録されません。',
} as const;
