export const permissions = {
  cameraPermissionRequired: '이 기능을 사용하려면 카메라 접근 권한이 필요합니다.',
  allowCameraTitle: '카메라 허용',
  cameraPermissionMessage:
    'KidGate는 SOS와 체크인에서 빠르게 사진을 보낼 수 있도록 카메라를 사용합니다.',
  allow: '허용',
  notNow: '나중에',
  cameraTurnedOffTitle: 'KidGate의 카메라가 꺼져 있습니다',
  cameraTurnedOffMessage:
    '체크인과 SOS 알림에 사진을 포함할 수 있도록 설정에서 카메라를 허용해 주세요.',
  openSettings: '설정 열기',
  notificationsLabel: '알림',
  notificationsAllowed: 'KidGate의 알림이 켜져 있습니다.',
  notificationsOpenSettings: 'KidGate의 알림을 허용하려면 기기 설정을 열어 주세요.',
  backgroundRefreshLabel: '백그라운드 앱 새로 고침',
  backgroundRefreshHint:
    '먼저 설정 → 일반 → 백그라운드 앱 새로 고침을 켠 다음, KidGate에 대해 활성화하세요. 토글이 회색으로 표시되어 있다면 전체 백그라운드 앱 새로 고침 설정이 아직 꺼져 있는 것입니다.',
  backgroundRefreshLowPowerHint:
    '저전력 모드가 켜져 있습니다 — iOS는 백그라운드 앱 새로 고침을 비활성화합니다. 저전력 모드를 끈 다음 백그라운드 앱 새로 고침을 활성화하세요.',
  overlayLabel: '다른 앱 위에 표시',
  overlayHint:
    '제한이 적용될 때 KidGate가 다른 앱 위에 잠금 화면을 표시할 수 있도록 허용합니다.',
  batteryOptimizationLabel: '배터리 제한 없음',
  batteryOptimizationHint:
    'KidGate가 백그라운드에서 실행될 수 있도록 시스템 알림에서 허용을 선택하세요. 알림이 표시되지 않으면: 앱 정보 → 배터리 → 제한 없음.',
  exactAlarmLabel: '알람 및 리마인더',
  exactAlarmHint: '차단 시간이 제때 시작하고 끝나도록 알람 및 리마인더를 허용하세요.',
  accessibilityLabel: '접근성 잠금 도우미',
  accessibilityHint:
    '접근성 → 설치된/다운로드한 앱에서 KidGate를 켜세요. 잠금이 다른 앱 위에 계속 유지되려면 필요합니다.',
  oemSectionDescription:
    '{{brand}} 기기는 백그라운드 앱을 자주 일시 중지합니다. 잠금과 차단 시간이 계속 작동하도록 다음 단계를 완료하세요.',
  oemAutostartLabel: '자동 시작 허용',
  oemAutostartHintXiaomi:
    '자동 시작에서 KidGate를 켜서 재부팅 후에도 보호 기능이 다시 시작되도록 하세요.',
  oemAutostartHintSamsung:
    '디바이스 케어 / 배터리에서 KidGate가 백그라운드에서 계속 활성 상태를 유지하도록 허용하세요.',
  oemAutostartHintOppo: '시작 앱 / 자동 실행에서 KidGate를 허용하세요.',
  oemAutostartHintVivo: '자동 시작 / 백그라운드 고성능에서 KidGate를 허용하세요.',
  oemAutostartHintHuawei:
    '앱 실행 / 시작 관리자에서 KidGate를 수동 관리로 설정하고 모든 옵션을 허용하세요.',
  oemAutostartHintOther:
    '기기의 보안 또는 배터리 설정에서 KidGate가 자동으로 시작되도록 허용하세요.',
  markDone: '완료',
  notificationsWizardBody:
    '알림을 허용하면 이 기기가 시간 승인과 알림을 바로 받을 수 있습니다.',
} as const;
