export const errors = {
  timeRequestAlreadyResolved: 'Yêu cầu này đã được một phụ huynh khác xử lý.',
  emailAlreadyInUse: 'Email này đã được đăng ký.',
  invalidEmail: 'Địa chỉ email không hợp lệ.',
  weakPassword: 'Mật khẩu phải có ít nhất 6 ký tự.',
  invalidEmailOrPassword: 'Email hoặc mật khẩu không chính xác.',
  tooManyRequests: 'Bạn đã thử quá nhiều lần. Vui lòng chờ một lát rồi thử lại.',
  somethingWentWrong: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
  unableToCreateAccount: 'Không thể tạo tài khoản. Vui lòng thử lại.',
  unableToSignIn: 'Không thể đăng nhập. Vui lòng thử lại.',
  unableToJoinFamilyAccount: 'Không thể tham gia tài khoản gia đình. Vui lòng thử lại.',
  enterEmailAddress: 'Vui lòng nhập địa chỉ email của bạn.',
  unableToCreatePairingCode: 'Không thể tạo mã ghép nối. Vui lòng thử lại.',
  unableToRedeemPairingCode: 'Mã ghép nối không chính xác hoặc đã hết hạn.',
  unableToClaimChildPairing:
    'Không thể kết nối với thiết bị của trẻ. Vui lòng thử lại.',
  unableToPollChildPairing: 'Không thể kiểm tra trạng thái ghép nối.',
  unableToConfirmChildPairing: 'Không thể xác nhận ghép nối. Vui lòng thử lại.',
  unableToRejectChildPairing: 'Không thể từ chối ghép nối. Vui lòng thử lại.',
  photoCaptureCancelled: 'Đã hủy chụp ảnh.',
  unableToOpenCamera:
    'Không thể mở camera. Vui lòng vào Cài đặt thiết bị để cấp quyền truy cập Camera.',
  noPhotoCaptured: 'Không thể chụp ảnh.',
  simulatorCameraHint:
    'Trên Simulator, vui lòng bật camera trước: menu Simulator → Camera → Front Camera, sau đó thử gửi SOS lại. Để chụp ảnh thật, hãy dùng thiết bị iPhone.',
  notSignedInReopenApp: 'Bạn chưa đăng nhập. Vui lòng đóng và mở lại ứng dụng.',
  accountMismatchSignOut: 'Tài khoản không khớp. Vui lòng đăng xuất và đăng nhập lại.',
  storageUploadUnauthorized:
    'Không thể tải ảnh lên vào lúc này. Vui lòng thử lại sau ít phút.',
  storageNotSetup: 'Không thể tải ảnh lên vào lúc này. Vui lòng thử lại sau ít phút.',
  noNetworkConnection:
    'Không có kết nối mạng. Vui lòng kiểm tra Wi‑Fi hoặc dữ liệu di động rồi thử lại.',
  connectionFailedTitle: 'Kết nối không thành công',
  connectionFailedBody:
    'KidGate không thể kết nối. Vui lòng kiểm tra Wi‑Fi hoặc dữ liệu di động, sau đó chọn Kết nối lại.',
  reconnect: 'Kết nối lại',
  unableToUploadPhoto: 'Không thể tải ảnh lên. Vui lòng thử lại.',
  premiumSubscriptionRequired:
    'Tính năng này cần gói Premium. Giới hạn hằng ngày, Giờ khóa thiết bị, vị trí và SOS vẫn miễn phí.',
  trialEndedCannotJoinFamily:
    'Thời gian dùng thử đã kết thúc. Vui lòng đăng ký Premium để tham gia gia đình khác.',
  // Lỗi do server trả về. Khớp theo mã lỗi Cloud Functions trong
  // src/services/api/client.ts — sửa thì sửa cả hai ngôn ngữ.
  notFamilyMember: 'Bạn không còn thuộc gia đình này. Hãy nhờ chủ gia đình mời lại.',
  familyNotCreated: 'Vui lòng tạo gia đình trước khi mời phụ huynh khác.',
  childDeviceNotAllowed:
    'Đây là thiết bị của trẻ nên không thể thay đổi cài đặt gia đình.',
  deviceCredentialMissing:
    'Thiết bị này cần kết nối lại. Vui lòng đóng và mở lại KidGate, sau đó thử lại.',
  deviceNotFound: 'Thiết bị này không còn trong gia đình của bạn.',
  registerParentDeviceFirst:
    'Vui lòng thiết lập thiết bị này là thiết bị phụ huynh trước, sau đó thử lại.',
  pairingCodeFormat: 'Vui lòng nhập mã gồm 6 ký tự.',
  pairingCodeUsed: 'Mã này đã được sử dụng. Vui lòng lấy mã mới.',
  pairingCodeExpiredChild:
    'Mã đã hết hạn. Hãy nhờ con tạo mã mới trên thiết bị của con.',
  pairingCodeExpiredParent: 'Mã đã hết hạn. Hãy nhờ phụ huynh kia gửi mã mới.',
  pairingOwnFamily: 'Đây là gia đình của chính bạn, không cần tham gia lại.',
  pairingSessionNotFound: 'Yêu cầu ghép nối này không còn khả dụng.',
  pairingAlreadyCompleted: 'Thiết bị này đã được ghép nối.',
  pairingDeclined: 'Yêu cầu ghép nối đã bị từ chối trên thiết bị còn lại.',
  pairingNoParentWaiting:
    'Không có phụ huynh nào đang chờ xác nhận. Vui lòng bắt đầu lại từ thiết bị phụ huynh.',
  pairingRequestExpired: 'Yêu cầu ghép nối đã hết hạn. Vui lòng thực hiện lại từ đầu.',
  joinRequestNotFound: 'Yêu cầu tham gia này không còn khả dụng.',
  joinRequestResolved: 'Yêu cầu tham gia này đã được phản hồi.',
  joinRequestExpired: 'Yêu cầu tham gia đã hết hạn. Vui lòng xin lời mời mới.',
  timeRequestPendingExists: 'Bạn đang có một yêu cầu chờ phụ huynh phản hồi.',
  timeRequestCooldown: 'Vui lòng chờ một lát trước khi gửi yêu cầu mới.',
  deviceClockOutOfRange:
    'Ngày giờ trên thiết bị này có vẻ không chính xác. Vui lòng chuyển sang chế độ cập nhật tự động.',
  locationSharingDisabled:
    'Thiết bị này đang tắt chia sẻ vị trí. Vui lòng bật lại trong cài đặt thiết bị rồi thử lại.',
  childDeviceNoPushToken:
    'Thiết bị của trẻ chưa thể nhận yêu cầu. Vui lòng mở KidGate trên thiết bị của trẻ và cấp quyền Thông báo.',
  unableToRequestLocation:
    'Không thể yêu cầu cập nhật vị trí vào lúc này. Vui lòng thử lại.',
  unableToVerifyPurchase: 'Không thể xác minh giao dịch. Vui lòng thử lại sau ít phút.',
  noPurchasesToRestore: 'Tài khoản này không có giao dịch nào để khôi phục.',
  noActiveSubscription: 'Không tìm thấy gói đăng ký đang hoạt động cho tài khoản này.',
  unableToRestorePurchases:
    'Không thể khôi phục giao dịch vào lúc này. Vui lòng thử lại.',
  alreadyInFamily: 'Bạn đã ở trong gia đình này.',
  leaveFamilyBeforeJoining:
    'Vui lòng rời khỏi gia đình hiện tại trước khi tham gia gia đình khác.',
  deviceLimitReached:
    'Gói này chỉ gồm một thiết bị của trẻ. Đăng ký để thêm thiết bị khác.',
};
