export const location = {
  title: '位置情報',
  fallbackDeviceName: '子どものデバイス',
  syncNote:
    '位置情報が更新されるまで数分かかることがあります。デバイスがインターネットに接続していない場合や、予期せず終了した場合は、さらに時間がかかることがあります。',
  toastUpdateFailed: '位置情報の共有を更新できませんでした。もう一度お試しください。',
  toggleLabel: '位置情報を共有',
  toggleHint: '有効にした後、このデバイスで KidGate を一度開いてください。',
  toggleAccessibilityLabel: '位置情報を共有',
  lastKnownLocation: '最後に確認された位置',
  nearPlace: '{{place}}の近く',
  noLocationHint:
    '位置情報の共有を有効にしてから、このデバイスで KidGate を一度開いてください。',
  waitingForLocation: '位置情報を取得中',
  updatedAt: '{{date}} に更新',
  openInMaps: 'マップで開く',
  openInMapsAccessibility: 'マップで開く',
  refreshButton: '位置情報を更新',
  refreshingButton: '更新中…',
  refreshAccessibility: '位置情報を更新',
  toastEnableSharingFirst:
    '位置情報の更新をリクエストする前に、位置情報の共有を有効にしてください。',
  activityTitleRefreshRequested: '位置情報の更新をリクエストしました',
  activityDescriptionRefreshRequested:
    '{{deviceName}} に最新の位置情報を送信するようリクエストしました。',
  toastRefreshSent: '{{deviceName}} はリクエストを受信すると位置情報を更新します。',
  toastRefreshFailed:
    '位置情報の更新をリクエストできませんでした。もう一度お試しください。',
  toastChildNeedsNotifications:
    '位置情報の更新リクエストを受信できるよう、お子さまのデバイスで KidGate を開き、通知を許可してください。',
  checkInBadge: 'チェックイン',
  movementHistoryTitle: '移動履歴',
  historyEmpty:
    'まだ履歴はありません。位置情報の更新またはチェックイン後に表示されます。',
  historyHighlightAccessibility: '地図上で {{place}} を強調表示',
  historyOpenMapsAccessibility: '{{place}} をマップで開く',
  latestBadge: '最新',
  unableToRequestLocationRefresh: '位置情報の更新をリクエストできませんでした',
  locationBannerTitle: '位置情報を有効にする',
  locationBannerBody:
    '保護者が安全を確認できるよう、このデバイスの位置情報を共有してください。',
  locationBannerBodySharingOff:
    'いまは位置情報の共有がオフなので、なにも送信されません。ここで許可しておくと、あとで保護者がオンにしたときすぐに使えます。',
  allowLocationButton: '位置情報を許可',
  locationNotAllowed:
    '位置情報へのアクセスがまだ許可されていません。「設定 → KidGate → 位置情報」を開いてください（または先に位置情報サービスを有効にしてください）。「位置情報」の項目が表示されない場合は、もう一度「位置情報を許可」を選択してください。',
  locationServicesOff:
    'このデバイスでは位置情報サービスがオフになっています。「設定 → プライバシーとセキュリティ → 位置情報サービス」を開いて有効にし、その後 KidGate に戻って「位置情報を許可」を選択してください。',
  locationDeniedInSettings:
    'KidGate の位置情報へのアクセスが拒否されています。「設定 → KidGate → 位置情報」を開き、「Appの使用中のみ許可」または「常に許可」を選択してください。',
  locationEnabled:
    '位置情報は有効です。アプリを閉じている間も位置情報を更新できるよう、「常に許可」を選択してください。',
  backgroundLocationTitle: 'アプリを閉じている間も位置情報を許可',
  backgroundLocationBody:
    '家族の安全のため、KidGate はアプリを閉じている間も保護者がデバイスの位置を確認できるよう、バックグラウンドでの位置情報へのアクセスが必要です。',
  locationNote:
    '子どものデバイスで位置情報の共有が有効な場合、子どもの位置を表示します。',
  placeAlertsNote:
    '自宅、学校、その他の安全な場所に関する位置情報アラートを送信します。',
  mapNoLocationsEmpty: '表示できる位置情報はまだありません',
  mapUnavailable:
    '地図を表示できません。インターネット接続を確認して、もう一度お試しください。',
  historyShowMore: 'さらに{{count}}件の場所を表示',
  childSharingHint: '{{childName}}に割り当てられたすべてのデバイスに適用されます。',
  childNoCapableDevices: '{{childName}}のデバイスはどれも位置情報を報告できません。',
  childCarriedQuestion: 'どのデバイスが{{childName}}と一緒ですか？',
  childCarriedHint:
    '位置情報はそのデバイスから読み取ります。家に置いたタブレットの方がカバンの中のスマホより新しい位置を報告することがあるため、KidGateは推測しません。',
  childDevicesOnline: '{{total}} 台中 {{online}} 台がオンライン',
  childNoneOnline: 'オンラインのデバイスはありません',
  childPickCarried: '持ち歩き中',
  childPickCarriedA11y: '{{deviceName}}を{{childName}}が持ち歩くデバイスに設定',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: '登録した場所での時間',
  placeTotalsNote: '直近{{count}}日の位置履歴から。ここに保存した場所だけを数えます。',
  wizardStepAllow:
    '「許可」を選び、続いて「常に許可」を選ぶと、バックグラウンドでも更新が続きます。',
  requestNoFix:
    'この端末は位置情報を取得できませんでした。位置情報の許可がまだされていない可能性があります。',
  requestSharingOff: 'この端末の位置情報の共有はオフです。',
  requestUnsupported: 'この端末は位置情報を報告できません。',
  cardSharingOff: '位置情報の共有がオフです',
  cardPermissionOff: 'この端末では位置情報が許可されていません',
  cardNotUpdating: '位置情報の更新が止まっています',
} as const;
