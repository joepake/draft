// errors.ts (한국어)

export const errors = {
  timeRequestAlreadyResolved: '이 요청은 다른 보호자가 이미 처리했습니다.',
  emailAlreadyInUse: '이미 등록된 이메일입니다.',
  invalidEmail: '올바르지 않은 이메일 주소입니다.',
  weakPassword: '비밀번호는 최소 6자 이상이어야 합니다.',
  invalidEmailOrPassword: '이메일 또는 비밀번호가 올바르지 않습니다.',
  tooManyRequests: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.',
  somethingWentWrong: '문제가 발생했습니다. 다시 시도해 주세요.',
  unableToCreateAccount: '계정을 만들 수 없습니다. 다시 시도해 주세요.',
  unableToSignIn: '로그인할 수 없습니다. 다시 시도해 주세요.',
  unableToJoinFamilyAccount: '가족 계정에 참여할 수 없습니다. 다시 시도해 주세요.',
  enterEmailAddress: '이메일 주소를 입력해 주세요.',
  unableToCreatePairingCode: '페어링 코드를 생성할 수 없습니다. 다시 시도해 주세요.',
  unableToRedeemPairingCode: '페어링 코드가 올바르지 않거나 만료되었습니다.',
  unableToClaimChildPairing: '자녀 기기를 연결할 수 없습니다. 다시 시도해 주세요.',
  unableToPollChildPairing: '페어링 상태를 확인할 수 없습니다.',
  unableToConfirmChildPairing: '페어링을 승인할 수 없습니다. 다시 시도해 주세요.',
  unableToRejectChildPairing: '페어링을 거부할 수 없습니다. 다시 시도해 주세요.',
  photoCaptureCancelled: '사진 촬영이 취소되었습니다.',
  unableToOpenCamera:
    '카메라를 열 수 없습니다. 기기 설정에서 카메라 권한을 허용해 주세요.',
  noPhotoCaptured: '촬영된 사진이 없습니다.',
  simulatorCameraHint:
    '시뮬레이터에서는 먼저 Simulator → Camera → Front Camera를 활성화한 후 SOS를 다시 시도하세요. 실제 사진은 iPhone 실기기에서 테스트하세요.',
  notSignedInReopenApp:
    '로그인되어 있지 않습니다. 앱을 종료한 후 다시 열어 시도해 주세요.',
  accountMismatchSignOut:
    '계정이 일치하지 않습니다. 로그아웃한 후 다시 로그인해 주세요.',
  storageUploadUnauthorized:
    '현재 사진을 업로드할 수 없습니다. 잠시 후 다시 시도해 주세요.',
  storageNotSetup: '현재 사진을 업로드할 수 없습니다. 잠시 후 다시 시도해 주세요.',
  noNetworkConnection:
    '네트워크에 연결되어 있지 않습니다. Wi-Fi 또는 모바일 데이터를 확인한 후 다시 시도해 주세요.',
  connectionFailedTitle: '연결 실패',
  connectionFailedBody:
    'KidGate에 연결할 수 없습니다. Wi-Fi 또는 모바일 데이터를 확인한 후 “다시 연결”을 선택하세요.',
  reconnect: '다시 연결',
  unableToUploadPhoto: '사진을 업로드할 수 없습니다. 다시 시도해 주세요.',
  premiumSubscriptionRequired:
    '이 기능에는 Premium이 필요합니다. 일일 제한, 차단 시간, 위치, SOS는 계속 무료입니다.',
  trialEndedCannotJoinFamily:
    '무료 체험이 종료되었습니다. 다른 가족에 참여하려면 Premium을 구독하세요.',

  notFamilyMember:
    '더 이상 이 가족의 구성원이 아닙니다. 가족 소유자에게 다시 초대를 요청하세요.',
  familyNotCreated: '먼저 가족을 만든 후 다른 부모를 초대하세요.',
  childDeviceNotAllowed: '이 기기는 자녀용 기기이므로 가족 설정을 관리할 수 없습니다.',
  deviceCredentialMissing:
    '이 기기를 다시 연결해야 합니다. KidGate를 종료한 후 다시 열고 시도해 주세요.',
  deviceNotFound: '이 기기는 더 이상 가족에 속해 있지 않습니다.',
  registerParentDeviceFirst: '먼저 이 기기를 부모 기기로 등록한 후 다시 시도해 주세요.',
  pairingCodeFormat: '6자리 코드를 입력해 주세요.',
  pairingCodeUsed: '이미 사용된 코드입니다. 새 코드를 요청하세요.',
  pairingCodeExpiredChild:
    '코드가 만료되었습니다. 자녀에게 새 코드를 생성하도록 요청하세요.',
  pairingCodeExpiredParent:
    '코드가 만료되었습니다. 다른 부모에게 새 코드를 요청하세요.',
  pairingOwnFamily: '이미 본인의 가족입니다. 다시 참여할 필요가 없습니다.',
  pairingSessionNotFound: '이 페어링 요청은 더 이상 사용할 수 없습니다.',
  pairingAlreadyCompleted: '이 기기는 이미 페어링되었습니다.',
  pairingDeclined: '상대 기기에서 페어링 요청이 거부되었습니다.',
  pairingNoParentWaiting:
    '승인을 기다리는 부모가 없습니다. 부모 기기에서 다시 페어링을 시작하세요.',
  pairingRequestExpired: '페어링 요청이 만료되었습니다. 다시 시작해 주세요.',
  joinRequestNotFound: '이 참여 요청은 더 이상 사용할 수 없습니다.',
  joinRequestResolved: '이 참여 요청은 이미 처리되었습니다.',
  joinRequestExpired: '참여 요청이 만료되었습니다. 새 초대를 요청하세요.',
  timeRequestPendingExists: '이미 응답을 기다리는 시간 요청이 있습니다.',
  timeRequestCooldown: '새 요청을 보내기 전에 잠시 기다려 주세요.',
  deviceClockOutOfRange:
    '기기의 날짜 또는 시간이 올바르지 않습니다. 자동으로 설정해 주세요.',
  locationSharingDisabled:
    '이 기기에서 위치 공유가 꺼져 있습니다. 기기 설정에서 켠 후 다시 시도해 주세요.',
  childDeviceNoPushToken:
    '자녀 기기가 아직 요청을 받을 수 없습니다. 자녀 기기에서 KidGate를 열고 알림을 허용해 주세요.',
  unableToRequestLocation:
    '현재 위치 업데이트를 요청할 수 없습니다. 다시 시도해 주세요.',
  unableToVerifyPurchase: '구매를 확인할 수 없습니다. 잠시 후 다시 시도해 주세요.',
  noPurchasesToRestore: '이 계정에서 복원할 구매 내역이 없습니다.',
  noActiveSubscription: '이 계정에서 활성 구독을 찾을 수 없습니다.',
  unableToRestorePurchases: '현재 구매를 복원할 수 없습니다. 다시 시도해 주세요.',
  alreadyInFamily: '이미 이 가족에 참여하고 있습니다.',
  leaveFamilyBeforeJoining: '다른 가족에 참여하기 전에 현재 가족에서 먼저 나가세요.',
  deviceLimitReached: '이 요금제는 자녀 기기 1대까지입니다. 추가하려면 구독하세요.',
};
