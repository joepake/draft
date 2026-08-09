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
 */
export default {
  meta: {
    title: 'KidGate — Quản lý điện thoại của con, vẫn tôn trọng con',
    description:
      'KidGate giúp cha mẹ quản lý thời gian sử dụng, chặn ứng dụng, chặn web xấu và giữ liên lạc với con — mà không lấy đi sự tự do của con.',
  },

  common: {
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
    support: 'Hỗ trợ',
    privacy: 'Quyền riêng tư',
    terms: 'Điều khoản',
    signIn: 'Đăng nhập phụ huynh',
  },

  footer: {
    blurb:
      'Giúp cả nhà thống nhất chuyện dùng điện thoại, thay vì cãi nhau về nó.',
    product: 'Sản phẩm',
    dashboard: 'Bảng điều khiển phụ huynh',
    supportGuides: 'Hỗ trợ & hướng dẫn',
    contact: 'Liên hệ',
    legal: 'Pháp lý',
    privacyPolicy: 'Chính sách quyền riêng tư',
    terms: 'Điều khoản & điều kiện',
    deleteData: 'Xóa dữ liệu của bạn',
    rights: '© {{year}} KidGate. Bảo lưu mọi quyền.',
    madeFor: 'Dành cho các gia đình dùng iOS và Android.',
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
    heroBadge: 'Quản lý con, đúng cách',
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
    trust2Text:
      'Xóa tài khoản gia đình và toàn bộ dữ liệu bất cứ khi nào bạn muốn',
    trust3Title: 'iOS và Android',
    trust3Text: 'Dùng cơ chế quản lý thời gian sẵn có của cả hai hệ điều hành',
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
    feature6Title: 'Lịch sử di chuyển',
    feature6Text:
      'Số chuyến đi, quãng đường và tốc độ trung bình cao nhất giữa các điểm vị trí — đủ để mở lời với con, không phải để bắn tốc độ.',
    feature7Title: 'Báo an toàn & SOS',
    feature7Text:
      'Yêu cầu con xác nhận mình vẫn an toàn, và nhận SOS tức thì kèm vị trí và ảnh khi có việc khẩn cấp.',
    feature8Title: 'Cảnh báo bảo vệ & cảnh báo ứng dụng',
    feature8Text:
      'Biết ngay khi một quyền quan trọng bị tắt — và trên Android, khi có ứng dụng vừa được cài hoặc gỡ.',
    feature9Title: 'Nhiệm vụ thưởng & yêu cầu thêm giờ',
    feature9Text:
      'Con làm xong nhiệm vụ để được cộng phút, hoặc gửi yêu cầu thêm giờ. Cả hai đều gửi về điện thoại của bạn để bạn duyệt.',

    showcaseEyebrow: 'Bảng điều khiển phụ huynh',
    showcaseTitle: 'Cả gia đình trên một màn hình',
    showcaseSub:
      'Thời gian sử dụng, lượt bị chặn, vị trí và mọi thứ cần bạn để ý — trên điện thoại, hoặc trên bất kỳ trình duyệt nào.',
    showcaseTile1: 'Thời gian sử dụng hôm nay',
    showcaseTile2: 'Lượt bị chặn',
    showcaseTile3: 'Cần chú ý',
    showcaseCaption1: 'Xem báo cáo từ mọi trình duyệt',
    showcaseCaption2: 'Mọi thay đổi đều duyệt từ điện thoại của bạn',

    setupEyebrow: 'Thiết lập',
    setupTitle: 'Sẵn sàng trong vài phút',
    setupSub:
      'Không cần rành công nghệ — ứng dụng hướng dẫn bạn từng bước.',
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
    whyTitle: 'Vì niềm tin, không phải để theo dõi',
    whySub: 'Thiết kế để cha mẹ và con vẫn nói chuyện được với nhau.',
    why1Title: 'Một gói, cả gia đình',
    why1Text:
      'Một gói dùng cho mọi thiết bị của phụ huynh và của con. Chỉ chủ gia đình trả tiền.',
    why2Title: 'Cho cả bố và mẹ cùng quản lý',
    why2Text:
      'Mời phụ huynh thứ hai cùng quản lý các con, với quyền truy cập do chủ gia đình phê duyệt.',
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
      'Có. Thời gian dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị đầu tiên của con được kết nối, và có đầy đủ tính năng Premium.',
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
    sub: 'Dùng đúng tài khoản bạn đã tạo trong ứng dụng KidGate. Đăng nhập ở đây, bạn sẽ thấy đúng gia đình, thiết bị và thiết lập đó.',
    notConfiguredTitle: 'Firebase chưa được cấu hình cho bản triển khai này.',
    notConfiguredBody:
      'Hãy đặt các biến môi trường VITE_FIREBASE_* để bật đăng nhập.',
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
    resetNeedsEmail:
      'Vui lòng nhập email trước, rồi chọn Quên mật khẩu.',
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
    tooManyRequests:
      'Bạn đã thử quá nhiều lần. Vui lòng đợi vài phút rồi thử lại.',
    popupClosed: 'Cửa sổ đăng nhập đã đóng trước khi hoàn tất.',
    popupCancelled: 'Đã hủy đăng nhập.',
    popupBlocked:
      'Trình duyệt đã chặn cửa sổ đăng nhập. Vui lòng cho phép cửa sổ bật lên cho trang này rồi thử lại.',
    accountExists:
      'Email này đã đăng ký bằng một cách đăng nhập khác. Vui lòng dùng cách bạn đã thiết lập trong ứng dụng.',
    operationNotAllowed:
      'Cách đăng nhập này chưa được bật cho dự án.',
    unauthorizedDomain:
      'Tên miền này chưa được cho phép trong thiết lập Firebase Authentication.',
    invalidCustomToken:
      'Liên kết đăng nhập này không còn hiệu lực. Hãy tạo mã QR mới.',
    webRejected: 'Yêu cầu đã bị từ chối trên điện thoại.',
    webExpired: 'Mã đã hết hạn. Hãy tạo mã mới.',
    noFunctionsUrl:
      'Chưa cấu hình URL Cloud Functions (VITE_FIREBASE_FUNCTIONS_URL).',
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
    drugs: 'Ma tuý & rượu bia',
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
    stateNotDetermined: 'Chưa yêu cầu',
    stateRestricted: 'Bị hạn chế',
    stateUnavailable: 'Không có',
    stateUnknown: 'Không rõ',

    lastActive: 'Hoạt động lần cuối {{when}}',
    checkIn: 'Báo an toàn',
    sending: 'Đang gửi…',
    lockDevice: 'Khóa thiết bị',
    unlock: 'Mở khóa',
    working: 'Đang xử lý…',
    lockNeedsApp: 'Khóa thiết bị cần ứng dụng KidGate trên điện thoại của bạn',

    viewOnlyTitle: 'Chỉ xem.',
    viewOnlyBody:
      'Để khóa thiết bị, đổi giới hạn hay duyệt yêu cầu, hãy đăng xuất rồi đăng nhập lại bằng cách quét mã QR bằng ứng dụng KidGate — chỉ khi được cho phép từ điện thoại phụ huynh đã kết nối thì các nút điều khiển mới mở. Báo an toàn thì vẫn gửi được từ đây trong cả hai trường hợp.',

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
    tileBlockedMeta: 'Lượt mở ứng dụng bị chặn từ khi cài',
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
      'Chưa có nhật ký. Các lần khóa, ứng dụng bị chặn, cảnh báo địa điểm và dữ liệu Thời gian sử dụng đồng bộ từ thiết bị này sẽ hiển thị tại đây.',
    cardAttention: 'Cần bạn chú ý',
    cardAttentionSub: '{{count}} mục chưa xử lý',
    cardAttentionEmpty:
      'Không có gì cần xử lý. Các tính năng bảo vệ đang hoạt động tốt.',
    cardProtection: 'Tình trạng bảo vệ',
    cardProtectionSub: 'Kiểm tra {{when}}',

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
    topAppsSub: 'Giới hạn của từng ứng dụng hiển thị bằng vạch đánh dấu',
    trendTitle: 'Xu hướng thời gian sử dụng',
    trendSub: '{{count}} ngày gần nhất',
    rangeDays: '{{count}} ngày',
    blockedHoursTitle: 'Giờ khóa thiết bị',
    blockedHoursSub:
      '{{count}} khung giờ · thiết bị giữ trạng thái khóa trong các vùng tô đậm',
    scheduleOff: 'Lịch đang tắt',

    appUsageTitle: 'Mức sử dụng ứng dụng hôm nay',
    appUsageSub: 'Thời gian dùng từng ứng dụng',
    appBlockingTitle: 'Chặn ứng dụng',
    appBlockingSub: 'Chọn trên thiết bị của trẻ bằng mã PIN phụ huynh',
    blockingLabel: 'Chặn',
    appsBlocked: 'Ứng dụng bị chặn',
    categories: 'Danh mục',
    perAppHint:
      'Giới hạn giờ theo app chạy độc lập với danh sách chặn — “30 phút TikTok” là một quyết định khác với “không TikTok”.',
    perDay: '{{value}}/ngày',
    webActivityTitle: 'Hoạt động web',
    webActivitySub: 'Tên miền vào nhiều nhất, 30 ngày gần nhất',
    colDomain: 'Tên miền',
    colVisits: 'Lượt vào',
    colBlocked: 'Bị chặn',
    colLastSeen: 'Lần cuối',
    filterRefusedTitle: 'Bộ lọc đã chặn những gì',
    filterRefusedSub: '{{count}} lượt truy cập bị chặn, 30 ngày gần nhất',
    nothingBlockedYet: 'Chưa có trang nào bị chặn.',
    filterHintIos:
      'Trên iOS, bộ lọc dùng cơ chế chặn nội dung người lớn của Apple — chặn theo từng danh mục chỉ có trên Android.',
    filterHintAndroid:
      'Các danh mục được thực thi bằng bộ lọc DNS ngay trên máy.',

    locationTitle: 'Vị trí',
    locationSharingOff: 'Chia sẻ vị trí đang tắt',
    locationUpdated: 'Cập nhật {{when}}',
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
      'Cảnh báo bảo vệ nghĩa là KidGate đang thực thi được ít hơn mức bạn đặt. Hãy bật lại quyền đó trên thiết bị của con để xóa cảnh báo.',

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
    rowAppBlockingDesc:
      '{{apps}} ứng dụng · {{categories}} danh mục được chọn trên thiết bị của con',
    rowWebFilter: 'Chặn nội dung web',
    rowWebFilterDesc: 'Đã chặn {{count}} danh mục',
    rowLocation: 'Chia sẻ vị trí',
    rowLocationDesc: 'Cập nhật lần cuối {{when}}',
    rowLocationNone: 'Chưa có vị trí',
    toggleInApp: 'Thay đổi mục này trong ứng dụng KidGate',

    webFilterCatsTitle: 'Danh mục bị chặn',
    webFilterCatsSub: 'Các loại nội dung bị chặn',
    dnsHint:
      'Khi bộ lọc đang chạy, mọi máy chủ DNS mã hóa đều bị chặn — nếu để chúng truy cập được, trình duyệt sẽ đi vòng qua toàn bộ các danh mục còn lại.',
    rewardTasksTitle: 'Nhiệm vụ thưởng',
    rewardTasksSub: 'Hoàn thành nhiệm vụ để được cộng thêm phút',
    rewardTaskMeta: '+{{minutes}} phút · {{cadence}}',
    rewardTaskWaiting: ' · đang chờ bạn duyệt',
    approve: 'Duyệt',
    approveInApp: 'Duyệt trong ứng dụng KidGate',
  },

  support: {
    title: 'Hỗ trợ KidGate',
    updated: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn',

    contactTitle: 'Liên hệ',
    contactEmail:
      '**Email:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse:
      '**Thời gian phản hồi:** trong vòng 24 giờ (Thứ Hai–Thứ Sáu)',
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
      '**4. Cấp quyền trên thiết bị của con.** Mở màn hình *Trạng thái* trên thiết bị của con và cho phép mọi quyền KidGate yêu cầu — trên Android: Thông báo, Truy cập mức sử dụng, Hiển thị trên ứng dụng khác, Trợ năng và Pin không hạn chế; trên iOS: *Cho phép Sử dụng ứng dụng và Trang web* (Thời gian sử dụng). Các nút điều khiển chưa chạy đủ cho tới khi bật xong những quyền này.',
    start5:
      '**5. Thiết lập điều khiển.** Từ thiết bị phụ huynh, mở thẻ thiết bị của con và đặt Giới hạn hằng ngày, Giờ khóa thiết bị, Chặn ứng dụng, Chặn nội dung web và các tính năng vị trí.',
    startNote:
      'Ứng dụng cũng có hướng dẫn từng bước ngay bên trong: *Cài đặt → Hướng dẫn sử dụng*, nói chi tiết về cấp quyền, kết nối thiết bị, điều khiển hằng ngày và các tính năng an toàn.',

    faqTitle: 'Câu hỏi thường gặp',

    faq1Q: 'Tôi quản lý gia đình từ máy tính được không?',
    faq1A:
      'Được. Mở [bảng điều khiển web](/dashboard) và đăng nhập bằng đúng tài khoản bạn dùng trong ứng dụng — Google, Apple, hoặc email và mật khẩu. Bảng điều khiển hiển thị cùng một gia đình, thiết bị, báo cáo và thiết lập. Việc tạo tài khoản và kết nối thiết bị vẫn làm trong ứng dụng di động.',

    faq2Q: 'Kết nối thiết bị phụ huynh với thiết bị của con thế nào?',
    faq2A:
      'Trên thiết bị của con, mở KidGate và chọn *Đây là thiết bị của trẻ* — mã QR và mã gồm 6 ký tự sẽ hiện ra. Trên thiết bị phụ huynh, mở *Gia đình → chạm + → Kết nối thiết bị của trẻ* rồi quét mã QR (khuyến nghị) hoặc nhập mã thủ công. Sau đó xác nhận tên phụ huynh trên thiết bị của con. Mã có thời hạn — nếu kết nối không thành công, hãy chạm *Tạo mã mới* trên thiết bị của con rồi thử lại.',

    faq3Q: 'Hai phụ huynh cùng quản lý một gia đình được không?',
    faq3A:
      'Được. Trên thiết bị của chủ gia đình, mở *Gia đình → chạm + → Thêm thiết bị phụ huynh* và chia sẻ mã QR hoặc mã mời. Phụ huynh kia cài KidGate, đăng nhập với vai trò phụ huynh, rồi chọn *Gia đình → chạm + → Tham gia gia đình*. Chủ gia đình phê duyệt yêu cầu đó. Một gói dùng cho cả nhà; chỉ chủ gia đình trả tiền.',

    faq4Q: 'Bản dùng thử miễn phí hoạt động thế nào?',
    faq4A:
      'Thời gian dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị đầu tiên của con được kết nối, và cho dùng đầy đủ tính năng. Gỡ một thiết bị của con không làm mới thời gian dùng thử. Khi kết thúc, hãy đăng ký Premium để tiếp tục dùng KidGate.',

    faq5Q: 'Hủy gói đăng ký thế nào?',
    faq5A:
      'Gói được tính phí qua App Store hoặc Google Play, không phải trực tiếp qua KidGate. Trên iOS: *Cài đặt → tên bạn → Thuê bao*. Trên Android: *Google Play → biểu tượng hồ sơ → Thanh toán và gói thuê bao → Gói thuê bao*. Gói tự động gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc.',

    faq6Q: 'Khôi phục giao dịch mua thế nào?',
    faq6A:
      'Trên thiết bị phụ huynh, mở màn hình *Gói dịch vụ* và chạm *Khôi phục giao dịch*. Hãy chắc chắn bạn đang đăng nhập bằng đúng tài khoản cửa hàng ứng dụng đã dùng khi mua. Lưu ý chỉ chủ gia đình mới đăng ký hoặc khôi phục giao dịch được.',

    faq7Q: 'Vì sao dữ liệu thời gian sử dụng không hiện ra?',
    faq7A:
      'Dữ liệu sử dụng đến từ thiết bị của con. Hãy kiểm tra thiết bị của con có trực tuyến không, rồi mở KidGate trên máy đó và xem màn hình *Trạng thái* — mọi dòng quyền phải hiển thị là đã cho phép (trên Android cần quyền Truy cập mức sử dụng để theo dõi thời gian sử dụng). Báo cáo có thể mất vài phút để đồng bộ.',

    faq8Q: 'Vì sao khóa thiết bị hoặc Giờ khóa thiết bị không hoạt động?',
    faq8A:
      'Trên Android, chức năng khóa cần bật *Hiển thị trên ứng dụng khác* và trình trợ giúp *Trợ năng*, cùng với *Pin không hạn chế*. Trên Xiaomi, Samsung, Oppo, Vivo và các máy tương tự, hãy cho phép tự khởi động và gỡ KidGate khỏi mọi danh sách "ứng dụng ngủ" (xem *Trạng thái → Giữ KidGate chạy nền* trên thiết bị của con). Trên iOS, chức năng khóa phụ thuộc vào quyền Thời gian sử dụng. Nếu một quyền bị tắt sau đó, bạn sẽ nhận được Cảnh báo bảo vệ trên thiết bị phụ huynh.',

    faq9Q: 'Chặn ứng dụng cụ thể thế nào?',
    faq9A:
      'Việc chọn ứng dụng diễn ra trên thiết bị của con: mở *KidGate → Cài đặt*, nhập mã PIN phụ huynh, chọn *Chọn ứng dụng trên thiết bị của trẻ*, rồi lưu. Sau đó, trên thiết bị phụ huynh, mở màn hình *Chặn ứng dụng* của thiết bị đó và bật *Chặn ứng dụng*. Trên iOS, Apple có thể ẩn tên ứng dụng chính xác khỏi thiết bị phụ huynh — đó là giới hạn của nền tảng.',

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
};
