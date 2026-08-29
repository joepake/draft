export const webHistory = {
  title: '웹 기록',
  fallbackDeviceName: '자녀 기기',
  syncNote:
    '웹 기록이 이 화면에 반영되기까지 몇 분 정도 걸릴 수 있습니다. 기기에 인터넷 연결이 없거나 예기치 않게 종료된 경우 더 오래 걸릴 수 있습니다.',
  syncNoteTv:
    '이 TV는 주기적으로만 접속하므로 웹 기록이 이 화면에 반영되기까지 최대 30분이 걸릴 수 있습니다. 인터넷 연결이 없으면 더 오래 걸립니다.',
  summarySites: '확인된 사이트',
  summaryBlocked: '차단된 사이트',
  sourceNoteIos:
    'iPhone에서는 Apple 스크린 타임 리포트가 출처입니다. 자녀가 시간을 보낸 사이트이며, 연 모든 페이지는 아닙니다.',
  sourceNoteAndroid:
    'Android에서는 KidGate DNS 필터가 출처입니다. 이 휴대폰이 조회한 사이트이며, 연 모든 페이지는 아닙니다.',
  sourceNoteMacos:
    'Mac에서는 KidGate 필터가 출처입니다. 이 Mac이 조회한 사이트이며, 연 모든 페이지는 아닙니다.',
  sourceNoteExtension:
    '이 브라우저에서는 실제로 열린 페이지가 기록돼요. 이 브라우저만이고, 컴퓨터 전체는 아니에요.',
  filterOffNoteAndroid:
    '웹 필터가 꺼져 있어 이 기기는 아무것도 기록하거나 차단하지 않습니다. 켜면 접속한 곳을 볼 수 있습니다.',
  filterOffNoteMacos:
    '웹 필터가 꺼져 있어 이 Mac은 아무것도 기록하거나 차단하지 않습니다. 켜면 접속한 곳을 볼 수 있습니다.',
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
  sectionUncategorized: '기타 사이트',
  blockCategory: '{{category}} 차단',
  blockCategoryConfirmTitle: '{{category}}을(를) 차단할까요?',
  blockCategoryConfirmBody:
    'KidGate가 {{category}}(으)로 분류하는 모든 사이트가 이 기기에서 거부됩니다. 웹 필터에서 다시 끌 수 있습니다.',
  blockCategoryConfirmAction: '차단',
  blockCategoryDone: '{{category}}을(를) 차단했습니다.',
  unblockCategory: '{{category}} 차단 해제',
  unblockCategoryConfirmTitle: '{{category}} 차단을 해제할까요?',
  unblockCategoryConfirmBody:
    'KidGate가 {{category}}(으)로 분류하는 사이트에 이 기기에서 다시 접속할 수 있게 됩니다.',
  unblockCategoryConfirmAction: '해제',
  unblockCategoryDone: '{{category}} 차단을 해제했습니다.',
  serviceSites: '사이트 {{count}}개',
  serviceNote:
    '서비스가 자체적으로 불러오는 사이트는 한 줄로 묶었습니다. YouTube를 한 번 열면 여러 곳에 연결됩니다. 줄을 누르면 자세히 볼 수 있습니다.',
  showMoreDays: '{{count}}일 더 보기',
  rollupTitle: '사이트 종류별 방문',
  rollupShare: '{{percent}}%',
  rollupNote: '분이 아니라 조회 수예요. 긴 영상은 몇 번, 10분 검색은 수십 번이 됩니다.',
  rollupNoteAi:
    '일부는 알려진 사이트와 대조한 것이 아니라 사이트 이름에서 추정한 것이라 틀릴 수 있습니다.',
  rollupNoteExtension:
    '분이 아니라 페이지 수예요. 긴 영상은 한 번, 10분 검색은 수십 번이 됩니다.',
  hoursTitle: '언제 사용했는지',
  hoursNote:
    '시간대별 페이지 로드 수(기기 시계 기준)예요. 오후 내내 열어 둔 탭은 한 번으로 세요.',
  hoursEmpty: '오늘은 아직 페이지가 없어요.',
  sourceNoteChild:
    '{{count}}개 기기를 합쳐서 표시합니다. 각 기기는 자체 필터가 본 것만 기록합니다.',
  filterOffNoteChild: '모든 기기에서 웹 필터가 꺼져 있어 새 방문이 기록되지 않습니다.',
} as const;
