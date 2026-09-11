export const messageMonitoring = {
  actionTitle: 'メッセージ警告',
  actionDescription: 'メッセージに気がかりな語句が現れたら通知します',
  title: 'コンテンツ警告',
  heroTitle: 'メッセージの安全',
  heroSubtitle:
    'KidGateはお子さまのメッセージ内の気がかりな語句を検出して通知します。メッセージ本文は表示されず、検出された語句のみが表示されます。',
  androidOnlyNote: 'Androidデバイスでのみ利用できます。',
  recentTitle: '最近の警告',
  emptyTitle: 'まだ警告はありません',
  emptySubtitle: 'メッセージに気がかりな語句は見つかっていません。',
  emptySubtitleNotWatching:
    '現在メッセージはチェックされていないため、何が起きてもこの一覧は空のままです。',
  flaggedTerm: '検出された語句：「{{term}}」',
  flaggedTermPrefix: '検出された語句：「',
  flaggedTermSuffix: '」',
  flaggedTermMeaning: '意味：{{gloss}}',
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
  guidanceToggle: '次にできること',
  guidanceHide: '閉じる',
  guidanceFooter:
    'KidGateはメッセージ本文を保存していません。残っているのはこの語句だけで、それ以上はお子さまから聞く必要があります。',
  guidance: {
    predator:
      '接近はたいてい親しげに始まり、同年代だと思い込んでいる相手から来ます。アラートに触れる前に、最近だれと話しているか、どのように知り合ったかを聞いてください。責められたと感じると話さなくなります。',
    selfHarm:
      'こうした言葉は計画よりも合図であることの方がはるかに多く、直接たずねてもその考えを植えつけることはありません。見かけたことと、怒っていないことを伝えてください。答えに不安を感じたら、その日のうちに相談窓口に連絡してください。',
    explicit:
      '送られてきたもの、見せられたもの、自分で入力したもののいずれかです。反応する前にどれなのかを確かめてください。受け取ったことと送ったことは別の話です。',
    violence:
      '友だち同士の冗談のように読めても、脅しは真剣に受け取る価値があります。学校の関係者からかどうかを聞いてください。そうであれば、学校が止めるための最短の道です。',
    bullying:
      '自分から話すことはほとんどなく、標的になった場合も加わった場合も同じ言葉が出ます。だれが悪いかではなく何があったかを聞き、学校に必要になる場合に備えて日付を残してください。',
    drugs:
      '一つの語句が使用の証拠になることはありません。好奇心や歌、冗談でも検出されます。部屋を調べるよりも率直にたずねてください。話し続けてくれることが何より大切です。',
    alcohol:
      '十代の会話ではよくある話題なので、証拠ではなく文脈として読んでください。パーティーで急を要する前に、家庭のルールをはっきり伝える良い機会です。',
    tobacco:
      '電子たばこは友人グループを通じて広がり、隠すというより社交的なものです。友だちが何を使っているかを聞いてください。一般的な注意よりも、具体的な名前を挙げる方が届きます。',
    gambling:
      'ガチャやカードパック、アイテム賭けも含まれ、子どもにはギャンブルだと感じられないことが多いです。お金の問題として扱う前に、ゲーム内で何に使っているかを確認してください。',
    profanity:
      '汚い言葉そのものはよくあることで、安全についてはほとんど何も示しません。ご家庭にとって雑音でしかない場合は、この画面の設定で「汚い言葉も検出する」をオフにしてください。',
    unknown:
      'このアラートは、このバージョンがもう名前を持たないデバイスまたは語句リストから届いています。上の検出された語句が聞くべき内容で、メッセージの他の部分は残っていません。',
  },
  setupTitle: 'メッセージの安全',
  setupBody:
    'メッセージに気がかりな語句がないか監視します。KidGateはメッセージ本文を表示せず、気がかりな内容があった場合に通知するだけです。',
  setupGrant: '通知へのアクセスを許可',
  setupEnable: 'メッセージの安全',
  controlledByParentHint:
    'オンとオフの切り替えは、保護者のスマホのKidGateアプリから行います。ここではできません。',
  parentIncomingLabel: '受信したメッセージを確認',
  parentOutgoingLabel: '入力したメッセージを確認',
  parentSearchLabel: '検索内容をチェック',
  parentSearchHint:
    'ブラウザと YouTube。報告されるのは該当した語句だけで、検索内容そのものは送られません。',
  parentToggleHintGranted: 'このスマホで有効です。',
  parentToggleHintNotGranted:
    'このスマホではまだ許可されていません。お子さまのデバイスでKidGateを開いて許可してください。',
  parentProfanityLabel: '汚い言葉も検出する',
  parentProfanityHint:
    'デフォルトはオフ。普通の悪態はよくあるため、オンにするとそれも警告の対象になります。',
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
    'KidGateはチャットアプリで入力した内容も確認できます。同じ警告ワードを、このデバイスの中だけで探します。メッセージ本文はどこにも送信されません。',
  outgoingEnable: '書いた内容を確認する',
  outgoingGrant: '許可する',
  directionIncoming: '受信',
  directionOutgoing: '送信',
  directionSearch: '検索',
  alertBodyIncoming: 'アプリからのメッセージ',
  alertBodyOutgoing: 'アプリから送信されたメッセージ',
  alertBodySearch: '検索した場所',
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
      'KidGateに必要な権限がAndroidによってオフにされたため、メッセージはチェックされていません。お子さまのデバイスでKidGateを開き、もう一度許可してください。',
    offTitle: 'メッセージ保護がオンになっていません',
    offBody:
      'お子さまのデバイスでは何もチェックされていないため、ここに通知が出ることはありません。設定するにはお子さまのデバイスでKidGateを開いてください。',
    pendingTitle: 'お子さまのデバイスへの反映を待っています',
    pendingBody:
      'オンにしました。次にデバイスが接続したときに反映されます。通常は数分以内、スマホが使われていればもっと早く反映されます。ほかに操作は必要ありません。',
    unknownTitle: 'お子さまのデバイスからの報告待ちです',
    unknownBody:
      'このデバイスはメッセージ保護が動作しているかをまだ報告していません。そのため一覧が空でも判断できません。次回の接続時に更新されます。',
    outgoingAvailableTitle: 'お子さまが書いた内容もチェックする',
    outgoingAvailableBody:
      '受信したメッセージはすでにチェックされています。KidGateはお子さまがメッセージアプリで入力する内容もチェックできます。いじめや自傷はそちらにはるかに多く現れます。お子さまのデバイスで設定してください。',
  },
  languagesLabel: '検索する言語',
  languagesHint: 'このデバイスが心配な言葉を探す言語です。最大{{max}}件まで選べます。',
  languagesDefaultHint: '既定ではデバイスの言語が使われます。',
  setupStepFindKidGate:
    '通知へのアクセス一覧でKidGateを見つけてオンにします。KidGateは2つ表示されることがあります。もう一方は夜間の通話アラート用なので、戻ってきてもこのステップが完了しない場合はもう一方をオンにしてください。',
} as const;
