export const report = {
  title: '주간 리포트',
  subtitle: 'KidGate가 이번 주에 확인한 내용입니다.',
  weekOf: '{{week}}주 차',
  range: '{{from}} – {{to}}',
  triggerScheduled: '일요일에 발송',
  triggerManual: '직접 생성',

  statScreenTime: '스크린 타임',
  statDailyAverage: '하루 평균',
  statBlockedApps: '차단된 앱',
  statBlockedWebVisits: '필터된 사이트',

  trendUp: '지난주보다 {{value}} 많음',
  trendDown: '지난주보다 {{value}} 적음',
  trendFlat: '지난주와 비슷함',
  trendFirstWeek: '측정된 첫 주',
  barThisWeek: '이번 주',
  barLastWeek: '지난주',

  highlights: '알아 둘 점',
  sevAttention: '살펴보기',
  sevNotable: '눈에 띔',
  sevInfo: '참고',

  findingUsageUp:
    '스크린 타임이 {{percent}}% 늘었습니다. 지난주보다 {{delta}} 많습니다.',
  findingUsageDown:
    '스크린 타임이 {{percent}}% 줄었습니다. 지난주보다 {{delta}} 적습니다.',
  findingUsageFlat: '스크린 타임은 {{total}}로 유지됐습니다.',
  findingLateNight: '밤 11시 이후가 {{count}}번, 가장 늦은 날은 {{time}}까지였습니다.',
  findingNewTopApp:
    '{{app}}은(는) 이번 주에 새로 등장해 벌써 {{duration}}을 차지했습니다.',
  findingAppSurge:
    '{{app}}이(가) 지난주보다 {{delta}} 늘어 모두 {{duration}}이 됐습니다.',
  findingLimitHit: '하루 {{limit}} 한도에 {{count}}일 도달했습니다.',
  findingBlockedApps:
    '차단된 앱 실행 {{count}}건, 지난주에는 {{previous}}건이었습니다.',
  findingBlockedWeb: '필터된 사이트 {{count}}건, 지난주에는 {{previous}}건이었습니다.',
  findingQuietWeek: '조용한 한 주였습니다. 모두 {{total}}, 손댈 일은 없었습니다.',

  // 보고서의 긍정적인 절반. 무슨 일이 있었는지와 그 근거가 되는 숫자만
  // 적습니다. 칭찬은 하지 않습니다 — `docs/COPY_STYLE.md`는 아첨을 경보만큼
  // 금지합니다.
  findingLimitRespected:
    '하루 사용 시간 제한({{limit}})이 {{count}}일 내내 지켜졌습니다.',
  findingLateNightGone:
    '이번 주에는 심야 사용이 없었습니다. 지난주에는 {{count}}일 있었습니다.',
  findingBlockedAppsDown:
    '차단된 앱 실행 {{count}}회로, 지난주 {{previous}}회에서 줄었습니다.',
  findingBlockedWebDown:
    '필터링된 사이트 {{count}}개로, 지난주 {{previous}}개에서 줄었습니다.',
  findingLearningTime: '학습 앱에 {{duration}}, 대부분 {{app}}입니다.',
  findingTasksDone: '과제 {{count}}개를 완료해 {{bonus}}를 받았습니다.',
  findingAskedFirst: '규칙을 우회하지 않고 {{count}}번 요청을 보냈습니다.',
  findingCheckedIn: '{{asked}}번의 체크인에 모두 응답했습니다.',

  narrativeTitle: '한 문장으로',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: '해볼 만한 한 가지',
  actionDailyLimit: '일일 제한을 {{duration}}으로 설정',
  actionDailyLimitWhy: '지난주 하루 평균이 이 정도였습니다.',
  actionBlockedHours: '차단 시간 설정',
  actionBlockedHoursLateNight: '심야 시간대 차단',
  actionOnDevice: '{{device}}에서',
  finePrint:
    '수치는 {{from}}부터 {{to}}까지, 가족의 모든 기기를 합한 것입니다. 스크린 타임은 기기가 보고한 값이며, 측정하지 못한 시간은 어느 합계에도 들어 있지 않습니다.',

  generate: '이번 주 리포트 작성',
  generating: '작성 중…',
  share: '공유',
  copySummary: '요약 복사',
  copied: '요약을 복사했습니다.',
  shareFailed: '공유 메뉴를 열지 못했습니다.',

  emptyTitle: '아직 리포트가 없습니다',
  emptyBody:
    '리포트는 매주 일요일 저녁에 도착합니다. 지금 이번 주 리포트를 작성할 수도 있습니다. 최근 7일이 대상입니다.',
  noUsage:
    '지난 2주 동안 기록된 스크린 타임이 없어 아직 알려 드릴 내용이 없습니다. 오프라인 상태인 기기는 아무것도 보고하지 않으며, 그것은 조용한 한 주와는 다릅니다.',
  rateLimited: '시도가 너무 잦습니다. 잠시 후 다시 시도하세요.',
  loadFailedTitle: '리포트를 불러오지 못함',
  loadFailed: '리포트를 열지 못했습니다. 아래로 당겨 다시 시도하세요.',
  failed: '리포트를 작성하지 못했습니다. 잠시 후 다시 시도하세요.',

  historyTitle: '지난 주간 리포트',
  historyEmpty: '앞으로 받는 리포트는 1년 동안 여기에 보관됩니다.',

  hubToday: '오늘',
  hubTodayEmpty: '오늘은 아직 어떤 기기도 기록을 보내지 않았습니다.',
  hubByChild: '자녀별',
  hubByDevice: '기기별',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: '자녀별',
  childrenNote: '같은 2주간을 기기별로. 비율은 가족 합계 기준입니다.',
  colChild: '자녀',
  colScreenTime: '사용 시간',
  colShare: '비율',
  colChange: '지난주 대비',
  colLimit: '한도 초과',
  colLateNights: '늦은 밤',
  colTopApp: '가장 많이 사용',
  unnamedChild: '이름 없음',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: '거의 같음',
  noLimit: '한도 없음',
  noTopApp: '—',
  limitDays: '{{count}}일',
  lateNightsNone: '없음',
  busiest: '사용 시간 최다',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: '표시되는 내용',
  guestPreviewHint: '예시입니다. 기기를 연결하면 실제 수치가 표시됩니다',
  guestTitle: '이번 주가 어디로 갔는지 보기',
  guestDescription:
    '로그인하면 오늘을 평소와 비교하고, 아이들을 나란히 견주고, 매주 일요일에 리포트를 받아 볼 수 있습니다.',
  guestBenefitTrendTitle: '오늘, 평소와 견주어',
  guestBenefitTrendBody:
    '숫자 하나만으로는 알 수 없습니다. 오늘은 늘 가족의 하루 평균과 나란히 그려집니다.',
  guestBenefitChildTitle: '아이마다 나란히',
  guestBenefitChildBody:
    '아이가 쓰는 모든 기기를 합쳐, 하루 중 각자의 몫을 고유한 색으로 보여 줍니다.',
  guestBenefitWeeklyTitle: '매주 일요일 리포트',
  guestBenefitWeeklyBody:
    '무엇이 달라졌는지, 어떤 앱이 늘었는지, 늦은 밤은 며칠이었는지 — 1년간 보관됩니다.',
  guestSignInButton: '로그인',
  guestCreateAccount: '부모 계정 만들기',
} as const;
