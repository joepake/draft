export const pin = {
  title: 'Mã PIN phụ huynh',
  subtitleSet: 'Chạm để đổi mã PIN 6 chữ số',
  subtitleNotSet: 'Tạo mã PIN 6 chữ số để bảo vệ thiết lập trên thiết bị của trẻ',
  statusSet: 'Đã thiết lập',
  statusNotSet: 'Chưa thiết lập',
  unlockChildPinTitle: 'Mở khóa mã PIN trên {{deviceName}}',
  unlockChildPinSubtitle: 'Đặt lại số lần nhập sai mã PIN trên thiết bị này của trẻ',
  statusLocked: 'Đã khóa',
  toastPinUnlocked: 'Đã mở khóa mã PIN trên {{deviceName}}.',
  toastPinUnlockFailed: 'Không thể mở khóa mã PIN. Vui lòng thử lại.',
  toastPinSaved:
    'Đã lưu mã PIN phụ huynh. Hãy dùng mã này trên thiết bị của trẻ trước khi thay đổi danh sách ứng dụng bị chặn.',
  createParentPin: 'Tạo mã PIN phụ huynh',
  changeParentPin: 'Đổi mã PIN phụ huynh',
  parentPinSetupSubtitle:
    'Mã PIN 6 chữ số giúp bảo vệ thiết lập Chặn ứng dụng trên thiết bị của trẻ.',
  parentPinSetupHelper:
    'Thiết bị của trẻ sẽ yêu cầu mã PIN này trước khi thay đổi danh sách ứng dụng bị chặn.',
  parentPinMismatch: 'Hai lần nhập mã PIN không khớp nhau.',
  unableToSaveParentPin: 'Không thể lưu mã PIN phụ huynh. Vui lòng thử lại.',
  onlyOwnerCanManageChildPin:
    'Chỉ chủ gia đình mới có thể tạo hoặc đổi mã PIN phụ huynh dùng trên thiết bị của trẻ.',
  parentPinRequired: 'Cần mã PIN phụ huynh',
  enterParentPinToContinue: 'Vui lòng nhập mã PIN phụ huynh 6 chữ số để tiếp tục.',
  parentPinLockoutMessage:
    'Đã nhập sai quá nhiều lần. Hãy nhờ bố mẹ mở khóa mã PIN trong phần Cài đặt phụ huynh.',
  parentPinHelperText:
    'Chỉ phụ huynh mới được thay đổi danh sách ứng dụng bị chặn hoặc đăng xuất — đó là mục đích của mã PIN. Nếu quên mã PIN, phụ huynh có thể đăng nhập KidGate trên bất kỳ thiết bị nào để đặt lại trong phần Cài đặt phụ huynh.',
  forgotPin: 'Quên mã PIN?',
  resetPinNotice:
    'Bạn đang đặt lại mã PIN với tư cách chủ tài khoản. Từ nay, thiết bị của trẻ sẽ yêu cầu mã PIN mới.',
  unableToVerifyParentPin: 'Mã PIN phụ huynh không chính xác. Vui lòng thử lại.',
  parentPinGateSubtitle: 'Vui lòng nhập mã PIN phụ huynh 6 chữ số để thay đổi cài đặt.',
  parentPinMustBeSixDigits: 'Mã PIN phụ huynh phải gồm đúng 6 chữ số.',
  pinSixDigits: 'Mã PIN (6 chữ số)',
  attemptsRemaining: 'Bạn còn {{count}} lần thử.',
  currentPin: 'Mã PIN hiện tại',
  newPin: 'Mã PIN mới',
  pin: 'Mã PIN',
  confirmPin: 'Xác nhận mã PIN',
  updatePin: 'Cập nhật mã PIN',
  savePin: 'Lưu mã PIN',
  pinLockedTitle: 'Mã PIN đã bị khóa',
  pinLockedBody:
    'Đã nhập sai quá nhiều lần. Hãy nhờ bố mẹ mở khóa mã PIN trong phần Cài đặt phụ huynh.',
  parentAccessRequiredTitle: 'Cần quyền phụ huynh',
  parentAccessRequiredBody:
    'Vui lòng nhập mã PIN để đổi tên thiết bị, chọn ứng dụng bị chặn hoặc đăng xuất.',
  unlockWithParentPinButton: 'Mở khóa bằng mã PIN phụ huynh',
  whyPinTitle: 'Vì sao cần mã PIN?',
  whyPinBody:
    'Mã PIN bảo đảm chỉ phụ huynh mới thay đổi được danh sách ứng dụng bị chặn hoặc đăng xuất khỏi KidGate. Việc đổi màu giao diện không cần mã PIN.',
  pinLockedToast:
    'Mã PIN đã bị khóa do nhập sai quá nhiều lần. Hãy nhờ bố mẹ mở khóa trong phần Cài đặt phụ huynh.',
  pinNotConfiguredToast:
    'Vui lòng tạo mã PIN 6 chữ số trong phần Cài đặt phụ huynh trên thiết bị phụ huynh trước.',
  enterSixDigitParentPin: 'Vui lòng nhập mã PIN phụ huynh 6 chữ số.',
  askParentCreatePin: 'Hãy nhờ bố mẹ tạo mã PIN phụ huynh trong phần Cài đặt trước.',
  incorrectPinAttemptsLeft: 'Mã PIN không chính xác. Bạn còn {{count}} lần thử.',
  enterCurrentParentPin: 'Vui lòng nhập mã PIN phụ huynh hiện tại.',
  currentParentPinIncorrect: 'Mã PIN phụ huynh hiện tại không chính xác.',
} as const;
