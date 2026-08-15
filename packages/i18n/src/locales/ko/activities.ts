export const activities = {
  title: '활동',
  subtitleAllDevices: '모든 기기의 최신 이벤트',
  subtitleTimelineForDevice: '{{deviceName}} 활동 기록',
  fallbackDeviceName: '기기',
  liveBadge: '실시간',
  errorTitle: '활동을 불러올 수 없습니다',
  tryAgain: '다시 시도',

  emptyTitleAll: '아직 활동이 없습니다',
  emptyTitleDevice: '이 기기의 활동이 없습니다',
  emptyDescriptionAll: '자녀 기기의 잠금, 잠금 해제 및 SOS 이벤트가 여기에 표시됩니다.',
  emptyDescriptionDevice:
    '다른 기기를 선택하거나 이 기기에서 잠금, 잠금 해제 및 SOS 이벤트가 발생할 때까지 기다려 주세요.',

  guestEmptyTitle: '활동',
  guestEmptyDescription:
    '자녀 기기를 연결하면 잠금, 잠금 해제, SOS 및 앱 이벤트가 실시간으로 여기에 표시됩니다.',
  guestSignInButton: '로그인',
  guestCreateAccount: '부모 계정 만들기',
  guestSubtitle: '로그인하여 자녀 기기의 활동을 확인하세요.',

  guestPreviewHeading: '표시되는 내용',
  guestPreviewLock: '기기 잠김',
  guestPreviewSos: 'SOS 알림',
  guestPreviewScreenTime: '스크린 타임 업데이트',
  guestPreviewHint: '예시입니다. 기기를 연결하면 실제 이벤트가 표시됩니다.',

  activityTypeLocked: '잠금',
  activityTypeUnlocked: '잠금 해제',
  activityTypeAppOpened: '앱 실행',
  activityTypeAppBlocked: '앱 차단',
  activityTypeAppInstalled: '앱 설치',
  activityTypeAppRemoved: '앱 삭제',
  activityTypePlaceEnter: '장소 도착',
  activityTypePlaceExit: '장소 이탈',
  activityTypeTamper: '보호',
  activityTypeScreenTime: '스크린 타임',
  activityTypeEmergency: '긴급',
  activityTypeUnknown: '활동',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: '차단된 앱이 열려 KidGate가 닫았습니다.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: '자녀의 기기에 새로운 앱이 설치되었습니다.',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: '자녀의 기기에서 앱이 삭제되었습니다.',

  placeEnterTitle: '{{placeName}} 도착',
  placeEnterBody: '자녀의 기기가 저장된 장소에 도착했습니다.',

  placeExitTitle: '{{placeName}} 출발',
  placeExitBody: '자녀의 기기가 저장된 장소를 떠났습니다.',

  tamperTitle: '보호 권한이 비활성화되었습니다',
  tamperFallbackTitle: '보호 권한이 비활성화되었습니다',
  tamperFallbackBody: '자녀의 기기에서 보호에 필요한 권한이 비활성화되었습니다.',

  tamperOverlayTitle: '“다른 앱 위에 표시” 권한이 비활성화되었습니다',
  tamperOverlayBody:
    '이 권한이 다시 활성화될 때까지 잠금 화면이 다른 앱 위에 표시되지 않을 수 있습니다.',

  tamperAccessibilityTitle: '접근성 권한이 비활성화되었습니다',
  tamperAccessibilityBody:
    '접근성 권한이 다시 활성화될 때까지 앱 차단 및 보호 기능이 정상적으로 작동하지 않을 수 있습니다.',
  tamperUsageAccessTitle: '앱 사용 정보 접근 권한이 꺼졌습니다',
  tamperUsageAccessBody:
    '자녀 기기에서 KidGate가 앱 사용 정보를 다시 읽을 수 있을 때까지 앱 사용 제한과 차단 시간이 작동하지 않을 수 있습니다.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: '스크린 타임 접근 권한이 꺼졌습니다',
  tamperScreenTimeIosBody:
    '자녀 기기에서 스크린 타임 접근 권한이 다시 허용될 때까지 앱 사용 제한과 차단 시간이 작동하지 않을 수 있습니다.',
  tamperUsageAccessAndroidTitle: '사용 정보 접근 권한이 꺼졌습니다',
  tamperUsageAccessAndroidBody:
    '자녀 기기에서 KidGate의 사용 정보 접근 권한이 다시 켜질 때까지 앱 사용 제한과 차단 시간이 작동하지 않을 수 있습니다.',

  tamperBatteryTitle: '배터리 무제한 사용이 비활성화되었습니다',
  tamperBatteryBody:
    '배터리 설정이 “무제한”으로 다시 변경될 때까지 시스템이 KidGate를 일시 중지할 수 있습니다.',

  tamperExactAlarmTitle: '알람 및 리마인더가 꺼졌습니다',
  tamperExactAlarmBody:
    '알람 및 리마인더를 다시 허용할 때까지 차단 시간이 늦게 시작하거나 끝날 수 있습니다.',

  tamperNotificationsTitle: '알림이 비활성화되었습니다',
  tamperNotificationsBody:
    '원격 명령 및 보호자 알림이 이 기기에 정상적으로 전달되지 않을 수 있습니다.',

  tamperLocationTitle: '위치 정보가 비활성화되었습니다',
  tamperLocationBody:
    '위치 권한이 다시 허용될 때까지 보호자는 위치 업데이트를 받을 수 없습니다.',

  tamperCameraTitle: '카메라가 비활성화되었습니다',
  tamperCameraBody:
    '카메라 권한이 다시 허용될 때까지 SOS 및 체크인 사진을 전송하지 못할 수 있습니다.',

  tamperBackgroundRefreshTitle: '백그라운드 앱 새로 고침이 비활성화되었습니다',
  tamperBackgroundRefreshBody:
    '백그라운드 앱 새로 고침이 다시 활성화될 때까지 KidGate가 백그라운드에서 덜 자주 업데이트될 수 있습니다.',

  tamperDeviceClockTitle: '날짜 또는 시간이 변경되었습니다',
  tamperDeviceClockBody:
    '이 기기의 시간이 실제 시간과 일치하지 않습니다. 스크린 타임과 차단 시간은 계속 올바른 시간을 기준으로 동작합니다.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: '“다른 앱 위에 표시” 권한이 비활성화되었습니다.',
  tamperAccessibility: '접근성 서비스가 비활성화되었습니다.',
  tamperUsageAccess: '사용 정보 접근 권한이 비활성화되었습니다.',
  tamperBattery: '배터리 무제한 사용이 비활성화되었습니다.',
  tamperExactAlarm: '알람 및 리마인더 권한이 꺼졌습니다.',
  tamperNotifications: '알림 권한이 비활성화되었습니다.',
  tamperLocation: '위치 권한이 비활성화되었습니다.',
  tamperCamera: '카메라 권한이 비활성화되었습니다.',
  tamperBackgroundRefresh: '백그라운드 앱 새로 고침이 비활성화되었습니다.',

  filterAllDevices: '모든 기기',
  dateToday: '오늘',
  dateYesterday: '어제',

  filterByDevice: '{{label}}별 보기',

  openFullSosHistory: '전체 SOS 기록 보기',

  unknownDevice: '알 수 없는 기기',

  basicActivityNote: '잠금, 잠금 해제 및 기기 이벤트는 활동에 기록됩니다.',
  tamperUninstallProtectionTitle: '삭제 방지가 꺼졌습니다',
  tamperUninstallProtectionBody: '이제 이 휴대폰에서 KidGate를 삭제할 수 있습니다.',
} as const;
