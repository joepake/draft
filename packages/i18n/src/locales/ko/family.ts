export const family = {
  title: '가족',
  connectButton: '연결',
  connectAccessibility: '자녀 또는 부모 기기 추가',
  addDeviceTitle: '기기 추가',
  addDeviceMessage: '무엇을 연결하시겠습니까?',
  addChildOption: '자녀 기기 추가',
  addJoinFamilyOption: '가족에 참여',
  addParentOption: '부모 초대',
  loginWebOption: '웹에서 로그인',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: '{{deviceName}}은(는) 누가 사용하나요?',
  assignSheetBody: '화면 사용 시간과 별은 선택한 자녀에게 집계됩니다.',
  assignSheetNobody: '없음',
  assignSheetNobodyHint: '공용 기기 — 아무에게도 집계되지 않습니다.',
  assignSheetAddAndAssign: '추가 후 지정',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: '지금 {{childName}}을(를) 보호할까요?',
  quickProtectBody:
    '기본 보호 설정을 한 번에 켭니다. 세부 설정은 나중에 자녀 프로필에서 조정할 수 있습니다.',
  quickProtectBedtime: '야간 차단 시간',
  quickProtectBedtimeHint: '밤 10시부터 오전 7시까지 기기 사용을 차단합니다.',
  quickProtectDailyLimit: '일일 스크린 타임 제한',
  quickProtectDailyLimitHint:
    '하루 {{minutes}}분, 자녀의 모든 기기에서 함께 집계됩니다.',
  quickProtectWebFilter: '웹 필터',
  quickProtectWebFilterHint: '성인 콘텐츠와 기타 위험 카테고리를 차단합니다.',
  quickProtectWebFilterPremium: 'Premium 기능 — 플랜에 포함되어 있습니다.',
  quickProtectApply: '보호 켜기',
  quickProtectSkip: '나중에',
  quickProtectDone: '보호가 켜졌습니다. 언제든지 세부 설정을 조정할 수 있습니다.',
  quickProtectPartial:
    '일부 보호 설정을 저장하지 못했습니다. 자녀 프로필에서 다시 시도해 주세요.',
  pairDeviceFirstTitle: '아직 페어링된 기기가 없습니다',
  pairDeviceFirstBody:
    '먼저 이 자녀의 기기를 페어링하세요 — 가족 탭에서 스캔 아이콘 또는 "+"를 탭한 뒤 자녀 기기 추가를 선택합니다. 기기가 연결되는 순간부터 이 관리 기능이 작동합니다.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: '모두 잠금',
  unlockAll: '모두 잠금 해제',
  lockAllA11y: '{{childName}}의 모든 기기 잠금',
  unlockAllA11y: '{{childName}}의 모든 기기 잠금 해제',
  childDetailUnassignTitle: '자녀에서 제외할까요?',
  childDetailUnassignBody:
    '{{deviceName}}은(는) 더 이상 {{childName}}에게 집계되지 않고 미지정으로 이동합니다. 페어링과 보호는 유지됩니다.',
  childDetailUnassignConfirm: '제외',
  childDetailUnassignA11y: '{{deviceName}}을(를) 이 자녀에서 제외',
  // The fold control on a group heading.
  collapseGroupA11y: '{{name}} 접기',
  expandGroupA11y: '{{name}} 펼치기',
  assignDeviceCta: '자녀에게 지정…',
  unassignedHint: '이 기기들은 아직 아무에게도 집계되지 않습니다.',
  unassignedHintMember: '이 기기들은 가족 소유자만 아이에게 배정할 수 있습니다.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: '기기가 없는 자녀',
  // Child detail screen.
  childDetailStarsWell: '이번 주 별',
  childStarsA11y: '이번 주 별: {{count}}',
  childDetailDevicesTitle: '기기',
  childDetailSwipeHint: '기기를 밀면 할당을 해제할 수 있습니다.',
  childDetailAssignMore: '다른 기기 지정…',
  childDetailAssignSheetTitle: '{{childName}}에게 기기 지정',
  childDetailNoDevices:
    '아직 기기가 없습니다. 아래에서 지정하거나 가족 탭에서 새 기기를 연결하세요.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    '아직 기기가 없습니다. 어떤 기기가 누구의 것인지는 가족 소유자만 정할 수 있습니다.',
  childDetailEditNameTitle: '이름 수정',
  childDetailColorLabel: '색상',
  scanButtonAccessibility: '코드 스캔',
  scanTitle: '코드 스캔',
  scanBody: '자녀 기기, 가족 초대 코드 또는 컴퓨터에 표시된 코드에 카메라를 비추세요.',
  manualCodeLabel: '6자리 코드 입력',
  manualInstructions: '다른 기기에 표시된 6자리 코드를 입력하세요.',

  headerHintEmpty: '자녀의 기기를 관리하고 보호하세요',

  headerHintGuest: '자유롭게 둘러보세요. 기기를 연결할 준비가 되면 로그인하세요.',

  familyCardManage: '가족, 부모 및 기기 관리',

  familyCardJoined: '부모로 참여 중',

  chipDeviceCount: '{{count}}개의 기기',
  chipDeviceCount_one: '{{count}}개의 기기',

  chipOnlineCount: '{{count}}개 온라인',
  metaOnlineCount: '{{count}}개 중 {{online}}개 온라인',

  chipSosCount: '{{count}}건의 SOS',

  chipCheckInCount: '{{count}}개의 체크인',
  chipCheckInCount_one: '{{count}}개의 체크인',

  chipRequestCount: '{{count}}개의 요청',
  chipRequestCount_one: '{{count}}개의 요청',

  chipNeedsSetupCount: '{{count}}개 설정 필요',
  chipNeedsSetupCount_one: '{{count}}개 설정 필요',

  chipProtectedCount: '{{count}}개 보호 중',

  childDevicesProtected: '기기 {{count}}대 보호 중',

  chipHealthWarnCount: '{{count}}개 설정 필요',
  chipHealthWarnCount_one: '{{count}}개 설정 필요',

  chipHealthInactiveCount: '{{count}}대 24시간 넘게 무응답',

  chipBlockedCount: '{{count}}개 차단됨',

  healthProtected: '보호 중',
  buildOutdated: '업데이트 있음',
  healthNeedsSetup: '설정 필요',
  healthOffline: '오프라인',
  devicePausedLabel: '일시중지',
  devicePausedHint: '무료 플랜에서 일시중지됨 — 모든 규칙은 계속 적용됩니다',
  parkedBannerTitle: '계속 지켜볼 기기를 선택하세요',
  parkedBannerBody:
    '규칙은 모든 기기에서 작동합니다. 무료 플랜은 한 기기에서만 보고를 받습니다 — 기기를 선택하거나, 업그레이드해 모두 유지하세요.',
  parkedBannerAction: '기기 선택',
  chooseMonitoredTitle: '어느 기기가 보고할까요?',
  chooseMonitoredBody:
    '모든 기기에서 규칙은 그대로 유지됩니다. 선택한 기기만 사용 시간과 위치를 보냅니다. {{days}}일에 한 번 변경할 수 있습니다.',
  chooseMonitoredConfirm: '이 기기 지켜보기',
  chooseMonitoredUpgrade: '모든 기기 유지 — 업그레이드',
  chooseMonitoredDone: '이제 {{name}}이(가) 보고하는 기기입니다',
  monitoredCooldown: '보고하는 기기는 {{days}}일에 한 번만 변경할 수 있습니다',
  monitoredChooseFailed: '보고하는 기기를 변경할 수 없습니다',

  cardWhereLabel: '위치',

  cardWhereAccessibility: '{{deviceName}}의 위치 열기',

  cardTodayLabel: '오늘',

  cardTodayUsed: '{{used}} 사용',

  cardTodayNoData: '오늘 사용 기록 없음',

  cardTodayAccessibility: '{{deviceName}}의 사용 보고서 열기',

  emptyTitle: '등록된 자녀 기기가 없습니다',

  emptyDescription: '자녀 기기를 추가하고 화면 사용 시간과 앱 사용을 관리하세요.',

  setupFamilyTitle: '가족 설정',

  setupFamilyDescription:
    '가족을 만들어 자녀의 기기를 연결하거나 다른 부모의 초대를 받아 기존 가족에 참여하세요.',

  createFamilyButton: '가족 만들기',

  joinFamilyButton: '가족에 참여',

  switchToJoinTitle: '다른 가족에 참여하시겠습니까?',

  switchToJoinMessage:
    '현재 비어 있는 가족이 삭제되며 초대 코드를 사용해 다른 가족에 참여할 수 있습니다. 이미 자녀 기기가 연결되어 있다면 먼저 해당 기기를 처리해야 합니다.',

  guestEmptyTitle: '여기서 가족을 시작하세요',

  guestEmptyDescription:
    '로그인하여 자녀의 기기를 연결하고, 알림을 받고, 건강한 화면 사용 시간 제한을 설정하세요.',

  guestConnectButton: '로그인',

  guestCreateAccount: '부모 계정 만들기',

  guestBenefitLimitsTitle: '화면 사용 시간 및 앱 제한',

  guestBenefitLimitsBody: '기기를 잠그고 일일 사용 일정을 설정하세요.',

  guestBenefitAlertsTitle: 'SOS 및 활동 알림',

  guestBenefitAlertsBody: '주의가 필요한 상황이 발생하면 즉시 알림을 받으세요.',

  guestBenefitLocationTitle: '위치 및 체크인',

  guestBenefitLocationBody:
    '자녀의 위치를 확인하고 안전 여부를 체크인으로 확인할 수 있습니다.',

  stepsHeading: '시작하기',

  step1Title: '“자녀 기기 추가”를 누르세요',

  step1Description: '연결용 QR 코드가 이 화면에 표시됩니다.',

  step2Title: '자녀의 기기로 스캔하세요',

  step2Description:
    '자녀의 휴대전화 또는 태블릿에 KidGate를 설치하고 “이 기기는 자녀의 기기입니다”를 선택한 후 QR 코드를 스캔하세요.',

  connectChildButton: '자녀 기기 연결',
  listHint: '기기를 왼쪽으로 밀어 삭제하세요',

  removeAlertTitle: '기기를 삭제하시겠습니까?',

  removeAlertMessage:
    '{{deviceName}}이(가) 계정에서 연결 해제됩니다. 관련된 모든 시간 요청 및 활동 기록이 삭제됩니다.',

  toastRemoveFailed: '기기를 삭제하지 못했습니다. 다시 시도해 주세요.',

  swipeRemoving: '삭제 중…',

  swipeRemove: '삭제',

  deviceNotFound: '기기를 찾을 수 없습니다',

  deviceMayHaveBeenRemoved: '이 기기가 계정에서 이미 삭제되었을 수 있습니다.',

  deviceNotFoundError: '기기를 찾을 수 없습니다',

  deviceRemovedAlertTitle: '기기가 삭제되었습니다',

  deviceRemovedAlertMessage:
    '부모가 이 기기를 가족 계정에서 삭제했습니다. 다시 연결하려면 자녀 역할을 다시 선택하세요.',

  deviceNotRegistered: '이 기기는 아직 등록되지 않았습니다.',

  defaultDeviceName: '자녀 기기',

  fallbackDeviceName: '자녀 기기',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: '부모의 iPhone',

  parentAndroid: '부모의 Android',

  childIphone: '자녀의 iPhone',

  parentIpad: '부모의 iPad',

  childIpad: '자녀의 iPad',

  childAndroid: '자녀의 Android',

  deviceFallbackName: '기기',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'Windows PC',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: '기기 이름을 입력하세요.',

  deviceNameTooLong: '기기 이름은 최대 {{max}}자까지 입력할 수 있습니다.',

  lastActiveDate: '마지막 활동: {{date}}',

  lastActiveUnknown: '최근 활동 없음',

  thisDevice: '이 기기',

  thisDeviceYou: '이 기기(나)',

  namedDeviceYou: '{{name}}(나)',

  deviceNameSaved: '기기 이름이 업데이트되었습니다.',

  deviceSectionTitle: '기기',

  deviceNameLabel: '기기 이름',

  editDeviceNameTitle: '기기 이름 변경',

  editDeviceNameSubtitle:
    '가족 소유자만 기기 이름을 변경할 수 있습니다. 최대 {{maxLength}}자까지 가능합니다.',

  deviceNameInputLabel: '기기 이름',

  deviceNamePlaceholder: '민준의 iPhone',

  unableToUpdateDeviceName: '기기 이름을 변경할 수 없습니다. 다시 시도해 주세요.',

  osLabelFallback: '운영체제',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — 즉시 확인이 필요합니다',

  waitingForCheckIn: '체크인 대기 중',

  timeRequestsWaiting: '화면 사용 시간 요청 {{count}}건 대기 중',

  timeRequestsWaiting_one: '화면 사용 시간 요청 {{count}}건 대기 중',

  youPausedThisDevice: '이 기기를 잠갔습니다',

  lockSentWaitingForDevice: '잠금을 보냈습니다 — 기기 응답 대기 중',

  lockNotAppliedOnDevice: '이 기기가 잠금을 적용하지 않았습니다',

  blockedHoursActiveNow: '차단 시간이 현재 적용 중',

  inactiveOpenKidGate: '비활성 상태 — 이 기기에서 KidGate를 열어 주세요',

  protectionNeedsSetup: '{{issueLabel}} 설정이 필요합니다',

  dailyLimitOn: '일일 사용 한도 적용 중',

  deviceReady: '준비됨',

  sos: 'SOS',

  deviceLocked: '기기 잠김',

  deviceUnlocked: '기기 잠금이 해제되었습니다',

  parentPausedChildDevice: '{{actorName}}님이 이 자녀 기기를 잠갔습니다.',

  parentRestoredChildDevice: '{{actorName}}님이 이 자녀 기기의 잠금을 해제했습니다.',

  parentFallback: '부모',

  formerParent: '가족을 떠난 보호자',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: '배터리 {{percent}} 퍼센트',
  batteryChargingAccessibility: '배터리 {{percent}} 퍼센트, 충전 중',
  childDetailPerDevice: '기기별 설정 — 기기를 선택하세요',
  childDetailNotAvailable: '사용할 수 없음',
  childDetailNotAvailableReason: '어느 기기에서도 사용할 수 없음',
  childDetailProtectionOk: '보호됨',
  childDetailProtectionAttention: '기기 {{count}}대에 주의가 필요합니다',
  childDetailProtectionSheetTitle: '기기별 보호 상태',
  childDetailRemoveTitle: '{{childName}} 프로필 삭제',
  childDetailRemovingButton: '삭제 중…',
  childDetailOnlineCount: '{{total}}대 중 {{online}}대 온라인',
  childDetailBudgetTitle: '하루 제한',
  childDetailSectionControls: '모든 기기에 적용되는 규칙',
  childDetailSectionSafety: '모든 기기를 합쳐서 표시',
  childDetailSectionAlerts: '모든 기기를 한 목록으로',
  childDetailScopeAll: '모든 기기',
  childDetailTodayWell: '오늘 사용',
  childDetailUnassignAction: '할당 해제',
  childDetailLimitShared: '모든 기기 합산',
} as const;
