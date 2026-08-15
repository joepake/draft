export const screenTime = {
  turnOnScreenTime: 'Bật Thời gian sử dụng',
  finishScreenTimeSetup: 'Hoàn tất thiết lập Thời gian sử dụng',
  screenTimeNeededForControls:
    'Chặn ứng dụng, Giờ khóa thiết bị và chức năng khóa cần quyền Thời gian sử dụng trên thiết bị này.',
  screenTimeNeededForLimits:
    'Nếu chưa bật Thời gian sử dụng, chức năng khóa, Giờ khóa thiết bị và giới hạn ứng dụng sẽ không hoạt động.',
  screenTimeStepOpenKidGate: 'Mở KidGate trên thiết bị này của trẻ.',
  screenTimeStepAllowUsage:
    'Tại mục Trạng thái, chọn Cho phép Sử dụng ứng dụng và Trang web.',
  screenTimeStepTapAllow: 'Khi hệ thống hỏi, chọn Cho phép.',
  screenTimeStepReturnHereAuto: 'Quay lại đây — trạng thái sẽ tự động cập nhật.',
  screenTimeDeniedStepOpenSettings: 'Trên thiết bị của trẻ, mở Cài đặt → KidGate.',
  screenTimeDeniedStepTurnOnRestrictions: 'Bật Thời gian sử dụng.',
  screenTimeDeniedStepOpenKidGateAgain: 'Mở lại KidGate trên thiết bị của trẻ.',
  screenTimeDeniedStepReturnWhenReady:
    'Quay lại đây — thẻ này sẽ biến mất khi hoàn tất.',
  screenTimeSetupStep1: 'Chọn Cho phép Sử dụng ứng dụng và Trang web ở bên dưới.',
  screenTimeSetupStep2:
    'Khi hệ thống hỏi, chọn Cho phép trên hộp thoại Sử dụng ứng dụng và Trang web.',
  screenTimeSetupStep3: 'Quay lại đây sau khi hộp thoại đóng lại.',
  screenTimeDeniedStep1: 'Chọn Mở Cài đặt ứng dụng ở bên dưới.',
  screenTimeDeniedStep2: 'Trong trang {{appName}}, bật Thời gian sử dụng.',
  screenTimeDeniedStep3: 'Quay lại {{appName}} — thẻ này sẽ biến mất.',
  screenTimeBannerTitleDenied: 'Bật Thời gian sử dụng',
  screenTimeBannerTitleRequest: 'Cho phép Sử dụng ứng dụng và Trang web',
  screenTimeBannerBodyDenied: '{{appName}} cần bật Thời gian sử dụng trong Cài đặt.',
  screenTimeBannerBodyRequest:
    'Quyền này cho phép phụ huynh khóa ứng dụng và thiết lập Giờ khóa thiết bị trên thiết bị này.',
  usageAccessBannerTitle: 'Bật quyền Truy cập mức sử dụng',
  usageAccessBannerBody:
    'KidGate cần quyền Truy cập mức sử dụng để theo dõi thời gian sử dụng và áp dụng giới hạn.',
  usageAccessStepOpenSettings: 'Chọn Mở Cài đặt ở bên dưới.',
  usageAccessStepFindKidGate: 'Tìm KidGate và bật quyền Truy cập mức sử dụng.',
  usageAccessStepReturn: 'Quay lại đây — trạng thái sẽ tự động cập nhật.',
  noDailyLimitSet: 'Chưa đặt giới hạn hằng ngày',
  limitReachedStatus: '{{used}} / {{limit}} · Đã hết giới hạn',
  minutesUsedStatus: 'Đã dùng {{used}} / {{limit}}',
  usageUpdatesHint:
    'Dữ liệu được cập nhật vài phút một lần khi giám sát Thời gian sử dụng đang hoạt động.',
  dailyLimitNote: 'Áp dụng mức thời gian sử dụng tối đa mỗi ngày.',
  dailyLimitMinutes: '{{limitMinutes}} phút',
} as const;
