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
  backgroundRefreshHint:
    'まず設定 → 一般 → Appのバックグラウンド更新をオンにし、その後KidGateで有効にしてください。トグルがグレーアウトしている場合は、全体のAppのバックグラウンド更新の設定がまだオフになっています。',
  backgroundRefreshLowPowerHint:
    '低電力モードがオンになっています — iOSはAppのバックグラウンド更新を無効にします。低電力モードをオフにしてから、Appのバックグラウンド更新を有効にしてください。',
  overlayLabel: '他のアプリの上に表示',
  overlayHint:
    '制限が適用されているとき、KidGateが他のアプリの上にロック画面を表示できるようにします。',
  batteryOptimizationLabel: 'バッテリー無制限',
  batteryOptimizationHint:
    'KidGateがバックグラウンドで動作できるよう、システムのポップアップで「許可」を選択してください。ポップアップが表示されない場合: アプリ情報 → バッテリー → 無制限。',
  exactAlarmLabel: 'アラームとリマインダー',
  exactAlarmHint:
    '休止時間が時間どおりに始まり終わるよう、アラームとリマインダーを許可してください。',
  accessibilityLabel: 'ユーザー補助のロック機能',
  accessibilityHint:
    'ユーザー補助 → インストール済み/ダウンロード済みアプリでKidGateをオンにしてください。ロックを他のアプリの上に維持するために必要です。',
  oemSectionDescription:
    '{{brand}}のデバイスはバックグラウンドアプリをよく一時停止します。ロックと休止時間が機能し続けるよう、以下の手順を完了してください。',
  oemAutostartLabel: '自動起動を許可',
  oemAutostartHintXiaomi:
    '「自動起動」でKidGateをオンにし、再起動後も保護機能が再開されるようにしてください。',
  oemAutostartHintSamsung:
    '「デバイスケア」/「バッテリー」でKidGateがバックグラウンドで動作し続けることを許可してください。',
  oemAutostartHintOppo: '「起動アプリ」/「自動起動」でKidGateを許可してください。',
  oemAutostartHintVivo:
    '「自動起動」/「バックグラウンド高電力」でKidGateを許可してください。',
  oemAutostartHintHuawei:
    '「アプリの起動」/「起動管理」でKidGateを「手動で管理」に設定し、すべてのオプションを許可してください。',
  oemAutostartHintOther:
    'お使いのデバイスのセキュリティまたはバッテリー設定で、KidGateの自動起動を許可してください。',
  markDone: '完了',
  notificationsWizardBody:
    '通知を許可すると、時間の承認やリマインダーをすぐに受け取れます。',
} as const;
