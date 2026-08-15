export const protection = {
  permissionOffOnChildDevice: '이 권한은 자녀 기기에서 꺼져 있습니다.',
  permissionNotSetUpYet: '이 권한은 아직 설정되지 않았습니다.',
  permissionRestrictedByIos: '이 권한은 iOS 설정에 의해 제한되어 있습니다.',
  permissionStatusUnknown: 'KidGate가 이 권한의 상태를 읽지 못했습니다.',
  kidGateOffline: 'KidGate 오프라인',
  childAppMayBeOffline:
    '자녀 기기의 앱이 종료되었거나 삭제되었거나 오프라인일 수 있습니다.',
  statusNotUpdatedYet: '상태가 아직 업데이트되지 않음',
  openKidGateOnChildPhone: '자녀 기기에서 KidGate를 한 번 열어 주세요.',
  screenTimePermission: '스크린 타임 권한',
  screenTimeAccessOff:
    '스크린 타임 접근이 꺼져 있어 앱 차단과 제한이 작동하지 않을 수 있습니다.',
  screenTimeSetupIncomplete: '자녀 기기에서 스크린 타임 설정이 완료되지 않았습니다.',
  usageAccessPermission: '사용 정보 접근',
  usageAccessOff:
    '사용 정보 접근이 꺼져 있어 KidGate가 스크린 타임을 기록하거나 제한을 적용할 수 없습니다.',
  usageAccessSetupIncomplete: 'Android 설정에서 KidGate의 사용 정보 접근을 켜 주세요.',
  overlayPermission: '다른 앱 위에 표시',
  batteryOptimizationPermission: '배터리 제한 없음',
  batteryOptimizationOff:
    'KidGate가 보호 기능을 계속 유지할 수 있도록 배터리 제한 없음을 허용해 주세요.',
  exactAlarmPermission: '알람 및 리마인더',
  exactAlarmOff: '차단 시간이 제때 시작하도록 알람 및 리마인더를 허용하세요.',
  accessibilityPermission: '접근성(잠금 도우미)',
  accessibilityOff: '잠금 화면이 다른 앱 위에 유지되도록 KidGate의 접근성을 켜 주세요.',
  overlayOffForLock:
    '잠금 화면이 다른 앱을 덮을 수 있도록 다른 앱 위에 표시를 켜 주세요.',
  lockNotReadyTitle: '잠금 준비 안 됨',
  lockNotReadyBody:
    '다른 앱 위에 표시와 접근성이 켜질 때까지 KidGate는 이 Android 기기를 잠근 상태로 유지할 수 없습니다. 자녀 기기에서 KidGate를 열고 다음을 완료해 주세요.',
  lockNotReadyBodyIos:
    '자녀 기기에서 스크린 타임 접근이 허용될 때까지 KidGate는 이 iPhone을 잠글 수 없습니다. 해당 기기에서 KidGate를 열고 다음을 완료해 주세요.',
  locationPermission: '위치 권한',
  notificationsPermission: '알림 권한',
  backgroundUpdates: '백그라운드 업데이트',
  backgroundUpdatesRestricted: '이 기기에서는 백그라운드 업데이트가 제한되어 있습니다.',
  turnOnBackgroundUpdatesInSettings:
    'KidGate가 동기화를 유지할 수 있도록 기기 설정에서 켜 주세요.',
  inactive: '비활성',
  openKidGateToSyncProtections:
    '보호 기능이 다시 동기화되도록 이 기기에서 KidGate를 열어 주세요.',
  needsAttention: '확인 필요',
  protectionsNeedSetupAndroid: '일부 보호 기능은 자녀 기기에서 설정이 필요합니다.',
  protectionsNeedSetupIos: '일부 보호 기능은 자녀 기기에서 설정이 필요합니다.',
  protected: '보호 중',
  protectionsLookHealthy: 'KidGate 보호 기능이 정상적으로 작동하고 있습니다.',
  healthBadgeProtected: '초록 — 보호 중',
  healthBadgeWarning: '노랑 — 설정 필요',
  healthBadgeInactive: '빨강 — 자녀 기기 오프라인',
  iosFeatureSupportEvaluating: 'iOS에서 이 기능의 지원 여부를 검토하고 있습니다.',
  iosUpgradeRequiredNote:
    '이 기능에는 iOS 16 이상이 필요합니다. 자녀 기기를 설정 › 일반 › 소프트웨어 업데이트에서 업데이트하세요. 업데이트가 제공되지 않으면 이 iPad 또는 iPhone은 너무 오래되어 Apple이 지원하지 않습니다.',
  iosUpgradeActionLabel: 'iOS 16 필요',
  lockUnlockNote: '자녀가 접근을 허용하면 스크린 타임을 통해 기기를 잠급니다.',
  scheduleNote: '최대 3개의 차단 시간대가 스크린 타임을 통해 앱을 차단합니다.',
  individualAppBlockingNote: '6자리 부모 PIN을 입력한 뒤 자녀가 앱을 선택합니다.',
  tamperAlertsNote:
    '권한 변경 사항과 자녀 기기의 앱이 한동안 업데이트되지 않은 경우를 알려 줍니다.',
  appReviewRemindersNote:
    'iOS는 설치 이벤트를 제공하지 않으므로 자녀 기기에서 주기적으로 앱을 확인해 주세요.',
} as const;
