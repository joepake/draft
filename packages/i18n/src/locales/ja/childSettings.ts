export const childSettings = {
  pageTitle: '設定',
  statusUnlocked: '保護者アクセス有効',
  statusLocked: '保護者PINが必要',
  preferencesSectionTitle: '表示設定',
  darkModeLabel: 'ダークモード',
  darkModeHint: '夜間でも目にやさしい表示',
  leaveFamilyAlertTitle: 'このファミリーから退出しますか？',
  leaveFamilyAlertMessage:
    'このデバイスはファミリーから切断されます。再参加するには保護者の招待でもう一度ペアリングしてください。',
  leaveFamily: 'ファミリーから退出',
  uninstallProtectionSectionTitle: 'アンインストール防止',
  uninstallProtectionSectionDescription:
    'このデバイスからKidGateを削除できないようにします。Androidが一度だけ許可を求めます。',
  uninstallProtectionLabel: 'アンインストールを防ぐ',
  uninstallProtectionHintOn: 'オン。これがオフにされると保護者に通知されます。',
  uninstallProtectionHintOff: 'オフ。このデバイスからKidGateを削除できます。',
  uninstallProtectionTurnedOff: 'アンインストール防止はオフです。',
  uninstallProtectionFailed:
    'アンインストール防止を変更できませんでした。もう一度お試しください。',
  deviceAdminExplanation:
    '保護者なしでKidGateがアンインストールされるのを防ぎます。KidGateはこれ以外のデバイス管理権限を使いません。このデバイスの消去、画面ロックの変更、カメラの無効化はできません。',
  deviceAdminDisableWarning:
    'これをオフにすると、このデバイスからKidGateをアンインストールできるようになります。保護者に通知されます。',
  appPickerUnavailable:
    'このデバイスでは「ブロックされたアプリ」機能を利用できません。',
  messageSafetySectionTitle: 'メッセージ警告',
  messageSafetySectionDescription:
    '許可はここで行います。メッセージ警告のオン・オフは、保護者用アプリまたはWebダッシュボードで切り替えます。',
} as const;
