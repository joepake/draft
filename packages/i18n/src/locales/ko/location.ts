export const location = {
  title: '위치',
  fallbackDeviceName: '자녀 기기',
  toastUpdateFailed: '위치 공유를 업데이트할 수 없습니다. 다시 시도해 주세요.',
  toggleLabel: '위치 공유',
  toggleHint: '이 기능을 켠 후 이 기기에서 KidGate를 한 번 실행하세요.',
  toggleAccessibilityLabel: '위치 공유',
  lastKnownLocation: '마지막으로 확인된 위치',
  noLocationHint: '위치 공유를 켠 후 이 기기에서 KidGate를 한 번 실행하세요.',
  waitingForLocation: '위치 정보를 기다리는 중',
  updatedAt: '{{date}} 업데이트됨',
  openInMaps: '지도에서 열기',
  openInMapsAccessibility: '지도에서 열기',
  refreshButton: '위치 새로고침',
  refreshingButton: '새로고침 중…',
  refreshAccessibility: '위치 새로고침',
  toastEnableSharingFirst:
    '위치 새로고침을 요청하기 전에 위치 공유를 먼저 활성화하세요.',
  activityTitleRefreshRequested: '위치 새로고침 요청됨',
  activityDescriptionRefreshRequested:
    '{{deviceName}}에 최신 위치를 보내도록 요청했습니다.',
  toastRefreshSent: '{{deviceName}}에서 요청을 받는 즉시 위치가 업데이트됩니다.',
  toastRefreshFailed: '위치 새로고침을 요청할 수 없습니다. 다시 시도해 주세요.',
  toastChildNeedsNotifications:
    '위치 새로고침 요청을 받을 수 있도록 자녀 기기에서 KidGate를 열고 알림을 허용해 주세요.',
  checkInBadge: '체크인',
  movementHistoryTitle: '이동 기록',
  historyEmpty: '아직 기록이 없습니다. 위치가 업데이트되거나 체크인을 하면 표시됩니다.',
  historyHighlightAccessibility: '지도에서 {{place}} 강조 표시',
  historyOpenMapsAccessibility: '{{place}}를 지도에서 열기',
  latestBadge: '최신',
  unableToRequestLocationRefresh: '위치 새로고침을 요청할 수 없습니다',
  locationBannerTitle: '위치 정보 켜기',
  locationBannerBody:
    '부모가 자녀가 안전하게 도착했는지 확인할 수 있도록 이 기기의 위치를 공유해 주세요.',
  allowLocationButton: '위치 허용',
  locationNotAllowed:
    '위치 권한이 아직 허용되지 않았습니다. 설정 → KidGate → 위치를 열거나 먼저 위치 서비스를 켜세요. 위치 항목이 보이지 않으면 “위치 허용”을 다시 선택하세요.',
  locationServicesOff:
    '이 기기의 위치 서비스가 꺼져 있습니다. 설정 → 개인정보 보호 및 보안 → 위치 서비스를 켠 후 KidGate로 돌아와 “위치 허용”을 선택하세요.',
  locationDeniedInSettings:
    'KidGate의 위치 권한이 거부되었습니다. 설정 → KidGate → 위치에서 “앱을 사용하는 동안” 또는 “항상”을 선택하세요.',
  locationEnabled:
    '위치가 활성화되었습니다. 앱이 종료된 상태에서도 위치를 업데이트할 수 있도록 “항상”을 선택해 주세요.',
  backgroundLocationTitle: '앱이 종료되어도 위치 허용',
  backgroundLocationBody:
    '가족의 안전을 위해 KidGate는 앱이 종료된 상태에서도 부모가 기기의 위치를 확인할 수 있도록 백그라운드 위치 권한이 필요합니다.',
  locationNote: '자녀 기기에서 위치 공유가 활성화되면 자녀의 위치를 표시합니다.',
  placeAlertsNote: '집, 학교 및 기타 안전한 장소에 대한 위치 알림을 보냅니다.',
  mapNoLocationsEmpty: '표시할 위치 정보가 아직 없습니다',
  mapUnavailable:
    '지도를 사용할 수 없습니다. 인터넷 연결을 확인한 후 다시 시도해 주세요.',
  historyShowMore: '{{count}}개 장소 더 보기',
} as const;
