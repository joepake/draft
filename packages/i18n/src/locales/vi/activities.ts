export const activities = {
  title: 'Nhật ký',
  subtitleAllDevices: 'Sự kiện mới nhất trên tất cả thiết bị',
  subtitleTimelineForDevice: 'Dòng thời gian của {{deviceName}}',
  fallbackDeviceName: 'thiết bị',
  liveBadge: 'Trực tiếp',
  errorTitle: 'Không tải được nhật ký',
  tryAgain: 'Thử lại',
  emptyTitleAll: 'Chưa có nhật ký',
  emptyTitleDevice: 'Thiết bị này chưa có nhật ký',
  emptyDescriptionAll:
    'Các sự kiện khóa, mở khóa và SOS từ thiết bị của trẻ sẽ hiển thị tại đây.',
  emptyDescriptionDevice:
    'Vui lòng chọn thiết bị khác, hoặc chờ sự kiện khóa, mở khóa và SOS từ thiết bị này.',
  guestEmptyTitle: 'Nhật ký hoạt động của bạn',
  guestEmptyDescription:
    'Sau khi kết nối thiết bị của trẻ, các sự kiện khóa, mở khóa, SOS và ứng dụng sẽ hiển thị tại đây theo thời gian thực.',
  guestSignInButton: 'Đăng nhập',
  guestCreateAccount: 'Tạo tài khoản phụ huynh',
  guestSubtitle: 'Đăng nhập để theo dõi hoạt động trên thiết bị của trẻ',
  guestPreviewHeading: 'Bạn sẽ thấy những gì',
  guestPreviewLock: 'Đã khóa thiết bị',
  guestPreviewSos: 'Cảnh báo SOS',
  guestPreviewScreenTime: 'Cập nhật thời gian sử dụng',
  guestPreviewHint: 'Ví dụ minh họa — sự kiện thật hiển thị sau khi kết nối thiết bị',
  activityTypeLocked: 'Đã khóa',
  activityTypeUnlocked: 'Đã mở khóa',
  activityTypeAppOpened: 'Mở ứng dụng',
  activityTypeAppBlocked: 'Chặn ứng dụng',
  activityTypeAppInstalled: 'Cài ứng dụng',
  activityTypeAppRemoved: 'Gỡ ứng dụng',
  activityTypePlaceEnter: 'Vào địa điểm',
  activityTypePlaceExit: 'Rời địa điểm',
  activityTypeTamper: 'Bảo vệ',
  activityTypeScreenTime: 'Thời gian sử dụng',
  activityTypeEmergency: 'Khẩn cấp',
  activityTypeUnknown: 'Hoạt động',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Một ứng dụng bị chặn đã được mở và KidGate đã đóng lại.',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'Một ứng dụng mới vừa được cài đặt trên thiết bị của trẻ.',
  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'Một ứng dụng vừa được gỡ khỏi thiết bị của trẻ.',
  placeEnterTitle: 'Đã vào {{placeName}}',
  placeEnterBody: 'Thiết bị của trẻ đã vào một địa điểm đã lưu.',
  placeExitTitle: 'Đã rời {{placeName}}',
  placeExitBody: 'Thiết bị của trẻ đã rời một địa điểm đã lưu.',
  tamperTitle: 'Đã tắt quyền bảo vệ',
  tamperFallbackTitle: 'Đã tắt quyền bảo vệ',
  tamperFallbackBody: 'Một quyền bảo vệ trên thiết bị của trẻ đã bị tắt.',
  tamperOverlayTitle: 'Đã tắt Hiển thị trên ứng dụng khác',
  tamperOverlayBody:
    'Màn hình khóa có thể ngừng hiển thị đè lên ứng dụng khác cho đến khi bật lại quyền Hiển thị trên ứng dụng khác.',
  tamperAccessibilityTitle: 'Đã tắt Trợ năng',
  tamperAccessibilityBody:
    'Việc chặn ứng dụng và duy trì khóa có thể suy giảm cho đến khi bật lại Trợ năng.',
  tamperUsageAccessTitle: 'Đã tắt quyền theo dõi mức sử dụng ứng dụng',
  tamperUsageAccessBody:
    'Giới hạn ứng dụng và Giờ khóa thiết bị có thể ngừng hoạt động cho đến khi KidGate đọc lại được mức sử dụng ứng dụng trên thiết bị của trẻ.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Đã tắt quyền Thời gian sử dụng',
  tamperScreenTimeIosBody:
    'Giới hạn ứng dụng và Giờ khóa thiết bị có thể ngừng hoạt động cho đến khi quyền Thời gian sử dụng được cấp lại trên thiết bị của trẻ.',
  tamperUsageAccessAndroidTitle: 'Đã tắt quyền Truy cập mức sử dụng',
  tamperUsageAccessAndroidBody:
    'Giới hạn ứng dụng và Giờ khóa thiết bị có thể ngừng hoạt động cho đến khi bật lại quyền Truy cập mức sử dụng cho KidGate trên thiết bị của trẻ.',
  tamperBatteryTitle: 'Đã tắt chế độ pin không hạn chế',
  tamperBatteryBody:
    'Hệ thống có thể tạm dừng KidGate cho đến khi đặt mức sử dụng pin thành Không hạn chế.',
  tamperExactAlarmTitle: 'Đã tắt Chuông báo và lời nhắc',
  tamperExactAlarmBody:
    'Giờ khóa thiết bị có thể bắt đầu hoặc kết thúc trễ cho đến khi cấp lại quyền Chuông báo và lời nhắc.',
  tamperNotificationsTitle: 'Đã tắt thông báo',
  tamperNotificationsBody:
    'Lệnh điều khiển và cảnh báo từ phụ huynh có thể không đến được thiết bị này một cách ổn định.',
  tamperLocationTitle: 'Đã tắt vị trí',
  tamperLocationBody:
    'Phụ huynh sẽ không nhận được cập nhật vị trí cho đến khi cấp lại quyền Vị trí.',
  tamperCameraTitle: 'Đã tắt camera',
  tamperCameraBody:
    'Ảnh kèm SOS và Báo an toàn có thể không gửi được cho đến khi cấp lại quyền Camera.',
  tamperBackgroundRefreshTitle: 'Đã tắt Làm mới ứng dụng nền',
  tamperBackgroundRefreshBody:
    'KidGate có thể cập nhật thưa hơn khi chạy nền cho đến khi bật lại Làm mới ứng dụng nền.',
  tamperDeviceClockTitle: 'Ngày giờ trên thiết bị đã thay đổi',
  tamperDeviceClockBody:
    'Đồng hồ trên thiết bị này không còn khớp với giờ chuẩn. Thời gian sử dụng và Giờ khóa thiết bị vẫn được tính theo giờ chuẩn.',
  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'Quyền Hiển thị trên ứng dụng khác đã bị tắt.',
  tamperAccessibility: 'Dịch vụ Trợ năng đã bị tắt.',
  tamperUsageAccess: 'Quyền Truy cập mức sử dụng đã bị tắt.',
  tamperBattery: 'Chế độ pin không hạn chế đã bị tắt.',
  tamperExactAlarm: 'Quyền Chuông báo và lời nhắc đã bị tắt.',
  tamperNotifications: 'Quyền thông báo đã bị tắt.',
  tamperLocation: 'Quyền vị trí đã bị tắt.',
  tamperCamera: 'Quyền camera đã bị tắt.',
  tamperBackgroundRefresh: 'Quyền Làm mới ứng dụng nền đã bị tắt.',
  filterAllDevices: 'Tất cả thiết bị',
  dateToday: 'Hôm nay',
  dateYesterday: 'Hôm qua',
  filterByDevice: 'Lọc theo {{label}}',
  openFullSosHistory: 'Xem toàn bộ lịch sử SOS',
  unknownDevice: 'Thiết bị không xác định',
  basicActivityNote:
    'Các sự kiện khóa, mở khóa và thiết bị đều được ghi trong Nhật ký.',
  tamperUninstallProtectionTitle: 'Đã tắt chống gỡ cài đặt',
  tamperUninstallProtectionBody: 'Giờ có thể gỡ KidGate khỏi máy này.',
} as const;
