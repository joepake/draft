// errors.ts (日本語)

export const errors = {
  timeRequestAlreadyResolved: 'このリクエストは別の保護者がすでに対応しました。',
  emailAlreadyInUse: 'このメールアドレスはすでに登録されています。',
  invalidEmail: 'メールアドレスが正しくありません。',
  weakPassword: 'パスワードは6文字以上で入力してください。',
  invalidEmailOrPassword: 'メールアドレスまたはパスワードが正しくありません。',
  tooManyRequests: '試行回数が多すぎます。しばらくしてからもう一度お試しください。',
  somethingWentWrong: '問題が発生しました。もう一度お試しください。',
  unableToCreateAccount: 'アカウントを作成できませんでした。もう一度お試しください。',
  unableToSignIn: 'サインインできませんでした。もう一度お試しください。',
  unableToJoinFamilyAccount:
    'ファミリーアカウントに参加できませんでした。もう一度お試しください。',
  enterEmailAddress: 'メールアドレスを入力してください。',
  unableToCreatePairingCode:
    'ペアリングコードを作成できませんでした。もう一度お試しください。',
  unableToRedeemPairingCode: 'ペアリングコードが正しくないか、有効期限が切れています。',
  unableToClaimChildPairing:
    '子どものデバイスを接続できませんでした。もう一度お試しください。',
  unableToPollChildPairing: 'ペアリング状況を確認できませんでした。',
  unableToConfirmChildPairing:
    'ペアリングを確認できませんでした。もう一度お試しください。',
  unableToRejectChildPairing:
    'ペアリングを拒否できませんでした。もう一度お試しください。',
  photoCaptureCancelled: '写真の撮影がキャンセルされました。',
  unableToOpenCamera:
    'カメラを開けませんでした。デバイスの設定でカメラへのアクセスを許可してください。',
  noPhotoCaptured: '写真が撮影されませんでした。',
  simulatorCameraHint:
    'シミュレーターでは、Simulator → Camera → Front Cameraでカメラを有効にしてからSOSをお試しください。実際の写真は実機のiPhoneでテストしてください。',
  notSignedInReopenApp:
    'サインインしていません。アプリを閉じて再度開き、もう一度お試しください。',
  accountMismatchSignOut:
    'アカウントが一致しません。一度サインアウトしてから再度サインインしてください。',
  storageUploadUnauthorized:
    '現在写真をアップロードできません。しばらくしてからもう一度お試しください。',
  storageNotSetup:
    '現在写真をアップロードできません。しばらくしてからもう一度お試しください。',
  noNetworkConnection:
    'ネットワークに接続されていません。Wi-Fiまたはモバイル通信を確認してもう一度お試しください。',
  connectionFailedTitle: '接続に失敗しました',
  connectionFailedBody:
    'KidGateに接続できませんでした。Wi-Fiまたはモバイル通信を確認し、「再接続」を選択してください。',
  reconnect: '再接続',
  unableToUploadPhoto: '写真をアップロードできませんでした。もう一度お試しください。',
  premiumSubscriptionRequired:
    'この機能にはPremiumが必要です。1日の上限、休止時間、位置情報、SOSは無料のままです。',
  trialEndedCannotJoinFamily:
    '無料体験が終了しました。他のファミリーに参加するにはPremiumに登録してください。',

  notFamilyMember:
    'このファミリーのメンバーではありません。ファミリー管理者に再度招待してもらってください。',
  familyNotCreated: 'まずファミリーを作成してから、他の保護者を招待してください。',
  childDeviceNotAllowed:
    'これは子どものデバイスのため、ファミリー設定を管理できません。',
  deviceCredentialMissing:
    'このデバイスは再接続が必要です。KidGateを閉じて再度開き、もう一度お試しください。',
  deviceNotFound: 'このデバイスはファミリーから削除されています。',
  registerParentDeviceFirst:
    'まずこのデバイスを保護者デバイスとして設定してから、もう一度お試しください。',
  pairingCodeFormat: '6文字のコードを入力してください。',
  pairingCodeUsed:
    'このコードはすでに使用されています。新しいコードを取得してください。',
  pairingCodeExpiredChild:
    'このコードの有効期限が切れています。子どもに新しいコードを作成してもらってください。',
  pairingCodeExpiredParent:
    'このコードの有効期限が切れています。他の保護者から新しいコードを取得してください。',
  pairingOwnFamily: 'これはあなた自身のファミリーです。参加する必要はありません。',
  pairingSessionNotFound: 'このペアリングリクエストは利用できません。',
  pairingAlreadyCompleted: 'このデバイスはすでにペアリングされています。',
  pairingDeclined: 'ペアリングリクエストは相手側のデバイスで拒否されました。',
  pairingNoParentWaiting:
    '確認待ちの保護者がいません。保護者のデバイスから再度ペアリングを開始してください。',
  pairingRequestExpired:
    'ペアリングリクエストの有効期限が切れました。最初からやり直してください。',
  joinRequestNotFound: '参加リクエストは利用できません。',
  joinRequestResolved: '参加リクエストはすでに処理されています。',
  joinRequestExpired:
    '参加リクエストの有効期限が切れました。新しい招待を受けてください。',
  timeRequestPendingExists: '回答待ちの時間リクエストがあります。',
  timeRequestCooldown: '次のリクエストを送信する前に少しお待ちください。',
  deviceClockOutOfRange:
    'このデバイスの日付または時刻が正しくありません。自動設定を有効にしてください。',
  locationSharingDisabled:
    'このデバイスでは位置情報の共有がオフになっています。設定で有効にしてからもう一度お試しください。',
  childDeviceNoPushToken:
    '子どものデバイスはまだリクエストを受信できません。子どものデバイスでKidGateを開き、通知を許可してください。',
  unableToRequestLocation: '現在位置情報を更新できません。もう一度お試しください。',
  unableToVerifyPurchase:
    '購入を確認できませんでした。しばらくしてからもう一度お試しください。',
  noPurchasesToRestore: 'このアカウントには復元できる購入履歴がありません。',
  noActiveSubscription: 'このアカウントに有効なサブスクリプションが見つかりません。',
  unableToRestorePurchases: '購入を復元できませんでした。もう一度お試しください。',
  alreadyInFamily: 'すでにこのファミリーに参加しています。',
  leaveFamilyBeforeJoining:
    '他のファミリーに参加する前に、現在のファミリーを退出してください。',
  deviceLimitReached:
    'このプランはお子さまの端末1台までです。追加するには登録してください。',
};
