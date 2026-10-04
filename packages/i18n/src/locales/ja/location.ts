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
  ringButton: 'デバイスを鳴らす',
  toastRingSentAndroid: '{{deviceName}} はリクエストを受信すると音が鳴ります。',
  toastRingSentIos:
    '{{deviceName}} はリクエストを受信するとサウンドを再生します。消音モードや集中モードがオンの場合は鳴りません。',
  toastRingFailed: 'デバイスでサウンドを再生できませんでした。もう一度お試しください。',
  ringNotificationsOff:
    '{{deviceName}} の通知がオフのため、サウンドを再生できません。そのデバイスの設定で通知をオンにしてください。',
  activityTitleRingRequested: 'サウンド再生をリクエストしました',
  activityDescriptionRingRequested:
    '{{deviceName}} を見つけるため、サウンドの再生をリクエストしました。',
  toastChildNeedsNotifications:
    '位置情報の更新リクエストを受信できるよう、お子さまのデバイスで KidGate を開き、通知を許可してください。',
  checkInBadge: 'チェックイン',
  movementHistoryTitle: '移動履歴',
  historyEmpty:
    'まだ履歴はありません。位置情報の更新またはチェックイン後に表示されます。',
  historyHighlightAccessibility: '地図上で {{place}} を強調表示',
  historyOpenMapsAccessibility: '{{place}} をマップで開く',
  locationBannerTitle: '位置情報を有効にする',
  locationBannerBody:
    '保護者が安全を確認できるよう、このデバイスの位置情報を共有してください。',
  locationBannerBodySharingOff:
    'いまは位置情報の共有がオフなので、なにも送信されません。ここで許可しておくと、あとで保護者がオンにしたときすぐに使えます。',
  allowLocationButton: '位置情報を許可',
  locationNotAllowed:
    '位置情報へのアクセスがまだ許可されていません。「設定 → KidGate → 位置情報」を開いてください（または先に位置情報サービスを有効にしてください）。「位置情報」の項目が表示されない場合は、もう一度「位置情報を許可」を選択してください。',
  locationNotAllowedAndroid:
    '位置情報がまだ許可されていません。「設定を開く」を選び、「権限」→「位置情報」で「常に許可」を選んでください。',
  locationServicesOff:
    'このデバイスでは位置情報サービスがオフになっています。「設定 → プライバシーとセキュリティ → 位置情報サービス」を開いて有効にし、その後 KidGate に戻って「位置情報を許可」を選択してください。',
  locationDeniedInSettings:
    'KidGate の位置情報へのアクセスが拒否されています。「設定 → KidGate → 位置情報」を開き、「このAppの使用中」または「常に」を選択してください。',
  foregroundOnly:
    '位置情報はKidGateを開いている間しか更新されません。「設定を開く」を選び、「位置情報」で「常に」を選んでください。',
  foregroundOnlyAndroid:
    '位置情報はKidGateを開いている間しか更新されません。「設定を開く」を選び、「権限」→「位置情報」で「常に許可」を選んでください。',
  toastLocateFailed:
    'いまは現在地を取得できません。少ししてからもう一度お試しください。',
  backgroundLocationTitle: 'アプリを閉じている間も位置情報を許可',
  backgroundLocationBody:
    '家族の安全のため、KidGate はアプリを閉じている間も保護者がデバイスの位置を確認できるよう、バックグラウンドでの位置情報へのアクセスが必要です。',
  mapNoLocationsEmpty: '表示できる位置情報はまだありません',
  mapHistoryEmpty: '次に位置情報が更新されると、移動の地点が地図に表示されます。',
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
  childPickCarriedA11y: '{{deviceName}}を{{childName}}が持ち歩くデバイスに設定',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    '「許可」を選び、続いて「常に許可」を選ぶと、バックグラウンドでも更新が続きます。',
  wizardStepAllowAndroid:
    '「アプリの使用時のみ」を選び、続けて確認されたら「常に許可」を選ぶと、バックグラウンドでも更新が続きます。',
  requestNoFix:
    'このデバイスは位置情報を取得できませんでした。まだ位置情報が許可されていない可能性があります。',
  requestIpOnly:
    'このデバイスはインターネット接続から位置を推定することしかできませんでした。デバイスの Wi-Fi をオンにして（接続する必要はありません）、もう一度お試しください。',
  requestUnsupported: 'このデバイスは位置情報を報告できません。',
  cardSharingOff: '位置情報の共有がオフです',
  cardPermissionOff: 'このデバイスでは位置情報が許可されていません',
  cardForegroundOnly:
    'このデバイスではKidGateを開いている間しか位置情報が更新されません',
  cardIpOnly:
    'このデバイスの位置を特定できません。デバイスの Wi-Fi をオンにしてください（接続する必要はありません）',
  cardNotUpdating: '位置情報の更新が止まっています',
  namesNeedPremium: '地名の表示には有料プランが必要です',
  namesNeedPremiumTrialEnded:
    '無料トライアルは終了しました。地名を詳しく見るにはアップグレードしてください。',
  namesNeedPremiumStill:
    '位置情報は引き続き記録され、保存した場所は名前が表示されます。',
  awayFromPlace: '{{place}}から{{direction}}へ{{distance}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: '北',
  compassNe: '北東',
  compassE: '東',
  compassSe: '南東',
  compassS: '南',
  compassSw: '南西',
  compassW: '西',
  compassNw: '北西',
  areaLabel: '{{area}}のどこか',
} as const;
