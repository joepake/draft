export const childSettings = {
  pageTitle: '설정',
  statusUnlocked: '부모 접근 허용됨',
  statusLocked: '부모 PIN 필요',
  preferencesSectionTitle: '환경설정',
  darkModeLabel: '다크 모드',
  darkModeHint: '밤에 눈이 더 편안해요',
  leaveFamilyAlertTitle: '이 가족에서 나갈까요?',
  leaveFamilyAlertMessage:
    '이 기기는 가족과의 연결이 해제돼요. 다시 참여하려면 부모의 초대로 다시 페어링하세요.',
  leaveFamily: '가족 나가기',
  uninstallProtectionSectionTitle: '삭제 방지',
  uninstallProtectionSectionDescription:
    '이 휴대폰에서 KidGate를 삭제하지 못하게 해요. Android가 한 번 권한을 요청해요.',
  uninstallProtectionLabel: '삭제 방지',
  uninstallProtectionHintOn: '켜짐. 이 설정이 꺼지면 부모님에게 알림이 가요.',
  uninstallProtectionHintOff: '꺼짐. 이 휴대폰에서 KidGate를 삭제할 수 있어요.',
  uninstallProtectionTurnedOff: '삭제 방지가 꺼졌어요.',
  uninstallProtectionFailed: '삭제 방지를 변경하지 못했어요. 다시 시도해 주세요.',
  deviceAdminExplanation:
    '부모 없이 KidGate가 삭제되는 것을 막습니다. KidGate는 다른 기기 관리자 권한을 사용하지 않습니다. 이 기기의 데이터를 지우거나 화면 잠금을 바꾸거나 카메라를 끌 수 없습니다.',
  deviceAdminDisableWarning:
    '이 설정을 끄면 이 기기에서 KidGate를 삭제할 수 있게 돼요. 부모님께 알림이 가요.',
  appPickerUnavailable: '이 기기에서는 차단된 앱 기능을 사용할 수 없어요.',
  messageSafetySectionTitle: '메시지 경고',
  messageSafetySectionDescription:
    '권한은 여기에서 허용해요. 메시지 경고는 부모 앱이나 웹 대시보드에서 켜고 꺼요.',
} as const;
