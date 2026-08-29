export const appInventory = {
  title: 'この端末のアプリ',
  subtitle:
    '変化があったものだけでなく、KidGate がインストール済みとして見つけたすべて。',
  summaryFlagged: '{{total}} 件中 {{flagged}} 件のアプリは確認する価値があります',
  summaryClear: '{{total}} 件のアプリに注意すべきものはありません',
  flaggedTitle: '確認する価値あり',
  otherTitle: 'その他',
  unclassifiedTitle: 'まだ判別できていません',
  scannedLabel: '最終スキャン',
  staleNote: 'この一覧は古くなっています。端末が次に接続したときに更新されます。',
  truncatedNote: '見つかった {{total}} 件のうち {{shown}} 件を表示しています。',
  firstScanNote: 'これは初回のスキャンのため、いつ追加されたかは分かりません。',
  newBadge: '新規',
  ageBadge: '{{age}}+',
  emptyTitle: 'まだスキャンされていません',
  emptySubtitle: '端末は次回の接続時にアプリ一覧を送信します。',
  unsupportedTitle: 'この端末はアプリを一覧表示できません',
  unsupportedIos:
    'Apple は iPhone や iPad にインストールされているものを読み取ることをどのアプリにも許可していません。そのため KidGate は使用されたアプリのみ報告できます。',
  unsupportedGeneric: 'この端末はインストール済みのアプリを報告しません。',
  incompleteNote:
    'ホーム画面にアイコンがないアプリはここに表示されないことがあります。',
  blockHint: 'アプリを止めるには、端末本体で「ブロックされたアプリ」を開いてください。',
  howItWorksLabel: 'このリストの仕組み',
} as const;
