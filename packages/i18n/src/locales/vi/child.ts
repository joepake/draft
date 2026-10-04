export const child = {
  pageTitle: 'Trạng thái',
  statusPaused: 'Đã khóa',
  statusActive: 'Đang sử dụng',
  readyTitle: 'Mọi thứ đã sẵn sàng',
  readyBody:
    'Nếu cần thêm thời gian sử dụng, con có thể gửi yêu cầu cho bố mẹ ở phía trên. Khi có việc khẩn cấp, hãy dùng nút SOS.',
  setupCollapsedTitle: 'Hoàn tất thiết lập cùng bố mẹ',
  setupCollapsedRequiredCount: '{{count}} mục bắt buộc',
  setupCollapsedOptionalCount: '{{count}} mục tùy chọn',
  oneMoment: 'Chờ một chút nhé…',
  paused: 'Đã khóa',
  blockedHours: 'Giờ khóa thiết bị',
  limitReached: 'Đã hết giới hạn',
  active: 'Đang sử dụng',
  parentPausedThisDevice: 'Bố mẹ đang tạm khóa thiết bị này.',
  blockedHoursOnPaused:
    'Bây giờ đang trong Giờ khóa thiết bị. Con nghỉ ngơi một chút nhé.',
  outOfScreenTimeAskParent:
    'Con đã dùng hết thời gian sử dụng hôm nay. Con có thể gửi yêu cầu thêm giờ ở bên dưới.',
  screenTimeToday: 'Thời gian sử dụng hôm nay',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Con đã dùng hết thời gian sử dụng hôm nay. Con có thể gửi yêu cầu thêm giờ cho bố mẹ.',
  devicePaused: 'Đã khóa thiết bị',
  devicePausedByParent: '{{deviceName}} đang bị khóa.',
  phonePausedByParent: 'Bố mẹ đang tạm khóa thiết bị này.',
  pausedAskParentOrSos:
    'Con hãy nhờ bố mẹ mở khóa khi cần dùng lại. Khi có việc khẩn cấp, con vẫn gửi được SOS.',
  blockedHoursLockTitle: 'Giờ khóa thiết bị',
  blockedHoursLockBody:
    'Bây giờ đang trong Giờ khóa thiết bị. Con nghỉ ngơi một chút nhé.',
  blockedHoursLockHint:
    'Nếu cần dùng thiết bị lúc này, con hãy nhờ bố mẹ đổi Giờ khóa thiết bị nhé. Khi có việc khẩn cấp, con vẫn gửi được SOS.',
  blockedHoursLockBodyUntil:
    'Giờ khóa thiết bị kéo dài đến {{time}}. Con nghỉ ngơi một chút nhé.',
  dailyLimitLockHint:
    'Con hãy nhờ bố mẹ nếu cần thêm thời gian nhé. Khi có việc khẩn cấp, con vẫn gửi được SOS.',
  appClosedTitle: 'Đã đóng ứng dụng',
  appClosedBody: 'KidGate đã đóng ứng dụng này vì lúc này ứng dụng đang bị chặn.',
  parentPausedAccess: 'Bố mẹ đang tạm khóa thiết bị này.',
  parentRestoredAccess: 'Bố mẹ đã mở khóa thiết bị. Con có thể dùng tiếp.',
  toastDailyLimitIncreased: 'Bố mẹ đã cộng thêm {{minutes}} phút sử dụng cho con.',
  errorDeviceNotRegistered:
    'Thiết bị này chưa sẵn sàng. Vui lòng thử lại sau giây lát, hoặc ghép nối lại nếu lỗi vẫn tiếp diễn.',
  errorScreenTimeRequired:
    'Cần cấp quyền Thời gian sử dụng. Vui lòng cho phép KidGate rồi thử lại.',
  minUsed: 'Đã dùng {{used}}',
  setupContinueButton: 'Tiếp tục thiết lập',
  setupWizardTitle: 'Thiết lập bảo vệ',
  setupWizardProgress: 'Đã xong {{done}}/{{total}}',
  setupWizardRequired: 'Bắt buộc',
  setupWizardOptional: 'Tùy chọn',
  setupWizardSkip: 'Để sau',
  setupWizardWatchGuide: 'Xem hướng dẫn',
  setupGrantStuckHint:
    'Đã bật mà không thấy thay đổi? Hãy khởi động lại TV rồi thử lại.',
  setupWizardAllDoneTitle: 'Hoàn tất',
  setupWizardAllDoneSubtitle: 'Thiết bị này đã được bảo vệ.',
  setupWizardStepDone: 'Xong — mục này đã bật.',
  setupWizardCoreDoneTitle: 'Đã bật bảo vệ cốt lõi',
  setupWizardCoreDoneBody:
    'Các quyền bắt buộc đã được cấp và thiết bị này đã được bảo vệ. Các bước còn lại là phần bổ sung tùy chọn, có thể làm ngay hoặc để sau.',
  setupWizardCoreDoneContinue: 'Tăng cường ngay',
  setupWizardCoreDoneLater: 'Hoàn tất sau',
  setupWizardParentPinNote: 'Cần mã PIN phụ huynh — bố mẹ nhập ở màn hình tiếp theo.',
} as const;
