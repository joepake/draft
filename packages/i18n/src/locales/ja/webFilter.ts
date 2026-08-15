export const webFilter = {
  title: 'Webフィルター',
  fallbackDeviceName: '子どものデバイス',
  toastUpdateFailed: 'Webフィルターを更新できませんでした。もう一度お試しください。',
  heroTitle: 'アダルトサイトをフィルタリング',
  heroSubtitleIos:
    'Appleスクリーンタイムのウェブコンテンツフィルターを使って、お子さまのデバイスのSafariやアプリ内ブラウザでアダルトコンテンツを制限します。',
  heroSubtitleAndroid:
    'お子さまのAndroidデバイスでローカルDNS VPNを使い、既知のアダルトドメインをブラウザや多くのアプリでブロックします。',
  toggleLabel: 'Webフィルターを有効にする',
  toggleHintIos: 'お子さまのデバイスでスクリーンタイムの権限が必要です。',
  toggleHintAndroid:
    'お子さまが一度KidGateのVPN接続を承認する必要があります。フィルターの動作にはVPNをオンのままにしてください。',
  toggleAccessibilityLabel: 'Webフィルターを有効にする',
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
    'iPhoneは{{category}}のみ対応し、Apple独自のフィルターを使います。他のカテゴリはAndroid端末に適用されます。',
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
  openHistorySubtitle: 'この端末がどのサイトに到達し、何がブロックされたかを見る',
  category: {
    adult: 'アダルト',
    gambling: 'ギャンブル',
    dating: '出会い系',
    drugs: '薬物・アルコール',
    violence: '暴力・過激思想',
    piracy: '海賊版',
    social: 'SNS',
    videoStreaming: '動画配信',
    gaming: 'ゲーム',
    shopping: 'ショッピング',
  },
  categoryHint: {
    adult: 'アダルト・露骨な内容のサイト',
    gambling: 'カジノ、賭博、ガチャ',
    dating: '出会い系・見知らぬ人とのチャット',
    drugs: '大麻、電子タバコ、酒',
    violence: '残虐・過激思想の掲示板',
    piracy: 'トレントと違法配信',
    social: 'Facebook、Instagram、TikTok、Discord',
    videoStreaming: 'YouTube、Netflix、Twitch',
    gaming: 'Roblox、Steam、ゲームサイト',
    shopping: 'Amazon、楽天、ファストファッション',
  },
} as const;
