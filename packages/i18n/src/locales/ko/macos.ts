/**
 * 데스크톱 에이전트 자체 창(macOS와 Windows).
 * 키별 배경은 en/macos.ts 참조.
 */
export const macos = {
  headingNow: '지금 상태',
  headingEnforce: '이 Mac에서 적용할 수 있는 것',
  headingEnforceHint:
    '부모님이 설정한 내용과 이 Mac이 얼마나 강하게 지킬 수 있는지입니다.',
  headingRemovable: '제거가 얼마나 쉬운지',

  parentAccessBody: '이 Mac에서 차단할 앱을 고르려면 부모 PIN을 입력하세요.',
  checking: '확인 중…',

  enforcing: '보호 실행 중',
  enforcingYes: '예',
  enforcingFailed: '아니요 — 연속 {{count}}회 확인에 실패했습니다',

  lockState: '기기 잠금',
  lockStateNo: '아니요',
  stateNotChecked: '아직 확인되지 않음',
  lockStateParent: '예 — 부모가 잠갔습니다',
  lockStateSchedule: '예 — 차단 시간',
  lockStateDailyLimit: '예 — 일일 제한 도달',

  appBlocking: '앱 차단',
  appBlockingBestEffort:
    '최선 노력 — 앱이 열린 뒤에 닫히며, 열리는 것 자체를 막지는 못합니다',

  webFilterLabel: '웹 필터',
  webFilterUnavailable: '이 Mac에서는 사용할 수 없습니다',
  notSupportedOnThisDevice: '이 기기에서는 지원되지 않습니다',
  filterAwaitingApproval: '시스템 설정에서 승인 대기 중',
  filterSwitchedOff: '시스템 설정에서 꺼져 있음',
  filterInterrupted: '문제로 중지됨 — KidGate가 다시 켭니다',
  setupFilterApprovalBody: '웹 필터링을 시작하려면 네트워크 확장에서 KidGate를 켜세요.',
  setupFilterSwitchBody:
    'KidGate의 Filter Network Content가 꺼져 있습니다. 계속 필터링하려면 다시 켜세요.',
  setupOpenSettings: '설정 열기',
  setupTitle: '이 기기 설정 마치기',
  setupRowLabel: '권한',
  setupRowHint: '이 기기에서 아직 허용해야 할 항목을 확인합니다.',
  setupStepBlockedNoPrompt:
    '거부되었고 이 기기는 다시 묻지 않습니다 — 설정 → ‘개인정보 보호 및 보안’에서 KidGate를 켜세요.',
  setupSubtitle:
    '시스템은 아래 항목마다 권한을 묻고, 지금 이 기기를 쓰는 사람만 허용할 수 있어요. 지금 끝내 두면 나중에 아이에게 묻지 않습니다.',
  setupStepFilterApprovalTitle: '웹 필터 승인',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting: '위 단계가 승인되면 시스템 설정에 나타납니다.',
  setupStepLocationBody:
    '가족이 이 기기의 위치를 볼 수 있게 합니다. ‘위치 공유’를 켜기 전까지는 아무것도 공유되지 않습니다.',
  setupStepCameraTitle: '카메라',
  setupStepCameraBody:
    '아이가 SOS를 보내거나 체크인에 답할 때 사진을 함께 보냅니다. 지금은 사진을 찍지 않습니다.',
  setupStepDone: '설정 완료 — 여기서 더 할 일은 없습니다.',
  setupStepBlocked:
    '이전에 거부했습니다. macOS는 한 번만 묻습니다 — ‘개인정보 보호 및 보안’에서 KidGate를 켜세요.',

  scheduleLabel: '차단 시간',
  dailyLimitLabel: '일일 제한',
  enforcedHere: '켜짐, KidGate가 적용 중',

  screenTimeLabel: '스크린 타임',
  screenTimeAgentMeasured:
    'KidGate가 집계합니다. KidGate가 실행되지 않는 동안의 시간은 집계되지 않습니다.',

  batteryLabel: '배터리',
  batteryReported: '가족에게 보고됩니다',
  batteryNone: '이 Mac에는 배터리가 없습니다',

  locationLabel: '위치',
  locationOff: '꺼짐',
  locationCoarse: '대략적 — GPS가 아닌 Wi-Fi 기반',

  accountLabel: '자녀 계정',
  accountStandard: '표준',
  accountAdmin: '관리자 — 이 계정은 KidGate를 완전히 끌 수 있습니다',

  restartLabel: '닫혀도 다시 실행됨',
  restartYes: '예',
  restartNo: '아니요 — 설정이 끝나지 않았습니다',

  forceQuitLabel: 'KidGate가 닫힌 횟수',

  startAtLoginSectionTitle: '시작',
  startAtLoginSectionDescription:
    'KidGate는 실행 중일 때만 스크린 타임을 측정하고 규칙을 적용합니다.',
  startAtLoginLabel: '로그인 시 KidGate 열기',
  startAtLoginHintOn: 'KidGate가 이 기기와 함께 시작되고, 닫히면 다시 열립니다.',
  startAtLoginHintOff:
    '누군가 KidGate를 다시 열 때까지 아무것도 측정되거나 차단되지 않습니다.',
  startAtLoginUnavailable: '이 기기에서 KidGate를 시작 항목에 추가할 수 없었습니다.',

  stillRunningTitle: 'KidGate가 계속 실행 중입니다',
  stillRunningBodyMac: '메뉴 막대의 KidGate 아이콘에서 다시 여세요.',
  stillRunningBodyWindows: '알림 영역의 KidGate 아이콘에서 다시 여세요.',

  updateAvailableTitle: 'KidGate 최신 버전이 있습니다',
  updateAvailableBody: 'KidGate {{version}}을(를) 내려받을 수 있습니다.',
  updateAction: '업데이트 받기',

  chooseApps: '차단할 앱 선택',
  chooseAppsHint:
    '이 Mac에서 차단할 앱을 고르세요. 부모는 휴대전화에서 차단을 켜거나 끌 수 있습니다.',
  saveSelection: '저장',
  noAppsFound: 'Applications 폴더에서 앱을 찾지 못했습니다.',
};
