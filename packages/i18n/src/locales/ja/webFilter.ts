export const webFilter = {
  title: 'Webフィルター',
  fallbackDeviceName: '子どものデバイス',
  appliesToAll: '{{name}}のすべてのデバイス（{{count}}台）に適用されます',
  coverageLine: '{{total}}台中{{enforcing}}台で有効',
  mergeNotice:
    '{{name}}のデバイスごとにWebフィルター設定が異なっていました。ここで保存すると、より厳しい設定に統合された1つの設定がすべてに適用されます。',
  mergeLoosened: 'すべてのデバイスで許可されるようになりました: {{domains}}',
  toastUpdateFailed: 'Webフィルターを更新できませんでした。もう一度お試しください。',
  heroTitle: '不適切なサイトをフィルタリング',
  heroSubtitleIos:
    'Appleスクリーンタイムのウェブコンテンツフィルターに加えて、お子さまのiPhoneやiPadでプライベート接続を使い、既知の不適切なサイトをブラウザや多くのアプリでブロックします。',
  heroSubtitleAndroid:
    'お子さまのAndroidデバイスでローカルDNS VPNを使い、既知の不適切なドメインをブラウザや多くのアプリでブロックします。',
  heroSubtitleMacos:
    '子どものMacでKidGateのコンテンツフィルターを実行し、ブラウザや多くのアプリで既知の不適切なサイトをブロックします。',
  toggleHintIos:
    'お子さまが一度KidGateのVPN接続を許可し、デバイスのパスコードを入力する必要があります。フィルターの動作にはVPNを削除せずに残してください。',
  toggleHintAndroid:
    'お子さまが一度KidGateのVPN接続を承認する必要があります。フィルターの動作にはVPNをオンのままにしてください。',
  toggleHintMacos:
    'お子さまがシステム設定でKidGateフィルター拡張機能を一度承認する必要があります。フィルターが機能するよう承認された状態を保ってください。',
  toggleAccessibilityLabel: 'Webフィルターを有効にする',
  safeSearchSectionTitle: 'セーフサーチと YouTube',
  safeSearchSectionSubtitle:
    'Google、Bing、DuckDuckGo を安全な結果に強制し、YouTube を制限付きモードに固定します。Webフィルターがオンになっている必要があります。',
  safeSearchLabel: 'セーフサーチを強制',
  safeSearchHint:
    'Google セーフサーチ、YouTube 制限付きモード、Bing、DuckDuckGo を厳格設定に固定します。Android、Android TV、Chrome。',
  safeSearchStrictNote:
    'YouTube は最も厳しいレベルで動作します。コメントは非表示になり、ふつうの動画も一部ブロックされます。子どもが自分のアカウントで解除することはできません。',
  infoTitle: '仕組み',
  infoLine1Ios:
    'KidGateはデバイス上でプライベート接続を動かし、どのサイトが参照されているかを確認して、選んだカテゴリーに該当するサイトをブロックします。',
  infoLine2Ios:
    'Appleのアダルトコンテンツフィルターも、二重の保護としてSafariとアプリ内ブラウザで引き続き有効です。',
  infoLine3Ios:
    'フィルタリング中はVPNアイコンが表示されます。設定でVPNをオフにしても、数秒で自動的にオンに戻ります。VPNを削除すると、KidGateで再び許可されるまでフィルターは止まります。',
  infoLine1Android:
    'KidGateはデバイス上でプライベート接続を動かし、どのサイトが参照されているかを確認して、選んだカテゴリーに該当するサイトをブロックします。',
  infoLine2Android:
    'お子さまのデバイスでプライベートDNSをオフにしてください。オンのままだと、ブラウザがフィルターを回避できる場合があります。',
  infoLine3Android:
    'フィルタリング中はお子さまのデバイスにVPNアイコンが表示されます。VPNをオフにするとフィルターも止まります — KidGateを開き直すと復旧します。',
  infoLine4Android:
    '設定で「ネットワークとインターネット」、「プライベートDNS」の順に開き、「オフ」を選びます。',
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
    'プライベートDNSがオンのため、Webフィルターが回避される可能性があります。フィルターを機能させるにはオフにしてください。',
  privateDnsBannerButton: 'DNS設定を開く',
  vpnConsentBannerTitle: 'WebフィルターのVPNを復旧',
  vpnConsentBannerBody:
    'KidGateのVPNがオフです。アダルトフィルターにはVPNの接続維持が必要です。',
  vpnConsentBannerButton: 'VPNを有効にする',
  vpnDisclosureNote:
    'Webフィルターがオンの間、KidGateのVPNはこのデバイス上でのみ動作します。VPNが確認するのは、デバイスがアクセスする各サイトの名前だけで、ページの内容、入力した文字、その他の通信は確認しません。保護者が選んだサイトをブロックし、このデバイスのウェブ閲覧履歴（閲覧・ブロックされたサイト）を保護者に表示します。この履歴は30日間保存されます。KidGateがこのデータを販売したり、ほかの目的に使ったりすることはありません。',
  iosOnlyNote: 'iPhoneではプライベート接続とスクリーンタイムを使用',
  androidVpnNote: 'AndroidではローカルDNS VPNを使用',
  macosFilterNote: 'MacではKidGateのコンテンツフィルターを使用',

  heroSubtitleWindows:
    'お子さまのPCでKidGate独自のリゾルバーを動かし、既知の不適切なサイトをすべてのブラウザーでブロックします。',
  heroSubtitleExtension:
    'お子さまのパソコンのChromeでKidGate拡張機能を動かし、そのブラウザで既知の不適切なサイトをブロックします。',

  toggleHintWindows:
    'PC側で承認する操作はありません。KidGateのバックグラウンドサービスが数秒でフィルターを有効にします。',
  toggleHintExtension:
    '承認する操作はありません。フィルターはChromeでのみ動作し、ほかのブラウザやアプリでは動作しません。',

  infoLine1Windows:
    'KidGateはPC上でリゾルバーを動かし、どのサイトが参照されたかを確認して、選んだカテゴリーのサイトをブロックします。',

  infoLine2Windows:
    'Chrome、Edge、FirefoxはKidGateが適用する設定によってこれに従います。お子さまが何かを承認する必要はありません。',

  infoLine3Windows:
    'KidGateのバックグラウンドサービスが必要です。Webフィルターが有効にならない場合は、管理者としてPCにKidGateを再インストールしてください。',

  infoLine4Windows:
    'フィルターが読むのはサイト名だけです。ページの中身は見えず、直前に参照されたサイトは数分間開けることがあります。',
  infoLine1Extension:
    'KidGate拡張機能は、Chromeがサイトを開く前にそれぞれのサイトを確認し、選んだカテゴリーに該当するサイトをブロックします。',
  infoLine2Extension:
    'フィルタリングされるのは、KidGateがインストールされたプロファイルのChromeだけです。パソコン上のほかのブラウザやアプリは対象外です。',
  infoLine3Extension:
    'シークレット ウィンドウがフィルタリングされるのは、拡張機能で「シークレット モードでの実行を許可する」がオンになっている場合だけです。ゲストモードのウィンドウはフィルタリングされません。',
  infoLine4Extension:
    'ブロックされたページから、お子さまはそのサイトの許可をあなたに求められます。拡張機能を削除するかオフにすると、フィルターは停止します。',

  windowsFilterNote: 'WindowsではKidGate独自のリゾルバーを使用',
  extensionFilterNote: 'ChromeではKidGate拡張機能を使用',
  categoriesTitle: 'ブロックする内容',
  categoriesSubtitle:
    'KidGateは独自のドメインリストを使います。子どもが実際にたどり着くサイトを対象にしており、ウェブ全体ではありません。下のリストと組み合わせてください。',
  androidOnlyCategory: 'iPhoneでは利用できません — ほかのデバイスで動作します',
  iosCategoryNote:
    'iPhoneは{{category}}のみ対応し、Apple独自のフィルターを使います。それ以外のカテゴリは、ほかのデバイスで適用されます。',
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
  allowListOnlyHintExtension:
    'Chromeでは許可リストのサイトしか開けません。ほかのブラウザやアプリには影響しません。',
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
    'KidGate がこのサイトをブロックしました。まちがいだと思ったら、保護者に聞いてみてください。',
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
  askToOpen: '保護者に聞く',
  askToOpenSubtitle: '許可されると、このサイトを開けます。',
  askToOpenDomainLabel: 'どのサイト？',
  askToOpenBlockedLabel: '最近ブロックされたサイト',
  askToOpenPending: 'すでにリクエストを送っています。返事を待ってください。',
  askToOpenTooSoon:
    'リクエストを送ったばかりです。1分たってからもう一度お試しください。',
  askToOpenTooMany: '一度にリクエストできるサイトは少しだけです。',
  requestsTitle: 'サイトのリクエスト',
  requestsSubtitle: 'このデバイスが許可を求めたサイト。',
  siteRequestApproved: 'サイトを許可しました',
  siteRequestApprovedDescription:
    '{{deviceName}}の「常に許可」に{{domain}}を追加しました。',
  siteRequestDenied: 'サイトのリクエストを却下しました',
  siteRequestDeniedDescription:
    '{{deviceName}}では{{domain}}は引き続きブロックされます。',
  siteRequestReceived: 'サイトのリクエスト',
  siteRequestReceivedDescription:
    '{{deviceName}}から{{domain}}を開きたいというリクエストが届きました。',
  privateDnsStep1: 'このデバイスで設定を開いてください。',
  privateDnsStep2: '「ネットワークとインターネット」を選びます。',
  privateDnsStep3: '「プライベートDNS」を開き、「オフ」を選びます。',
  vpnConsentStepAllow:
    'AndroidのVPN確認で「OK」を選びます。フィルターの動作中はステータスバーに鍵アイコンが表示されます。',
  vpnConsentStepAllowIos:
    'iOSでVPN構成の追加を求められたら「許可」を選び、デバイスのパスコードを入力します。フィルターの動作中はVPNアイコンが表示されます。',
} as const;
