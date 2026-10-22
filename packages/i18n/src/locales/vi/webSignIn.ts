export const webSignIn = {
  title: 'Đăng nhập trên máy tính',
  subtitle: 'Quản lý gia đình từ trình duyệt',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Trình duyệt chỉ vào được gia đình bạn sau khi bạn cho phép từ điện thoại này.',
  stepsTitle: 'Trên máy tính',
  step1: 'Mở {{url}} bằng trình duyệt.',
  step2: 'Chờ trang đăng nhập hiện mã QR.',
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
    'Trình duyệt sẽ có quyền như điện thoại này: xem vị trí của con, đổi giới hạn, khóa thiết bị và duyệt yêu cầu. Trình duyệt đổi được cài đặt trong 7 ngày, và bạn có thể gỡ bất cứ lúc nào tại Gia đình → Phụ huynh. Chỉ cho phép nếu chính bạn đang đăng nhập.',
  confirmCodeLabel: 'Mã trên máy tính',
  approveButton: 'Cho phép',
  declineButton: 'Không cho phép',
  declinedToast: 'Đã từ chối trình duyệt.',
  approvedTitle: 'Đã cho phép trình duyệt',
  approvedBody: 'Máy tính đang đăng nhập. Bạn có thể cất điện thoại.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Mã QR này không phải mã đăng nhập web. Kiểm tra xem máy tính đã mở màn hình đăng nhập chưa.',
  expired: 'Mã đã hết hạn. Hãy tạo mã mới trên máy tính.',
  alreadyUsed: 'Mã này đã được dùng. Hãy tạo mã mới trên máy tính.',
  notFound: 'Mã không hợp lệ. Kiểm tra lại 6 ký tự rồi thử lại.',
  failed: 'Không thể hoàn tất yêu cầu. Vui lòng thử lại.',

  // Browsers list, Family → Parents and the dashboard's Parents area. Removing
  // a browser ends its right to change things; it does not sign it out, and
  // the confirmation says so rather than promising more.
  // `{{browser}}` and `{{os}}` are brand names from `webSessionLabel`, never
  // translated; `sessionRowUnknown` is for a user-agent that names no browser.
  sessionsTitle: 'Bảng điều khiển',
  sessionRow: '{{browser}} trên {{os}}',
  sessionRowUnknown: 'Trình duyệt web',
  sessionExpires: 'Đổi được cài đặt đến {{date}}',
  sessionViaQr: 'Đã duyệt bằng mã QR',
  sessionViaPin: 'Đã mở khóa bằng mã PIN phụ huynh',
  thisBrowser: 'Trình duyệt này',
  sessionsRevoke: 'Gỡ',
  sessionsRevokeConfirmTitle: 'Gỡ trình duyệt này?',
  sessionsRevokeConfirmBody:
    'Trình duyệt này sẽ không đổi được cài đặt hay điều khiển thiết bị nữa. Riêng một vài thông tin của thiết bị, như tên, thì nó vẫn sửa được đến ngày ghi trên dòng này. Nó cũng vẫn xem được thông tin gia đình cho đến khi có người bấm Đăng xuất trên trình duyệt đó.',
  revokedToast: 'Đã gỡ trình duyệt.',
  revokeFailed: 'Không thể gỡ trình duyệt này. Vui lòng thử lại.',
} as const;
