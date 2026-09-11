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
  backgroundRefreshHint: 'KidGate가 백그라운드에서도 계속 작동하도록 합니다.',
  backgroundRefreshLowPowerHint:
    '저전력 모드가 켜져 있습니다 — iOS는 백그라운드 앱 새로 고침을 비활성화합니다. 저전력 모드를 끈 다음 백그라운드 앱 새로 고침을 활성화하세요.',
  overlayLabel: '다른 앱 위에 표시',
  overlayHint:
    '제한이 적용될 때 KidGate가 다른 앱 위에 잠금 화면을 표시할 수 있도록 허용합니다.',
  batteryOptimizationLabel: '배터리 제한 없음',
  batteryOptimizationHint: 'Android가 백그라운드에서 KidGate를 멈추지 않도록 합니다.',
  exactAlarmLabel: '알람 및 리마인더',
  exactAlarmHint: '차단 시간이 제때 시작하고 끝나도록 알람 및 리마인더를 허용하세요.',
  accessibilityLabel: '접근성 잠금 도우미',
  accessibilityHint: 'KidGate 잠금이 다른 앱 위에 유지되도록 합니다.',
  oemSectionDescription:
    '{{brand}} 기기는 백그라운드 앱을 자주 일시 중지합니다. 잠금과 차단 시간이 계속 작동하도록 다음 단계를 완료하세요.',
  oemAutostartLabel: '자동 시작 허용',
  oemAutostartHintXiaomi:
    '자동 시작에서 KidGate를 켜서 재부팅 후에도 보호 기능이 다시 시작되도록 하세요.',
  oemAutostartHintSamsung:
    '배터리 → 백그라운드 사용 제한 → 절전이 적용되지 않는 앱에서 KidGate를 추가하세요. 목록에 KidGate가 없으면 이미 허용된 상태이며 이 단계는 완료된 것입니다.',
  oemAutostartHintOppo: '시작 앱 / 자동 실행에서 KidGate를 허용하세요.',
  oemAutostartHintVivo: '자동 시작 / 백그라운드 고성능에서 KidGate를 허용하세요.',
  oemAutostartHintHuawei:
    '앱 실행 / 시작 관리자에서 KidGate를 수동 관리로 설정하고 모든 옵션을 허용하세요.',
  oemAutostartHintOther:
    '기기의 보안 또는 배터리 설정에서 KidGate가 자동으로 시작되도록 허용하세요.',
  markDone: '완료',
  overlayStepAllow: 'KidGate의 “다른 앱 위에 표시”를 켜세요.',
  accessibilityStepOpenSettings:
    '아래 설정을 선택하면 KidGate의 접근성 페이지가 바로 열립니다.',
  accessibilityStepFindKidGate:
    '전체 목록이 열리면 설치된/다운로드한 앱에서 KidGate를 선택하세요.',
  accessibilityStepTurnOn: '스위치를 켠 다음 Android 확인 창에서 허용을 선택하세요.',
  accessibilityWarningNote:
    'Android는 KidGate가 사용자의 동작을 관찰할 수 있다고 경고합니다. 잠금이 다른 앱 위에 유지되는 방식이며, KidGate는 비밀번호나 개인 메시지를 읽지 않습니다.',
  uninstallProtectionWizardBody:
    '부모 PIN 없이 이 앱이 삭제되지 않도록 막습니다. Android의 자체 확인 화면이 표시됩니다.',
  notificationsWizardBody:
    '알림을 허용하면 이 기기가 시간 승인과 알림을 바로 받을 수 있습니다.',
  backgroundRefreshStepOpen: '설정에서 KidGate 페이지를 여세요.',
  backgroundRefreshStepTurnOn: 'KidGate의 백그라운드 앱 새로 고침을 켜세요.',
  backgroundRefreshStepGeneral:
    '토글이 회색이면 설정을 열고 일반, 백그라운드 앱 새로 고침 순서로 이동해 켜세요.',
  batteryStepAllow: 'Android 알림 창에서 허용을 선택하세요.',
  batteryStepAppInfo:
    '알림 창이 없으면 앱 정보를 열고 배터리로 이동한 뒤 제한 없음을 선택하세요.',
  notificationsStepAllow: '알림 창에서 허용을 선택하세요.',
  exactAlarmStepTurnOn: 'KidGate의 알람 및 리마인더를 켜세요.',
  cameraStepTurnOn: 'KidGate의 카메라를 켜세요.',
  uninstallProtectionStepConfirm: 'Android 확인 화면에서 활성화를 선택하세요.',
} as const;
