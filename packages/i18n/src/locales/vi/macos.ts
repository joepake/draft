/**
 * Cửa sổ của KidGate trên macOS.
 *
 * Giọng dành cho phụ huynh: bình tĩnh, đúng sự thật, không hứa điều nền tảng
 * không làm được. Phần lớn namespace này tồn tại để nói rõ một chiếc Mac
 * *không* làm được gì.
 *
 * Chữ hiển thị cho trẻ khi máy bị khoá không nằm ở đây — nó dùng lại `child.*`.
 */
export const macos = {
  headingNow: 'Hiện tại',
  headingEnforce: 'Máy Mac này áp dụng được gì',
  headingEnforceHint: 'Những gì bố mẹ đã đặt, và máy Mac này giữ được chắc đến đâu.',
  headingRemovable: 'Mức độ dễ gỡ bỏ',

  parentAccessBody: 'Nhập mã PIN của bố mẹ để chọn ứng dụng bị chặn trên máy Mac này.',
  checking: 'Đang kiểm tra…',

  enforcing: 'Bảo vệ đang chạy',
  enforcingYes: 'Có',
  enforcingFailed: 'Không — {{count}} lần kiểm tra liên tiếp bị lỗi',

  lockState: 'Thiết bị đang khoá',
  lockStateNo: 'Không',
  lockStateNotChecked: 'Chưa kiểm tra',
  lockStateParent: 'Có — phụ huynh đã khoá',
  lockStateSchedule: 'Có — Giờ Chặn',
  lockStateDailyLimit: 'Có — đã hết Giới Hạn Hằng Ngày',

  appBlocking: 'Chặn ứng dụng',
  appBlockingBestEffort:
    'Ở mức tương đối — ứng dụng bị đóng sau khi mở, không bị ngăn từ đầu',

  webFilterLabel: 'Lọc web',
  webFilterUnavailable: 'Không dùng được trên máy Mac này',
  notSupportedOnThisDevice: 'Thiết bị này không hỗ trợ',

  scheduleLabel: 'Giờ Chặn',
  dailyLimitLabel: 'Giới Hạn Hằng Ngày',
  enforcedHere: 'Đang bật, do KidGate áp dụng',

  screenTimeLabel: 'Thời Gian Sử Dụng',
  screenTimeAgentMeasured:
    'Do KidGate đếm. Khoảng thời gian KidGate không chạy sẽ không được tính.',

  batteryLabel: 'Pin',
  batteryReported: 'Có báo về cho gia đình',
  batteryNone: 'Máy Mac này không có pin',

  locationLabel: 'Vị trí',
  locationOff: 'Tắt',
  locationCoarse: 'Tương đối — dựa vào Wi-Fi, không phải GPS',

  accountLabel: 'Tài khoản của trẻ',
  accountStandard: 'Thường',
  accountAdmin: 'Quản trị — tài khoản này có thể tắt hẳn KidGate',

  restartLabel: 'Tự chạy lại nếu bị đóng',
  restartYes: 'Có',
  restartNo: 'Không — chưa cài đặt xong',

  forceQuitLabel: 'Số lần KidGate bị đóng',

  startAtLoginSectionTitle: 'Khởi động',
  startAtLoginSectionDescription:
    'KidGate chỉ đo thời gian sử dụng và áp dụng quy tắc khi đang chạy.',
  startAtLoginLabel: 'Mở KidGate khi đăng nhập',
  startAtLoginHintOn: 'KidGate khởi động cùng thiết bị và tự mở lại nếu bị đóng.',
  startAtLoginHintOff: 'Không đo hay chặn gì cho đến khi có người mở lại KidGate.',
  startAtLoginUnavailable: 'Thiết bị này không cho KidGate tự thêm vào khởi động.',

  stillRunningTitle: 'KidGate vẫn đang chạy',
  stillRunningBodyMac: 'Mở lại KidGate từ biểu tượng trên thanh menu.',
  stillRunningBodyWindows: 'Mở lại KidGate từ biểu tượng ở khu vực thông báo.',

  updateAvailableTitle: 'Đã có KidGate phiên bản mới',
  updateAvailableBody: 'KidGate {{version}} đã sẵn sàng để tải về.',
  updateAction: 'Tải bản mới',

  chooseApps: 'Chọn ứng dụng cần chặn',
  chooseAppsHint:
    'Chọn những ứng dụng cần chặn trên máy Mac này. Phụ huynh bật hoặc tắt việc chặn từ điện thoại.',
  saveSelection: 'Lưu',
  noAppsFound: 'Không tìm thấy ứng dụng nào trong thư mục Applications.',
};
