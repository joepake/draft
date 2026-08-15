export const webFilter = {
  title: '웹 필터',
  fallbackDeviceName: '자녀 기기',
  toastUpdateFailed: '웹 필터를 업데이트하지 못했습니다. 다시 시도해 주세요.',
  heroTitle: '성인 웹사이트 필터링',
  heroSubtitleIos:
    'Apple 스크린 타임의 웹 콘텐츠 필터를 사용해 자녀 기기의 Safari와 앱 내 브라우저에서 성인 콘텐츠를 제한합니다.',
  heroSubtitleAndroid:
    '자녀의 Android 기기에서 로컬 DNS VPN을 사용해 알려진 성인 도메인을 브라우저와 여러 앱에서 차단합니다.',
  toggleLabel: '웹 필터 켜기',
  toggleHintIos: '자녀 기기에서 스크린 타임 권한이 필요합니다.',
  toggleHintAndroid:
    '자녀가 KidGate VPN 연결을 한 번 승인해야 합니다. 필터가 작동하려면 VPN을 켜 두세요.',
  toggleAccessibilityLabel: '웹 필터 켜기',
  infoTitle: '작동 방식',
  infoLine1Ios: 'Apple이 성인 웹사이트를 자동으로 필터링합니다.',
  infoLine2Ios:
    'Safari에서 Apple 성인 콘텐츠 필터를 사용하며, 다른 앱 내부의 모든 것을 차단하지는 않습니다.',
  infoLine3Ios:
    '자녀 기기의 앱이 제어를 동기화하면 KidGate가 설정을 자동으로 적용합니다.',
  infoLine1Android:
    'KidGate는 로컬 VPN을 시작해 DNS에서 성인 도메인을 검사하고 일부 암호화된 DNS 리졸버를 차단합니다.',
  infoLine2Android:
    '자녀 기기에서 프라이빗 DNS를 꺼 주세요. 켜져 있으면 브라우저가 필터를 우회할 수 있습니다.',
  infoLine3Android:
    '필터링 중에는 자녀 기기에 VPN 아이콘이 표시됩니다. VPN을 끄면 필터도 중단됩니다 — KidGate를 다시 열면 복원됩니다.',
  infoLine4Android:
    '설정 → 네트워크 및 인터넷 → 프라이빗 DNS → 사용 안 함으로 이동하세요.',
  privateDnsBannerTitle: '프라이빗 DNS 끄기',
  privateDnsBannerBody:
    '프라이빗 DNS가 켜져 있어 성인 웹 필터가 우회될 수 있습니다. 필터가 작동하도록 꺼 주세요.',
  privateDnsBannerButton: 'DNS 설정 열기',
  vpnConsentBannerTitle: '웹 필터 VPN 복원',
  vpnConsentBannerBody:
    'KidGate VPN이 꺼져 있습니다. 성인 웹 필터는 VPN 연결이 유지되어야 합니다.',
  vpnConsentBannerButton: 'VPN 켜기',
  iosOnlyNote: 'iOS에서는 스크린 타임 사용',
  androidVpnNote: 'Android에서는 로컬 DNS VPN 사용',
  webFilteringNote:
    'iOS는 스크린 타임 성인 필터를, Android는 로컬 DNS VPN 차단 목록을 사용합니다.',
  safeSearchAlertsNote:
    'Safari는 검색어를 공유하지 않습니다. 키워드 알림에는 관리형 안전 브라우저가 필요합니다.',
  webHistoryNote: '필터링 브라우저 또는 DNS/VPN 방식 보고가 필요합니다.',
  categoriesTitle: '차단할 항목',
  categoriesSubtitle:
    'KidGate는 자체 도메인 목록을 사용합니다. 아이가 실제로 접근하는 사이트를 다루며, 웹 전체는 아닙니다. 아래 목록과 함께 쓰세요.',
  androidOnlyCategory: 'Android 전용 — iOS에는 카테고리별 웹 제어가 없습니다',
  iosCategoryNote:
    'iPhone은 Apple 자체 필터로 {{category}}만 지원합니다. 나머지 카테고리는 Android 기기에 적용됩니다.',
  allowListTitle: '항상 허용',
  allowListSubtitle: '카테고리가 차단하더라도 계속 접속할 수 있는 사이트입니다.',
  allowListEmpty: '아직 예외가 없습니다.',
  allowListInputAccessibility: '항상 허용할 사이트 추가',
  blockListTitle: '항상 차단',
  blockListSubtitle: '카테고리 설정과 무관하게 거부되는 사이트입니다.',
  blockListEmpty: '아직 차단된 사이트가 없습니다.',
  blockListInputAccessibility: '항상 차단할 사이트 추가',
  allowListOnlyLabel: '허용한 사이트만',
  allowListOnlyHintAndroid:
    '허용 목록 외의 모든 것이 거부됩니다. DNS 계층에서 동작하므로 다른 앱도 연결이 끊깁니다.',
  allowListOnlyHintIos:
    'Safari와 앱 내 브라우저는 허용 목록의 사이트만 열 수 있습니다.',
  allowListOnlyNeedsEntries: '켜기 전에 허용할 사이트를 하나 이상 추가하세요.',
  domainPlaceholder: 'example.com',
  addDomain: '사이트 추가',
  removeDomain: '{{domain}} 제거',
  invalidDomain: 'example.com 처럼 사이트 주소를 입력하세요',
  listFull: '이 목록에는 최대 {{max}}개까지 저장할 수 있습니다.',
  openHistory: '웹 기록',
  openHistorySubtitle: '이 휴대폰이 접속한 사이트와 차단된 항목 보기',
  category: {
    adult: '성인 콘텐츠',
    gambling: '도박',
    dating: '데이팅',
    drugs: '마약·주류',
    violence: '폭력·극단주의',
    piracy: '불법 복제',
    social: '소셜 네트워크',
    videoStreaming: '동영상 스트리밍',
    gaming: '게임',
    shopping: '쇼핑',
  },
  categoryHint: {
    adult: '성인·노골적인 사이트',
    gambling: '카지노, 베팅, 루트박스',
    dating: '데이팅·낯선 사람 채팅 앱',
    drugs: '대마, 전자담배, 주류',
    violence: '잔혹물·극단주의 포럼',
    piracy: '토렌트·불법 스트리밍',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, 게임 포털',
    shopping: 'Amazon, 쿠팡, 패스트패션',
  },
} as const;
