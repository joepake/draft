export const permissions = {
  cameraPermissionRequired: 'Cần quyền camera để sử dụng tính năng này.',
  allowCameraTitle: 'Cho phép camera',
  cameraPermissionMessage:
    'KidGate sử dụng camera để gửi kèm một ảnh nhanh cùng SOS và Báo an toàn.',
  allow: 'Cho phép',
  notNow: 'Để sau',
  cameraTurnedOffTitle: 'KidGate chưa được dùng camera',
  cameraTurnedOffMessage:
    'Vui lòng mở Cài đặt và bật Camera để Báo an toàn và SOS có thể gửi kèm ảnh.',
  openSettings: 'Mở Cài đặt',
  notificationsLabel: 'Thông báo',
  notificationsAllowed: 'Đã bật thông báo cho KidGate.',
  notificationsOpenSettings:
    'Vui lòng mở Cài đặt thiết bị để cho phép thông báo cho KidGate.',
  backgroundRefreshLabel: 'Làm mới ứng dụng nền',
  backgroundRefreshHint: 'Cho phép KidGate tiếp tục hoạt động khi chạy nền.',
  backgroundRefreshLowPowerHint:
    'Chế độ nguồn điện thấp đang bật — iOS sẽ tắt Làm mới ứng dụng nền. Vui lòng tắt Chế độ nguồn điện thấp, sau đó bật lại Làm mới ứng dụng nền.',
  overlayLabel: 'Hiển thị trên ứng dụng khác',
  overlayHint:
    'Cho phép KidGate hiển thị màn hình khóa đè lên ứng dụng khác khi giới hạn được áp dụng.',
  batteryOptimizationLabel: 'Pin không bị hạn chế',
  batteryOptimizationHint: 'Ngăn Android tạm dừng KidGate khi chạy nền.',
  exactAlarmLabel: 'Chuông báo và lời nhắc',
  exactAlarmHint:
    'Cho phép Chuông báo và lời nhắc để Giờ khóa thiết bị bắt đầu và kết thúc đúng giờ.',
  accessibilityLabel: 'Trợ năng (hỗ trợ khóa)',
  accessibilityHint: 'Giữ màn hình khóa KidGate hiển thị đè lên ứng dụng khác.',
  oemSectionDescription:
    'Thiết bị {{brand}} thường tạm dừng các ứng dụng chạy nền. Vui lòng hoàn tất các bước sau để chức năng khóa và Giờ khóa thiết bị hoạt động ổn định.',
  oemAutostartLabel: 'Cho phép tự khởi động',
  oemAutostartHintXiaomi:
    'Trong mục Tự khởi động, hãy bật KidGate để tính năng bảo vệ được khôi phục sau khi khởi động lại thiết bị.',
  oemAutostartHintSamsung:
    'Trong Pin → Giới hạn sử dụng dưới nền → Ứng dụng không bao giờ ngủ, hãy thêm KidGate. Nếu không thấy KidGate trong danh sách thì máy đã cho phép sẵn và bước này xong rồi.',
  oemAutostartHintOppo: 'Trong Khởi động tự động (Auto-launch), hãy cho phép KidGate.',
  oemAutostartHintVivo:
    'Trong Tự khởi động, và trong mục cảnh báo ứng dụng hao pin nền, hãy cho phép KidGate.',
  oemAutostartHintHuawei:
    'Trong Quản lý khởi động, hãy đặt KidGate ở chế độ Quản lý thủ công và bật toàn bộ quyền.',
  oemAutostartHintOther:
    'Cho phép KidGate tự khởi động trong phần cài đặt bảo mật hoặc pin của thiết bị.',
  markDone: 'Đã xong',
  overlayStepAllow: 'Bật “Hiển thị trên ứng dụng khác” cho KidGate.',
  accessibilityStepOpenSettings:
    'Chọn Cài đặt bên dưới — thao tác này mở thẳng trang Trợ năng của KidGate.',
  accessibilityStepFindKidGate:
    'Nếu danh sách đầy đủ hiện ra, hãy chọn KidGate trong mục Ứng dụng đã tải xuống.',
  accessibilityStepTurnOn:
    'Bật công tắc, sau đó chọn Cho phép trên hộp thoại xác nhận của Android.',
  accessibilityWarningNote:
    'Android sẽ cảnh báo rằng KidGate có thể quan sát thao tác của bạn. Đó là cách màn hình khóa luôn hiển thị đè lên ứng dụng khác — KidGate không đọc mật khẩu hay tin nhắn cá nhân.',
  uninstallProtectionWizardBody:
    'Ngăn gỡ cài đặt ứng dụng này khi chưa nhập mã PIN phụ huynh. Android sẽ hiển thị màn hình xác nhận riêng.',
  notificationsWizardBody:
    'Cho phép thông báo để thiết bị này nhận ngay kết quả duyệt yêu cầu thêm giờ và các lời nhắc.',
  backgroundRefreshStepOpen: 'Mở trang KidGate trong Cài đặt.',
  backgroundRefreshStepTurnOn: 'Bật Làm mới ứng dụng nền cho KidGate.',
  backgroundRefreshStepGeneral:
    'Nếu nút bị mờ, hãy mở Cài đặt, chọn Cài đặt chung, rồi bật Làm mới ứng dụng nền.',
  batteryStepAllow: 'Chọn Cho phép trên hộp thoại của Android.',
  batteryStepAppInfo:
    'Nếu không thấy hộp thoại, mở Thông tin ứng dụng, chọn Pin, rồi chọn Không bị hạn chế.',
  notificationsStepAllow: 'Chạm Cho phép trên hộp thoại.',
  exactAlarmStepTurnOn: 'Bật Chuông báo và lời nhắc cho KidGate.',
  cameraStepTurnOn: 'Bật Máy ảnh cho KidGate.',
  uninstallProtectionStepConfirm: 'Chạm Kích hoạt trên màn hình xác nhận của Android.',
} as const;
