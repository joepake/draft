/**
 * Vietnamese. Vietnamese has no plural inflection, so counted strings keep the
 * plain key and no `_one` / `_other` variants.
 */
export default {
  meta: {
    title: 'KidGate — Kiểm soát của cha mẹ, tôn trọng con trẻ',
    description:
      'KidGate giúp cha mẹ quản lý thời gian dùng màn hình, chặn ứng dụng, lọc web và giữ liên lạc — mà không lấy đi sự tự do của con.',
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
    skip: 'Bỏ qua, tới nội dung',
    main: 'Chính',
    support: 'Hỗ trợ',
    privacy: 'Quyền riêng tư',
    terms: 'Điều khoản',
    signIn: 'Đăng nhập phụ huynh',
  },

  footer: {
    blurb:
      'Kiểm soát của cha mẹ giúp cả nhà thống nhất về thời gian dùng màn hình, thay vì cãi nhau vì nó.',
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
    'Trang này chỉ có bản tiếng Anh, và bản tiếng Anh là bản có hiệu lực. Hãy liên hệ [kidgate.support@gmail.com](mailto:kidgate.support@gmail.com) nếu bạn cần được giải thích bất kỳ phần nào.',

  store: {
    appleAria: 'Tải KidGate trên App Store',
    appleSmall: 'Tải về trên',
    appleName: 'App Store',
    googleAria: 'Tải KidGate trên Google Play',
    googleSmall: 'Tải về trên',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Kiểm soát của cha mẹ, làm đúng cách',
    heroTitle: 'Bảo vệ con bạn',
    heroTitleAccent: 'mà không lấy đi sự tự do của con.',
    heroLede:
      'KidGate cho cha mẹ sự kiểm soát nhẹ nhàng và rõ ràng với thời gian dùng màn hình, ứng dụng và an toàn — còn con vẫn giữ một chiếc điện thoại thực sự là của mình.',
    heroCheck1: 'Thời gian màn hình',
    heroCheck2: 'Chặn ứng dụng',
    heroCheck3: 'Lọc web',
    heroCheck4: 'Vị trí',
    heroCheck5: 'Bảng điều khiển gia đình',

    phoneDailyLimit: 'Giới hạn mỗi ngày',
    phoneDailyLimitValue: 'Đã dùng 1g 24p trong 3g',
    phoneBlockedHours: 'Giờ bị chặn',
    phoneScheduleOn: 'Lịch đang bật',
    phoneLocation: 'Vị trí',
    phoneLocationValue: 'Ở trường · 5 phút trước',
    phoneCheckIn: 'Điểm danh OK',

    trust1Title: 'Không bao giờ có quảng cáo',
    trust1Text: 'Dữ liệu của trẻ không bao giờ dùng cho quảng cáo',
    trust2Title: 'Xóa bất cứ lúc nào',
    trust2Text: 'Xóa tài khoản gia đình và toàn bộ dữ liệu khi bạn yêu cầu',
    trust3Title: 'iOS và Android',
    trust3Text: 'Kiểm soát thời gian màn hình gốc trên cả hai nền tảng',
    trust4Title: 'Một gói cho cả nhà',
    trust4Text: 'Mọi thiết bị của cha mẹ và con, chỉ một thuê bao',

    featuresEyebrow: 'Tính năng',
    featuresTitle: 'Đủ mọi thứ cha mẹ cần',
    featuresSub:
      'Từ giới hạn mỗi ngày đến cảnh báo khẩn cấp — một ứng dụng cho sức khỏe số của cả gia đình.',
    feature1Title: 'Thời gian màn hình & giới hạn ngày',
    feature1Text:
      'Đặt hạn mức mỗi ngày và Giờ bị chặn cho giờ học, giờ ngủ. Thiết bị tự khóa khi hết giờ.',
    feature2Title: 'Chặn ứng dụng',
    feature2Text:
      'Chọn chính xác những ứng dụng con được mở, bảo vệ bằng mã PIN phụ huynh, và bật chặn từ xa.',
    feature3Title: 'Lọc web',
    feature3Text:
      'Từ chối các trang người lớn và cờ bạc trên thiết bị của con, kết hợp với chặn ứng dụng để bảo vệ chặt hơn.',
    feature4Title: 'Vị trí trực tiếp & địa điểm',
    feature4Text:
      'Xem vị trí mới nhất của con, xem lại lịch sử, và được báo khi con đến hoặc rời một địa điểm đã lưu.',
    feature5Title: 'Điểm danh & SOS',
    feature5Text:
      'Yêu cầu con xác nhận mình an toàn, và nhận SOS tức thì kèm vị trí và ảnh khi có việc khẩn cấp.',
    feature6Title: 'Cảnh báo bảo vệ',
    feature6Text:
      'Biết ngay khi một quyền quan trọng bị tắt, để lớp bảo vệ không lặng lẽ mất hiệu lực.',

    showcaseEyebrow: 'Bảng điều khiển phụ huynh',
    showcaseTitle: 'Cả gia đình trên một màn hình',
    showcaseSub:
      'Thời gian màn hình, số lần bị chặn, vị trí và mọi thứ cần bạn để mắt — trên điện thoại, hoặc trên bất kỳ trình duyệt nào.',
    showcaseTile1: 'Thời gian màn hình hôm nay',
    showcaseTile2: 'Lượt bị chặn',
    showcaseTile3: 'Cần chú ý',
    showcaseCaption1: 'Xem báo cáo từ mọi trình duyệt',
    showcaseCaption2: 'Thay đổi được duyệt từ điện thoại của bạn',

    setupEyebrow: 'Cài đặt',
    setupTitle: 'Sẵn sàng trong vài phút',
    setupSub:
      'Không cần kỹ thuật — ứng dụng dẫn bạn qua từng bước.',
    step1Title: 'Thiết lập thiết bị của bạn',
    step1Text:
      'Cài KidGate, chọn “Đây là thiết bị của phụ huynh”, rồi đăng nhập bằng Google, Apple hoặc email.',
    step2Title: 'Kết nối thiết bị của con',
    step2Text:
      'Cài KidGate trên điện thoại của con và kết nối bằng cách quét mã QR. Chưa tới một phút.',
    step3Title: 'Đặt quy tắc của bạn',
    step3Text:
      'Chọn giới hạn mỗi ngày, chặn ứng dụng và khung giờ, bật vị trí — tất cả từ điện thoại của bạn.',

    whyEyebrow: 'Vì sao chọn KidGate',
    whyTitle: 'Xây cho niềm tin, không phải để theo dõi',
    whySub: 'Thiết kế để cha mẹ và con vẫn nói chuyện được với nhau.',
    why1Title: 'Một gói, cả nhà',
    why1Text:
      'Một thuê bao dùng cho mọi thiết bị của cha mẹ và con. Chỉ chủ gia đình trả tiền.',
    why2Title: 'Dành cho cả cha lẫn mẹ cùng quản lý',
    why2Text:
      'Mời phụ huynh thứ hai cùng quản lý các con, với quyền truy cập do chủ gia đình phê duyệt.',
    why3Title: 'Quyền riêng tư trước hết',
    why3Text:
      'Chúng tôi không bao giờ bán dữ liệu cá nhân và không dùng dữ liệu của trẻ cho quảng cáo. Xóa mọi thứ bất cứ lúc nào.',
    why4Title: 'Thành thật về giới hạn',
    why4Text:
      'Chúng tôi nói rõ mỗi nền tảng làm được và không làm được gì, thay vì hứa hẹn một sự kiểm soát không có thật.',

    faqEyebrow: 'Hỏi đáp',
    faqTitle: 'Những câu cha mẹ hỏi đầu tiên',
    faqSub: 'Trả lời nhanh trước khi bạn tải về.',
    faq1Q: 'Có dùng thử miễn phí không?',
    faq1A:
      'Có. Bản dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị con đầu tiên được kết nối, và có đủ mọi tính năng Premium.',
    faq2Q: 'Tôi quản lý được bao nhiêu thiết bị?',
    faq2A:
      'Một thuê bao dùng cho cả nhà — nhiều thiết bị của con và nhiều phụ huynh trên cùng một gói.',
    faq3Q: 'Con tôi có gỡ hoặc vượt qua KidGate được không?',
    faq3A:
      'Các thiết lập nhạy cảm nằm sau mã PIN phụ huynh, và Cảnh báo bảo vệ báo cho bạn ngay khi một quyền quan trọng bị tắt trên thiết bị của con.',
    faq4Q: 'Tôi quản lý mọi thứ từ máy tính được không?',
    faq4A:
      'Bạn có thể đăng nhập bảng điều khiển web để xem báo cáo. Việc đổi giới hạn hay khóa thiết bị phải được duyệt từ điện thoại, nên chỉ lộ mật khẩu là chưa đủ để làm gì.',
    faqMore: 'Còn câu hỏi khác? Xem trang Hỗ trợ',

    ctaTitle: 'Bắt đầu bảo vệ gia đình bạn hôm nay',
    ctaSub: 'Dùng thử miễn phí đầy đủ tính năng. Không cần thẻ tín dụng để bắt đầu.',
    ctaNote: 'Hủy bất cứ lúc nào từ App Store hoặc Google Play.',
  },

  login: {
    title: 'Đăng nhập phụ huynh',
    sub: 'Dùng đúng tài khoản bạn đã tạo trong ứng dụng KidGate. Đăng nhập ở đây sẽ thấy cùng một gia đình, thiết bị và thiết lập.',
    notConfiguredTitle: 'Firebase chưa được cấu hình cho bản triển khai này.',
    notConfiguredBody:
      'Hãy đặt các biến môi trường VITE_FIREBASE_* để bật đăng nhập.',
    qrWhy:
      'Duyệt từ điện thoại là cách duy nhất mở khóa các nút điều khiển — khóa thiết bị và đổi giới hạn vẫn thuộc về ứng dụng. Các cách dưới đây chỉ đăng nhập để xem báo cáo.',
    orViewOnly: 'hoặc đăng nhập chỉ để xem',
    google: 'Tiếp tục với Google',
    googleBusy: 'Đang mở Google…',
    apple: 'Tiếp tục với Apple',
    appleBusy: 'Đang mở Apple…',
    orEmail: 'hoặc dùng email của bạn',
    email: 'Email',
    emailPlaceholder: 'ban@vidu.com',
    password: 'Mật khẩu',
    submit: 'Đăng nhập',
    submitBusy: 'Đang đăng nhập…',
    forgot: 'Quên mật khẩu?',
    resetNeedsEmail:
      'Hãy nhập địa chỉ email trước, rồi chọn Quên mật khẩu.',
    resetSent: 'Đã gửi email đặt lại mật khẩu tới {{email}}.',
    foot: 'Tài khoản KidGate được tạo trong ứng dụng di động — bảng điều khiển web chỉ đăng nhập vào một gia đình đã có. Bạn mới dùng? Hãy cài ứng dụng và kết nối thiết bị của con trước.',
  },

  qr: {
    start: 'Đăng nhập bằng ứng dụng KidGate',
    generating: 'Đang tạo mã…',
    step1: 'Mở KidGate trên điện thoại của bạn.',
    step2: 'Vào *Cài đặt → Đăng nhập trên web*.',
    step3: 'Quét mã này, rồi phê duyệt.',
    waiting: 'Đang chờ phê duyệt · hết hạn sau {{time}}',
    signingIn: 'Đã duyệt. Đang đăng nhập…',
    expired: 'Mã này đã hết hạn.',
    failed: 'Đăng nhập chưa hoàn tất.',
    newCode: 'Hiện mã mới',
    tryAgain: 'Thử lại',
  },

  authError: {
    generic: 'Đã có lỗi xảy ra. Hãy thử lại.',
    invalidEmail: 'Địa chỉ email này trông không đúng.',
    userDisabled: 'Tài khoản này đã bị vô hiệu hóa.',
    userNotFound: 'Không có tài khoản KidGate nào dùng email đó.',
    wrongPassword: 'Sai email hoặc mật khẩu.',
    tooManyRequests: 'Thử quá nhiều lần. Hãy đợi vài phút rồi thử lại.',
    popupClosed: 'Cửa sổ đăng nhập bị đóng trước khi xong.',
    popupCancelled: 'Đăng nhập đã bị hủy.',
    popupBlocked:
      'Trình duyệt đã chặn cửa sổ đăng nhập. Hãy cho phép cửa sổ bật lên cho trang này rồi thử lại.',
    accountExists:
      'Email đó đã đăng ký bằng một cách đăng nhập khác. Hãy dùng cách bạn đã thiết lập trong ứng dụng.',
    operationNotAllowed:
      'Cách đăng nhập đó chưa được bật cho dự án này.',
    unauthorizedDomain:
      'Tên miền này chưa được cho phép trong thiết lập Firebase Authentication.',
    invalidCustomToken:
      'Liên kết đăng nhập đó không còn hiệu lực. Hãy hiện mã QR mới.',
    webRejected: 'Yêu cầu đã bị từ chối trên điện thoại.',
    webExpired: 'Mã đã hết hạn. Hãy tạo mã mới.',
    noFunctionsUrl:
      'Chưa cấu hình URL Cloud Functions (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Phiên của bạn đã hết hạn. Hãy đăng nhập lại.',
  },

  live: {
    checkingSession: 'Đang kiểm tra phiên của bạn…',
    loadingFamily: 'Đang tải gia đình của bạn…',
    loadFailedTitle: 'Không tải được gia đình của bạn',
    noAccess:
      'Tài khoản này không có quyền truy cập gia đình KidGate nào. Hãy đăng nhập bằng tài khoản phụ huynh bạn dùng trong ứng dụng.',
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
    byDay: 'Thời gian màn hình theo ngày',
    limit: 'Giới hạn {{value}}',
    screenTime: 'Thời gian màn hình',
    bonus: 'Thưởng',
    bonusEarned: 'Phút thưởng đã nhận',
    overLimit: 'Vượt giới hạn ngày',
    dailyLimit: 'Giới hạn ngày',
    ofLimit: 'trên {{value}}',
    noLimit: 'chưa đặt giới hạn',
    blocked: 'Bị chặn',
    blockedHours: 'Giờ bị chặn',
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
    camera: 'Máy ảnh',
    backgroundAppRefresh: 'Làm mới ứng dụng nền',
    overlay: 'Hiển thị trên ứng dụng khác',
    batteryOptimization: 'Pin không giới hạn',
    exactAlarm: 'Báo thức chính xác',
    accessibility: 'Trợ năng',
  },

  webCat: {
    adult: 'Người lớn',
    gambling: 'Cờ bạc',
    dating: 'Hẹn hò',
    drugs: 'Ma túy',
    violence: 'Bạo lực',
    piracy: 'Vi phạm bản quyền',
    social: 'Mạng xã hội',
    videoStreaming: 'Video',
    gaming: 'Trò chơi',
    shopping: 'Mua sắm',
  },

  dash: {
    tabOverview: 'Tổng quan',
    tabScreen: 'Thời gian màn hình',
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
    fallbackDevice: 'Thiết bị của con',

    statusOnline: 'Trực tuyến',
    statusOffline: 'Ngoại tuyến',
    statusLocked: 'Đang khóa',

    stateAllowed: 'Đã cho phép',
    stateDenied: 'Đã tắt',
    stateNotDetermined: 'Chưa hỏi',
    stateRestricted: 'Bị hạn chế',
    stateUnavailable: 'Không có',
    stateUnknown: 'Không rõ',

    lastActive: 'Hoạt động lần cuối {{when}}',
    checkIn: 'Điểm danh',
    sending: 'Đang gửi…',
    lockDevice: 'Khóa thiết bị',
    unlock: 'Mở khóa',
    working: 'Đang xử lý…',
    lockNeedsApp: 'Khóa thiết bị cần ứng dụng KidGate trên điện thoại của bạn',

    viewOnlyTitle: 'Chỉ xem.',
    viewOnlyBody:
      'Để khóa thiết bị, đổi giới hạn hay duyệt yêu cầu, hãy đăng xuất rồi đăng nhập lại bằng cách quét mã QR bằng ứng dụng KidGate — chính sự phê duyệt từ điện thoại phụ huynh đã kết nối mới mở khóa các nút điều khiển. Điểm danh vẫn dùng được ở đây trong cả hai trường hợp.',

    noDeviceTitle: 'Chưa có thiết bị nào của con',
    noDeviceBody:
      'Mở KidGate trên điện thoại của bạn, vào *Gia đình → + → Kết nối thiết bị của con*, rồi quét mã QR hiện trên thiết bị của con. Thiết bị sẽ xuất hiện ở đây vài giây sau khi kết nối.',

    toastCheckIn: '{{name}} sẽ nhận được yêu cầu Điểm danh.',
    toastTimeApproved: 'Đã duyệt thêm giờ.',
    toastCheckInResent: 'Đã gửi lại Điểm danh.',

    tileScreenToday: 'Thời gian màn hình hôm nay',
    tileSameAsAverage: 'Bằng mức trung bình 7 ngày',
    tileDeltaUp: '↑ {{percent}}% so với trung bình 7 ngày',
    tileDeltaDown: '↓ {{percent}}% so với trung bình 7 ngày',
    tileBlocked: 'Lượt bị chặn',
    tileBlockedMeta: 'Số ứng dụng bị chặn từ khi cài',
    tileSites: 'Trang bị lọc',
    tileCategoriesHit: 'Đã chạm {{count}} nhóm nội dung',
    tileNothingBlocked: 'Chưa chặn gì',
    tileAttention: 'Cần chú ý',
    tileOpenItems: 'Các mục đang mở ở dưới',
    tileAllClear: 'Mọi thứ ổn',

    cardScreenTime: 'Thời gian màn hình',
    cardScreenTimeSub: '14 ngày gần nhất, so với Giới hạn ngày',
    cardRecent: 'Hoạt động gần đây',
    cardRecentSub: 'Mới nhất trước',
    cardRecentEmpty:
      'Chưa ghi nhận gì. Các lần khóa, ứng dụng bị chặn, cảnh báo địa điểm và đồng bộ thời gian màn hình từ thiết bị này sẽ hiện ở đây.',
    cardAttention: 'Cần bạn chú ý',
    cardAttentionSub: '{{count}} mục đang mở',
    cardAttentionEmpty: 'Không có gì cần xem. Các lớp bảo vệ đều ổn.',
    cardProtection: 'Tình trạng bảo vệ',
    cardProtectionSub: 'Kiểm tra {{when}}',

    attnMoreMinutes: '{{name}} xin thêm {{minutes}} phút',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Bỏ lỡ một lần Điểm danh',
    attnCheckInMissedMeta: 'Đã gửi {{when}} · không có phản hồi',
    attnPermissionOff: '{{permission}} đang tắt',
    attnPermissionOffMeta:
      'Lớp bảo vệ yếu đi cho tới khi bật lại quyền này trên thiết bị của con',
    attnLimitReached: 'Đã hết Giới hạn ngày — thiết bị đã khóa',
    attnLimitReachedMeta: 'Đã dùng {{used}} hôm nay',
    attnBatteryLow: 'Pin yếu ({{level}}%)',
    attnBatteryLowMeta: 'Cập nhật vị trí có thể dừng nếu máy hết pin',
    attnReview: 'Xem',
    attnResend: 'Gửi lại',
    attnHowToFix: 'Cách khắc phục',
    attnUnlock: 'Mở khóa',
    attnAppOnly: 'Chỉ có trong ứng dụng KidGate',

    todayTitle: 'Hôm nay',
    todaySub: 'So với Giới hạn ngày và phút thưởng đã nhận',
    used: 'Đã dùng',
    left: 'Còn lại',
    dailyLimit: 'Giới hạn ngày',
    bonusToday: 'Thưởng hôm nay',
    off: 'Tắt',
    on: 'Bật',
    topAppsTitle: 'Ứng dụng dùng nhiều nhất hôm nay',
    topAppsSub: 'Hạn mức từng ứng dụng hiện dưới dạng vạch đánh dấu',
    trendTitle: 'Xu hướng thời gian màn hình',
    trendSub: '{{count}} ngày gần nhất',
    rangeDays: '{{count}} ngày',
    blockedHoursTitle: 'Giờ bị chặn',
    blockedHoursSub:
      '{{count}} khung giờ · thiết bị vẫn khóa trong các vùng tô đậm',
    scheduleOff: 'Lịch đang tắt',

    appUsageTitle: 'Sử dụng ứng dụng hôm nay',
    appUsageSub: 'Thời gian cho từng ứng dụng',
    appBlockingTitle: 'Chặn ứng dụng',
    appBlockingSub: 'Được chọn trên thiết bị của con bằng mã PIN phụ huynh',
    blockingLabel: 'Chặn',
    appsBlocked: 'Ứng dụng bị chặn',
    categories: 'Nhóm nội dung',
    perAppHint:
      'Hạn mức từng ứng dụng chạy độc lập với danh sách chặn — “30 phút TikTok” là một quyết định khác với “không TikTok”.',
    perDay: '{{value}}/ngày',
    webActivityTitle: 'Hoạt động web',
    webActivitySub: 'Tên miền vào nhiều nhất, 30 ngày gần nhất',
    colDomain: 'Tên miền',
    colVisits: 'Lượt vào',
    colBlocked: 'Bị chặn',
    colLastSeen: 'Lần cuối',
    filterRefusedTitle: 'Bộ lọc đã từ chối những gì',
    filterRefusedSub: '{{count}} lượt tra cứu bị chặn, 30 ngày gần nhất',
    nothingBlockedYet: 'Chưa có gì bị chặn.',
    filterHintIos:
      'Trên iOS, bộ lọc dùng chức năng chặn nội dung người lớn của Apple — chặn theo từng nhóm chỉ có trên Android.',
    filterHintAndroid: 'Các nhóm nội dung do bộ lọc DNS trên máy thực thi.',

    locationTitle: 'Vị trí',
    locationSharingOff: 'Chia sẻ đang tắt',
    locationUpdated: 'Cập nhật {{when}}',
    locationWaiting: 'Đang chờ lần cập nhật đầu tiên',
    lastKnownLocation: 'Vị trí biết gần nhất',
    noPlaces:
      'Chưa lưu địa điểm nào. Hãy thêm một địa điểm trong ứng dụng để được báo khi con đến hoặc rời đi.',
    placeRadius: '{{meters}}m · ',
    placeArrive: 'đến',
    placeLeave: 'rời',
    placeNoAlerts: 'không cảnh báo',
    sosTitle: 'Cảnh báo SOS',
    sosSub: 'Tín hiệu khẩn cấp từ thiết bị của con',
    sosEmpty:
      'Chưa có cảnh báo SOS. Hãy thử một lần cùng nhau để cả hai biết cách dùng.',
    sosAcknowledged: 'đã tiếp nhận',
    sosActive: 'đang hoạt động',

    checkInsTitle: 'Điểm danh',
    checkInsSub: 'Yêu cầu con xác nhận mình an toàn',
    checkInSafe: 'Đã xác nhận an toàn',
    checkInMissed: 'Không phản hồi',
    checkInWaiting: 'Đang chờ',
    checkInPhotoRequested: 'đã yêu cầu ảnh và vị trí',
    checkInNoReply: 'chưa trả lời',
    checkInPhotoSkipped: 'đã bỏ qua ảnh',
    checkInPhotoAttached: 'có kèm ảnh',
    checkInNoPhoto: 'không yêu cầu ảnh',
    sendCheckIn: 'Gửi Điểm danh ngay',

    protectionAlertsTitle: 'Cảnh báo bảo vệ',
    protectionAlertsSub: '{{count}} sự kiện từ khi cài',
    protectionAlertsHint:
      'Cảnh báo bảo vệ nghĩa là KidGate thực thi được ít hơn mức bạn đặt. Hãy bật lại quyền trên thiết bị của con để xóa cảnh báo.',

    limitCardTitle: 'Giới hạn ngày',
    limitCardSub: 'Giới hạn số phút dùng được mỗi ngày',
    limitAria: 'Số phút giới hạn mỗi ngày',
    limitScaleMin: '30p',
    limitScaleMax: '8g',
    limitHint:
      'Phút thưởng từ nhiệm vụ và các yêu cầu thêm giờ đã duyệt sẽ được cộng thêm, chỉ trong ngày hôm đó.',
    whatsOnTitle: 'Những gì đang bật',
    whatsOnSub: 'Thay đổi sẽ đồng bộ về thiết bị của con',
    rowBlockedHours: 'Giờ bị chặn',
    rowBlockedHoursDesc: '{{count}} khung giờ · {{list}}',
    rowAppBlocking: 'Chặn ứng dụng',
    rowAppBlockingDesc:
      '{{apps}} ứng dụng · {{categories}} nhóm được chọn trên thiết bị của con',
    rowWebFilter: 'Lọc web',
    rowWebFilterDesc: 'Từ chối {{count}} nhóm nội dung',
    rowLocation: 'Chia sẻ vị trí',
    rowLocationDesc: 'Cập nhật lần cuối {{when}}',
    rowLocationNone: 'Chưa có vị trí',
    toggleInApp: 'Hãy đổi mục này trong ứng dụng KidGate',

    webFilterCatsTitle: 'Nhóm nội dung lọc web',
    webFilterCatsSub: 'Các loại nội dung bị chặn',
    dnsHint:
      'Các máy chủ DNS mã hóa luôn bị từ chối khi bộ lọc chạy — để chúng truy cập được chính là cách trình duyệt đi vòng qua mọi nhóm nội dung khác.',
    rewardTasksTitle: 'Nhiệm vụ thưởng',
    rewardTasksSub: 'Hoàn thành nhiệm vụ để nhận thêm phút',
    rewardTaskMeta: '+{{minutes}} phút · {{cadence}}',
    rewardTaskWaiting: ' · đang chờ bạn duyệt',
    approve: 'Duyệt',
    approveInApp: 'Hãy duyệt trong ứng dụng KidGate',
  },

  support: {
    title: 'Hỗ trợ KidGate',
    updated: 'Chúng tôi ở đây để giúp bạn',

    contactTitle: 'Liên hệ',
    contactEmail:
      '**Email:** [kidgate.support@gmail.com](mailto:kidgate.support@gmail.com)',
    contactResponse: '**Thời gian phản hồi:** trong vòng 24 giờ (Thứ Hai–Thứ Sáu)',
    contactNote:
      'Khi liên hệ, vui lòng gửi kèm địa chỉ email của tài khoản phụ huynh KidGate và mô tả ngắn về vấn đề để chúng tôi hỗ trợ nhanh hơn.',

    startTitle: 'Bắt đầu',
    start1:
      '**1. Thiết lập thiết bị phụ huynh.** Cài KidGate, mở ứng dụng và chọn *Đây là thiết bị của phụ huynh*. Đăng nhập bằng Google, Apple hoặc email, rồi đặt tên gia đình.',
    start2:
      '**2. Đặt mã PIN phụ huynh.** Vào *Cài đặt → Bảo mật* và đặt mã PIN phụ huynh 6 chữ số. Bạn cần mã này để đổi các thiết lập nhạy cảm và chọn ứng dụng bị chặn trên thiết bị của con. Đừng chia sẻ mã với con.',
    start3:
      '**3. Kết nối thiết bị của con.** Cài KidGate trên thiết bị của con và chọn *Đây là thiết bị của con*. Trên thiết bị phụ huynh, mở *Gia đình → + → Kết nối thiết bị của con*, rồi quét mã QR hiện trên thiết bị của con (hoặc nhập mã 6 ký tự). Xác nhận kết nối trên thiết bị của con.',
    start4:
      '**4. Cấp quyền trên thiết bị của con.** Mở màn hình *Trạng thái* trên thiết bị của con và cho phép mọi quyền KidGate yêu cầu — trên Android: thông báo, Truy cập sử dụng, Hiển thị trên ứng dụng khác, Trợ năng, và pin không giới hạn; trên iOS: *Cho phép sử dụng ứng dụng & trang web* (Screen Time). Các nút điều khiển sẽ chưa chạy đủ cho tới khi các quyền này được bật.',
    start5:
      '**5. Cấu hình điều khiển.** Từ thiết bị phụ huynh, mở thẻ thiết bị của con và đặt Giới hạn ngày, Giờ bị chặn, Ứng dụng bị chặn, Lọc web và các tính năng vị trí.',
    startNote:
      'Ứng dụng cũng có hướng dẫn từng bước ngay bên trong: *Cài đặt → Hướng dẫn sử dụng*, nói chi tiết về kết nối thiết bị, quyền, điều khiển hằng ngày và các tính năng an toàn.',

    faqTitle: 'Câu hỏi thường gặp',

    faq1Q: 'Tôi quản lý gia đình từ máy tính được không?',
    faq1A:
      'Được. Mở [bảng điều khiển web](/dashboard) và đăng nhập bằng đúng tài khoản bạn dùng trong ứng dụng — Google, Apple, hoặc email và mật khẩu. Nó hiển thị cùng một gia đình, thiết bị, báo cáo và thiết lập. Việc tạo tài khoản và kết nối thiết bị vẫn làm trong ứng dụng di động.',

    faq2Q: 'Kết nối thiết bị phụ huynh với thiết bị của con thế nào?',
    faq2A:
      'Trên thiết bị của con, mở KidGate và chọn *Đây là thiết bị của con* — một mã QR và mã 6 ký tự sẽ hiện ra. Trên thiết bị phụ huynh, mở *Gia đình → + → Kết nối thiết bị của con* rồi quét mã QR (khuyến nghị) hoặc nhập mã thủ công. Sau đó xác nhận tên phụ huynh trên thiết bị của con. Mã sẽ hết hạn — nếu kết nối không thành công, hãy chạm *Mã mới* trên thiết bị của con và thử lại.',

    faq3Q: 'Hai phụ huynh cùng quản lý một gia đình được không?',
    faq3A:
      'Được. Trên thiết bị của chủ gia đình, mở *Gia đình → + → Thêm thiết bị phụ huynh khác* và chia sẻ mã QR hoặc mã mời. Phụ huynh kia cài KidGate, đăng nhập với vai trò phụ huynh, rồi chọn *Gia đình → + → Tham gia gia đình*. Chủ gia đình sau đó duyệt yêu cầu. Một thuê bao dùng cho cả nhà; chỉ chủ gia đình trả tiền.',

    faq4Q: 'Bản dùng thử miễn phí hoạt động thế nào?',
    faq4A:
      'Bản dùng thử bắt đầu khi thiết bị phụ huynh và thiết bị con đầu tiên được kết nối, và cho dùng đủ mọi tính năng. Gỡ một thiết bị của con không làm bản dùng thử chạy lại. Khi hết hạn, hãy đăng ký Premium để tiếp tục dùng KidGate.',

    faq5Q: 'Hủy thuê bao thế nào?',
    faq5A:
      'Thuê bao được tính phí qua App Store hoặc Google Play, không phải trực tiếp qua KidGate. Trên iOS: *Cài đặt → tên bạn → Thuê bao*. Trên Android: *Google Play → biểu tượng hồ sơ → Thanh toán & thuê bao → Thuê bao*. Thuê bao tự gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc.',

    faq6Q: 'Khôi phục giao dịch mua thế nào?',
    faq6A:
      'Trên thiết bị phụ huynh, mở màn hình *Gói dịch vụ* và chạm *Khôi phục giao dịch*. Hãy chắc chắn bạn đang đăng nhập bằng đúng tài khoản cửa hàng ứng dụng đã dùng khi mua. Lưu ý chỉ chủ gia đình mới đăng ký hoặc khôi phục giao dịch được.',

    faq7Q: 'Vì sao dữ liệu thời gian màn hình không hiện ra?',
    faq7A:
      'Dữ liệu sử dụng đến từ thiết bị của con. Hãy kiểm tra thiết bị của con có trực tuyến không, rồi mở KidGate trên máy đó và xem màn hình *Trạng thái* — mọi dòng quyền phải hiện là đã cho phép (trên Android, cần Truy cập sử dụng để theo dõi thời gian màn hình). Báo cáo có thể mất vài phút để đồng bộ.',

    faq8Q: 'Vì sao khóa máy hoặc Giờ bị chặn không hoạt động?',
    faq8A:
      'Trên Android, khóa máy cần bật *Hiển thị trên ứng dụng khác* và trình trợ giúp *Trợ năng*, cùng với pin không giới hạn. Trên Xiaomi, Samsung, Oppo, Vivo và các máy tương tự, hãy cho phép tự khởi động và gỡ KidGate khỏi mọi danh sách "ứng dụng ngủ" (xem *Trạng thái → Giữ KidGate chạy* trên thiết bị của con). Trên iOS, việc khóa phụ thuộc vào quyền Screen Time. Nếu một quyền bị tắt sau đó, bạn sẽ nhận Cảnh báo bảo vệ trên thiết bị phụ huynh.',

    faq9Q: 'Chặn ứng dụng cụ thể thế nào?',
    faq9A:
      'Việc chọn ứng dụng diễn ra trên thiết bị của con: mở *KidGate → Cài đặt*, nhập mã PIN phụ huynh, chọn *Chọn ứng dụng để chặn*, rồi lưu. Sau đó, trên thiết bị phụ huynh, mở màn hình *Ứng dụng bị chặn* của thiết bị và bật *Bật chặn ứng dụng*. Trên iOS, Apple có thể ẩn tên ứng dụng chính xác khỏi thiết bị phụ huynh — đó là giới hạn của nền tảng.',

    faq10Q: 'Vì sao vị trí của con không cập nhật?',
    faq10A:
      'Vị trí phải được cho phép với KidGate trên thiết bị của con, và máy cần có kết nối mạng. Mở màn hình *Vị trí* của thiết bị trên máy phụ huynh và kéo xuống để làm mới. Chế độ tiết kiệm pin có thể làm chậm cập nhật, và GPS trong nhà có thể kém chính xác hơn.',

    faq11Q: 'Gỡ KidGate khỏi thiết bị của con thế nào?',
    faq11A:
      'Hãy xóa thiết bị khỏi ứng dụng phụ huynh trước (mở thiết bị trong *Gia đình* và chọn xóa), rồi gỡ ứng dụng trên thiết bị của con.',

    faq12Q: 'Xóa tài khoản và dữ liệu thế nào?',
    faq12A:
      'Trong ứng dụng phụ huynh, vào *Cài đặt → Tài khoản → Xóa tài khoản*. Thao tác này xóa vĩnh viễn tài khoản gia đình và toàn bộ dữ liệu — thiết bị, hoạt động, lịch sử vị trí và ảnh SOS — cho mọi phụ huynh và con. Xem trang [Xóa tài khoản & dữ liệu](/delete-account) để biết mọi lựa chọn, kể cả xóa khi không còn cài ứng dụng.',

    legalTitle: 'Pháp lý',
    legalDeletion: 'Xóa tài khoản & dữ liệu',
  },
}
