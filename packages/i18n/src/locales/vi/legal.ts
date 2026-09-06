export const legal = {
  privacyPolicy: {
    title: 'Chính sách quyền riêng tư',
    effectiveDate: 'Có hiệu lực từ ngày 06/09/2026',
    intro:
      'KidGate là tên sản phẩm và tên hoạt động của nhà phát triển độc lập vận hành ứng dụng. Chính sách này giải thích cách KidGate xử lý dữ liệu khi phụ huynh dùng dịch vụ để quản lý thiết bị trẻ em. Chính sách áp dụng cho ứng dụng KidGate trên iPhone, iPad và Android, ứng dụng KidGate trên macOS và Windows, tiện ích mở rộng trình duyệt, ứng dụng Android TV, bảng điều khiển dành cho phụ huynh và trang kidgate.app.',
    sections: [
      {
        title: '1. Phạm vi và vai trò của phụ huynh',
        body: 'Tài khoản phụ huynh là bên thiết lập, cấp quyền và quản lý thiết bị trẻ em. Trẻ em không tự tạo tài khoản KidGate; thiết bị chỉ được quản lý thông qua một tài khoản phụ huynh. Phụ huynh phải có quyền giám hộ hợp pháp hoặc sự cho phép hợp lệ trước khi theo dõi hay quản lý một thiết bị. KidGate không dành cho việc giám sát bí mật người lớn hoặc người không thuộc quyền giám hộ.',
      },
      {
        title: '2. Dữ liệu có thể được xử lý',
        body: 'Dữ liệu KidGate xử lý phụ thuộc vào tính năng phụ huynh bật và quyền hệ điều hành cấp cho ứng dụng. Dữ liệu có thể gồm: định danh tài khoản và thông tin đăng nhập bằng Google, Apple hoặc email dùng để tạo tài khoản phụ huynh; tên phụ huynh đặt cho từng con và thiết bị được gán cho con; tên thiết bị, kiểu máy, loại thiết bị, phiên bản hệ điều hành và ứng dụng, mức pin và trạng thái ghép nối; chính các thiết lập — Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, giới hạn riêng cho từng ứng dụng, danh mục Chặn nội dung web và mã PIN phụ huynh, vốn chỉ được lưu dưới dạng băm một chiều; tổng Thời gian sử dụng, chi tiết theo từng ứng dụng và bản ghi theo phút về thời điểm thiết bị được dùng; ứng dụng đã cài trên thiết bị và tiện ích mở rộng đã thêm vào trình duyệt; tên miền thiết bị của con yêu cầu truy cập và những tên miền đã bị chặn, đếm theo ngày và theo giờ; tên video đã phát ở những nền tảng cho phép đọc thông tin này; vị trí, lịch sử vị trí và các địa điểm phụ huynh đã lưu; cảnh báo SOS, Báo an toàn và ảnh con gửi kèm; cảnh báo khi một lớp bảo vệ bị tắt, khi có ứng dụng mới được cài, hoặc khi một tin nhắn hay từ khóa tìm kiếm khớp với danh sách phụ huynh đã bật; yêu cầu thêm giờ, yêu cầu mở khóa trang web, nhiệm vụ thưởng và tổng số sao trong tuần trên Bảng tích sao; báo cáo tuần tổng hợp những dữ liệu trên; tin nhắn hỗ trợ và ảnh chụp màn hình đính kèm; báo cáo sự cố và chẩn đoán kỹ thuật; và dữ liệu giao dịch thuê bao do cửa hàng ứng dụng cung cấp. KidGate không yêu cầu tên thật của trẻ khi một tính năng không cần đến.',
      },
      {
        title: '3. Dữ liệu ở lại trên thiết bị của con',
        body: 'Việc theo dõi tin nhắn và tìm kiếm chạy ngay trên thiết bị, chỉ có trên Android, và chỉ khi phụ huynh bật. Thiết bị so khớp nội dung với danh sách từ khóa lưu sẵn trong máy; thứ được gửi đi là một cảnh báo nêu từ khóa đã khớp, danh mục của nó, ứng dụng nơi nó xuất hiện và thời điểm. Bản thân tin nhắn, phần còn lại của cuộc trò chuyện và danh tính người nhắn không được truyền đi và không được KidGate lưu trữ. Có một ngoại lệ duy nhất, và nó là một sự đồng ý riêng: nếu phụ huynh đồng ý thêm việc dùng AI để xác nhận, một tin nhắn đến có kết quả khớp chưa rõ ràng sẽ được gửi tới mô hình Gemini của Google để đánh giá, nhằm tránh báo động vì một từ thông thường. Nội dung do chính con soạn không bao giờ được gửi đi để AI xác nhận, dù gia đình đã đồng ý điều gì. Ngoài đường đi đó, KidGate ghi lại tên miền thiết bị yêu cầu và việc tên miền đó có bị chặn hay không — không ghi địa chỉ đầy đủ của trang hay nội dung trang — còn tệp, ảnh và hoạt động duyệt web mà không tính năng nào đang bật cần đọc thì vẫn nằm trên thiết bị.',
      },
      {
        title: '4. Mục đích sử dụng',
        body: 'Dữ liệu được dùng để xác thực, ghép nối thiết bị, cung cấp kiểm soát của phụ huynh, đồng bộ cài đặt, gửi cảnh báo, hiển thị báo cáo, xử lý thuê bao, chống gian lận, bảo vệ tài khoản, khắc phục lỗi và cải thiện độ ổn định. KidGate không bán dữ liệu cá nhân và không dùng dữ liệu trẻ em cho quảng cáo hành vi. Không có quảng cáo trong bất kỳ ứng dụng KidGate nào.',
      },
      {
        title: '5. Xử lý tự động và AI',
        body: 'Ba tính năng dùng mô hình Gemini của Google thông qua Google Cloud: phần tóm tắt bằng lời trong báo cáo tuần, được tạo từ chính số liệu sử dụng của gia đình; việc phân loại ứng dụng và tên miền vào các danh mục mà Chặn nội dung web và danh sách ứng dụng sử dụng; và bước xác nhận nêu ở mục 3, chỉ chạy khi phụ huynh đã đồng ý. Các mô hình này đưa ra phán đoán và phán đoán đó có thể sai. Một danh mục, một câu tóm tắt hay một cảnh báo tin nhắn là lời nhắc phụ huynh xem lại, không phải kết luận, và KidGate không dựa vào chúng để đưa ra quyết định có hệ quả pháp lý hoặc hệ quả tương tự đối với trẻ. Kết quả từ mô hình không được dùng để huấn luyện mô hình của Google.',
      },
      {
        title: '6. Căn cứ và sự đồng ý',
        body: 'KidGate xử lý dữ liệu để cung cấp dịch vụ theo yêu cầu, thực hiện nghĩa vụ pháp lý, bảo vệ lợi ích hợp pháp về an toàn và bảo mật, hoặc dựa trên sự đồng ý khi pháp luật yêu cầu. Phụ huynh chịu trách nhiệm cung cấp mọi thông báo và lấy sự đồng ý cần thiết cho trẻ em hoặc người dùng thiết bị. Theo dõi tin nhắn và xác nhận bằng AI là hai lựa chọn đồng ý riêng biệt, được ghi nhận theo từng thiết bị và có thể rút lại bất cứ lúc nào.',
      },
      {
        title: '7. Bên cung cấp dịch vụ',
        body: 'KidGate được xây dựng trên Google Cloud và Firebase, nơi cung cấp xác thực, cơ sở dữ liệu, lưu trữ tệp, các hàm máy chủ, thông báo đẩy qua Firebase Cloud Messaging, báo cáo sự cố qua Firebase Crashlytics và các mô hình Gemini nêu ở mục 5. Apple và Google cũng xử lý việc mua, gia hạn và hoàn tiền thuê bao qua cửa hàng ứng dụng của họ, còn Google Analytics xử lý phần đo lường mô tả ở mục 8. Dữ liệu chỉ được chia sẻ với các bên này ở mức cần thiết để vận hành dịch vụ; với cơ quan có thẩm quyền khi pháp luật yêu cầu; hoặc để ngăn chặn nguy cơ an toàn, gian lận hay lạm dụng. Các bên này có chính sách và nghĩa vụ riêng, và KidGate không cho phép bên nào dùng dữ liệu trẻ em cho mục đích tiếp thị độc lập.',
      },
      {
        title: '8. Đo lường và cookie trên trang web',
        body: 'Trang kidgate.app đo ba con số bằng Google Analytics: lượt xem trang, và số lần bấm vào từng liên kết tải bản dành cho máy tính. Việc đo lường này đặt một cookie phân tích trong trình duyệt người đọc. Địa chỉ IP bị rút gọn, Google Signals và định danh quảng cáo đều tắt, và không có thông tin nào nhận dạng người đọc hay gia đình được gửi đi. Các ứng dụng KidGate gửi một số ít sự kiện tới cùng thuộc tính đo lường để biết tính năng nào được dùng; những sự kiện này mang một định danh phiên bản cài đặt ứng dụng, không bao giờ mang tên, tin nhắn, vị trí hay lịch sử duyệt web của trẻ. Ứng dụng và trang web không dùng bất kỳ mạng quảng cáo hay mạng theo dõi nào.',
      },
      {
        title: '9. Nơi lưu trữ và biện pháp bảo mật',
        body: 'Dữ liệu gia đình được lưu tại vùng Singapore của Google Cloud và có thể được các bên nêu ở mục 7 xử lý ở nơi khác, nghĩa là dữ liệu có thể rời khỏi quốc gia gia đình đang sinh sống. KidGate áp dụng biện pháp kỹ thuật và tổ chức hợp lý, gồm kiểm soát truy cập, giới hạn quyền ở mức tối thiểu, quy tắc phía máy chủ giới hạn mọi lượt đọc trong phạm vi một gia đình, và truyền dữ liệu qua kết nối bảo mật. Mã PIN phụ huynh chỉ được lưu dưới dạng băm một chiều và không thể đọc ngược. Không hệ thống nào an toàn tuyệt đối; KidGate không thể bảo đảm dữ liệu không bao giờ bị mất, bị truy cập trái phép hoặc bị gián đoạn.',
      },
      {
        title: '10. Truy cập hỗ trợ của nhân sự KidGate',
        body: 'Khi cần để xử lý yêu cầu hỗ trợ hoặc chẩn đoán sự cố, nhân sự được ủy quyền của KidGate có thể mở một tài khoản gia đình và thấy đúng những gì phụ huynh thấy: cấu hình, thiết bị và hoạt động bên trong tài khoản — bao gồm lịch sử vị trí, lịch sử web, cảnh báo tin nhắn và ảnh gửi kèm SOS hoặc Báo an toàn. Họ cũng có thể thay đổi thiết lập và gửi lệnh tới thiết bị. Quyền truy cập này giới hạn ở nhân sự được ủy quyền, yêu cầu xác thực hai lớp, chỉ phục vụ mục đích hỗ trợ, và mỗi lần mở một tài khoản gia đình đều được ghi nhật ký kèm thời điểm và lý do đã nêu. Từng thao tác thực hiện trong phiên hỗ trợ hiện chưa được ghi nhật ký riêng.',
      },
      {
        title: '11. Thời hạn lưu giữ',
        body: 'Các bản ghi có thời hạn và được xóa tự động: Thời gian sử dụng và số liệu theo từng ứng dụng, lịch sử web, lịch sử video, lịch sử vị trí và dòng hoạt động sau 30 ngày; cảnh báo SOS, Báo an toàn và Yêu cầu thêm giờ sau 90 ngày; báo cáo tuần sau 365 ngày. Mã ghép nối hết hạn sau vài phút và một phiên đăng nhập trên trình duyệt kéo dài 7 ngày. Một số bản ghi hiện chưa có thời hạn và được giữ đến khi tài khoản gia đình bị xóa: tài khoản và thiết lập, địa điểm đã lưu, hồ sơ con và thiết bị, Nhiệm vụ thưởng, yêu cầu mở khóa trang web, Bảng tích sao và bảng Thời gian sử dụng theo tuần, cùng danh sách ứng dụng đã cài. Tin nhắn hỗ trợ và ảnh chụp màn hình đính kèm được giữ vô thời hạn và không bị xóa khi xóa tài khoản; việc khắc phục điều này đã được lên kế hoạch. Một số bản ghi tối thiểu cũng có thể được giữ khi pháp luật, phòng chống gian lận, sao lưu luân phiên hoặc giao dịch cửa hàng ứng dụng yêu cầu.',
      },
      {
        title: '12. Xóa tài khoản',
        body: 'Phụ huynh có thể yêu cầu xóa trong phần Cài đặt hoặc trên kidgate.app. Yêu cầu được giữ trong 14 ngày và có thể hủy trong thời gian đó; sau đó, tài khoản gia đình, mọi hồ sơ con và thiết bị thuộc tài khoản, cùng các tệp đã lưu sẽ bị xóa, và bản thân thông tin đăng nhập cũng bị gỡ. Việc xóa là vĩnh viễn và không có bản xuất dữ liệu sau đó. Các bản ghi hỗ trợ nêu ở mục 11 là ngoại lệ và vẫn được giữ lại.',
      },
      {
        title: '13. Quyền và lựa chọn',
        body: 'Tùy pháp luật áp dụng, người dùng có thể yêu cầu truy cập, sửa, xóa, hạn chế hoặc phản đối xử lý và rút lại sự đồng ý. Theo dõi tin nhắn và xác nhận bằng AI có thể tắt bất cứ lúc nào mà không ảnh hưởng tới phần còn lại của dịch vụ. Có thể tắt quyền vị trí, thông báo, máy ảnh hoặc quyền thiết bị trong hệ điều hành, nhưng tính năng phụ thuộc vào chúng sẽ ngừng hoặc hoạt động không đầy đủ, và KidGate báo điều đó ngay trên màn hình của phụ huynh thay vì hiển thị một nút điều khiển không còn tác dụng.',
      },
      {
        title: '14. Dữ liệu trẻ em',
        body: 'KidGate xử lý dữ liệu trẻ em chỉ theo cấu hình và chỉ dẫn của tài khoản phụ huynh. Nếu phát hiện dữ liệu trẻ em được cung cấp mà không có thẩm quyền hoặc sự đồng ý bắt buộc, KidGate có thể hạn chế tài khoản và xóa dữ liệu sau khi xác minh.',
      },
      {
        title: '15. Sự cố dữ liệu',
        body: 'KidGate sẽ đánh giá sự cố bảo mật đã xác nhận, thực hiện biện pháp giảm thiểu hợp lý và thông báo cho người dùng hoặc cơ quan có thẩm quyền khi pháp luật yêu cầu. Phụ huynh phải bảo vệ tài khoản, mã PIN và thiết bị, đồng thời báo sớm khi nghi ngờ truy cập trái phép.',
      },
      {
        title: '16. Thay đổi và liên hệ',
        body: 'Chính sách có thể được cập nhật khi tính năng hoặc pháp luật thay đổi. Thay đổi quan trọng sẽ được thông báo trong ứng dụng hoặc kênh phân phối phù hợp. Câu hỏi và yêu cầu quyền riêng tư có thể gửi qua kênh hỗ trợ được công bố trên trang cửa hàng ứng dụng của KidGate.',
      },
    ],
  },
  termsOfService: {
    title: 'Điều khoản sử dụng',
    effectiveDate: 'Có hiệu lực từ ngày 06/09/2026',
    intro:
      'Khi đăng nhập hoặc sử dụng KidGate, bạn xác nhận đã đọc và đồng ý với các điều khoản này. KidGate là tên sản phẩm và tên hoạt động của nhà phát triển độc lập vận hành dịch vụ.',
    sections: [
      {
        title: '1. Điều kiện sử dụng',
        body: 'Bạn phải đủ tuổi giao kết hợp đồng theo pháp luật áp dụng và có quyền hợp pháp đối với mọi trẻ em, tài khoản và thiết bị được quản lý. Nếu không đồng ý với điều khoản, không sử dụng dịch vụ.',
      },
      {
        title: '2. KidGate là gì và không là gì',
        body: 'KidGate cung cấp công cụ hỗ trợ phụ huynh quản lý thiết bị, giới hạn sử dụng, xem trạng thái và nhận cảnh báo. KidGate không thay thế việc giám sát trực tiếp, tư vấn y tế, dịch vụ khẩn cấp, cơ quan thực thi pháp luật hoặc biện pháp bảo vệ trẻ em chuyên nghiệp. SOS báo cho bạn; SOS không gọi dịch vụ khẩn cấp và không hoạt động khi thiết bị không có kết nối mạng.',
      },
      {
        title: '3. Phần mềm cài trên thiết bị được quản lý',
        body: 'Muốn thực thi một quy tắc thì phải có phần mềm trên chính thiết bị áp dụng quy tắc đó, và mỗi nền tảng cấp quyền theo cách khác nhau: khung Screen Time của Apple trên iPhone và iPad, dịch vụ trợ năng cùng quyền quản trị thiết bị trên Android, một tiện ích hệ thống và ứng dụng nền trên macOS, một dịch vụ nền trên Windows, và một tiện ích mở rộng trong Chrome. Bạn là người tự cài phần mềm này, trên thiết bị bạn có quyền quản lý, và bạn có thể gỡ bất cứ lúc nào từ chính thiết bị đó. Việc gỡ phần mềm, hoặc rút một quyền mà phần mềm phụ thuộc, sẽ làm ngừng thực thi trên thiết bị đó — KidGate sẽ báo cho bạn biết việc đó đã xảy ra, nhưng không thể ngăn.',
      },
      {
        title: '4. Trách nhiệm của phụ huynh',
        body: 'Bạn chịu trách nhiệm thông báo phù hợp cho trẻ, lấy sự đồng ý cần thiết, cấu hình quyền chính xác, kiểm tra hoạt động của tính năng và tuân thủ luật về quyền riêng tư, theo dõi, lao động, giáo dục và trẻ em. Theo dõi tin nhắn và xác nhận bằng AI là hai lựa chọn đồng ý riêng biệt, do bạn quyết định, kèm theo nghĩa vụ thông báo mà quyết định đó đòi hỏi tại nơi bạn sinh sống. Không dùng KidGate để theo dõi bí mật, quấy rối, kiểm soát trái phép hoặc xâm phạm quyền của người khác.',
      },
      {
        title: '5. Tài khoản, bảo mật và mã PIN phụ huynh',
        body: 'Bạn chịu trách nhiệm về hoạt động trong tài khoản, độ an toàn của thiết bị, mã PIN và phương thức đăng nhập. Mã PIN phụ huynh bảo vệ các thiết lập nhạy cảm trên thiết bị của con và không thể khôi phục từ thiết bị — mã được lưu dưới dạng băm một chiều. Phải báo sớm khi nghi ngờ truy cập trái phép. KidGate có thể tạm khóa tài khoản hoặc thiết bị để bảo vệ người dùng hay điều tra lạm dụng.',
      },
      {
        title: '6. Quyền hệ điều hành và giới hạn kỹ thuật',
        body: 'Một số tính năng phụ thuộc vào quyền hệ điều hành, kết nối mạng, pin, cài đặt nhà sản xuất, dịch vụ vị trí và nền tảng bên thứ ba, và mỗi nền tảng cho phép những việc khác nhau. Một số cơ chế thực thi vốn chỉ ở mức nỗ lực tối đa — đóng ứng dụng bị chặn trên máy tính thay vì ngăn nó khởi chạy — và KidGate nói rõ điều đó ngay trên màn hình cung cấp tính năng. Cảnh báo có thể chậm, thiếu hoặc không chính xác. Bạn phải kiểm tra thiết bị và không được dựa duy nhất vào KidGate trong tình huống an toàn hoặc khẩn cấp.',
      },
      {
        title: '7. Gói dịch vụ, bản dùng thử và gói miễn phí',
        body: 'Bản dùng thử miễn phí với đầy đủ tính năng bắt đầu khi thiết bị phụ huynh và thiết bị con đầu tiên được ghép nối, và kéo dài trong khoảng thời gian ghi trong ứng dụng. Khi bản dùng thử kết thúc, các quy tắc bạn đã đặt vẫn hoạt động miễn phí trên một thiết bị con — Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Chặn nội dung web, Khóa thiết bị, Yêu cầu thêm giờ và Nhiệm vụ thưởng — còn hoạt động trực tiếp, lịch sử, báo cáo tuần và theo dõi vị trí trở thành phần của Premium. Nếu gia đình có nhiều thiết bị con hơn mức gói cho phép, các thiết bị dư sẽ được tạm dừng theo dõi: chúng vẫn thực thi các quy tắc đã đặt và ngừng gửi hoạt động, và bạn chọn thiết bị nào tiếp tục được theo dõi. Việc gỡ một thiết bị con không làm bản dùng thử bắt đầu lại, và mỗi gia đình chỉ được ghép nối một số lượng thiết bị con giới hạn trong suốt vòng đời tài khoản.',
      },
      {
        title: '8. Thuê bao và thanh toán',
        body: 'Giao dịch, gia hạn, hủy và hoàn tiền được xử lý theo điều khoản của Apple App Store, Google Play hoặc nhà cung cấp thanh toán liên quan. Một thuê bao áp dụng cho cả gia đình và chỉ chủ tài khoản gia đình phải trả tiền. Giá và tính năng gói có thể thay đổi sau thông báo theo yêu cầu pháp luật và quy định cửa hàng.',
      },
      {
        title: '9. Nội dung do máy tạo và AI',
        body: 'Phần tóm tắt trong báo cáo tuần, danh mục gán cho ứng dụng và trang web, cùng bước xác nhận trong theo dõi tin nhắn đều do mô hình tự động tạo ra và có thể sai theo cả hai hướng: một trang web có thể bị xếp nhầm danh mục, một câu tóm tắt có thể mô tả sai một tuần, và một cảnh báo có thể nổ vì tin nhắn vô hại hoặc không nổ trước tin nhắn thực sự có hại. Hãy xem đó là lời nhắc xem lại chứ không phải kết luận, và đừng dựa vào đó làm căn cứ duy nhất cho một quyết định liên quan đến con.',
      },
      {
        title: '10. Giấy phép và sở hữu',
        body: 'KidGate cấp quyền cá nhân, có giới hạn, không độc quyền, không chuyển nhượng và có thể thu hồi để dùng ứng dụng đúng điều khoản. Không được sao chép, bán lại, dịch ngược, phá cơ chế bảo vệ, khai thác tự động hoặc dùng thương hiệu, mã nguồn hay nội dung ngoài phạm vi pháp luật cho phép.',
      },
      {
        title: '11. Hành vi bị cấm',
        body: 'Không được xâm nhập hệ thống, phát tán mã độc, giả mạo danh tính, truy cập dữ liệu không thuộc quyền, gây quá tải, né giới hạn, dùng dịch vụ để gây hại hoặc vi phạm pháp luật. KidGate có thể hạn chế hoặc chấm dứt quyền truy cập khi có căn cứ hợp lý về vi phạm.',
      },
      {
        title: '12. Tính sẵn có và thay đổi',
        body: 'Dịch vụ có thể được sửa đổi, tạm dừng hoặc ngừng do bảo trì, bảo mật, thay đổi nền tảng, pháp luật hoặc lý do vận hành. KidGate do một nhà phát triển độc lập vận hành và có thể bị ngừng cung cấp; khi đó, thuê bao đang hoạt động được xử lý theo quy định áp dụng của cửa hàng ứng dụng. KidGate cố gắng duy trì dịch vụ hợp lý nhưng không cam kết hoạt động liên tục, không lỗi hoặc tương thích với mọi thiết bị.',
      },
      {
        title: '13. Tuyên bố miễn trừ',
        body: 'Trong phạm vi pháp luật cho phép, dịch vụ được cung cấp theo hiện trạng và khả dụng, không có bảo đảm ngầm định về khả năng bán được, phù hợp mục đích cụ thể, độ chính xác hoặc không vi phạm. Không nội dung nào loại trừ quyền người tiêu dùng bắt buộc hoặc trách nhiệm không thể loại trừ theo pháp luật.',
      },
      {
        title: '14. Giới hạn trách nhiệm',
        body: 'Trong phạm vi pháp luật cho phép, KidGate không chịu trách nhiệm cho thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, trừng phạt, mất dữ liệu, lợi nhuận hoặc cơ hội phát sinh từ việc sử dụng hay không thể sử dụng dịch vụ. Tổng trách nhiệm đối với yêu cầu liên quan dịch vụ không vượt quá khoản bạn đã trả cho KidGate trong 12 tháng trước sự kiện, trừ khi pháp luật bắt buộc mức khác.',
      },
      {
        title: '15. Bồi hoàn',
        body: 'Trong phạm vi pháp luật cho phép, bạn đồng ý bồi hoàn cho KidGate đối với khiếu nại từ bên thứ ba phát sinh do bạn sử dụng trái pháp luật, theo dõi không có thẩm quyền, vi phạm quyền người khác hoặc vi phạm điều khoản. Điều này không áp dụng cho thiệt hại do lỗi mà pháp luật quy trực tiếp cho KidGate.',
      },
      {
        title: '16. Chấm dứt và tranh chấp',
        body: 'Bạn có thể ngừng sử dụng và yêu cầu xóa tài khoản. Yêu cầu xóa được giữ trong 14 ngày và có thể hủy trong thời gian đó; sau đó, tài khoản gia đình và dữ liệu trong tài khoản bị xóa vĩnh viễn. KidGate có thể đình chỉ hoặc chấm dứt dịch vụ vì vi phạm, rủi ro an toàn hoặc yêu cầu pháp lý. Các bên nên cố gắng giải quyết tranh chấp thiện chí trước; luật và tòa án có thẩm quyền được xác định theo quy định bắt buộc áp dụng cho người dùng và đơn vị vận hành.',
      },
      {
        title: '17. Điều khoản chung',
        body: 'Nếu bất kỳ điều khoản nào bị coi là không thể thực thi, các điều khoản còn lại vẫn giữ hiệu lực. Việc không thực thi một điều khoản không được coi là từ bỏ điều khoản đó. Các điều khoản này, cùng với Chính sách quyền riêng tư và điều khoản của cửa hàng, là toàn bộ thỏa thuận về dịch vụ. KidGate có thể chuyển giao các điều khoản này khi chuyển nhượng ứng dụng; quyền của bạn theo pháp luật bắt buộc không bị ảnh hưởng.',
      },
      {
        title: '18. Phần mềm của bên thứ ba',
        body: 'KidGate có kèm hai phông chữ, đều dùng theo giấy phép SIL Open Font License 1.1: Plus Jakarta Sans của Tokotype và Baloo 2 của Ek Type. Các chỉ số dọc của Baloo 2 được chỉnh lại cho phù hợp chiều cao dòng của ứng dụng; đường nét chữ và tên họ phông giữ nguyên, và giấy phép cho phép việc chỉnh sửa đó. Không phông nào được bán riêng. Mã nguồn và giấy phép:',
        links: [
          {
            label: 'Plus Jakarta Sans trên GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 trên GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Thay đổi và liên hệ',
        body: 'Điều khoản có thể được cập nhật. Thay đổi quan trọng sẽ được thông báo phù hợp; tiếp tục sử dụng sau ngày có hiệu lực đồng nghĩa chấp nhận bản mới khi pháp luật cho phép. Câu hỏi có thể gửi qua kênh hỗ trợ trên trang cửa hàng ứng dụng của KidGate.',
      },
    ],
  },
} as const;
