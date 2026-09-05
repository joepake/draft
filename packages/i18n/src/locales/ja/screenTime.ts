export const screenTime = {
  turnOnScreenTime: 'スクリーンタイムをオンにする',
  finishScreenTimeSetup: 'スクリーンタイム設定を完了する',
  screenTimeNeededForControls:
    'アプリブロック・休止時間・ロックには、このデバイスでスクリーンタイムが必要です。',
  screenTimeNeededForLimits:
    'スクリーンタイムがないと、ロック・休止時間・アプリ制限を適用できません。',
  screenTimeStepOpenKidGate: 'このお子さまのデバイスでKidGateを開きます。',
  screenTimeStepAllowUsage:
    'ステータス画面で「アプリとWebサイトの使用を許可」を選択します。',
  screenTimeStepTapAllow: '表示されたら「許可」を選択します。',
  screenTimeStepReturnHereAuto:
    'ここに戻ってください — ステータスは自動で更新されます。',
  screenTimeDeniedStepOpenSettings: 'お子さまのデバイスで設定 → KidGateを開きます。',
  screenTimeDeniedStepTurnOnRestrictions: 'スクリーンタイムをオンにします。',
  screenTimeDeniedStepOpenKidGateAgain:
    'お子さまのデバイスでKidGateをもう一度開きます。',
  screenTimeDeniedStepReturnWhenReady:
    'ここに戻ってください — 設定が完了するとこのカードは消えます。',
  screenTimeSetupStep1: '下の「アプリとWebサイトの使用を許可」を選択します。',
  screenTimeSetupStep2: 'ダイアログが表示されたら「許可」を選択します。',
  screenTimeSetupStep3: 'ダイアログが閉じたらここに戻ります。',
  screenTimeDeniedStep1: '下の「アプリ設定を開く」を選択します。',
  screenTimeDeniedStep2: '{{appName}}のページで、スクリーンタイムをオンにします。',
  screenTimeDeniedStep3: '{{appName}}に戻ると、このカードは消えます。',
  screenTimeBannerTitleDenied: 'スクリーンタイムをオンにする',
  screenTimeBannerTitleRequest: 'アプリとWebサイトの使用を許可',
  screenTimeBannerBodyDenied:
    '{{appName}}は設定でスクリーンタイムをオンにする必要があります。',
  screenTimeBannerBodyRequest:
    'これにより、保護者がこのデバイスでアプリのロックや休止時間の設定を行えます。',
  usageAccessBannerTitle: '使用状況へのアクセスをオンにする',
  usageAccessBannerBody:
    'KidGateが利用時間を記録し制限を適用するには、使用状況へのアクセスが必要です。',
  usageAccessStepOpenSettings: '下の「設定を開く」を選択します。',
  usageAccessStepFindKidGate: 'KidGateを探して使用状況へのアクセスをオンにします。',
  usageAccessStepReturn: 'ここに戻ってください — ステータスは自動で更新されます。',
  noDailyLimitSet: '1日の上限は未設定',
  limitReachedStatus: '{{used}} / {{limit}} · 上限に達しました',
  minutesUsedStatus: '{{used}} / {{limit}} 使用',
  usageUpdatesHint: 'スクリーンタイムの監視中は、数分ごとに利用状況が更新されます。',
  dailyLimitNote: '1日の利用時間に上限を設けます。',
  dailyLimitMinutes: '{{limitMinutes}}分',
} as const;
