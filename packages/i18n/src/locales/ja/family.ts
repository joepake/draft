export const family = {
  title: 'ファミリー',
  connectButton: '接続',
  connectAccessibility: '子どもまたは保護者のデバイスを追加',
  addDeviceTitle: 'デバイスを追加',
  addDeviceMessage: '何を接続しますか？',
  addChildOption: '子どものデバイスを追加',
  addJoinFamilyOption: 'ファミリーに参加',
  addParentOption: '保護者を招待',
  loginWebOption: 'ウェブでログイン',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: '{{deviceName}}は誰が使いますか？',
  assignSheetBody: 'スクリーンタイムとスターは選んだお子さまに集計されます。',
  assignSheetNobody: '誰も使わない',
  assignSheetNobodyHint: '共用デバイス — 誰にも集計されません。',
  assignSheetAddAndAssign: '追加して割り当てる',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: '今すぐ{{childName}}を保護しますか？',
  quickProtectBody:
    '基本の保護をまとめてオンにします。細かい設定は後からお子さまのプロフィールで調整できます。',
  quickProtectBedtime: '就寝時の休止時間',
  quickProtectBedtimeHint: '22:00〜7:00の間、デバイスの使用をブロックします。',
  quickProtectDailyLimit: '1日のスクリーンタイム上限',
  quickProtectDailyLimitHint:
    '1日{{minutes}}分。お子さまのすべてのデバイスで合算されます。',
  quickProtectWebFilter: 'Webフィルター',
  quickProtectWebFilterHint: 'アダルトコンテンツなどの危険なカテゴリをブロックします。',
  quickProtectWebFilterPremium: 'Premium機能 — プランに含まれています。',
  quickProtectApply: '保護をオンにする',
  quickProtectSkip: '後で',
  quickProtectDone: '保護がオンになりました。設定はいつでも調整できます。',
  quickProtectPartial:
    '一部の保護を保存できませんでした。お子さまのプロフィールからもう一度お試しください。',
  pairDeviceFirstTitle: 'ペアリング済みのデバイスがありません',
  pairDeviceFirstBody:
    'まずこのお子さまのデバイスをペアリングしてください — ファミリータブでスキャンアイコンまたは「+」をタップし、「子どものデバイスを追加」を選びます。デバイスが接続されるとすぐにこの管理機能が有効になります。',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'すべてロック',
  unlockAll: 'すべてロック解除',
  lockAllA11y: '{{childName}}のデバイスをすべてロック',
  unlockAllA11y: '{{childName}}のデバイスをすべてロック解除',
  childDetailUnassignTitle: 'この子から外しますか？',
  childDetailUnassignBody:
    '{{deviceName}}は{{childName}}の集計から外れ、「未割り当て」に移動します。ペアリングと保護はそのまま続きます。',
  childDetailUnassignConfirm: '外す',
  childDetailUnassignA11y: '{{deviceName}}をこの子から外す',
  // The fold control on a group heading.
  collapseGroupA11y: '{{name}}を折りたたむ',
  expandGroupA11y: '{{name}}を展開する',
  assignDeviceCta: 'お子さまに割り当てる…',
  unassignedHint: 'これらのデバイスはまだ誰にも集計されていません。',
  unassignedHintMember:
    'これらのデバイスをお子さまに割り当てられるのはファミリー管理者のみです。',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'デバイスのない子ども',
  // Child detail screen.
  childDetailStarsWell: '今週のスター',
  childStarsA11y: '今週のスター: {{count}}',
  childDetailDevicesTitle: 'デバイス',
  childDetailSwipeHint: 'デバイスをスワイプすると割り当てを解除できます。',
  childDetailAssignMore: '別のデバイスを割り当てる…',
  childDetailAssignSheetTitle: '{{childName}}にデバイスを割り当てる',
  childDetailNoDevices:
    'デバイスはまだありません。下で割り当てるか、ファミリータブから新しいデバイスをペアリングしてください。',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'まだデバイスがありません。どのデバイスが誰のものかは、ファミリー管理者のみが決められます。',
  childDetailEditNameTitle: '名前を編集',
  childDetailColorLabel: 'カラー',
  scanButtonAccessibility: 'コードをスキャン',
  scanTitle: 'コードをスキャン',
  scanBody:
    '子どものデバイス、家族への招待、またはパソコンに表示されたコードにカメラを向けてください。',
  manualCodeLabel: '6桁のコードを入力',
  manualInstructions: '他のデバイスに表示されている6桁のコードを入力してください。',

  headerHintEmpty: 'お子さまのデバイスを管理・保護しましょう',

  headerHintGuest:
    '自由にお試しください。デバイスを接続する準備ができたらログインしてください。',

  familyCardManage: 'ファミリー・保護者・デバイスを管理',

  familyCardJoined: '保護者として参加中',

  chipDeviceCount: '{{count}}台のデバイス',
  chipDeviceCount_one: '{{count}}台のデバイス',

  chipOnlineCount: '{{count}}台オンライン',
  metaOnlineCount: '{{count}}台中{{online}}台オンライン',

  chipSosCount: '{{count}}件のSOS',

  chipCheckInCount: '{{count}}件のチェックイン',
  chipCheckInCount_one: '{{count}}件のチェックイン',

  chipRequestCount: '{{count}}件のリクエスト',
  chipRequestCount_one: '{{count}}件のリクエスト',

  chipNeedsSetupCount: '{{count}}台が設定必要',
  chipNeedsSetupCount_one: '{{count}}台が設定必要',

  chipProtectedCount: '{{count}}台保護中',

  childDevicesProtected: '{{count}}台のデバイスを保護中',

  chipHealthWarnCount: '{{count}}台が設定必要',
  chipHealthWarnCount_one: '{{count}}台が設定必要',

  chipHealthInactiveCount: '{{count}}台 24時間以上反応なし',

  chipBlockedCount: '{{count}}台ロック中',

  healthProtected: '保護中',
  buildOutdated: 'アップデートあり',
  healthNeedsSetup: '設定が必要',
  healthOffline: 'オフライン',
  devicePausedLabel: '一時停止',
  devicePausedHint: '無料プランで一時停止中 — ルールはすべて有効です',
  parkedBannerTitle: '見守りを続けるデバイスを選んでください',
  parkedBannerBody:
    'ルールはすべてのデバイスで働きます。無料プランで報告できるのは1台だけです。デバイスを選ぶか、アップグレードしてすべて残してください。',
  parkedBannerAction: 'デバイスを選ぶ',
  chooseMonitoredTitle: 'どのデバイスが報告しますか？',
  chooseMonitoredBody:
    'ルールはすべてのデバイスでそのまま働きます。選んだデバイスだけが利用時間と位置情報を送ります。変更は{{days}}日に1回できます。',
  chooseMonitoredConfirm: 'このデバイスを見守る',
  chooseMonitoredUpgrade: 'すべてのデバイスを残す — アップグレード',
  chooseMonitoredDone: '{{name}}が報告するデバイスになりました',
  monitoredCooldown: '報告するデバイスは{{days}}日に1回しか変更できません',
  monitoredChooseFailed: '報告するデバイスを変更できませんでした',

  cardWhereLabel: '位置情報',

  cardWhereAccessibility: '{{deviceName}}の位置情報を開く',

  cardTodayLabel: '今日',

  cardTodayUsed: '{{used}}使用',

  cardTodayNoData: '本日の利用データはありません',

  cardTodayAccessibility: '{{deviceName}}の利用レポートを開く',

  emptyTitle: '子どものデバイスがありません',

  emptyDescription:
    '子どものデバイスを追加して、スクリーンタイムやアプリの利用状況の管理を始めましょう。',

  setupFamilyTitle: 'ファミリーを設定',

  setupFamilyDescription:
    'ファミリーを作成してお子さまのデバイスを接続するか、他の保護者からの招待で既存のファミリーに参加できます。',

  createFamilyButton: 'ファミリーを作成',

  joinFamilyButton: 'ファミリーに参加',

  switchToJoinTitle: '別のファミリーに参加しますか？',

  switchToJoinMessage:
    '現在の空のファミリーは削除され、招待コードを使って別のファミリーに参加できます。すでに子どものデバイスが接続されている場合は、先にそのデバイスを管理してください。',

  guestEmptyTitle: 'ここからファミリーを始めましょう',

  guestEmptyDescription:
    'ログインすると、お子さまのデバイスを接続し、通知を受け取り、健全なスクリーンタイムの制限を設定できます。',

  guestConnectButton: 'ログイン',

  guestCreateAccount: '保護者アカウントを作成',

  guestBenefitLimitsTitle: 'スクリーンタイムとアプリ制限',

  guestBenefitLimitsBody: 'デバイスをロックし、毎日の利用スケジュールを設定できます。',

  guestBenefitAlertsTitle: 'SOS・アクティビティ通知',

  guestBenefitAlertsBody: '対応が必要なときにすぐ通知を受け取れます。',

  guestBenefitLocationTitle: '位置情報とチェックイン',

  guestBenefitLocationBody:
    'お子さまの現在地を確認し、安全を確認するチェックインを依頼できます。',

  stepsHeading: 'はじめに',

  step1Title: '「子どものデバイスを追加」をタップ',

  step1Description: 'ペアリング用のQRコードがこの画面に表示されます。',

  step2Title: '子どものデバイスで読み取る',

  step2Description:
    'お子さまのスマートフォンまたはタブレットに KidGate をインストールし、「このデバイスは子ども用です」を選んでQRコードをスキャンしてください。',

  connectChildButton: '子どものデバイスを接続',
  listHint: 'デバイスを左にスワイプすると削除できます',

  removeAlertTitle: 'デバイスを削除しますか？',

  removeAlertMessage:
    '{{deviceName}}はアカウントから切断されます。関連する時間リクエストと利用履歴はすべて削除されます。',

  toastRemoveFailed: 'デバイスを削除できませんでした。もう一度お試しください。',

  swipeRemoving: '削除中…',

  swipeRemove: '削除',

  deviceNotFound: 'デバイスが見つかりません',

  deviceMayHaveBeenRemoved: 'このデバイスはアカウントから削除された可能性があります。',

  deviceNotFoundError: 'デバイスが見つかりません',

  deviceRemovedAlertTitle: 'デバイスが削除されました',

  deviceRemovedAlertMessage:
    '保護者がこのデバイスをファミリーアカウントから削除しました。再接続するには、もう一度「子ども」の役割を選択してください。',

  deviceNotRegistered: 'このデバイスはまだ登録されていません。',

  defaultDeviceName: '子どものデバイス',

  fallbackDeviceName: '子どものデバイス',

  iphone: 'iPhone',

  android: 'Android',

  ipad: 'iPad',

  parentIphone: '保護者のiPhone',

  parentAndroid: '保護者のAndroid',

  childIphone: '子どものiPhone',

  parentIpad: '保護者のiPad',

  childIpad: '子どものiPad',

  childAndroid: '子どものAndroid',

  deviceFallbackName: 'デバイス',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'Windows PC',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'デバイス名を入力してください。',

  deviceNameTooLong: 'デバイス名は{{max}}文字以内で入力してください。',

  lastActiveDate: '最終アクティブ: {{date}}',

  lastActiveUnknown: '最近のアクティビティはありません',

  thisDevice: 'このデバイス',

  thisDeviceYou: 'このデバイス（あなた）',

  namedDeviceYou: '{{name}}（あなた）',

  deviceNameSaved: 'デバイス名を更新しました。',

  deviceSectionTitle: 'デバイス',

  deviceNameLabel: 'デバイス名',

  editDeviceNameTitle: 'デバイス名を変更',

  editDeviceNameSubtitle:
    'デバイス名を変更できるのはファミリーのオーナーのみです。{{maxLength}}文字まで入力できます。',

  deviceNameInputLabel: 'デバイス名',

  deviceNamePlaceholder: '例: たろうのiPhone',

  unableToUpdateDeviceName:
    'デバイス名を更新できませんでした。もう一度お試しください。',

  osLabelFallback: 'OS',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — 今すぐ確認が必要です',

  waitingForCheckIn: 'チェックイン待ち',

  timeRequestsWaiting: '{{count}}件の時間延長リクエストが承認待ち',

  timeRequestsWaiting_one: '{{count}}件の時間延長リクエストが承認待ち',

  youPausedThisDevice: 'あなたがこのデバイスをロックしました',

  lockSentWaitingForDevice: 'ロックを送信しました。デバイスの応答を待っています',

  lockNotAppliedOnDevice: 'このデバイスはロックを適用していません',

  blockedHoursActiveNow: '現在、休止時間中です',

  inactiveOpenKidGate: '非アクティブ — このデバイスでKidGateを開いてください',

  protectionNeedsSetup: '{{issueLabel}}の設定が必要です',

  dailyLimitOn: '1日の利用時間オン',

  deviceReady: '準備完了',

  sos: 'SOS',

  deviceLocked: 'デバイスロック中',

  deviceUnlocked: 'デバイスのロックを解除しました',

  parentPausedChildDevice: '{{actorName}}がこの子どものデバイスをロックしました。',

  parentRestoredChildDevice:
    '{{actorName}}がこの子どものデバイスのロックを解除しました。',

  parentFallback: '保護者',

  formerParent: '家族を離れた保護者',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: 'バッテリー {{percent}} パーセント',
  batteryChargingAccessibility: 'バッテリー {{percent}} パーセント、充電中',
  childDetailPerDevice: 'デバイスごと — どれかを選択',
  childDetailNotAvailable: '利用できません',
  childDetailNotAvailableReason: 'どのデバイスでも利用できません',
  childDetailProtectionOk: '保護済み',
  childDetailProtectionAttention: '{{count}} 台のデバイスに注意が必要です',
  childDetailProtectionSheetTitle: 'デバイスごとの保護状況',
  childDetailRemoveTitle: '{{childName}}のプロフィールを削除',
  childDetailRemovingButton: '削除中…',
  childDetailOnlineCount: '{{total}} 台中 {{online}} 台がオンライン',
  childDetailBudgetTitle: '1日の上限',
  childDetailSectionControls: 'すべてのデバイスに適用されるルール',
  childDetailSectionSafety: 'すべてのデバイスをまとめて表示',
  childDetailSectionAlerts: 'すべてのデバイスを1つの一覧に',
  childDetailScopeAll: 'すべてのデバイス',
  childDetailTodayWell: '今日の利用',
  childDetailUnassignAction: '割り当て解除',
  childDetailLimitShared: 'すべてのデバイスの合計',
} as const;
