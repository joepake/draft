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

  narrativeTitle: '한 문장으로',
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
    '지난 2주 동안 기록된 스크린 타임이 없어 아직 알려 드릴 내용이 없습니다. 꺼져 있는 기기는 아무것도 보고하지 않으며, 그것은 조용한 한 주와는 다릅니다.',
  rateLimited: '시도가 너무 잦습니다. 잠시 후 다시 시도하세요.',
  failed: '리포트를 작성하지 못했습니다. 잠시 후 다시 시도하세요.',

  historyTitle: '지난 주간 리포트',
  historyEmpty: '앞으로 받는 리포트는 1년 동안 여기에 보관됩니다.',
} as const;
