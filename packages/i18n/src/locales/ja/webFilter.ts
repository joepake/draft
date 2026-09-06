export const webFilter = {
  title: 'Webフィルター',
  fallbackDeviceName: '子どものデバイス',
  appliesToAll: '{{name}}の{{count}}台すべてのデバイスに適用されます',
  coverageLine: '{{total}}台中{{enforcing}}台で有効',
  mergeNotice:
    '{{name}}のデバイスごとにウェブフィルター設定が異なっていました。ここで保存すると、より厳しい設定に統合された1つの設定がすべてに適用されます。',
  mergeLoosened: 'すべてのデバイスで許可されるようになりました: {{domains}}',
  toastUpdateFailed: 'Webフィルターを更新できませんでした。もう一度お試しください。',
  heroTitle: 'アダルトサイトをフィルタリング',
  heroSubtitleIos:
    'Appleスクリーンタイムのウェブコンテンツフィルターを使って、お子さまのデバイスのSafariやアプリ内ブラウザでアダルトコンテンツを制限します。',
  heroSubtitleAndroid:
    'お子さまのAndroidデバイスでローカルDNS VPNを使い、既知のアダルトドメインをブラウザや多くのアプリでブロックします。',
  heroSubtitleMacos:
    '子どものMacでKidGateのコンテンツフィルターを実行し、ブラウザや多くのアプリで既知のアダルトサイトをブロックします。',
  toggleHintIos: 'お子さまのデバイスでスクリーンタイムの権限が必要です。',
  toggleHintAndroid:
    'お子さまが一度KidGateのVPN接続を承認する必要があります。フィルターの動作にはVPNをオンのままにしてください。',
  toggleHintMacos:
    '子どもはシステム設定でKidGateフィルター拡張機能を一度承認する必要があります。フィルターが機能するよう承認された状態を保ってください。',
  toggleAccessibilityLabel: 'Webフィルターを有効にする',
  safeSearchSectionTitle: 'セーフサーチと YouTube',
  safeSearchSectionSubtitle:
    'Google、Bing、DuckDuckGo を安全な結果に強制し、YouTube を制限付きモードに固定します。ウェブフィルターの有効化が必要です。',
  safeSearchLabel: 'セーフサーチを強制',
  safeSearchHint:
    'Google セーフサーチ、YouTube 制限付きモード、Bing、DuckDuckGo を厳格設定に固定します。Android、Android TV、Chrome。',
  infoTitle: '仕組み',
  infoLine1Ios: 'Appleがアダルトサイトを自動でフィルタリングします。',
  infoLine2Ios:
    'SafariでAppleのアダルトコンテンツフィルターを使用します。他のアプリ内のすべてをブロックできるわけではありません。',
  infoLine3Ios:
    'お子さまのデバイスのアプリが設定を同期すると、KidGateが自動で適用します。',
  infoLine1Android:
    'KidGateはローカルVPNを起動してDNSを検査し、アダルトドメインと一部の暗号化DNSリゾルバをブロックします。',
  infoLine2Android:
    'お子さまのデバイスでプライベートDNSをオフにしてください。オンのままだと、ブラウザがフィルターを回避できる場合があります。',
  infoLine3Android:
    'フィルタリング中はお子さまのデバイスにVPNアイコンが表示されます。VPNをオフにするとフィルターも止まります — KidGateを開き直すと復旧します。',
  infoLine4Android:
    '設定 → ネットワークとインターネット → プライベートDNS → オフ に進みます。',
  infoLine1Macos:
    'KidGateはMac上でコンテンツフィルターを実行し、アクセスされているサイトを確認して、設定したカテゴリに該当するものをブロックします。',
  infoLine2Macos:
    '子どものMacでフィルターが未承認と表示される場合は、システム設定 → 一般 → ログイン項目と機能拡張を開いて承認してください。',
  infoLine3Macos:
    '承認されると、子どものMacはフィルターを有効と表示します。そこでオフにされた場合は、KidGateを再度開いて復元してください。',
  infoLine4Macos:
    'フィルターはサイト名を読み取りますが、最近のブラウザは訪問の約半分でこれを隠すため、それらのサイトはカテゴリーと照合されません。それでも、この方法で子どもがアクセスするほとんどのサイトはブロックされます。',
  privateDnsBannerTitle: 'プライベートDNSをオフにする',
  privateDnsBannerBody:
    'プライベートDNSがオンのため、アダルトフィルターが回避される可能性があります。フィルターを機能させるにはオフにしてください。',
  privateDnsBannerButton: 'DNS設定を開く',
  vpnConsentBannerTitle: 'WebフィルターのVPNを復旧',
  vpnConsentBannerBody:
    'KidGateのVPNがオフです。アダルトフィルターにはVPNの接続維持が必要です。',
  vpnConsentBannerButton: 'VPNを有効にする',
  iosOnlyNote: 'iOSではスクリーンタイムを使用',
  androidVpnNote: 'AndroidではローカルDNS VPNを使用',
  macosFilterNote: 'MacではKidGateのコンテンツフィルターを使用',

  heroSubtitleWindows:
    'お子さまのPCでKidGate独自のリゾルバーを動かし、既知のアダルトサイトをすべてのブラウザーでブロックします。',

  toggleHintWindows:
    'PC側で承認する操作はありません。KidGateのバックグラウンドサービスが数秒でフィルターを有効にします。',

  infoLine1Windows:
    'KidGateはPC上でリゾルバーを動かし、どのサイトが参照されたかを確認して、選んだカテゴリーのサイトをブロックします。',

  infoLine2Windows:
    'Chrome、Edge、FirefoxはKidGateが適用する設定によってこれに従います。お子さまが何かを承認する必要はありません。',

  infoLine3Windows:
    'KidGateのバックグラウンドサービスが必要です。Webフィルターが有効にならない場合は、管理者としてPCにKidGateを再インストールしてください。',

  infoLine4Windows:
    'フィルターが読むのはサイト名だけです。ページの中身は見えず、直前に参照されたサイトは数分間開けることがあります。',

  windowsFilterNote: 'WindowsではKidGate独自のリゾルバーを使用',
  webFilteringNote:
    'iOSはスクリーンタイムのアダルトフィルター、AndroidはローカルDNS VPNのブロックリストを使用します。',
  safeSearchAlertsNote:
    'Safariは検索語を共有しません。キーワード通知には管理されたセーフブラウザが必要です。',
  webHistoryNote: 'フィルター付きブラウザまたはDNS/VPN型のレポートが必要です。',
  categoriesTitle: 'ブロックする内容',
  categoriesSubtitle:
    'KidGateは独自のドメインリストを使います。子どもが実際にたどり着くサイトを対象にしており、ウェブ全体ではありません。下のリストと組み合わせてください。',
  androidOnlyCategory: 'Androidのみ — iOSにはカテゴリ別のウェブ制御がありません',
  iosCategoryNote:
    'iPhoneは{{category}}のみ対応し、Apple独自のフィルターを使います。他のカテゴリはAndroidデバイスに適用されます。',
  allowListTitle: '常に許可',
  allowListSubtitle: 'カテゴリがブロックする場合でもアクセスできるサイト。',
  allowListEmpty: '例外はまだありません。',
  allowListInputAccessibility: '常に許可するサイトを追加',
  blockListTitle: '常にブロック',
  blockListSubtitle: 'カテゴリの設定に関係なく拒否されるサイト。',
  blockListEmpty: 'ブロック中のサイトはまだありません。',
  blockListInputAccessibility: '常にブロックするサイトを追加',
  allowListOnlyLabel: '許可したサイトのみ',
  allowListOnlyHintAndroid:
    '許可リスト以外はすべて拒否されます。DNS層で動作するため、他のアプリも接続できなくなります。',
  allowListOnlyHintIos: 'Safariとアプリ内ブラウザは許可リストのサイトしか開けません。',
  allowListOnlyNeedsEntries:
    'オンにする前に、許可するサイトを1つ以上追加してください。',
  domainPlaceholder: 'example.com',
  addDomain: 'サイトを追加',
  removeDomain: '{{domain}}を削除',
  invalidDomain: 'example.com のようにサイトのアドレスを入力してください',
  listFull: 'このリストには最大{{max}}件まで保存できます。',
  openHistory: 'ウェブ履歴',
  openHistorySubtitle: 'このデバイスがどのサイトに到達し、何がブロックされたかを見る',
  blockedPageTitle: 'サイトはブロックされました',
  blockedPageBody:
    'KidGate がご家族のためにこのサイトをブロックしました。間違いだと思う場合は保護者に相談してください。',
  category: {
    adult: 'アダルト',
    selfHarm: '自傷・摂食障害',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: '教育',
    utility: 'ユーティリティ',
    browser: 'ウェブブラウザ',
    devTools: 'プログラミング・開発ツール',
    messaging: 'メッセージ・通話',
    community: 'フォーラム・コミュニティ',
    shortVideo: 'ショート動画',
    creative: '写真・動画・アート',
    productivity: 'メモ・仕事効率化',
    reading: '本・マンガ',
    fileSharing: 'ファイル共有・ダウンロード',
    bypass: '制限回避アプリ',
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
  categoryHint: {
    adult: 'アダルト・露骨な内容のサイト',
    selfHarm: '自傷や自殺をあおる掲示板',
    gambling: 'カジノ、スポーツ賭博、ポーカー',
    gameGambling: 'ケース開封、スキンやRobloxの賭け',
    dating: '出会い系アプリ',
    strangerChat: 'Omegle系サイト、ランダムビデオチャット',
    drugs: '大麻、電子タバコ、酒',
    violence: 'グロ画像やショックサイト',
    extremism: 'ヘイト掲示板・過激思想サイト',
    piracy: 'トレントと違法配信',
    social: 'Facebook、Instagram、TikTok、Discord',
    videoStreaming: 'YouTube、Netflix、Twitch',
    music: 'Spotify、SoundCloud、Zing MP3',
    gaming: 'Roblox、Steam、ゲームサイト',
    shopping: 'Amazon、楽天、ファストファッション',
    aiCompanion: 'Character.AI、Replika、ロールプレイbot',
    aiAssistant: 'ChatGPT、Gemini、Copilot',
    cryptoTrading: 'Binance、Coinbase、取引アプリ',
    vpn: 'VPNのダウンロードページ。インストール済みのアプリは対象外。',
  },
  categoryGroup: {
    harm: '有害なコンテンツ',
    contact: '見知らぬ相手',
    bypass: 'フィルターの回避',
    ai: 'AI',
    entertainment: '娯楽・SNS',
    money: '買い物・お金',
  },
  categoriesOnCount: '{{total}}件中{{on}}件がオン',
  askToOpen: 'おうちの人に聞く',
  askToOpenSubtitle: '許可されたら、このサイトを開けるよ。',
  askToOpenDomainLabel: 'どのサイト？',
  askToOpenBlockedLabel: '最近ブロックされたサイト',
  askToOpenPending: 'もうリクエストを送ってあるよ。お返事を待ってね。',
  askToOpenTooSoon: 'いま送ったばかりだよ。1分たったらもう一度試してね。',
  askToOpenTooMany: '一度にお願いできるサイトは少しだけだよ。',
  requestsTitle: 'サイトのリクエスト',
  requestsSubtitle: 'このデバイスが許可を求めたサイト。',
  siteRequestApproved: 'サイトを許可しました',
  siteRequestApprovedDescription:
    '{{deviceName}}の「常に許可」に{{domain}}を追加しました。',
  siteRequestDenied: 'サイトのリクエストを却下しました',
  siteRequestDeniedDescription:
    '{{deviceName}}では{{domain}}は引き続きブロックされます。',
  siteRequestReceived: 'サイトのリクエスト',
  siteRequestReceivedDescription: '{{deviceName}}が{{domain}}を開こうとしています。',
} as const;
