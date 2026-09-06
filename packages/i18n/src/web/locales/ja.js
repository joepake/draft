/** Japanese. No plural inflection, so counted strings keep the plain key. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{total}} 件中 {{flagged}} 件のアプリは確認する価値があります',
    summaryClear: '{{total}} 件のアプリに注意すべきものはありません',
    summaryFlaggedExtension:
      '{{total}} 件の Chrome 拡張機能のうち {{flagged}} 件は確認をおすすめします',
    summaryClearExtension: '{{total}} 件の Chrome 拡張機能に気になるものはありません',
  },
  meta: {
    title: 'KidGate — 子どもを尊重するペアレンタルコントロール',
    description:
      'KidGate は、子どもの自由を奪わずに、スクリーンタイムの管理、アプリのブロック、ウェブのフィルタリング、連絡の維持を保護者が行えるようにします。',
  },

  common: {
    comingSoon: '近日公開',
    loading: '読み込み中…',
    signOut: 'ログアウト',
  },

  language: {
    title: '言語',
    change: '言語を変更',
    system: 'ブラウザの言語',
    english: '英語',
    vietnamese: 'ベトナム語',
    spanish: 'スペイン語',
    portuguese: 'ポルトガル語（ブラジル）',
    german: 'ドイツ語',
    french: 'フランス語',
    japanese: '日本語',
    korean: '韓国語',
    arabic: 'アラビア語',
    indonesian: 'インドネシア語',
    italian: 'イタリア語',
    turkish: 'トルコ語',
    hindi: 'ヒンディー語',
    russian: 'ロシア語',
  },

  nav: {
    skip: '本文へスキップ',
    main: 'メイン',
    about: '私たちについて',
    support: 'サポート',
    privacy: 'プライバシー',
    terms: '利用規約',
    dashboard: 'ダッシュボード',
  },

  footer: {
    blurb:
      'スクリーンタイムをめぐって言い争うのではなく、家族で納得して決められるようにするペアレンタルコントロールです。',
    product: '製品',
    about: '私たちについて',
    dashboard: '保護者ダッシュボード',
    supportGuides: 'サポートとガイド',
    download: 'ダウンロード',
    contact: 'お問い合わせ',
    legal: '法的情報',
    privacyPolicy: 'プライバシーポリシー',
    terms: '利用規約',
    deleteData: 'データを削除する',
    rights: '© {{year}} KidGate. All rights reserved.',
    madeFor: 'iPhone、Android、Mac、Windows の家族のために。',
  },

  legalNote:
    'このページは英語版のみで、効力を持つのは英語の本文です。内容についてご不明な点があれば [support@kidgate.app](mailto:support@kidgate.app) までご連絡ください。',

  store: {
    appleAria: 'App Store で KidGate をダウンロード',
    appleSmall: 'ダウンロードは',
    appleName: 'App Store',
    googleAria: 'Google Play で KidGate を入手',
    googleSmall: '入手は',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: '正しいかたちのペアレンタルコントロール',
    heroTitle: '子どもを守る、',
    heroTitleAccent: 'その自由を奪わずに。',
    heroLede:
      'KidGate は、スクリーンタイム・アプリ・安全について、保護者に落ち着いた明快なコントロールを届けます。子どもの手には、変わらず「自分のもの」と感じられるスマホが残ります。',
    heroCheck1: 'スクリーンタイム',
    heroCheck2: 'アプリのブロック',
    heroCheck3: 'ウェブフィルタ',
    heroCheck4: '位置情報',
    heroCheck5: '家族ダッシュボード',

    phoneDailyLimit: '1 日の上限',
    phoneDailyLimitValue: '3 時間のうち 1 時間 24 分を使用',
    phoneBlockedHours: '利用禁止時間',
    phoneScheduleOn: 'スケジュール有効',
    phoneLocation: '位置情報',
    phoneLocationValue: '学校 · 5 分前',
    phoneCheckIn: 'チェックイン OK',

    trust1Title: '広告は一切なし',
    trust1Text: '子どものデータを広告に使うことはありません',
    trust2Title: 'いつでも削除',
    trust2Text: 'ご希望があれば家族アカウントと全データを消去します',
    trust3Title: 'スマホ、パソコン、ブラウザ',
    trust3Text: 'iPhone、Android、Mac、Windows、Chrome をひとつの家族アカウントで',
    trust4Title: '家族ごとに 1 プラン',
    trust4Text: '保護者と子どものすべてのデバイスを 1 つのサブスクで',

    featuresEyebrow: '機能',
    featuresTitle: '保護者に必要なものがすべて',
    featuresSub:
      '1 日の上限から緊急アラートまで — 家族みんなのデジタルウェルビーイングをひとつのアプリで。',
    feature1Title: 'スクリーンタイムと 1 日の上限',
    feature1Text:
      '学校や就寝時間に合わせて、1 日の上限と利用禁止時間を設定できます。時間切れになるとデバイスは自動でロックされます。',
    feature2Title: 'アプリのブロック',
    feature2Text:
      '子どもが開けるアプリを保護者 PIN で守りながら細かく指定でき、ブロックは遠隔でオンにできます。',
    feature3Title: 'アプリごとの時間制限',
    feature3Text:
      '1 日の上限とは別に、アプリごとに上限を設定できます。「TikTok は 30 分」と、禁止せずに決められます。',
    feature4Title: 'ウェブフィルタと閲覧履歴',
    feature4Text:
      'スマホでもパソコンでも Chrome でも、アダルトやギャンブルのサイトを拒否したうえで、実際に見に行かれたサイトと、止められたサイトを確認できます。',
    feature5Title: 'リアルタイムの位置情報と場所',
    feature5Text:
      '子どもの最新の位置を確認し、履歴を見返し、登録した場所への到着・出発を通知で受け取れます。',
    feature6Title: 'チェックインと SOS',
    feature6Text:
      '子どもに無事の確認を求められ、緊急時には位置情報と写真つきの SOS をすぐに受け取れます。',
    feature7Title: '保護アラートとアプリ通知',
    feature7Text:
      '重要な権限がオフになった瞬間に分かります。Android、Mac、Windows では、新しいアプリが現れて承認を待っていることも知らせます。',
    feature8Title: 'ごほうびタスクと延長申請',
    feature8Text:
      '子どもはタスクを終えてボーナス時間を得たり、延長を申請したりできます。どちらも承認待ちとしてあなたのスマホに届きます。',

    feature9Title: 'デバイスロック',
    feature9Text:
      '今すぐ端末をロックし、頃合いを見て解除できます。食事、宿題、守られなかった約束のときに。',
    feature10Title: '週次レポート',
    feature10Text:
      '毎週月曜に届きます。使用時間、1日の平均、ブロックされたもの、前の週との比較。',
    feature11Title: 'スターボード',
    feature11Text:
      '今週それぞれが何個の星を集めたかを子ども同士で見られます。毎週月曜にリセットされ、使うかどうかは保護者が決めます。',
    feature12Title: 'アクティビティ履歴',
    feature12Text:
      '起きたことが時系列で並びます。端末のロック解除、フィルタしたサイト、終えたタスク、届いた通知。',
    platformsTitle: 'どの画面でも、KidGate はひとつ',
    platformsSub:
      'スマホでもパソコンでも Chrome でも、同じルールと同じ家族アカウント。パソコン版はストアではなく、このサイトからインストールします。',

    showcaseEyebrow: '保護者ダッシュボード',
    showcaseTitle: '家族全員をひとつの画面で',
    showcaseSub:
      'スクリーンタイム、ブロックした回数、位置情報、そして注意が必要なことすべてを — スマホでも、どのブラウザからでも。',
    showcaseTile1: '今日のスクリーンタイム',
    showcaseTile2: 'ブロックした回数',
    showcaseTile3: '要対応',
    showcaseCaption1: 'どのブラウザからでもレポートを閲覧',
    showcaseCaption2: '変更はスマホから承認',

    setupEyebrow: 'セットアップ',
    setupTitle: '数分で使いはじめられます',
    setupSub: '専門知識は不要です。アプリが手順を案内します。',
    step1Title: '自分のデバイスを設定する',
    step1Text:
      'KidGate をインストールし、「これは保護者のデバイスです」を選んで、Google・Apple・メールでログインします。',
    step2Title: '子どものデバイスとつなぐ',
    step2Text:
      '子どものスマホに KidGate をインストールし、QR コードを読み取って接続します。1 分もかかりません。',
    step3Title: 'ルールを決める',
    step3Text:
      '1 日の上限を決め、アプリと時間帯をブロックし、位置情報をオンに — すべて自分のスマホから。',

    whyEyebrow: 'KidGate を選ぶ理由',
    whyTitle: '監視ではなく、信頼のために',
    whySub: '保護者と子どもの対話が続くように設計しています。',
    why1Title: '1 プランで家族全員',
    why1Text:
      '1 つのサブスクで保護者と子どものすべてのデバイスをカバーします。支払うのは家族のオーナーだけです。',
    why2Title: '共同での子育てに対応',
    why2Text:
      'もう一人の保護者を招待して同じ子どもを管理できます。権限はオーナーが承認します。',
    why3Title: 'プライバシー第一',
    why3Text:
      '個人データを販売することは決してなく、子どものデータを広告に使うこともありません。いつでもすべて削除できます。',
    why4Title: '限界について正直に',
    why4Text:
      '各プラットフォームで何ができて何ができないかをお伝えします。存在しないコントロールを約束することはありません。',

    onlyEyebrow: 'KidGate だけ',
    onlyTitle: 'ほかでは見つからないもの',
    onlySub:
      '保護者が比較する各アプリと照らし合わせて確かめた 6 つの点です。それぞれ、どのプラットフォームで当てはまるかを明記しています。',
    only1Title: 'リビングのテレビも',
    only1Text:
      'Android TV でも、スマホと同じ利用禁止時間、アプリのブロック、アプリごとの上限、ウェブフィルタが使えます。ビルドはすでに実機で動いており、ストアでの公開を待っている段階です。プラットフォーム一覧が「予定」となっているのはそのためです。ほとんどのペアレンタルコントロールはスマホで止まります。',
    only2Title: 'スマホの中で完結するメッセージ警告',
    only2Text:
      'Android では、14 言語のキーワードリストとメッセージをデバイス上で照合します。スマホの外に出るのは一致した語句だけで、会話そのものが出ることはありません。それを変えるものは 1 つだけ、しかも希望した場合に限られます。AI による確認をオンにすると、判断が曖昧な受信メッセージが判定のために送られ、ありふれた語句で起こされずに済みます。',
    only3Title: 'アプリのリストではなく、すべてのアプリ',
    only3Text:
      'Android では、お子さまが使うどのアプリでも、通知と入力内容から警告が届きます。Zalo、LINE、KakaoTalk、ゲーム内チャットなど、対応アプリの固定リストには縛られません。',
    only4Title: 'お子さまの逃げ道',
    only4Text:
      'SOS を 5 秒長押しすると、位置情報とともにすぐ保護者に届きます。Android と Mac では、デバイスのロックも少しのあいだ解除されます。いつでも助けを呼べるお子さまに、アプリと争う理由はありません。',
    only5Title: 'ネットがなくても守られるルール',
    only5Text:
      '利用禁止時間と 1 日の上限はデバイス自身が守るため、ルーターを抜いても何も変わりません。テレビは接続がまったくなくても保護者 PIN を受け付けます。',
    only6Title: 'よかった週には、その分の評価を',
    only6Text:
      '週次レポートには、うまくいったこと — 守られた上限、なくなった夜更かし、終えた課題 — のための欄が必ずあり、その週がきちんと計測されたときにだけ伝えます。',

    faqEyebrow: 'よくある質問',
    faqTitle: '保護者が最初に聞くこと',
    faqSub: 'ダウンロード前の手早い答え。',
    faq1Q: '無料トライアルはありますか？',
    faq1A:
      'はい。お試し期間は最初の保護者のデバイスと子どものデバイスを接続した時点で始まり、Premium のすべての機能を含みます。終了後も、設定したルール — 1 日の上限、利用禁止時間、ブロックされたアプリ、ウェブフィルタ、デバイスロック、延長申請、ごほうびタスク — は子どものデバイス 1 台で無料のまま働き続け、そのデバイスに現在地をたずねることもできます。Premium で戻ってくるのは、リアルタイムの利用状況、履歴、週次レポート、位置情報の追跡です。',
    faq2Q: '何台まで管理できますか？',
    faq2A:
      '1 つのサブスクで家族全体をカバーします。子どものデバイスも保護者も、すべて同じプランです。無料プランでは子どものデバイス 1 台が監視の対象として残り、どれにするかは保護者が選びます。ほかのデバイスは、すでに設定したルールを適用し続けたまま、利用状況の送信を停止します。',
    faq3Q: '子どもが KidGate を削除したり回避したりできますか？',
    faq3A:
      '重要な設定は保護者 PIN で守られ、子どものデバイスで主要な権限がオフになると保護アラートですぐに知らせます。',
    faq4Q: 'すべてをパソコンから管理できますか？',
    faq4A:
      'はい。保護者ダッシュボードはどのブラウザでも開けます。スマホに表示されるコードでサインインすると、同じ家族、デバイス、設定が見られます。閲覧はすぐにできます。デバイスのロックや上限の変更には、保護者 PIN か、アプリからの承認が必要です。',
    faqMore: 'ほかにも質問がありますか？ サポートへ',

    ctaTitle: '今日から家族を守りはじめましょう',
    ctaSub: 'すべての機能を使える無料トライアル。開始にクレジットカードは不要です。',
    ctaNote: 'App Store または Google Play からいつでも解約できます。',
  },

  login: {
    title: '保護者ログイン',
    sub: 'KidGate アプリで作成したものと同じアカウントを使ってください。ここでログインすると、同じ家族・デバイス・設定が表示されます。',
    notConfiguredTitle: 'このデプロイでは Firebase が設定されていません。',
    notConfiguredBody:
      'ログインを有効にするには VITE_FIREBASE_* 環境変数を設定してください。',
    qrWhy:
      'スマホで読み取ると、ログインとコントロールのロック解除が一度に済みます。下の方法はまず閲覧用のログインで、コントロールを解除するには保護者用 PIN が必要です。',
    orViewOnly: 'または別の方法でログイン',
    google: 'Google で続ける',
    googleBusy: 'Google を開いています…',
    apple: 'Apple で続ける',
    appleBusy: 'Apple を開いています…',
    orEmail: 'またはメールを使う',
    email: 'メール',
    emailPlaceholder: 'you@example.com',
    password: 'パスワード',
    submit: 'ログイン',
    submitBusy: 'ログインしています…',
    forgot: 'パスワードをお忘れですか？',
    resetNeedsEmail:
      'まずメールアドレスを入力してから、「パスワードをお忘れですか？」を選んでください。',
    resetSent: 'パスワード再設定メールを {{email}} に送信しました。',
    foot: 'KidGate のアカウントはモバイルアプリで作成します。ウェブダッシュボードは既存の家族にログインするためのものです。初めての方は、まずアプリをインストールして子どものデバイスを接続してください。',
  },

  qr: {
    start: 'KidGate アプリでログイン',
    generating: 'コードを生成しています…',
    step1: 'スマホで KidGate を開きます。',
    step2: '*設定 → ウェブでログイン* に進みます。',
    step3: 'このコードを読み取って承認します。',
    waiting: '承認を待っています · {{time}} で期限切れ',
    signingIn: '承認されました。ログインしています…',
    expired: 'このコードは期限切れです。',
    failed: 'ログインが完了しませんでした。',
    newCode: '新しいコードを表示',
    tryAgain: 'もう一度試す',
  },

  authError: {
    generic: '問題が発生しました。もう一度お試しください。',
    invalidEmail: 'このメールアドレスは正しくないようです。',
    userDisabled: 'このアカウントは無効化されています。',
    userNotFound: 'そのメールアドレスの KidGate アカウントはありません。',
    wrongPassword: 'メールアドレスまたはパスワードが違います。',
    tooManyRequests: '試行回数が多すぎます。数分待ってからもう一度お試しください。',
    popupClosed: 'ログインウィンドウが完了前に閉じられました。',
    popupCancelled: 'ログインがキャンセルされました。',
    popupBlocked:
      'ブラウザがログインウィンドウをブロックしました。このサイトのポップアップを許可してからもう一度お試しください。',
    accountExists:
      'そのメールアドレスは別のログイン方法で登録済みです。アプリで設定した方法を使ってください。',
    operationNotAllowed:
      'そのログイン方法はこのプロジェクトでまだ有効化されていません。',
    unauthorizedDomain:
      'このドメインは Firebase Authentication の設定で許可されていません。',
    invalidCustomToken:
      'そのログインリンクは無効になりました。新しい QR コードを表示してください。',
    webRejected: 'リクエストはスマホ側で拒否されました。',
    webExpired: 'コードの期限が切れました。新しく生成してください。',
    noFunctionsUrl:
      'Cloud Functions の URL が設定されていません（VITE_FIREBASE_FUNCTIONS_URL）。',
    sessionExpired: 'セッションの有効期限が切れました。もう一度ログインしてください。',
  },

  live: {
    checkingSession: 'セッションを確認しています…',
    loadingFamily: '家族の情報を読み込んでいます…',
    loadFailedTitle: '家族の情報を読み込めませんでした',
    noAccess:
      'このアカウントには KidGate の家族へのアクセス権がありません。アプリで使っている保護者アカウントでログインしてください。',
  },

  time: {
    never: '記録なし',
    justNow: 'たった今',
    minutes: '{{count}} 分前',
    hours: '{{count}} 時間前',
    days: '{{count}} 日前',
  },

  viz: {
    hours: '{{count}}時間',
    minutes: '{{count}}分',
    hoursMinutes: '{{hours}}時間{{minutes}}分',
    none: '—',
    byDay: '日ごとのスクリーンタイム',
    limit: '上限 {{value}}',
    screenTime: 'スクリーンタイム',
    bonus: 'ボーナス',
    bonusEarned: '獲得したボーナス',
    overLimit: '1 日の上限を超過',
    dailyLimit: '1 日の上限',
    ofLimit: '/ {{value}}',
    noLimit: '上限は未設定',
    blocked: 'ブロック',
    blockedHours: '利用禁止時間',
    day0: '日',
    day1: '月',
    day2: '火',
    day3: '水',
    day4: '木',
    day5: '金',
    day6: '土',
    timelineUsed: '使用中',
    timelineIdle: '未使用',
    timelineUnmeasured: '計測できず',
    timelineUnmeasuredHint:
      'KidGate がデバイスで動いていなかったか、デバイスがスリープしていました。この時間は合計にも含まれません。',
    timelineUnsupported:
      'このデバイスは使用時間の長さは報告できますが、いつ使ったかは報告できません。',
    timelinePending: 'まだタイムラインがありません。',
  },

  perm: {
    screenTime: 'スクリーンタイム',
    location: '位置情報',
    notifications: '通知',
    camera: 'カメラ',
    backgroundAppRefresh: 'Appのバックグラウンド更新',
    overlay: '他のアプリの上に表示',
    batteryOptimization: 'バッテリー無制限',
    exactAlarm: '正確なアラーム',
    accessibility: 'ユーザー補助',
  },

  webCat: {
    adult: 'アダルト',
    selfHarm: '自傷・摂食障害',
    gambling: 'ギャンブル',
    gameGambling: 'ルートボックス・スキン賭博',
    dating: '出会い系',
    strangerChat: '見知らぬ人とのチャット',
    drugs: '薬物・アルコール',
    violence: '暴力・グロ',
    extremism: '過激思想・ヘイト',
    piracy: '海賊版',
    social: 'SNS',
    videoStreaming: '動画配信',
    music: '音楽',
    gaming: 'ゲーム',
    shopping: 'ショッピング',
    aiCompanion: 'AIコンパニオン',
    aiAssistant: 'AIアシスタント',
    cryptoTrading: '暗号資産・取引',
    vpn: 'VPNアプリ',
  },

  appCat: {
    adult: 'アダルト',
    gambling: 'ギャンブル',
    gameGambling: 'ルートボックス・スキン賭博',
    dating: '出会い系',
    drugs: '薬物・アルコール',
    violence: '暴力・グロ',
    piracy: '海賊版',
    bypass: 'フィルター回避・VPN',
  },

  webCatGroup: {
    harm: '有害なコンテンツ',
    contact: '見知らぬ人',
    bypass: 'フィルターの回避',
    ai: 'AI',
    entertainment: '娯楽・SNS',
    money: '買い物・お金',
  },

  dash: {
    tabOverview: '概要',
    tabScreen: 'スクリーンタイム',
    tabApps: 'アプリとウェブ',
    tabSafety: '安全',
    tabControls: 'コントロール',
    tabReport: '週次レポート',
    tabReportNew: '新しい週次レポート',

    children: '子ども',
    noChildren: 'まだ子どものデバイスが接続されていません。',
    unassignedDevices: '未割り当て',
    manage: '管理',
    parents: '保護者 {{count}} 人',
    devices: '子どものデバイス {{count}} 台',
    planManageOnPhone: 'プランの購入と変更は、スマホの KidGate アプリで行います。',
    fallbackFamily: 'あなたの家族',
    fallbackDevice: '子どものデバイス',

    statusOnline: 'オンライン',
    statusOffline: 'オフライン',
    statusLocked: 'ロック中',
    statusLockSent: 'ロック送信済み',
    statusLockNotApplied: 'ロック未適用',
    statusPaused: '一時停止',

    stateAllowed: '許可済み',
    stateDenied: 'オフ',
    stateNotDetermined: '未確認',
    stateRestricted: '制限あり',
    stateUnavailable: '利用不可',
    stateUnknown: '不明',

    lastActive: '最終アクティブ {{when}}',
    appVersion: 'アプリのバージョン',
    appVersionUpdate: '{{running}} · {{latest}} が利用可能',
    appVersionRestart: '{{running}} · アプリを再起動して完了',
    buildOutdated: 'アップデートあり',
    checkIn: 'チェックイン',
    sending: '送信中…',
    lockDevice: 'デバイスをロック',
    unlock: 'ロック解除',
    working: '処理中…',
    save: '保存',

    unlockTitle: '変更はロックされています。',
    unlockBody:
      '閲覧はそのまま使えます。デバイスのロック、上限の変更、リクエストの承認を行うには、保護者用 PIN でこのブラウザのロックを解除してください。KidGate アプリで QR コードを読み取って承認することもできます。チェックインはどちらの場合でも使えます。',
    unlockCta: '変更のロックを解除',
    unlockToChange: '先に変更のロックを解除してください',
    pinTitle: '保護者用 PIN を入力',
    pinBody:
      'アプリで使うのと同じ 6 桁です。このブラウザは 7 日間解除されたままになります。',
    pinLabel: '保護者用 PIN',
    pinSubmit: 'ロック解除',
    pinOrScan: 'またはスマホから承認',
    qrSaferNote:
      'スマホからの承認のほうが安全です。接続済みのスマホが手元にないとできないのに対し、PIN は家族の誰かが入力を見ていたかもしれない 6 桁だからです。',
    pinWrong: 'PIN が違います。残り {{count}} 回。',
    pinLocked:
      '失敗が多すぎます。15 分待つか、このブラウザをスマホから承認してください。',
    pinNotSet:
      'ご家族の保護者用 PIN がまだ設定されていません。アプリで設定するか、このブラウザをスマホから承認してください。',
    unlockedToast: 'このブラウザで変更のロックを解除しました。',
    close: '閉じる',

    noDeviceTitle: 'まだ子どものデバイスがありません',
    noDeviceBody:
      'スマホで KidGate を開き、*家族 → + → 子どものデバイスを接続* に進んで、子どものデバイスに表示される QR コードを読み取ってください。接続から数秒でここに表示されます。',

    toastCheckIn: '{{name}} にチェックインのリクエストが届きます。',
    toastTimeApproved: '追加時間を承認しました。',
    toastCheckInResent: 'チェックインを再送しました。',

    tileScreenToday: '今日のスクリーンタイム',
    tileSameAsAverage: '過去 7 日間の平均と同じ',
    tileDeltaUp: '↑ 過去 7 日間の平均比 {{percent}}%',
    tileDeltaDown: '↓ 過去 7 日間の平均比 {{percent}}%',
    tileBlocked: 'ブロックした回数',
    tileBlockedMeta: 'インストール以降に止めたアプリ',
    tileSites: 'フィルタしたサイト',
    tileCategoriesHit: '{{count}} カテゴリに該当',
    tileNothingBlocked: 'まだブロックはありません',
    tileAttention: '要対応',
    tileOpenItems: '未処理の項目は下にあります',
    tileAllClear: '問題ありません',

    cardScreenTime: 'スクリーンタイム',
    cardScreenTimeSub: '直近 14 日間、1 日の上限との比較',
    usageSyncNote:
      'スクリーンタイムがこの画面に反映されるまで数分かかることがあります。デバイスがインターネットに接続していない場合や、予期せず終了した場合は、さらに時間がかかることがあります。',
    usageSyncNoteTv:
      'このテレビは定期的にしか通信しないため、スクリーンタイムがこの画面に反映されるまで最大1時間かかることがあります。インターネットに接続していない場合はさらに時間がかかります。',
    cardRecent: '最近のアクティビティ',
    cardRecentSub: '新しい順',
    cardRecentEmpty:
      'まだ記録はありません。このデバイスのロック、ブロックしたアプリ、場所の通知、スクリーンタイムの同期がここに表示されます。',
    cardAttention: '対応が必要です',
    cardAttentionSub: '未処理 {{count}} 件',
    cardAttentionEmpty: '確認すべきことはありません。保護は良好です。',
    cardProtection: '保護の状態',
    cardProtectionSub: '確認 {{when}}',

    attnMoreMinutes: '{{name}} が {{minutes}} 分の延長を申請しました',
    attnReason: '「{{reason}}」· {{when}}',
    attnCheckInMissed: 'チェックインが未応答でした',
    attnCheckInMissedMeta: '送信 {{when}} · 応答なし',
    attnLimitReached: '1 日の上限に達しました — デバイスをロックしました',
    attnLimitReachedMeta: '今日 {{used}} 使用',
    attnBatteryLow: 'バッテリー残量が少なくなっています（{{level}}%）',
    attnBatteryLowMeta: '電池切れになると位置情報の更新が止まることがあります',
    attnReview: '確認',
    attnResend: '再送',
    attnHowToFix: '対処方法',
    attnUnlock: 'ロック解除',
    attnAppOnly: 'KidGate アプリで利用できます',

    todayTitle: '今日',
    todaySub: '1 日の上限と獲得したボーナスとの比較',
    used: '使用',
    left: '残り',
    dailyLimit: '1 日の上限',
    bonusToday: '今日のボーナス',
    off: 'オフ',
    on: 'オン',
    topAppsTitle: '今日よく使ったアプリ',
    topAppsSub: 'アプリごとの上限はマーカーで表示',
    topAppsFreeHint: '今日のトップ3 — 全リストと履歴はPremiumで見られます。',
    trendTitle: 'スクリーンタイムの推移',
    trendSub: '直近 {{count}} 日間',
    rangeDays: '{{count}} 日',
    blockedHoursTitle: '利用禁止時間',
    blockedHoursSub:
      '{{count}} 個の時間帯 · 影のついたブロック内ではデバイスはロックされたままです',
    scheduleOff: 'スケジュールはオフです',
    schedMax: '1 台につき時間帯は最大 {{max}} 件です。',

    appUsageTitle: '今日のアプリ使用状況',
    appUsageSub: 'アプリごとの使用時間',
    topAppsOther: 'その他のアプリ',
    underAMinute: '1分未満',
    appUsageEmpty: 'アプリの利用はまだ報告されていません。',
    appBlockingTitle: 'アプリのブロック',
    appBlockingSub: '保護者 PIN を使って子どものデバイスで選択します',
    blockingLabel: 'ブロック',
    appsBlocked: 'ブロック中のアプリ',
    categories: 'カテゴリ',
    perAppHint:
      'アプリごとの上限はブロックリストとは別に動きます。「TikTok を 30 分」は「TikTok は禁止」とは別の判断です。',
    limitsMax: '1 台につき上限付きアプリは最大 {{max}} 件です。',
    perDay: '{{value}}/日',
    webActivityTitle: 'ウェブの利用状況',
    webActivitySub: '訪問の多いドメイン、直近 30 日間',
    webActivityEmpty: 'ウェブの利用履歴はまだありません。',
    inventoryTitle: 'インストール済みのアプリ',
    inventorySub: '変化があったものだけでなく、この端末のすべて',
    inventoryEmpty: 'この端末はまだアプリ一覧を送信していません。',
    inventoryStale:
      'この一覧は古くなっています。端末が次に接続したときに更新されます。',
    inventoryFirstScan: '初回のスキャンのため、いつ追加されたかは分かりません。',
    inventoryFlagged: '確認する価値あり',
    inventoryFlaggedLabel: '要確認',
    inventoryOtherLabel: '判別済み',
    inventoryUnknownLabel: '未判別',
    inventoryIncomplete:
      'ホーム画面にアイコンがないアプリはここに表示されないことがあります。',
    inventoryPending: '保護者の承認待ちです',
    pendingInstallBlocked: '許可するまでブロックされます',
    installAllow: '許可',
    pendingInstallsTitle: '承認待ちの新しいアプリ',
    pendingInstallsSub:
      '承認をオンにしたあとにインストールされ、デバイスが自動でブロックしたアプリです',
    pendingInstallsEmpty: '承認待ちの新しいアプリはありません。',
    toastInstallAllowed: 'アプリを許可しました',
    rowInstallApproval: '新しいアプリの承認',
    rowInstallApprovalDesc: '{{count}} 個のアプリが承認待ちです',
    rowInstallApprovalDesc_one: '{{count}} 個のアプリが承認待ちです',
    rowInstallApprovalDescIos:
      'App Store を非表示にします。Apple はアプリごとの承認を認めていません',
    webActivitySyncNote:
      'ウェブの利用状況がこの画面に反映されるまで数分かかることがあります。デバイスがインターネットに接続していない場合や、予期せず終了した場合は、さらに時間がかかることがあります。',
    webActivitySyncNoteTv:
      'このテレビは定期的にしか通信しないため、ウェブの利用状況がこの画面に反映されるまで最大1時間かかることがあります。インターネットに接続していない場合はさらに時間がかかります。',
    colDomain: 'ドメイン',
    colVisits: '訪問',
    colBlocked: 'ブロック',
    colLastSeen: '最終',
    videosTitle: '視聴した動画',
    videosSub: 'YouTube とウェブで見たもの',
    videosEmpty: 'まだ動画はありません。',
    colVideo: '動画',
    colChannel: 'チャンネル',
    colViews: '視聴回数',
    filterRefusedTitle: 'フィルタが拒否した内容',
    filterRefusedSub: 'ブロックした照会 {{count}} 件、直近 30 日間',
    nothingBlockedYet: 'まだ何もブロックされていません。',
    rollupNoteAi:
      '一部はサイト名からの推定で、既知のサイトとの照合ではありません。外れているものもあります。',
    webBackgroundNote:
      '誰も端末を使っていないときも、一部のアプリはバックグラウンドでインターネットに接続します。更新やおすすめの取得、定期通信が自動で動きます。',
    filterHintIos:
      'iOS ではフィルタに Apple のアダルトコンテンツ制限を使います。カテゴリ別のブロックは Android のみです。',
    filterHintAndroid: 'カテゴリはデバイス内の DNS フィルタが適用します。',
    filterHintMacos: 'カテゴリは Mac 上の KidGate コンテンツフィルタが適用します。',

    locationTitle: '位置情報',
    locationSharingOff: '共有はオフです',
    locationSyncNote:
      '位置情報が更新されるまで数分かかることがあります。デバイスがインターネットに接続していない場合や、予期せず終了した場合は、さらに時間がかかることがあります。',
    locationUpdated: '更新 {{when}}',
    locationWaiting: '最初の更新を待っています',
    lastKnownLocation: '最後に分かった位置',
    nearPlace: '{{place}}の近く',
    noPlaces:
      '保存された場所はまだありません。アプリで追加すると、子どもの到着・出発を通知で受け取れます。',
    placeRadius: '{{meters}} m · ',
    placeArrive: '到着',
    placeLeave: '出発',
    placeNoAlerts: '通知なし',
    placeSamePin:
      '「{{name}}」と同じ場所です。別の場所に置くにはアプリの地図を使ってください。',
    placeWebHint:
      'ウェブでは、デバイスが最後に位置を報告した場所にしか場所を作れません。ほかの場所はアプリの地図から選んでください。',
    placeNeedsLocation: 'このデバイスからの位置情報を待っています。',
    sosTitle: 'SOS アラート',
    sosSub: '子どものデバイスからの緊急信号',
    sosEmpty:
      'SOS アラートはありません。使い方を互いに分かっておくため、一度一緒に試してみてください。',
    sosAcknowledged: '確認済み',
    sosActive: '対応中',

    checkInsTitle: 'チェックイン',
    checkInsSub: '子どもに無事かどうかの確認を求めます',
    checkInSafe: '無事を確認',
    checkInMissed: '応答なし',
    checkInWaiting: '待機中',
    checkInPhotoRequested: '写真と位置情報を要求しました',
    checkInNoReply: 'まだ返答がありません',
    checkInPhotoSkipped: '写真はスキップ',
    checkInPhotoAttached: '写真あり',
    checkInNoPhoto: '写真の要求なし',
    sendCheckIn: '今すぐチェックインを送る',

    protectionAlertsTitle: '保護アラート',
    protectionAlertsSub: 'インストール以降 {{count}} 件',
    protectionAlertsHint:
      '保護アラートは、設定した内容より弱い形でしか KidGate が動けないことを意味します。子どものデバイスで権限を戻すと解消されます。',

    limitCardTitle: '1 日の上限',
    limitCardSub: '毎日使える時間を制限します',
    limitAria: '1 日の上限（分）',
    limitScaleMin: '30 分',
    limitScaleMax: '8 時間',
    limitHint:
      'ごほうびタスクや承認した延長申請のボーナス時間は、その日に限って上乗せされます。',
    limitShared: 'すべてのデバイス共通',
    limitSharedSpent: '今日は {{limit}} のうち {{used}} を使用',
    limitSharedHint:
      'これはお子さまの一日全体で、この端末だけの上限ではありません。ほかの端末が使わなかった分が各端末に回ります。変更は KidGate アプリから行えます。',
    whatsOnTitle: 'オンになっている機能',
    whatsOnSub: '変更は子どものデバイスに同期されます',
    rowBlockedHours: '利用禁止時間',
    rowBlockedHoursDesc: '{{count}} 個の時間帯 · {{list}}',
    rowAppBlocking: 'アプリのブロック',
    rowAppBlockingApps: '{{count}} 個のアプリ',
    rowAppBlockingApps_one: '{{count}} 個のアプリ',
    rowAppBlockingCategories: '{{count}} 個のカテゴリ',
    rowAppBlockingCategories_one: '{{count}} 個のカテゴリ',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'ウェブフィルタ',
    rowWebFilterDesc: '{{count}} カテゴリを拒否',
    rowNotSupported: 'このデバイスでは対応していません',
    rowWebFilterAwaitingApproval: 'デバイスでの承認待ちです',
    rowWebFilterSwitchedOff: 'デバイスでオフになっています',
    rowLocation: '位置情報の共有',
    rowLocationDesc: '最終更新 {{when}}',
    rowLocationNone: 'まだ位置情報がありません',
    rowSearchMonitoring: '検索のチェック',
    rowSearchMonitoringDesc:
      'ブラウザと YouTube。報告されるのは該当した語句だけで、検索内容そのものは送られません。',
    rowSafeSearch: 'セーフサーチを強制',
    rowSafeSearchDesc:
      'Google セーフサーチ、YouTube 制限付きモード、Bing、DuckDuckGo を厳格設定に固定します。Android、Android TV、Chrome。',

    webFilterCatsTitle: 'ウェブフィルタのカテゴリ',
    webFilterCatsSub: 'ブロックするコンテンツの種類',
    dnsHint:
      'フィルタの動作中、暗号化 DNS リゾルバは常に拒否されます。これを通してしまうと、ブラウザは他のすべてのカテゴリを迂回できてしまいます。',
    starChartTitle: 'スターボード',
    starChartSub: '今週お子さまごとに集めた星',
    starChartEmpty: 'アプリでもうひとり追加すると、スターボードが始まります。',
    starChartStars: '星{{count}}個',
    familyScreenTimeTitle: '家族のスクリーンタイム',
    familyScreenTimeSub: 'スクリーンタイムが少ない順、今週',
    familyScreenTimeEmpty:
      '今週はまだ誰からも報告がありません。スマホが報告すると行が表示されます。',
    familyScreenTimeParent: '保護者',
    familyScreenTimeDays: '{{count}} 日分の報告',
    rewardTasksTitle: 'ごほうびタスク',
    rewardTasksSub: 'タスクを終えると追加の時間がもらえます',
    rewardTaskMeta: '+{{minutes}} 分 · {{cadence}}',
    rewardTaskStars: 'むずかしさ：3段階中{{count}}',
    rewardTaskWaiting: ' · 承認待ち',
    approve: '承認',
    siteRequestsTitle: 'サイトのリクエスト',
    siteRequestsSub: 'この端末が許可を求めたサイト',
    siteRequestAllow: '許可',
    siteRequestDeny: '今はしない',
    attnSiteRequest: '{{name}}が{{domain}}を開こうとしています',
    toastSiteAllowed: 'サイトを許可しました',
    timelineTitle: '使った時間帯',
    timelineSub: '今日の0時から24時まで。緑はデバイスを使っていた時間です。',
  },

  controlError: {
    generic: '完了できませんでした。もう一度お試しください。',
    network: '接続がありません。ネットワークを確認してからお試しください。',
    sessionExpired:
      'セッションの有効期限が切れました。もう一度サインインしてください。',
    forbidden:
      'このブラウザのセッションでは変更できません。KidGate アプリで QR コードを読み取って、もう一度サインインしてください。',
    notFound: '見つかりません。スマートフォン側で変更された可能性があります。',
    conflict:
      '別の方がたった今これを変更しました。再読み込みして最新の状態をご確認ください。',
    rateLimited: '一度に変更が多すぎます。少し待ってからお試しください。',
    server: 'KidGate はこれを完了できませんでした。しばらくしてからお試しください。',
    premiumRequired:
      'これはPremiumの機能です。プランはスマートフォンのKidGateアプリで管理します。',
  },

  report: {
    title: '週次レポート',
    subtitle: 'KidGate が今週気づいたこと。',
    weekOf: '{{week}} の週',
    range: '{{from}} – {{to}}',
    writtenAt: '{{when}} に作成',
    triggerScheduled: '月曜に送信',
    triggerManual: 'ご自身で作成',
    statScreenTime: 'スクリーンタイム',
    statDailyAverage: '1 日あたりの平均',
    statBlockedApps: 'ブロックしたアプリ',
    statBlockedWebVisits: 'フィルタしたサイト',
    statTasksApproved: '完了したタスク',
    trendUp: '前の週より {{value}} 多い',
    trendDown: '前の週より {{value}} 少ない',
    trendFlat: '前の週とほぼ同じ',
    trendFirstWeek: '計測できた最初の週',
    barThisWeek: '今週',
    barLastWeek: '先週',
    highlights: '知っておきたいこと',
    sevAttention: '目を通したい',
    sevNotable: '注目',
    sevInfo: '参考まで',
    findingUsageUp:
      'スクリーンタイムは {{percent}}% 増加し、先週より {{delta}} 長くなりました。',
    findingUsageDown:
      'スクリーンタイムは {{percent}}% 減少し、先週より {{delta}} 短くなりました。',
    findingUsageFlat: 'スクリーンタイムは {{total}} で横ばいでした。',
    findingLateNight:
      '23 時以降の夜が {{count}} 回あり、最も遅い日は {{time}} まででした。',
    findingNewTopApp:
      '{{app}} は今週から使われ始め、すでに {{duration}} に達しています。',
    findingAppSurge:
      '{{app}} は先週より {{delta}} 増え、合計 {{duration}} になりました。',
    findingLimitHit: '1 日の上限 {{limit}} に達した日が {{count}} 日ありました。',
    findingBlockedApps:
      'アプリの起動を {{count}} 件ブロックしました（先週は {{previous}} 件）。',
    findingBlockedWeb:
      'サイトを {{count}} 件フィルタしました（先週は {{previous}} 件）。',
    findingQuietWeek:
      '穏やかな一週間でした。合計 {{total}} で、確認が必要なことはありません。',
    narrativeTitle: 'ひとことで',
    finePrint:
      '数値は {{from}} から {{to}} まで、ご家族のすべてのデバイスが対象です。スクリーンタイムはデバイスが報告した値で、計測できなかった時間はどの合計にも含まれません。',
    generate: '今週のレポートを作成',
    generating: '作成中…',
    shareImage: '画像で保存',
    sharePdf: 'PDF で保存',
    copySummary: '概要をコピー',
    copied: '概要をコピーしました。',
    imageSaved: '画像を保存しました。',
    shareFailed: 'このブラウザでは保存できません。代わりに概要をコピーしてください。',
    emptyTitle: 'レポートはまだありません',
    emptyBody:
      'レポートは毎週月曜の朝に届きます。今週分は今すぐ作成でき、直近 7 日間が対象です。',
    noUsage:
      '過去 2 週間はスクリーンタイムが記録されていないため、まだ報告できることがありません。オフラインのデバイスは何も報告しませんが、それは穏やかな一週間とは異なります。',
    rateLimited: '試行が多すぎます。1 分ほどお待ちください。',
    loadFailedTitle: 'レポートを読み込めません',
    loadFailed: 'レポートを開けませんでした。ページを再読み込みしてください。',
    retryLoad: 'もう一度試す',
    failed: 'レポートを作成できませんでした。少し経ってからもう一度お試しください。',
    existed: '今週のレポートはすでにあります。こちらです。',
    childrenTitle: 'お子さまごと',
    childrenNote: '同じ 2 週間を、デバイスごとに。割合はご家族の合計に対するものです。',
    colChild: 'お子さま',
    colScreenTime: 'スクリーンタイム',
    colShare: '割合',
    colChange: '先週比',
    colLimit: '上限超え',
    colLateNights: '深夜',
    colTopApp: '最も使用',
    unnamedChild: '名称未設定のデバイス',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'ほぼ同じ',
    noLimit: '上限なし',
    noTopApp: '—',
    limitDays: '{{count}} 日',
    lateNightsNone: 'なし',
    busiest: 'スクリーンタイム最多',

    historyTitle: '過去の週',
    historyEmpty: 'これ以降に受け取ったレポートは 1 年間ここに保存されます。',
  },

  support: {
    title: 'KidGate サポート',
    updated: 'お手伝いします',

    contactTitle: 'お問い合わせ',
    contactEmail: '**メール:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**返信の目安:** 24 時間以内（月曜〜金曜）',
    contactNote:
      'お問い合わせの際は、KidGate の保護者アカウントのメールアドレスと、問題の簡単な説明を添えてください。より早くご案内できます。',

    startTitle: 'はじめかた',
    start1:
      '**1. 保護者のデバイスを設定する。** KidGate をインストールしてアプリを開き、*これは保護者のデバイスです* を選びます。Google・Apple・メールでログインし、家族の名前を付けます。',
    start2:
      '**2. 保護者 PIN を設定する。** *設定 → セキュリティ* で 6 桁の保護者 PIN を設定します。重要な設定の変更や、子どものデバイスでブロックするアプリの選択に必要です。子どもには教えないでください。',
    start3:
      '**3. 子どものデバイスを接続する。** 子どものデバイスに KidGate をインストールし、*これは子どものデバイスです* を選びます。保護者のデバイスで *家族 → + → 子どものデバイスを接続* を開き、子どものデバイスに表示された QR コードを読み取ります（または 6 文字のコードを入力します）。子どものデバイスで接続を確認します。',
    start4:
      '**4. 子どものデバイスで権限を許可する。** 子どものデバイスで *ステータス* 画面を開き、KidGate が求めるすべての権限を許可します。Android では通知、使用状況へのアクセス、他のアプリの上に表示、ユーザー補助、バッテリー無制限。iOS では *App とウェブサイトのアクティビティを許可*（スクリーンタイム）。これらがオンになるまで、コントロールは完全には機能しません。',
    start5:
      '**5. コントロールを設定する。** 保護者のデバイスで子どものデバイスカードを開き、1 日の上限、利用禁止時間、ブロックするアプリ、ウェブフィルタ、位置情報の各機能を設定します。',
    startNote:
      'アプリには手順を追った案内も用意しています: *設定 → ユーザーガイド*。デバイスの接続、権限、日々のコントロール、安全機能を詳しく説明しています。',

    faqTitle: 'よくある質問',

    faq1Q: 'パソコンから家族を管理できますか？',
    faq1A:
      'できます。[ウェブダッシュボード](/dashboard) を開き、アプリで使っているのと同じアカウント（Google、Apple、またはメールとパスワード）でログインしてください。同じ家族・デバイス・レポート・設定が表示されます。アカウントの作成とデバイスの接続は引き続きモバイルアプリで行います。',

    faq2Q: '保護者のデバイスと子どものデバイスはどう接続しますか？',
    faq2A:
      '子どものデバイスで KidGate を開き、*これは子どものデバイスです* を選ぶと、QR コードと 6 文字のコードが表示されます。保護者のデバイスで *家族 → + → 子どものデバイスを接続* を開き、QR コードを読み取る（推奨）か、コードを手入力します。その後、子どものデバイスで保護者の名前を確認します。コードには有効期限があります。接続に失敗したら、子どものデバイスで *新しいコード* をタップしてやり直してください。',

    faq3Q: '保護者 2 人で同じ家族を管理できますか？',
    faq3A:
      'できます。家族のオーナーのデバイスで *家族 → + → 別の保護者のデバイスを追加* を開き、招待用の QR コードまたはコードを共有します。もう一人の保護者は KidGate をインストールし、保護者としてログインして *家族 → + → 家族に参加* を選びます。その後オーナーがリクエストを承認します。1 つのサブスクで家族全体をカバーし、支払うのはオーナーだけです。',

    faq4Q: '無料トライアルはどのように動きますか？',
    faq4A:
      'お試し期間は最初の保護者端末と子ども端末を接続した時点で始まり、すべての機能を使えます。子ども端末を削除してもリセットされません。終了後も、ルールはすべて子ども端末1台で無料のまま働きます。Premiumではリアルタイムの利用状況、履歴、週次レポート、すべての端末が使えます。',

    faq5Q: 'サブスクリプションはどう解約しますか？',
    faq5A:
      '課金は KidGate から直接ではなく、App Store または Google Play を通じて行われます。iOS では *設定 → ユーザー名 → サブスクリプション*。Android では *Google Play → プロフィールアイコン → お支払いと定期購入 → 定期購入*。現在の期間の終了 24 時間前までに解約しない限り、自動的に更新されます。',

    faq6Q: '購入の復元はどうしますか？',
    faq6A:
      '保護者のデバイスで *プラン* 画面を開き、*購入を復元* をタップします。最初に購入したときと同じアプリストアのアカウントでログインしていることを確認してください。なお、登録と購入の復元ができるのは家族のオーナーだけです。',

    faq7Q: 'スクリーンタイムのデータが表示されないのはなぜですか？',
    faq7A:
      '利用状況のデータは子どものデバイスから届きます。子どものデバイスがオンラインか確認し、そのデバイスで KidGate を開いて *ステータス* 画面を見てください。すべての権限の行が「許可」と表示されているはずです（Android ではスクリーンタイムの記録に使用状況へのアクセスが必要です）。レポートの同期には数分かかることがあります。',

    faq8Q: 'ロックや利用禁止時間が効かないのはなぜですか？',
    faq8A:
      'Android では、ロックに *他のアプリの上に表示* と *ユーザー補助* のヘルパーの有効化、さらにバッテリー無制限が必要です。Xiaomi、Samsung、Oppo、Vivo などのデバイスでは、自動起動も許可し、「スリープ中のアプリ」の一覧から KidGate を外してください（子どものデバイスの *ステータス → KidGate を動かし続ける* を参照）。iOS ではロックはスクリーンタイムの許可に依存します。あとから権限がオフになった場合は、保護者のデバイスに保護アラートが届きます。',

    faq9Q: '特定のアプリをブロックするには？',
    faq9A:
      'アプリの選択は子どものデバイスで行います。*KidGate → 設定* を開き、保護者 PIN を入力し、*ブロックするアプリを選択* を選んで保存します。次に保護者のデバイスで、そのデバイスの *ブロック中のアプリ* 画面を開き、*アプリのブロックを有効にする* をオンにします。iOS では Apple が正確なアプリ名を保護者のデバイスに表示しないことがあります。これはプラットフォームの制約です。',

    faq10Q: '子どもの位置情報が更新されないのはなぜですか？',
    faq10A:
      '子どものデバイスで KidGate に位置情報が許可されている必要があり、デバイスにはネットワーク接続が必要です。保護者のデバイスでそのデバイスの *位置情報* 画面を開き、下に引いて更新してください。省電力モードでは更新が遅れることがあり、屋内の GPS は精度が落ちることがあります。',

    faq11Q: '子どものデバイスから KidGate を外すには？',
    faq11A:
      'まず保護者アプリでデバイスを削除し（*家族* でデバイスを開いて削除を選択）、そのあとで子どものデバイスのアプリをアンインストールしてください。',

    faq12Q: 'アカウントとデータを削除するには？',
    faq12A:
      '保護者アプリで *設定 → アカウント → アカウントを削除* に進みます。これにより、家族アカウントとすべてのデータ（デバイス、アクティビティ、位置情報の履歴、SOS の写真）が、すべての保護者と子どもについて完全に削除されます。アプリを入れていない場合の削除も含め、すべての方法は [アカウントとデータの削除](/delete-account) のページをご覧ください。',

    legalTitle: '法的情報',
    legalDeletion: 'アカウントとデータの削除',
  },

  download: {
    eyebrow: 'ダウンロード',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 以降。Apple シリコンと Intel に対応。',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 以降、64 ビット。',
    button: 'ダウンロード',
    warningSub:
      'Windows は、自社ストア以外から、まだ確認済みリストに載っていない開発者のアプリをインストールする場合には必ずこの警告を出します。KidGate に何か見つかったという意味ではありません。許可する手順は上の Windows のカードに書いてあります。Mac のパッケージは Apple による署名と公証を受けており、警告は出ません。ダウンロードは kidgate.app からのみ行ってください。',
    macosSteps:
      'ダウンロードしたパッケージを開き、インストーラの案内に従います。そのあと macOS が一度だけ、「ログイン項目と機能拡張」で KidGate のシステム機能拡張を許可するよう求めます。許可するまでウェブフィルタは動きません。',
    windowsSteps:
      'Windows が PC を保護したと表示したら、詳細情報、続いて実行を選びます。',
  },
  about: {
    eyebrow: '私たちについて',
    title: '家族がほんとうに納得できる',
    titleAccent: 'ペアレンタルコントロールを。',
    lede: 'KidGate は、ひとつの製品だけに取り組む小さな独立したチームが作っています。保護者がアプリの言うことを信頼できること — 「これはできません」と言う場面も含めて — それが私たちの土台です。',
    storyEyebrow: 'KidGate が生まれた理由',
    storyTitle: 'スクリーンタイムは、どの家庭でも言い争いの種になりました',
    storyP1:
      'どの家庭にも同じ夜があります。だれも納得していないタイマー、取り上げられたスマートフォン、そして「知らないうちにルールが変わった」と確信しているお子さま。それを解決するはずの道具の多くは、事態を悪くしてきました。片方は説明のない強制ロック、もう片方は監視のように読めるダッシュボードです。',
    storyP2:
      'そこで、自分たちの家庭で使いたい形を作りました。保護者が 1 日の上限、利用禁止時間、アプリのブロック、ウェブフィルタを一度設定すれば、端末はそのとおりに動きます。お子さまは保護者と同じ数字を見て、延長を申請でき、SOS でいつでも保護者に連絡できます。KidGate は、そこにいないふりをしません。',
    storyP3:
      'iPhone、Android、Mac、Windows で動き、Chrome 用の拡張機能と、どのブラウザからでも開けるダッシュボードがあります。ひとつの家族、ひとつのプラン、すべての端末に。',
    valuesEyebrow: '大切にしていること',
    valuesTitle: '破らない 4 つのルール',
    valuesSub: 'もっとも多い質問に、聞かれる前にお答えします。',
    value1Title: '子どもは容疑者ではありません',
    value1Text:
      'ルールは、それが適用される端末の上で見えるようにしてあります。お子さまは何が設定され、あと何分残っているかを確認でき、延長を申請でき、いつでも SOS を出せます。隠さなければ成り立たない管理は、家族で話し合える管理ではありません。',
    value2Title: 'ご家族のデータは売り物ではありません',
    value2Text:
      '広告は一切ありません。お子さまに関する情報を広告に使うことも、第三者に販売することもありません。ご家族のアカウントとその中身は、アプリからでもこのサイトからでも、いつでも削除できます。',
    value3Title: 'できないことは、できないと書きます',
    value3Text:
      'アプリが何を強制できるかは、プラットフォームごとに制限があります。KidGate ができるのが最善努力までのところ — パソコンでブロック中のアプリを、起動そのものを止めるのではなく終了させる場合など — は、緑のチェックではなく、そのとおりに画面へ表示します。',
    value4Title: 'ひとつの家族に、ひとつのプラン',
    value4Text:
      'ひとつのサブスクリプションで、すべての保護者とすべてのお子さまの端末をカバーします。1 日の上限、利用禁止時間、位置情報は無料のままご利用いただけるので、安全に関わる機能が有料の壁の向こうに置かれることはありません。',
    makeEyebrow: '作っているもの',
    makeTitle: '画面のある場所すべてに、ひとつの KidGate',
    makeSub: '同じルールを一度だけ書き、各プラットフォームが許す範囲で実行します。',
    make1Title: 'iPhone と iPad',
    make1Text:
      '1 日の上限、利用禁止時間、アプリのブロックを、Apple 自身のスクリーンタイムの仕組みで実現します。',
    make2Title: 'Android',
    make2Text:
      '時間の上限、アプリのブロック、全画面ロック、ウェブフィルタに加え、新しいアプリが増えたときの通知。',
    make3Title: 'macOS',
    make3Text:
      'Mac 用のデスクトップエージェント。同じスケジュールと同じ上限が働き、1 日の使い方を保護者が実際に読み取れます。',
    make4Title: 'Windows',
    make4Text:
      'PC でも同じエージェントが動き、閉じられたり終了させられたりしても再び起動するバックグラウンドサービスが付きます。',
    make5Soon: '予定',
    make5Title: 'Android TV',
    make5Text:
      'リビングの画面を、お子さま個人の端末ではなく家族で共有する端末として扱います。上限も時間割もスマホと同じです。実機での動作は確認済みで、ストアでの公開を待っています。',
    make6Title: 'Chrome',
    make6Text:
      'KidGate がすでに入っているパソコンでも、入れられないパソコンでも、Chrome の中で同じウェブフィルタを働かせるブラウザ拡張機能です。完成して接続も済んでおり、Chrome Web Store の審査を待っています。',
    make7Title: '保護者ダッシュボード',
    make7Text:
      'ブラウザは保護者の 2 つ目の画面です。スマートフォンに表示されるコードで、どのパソコンからでもサインインできます。インストールは不要です。',
    factsEyebrow: '現在の KidGate',
    factsTitle: '4 つの数字',
    fact1Label: '言語（アラビア語からベトナム語まで）',
    fact2Label: 'プラットフォーム（ダッシュボードは別）',
    fact3Label: '広告は一切なし',
    fact4Label: '家族ごとのサブスクリプション',
    contactEyebrow: 'ご連絡ください',
    contactTitle: 'すべてのメッセージに人が目を通します',
    contactSub:
      'ご質問、不具合、ご家族に必要な機能、あるいはご自分の言語で不自然に感じた訳文について、お気軽にご連絡ください。',
    contactEmail: 'メールで問い合わせる',
    contactSupport: 'サポートとガイド',
    contactPrivacy: 'データの取り扱いについて',
  },
};
