export const messageMonitoring = {
  actionTitle: 'メッセージ警告',
  actionDescription: 'メッセージに気がかりな語句が現れたら通知します',
  title: 'メッセージ警告',
  heroTitle: 'メッセージの安全',
  heroSubtitle:
    'KidGateはお子様のメッセージ内の気がかりな語句を検出して通知します。メッセージ本文は表示されず、検出された語句のみが表示されます。',
  androidOnlyNote: 'Android端末でのみ利用できます。',
  recentTitle: '最近の警告',
  emptyTitle: 'まだ警告はありません',
  emptySubtitle: 'メッセージに気がかりな語句は見つかっていません。',
  emptySubtitleNotWatching:
    '現在メッセージはチェックされていないため、何が起きてもこの一覧は空のままです。',
  flaggedTerm: '検出された語句：「{{term}}」',
  flaggedTermPrefix: '検出された語句：「',
  flaggedTermSuffix: '」',
  aiConfirmed: 'AIが確認済み',
  categoryPredator: '誘い出しの疑い',
  categorySelfHarm: '自傷の疑い',
  categoryExplicit: '露骨な内容',
  categoryViolence: '脅迫または暴力',
  categoryBullying: 'いじめ',
  categoryDrugs: '薬物・危険物',
  categoryAlcohol: 'お酒',
  categoryTobacco: 'たばこ・電子たばこ',
  categoryGambling: 'ギャンブル',
  categoryProfanity: '不適切な言葉',
  categoryUnknown: '検出されたメッセージ',
  setupTitle: 'メッセージの安全',
  setupBody:
    'メッセージに気がかりな語句がないか監視します。KidGateはメッセージ本文を表示せず、気がかりな内容があった場合に通知するだけです。',
  setupGrant: '通知へのアクセスを許可',
  setupEnable: 'メッセージの安全',
  controlledByParentHint:
    'オンとオフの切り替えは、保護者のスマホのKidGateアプリから行います。ここではできません。',
  parentIncomingLabel: '受信したメッセージを確認',
  parentOutgoingLabel: '入力したメッセージを確認',
  parentToggleHintGranted: 'このスマホで有効です。',
  parentToggleHintNotGranted:
    'このスマホではまだ許可されていません。お子さまの端末でKidGateを開いて許可してください。',
  parentToggleSaveFailed: '変更を保存できませんでした。',
  settingsTitle: 'メッセージ通知の設定',
  checkedTitle: '確認済み、問題なし',
  checkedSubtitle:
    '監視対象の言葉は出てきましたが、前後の文脈では問題がないと判断したため通知しませんでした。何が代わりに除かれているかを確認できるよう表示しています。通知すべきだったものがあればお知らせください。',
  consentTitle: 'AIによるメッセージ分析',
  consentBody:
    'オンにすると、キーワードが判断に迷うと判定したメッセージが、名前・番号・リンクを取り除いたうえでAIサービスに送られ、通知する前に本当に問題があるか確認します。高リスクの語句は何も送らず即時に通知します。',
  consentEnable: 'AI分析を有効にする',
  consentConfirmTitle: 'AIによるメッセージ分析を有効にしますか？',
  consentConfirmBody:
    '個人情報を取り除いた判断に迷うメッセージが、確認のためAIサービスに送られます。この処理に同意することを確認します。',
  consentAgree: '同意する',
  outgoingTitle: 'あなたが書くメッセージ',
  outgoingBody:
    'KidGateはチャットアプリで入力した内容も確認できます。同じ警告ワードを、この端末の中だけで探します。メッセージ本文はどこにも送信されません。',
  outgoingEnable: '書いた内容を確認する',
  outgoingGrant: '許可する',
  directionIncoming: '受信',
  directionOutgoing: '送信',
  alertBodyIncoming: 'アプリからのメッセージ',
  alertBodyOutgoing: 'アプリから送信されたメッセージ',
  aiLegend: 'このアイコンが付いたアラートは、通知される前にAIが確認したものです。',
  setupRevoked:
    'この機能に必要な権限がAndroidによってオフにされました。メッセージのチェックを続けるにはもう一度許可してください。',
  outgoingRevoked:
    'Androidがこの機能をオフにしました。書いた内容のチェックを続けるにはもう一度許可してください。',
  outgoingDisclosureTitle: '許可する前に',
  outgoingDisclosureBody:
    'KidGateが読むのはメッセージアプリで入力した内容だけです。ほかのアプリや、パスワード欄を読むことはありません。注意が必要な言葉の検出はこのスマホの中で行われます。メッセージがどこかへ送られることはなく、保護者に届くのは検出された単語だけです。',
  outgoingRestrictedHint:
    'スイッチが灰色で押せない場合は、設定 › アプリ › KidGate を開き、⋮ メニューから「制限された設定を許可」を選んでから、ここへ戻ってください。',
  notice: {
    revokedTitle: 'メッセージのチェックが停止しています',
    revokedBody:
      'KidGateに必要な権限がAndroidによってオフにされたため、メッセージはチェックされていません。お子さまの端末でKidGateを開き、もう一度許可してください。',
    offTitle: 'メッセージ保護がオンになっていません',
    offBody:
      'お子さまの端末では何もチェックされていないため、ここに通知が出ることはありません。設定するにはお子さまの端末でKidGateを開いてください。',
    pendingTitle: 'お子さまの端末への反映を待っています',
    pendingBody:
      'オンにしました。次に端末が接続したときに反映されます。通常は数分以内、スマホが使われていればもっと早く反映されます。ほかに操作は必要ありません。',
    unknownTitle: 'お子さまの端末からの報告待ちです',
    unknownBody:
      'この端末はメッセージ保護が動作しているかをまだ報告していません。そのため一覧が空でも判断できません。次回の接続時に更新されます。',
    outgoingAvailableTitle: 'お子さまが書いた内容もチェックする',
    outgoingAvailableBody:
      '受信したメッセージはすでにチェックされています。KidGateはお子さまがメッセージアプリで入力する内容もチェックできます。いじめや自傷はそちらにはるかに多く現れます。お子さまの端末で設定してください。',
  },
  languagesLabel: '検索する言語',
  languagesHint: 'この端末が心配な言葉を探す言語です。最大{{max}}件まで選べます。',
  languagesDefaultHint: '既定では端末の言語が使われます。',
} as const;
