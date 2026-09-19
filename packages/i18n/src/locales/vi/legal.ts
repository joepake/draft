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
        body: 'Dữ liệu KidGate xử lý phụ thuộc vào tính năng phụ huynh bật và quyền hệ điều hành cấp cho ứng dụng. Dữ liệu có thể gồm: định danh tài khoản và thông tin đăng nhập bằng Google, Apple hoặc email dùng để tạo tài khoản phụ huynh; tên phụ huynh đặt cho từng con và thiết bị được gán cho con; tên thiết bị, kiểu máy, loại thiết bị, phiên bản hệ điều hành và ứng dụng, mức pin và trạng thái ghép nối; chính các thiết lập — Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, giới hạn riêng cho từng ứng dụng, danh mục Chặn nội dung web và mã PIN phụ huynh, vốn chỉ được lưu dưới dạng băm một chiều; tổng Thời gian sử dụng, chi tiết theo từng ứng dụng và bản ghi theo phút về thời điểm thiết bị được dùng; ứng dụng đã cài trên thiết bị và tiện ích mở rộng đã thêm vào trình duyệt; tên miền thiết bị của con yêu cầu truy cập và những tên miền đã bị chặn, đếm theo ngày và theo giờ; tên video và tên kênh của video đã phát ở những nền tảng cho phép đọc thông tin này; vị trí, lịch sử vị trí, các địa điểm phụ huynh đã lưu và cảnh báo khi thiết bị đến hoặc rời một địa điểm trong số đó; cảnh báo SOS, Báo an toàn và ảnh con gửi kèm; tên và địa chỉ email của mỗi liên hệ tin cậy phụ huynh thêm vào, để KidGate gửi email cho họ mỗi lần có SOS; cảnh báo khi một lớp bảo vệ bị tắt, khi có ứng dụng mới được cài, khi việc sử dụng có dấu hiệu bất thường — một ứng dụng mới, hoặc dùng máy trong Giờ khóa thiết bị — hoặc khi một tin nhắn hay từ khóa tìm kiếm khớp với danh sách phụ huynh đã bật; yêu cầu thêm giờ, yêu cầu mở khóa trang web, nhiệm vụ thưởng và tổng số sao trong tuần trên Bảng tích sao; báo cáo tuần tổng hợp những dữ liệu trên; tin nhắn hỗ trợ và ảnh chụp màn hình đính kèm; báo cáo sự cố và chẩn đoán kỹ thuật; và dữ liệu giao dịch thuê bao do cửa hàng ứng dụng cung cấp. KidGate không yêu cầu tên thật của trẻ khi một tính năng không cần đến.',
      },
      {
        title: '3. Dữ liệu ở lại trên thiết bị của con',
        body: 'Việc theo dõi tin nhắn và tìm kiếm chạy ngay trên thiết bị, chỉ có trên Android, và chỉ khi phụ huynh bật. Thiết bị so khớp nội dung với danh sách từ khóa lưu sẵn trong máy; thứ được gửi đi là một cảnh báo nêu từ hoặc cụm từ ngắn đã khớp, danh mục của nó, ứng dụng nơi nó xuất hiện và thời điểm. Bản thân tin nhắn, phần còn lại của cuộc trò chuyện và danh tính người trò chuyện cùng không được truyền đi và không được KidGate lưu trữ. Có một ngoại lệ duy nhất, và nó là một sự đồng ý riêng: nếu phụ huynh đồng ý thêm việc dùng AI để xác nhận, một tin nhắn đến có kết quả khớp chưa rõ ràng sẽ được gửi tới mô hình Gemini của Google để đánh giá, sau khi địa chỉ email, số điện thoại và địa chỉ web trong đó đã được che đi, nhằm tránh báo động vì một từ thông thường. Chỉ kết quả đánh giá được giữ lại; tin nhắn bị hủy ngay sau khi đánh giá xong. Nội dung do chính con soạn không bao giờ được gửi đi để AI xác nhận, dù gia đình đã đồng ý điều gì. Ngoài đường đi đó, KidGate ghi lại tên miền thiết bị yêu cầu và việc tên miền đó có bị chặn hay không — không ghi địa chỉ đầy đủ của trang hay nội dung trang — còn tệp, ảnh và hoạt động duyệt web mà không tính năng nào đang bật cần đọc thì vẫn nằm trên thiết bị.',
      },
      {
        title: '4. Mục đích sử dụng',
        body: 'Dữ liệu được dùng để xác thực, ghép nối thiết bị, cung cấp kiểm soát của phụ huynh, đồng bộ cài đặt, gửi cảnh báo, hiển thị báo cáo, xử lý thuê bao, chống gian lận, bảo vệ tài khoản, khắc phục lỗi và cải thiện độ ổn định. KidGate không bán dữ liệu cá nhân và không dùng dữ liệu trẻ em cho quảng cáo hành vi. Không có quảng cáo trong bất kỳ ứng dụng KidGate nào.',
      },
      {
        title: '5. Xử lý tự động và AI',
        body: 'Ba tính năng dùng mô hình Gemini của Google thông qua Google Cloud: phần tóm tắt bằng lời trong báo cáo tuần, được tạo từ chính số liệu sử dụng của gia đình; việc phân loại ứng dụng và tên miền vào các danh mục mà Chặn nội dung web và danh sách ứng dụng sử dụng, lưu trong một bảng dùng chung chỉ ghi tên miền và danh mục của nó, không ghi gia đình nào đã truy cập; và bước xác nhận nêu ở mục 3, chỉ chạy khi phụ huynh đã đồng ý. Các mô hình này đưa ra phán đoán và phán đoán đó có thể sai. Một danh mục, một câu tóm tắt hay một cảnh báo tin nhắn là lời nhắc phụ huynh xem lại, không phải kết luận, và KidGate không dựa vào chúng để đưa ra quyết định có hệ quả pháp lý hoặc hệ quả tương tự đối với trẻ. Kết quả từ mô hình không được dùng để huấn luyện mô hình của Google.',
      },
      {
        title: '6. Căn cứ và sự đồng ý',
        body: 'KidGate xử lý dữ liệu để cung cấp dịch vụ theo yêu cầu, thực hiện nghĩa vụ pháp lý, bảo vệ lợi ích hợp pháp về an toàn và bảo mật, hoặc dựa trên sự đồng ý khi pháp luật yêu cầu. Phụ huynh chịu trách nhiệm cung cấp mọi thông báo và lấy sự đồng ý cần thiết cho trẻ em hoặc người dùng thiết bị. Theo dõi tin nhắn và xác nhận bằng AI là hai lựa chọn đồng ý riêng biệt và có thể rút lại bất cứ lúc nào: theo dõi tin nhắn được bật theo từng thiết bị, còn xác nhận bằng AI được đồng ý một lần cho cả gia đình và được ghi nhận kèm người đồng ý và thời điểm đồng ý.',
      },
      {
        title: '7. Bên cung cấp dịch vụ',
        body: 'KidGate được xây dựng trên Google Cloud và Firebase, nơi cung cấp xác thực, cơ sở dữ liệu, lưu trữ tệp, các hàm máy chủ, thông báo đẩy qua Firebase Cloud Messaging, báo cáo sự cố qua Firebase Crashlytics và các mô hình Gemini nêu ở mục 5. Apple và Google cũng xử lý việc mua, gia hạn và hoàn tiền thuê bao qua cửa hàng ứng dụng của họ, còn Google Analytics xử lý phần đo lường mô tả ở mục 8. Bốn bên khác, mỗi bên chỉ thấy đúng một việc: HERE Technologies chuyển vị trí thiết bị báo về thành địa chỉ và vẽ nền bản đồ trên các màn hình vị trí, nên nhận tọa độ thiết bị đã báo; Resend gửi các email KidGate phát đi — cảnh báo SOS tới liên hệ tin cậy, và báo cáo tuần; Cloudflare phân phối bộ cài cho máy tính; và mạng phân phối nội dung unpkg cung cấp thư viện bản đồ cho các ứng dụng dành cho phụ huynh. Dữ liệu chỉ được chia sẻ với các bên này ở mức cần thiết để vận hành dịch vụ; với cơ quan có thẩm quyền khi pháp luật yêu cầu; hoặc để ngăn chặn nguy cơ an toàn, gian lận hay lạm dụng. Các bên này có chính sách và nghĩa vụ riêng, và KidGate không cho phép bên nào dùng dữ liệu trẻ em cho mục đích tiếp thị độc lập.',
      },
      {
        title: '8. Đo lường và cookie trên trang web',
        body: 'Trang kidgate.app đo ba con số bằng Google Analytics: lượt xem trang, và số lần bấm vào từng liên kết tải bản dành cho máy tính. Việc lưu dữ liệu phân tích bị từ chối theo mặc định, nên không có cookie phân tích nào được đặt và không có gì được lưu trong trình duyệt của người đọc; mỗi lượt truy cập được đếm từ một yêu cầu không dùng cookie, với địa chỉ IP đã rút gọn. Google Signals và định danh quảng cáo đều tắt, và không có thông tin nào nhận dạng người đọc hay gia đình được gửi đi. Các ứng dụng KidGate gửi một số ít sự kiện tới cùng thuộc tính đo lường để biết tính năng nào được dùng; những sự kiện này mang một định danh phiên bản cài đặt ứng dụng — không bao giờ là định danh quảng cáo của thiết bị, thứ mà ứng dụng không thu thập — và không bao giờ mang tên, tin nhắn, vị trí hay lịch sử duyệt web của trẻ. Ứng dụng và trang web không dùng bất kỳ mạng quảng cáo hay mạng theo dõi nào.',
      },
      {
        title: '9. Nơi lưu trữ và biện pháp bảo mật',
        body: 'Dữ liệu gia đình được lưu tại vùng Singapore của Google Cloud và có thể được các bên nêu ở mục 7 xử lý ở nơi khác, nghĩa là dữ liệu có thể rời khỏi quốc gia gia đình đang sinh sống. KidGate áp dụng biện pháp kỹ thuật và tổ chức hợp lý, gồm kiểm soát truy cập, giới hạn quyền ở mức tối thiểu, quy tắc phía máy chủ giới hạn mọi lượt đọc trong phạm vi một gia đình, và truyền dữ liệu qua kết nối bảo mật. Mã PIN phụ huynh chỉ được lưu dưới dạng băm một chiều và không thể đọc ngược. Không hệ thống nào an toàn tuyệt đối; KidGate không thể bảo đảm dữ liệu không bao giờ bị mất, bị truy cập trái phép hoặc bị gián đoạn.',
      },
      {
        title: '10. Truy cập hỗ trợ của nhân sự KidGate',
        body: 'Khi cần để xử lý yêu cầu hỗ trợ hoặc chẩn đoán sự cố, nhân sự được ủy quyền của KidGate có thể mở một tài khoản gia đình và thấy đúng những gì phụ huynh thấy: cấu hình, thiết bị và hoạt động bên trong tài khoản — bao gồm lịch sử vị trí, lịch sử web, cảnh báo tin nhắn và ảnh gửi kèm SOS hoặc Báo an toàn. Họ cũng có thể thay đổi thiết lập và gửi lệnh tới thiết bị. Quyền truy cập này giới hạn ở nhân sự được ủy quyền, yêu cầu xác thực hai lớp và chỉ phục vụ mục đích hỗ trợ. Mỗi lần mở một tài khoản gia đình, một dòng được ghi vào chính dòng hoạt động của gia đình đó, phụ huynh nhìn thấy được, kèm thời điểm và yêu cầu hỗ trợ liên quan; mỗi lượt đọc hồ sơ của một gia đình qua công cụ vận hành đều được ghi nhật ký kèm thời điểm và lý do đã nêu. Từng thao tác thực hiện trong phiên hỗ trợ hiện chưa được ghi nhật ký riêng.',
      },
      {
        title: '11. Thời hạn lưu giữ',
        body: 'Các bản ghi có thời hạn và được xóa tự động: Thời gian sử dụng và số liệu theo từng ứng dụng, lịch sử web, lịch sử video, lịch sử vị trí và dòng hoạt động sau 30 ngày; cảnh báo SOS, Báo an toàn và Yêu cầu thêm giờ sau 90 ngày; báo cáo tuần sau 365 ngày. Mã ghép nối hết hạn sau vài phút; phiên đăng nhập trên trình duyệt kéo dài 7 ngày nếu được ứng dụng cấp quyền, hoặc 8 giờ nếu mở bằng mã PIN phụ huynh. Một số bản ghi hiện chưa có thời hạn và được giữ đến khi tài khoản gia đình bị xóa: tài khoản và thiết lập, địa điểm đã lưu, hồ sơ con và thiết bị, Nhiệm vụ thưởng, yêu cầu mở khóa trang web, Bảng tích sao và bảng Thời gian sử dụng theo tuần, cùng danh sách ứng dụng đã cài. Yêu cầu hỗ trợ, phản hồi và ảnh chụp màn hình đính kèm bị xóa 90 ngày sau khi yêu cầu được giải quyết. Một bản ghi cho biết việc xóa tài khoản đã được yêu cầu và đã hoàn tất — chỉ gồm mã băm của địa chỉ email và các mốc ngày, không gì khác — được giữ 12 tháng sau khi hoàn tất, để có thể trả lời khi một lần xóa bị khiếu nại. Một số bản ghi tối thiểu cũng có thể được giữ khi pháp luật, phòng chống gian lận hoặc giao dịch cửa hàng ứng dụng yêu cầu.',
      },
      {
        title: '12. Xóa tài khoản',
        body: 'Phụ huynh có thể yêu cầu xóa trong phần Cài đặt, trên kidgate.app, hoặc bằng email gửi tới support@kidgate.app từ địa chỉ email của tài khoản. Yêu cầu được giữ trong 14 ngày và có thể hủy trong thời gian đó; sau đó, tài khoản gia đình, mọi hồ sơ con và thiết bị thuộc tài khoản, cùng các tệp đã lưu sẽ bị xóa, và bản thân thông tin đăng nhập cũng bị gỡ. Việc xóa là vĩnh viễn và không có bản xuất dữ liệu sau đó.',
      },
      {
        title: '13. Quyền và lựa chọn',
        body: 'Tùy pháp luật áp dụng, người dùng có thể yêu cầu truy cập, sửa, xóa, hạn chế hoặc phản đối xử lý và rút lại sự đồng ý. Những yêu cầu đó, kể cả yêu cầu nhận một bản sao dữ liệu KidGate đang giữ về gia đình, gửi tới support@kidgate.app; hiện chưa có tính năng tự xuất dữ liệu. Theo dõi tin nhắn và xác nhận bằng AI có thể tắt bất cứ lúc nào mà không ảnh hưởng tới phần còn lại của dịch vụ. Có thể tắt quyền vị trí, thông báo, máy ảnh hoặc quyền thiết bị trong hệ điều hành, nhưng tính năng phụ thuộc vào chúng sẽ ngừng hoặc hoạt động không đầy đủ, và KidGate báo điều đó ngay trên màn hình của phụ huynh thay vì hiển thị một nút điều khiển không còn tác dụng.',
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
        body: 'Chính sách có thể được cập nhật khi tính năng hoặc pháp luật thay đổi. Thay đổi quan trọng sẽ được thông báo trong ứng dụng hoặc kênh phân phối phù hợp. Câu hỏi và yêu cầu quyền riêng tư gửi tới support@kidgate.app, cũng là địa chỉ được công bố trên các trang cửa hàng ứng dụng của KidGate.',
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
        body: 'Muốn thực thi một quy tắc thì phải có phần mềm trên chính thiết bị áp dụng quy tắc đó, và mỗi nền tảng cấp quyền theo cách khác nhau: khung Screen Time của Apple trên iPhone và iPad, dịch vụ trợ năng cùng quyền quản trị thiết bị trên Android, một dịch vụ trợ năng trên Android TV, một tiện ích hệ thống và ứng dụng nền trên macOS, một dịch vụ nền trên Windows, và một tiện ích mở rộng trong Chrome. Bạn là người tự cài phần mềm này, trên thiết bị bạn có quyền quản lý, và bạn có thể gỡ bất cứ lúc nào từ chính thiết bị đó. Việc gỡ phần mềm, hoặc rút một quyền mà phần mềm phụ thuộc, sẽ làm ngừng thực thi trên thiết bị đó — KidGate sẽ báo cho bạn biết việc đó đã xảy ra, nhưng không thể ngăn.',
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
        body: 'Bản dùng thử miễn phí với đầy đủ tính năng bắt đầu khi thiết bị phụ huynh và thiết bị con đầu tiên được ghép nối, và kéo dài trong khoảng thời gian ghi trong ứng dụng. Khi bản dùng thử kết thúc, các quy tắc bạn đã đặt vẫn hoạt động miễn phí trên một thiết bị con — Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, giới hạn riêng cho từng ứng dụng, Chặn nội dung web, tìm kiếm an toàn, Khóa thiết bị, Yêu cầu thêm giờ, Nhiệm vụ thưởng và theo dõi tin nhắn — và bạn vẫn có thể hỏi vị trí hiện tại của thiết bị đó một số lần giới hạn mỗi ngày. SOS luôn miễn phí, không phụ thuộc gói. Hoạt động trực tiếp, lịch sử, báo cáo tuần, lộ trình di chuyển, địa chỉ và cảnh báo địa điểm trở thành phần của Premium. Nếu gia đình có nhiều thiết bị con hơn mức gói cho phép, các thiết bị dư sẽ được tạm dừng theo dõi: chúng vẫn thực thi các quy tắc đã đặt, những quy tắc đó có thể nới lỏng nhưng không thể siết chặt thêm, và chúng ngừng gửi hoạt động. Bạn chọn thiết bị nào tiếp tục được theo dõi, và lựa chọn đó có thể đổi bảy ngày một lần. Việc gỡ một thiết bị con không làm bản dùng thử bắt đầu lại. Mỗi gia đình chỉ được ghép nối một số lượng thiết bị con giới hạn trong suốt vòng đời tài khoản; con số này tùy theo gói, ứng dụng sẽ nêu khi bạn chạm mức đó, và một thiết bị đã gỡ vẫn được tính vào giới hạn.',
      },
      {
        title: '8. Thuê bao và thanh toán',
        body: 'Giao dịch, gia hạn, hủy và hoàn tiền được xử lý theo điều khoản của Apple App Store hoặc Google Play, và thuê bao chỉ có thể mua hoặc khôi phục từ ứng dụng KidGate trên iPhone, iPad hoặc Android — gia đình mà mọi thiết bị đều là máy tính, tivi hoặc Chromebook cần một trong các thiết bị đó để thanh toán. Một thuê bao áp dụng cho cả gia đình và chỉ chủ tài khoản gia đình mới mua hoặc khôi phục được; giao dịch thực hiện từ tài khoản của một phụ huynh khác sẽ bị từ chối. Gói tháng và gói năm tự động gia hạn trừ khi bạn hủy qua cửa hàng trước thời điểm kết thúc chu kỳ ít nhất 24 giờ. Gói trả một lần không gia hạn, bao gồm số thiết bị con ghi trong ứng dụng, và có hiệu lực chừng nào KidGate còn hoạt động; mục 12 nêu điều gì xảy ra nếu KidGate ngừng cung cấp. Giá và tính năng gói có thể thay đổi sau thông báo theo yêu cầu pháp luật và quy định cửa hàng.',
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
        body: 'Dịch vụ có thể được sửa đổi, tạm dừng hoặc ngừng do bảo trì, bảo mật, thay đổi nền tảng, pháp luật hoặc lý do vận hành. KidGate do một nhà phát triển độc lập vận hành và có thể bị ngừng cung cấp; khi đó, thuê bao đang hoạt động và gói trả một lần được xử lý theo quy định áp dụng của cửa hàng ứng dụng — gói trả một lần mua dịch vụ chừng nào dịch vụ còn được cung cấp, không phải một lời hứa rằng dịch vụ sẽ được cung cấp mãi mãi. KidGate cố gắng duy trì dịch vụ hợp lý nhưng không cam kết hoạt động liên tục, không lỗi hoặc tương thích với mọi thiết bị.',
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
        body: 'Bạn có thể ngừng sử dụng và yêu cầu xóa tài khoản. Yêu cầu xóa được giữ trong 14 ngày và có thể hủy trong thời gian đó; sau đó, tài khoản gia đình và dữ liệu trong tài khoản bị xóa vĩnh viễn. KidGate có thể đình chỉ hoặc chấm dứt dịch vụ vì vi phạm, rủi ro an toàn hoặc yêu cầu pháp lý. Các bên nên cố gắng giải quyết tranh chấp thiện chí trước, bắt đầu bằng một email gửi tới support@kidgate.app. Các điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam và tranh chấp được đưa ra tòa án có thẩm quyền tại Việt Nam, trừ khi quy định bắt buộc về bảo vệ người tiêu dùng của quốc gia bạn sinh sống cho bạn quyền chọn luật hoặc tòa án khác.',
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
        body: 'Điều khoản có thể được cập nhật. Thay đổi quan trọng sẽ được thông báo phù hợp; tiếp tục sử dụng sau ngày có hiệu lực đồng nghĩa chấp nhận bản mới khi pháp luật cho phép. Câu hỏi gửi tới support@kidgate.app.',
      },
    ],
  },
} as const;
