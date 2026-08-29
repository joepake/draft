/**
 * Cửa sổ của KidGate trên macOS.
 *
 * Giọng dành cho phụ huynh: bình tĩnh, đúng sự thật, không hứa điều nền tảng
 * không làm được. Phần lớn namespace này tồn tại để nói rõ một chiếc Mac
 * *không* làm được gì.
 *
 * Chữ hiển thị cho trẻ khi máy bị khóa không nằm ở đây — nó dùng lại `child.*`.
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

  lockState: 'Thiết bị đang khóa',
  lockStateNo: 'Không',
  stateNotChecked: 'Chưa kiểm tra',
  lockStateParent: 'Có — phụ huynh đã khóa',
  lockStateSchedule: 'Có — Giờ khóa thiết bị',
  lockStateDailyLimit: 'Có — đã hết Giới hạn hằng ngày',

  appBlocking: 'Chặn ứng dụng',
  appBlockingBestEffort:
    'Ở mức tương đối — ứng dụng bị đóng sau khi mở, không bị ngăn từ đầu',

  webFilterLabel: 'Lọc web',
  webFilterUnavailable: 'Không dùng được trên máy Mac này',
  notSupportedOnThisDevice: 'Thiết bị này không hỗ trợ',
  filterAwaitingApproval: 'Đang chờ phê duyệt trong System Settings',
  filterSwitchedOff: 'Đang tắt trong System Settings',
  filterInterrupted: 'Đã dừng sau sự cố — KidGate sẽ bật lại',
  setupFilterApprovalBody: 'Bật KidGate trong Network Extensions để bắt đầu lọc web.',
  setupFilterSwitchBody:
    'Filter Network Content đang tắt với KidGate. Bật lại để tiếp tục lọc.',
  setupOpenSettings: 'Mở Cài đặt',
  setupTitle: 'Hoàn tất thiết lập thiết bị này',
  setupRowLabel: 'Quyền',
  setupRowHint: 'Xem thiết bị này còn cần bạn cho phép những gì.',
  setupStepBlockedNoPrompt:
    'Đã bị từ chối, và thiết bị này không hỏi lại — hãy bật KidGate trong Cài đặt → Quyền riêng tư và bảo mật.',
  setupSubtitle:
    'Hệ thống hỏi quyền cho từng mục dưới đây, và chỉ người đang ngồi trước thiết bị này mới đồng ý được. Làm ngay bây giờ để sau này con bạn không bị hỏi.',
  setupStepFilterApprovalTitle: 'Phê duyệt lọc web',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting:
    'Chỉ xuất hiện trong System Settings sau khi bước ở trên được phê duyệt.',
  setupStepLocationBody:
    'Cho gia đình biết thiết bị này đang ở đâu. Không có gì được chia sẻ cho tới khi bạn bật “Chia sẻ vị trí”.',
  setupStepCameraTitle: 'Camera',
  setupStepCameraBody:
    'Đính kèm ảnh khi con bạn gửi SOS hoặc trả lời Báo an toàn. Bây giờ chưa chụp ảnh nào.',
  setupStepDone: 'Đã thiết lập — không còn việc gì ở đây.',
  setupStepBlocked:
    'Đã bị từ chối trước đó. macOS chỉ hỏi một lần — hãy bật KidGate trong Privacy & Security.',

  scheduleLabel: 'Giờ khóa thiết bị',
  dailyLimitLabel: 'Giới hạn hằng ngày',
  enforcedHere: 'Đang bật, do KidGate áp dụng',

  screenTimeLabel: 'Thời gian sử dụng',
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
