export const messageMonitoring = {
  actionTitle: 'Cảnh báo tin nhắn',
  actionDescription: 'Nhận cảnh báo khi tin nhắn có từ ngữ đáng lo ngại',
  title: 'Cảnh báo nội dung',
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
  flaggedTermMeaning: 'Nghĩa: {{gloss}}',
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
  guidanceToggle: 'Nên làm gì tiếp',
  guidanceHide: 'Ẩn',
  guidanceFooter:
    'KidGate không lưu nội dung tin nhắn — chỉ lưu từ này. Những gì hơn thế phải do con kể cho bạn.',
  guidance: {
    predator:
      'Dụ dỗ thường bắt đầu rất thân thiện, từ một người mà con tin là bạn cùng tuổi. Hãy hỏi dạo này con hay nói chuyện với ai và hai bên biết nhau thế nào, trước khi nhắc đến cảnh báo — con thấy như bị bắt lỗi thì sẽ im lặng.',
    selfHarm:
      'Những từ như thế này thường là một tín hiệu hơn là một kế hoạch, và hỏi thẳng về chúng không hề gieo ý nghĩ đó vào đầu con. Hãy nói bạn đã thấy gì và bạn không tức giận; nếu câu trả lời khiến bạn lo, hãy gọi đường dây hỗ trợ tâm lý ngay trong ngày.',
    explicit:
      'Có thể là thứ ai đó gửi cho con, thứ con bị cho xem, hoặc thứ chính con gõ ra. Hãy xác định là trường hợp nào trước khi phản ứng — bị gửi nội dung nhạy cảm là chuyện khác với việc tự gửi đi.',
    violence:
      'Một lời đe dọa vẫn đáng để ý kể cả khi nghe như trò đùa giữa bạn bè. Hãy hỏi xem có phải từ người ở trường không; nếu đúng, nhà trường là cách nhanh nhất để chặn lại.',
    bullying:
      'Trẻ rất ít khi tự kể chuyện này, và cùng những từ đó xuất hiện dù con là người bị nhắm vào hay là người tham gia. Hãy hỏi chuyện gì đã xảy ra thay vì lỗi của ai, và ghi lại ngày tháng để dùng khi cần nói với trường.',
    drugs:
      'Một từ bị đánh dấu không phải bằng chứng con đã dùng — tò mò, bài hát hay lời trêu nhau đều làm bật cảnh báo. Hãy hỏi thẳng thắn thay vì đi soát phòng con; điều quan trọng nhất là con vẫn còn kể cho bạn.',
    alcohol:
      'Rất thường gặp trong chuyện trò tuổi teen, nên hãy coi đây là bối cảnh chứ chưa phải bằng chứng. Đây là lúc tốt để nói rõ quy định của gia đình, trước khi một buổi tiệc làm chuyện đó thành gấp.',
    tobacco:
      'Thuốc lá điện tử lan theo nhóm bạn và thường mang tính rủ rê hơn là che giấu. Hãy hỏi bạn bè con đang dùng loại gì — gọi đúng tên thứ đó hiệu quả hơn một lời cảnh báo chung.',
    gambling:
      'Hộp quà ngẫu nhiên, gói thẻ và cá cược vật phẩm đều tính là cờ bạc, và trẻ ít khi thấy đó là cờ bạc. Hãy xem con đang tiêu gì trong game trước khi coi đây là vấn đề tiền bạc.',
    profanity:
      'Ngôn từ thô tục tự nó rất phổ biến và thường không nói gì về an toàn của con. Nếu những cảnh báo này chỉ gây ồn cho gia đình bạn, hãy tắt “Cảnh báo cả ngôn từ tục tĩu” trong phần cài đặt ở màn hình này.',
    unknown:
      'Cảnh báo này đến từ một thiết bị hoặc danh sách từ mà bản này không còn gọi tên. Từ bị đánh dấu ở trên là thứ cần hỏi; không có gì khác về tin nhắn được lưu lại.',
  },
  setupTitle: 'Nhắn tin an toàn',
  setupBody:
    'Theo dõi tin nhắn để phát hiện từ ngữ đáng lo ngại. KidGate không bao giờ hiển thị nội dung tin nhắn — chỉ cảnh báo khi có điều đáng lo.',
  setupGrant: 'Cho phép truy cập thông báo',
  setupEnable: 'Nhắn tin an toàn',
  controlledByParentHint:
    'Bật hoặc tắt từ ứng dụng KidGate trên máy của bố mẹ, không phải ở đây.',
  parentIncomingLabel: 'Quét tin nhắn con nhận',
  parentOutgoingLabel: 'Quét tin nhắn con gõ',
  parentSearchLabel: 'Quét nội dung con tìm kiếm',
  parentSearchHint:
    'Trình duyệt và YouTube. Chỉ từ bị gắn cờ được báo, không bao giờ báo nội dung tìm kiếm.',
  parentToggleHintGranted: 'Trên máy này.',
  parentToggleHintNotGranted:
    'Máy này chưa cấp quyền — mở KidGate trên máy của con để cấp.',
  parentProfanityLabel: 'Cảnh báo cả ngôn từ tục tĩu',
  parentProfanityHint:
    'Mặc định tắt — chửi thề thông thường rất phổ biến, bật lên sẽ khiến những từ này cũng thành cảnh báo.',
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
  directionSearch: 'Đã tìm',
  alertBodyIncoming: 'Tin nhắn đến từ ứng dụng',
  alertBodyOutgoing: 'Tin nhắn gửi đi từ ứng dụng',
  alertBodySearch: 'Tìm kiếm trên',
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
