export const pin = {
  title: '부모 PIN',
  subtitleSet: '탭하여 6자리 PIN 변경',
  subtitleNotSet: '자녀 기기의 설정을 보호할 6자리 PIN을 만드세요',
  statusSet: '설정됨',
  statusNotSet: '설정 안 됨',
  unlockChildPinTitle: '{{deviceName}}의 PIN 잠금 해제',
  unlockChildPinSubtitle: '이 자녀 기기의 PIN 오류 횟수 초기화',
  statusLocked: '잠김',
  toastPinUnlocked: '{{deviceName}}의 PIN 잠금이 해제되었습니다.',
  toastPinUnlockFailed: '자녀 PIN을 잠금 해제할 수 없습니다. 다시 시도해 주세요.',
  toastPinSaved:
    '부모 PIN이 저장되었습니다. 차단된 앱을 변경하기 전에 자녀 기기에서 이 PIN을 사용하세요.',
  createParentPin: '부모 PIN 만들기',
  changeParentPin: '부모 PIN 변경',
  parentPinSetupSubtitle: '6자리 PIN이 자녀 기기의 차단된 앱 설정을 보호합니다.',
  parentPinSetupHelper:
    '자녀 기기에서는 차단할 앱을 변경하기 전에 이 PIN을 입력해야 합니다.',
  parentPinMismatch: '입력한 새 PIN이 일치하지 않습니다.',
  unableToSaveParentPin: '부모 PIN을 저장할 수 없습니다. 다시 시도해 주세요.',
  onlyOwnerCanManageChildPin:
    '자녀 기기에서 사용하는 부모 PIN은 가족 소유자만 만들거나 변경할 수 있습니다.',
  parentPinRequired: '부모 PIN이 필요해요',
  enterParentPinToContinue: '계속하려면 6자리 부모 PIN을 입력하세요.',
  parentPinLockoutMessage:
    '입력 오류가 너무 많아요. KidGate를 설정한 부모님께 본인 휴대폰의 설정 → 보안에서 PIN 잠금을 해제해 달라고 부탁하세요.',
  parentPinHelperText:
    '차단된 앱을 바꾸거나 로그아웃할 수 있는 건 부모님뿐이에요 — PIN은 그래서 있는 거예요. PIN을 잊었다면 KidGate를 설정한 부모님이 본인 휴대폰의 설정 → 보안에서 재설정할 수 있어요.',
  forgotPin: 'PIN을 잊으셨나요?',
  resetPinNotice:
    '계정 소유자로서 PIN을 재설정하는 중입니다. 이제부터 자녀 기기에서는 새 PIN을 입력해야 합니다.',
  unableToVerifyParentPin: '부모 PIN이 올바르지 않아요. 다시 시도해 주세요.',
  unableToCheckParentPin: '부모 PIN을 확인할 수 없어요. 잠시 후 다시 시도해 주세요.',
  parentPinGateSubtitle: '설정을 변경하려면 6자리 부모 PIN을 입력하세요.',
  parentPinMustBeSixDigits: '부모 PIN은 정확히 6자리여야 합니다.',
  pinSixDigits: 'PIN(6자리)',
  attemptsRemaining: '{{count}}번 남았어요.',
  attemptsRemaining_one: '{{count}}번 남았어요.',
  currentPin: '현재 PIN',
  newPin: '새 PIN',
  pin: 'PIN',
  confirmPin: 'PIN 확인',
  updatePin: 'PIN 업데이트',
  savePin: 'PIN 저장',
  pinLockedTitle: 'PIN 잠김',
  pinLockedBody:
    '입력 오류가 너무 많아요. KidGate를 설정한 부모님께 본인 휴대폰의 설정 → 보안에서 PIN 잠금을 해제해 달라고 부탁하세요.',
  parentAccessRequiredTitle: '부모님 확인이 필요해요',
  parentAccessRequiredBody:
    '이 기기의 이름을 변경하거나, 차단할 앱을 선택하거나, 로그아웃하려면 PIN을 입력하세요.',
  unlockWithParentPinButton: '부모 PIN으로 잠금 해제',
  whyPinTitle: '왜 PIN이 필요한가요?',
  whyPinBody:
    '차단된 앱을 변경하거나 이 기기를 KidGate에서 로그아웃하는 것은 부모님만 해야 해요. 테마 색상 변경에는 PIN이 필요하지 않아요.',
  pinLockedToast:
    '입력 오류가 너무 많아 PIN이 잠겼어요. KidGate를 설정한 부모님께 본인 휴대폰의 설정 → 보안에서 잠금을 해제해 달라고 부탁하세요.',
  pinNotConfiguredToast:
    '아직 부모 PIN이 없어요. KidGate를 설정한 부모님이 본인 휴대폰의 설정 → 보안에서 만들 수 있어요.',
  pairedNoPin:
    '부모 PIN이 아직 없습니다. 차단된 앱을 변경하거나 기기를 로그아웃하기 전에 자녀 기기에서 이 PIN을 요청합니다.',
  enterSixDigitParentPin: '6자리 부모 PIN을 입력하세요.',
  askParentCreatePin:
    'KidGate를 설정한 부모님께 본인 휴대폰의 설정 → 보안에서 부모 PIN을 만들어 달라고 부탁하세요.',
  incorrectPinAttemptsLeft: 'PIN이 올바르지 않아요. {{count}}번 남았어요.',
  incorrectPinAttemptsLeft_one: 'PIN이 올바르지 않아요. {{count}}번 남았어요.',
  enterCurrentParentPin: '현재 부모 PIN을 입력하세요.',
  currentParentPinIncorrect:
    '현재 부모 PIN이 올바르지 않습니다. 확인 후 다시 시도하거나 “PIN을 잊으셨나요?”를 눌러 재설정하세요.',
} as const;
