export const webFilter = {
  title: 'Chặn nội dung web',
  fallbackDeviceName: 'Thiết bị của trẻ',
  appliesToAll: 'Áp dụng cho cả {{count}} thiết bị của {{name}}',
  coverageLine: 'Đang chặn trên {{enforcing}}/{{total}} thiết bị',
  mergeNotice:
    'Các thiết bị của {{name}} đang có cài đặt bộ lọc web khác nhau. Lưu tại đây sẽ áp dụng một bộ cài đặt cho tất cả, gộp theo hướng chặt chẽ hơn.',
  mergeLoosened: 'Nay được phép trên mọi thiết bị: {{domains}}',
  toastUpdateFailed: 'Không thể cập nhật Chặn nội dung web. Vui lòng thử lại.',
  heroTitle: 'Chặn các trang web người lớn',
  heroSubtitleIos:
    'Sử dụng bộ lọc nội dung web trong Thời gian sử dụng của Apple để hạn chế nội dung người lớn trên Safari và trình duyệt trong ứng dụng trên thiết bị của trẻ.',
  heroSubtitleAndroid:
    'Sử dụng VPN DNS cục bộ trên thiết bị Android của trẻ để chặn các tên miền người lớn đã biết trong trình duyệt và nhiều ứng dụng.',
  heroSubtitleMacos:
    'Chạy bộ lọc nội dung của KidGate trên Mac của con để chặn các trang web người lớn đã biết trong trình duyệt và nhiều ứng dụng.',
  toggleHintIos: 'Cần quyền Thời gian sử dụng trên thiết bị của trẻ.',
  toggleHintAndroid:
    'Thiết bị của trẻ cần chấp nhận kết nối VPN của KidGate một lần. Vui lòng giữ VPN luôn bật để bộ lọc hoạt động.',
  toggleHintMacos:
    'Con cần phê duyệt tiện ích mở rộng bộ lọc của KidGate một lần trong Cài đặt hệ thống. Giữ nó được phê duyệt để bộ lọc hoạt động.',
  toggleAccessibilityLabel: 'Bật Chặn nội dung web',
  infoTitle: 'Cách hoạt động',
  infoLine1Ios: 'Apple tự động lọc các trang web người lớn.',
  infoLine2Ios:
    'Tính năng này sử dụng bộ lọc nội dung người lớn của Apple trên Safari và không chặn được toàn bộ nội dung bên trong các ứng dụng khác.',
  infoLine3Ios:
    'KidGate áp dụng cài đặt này tự động khi ứng dụng trên thiết bị của trẻ đồng bộ các điều khiển.',
  infoLine1Android:
    'KidGate khởi chạy một VPN cục bộ để kiểm tra DNS và chặn các tên miền người lớn (đồng thời chặn một số dịch vụ DNS mã hóa).',
  infoLine2Android:
    'Vui lòng tắt DNS riêng tư trên thiết bị của trẻ. Nếu DNS riêng tư đang bật, trình duyệt có thể bỏ qua bộ lọc.',
  infoLine3Android:
    'Thiết bị của trẻ sẽ hiển thị biểu tượng VPN trong lúc lọc. Tắt VPN đồng nghĩa với tắt bộ lọc — hãy mở lại KidGate để khôi phục.',
  infoLine4Android: 'Vào Cài đặt → Mạng và Internet → DNS riêng tư → Tắt.',
  infoLine1Macos:
    'KidGate chạy bộ lọc nội dung trên Mac để kiểm tra những trang web đang được truy cập và chặn những trang thuộc danh mục bạn đã chọn.',
  infoLine2Macos:
    'Nếu bộ lọc hiện chưa được phê duyệt trên Mac của con, hãy mở Cài đặt hệ thống → Cài đặt chung → Mục đăng nhập & Tiện ích mở rộng để phê duyệt.',
  infoLine3Macos:
    'Mac của con sẽ hiện bộ lọc đang hoạt động khi được phê duyệt. Nếu bị tắt ở đó, hãy mở lại KidGate để khôi phục.',
  infoLine4Macos:
    'Bộ lọc đọc tên trang web, nhưng trình duyệt hiện đại ẩn tên này ở khoảng một nửa lượt truy cập — những trang đó sẽ không được kiểm tra theo danh mục của bạn. Dù vậy, bộ lọc vẫn chặn được hầu hết các trang mà trẻ tiếp cận theo cách này.',
  privateDnsBannerTitle: 'Tắt DNS riêng tư',
  privateDnsBannerBody:
    'DNS riêng tư đang bật nên Chặn nội dung web có thể bị bỏ qua. Vui lòng tắt để bộ lọc hoạt động.',
  privateDnsBannerButton: 'Mở cài đặt DNS',
  vpnConsentBannerTitle: 'Khôi phục VPN lọc web',
  vpnConsentBannerBody:
    'VPN của KidGate đang tắt. Chặn nội dung web cần VPN duy trì kết nối để hoạt động.',
  vpnConsentBannerButton: 'Bật VPN',
  iosOnlyNote: 'Sử dụng Thời gian sử dụng trên iOS',
  androidVpnNote: 'Sử dụng VPN DNS cục bộ trên Android',
  macosFilterNote: 'Dùng bộ lọc nội dung của KidGate trên Mac',
  webFilteringNote:
    'iOS dùng bộ lọc nội dung người lớn của Thời gian sử dụng; Android dùng danh sách chặn qua VPN DNS cục bộ.',
  safeSearchAlertsNote:
    'Safari không chia sẻ từ khóa tìm kiếm; cảnh báo theo từ khóa cần một trình duyệt an toàn được quản lý riêng.',
  webHistoryNote: 'Cần trình duyệt có bộ lọc hoặc cơ chế báo cáo qua DNS/VPN.',
  categoriesTitle: 'Chặn những gì',
  categoriesSubtitle:
    'KidGate dùng danh sách tên miền riêng. Chúng bao phủ những trang trẻ thực sự vào tới, không phải toàn bộ web — hãy kết hợp với danh sách bên dưới.',
  androidOnlyCategory: 'Chỉ Android — iOS không có điều khiển web theo danh mục',
  iosCategoryNote:
    'iPhone chỉ hỗ trợ {{category}}, dùng bộ lọc của Apple. Các danh mục còn lại áp dụng cho thiết bị Android.',
  allowListTitle: 'Luôn cho phép',
  allowListSubtitle: 'Những trang vẫn vào được kể cả khi một danh mục sẽ chặn chúng.',
  allowListEmpty: 'Chưa có ngoại lệ nào.',
  allowListInputAccessibility: 'Thêm trang luôn được phép',
  blockListTitle: 'Luôn chặn',
  blockListSubtitle: 'Những trang bị từ chối bất kể danh mục nói gì.',
  blockListEmpty: 'Chưa có trang nào bị chặn.',
  blockListInputAccessibility: 'Thêm trang luôn bị chặn',
  allowListOnlyLabel: 'Chỉ các trang được phép',
  allowListOnlyHintAndroid:
    'Mọi thứ ngoài danh sách cho phép đều bị từ chối. Cơ chế này chạy ở tầng DNS nên các ứng dụng khác cũng mất kết nối.',
  allowListOnlyHintIos:
    'Safari và trình duyệt trong ứng dụng chỉ mở được các trang trong danh sách cho phép.',
  allowListOnlyNeedsEntries: 'Thêm ít nhất một trang được phép trước khi bật.',
  domainPlaceholder: 'vidu.com',
  addDomain: 'Thêm trang',
  removeDomain: 'Xóa {{domain}}',
  invalidDomain: 'Nhập địa chỉ trang, ví dụ vidu.com',
  listFull: 'Bạn chỉ lưu được tối đa {{max}} trang trong danh sách này.',
  openHistory: 'Lịch sử web',
  openHistorySubtitle: 'Xem máy này đã vào trang nào và trang nào bị chặn',
  blockedPageTitle: 'Trang web đã bị chặn',
  blockedPageBody:
    'KidGate đã chặn trang này. Nếu con nghĩ đây là nhầm lẫn, hãy hỏi bố mẹ.',
  category: {
    adult: 'Nội dung người lớn',
    selfHarm: 'Tự làm hại bản thân & rối loạn ăn uống',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Giáo dục',
    utility: 'Tiện ích',
    browser: 'Trình duyệt web',
    devTools: 'Lập trình & công cụ kỹ thuật',
    messaging: 'Nhắn tin & gọi điện',
    community: 'Diễn đàn & cộng đồng',
    shortVideo: 'Video ngắn',
    creative: 'Ảnh, video & sáng tạo',
    productivity: 'Ghi chú & làm việc',
    reading: 'Sách & truyện tranh',
    fileSharing: 'Chia sẻ & tải tệp',
    bypass: 'Công cụ lách kiểm soát',
    gambling: 'Cờ bạc',
    gameGambling: 'Hộp vật phẩm & cá cược vật phẩm',
    dating: 'Hẹn hò',
    strangerChat: 'Chat với người lạ',
    drugs: 'Ma túy & rượu bia',
    violence: 'Bạo lực & hình ảnh ghê rợn',
    extremism: 'Cực đoan & thù ghét',
    piracy: 'Vi phạm bản quyền',
    social: 'Mạng xã hội',
    videoStreaming: 'Xem video',
    music: 'Âm nhạc',
    gaming: 'Trò chơi',
    shopping: 'Mua sắm',
    aiCompanion: 'Bạn ảo AI',
    aiAssistant: 'Trợ lý AI',
    cryptoTrading: 'Tiền mã hóa & giao dịch',
    vpn: 'Ứng dụng VPN',
  },
  categoryHint: {
    adult: 'Trang khiêu dâm và nội dung người lớn',
    selfHarm: 'Diễn đàn cổ vũ tự làm hại bản thân, nhịn ăn',
    gambling: 'Sòng bài, cá độ thể thao, poker',
    gameGambling: 'Hộp vật phẩm ngẫu nhiên, cá cược vật phẩm và Roblox',
    dating: 'Ứng dụng hẹn hò',
    strangerChat: 'Các trang kiểu Omegle, chat video ngẫu nhiên',
    drugs: 'Cần sa, thuốc lá điện tử, rượu',
    violence: 'Trang ghê rợn và ảnh gây sốc',
    extremism: 'Diễn đàn thù ghét và cực đoan',
    piracy: 'Torrent và xem lậu',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, cổng game',
    shopping: 'Amazon, Shopee, mua sắm thời trang',
    aiCompanion: 'Character.AI, Replika, bot nhập vai',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, ứng dụng giao dịch',
    vpn: 'Trang tải VPN. Không chặn ứng dụng đã cài.',
  },
  categoryGroup: {
    harm: 'Nội dung có hại',
    contact: 'Người lạ',
    bypass: 'Né bộ lọc',
    ai: 'AI',
    entertainment: 'Giải trí & mạng xã hội',
    money: 'Mua sắm & tiền',
  },
  categoriesOnCount: 'Đang bật {{on}}/{{total}}',
  askToOpen: 'Xin bố mẹ',
  askToOpenSubtitle: 'Nếu bố mẹ đồng ý, trang này sẽ mở được.',
  askToOpenDomainLabel: 'Trang nào?',
  askToOpenPending: 'Con đã xin một trang rồi. Chờ bố mẹ trả lời nhé.',
  askToOpenTooSoon: 'Con vừa gửi yêu cầu. Thử lại sau một phút nhé.',
  requestsTitle: 'Yêu cầu mở trang',
  requestsSubtitle: 'Những trang thiết bị này xin bạn cho phép.',
  siteRequestApproved: 'Đã cho phép trang',
  siteRequestApprovedDescription:
    'Đã thêm {{domain}} vào Luôn cho phép trên {{deviceName}}.',
  siteRequestDenied: 'Đã từ chối yêu cầu mở trang',
  siteRequestDeniedDescription: '{{domain}} vẫn bị chặn trên {{deviceName}}.',
  siteRequestReceived: 'Yêu cầu mở trang',
  siteRequestReceivedDescription: '{{deviceName}} xin mở {{domain}}.',
} as const;
