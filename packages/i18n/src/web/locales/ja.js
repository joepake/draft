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
    crashTitle: 'このページは動作を停止しました',
    crashBody:
      '再読み込みでたいてい解決します。ご家族の設定とお子さまのデバイスは変わっていません。',
    crashReload: 'ページを再読み込み',
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
    plans: 'プラン',
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
    rights: '© {{year}} KidGate. 無断転載を禁じます。',
    madeFor:
      'iPhone、Android、Mac、Windows、Android TV、Chrome をお使いのご家族のために。',
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
    chromeName: 'Chrome ウェブストア',
  },

  home: {
    heroBadge: '正しいかたちのペアレンタルコントロール',
    launchCountdown: 'リリースまで',
    heroTitle: '子どもを守る、',
    heroTitleAccent: 'その自由を奪わずに。',
    heroLede:
      'KidGate は、スクリーンタイム・アプリ・安全について、保護者に落ち着いた明快なコントロールを届けます。子どもの手には、変わらず「自分のもの」と感じられるスマホが残ります。',
    heroCheck1: 'スクリーンタイム',
    heroCheck2: 'ブロックされたアプリ',
    heroCheck3: 'Webフィルター',
    heroCheck4: '位置情報',
    heroCheck5: 'SOS',

    phoneDailyLimit: '1日の上限',
    phoneBlockedHours: '休止時間',
    phoneScheduleOn: 'スケジュール有効',
    phoneLocation: '位置情報',
    phoneCheckIn: 'チェックイン OK',

    trust1Title: '広告は一切なし',
    trust1Text: '子どものデータを広告に使うことはありません',
    trust2Title: 'いつでも削除',
    trust2Text: 'ご希望があれば家族アカウントと全データを消去します',
    trust3Title: 'スマホ、パソコン、テレビ',
    trust3Text:
      'iPhone、Android、Mac、Windows、Android TV、Chrome をひとつの家族アカウントで',
    trust4Title: '家族ごとに 1 プラン',
    trust4Text: '保護者と子どものすべてのデバイスを 1 つのサブスクで',

    featuresEyebrow: '機能',
    featuresTitle: '保護者に必要なものがすべて',
    featuresSub:
      '1 日の上限から緊急アラートまで — 家族みんなのデジタルウェルビーイングをひとつのアプリで。',
    feature1Title: 'スクリーンタイムと 1 日の上限',
    feature1Text:
      '学校や就寝時間に合わせて、1 日の上限と休止時間を設定できます。時間切れになるとデバイスは自動でロックされます。',
    feature2Title: 'ブロックされたアプリ',
    feature2Text:
      'お子さまが開けないアプリを保護者 PIN で守りながら指定でき、ブロックは遠隔でオンにできます。',
    feature3Title: 'アプリの利用時間制限',
    feature3Text:
      'Android、Android TV、パソコンでは、アプリごとに上限を設定して、禁止せずに「TikTok は 30 分」と決められます。',
    feature4Title: 'Webフィルターと閲覧履歴',
    feature4Text:
      'アダルトサイト、ギャンブル、自傷などをすべてのデバイスでブロックします。Premium では、アクセスしようとしたサイトも確認できます。',
    feature5Title: '位置情報と場所',
    feature5Text:
      'お子さまの居場所を1日10回まで確認できます。Premium では、リアルタイムの位置情報と、登録した場所への到着・出発の通知が加わります。',
    feature6Title: 'チェックインと SOS',
    feature6Text:
      'お子さまに無事の確認を求められます。緊急時にはお子さまのスマホから、位置情報付きの SOS がすぐに届きます。',
    feature7Title: '保護アラートとアプリ通知',
    feature7Text:
      'お子さまのスマホで重要な権限がオフになった瞬間に分かり、Android、Android TV、パソコンの新しいアプリは開く前に承認できます。',
    feature8Title: 'ごほうびタスクと時間延長リクエスト',
    feature8Text:
      'お子さまはタスクを終えてボーナス時間と星を得たり、延長を申請したりでき、どちらもあなたのスマホで承認できます。',

    feature9Title: 'デバイスロック',
    feature9Text:
      '今すぐデバイスをロックし、頃合いを見て解除できます。食事、宿題、守られなかった約束のときに。',
    feature10Title: '週次レポート',
    feature10Text:
      '毎週月曜に届きます。使用時間、1日の平均、ブロックされたもの、前の週との比較。',
    feature11Title: 'YouTube と動画の履歴',
    feature11Text:
      'Android と Chrome でお子さまが見た YouTube の動画と Shorts、そして Android TV で見た動画を確認できます。iPhone では使えません。',
    feature12Title: 'アクティビティ履歴',
    feature12Text:
      'デバイスのロック解除、リクエストへの返答、アラートなど、起きたことが時系列で並びます。無料プランでは今日の分、Premium では 30 日分を表示します。',
    featurePremium: 'Premium',
    platformsTitle: 'どの画面でも、KidGate はひとつ',
    platformsSub:
      'スマホでもパソコンでも Android TV でも、同じルールと同じ家族アカウント。Chrome でも同じ Webフィルターが働きます。パソコン版はストアではなく、このサイトから入手します。',

    showcaseEyebrow: '保護者ダッシュボード',
    showcaseTitle: '家族全員をひとつの画面で',
    showcaseSub:
      'スクリーンタイム、ブロックした回数、位置情報、そして注意が必要なことすべてを — スマホでも、どのブラウザからでも。',
    showcaseCaption1: 'どのブラウザからでもレポートを閲覧',
    showcaseCaption2: '変更はスマホから承認',

    setupEyebrow: 'セットアップ',
    setupTitle: '数分で使いはじめられます',
    setupSub: '専門知識は不要です。アプリが手順を案内します。',
    step1Title: '自分のデバイスを設定する',
    step1Text:
      'KidGate をインストールし、「これは保護者のデバイスです」を選んで、Google またはメールでログインします。iPhone では Apple でもログインできます。',
    step2Title: '子どものデバイスとつなぐ',
    step2Text:
      '子どものスマホに KidGate をインストールし、QR コードを読み取って接続します。1 分もかかりません。',
    step3Title: 'ルールを決める',
    step3Text:
      '1 日の上限と休止時間を決め、位置情報と「ブロックされたアプリ」を自分のスマホからオンにします。ブロックするアプリは、お子さまのデバイスで保護者 PIN を使って一度だけ選びます。',

    whyEyebrow: 'KidGate を選ぶ理由',
    whyTitle: '監視ではなく、信頼のために',
    whySub: '保護者と子どもの対話が続くように設計しています。',
    why1Title: '1 プランで家族全員',
    why1Text:
      '1 つの Premium サブスクで保護者と子どものすべてのデバイスをカバーし、支払うのは家族のオーナーだけです。無料プランでは、子どものデバイス 1 台が監視の対象として残ります。',
    why2Title: '共同での子育てに対応',
    why2Text:
      'もう一人の保護者を招待して同じ子どもを管理できます。権限はオーナーが承認します。1 つの家族に登録できる保護者は、無料プランとお試し期間中は最大 3 人、Premium では最大 6 人です。',
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
      'Android TV では、1 日の上限、休止時間、ブロックされたアプリ、Webフィルターが使えます。テレビでのブロックは最善努力までです — ブロック中のアプリはホーム画面に戻されます — また、ソファから SOS や時間延長リクエストを送ることはできません。テレビでは位置情報も共有されません。ほとんどのペアレンタルコントロールはスマホで止まります。',
    only2Title: 'スマホの中で完結するメッセージ警告',
    only2Text:
      'Android の Premium では、14 言語のうち選んだ最大 3 言語のキーワードリストと、メッセージをデバイス上で照合します。スマホの外に出るのは一致した語句だけで、会話そのものが出ることはありません。それを変えるものは 1 つだけ、しかも希望した場合に限られます。AI による確認をオンにすると、判断が曖昧な受信メッセージが判定のために Google の Gemini へ送られ、ありふれた語句で起こされずに済みます。',
    only3Title: 'アプリのリストではなく、すべてのアプリ',
    only3Text:
      'お子さまが使うどのアプリの通知からも警告が届き、対応アプリの固定リストには縛られません。さらに、Zalo、LINE、KakaoTalk をはじめとする主要なチャット・SNS・ゲームアプリでは、入力内容からも警告が届きます。Android のみ、Premium で利用できます。',
    only4Title: 'お子さまの逃げ道',
    only4Text:
      'スマホで SOS を 5 秒長押しすると、位置情報とともにすぐ保護者に届きます。Android では、ロック中のスマホでも電話・地図・メッセージが 5 分間使えるようになります。ロック画面から助けを呼べるお子さまに、アプリと争う理由はありません。',
    only5Title: 'ネットがなくても守られるルール',
    only5Text:
      '休止時間と 1 日の上限はデバイス自身が守るため、ルーターを抜いても何も変わりません。テレビは接続がまったくなくても保護者 PIN を受け付けます。',
    only6Title: 'よかった週には、その分の評価を',
    only6Text:
      'Premium の週次レポートには、うまくいったこと — 守られた上限、なくなった夜更かし、終えた課題 — のための欄が必ずあり、その週がきちんと計測されたときにだけ伝えます。',

    faqEyebrow: 'よくある質問',
    faqTitle: '保護者が最初に聞くこと',
    faqSub: 'ダウンロード前の手早い答え。',
    faq1Q: '無料トライアルはありますか？',
    faq1A:
      'はい。7 日間のお試し期間は、最初の保護者のデバイスと子どものデバイスを接続した時点で始まり、Premium のすべての機能を使えます。終了後も、設定したルール — 1 日の上限、休止時間、ブロックされたアプリ、Webフィルター、デバイスロック、時間延長リクエスト、ごほうびタスク — は、ルールに対応しているすべての子どものデバイスで無料のまま働き続け、監視を続けるデバイスとして選んだ 1 台は、引き続き位置情報を共有します。Premium で再び使えるようになるのは、リアルタイムの利用状況、履歴、週次レポート、位置情報の追跡です。',
    faq2Q: '何台まで管理できますか？',
    faq2A:
      'Premium では子どものデバイス最大 25 台と保護者 6 人（ご自身を含む）まで利用でき、すべてのデバイスが利用状況を送信します。無料プランでは子どものデバイス最大 8 台と保護者 3 人までです。すべてのデバイスが設定したルールを適用し続けますが、利用状況を送信するのは選んだ 1 台だけで、ほかのデバイスではそのルールを緩めることはできても、厳しくすることはできません。',
    faq3Q: '子どもが KidGate を削除したり回避したりできますか？',
    faq3A:
      '重要な設定は保護者 PIN で守られ、子どものデバイスで主要な権限がオフになると保護アラートですぐに知らせます。',
    faq4Q: 'すべてをパソコンから管理できますか？',
    faq4A:
      'はい。保護者ダッシュボードはどのブラウザでも開けます。表示されたコードをスマホの KidGate アプリで読み取ると、同じ家族、デバイス、設定が見られ、操作のロックも解除されます。アカウントでサインインして閲覧することもできますが、その場合、デバイスのロックや上限の変更には保護者 PIN が必要です。',
    faq5Q: 'Premium の料金はいくらですか？',
    faq5A:
      'Premium は米国で月額 4.99 米ドルまたは年額 39.99 米ドルです。App Store または Google Play を通じて課金され、そこではお住まいの地域の通貨で表示されます。1 回払いの買い切りプランでは、KidGate が提供されている間、子どものすべてのデバイスで同じ Premium を利用できます。無料プランに期限はありません。',
    faqMore: 'ほかにも質問がありますか？ サポートへ',

    ctaTitle: '今日から家族を守りはじめましょう',
    ctaSub: 'すべての機能を使える 7 日間の無料トライアル。カード登録は不要です。',
    ctaNote: 'トライアルが終わっても、ルールは無料プランで働き続けます。',
  },

  login: {
    title: '保護者ログイン',
    sub: 'KidGate アプリで作成したものと同じアカウントを使ってください。ここでログインすると、同じ家族・デバイス・設定が表示されます。',
    notConfiguredTitle: 'このデプロイでは Firebase が設定されていません。',
    notConfiguredBody:
      'ログインを有効にするには VITE_FIREBASE_* 環境変数を設定してください。',
    qrWhy:
      'スマホで読み取ると、ログインとコントロールのロック解除が一度に済みます。下の方法はまず閲覧用のログインで、コントロールを解除するには保護者 PIN が必要です。',
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
    step2: '*ファミリー*タブのスキャンアイコンをタップします。',
    step3: 'このコードを読み取って承認します。',
    waiting: '承認を待っています · {{time}} で期限切れ',
    signingIn: '承認されました。ログインしています…',
    expired: 'このコードは期限切れです。',
    failed: 'ログインが完了しませんでした。',
    newCode: '新しいコードを表示',
    tryAgain: 'もう一度試す',
  },

  authAction: {
    checking: 'リンクを確認しています…',
    resetTitle: '新しいパスワードを設定',
    newPassword: '新しいパスワード',
    confirmPassword: '新しいパスワード（確認）',
    mismatch: 'パスワードが一致しません。',
    tooShort: 'パスワードは6文字以上で入力してください。',
    save: 'パスワードを保存',
    saving: '保存しています…',
    resetDone: 'パスワードを変更しました',
    resetDoneBody:
      '新しいパスワードで、ここか KidGate アプリからログインしてください。',
    verifyDone: 'メールアドレスを確認しました',
    verifyDoneBody: 'KidGate アプリに戻って続けてください。',
    invalid: 'このリンクは期限切れか、すでに使用されています',
    invalidBody: 'KidGate を開いて、新しいリンクをリクエストしてください。',
  },
  authError: {
    generic: '問題が発生しました。もう一度お試しください。',
    invalidEmail: 'このメールアドレスは正しくないようです。',
    userDisabled: 'このアカウントは無効化されています。',
    userNotFound: 'そのメールアドレスの KidGate アカウントはありません。',
    wrongPassword:
      'メールアドレスまたはパスワードが正しくありません。もう一度お試しください。',
    rateLimited:
      'このネットワークからのログインコードが多すぎます。{{minutes}}分後にもう一度お試しください。',
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
    partialLoadFailed:
      'このページの一部を読み込めませんでした。空に見えるリストにも、実際は項目がある場合があります。',
    noAccessTitle: 'このアカウントに家族がありません',
    noAccess:
      'このアカウントには KidGate の家族へのアクセス権がありません。アプリで使っている保護者アカウントでログインしてください。',
    noFamily:
      'このアカウントにはまだ KidGate の家族がありません。スマホで KidGate を使っている場合は、ログアウトして同じアカウントでここにログインしてください。新しく家族を作るには、スマホで設定してから、このページを再読み込みしてください。',
    noFamilyStep1:
      'スマホに KidGate をインストールし、*これは保護者のデバイスです*を選んで、このアカウントでログインします。',
    noFamilyStep2:
      '*ファミリー*を開いて*ファミリーを作成*を選びます。ほかの保護者から招待された場合は*ファミリーに参加*を選びます。',
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
    dailyLimit: '1日の上限',
    ofLimit: '/ {{value}}',
    noLimit: '上限は未設定',
    blocked: 'ブロック',
    blockedHours: '休止時間',
    day0: '日',
    day1: '月',
    day2: '火',
    day3: '水',
    day4: '木',
    day5: '金',
    day6: '土',
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
    bypass: '制限回避アプリ',
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
    tabApps: 'アプリ',
    tabWeb: 'ウェブ',
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

    lastActive: '最終アクティブ {{when}}',
    appVersion: 'アプリのバージョン',
    appVersionUpdate: '{{running}} · {{latest}} が利用可能',
    appVersionRestart: '{{running}} · アプリを再起動して完了',
    checkIn: 'チェックイン',
    sending: '送信中…',
    lockDevice: 'デバイスをロック',
    unlock: 'ロック解除',
    working: '処理中…',
    save: '保存',

    unlockTitle: '変更はロックされています。',
    unlockBody: 'すべて閲覧でき、チェックインも送信できます。',
    unlockCta: '変更のロックを解除',
    unlockToChange: '先に変更のロックを解除してください',
    refresh: '更新',
    liveOnApp: 'リアルタイムの更新はアプリで',
    pinTitle: '保護者 PIN を入力',
    pinBody:
      'アプリで使うのと同じ 6 桁です。このブラウザは 8 時間解除されたままになります。アプリから承認すると、7 日間ログインしたままになります。',
    pinLabel: '保護者PIN',
    pinSubmit: 'ロック解除',
    pinOrScan: 'またはスマホから承認',
    qrSaferNote:
      'スマホからの承認のほうが安全です。接続済みのスマホが手元にないとできないのに対し、PIN は家族の誰かが入力を見ていたかもしれない 6 桁だからです。',
    pinWrong: 'PIN が違います。残り {{count}} 回。',
    pinLocked:
      '失敗が多すぎます。15 分待つか、このブラウザをスマホから承認してください。',
    pinNotSet:
      'ご家族の保護者 PIN がまだ設定されていません。アプリで設定するか、このブラウザをスマホから承認してください。',
    unlockedToast: 'このブラウザで変更のロックを解除しました。',
    close: '閉じる',

    noDeviceBody:
      'スマホで KidGate を開き、*ファミリー*に進んでスキャンアイコン（*コードをスキャン*）をタップします。お子さまのデバイスに表示された QR コードを読み取るか、6文字のコードを入力してください。そのあと、ここで*更新*を押してください。',
    pairStep2Title: 'スマホでコードをスキャン',
    getKidGate: 'KidGate を入手',
    childNoDevices:
      'デバイスはまだありません。デバイスをペアリングし、誰が使うかを聞かれたらこのお子さまを選んでください。',
    childNoDevicesAssign:
      'デバイスはまだありません。下で割り当てるか、新しいデバイスをペアリングしてください。',

    toastCheckIn: '{{name}} にチェックインのリクエストが届きます。',
    toastTimeApproved: '追加時間を承認しました。',
    toastCheckInResent: 'チェックインを再送しました。',

    tileScreenToday: '今日のスクリーンタイム',
    tileSameAsAverage: '過去 7 日間の平均と同じ',
    tileDeltaUp: '↑ 過去 7 日間の平均比 {{percent}}%',
    tileDeltaDown: '↓ 過去 7 日間の平均比 {{percent}}%',
    tileBlocked: 'ブロックした回数',
    tileBlockedMeta: 'インストール以降に止めたアプリ',
    tileAttention: '要対応',
    tileOpenItems: '未処理の項目は下にあります',
    tileAllClear: '問題ありません',

    cardScreenTime: 'スクリーンタイム',
    cardScreenTimeSub: '直近 14 日間、1 日の上限との比較',
    cardRecent: '最近のアクティビティ',
    cardRecentSub: '新しい順',
    cardRecentEmpty:
      'まだ記録はありません。このデバイスのロック、ブロックしたアプリ、場所アラート、スクリーンタイムの同期がここに表示されます。',
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
    attnBatteryLow: 'バッテリー残量が少なくなっています（{{level}}%）',
    attnBatteryLowMeta: '電池切れになると位置情報の更新が止まることがあります',
    attnResend: '再送',
    attnHowToFix: '対処方法',
    attnUnlock: 'ロック解除',
    attnAppOnly: 'KidGate アプリで利用できます',

    todayTitle: '今日',
    todaySub: '1 日の上限と獲得したボーナスとの比較',
    used: '使用',
    left: '残り',
    dailyLimit: '1日の上限',
    bonusToday: '今日のボーナス',
    off: 'オフ',
    on: 'オン',
    topAppsTitle: '今日よく使ったアプリ',
    topAppsTitleDay: 'よく使ったアプリ · {{date}}',
    topAppsSub: 'アプリごとの上限はマーカーで表示',
    trendTitle: 'スクリーンタイムの推移',
    trendSub: '直近 {{count}} 日間',
    rangeDays: '{{count}} 日',
    blockedHoursTitle: '休止時間',
    blockedHoursSub:
      '{{count}} 個の時間帯 · 影のついたブロック内ではデバイスはロックされたままです',
    scheduleOff: 'スケジュールはオフです',
    schedMax: '1 台につき時間帯は最大 {{max}} 件です。',

    appUsageTitle: '今日のアプリ使用状況',
    appUsageSub: 'アプリごとの使用時間',
    appUsageEmpty: 'アプリの利用はまだ報告されていません。',
    appBlockingTitle: 'ブロックされたアプリ',
    blockingLabel: 'ブロック',
    appsBlocked: 'ブロック中のアプリ',
    categories: 'カテゴリ',
    limitsMax: '1 台につき上限付きアプリは最大 {{max}} 件です。',
    perDay: '{{value}}/日',
    webActivityTitle: 'ウェブの利用状況',
    webActivitySub: '訪問の多いドメイン、直近 7 日間',
    webActivityEmpty: 'ウェブの利用履歴はまだありません。',
    inventoryEmpty: 'このデバイスはまだアプリ一覧を送信していません。',
    inventoryFirstScan: '初回のスキャンのため、いつ追加されたかは分かりません。',
    inventoryOtherLabel: '判別済み',
    inventoryUnknownLabel: '未判別',
    installAllow: '許可',
    toastInstallAllowed: 'アプリを許可しました',
    rowInstallApprovalDesc: '{{count}} 個のアプリが承認待ちです',
    rowInstallApprovalDesc_one: '{{count}} 個のアプリが承認待ちです',
    rowInstallApprovalDescIos:
      'App Store を非表示にします。Apple はアプリごとの承認を認めていません',
    colDomain: 'ドメイン',
    colVisits: '訪問',
    colBlocked: 'ブロック',
    colLastSeen: '最終',
    videosSub: 'YouTube とウェブで見たもの',
    videosEmpty: 'まだ動画はありません。',
    colVideo: '動画',
    colChannel: 'チャンネル',
    colViews: '視聴回数',
    filterRefusedTitle: 'フィルタがブロックした内容',
    filterRefusedSub: 'ブロックした照会 {{count}} 件、直近 7 日間',
    filterHintIos:
      'この iPhone/iPad は Apple のアダルトコンテンツ制限だけでフィルタしています。カテゴリ別にブロックするには、KidGate を最新にして KidGate の VPN を許可してください。',

    locationTitle: '位置情報',
    locationUpdated: '更新 {{when}}',
    locationWaiting: '最初の更新を待っています',
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
    sosSub: '子どものデバイスからの緊急信号',
    sosEmpty:
      'SOS アラートはありません。使い方を互いに分かっておくため、一度一緒に試してみてください。',
    sosAcknowledged: '確認済み',
    sosActive: '対応中',

    checkInsTitle: 'チェックイン',
    checkInsSub: '子どもに無事かどうかの確認を求めます',
    checkInSafe: '無事を確認',
    checkInPhotoRequested: '写真と位置情報を要求しました',
    checkInNoReply: 'まだ返答がありません',
    checkInPhotoSkipped: '写真はスキップ',
    checkInPhotoAttached: '写真あり',
    checkInNoPhoto: '写真の要求なし',
    sendCheckIn: '今すぐチェックインを送る',

    protectionAlertsTitle: '保護アラート',
    protectionAlertsSub: 'インストール以降 {{count}} 件',

    limitCardTitle: '1日の上限',
    limitCardSub: '毎日使える時間を制限します',
    limitAria: '1 日の上限（分）',
    limitScaleMin: '30 分',
    limitScaleMax: '8 時間',
    limitHint:
      'ごほうびタスクや承認した時間延長リクエストのボーナス時間は、その日に限って上乗せされます。',
    limitShared: 'すべてのデバイス共通',
    limitSharedSpent: '今日は {{limit}} のうち {{used}} を使用',
    limitSharedHint:
      'これはお子さまの一日全体で、このデバイスだけの上限ではありません。ほかのデバイスが使わなかった分が各デバイスに回ります。変更は KidGate アプリから行えます。',
    whatsOnSub: '変更は子どものデバイスに同期されます',
    rowBlockedHours: '休止時間',
    rowBlockedHoursDesc: '{{count}} 個の時間帯 · {{list}}',
    rowAppBlocking: 'ブロックされたアプリ',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Webフィルター',
    rowWebFilterDesc: '{{count}} カテゴリをブロック',
    rowNotSupported: 'このデバイスでは対応していません',
    rowLocation: '位置情報の共有',
    rowLocationDesc: '最終更新 {{when}}',
    rowLocationNone: 'まだ位置情報がありません',
    rowSearchMonitoring: '検索のチェック',
    rowSafeSearchDesc:
      'Android、Android TV、Chrome で、Google セーフサーチ、Bing、DuckDuckGo を厳格設定に固定します。Android と Chrome では YouTube 制限付きモードも固定され、コメントが非表示になり、ふつうの動画も一部ブロックされます。',

    webFilterCatsTitle: 'Webフィルターのカテゴリ',
    webFilterCatsSub: 'ブロックするコンテンツの種類',
    dnsHint:
      'フィルタの動作中は暗号化 DNS を常にブロックするため、ブラウザが迂回することはできません。',
    starChartTitle: 'スターボード',
    starChartSub: '今週お子さまごとに集めた星',
    starChartEmpty:
      'アプリでお子さまをもうひとり追加すると、スターボードが始まります。',
    starChartStars: '星{{count}}個',
    rewardTasksTitle: 'ごほうびタスク',
    rewardTasksSub: 'タスクを終えると追加の時間がもらえます',
    rewardTaskMeta: '+{{minutes}} 分 · {{cadence}}',
    rewardTaskStars: 'むずかしさ：3段階中{{count}}',
    rewardTaskWaiting: ' · 承認待ち',
    approve: '承認',
    siteRequestAllow: '許可',
    siteRequestDeny: '今はしない',
    attnSiteRequest: '{{name}}が{{domain}}を開こうとしています',
    timelineSub: '今日の0時から24時まで。緑はデバイスを使っていた時間です。',
    timelineSubDay: '{{date}}の0時から24時まで。緑はデバイスを使っていた時間です。',
  },

  controlError: {
    generic: '完了できませんでした。もう一度お試しください。',
    network: '接続がありません。ネットワークを確認してからお試しください。',
    sessionExpired: 'セッションの有効期限が切れました。もう一度ログインしてください。',
    forbidden:
      'このブラウザのセッションでは変更できません。KidGate アプリで QR コードを読み取って、もう一度ログインしてください。',
    notFound: '見つかりません。スマートフォン側で変更された可能性があります。',
    conflict:
      '別の方がたった今これを変更しました。再読み込みして最新の状態をご確認ください。',
    rateLimited: '一度に変更が多すぎます。少し待ってからお試しください。',
    server: 'KidGate はこれを完了できませんでした。しばらくしてからお試しください。',
    premiumRequired:
      'これは Premium の機能です。プランはスマホの KidGate アプリで管理します。',
  },

  report: {
    writtenAt: '{{when}} に作成',
    shareImage: '画像で保存',
    sharePdf: 'PDF で保存',
    imageSaved: '画像を保存しました。',
    shareFailed: 'このブラウザでは保存できません。代わりに概要をコピーしてください。',
    emptyBody:
      'Premium では、レポートが毎週月曜の朝に届き、その前の 7 日間が対象です。今週の分は、スマートフォンの KidGate アプリから作成することもできます。',
    loadFailed: 'レポートを開けませんでした。',
    retryLoad: 'もう一度試す',
    existed: '今週のレポートはすでにあります。こちらです。',
  },

  support: {
    title: 'KidGate サポート',
    updated: 'お手伝いします',

    contactTitle: 'お問い合わせ',
    contactEmail: '**メール:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**返信の目安:** 通常 1 営業日以内',
    contactNote:
      'お問い合わせの際は、KidGate の保護者アカウントのメールアドレスと、問題の簡単な説明を添えてください。より早くご案内できます。',

    startTitle: 'はじめかた',
    start1:
      '**1. 保護者のデバイスを設定する。** KidGate をインストールしてアプリを開き、*これは保護者のデバイスです*を選びます。Google またはメール（iPhone では Apple も可）でログインし、家族の名前を付けます。',
    start2:
      '**2. 保護者 PIN を設定する。** *設定 → セキュリティ*で 6 桁の保護者 PIN を設定します。重要な設定の変更や、子どものデバイスでブロックするアプリの選択に必要です。子どもには教えないでください。',
    start3:
      '**3. 子どものデバイスを接続する。** 子どものデバイスに KidGate をインストールして開きます（スマートフォンやタブレットでは*これはお子さまのデバイスです*を選びます）。保護者のデバイスで*ファミリー*を開いてスキャンアイコン（*コードをスキャン*）をタップし、子どものデバイスに表示された QR コードを読み取ります（または 6 文字のコードを入力します）。子どものデバイスで確認を求められたら、そこで接続を確認します。テレビは自動で接続されます。',
    start4:
      '**4. 子どものデバイスで権限を許可する。** 子どものデバイスで*ステータス*画面を開き、*設定を続ける*をタップします。KidGate に必要なすべての権限を順に案内します。Android では「通知」「使用状況へのアクセス」「他のアプリの上に表示」「ユーザー補助のロック機能」「アラームとリマインダー」「バッテリー無制限」、Webフィルターが動作する VPN 接続、「アンインストールを防ぐ」、そしてメッセージ警告のための通知へのアクセス。iOS では*アプリとWebサイトの使用を許可*（スクリーンタイム）と、Webフィルター用に VPN 構成の追加を求められたときの*許可*。これらがオンになるまで、コントロールは完全には機能しません。',
    start5:
      '**5. コントロールを設定する。** 保護者のデバイスで子どものデバイスカードを開き、1 日の上限、休止時間、ブロックされたアプリ、Webフィルター、位置情報の各機能を設定します。',
    startNote:
      'アプリには手順を追った案内も用意しています：*設定 → ユーザーガイド*。デバイスの接続、権限、日々のコントロール、安全機能を詳しく説明しています。',

    faqTitle: 'よくある質問',

    faq1Q: 'パソコンから家族を管理できますか？',
    faq1A:
      'できます。[ウェブダッシュボード](/dashboard)を開き、表示されたコードをスマホの KidGate アプリで読み取ってください。アプリで使っているのと同じアカウント（Google、Apple、またはメールとパスワード）でログインすることもできます。同じ家族・デバイス・レポート・設定が表示されます。アカウントでログインした場合、コントロールの変更には保護者 PIN が必要です。アカウントの作成とデバイスの接続は引き続きモバイルアプリで行います。',

    faq2Q: '保護者のデバイスと子どものデバイスはどう接続しますか？',
    faq2A:
      '子どものデバイスで KidGate を開きます（スマートフォンやタブレットでは*これはお子さまのデバイスです*を選びます）。QR コードと 6 文字のコードが表示されます。保護者のデバイスで*ファミリー*を開いてスキャンアイコン（*コードをスキャン*）をタップし、QR コードを読み取る（推奨）か、コードを手入力します。子どものデバイスで確認を求められたら、そこで保護者の名前を確認します。テレビは自動で接続されます。コードには有効期限があります。接続に失敗したら、子どものデバイスで*新しいコード*をタップしてやり直してください。',

    faq3Q: '保護者 2 人で同じ家族を管理できますか？',
    faq3A:
      'できます。家族のオーナーのデバイスで*ファミリー → + → 保護者を招待*を開き、招待用の QR コードまたはコードを共有します。もう一人の保護者は KidGate をインストールし、保護者としてログインして*ファミリー*を開き、スキャンアイコン（*コードをスキャン*）をタップして、QR コードを読み取るか招待コードを入力します。その後オーナーがリクエストを承認します。1 つの家族に登録できる保護者は、無料プランとお試し期間中は最大 3 人、Premium では最大 6 人です。1 つのサブスクで家族全体をカバーし、支払うのはオーナーだけです。',

    faq4Q: '無料トライアルはどのように動きますか？',
    faq4A:
      '7 日間のお試し期間は最初の保護者のデバイスと子どものデバイスを接続した時点で始まり、すべての機能を使えます。子どものデバイスを削除してもリセットされません。終了後も、すべてのルールは無料のまま働き、選んだ子どものデバイス 1 台は利用状況の送信を続けます。Premium では、リアルタイムの利用状況、履歴、週次レポート、すべてのデバイスからの利用状況の送信が戻ります。',

    faq5Q: 'サブスクリプションはどう解約しますか？',
    faq5A:
      '課金は KidGate から直接ではなく、App Store または Google Play を通じて行われます。iOS では *設定 → ユーザー名 → サブスクリプション*。Android では *Google Play → プロフィールアイコン → お支払いと定期購入 → 定期購入*。現在の期間の終了 24 時間前までに解約しない限り、自動的に更新されます。',

    faq6Q: '購入の復元はどうしますか？',
    faq6A:
      '保護者のデバイスで*プラン*画面を開き、*購入を復元*をタップします。最初に購入したときと同じアプリストアのアカウントでログインしていることを確認してください。なお、登録と購入の復元ができるのは家族のオーナーだけです。',

    faq7Q: 'スクリーンタイムのデータが表示されないのはなぜですか？',
    faq7A:
      '利用状況のデータは子どものデバイスから届きます。子どものデバイスがオンラインか確認し、そのデバイスで KidGate を開いて*ステータス*画面を見てください。すべての権限の行が「許可」と表示されているはずです（Android ではスクリーンタイムの記録に使用状況へのアクセスが必要です）。レポートの同期には数分かかることがあります。',

    faq8Q: 'ロックや休止時間が効かないのはなぜですか？',
    faq8A:
      'Android では、ロックに*他のアプリの上に表示*と*ユーザー補助*のヘルパーの有効化、さらにバッテリー無制限が必要です。Xiaomi、Samsung、Oppo、Vivo などのデバイスでは、自動起動も許可し、「スリープ中のアプリ」の一覧から KidGate を外してください（子どものデバイスの*ステータス → 自動起動を許可*を参照）。iOS ではロックはスクリーンタイムの許可に依存します。あとから権限がオフになった場合は、保護者のデバイスに保護アラートが届きます。',

    faq9Q: '特定のアプリをブロックするには？',
    faq9A:
      '保護者のデバイスで、お子さまの*アプリ*を開き、*インストール済みのアプリ*でアプリをタップして*ブロック*を選びます。iPhoneでは、アプリはiPhone本体で選択します。*KidGate → 設定*を開き、*保護者PINで解除*をタップし、*ブロックされたアプリ*を開いてアプリを選び、保存します。そのあと保護者のデバイスで*ブロックされたアプリを有効にする*をオンにします。接続中のお子さまのデバイスには、変更が1分以内に届きます。iOS では Apple が正確なアプリ名を保護者のデバイスに表示しないことがあります。',

    faq10Q: '子どもの位置情報が更新されないのはなぜですか？',
    faq10A:
      '子どものデバイスで KidGate に位置情報が許可されている必要があり、デバイスにはネットワーク接続が必要です。保護者のデバイスでそのデバイスの*位置情報*画面を開き、*位置情報を更新*をタップしてください。省電力モードでは更新が遅れることがあり、屋内の GPS は精度が落ちることがあります。',

    faq11Q: '子どものデバイスから KidGate を外すには？',
    faq11A:
      'まず保護者アプリでデバイスを削除し（*ファミリー*でデバイスを開いて削除を選択）、そのあとで子どものデバイスのアプリをアンインストールしてください。',

    faq12Q: 'アカウントとデータを削除するには？',
    faq12A:
      '保護者アプリで*設定 → アカウント → アカウントを削除*に進みます。14 日間の保留期間（その間は取り消せます）が過ぎると、家族アカウントとすべてのデータ（デバイス、アクティビティ、位置情報の履歴、SOS の写真）が、すべての保護者と子どもについて完全に削除されます。アプリを入れていない場合の削除も含め、すべての方法は[アカウントとデータの削除](/delete-account)のページをご覧ください。',

    legalTitle: '法的情報',
    legalDeletion: 'アカウントとデータの削除',
  },

  deleteAccount: {
    title: 'アカウントとデータの削除',
    updated: '最終更新日: 2026年9月18日',
    intro:
      'このページでは、KidGateのアカウントと、それに関連するデータを削除する方法を説明します。削除はいつでも請求でき、そのためにアプリをインストールしている必要はありません。',
    option1Title: '方法 1: アプリでアカウントを削除する',
    option1Step1: 'KidGateアプリを開き、サインインします。',
    option1Step2: '*設定 → アカウント → アカウントを削除*に進みます。',
    option1Step3: '削除を確定します。',
    option2Title: '方法 2: メールで削除を請求する',
    option2Step1:
      '[support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) 宛てに、件名を「Account Deletion Request」としてメールを送信します。',
    option2Step2:
      '本人確認のため、KidGateアカウントに登録されているメールアドレスから請求を送信してください。',
    option2Step3:
      '請求を確認したうえで、削除を予約します。請求は14日間保留され、その間は取り消すことができます。この期間が過ぎると削除が実行され、元に戻すことはできません。',
    deletedTitle: '削除されるもの',
    deletedIntro: 'アカウントを削除すると、次のものが完全に削除されます。',
    deleted1: '保護者アカウントの情報（名前、メールアドレス）。',
    deleted2: '作成したすべての子どものプロフィール。',
    deleted3:
      '管理対象のデバイスから収集したすべてのアクティビティデータ（アプリの利用状況、スクリーンタイムの履歴、閲覧アクティビティ、位置情報の履歴、チェックインとSOSの写真を含みます）。',
    deleted4: '保護者として設定したコントロールの設定と環境設定。',
    deleted5: '送信したサポートへのお問い合わせと、添付されたスクリーンショット。',
    deleted6: 'サインインそのもの。これにより、アカウントは再び使えなくなります。',
    retentionTitle: '保存期間',
    retention1:
      '確認済みの請求に対する**14日間**の保留期間が終了した時点で、データは削除されます。削除は元に戻せず、その後にデータを書き出すことはできません。',
    retention2:
      '削除が請求され、完了したことの記録（メールアドレスのハッシュと日付のみで、それ以外は含まれません）は、削除に関する異議に対応できるよう、**12か月間**保持されます。',
    retention3:
      '法律で求められる場合（たとえば税務上の取引記録）には、必要最小限の記録を、法律上必要な期間に限って保持することがあります。',
    partialTitle: '一部の削除',
    partial:
      'アプリで子どもまたはデバイスを削除すると、そこからの収集が止まります。すでに収集された履歴は、プライバシーポリシーに定める期間で失効します（利用履歴、ウェブ履歴、位置情報の履歴、アクティビティフィードは30日、SOS、チェックイン、時間延長リクエストは90日）。これより早く削除したい場合は、[support@kidgate.app](mailto:support@kidgate.app) 宛てにメールをお送りください。',
    moreInfo:
      'データの取り扱いについて詳しくは、[プライバシーポリシー](/privacy-policy)をご覧ください。',
  },

  download: {
    eyebrow: 'ダウンロード',
    qrScan: 'スマホのカメラで読み取ると、アプリを入手できます',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 以降、Apple シリコン搭載の Mac。',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 以降、64 ビット。',
    button: 'ダウンロード',
    warningSub:
      'Windows は、自社ストア以外から、まだ確認済みリストに載っていない開発者のアプリをインストールする場合には必ず SmartScreen の警告を出します。KidGate に何か見つかったという意味ではありません。許可する手順は上の Windows のカードに書いてあります。Mac のパッケージは Apple Developer ID で署名され、Apple による公証も受けているため、警告は出ません。ダウンロードは kidgate.app からのみ行ってください。',
    macosSteps:
      'ダウンロードしたパッケージを開き、インストーラの案内に従います。そのあと macOS が一度だけ、KidGate のシステム機能拡張を許可するよう求めます。メッセージが示す設定を開き、そこで許可してください。許可するまで Webフィルターは動きません。インストール後、KidGateはメニューバーのアイコンとして動き続けます。アイコンをクリックするとウィンドウが開きます。',
    windowsSteps:
      'ブラウザが先に、このファイルはあまりダウンロードされていないと警告することがあります。その場合はそのまま保存してください。次に Windows が PC を保護したと表示したら、詳細情報、続いて実行を選びます。インストール後、KidGateは通知領域のアイコンとして動き続けます。アイコンをクリックするとウィンドウが開きます。',
  },
  about: {
    eyebrow: '私たちについて',
    title: '子どもが、もっと安心してテクノロジーを使えるように。',
    titleAccent: '家族の心配が、少しでも軽くなるように。',
    lede: 'スマートフォンもパソコンもテレビも、今では子どもの暮らしの一部です。それ自体は、必ずしも悪いことではありません。大切なのは、どう使うか、どのくらい使うか、そしてふさわしくないコンテンツから守られているかどうかです。KidGate は、保護者が本当に必要なルールを、シンプルで、オープンで、保護者にもお子さまにも公平なかたちで決められるようお手伝いします。',
    storyEyebrow: 'KidGate が生まれた理由',
    storyTitle: 'どの家庭にもある、あの瞬間から',
    storyP1:
      '「あと 5 分だけ！」そして 5 分が過ぎます。保護者がもう一度声をかけ、お子さまはむっとして、ささいなことが、だれも望んでいなかった言い争いになってしまう。どの家庭にも、もっと厳しいルールが必要だとは思いません。ときに必要なのは、はっきりしていて、みんなが分かっていて、信頼できるルールです。',
    storyP2:
      'KidGate では、保護者が 1 日の上限、休止時間、ブロックされたアプリ、Webフィルターを一度設定すれば、あとはそれぞれのデバイスができる範囲で、ルールが自動で働きます。お子さまも自分の上限を確認でき、いつデバイスがロックされるかが分かり、必要なときは時間の延長をお願いできます。',
    storyP3:
      '保護者が毎日言い聞かせなくても大丈夫。お子さまが「今日はルールが変わったのかな」と迷うこともありません。言い争いが減って、一緒に過ごす時間が増えます。',
    valuesEyebrow: '大切にしていること',
    valuesTitle: 'いつも守り続けていること',
    valuesSub: 'KidGate のすべての機能は、この 4 つから始まります。',
    value1Title: '保護者にも、お子さまにもオープンに',
    value1Text:
      'お子さまには、自分のデバイスのルールを知る権利があります。保護者はお子さまを守るための道具を持ち、お子さまは自分の上限を理解し、時間の延長をお願いでき、対応しているデバイスでは SOS で保護者に連絡できます。テクノロジーには、家族が離れていくのではなく、お互いを分かり合う助けになってほしいと考えています。',
    value2Title: 'ご家族のプライバシーを大切にします',
    value2Text:
      'KidGate に広告はなく、お子さまのデータをだれかに売ることも決してありません。ご家族のアカウントと関連するデータの削除は、アプリから、またはこのサイトで案内しているメールでいつでも申請できます。公開している手順に沿って、14 日後に消去されます。',
    value3Title: 'KidGate にできることを、正直に',
    value3Text:
      'デバイスにはそれぞれ制約があるため、iPhone、Android、Mac、Windows、テレビで動きが異なる機能もあります。どこでも同じように動くと約束するのではなく、そのことを画面ではっきりお伝えします。家族を守るには、良い道具と、信頼できる情報の両方が必要だからです。',
    value4Title: 'ひとつの家族に、ひとつの Premium',
    value4Text:
      'ひとつの Premium サブスクリプションで、すべての保護者とすべての子どものデバイスをカバーします。デバイスごとに購入する必要はありません。Premium がなくても、1 日の上限、休止時間、ブロックされたアプリ、デバイスロック、Webフィルターは対応しているデバイスで働き続け、SOS が有料になることもありません。基本的な安全のための道具は、いつでも手の届くところにあるべきだと考えているからです。',
    makeEyebrow: '作っているもの',
    makeTitle: 'ひとつのアプリで、たくさんのデバイスに',
    makeSub:
      '子どもは外ではスマホを、勉強にはパソコンを、くつろぐときはテレビを使います。だから見守りも、ひとつのデバイスだけで終わるべきではありません。プラットフォームごとに得意なことは違いますが、目指すところは同じです。保護者にはもっと手軽に、お子さまにはもっと分かりやすく。',
    make1Title: 'iPhone と iPad',
    make1Text:
      '1 日の上限、休止時間、ブロックされたアプリは Apple 自身のスクリーンタイムの仕組みで、Webフィルターはデバイス上で直接働きます。',
    make2Title: 'Android',
    make2Text:
      '上限、ブロックされたアプリ、画面ロック、Webフィルターに加えて、お子さまが新しいアプリを入れたときにはお知らせが届きます。',
    make3Title: 'macOS',
    make3Text:
      'スマホと同じスケジュール、同じ上限が働きます。保護者がひと目で読める 1 日のまとめも付いています。',
    make4Title: 'Windows',
    make4Text:
      'PC でも同じルールが働き、KidGate は閉じられたり終了させられたりしても、自動でもう一度起動します。',
    make5Title: 'Android TV',
    make5Text:
      'リビングにある家族みんなの画面にも、スマホと同じ上限と同じスケジュールを。テレビでは位置情報の共有と SOS は使えません。',
    make6Title: 'Chrome',
    make6Text:
      'Chrome 拡張機能で、KidGate を入れられないパソコンでも、ブラウザの中で Webフィルターが使えます。オンにすると、お子さまが見た YouTube 動画の記録、気がかりな検索の検出、ほかにインストールされている拡張機能のお知らせもできます。スクリーンタイムの計測やアプリのブロックは行いません。',
    make7Title: '保護者ダッシュボード',
    make7Text:
      'どのパソコンのブラウザからでも、家族みんなを見守れます。スマホでコードを読み取るだけでサインインでき、インストールは不要です。',
    factsEyebrow: '現在の KidGate',
    factsTitle: '4 つの数字',
    fact1Label: '言語に対応。どのご家庭も、自分たちの言葉で使えます',
    fact2Label: 'プラットフォームと、Web ダッシュボード',
    fact3Label: 'KidGate の広告の数',
    fact4Label: '家族みんなで使える Premium プラン',
    contactEyebrow: 'お声をお聞かせください',
    contactTitle: 'すべてのメッセージに、人が目を通します',
    contactSub:
      '思ったとおりに動かないところ、ご家族に必要な機能、ご自分の言語で不自然に感じる訳文など、どうぞお気軽にお知らせください。いただいた声のひとつひとつが、KidGate を毎日使うご家族にとってもっと役立つものにしてくれます。',
    contactEmail: 'メールで問い合わせる',
    contactSupport: 'サポートとガイド',
    contactPrivacy: 'データの取り扱いについて',
  },
  promo: {
    intro: 'お子さまの一日を、まるごと安心に。',
    school: '授業が始まると、スマホは自動でロック。',
    apps: 'ブロックしたアプリは、開けません。',
    arrive: 'おばあちゃんの家に着いたら、通知が届きます。',
    checkIn: '様子をたずねると、ワンタップで「大丈夫」と返事が届きます。',
    sos: 'もしものときは、SOS ですぐに居場所がわかります。',
    limit: '遊ぶ時間はおしまい。スマホは自動でロック。',
    lockNow: 'ごはんの時間。あなたのスマホから、お子さまのスマホをロック。',
    web: '有害なサイトを、すべてのデバイスでブロック。',
    tv: 'リビングのテレビも、家族のルールを守ります。',
    reward: '宿題が終わったら、ボーナス 15 分。',
    bedtime: '寝る時間には、スマホもパソコンもテレビもおやすみ。',
    kid: 'お子さま',
    parent: '保護者',
    arrivedNotice: 'ゆいがおばあちゃんの家に着きました',
    checkAsk: '大丈夫？',
    checkReply: '大丈夫だよ',
    sosNotice: 'ゆいが SOS を送信しました',
    timeUp: '今日の遊ぶ時間はおしまい',
    lockButton: '今すぐロック',
    task: '宿題おわり',
    granted: '+15 分',
    youtubeTitle: 'KidGate — スマホ・パソコン・テレビのペアレンタルコントロール',
    youtubeDescription:
      'KidGate と過ごす、いつもの一日。学校のチャイムから寝る時間まで。',
  },
  setup: {
    parentTitle: '自分のスマホを設定する',
    parentSub: '最初のステップです。数分で終わります。',
    install: 'App Store または Google Play で「KidGate」を探して、インストールします。',
    installSub: 'iPhone、iPad、Android スマホで使えます。',
    role: 'KidGate を開き、「{{parent}}」を選びます。',
    signIn: '「{{signIn}}」をタップし、Apple、Google、またはメールでログインします。',
    signInSub: 'Apple なら Face ID で確認するだけです。',
    family: '{{tab}}で「{{create}}」をタップし、ファミリーに名前を付けます。',
    done: '保護者側の準備はこれで完了です。',
    parentYoutubeTitle: '自分のスマホに KidGate を設定する方法',
    parentYoutubeDescription:
      'KidGate をインストールし、ログインしてファミリーを作成します。お子さまのデバイスをつなぐ前の、最初のステップです。',
    pairSub: '保護者のスマホと接続してから、保護をオンにします。',
    parentPhone: '保護者のスマホ',
    openSub: 'QR コードが表示されます。この画面は開いたままにしてください。',
    scanSub: '読み取れないときは「{{manual}}」を選びます。',
    protect: '「{{turnOn}}」をタップすると、安全な基本ルールで始められます。',
    protectSub: 'ルールはあとから一つずつ調整できます。',
    tapAllow: '「{{allow}}」をタップします。',
    extras: '最後に、カメラとマイクへのアクセスを許可します。',
    extrasSub: '任意：許可すると、お子さまが SOS に写真や音声を添えられます。',
    iosTitle: 'お子さまの iPhone または iPad を設定する',
    childPhone: '子どもの iPhone',
    iosOpen: 'お子さまの iPhone で KidGate を開き、「{{child}}」を選びます。',
    iosScan: '保護者のスマホで「{{add}}」をタップし、QR コードを読み取ります。',
    iosConfirm: 'お子さまの iPhone で保護者の名前を確認し、「{{yes}}」をタップします。',
    iosPin: '「{{pin}}」（6 桁）を作成します。',
    iosPinSub:
      'ブロックするアプリを変更する前に、お子さまの iPhone がこの PIN を求めます。',
    iosAssign: 'この iPhone を使う人を選ぶか、名前を入力してお子さまを追加します。',
    iosScreenTime:
      'お子さまの iPhone で「{{allow}}」をタップし、スクリーンタイムへのアクセスを許可します。',
    iosScreenTimeSub: 'Apple がこの iPhone の Face ID またはパスコードを求めます。',
    iosNotify:
      '「{{settings}}」をタップして{{notifications}}をオンにし、KidGate に戻ります。',
    iosRefresh: '「{{settings}}」をタップし、「{{refresh}}」をオンにします。',
    iosRefreshSub: '任意：KidGate がバックグラウンドでも動作し続けます。',
    iosBlocked: '「{{strengthen}}」をタップし、「{{blocked}}」を設定します。',
    iosBlockedSub: '「{{unlock}}」をタップして PIN を入力し、アプリを選びます。',
    iosDone: 'お子さまの iPhone が保護されました。',
    iosYoutubeTitle: 'お子さまの iPhone または iPad に KidGate を設定する方法',
    iosYoutubeDescription:
      'QR コードでお子さまの iPhone または iPad を保護者のスマホと接続し、スクリーンタイムなど KidGate に必要な権限を一つずつオンにします。',
    androidTitle: 'お子さまの Android スマホ・タブレットを設定する',
    childAndroid: '子どもの Android',
    androidOpen: 'お子さまのスマホで KidGate を開き、「{{child}}」を選びます。',
    androidScan: '保護者のスマホの KidGate で QR コードを読み取ります。',
    androidConfirm:
      'お子さまのスマホで保護者の名前を確認し、「{{yes}}」をタップします。',
    androidAssign: 'このスマホを使う人を選ぶか、名前を入力してお子さまを追加します。',
    androidUsage:
      'お子さまのスマホで「{{open}}」をタップし、KidGate の使用状況へのアクセスをオンにします。',
    androidBack: 'そのあと、スワイプして KidGate に戻ります。',
    androidAccessibility:
      '「{{agree}}」をタップし、ユーザー補助で KidGate をオンにします。',
    androidOverlay:
      '「{{settings}}」をタップし、KidGate に「{{overlay}}」を許可します。',
    androidNotify: '「{{allow}}」をタップし、続けて通知を許可します。',
    androidWebFilter: '「{{enable}}」をタップし、接続を許可します。',
    androidWebFilterSub: 'KidGate の {{filter}}は、VPN としてスマホ上で動作します。',
    androidBattery:
      '「{{settings}}」をタップし、KidGate がバックグラウンドで常に動作できるようにします。',
    androidStrengthen:
      '「{{strengthen}}」をタップし、「{{uninstall}}」をオンにします。',
    androidMessages:
      '「{{alerts}}」で「{{grant}}」をタップし、KidGate の通知へのアクセスをオンにします。',
    androidMessagesSub:
      'KidGate は受信したメッセージに警告ワードがないかを、スマホの中でチェックします。',
    androidDone: 'お子さまの Android スマホが保護されました。',
    androidYoutubeTitle:
      'お子さまの Android スマホ・タブレットに KidGate を設定する方法',
    androidYoutubeDescription:
      'QR コードでお子さまの Android スマホ・タブレットを保護者のスマホと接続し、KidGate に必要な権限を一つずつオンにします。',
    macTitle: 'お子さまの Mac を設定する',
    childMac: '子どもの Mac',
    macDownload:
      'お子さまの Mac で、kidgate.app から macOS 版の KidGate をダウンロードします。',
    macInstall: 'ダウンロードしたインストーラを開き、画面の手順に従います。',
    macPasswordSub: 'macOS がこの Mac のパスワードを求めます。',
    macOpen: 'KidGate が開き、QR コードが表示されます。',
    macOpenSub: 'そのウィンドウは開いたままにしてください。',
    macScan:
      '保護者のスマホで KidGate のスキャンボタンをタップし、QR コードを読み取ります。',
    macConfirm: 'Mac で保護者の名前を確認し、「{{yes}}」をクリックします。',
    macAssign: 'この Mac を使う人を選ぶか、名前を入力してお子さまを追加します。',
    macFilter:
      'Mac で「{{open}}」をクリックし、ネットワーク機能拡張で KidGate をオンにします。',
    macAllow:
      'ネットワークコンテンツのフィルタリングについて macOS から確認が表示されたら、「許可」をクリックします。',
    macAllowSub: 'これで KidGate の {{filter}}がオンになります。',
    macDone: 'お子さまの Mac が保護されました。',
    macYoutubeTitle: 'お子さまの Mac に KidGate を設定する方法',
    macYoutubeDescription:
      'お子さまの Mac に KidGate をインストールし、QR コードで保護者のスマホと接続して、システム設定で Webフィルターをオンにします。',
    windowsTitle: 'お子さまの Windows PC を設定する',
    childWindows: '子どもの PC',
    windowsDownload:
      'お子さまの PC で、kidgate.app から Windows 版の KidGate をダウンロードします。',
    windowsSmartScreen:
      'Windows が PC を保護したと表示したら、「詳細情報」、続いて「実行」を選びます。',
    windowsInstall: '管理者権限の確認を承認し、インストーラーの手順に従います。',
    windowsInstallSub: '標準アカウントでは、Windows が管理者のパスワードを求めます。',
    windowsConfirm: 'PC で保護者の名前を確認し、「{{yes}}」をクリックします。',
    windowsAssign: 'この PC を使う人を選ぶか、名前を入力してお子さまを追加します。',
    windowsSetup: 'PC で{{location}}の「{{allow}}」をクリックします。',
    windowsSetupSub: 'KidGate の {{filter}}は、数秒で自動的にオンになります。',
    windowsDone: 'お子さまの PC が保護されました。',
    windowsYoutubeTitle: 'お子さまの Windows PC に KidGate を設定する方法',
    windowsYoutubeDescription:
      'お子さまの Windows PC に KidGate をインストールし、QR コードで保護者のスマホと接続します。その後、Webフィルターが自動的にオンになります。',
    chromeTitle: 'Chrome に KidGate を設定する',
    childChrome: '子どものパソコン',
    chromeSite:
      'お子さまのパソコンの Chrome で kidgate.app を開き、Chrome を選びます。',
    chromeStore:
      'Chrome ウェブストアで「Chrome に追加」、続いて「拡張機能を追加」をクリックします。',
    chromeOpen:
      'Chrome のツールバーにある KidGate のアイコンをクリックします。ポップアップに QR コードが表示されます。',
    chromeOpenSub: 'ペアリングが終わるまで開いたままにします。',
    chromeConfirm: 'KidGate で保護者の名前を確認し、「{{yes}}」をクリックします。',
    chromeAssign: 'このパソコンで Chrome を使うお子さまを選びます。',
    chromeDone: 'お子さまのパソコンの Chrome が保護されました。',
    chromeYoutubeTitle: 'お子さまのパソコンの Chrome に KidGate を設定する方法',
    chromeYoutubeDescription:
      'KidGate の拡張機能をお子さまのパソコンの Chrome に追加し、QR コードで保護者のスマホと接続します。その後、Chrome の中で Webフィルターが働きます。',
    dashboardComputer: '保護者のパソコン',
    dashboardSite:
      'パソコンで kidgate.app を開き、「ダッシュボード」をクリックします。',
    dashboardDone: 'Webダッシュボードにログインしました。',
    tvTitle: 'お子さまの Android TV を設定する',
    tvAssign: 'このテレビを使う人を選ぶか、名前を入力してお子さまを追加します。',
    tvDone: 'お子さまの Android TV が保護されました。',
    tvYoutubeTitle: 'お子さまの Android TV に KidGate を設定する方法',
    outroTitle: '準備が整いました。',
    outroSub: 'KidGate でご家族の見守りがもっとラクになりますように。',
    findDeviceTitle: 'お子さまのデバイスを探す',
    allYoutubeTitle: '自分のスマホとお子さまのデバイスに KidGate を設定する方法',
    allYoutubeDescription:
      'すべての設定を1本の動画にまとめました。まず保護者のスマホ、次にお子さまの各デバイス（iPhone または iPad、Android スマホ・タブレット、Mac、Windows PC、Android TV、Chrome）、最後に Webダッシュボードです。下のリストからお使いのデバイスを選んでください。',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'KidGate の使い方：すべての機能をステップごとに',
    guideAllYoutubeDescription:
      'KidGate のすべての機能を1本の動画にまとめました。保護者の iPhone とお子さまの Android スマホで、一つずつ順番に紹介します。下の一覧から見たい機能を選んでください。',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: '保護者のデバイスを削除する',
  },
};
