export const protection = {
  permissionOffOnChildDevice: 'この権限は子どものデバイスでオフになっています。',
  permissionNotSetUpYet: 'この権限はまだ設定されていません。',
  permissionRestrictedByIos: 'この権限はiOSの設定により制限されています。',
  permissionStatusUnknown: 'KidGateはこの権限の状態を読み取れませんでした。',
  kidGateOffline: 'KidGateがオフライン',
  childAppMayBeOffline:
    '子どものデバイスのアプリが終了・削除されているか、オフラインの可能性があります。',
  statusNotUpdatedYet: 'ステータス未更新',
  openKidGateOnChildPhone: '子どものデバイスで一度KidGateを開いてください。',
  screenTimePermission: 'スクリーンタイム権限',
  screenTimeAccessOff:
    'スクリーンタイムへのアクセスがオフのため、アプリのブロックや制限が機能しなくなる可能性があります。',
  screenTimeSetupIncomplete:
    '子どものデバイスでスクリーンタイムの設定が完了していません。',
  usageAccessPermission: '使用状況へのアクセス',
  usageAccessOff:
    '使用状況へのアクセスがオフのため、KidGateはスクリーンタイムの記録や制限の適用ができません。',
  usageAccessSetupIncomplete:
    'Androidの設定でKidGateの使用状況へのアクセスをオンにしてください。',
  overlayPermission: '他のアプリの上に表示',
  batteryOptimizationPermission: 'バッテリー無制限',
  batteryOptimizationOff:
    'KidGateが保護を維持できるよう、バッテリーの無制限使用を許可してください。',
  exactAlarmPermission: 'アラームとリマインダー',
  exactAlarmOff:
    '休止時間が時間どおりに始まるよう、アラームとリマインダーを許可してください。',
  accessibilityPermission: 'ユーザー補助（ロック機能）',
  accessibilityOff:
    'ロックが他のアプリの上に表示され続けるよう、KidGateのユーザー補助をオンにしてください。',
  overlayOffForLock:
    'ロック画面が他のアプリを覆えるよう、「他のアプリの上に表示」をオンにしてください。',
  lockNotReadyTitle: 'ロックの準備ができていません',
  lockNotReadyBody:
    '「他のアプリの上に表示」とユーザー補助が有効になるまで、KidGateはこのAndroidデバイスをロックし続けられません。子どものデバイスでKidGateを開き、次の設定を完了してください。',
  lockNotReadyBodyIos:
    '子どものデバイスでスクリーンタイムのアクセスが許可されるまで、KidGateはこのiPhoneをロックできません。そのデバイスでKidGateを開き、次の設定を完了してください。',
  locationPermission: '位置情報の権限',
  notificationsPermission: '通知の権限',
  backgroundUpdates: 'バックグラウンド更新',
  backgroundUpdatesRestricted:
    'このデバイスではバックグラウンド更新が制限されています。',
  turnOnBackgroundUpdatesInSettings:
    'KidGateが同期を維持できるよう、デバイスの設定でオンにしてください。',
  inactive: '非アクティブ',
  openKidGateToSyncProtections:
    '保護を再び同期できるよう、このデバイスでKidGateを開いてください。',
  needsAttention: '要確認',
  protectionsNeedSetupAndroid: '一部の保護機能は子どものデバイスでの設定が必要です。',
  protectionsNeedSetupIos: '一部の保護機能は子どものデバイスでの設定が必要です。',
  protected: '保護中',
  protectionsLookHealthy: 'KidGateの保護は正常に機能しています。',
  healthBadgeProtected: '緑 — 保護中',
  healthBadgeWarning: '黄 — 設定が必要',
  healthBadgeInactive: '赤 — 子どものデバイスがオフライン',
  iosFeatureSupportEvaluating: 'iOSでのこの機能のサポートは現在評価中です。',
  iosUpgradeRequiredNote:
    'これにはiOS 16以降が必要です。お子さまのデバイスを「設定 › 一般 › ソフトウェアアップデート」から更新してください。アップデートが表示されない場合、このiPadまたはiPhoneは古すぎるためAppleのサポート対象外です。',
  iosUpgradeActionLabel: 'iOS 16が必要',
  lockUnlockNote:
    'お子さまがアクセスを許可すると、スクリーンタイムを通じてデバイスをロックします。',
  scheduleNote:
    '最大3つの休止時間帯で、スクリーンタイムを通じてアプリをブロックします。',
  individualAppBlockingNote:
    '6桁の保護者PINを入力した後、お子さまがアプリを選択します。',
  tamperAlertsNote:
    '権限の変更や、子どものデバイスのアプリがしばらく更新されていない場合に通知します。',
  appReviewRemindersNote:
    'iOSはインストールイベントを提供しないため、子どものデバイスで定期的にアプリを確認してください。',
} as const;
