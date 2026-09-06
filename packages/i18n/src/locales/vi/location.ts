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
  toastChildNeedsNotifications:
    'Vui lòng mở KidGate trên thiết bị của trẻ và cấp quyền Thông báo để yêu cầu làm mới vị trí có thể đến được thiết bị.',
  checkInBadge: 'Báo an toàn',
  movementHistoryTitle: 'Lịch sử di chuyển',
  historyEmpty:
    'Chưa có lịch sử. Các điểm sẽ hiển thị sau mỗi lần cập nhật vị trí hoặc Báo an toàn.',
  historyHighlightAccessibility: 'Đánh dấu {{place}} trên bản đồ',
  historyOpenMapsAccessibility: 'Mở {{place}} trong Bản đồ',
  latestBadge: 'Mới nhất',
  unableToRequestLocationRefresh: 'Không thể gửi yêu cầu làm mới vị trí',
  locationBannerTitle: 'Bật vị trí',
  locationBannerBody:
    'Bố mẹ muốn biết thiết bị này đang ở đâu để yên tâm là con đã đến nơi an toàn.',
  locationBannerBodySharingOff:
    'Chia sẻ vị trí đang tắt nên không có gì được gửi đi. Cho phép ở đây thì sau này bố mẹ bật lên là dùng được ngay.',
  allowLocationButton: 'Cho phép vị trí',
  locationNotAllowed:
    'Quyền vị trí chưa được cấp. Vui lòng mở Cài đặt → KidGate → Vị trí (hoặc bật Dịch vụ định vị trước). Nếu chưa thấy mục Vị trí, hãy chọn Cho phép vị trí lại trong ứng dụng.',
  locationServicesOff:
    'Dịch vụ định vị đang tắt trên toàn thiết bị. Vui lòng mở Cài đặt → Quyền riêng tư và Bảo mật → Dịch vụ định vị, bật lên, sau đó quay lại KidGate và chọn Cho phép vị trí.',
  locationDeniedInSettings:
    'KidGate đã bị từ chối quyền vị trí. Vui lòng mở Cài đặt → KidGate → Vị trí và chọn Khi dùng ứng dụng hoặc Luôn luôn.',
  locationEnabled:
    'Đã bật vị trí. Vui lòng chọn “Luôn cho phép” để KidGate có thể cập nhật ngay cả khi ứng dụng đã đóng.',
  backgroundLocationTitle: 'Cho phép vị trí khi ứng dụng đã đóng',
  backgroundLocationBody:
    'KidGate cần quyền vị trí chạy nền để bố mẹ biết thiết bị này ở đâu ngay cả khi ứng dụng đã đóng, giúp cả nhà yên tâm hơn.',
  locationNote:
    'Hiển thị vị trí của trẻ khi chia sẻ vị trí được bật trên thiết bị của trẻ.',
  placeAlertsNote:
    'Cảnh báo khi trẻ đến hoặc rời khỏi nhà, trường học và các địa điểm an toàn khác.',
  mapNoLocationsEmpty: 'Chưa có vị trí để hiển thị',
  mapUnavailable: 'Không tải được bản đồ. Vui lòng kiểm tra kết nối mạng rồi thử lại.',
  historyShowMore: 'Xem thêm {{count}} địa điểm',
  childSharingHint: 'Áp dụng cho mọi thiết bị được gán cho {{childName}}.',
  childNoCapableDevices: 'Không thiết bị nào của {{childName}} báo cáo được vị trí.',
  childCarriedQuestion: 'Thiết bị nào đi cùng {{childName}}?',
  childCarriedHint:
    'Vị trí của con được đọc từ thiết bị đó. Máy tính bảng để ở nhà có thể báo vị trí mới hơn điện thoại trong cặp, nên KidGate không bao giờ đoán.',
  childDevicesOnline: '{{online}}/{{total}} thiết bị đang trực tuyến',
  childNoneOnline: 'Không có thiết bị nào trực tuyến',
  childPickCarried: 'Đi cùng con',
  childPickCarriedA11y: 'Đánh dấu {{deviceName}} là thiết bị {{childName}} mang theo',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Thời gian ở các địa điểm',
  placeTotalsNote:
    'Tính từ lịch sử vị trí {{count}} ngày gần nhất. Chỉ tính những địa điểm bạn đã lưu.',
} as const;
