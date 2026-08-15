export const activities = {
  title: 'アクティビティ',
  subtitleAllDevices: 'すべてのデバイスの最新イベント',
  subtitleTimelineForDevice: '{{deviceName}} のタイムライン',
  fallbackDeviceName: 'デバイス',
  liveBadge: 'ライブ',
  errorTitle: 'アクティビティを読み込めませんでした',
  tryAgain: '再試行',

  emptyTitleAll: 'まだアクティビティはありません',
  emptyTitleDevice: 'このデバイスのアクティビティはありません',
  emptyDescriptionAll:
    'お子さまのデバイスで発生したロック、ロック解除、SOSイベントがここに表示されます。',
  emptyDescriptionDevice:
    '別のデバイスを選択するか、このデバイスでロック、ロック解除、SOSイベントが発生するまでお待ちください。',

  guestEmptyTitle: 'アクティビティ',
  guestEmptyDescription:
    'お子さまのデバイスを接続すると、ロック、ロック解除、SOS、アプリに関するイベントがリアルタイムで表示されます。',
  guestSignInButton: 'ログイン',
  guestCreateAccount: '保護者アカウントを作成',
  guestSubtitle: 'ログインすると、お子さまのデバイスのアクティビティを確認できます。',

  guestPreviewHeading: '表示内容',
  guestPreviewLock: 'デバイスロック中',
  guestPreviewSos: 'SOSアラート',
  guestPreviewScreenTime: 'スクリーンタイムの更新',
  guestPreviewHint: 'サンプルです。デバイスを接続すると実際のイベントが表示されます。',

  activityTypeLocked: 'ロック',
  activityTypeUnlocked: 'ロック解除',
  activityTypeAppOpened: 'アプリを開きました',
  activityTypeAppBlocked: 'アプリをブロックしました',
  activityTypeAppInstalled: 'アプリをインストールしました',
  activityTypeAppRemoved: 'アプリをアンインストールしました',
  activityTypePlaceEnter: '場所に到着',
  activityTypePlaceExit: '場所を離れました',
  activityTypeTamper: '保護',
  activityTypeScreenTime: 'スクリーンタイム',
  activityTypeEmergency: '緊急',
  activityTypeUnknown: 'アクティビティ',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'ブロック中のアプリが開かれ、KidGateがそのアプリを終了しました。',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'お子さまのデバイスに新しいアプリがインストールされました。',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'お子さまのデバイスからアプリがアンインストールされました。',

  placeEnterTitle: '{{placeName}} に到着',
  placeEnterBody: 'お子さまのデバイスが登録済みの場所に到着しました。',

  placeExitTitle: '{{placeName}} を離れました',
  placeExitBody: 'お子さまのデバイスが登録済みの場所を離れました。',

  tamperTitle: '保護権限が無効になりました',
  tamperFallbackTitle: '保護権限が無効になりました',
  tamperFallbackBody: 'お子さまのデバイスで保護に必要な権限が無効になりました。',

  tamperOverlayTitle: '「他のアプリの上に表示」が無効になりました',
  tamperOverlayBody:
    '再度有効になるまで、ロック画面が他のアプリの上に表示されない場合があります。',

  tamperAccessibilityTitle: 'ユーザー補助が無効になりました',
  tamperAccessibilityBody:
    '再度有効になるまで、アプリのブロックや制限機能が正しく動作しない可能性があります。',
  tamperUsageAccessTitle: 'アプリ利用状況へのアクセスが無効になりました',
  tamperUsageAccessBody:
    'お子さまのデバイスでKidGateがアプリの利用状況を再び読み取れるようになるまで、アプリの利用制限や休止時間が機能しない場合があります。',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'スクリーンタイムへのアクセスが無効になりました',
  tamperScreenTimeIosBody:
    'お子さまのデバイスでスクリーンタイムへのアクセスが再び許可されるまで、アプリの利用制限や休止時間が機能しない場合があります。',
  tamperUsageAccessAndroidTitle: '使用状況へのアクセスが無効になりました',
  tamperUsageAccessAndroidBody:
    'お子さまのデバイスでKidGateの使用状況へのアクセスが再び有効になるまで、アプリの利用制限や休止時間が機能しない場合があります。',

  tamperBatteryTitle: 'バッテリーの制限なし設定が無効になりました',
  tamperBatteryBody:
    'バッテリー設定が「制限なし」に戻されるまで、システムが KidGate を停止する場合があります。',

  tamperExactAlarmTitle: 'アラームとリマインダーが無効になりました',
  tamperExactAlarmBody:
    'アラームとリマインダーを再び許可するまで、休止時間の開始や終了が遅れる場合があります。',

  tamperNotificationsTitle: '通知が無効になりました',
  tamperNotificationsBody:
    'リモート操作や保護者への通知が正常に届かない場合があります。',

  tamperLocationTitle: '位置情報が無効になりました',
  tamperLocationBody:
    '位置情報が再度許可されるまで、保護者は位置情報の更新を受信できません。',

  tamperCameraTitle: 'カメラが無効になりました',
  tamperCameraBody:
    'カメラが再度許可されるまで、SOSやチェックインの写真を送信できない場合があります。',

  tamperBackgroundRefreshTitle: 'バックグラウンド更新が無効になりました',
  tamperBackgroundRefreshBody:
    'バックグラウンド更新が再度有効になるまで、KidGate の更新頻度が低下する場合があります。',

  tamperDeviceClockTitle: '日付または時刻が変更されました',
  tamperDeviceClockBody:
    'このデバイスの時刻が正しい時刻と一致していません。スクリーンタイムとブロック時間は引き続き正しい時刻に基づいて動作します。',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: '「他のアプリの上に表示」が無効になりました。',
  tamperAccessibility: 'ユーザー補助が無効になりました。',
  tamperUsageAccess: '利用状況へのアクセスが無効になりました。',
  tamperBattery: 'バッテリーの制限なし設定が無効になりました。',
  tamperExactAlarm: 'アラームとリマインダーの権限が無効になりました。',
  tamperNotifications: '通知の権限が無効になりました。',
  tamperLocation: '位置情報の権限が無効になりました。',
  tamperCamera: 'カメラの権限が無効になりました。',
  tamperBackgroundRefresh: 'バックグラウンド更新が無効になりました。',

  filterAllDevices: 'すべてのデバイス',
  dateToday: '今日',
  dateYesterday: '昨日',

  filterByDevice: '{{label}} で絞り込む',

  openFullSosHistory: 'SOS履歴をすべて表示',

  unknownDevice: '不明なデバイス',

  basicActivityNote:
    'ロック、ロック解除、デバイスイベントは「アクティビティ」に記録されます。',
  tamperUninstallProtectionTitle: 'アンインストール防止がオフになりました',
  tamperUninstallProtectionBody: 'この端末からKidGateを削除できる状態です。',
} as const;
