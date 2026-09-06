export const webFilter = {
  title: '웹 필터',
  fallbackDeviceName: '자녀 기기',
  appliesToAll: '{{name}}의 기기 {{count}}대 모두에 적용됩니다',
  coverageLine: '{{total}}대 중 {{enforcing}}대에서 적용 중',
  mergeNotice:
    '{{name}}의 기기마다 웹 필터 설정이 달랐습니다. 여기서 저장하면 더 엄격한 쪽으로 합쳐진 하나의 설정이 모든 기기에 적용됩니다.',
  mergeLoosened: '이제 모든 기기에서 허용됨: {{domains}}',
  toastUpdateFailed: '웹 필터를 업데이트하지 못했습니다. 다시 시도해 주세요.',
  heroTitle: '성인 웹사이트 필터링',
  heroSubtitleIos:
    'Apple 스크린 타임의 웹 콘텐츠 필터를 사용해 자녀 기기의 Safari와 앱 내 브라우저에서 성인 콘텐츠를 제한합니다.',
  heroSubtitleAndroid:
    '자녀의 Android 기기에서 로컬 DNS VPN을 사용해 알려진 성인 도메인을 브라우저와 여러 앱에서 차단합니다.',
  heroSubtitleMacos:
    '브라우저와 여러 앱에서 알려진 성인 사이트를 차단하기 위해 자녀의 Mac에서 KidGate 콘텐츠 필터를 실행합니다.',
  toggleHintIos: '자녀 기기에서 스크린 타임 권한이 필요합니다.',
  toggleHintAndroid:
    '자녀가 KidGate VPN 연결을 한 번 승인해야 합니다. 필터가 작동하려면 VPN을 켜 두세요.',
  toggleHintMacos:
    '자녀는 시스템 설정에서 KidGate 필터 확장 프로그램을 한 번 승인해야 합니다. 필터가 작동하려면 승인 상태를 유지하세요.',
  toggleAccessibilityLabel: '웹 필터 켜기',
  safeSearchSectionTitle: '세이프서치 및 YouTube',
  safeSearchSectionSubtitle:
    'Google, Bing, DuckDuckGo를 안전한 결과로 강제하고 YouTube를 제한 모드로 잠급니다. 웹 필터가 켜져 있어야 합니다.',
  safeSearchLabel: '세이프서치 강제 적용',
  safeSearchHint:
    'Google 세이프서치, YouTube 제한 모드, Bing, DuckDuckGo를 엄격 설정으로 고정합니다. Android, Android TV, Chrome.',
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
  infoLine1Macos:
    'KidGate는 Mac에서 콘텐츠 필터를 실행하여 조회 중인 사이트를 확인하고, 설정한 카테고리에 해당하는 사이트를 차단합니다.',
  infoLine2Macos:
    '자녀의 Mac에서 필터가 승인되지 않은 것으로 표시되면, 시스템 설정 → 일반 → 로그인 항목 및 확장 프로그램을 열어 승인하세요.',
  infoLine3Macos:
    '승인되면 자녀의 Mac에 필터가 활성 상태로 표시됩니다. 거기서 꺼지면 KidGate를 다시 열어 복원하세요.',
  infoLine4Macos:
    '필터는 사이트 이름을 읽지만, 최신 브라우저는 방문의 약 절반에서 이를 숨기므로 해당 사이트는 카테고리에 따라 확인되지 않습니다. 그래도 이 방식으로 자녀가 접근하는 대부분의 사이트는 계속 차단됩니다.',
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
  macosFilterNote: 'Mac에서는 KidGate 콘텐츠 필터 사용',

  heroSubtitleWindows:
    '아이의 PC에서 KidGate 자체 리졸버를 실행해 모든 브라우저에서 알려진 성인 사이트를 차단합니다.',

  toggleHintWindows:
    'PC에서 승인할 것은 없습니다. KidGate 백그라운드 서비스가 몇 초 안에 필터를 켭니다.',

  infoLine1Windows:
    'KidGate는 PC에서 리졸버를 실행해 어떤 사이트를 조회하는지 확인하고, 선택한 카테고리의 사이트를 차단합니다.',

  infoLine2Windows:
    'Chrome, Edge, Firefox는 KidGate가 적용하는 설정으로 여기에 묶입니다. 아이에게 승인을 요청하지 않습니다.',

  infoLine3Windows:
    'KidGate 백그라운드 서비스가 필요합니다. 웹 필터링이 계속 꺼져 있으면 PC에서 관리자 권한으로 KidGate를 다시 설치하세요.',

  infoLine4Windows:
    '필터는 사이트 이름만 읽습니다. 페이지 내부는 볼 수 없고, 방금 조회한 사이트는 몇 분 동안 계속 열릴 수 있습니다.',

  windowsFilterNote: 'Windows에서 KidGate 자체 리졸버 사용',
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
  openHistorySubtitle: '이 기기가 접속한 사이트와 차단된 항목 보기',
  blockedPageTitle: '사이트가 차단되었습니다',
  blockedPageBody:
    'KidGate가 가족을 위해 이 사이트를 차단했습니다. 잘못되었다고 생각되면 부모님께 문의하세요.',
  category: {
    adult: '성인 콘텐츠',
    selfHarm: '자해·섭식장애',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: '교육',
    utility: '유틸리티',
    browser: '웹 브라우저',
    devTools: '코딩·개발 도구',
    messaging: '메시지·통화',
    community: '포럼·커뮤니티',
    shortVideo: '숏폼 영상',
    creative: '사진·영상·창작',
    productivity: '메모·생산성',
    reading: '책·만화',
    fileSharing: '파일 공유·다운로드',
    bypass: '제한 우회 앱',
    gambling: '도박',
    gameGambling: '확률형 아이템·스킨 도박',
    dating: '데이팅',
    strangerChat: '낯선 사람과 채팅',
    drugs: '마약·주류',
    violence: '폭력·고어',
    extremism: '극단주의·혐오',
    piracy: '불법 복제',
    social: '소셜 네트워크',
    videoStreaming: '동영상 스트리밍',
    music: '음악',
    gaming: '게임',
    shopping: '쇼핑',
    aiCompanion: 'AI 친구',
    aiAssistant: 'AI 도우미',
    cryptoTrading: '가상자산·거래',
    vpn: 'VPN 앱',
  },
  categoryHint: {
    adult: '성인·노골적인 사이트',
    selfHarm: '자해와 자살을 부추기는 커뮤니티',
    gambling: '카지노, 스포츠 베팅, 포커',
    gameGambling: '케이스 오픈, 스킨과 로블록스 베팅',
    dating: '데이팅 앱',
    strangerChat: 'Omegle 유사 사이트, 랜덤 영상 채팅',
    drugs: '대마, 전자담배, 주류',
    violence: '고어 및 충격 영상 사이트',
    extremism: '혐오 커뮤니티와 극단주의 사이트',
    piracy: '토렌트·불법 스트리밍',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, 게임 포털',
    shopping: 'Amazon, 쿠팡, 패스트패션',
    aiCompanion: 'Character.AI, Replika, 역할극 봇',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, 거래 앱',
    vpn: 'VPN 내려받기 페이지. 이미 설치된 앱은 차단하지 않습니다.',
  },
  categoryGroup: {
    harm: '유해 콘텐츠',
    contact: '낯선 사람',
    bypass: '필터 우회',
    ai: 'AI',
    entertainment: '엔터테인먼트·소셜',
    money: '쇼핑·금융',
  },
  categoriesOnCount: '{{total}}개 중 {{on}}개 켜짐',
  askToOpen: '부모님께 요청하기',
  askToOpenSubtitle: '허락하면 이 사이트를 열 수 있어요.',
  askToOpenDomainLabel: '어떤 사이트인가요?',
  askToOpenBlockedLabel: '최근에 차단된 사이트',
  askToOpenPending: '이미 사이트를 요청했어요. 답을 기다려 주세요.',
  askToOpenTooSoon: '방금 요청을 보냈어요. 1분 뒤에 다시 해 보세요.',
  askToOpenTooMany: '한 번에 몇 개까지만 요청할 수 있어요.',
  requestsTitle: '사이트 요청',
  requestsSubtitle: '이 기기가 허용을 요청한 사이트예요.',
  siteRequestApproved: '사이트를 허용함',
  siteRequestApprovedDescription:
    '{{deviceName}}의 “항상 허용”에 {{domain}}을(를) 추가했습니다.',
  siteRequestDenied: '사이트 요청을 거절함',
  siteRequestDeniedDescription: '{{deviceName}}에서 {{domain}}은(는) 계속 차단됩니다.',
  siteRequestReceived: '사이트 요청',
  siteRequestReceivedDescription: '{{deviceName}}이(가) {{domain}} 접속을 요청했어요.',
} as const;
