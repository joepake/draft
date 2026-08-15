export const webFilter = {
  title: 'Chặn nội dung web',
  fallbackDeviceName: 'Thiết bị của trẻ',
  toastUpdateFailed: 'Không thể cập nhật Chặn nội dung web. Vui lòng thử lại.',
  heroTitle: 'Chặn các trang web người lớn',
  heroSubtitleIos:
    'Sử dụng bộ lọc nội dung web trong Thời gian sử dụng của Apple để hạn chế nội dung người lớn trên Safari và trình duyệt trong ứng dụng trên thiết bị của trẻ.',
  heroSubtitleAndroid:
    'Sử dụng VPN DNS cục bộ trên thiết bị Android của trẻ để chặn các tên miền người lớn đã biết trong trình duyệt và nhiều ứng dụng.',
  toggleLabel: 'Bật Chặn nội dung web',
  toggleHintIos: 'Cần quyền Thời gian sử dụng trên thiết bị của trẻ.',
  toggleHintAndroid:
    'Thiết bị của trẻ cần chấp nhận kết nối VPN của KidGate một lần. Vui lòng giữ VPN luôn bật để bộ lọc hoạt động.',
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
  removeDomain: 'Xoá {{domain}}',
  invalidDomain: 'Nhập địa chỉ trang, ví dụ vidu.com',
  listFull: 'Bạn chỉ lưu được tối đa {{max}} trang trong danh sách này.',
  openHistory: 'Lịch sử web',
  openHistorySubtitle: 'Xem máy này đã vào trang nào và trang nào bị chặn',
  category: {
    adult: 'Nội dung người lớn',
    gambling: 'Cờ bạc',
    dating: 'Hẹn hò',
    drugs: 'Ma tuý & rượu bia',
    violence: 'Bạo lực & cực đoan',
    piracy: 'Vi phạm bản quyền',
    social: 'Mạng xã hội',
    videoStreaming: 'Xem video',
    gaming: 'Trò chơi',
    shopping: 'Mua sắm',
  },
  categoryHint: {
    adult: 'Trang khiêu dâm và nội dung người lớn',
    gambling: 'Sòng bài, cá cược, hộp quà',
    dating: 'Ứng dụng hẹn hò và chat người lạ',
    drugs: 'Cần sa, thuốc lá điện tử, rượu',
    violence: 'Diễn đàn máu me và cực đoan',
    piracy: 'Torrent và xem lậu',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, cổng game',
    shopping: 'Amazon, Shopee, thời trang nhanh',
  },
} as const;
