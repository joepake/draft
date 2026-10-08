export const webFilter = {
  title: 'Chặn nội dung web',
  fallbackDeviceName: 'Thiết bị của trẻ',
  appliesToAll: 'Áp dụng cho tất cả thiết bị của {{name}} ({{count}})',
  coverageLine: 'Đang chặn trên {{enforcing}}/{{total}} thiết bị',
  mergeNotice:
    'Các thiết bị của {{name}} đang có cài đặt bộ lọc web khác nhau. Lưu tại đây sẽ áp dụng một bộ cài đặt cho tất cả, gộp theo hướng chặt chẽ hơn.',
  mergeLoosened: 'Từ giờ được phép trên mọi thiết bị: {{domains}}',
  toastUpdateFailed: 'Không thể cập nhật Chặn nội dung web. Vui lòng thử lại.',
  heroTitle: 'Chặn nội dung không phù hợp',
  heroSubtitleIos:
    'KidGate chạy một kết nối riêng trên iPhone hoặc iPad của con để chặn các trang web không phù hợp đã được nhận diện, trên trình duyệt và nhiều ứng dụng, song song với bộ lọc nội dung người lớn của Apple.',
  heroSubtitleAndroid:
    'KidGate lọc ngay trên thiết bị Android của trẻ để chặn các trang có nội dung không phù hợp đã biết, trong trình duyệt và nhiều ứng dụng.',
  heroSubtitleMacos:
    'Chạy bộ lọc nội dung của KidGate trên Mac của con để chặn các trang có nội dung không phù hợp đã biết trong trình duyệt và nhiều ứng dụng.',
  toggleHintIos:
    'Trên thiết bị của con, cần cho phép VPN của KidGate một lần rồi nhập mật mã máy. Vui lòng giữ VPN trên máy để bộ lọc hoạt động.',
  toggleHintAndroid:
    'Thiết bị của trẻ cần chấp nhận kết nối VPN của KidGate một lần. Vui lòng giữ VPN luôn bật để bộ lọc hoạt động.',
  toggleHintMacos:
    'Trẻ cần phê duyệt bộ lọc của KidGate một lần trong Cài đặt hệ thống, và giữ nguyên phê duyệt đó để bộ lọc hoạt động.',
  toggleAccessibilityLabel: 'Bật Chặn nội dung web',
  safeSearchSectionTitle: 'Tìm kiếm an toàn & YouTube',
  safeSearchSectionSubtitle:
    'Ép Google, Bing và DuckDuckGo trả kết quả an toàn và khóa YouTube ở chế độ hạn chế. Cần bật tính năng Chặn nội dung web.',
  safeSearchLabel: 'Bắt buộc tìm kiếm an toàn',
  safeSearchHint:
    'Khóa Tìm kiếm an toàn của Google, chế độ hạn chế của YouTube, và đặt Bing cùng DuckDuckGo ở mức nghiêm ngặt. Áp dụng cho Android, Android TV và Chrome.',
  safeSearchStrictNote:
    'YouTube chạy ở mức nghiêm ngặt nhất: bình luận bị ẩn và một số video bình thường cũng bị chặn. Trẻ không thể tắt chế độ này trong tài khoản của mình.',
  infoTitle: 'Cách hoạt động',
  infoLine1Ios:
    'KidGate lập một kết nối riêng ngay trên máy để kiểm tra những trang web đang được truy cập và chặn các trang thuộc danh mục bạn đã chọn.',
  infoLine2Ios:
    'Bộ lọc nội dung người lớn của Apple vẫn bật trên Safari và trình duyệt trong ứng dụng như một lớp bảo vệ thứ hai.',
  infoLine3Ios:
    'Biểu tượng VPN sẽ hiển thị trong lúc lọc. Nếu tắt VPN trong Cài đặt, VPN sẽ tự bật lại sau vài giây; nếu xóa VPN, bộ lọc sẽ dừng cho đến khi được cho phép lại trong KidGate.',
  infoLine1Android:
    'KidGate lập một kết nối riêng ngay trên máy để kiểm tra những trang web đang được truy cập và chặn các trang thuộc danh mục bạn đã chọn.',
  infoLine2Android:
    'Vui lòng tắt DNS riêng tư trên thiết bị của trẻ. Nếu DNS riêng tư đang bật, trình duyệt có thể bỏ qua bộ lọc.',
  infoLine3Android:
    'Thiết bị của trẻ sẽ hiển thị biểu tượng VPN trong lúc lọc. Tắt VPN đồng nghĩa với tắt bộ lọc — hãy mở lại KidGate để khôi phục.',
  infoLine4Android:
    'Trong Cài đặt, mở Mạng và Internet, chọn DNS riêng tư rồi chọn Tắt.',
  infoLine1Macos:
    'KidGate chạy bộ lọc nội dung trên Mac để kiểm tra những trang web đang được truy cập và chặn những trang thuộc danh mục bạn đã chọn.',
  infoLine2Macos:
    'Nếu bộ lọc hiện chưa được phê duyệt trên Mac của con, hãy mở Cài đặt hệ thống → Cài đặt chung → Mục đăng nhập & Tiện ích mở rộng để phê duyệt.',
  infoLine3Macos:
    'Mac của con sẽ hiện bộ lọc đang hoạt động khi được phê duyệt. Nếu bị tắt ở đó, hãy mở lại KidGate để khôi phục.',
  infoLine4Macos:
    'Bộ lọc đọc tên trang web, nhưng trình duyệt đời mới giấu tên này ở khoảng một nửa số lượt truy cập, nên những lượt đó không đối chiếu được với danh mục bạn chọn. Dù vậy, bộ lọc vẫn chặn được phần lớn các trang trẻ có thể vào.',
  privateDnsBannerTitle: 'Tắt DNS riêng tư',
  privateDnsBannerBody:
    'DNS riêng tư đang bật nên Chặn nội dung web có thể bị bỏ qua. Vui lòng tắt để bộ lọc hoạt động.',
  privateDnsBannerButton: 'Mở cài đặt DNS',
  vpnConsentBannerTitle: 'Bật lại VPN cho tính năng Chặn nội dung web',
  vpnConsentBannerBody:
    'VPN của KidGate đang tắt. Tính năng Chặn nội dung web cần VPN duy trì kết nối để hoạt động.',
  vpnConsentBannerButton: 'Bật VPN',
  vpnDisclosureNote:
    'Khi Chặn nội dung web đang bật, VPN của KidGate chỉ chạy trên thiết bị này. VPN thấy tên từng trang web mà thiết bị tra cứu — không bao giờ thấy nội dung trang, những gì được gõ hay dữ liệu nào khác. VPN chặn các trang bố mẹ đã chọn và cho bố mẹ xem những trang đã truy cập và đã bị chặn, lưu trong 30 ngày. KidGate không bao giờ bán dữ liệu này hay dùng vào việc gì khác.',
  iosOnlyNote: 'Dùng kết nối riêng và Thời gian sử dụng trên iPhone',
  androidVpnNote: 'Sử dụng VPN DNS cục bộ trên Android',
  macosFilterNote: 'Dùng bộ lọc nội dung của KidGate trên Mac',

  heroSubtitleWindows:
    'Chạy trình phân giải riêng của KidGate trên máy tính của trẻ để chặn các trang có nội dung không phù hợp đã biết trên mọi trình duyệt.',
  heroSubtitleExtension:
    'Chạy tiện ích KidGate trong Chrome trên máy tính của trẻ để chặn các trang có nội dung không phù hợp đã biết trong trình duyệt đó.',

  toggleHintWindows:
    'Không cần phê duyệt gì trên máy tính. Dịch vụ nền của KidGate bật bộ lọc trong vài giây.',
  toggleHintExtension:
    'Không cần phê duyệt gì. Bộ lọc chỉ chạy trong Chrome, không áp dụng cho trình duyệt hay ứng dụng khác.',

  infoLine1Windows:
    'KidGate chạy một trình phân giải trên máy, kiểm tra những trang đang được tra cứu và chặn các trang thuộc danh mục bạn chọn.',

  infoLine2Windows:
    'Chrome, Edge và Firefox bị ràng buộc theo bằng một thiết lập KidGate áp dụng. Trẻ không phải phê duyệt điều gì.',

  infoLine3Windows:
    'Việc này cần dịch vụ nền của KidGate. Nếu lọc web vẫn tắt, hãy cài lại KidGate trên máy bằng quyền quản trị viên.',

  infoLine4Windows:
    'Bộ lọc chỉ đọc tên trang. Nó không thấy bên trong một trang, và trang vừa được tra cứu có thể còn mở được vài phút.',
  infoLine1Extension:
    'Tiện ích KidGate kiểm tra từng trang trước khi Chrome mở và chặn các trang thuộc danh mục bạn đã chọn.',
  infoLine2Extension:
    'Chỉ Chrome được lọc, trong hồ sơ Chrome đã cài KidGate. Các trình duyệt và ứng dụng khác trên máy không được lọc.',
  infoLine3Extension:
    'Cửa sổ ẩn danh chỉ được lọc khi đã bật “Cho phép ở chế độ ẩn danh” cho tiện ích. Cửa sổ khách không được lọc.',
  infoLine4Extension:
    'Trang bị chặn cho phép con xin bạn mở trang đó. Gỡ hoặc tắt tiện ích sẽ làm bộ lọc ngừng hoạt động.',

  windowsFilterNote: 'Dùng trình phân giải riêng của KidGate trên Windows',
  extensionFilterNote: 'Dùng tiện ích KidGate trong Chrome',
  categoriesTitle: 'Chặn những gì',
  categoriesSubtitle:
    'KidGate dùng danh sách trang web riêng. Danh sách này bao phủ những trang trẻ thực sự hay vào, không phải toàn bộ Internet — hãy kết hợp thêm với danh sách bên dưới.',
  androidOnlyCategory: 'Không dùng được trên iPhone — hoạt động trên các thiết bị khác',
  iosCategoryNote:
    'iPhone chỉ hỗ trợ {{category}}, dùng bộ lọc của Apple. Các danh mục còn lại áp dụng cho các thiết bị khác.',
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
    'Mọi trang ngoài danh sách cho phép đều bị từ chối. Bộ lọc chặn ở mức toàn máy, nên các ứng dụng khác cũng sẽ mất kết nối.',
  allowListOnlyHintIos:
    'Safari và trình duyệt trong ứng dụng chỉ mở được các trang trong danh sách cho phép.',
  allowListOnlyHintExtension:
    'Chrome chỉ mở được các trang trong danh sách cho phép. Các trình duyệt và ứng dụng khác không bị ảnh hưởng.',
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
  askToOpenBlockedLabel: 'Vừa bị chặn',
  askToOpenPending: 'Con đã xin một trang rồi. Chờ bố mẹ trả lời nhé.',
  askToOpenTooSoon: 'Con vừa gửi yêu cầu. Thử lại sau một phút nhé.',
  askToOpenTooMany: 'Con chỉ xin được vài trang một lúc thôi.',
  requestsTitle: 'Yêu cầu mở trang',
  requestsSubtitle: 'Những trang con xin bạn cho phép mở trên thiết bị này.',
  siteRequestApproved: 'Đã cho phép trang',
  siteRequestApprovedDescription:
    'Đã thêm {{domain}} vào Luôn cho phép trên {{deviceName}}.',
  siteRequestDenied: 'Đã từ chối yêu cầu mở trang',
  siteRequestDeniedDescription: '{{domain}} vẫn bị chặn trên {{deviceName}}.',
  siteRequestReceived: 'Yêu cầu mở trang',
  siteRequestReceivedDescription: '{{deviceName}} xin mở {{domain}}.',
  privateDnsStep1: 'Mở Cài đặt trên thiết bị này.',
  privateDnsStep2: 'Chọn Mạng và Internet.',
  privateDnsStep3: 'Mở DNS riêng tư và chọn Tắt.',
  vpnConsentStepAllow:
    'Chạm OK trên yêu cầu VPN của Android. Biểu tượng chìa khóa sẽ hiển thị trên thanh trạng thái khi bộ lọc đang chạy.',
  vpnConsentStepAllowIos:
    'Chọn Cho phép khi iOS hỏi có cho KidGate thêm cấu hình VPN không, rồi nhập mật mã thiết bị. Biểu tượng VPN sẽ hiển thị khi bộ lọc đang chạy.',
} as const;
