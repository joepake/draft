export const webHistory = {
  title: '웹 기록',
  fallbackDeviceName: '자녀 기기',
  summarySites: '확인된 사이트',
  summaryBlocked: '차단된 사이트',
  sourceNoteIos:
    'iPhone에서는 Apple 스크린 타임 리포트가 출처입니다. 자녀가 시간을 보낸 사이트이며, 연 모든 페이지는 아닙니다.',
  sourceNoteAndroid:
    'Android에서는 KidGate DNS 필터가 출처입니다. 이 휴대폰이 조회한 사이트이며, 연 모든 페이지는 아닙니다.',
  filterOffNoteAndroid:
    '웹 필터가 꺼져 있어 이 휴대폰은 아무것도 기록하거나 차단하지 않습니다. 켜면 접속한 곳을 볼 수 있습니다.',
  filterOffNoteIos:
    '웹 필터가 꺼져 있어 아무것도 차단되지 않습니다. 이 목록은 휴대폰이 어디에 접속했는지만 보여 줍니다.',
  filterAll: '전체',
  filterBlocked: '차단만',
  emptyTitle: '아직 기록이 없습니다',
  emptyBody: 'KidGate가 실행 중일 때 자녀 기기가 웹을 이용하면 여기에 표시됩니다.',
  emptyBlockedBody: '아직 차단된 항목이 없습니다.',
  dayBlockedBadge: '{{count}}건 차단',
  visitsMeta: '{{count}}회 방문',
  blockedMeta: '{{count}}회 차단 · {{category}}',
  categoryUnknown: '차단 목록',
  showMoreDays: '{{count}}일 더 보기',
  rollupTitle: '시간이 간 곳',
  rollupShare: '{{percent}}%',
  rollupNote:
    '기록된 방문의 사이트 종류별 비율입니다. Android 전용 — iPhone은 도메인의 종류를 KidGate에 알려주지 않습니다.',
} as const;
