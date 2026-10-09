/**
 * Vietnamese. Vietnamese has no plural inflection, so counted strings keep the
 * plain key and no `_one` / `_other` variants.
 *
 * Terminology follows the app pack (`packages/i18n/src/locales/vi`) so a
 * parent reads the same words in both places:
 * Screen Time = "Thời gian sử dụng", Blocked Hours = "Giờ khóa thiết bị",
 * Daily Limit = "Giới hạn hằng ngày", Check-In = "Báo an toàn",
 * App Limits = "Giới hạn ứng dụng", categories = "Danh mục".
 * Anything quoted as an in-app path or button (*Gia đình → chạm + → …*) is
 * copied verbatim from that pack — changing it there means changing it here.
 * Register: labels that mirror an app screen say "thiết bị của trẻ"; prose
 * addressed to the reader says "con", the way the app's own copy does.
 *
 * Durations abbreviate as "g" (giờ) and "p" (phút) — `2g 14p`. Clock times
 * keep "h" — `23h`, `0h đến 24h`. That is not an inconsistency: Vietnamese
 * splits the two, and swapping the duration form to "h" was tried and
 * reverted. The same pair lives in `src/locales/vi/shared.ts`
 * (`durationHoursCompact`) and in `vi/blockedHours.ts` (`±1g`); changing one
 * without the others puts two spellings of the same number on a phone and a
 * browser showing one family.
 */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} trong {{total}} ứng dụng cần xem lại',
    summaryClear: 'Không có gì đáng ngại trong {{total}} ứng dụng',
    summaryFlaggedExtension:
      '{{flagged}} trong {{total}} tiện ích mở rộng của Chrome cần xem lại',
    summaryClearExtension:
      'Không có gì đáng ngại trong {{total}} tiện ích mở rộng của Chrome',
  },
  meta: {
    title: 'KidGate — Quản lý điện thoại của con mà vẫn tôn trọng con',
    description:
      'KidGate giúp cha mẹ quản lý thời gian sử dụng, chặn ứng dụng, chặn web xấu và giữ liên lạc với con — mà không lấy đi sự tự do của con.',
  },

  common: {
    comingSoon: 'Sắp ra mắt',
    loading: 'Đang tải…',
    signOut: 'Đăng xuất',
    crashTitle: 'Trang này đã ngừng hoạt động',
    crashBody:
      'Tải lại thường là xong. Cài đặt của gia đình và thiết bị của con bạn không thay đổi.',
    crashReload: 'Tải lại trang',
  },

  language: {
    title: 'Ngôn ngữ',
    change: 'Đổi ngôn ngữ',
    system: 'Ngôn ngữ trình duyệt',
    english: 'Tiếng Anh',
    vietnamese: 'Tiếng Việt',
    spanish: 'Tiếng Tây Ban Nha',
    portuguese: 'Tiếng Bồ Đào Nha (Brazil)',
    german: 'Tiếng Đức',
    french: 'Tiếng Pháp',
    japanese: 'Tiếng Nhật',
    korean: 'Tiếng Hàn',
    arabic: 'Tiếng Ả Rập',
    indonesian: 'Tiếng Indonesia',
    italian: 'Tiếng Ý',
    turkish: 'Tiếng Thổ Nhĩ Kỳ',
    hindi: 'Tiếng Hindi',
    russian: 'Tiếng Nga',
  },

  nav: {
    skip: 'Đến nội dung chính',
    main: 'Menu chính',
    plans: 'Gói dịch vụ',
    about: 'Giới thiệu',
    support: 'Hỗ trợ',
    privacy: 'Quyền riêng tư',
    terms: 'Điều khoản',
    dashboard: 'Bảng điều khiển',
  },

  footer: {
    blurb: 'Giúp cả nhà thống nhất chuyện dùng điện thoại, thay vì cãi nhau về nó.',
    product: 'Sản phẩm',
    about: 'Về chúng tôi',
    dashboard: 'Bảng điều khiển phụ huynh',
    supportGuides: 'Hỗ trợ & hướng dẫn',
    download: 'Tải về',
    contact: 'Liên hệ',
    legal: 'Pháp lý',
    privacyPolicy: 'Chính sách quyền riêng tư',
    terms: 'Điều khoản & điều kiện',
    deleteData: 'Xóa dữ liệu của bạn',
    rights: '© {{year}} KidGate. Bảo lưu mọi quyền.',
    madeFor:
      'Dành cho các gia đình dùng iPhone, Android, Mac, Windows, Android TV và Chrome.',
  },

  legalNote:
    'Trang này chỉ có bản tiếng Anh và bản tiếng Anh là bản có hiệu lực. Nếu cần giải thích thêm phần nào, vui lòng liên hệ [support@kidgate.app](mailto:support@kidgate.app).',

  store: {
    appleAria: 'Tải KidGate trên App Store',
    appleSmall: 'Tải xuống trên',
    appleName: 'App Store',
    googleAria: 'Tải KidGate trên Google Play',
    googleSmall: 'Tải xuống trên',
    googleName: 'Google Play',
    chromeName: 'Cửa hàng Chrome trực tuyến',
  },

  home: {
    heroBadge: 'Quản lý thiết bị cho cả nhà',
    heroTitle: 'Bảo vệ con bạn',
    heroTitleAccent: 'mà không lấy đi sự tự do của con.',
    heroLede:
      'KidGate giúp cha mẹ quản lý thời gian sử dụng, ứng dụng và an toàn của con một cách nhẹ nhàng, rõ ràng — còn con vẫn giữ một chiếc điện thoại thực sự là của mình.',
    heroCheck1: 'Thời gian sử dụng',
    heroCheck2: 'Chặn ứng dụng',
    heroCheck3: 'Chặn nội dung web',
    heroCheck4: 'Vị trí',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Giới hạn hằng ngày',
    phoneBlockedHours: 'Giờ khóa thiết bị',
    phoneScheduleOn: 'Lịch đang bật',
    phoneLocation: 'Vị trí',
    phoneCheckIn: 'Đã báo an toàn',

    trust1Title: 'Không bao giờ có quảng cáo',
    trust1Text: 'Dữ liệu của trẻ không bao giờ được dùng cho quảng cáo',
    trust2Title: 'Xóa bất cứ lúc nào',
    trust2Text: 'Xóa tài khoản gia đình và toàn bộ dữ liệu bất cứ khi nào bạn muốn',
    trust3Title: 'Điện thoại, máy tính và TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV và Chrome trong cùng một tài khoản gia đình',
    trust4Title: 'Một gói cho cả gia đình',
    trust4Text: 'Một gói dùng cho mọi thiết bị của phụ huynh và của con',

    featuresEyebrow: 'Tính năng',
    featuresTitle: 'Mọi thứ cha mẹ cần',
    featuresSub:
      'Từ Giới hạn hằng ngày đến cảnh báo khẩn cấp — một ứng dụng lo chuyện dùng thiết bị của cả nhà.',
    feature1Title: 'Thời gian sử dụng & Giới hạn hằng ngày',
    feature1Text:
      'Đặt Giới hạn hằng ngày và Giờ khóa thiết bị cho giờ học, giờ ngủ. Hết giờ, thiết bị tự khóa.',
    feature2Title: 'Chặn ứng dụng',
    feature2Text:
      'Chọn những ứng dụng con không được mở, có mã PIN phụ huynh bảo vệ, và bật chặn từ xa.',
    feature3Title: 'Giới hạn ứng dụng',
    feature3Text:
      'Trên Android, Android TV và máy tính, đặt giới hạn riêng cho từng ứng dụng — “nửa tiếng TikTok” mà không cần cấm hẳn.',
    feature4Title: 'Lịch sử web & Chặn nội dung web',
    feature4Text:
      'Chặn trang người lớn, cờ bạc, nội dung tự làm hại bản thân và nhiều hơn nữa trên mọi thiết bị; với Premium, xem thêm được con đã vào những trang nào.',
    feature5Title: 'Vị trí & địa điểm',
    feature5Text:
      'Xem con đang ở đâu, tối đa 10 lần một ngày; Premium có thêm vị trí trực tiếp và báo khi con đến hoặc rời một địa điểm đã lưu.',
    feature6Title: 'Báo an toàn & SOS',
    feature6Text:
      'Yêu cầu con xác nhận mình vẫn an toàn; khi có việc khẩn cấp, điện thoại của con gửi ngay SOS cho bạn, kèm vị trí.',
    feature7Title: 'Cảnh báo bảo vệ & cảnh báo ứng dụng',
    feature7Text:
      'Biết ngay khi một quyền quan trọng trên điện thoại của con bị tắt, và duyệt ứng dụng mới trước khi chúng mở được trên Android, Android TV hoặc máy tính.',
    feature8Title: 'Nhiệm vụ thưởng & yêu cầu thêm giờ',
    feature8Text:
      'Con làm xong nhiệm vụ để được cộng phút và sao, hoặc gửi yêu cầu thêm giờ — bạn duyệt cả hai ngay trên điện thoại của mình.',

    feature9Title: 'Khóa thiết bị',
    feature9Text:
      'Khóa máy ngay và mở lại khi bạn muốn — giờ ăn cơm, giờ học bài, hay khi một quy tắc bị phớt lờ.',
    feature10Title: 'Báo cáo tuần',
    feature10Text:
      'Mỗi thứ Hai: thời gian dùng máy, trung bình mỗi ngày, những gì đã bị chặn, và tuần này so với tuần trước.',
    feature11Title: 'Lịch sử YouTube & video',
    feature11Text:
      'Những video YouTube và Shorts con đã xem trên Android và trong Chrome, cùng các video trên Android TV. Không có trên iPhone.',
    feature12Title: 'Nhật ký hoạt động',
    feature12Text:
      'Mọi việc đã xảy ra, theo thứ tự — máy được mở khóa, một yêu cầu được trả lời, một cảnh báo được gửi; gói miễn phí xem trong ngày, Premium lưu 30 ngày.',
    featurePremium: 'Premium',
    platformsTitle: 'Một KidGate, ở mọi màn hình',
    platformsSub:
      'Cùng bộ quy tắc và cùng một tài khoản gia đình trên điện thoại, máy tính và Android TV — và cùng tính năng Chặn nội dung web trong Chrome. Bản cho máy tính tải từ trang này, không qua cửa hàng ứng dụng.',

    showcaseEyebrow: 'Bảng điều khiển phụ huynh',
    showcaseTitle: 'Cả gia đình trên một màn hình',
    showcaseSub:
      'Thời gian sử dụng, lượt bị chặn, vị trí và mọi thứ cần bạn để ý — trên điện thoại, hoặc trên bất kỳ trình duyệt nào.',
    showcaseCaption1: 'Xem báo cáo từ mọi trình duyệt',
    showcaseCaption2: 'Thay đổi được duyệt từ điện thoại của bạn',

    setupEyebrow: 'Thiết lập',
    setupTitle: 'Sẵn sàng trong vài phút',
    setupSub: 'Không cần rành công nghệ — ứng dụng hướng dẫn bạn từng bước.',
    step1Title: 'Thiết lập thiết bị của bạn',
    step1Text:
      'Cài KidGate, chọn “Đây là thiết bị của phụ huynh”, rồi đăng nhập bằng Google hoặc email — hoặc Apple, nếu dùng iPhone.',
    step2Title: 'Kết nối thiết bị của con',
    step2Text:
      'Cài KidGate trên điện thoại của con và kết nối bằng cách quét mã QR. Chưa tới một phút.',
    step3Title: 'Đặt quy tắc của bạn',
    step3Text:
      'Đặt Giới hạn hằng ngày và Giờ khóa thiết bị, bật vị trí và chặn ứng dụng ngay từ điện thoại của bạn. Danh sách ứng dụng cần chặn được chọn một lần trên thiết bị của con, bằng mã PIN phụ huynh.',

    whyEyebrow: 'Vì sao chọn KidGate',
    whyTitle: 'Dựa trên niềm tin, không phải sự giám sát',
    whySub: 'Thiết kế để cha mẹ và con vẫn nói chuyện được với nhau.',
    why1Title: 'Một gói, cả gia đình',
    why1Text:
      'Một gói Premium dùng cho mọi thiết bị của phụ huynh và của con, và chỉ chủ gia đình trả tiền. Gói miễn phí vẫn theo dõi một thiết bị trẻ.',
    why2Title: 'Nhiều phụ huynh cùng quản lý',
    why2Text:
      'Mời phụ huynh thứ hai cùng quản lý các con — chủ gia đình là người duyệt quyền truy cập. Gói miễn phí và thời gian dùng thử cho phép tối đa 3 phụ huynh mỗi gia đình, Premium cho phép tối đa 6.',
    why3Title: 'Quyền riêng tư là trên hết',
    why3Text:
      'Chúng tôi không bao giờ bán dữ liệu cá nhân và không dùng dữ liệu của trẻ cho quảng cáo. Xóa mọi thứ bất cứ lúc nào.',
    why4Title: 'Thành thật về giới hạn',
    why4Text:
      'Chúng tôi nói rõ mỗi nền tảng làm được và không làm được gì, thay vì hứa hẹn những thứ thực ra không làm được.',

    onlyEyebrow: 'Chỉ KidGate có',
    onlyTitle: 'Những điều bạn không thấy ở nơi khác',
    onlySub:
      'Sáu điểm chúng tôi đã đối chiếu với các ứng dụng mà phụ huynh hay so sánh. Mỗi điểm đều ghi rõ áp dụng trên nền tảng nào.',
    only1Title: 'Cả chiếc TV ngoài phòng khách',
    only1Text:
      'Android TV có Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng và Chặn nội dung web. Trên TV, việc chặn ứng dụng không tuyệt đối — ứng dụng bị chặn sẽ bị đưa về màn hình chính — và không gửi được SOS hay Yêu cầu thêm giờ từ ghế sofa. TV cũng không chia sẻ vị trí. Hầu hết ứng dụng kiểm soát của phụ huynh chỉ dừng lại ở chiếc điện thoại.',
    only2Title: 'Cảnh báo tin nhắn mà nội dung vẫn nằm trên máy',
    only2Text:
      'Với Premium trên Android, tin nhắn được đối chiếu ngay trên thiết bị với danh sách từ khóa của tối đa ba ngôn ngữ bạn chọn (trong số 14), và thứ rời khỏi máy chỉ là từ hoặc cụm từ đã khớp, không phải cuộc trò chuyện. Chỉ có một ngoại lệ, và chỉ khi bạn yêu cầu: bật xác nhận bằng AI thì một tin nhắn đến chưa rõ ràng sẽ được gửi tới Gemini của Google để đánh giá, để bạn không bị đánh thức vì một từ bình thường.',
    only3Title: 'Mọi ứng dụng, không phải một danh sách',
    only3Text:
      'Cảnh báo đến từ thông báo của bất kỳ ứng dụng nào con dùng — không phụ thuộc vào danh sách ứng dụng được hỗ trợ — và từ những gì con gõ trong các ứng dụng chat, mạng xã hội và game phổ biến, trong đó có Zalo, LINE và KakaoTalk. Chỉ có trên Android, với Premium.',
    only4Title: 'Lối thoát cho con',
    only4Text:
      'Con giữ nút SOS năm giây trên điện thoại là bạn nhận được ngay, kèm vị trí — trên Android, máy còn mở được gọi điện, bản đồ và tin nhắn trong năm phút, kể cả khi đang bị khóa. Khi gọi được trợ giúp ngay từ màn hình khóa, con không có lý do gì để chống lại ứng dụng.',
    only5Title: 'Quy tắc vẫn giữ khi mất kết nối',
    only5Text:
      'Giờ khóa thiết bị và Giới hạn hằng ngày được thực thi ngay trên thiết bị, nên rút dây mạng cũng không thay đổi gì. TV còn nhận mã PIN phụ huynh khi hoàn toàn không có kết nối.',
    only6Title: 'Ghi nhận khi tuần đó xứng đáng',
    only6Text:
      'Với Premium, mỗi Báo cáo tuần luôn dành chỗ cho điều làm tốt — giữ đúng giới hạn, bớt một tối thức khuya, xong một nhiệm vụ — và chỉ ghi nhận khi đã có đủ số liệu của cả tuần.',

    faqEyebrow: 'Hỏi đáp',
    faqTitle: 'Những câu cha mẹ hỏi đầu tiên',
    faqSub: 'Trả lời nhanh trước khi bạn tải về.',
    faq1Q: 'Có dùng thử miễn phí không?',
    faq1A:
      'Có. Bản dùng thử 7 ngày bắt đầu khi thiết bị phụ huynh và thiết bị trẻ đầu tiên được kết nối, và bao gồm mọi tính năng Premium. Khi hết hạn, các quy tắc bạn đặt — Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Chặn nội dung web, Khóa thiết bị, Yêu cầu thêm giờ và Nhiệm vụ thưởng — vẫn hoạt động miễn phí trên mọi thiết bị trẻ, và thiết bị bạn chọn để tiếp tục theo dõi vẫn chia sẻ vị trí. Hoạt động trực tiếp, lịch sử, báo cáo tuần và theo dõi vị trí là phần Premium mang lại.',
    faq2Q: 'Tôi quản lý được bao nhiêu thiết bị?',
    faq2A:
      'Gói Premium dùng cho tối đa 25 thiết bị của con và 6 phụ huynh (tính cả bạn), và thiết bị nào cũng gửi hoạt động. Gói miễn phí dùng cho tối đa 8 thiết bị của con và 3 phụ huynh. Thiết bị nào cũng thực thi quy tắc bạn đặt, nhưng chỉ thiết bị bạn chọn mới gửi hoạt động; ở các thiết bị còn lại, quy tắc chỉ nới lỏng được, không siết thêm được.',
    faq3Q: 'Con tôi có gỡ hoặc vượt qua KidGate được không?',
    faq3A:
      'Các thiết lập nhạy cảm nằm sau mã PIN phụ huynh, và Cảnh báo bảo vệ sẽ báo cho bạn ngay khi một quyền quan trọng bị tắt trên thiết bị của con.',
    faq4Q: 'Tôi quản lý mọi thứ từ máy tính được không?',
    faq4A:
      'Được. Bảng điều khiển phụ huynh mở được trong mọi trình duyệt. Dùng ứng dụng KidGate trên điện thoại quét mã hiện trên màn hình là bạn thấy cùng gia đình, thiết bị và cài đặt như trong ứng dụng, và điều khiển được ngay. Bạn cũng có thể đăng nhập bằng tài khoản để xem; khi đó, khóa thiết bị hay đổi giới hạn sẽ cần mã PIN phụ huynh.',
    faq5Q: 'Premium giá bao nhiêu?',
    faq5A:
      'Premium giá 4,99 USD mỗi tháng hoặc 39,99 USD mỗi năm tại Mỹ, tính phí qua App Store hoặc Google Play và hiển thị bằng đơn vị tiền của bạn ở đó. Gói Trọn đời trả một lần, có đủ Premium trên mọi thiết bị trẻ, dùng chừng nào KidGate còn hoạt động. Gói miễn phí không bao giờ hết hạn.',
    faqMore: 'Còn câu hỏi khác? Xem trang Hỗ trợ',

    ctaTitle: 'Bắt đầu bảo vệ gia đình bạn hôm nay',
    ctaSub: 'Dùng thử miễn phí 7 ngày, đầy đủ tính năng.',
    ctaNote: 'Hủy bất cứ lúc nào từ App Store hoặc Google Play.',
  },

  login: {
    title: 'Đăng nhập phụ huynh',
    sub: 'Dùng đúng tài khoản bạn đã tạo trong ứng dụng KidGate. Đăng nhập ở đây, bạn sẽ thấy cùng gia đình, thiết bị và cài đặt như trong ứng dụng.',
    notConfiguredTitle: 'Firebase chưa được cấu hình cho bản triển khai này.',
    notConfiguredBody: 'Hãy đặt các biến môi trường VITE_FIREBASE_* để bật đăng nhập.',
    qrWhy:
      'Quét bằng điện thoại thì vừa đăng nhập vừa mở khóa điều khiển trong một bước. Các cách bên dưới đăng nhập để xem; muốn mở khóa điều khiển thì cần mã PIN phụ huynh.',
    orViewOnly: 'hoặc đăng nhập cách khác',
    google: 'Tiếp tục với Google',
    googleBusy: 'Đang mở Google…',
    apple: 'Tiếp tục với Apple',
    appleBusy: 'Đang mở Apple…',
    orEmail: 'hoặc dùng email của bạn',
    email: 'Email',
    emailPlaceholder: 'phuhuynh@example.com',
    password: 'Mật khẩu',
    submit: 'Đăng nhập',
    submitBusy: 'Đang đăng nhập…',
    forgot: 'Quên mật khẩu?',
    resetNeedsEmail: 'Vui lòng nhập email trước, rồi chọn Quên mật khẩu.',
    resetSent: 'Đã gửi email đặt lại mật khẩu tới {{email}}.',
    foot: 'Tài khoản KidGate được tạo trong ứng dụng di động — bảng điều khiển web chỉ đăng nhập vào một gia đình đã có. Bạn mới dùng KidGate? Hãy cài ứng dụng và kết nối thiết bị của con trước.',
  },

  qr: {
    start: 'Đăng nhập bằng ứng dụng KidGate',
    generating: 'Đang tạo mã…',
    step1: 'Mở KidGate trên điện thoại của bạn.',
    step2: 'Chạm biểu tượng quét mã trên tab *Gia đình*.',
    step3: 'Quét mã này, rồi chọn Cho phép.',
    waiting: 'Đang chờ phê duyệt · hết hạn sau {{time}}',
    signingIn: 'Đã cho phép. Đang đăng nhập…',
    expired: 'Mã đã hết hạn.',
    failed: 'Đăng nhập chưa hoàn tất.',
    newCode: 'Tạo mã mới',
    tryAgain: 'Thử lại',
  },

  authAction: {
    checking: 'Đang kiểm tra liên kết…',
    resetTitle: 'Đặt mật khẩu mới',
    newPassword: 'Mật khẩu mới',
    confirmPassword: 'Nhập lại mật khẩu mới',
    mismatch: 'Hai mật khẩu không khớp.',
    tooShort: 'Mật khẩu phải có ít nhất 6 ký tự.',
    save: 'Lưu mật khẩu',
    saving: 'Đang lưu…',
    resetDone: 'Đã đổi mật khẩu',
    resetDoneBody: 'Đăng nhập bằng mật khẩu mới tại đây hoặc trong ứng dụng KidGate.',
    verifyDone: 'Đã xác nhận email',
    verifyDoneBody: 'Quay lại ứng dụng KidGate để tiếp tục.',
    invalid: 'Liên kết đã hết hạn hoặc đã được dùng',
    invalidBody: 'Mở KidGate và yêu cầu liên kết mới.',
  },
  authError: {
    generic: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
    invalidEmail: 'Địa chỉ email không hợp lệ.',
    userDisabled: 'Tài khoản này đã bị vô hiệu hóa.',
    userNotFound: 'Không có tài khoản KidGate nào dùng email này.',
    wrongPassword: 'Email hoặc mật khẩu không đúng. Vui lòng thử lại.',
    rateLimited:
      'Mạng này đã tạo quá nhiều mã đăng nhập. Thử lại sau {{minutes}} phút.',
    tooManyRequests: 'Bạn đã thử quá nhiều lần. Vui lòng đợi vài phút rồi thử lại.',
    popupClosed: 'Cửa sổ đăng nhập đã đóng trước khi hoàn tất.',
    popupCancelled: 'Đã hủy đăng nhập.',
    popupBlocked:
      'Trình duyệt đã chặn cửa sổ đăng nhập. Vui lòng cho phép cửa sổ bật lên cho trang này rồi thử lại.',
    accountExists:
      'Email này đã đăng ký bằng một cách đăng nhập khác. Vui lòng dùng cách bạn đã thiết lập trong ứng dụng.',
    operationNotAllowed: 'Cách đăng nhập này chưa được bật cho dự án.',
    unauthorizedDomain:
      'Tên miền này chưa được cho phép trong thiết lập Firebase Authentication.',
    invalidCustomToken: 'Liên kết đăng nhập này không còn hiệu lực. Hãy tạo mã QR mới.',
    webRejected: 'Yêu cầu đã bị từ chối trên điện thoại.',
    webExpired: 'Mã đã hết hạn. Hãy tạo mã mới.',
    noFunctionsUrl: 'Chưa cấu hình URL Cloud Functions (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
  },

  live: {
    checkingSession: 'Đang kiểm tra phiên đăng nhập…',
    loadingFamily: 'Đang tải gia đình của bạn…',
    loadFailedTitle: 'Không tải được gia đình của bạn',
    noAccessTitle: 'Tài khoản này chưa có gia đình',
    noAccess:
      'Tài khoản này chưa thuộc gia đình KidGate nào. Vui lòng đăng nhập bằng tài khoản phụ huynh bạn dùng trong ứng dụng.',
    noFamily:
      'Tài khoản này chưa có gia đình KidGate. Nếu bạn đang dùng KidGate trên điện thoại, hãy đăng xuất rồi đăng nhập tại đây bằng đúng tài khoản đó. Để tạo gia đình mới, hãy thiết lập trên điện thoại rồi tải lại trang này.',
    noFamilyStep1:
      'Cài KidGate trên điện thoại của bạn, chọn *Đây là thiết bị của phụ huynh* và đăng nhập bằng tài khoản này.',
    noFamilyStep2:
      'Mở *Gia đình* và chọn *Tạo gia đình*, hoặc *Tham gia gia đình* nếu một phụ huynh khác đã mời bạn.',
  },

  time: {
    never: 'chưa bao giờ',
    justNow: 'vừa xong',
    minutes: '{{count}} phút trước',
    hours: '{{count}} giờ trước',
    days: '{{count}} ngày trước',
  },

  viz: {
    hours: '{{count}}g',
    minutes: '{{count}}p',
    hoursMinutes: '{{hours}}g {{minutes}}p',
    none: '—',
    byDay: 'Thời gian sử dụng theo ngày',
    limit: 'Giới hạn {{value}}',
    screenTime: 'Thời gian sử dụng',
    bonus: 'Thưởng',
    bonusEarned: 'Phút thưởng đã nhận',
    overLimit: 'Vượt Giới hạn hằng ngày',
    dailyLimit: 'Giới hạn hằng ngày',
    ofLimit: 'trên {{value}}',
    noLimit: 'chưa đặt giới hạn',
    blocked: 'Bị chặn',
    blockedHours: 'Giờ khóa thiết bị',
    day0: 'CN',
    day1: 'T2',
    day2: 'T3',
    day3: 'T4',
    day4: 'T5',
    day5: 'T6',
    day6: 'T7',
    timelineUsed: 'Có dùng',
    timelineIdle: 'Không dùng',
    timelineUnmeasured: 'Không đo được',
    timelineUnmeasuredHint:
      'KidGate không chạy trên thiết bị, hoặc thiết bị ở chế độ ngủ. Khoảng thời gian này cũng không được tính vào tổng.',
    timelineUnsupported:
      'Thiết bị này chỉ báo được thời lượng sử dụng, không báo được thời điểm.',
    timelinePending: 'Chưa có dữ liệu theo giờ.',
  },

  perm: {
    screenTime: 'Thời gian sử dụng',
    location: 'Vị trí',
    notifications: 'Thông báo',
    camera: 'Camera',
    microphone: 'Micrô',
    backgroundAppRefresh: 'Làm mới ứng dụng nền',
    overlay: 'Hiển thị trên ứng dụng khác',
    batteryOptimization: 'Pin không bị hạn chế',
    exactAlarm: 'Chuông báo và lời nhắc',
    accessibility: 'Trợ năng (hỗ trợ khóa)',
  },

  webCat: {
    adult: 'Nội dung người lớn',
    selfHarm: 'Tự làm hại bản thân & rối loạn ăn uống',
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

  appCat: {
    adult: 'Nội dung người lớn',
    gambling: 'Cờ bạc',
    gameGambling: 'Hộp vật phẩm & cá cược vật phẩm',
    dating: 'Hẹn hò',
    drugs: 'Ma túy & rượu bia',
    violence: 'Bạo lực & hình ảnh ghê rợn',
    piracy: 'Vi phạm bản quyền',
    bypass: 'Công cụ lách kiểm soát',
  },

  webCatGroup: {
    harm: 'Nội dung có hại',
    contact: 'Người lạ',
    bypass: 'Né bộ lọc',
    ai: 'AI',
    entertainment: 'Giải trí & mạng xã hội',
    money: 'Mua sắm & tiền',
  },

  dash: {
    tabOverview: 'Tổng quan',
    tabScreen: 'Thời gian sử dụng',
    tabApps: 'Ứng dụng',
    tabWeb: 'Web',
    tabSafety: 'An toàn',
    tabControls: 'Điều khiển',
    tabReport: 'Báo cáo tuần',
    tabReportNew: 'Báo cáo tuần mới',

    children: 'Các con',
    noChildren: 'Chưa kết nối thiết bị nào của con.',
    unassignedDevices: 'Chưa gán',
    manage: 'Quản lý',
    parents: '{{count}} phụ huynh',
    devices: '{{count}} thiết bị của trẻ',
    planManageOnPhone:
      'Gói được mua và thay đổi trong ứng dụng KidGate trên điện thoại.',
    fallbackFamily: 'Gia đình của bạn',
    fallbackDevice: 'Thiết bị của trẻ',

    statusOnline: 'Trực tuyến',
    statusOffline: 'Ngoại tuyến',
    statusLocked: 'Đã khóa',
    statusLockSent: 'Đã gửi lệnh khóa',
    statusLockNotApplied: 'Chưa áp dụng lệnh khóa',
    statusPaused: 'Ngừng báo cáo',

    stateAllowed: 'Đã cho phép',
    stateForegroundOnly: 'Chỉ khi ứng dụng đang mở',
    stateDenied: 'Đã tắt',
    stateNotDetermined: 'Chưa hỏi',
    stateRestricted: 'Bị hạn chế',
    stateUnavailable: 'Không khả dụng',
    stateUnknown: 'Không rõ',

    lastActive: 'Hoạt động lần cuối {{when}}',
    appVersion: 'Phiên bản ứng dụng',
    appVersionUpdate: '{{running}} · đã có {{latest}}',
    appVersionRestart: '{{running}} · mở lại ứng dụng để hoàn tất',
    buildOutdated: 'Có bản mới',
    checkIn: 'Báo an toàn',
    sending: 'Đang gửi…',
    lockDevice: 'Khóa thiết bị',
    unlock: 'Mở khóa',
    working: 'Đang xử lý…',
    save: 'Lưu',

    unlockTitle: 'Các thay đổi đang bị khóa.',
    unlockBody:
      'Xem thì được ngay. Muốn khóa thiết bị, đổi giới hạn hay duyệt yêu cầu, hãy mở khóa trình duyệt này bằng mã PIN phụ huynh — hoặc duyệt bằng cách dùng ứng dụng KidGate quét mã QR. Báo an toàn thì gửi được trong cả hai trường hợp.',
    unlockCta: 'Mở khóa thay đổi',
    unlockToChange: 'Mở khóa thay đổi trước đã',
    refresh: 'Tải lại',
    liveOnApp: 'Mở ứng dụng để xem theo thời gian thực',
    pinTitle: 'Nhập mã PIN phụ huynh',
    pinBody:
      'Vẫn sáu chữ số bạn dùng trong ứng dụng. Trình duyệt này mở khóa trong 8 giờ; duyệt từ ứng dụng thì giữ đăng nhập 7 ngày.',
    pinLabel: 'Mã PIN phụ huynh',
    pinSubmit: 'Mở khóa',
    pinOrScan: 'Hoặc duyệt từ điện thoại',
    qrSaferNote:
      'Duyệt từ điện thoại an toàn hơn: cách đó cần đúng chiếc điện thoại đã kết nối, còn mã PIN chỉ là sáu chữ số mà người trong nhà có thể đã nhìn thấy bạn bấm.',
    pinWrong: 'Sai mã PIN. Còn lại: {{count}} lần.',
    pinLocked:
      'Sai quá nhiều lần. Đợi 15 phút, hoặc duyệt trình duyệt này từ điện thoại.',
    pinNotSet:
      'Gia đình bạn chưa đặt mã PIN phụ huynh. Hãy đặt trong ứng dụng, hoặc duyệt trình duyệt này từ điện thoại.',
    unlockedToast: 'Đã mở khóa thay đổi trên trình duyệt này.',
    close: 'Đóng',

    noDeviceBody:
      'Mở KidGate trên điện thoại của bạn, vào *Gia đình* rồi chạm biểu tượng quét (*Quét mã*). Quét mã QR trên thiết bị của con, hoặc nhập mã gồm 6 ký tự của thiết bị đó. Sau đó nhấn *Tải lại* ở đây.',
    pairStep2Title: 'Quét mã bằng điện thoại của bạn',
    getKidGate: 'Tải KidGate',
    childNoDevices:
      'Chưa có thiết bị nào. Hãy ghép một thiết bị mới, rồi chọn tên con này khi ứng dụng hỏi ai dùng thiết bị đó.',
    childNoDevicesAssign:
      'Chưa có thiết bị nào. Gán một thiết bị bên dưới, hoặc ghép thiết bị mới.',

    toastCheckIn: '{{name}} sẽ nhận được yêu cầu Báo an toàn.',
    toastTimeApproved: 'Đã duyệt yêu cầu thêm giờ.',
    toastCheckInResent: 'Đã gửi lại Báo an toàn.',

    tileScreenToday: 'Thời gian sử dụng hôm nay',
    tileSameAsAverage: 'Bằng mức trung bình 7 ngày',
    tileDeltaUp: '↑ {{percent}}% so với trung bình 7 ngày',
    tileDeltaDown: '↓ {{percent}}% so với trung bình 7 ngày',
    tileBlocked: 'Lượt bị chặn',
    tileBlockedMeta: 'Lượt mở ứng dụng bị chặn, kể từ khi cài',
    tileSites: 'Trang web bị chặn',
    tileCategoriesHit: '{{count}} danh mục bị chặn',
    tileNothingBlocked: 'Chưa chặn gì',
    tileAttention: 'Cần chú ý',
    tileOpenItems: 'Các mục cần xử lý bên dưới',
    tileAllClear: 'Mọi thứ ổn',

    cardScreenTime: 'Thời gian sử dụng',
    cardScreenTimeSub: '14 ngày gần nhất, so với Giới hạn hằng ngày',
    cardRecent: 'Nhật ký gần đây',
    cardRecentSub: 'Mới nhất trước',
    cardRecentEmpty:
      'Chưa có nhật ký. Các lần khóa, ứng dụng bị chặn, cảnh báo địa điểm và dữ liệu Thời gian sử dụng mà thiết bị này đồng bộ về sẽ hiển thị tại đây.',
    cardAttention: 'Cần bạn chú ý',
    cardAttentionSub: '{{count}} mục chưa xử lý',
    cardAttentionEmpty:
      'Không có gì cần xử lý. Các tính năng bảo vệ đang hoạt động tốt.',
    cardProtection: 'Tình trạng bảo vệ',
    cardProtectionSub: 'Đã kiểm tra {{when}}',

    attnMoreMinutes: '{{name}} yêu cầu thêm {{minutes}} phút',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Chưa phản hồi Báo an toàn',
    attnCheckInMissedMeta: 'Đã gửi {{when}} · chưa có phản hồi',
    attnLimitReached: 'Đã đạt Giới hạn hằng ngày — thiết bị đã khóa',
    attnLimitReachedMeta: 'Đã dùng {{used}} hôm nay',
    attnBatteryLow: 'Pin yếu ({{level}}%)',
    attnBatteryLowMeta: 'Cập nhật vị trí có thể dừng nếu máy hết pin',
    attnReview: 'Xem',
    attnResend: 'Gửi lại',
    attnHowToFix: 'Cách khắc phục',
    attnUnlock: 'Mở khóa',
    attnAppOnly: 'Chỉ có trong ứng dụng KidGate',

    todayTitle: 'Hôm nay',
    todaySub: 'So với Giới hạn hằng ngày và số phút thưởng đã nhận',
    used: 'Đã dùng',
    left: 'Còn lại',
    dailyLimit: 'Giới hạn hằng ngày',
    bonusToday: 'Thưởng hôm nay',
    off: 'Tắt',
    on: 'Bật',
    topAppsTitle: 'Ứng dụng dùng nhiều nhất hôm nay',
    topAppsTitleDay: 'Ứng dụng dùng nhiều nhất · {{date}}',
    topAppsSub: 'Giới hạn của từng ứng dụng được đánh dấu bằng vạch',
    trendTitle: 'Xu hướng thời gian sử dụng',
    trendSub: '{{count}} ngày gần nhất',
    rangeDays: '{{count}} ngày',
    blockedHoursTitle: 'Giờ khóa thiết bị',
    blockedHoursSub: '{{count}} khung giờ · thiết bị bị khóa trong các vùng tô đậm',
    scheduleOff: 'Lịch đang tắt',
    schedMax: 'Mỗi thiết bị giữ được nhiều nhất {{max}} khung giờ.',

    appUsageTitle: 'Mức sử dụng ứng dụng hôm nay',
    appUsageSub: 'Thời gian dùng từng ứng dụng',
    topAppsOther: 'Ứng dụng khác',
    underAMinute: 'Dưới 1 phút',
    appUsageEmpty: 'Chưa có dữ liệu sử dụng ứng dụng.',
    appBlockingTitle: 'Chặn ứng dụng',
    appBlockingSub: 'Được chọn trên thiết bị của trẻ, sau mã PIN phụ huynh',
    blockingLabel: 'Chặn',
    appsBlocked: 'Ứng dụng bị chặn',
    categories: 'Danh mục',
    perAppHint:
      'Giới hạn ứng dụng chạy độc lập với danh sách chặn — “30 phút TikTok” là một quyết định khác với “không TikTok”.',
    limitsMax: 'Mỗi thiết bị giới hạn được nhiều nhất {{max}} ứng dụng.',
    perDay: '{{value}}/ngày',
    webActivityTitle: 'Hoạt động web',
    webActivitySub: 'Tên miền vào nhiều nhất, 30 ngày gần nhất',
    webActivityEmpty: 'Chưa có hoạt động web.',
    inventoryTitle: 'Ứng dụng đã cài',
    inventorySub: 'Mọi ứng dụng trên thiết bị này, không chỉ những gì thay đổi',
    inventoryEmpty: 'Thiết bị này chưa gửi danh sách ứng dụng.',
    inventoryFirstScan:
      'Lần quét đầu tiên, nên KidGate chưa biết các ứng dụng này xuất hiện khi nào.',
    inventoryFlagged: 'Cần xem lại',
    inventoryFlaggedLabel: 'Cần xem lại',
    inventoryOtherLabel: 'Đã nhận diện',
    inventoryUnknownLabel: 'Chưa nhận diện',
    installAllow: 'Cho phép',
    pendingInstallsTitle: 'Ứng dụng mới đang chờ duyệt',
    pendingInstallsSub: 'Được cài sau khi bạn bật duyệt, thiết bị tự chặn',
    pendingInstallsEmpty: 'Không có ứng dụng mới nào đang chờ duyệt.',
    toastInstallAllowed: 'Đã cho phép ứng dụng',
    rowInstallApproval: 'Duyệt ứng dụng mới',
    rowInstallApprovalDesc: '{{count}} ứng dụng đang chờ duyệt',
    rowInstallApprovalDescIos:
      'Ẩn App Store — Apple không cho phép duyệt từng ứng dụng',
    colDomain: 'Tên miền',
    colVisits: 'Lượt vào',
    colBlocked: 'Bị chặn',
    colLastSeen: 'Lần cuối',
    videosTitle: 'Video đã xem',
    videosSub: 'Đã xem gì trên YouTube và web',
    videosEmpty: 'Chưa có video nào.',
    colVideo: 'Video',
    colChannel: 'Kênh',
    colViews: 'Lượt xem',
    filterRefusedTitle: 'Bộ lọc đã chặn những gì',
    filterRefusedSub: '{{count}} lượt truy cập bị chặn, 30 ngày gần nhất',
    nothingBlockedYet: 'Chưa có trang nào bị chặn.',
    rollupNoteAi:
      'Một số mục được suy ra từ tên trang chứ không khớp với trang đã biết, nên có thể lệch đôi chút.',
    webBackgroundNote:
      'Khi không có ai dùng thiết bị, một số ứng dụng chạy ngầm vẫn truy cập internet — cập nhật, tải gợi ý và kiểm tra định kỳ tự chạy.',
    filterHintIos:
      'iPhone hoặc iPad này chỉ lọc bằng cơ chế chặn nội dung người lớn của Apple. Hãy cập nhật KidGate trên máy và cho phép VPN của KidGate để chặn theo danh mục.',
    filterHintAndroid: 'Các danh mục được chặn bằng bộ lọc DNS ngay trên máy.',
    filterHintMacos:
      'Các danh mục được chặn bằng bộ lọc nội dung KidGate ngay trên máy Mac.',

    locationTitle: 'Vị trí',
    locationSharingOff: 'Chia sẻ vị trí đang tắt',
    locationUpdated: 'Đã cập nhật {{when}}',
    locationWaiting: 'Đang chờ lần cập nhật đầu tiên',
    lastKnownLocation: 'Vị trí ghi nhận gần nhất',
    nearPlace: 'Gần {{place}}',
    noPlaces:
      'Chưa lưu địa điểm nào. Hãy thêm một địa điểm trong ứng dụng để được báo khi con đến hoặc rời đi.',
    placeRadius: '{{meters}}m · ',
    placeArrive: 'đến',
    placeLeave: 'rời',
    placeNoAlerts: 'không cảnh báo',
    placeSamePin:
      'Đây đúng là vị trí của “{{name}}”. Dùng bản đồ trong ứng dụng để đặt ở chỗ khác.',
    placeWebHint:
      'Trên web chỉ đặt được địa điểm ở nơi thiết bị báo về lần cuối. Muốn chọn chỗ khác thì dùng bản đồ trong ứng dụng.',
    placeNeedsLocation: 'Đang đợi vị trí từ thiết bị này.',
    sosTitle: 'Cảnh báo SOS',
    sosSub: 'Tín hiệu khẩn cấp từ thiết bị của trẻ',
    sosEmpty:
      'Chưa có cảnh báo SOS. Hãy thử một lần cùng nhau để cả hai biết cách dùng.',
    sosAcknowledged: 'đã tiếp nhận',
    sosActive: 'đang hoạt động',

    checkInsTitle: 'Báo an toàn',
    checkInsSub: 'Yêu cầu con xác nhận mình vẫn an toàn',
    checkInSafe: 'Đã xác nhận an toàn',
    checkInMissed: 'Chưa phản hồi',
    checkInWaiting: 'Đang chờ',
    checkInPhotoRequested: 'đã yêu cầu vị trí và ảnh',
    checkInNoReply: 'chưa trả lời',
    checkInPhotoSkipped: 'đã bỏ qua ảnh',
    checkInPhotoAttached: 'có kèm ảnh',
    checkInNoPhoto: 'không yêu cầu ảnh',
    sendCheckIn: 'Gửi yêu cầu Báo an toàn ngay',

    protectionAlertsTitle: 'Cảnh báo bảo vệ',
    protectionAlertsSub: '{{count}} sự kiện từ khi cài',
    protectionAlertsHint:
      'Cảnh báo bảo vệ nghĩa là KidGate đang không áp dụng được đầy đủ những gì bạn đã đặt. Hãy bật lại quyền đó trên thiết bị của con để xóa cảnh báo.',

    limitCardTitle: 'Giới hạn hằng ngày',
    limitCardSub: 'Đặt mức thời gian sử dụng tối đa mỗi ngày',
    limitAria: 'Số phút Giới hạn hằng ngày',
    limitScaleMin: '30p',
    limitScaleMax: '8g',
    limitHint:
      'Phút thưởng từ nhiệm vụ và các yêu cầu thêm giờ đã duyệt được cộng thêm, chỉ trong ngày hôm đó.',
    limitShared: 'Dùng chung cho mọi thiết bị',
    limitSharedSpent: 'Hôm nay đã dùng {{used}} trên {{limit}}',
    limitSharedHint:
      'Đây là cả ngày của con, không phải giới hạn riêng của thiết bị này — mỗi máy nhận phần các máy khác chưa dùng. Thay đổi trong ứng dụng KidGate.',
    whatsOnTitle: 'Các mục đang bật',
    whatsOnSub: 'Thay đổi sẽ đồng bộ về thiết bị của con',
    rowBlockedHours: 'Giờ khóa thiết bị',
    rowBlockedHoursDesc: '{{count}} khung giờ · {{list}}',
    rowAppBlocking: 'Chặn ứng dụng',
    rowAppBlockingApps: '{{count}} ứng dụng',
    rowAppBlockingCategories: '{{count}} danh mục',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Chặn nội dung web',
    rowWebFilterDesc: 'Đã chặn {{count}} danh mục',
    rowNotSupported: 'Thiết bị này không hỗ trợ',
    rowWebFilterAwaitingApproval: 'Đang chờ duyệt trên thiết bị',
    rowWebFilterSwitchedOff: 'Đang bị tắt trên thiết bị',
    rowLocation: 'Chia sẻ vị trí',
    rowLocationDesc: 'Cập nhật lần cuối {{when}}',
    rowLocationNone: 'Chưa có vị trí',
    rowSearchMonitoring: 'Giám sát tìm kiếm',
    rowSafeSearch: 'Bật SafeSearch bắt buộc',
    rowSafeSearchDesc:
      'Khóa Google SafeSearch, chế độ hạn chế YouTube, Bing và DuckDuckGo ở mức nghiêm ngặt. Android, Android TV và Chrome. Ở mức này YouTube còn ẩn bình luận và chặn một số video bình thường.',

    webFilterCatsTitle: 'Danh mục bị chặn',
    webFilterCatsSub: 'Các loại nội dung bị chặn',
    dnsHint:
      'Khi bộ lọc đang chạy, mọi máy chủ DNS mã hóa đều bị chặn — nếu vẫn cho phép truy cập chúng, trình duyệt sẽ đi vòng qua toàn bộ các danh mục còn lại.',
    starChartTitle: 'Bảng tích sao',
    starChartSub: 'Số sao mỗi con kiếm được trong tuần này',
    starChartEmpty: 'Thêm hồ sơ trẻ thứ hai trong ứng dụng để bắt đầu Bảng tích sao.',
    starChartStars: '{{count}} sao',
    rewardTasksTitle: 'Nhiệm vụ thưởng',
    rewardTasksSub: 'Hoàn thành nhiệm vụ để được cộng thêm phút',
    rewardTaskMeta: '+{{minutes}} phút · {{cadence}}',
    rewardTaskStars: 'Độ khó: {{count}} trên 3',
    rewardTaskWaiting: ' · đang chờ bạn duyệt',
    approve: 'Duyệt',
    siteRequestsTitle: 'Yêu cầu mở trang',
    siteRequestsSub: 'Những trang thiết bị này xin bạn cho phép',
    siteRequestAllow: 'Cho phép',
    siteRequestDeny: 'Để sau',
    attnSiteRequest: '{{name}} xin mở {{domain}}',
    toastSiteAllowed: 'Đã cho phép trang',
    timelineTitle: 'Khung giờ sử dụng',
    timelineSub: 'Hôm nay, từ 0h đến 24h. Màu xanh lá là thời gian dùng thiết bị.',
    timelineSubDay: '{{date}}, từ 0h đến 24h. Màu xanh lá là thời gian dùng thiết bị.',
  },

  controlError: {
    generic: 'Thao tác chưa thành công. Vui lòng thử lại.',
    network: 'Không có kết nối. Kiểm tra mạng rồi thử lại.',
    sessionExpired: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
    forbidden:
      'Phiên trình duyệt này không thay đổi được gì. Đăng nhập lại bằng cách dùng ứng dụng KidGate quét mã QR.',
    notFound: 'Mục này không còn nữa — có thể đã được đổi trên điện thoại.',
    conflict: 'Người khác vừa thay đổi mục này. Tải lại để xem kết quả.',
    rateLimited: 'Thay đổi quá nhiều cùng lúc. Đợi một chút rồi thử lại.',
    server: 'KidGate chưa hoàn tất được. Vui lòng thử lại sau ít phút.',
    premiumRequired:
      'Đây là tính năng Premium. Gói cước được quản lý trong ứng dụng KidGate trên điện thoại.',
  },

  report: {
    title: 'Báo cáo tuần',
    subtitle: 'Những gì KidGate ghi nhận trong tuần.',
    weekOf: 'Tuần {{week}}',
    writtenAt: 'Tạo {{when}}',
    triggerScheduled: 'Đã gửi thứ Hai',
    triggerManual: 'Do bạn tạo',

    highlights: 'Điểm nổi bật',

    narrativeTitle: 'Tóm lại',
    finePrint:
      'Số liệu tính từ {{from}} đến {{to}}, gộp mọi thiết bị trong gia đình. Thời gian sử dụng là những gì thiết bị báo về; những phút không đo được không nằm trong tổng nào cả.',

    shareImage: 'Lưu thành ảnh',
    sharePdf: 'Lưu PDF',
    copySummary: 'Sao chép tóm tắt',
    copied: 'Đã sao chép tóm tắt.',
    imageSaved: 'Đã lưu ảnh.',
    shareFailed: 'Trình duyệt này không lưu được. Hãy sao chép tóm tắt thay thế.',

    emptyTitle: 'Chưa có báo cáo',
    emptyBody: 'Báo cáo về vào sáng thứ Hai hằng tuần, tính bảy ngày trước đó.',
    noUsage:
      'Hai tuần qua không ghi nhận thời gian sử dụng nào nên chưa có gì để báo cáo. Thiết bị không kết nối mạng thì không báo gì cả, và điều đó khác với một tuần yên ắng.',
    rateLimited: 'Thử quá nhiều lần. Đợi một phút rồi thử lại.',
    loadFailedTitle: 'Không tải được báo cáo',
    loadFailed: 'Không mở được báo cáo. Tải lại trang để thử lại.',
    retryLoad: 'Thử lại',
    failed: 'Không viết được báo cáo. Thử lại trong giây lát.',
    existed: 'Tuần này đã có báo cáo — đây rồi.',

    childrenTitle: 'Từng con',
    childrenNote:
      'Cùng hai tuần đó, tính riêng từng thiết bị. Phần trăm là tỉ lệ trên tổng của cả nhà.',
    colScreenTime: 'Thời gian sử dụng',
    colShare: 'Tỉ lệ',
    colChange: 'So tuần trước',
    colLimit: 'Vượt giới hạn',
    colLateNights: 'Đêm muộn',
    colTopApp: 'Dùng nhiều nhất',
    noLimit: 'Không đặt',
    busiest: 'Dùng nhiều nhất trong nhà',

    historyTitle: 'Các tuần trước',
    historyEmpty: 'Báo cáo bạn nhận từ nay sẽ được lưu ở đây trong một năm.',
  },

  support: {
    title: 'Hỗ trợ KidGate',
    updated: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn',

    contactTitle: 'Liên hệ',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Thời gian phản hồi:** thường trong vòng một ngày làm việc',
    contactNote:
      'Khi liên hệ, vui lòng gửi kèm địa chỉ email của tài khoản phụ huynh KidGate và mô tả ngắn về vấn đề để chúng tôi hỗ trợ nhanh hơn.',

    startTitle: 'Bắt đầu',
    start1:
      '**1. Thiết lập thiết bị phụ huynh.** Cài KidGate, mở ứng dụng và chọn *Đây là thiết bị của phụ huynh*. Đăng nhập bằng Google hoặc email (hoặc Apple, nếu dùng iPhone), rồi đặt tên gia đình.',
    start2:
      '**2. Tạo mã PIN phụ huynh.** Vào *Cài đặt → Bảo mật* và tạo mã PIN phụ huynh gồm 6 chữ số. Bạn cần mã này để đổi các thiết lập nhạy cảm và chọn ứng dụng bị chặn trên thiết bị của con. Đừng chia sẻ mã với con.',
    start3:
      '**3. Kết nối thiết bị của con.** Cài KidGate trên thiết bị của con rồi mở ứng dụng. Trên điện thoại hoặc máy tính bảng, chọn *Đây là thiết bị của trẻ*. Trên thiết bị phụ huynh, mở *Gia đình* và chạm biểu tượng quét (*Quét mã*), rồi quét mã QR hiện trên thiết bị của con (hoặc nhập mã gồm 6 ký tự). Nếu thiết bị của con hỏi, hãy xác nhận kết nối trên thiết bị đó; TV sẽ tự kết nối.',
    start4:
      '**4. Cấp quyền trên thiết bị của con.** Mở màn hình *Trạng thái* trên thiết bị của con và chạm *Tiếp tục thiết lập* — ứng dụng sẽ hướng dẫn lần lượt từng quyền KidGate cần. Trên Android: Thông báo, Truy cập mức sử dụng, Hiển thị trên ứng dụng khác, Trợ năng (hỗ trợ khóa), Chuông báo và lời nhắc, và Pin không bị hạn chế; trên iOS: *Cho phép Sử dụng ứng dụng và Trang web* (Thời gian sử dụng), và, nếu dùng tính năng Chặn nội dung web, chọn *Cho phép* khi iOS hỏi có cho KidGate thêm cấu hình VPN không. Các tính năng điều khiển chỉ hoạt động đầy đủ sau khi bật xong những quyền này.',
    start5:
      '**5. Thiết lập điều khiển.** Từ thiết bị phụ huynh, mở thẻ thiết bị của con và đặt Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Chặn nội dung web và các tính năng vị trí.',
    startNote:
      'Ứng dụng cũng có hướng dẫn từng bước ngay bên trong: *Cài đặt → Hướng dẫn sử dụng*, nói chi tiết về cấp quyền, kết nối thiết bị, điều khiển hằng ngày và các tính năng an toàn.',

    faqTitle: 'Câu hỏi thường gặp',

    faq1Q: 'Tôi quản lý gia đình từ máy tính được không?',
    faq1A:
      'Được. Mở [bảng điều khiển web](/dashboard) và dùng ứng dụng KidGate trên điện thoại quét mã hiện trên màn hình — hoặc đăng nhập bằng đúng tài khoản bạn dùng trong ứng dụng: Google, Apple, hoặc email và mật khẩu. Bạn sẽ thấy cùng gia đình, thiết bị, báo cáo và cài đặt như trong ứng dụng. Nếu đăng nhập bằng tài khoản, việc thay đổi điều khiển sẽ cần mã PIN phụ huynh. Việc tạo tài khoản và kết nối thiết bị vẫn làm trong ứng dụng di động.',

    faq2Q: 'Kết nối thiết bị phụ huynh với thiết bị của con thế nào?',
    faq2A:
      'Trên thiết bị của con, mở KidGate. Trên điện thoại hoặc máy tính bảng, chọn *Đây là thiết bị của trẻ*. Mã QR và mã gồm 6 ký tự sẽ hiện ra. Trên thiết bị phụ huynh, mở *Gia đình* và chạm biểu tượng quét (*Quét mã*), rồi quét mã QR (khuyến nghị) hoặc nhập mã thủ công. Nếu thiết bị của con hỏi, hãy xác nhận tên phụ huynh trên thiết bị đó; TV sẽ tự kết nối. Mã có thời hạn — nếu kết nối không thành công, hãy chạm *Tạo mã mới* trên thiết bị của con rồi thử lại.',

    faq3Q: 'Hai phụ huynh cùng quản lý một gia đình được không?',
    faq3A:
      'Được. Trên thiết bị của chủ gia đình, mở *Gia đình → chạm + → Mời phụ huynh* và chia sẻ mã QR hoặc mã mời. Phụ huynh kia cài KidGate, đăng nhập với vai trò phụ huynh, mở *Gia đình* và chạm biểu tượng quét (*Quét mã*), rồi quét mã QR hoặc nhập mã mời tại đó. Chủ gia đình phê duyệt yêu cầu đó. Gói miễn phí và thời gian dùng thử cho phép tối đa 3 phụ huynh mỗi gia đình, Premium cho phép tối đa 6. Một gói dùng cho cả nhà; chỉ chủ gia đình trả tiền.',

    faq4Q: 'Bản dùng thử miễn phí hoạt động thế nào?',
    faq4A:
      'Bản dùng thử 7 ngày bắt đầu khi thiết bị phụ huynh và thiết bị trẻ đầu tiên được kết nối, và mở đầy đủ mọi tính năng. Gỡ một thiết bị trẻ không làm bản dùng thử bắt đầu lại. Khi hết hạn, mọi quy tắc vẫn hoạt động miễn phí và một thiết bị trẻ do bạn chọn vẫn tiếp tục gửi báo cáo; Premium mang lại hoạt động trực tiếp, lịch sử, báo cáo tuần và báo cáo từ mọi thiết bị.',

    faq5Q: 'Hủy gói đăng ký thế nào?',
    faq5A:
      'Gói được tính phí qua App Store hoặc Google Play, không phải trực tiếp qua KidGate. Trên iOS: *Cài đặt → tên bạn → Thuê bao*. Trên Android: *Google Play → biểu tượng hồ sơ → Thanh toán và gói thuê bao → Gói thuê bao*. Gói tự động gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc.',

    faq6Q: 'Khôi phục giao dịch mua thế nào?',
    faq6A:
      'Trên thiết bị phụ huynh, mở màn hình *Gói dịch vụ* và chạm *Khôi phục giao dịch*. Hãy chắc chắn bạn đang đăng nhập bằng đúng tài khoản cửa hàng ứng dụng đã dùng khi mua. Lưu ý chỉ chủ gia đình mới đăng ký hoặc khôi phục giao dịch được.',

    faq7Q: 'Vì sao dữ liệu thời gian sử dụng không hiện ra?',
    faq7A:
      'Dữ liệu sử dụng đến từ thiết bị của con. Hãy kiểm tra thiết bị của con có trực tuyến không, rồi mở KidGate trên máy đó và xem màn hình *Trạng thái* — mọi mục quyền đều phải ở trạng thái đã cho phép (trên Android cần quyền Truy cập mức sử dụng để theo dõi thời gian sử dụng). Báo cáo có thể mất vài phút để đồng bộ.',

    faq8Q: 'Vì sao khóa thiết bị hoặc Giờ khóa thiết bị không hoạt động?',
    faq8A:
      'Trên Android, chức năng khóa cần bật *Hiển thị trên ứng dụng khác* và trình trợ giúp *Trợ năng*, cùng với *Pin không bị hạn chế*. Trên Xiaomi, Samsung, Oppo, Vivo và các máy tương tự, hãy cho phép tự khởi động và gỡ KidGate khỏi mọi danh sách “ứng dụng ngủ” (xem *Trạng thái → Cho phép tự khởi động* trên thiết bị của con). Trên iOS, chức năng khóa phụ thuộc vào quyền Thời gian sử dụng. Nếu một quyền bị tắt sau đó, bạn sẽ nhận được Cảnh báo bảo vệ trên thiết bị phụ huynh.',

    faq9Q: 'Chặn ứng dụng cụ thể thế nào?',
    faq9A:
      'Việc chọn ứng dụng diễn ra trên thiết bị của con: mở *KidGate → Cài đặt*, chạm *Mở khóa bằng mã PIN phụ huynh*, mở *Chặn ứng dụng*, chọn ứng dụng rồi lưu. Sau đó, trên thiết bị phụ huynh, mở màn hình *Chặn ứng dụng* của thiết bị đó rồi gạt công tắc *Bật chặn ứng dụng*. Trên iOS, Apple có thể ẩn tên ứng dụng chính xác khỏi thiết bị phụ huynh — đó là giới hạn của nền tảng.',

    faq10Q: 'Vì sao vị trí của con không cập nhật?',
    faq10A:
      'Quyền vị trí phải được cấp cho KidGate trên thiết bị của con, và máy cần có kết nối mạng. Mở màn hình *Vị trí* của thiết bị đó trên máy phụ huynh và chạm *Làm mới vị trí*. Chế độ tiết kiệm pin có thể làm chậm cập nhật, và GPS trong nhà có thể kém chính xác hơn.',

    faq11Q: 'Gỡ KidGate khỏi thiết bị của con thế nào?',
    faq11A:
      'Hãy gỡ thiết bị khỏi ứng dụng phụ huynh trước (mở thiết bị trong *Gia đình* và chọn gỡ), rồi gỡ ứng dụng trên thiết bị của con.',

    faq12Q: 'Xóa tài khoản và dữ liệu thế nào?',
    faq12A:
      'Trong ứng dụng phụ huynh, vào *Cài đặt → Tài khoản → Xóa tài khoản*. Sau 14 ngày chờ — trong thời gian đó bạn có thể hủy — thao tác này xóa vĩnh viễn tài khoản gia đình và toàn bộ dữ liệu — thiết bị, hoạt động, lịch sử vị trí và ảnh SOS — của mọi phụ huynh và trẻ. Xem trang [Xóa tài khoản & dữ liệu](/delete-account) để biết mọi lựa chọn, kể cả xóa khi không còn cài ứng dụng.',

    legalTitle: 'Pháp lý',
    legalDeletion: 'Xóa tài khoản & dữ liệu',
  },

  download: {
    eyebrow: 'Tải về',
    qrScan: 'Quét bằng camera điện thoại để tải ứng dụng',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 trở lên, máy Mac dùng chip Apple (Apple silicon).',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 trở lên, 64-bit.',
    button: 'Tải về',
    warningSub:
      'Windows hiện cảnh báo SmartScreen với mọi ứng dụng cài từ ngoài cửa hàng của Windows khi nhà phát triển chưa nằm trong danh sách đã xác minh — không phải do phát hiện điều gì trong KidGate. Thẻ Windows ở trên ghi cách cho phép. Gói cài cho Mac đã được ký bằng Apple Developer ID và được Apple kiểm tra (notarize), nên không hiện cảnh báo nào. Chỉ tải KidGate từ kidgate.app.',
    macosSteps:
      'Mở gói cài đã tải và làm theo trình cài đặt. Sau đó macOS sẽ hỏi bạn một lần để cho phép tiện ích hệ thống của KidGate: mở phần cài đặt mà thông báo đó chỉ tới và cho phép tại đó. Tính năng Chặn nội dung web chỉ hoạt động sau khi bạn cho phép.',
    windowsSteps:
      'Khi Windows báo đã bảo vệ máy, chọn Thông tin thêm (More info), rồi Vẫn chạy (Run anyway).',
  },
  about: {
    eyebrow: 'Về chúng tôi',
    title: 'Kiểm soát của cha mẹ mà cả nhà',
    titleAccent: 'thật sự đồng thuận.',
    lede: 'Chúng tôi chỉ làm một sản phẩm duy nhất, nên toàn bộ tâm sức đều dồn cho KidGate. Điều chúng tôi coi trọng nhất: phụ huynh phải tin được những gì ứng dụng nói — kể cả những chỗ nó nói rằng nó không làm được.',
    storyEyebrow: 'Vì sao có KidGate',
    storyTitle: 'Chuyện dùng điện thoại trở thành cuộc cãi vã trong mọi nhà',
    storyP1:
      'Nhà nào cũng có một buổi tối giống nhau: một cái hẹn giờ mà chẳng ai thống nhất, một chiếc điện thoại bị tịch thu, và một đứa trẻ tin chắc rằng quy tắc đã đổi sau lưng mình. Các công cụ sinh ra để giải quyết chuyện đó phần lớn làm nó tệ hơn — một bên là khóa máy mà không giải thích, bên kia là bảng theo dõi nhìn vào chẳng khác gì giám sát.',
    storyP2:
      'Nên chúng tôi làm ra thứ mà chính mình muốn dùng ở nhà. Phụ huynh đặt Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng và Chặn nội dung web một lần, thiết bị giữ đúng như vậy. Con nhìn thấy đúng những con số bố mẹ nhìn thấy, xin thêm giờ được, và gọi được bố mẹ bằng SOS bất cứ khi nào thiết bị có mạng. KidGate không giả vờ như mình không có ở đó.',
    storyP3:
      'Ứng dụng chạy trên iPhone, Android, Mac, Windows và Android TV, có tiện ích Chrome cho tính năng Chặn nội dung web, cùng một bảng điều khiển mở bằng trình duyệt bất kỳ. Một gia đình, một gói, mọi thiết bị.',
    valuesEyebrow: 'Điều chúng tôi tin',
    valuesTitle: 'Bốn nguyên tắc chúng tôi không phá vỡ',
    valuesSub:
      'Viết ra trước cả tính năng đầu tiên, và mọi tính năng sau đó đều được soi lại theo bốn điều này.',
    value1Title: 'Trẻ con không phải nghi phạm',
    value1Text:
      'Quy tắc bạn đặt hiện ngay trên chính thiết bị mà nó áp dụng. Con thấy được điều gì đang bật, còn bao nhiêu thời gian, xin thêm được, và bấm SOS được bất cứ lúc nào. Kiểm soát mà phải giấu thì cả nhà không thể ngồi nói chuyện với nhau về nó.',
    value2Title: 'Dữ liệu gia đình bạn không phải món hàng để bán',
    value2Text:
      'Không bao giờ có quảng cáo. Không có gì về con bạn được dùng để quảng cáo hay bán cho bất kỳ ai. Bạn có thể yêu cầu xóa tài khoản gia đình và toàn bộ dữ liệu bất cứ lúc nào — ngay trong ứng dụng, hoặc qua email như trang này hướng dẫn — và 14 ngày sau, mọi thứ biến mất.',
    value3Title: 'Chúng tôi nói rõ chỗ mình không làm được',
    value3Text:
      'Mỗi nền tảng giới hạn những gì một ứng dụng được phép làm. Chỗ nào KidGate chỉ làm được ở mức tương đối — như đóng ứng dụng bị chặn trên máy tính thay vì chặn hẳn không cho mở — màn hình sẽ ghi đúng như vậy, thay vì hiện một dấu tích xanh.',
    value4Title: 'Một gia đình, một gói',
    value4Text:
      'Một gói Premium dùng cho mọi phụ huynh và mọi thiết bị của con. Không có Premium, Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Khóa thiết bị và Chặn nội dung web vẫn chạy trên mọi thiết bị của con, và SOS luôn đến được với bạn, nên những quy tắc an toàn cơ bản không bao giờ bị khóa sau gói trả phí.',
    makeEyebrow: 'Chúng tôi làm gì',
    makeTitle: 'Một KidGate, ở bất cứ đâu có màn hình',
    makeSub:
      'Cùng một bộ quy tắc, viết một lần, thực thi bằng đúng những gì mỗi nền tảng cho phép.',
    make1Title: 'iPhone và iPad',
    make1Text:
      'Giới hạn hằng ngày, Giờ khóa thiết bị và chặn ứng dụng qua chính tính năng Thời gian sử dụng (Screen Time) của Apple, cùng tính năng Chặn nội dung web qua một kết nối riêng ngay trên máy.',
    make2Title: 'Android',
    make2Text:
      'Giới hạn giờ, chặn ứng dụng, khóa toàn màn hình và Chặn nội dung web, kèm cảnh báo khi có ứng dụng mới xuất hiện.',
    make3Title: 'macOS',
    make3Text:
      'Bản dành cho máy Mac — cùng lịch và cùng giới hạn như trên điện thoại, và một bản tổng kết trong ngày mà phụ huynh nhìn là hiểu.',
    make4Title: 'Windows',
    make4Text:
      'Cùng bản đó trên máy PC, kèm một dịch vụ chạy nền bật lại ứng dụng nếu nó bị đóng hay bị tắt.',
    make5Title: 'Android TV',
    make5Text:
      'Màn hình phòng khách, được coi là thiết bị chung của cả nhà chứ không phải của riêng một đứa trẻ — cùng giới hạn và cùng lịch như trên điện thoại. TV không chia sẻ vị trí và không có SOS.',
    make6Title: 'Chrome',
    make6Text:
      'Một tiện ích mở rộng mang đúng tính năng Chặn nội dung web đó vào trong Chrome, trên máy tính đã có KidGate và cả trên máy không cài được KidGate. Tiện ích chỉ lọc web trong Chrome — không đo thời gian sử dụng, không chặn ứng dụng.',
    make7Title: 'Bảng điều khiển phụ huynh',
    make7Text:
      'Trình duyệt là màn hình thứ hai của phụ huynh. Đăng nhập từ máy tính bất kỳ bằng cách dùng điện thoại quét mã; không cần cài gì.',
    factsEyebrow: 'KidGate hôm nay',
    factsTitle: 'Bốn con số',
    fact1Label: 'ngôn ngữ, từ tiếng Ả Rập đến tiếng Việt',
    fact2Label: 'nền tảng, cộng bảng điều khiển',
    fact3Label: 'quảng cáo, không bao giờ',
    fact4Label: 'gói cho mỗi gia đình',
    contactEyebrow: 'Nói chuyện với chúng tôi',
    contactTitle: 'Tin nào cũng có người đọc',
    contactSub:
      'Một câu hỏi, một lỗi, một tính năng nhà bạn cần, hay một câu dịch nghe không đúng trong tiếng của bạn — cứ viết cho chúng tôi.',
    contactEmail: 'Gửi email',
    contactSupport: 'Hỗ trợ và hướng dẫn',
    contactPrivacy: 'Cách chúng tôi xử lý dữ liệu',
  },
  promo: {
    intro: 'Cả ngày của con, bạn đều yên tâm.',
    school: 'Vào lớp, điện thoại tự khóa.',
    apps: 'Ứng dụng bạn đã chặn sẽ không mở được.',
    arrive: 'Con vừa tới nhà bà, bạn nhận được thông báo.',
    checkIn: 'Bạn hỏi thăm, con báo bình an chỉ với một chạm.',
    sos: 'Lỡ có chuyện gấp, con bấm SOS là bạn biết ngay con ở đâu.',
    limit: 'Chơi đủ giờ rồi, máy tự khóa.',
    lockNow: 'Đến bữa tối, bạn khóa máy con ngay từ điện thoại.',
    web: 'Bạn chặn được các trang web có hại trên mọi thiết bị.',
    tv: 'TV phòng khách cũng theo đúng luật nhà mình.',
    reward: 'Làm xong bài tập, con được thưởng thêm 15 phút.',
    bedtime: 'Đến giờ ngủ, điện thoại, máy tính và TV cũng đi ngủ.',
    kid: 'Con',
    parent: 'Ba mẹ',
    arrivedNotice: 'An vừa đến Nhà bà',
    checkAsk: 'Con ổn chứ?',
    checkReply: 'Con vẫn ổn',
    sosNotice: 'An vừa gửi SOS',
    timeUp: 'Hết giờ chơi hôm nay',
    lockButton: 'Khóa ngay',
    task: 'Làm xong bài tập',
    granted: '+15 phút',
    youtubeTitle: 'KidGate — Quản lý điện thoại, máy tính và TV của con',
    youtubeDescription:
      'Một ngày bình thường cùng KidGate, từ lúc vào lớp đến giờ đi ngủ.',
  },
  setup: {
    parentTitle: 'Cài đặt trên điện thoại của bạn',
    parentSub: 'Bước đầu tiên, chỉ mất vài phút.',
    install: 'Tìm “KidGate” trên App Store hoặc Google Play và cài đặt.',
    installSub: 'iPhone, iPad hoặc điện thoại Android.',
    role: 'Mở KidGate và chọn “{{parent}}”.',
    signIn: 'Chạm “{{signIn}}”, rồi đăng nhập bằng Apple, Google hoặc email.',
    signInSub: 'Với Apple, bạn chỉ cần xác nhận bằng Face ID.',
    family: 'Ở mục “{{tab}}”, chạm “{{create}}” và đặt tên cho gia đình.',
    done: 'Phần của bạn đã xong.',
    next: 'Tiếp theo: cài KidGate trên thiết bị của con. Chọn video dành cho thiết bị đó.',
    parentYoutubeTitle: 'Cách cài đặt KidGate trên điện thoại của bạn',
    parentYoutubeDescription:
      'Cài KidGate, đăng nhập và tạo gia đình: bước đầu tiên trước khi kết nối các thiết bị của con.',
    pairSub: 'Kết nối với điện thoại của bạn, rồi bật bảo vệ.',
    parentPhone: 'Điện thoại của bạn',
    openSub: 'Màn hình sẽ hiện mã QR. Cứ để nguyên màn hình đó.',
    scanSub: 'Không quét được? Chọn “{{manual}}”.',
    protect: 'Chạm “{{turnOn}}” để bắt đầu với một bộ quy tắc an toàn.',
    protectSub: 'Bạn có thể tinh chỉnh từng quy tắc sau.',
    tapAllow: 'Chạm “{{allow}}”.',
    extras: 'Cuối cùng, cho phép camera và micrô.',
    extrasSub: 'Tùy chọn: con có thể kèm ảnh hoặc âm thanh khi gửi SOS.',
    pairNext: 'Tiếp theo: đặt quy tắc từ điện thoại của bạn.',
    iosTitle: 'Cài đặt trên iPhone của con',
    childPhone: 'iPhone của con',
    iosOpen: 'Trên iPhone của con, mở KidGate và chọn “{{child}}”.',
    iosScan: 'Trên điện thoại của bạn, chạm “{{add}}” và quét mã QR.',
    iosConfirm: 'Trên iPhone của con, kiểm tra đúng là bạn, rồi chạm “{{yes}}”.',
    iosPin: 'Tạo “{{pin}}” (6 chữ số).',
    iosPinSub: 'iPhone của con sẽ hỏi mã này trước khi đổi ứng dụng bị chặn.',
    iosAssign: 'Chọn ai dùng iPhone này, hoặc thêm con bằng tên.',
    iosScreenTime:
      'Trên iPhone của con, chạm “{{allow}}” và cho phép Thời gian sử dụng.',
    iosScreenTimeSub: 'Apple sẽ hỏi Face ID hoặc mật mã của iPhone này.',
    iosNotify: 'Chạm “{{settings}}”, bật {{notifications}}, rồi quay lại KidGate.',
    iosRefresh: 'Chạm “{{settings}}” và bật “{{refresh}}”.',
    iosRefreshSub: 'Tùy chọn: giúp KidGate tiếp tục hoạt động khi chạy nền.',
    iosBlocked: 'Chạm “{{strengthen}}”, rồi thiết lập “{{blocked}}”.',
    iosBlockedSub: 'Bạn chạm “{{unlock}}”, nhập mã PIN, rồi chọn ứng dụng.',
    iosDone: 'iPhone của con đã được bảo vệ.',
    iosYoutubeTitle: 'Cách cài đặt KidGate trên iPhone của con',
    iosYoutubeDescription:
      'Kết nối iPhone của con với điện thoại của bạn bằng mã QR, rồi bật Thời gian sử dụng và các quyền khác KidGate cần, từng bước một.',
    androidTitle: 'Cài đặt trên điện thoại Android của con',
    childAndroid: 'Android của con',
    androidOpen: 'Trên điện thoại của con, mở KidGate và chọn “{{child}}”.',
    androidScan: 'Trên điện thoại của bạn, quét mã QR bằng KidGate.',
    androidConfirm:
      'Trên điện thoại của con, kiểm tra đúng là bạn, rồi chạm “{{yes}}”.',
    androidAssign: 'Chọn ai dùng điện thoại này, hoặc thêm con bằng tên.',
    androidUsage:
      'Trên điện thoại của con, chạm “{{open}}” và bật quyền Truy cập mức sử dụng cho KidGate.',
    androidBack: 'Sau đó vuốt để quay lại KidGate.',
    androidAccessibility: 'Chạm “{{agree}}”, rồi bật KidGate trong Trợ năng.',
    androidOverlay: 'Chạm “{{settings}}” và cho phép “{{overlay}}” cho KidGate.',
    androidNotify: 'Chạm “{{allow}}”, rồi cho phép thông báo.',
    androidWebFilter: 'Chạm “{{enable}}” và cho phép kết nối.',
    androidWebFilterSub:
      'Tính năng {{filter}} của KidGate chạy trên điện thoại dưới dạng VPN.',
    androidBattery: 'Chạm “{{settings}}”, rồi cho phép KidGate luôn chạy nền.',
    androidStrengthen: 'Chạm “{{strengthen}}”, rồi bật “{{uninstall}}”.',
    androidMessages: 'Với “{{alerts}}”, chạm “{{grant}}” và bật cho KidGate.',
    androidMessagesSub:
      'KidGate kiểm tra tin nhắn đến để tìm các từ ngữ cảnh báo, ngay trên điện thoại.',
    androidDone: 'Điện thoại của con đã được bảo vệ.',
    androidYoutubeTitle: 'Cách cài đặt KidGate trên điện thoại Android của con',
    androidYoutubeDescription:
      'Kết nối điện thoại Android của con với điện thoại của bạn bằng mã QR, rồi bật các quyền KidGate cần, từng bước một.',
  },
};
