export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate trên máy tính',
  title: 'Cho phép trình duyệt',
  subtitle: 'Quản lý gia đình từ máy tính',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Trình duyệt chỉ xem được gia đình bạn sau khi bạn cho phép từ điện thoại này.',
  stepsTitle: 'Trên máy tính',
  step1: 'Mở {{url}} bằng trình duyệt.',
  step2: 'Chọn “Đăng nhập bằng ứng dụng KidGate”.',
  step3: 'Quét mã QR hiện ra bằng camera bên dưới.',
  scanHint: 'Giữ mã QR nằm gọn trong khung.',
  manualTitle: 'Nhập mã 6 ký tự',
  manualHint: 'Mã được in ngay dưới mã QR trên máy tính.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Tiếp tục',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Cho phép trình duyệt này?',
  confirmBody:
    'Trình duyệt sẽ có quyền như điện thoại này: xem vị trí của con, đổi giới hạn, khóa thiết bị và duyệt yêu cầu. Chỉ cho phép nếu chính bạn đang đăng nhập.',
  confirmCodeLabel: 'Mã trên máy tính',
  approveButton: 'Cho phép',
  declineButton: 'Không cho phép',
  declinedToast: 'Đã từ chối trình duyệt.',
  approvedTitle: 'Đã cho phép trình duyệt',
  approvedBody: 'Máy tính đang đăng nhập. Bạn có thể đặt điện thoại xuống.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Mã QR này không phải mã đăng nhập web. Kiểm tra xem máy tính đã mở màn hình đăng nhập chưa.',
  expired: 'Mã đã hết hạn. Hãy tạo mã mới trên máy tính.',
  alreadyUsed: 'Mã này đã được dùng. Hãy tạo mã mới trên máy tính.',
  notFound: 'Mã không hợp lệ. Kiểm tra lại 6 ký tự rồi thử lại.',
  failed: 'Không thể hoàn tất yêu cầu. Vui lòng thử lại.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Trình duyệt được phép',
  sessionsEmpty: 'Chưa có trình duyệt nào đăng nhập vào tài khoản của bạn.',
  sessionsRevoke: 'Đăng xuất',
  sessionExpires: 'Hết hạn {{when}}',
  revokedToast: 'Đã đăng xuất trình duyệt đó.',
} as const;
