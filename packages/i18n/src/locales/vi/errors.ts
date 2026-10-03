export const errors = {
  timeRequestAlreadyResolved: 'Yêu cầu này đã được một phụ huynh khác xử lý.',
  emailAlreadyInUse: 'Email này đã được đăng ký.',
  invalidEmail: 'Địa chỉ email không hợp lệ.',
  weakPassword: 'Mật khẩu phải có ít nhất 6 ký tự.',
  invalidEmailOrPassword: 'Email hoặc mật khẩu không chính xác.',
  tooManyRequests: 'Bạn đã thử quá nhiều lần. Vui lòng chờ một lát rồi thử lại.',
  somethingWentWrong: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
  accountDisabled:
    'Tài khoản này đã bị vô hiệu hóa. Vui lòng liên hệ bộ phận hỗ trợ KidGate để khôi phục.',
  recentLoginRequired: 'Để bảo mật, vui lòng đăng nhập lại rồi thử lại thao tác này.',
  accountExistsDifferentMethod:
    'Email này đã có tài khoản với cách đăng nhập khác. Vui lòng đăng nhập bằng cách đó, rồi liên kết cách này trong Cài đặt.',
  unableToCreateAccount: 'Không thể tạo tài khoản. Vui lòng thử lại.',
  unableToSignIn: 'Không thể đăng nhập. Vui lòng thử lại.',
  unableToJoinFamilyAccount: 'Không thể tham gia tài khoản gia đình. Vui lòng thử lại.',
  enterEmailAddress: 'Vui lòng nhập địa chỉ email của bạn.',
  unableToCreatePairingCode: 'Không thể tạo mã ghép nối. Vui lòng thử lại.',
  unableToRedeemPairingCode:
    'Mã này không khớp. Hãy kiểm tra kỹ từng ký tự — hoặc lấy mã mới nếu mã đã tạo được một lúc.',
  unableToClaimChildPairing:
    'Không thể kết nối với thiết bị của trẻ. Vui lòng thử lại.',
  unableToPollChildPairing: 'Không thể kiểm tra trạng thái ghép nối. Vui lòng thử lại.',
  unableToConfirmChildPairing: 'Không thể xác nhận ghép nối. Vui lòng thử lại.',
  unableToRejectChildPairing: 'Không thể từ chối ghép nối. Vui lòng thử lại.',
  photoCaptureCancelled: 'Đã hủy chụp ảnh.',
  unableToOpenCamera:
    'Không thể mở camera. Vui lòng vào Cài đặt thiết bị để cấp quyền truy cập Camera.',
  noPhotoCaptured: 'Không thể chụp ảnh.',
  unableToOpenPhotoLibrary:
    'Không mở được thư viện ảnh. Hãy cho phép truy cập Ảnh trong Cài đặt thiết bị.',
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
  reconnect: 'Kết nối lại',
  unableToUploadPhoto: 'Không thể tải ảnh lên. Vui lòng thử lại.',
  premiumSubscriptionRequired:
    'Tính năng này cần gói Premium. Mọi quy tắc bạn đặt — giới hạn, giờ khóa, chặn ứng dụng, chặn nội dung web, vị trí và SOS — vẫn miễn phí.',
  trialEndedCannotJoinFamily:
    'Thời gian dùng thử đã kết thúc. Vui lòng đăng ký Premium để tham gia gia đình khác.',
  // Lỗi do server trả về. Khớp theo mã lỗi Cloud Functions trong
  // src/services/api/client.ts — sửa thì sửa cả hai ngôn ngữ.
  notFamilyMember: 'Bạn không còn thuộc gia đình này. Hãy nhờ chủ gia đình mời lại.',
  familyNotCreated: 'Vui lòng tạo gia đình trước khi mời phụ huynh khác.',
  parentLimitReached: 'Gia đình này đã có đủ số phụ huynh mà gói hiện tại cho phép.',
  childDeviceNotAllowed:
    'Đây là thiết bị của trẻ nên không thể thay đổi cài đặt gia đình.',
  deviceCredentialMissing:
    'Thiết bị này cần kết nối lại. Vui lòng đóng và mở lại KidGate, sau đó thử lại.',
  deviceNotFound: 'Thiết bị này không còn trong gia đình của bạn.',
  registerParentDeviceFirst:
    'Điện thoại này chưa được thiết lập làm thiết bị phụ huynh. Hãy mở KidGate tại đây, chọn Đây là thiết bị của phụ huynh ở màn hình bắt đầu, sau đó thử ghép nối lại.',
  pairingCodeFormat: 'Vui lòng nhập mã gồm 6 ký tự.',
  pairingCodeUsed: 'Mã này đã được sử dụng. Vui lòng lấy mã mới.',
  pairingCodeExpiredChild:
    'Mã đã hết hạn. Hãy nhờ con tạo mã mới trên thiết bị của con.',
  pairingCodeExpiredParent: 'Mã đã hết hạn. Hãy nhờ phụ huynh còn lại gửi mã mới.',
  pairingOwnFamily: 'Đây là gia đình của chính bạn, không cần tham gia lại.',
  pairingSessionNotFound: 'Yêu cầu ghép nối này không còn khả dụng.',
  pairingAlreadyCompleted: 'Thiết bị này đã được ghép nối.',
  pairingDeclined: 'Yêu cầu ghép nối đã bị từ chối trên thiết bị còn lại.',
  pairingNoParentWaiting:
    'Không có phụ huynh nào đang chờ xác nhận. Vui lòng bắt đầu lại từ thiết bị phụ huynh.',
  pairingRequestExpired: 'Yêu cầu ghép nối đã hết hạn. Vui lòng thực hiện lại từ đầu.',
  joinRequestNotFound: 'Yêu cầu tham gia này không còn khả dụng.',
  joinRequestResolved: 'Yêu cầu tham gia này đã được phản hồi.',
  joinRequestExpired:
    'Yêu cầu tham gia đã hết hạn. Vui lòng đề nghị chủ gia đình gửi lời mời mới.',
  timeRequestPendingExists: 'Con đã có một yêu cầu đang chờ bố mẹ trả lời rồi nhé.',
  timeRequestCooldown: 'Vui lòng chờ một lát trước khi gửi yêu cầu mới.',
  deviceClockOutOfRange:
    'Ngày giờ trên thiết bị này có vẻ không chính xác. Vui lòng mở Cài đặt → Ngày và giờ rồi bật đặt giờ tự động.',
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
  locationDailyLimitFree:
    'Bản miễn phí đã dùng hết lượt xem vị trí hôm nay. Vui lòng thử lại vào ngày mai — Premium theo dõi vị trí trực tiếp.',
  deviceLimitReached:
    'Gia đình này đã đạt số thiết bị tối đa KidGate hỗ trợ. Vui lòng gỡ một thiết bị không còn dùng rồi thử lại.',
  rewardTaskLimitReached:
    'Số nhiệm vụ đang hoạt động đã đạt mức tối đa cùng lúc. Hãy xóa bớt một nhiệm vụ hoặc chờ một nhiệm vụ hoàn thành, rồi thử lại.',
  deviceNotPaired:
    'Thiết bị này không còn được ghép nối với gia đình. Con hãy nhờ bố mẹ ghép nối lại nhé.',
  bonusMinutesOutOfRange:
    'Không thể cho thêm khoảng thời gian này trong một lần. Vui lòng chọn khoảng khác rồi thử lại.',
};
