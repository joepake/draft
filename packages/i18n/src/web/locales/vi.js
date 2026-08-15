/**
 * Vietnamese. Vietnamese has no plural inflection, so counted strings keep the
 * plain key and no `_one` / `_other` variants.
 *
 * Terminology follows the mobile app's `vi` pack (KidGate - Parental Control,
 * `src/i18n/locales/vi`) so a parent reads the same words in both places:
 * Screen Time = "Thời gian sử dụng", Blocked Hours = "Giờ khóa thiết bị",
 * Daily Limit = "Giới hạn hằng ngày", Check-In = "Báo an toàn",
 * per-app limits = "Giới hạn giờ theo app", categories = "Danh mục".
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
  meta: {
    title: 'KidGate — Quản lý điện thoại của con mà vẫn tôn trọng con',
    description:
      'KidGate giúp cha mẹ quản lý thời gian sử dụng, chặn ứng dụng, chặn web xấu và giữ liên lạc với con — mà không lấy đi sự tự do của con.',
  },

  common: {
    comingSoon: 'Sắp ra mắt',
    loading: 'Đang tải…',
    signOut: 'Đăng xuất',
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
    madeFor: 'Dành cho các gia đình dùng iPhone, Android, Mac và Windows.',
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
    heroCheck5: 'Bảng điều khiển gia đình',

    phoneDailyLimit: 'Giới hạn hằng ngày',
    phoneDailyLimitValue: 'Đã dùng 1g24p / 3g',
    phoneBlockedHours: 'Giờ khóa thiết bị',
    phoneScheduleOn: 'Lịch đang bật',
    phoneLocation: 'Vị trí',
    phoneLocationValue: 'Ở trường · 5 phút trước',
    phoneCheckIn: 'Đã báo an toàn',

    trust1Title: 'Không bao giờ có quảng cáo',
    trust1Text: 'Dữ liệu của trẻ không bao giờ được dùng cho quảng cáo',
    trust2Title: 'Xóa bất cứ lúc nào',
    trust2Text: 'Xóa tài khoản gia đình và toàn bộ dữ liệu bất cứ khi nào bạn muốn',
    trust3Title: 'Điện thoại và máy tính',
    trust3Text: 'iPhone, Android, Mac và Windows trong cùng một tài khoản gia đình',
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
      'Chọn đúng những ứng dụng con được mở, bảo vệ bằng mã PIN phụ huynh, và bật chặn từ xa.',
    feature3Title: 'Giới hạn giờ theo app',
    feature3Text:
      'Đặt giới hạn riêng cho từng ứng dụng, tính thêm ngoài Giới hạn hằng ngày — “nửa tiếng TikTok” mà không cần cấm hẳn.',
    feature4Title: 'Chặn nội dung web & lịch sử duyệt',
    feature4Text:
      'Chặn các trang người lớn và cờ bạc, rồi xem con đã vào những trang nào và trang nào đã bị chặn.',
    feature5Title: 'Vị trí trực tiếp & địa điểm',
    feature5Text:
      'Xem vị trí mới nhất của con, xem lại lịch sử, và được báo khi con đến hoặc rời một địa điểm đã lưu.',
    feature6Title: 'Báo an toàn & SOS',
    feature6Text:
      'Yêu cầu con xác nhận mình vẫn an toàn, và nhận SOS tức thì kèm vị trí và ảnh khi có việc khẩn cấp.',
    feature7Title: 'Cảnh báo bảo vệ & cảnh báo ứng dụng',
    feature7Text:
      'Biết ngay khi một quyền quan trọng bị tắt — và trên Android, khi có ứng dụng được cài thêm hoặc gỡ đi.',
    feature8Title: 'Nhiệm vụ thưởng & yêu cầu thêm giờ',
    feature8Text:
      'Con làm xong nhiệm vụ để được cộng phút, hoặc gửi yêu cầu thêm giờ. Cả hai đều gửi về điện thoại của bạn để bạn duyệt.',

    feature9Title: 'Khóa thiết bị',
    feature9Text:
      'Khóa máy ngay và mở lại khi bạn muốn — giờ ăn cơm, giờ học bài, hay khi một quy tắc bị phớt lờ.',
    feature10Title: 'Báo cáo tuần',
    feature10Text:
      'Mỗi Chủ nhật: thời gian dùng máy, trung bình mỗi ngày, những gì đã bị chặn, và tuần này so với tuần trước.',
    feature11Title: 'Bảng tích sao',
    feature11Text:
      'Các con thấy được tuần này mỗi bạn kiếm được bao nhiêu sao. Bảng bắt đầu lại vào thứ Hai, và bạn quyết định có bật hay không.',
    feature12Title: 'Nhật ký hoạt động',
    feature12Text:
      'Mọi việc đã xảy ra, theo thứ tự — máy được mở khóa, một trang bị lọc, một nhiệm vụ hoàn thành, một cảnh báo được gửi.',
    platformsTitle: 'Một KidGate, ở mọi màn hình',
    platformsSub:
      'Cùng bộ quy tắc và cùng một tài khoản gia đình trên cả điện thoại lẫn máy tính. Bản máy tính tải từ trang này, không qua cửa hàng ứng dụng.',

    showcaseEyebrow: 'Bảng điều khiển phụ huynh',
    showcaseTitle: 'Cả gia đình trên một màn hình',
    showcaseSub:
      'Thời gian sử dụng, lượt bị chặn, vị trí và mọi thứ cần bạn để ý — trên điện thoại, hoặc trên bất kỳ trình duyệt nào.',
    showcaseTile1: 'Thời gian sử dụng hôm nay',
    showcaseTile2: 'Lượt bị chặn',
    showcaseTile3: 'Cần chú ý',
    showcaseCaption1: 'Xem báo cáo từ mọi trình duyệt',
    showcaseCaption2: 'Mọi thay đổi đều được duyệt từ điện thoại của bạn',

    setupEyebrow: 'Thiết lập',
    setupTitle: 'Sẵn sàng trong vài phút',
    setupSub: 'Không cần rành công nghệ — ứng dụng hướng dẫn bạn từng bước.',
    step1Title: 'Thiết lập thiết bị của bạn',
    step1Text:
      'Cài KidGate, chọn “Đây là thiết bị của phụ huynh”, rồi đăng nhập bằng Google, Apple hoặc email.',
    step2Title: 'Kết nối thiết bị của con',
    step2Text:
      'Cài KidGate trên điện thoại của con và kết nối bằng cách quét mã QR. Chưa tới một phút.',
    step3Title: 'Đặt quy tắc của bạn',
    step3Text:
      'Chọn Giới hạn hằng ngày, chặn ứng dụng và khung giờ, bật vị trí — tất cả từ điện thoại của bạn.',

    whyEyebrow: 'Vì sao chọn KidGate',
    whyTitle: 'Dựa trên niềm tin, không phải sự giám sát',
    whySub: 'Thiết kế để cha mẹ và con vẫn nói chuyện được với nhau.',
    why1Title: 'Một gói, cả gia đình',
    why1Text:
      'Một gói dùng cho mọi thiết bị của phụ huynh và của con. Chỉ chủ gia đình trả tiền.',
    why2Title: 'Cho cả bố và mẹ cùng quản lý',
    why2Text:
      'Mời phụ huynh thứ hai cùng quản lý các con — chủ gia đình là người duyệt quyền truy cập.',
    why3Title: 'Quyền riêng tư là trên hết',
    why3Text:
      'Chúng tôi không bao giờ bán dữ liệu cá nhân và không dùng dữ liệu của trẻ cho quảng cáo. Xóa mọi thứ bất cứ lúc nào.',
    why4Title: 'Thành thật về giới hạn',
    why4Text:
      'Chúng tôi nói rõ mỗi nền tảng làm được và không làm được gì, thay vì hứa hẹn những thứ thực ra không làm được.',

    faqEyebrow: 'Hỏi đáp',
    faqTitle: 'Những câu cha mẹ hỏi đầu tiên',
    faqSub: 'Trả lời nhanh trước khi bạn tải về.',
    faq1Q: 'Có dùng thử miễn phí không?',
    faq1A:
      'Có. Thời gian dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị đầu tiên của con được kết nối, và trong thời gian đó bạn dùng được đầy đủ tính năng Premium. Khi hết hạn, Giới hạn hằng ngày, Giờ khóa thiết bị và Xem vị trí vẫn hoạt động miễn phí cho một thiết bị của con.',
    faq2Q: 'Tôi quản lý được bao nhiêu thiết bị?',
    faq2A:
      'Một gói dùng cho cả nhà — nhiều thiết bị của con và nhiều phụ huynh trên cùng một gói.',
    faq3Q: 'Con tôi có gỡ hoặc vượt qua KidGate được không?',
    faq3A:
      'Các thiết lập nhạy cảm nằm sau mã PIN phụ huynh, và Cảnh báo bảo vệ sẽ báo cho bạn ngay khi một quyền quan trọng bị tắt trên thiết bị của con.',
    faq4Q: 'Tôi quản lý mọi thứ từ máy tính được không?',
    faq4A:
      'Bạn có thể đăng nhập bảng điều khiển web để xem báo cáo. Việc đổi giới hạn hay khóa thiết bị phải được duyệt từ điện thoại, nên lộ mật khẩu thôi thì chưa đủ để thay đổi gì.',
    faqMore: 'Còn câu hỏi khác? Xem trang Hỗ trợ',

    ctaTitle: 'Bắt đầu bảo vệ gia đình bạn hôm nay',
    ctaSub: 'Dùng thử miễn phí, đầy đủ tính năng. Không cần thẻ tín dụng.',
    ctaNote: 'Hủy bất cứ lúc nào từ App Store hoặc Google Play.',
  },

  login: {
    title: 'Đăng nhập phụ huynh',
    sub: 'Dùng đúng tài khoản bạn đã tạo trong ứng dụng KidGate. Đăng nhập ở đây, bạn sẽ thấy đúng gia đình, thiết bị và cài đặt đó.',
    notConfiguredTitle: 'Firebase chưa được cấu hình cho bản triển khai này.',
    notConfiguredBody: 'Hãy đặt các biến môi trường VITE_FIREBASE_* để bật đăng nhập.',
    qrWhy:
      'Chỉ khi được duyệt từ điện thoại thì các nút điều khiển mới mở — khóa thiết bị và đổi giới hạn vẫn thuộc về ứng dụng. Các cách bên dưới chỉ đăng nhập để xem báo cáo.',
    orViewOnly: 'hoặc đăng nhập chỉ để xem',
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
    step2: 'Vào *Cài đặt → Đăng nhập trên web*.',
    step3: 'Quét mã này, rồi chọn Cho phép.',
    waiting: 'Đang chờ phê duyệt · hết hạn sau {{time}}',
    signingIn: 'Đã cho phép. Đang đăng nhập…',
    expired: 'Mã đã hết hạn.',
    failed: 'Đăng nhập chưa hoàn tất.',
    newCode: 'Tạo mã mới',
    tryAgain: 'Thử lại',
  },

  authError: {
    generic: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
    invalidEmail: 'Địa chỉ email không hợp lệ.',
    userDisabled: 'Tài khoản này đã bị vô hiệu hóa.',
    userNotFound: 'Không có tài khoản KidGate nào dùng email này.',
    wrongPassword: 'Sai email hoặc mật khẩu.',
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
    noAccess:
      'Tài khoản này chưa thuộc gia đình KidGate nào. Vui lòng đăng nhập bằng tài khoản phụ huynh bạn dùng trong ứng dụng.',
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
    backgroundAppRefresh: 'Làm mới ứng dụng nền',
    overlay: 'Hiển thị trên ứng dụng khác',
    batteryOptimization: 'Pin không hạn chế',
    exactAlarm: 'Báo thức chính xác',
    accessibility: 'Trợ năng',
  },

  webCat: {
    adult: 'Nội dung người lớn',
    gambling: 'Cờ bạc',
    dating: 'Hẹn hò',
    drugs: 'Ma túy & rượu bia',
    violence: 'Bạo lực & cực đoan',
    piracy: 'Vi phạm bản quyền',
    social: 'Mạng xã hội',
    videoStreaming: 'Xem video',
    gaming: 'Trò chơi',
    shopping: 'Mua sắm',
  },

  dash: {
    tabOverview: 'Tổng quan',
    tabScreen: 'Thời gian sử dụng',
    tabApps: 'Ứng dụng & Web',
    tabSafety: 'An toàn',
    tabControls: 'Điều khiển',
    tabReport: 'Báo cáo tuần',

    children: 'Các con',
    noChildren: 'Chưa kết nối thiết bị nào của con.',
    manage: 'Quản lý',
    parents: '{{count}} phụ huynh',
    devices: '{{count}} thiết bị của con',
    planPremium: 'Premium',
    planTrial: 'Dùng thử',
    fallbackFamily: 'Gia đình của bạn',
    fallbackDevice: 'Thiết bị của trẻ',

    statusOnline: 'Trực tuyến',
    statusOffline: 'Ngoại tuyến',
    statusLocked: 'Đã khóa',

    stateAllowed: 'Đã cho phép',
    stateDenied: 'Đã tắt',
    stateNotDetermined: 'Chưa hỏi',
    stateRestricted: 'Bị hạn chế',
    stateUnavailable: 'Không khả dụng',
    stateUnknown: 'Không rõ',

    lastActive: 'Hoạt động lần cuối {{when}}',
    checkIn: 'Báo an toàn',
    sending: 'Đang gửi…',
    lockDevice: 'Khóa thiết bị',
    unlock: 'Mở khóa',
    working: 'Đang xử lý…',
    lockNeedsApp: 'Muốn khóa thiết bị, bạn cần ứng dụng KidGate trên điện thoại',

    viewOnlyTitle: 'Chỉ xem.',
    viewOnlyBody:
      'Để khóa thiết bị, đổi giới hạn hay duyệt yêu cầu, hãy đăng xuất rồi đăng nhập lại bằng cách dùng ứng dụng KidGate quét mã QR — chỉ khi được cho phép từ điện thoại phụ huynh đã kết nối thì các nút điều khiển mới mở. Báo an toàn thì vẫn gửi được từ đây trong cả hai trường hợp.',

    noDeviceTitle: 'Chưa có thiết bị nào của con',
    noDeviceBody:
      'Mở KidGate trên điện thoại của bạn, vào *Gia đình → chạm + → Kết nối thiết bị của trẻ*, rồi quét mã QR hiện trên thiết bị của con. Thiết bị sẽ xuất hiện ở đây vài giây sau khi kết nối.',

    toastCheckIn: '{{name}} sẽ nhận được yêu cầu Báo an toàn.',
    toastTimeApproved: 'Đã phê duyệt yêu cầu thêm giờ.',
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
    attnPermissionOff: '{{permission}} đang tắt',
    attnPermissionOffMeta:
      'Khả năng bảo vệ yếu đi cho tới khi quyền này được bật lại trên thiết bị của con',
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
    topAppsSub: 'Giới hạn của từng ứng dụng được đánh dấu bằng vạch',
    trendTitle: 'Xu hướng thời gian sử dụng',
    trendSub: '{{count}} ngày gần nhất',
    rangeDays: '{{count}} ngày',
    blockedHoursTitle: 'Giờ khóa thiết bị',
    blockedHoursSub: '{{count}} khung giờ · thiết bị bị khóa trong các vùng tô đậm',
    scheduleOff: 'Lịch đang tắt',

    appUsageTitle: 'Mức sử dụng ứng dụng hôm nay',
    appUsageSub: 'Thời gian dùng từng ứng dụng',
    appUsageEmpty: 'Chưa có dữ liệu sử dụng ứng dụng.',
    appBlockingTitle: 'Chặn ứng dụng',
    appBlockingSub: 'Được chọn trên thiết bị của trẻ, sau mã PIN phụ huynh',
    blockingLabel: 'Chặn',
    appsBlocked: 'Ứng dụng bị chặn',
    categories: 'Danh mục',
    perAppHint:
      'Giới hạn giờ theo app chạy độc lập với danh sách chặn — “30 phút TikTok” là một quyết định khác với “không TikTok”.',
    perDay: '{{value}}/ngày',
    webActivityTitle: 'Hoạt động web',
    webActivitySub: 'Tên miền vào nhiều nhất, 30 ngày gần nhất',
    webActivityEmpty: 'Chưa có hoạt động web.',
    colDomain: 'Tên miền',
    colVisits: 'Lượt vào',
    colBlocked: 'Bị chặn',
    colLastSeen: 'Lần cuối',
    filterRefusedTitle: 'Bộ lọc đã chặn những gì',
    filterRefusedSub: '{{count}} lượt truy cập bị chặn, 30 ngày gần nhất',
    nothingBlockedYet: 'Chưa có trang nào bị chặn.',
    filterHintIos:
      'Trên iOS, bộ lọc dùng cơ chế chặn nội dung người lớn của Apple — chặn theo từng danh mục chỉ có trên Android.',
    filterHintAndroid: 'Các danh mục được chặn bằng bộ lọc DNS ngay trên máy.',

    locationTitle: 'Vị trí',
    locationSharingOff: 'Chia sẻ vị trí đang tắt',
    locationUpdated: 'Đã cập nhật {{when}}',
    locationWaiting: 'Đang chờ lần cập nhật đầu tiên',
    lastKnownLocation: 'Vị trí ghi nhận gần nhất',
    noPlaces:
      'Chưa lưu địa điểm nào. Hãy thêm một địa điểm trong ứng dụng để được báo khi con đến hoặc rời đi.',
    placeRadius: '{{meters}}m · ',
    placeArrive: 'đến',
    placeLeave: 'rời',
    placeNoAlerts: 'không cảnh báo',
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
    rowLocation: 'Chia sẻ vị trí',
    rowLocationDesc: 'Cập nhật lần cuối {{when}}',
    rowLocationNone: 'Chưa có vị trí',
    toggleInApp: 'Thay đổi mục này trong ứng dụng KidGate',

    webFilterCatsTitle: 'Danh mục bị chặn',
    webFilterCatsSub: 'Các loại nội dung bị chặn',
    dnsHint:
      'Khi bộ lọc đang chạy, mọi máy chủ DNS mã hóa đều bị chặn — nếu vẫn cho phép truy cập chúng, trình duyệt sẽ đi vòng qua toàn bộ các danh mục còn lại.',
    starChartTitle: 'Bảng tích sao',
    starChartSub: 'Số sao mỗi bé kiếm được trong tuần này',
    starChartEmpty: 'Thêm bé thứ hai trong ứng dụng để bắt đầu Bảng tích sao.',
    starChartStars: '{{count}} sao',
    rewardTasksTitle: 'Nhiệm vụ thưởng',
    rewardTasksSub: 'Hoàn thành nhiệm vụ để được cộng thêm phút',
    rewardTaskMeta: '+{{minutes}} phút · {{cadence}}',
    rewardTaskStars: 'Độ khó: {{count}} trên 3',
    rewardTaskWaiting: ' · đang chờ bạn duyệt',
    approve: 'Duyệt',
    approveInApp: 'Duyệt trong ứng dụng KidGate',
    timelineTitle: 'Khung giờ sử dụng',
    timelineSub: 'Hôm nay, từ 0h đến 24h. Màu xanh lá là thời gian dùng thiết bị.',
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
  },

  report: {
    title: 'Báo cáo tuần',
    subtitle: 'Những gì KidGate ghi nhận trong tuần.',
    weekOf: 'Tuần {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Viết {{when}}',
    triggerScheduled: 'Đã gửi Chủ nhật',
    triggerManual: 'Do bạn tạo',

    statScreenTime: 'Thời gian sử dụng',
    statDailyAverage: 'Trung bình mỗi ngày',
    statBlockedApps: 'Ứng dụng bị chặn',
    statBlockedWebVisits: 'Trang web bị lọc',

    trendUp: 'nhiều hơn tuần trước {{value}}',
    trendDown: 'ít hơn tuần trước {{value}}',
    trendFlat: 'Gần như bằng tuần trước',
    trendFirstWeek: 'Tuần đầu tiên có số liệu',
    barThisWeek: 'Tuần này',
    barLastWeek: 'Tuần trước',

    highlights: 'Điểm nổi bật',
    sevAttention: 'Nên xem',
    sevNotable: 'Đáng chú ý',
    sevInfo: 'Để bạn biết',

    findingUsageUp:
      'Thời gian sử dụng tăng {{percent}}% — nhiều hơn tuần trước {{delta}}.',
    findingUsageDown:
      'Thời gian sử dụng giảm {{percent}}% — ít hơn tuần trước {{delta}}.',
    findingUsageFlat: 'Thời gian sử dụng giữ nguyên ở mức {{total}}.',
    findingLateNight: '{{count}} đêm thức sau 23h — muộn nhất tới {{time}}.',
    findingNewTopApp: '{{app}} mới xuất hiện tuần này và đã chiếm {{duration}}.',
    findingAppSurge: '{{app}} tăng {{delta}} so với tuần trước — tổng {{duration}}.',
    findingLimitHit: 'Có {{count}} ngày chạm Giới hạn hằng ngày ({{limit}}).',
    findingBlockedApps:
      '{{count}} lần mở ứng dụng bị chặn, tuần trước là {{previous}}.',
    findingBlockedWeb: '{{count}} trang web bị lọc, tuần trước là {{previous}}.',
    findingQuietWeek:
      'Một tuần yên ắng — tổng {{total}}, và không có gì cần bạn xử lý.',

    narrativeTitle: 'Tóm lại',
    finePrint:
      'Số liệu tính từ {{from}} đến {{to}}, gộp mọi thiết bị trong gia đình. Thời gian sử dụng là những gì thiết bị báo về; những phút không đo được không nằm trong tổng nào cả.',

    generate: 'Viết báo cáo tuần này',
    generating: 'Đang viết…',
    shareImage: 'Lưu thành ảnh',
    sharePdf: 'Lưu PDF',
    copySummary: 'Sao chép tóm tắt',
    copied: 'Đã sao chép tóm tắt.',
    imageSaved: 'Đã lưu ảnh.',
    shareFailed: 'Trình duyệt này không lưu được. Hãy sao chép tóm tắt thay thế.',

    emptyTitle: 'Chưa có báo cáo',
    emptyBody:
      'Báo cáo sẽ đến vào tối Chủ nhật hằng tuần. Bạn cũng có thể viết báo cáo tuần này ngay — nó tính bảy ngày gần nhất.',
    noUsage:
      'Hai tuần qua không ghi nhận thời gian sử dụng nào nên chưa có gì để báo cáo. Thiết bị không kết nối mạng thì không báo gì cả, và điều đó khác với một tuần yên ắng.',
    rateLimited: 'Thử quá nhiều lần. Đợi một phút.',
    failed: 'Không viết được báo cáo. Thử lại sau giây lát.',
    existed: 'Tuần này đã có báo cáo — đây rồi.',

    childrenTitle: 'Từng con',
    childrenNote: 'Cùng hai tuần đó, tính theo máy. Phần trăm so với tổng cả nhà.',
    colChild: 'Con',
    colScreenTime: 'Thời gian sử dụng',
    colShare: 'Tỉ lệ',
    colChange: 'So tuần trước',
    colLimit: 'Vượt giới hạn',
    colLateNights: 'Đêm muộn',
    colTopApp: 'Dùng nhiều nhất',
    unnamedChild: 'Thiết bị chưa đặt tên',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'gần như không đổi',
    noLimit: 'Không đặt',
    noTopApp: '—',
    limitDays: '{{count}} ngày',
    lateNightsNone: 'không có',
    busiest: 'Dùng nhiều nhất trong nhà',

    historyTitle: 'Các tuần trước',
    historyEmpty: 'Báo cáo từ nay sẽ được giữ ở đây trong một năm.',
  },

  support: {
    title: 'Hỗ trợ KidGate',
    updated: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn',

    contactTitle: 'Liên hệ',
    contactEmail: '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Thời gian phản hồi:** trong vòng 24 giờ (Thứ Hai–Thứ Sáu)',
    contactNote:
      'Khi liên hệ, vui lòng gửi kèm địa chỉ email của tài khoản phụ huynh KidGate và mô tả ngắn về vấn đề để chúng tôi hỗ trợ nhanh hơn.',

    startTitle: 'Bắt đầu',
    start1:
      '**1. Thiết lập thiết bị phụ huynh.** Cài KidGate, mở ứng dụng và chọn *Đây là thiết bị của phụ huynh*. Đăng nhập bằng Google, Apple hoặc email, rồi đặt tên gia đình.',
    start2:
      '**2. Tạo mã PIN phụ huynh.** Vào *Cài đặt → Bảo mật* và tạo mã PIN phụ huynh gồm 6 chữ số. Bạn cần mã này để đổi các thiết lập nhạy cảm và chọn ứng dụng bị chặn trên thiết bị của con. Đừng chia sẻ mã với con.',
    start3:
      '**3. Kết nối thiết bị của con.** Cài KidGate trên thiết bị của con và chọn *Đây là thiết bị của trẻ*. Trên thiết bị phụ huynh, mở *Gia đình → chạm + → Kết nối thiết bị của trẻ*, rồi quét mã QR hiện trên thiết bị của con (hoặc nhập mã gồm 6 ký tự). Xác nhận kết nối trên thiết bị của con.',
    start4:
      '**4. Cấp quyền trên thiết bị của con.** Mở màn hình *Trạng thái* trên thiết bị của con và cho phép mọi quyền KidGate yêu cầu — trên Android: Thông báo, Truy cập mức sử dụng, Hiển thị trên ứng dụng khác, Trợ năng và Pin không hạn chế; trên iOS: *Cho phép Sử dụng ứng dụng và Trang web* (Thời gian sử dụng). Các tính năng điều khiển chỉ hoạt động đầy đủ sau khi bật xong những quyền này.',
    start5:
      '**5. Thiết lập điều khiển.** Từ thiết bị phụ huynh, mở thẻ thiết bị của con và đặt Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Chặn nội dung web và các tính năng vị trí.',
    startNote:
      'Ứng dụng cũng có hướng dẫn từng bước ngay bên trong: *Cài đặt → Hướng dẫn sử dụng*, nói chi tiết về cấp quyền, kết nối thiết bị, điều khiển hằng ngày và các tính năng an toàn.',

    faqTitle: 'Câu hỏi thường gặp',

    faq1Q: 'Tôi quản lý gia đình từ máy tính được không?',
    faq1A:
      'Được. Mở [bảng điều khiển web](/dashboard) và đăng nhập bằng đúng tài khoản bạn dùng trong ứng dụng — Google, Apple, hoặc email và mật khẩu. Bảng điều khiển vẫn là gia đình, thiết bị, báo cáo và cài đặt đó. Việc tạo tài khoản và kết nối thiết bị vẫn làm trong ứng dụng di động.',

    faq2Q: 'Kết nối thiết bị phụ huynh với thiết bị của con thế nào?',
    faq2A:
      'Trên thiết bị của con, mở KidGate và chọn *Đây là thiết bị của trẻ* — mã QR và mã gồm 6 ký tự sẽ hiện ra. Trên thiết bị phụ huynh, mở *Gia đình → chạm + → Kết nối thiết bị của trẻ* rồi quét mã QR (khuyến nghị) hoặc nhập mã thủ công. Sau đó xác nhận tên phụ huynh trên thiết bị của con. Mã có thời hạn — nếu kết nối không thành công, hãy chạm *Tạo mã mới* trên thiết bị của con rồi thử lại.',

    faq3Q: 'Hai phụ huynh cùng quản lý một gia đình được không?',
    faq3A:
      'Được. Trên thiết bị của chủ gia đình, mở *Gia đình → chạm + → Thêm thiết bị phụ huynh* và chia sẻ mã QR hoặc mã mời. Phụ huynh kia cài KidGate, đăng nhập với vai trò phụ huynh, rồi chọn *Gia đình → chạm + → Tham gia gia đình*. Chủ gia đình phê duyệt yêu cầu đó. Một gói dùng cho cả nhà; chỉ chủ gia đình trả tiền.',

    faq4Q: 'Bản dùng thử miễn phí hoạt động thế nào?',
    faq4A:
      'Thời gian dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị đầu tiên của con được kết nối, và trong thời gian đó bạn dùng được đầy đủ tính năng. Gỡ một thiết bị của con không làm mới thời gian dùng thử. Khi kết thúc, hãy đăng ký Premium để tiếp tục dùng KidGate.',

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
      'Trên Android, chức năng khóa cần bật *Hiển thị trên ứng dụng khác* và trình trợ giúp *Trợ năng*, cùng với *Pin không hạn chế*. Trên Xiaomi, Samsung, Oppo, Vivo và các máy tương tự, hãy cho phép tự khởi động và gỡ KidGate khỏi mọi danh sách “ứng dụng ngủ” (xem *Trạng thái → Giữ KidGate chạy nền* trên thiết bị của con). Trên iOS, chức năng khóa phụ thuộc vào quyền Thời gian sử dụng. Nếu một quyền bị tắt sau đó, bạn sẽ nhận được Cảnh báo bảo vệ trên thiết bị phụ huynh.',

    faq9Q: 'Chặn ứng dụng cụ thể thế nào?',
    faq9A:
      'Việc chọn ứng dụng diễn ra trên thiết bị của con: mở *KidGate → Cài đặt*, nhập mã PIN phụ huynh, mở *Chọn ứng dụng trên thiết bị của trẻ*, rồi lưu. Sau đó, trên thiết bị phụ huynh, mở màn hình *Chặn ứng dụng* của thiết bị đó và bật *Chặn ứng dụng*. Trên iOS, Apple có thể ẩn tên ứng dụng chính xác khỏi thiết bị phụ huynh — đó là giới hạn của nền tảng.',

    faq10Q: 'Vì sao vị trí của con không cập nhật?',
    faq10A:
      'Quyền vị trí phải được cấp cho KidGate trên thiết bị của con, và máy cần có kết nối mạng. Mở màn hình *Vị trí* của thiết bị đó trên máy phụ huynh và kéo xuống để làm mới. Chế độ tiết kiệm pin có thể làm chậm cập nhật, và GPS trong nhà có thể kém chính xác hơn.',

    faq11Q: 'Gỡ KidGate khỏi thiết bị của con thế nào?',
    faq11A:
      'Hãy gỡ thiết bị khỏi ứng dụng phụ huynh trước (mở thiết bị trong *Gia đình* và chọn gỡ), rồi gỡ ứng dụng trên thiết bị của con.',

    faq12Q: 'Xóa tài khoản và dữ liệu thế nào?',
    faq12A:
      'Trong ứng dụng phụ huynh, vào *Cài đặt → Tài khoản → Xóa tài khoản*. Thao tác này xóa vĩnh viễn tài khoản gia đình và toàn bộ dữ liệu — thiết bị, hoạt động, lịch sử vị trí và ảnh SOS — của mọi phụ huynh và trẻ. Xem trang [Xóa tài khoản & dữ liệu](/delete-account) để biết mọi lựa chọn, kể cả xóa khi không còn cài ứng dụng.',

    legalTitle: 'Pháp lý',
    legalDeletion: 'Xóa tài khoản & dữ liệu',
  },

  download: {
    eyebrow: 'Tải về',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 trở lên. Chip Apple và Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 trở lên, 64-bit.',
    button: 'Tải về',
    warningSub:
      'Cả hai hệ điều hành đều hiện cảnh báo này với mọi ứng dụng cài từ ngoài cửa hàng của họ, do nhà phát triển chưa nằm trong danh sách đã xác minh — không phải do phát hiện điều gì trong KidGate. Mỗi thẻ ở trên ghi cách cho phép lần chạy đầu tiên. Chỉ tải từ kidgate.app.',
    macosSteps:
      'Mở ứng dụng một lần; macOS sẽ chặn lại. Sau đó vào Cài đặt hệ thống (System Settings), Quyền riêng tư & Bảo mật (Privacy & Security), kéo xuống và chọn Vẫn mở (Open Anyway).',
    windowsSteps:
      'Khi Windows báo đã bảo vệ máy, chọn Thông tin thêm (More info), rồi Vẫn chạy (Run anyway).',
  },
  about: {
    eyebrow: 'Về chúng tôi',
    title: 'Kiểm soát của cha mẹ mà cả nhà',
    titleAccent: 'thật sự đồng thuận.',
    lede: 'KidGate do một nhóm nhỏ độc lập làm ra, và chỉ làm một sản phẩm. Điều chúng tôi coi trọng nhất: phụ huynh phải tin được những gì ứng dụng nói — kể cả những chỗ nó nói rằng nó không làm được.',
    storyEyebrow: 'Vì sao có KidGate',
    storyTitle: 'Chuyện dùng điện thoại trở thành cuộc cãi vã trong mọi nhà',
    storyP1:
      'Nhà nào cũng có một buổi tối giống nhau: một cái hẹn giờ mà chẳng ai thống nhất, một chiếc điện thoại bị tịch thu, và một đứa trẻ tin chắc rằng quy tắc đã đổi sau lưng mình. Các công cụ sinh ra để giải quyết chuyện đó phần lớn làm nó tệ hơn — một bên là khóa máy mà không giải thích, bên kia là bảng theo dõi nhìn vào chẳng khác gì giám sát.',
    storyP2:
      'Nên chúng tôi làm ra thứ mà chính mình muốn dùng ở nhà. Phụ huynh đặt Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng và Chặn nội dung web một lần, thiết bị giữ đúng như vậy. Con nhìn thấy đúng những con số bố mẹ nhìn thấy, xin thêm giờ được, và lúc nào cũng gọi được bố mẹ bằng SOS. KidGate không giả vờ như mình không có ở đó.',
    storyP3:
      'Ứng dụng chạy trên iPhone, Android, Mac và Windows, cùng một bảng điều khiển mở bằng trình duyệt bất kỳ. Một gia đình, một gói, mọi thiết bị.',
    valuesEyebrow: 'Điều chúng tôi tin',
    valuesTitle: 'Bốn nguyên tắc chúng tôi không phá vỡ',
    valuesSub:
      'Những câu hỏi chúng tôi nhận nhiều nhất, trả lời trước khi bạn phải hỏi.',
    value1Title: 'Trẻ con không phải nghi phạm',
    value1Text:
      'Quy tắc bạn đặt hiện ngay trên chính thiết bị mà nó áp dụng. Con thấy được điều gì đang bật, còn bao nhiêu thời gian, xin thêm được, và bấm SOS được bất cứ lúc nào. Kiểm soát mà phải giấu thì cả nhà không thể ngồi nói chuyện với nhau về nó.',
    value2Title: 'Dữ liệu gia đình bạn không phải món hàng để bán',
    value2Text:
      'Không quảng cáo, không bao giờ. Không có gì về con bạn được dùng để quảng cáo hay bán cho bất kỳ ai. Bạn xóa tài khoản gia đình và toàn bộ dữ liệu bất cứ lúc nào — ngay trong ứng dụng, hoặc từ trang này.',
    value3Title: 'Chúng tôi nói rõ chỗ mình không làm được',
    value3Text:
      'Mỗi nền tảng giới hạn những gì một ứng dụng được phép làm. Chỗ nào KidGate chỉ làm được ở mức cố gắng tối đa — như đóng ứng dụng bị chặn trên máy tính thay vì chặn hẳn không cho mở — màn hình sẽ ghi đúng như vậy, thay vì hiện một dấu tích xanh.',
    value4Title: 'Một gia đình, một gói',
    value4Text:
      'Một gói dùng cho mọi phụ huynh và mọi thiết bị của con. Giới hạn hằng ngày, Giờ khóa thiết bị và vị trí vẫn chạy miễn phí, nên những tính năng an toàn không bao giờ bị khóa sau gói trả phí.',
    makeEyebrow: 'Chúng tôi làm gì',
    makeTitle: 'Một KidGate, ở bất cứ đâu có màn hình',
    makeSub:
      'Cùng một bộ quy tắc, viết một lần, thực thi bằng đúng những gì mỗi nền tảng cho phép.',
    make1Title: 'iPhone và iPad',
    make1Text:
      'Giới hạn hằng ngày, Giờ khóa thiết bị và chặn ứng dụng qua chính khung Screen Time của Apple.',
    make2Title: 'Android',
    make2Text:
      'Giới hạn giờ, chặn ứng dụng, khóa toàn màn hình và Chặn nội dung web, kèm cảnh báo khi có ứng dụng mới xuất hiện.',
    make3Title: 'macOS',
    make3Text:
      'Bản dành cho máy Mac — cùng lịch và cùng giới hạn như trên điện thoại, và một bản tổng kết trong ngày mà phụ huynh nhìn là hiểu.',
    make4Title: 'Windows',
    make4Text:
      'Cùng bản đó trên máy PC, kèm một dịch vụ chạy nền bật lại ứng dụng nếu nó bị đóng hay bị tắt.',
    make5Soon: 'Sắp có',
    make5Title: 'Android TV',
    make5Text:
      'Màn hình phòng khách, được coi là thiết bị chung của cả nhà chứ không phải của riêng một đứa trẻ — cùng giới hạn và cùng lịch như trên điện thoại.',
    make6Title: 'Bảng điều khiển phụ huynh',
    make6Text:
      'Trình duyệt là màn hình thứ hai của phụ huynh. Đăng nhập từ máy tính bất kỳ bằng mã trên điện thoại; không cần cài gì.',
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
};
