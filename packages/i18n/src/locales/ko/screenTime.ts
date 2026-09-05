export const screenTime = {
  turnOnScreenTime: '스크린 타임 켜기',
  finishScreenTimeSetup: '스크린 타임 설정 마치기',
  screenTimeNeededForControls:
    '앱 차단, 차단 시간대, 잠금에는 이 기기의 스크린 타임 권한이 필요합니다.',
  screenTimeNeededForLimits:
    '스크린 타임이 없으면 잠금, 차단 시간대, 앱 제한을 적용할 수 없습니다.',
  screenTimeStepOpenKidGate: '이 자녀 기기에서 KidGate를 엽니다.',
  screenTimeStepAllowUsage: '상태 화면에서 앱 및 웹 사이트 사용 허용을 선택합니다.',
  screenTimeStepTapAllow: '메시지가 표시되면 허용을 선택합니다.',
  screenTimeStepReturnHereAuto: '여기로 돌아오세요 — 상태가 자동으로 업데이트됩니다.',
  screenTimeDeniedStepOpenSettings: '자녀 기기에서 설정 → KidGate를 엽니다.',
  screenTimeDeniedStepTurnOnRestrictions: '스크린 타임을 켭니다.',
  screenTimeDeniedStepOpenKidGateAgain: '자녀 기기에서 KidGate를 다시 엽니다.',
  screenTimeDeniedStepReturnWhenReady:
    '여기로 돌아오세요 — 설정이 끝나면 이 카드가 사라집니다.',
  screenTimeSetupStep1: '아래에서 앱 및 웹 사이트 사용 허용을 선택합니다.',
  screenTimeSetupStep2: '앱 및 웹 사이트 사용 대화 상자에서 허용을 선택합니다.',
  screenTimeSetupStep3: '대화 상자가 닫히면 여기로 돌아옵니다.',
  screenTimeDeniedStep1: '아래에서 앱 설정 열기를 선택합니다.',
  screenTimeDeniedStep2: '{{appName}} 페이지에서 스크린 타임을 켭니다.',
  screenTimeDeniedStep3: '{{appName}}(으)로 돌아오면 이 카드가 사라집니다.',
  screenTimeBannerTitleDenied: '스크린 타임 켜기',
  screenTimeBannerTitleRequest: '앱 및 웹 사이트 사용 허용',
  screenTimeBannerBodyDenied:
    '{{appName}}에는 설정에서 스크린 타임이 켜져 있어야 합니다.',
  screenTimeBannerBodyRequest:
    '이렇게 하면 부모님이 이 기기에서 앱을 잠그고 차단 시간대를 설정할 수 있습니다.',
  usageAccessBannerTitle: '사용 정보 접근 켜기',
  usageAccessBannerBody:
    'KidGate가 스크린 타임을 추적하고 제한을 적용하려면 사용 정보 접근이 필요합니다.',
  usageAccessStepOpenSettings: '아래에서 설정 열기를 선택합니다.',
  usageAccessStepFindKidGate: 'KidGate를 찾아 사용 정보 접근을 켭니다.',
  usageAccessStepReturn: '여기로 돌아오세요 — 상태가 자동으로 업데이트됩니다.',
  noDailyLimitSet: '일일 제한이 없습니다',
  limitReachedStatus: '{{used}} / {{limit}} · 제한 도달',
  minutesUsedStatus: '{{used}} / {{limit}} 사용',
  usageUpdatesHint:
    '스크린 타임 모니터링이 활성화된 동안 사용량은 몇 분마다 업데이트됩니다.',
  dailyLimitNote: '하루 스크린 타임 상한을 적용합니다.',
  dailyLimitMinutes: '{{limitMinutes}}분',
} as const;
