/** `en/childReport.ts` 참고. 같은 어조이며, 두 합계를 섞지 말 것. */
export const childReport = {
  title: '리포트',
  devicesCount: '기기 {{count}}대',

  periodToday: '오늘',
  periodWeek: '7일',
  periodMonth: '30일',

  heroScreenOn: '실제 사용 시간',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    '추정값입니다. 얼마나 썼는지는 알려주지만 언제 썼는지는 알려주지 못하는 기기가 있습니다.',
  heroOverlap:
    '그중 {{value}}는 화면 두 개를 동시에 사용. 기기를 더하면 두 번 세어집니다.',
  barsExplain: '두 기기를 동시에 쓴 1분은 기기를 더하면 2분으로 세어집니다.',
  heroEmpty: '아직 사용 기록이 없습니다',

  trendUp: '지난 기간보다 {{value}} 많음',
  trendDown: '지난 기간보다 {{value}} 적음',
  trendFlat: '지난 기간과 비슷함',
  trendFirst: '비교할 지난 기간이 없습니다',

  coverage: '이 기간의 {{percent}}% 측정됨',
  wellLateNights: '늦은 밤',
  coverageNone: '이 아이의 기기 중 화면이 켜진 시각을 알려줄 수 있는 기기가 없습니다',

  barCombined: '기기 합계',

  sectionDays: '날짜별',
  backToPeriod: '전체 기간 보기로 돌아가기',
  bandLatestDay: '마지막으로 측정한 날',
  sectionWhen: '화면이 켜져 있던 시간대',
  bandMerged: '모든 기기',
  bandTooThin: '이 날은 측정된 부분이 너무 적어 그릴 수 없습니다.',

  sectionDevices: '어느 기기인지',
  deviceTotalsOnly: '합계만',
  openDeviceReport: '{{name}} 리포트 열기',

  sectionApps: '가장 많이 쓴 앱',
  appOnDevices: '기기 {{count}}대에서',
  appsEmpty: '앱별 내역이 아직 없습니다.',

  emptyNoDevices: '이 아이에게 아직 배정된 기기가 없습니다.',
  emptyAssign: '기기 배정',
  partialError: '기기 한 대를 읽지 못했습니다. 아래 수치에는 빠져 있습니다.',
};
