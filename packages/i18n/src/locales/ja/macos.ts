/**
 * デスクトップエージェント自身のウィンドウ（macOSとWindows）。
 * キーごとの背景は en/macos.ts を参照。
 */
export const macos = {
  headingNow: '現在の状態',
  headingEnforce: 'このMacで適用できること',
  headingEnforceHint: '保護者が設定した内容と、このMacがどこまで守れるか。',
  headingRemovable: '解除のしやすさ',

  parentAccessBody:
    'このMacでブロックするアプリを選ぶには、保護者PINを入力してください。',
  checking: '確認中…',

  enforcing: '保護は動作中',
  enforcingYes: 'はい',
  enforcingFailed: 'いいえ — 連続{{count}}回の確認に失敗しました',

  lockState: 'デバイスのロック',
  lockStateNo: 'いいえ',
  lockStateNotChecked: 'まだ確認していません',
  lockStateParent: 'はい — 保護者がロックしました',
  lockStateSchedule: 'はい — 休止時間',
  lockStateDailyLimit: 'はい — 1日の利用制限に達しました',

  appBlocking: 'アプリのブロック',
  appBlockingBestEffort:
    'ベストエフォート — アプリは起動後に終了され、起動そのものは止められません',

  webFilterLabel: 'Webフィルター',
  webFilterUnavailable: 'このMacでは利用できません',
  notSupportedOnThisDevice: 'このデバイスでは対応していません',

  scheduleLabel: '休止時間',
  dailyLimitLabel: '1日の利用制限',
  enforcedHere: 'オン、KidGateが適用中',

  screenTimeLabel: 'スクリーンタイム',
  screenTimeAgentMeasured:
    'KidGateが計測します。KidGateが動作していない時間は計測されません。',

  batteryLabel: 'バッテリー',
  batteryReported: 'ファミリーに報告されます',
  batteryNone: 'このMacにはバッテリーがありません',

  locationLabel: '位置情報',
  locationOff: 'オフ',
  locationCoarse: 'おおよそ — GPSではなくWi-Fiによる測位',

  accountLabel: 'お子さまのアカウント',
  accountStandard: '標準',
  accountAdmin: '管理者 — このアカウントはKidGateを完全にオフにできます',

  restartLabel: '終了しても再起動します',
  restartYes: 'はい',
  restartNo: 'いいえ — 設定が完了していません',

  forceQuitLabel: 'KidGateが終了された回数',

  startAtLoginSectionTitle: '起動',
  startAtLoginSectionDescription:
    'KidGateは動作している間だけスクリーンタイムを計測し、ルールを適用します。',
  startAtLoginLabel: 'ログイン時にKidGateを開く',
  startAtLoginHintOn: 'KidGateはこのデバイスと一緒に起動し、終了されても再び開きます。',
  startAtLoginHintOff:
    '誰かがKidGateをもう一度開くまで、計測もブロックも行われません。',
  startAtLoginUnavailable:
    'このデバイスでは、KidGateを起動項目に追加できませんでした。',

  stillRunningTitle: 'KidGateは動作を続けています',
  stillRunningBodyMac: 'メニューバーのKidGateアイコンからもう一度開けます。',
  stillRunningBodyWindows: '通知領域のKidGateアイコンからもう一度開けます。',

  updateAvailableTitle: 'KidGateの新しいバージョンがあります',
  updateAvailableBody: 'KidGate {{version}} をダウンロードできます。',
  updateAction: 'アップデートを入手',

  chooseApps: 'ブロックするアプリを選択',
  chooseAppsHint:
    'このMacでブロックするアプリを選んでください。ブロックのオン・オフは保護者がスマートフォンから切り替えられます。',
  saveSelection: '保存',
  noAppsFound: 'Applicationsフォルダにアプリが見つかりませんでした。',
};
