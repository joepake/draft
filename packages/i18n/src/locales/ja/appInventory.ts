export const appInventory = {
  title: 'このデバイスのアプリ',
  pendingTitle: '承認待ち',
  pendingBadge: '許可するまでブロック',
  approvedBadge: 'あなたが許可済み',
  installedAtLabel: '{{when}}にインストール',
  allowApp: '許可',
  subtitle:
    '変化があったものだけでなく、KidGate がインストール済みとして見つけたすべて。',
  summaryFlagged: '{{total}} 件中 {{flagged}} 件のアプリは確認する価値があります',
  summaryClear: '{{total}} 件のアプリに注意すべきものはありません',
  flaggedTitle: '確認する価値あり',
  otherTitle: 'その他',
  scannedLabel: '最終スキャン',
  staleNote: 'この一覧は古くなっています。デバイスが次に接続したときに更新されます。',
  truncatedNote: '見つかった {{total}} 件のうち {{shown}} 件を表示しています。',
  firstScanNote: 'これは初回のスキャンのため、いつ追加されたかは分かりません。',
  newBadge: '新規',
  ageBadge: '{{age}}+',
  browserExtension: 'Chrome 拡張機能',
  titleExtension: 'このブラウザの拡張機能',
  subtitleExtension:
    '変更点だけでなく、KidGate がブラウザで見つけた拡張機能すべてです。',
  summaryFlaggedExtension:
    '{{total}} 件の Chrome 拡張機能のうち {{flagged}} 件は確認をおすすめします',
  summaryClearExtension: '{{total}} 件の Chrome 拡張機能に気になるものはありません',
  incompleteNoteExtension:
    'ここに並ぶのはブラウザの拡張機能だけです。パソコンにインストールされたアプリはブラウザからは見えません。',
  blockHintExtension:
    '拡張機能を削除するには、そのデバイスでブラウザの拡張機能ページを開いてください。',
  emptyTitleExtension: 'まだスキャンされていません',
  emptySubtitleExtension: '次回の接続時にブラウザが拡張機能の一覧を送信します。',
  emptyTitle: 'まだスキャンされていません',
  emptySubtitle: 'デバイスは次回の接続時にアプリ一覧を送信します。',
  unsupportedTitle: 'このデバイスはアプリを一覧表示できません',
  unsupportedIos:
    'Apple は iPhone や iPad にインストールされているものを読み取ることをどのアプリにも許可していません。そのため KidGate は使用されたアプリのみ報告できます。',
  unsupportedGeneric: 'このデバイスはインストール済みのアプリを報告しません。',
  incompleteNote:
    'ホーム画面にアイコンがないアプリはここに表示されないことがあります。',
  blockHint:
    'アプリを止めるには、デバイス本体で「ブロックされたアプリ」を開いてください。',
  howItWorksLabel: 'このリストの仕組み',
  markSafe: '問題なし',
  dismissedTitle: 'あなたが問題なしとしたもの',
  undoSafe: '取り消す',
  howToBlock: 'ブロックする方法',
} as const;
