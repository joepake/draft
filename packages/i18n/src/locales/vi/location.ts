export const location = {
  title: 'Vị trí',
  fallbackDeviceName: 'Thiết bị của trẻ',
  syncNote:
    'Vị trí có thể mất vài phút để cập nhật — lâu hơn nếu thiết bị không có kết nối mạng hoặc bị đóng đột ngột.',
  toastUpdateFailed: 'Không thể cập nhật cài đặt chia sẻ vị trí. Vui lòng thử lại.',
  toggleLabel: 'Chia sẻ vị trí',
  toggleHint: 'Sau khi bật, vui lòng mở KidGate một lần trên thiết bị này.',
  toggleAccessibilityLabel: 'Chia sẻ vị trí',
  lastKnownLocation: 'Vị trí gần nhất',
  nearPlace: 'Gần {{place}}',
  noLocationHint:
    'Hãy bật chia sẻ vị trí, sau đó mở KidGate một lần trên thiết bị này.',
  waitingForLocation: 'Đang chờ vị trí',
  updatedAt: 'Cập nhật {{date}}',
  openInMaps: 'Mở trong Bản đồ',
  openInMapsAccessibility: 'Mở trong Bản đồ',
  refreshButton: 'Làm mới vị trí',
  refreshingButton: 'Đang làm mới…',
  refreshAccessibility: 'Làm mới vị trí',
  toastEnableSharingFirst: 'Vui lòng bật chia sẻ vị trí trước khi yêu cầu làm mới.',
  activityTitleRefreshRequested: 'Đã yêu cầu làm mới vị trí',
  activityDescriptionRefreshRequested: 'Đã yêu cầu {{deviceName}} gửi vị trí mới nhất.',
  toastRefreshSent: '{{deviceName}} sẽ cập nhật vị trí ngay khi nhận được yêu cầu.',
  toastRefreshFailed: 'Không thể gửi yêu cầu làm mới vị trí. Vui lòng thử lại.',
  ringButton: 'Đổ chuông thiết bị',
  toastRingSentAndroid: '{{deviceName}} sẽ đổ chuông ngay khi nhận được yêu cầu.',
  toastRingSentIos:
    '{{deviceName}} sẽ phát âm thanh ngay khi nhận được yêu cầu, trừ khi máy đang ở chế độ im lặng hoặc bật Tập trung.',
  toastRingFailed: 'Không thể phát âm thanh trên thiết bị. Vui lòng thử lại.',
  ringNotificationsOff:
    'Thông báo đang tắt trên {{deviceName}} nên thiết bị không thể phát âm thanh. Hãy bật thông báo trong cài đặt của thiết bị đó.',
  activityTitleRingRequested: 'Đã yêu cầu phát âm thanh',
  activityDescriptionRingRequested:
    'Đã yêu cầu {{deviceName}} phát âm thanh để tìm thiết bị.',
  toastChildNeedsNotifications:
    'Vui lòng mở KidGate trên thiết bị của trẻ và cấp quyền Thông báo để yêu cầu làm mới vị trí có thể đến được thiết bị.',
  checkInBadge: 'Báo an toàn',
  movementHistoryTitle: 'Lịch sử di chuyển',
  historyEmpty:
    'Chưa có lịch sử. Các điểm sẽ hiển thị sau mỗi lần cập nhật vị trí hoặc Báo an toàn.',
  historyHighlightAccessibility: 'Đánh dấu {{place}} trên bản đồ',
  historyOpenMapsAccessibility: 'Mở {{place}} trong Bản đồ',
  locationBannerTitle: 'Bật vị trí',
  locationBannerBody:
    'Bố mẹ muốn biết thiết bị này đang ở đâu để yên tâm là con đã đến nơi an toàn.',
  locationBannerBodySharingOff:
    'Chia sẻ vị trí đang tắt nên không có gì được gửi đi. Cho phép ở đây thì sau này bố mẹ bật lên là dùng được ngay.',
  allowLocationButton: 'Cho phép vị trí',
  locationNotAllowed:
    'Quyền vị trí chưa được cấp. Vui lòng mở Cài đặt → KidGate → Vị trí (hoặc bật Dịch vụ định vị trước). Nếu chưa thấy mục Vị trí, hãy chọn Cho phép vị trí lại trong ứng dụng.',
  locationNotAllowedAndroid:
    'Quyền vị trí chưa được cấp. Vui lòng chọn Mở Cài đặt, rồi vào Quyền → Vị trí và chọn “Cho phép mọi lúc”.',
  locationServicesOff:
    'Dịch vụ định vị đang tắt trên toàn thiết bị. Vui lòng mở Cài đặt → Quyền riêng tư và Bảo mật → Dịch vụ định vị, bật lên, sau đó quay lại KidGate và chọn Cho phép vị trí.',
  locationDeniedInSettings:
    'KidGate đã bị từ chối quyền vị trí. Vui lòng mở Cài đặt → KidGate → Vị trí và chọn Khi dùng ứng dụng hoặc Luôn luôn.',
  foregroundOnly:
    'Vị trí chỉ cập nhật khi KidGate đang mở. Vui lòng chọn Mở Cài đặt, rồi vào Vị trí và chọn “Luôn luôn”.',
  foregroundOnlyAndroid:
    'Vị trí chỉ cập nhật khi KidGate đang mở. Vui lòng chọn Mở Cài đặt, rồi vào Quyền → Vị trí và chọn “Cho phép mọi lúc”.',
  toastLocateFailed:
    'Chưa lấy được vị trí của con lúc này. Con thử lại sau giây lát nhé.',
  backgroundLocationTitle: 'Cho phép vị trí khi ứng dụng đã đóng',
  backgroundLocationBody:
    'KidGate cần quyền vị trí chạy nền để bố mẹ biết thiết bị này ở đâu ngay cả khi ứng dụng đã đóng, giúp cả nhà yên tâm hơn.',
  mapNoLocationsEmpty: 'Chưa có vị trí để hiển thị',
  mapHistoryEmpty:
    'Các điểm di chuyển sẽ hiện trên bản đồ sau lần cập nhật vị trí tiếp theo.',
  mapUnavailable: 'Không tải được bản đồ. Vui lòng kiểm tra kết nối mạng rồi thử lại.',
  historyShowMore: 'Xem thêm {{count}} địa điểm',
  childSharingHint: 'Áp dụng cho mọi thiết bị được gán cho {{childName}}.',
  childNoCapableDevices: 'Không thiết bị nào của {{childName}} báo cáo được vị trí.',
  childCarriedQuestion: 'Thiết bị nào đi cùng {{childName}}?',
  childCarriedHint:
    'Vị trí của con được đọc từ thiết bị đó. Máy tính bảng để ở nhà có thể báo vị trí mới hơn điện thoại trong cặp, nên KidGate không bao giờ đoán.',
  childDevicesOnline: '{{online}}/{{total}} thiết bị đang trực tuyến',
  childNoneOnline: 'Không có thiết bị nào trực tuyến',
  childPickCarriedA11y: 'Đánh dấu {{deviceName}} là thiết bị {{childName}} mang theo',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    'Chạm Cho phép, rồi chọn Luôn luôn để vị trí vẫn cập nhật khi chạy nền.',
  wizardStepAllowAndroid:
    'Chọn “Trong khi dùng ứng dụng”, rồi chọn “Cho phép mọi lúc” khi được hỏi để vị trí vẫn cập nhật khi chạy nền.',
  requestNoFix:
    'Thiết bị này không lấy được vị trí. Có thể quyền vị trí chưa được cho phép.',
  requestIpOnly:
    'Thiết bị này chỉ đoán được vị trí từ đường mạng internet. Hãy bật Wi-Fi trên máy (không cần kết nối) rồi thử lại.',
  requestUnsupported: 'Thiết bị này không báo cáo được vị trí.',
  cardSharingOff: 'Chia sẻ vị trí đang tắt',
  cardPermissionOff: 'Thiết bị này chưa cho phép truy cập vị trí',
  cardForegroundOnly: 'Vị trí chỉ cập nhật khi KidGate đang mở trên thiết bị này',
  cardIpOnly:
    'Không định vị được thiết bị này: hãy bật Wi-Fi trên máy (không cần kết nối)',
  cardNotUpdating: 'Vị trí đã ngừng cập nhật',
  namesNeedPremium: 'Tên địa chỉ cần gói trả phí',
  namesNeedPremiumTrialEnded:
    'Bản dùng thử của bạn đã kết thúc. Nâng cấp để xem tên địa điểm chi tiết.',
  namesNeedPremiumStill:
    'Vị trí vẫn được ghi lại, và những nơi bạn đã lưu vẫn hiện tên.',
  awayFromPlace: 'Cách {{place}} {{distance}} về phía {{direction}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: 'bắc',
  compassNe: 'đông bắc',
  compassE: 'đông',
  compassSe: 'đông nam',
  compassS: 'nam',
  compassSw: 'tây nam',
  compassW: 'tây',
  compassNw: 'tây bắc',
  areaLabel: 'Đâu đó ở {{area}}',
} as const;
