export const userGuide = {
  title: 'Hướng dẫn sử dụng',
  subtitle:
    'Hướng dẫn từng bước về cấp quyền, kết nối thiết bị, điều khiển hằng ngày và các tính năng an toàn.',
  stepLabel: 'Bước {{n}}',
  stepsSectionTitle: 'Các bước thực hiện',
  tipTitle: 'Lưu ý',
  searchPlaceholder: 'Tìm trong hướng dẫn…',
  searchClear: 'Xóa tìm kiếm',
  searchEmpty: 'Không có mục hướng dẫn nào khớp. Hãy thử một từ khác.',
  groups: {
    gettingStarted: {
      title: 'Bắt đầu',
      description: 'Thiết lập lần đầu cho thiết bị phụ huynh và thiết bị của trẻ',
    },
    connection: {
      title: 'Kết nối thiết bị',
      description: 'Ghép nối thiết bị của trẻ hoặc mời thêm phụ huynh',
    },
    permissions: {
      title: 'Cấp quyền ứng dụng',
      description: 'Bật các quyền KidGate cần trên thiết bị của trẻ',
    },
    controls: {
      title: 'Điều khiển hằng ngày',
      description:
        'Giới hạn, lịch khóa, chặn ứng dụng, khóa thiết bị, thêm giờ và phần thưởng',
    },
    safety: {
      title: 'An toàn và theo dõi',
      description: 'Vị trí, Báo an toàn, SOS, Chặn nội dung web và cảnh báo bảo vệ',
    },
    reports: {
      title: 'Báo cáo và lịch sử',
      description:
        'Báo cáo thời gian sử dụng, lịch sử web và video, cảnh báo ứng dụng và tin nhắn',
    },
    account: {
      title: 'Tài khoản và gói dịch vụ',
      description:
        'Premium, thông báo, ngôn ngữ, bảng điều khiển trên web, mã PIN, hỗ trợ và xóa tài khoản',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Thiết lập thiết bị phụ huynh',
      summary: 'Tạo tài khoản, tạo gia đình và kết nối thiết bị đầu tiên của trẻ.',
      tip: 'Hãy thiết lập mã PIN phụ huynh sớm. Bạn cần mã PIN này để thay đổi các cài đặt quan trọng và mở khóa điều khiển trên thiết bị của trẻ.',
      steps: {
        '1': 'Cài KidGate trên thiết bị của bạn. Mở ứng dụng và chọn Đây là thiết bị của phụ huynh.',
        '2': 'Đăng nhập bằng Google hoặc Apple, hoặc tạo tài khoản bằng email.',
        '3': 'Trong [[Gia đình]], chạm [[Tạo gia đình]] rồi đặt tên gia đình (ví dụ: “Gia đình Nguyễn”). Tên này sẽ hiển thị khi các phụ huynh khác tham gia. Nếu một phụ huynh khác đã tạo gia đình, hãy chạm [[Tham gia gia đình]].',
        '4': 'Thiết lập mã PIN phụ huynh (6 chữ số) trong Cài đặt, mục Bảo mật. Hãy ghi nhớ hoặc lưu giữ ở nơi an toàn và không chia sẻ với trẻ.',
        '5': 'Khuyến nghị: bật Khóa ứng dụng và mở khóa bằng sinh trắc học trong Cài đặt để người khác không thể mở ứng dụng phụ huynh trên thiết bị của bạn.',
        '6': 'Mở [[Gia đình]], chạm + rồi chọn [[Thêm thiết bị của trẻ]]. Giữ màn hình này mở để quét mã QR hoặc nhập mã hiển thị trên thiết bị của trẻ.',
        '7': 'Sau khi thiết bị của trẻ được kết nối, mở hồ sơ của con trong mục Gia đình (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con). Hãy cùng con thiết lập Giới hạn hằng ngày, Giờ khóa thiết bị và hoàn tất việc cấp quyền.',
      },
    },
    getStartedChild: {
      title: 'Thiết lập thiết bị của trẻ',
      summary: 'Cài KidGate trên thiết bị của trẻ và hoàn tất việc cấp quyền.',
      tip: 'Nên thực hiện cùng phụ huynh. Nhiều màn hình cấp quyền chỉ xuất hiện một lần và rất dễ bỏ sót nếu tự thực hiện.',
      steps: {
        '1': 'Cài KidGate trên thiết bị của trẻ. Mở ứng dụng và chọn [[Đây là thiết bị của trẻ]].',
        '2': 'Giữ màn hình ghép nối luôn mở. Đưa mã QR cho phụ huynh hoặc đọc mã gồm 6 ký tự.',
        '3': 'Trên thiết bị phụ huynh, quét mã QR hoặc nhập mã. Trên thiết bị của trẻ, xác nhận phụ huynh khi được hỏi — chỉ chấp nhận người mà bạn biết rõ.',
        '4': 'Chờ đến khi màn hình chính hiển thị trạng thái đã kết nối. Không đóng hẳn KidGate trong quá trình thiết lập.',
        '5': 'Tại màn hình Trạng thái, hãy cấp toàn bộ quyền mà KidGate yêu cầu (thông báo, vị trí, camera và các quyền riêng theo nền tảng). Chạm từng dòng cho đến khi hiển thị đã cho phép.',
        '6': 'Hãy giữ KidGate được cài đặt và đăng nhập trên thiết bị của trẻ. Sau bước này, phụ huynh sẽ quản lý các giới hạn từ thiết bị của họ.',
      },
    },
    connectChild: {
      title: 'Kết nối điện thoại hoặc máy tính bảng của trẻ',
      summary:
        'Ghép nối một thiết bị mới của trẻ vào gia đình bằng mã QR hoặc mã ký tự.',
      tip: 'Mã ghép nối có thời hạn. Nếu ghép nối không thành công, hãy chạm Tạo mã mới trên thiết bị của trẻ rồi thử lại.',
      steps: {
        '1': 'Trên thiết bị của trẻ: mở KidGate và chọn [[Đây là thiết bị của trẻ]]. Giữ màn hình hiển thị mã QR hoặc mã ký tự.',
        '2': 'Trên thiết bị phụ huynh: mở [[Gia đình]] rồi chạm biểu tượng quét ([[Quét mã]]).',
        '3': 'Camera sẽ mở ngay: cấp quyền camera nếu được hỏi, sau đó đưa mã QR trên thiết bị của trẻ vào khung hình.',
        '4': 'Hoặc dùng mã ký tự: chạm [[Nhập mã thủ công]], nhập 6 ký tự hiển thị trên thiết bị của trẻ rồi tiếp tục.',
        '5': 'Trên thiết bị của trẻ, đọc kỹ màn hình xác nhận. Chỉ chạm [[Đồng ý kết nối]] khi tên phụ huynh hiển thị chính xác.',
        '6': 'Chờ thiết bị phụ huynh báo đã kết nối. Thiết bị mới sẽ xuất hiện trong mục [[Gia đình]].',
        '7': 'Mở thiết bị mới và kiểm tra mục [[Hoạt động lần cuối]] đã được cập nhật. Nếu vẫn ngoại tuyến, hãy mở lại KidGate trên thiết bị của trẻ và kiểm tra kết nối mạng.',
        '8': 'Tiếp theo, hãy cấp quyền trên thiết bị của trẻ (xem nhóm Cấp quyền ứng dụng). Các chức năng điều khiển sẽ chưa hoạt động đầy đủ nếu còn thiếu quyền.',
      },
    },
    connectComputer: {
      title: 'Kết nối máy tính (Mac hoặc Windows)',
      summary:
        'Cài KidGate trên máy Mac hoặc máy tính Windows của con và ghép nối giống như với điện thoại.',
      keywords: 'mac, macbook, windows, pc, laptop, máy tính',
      tip: 'Hãy thiết lập KidGate khi tài khoản riêng của con đang đăng nhập trên máy tính, và để tài khoản đó là tài khoản thường (không phải quản trị viên). Tài khoản quản trị viên có thể gỡ KidGate.',
      steps: {
        '1': 'Trên máy tính, mở kidgate.app/download và tải KidGate cho Mac hoặc Windows.',
        '2': 'Chạy trình cài đặt và chấp thuận yêu cầu quyền quản trị viên. Trên Windows, nếu thấy thông báo Windows đã bảo vệ máy, chọn Thông tin thêm (More info), rồi Vẫn chạy (Run anyway).',
        '3': 'Mở KidGate trên máy tính. Màn hình sẽ hiện mã QR và mã gồm 6 ký tự; không cần đăng nhập.',
        '4': 'Trên thiết bị của bạn, mở [[Gia đình]], chạm biểu tượng quét ([[Quét mã]]) rồi quét mã QR — hoặc chọn [[Nhập mã thủ công]] và nhập mã.',
        '5': 'Trên máy tính, kiểm tra tên phụ huynh rồi chọn [[Đồng ý kết nối]].',
        '6': 'Làm lần lượt các mục trong [[Hoàn tất thiết lập thiết bị này]]. Trên Mac, chọn [[Mở Cài đặt]] ở mục [[Phê duyệt lọc web]] rồi bật KidGate trong trang vừa mở — tính năng Chặn nội dung web chỉ hoạt động sau bước này. Chọn [[Cho phép]] cho Vị trí và Camera.',
        '7': 'Quay lại thiết bị của bạn, chọn con nào dùng máy tính này. Ứng dụng cần chặn được chọn ngay trên máy tính, sau khi nhập mã PIN phụ huynh ([[Chọn ứng dụng cần chặn]]).',
      },
    },
    connectTv: {
      title: 'Kết nối Android TV',
      summary:
        'Cài KidGate trên Android TV và ghép nối từ thiết bị của bạn, không cần gõ bằng điều khiển.',
      keywords: 'android tv, google tv, tivi, ti vi, fire tv, tv box',
      tip: 'TV không có Vị trí, SOS, Báo an toàn hay Yêu cầu thêm giờ, và ứng dụng bị chặn sẽ bị đóng sau khi mở chứ không bị ngăn mở. Số liệu thời gian sử dụng có thể cập nhật chậm tới một giờ.',
      steps: {
        '1': 'Trên TV, mở Google Play, tìm KidGate rồi cài đặt.',
        '2': 'Mở KidGate trên TV. Màn hình sẽ hiện mã QR và mã gồm 6 ký tự; không cần đăng nhập.',
        '3': 'Trên thiết bị của bạn, mở [[Gia đình]], chạm biểu tượng quét ([[Quét mã]]) rồi quét mã QR trên TV — hoặc chọn [[Nhập mã thủ công]] và nhập mã.',
        '4': 'TV sẽ tự kết nối sau vài giây. Không cần xác nhận gì bằng điều khiển.',
        '5': 'Làm theo [[Thiết lập bảo vệ]] trên TV: chọn [[Mở Cài đặt]] để bật Trợ năng, Truy cập mức sử dụng và Hiển thị trên ứng dụng khác, rồi chấp thuận kết nối VPN để tính năng Chặn nội dung web hoạt động.',
        '6': 'Nếu một mục đã bật mà vẫn không giữ được, hãy khởi động lại TV rồi thử lại. Bạn có thể mở lại [[Thiết lập bảo vệ]] từ màn hình chính của KidGate trên TV.',
        '7': 'Quay lại thiết bị của bạn, chọn con nào dùng TV này. Ứng dụng cần chặn được chọn ngay trên TV, sau khi nhập mã PIN phụ huynh.',
      },
    },
    connectChrome: {
      title: 'Kết nối tiện ích Chrome',
      summary:
        'Thêm bộ lọc web KidGate vào Chrome trên Chromebook, Mac hoặc PC. Tiện ích hiển thị như một thiết bị riêng.',
      keywords: 'chromebook, tiện ích chrome, extension, tiện ích mở rộng',
      tip: 'Tiện ích chỉ lọc trong Chrome: không lọc trình duyệt khác, và không lọc cửa sổ ẩn danh nếu bạn chưa cho phép. Vào chrome://extensions, mở Chi tiết của KidGate và bật Cho phép ở chế độ ẩn danh.',
      steps: {
        '1': 'Trong Chrome trên máy tính của con, mở Chrome Web Store, tìm KidGate rồi chọn Thêm vào Chrome.',
        '2': 'Chọn biểu tượng KidGate trên thanh công cụ Chrome. Nếu không thấy, hãy ghim tiện ích từ menu Tiện ích (biểu tượng mảnh ghép). Cửa sổ bật lên sẽ hiện mã QR và mã gồm 6 ký tự; giữ cửa sổ này mở trong lúc ghép nối.',
        '3': 'Trên thiết bị của bạn, mở [[Gia đình]], chạm biểu tượng quét ([[Quét mã]]) rồi quét mã QR — hoặc chọn [[Nhập mã thủ công]] và nhập mã.',
        '4': 'Trong cửa sổ bật lên của KidGate, kiểm tra tên phụ huynh rồi chọn [[Đồng ý kết nối]].',
        '5': 'Quay lại thiết bị của bạn, chọn con nào dùng tiện ích này, rồi bật tính năng Chặn nội dung web cho tiện ích. Trước khi bật, tiện ích sẽ hiện [[Không hoạt động]].',
        '6': 'Tùy chọn: để xem con đã xem những video nào, mở [[Video đã xem]] và bật [[Ghi lại video đã xem]] cho tiện ích.',
      },
    },
    inviteParent: {
      title: 'Mời thêm phụ huynh',
      summary:
        'Thêm phụ huynh thứ hai vào cùng gia đình để cùng quản lý các thiết bị của trẻ.',
      tip: 'Chỉ chủ gia đình mới phê duyệt được yêu cầu tham gia. Hãy phê duyệt sớm vì yêu cầu có thể hết hạn. Gói miễn phí và thời gian dùng thử cho phép tối đa 3 phụ huynh mỗi gia đình, Premium cho phép tối đa 6.',
      steps: {
        '1': 'Trên thiết bị của chủ gia đình, mở Gia đình, chạm +, rồi chọn Mời phụ huynh.',
        '2': 'Nếu chưa đặt tên gia đình, hãy nhập tên rồi chạm Tạo gia đình.',
        '3': 'Đưa mã QR mời cho phụ huynh còn lại, hoặc gửi mã mời cho họ.',
        '4': 'Trên thiết bị của phụ huynh đó: mở KidGate với vai trò phụ huynh, mở Gia đình rồi chạm biểu tượng quét (Quét mã). Sau đó quét mã QR mời hoặc nhập mã.',
        '5': 'Quay lại thiết bị của chủ gia đình, mở yêu cầu đang chờ và chạm Phê duyệt. Hãy từ chối nếu bạn không nhận ra người đó.',
        '6': 'Phụ huynh mới sẽ thấy cùng các thiết bị của trẻ và có thể hỗ trợ quản lý giới hạn. Một số thao tác như đổi tên hoặc gỡ thiết bị chỉ chủ gia đình mới thực hiện được.',
      },
    },
    joinFamily: {
      title: 'Tham gia gia đình có sẵn',
      summary: 'Dùng lời mời từ chủ gia đình để trở thành đồng phụ huynh.',
      tip: 'Nếu yêu cầu phê duyệt hết hạn, hãy đề nghị chủ gia đình tạo mã QR hoặc mã mời mới.',
      steps: {
        '1': 'Cài KidGate và đăng nhập với vai trò phụ huynh trên thiết bị của bạn.',
        '2': 'Mở Gia đình rồi chạm biểu tượng quét (Quét mã).',
        '3': 'Quét mã QR mời của chủ gia đình, hoặc chọn Nhập mã thủ công rồi nhập mã mời gồm 6 ký tự.',
        '4': 'Chờ chủ gia đình phê duyệt. Hãy giữ ứng dụng mở đến khi thấy thông báo đã tham gia gia đình.',
        '5': 'Kiểm tra các thiết bị của trẻ đã hiển thị trong mục Gia đình. Mở một thiết bị để xem trạng thái và các chức năng điều khiển.',
      },
    },
    manageDevices: {
      title: 'Đổi tên hoặc gỡ thiết bị',
      summary:
        'Đặt cho thiết bị một cái tên ai cũng nhận ra, hoặc ngắt kết nối thiết bị con không còn dùng.',
      keywords:
        'hủy ghép đôi, ngắt kết nối, xóa thiết bị, máy cũ, máy mới, đã bán, đổi tên, cài lại',
      tip: 'Chỉ chủ gia đình mới đổi tên hoặc gỡ được thiết bị. Gỡ thiết bị không thể hoàn tác: các yêu cầu thêm giờ và lịch sử hoạt động của thiết bị sẽ bị xóa. Muốn bảo vệ lại, hãy kết nối nó như một thiết bị mới.',
      steps: {
        '1': 'Để đổi tên, mở thiết bị từ [[Gia đình]] hoặc từ hồ sơ của con, rồi chọn [[Sửa]] cạnh tên thiết bị.',
        '2': 'Nhập một cái tên mọi phụ huynh nhìn là nhận ra, rồi lưu.',
        '3': 'Để gỡ thiết bị, mở thiết bị và chọn [[Gỡ thiết bị]] ở cuối màn hình, rồi xác nhận. Trong tab [[Thiết bị của trẻ]] của thẻ gia đình, bạn cũng có thể vuốt sang trái trên thiết bị.',
        '4': 'Thiết bị rời khỏi gia đình, và KidGate trên máy đó báo rằng thiết bị đã bị gỡ.',
        '5': 'Để dùng lại thiết bị, ví dụ sau khi cài lại máy hoặc chuyển cho con khác, hãy kết nối như thiết bị mới bằng [[Thêm thiết bị của trẻ]] trong [[Gia đình]].',
      },
    },
    androidPermissions: {
      title: 'Cấp quyền Android (thiết bị của trẻ)',
      summary:
        'Bật Truy cập mức sử dụng, Hiển thị trên ứng dụng khác, Trợ năng, quyền pin và các quyền liên quan.',
      keywords:
        'trợ năng, quyền truy cập sử dụng, hiển thị trên ứng dụng khác, thông báo, quản trị thiết bị, vpn, cấp quyền',
      tip: 'Điều quan trọng là cấp đủ quyền, không phải thứ tự thực hiện. Mọi mục còn báo đỏ hoặc chưa cho phép trên màn hình Trạng thái của thiết bị trẻ cần được xử lý trước khi sử dụng chức năng Khóa thiết bị hoặc Giờ khóa thiết bị.',
      steps: {
        '1': 'Mở KidGate, vào [[Trạng thái]] và làm lần lượt từ trên xuống trong danh sách quyền.',
        '2': '[[Thông báo]]: chạm vào dòng tương ứng, rồi [[Cho phép]]. Phụ huynh cần thông báo đẩy cho lệnh khóa và yêu cầu thêm giờ.',
        '3': '[[Truy cập mức sử dụng]]: mở màn hình hệ thống, tìm KidGate rồi bật. Quyền này cần thiết để theo dõi thời gian sử dụng và áp dụng giới hạn.',
        '4': '[[Hiển thị trên ứng dụng khác]]: cho phép KidGate. Quyền này cần thiết để màn hình khóa hiển thị đè lên các ứng dụng khác.',
        '5': '[[Trợ năng]] hỗ trợ khóa: mở [[Cài đặt]], vào [[Trợ năng]], tìm KidGate trong [[Ứng dụng đã cài đặt / Đã tải xuống]] rồi bật. Quyền này giúp duy trì khóa ổn định.',
        '6': '[[Pin không bị hạn chế]]: chạm [[Cho phép]] khi hệ thống hỏi. Nếu hộp thoại không xuất hiện, mở [[Thông tin ứng dụng]], vào [[Pin]] rồi chọn [[Không bị hạn chế]].',
        '7': '[[Chuông báo và lời nhắc]]: cho phép để Giờ khóa thiết bị bắt đầu và kết thúc đúng giờ.',
        '8': '[[Vị trí]] và [[Camera]] (cho Báo an toàn và SOS kèm ảnh): cấp quyền theo yêu cầu của KidGate. Sau đó quay lại [[Trạng thái]] và xác nhận mọi mục đã được cho phép.',
      },
    },
    iosScreenTime: {
      title: 'Thời gian sử dụng trên iOS (thiết bị của trẻ)',
      summary:
        'Cho phép Sử dụng ứng dụng và Trang web để chức năng khóa, lịch trình và chọn ứng dụng hoạt động.',
      keywords:
        'thời gian sử dụng, screen time, family controls, iphone, ipad, cho phép',
      tip: 'Nếu không thấy nút Cho phép, hãy mở Cài đặt iOS, vào Thời gian sử dụng và bật Thời gian sử dụng trên thiết bị của trẻ trước.',
      steps: {
        '1': 'Mở KidGate và ở lại màn hình [[Trạng thái]].',
        '2': 'Chạm [[Cho phép Sử dụng ứng dụng và Trang web]], hoặc chạm biểu ngữ Thời gian sử dụng.',
        '3': 'Trong hộp thoại hệ thống, chạm [[Cho phép]]. Đừng đóng hộp thoại khi chưa chọn.',
        '4': 'Quay lại KidGate. Biểu ngữ sẽ biến mất khi quyền được cấp thành công.',
        '5': 'Nếu trước đó đã từ chối: mở [[Cài đặt]] iOS, tìm KidGate, bật [[Thời gian sử dụng]] trong trang đó, sau đó mở lại KidGate.',
        '6': 'Nếu muốn chọn ứng dụng cần chặn: mở [[Cài đặt]] KidGate, chọn [[Mở khóa bằng mã PIN phụ huynh]], mở mục [[Chặn ứng dụng]] rồi lưu lại.',
        '7': 'Mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi mục [[Chặn ứng dụng]], và kiểm tra danh sách đã đồng bộ. Bật chặn khi bạn đã sẵn sàng.',
      },
    },
    oemKeepRunning: {
      title: 'Giữ KidGate chạy nền (theo nhà sản xuất)',
      summary:
        'Các thiết bị Xiaomi, Samsung, Oppo, Vivo, Huawei… thường tạm dừng ứng dụng chạy nền.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, tiết kiệm pin, tự khởi động, bị tắt, không hoạt động, bị dừng',
      tip: 'Sau khi thay đổi quy tắc pin, hãy khởi động lại thiết bị của trẻ một lần, mở lại KidGate, sau đó thử chức năng Khóa thiết bị từ thiết bị phụ huynh.',
      steps: {
        '1': 'Mở KidGate, vào [[Trạng thái]] rồi tìm bước [[Cho phép tự khởi động]]. Bước này chỉ xuất hiện trên thiết bị mà nhà sản xuất yêu cầu.',
        '2': 'Cho phép [[Tự khởi động]] cho KidGate trong màn hình bảo mật của nhà sản xuất (tên mục có thể khác nhau tùy thiết bị).',
        '3': 'Đặt mức sử dụng pin của KidGate thành [[Không bị hạn chế]] ở cả Cài đặt Android và menu pin của nhà sản xuất (nếu có cả hai).',
        '4': 'Tắt các danh sách “ứng dụng ngủ”, “ngủ sâu” hoặc “đưa ứng dụng vào chế độ ngủ” nếu KidGate nằm trong danh sách đó.',
        '5': 'Nếu lối tắt không hoạt động, hãy tự mở ứng dụng Bảo mật hoặc Chăm sóc thiết bị, tìm KidGate rồi thiết lập [[Tự khởi động]] hoặc [[Pin]].',
        '6': 'Trong KidGate, hãy đánh dấu [[Đã xong]] cho từng mục sau khi hoàn tất để dễ theo dõi phần còn thiếu.',
      },
    },
    dailyLimit: {
      title: 'Đặt Giới hạn hằng ngày',
      summary: 'Giới hạn số phút trẻ được sử dụng thiết bị mỗi ngày.',
      keywords: 'thời gian màn hình, số giờ mỗi ngày, hết giờ, hạn mức, gia hạn',
      tip: 'Dữ liệu sử dụng được cập nhật từ thiết bị của trẻ. Nếu số phút không thay đổi, hãy mở KidGate trên thiết bị của trẻ và chờ đồng bộ.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở [[Gia đình]], rồi chạm vào hồ sơ của con (hoặc chạm vào thiết bị, nếu thiết bị chưa được gán cho con).',
        '2': 'Trong mục [[Điều khiển chính]], chạm [[Giới hạn hằng ngày]].',
        '3': 'Chọn số phút cho mỗi ngày (hoặc chỉnh sửa mức hiện có), sau đó lưu lại.',
        '4': 'Kiểm tra thẻ thiết bị hiển thị số phút đã dùng trên tổng giới hạn hôm nay sau khi thiết bị của trẻ đồng bộ.',
        '5': 'Khi đạt giới hạn, thiết bị sẽ bị khóa theo quy tắc của nền tảng. Chạm [[Mở khóa]] trên màn hình thiết bị nếu bạn muốn cho phép sử dụng sớm hơn.',
      },
    },
    blockedHours: {
      title: 'Đặt Giờ khóa thiết bị',
      summary: 'Lên lịch các khung giờ mà thiết bị phải giữ trạng thái khóa.',
      keywords: 'giờ đi ngủ, ban đêm, giờ học, lịch, giờ cấm',
      tip: 'Nên thiết lập khung giờ đi học và giờ ngủ trước. Hãy tránh các khung giờ chồng lấn để dễ theo dõi.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Giờ khóa thiết bị]].',
        '2': 'Chạm [[Thêm khung giờ]], sau đó đặt giờ bắt đầu, giờ kết thúc và các ngày áp dụng.',
        '3': 'Lưu khung giờ. Lặp lại các bước trên nếu muốn thêm khung giờ khác.',
        '4': 'Bật lịch nếu màn hình có công tắc bật/tắt.',
        '5': 'Trên thiết bị của trẻ, kiểm tra quyền [[Chuông báo và lời nhắc]] và quyền [[Thời gian sử dụng]] vẫn được cấp để lịch chạy đúng giờ.',
        '6': 'Khi đang trong khung giờ khóa, thẻ thiết bị sẽ hiển thị Trong Giờ khóa thiết bị · đã khóa. Chỉ chạm [[Mở khóa]] khi bạn chủ ý bỏ qua lịch.',
      },
    },
    blockedApps: {
      title: 'Chặn từng ứng dụng cụ thể',
      summary:
        'Chọn ứng dụng trên thiết bị của trẻ, sau đó bật chặn từ thiết bị phụ huynh.',
      keywords:
        'chặn ứng dụng, chặn app, tiktok, facebook, instagram, game, roblox, ẩn app',
      tip: 'Trên iOS, Apple có thể ẩn tên ứng dụng khỏi thiết bị phụ huynh. Việc chọn ứng dụng vẫn được thực hiện trên thiết bị của trẻ bằng mã PIN phụ huynh.',
      steps: {
        '1': 'Thực hiện trực tiếp trên thiết bị của trẻ. Mở KidGate, rồi Cài đặt.',
        '2': 'Chọn Mở khóa bằng mã PIN phụ huynh rồi nhập mã PIN phụ huynh.',
        '3': 'Mở mục Chặn ứng dụng (trên máy tính hoặc TV: Chọn ứng dụng cần chặn). Chọn các ứng dụng (và danh mục nếu có), sau đó lưu lại trên thiết bị của trẻ.',
        '4': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi mục Chặn ứng dụng, và chờ danh sách đã chọn hiển thị.',
        '5': 'Bật Chặn ứng dụng. Trạng thái phải chuyển sang Đang chặn.',
        '6': 'Thử mở một ứng dụng đã chặn trên thiết bị của trẻ. Ứng dụng sẽ bị hạn chế theo quy tắc của nền tảng.',
        '7': 'Nếu muốn thay đổi danh sách về sau, hãy chọn lại trên thiết bị của trẻ bằng mã PIN phụ huynh. Thiết bị phụ huynh sẽ đồng bộ danh sách mới.',
      },
    },
    appLimits: {
      title: 'Đặt Giới hạn ứng dụng',
      summary:
        'Đặt mức giới hạn riêng mỗi ngày cho từng ứng dụng, bên cạnh Giới hạn hằng ngày.',
      keywords: 'giới hạn ứng dụng, giới hạn app, phút mỗi app, tiktok, youtube, game',
      tip: 'Giới hạn ứng dụng không có trên iPhone và iPad. Trên máy tính hoặc TV, ứng dụng đã hết giờ sẽ bị đóng sau khi mở chứ không bị ngăn mở.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Giới hạn ứng dụng]]. Nếu con dùng nhiều thiết bị, hãy chọn một thiết bị: mỗi thiết bị có danh sách riêng.',
        '2': 'Trong mục [[Thêm giới hạn]], chạm vào một ứng dụng. Danh sách chỉ gồm các ứng dụng đã được dùng hôm nay trên thiết bị đó, và mỗi ứng dụng bắt đầu với mức 60 phút.',
        '3': 'Chỉnh mức giới hạn bằng thanh chỉnh hoặc mức có sẵn, từ 5 phút đến 8 giờ mỗi ngày. Có thể giới hạn tối đa 20 ứng dụng.',
        '4': 'Chạm [[Lưu]]. Giới hạn được đặt lại lúc nửa đêm trên thiết bị của con.',
        '5': 'Giới hạn hằng ngày vẫn áp dụng cho cả thiết bị, nên một ứng dụng có thể bị khóa trước khi hết mức riêng của nó. Để bỏ một giới hạn, chạm [[Gỡ]] trên thẻ của ứng dụng đó rồi lưu lại.',
      },
    },
    lockUnlock: {
      title: 'Khóa và mở khóa thiết bị',
      summary: 'Khóa ngay thiết bị của trẻ hoặc khôi phục quyền sử dụng.',
      tip: 'Trên Android, chức năng khóa hoạt động hiệu quả nhất khi đã bật quyền Hiển thị trên ứng dụng khác và Trợ năng. Trên iOS, chức năng khóa phụ thuộc vào quyền Thời gian sử dụng.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con).',
        '2': 'Chạm [[Khóa tất cả]] để khóa mọi thiết bị của con, hoặc mở một thiết bị rồi chạm [[Khóa thiết bị]].',
        '3': 'Chờ vài giây. Trạng thái sẽ chuyển sang Đã khóa. Nếu trạng thái không thay đổi, hãy mở KidGate trên thiết bị của trẻ và kiểm tra lại các quyền.',
        '4': 'Để cho phép sử dụng trở lại, chạm [[Mở khóa tất cả]] (hoặc [[Mở khóa]] trên màn hình thiết bị) và xác nhận.',
        '5': 'Tùy chọn: bạn cũng có thể khóa hoặc mở khóa nhanh từ mục Gia đình nếu thẻ thiết bị hiển thị lối tắt.',
        '6': 'Điện thoại hoặc máy tính đang bị khóa vẫn cho con gửi SOS. Trên Android, SOS còn mở gọi điện, bản đồ và tin nhắn trong 5 phút trong khi mọi thứ khác vẫn khóa, và việc này hiện trong [[Nhật ký]].',
      },
    },
    pauseBrowsing: {
      title: 'Tạm dừng duyệt web một lúc',
      summary:
        'Chặn web trên một thiết bị trong khoảng 5 phút đến 8 giờ. Cuộc gọi và ứng dụng ngoại tuyến vẫn hoạt động.',
      keywords: 'tắt mạng, tắt internet, tắt wifi, ngắt mạng, tạm dừng',
      tip: 'Với tiện ích Chrome, chỉ Chrome bị tạm dừng. Nếu muốn con nghỉ vào cùng một khung giờ mỗi ngày, hãy dùng Giờ khóa thiết bị.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi chạm [[Tạm dừng duyệt web]] trong mục [[Theo dõi an toàn]].',
        '2': 'Chọn thời lượng bằng thanh chỉnh hoặc mức có sẵn (30, 60 hoặc 120 phút), rồi xác nhận.',
        '3': 'Web bị chặn trên thiết bị đó cho đến khi hết giờ. Cài đặt của tính năng Chặn nội dung web không bị thay đổi, và việc tạm dừng vẫn có tác dụng kể cả khi tính năng Chặn nội dung web đang tắt.',
        '4': 'Muốn kết thúc sớm, hãy mở thiết bị, chạm thẻ [[Tạm dừng duyệt web]] rồi chọn [[Tiếp tục]]. Số phút còn lại sẽ không được giữ.',
        '5': 'Khi tạm dừng từ hồ sơ của con, chỉ một thiết bị được áp dụng. Nếu con dùng nhiều thiết bị, hãy tạm dừng từng thiết bị trên màn hình của thiết bị đó.',
      },
    },
    timeRequests: {
      title: 'Trả lời Yêu cầu thêm giờ',
      summary:
        'Con có thể xin thêm phút khi Giới hạn hằng ngày sắp hết, và bạn đồng ý hoặc từ chối ngay trên thiết bị của mình.',
      tip: 'Chỉ thiết bị có Giới hạn hằng ngày mới gửi được yêu cầu. Số phút được đồng ý chỉ tính cho hôm nay, trên thiết bị đã gửi yêu cầu, và không mở khóa khi bạn đã khóa thiết bị hoặc đang trong Giờ khóa thiết bị. Android TV và tiện ích Chrome không gửi được yêu cầu.',
      steps: {
        '1': 'Trên thiết bị của con, con chạm [[Yêu cầu thêm giờ]] ở màn hình chính của KidGate (trên Android, còn có thể gửi từ màn hình khóa khi hết giờ), chọn số phút, thêm lý do nếu muốn rồi gửi.',
        '2': 'Bạn sẽ nhận được thông báo. Mở KidGate: yêu cầu nằm trong thẻ [[Chờ bạn duyệt]] ở [[Gia đình]], trong hồ sơ của con và trên màn hình thiết bị.',
        '3': 'Xem số phút và lý do, rồi chạm [[Đồng ý]] để cộng đúng số phút đó cho hôm nay, hoặc [[Để sau]] để từ chối.',
        '4': 'Thiết bị của con sẽ nhận được câu trả lời, và số phút được đồng ý có hiệu lực ngay. Mỗi thiết bị chỉ có một yêu cầu chờ duyệt tại một thời điểm.',
        '5': 'Các yêu cầu đã trả lời được ghi trong [[Nhật ký]]. Để tắt loại thông báo này trên máy của bạn, tắt [[Yêu cầu thêm giờ]] trong [[Thông báo trên máy này]] ở Cài đặt.',
      },
    },
    rewardTasks: {
      title: 'Thiết lập Nhiệm vụ thưởng',
      summary:
        'Tạo các nhiệm vụ nhỏ để con hoàn thành và được thêm phút sử dụng trong hôm nay.',
      tip: 'Phút thưởng chỉ có tác dụng khi thiết bị có Giới hạn hằng ngày. Số phút được cộng vào thiết bị mà con dùng để báo đã xong nhiệm vụ. Nhiệm vụ thưởng không có trên Android TV và tiện ích Chrome.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Nhiệm vụ thưởng]].',
        '2': 'Chạm [[Nhiệm vụ mới]] hoặc bắt đầu từ một mẫu có sẵn. Nhập nhiệm vụ, chọn số phút thưởng (5 đến 240), độ khó, và lặp lại [[Hằng ngày]] hay chỉ [[Một lần]], rồi chạm [[Tạo nhiệm vụ]].',
        '3': 'Trên thiết bị của con, nhiệm vụ hiện trong mục [[Kiếm thêm thời gian]]. Khi làm xong, con chạm [[Xong rồi]].',
        '4': 'Bạn sẽ nhận được thông báo. Trong [[Chờ bạn duyệt]] (trên màn hình Nhiệm vụ thưởng, ở Gia đình hoặc trong hồ sơ của con), chạm [[Duyệt]] để cộng số phút vào hôm nay, hoặc [[Trả lại]] để con làm lại.',
        '5': 'Chạm vào một nhiệm vụ để sửa hoặc xóa. Gói miễn phí cho phép tối đa 10 nhiệm vụ đang hoạt động cùng lúc; Premium cho phép 20.',
        '6': 'Mỗi nhiệm vụ đáng 1 đến 3 sao tùy độ khó, và sao chỉ được tính khi bạn duyệt nhiệm vụ. Để các con so sánh số sao trong tuần, chủ gia đình mở [[Gia đình]], chọn thẻ gia đình rồi bật [[Bảng tích sao]] trong tab [[Các con]]. Mỗi con sẽ thấy bảng này trong KidGate trên máy của mình. Bảng bắt đầu lại mỗi tuần.',
      },
    },
    locationSharing: {
      title: 'Bật chia sẻ vị trí',
      summary: 'Xem vị trí mới nhất của trẻ trên thiết bị phụ huynh.',
      keywords: 'gps, bản đồ, con đang ở đâu, tìm điện thoại, định vị, địa điểm',
      tip: 'Cần cấp quyền vị trí trên thiết bị của trẻ và có kết nối mạng ổn định. Trong nhà, độ chính xác của GPS có thể giảm.',
      steps: {
        '1': 'Trên thiết bị của trẻ, cấp quyền Vị trí cho KidGate khi được hỏi (hoặc trong Cài đặt hệ thống).',
        '2': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi Vị trí.',
        '3': 'Bật chia sẻ vị trí nếu đang tắt, sau đó chờ lần cập nhật đầu tiên.',
        '4': 'Nếu vẫn hiển thị trạng thái đang chờ, hãy chạm nút làm mới hoặc mở lại màn hình.',
        '5': 'Tùy chọn: mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), vào mục [[Cảnh báo]] rồi chọn [[Địa điểm]] để thiết lập Cảnh báo địa điểm khi con đến hoặc rời khỏi một địa điểm đã lưu.',
        '6': 'Nếu điện thoại thất lạc ở gần, mở Vị trí rồi chạm [[Đổ chuông thiết bị]]. iPhone sẽ không kêu khi đang ở chế độ im lặng hoặc bật Tập trung.',
      },
    },
    checkIn: {
      title: 'Gửi yêu cầu Báo an toàn',
      summary: 'Yêu cầu trẻ xác nhận vẫn an toàn, kèm vị trí và ảnh nếu có thể.',
      tip: 'Cần cấp quyền Camera trên thiết bị của trẻ nếu bạn muốn Báo an toàn có kèm ảnh.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con).',
        '2': 'Chạm [[Báo an toàn]] (nút thao tác nhanh hoặc dòng trong mục [[Theo dõi an toàn]]).',
        '3': 'Thiết bị của trẻ sẽ nhận được thông báo và màn hình Báo an toàn. Trẻ chạm để xác nhận vẫn ổn hoặc cần trợ giúp.',
        '4': 'Nếu quyền camera đã được cấp, KidGate sẽ gửi kèm ảnh và vị trí khi có thể.',
        '5': 'Trên thiết bị phụ huynh, mở lịch sử Báo an toàn để xem phản hồi và ảnh mới nhất.',
      },
    },
    sos: {
      title: 'Cảnh báo khẩn cấp SOS',
      summary: 'Cách trẻ gửi SOS, cảnh báo gồm những gì và cách phụ huynh phản hồi.',
      keywords:
        'nút báo động, cầu cứu, nguy hiểm, không an toàn, ghi âm, giọng nói, micrô, còi, email, ông bà, hàng xóm, người thân',
      tip: 'SOS dùng được trên điện thoại và máy tính, không có trên TV hay tiện ích Chrome. Chỉ điện thoại mới ghi âm. Hãy thử một lần tại nhà và thống nhất với con khi nào nên dùng SOS, khi nào chỉ cần Báo an toàn.',
      steps: {
        '1': 'Trên thiết bị của trẻ, mở SOS trong KidGate. Trên điện thoại, đó là nút ở giữa thanh dưới cùng.',
        '2': 'Giữ nút SOS trong 5 giây. Thả tay trước đó thì SOS bị hủy.',
        '3': 'Cảnh báo được gửi ngay, kèm vị trí nếu có. Trên điện thoại, camera sẽ mở để chụp ảnh, có thể bỏ qua. Nếu micrô đã được cho phép lúc thiết lập, KidGate ghi tối đa 15 giây âm thanh kể từ lúc gửi SOS.',
        '4': 'Phụ huynh nhận thông báo khẩn, kể cả trong giờ yên tĩnh. Nếu KidGate đang mở, cảnh báo hiện ngay trên màn hình, kèm âm báo SOS nếu bạn chưa tắt trong Cài đặt.',
        '5': 'Mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), vào mục [[Cảnh báo]] rồi chọn [[SOS]]. Mỗi cảnh báo có vị trí ([[Mở trong Bản đồ]]), ảnh và [[Đoạn ghi âm]]; đoạn ghi âm có thể đến sau cảnh báo một chút. Chọn [[Đã thấy, đang xử lý]] để đánh dấu là đã phản hồi.',
        '6': 'Để gửi email cho cả người ngoài gia đình, mở [[Gia đình]], chọn thẻ gia đình rồi chọn [[Liên hệ tin cậy]]. Chọn [[Thêm liên hệ]] để thêm tối đa 5 người. Mỗi lần có SOS, họ nhận email gồm tên thiết bị và vị trí gần nhất, không kèm ảnh hay âm thanh. Hãy báo trước cho họ.',
      },
    },
    webFilter: {
      title: 'Chặn trang web không phù hợp',
      summary:
        'Bật tính năng Chặn nội dung web để hạn chế các trang không phù hợp, nếu nền tảng có hỗ trợ.',
      keywords:
        'chặn web, chặn link, chặn trang web, url, nội dung người lớn, web đen, tìm kiếm an toàn, dns, vpn, iphone, ipad',
      tip: 'Khả năng lọc web phụ thuộc vào từng nền tảng. Nên kết hợp với mục Chặn ứng dụng để bảo vệ hiệu quả hơn.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi mục Chặn nội dung web.',
        '2': 'Xem trạng thái hiện tại (đã hạn chế trang không phù hợp hoặc chưa lọc).',
        '3': 'Bật bộ lọc và lưu lại nếu màn hình có công tắc.',
        '4': 'Kiểm tra lại sau tại cùng màn hình. Nếu vẫn hiển thị Đang chờ, hãy mở lại KidGate trên thiết bị của trẻ để đồng bộ.',
        '5': 'Trên iPhone hoặc iPad, mở KidGate trên thiết bị của con và chọn Cho phép khi iOS hỏi có cho KidGate thêm cấu hình VPN không, rồi nhập mật mã thiết bị. Việc này chỉ cần làm một lần.',
      },
    },
    protectionAlerts: {
      title: 'Cảnh báo bảo vệ',
      summary: 'Nhận thông báo khi một quyền quan trọng trên thiết bị của trẻ bị tắt.',
      tip: 'Cảnh báo bảo vệ cho biết mức độ bảo vệ của KidGate đang suy giảm. Vui lòng bật lại quyền trên thiết bị của trẻ trong thời gian sớm nhất.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), vào mục [[Cảnh báo]] rồi chọn [[Bảo vệ]] để mở Cảnh báo bảo vệ.',
        '2': 'Xem các sự kiện gần đây, ví dụ Hiển thị trên ứng dụng khác, Trợ năng, Truy cập mức sử dụng, Camera hoặc Vị trí bị tắt.',
        '3': 'Trên thiết bị của trẻ, mở KidGate, rồi Trạng thái và bật lại quyền được nêu.',
        '4': 'Quay lại Cảnh báo bảo vệ và xác nhận không còn sự kiện bất thường mới.',
        '5': 'Vui lòng giữ thông báo luôn bật trên thiết bị phụ huynh để nắm bắt thay đổi kịp thời.',
      },
    },
    usageReports: {
      title: 'Xem báo cáo sử dụng',
      summary:
        'Xem mỗi thiết bị đã được dùng bao lâu hôm nay và trong 30 ngày qua, theo từng con, và qua báo cáo mỗi sáng thứ Hai.',
      tip: 'Gói miễn phí hiển thị tổng thời gian hôm nay và 3 ứng dụng dùng nhiều nhất, cập nhật khi bạn mở xem. Premium có thêm lịch sử 30 ngày, khung giờ sử dụng của từng thiết bị, mọi ứng dụng, báo cáo riêng cho từng con và báo cáo tuần mới vào mỗi thứ Hai. iPhone và iPad chỉ báo cáo tổng thời gian.',
      steps: {
        '1': 'Mở [[Báo cáo]]. [[Hôm nay]] cộng dồn tất cả thiết bị; bên dưới là [[Báo cáo tuần]], từng con ([[Theo con]]) và từng thiết bị ([[Theo thiết bị]]).',
        '2': 'Chạm vào một thiết bị để xem [[Báo cáo sử dụng]] của thiết bị đó: hôm nay so với Giới hạn hằng ngày, [[30 ngày gần đây]], [[Khung giờ sử dụng]] và [[Ứng dụng dùng nhiều nhất]]. Bạn cũng có thể mở báo cáo này từ [[Mức sử dụng hôm nay]] trên màn hình thiết bị.',
        '3': 'Chạm vào một con để xem một báo cáo chung cho tất cả thiết bị của con, theo [[Hôm nay]], [[7 ngày]] hoặc [[30 ngày]]. Thời gian dùng hai màn hình cùng lúc chỉ được tính một lần, nên con số có thể thấp hơn tổng của từng thiết bị.',
        '4': '[[Báo cáo tuần]] mới đến vào mỗi sáng thứ Hai, kèm thông báo. Báo cáo gợi ý một việc bạn có thể thay đổi và mở đúng phần cài đặt đó.',
        '5': 'Khi bạn mở KidGate, ứng dụng sẽ yêu cầu từng thiết bị gửi số liệu mới, nên có thể mất vài phút để cập nhật. Thiết bị mất kết nối mạng sẽ gửi báo cáo khi có mạng trở lại.',
      },
    },
    widget: {
      title: 'Thêm widget thời gian sử dụng',
      summary:
        'Xem thời gian sử dụng của từng con ngay trên màn hình chính, và để con biết mình còn bao nhiêu thời gian trên máy của con.',
      keywords:
        'màn hình chính, tiện ích, xem nhanh, còn lại, bao nhiêu phút, iphone, android',
      tip: 'Widget dùng được trên iPhone, iPad và Android, không có trên máy tính hay TV. Widget hiển thị số liệu mới nhất KidGate nhận được và thời điểm cập nhật.',
      steps: {
        '1': 'Mở [[Cài đặt]] rồi chọn [[Thêm widget vào màn hình chính]]. Trên hầu hết điện thoại Android, bạn chỉ cần xác nhận vị trí đặt. Nếu không, KidGate sẽ hiện các bước để bạn tự thêm.',
        '2': 'Để tự thêm, chạm và giữ một chỗ trống trên màn hình chính. Trên iPhone, chạm Sửa (hoặc + ở phiên bản cũ), rồi Thêm tiện ích. Trên Android, chạm Tiện ích. Tìm KidGate và chọn widget Thời gian sử dụng.',
        '3': 'Mỗi dòng là thời gian sử dụng hôm nay của một con so với Giới hạn hằng ngày; con nào đã hết giờ được xếp lên đầu. Widget hiện tối đa 2 con trên iPhone và 3 con trên Android.',
        '4': 'Widget cập nhật khi bạn mở KidGate. Khi ứng dụng đang đóng, widget cập nhật tối đa 20 phút một lần và chỉ khi có con đang dùng thiết bị.',
        '5': 'Trên điện thoại của con, thêm widget Thời gian còn lại theo cách tương tự. Widget cho biết hôm nay con còn bao nhiêu thời gian, hoặc vì sao thiết bị đang bị khóa, và cập nhật khi KidGate đang mở trên điện thoại đó.',
      },
    },
    webHistory: {
      title: 'Xem Lịch sử web',
      summary:
        'Xem thiết bị đã truy cập những trang nào và trang nào bị tính năng Chặn nội dung web chặn, theo từng ngày.',
      keywords: 'lịch sử duyệt web, trang đã truy cập, trình duyệt, chrome, safari',
      tip: 'Lịch sử web thuộc gói Premium. Danh sách ghi theo trang web, không theo từng trang con hay số phút, và một số dòng là lưu lượng chạy nền của ứng dụng. Android TV có thể chậm tới một giờ.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Lịch sử web]] trong mục [[Theo dõi an toàn]]. Khi mở từ hồ sơ của con, lịch sử gộp tất cả thiết bị của con.',
        '2': 'Mỗi ngày liệt kê các trang theo loại, kèm số lần truy cập. Chọn [[Chỉ bị chặn]] để chỉ xem những gì tính năng Chặn nội dung web đã chặn.',
        '3': 'Để chặn cả một loại trang, mở mục của loại đó và chọn nút Chặn ở cuối mục. Khi mở từ hồ sơ của con, thay đổi áp dụng cho tất cả thiết bị của con.',
        '4': 'Lịch sử lấy từ tính năng Chặn nội dung web, nên chỉ có dữ liệu khi bộ lọc đang chạy trên thiết bị đó.',
        '5': 'Lịch sử được giữ trong 30 ngày. Khi con xin mở một trang bị chặn, yêu cầu sẽ nằm trong [[Chờ bạn duyệt]], không nằm ở đây.',
      },
    },
    videoHistory: {
      title: 'Xem Video đã xem',
      summary: 'Lưu danh sách các video YouTube con đã xem, kèm kênh và thời điểm xem.',
      keywords: 'youtube, shorts, video đã xem, lịch sử xem',
      tip: 'Video đã xem thuộc gói Premium và chỉ ghi lại YouTube. Tính năng hoạt động trên điện thoại Android, Android TV và tiện ích Chrome, không có trên iPhone và iPad. Trên máy Mac hoặc PC, hãy cài tiện ích Chrome. Trên TV, Shorts không được liệt kê.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Video đã xem]] trong mục [[Theo dõi an toàn]].',
        '2': 'Bật [[Ghi lại video đã xem]]. Tính năng tắt cho đến khi bạn bật, và khi bật từ hồ sơ của con thì áp dụng cho tất cả thiết bị của con.',
        '3': 'Trên điện thoại Android, KidGate còn cần quyền truy cập thông báo: trên thiết bị của con, mở [[Cài đặt]] KidGate, chọn [[Mở khóa bằng mã PIN phụ huynh]], rồi chọn [[Cho phép truy cập thông báo]] trong mục [[Cảnh báo tin nhắn]]. Shorts cần thêm quyền Trợ năng.',
        '4': 'Video hiện theo từng ngày, kèm kênh và số lần phát. Chạm vào một video để tìm video đó trên YouTube.',
        '5': 'Trên máy Mac hoặc PC, màn hình sẽ hướng dẫn cài tiện ích Chrome thay thế. Tiện ích ghi lại video như một thiết bị riêng.',
      },
    },
    appAlerts: {
      title: 'Theo dõi việc cài ứng dụng',
      summary:
        'Xem khi nào ứng dụng được cài hoặc gỡ, danh sách ứng dụng trên thiết bị, và giữ ứng dụng mới lại cho đến khi bạn cho phép.',
      tip: 'Duyệt ứng dụng mới được dùng miễn phí. Màn hình Ứng dụng, gồm lịch sử cài đặt và danh sách ứng dụng, thuộc gói Premium. iPhone và iPad không báo được việc cài ứng dụng; trên các máy này, Duyệt ứng dụng mới sẽ ẩn App Store.',
      steps: {
        '1': 'Trên thiết bị phụ huynh, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Ứng dụng]] trong mục [[Cảnh báo]].',
        '2': '[[Thay đổi gần đây]] liệt kê các ứng dụng được cài và gỡ, mới nhất ở trên. Bạn cũng nhận được thông báo cho từng ứng dụng.',
        '3': '[[Danh sách ứng dụng]] liệt kê những gì có trên thiết bị, các ứng dụng [[Cần xem lại]] ở trên cùng. Chọn [[An toàn]] để đưa một ứng dụng ra khỏi nhóm đó. Muốn chặn một ứng dụng, hãy dùng mục Chặn ứng dụng.',
        '4': 'Để giữ ứng dụng mới lại cho đến khi bạn cho phép, mở mục [[Chặn ứng dụng]] và bật [[Duyệt ứng dụng mới]]. Mọi ứng dụng được cài sau đó sẽ bị chặn trên thiết bị.',
        '5': 'Khi có ứng dụng mới đang chờ, chọn [[Cho phép]] bên cạnh ứng dụng đó để cho mở.',
      },
    },
    messageAlerts: {
      title: 'Bật Cảnh báo tin nhắn',
      summary:
        'Nhận cảnh báo khi một từ hoặc cụm từ đáng lo xuất hiện trong tin nhắn hoặc nội dung tìm kiếm trên điện thoại Android của con. Bạn chỉ thấy từ hoặc cụm từ bị đánh dấu, không bao giờ thấy tin nhắn.',
      keywords: 'sms, messenger, whatsapp, zalo, từ khoá, bắt nạt, đọc tin nhắn',
      tip: 'Cảnh báo tin nhắn thuộc gói Premium và chỉ có trên điện thoại Android. Bạn chỉ nhận được loại cảnh báo và từ hoặc cụm từ bị đánh dấu. Phân tích bằng AI luôn tắt, trừ khi một phụ huynh bật cho cả gia đình.',
      steps: {
        '1': 'Trên điện thoại Android của con, mở [[Cài đặt]] KidGate, chọn [[Mở khóa bằng mã PIN phụ huynh]], rồi chọn [[Cho phép truy cập thông báo]] trong mục [[Cảnh báo tin nhắn]] và bật KidGate trong danh sách vừa mở.',
        '2': 'Trên thiết bị của bạn, mở hồ sơ của con (hoặc mở thiết bị, nếu thiết bị chưa được gán cho con), rồi [[Cảnh báo tin nhắn]] trong mục [[Cảnh báo]], và chạm biểu tượng cài đặt ở trên cùng. Nếu con có nhiều thiết bị, hãy chọn điện thoại Android trước.',
        '3': 'Bật [[Quét tin nhắn con nhận]]. [[Cảnh báo cả ngôn từ tục tĩu]] là tùy chọn, và bạn có thể chọn tối đa 3 [[Ngôn ngữ được quét]].',
        '4': 'Để quét cả tin nhắn con gõ và nội dung con tìm kiếm: trên thiết bị của con, chọn [[Cho phép]] trong mục [[Cảnh báo tin nhắn]], rồi bật [[Quét tin nhắn con gõ]] và [[Quét nội dung con tìm kiếm]] trên thiết bị của bạn.',
        '5': 'Cảnh báo hiện trong [[Cảnh báo gần đây]], kèm loại cảnh báo và từ hoặc cụm từ bị đánh dấu. Chọn [[Nên làm gì tiếp]] để xem gợi ý cách nói chuyện với con.',
      },
    },
    childProfiles: {
      title: 'Thêm con và gán thiết bị',
      summary:
        'Tạo hồ sơ cho từng con, rồi gán các thiết bị con dùng, để quy tắc và thời gian sử dụng đi theo con.',
      tip: 'Chỉ chủ gia đình mới thêm được con và gán thiết bị. Thiết bị mới chưa được gán cho ai cho đến khi bạn chọn.',
      steps: {
        '1': 'Trong [[Gia đình]], chạm + và chọn [[Thêm con]]. Nhập tên rồi lưu.',
        '2': 'Sau khi ghép nối một thiết bị mới, KidGate sẽ hỏi ai dùng thiết bị đó. Chọn con của bạn, hoặc [[Không gán cho ai]] nếu là thiết bị dùng chung. Sau đó KidGate đề xuất một bộ bảo vệ cơ bản: chọn [[Bật bảo vệ]] hoặc [[Để sau]].',
        '3': 'Thiết bị chưa được chọn cho ai sẽ nằm trong nhóm [[Chưa gán]] ở mục Gia đình. Chọn [[Gán cho trẻ…]] trên thẻ của thiết bị đó.',
        '4': 'Khi thiết bị đã được gán, Giới hạn hằng ngày, Giờ khóa thiết bị, tính năng Chặn nội dung web, Báo an toàn, SOS, địa điểm và Nhiệm vụ thưởng được đặt trên hồ sơ của con và áp dụng cho tất cả thiết bị của con. Giới hạn hằng ngày trở thành một tổng chung cho các thiết bị đó.',
        '5': 'Để chuyển một thiết bị, mở hồ sơ của con sẽ dùng thiết bị đó và chọn [[Gán thêm thiết bị…]]. Để bỏ gán, vuốt thiết bị trong hồ sơ của con rồi chọn [[Bỏ gán]]. Xóa hồ sơ của con vẫn giữ các thiết bị ở trạng thái đã ghép nối.',
      },
    },
    plans: {
      title: 'Premium và gói miễn phí',
      summary: 'Bản dùng thử, gói miễn phí và Premium gồm những gì, và cách đăng ký.',
      keywords: 'premium, giá, gói, đăng ký, dùng thử, huỷ, hoàn tiền, nâng cấp',
      tip: 'Chỉ chủ gia đình mới đăng ký hoặc khôi phục giao dịch được, và chỉ trong ứng dụng trên điện thoại. Một gói dùng cho cả gia đình và mọi phụ huynh trong đó.',
      steps: {
        '1': 'Mở [[Cài đặt]]. Thẻ ở trên cùng hiển thị gói hiện tại; chọn [[Xem các gói]].',
        '2': 'Bản dùng thử 7 ngày bắt đầu khi thiết bị đầu tiên của con được ghép nối, và có đầy đủ mọi tính năng Premium.',
        '3': 'Với gói miễn phí, mọi quy tắc vẫn hoạt động, nhưng chỉ một thiết bị gửi báo cáo: tổng thời gian hôm nay và 3 ứng dụng dùng nhiều nhất, cập nhật khi bạn mở xem. Premium có thêm cập nhật trực tiếp, mọi thiết bị, lịch sử 30 ngày, lịch sử web và video, và báo cáo tuần.',
        '4': 'Nếu bản dùng thử kết thúc khi gia đình có nhiều hơn một thiết bị của con, KidGate sẽ yêu cầu bạn [[Chọn thiết bị chính]]. Thiết bị đó tiếp tục gửi báo cáo; các thiết bị khác hiện [[Ngừng báo cáo]] nhưng vẫn giữ quy tắc. Bạn có thể đổi lựa chọn mỗi 7 ngày một lần.',
        '5': 'Để đăng ký, chọn một gói rồi chạm [[Đăng ký Premium]]. Khi đăng ký, mọi thiết bị đang ngừng báo cáo sẽ hoạt động lại. Nếu bạn đã từng thanh toán, chọn [[Khôi phục giao dịch]].',
      },
    },
    notificationSettings: {
      title: 'Chọn thông báo muốn nhận',
      summary:
        'Bật hoặc tắt từng loại cảnh báo và đặt giờ yên tĩnh trên từng điện thoại của phụ huynh.',
      tip: 'SOS luôn được gửi đến, kể cả khi mọi thông báo đều tắt và trong giờ yên tĩnh. Các cài đặt này chỉ áp dụng cho điện thoại này; phụ huynh khác tự chọn cho máy của mình.',
      steps: {
        '1': 'Mở [[Cài đặt]], rồi [[Thông báo trên máy này]].',
        '2': 'Trong mục [[Cảnh báo]], tắt loại cảnh báo bạn không muốn nhận trên điện thoại này, ví dụ [[Yêu cầu thêm giờ]] hoặc [[Cài hoặc gỡ ứng dụng]].',
        '3': '[[Tổng kết tuần]] bật hoặc tắt thông báo sáng thứ Hai cho báo cáo tuần.',
        '4': 'Bật [[Giờ yên tĩnh]] và đặt [[Từ]], [[Đến]] để tắt tiếng cảnh báo vào ban đêm. Giờ được tính theo đồng hồ của điện thoại này.',
        '5': 'Trong Cài đặt, [[Thông báo trong ứng dụng]] và [[Âm báo SOS]] là hai mục riêng: chúng điều khiển biểu ngữ bên trong ứng dụng và âm thanh SOS lớn trên điện thoại này.',
      },
    },
    appLanguage: {
      title: 'Đổi ngôn ngữ ứng dụng',
      summary:
        'Chọn ngôn ngữ KidGate dùng trên từng điện thoại và trên bảng điều khiển web.',
      keywords: 'tiếng việt, tiếng anh, english, dịch, sai ngôn ngữ, ngôn ngữ hiển thị',
      tip: 'Mỗi điện thoại giữ ngôn ngữ riêng. Thông báo và widget trên điện thoại đó cũng theo ngôn ngữ này.',
      steps: {
        '1': 'Trên điện thoại của phụ huynh hoặc của con, mở [[Cài đặt]] rồi chọn [[Ngôn ngữ]].',
        '2': 'Chọn một ngôn ngữ để cố định, hoặc [[Theo ngôn ngữ thiết bị]] để theo cài đặt của điện thoại. Nếu KidGate không có ngôn ngữ của điện thoại, ứng dụng dùng tiếng Anh.',
        '3': 'Ứng dụng đổi ngay. Thông báo gửi tới điện thoại này và widget của nó cũng dùng ngôn ngữ mới.',
        '4': 'Trên bảng điều khiển web, đổi ngôn ngữ ở phần tài khoản trong menu bên. Thay đổi chỉ áp dụng cho trình duyệt đó.',
      },
    },
    webSignIn: {
      title: 'Dùng KidGate trên máy tính',
      summary: 'Đăng nhập bảng điều khiển trên web để quản lý gia đình từ trình duyệt.',
      tip: 'Chỉ cho phép trình duyệt mà chính bạn đang đăng nhập: trình duyệt đó có quyền điều khiển như điện thoại của bạn. Bảng điều khiển trên web không ghép nối thiết bị hay mua gói được. Để đăng xuất một trình duyệt, dùng nút Đăng xuất trên bảng điều khiển.',
      steps: {
        '1': 'Trên máy tính, mở dashboard.kidgate.app và chọn [[Đăng nhập bằng ứng dụng KidGate]]. Một mã QR sẽ hiện ra.',
        '2': 'Trên điện thoại, mở [[Cài đặt]], rồi [[Đăng nhập trên máy tính]]. Bạn cũng có thể quét từ [[Gia đình]] bằng biểu tượng quét.',
        '3': 'Quét mã QR trên trình duyệt. Nếu camera không đọc được, hãy nhập mã gồm 6 ký tự.',
        '4': 'Kiểm tra mã trùng khớp, rồi chọn [[Cho phép]]. Chọn [[Không cho phép]] nếu bạn không phải người bắt đầu lần đăng nhập này.',
        '5': 'Trình duyệt sẽ đăng nhập sau vài giây và được phép thay đổi cài đặt trong 7 ngày. Sau đó trình duyệt vẫn xem được thông tin gia đình; muốn thay đổi gì, chọn [[Mở khóa thay đổi]] trên bảng điều khiển rồi nhập mã PIN phụ huynh, hoặc duyệt lại từ điện thoại.',
      },
    },
    securityPins: {
      title: 'Mã PIN phụ huynh và Khóa ứng dụng',
      summary:
        'Hai mã PIN khác nhau: mã PIN phụ huynh bảo vệ cài đặt trên thiết bị của con, còn Khóa ứng dụng bảo vệ ứng dụng phụ huynh trên điện thoại của bạn.',
      tip: 'Chỉ chủ gia đình mới đặt hoặc đặt lại được mã PIN phụ huynh. Đừng chia sẻ mã này với con.',
      steps: {
        '1': 'Mở [[Cài đặt]]. Trong mục [[Bảo mật]], chọn [[Mã PIN phụ huynh]] để tạo hoặc đổi mã PIN 6 chữ số.',
        '2': 'Thiết bị của con sẽ hỏi mã PIN phụ huynh trước khi cho đổi mục Chặn ứng dụng hoặc đăng xuất KidGate trên máy đó.',
        '3': 'Nếu quên mã, chọn [[Quên mã PIN?]] ở cùng chỗ để đặt mã mới với tư cách chủ gia đình.',
        '4': 'Nếu thiết bị của con tự khóa sau 5 lần nhập sai mã PIN, mục Bảo mật sẽ hiện một dòng mở khóa cho thiết bị đó. Chọn dòng này để đặt lại số lần thử.',
        '5': 'Để bảo vệ ứng dụng phụ huynh trên điện thoại này, bật [[Khóa ứng dụng]] và tạo mã PIN 6 chữ số riêng. Bạn cũng có thể cho phép mở khóa bằng Face ID, Touch ID hoặc vân tay.',
      },
    },
    reportProblem: {
      title: 'Báo cáo sự cố',
      summary:
        'Báo cho đội ngũ KidGate điều gì không ổn, kèm ảnh chụp màn hình, và đọc phản hồi ngay trong ứng dụng.',
      keywords:
        'lỗi, liên hệ, góp ý, không hoạt động, hỏng, chăm sóc khách hàng, trợ giúp, email',
      tip: 'Bạn nhận thông báo khi KidGate phản hồi. Nếu lỡ mất, dòng Hỗ trợ trong Cài đặt sẽ hiện Có phản hồi mới.',
      steps: {
        '1': 'Mở [[Cài đặt]] rồi chọn [[Hỗ trợ]]. Trên bảng điều khiển web, Hỗ trợ nằm trong menu.',
        '2': 'Chọn [[Báo cáo sự cố]], hoặc [[Báo cáo mới]] nếu bạn đã từng gửi.',
        '3': 'Mô tả chuyện gì đã xảy ra và trên thiết bị nào, đính kèm tối đa 5 ảnh chụp màn hình nếu cần, rồi chọn [[Gửi báo cáo]].',
        '4': 'Mỗi báo cáo hiện trạng thái: [[Đã nhận]], [[Đang xem xét]] hoặc [[Đã xử lý]]. Phản hồi của KidGate hiện ngay dưới báo cáo.',
        '5': 'Bạn có thể trả lời dưới báo cáo cho đến khi báo cáo được đóng. Với vấn đề khác, hãy gửi báo cáo mới.',
      },
    },
    deleteAccount: {
      title: 'Xóa tài khoản',
      summary:
        'Xóa tài khoản KidGate và dữ liệu của tài khoản, với 14 ngày để bạn đổi ý.',
      tip: 'Xóa tài khoản không hủy gói đăng ký trên App Store hoặc Google Play; hãy hủy trong cửa hàng. Đồng phụ huynh chỉ muốn thôi quản lý gia đình có thể rời khỏi gia đình thay vì xóa tài khoản.',
      steps: {
        '1': 'Mở [[Cài đặt]] và trong mục [[Tài khoản]], chọn [[Xóa tài khoản]].',
        '2': 'Đọc kỹ những gì sẽ bị xóa. Nếu bạn là chủ gia đình, mọi đồng phụ huynh và mọi thiết bị của con cũng mất quyền truy cập.',
        '3': 'Xác nhận danh tính (nhập mật khẩu, hoặc đăng nhập lại bằng Google hay Apple), gõ OK, rồi chọn [[Xóa vĩnh viễn]].',
        '4': 'Tài khoản sẽ bị xóa sau 14 ngày. Trước thời điểm đó, mở KidGate và chọn [[Hủy yêu cầu xóa]] để giữ lại mọi thứ.',
        '5': 'Khi đồng phụ huynh xóa tài khoản, chỉ tài khoản của người đó bị xóa; gia đình vẫn còn. Để rời gia đình mà không xóa tài khoản, mở thẻ gia đình trong mục Gia đình và chọn [[Rời khỏi gia đình]].',
      },
    },
  },
  onChildDevice: 'Trên máy của trẻ',
  onParentDevice: 'Trên máy của bạn',
  handoffHint:
    'KidGate có thể hướng dẫn từng bước ngay trên máy của trẻ: mở ứng dụng ở đó, vào Trạng thái rồi chọn Hoàn tất thiết lập cùng bố mẹ. Mỗi bước có nút mở đúng màn hình cần vào.',
} as const;
