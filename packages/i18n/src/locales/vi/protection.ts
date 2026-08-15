export const protection = {
  permissionOffOnChildDevice: 'Quyền đang tắt trên thiết bị của trẻ.',
  permissionNotSetUpYet: 'Quyền này chưa được thiết lập.',
  permissionRestrictedByIos: 'Quyền bị hạn chế bởi cài đặt iOS.',
  permissionStatusUnknown: 'KidGate không đọc được trạng thái của quyền này.',
  kidGateOffline: 'KidGate ngoại tuyến',
  childAppMayBeOffline:
    'Ứng dụng trên thiết bị của trẻ có thể đã đóng, bị gỡ bỏ hoặc đang ngoại tuyến.',
  statusNotUpdatedYet: 'Trạng thái chưa được cập nhật',
  openKidGateOnChildPhone: 'Vui lòng mở KidGate một lần trên thiết bị của trẻ.',
  screenTimePermission: 'Quyền Thời gian sử dụng',
  screenTimeAccessOff:
    'Quyền Thời gian sử dụng đang tắt nên việc chặn ứng dụng và áp dụng giới hạn có thể ngừng hoạt động.',
  screenTimeSetupIncomplete:
    'Thiết lập Thời gian sử dụng trên thiết bị của trẻ chưa hoàn tất.',
  usageAccessPermission: 'Truy cập mức sử dụng',
  usageAccessOff:
    'Quyền Truy cập mức sử dụng đang tắt nên KidGate không thể theo dõi thời gian sử dụng hoặc áp dụng giới hạn.',
  usageAccessSetupIncomplete:
    'Vui lòng bật quyền Truy cập mức sử dụng cho KidGate trong cài đặt Android.',
  overlayPermission: 'Hiển thị trên ứng dụng khác',
  batteryOptimizationPermission: 'Pin không hạn chế',
  batteryOptimizationOff:
    'Vui lòng cho phép pin không hạn chế để KidGate duy trì các tính năng bảo vệ khi chạy nền.',
  exactAlarmPermission: 'Chuông báo và lời nhắc',
  exactAlarmOff:
    'Vui lòng bật Chuông báo và lời nhắc để Giờ khóa thiết bị bắt đầu đúng giờ.',
  accessibilityPermission: 'Trợ năng (hỗ trợ khóa)',
  accessibilityOff:
    'Vui lòng bật Trợ năng cho KidGate để màn hình khóa luôn hiển thị đè lên ứng dụng khác.',
  overlayOffForLock:
    'Vui lòng bật Hiển thị trên ứng dụng khác để màn hình khóa có thể che phủ các ứng dụng khác.',
  lockNotReadyTitle: 'Chức năng khóa chưa sẵn sàng',
  lockNotReadyBody:
    'KidGate chưa thể duy trì khóa trên thiết bị Android này cho đến khi bật quyền Hiển thị trên ứng dụng khác và Trợ năng. Vui lòng mở KidGate trên thiết bị của trẻ và hoàn tất các bước sau:',
  lockNotReadyBodyIos:
    'KidGate chưa thể khóa iPhone này cho đến khi quyền Thời gian sử dụng được cấp trên thiết bị của trẻ. Vui lòng mở KidGate trên máy đó và hoàn tất các bước sau:',
  locationPermission: 'Quyền vị trí',
  notificationsPermission: 'Quyền thông báo',
  backgroundUpdates: 'Cập nhật nền',
  backgroundUpdatesRestricted: 'Cập nhật nền đang bị hạn chế trên thiết bị này.',
  turnOnBackgroundUpdatesInSettings:
    'Vui lòng bật trong Cài đặt thiết bị để KidGate luôn được đồng bộ.',
  inactive: 'Không hoạt động',
  openKidGateToSyncProtections:
    'Vui lòng mở KidGate trên thiết bị này để các tính năng bảo vệ được đồng bộ lại.',
  needsAttention: 'Cần chú ý',
  protectionsNeedSetupAndroid:
    'Một số tính năng bảo vệ cần được thiết lập trên thiết bị của trẻ.',
  protectionsNeedSetupIos:
    'Một số tính năng bảo vệ cần được thiết lập trên thiết bị của trẻ.',
  protected: 'Đang được bảo vệ',
  protectionsLookHealthy: 'Các tính năng bảo vệ của KidGate đang hoạt động tốt.',
  healthBadgeProtected: 'Xanh — đang được bảo vệ',
  healthBadgeWarning: 'Vàng — cần thiết lập',
  healthBadgeInactive: 'Đỏ — thiết bị của trẻ ngoại tuyến',
  iosFeatureSupportEvaluating: 'Đang kiểm tra khả năng hỗ trợ tính năng trên iOS.',
  iosUpgradeRequiredNote:
    'Tính năng này cần iOS 16 trở lên. Hãy cập nhật thiết bị của trẻ trong Cài đặt › Cài đặt chung › Cập nhật phần mềm. Nếu không có bản cập nhật nào, thiết bị đã quá cũ để Apple hỗ trợ.',
  iosUpgradeActionLabel: 'Cần iOS 16',
  lockUnlockNote: 'Khóa thiết bị thông qua Thời gian sử dụng khi trẻ đã cấp quyền.',
  scheduleNote:
    'Tối đa 3 khung Giờ khóa thiết bị chặn ứng dụng thông qua Thời gian sử dụng.',
  individualAppBlockingNote:
    'Trẻ chọn ứng dụng sau khi nhập mã PIN phụ huynh 6 chữ số.',
  tamperAlertsNote:
    'Thông báo khi có thay đổi về quyền hoặc khi ứng dụng trên thiết bị của trẻ lâu chưa cập nhật.',
  appReviewRemindersNote:
    'iOS không cung cấp sự kiện cài đặt ứng dụng; vui lòng rà soát ứng dụng định kỳ cùng thiết bị của trẻ.',
} as const;
