export const pin = {
  title: '保護者PIN',
  subtitleSet: 'タップして6桁のPINを変更',
  subtitleNotSet: '子どものデバイスの設定を保護する6桁のPINを作成してください',
  statusSet: '設定済み',
  statusNotSet: '未設定',
  unlockChildPinTitle: '{{deviceName}}のPINを解除',
  unlockChildPinSubtitle: 'この子どものデバイスのPIN入力ミス回数をリセット',
  statusLocked: 'ロック中',
  toastPinUnlocked: '{{deviceName}}のPINを解除しました。',
  toastPinUnlockFailed: '子どものPINを解除できませんでした。もう一度お試しください。',
  toastPinSaved:
    '保護者PINを保存しました。ブロックされたアプリを変更する前に、子どものデバイスでこのPINを使用してください。',
  createParentPin: '保護者PINを作成',
  changeParentPin: '保護者PINを変更',
  parentPinSetupSubtitle:
    '6桁のPINが、子どものデバイスでのブロックされたアプリの設定を保護します。',
  parentPinSetupHelper:
    '子どものデバイスでは、ブロックするアプリを変更する前にこのPINの入力が求められます。',
  parentPinMismatch: '入力した新しいPINが一致しません。',
  unableToSaveParentPin: '保護者PINを保存できませんでした。もう一度お試しください。',
  onlyOwnerCanManageChildPin:
    '子どものデバイスで使用する保護者PINを作成・変更できるのはファミリー管理者のみです。',
  parentPinRequired: '保護者PINが必要です',
  enterParentPinToContinue: '続けるには6桁の保護者PINを入力してください。',
  parentPinLockoutMessage:
    '入力ミスが多すぎます。保護者に「保護者設定」からPINを解除してもらってください。',
  parentPinHelperText:
    'ブロックするアプリの変更やサインアウトができるのは保護者だけです — それがPINの役割です。忘れてしまった場合は、保護者がどのデバイスからでもKidGateにサインインし、「保護者設定」でリセットできます。',
  forgotPin: 'PINをお忘れですか？',
  resetPinNotice:
    'アカウント所有者としてPINをリセットしています。これ以降、子どものデバイスでは新しいPINの入力が求められます。',
  unableToVerifyParentPin: '保護者PINが正しくありません。もう一度お試しください。',
  parentPinGateSubtitle: '設定を変更するには6桁の保護者PINを入力してください。',
  parentPinMustBeSixDigits: '保護者PINはちょうど6桁である必要があります。',
  pinSixDigits: 'PIN（6桁）',
  attemptsRemaining: '残り{{count}}回。',
  attemptsRemaining_one: '残り{{count}}回。',
  currentPin: '現在のPIN',
  newPin: '新しいPIN',
  pin: 'PIN',
  confirmPin: 'PINを確認',
  updatePin: 'PINを更新',
  savePin: 'PINを保存',
  pinLockedTitle: 'PINがロックされています',
  pinLockedBody:
    '入力ミスが多すぎます。保護者に「保護者設定」からPINを解除してもらってください。',
  parentAccessRequiredTitle: '保護者のアクセスが必要です',
  parentAccessRequiredBody:
    'このデバイスの名前を変更したり、ブロックするアプリを選択したり、サインアウトするにはPINを入力してください。',
  unlockWithParentPinButton: '保護者PINで解除',
  whyPinTitle: 'なぜPINが必要？',
  whyPinBody:
    'ブロックするアプリの変更やこのデバイスのKidGateからのサインアウトは、保護者だけが行うべき操作です。テーマカラーの変更にPINは不要です。',
  pinLockedToast:
    '入力ミスが多すぎたため、PINがロックされました。保護者に「保護者設定」から解除してもらってください。',
  pinNotConfiguredToast:
    'まず保護者のデバイスの「保護者設定」で6桁のPINを作成してください。',
  enterSixDigitParentPin: '6桁の保護者PINを入力してください。',
  askParentCreatePin:
    'まず保護者に「保護者設定」で保護者PINを作成してもらってください。',
  incorrectPinAttemptsLeft: 'PINが正しくありません。残り{{count}}回。',
  incorrectPinAttemptsLeft_one: 'PINが正しくありません。残り{{count}}回。',
  enterCurrentParentPin: '現在の保護者PINを入力してください。',
  currentParentPinIncorrect: '現在の保護者PINが正しくありません。',
} as const;
