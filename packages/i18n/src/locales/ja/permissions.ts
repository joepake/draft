export const permissions = {
  cameraPermissionRequired: 'この機能にはカメラへのアクセスが必要です。',
  allowCameraTitle: 'カメラを許可',
  cameraPermissionMessage:
    'KidGateはSOSやチェックインで写真をすぐに送れるようにカメラを使用します。',
  allow: '許可',
  notNow: '後で',
  cameraTurnedOffTitle: 'KidGateのカメラがオフになっています',
  cameraTurnedOffMessage:
    'チェックインやSOSアラートに写真を含められるよう、設定を開いてカメラを許可してください。',
  openSettings: '設定を開く',
  notificationsLabel: '通知',
  notificationsAllowed: 'KidGateの通知はオンになっています。',
  notificationsOpenSettings:
    'KidGateの通知を許可するには、デバイスの設定を開いてください。',
  backgroundRefreshLabel: 'Appのバックグラウンド更新',
  backgroundRefreshHint: 'バックグラウンドでもKidGateが動作し続けられるようにします。',
  backgroundRefreshLowPowerHint:
    '低電力モードがオンになっています — iOSはAppのバックグラウンド更新を無効にします。低電力モードをオフにしてから、Appのバックグラウンド更新を有効にしてください。',
  overlayLabel: '他のアプリの上に表示',
  overlayHint:
    '制限が適用されているとき、KidGateが他のアプリの上にロック画面を表示できるようにします。',
  batteryOptimizationLabel: 'バッテリー無制限',
  batteryOptimizationHint:
    'AndroidがバックグラウンドでKidGateを停止しないようにします。',
  exactAlarmLabel: 'アラームとリマインダー',
  exactAlarmHint:
    '休止時間が時間どおりに始まり終わるよう、アラームとリマインダーを許可してください。',
  accessibilityLabel: 'ユーザー補助のロック機能',
  accessibilityHint: 'KidGateのロックを他のアプリの上に表示し続けます。',
  oemSectionDescription:
    '{{brand}}のデバイスはバックグラウンドアプリをよく一時停止します。ロックと休止時間が機能し続けるよう、以下の手順を完了してください。',
  oemAutostartLabel: '自動起動を許可',
  oemAutostartHintXiaomi:
    '「自動起動」でKidGateをオンにし、再起動後も保護機能が再開されるようにしてください。',
  oemAutostartHintSamsung:
    '「バッテリー」→「バックグラウンド使用中の制限」→「スリープさせないアプリ」でKidGateを追加してください。一覧にKidGateがない場合はすでに許可済みで、この手順は完了です。',
  oemAutostartHintOppo: '「起動アプリ」/「自動起動」でKidGateを許可してください。',
  oemAutostartHintVivo:
    '「自動起動」/「バックグラウンド高電力」でKidGateを許可してください。',
  oemAutostartHintHuawei:
    '「アプリの起動」/「起動管理」でKidGateを「手動で管理」に設定し、すべてのオプションを許可してください。',
  oemAutostartHintOther:
    'お使いのデバイスのセキュリティまたはバッテリー設定で、KidGateの自動起動を許可してください。',
  markDone: '完了',
  overlayStepAllow: 'KidGateの「他のアプリの上に表示」をオンにしてください。',
  accessibilityStepOpenSettings:
    '下の設定を選ぶと、KidGateのユーザー補助ページが直接開きます。',
  accessibilityStepFindKidGate:
    '一覧全体が開いた場合は、インストール済み/ダウンロード済みアプリからKidGateを選んでください。',
  accessibilityStepTurnOn:
    'スイッチをオンにし、Androidの確認画面で許可を選んでください。',
  accessibilityWarningNote:
    'Androidは、KidGateが操作を監視できると警告します。ロックを他のアプリの上に維持するためのものです。KidGateはパスワードや個人的なメッセージを読み取りません。',
  uninstallProtectionWizardBody:
    '保護者PINなしでこのアプリがアンインストールされるのを防ぎます。Androidの確認画面が表示されます。',
  notificationsWizardBody:
    '通知を許可すると、時間の承認やリマインダーをすぐに受け取れます。',
  backgroundRefreshStepOpen: '設定でKidGateのページを開きます。',
  backgroundRefreshStepTurnOn:
    'KidGateの「Appのバックグラウンド更新」をオンにしてください。',
  backgroundRefreshStepGeneral:
    'スイッチがグレーの場合は、設定を開き、「一般」、「Appのバックグラウンド更新」の順に進んでオンにしてください。',
  batteryStepAllow: 'Androidの確認画面で「許可」を選んでください。',
  batteryStepAppInfo:
    '画面が表示されない場合は、アプリ情報を開き、「バッテリー」、「無制限」の順に選んでください。',
  notificationsStepAllow: '表示された確認画面で「許可」を選びます。',
  exactAlarmStepTurnOn: 'KidGateの「アラームとリマインダー」をオンにします。',
  cameraStepTurnOn: 'KidGateの「カメラ」をオンにします。',
  uninstallProtectionStepConfirm: 'Androidの確認画面で「有効にする」を選びます。',
} as const;
