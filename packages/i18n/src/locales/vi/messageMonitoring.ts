export const messageMonitoring = {
  actionTitle: 'Cảnh báo tin nhắn',
  actionDescription: 'Nhận cảnh báo khi tin nhắn có từ ngữ đáng lo ngại',
  title: 'Cảnh báo tin nhắn',
  heroTitle: 'Nhắn tin an toàn',
  heroSubtitle:
    'KidGate phát hiện từ ngữ đáng lo ngại trong tin nhắn của con và báo cho bạn. Không hiển thị nội dung tin nhắn — chỉ từ bị đánh dấu.',
  androidOnlyNote: 'Chỉ có trên thiết bị Android.',
  recentTitle: 'Cảnh báo gần đây',
  emptyTitle: 'Chưa có cảnh báo',
  emptySubtitle: 'Chưa phát hiện từ ngữ đáng lo ngại nào trong tin nhắn.',
  emptySubtitleNotWatching:
    'Tin nhắn hiện không được kiểm tra, nên danh sách này sẽ trống dù có chuyện gì xảy ra.',
  flaggedTerm: 'Từ bị đánh dấu: “{{term}}”',
  flaggedTermPrefix: 'Từ bị đánh dấu: “',
  flaggedTermSuffix: '”',
  aiConfirmed: 'Được AI xác nhận',
  checkedTitle: 'Đã kiểm tra, không có gì đáng lo',
  checkedSubtitle:
    'Những từ nằm trong danh sách theo dõi đã xuất hiện nhưng xét trong ngữ cảnh là vô hại, nên bạn không được báo. Hiển thị ở đây để bạn thấy những gì đang được lọc thay mình — và báo lại nếu có mục nào đáng lẽ phải đến tay bạn.',
  categoryPredator: 'Nghi ngờ dụ dỗ',
  categorySelfHarm: 'Nghi ngờ tự làm hại',
  categoryExplicit: 'Nội dung nhạy cảm',
  categoryViolence: 'Đe dọa hoặc bạo lực',
  categoryBullying: 'Bắt nạt',
  categoryDrugs: 'Ma túy hoặc chất cấm',
  categoryAlcohol: 'Rượu bia',
  categoryTobacco: 'Thuốc lá',
  categoryGambling: 'Cờ bạc',
  categoryProfanity: 'Ngôn từ thô tục',
  categoryUnknown: 'Tin nhắn bị đánh dấu',
  setupTitle: 'Nhắn tin an toàn',
  setupBody:
    'Theo dõi tin nhắn để phát hiện từ ngữ đáng lo ngại. KidGate không bao giờ hiển thị nội dung tin nhắn — chỉ cảnh báo khi có điều đáng lo.',
  setupGrant: 'Cho phép truy cập thông báo',
  setupEnable: 'Nhắn tin an toàn',
  controlledByParentHint:
    'Bật hoặc tắt từ ứng dụng KidGate trên máy của bố mẹ, không phải ở đây.',
  parentIncomingLabel: 'Quét tin nhắn con nhận',
  parentOutgoingLabel: 'Quét tin nhắn con gõ',
  parentToggleHintGranted: 'Trên máy này.',
  parentToggleHintNotGranted:
    'Máy này chưa cấp quyền — mở KidGate trên máy của con để cấp.',
  parentToggleSaveFailed: 'Không lưu được thay đổi.',
  settingsTitle: 'Cài đặt cảnh báo tin nhắn',
  consentTitle: 'Phân tích tin nhắn bằng AI',
  consentBody:
    'Khi bật, những tin nhắn chưa rõ có đáng lo hay không sẽ được gửi — đã xóa tên, số và liên kết — tới dịch vụ AI để xác nhận có thật sự đáng lo trước khi báo cho bạn. Từ nguy cơ cao vẫn báo ngay mà không gửi gì.',
  consentEnable: 'Bật phân tích AI',
  consentConfirmTitle: 'Bật phân tích tin nhắn bằng AI?',
  consentConfirmBody:
    'Những tin nhắn chưa rõ có đáng lo hay không, đã xóa thông tin cá nhân, sẽ được gửi tới dịch vụ AI để kiểm tra. Bạn xác nhận đồng ý với việc xử lý này.',
  consentAgree: 'Tôi đồng ý',
  outgoingTitle: 'Tin nhắn con viết',
  outgoingBody:
    'KidGate có thể kiểm tra cả những gì con gõ trong ứng dụng chat. Nó tìm đúng những từ cảnh báo đó, ngay trên máy này. Nội dung tin nhắn không bao giờ được gửi đi đâu.',
  outgoingEnable: 'Kiểm tra tin nhắn con viết',
  outgoingGrant: 'Cho phép',
  directionIncoming: 'Nhận được',
  directionOutgoing: 'Đã gửi',
  alertBodyIncoming: 'Tin nhắn đến từ ứng dụng',
  alertBodyOutgoing: 'Tin nhắn gửi đi từ ứng dụng',
  aiLegend: 'Cảnh báo có biểu tượng này đã được AI xác nhận trước khi báo bạn.',
  setupRevoked:
    'Android đã tắt quyền mà mục này cần. Hãy cấp lại để tiếp tục kiểm tra tin nhắn.',
  outgoingRevoked:
    'Android đã tắt mục này. Hãy cấp lại để tiếp tục kiểm tra những gì bạn viết.',
  outgoingDisclosureTitle: 'Trước khi bạn cho phép',
  outgoingDisclosureBody:
    'KidGate chỉ đọc những gì bạn gõ trong ứng dụng nhắn tin — không đọc trong bất kỳ ứng dụng nào khác, và không bao giờ đọc ô mật khẩu. Việc tìm từ ngữ cảnh báo diễn ra ngay trên điện thoại này. Tin nhắn của bạn không được gửi đi đâu cả; chỉ từ bị đánh dấu mới đến bố mẹ.',
  outgoingRestrictedHint:
    'Nếu nút gạt bị mờ, hãy mở Cài đặt › Ứng dụng › KidGate, nhấn menu ⋮ rồi chọn “Cho phép cài đặt bị hạn chế”, sau đó quay lại.',
  notice: {
    revokedTitle: 'Việc kiểm tra tin nhắn đã dừng',
    revokedBody:
      'Android đã tắt một quyền KidGate cần, nên tin nhắn không còn được kiểm tra. Hãy mở KidGate trên thiết bị của con và cấp lại quyền.',
    offTitle: 'Nhắn tin an toàn chưa được bật',
    offBody:
      'Thiết bị của con chưa kiểm tra gì cả, nên sẽ không có cảnh báo nào xuất hiện ở đây. Hãy mở KidGate trên thiết bị của con để thiết lập.',
    pendingTitle: 'Đang chờ thiết bị của con áp dụng',
    pendingBody:
      'Bạn đã bật mục này. Thiết bị của con sẽ nhận thay đổi ở lần kết nối tiếp theo, thường trong vài phút — nhanh hơn nếu máy đang mở. Bạn không cần làm gì thêm.',
    unknownTitle: 'Đang chờ thiết bị của con',
    unknownBody:
      'Thiết bị này chưa báo về việc nhắn tin an toàn có đang chạy hay không, nên danh sách trống chưa nói lên điều gì. Thông tin sẽ cập nhật ở lần kết nối tiếp theo.',
    outgoingAvailableTitle: 'Kiểm tra cả những gì con viết',
    outgoingAvailableBody:
      'Tin nhắn con nhận được đang được kiểm tra. KidGate cũng có thể kiểm tra những gì con gõ trong ứng dụng nhắn tin — bắt nạt và tự làm hại bản thân xuất hiện ở đó nhiều hơn hẳn. Hãy thiết lập trên thiết bị của con.',
  },
  languagesLabel: 'Ngôn ngữ được quét',
  languagesHint:
    'Thiết bị sẽ tìm từ đáng lo trong những ngôn ngữ này. Chọn tối đa {{max}}.',
  languagesDefaultHint: 'Mặc định theo ngôn ngữ của thiết bị.',
} as const;
