import { useEffect, useState } from 'react';

/**
 * English and Vietnamese, for the operator console alone.
 *
 * ## Why this is not `@kidgate/i18n`
 *
 * Four reasons, and each one on its own would be enough:
 *
 * - **This app has no `@kidgate/*` dependency**, and `apps/admin/CLAUDE.md`
 *   rule 2b calls adding the first one "a decision, not a convenience". Copy
 *   that is read by one person is the weakest case that decision could be made
 *   on.
 * - **The shared packs are fourteen locales with a parity test.** An
 *   `admin.*` namespace there would demand twelve translations nobody will
 *   ever read, or a hole in `webLocaleParity.test.ts`. Two locales is the
 *   whole requirement here.
 * - **`scripts/sync-admin-repo.mjs` mirrors `apps/admin` and nothing else**,
 *   precisely so the operator tool can be pushed to its deploy repo "without
 *   walking 1000 files of `packages/i18n`". An import from there breaks that
 *   path.
 * - `scripts/check-i18n-missing-keys.mjs` reads `.ts`/`.tsx` only, so keys
 *   here are outside `yarn i18n:missing` either way. This file being the only
 *   place a key can be spelled is what replaces that check.
 *
 * ## Shape
 *
 * A module-level current language with a listener set, the same pattern
 * `useRollup.js` already uses, so the switch reaches every mounted component
 * and non-React callers (`api.js`, `ErrorBoundary`) can read `t` directly.
 * Nothing here is async: both packs are in this file, so a language change
 * paints in the same frame.
 */

const STORAGE_KEY = 'kidgate.operator.language';

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'vi', name: 'Tiếng Việt' },
];

/** For `Intl` — `toLocaleString` on a bare number follows the browser, not us. */
const LOCALE_TAGS = { en: 'en-US', vi: 'vi-VN' };

const DEFAULT_LANGUAGE = 'en';

const en = {
  // ---------------------------------------------------------------- common
  'common.loading': 'Loading…',
  'common.refresh': 'Refresh',
  'common.signOut': 'Sign out',
  'common.tryAgain': 'Try again',
  'common.checkingAccess': 'Checking access…',
  'common.language': 'Language',
  'common.unknown': 'unknown',
  'common.none': 'none',
  'common.noData': 'No data',

  // ------------------------------------------------------------------ auth
  'auth.title': 'KidGate operator',
  'auth.subtitle': 'Everything you open here is logged.',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.signingIn': 'Signing in…',
  'auth.signIn': 'Sign in',
  'auth.wrongCredentials': 'Wrong email or password.',
  'auth.couldNotConfirm': 'Could not confirm access',
  'auth.notOperator': 'Not an operator account',
  'auth.claimUnreadable': 'The operator claim could not be read for ',
  'auth.claimAbsent': 'This account does not hold the operator claim: ',

  // ------------------------------------------------------------------- nav
  'nav.overview': 'Overview',
  'nav.report': 'Report',
  'nav.fleet': 'Fleet',
  'nav.support': 'Support queue',
  'nav.lookup': 'Family lookup',
  'nav.consoleName': 'Operator console',
  'nav.environment': 'Production · kidgate',

  // -------------------------------------------------------------- overview
  'overview.waitingForYou': 'Waiting for you',
  'overview.pendingPairingCodes': 'Pending pairing codes',
  'overview.supportReports': 'Support reports',

  // ------------------------------------------------------------------ time
  'time.justNow': 'just now',
  'time.hoursAgo': '{count}h ago',
  'time.daysAgo': '{count}d ago',

  // ---------------------------------------------------------------- lookup
  'lookup.uid': 'Family owner uid',
  'lookup.reason': 'Reason',
  'lookup.reasonRemaining_one':
    '{count} more character — stored in the audit log beside your name and the time.',
  'lookup.reasonRemaining_other':
    '{count} more characters — stored in the audit log beside your name and the time.',
  'lookup.reasonStored': 'Stored in the audit log beside your name and the time.',
  'lookup.lookingUp': 'Looking up…',
  'lookup.lookUp': 'Look up',

  // ---------------------------------------------------------------- family
  'family.plan': 'Plan',
  'family.noPlan': 'none',
  'family.subscription': 'subscription {status}',
  'family.neverPurchased': 'never purchased',
  'family.trial': 'Trial',
  'family.trialNotStarted': 'not started',
  'family.trialStarted': 'started {date}',
  'family.children': 'Children',
  'family.deviceSplit': '{child} child · {parent} parent devices',
  'family.signedUp': 'Signed up',
  'family.noEmail': 'no email',
  'family.firstPaid': 'First paid',
  'family.neverPaid': 'never',
  'family.daysAfterSignup': '{count} days after signup',
  'family.noSignupDate': 'no signup date to measure from',
  'family.paidBeforeRecorded': 'paid before this was recorded',
  'family.deletionState': 'Account deletion {status}',
  'family.purgeAfter': 'Purge after {date} — ',
  'family.purgeBy': ' carries it out for real.',
  'family.noName': 'no family name',
  'family.pinSet': 'parent PIN set',
  'family.pinNotSet': 'parent PIN not set',
  'family.aiConsentNeverAsked': 'AI message consent never asked',
  'family.aiConsentOn': 'AI message consent on',
  'family.aiConsentOff': 'AI message consent off',
  'family.uid': 'uid {uid}',
  'family.noDevices': 'No devices.',
  'family.colDevice': 'Device',
  'family.colRole': 'Role',
  'family.colPlatform': 'Platform',
  'family.colOs': 'OS',
  'family.colApp': 'App',
  'family.colBuild': 'Build',
  'family.colOta': 'OTA',
  'family.colLang': 'Lang',
  'family.colLastSeen': 'Last seen',
  'family.colDenied': 'Denied',
  'family.deniedNone': 'none',
  'family.noProbe': 'no probe',

  // ----------------------------------------------------------------- crash
  'crash.title': 'This screen crashed',
  'crash.body':
    'The rest of the console still works — pick another page in the sidebar. Full stack is in the browser console.',
  'crash.retry': 'Try rendering again',

  // ------------------------------------------------------------------- api
  'api.notSignedIn': 'Not signed in.',
  'api.requestFailed': 'Request failed ({status})',
  'api.unreachable':
    'Could not reach {path}. Either it is not deployed, or its Cloud Run service is missing the allUsers invoker binding (a CORS preflight sends no Authorization header, so IAM rejects it before the handler runs). Check: gcloud run services get-iam-policy {service} --region asia-southeast1 --project kidgate',

  // ----------------------------------------------------------------- fleet
  'fleet.title': 'Fleet',
  'fleet.asOf': 'As of {date}, not a range',
  'fleet.noRollup':
    'No fleet data in the latest rollup row. Deploy {job} and run it once — this page arrives with the next row.',
  'fleet.childDevices': 'Child devices',
  'fleet.seenThisWeek': 'Seen this week',
  'fleet.degraded': 'Protection degraded',
  'fleet.pushTokenDead': 'Dead push token',
  'fleet.unassigned': 'Unassigned to a child',
  'fleet.multiProfile_one': '{count} device stuck behind a second OS profile',
  'fleet.multiProfile_other': '{count} devices stuck behind a second OS profile',
  'fleet.multiProfileDetail':
    'A permission reads granted in Settings while the app sees nothing. The family cannot diagnose this and the app cannot fix it — the only cure is removing the second install. ',
  'fleet.multiProfileRef': ', K1/K2.',
  'fleet.platform': 'Platform',
  'fleet.platformSub': 'Child devices, by the OS they run',
  'fleet.formFactor': 'Form factor',
  'fleet.formFactorSub': 'Absent on devices that predate the field',
  'fleet.lastSeen': 'Last seen',
  'fleet.lastSeenSub':
    'Over a month is the closest signal to an uninstall the product has',
  'fleet.appVersion': 'App version',
  'fleet.appVersionSub': 'The name a person reads — `1.0.0`',
  'fleet.appBuild': 'Build number',
  'fleet.appBuildSub':
    'A string, not a number — Windows has none, so the field could not be numeric',
  'fleet.ota': 'OTA bundle',
  'fleet.otaSubBefore': 'Compare against ',
  'fleet.otaSubAfter':
    '. Unknown is desktop, TV and the extension, which have no OTA channel — not "behind"',
  'fleet.osVersion': 'OS version',
  'fleet.osVersionSub': 'Decides what a build may drop support for',
  'fleet.locale': 'Device language',
  'fleet.localeSub': 'Which of the 14 locale packs earn their keep',
  'fleet.country': 'Device country',
  'fleet.countrySubBefore':
    'Families, not devices. Countries with fewer than five fold into ',
  'fleet.countrySubAfter': ' — a bucket of one names that family',
  'fleet.countryEmpty': 'No device has reported a country yet',
  'fleet.appBlock': 'App blocking strength',
  'fleet.appBlockSub':
    'Strong is OS-enforced and the child cannot lift it; best-effort is a userspace process a determined teenager can kill. ',
  'fleet.noProbeCount_one': '{count} device published no probe — unknown, not "cannot"',
  'fleet.noProbeCount_other':
    '{count} devices published no probe — unknown, not "cannot"',
  'fleet.fromProbe': 'From the capability probe each device publishes',
  'fleet.webFilter': 'Web filter mechanism',
  'fleet.webFilterSub': 'VPN, content filter, extension or DNS',
  'fleet.noProbePublished': 'No device has published a probe',
  'fleet.permissionStatus': 'Permission status',
  'fleet.permissionSub':
    'Only devices that reported each permission are counted — one the device never mentioned is unknown, not denied.',
  'fleet.noProtectionReported': 'No device has reported a protection status.',
  'fleet.colPermission': 'Permission',
  'fleet.colGranted': 'Granted',
  'fleet.colDenied': 'Denied',
  'fleet.colNotAsked': 'Not asked',
  'fleet.colUnavailable': 'Unavailable',
  'fleet.colReportedBy': 'Reported by',

  'active.hour': 'Within the hour',
  'active.day': 'Within a day',
  'active.week': 'Within a week',
  'active.month': 'Within a month',
  'active.stale': 'Over a month',

  'formFactor.phone': 'Phone',
  'formFactor.tablet': 'Tablet',
  'formFactor.laptop': 'Laptop',
  'formFactor.desktop': 'Desktop',
  'formFactor.tv': 'TV',
  'formFactor.unknown': 'Unknown',

  'appBlock.false': 'Cannot block',
  'appBlock.strong': 'Strong',
  'appBlock.bestEffort': 'Best-effort',
  'appBlock.unknown': 'No probe yet',

  'webFilter.false': 'Cannot filter',
  'webFilter.vpn': 'VPN',
  'webFilter.contentFilter': 'Content filter',
  'webFilter.extension': 'Browser extension',
  'webFilter.dns': 'Private DNS',
  'webFilter.unknown': 'No probe yet',

  'value.unknown': 'Unknown',
  'value.noOtaChannel': 'No OTA channel',

  'permission.screenTime': 'Screen time',
  'permission.accessibility': 'Accessibility',
  'permission.overlay': 'Overlay',
  'permission.location': 'Location',
  'permission.notifications': 'Notifications',
  'permission.batteryOptimization': 'Battery exemption',

  // The device's own language, named in the language on screen.
  'lang.en': 'English',
  'lang.vi': 'Vietnamese',
  'lang.es': 'Spanish',
  'lang.pt': 'Portuguese',
  'lang.de': 'German',
  'lang.fr': 'French',
  'lang.ja': 'Japanese',
  'lang.ko': 'Korean',
  'lang.ar': 'Arabic',
  'lang.id': 'Indonesian',
  'lang.it': 'Italian',
  'lang.tr': 'Turkish',
  'lang.hi': 'Hindi',
  'lang.ru': 'Russian',
  'lang.unknown': 'Unknown',

  // ---------------------------------------------------------------- report
  'report.title': 'Report',
  'report.rangeDays': '{count}d',
  'report.dayCount': '{count}d',
  'report.noData': 'No data',
  'report.noDataDetail':
    'No rollup rows in this range. Deploy operatorMetricsDaily, or run scripts/run-operator-metrics.js --write.',
  'report.healthy': 'Rollup healthy',
  'report.healthyDetail': 'Latest row {date}, written {writtenAt}.',
  'report.behind': 'Rollup {count} days behind',
  'report.behindDetail':
    'Latest row {date}. The nightly job has not written since — every number below is stale, not quiet.',
  'report.missingDays': '{missing} of {total} days have no row',
  'report.families': 'Families',
  'report.childDevices': 'Child devices',
  'report.parentDevices': 'Parent devices',
  'report.planMix': 'Plan mix',
  'report.planPremium': 'Premium',
  'report.planFree': 'Free',
  'report.planMissing': 'Plan missing',
  'report.inTrial': 'In trial',
  'report.timeToPurchase': 'Time to purchase',
  'report.timeToPurchaseSub':
    'Every family that has ever paid, as of {date} — not a range',
  'report.familiesEverPaid': 'Families ever paid',
  'report.medianSignup': 'Median, signup → paid',
  'report.medianTrial': 'Median, trial → paid',
  'report.conversionRate': 'Conversion of all families',
  'report.fewPayers_one': '{count} paying family',
  'report.fewPayers_other': '{count} paying families',
  'report.fewPayersDetail':
    'A median over this few is one family’s purchase, not a trend. Read the bars as anecdotes until the count reaches double figures.',
  'report.fromSignup': 'From signup',
  'report.fromSignupSub':
    'Days between the account being created and its first payment',
  'report.fromSignupUnknown':
    'no createdAt on the family — a signup that predates the field',
  'report.fromTrial': 'From trial start',
  'report.fromTrialSub':
    'Days between the first parent + child device pairing and the first payment',
  'report.fromTrialUnknown':
    'never started a trial clock, or paired before the field existed',
  'report.noConversion': 'No family has converted with this measurable yet.',
  'report.stats': 'n = {n} · mean {mean} · p25 {p25} · p75 {p75}',
  'report.statsUnknown': ' · {count} not measurable ({reason})',
  'report.statsInvalid':
    ' · {count} dated before the start — clock skew or a wrong backfill guess',
  'report.dailyActivity': 'Daily activity',
  'report.colMetric': 'Metric',
  'report.colLatest': 'Latest',
  'report.colWindow': 'Last {count} days',
  'report.colTotal': 'Total',
  'report.colDate': 'Date',
  'report.hideRaw': '▾ Hide raw daily values',
  'report.showRaw': '▸ Show raw daily values',

  'metric.newFamilies': 'New families',
  'metric.conversions': 'First purchases',
  'metric.activities': 'Activities, all types',
  'metric.tamper': 'Tamper',
  'metric.app_blocked': 'App blocked',
  'metric.message_alert': 'Message alerts',
  'metric.message_checked': 'Message cleared by AI',
  'metric.emergency': 'Emergency',
  'metric.sosAlerts': 'SOS alerts',
  'metric.safetyCheckIns': 'Safety check-ins',
  'metric.timeRequests': 'Time requests',
  'metric.siteRequests': 'Site requests',
  'metric.rewardTasksResolved': 'Reward tasks resolved',
  'metric.reportingDeviceDays': 'Reporting device-days',
  'metric.screenMinutes': 'Screen minutes',
  'metric.bonusMinutes': 'Bonus minutes',
  'metric.webVisits': 'Web visits',
  'metric.webBlockedVisits': 'Web visits blocked',

  'bucket.d0': 'Same day',
  'bucket.d1': 'Next day',
  'bucket.d2_3': '2–3 days',
  'bucket.d4_7': '4–7 days',
  'bucket.d8_14': '8–14 days',
  'bucket.d15_30': '15–30 days',
  'bucket.d31_60': '31–60 days',
  'bucket.d61_plus': '61+ days',

  // Footnotes, split where markup interrupts the sentence rather than carrying
  // markup inside a translated string.
  'footnote.premiumA': ' Premium only. ',
  'footnote.premiumB': ' writes a ',
  'footnote.premiumC':
    ' document only for a family with premium access, so devices belonging to free families are absent from these three rows while being perfectly active. Read them as usage ',
  'footnote.premiumD': 'among families entitled to usage reporting',
  'footnote.premiumE': ', never as a device-active count.',
  'footnote.trialA':
    ' overlaps the plan counts rather than adding to them — trial is not a ',
  'footnote.trialB': ', it is ',
  'footnote.trialC':
    ' still inside the trial length, and a family in one usually carries ',
  'footnote.trialD': '. ',
  'footnote.trialE':
    ' should stay at zero; a number that climbs is a signup path that stopped writing the field.',
  'footnote.firstA': ' counts families paying for the ',
  'footnote.firstB': 'first time ever',
  'footnote.firstC': ', from ',
  'footnote.firstD':
    ', which is written once and never rewritten. A renewal, a restore and a re-subscribe after a lapse are all invisible here — deliberately, since this is the number the ',
  'footnote.firstE':
    ' section is built on. Families that converted before the field shipped (2026-09-05) count only if the backfill could date them.',
  'footnote.gap':
    'A dash is a day with no row, and the trend line breaks across it. A zero is a day the job ran and counted nothing.',

  // --------------------------------------------------------------- support
  'support.title': 'Support queue',
  'support.filterOpen': 'Open',
  'support.filterPending': 'Pending',
  'support.filterInReview': 'In review',
  'support.filterResolved': 'Resolved',
  'support.filterAll': 'All',
  'support.statusPending': 'Pending',
  'support.statusInReview': 'In review',
  'support.statusResolved': 'Resolved',
  'support.queueCounts': '{pending} pending, {inReview} in review',
  'support.queueDetail': 'A reply here is the only operator action a family ever sees.',
  'support.truncated': 'Showing the newest {count} — older reports not listed',
  'support.emptyFilter': 'Nothing in this filter.',
  'support.shotCount_one': '{count} shot · ',
  'support.shotCount_other': '{count} shots · ',
  'support.replyLabel': 'Reply to the family',
  'support.replyHint':
    'The parent reads this in their own app, beside the report they filed.',
  'support.saving': 'Saving…',
  'support.sendToFamily': 'Send to family',
  'support.updateStatusOnly': 'Update status only',
  'support.shotNumber': 'Screenshot {index}',
  'support.shotPrefix': 'Screenshot {index}: ',
  'support.shotEmptyKnown':
    'Uploaded empty — 0 bytes stored, though the report claims {size}. The app’s upload failed.',
  'support.shotEmptyUnknown':
    'Uploaded empty — 0 bytes stored, though the report claims a size. The app’s upload failed.',
  'support.shotMissing': 'The stored file is gone.',
  'support.shotNoPath': 'Screenshot {index} has no stored path',
  'support.account': 'Account',
  'support.noFamilyName': 'no family name',
  'support.noEmail': 'no email',
  'support.plan': 'Plan',
  'support.trialFrom': 'trial from {date}',
  'support.noTrial': 'no trial started',
  'support.customerSince': 'Customer since',
  'support.deviceSplit': '{child} child · {parent} parent devices',
  'support.settings': 'Settings',
  'support.pinSet': 'PIN set',
  'support.pinNotSet': 'PIN not set',
  'support.aiConsentNeverAsked': 'AI consent never asked',
  'support.aiConsentOn': 'AI consent on',
  'support.aiConsentOff': 'AI consent off',
  'support.accountGone': 'Account no longer exists',
  'support.accountGoneDetailBefore':
    'The report outlived the family document — deleted, or purged by ',
  'support.accountGoneDetailAfter': '.',
  'support.unknownPlatform': 'unknown platform',
  'support.appVersion': 'app {version}',
  'support.langKnown': 'lang {code}',
  'support.langUnknown': 'lang unknown',
  'support.unnamedDevice': 'unnamed device',
  'support.filed': 'filed {when}',
  'support.uid': 'uid {uid}',
  'support.sentAt': 'Sent {when}',
};

const vi = {
  // ---------------------------------------------------------------- common
  'common.loading': 'Đang tải…',
  'common.refresh': 'Làm mới',
  'common.signOut': 'Đăng xuất',
  'common.tryAgain': 'Thử lại',
  'common.checkingAccess': 'Đang kiểm tra quyền truy cập…',
  'common.language': 'Ngôn ngữ',
  'common.unknown': 'không rõ',
  'common.none': 'không có',
  'common.noData': 'Không có dữ liệu',

  // ------------------------------------------------------------------ auth
  'auth.title': 'KidGate operator',
  'auth.subtitle': 'Mọi thứ bạn mở ở đây đều được ghi vào nhật ký.',
  'auth.email': 'Email',
  'auth.password': 'Mật khẩu',
  'auth.signingIn': 'Đang đăng nhập…',
  'auth.signIn': 'Đăng nhập',
  'auth.wrongCredentials': 'Email hoặc mật khẩu không đúng.',
  'auth.couldNotConfirm': 'Không xác nhận được quyền truy cập',
  'auth.notOperator': 'Không phải tài khoản operator',
  'auth.claimUnreadable': 'Không đọc được operator claim của ',
  'auth.claimAbsent': 'Tài khoản này không có operator claim: ',

  // ------------------------------------------------------------------- nav
  'nav.overview': 'Tổng quan',
  'nav.report': 'Báo cáo',
  'nav.fleet': 'Thiết bị',
  'nav.support': 'Hàng đợi hỗ trợ',
  'nav.lookup': 'Tra cứu gia đình',
  'nav.consoleName': 'Bảng điều hành operator',
  'nav.environment': 'Production · kidgate',

  // -------------------------------------------------------------- overview
  'overview.waitingForYou': 'Đang chờ bạn',
  'overview.pendingPairingCodes': 'Mã ghép nối đang chờ',
  'overview.supportReports': 'Báo cáo hỗ trợ',

  // ------------------------------------------------------------------ time
  'time.justNow': 'vừa xong',
  'time.hoursAgo': '{count} giờ trước',
  'time.daysAgo': '{count} ngày trước',

  // ---------------------------------------------------------------- lookup
  'lookup.uid': 'UID chủ gia đình',
  'lookup.reason': 'Lý do',
  'lookup.reasonRemaining':
    'Còn {count} ký tự nữa — sẽ lưu vào nhật ký kiểm toán cùng tên bạn và thời điểm.',
  'lookup.reasonStored': 'Sẽ lưu vào nhật ký kiểm toán cùng tên bạn và thời điểm.',
  'lookup.lookingUp': 'Đang tra cứu…',
  'lookup.lookUp': 'Tra cứu',

  // ---------------------------------------------------------------- family
  'family.plan': 'Gói',
  'family.noPlan': 'không có',
  'family.subscription': 'đăng ký {status}',
  'family.neverPurchased': 'chưa từng mua',
  'family.trial': 'Dùng thử',
  'family.trialNotStarted': 'chưa bắt đầu',
  'family.trialStarted': 'bắt đầu {date}',
  'family.children': 'Số trẻ',
  'family.deviceSplit': '{child} thiết bị trẻ · {parent} thiết bị phụ huynh',
  'family.signedUp': 'Ngày đăng ký',
  'family.noEmail': 'không có email',
  'family.firstPaid': 'Lần trả tiền đầu',
  'family.neverPaid': 'chưa bao giờ',
  'family.daysAfterSignup': '{count} ngày sau khi đăng ký',
  'family.noSignupDate': 'không có ngày đăng ký để tính',
  'family.paidBeforeRecorded': 'đã trả tiền trước khi trường này được ghi',
  'family.deletionState': 'Xoá tài khoản: {status}',
  'family.purgeAfter': 'Xoá sạch sau {date} — ',
  'family.purgeBy': ' thực hiện việc này.',
  'family.noName': 'chưa đặt tên gia đình',
  'family.pinSet': 'PIN phụ huynh đã đặt',
  'family.pinNotSet': 'PIN phụ huynh chưa đặt',
  'family.aiConsentNeverAsked': 'Chưa hỏi đồng ý AI đọc tin nhắn',
  'family.aiConsentOn': 'Đồng ý AI đọc tin nhắn: bật',
  'family.aiConsentOff': 'Đồng ý AI đọc tin nhắn: tắt',
  'family.uid': 'uid {uid}',
  'family.noDevices': 'Không có thiết bị.',
  'family.colDevice': 'Thiết bị',
  'family.colRole': 'Vai trò',
  'family.colPlatform': 'Nền tảng',
  'family.colOs': 'Hệ điều hành',
  'family.colApp': 'Ứng dụng',
  'family.colBuild': 'Bản dựng',
  'family.colOta': 'OTA',
  'family.colLang': 'Ngôn ngữ',
  'family.colLastSeen': 'Lần cuối online',
  'family.colDenied': 'Bị từ chối',
  'family.deniedNone': 'không có',
  'family.noProbe': 'chưa dò',

  // ----------------------------------------------------------------- crash
  'crash.title': 'Màn hình này gặp lỗi',
  'crash.body':
    'Phần còn lại của bảng điều hành vẫn chạy — chọn trang khác ở thanh bên. Stack đầy đủ nằm trong console của trình duyệt.',
  'crash.retry': 'Thử hiển thị lại',

  // ------------------------------------------------------------------- api
  'api.notSignedIn': 'Chưa đăng nhập.',
  'api.requestFailed': 'Yêu cầu thất bại ({status})',
  'api.unreachable':
    'Không gọi được {path}. Hoặc hàm chưa được deploy, hoặc dịch vụ Cloud Run của nó thiếu quyền invoker allUsers (CORS preflight không gửi header Authorization, nên IAM chặn trước khi handler chạy). Kiểm tra: gcloud run services get-iam-policy {service} --region asia-southeast1 --project kidgate',

  // ----------------------------------------------------------------- fleet
  'fleet.title': 'Thiết bị',
  'fleet.asOf': 'Tại thời điểm {date}, không phải một khoảng',
  'fleet.noRollup':
    'Dòng rollup mới nhất không có dữ liệu thiết bị. Deploy {job} và chạy một lần — trang này sẽ có dữ liệu từ dòng kế tiếp.',
  'fleet.childDevices': 'Thiết bị của trẻ',
  'fleet.seenThisWeek': 'Online trong tuần',
  'fleet.degraded': 'Bảo vệ bị suy giảm',
  'fleet.pushTokenDead': 'Token push đã chết',
  'fleet.unassigned': 'Chưa gán cho trẻ nào',
  'fleet.multiProfile': '{count} thiết bị kẹt sau một hồ sơ hệ điều hành thứ hai',
  'fleet.multiProfileDetail':
    'Quyền hiện là đã cấp trong Cài đặt nhưng ứng dụng không thấy gì. Gia đình không tự chẩn đoán được và ứng dụng không sửa được — cách duy nhất là gỡ bản cài thứ hai. ',
  'fleet.multiProfileRef': ', K1/K2.',
  'fleet.platform': 'Nền tảng',
  'fleet.platformSub': 'Thiết bị của trẻ, theo hệ điều hành đang chạy',
  'fleet.formFactor': 'Kiểu thiết bị',
  'fleet.formFactorSub': 'Trống trên thiết bị có trước khi trường này ra đời',
  'fleet.lastSeen': 'Lần cuối online',
  'fleet.lastSeenSub':
    'Quá một tháng là tín hiệu gần nhất với việc gỡ cài đặt mà sản phẩm có được',
  'fleet.appVersion': 'Phiên bản ứng dụng',
  'fleet.appVersionSub': 'Tên người dùng đọc được — `1.0.0`',
  'fleet.appBuild': 'Số bản dựng',
  'fleet.appBuildSub':
    'Là chuỗi, không phải số — Windows không có, nên trường này không thể là kiểu số',
  'fleet.ota': 'Gói OTA',
  'fleet.otaSubBefore': 'So sánh với ',
  'fleet.otaSubAfter':
    '. Không rõ là desktop, TV và tiện ích mở rộng — những nền tảng không có kênh OTA, chứ không phải "tụt hậu"',
  'fleet.osVersion': 'Phiên bản hệ điều hành',
  'fleet.osVersionSub': 'Quyết định bản dựng được phép bỏ hỗ trợ tới đâu',
  'fleet.locale': 'Ngôn ngữ thiết bị',
  'fleet.localeSub': 'Trong 14 gói ngôn ngữ, gói nào thực sự có người dùng',
  'fleet.country': 'Quốc gia thiết bị',
  'fleet.countrySubBefore':
    'Đếm gia đình, không phải thiết bị. Quốc gia có dưới năm gia đình gộp vào ',
  'fleet.countrySubAfter':
    ' — một nhóm chỉ có một gia đình là chỉ đích danh gia đình đó',
  'fleet.countryEmpty': 'Chưa thiết bị nào báo quốc gia',
  'fleet.appBlock': 'Mức chặn ứng dụng',
  'fleet.appBlockSub':
    'Mạnh là do hệ điều hành cưỡng chế, trẻ không gỡ được; nỗ lực tối đa là tiến trình ở tầng người dùng mà một thiếu niên quyết tâm có thể tắt. ',
  'fleet.noProbeCount':
    '{count} thiết bị chưa gửi kết quả dò — là không rõ, không phải "không làm được"',
  'fleet.fromProbe': 'Lấy từ kết quả dò năng lực mà mỗi thiết bị gửi lên',
  'fleet.webFilter': 'Cơ chế lọc web',
  'fleet.webFilterSub': 'VPN, bộ lọc nội dung, tiện ích mở rộng hoặc DNS',
  'fleet.noProbePublished': 'Chưa thiết bị nào gửi kết quả dò',
  'fleet.permissionStatus': 'Trạng thái quyền',
  'fleet.permissionSub':
    'Chỉ đếm thiết bị có báo cáo từng quyền — quyền thiết bị không nhắc tới là không rõ, không phải bị từ chối.',
  'fleet.noProtectionReported': 'Chưa thiết bị nào báo trạng thái bảo vệ.',
  'fleet.colPermission': 'Quyền',
  'fleet.colGranted': 'Đã cấp',
  'fleet.colDenied': 'Bị từ chối',
  'fleet.colNotAsked': 'Chưa hỏi',
  'fleet.colUnavailable': 'Không khả dụng',
  'fleet.colReportedBy': 'Số thiết bị báo cáo',

  'active.hour': 'Trong vòng một giờ',
  'active.day': 'Trong vòng một ngày',
  'active.week': 'Trong vòng một tuần',
  'active.month': 'Trong vòng một tháng',
  'active.stale': 'Quá một tháng',

  'formFactor.phone': 'Điện thoại',
  'formFactor.tablet': 'Máy tính bảng',
  'formFactor.laptop': 'Laptop',
  'formFactor.desktop': 'Máy để bàn',
  'formFactor.tv': 'TV',
  'formFactor.unknown': 'Không rõ',

  'appBlock.false': 'Không chặn được',
  'appBlock.strong': 'Mạnh',
  'appBlock.bestEffort': 'Nỗ lực tối đa',
  'appBlock.unknown': 'Chưa dò',

  'webFilter.false': 'Không lọc được',
  'webFilter.vpn': 'VPN',
  'webFilter.contentFilter': 'Bộ lọc nội dung',
  'webFilter.extension': 'Tiện ích trình duyệt',
  'webFilter.dns': 'DNS riêng',
  'webFilter.unknown': 'Chưa dò',

  'value.unknown': 'Không rõ',
  'value.noOtaChannel': 'Không có kênh OTA',

  'permission.screenTime': 'Thời gian sử dụng',
  'permission.accessibility': 'Trợ năng',
  'permission.overlay': 'Vẽ đè lên ứng dụng',
  'permission.location': 'Vị trí',
  'permission.notifications': 'Thông báo',
  'permission.batteryOptimization': 'Miễn tối ưu pin',

  'lang.en': 'Tiếng Anh',
  'lang.vi': 'Tiếng Việt',
  'lang.es': 'Tiếng Tây Ban Nha',
  'lang.pt': 'Tiếng Bồ Đào Nha',
  'lang.de': 'Tiếng Đức',
  'lang.fr': 'Tiếng Pháp',
  'lang.ja': 'Tiếng Nhật',
  'lang.ko': 'Tiếng Hàn',
  'lang.ar': 'Tiếng Ả Rập',
  'lang.id': 'Tiếng Indonesia',
  'lang.it': 'Tiếng Ý',
  'lang.tr': 'Tiếng Thổ Nhĩ Kỳ',
  'lang.hi': 'Tiếng Hindi',
  'lang.ru': 'Tiếng Nga',
  'lang.unknown': 'Không rõ',

  // ---------------------------------------------------------------- report
  'report.title': 'Báo cáo',
  'report.rangeDays': '{count} ngày',
  'report.dayCount': '{count} ngày',
  'report.noData': 'Không có dữ liệu',
  'report.noDataDetail':
    'Không có dòng rollup nào trong khoảng này. Deploy operatorMetricsDaily, hoặc chạy scripts/run-operator-metrics.js --write.',
  'report.healthy': 'Rollup bình thường',
  'report.healthyDetail': 'Dòng mới nhất {date}, ghi lúc {writtenAt}.',
  'report.behind': 'Rollup trễ {count} ngày',
  'report.behindDetail':
    'Dòng mới nhất {date}. Job hằng đêm chưa ghi thêm kể từ đó — mọi con số bên dưới là cũ, không phải là ngày yên ắng.',
  'report.missingDays': '{missing} trên {total} ngày không có dòng nào',
  'report.families': 'Gia đình',
  'report.childDevices': 'Thiết bị của trẻ',
  'report.parentDevices': 'Thiết bị phụ huynh',
  'report.planMix': 'Cơ cấu gói',
  'report.planPremium': 'Premium',
  'report.planFree': 'Miễn phí',
  'report.planMissing': 'Thiếu gói',
  'report.inTrial': 'Đang dùng thử',
  'report.timeToPurchase': 'Thời gian tới lúc mua',
  'report.timeToPurchaseSub':
    'Mọi gia đình đã từng trả tiền, tính tới {date} — không phải một khoảng',
  'report.familiesEverPaid': 'Gia đình đã từng trả tiền',
  'report.medianSignup': 'Trung vị, đăng ký → trả tiền',
  'report.medianTrial': 'Trung vị, dùng thử → trả tiền',
  'report.conversionRate': 'Tỷ lệ chuyển đổi trên tổng gia đình',
  'report.fewPayers': '{count} gia đình đang trả tiền',
  'report.fewPayersDetail':
    'Trung vị trên số ít như vậy là lần mua của một gia đình, không phải xu hướng. Hãy đọc các cột như giai thoại cho tới khi con số đạt hai chữ số.',
  'report.fromSignup': 'Từ lúc đăng ký',
  'report.fromSignupSub': 'Số ngày từ khi tạo tài khoản tới lần thanh toán đầu tiên',
  'report.fromSignupUnknown':
    'gia đình không có createdAt — đăng ký từ trước khi có trường này',
  'report.fromTrial': 'Từ lúc bắt đầu dùng thử',
  'report.fromTrialSub':
    'Số ngày từ lần ghép nối thiết bị phụ huynh + trẻ đầu tiên tới lần thanh toán đầu tiên',
  'report.fromTrialUnknown':
    'chưa từng bắt đầu đồng hồ dùng thử, hoặc ghép nối trước khi có trường này',
  'report.noConversion': 'Chưa gia đình nào chuyển đổi mà đo được theo cách này.',
  'report.stats': 'n = {n} · trung bình {mean} · p25 {p25} · p75 {p75}',
  'report.statsUnknown': ' · {count} không đo được ({reason})',
  'report.statsInvalid':
    ' · {count} có ngày trước mốc bắt đầu — lệch đồng hồ hoặc backfill đoán sai',
  'report.dailyActivity': 'Hoạt động hằng ngày',
  'report.colMetric': 'Chỉ số',
  'report.colLatest': 'Mới nhất',
  'report.colWindow': '{count} ngày qua',
  'report.colTotal': 'Tổng',
  'report.colDate': 'Ngày',
  'report.hideRaw': '▾ Ẩn giá trị thô theo ngày',
  'report.showRaw': '▸ Hiện giá trị thô theo ngày',

  'metric.newFamilies': 'Gia đình mới',
  'metric.conversions': 'Lần mua đầu tiên',
  'metric.activities': 'Hoạt động, mọi loại',
  'metric.tamper': 'Can thiệp',
  'metric.app_blocked': 'Ứng dụng bị chặn',
  'metric.message_alert': 'Cảnh báo tin nhắn',
  'metric.message_checked': 'Tin nhắn được AI xác nhận an toàn',
  'metric.emergency': 'Khẩn cấp',
  'metric.sosAlerts': 'Cảnh báo SOS',
  'metric.safetyCheckIns': 'Điểm danh an toàn',
  'metric.timeRequests': 'Yêu cầu thêm giờ',
  'metric.siteRequests': 'Yêu cầu mở trang web',
  'metric.rewardTasksResolved': 'Nhiệm vụ thưởng đã xử lý',
  'metric.reportingDeviceDays': 'Ngày-thiết bị có báo cáo',
  'metric.screenMinutes': 'Phút dùng màn hình',
  'metric.bonusMinutes': 'Phút thưởng',
  'metric.webVisits': 'Lượt truy cập web',
  'metric.webBlockedVisits': 'Lượt truy cập web bị chặn',

  'bucket.d0': 'Cùng ngày',
  'bucket.d1': 'Ngày hôm sau',
  'bucket.d2_3': '2–3 ngày',
  'bucket.d4_7': '4–7 ngày',
  'bucket.d8_14': '8–14 ngày',
  'bucket.d15_30': '15–30 ngày',
  'bucket.d31_60': '31–60 ngày',
  'bucket.d61_plus': 'Trên 61 ngày',

  'footnote.premiumA': ' Chỉ với gói premium. ',
  'footnote.premiumB': ' chỉ ghi tài liệu ',
  'footnote.premiumC':
    ' cho gia đình có quyền premium, nên thiết bị của gia đình miễn phí vắng mặt ở ba dòng này dù vẫn hoạt động bình thường. Hãy đọc chúng là mức sử dụng ',
  'footnote.premiumD': 'trong nhóm gia đình được hưởng báo cáo sử dụng',
  'footnote.premiumE': ', đừng bao giờ đọc là số thiết bị đang hoạt động.',
  'footnote.trialA':
    ' chồng lấn với các số đếm theo gói chứ không cộng thêm — dùng thử không phải một ',
  'footnote.trialB': ', mà là ',
  'footnote.trialC':
    ' vẫn còn trong thời hạn dùng thử, và gia đình đang dùng thử thường mang ',
  'footnote.trialD': '. ',
  'footnote.trialE':
    ' đáng lẽ luôn bằng không; con số tăng lên nghĩa là có một luồng đăng ký đã ngừng ghi trường này.',
  'footnote.firstA': ' đếm số gia đình trả tiền ',
  'footnote.firstB': 'lần đầu tiên trong đời',
  'footnote.firstC': ', lấy từ ',
  'footnote.firstD':
    ', trường được ghi một lần và không bao giờ ghi đè. Gia hạn, khôi phục và đăng ký lại sau khi hết hạn đều không hiện ở đây — cố ý như vậy, vì đây là con số mà mục ',
  'footnote.firstE':
    ' dựa vào. Gia đình chuyển đổi trước khi trường này ra đời (2026-09-05) chỉ được đếm nếu backfill xác định được ngày.',
  'footnote.gap':
    'Dấu gạch ngang là ngày không có dòng nào, và đường xu hướng đứt tại đó. Số không là ngày job có chạy và đếm được con số không.',

  // --------------------------------------------------------------- support
  'support.title': 'Hàng đợi hỗ trợ',
  'support.filterOpen': 'Đang mở',
  'support.filterPending': 'Chờ xử lý',
  'support.filterInReview': 'Đang xem xét',
  'support.filterResolved': 'Đã giải quyết',
  'support.filterAll': 'Tất cả',
  'support.statusPending': 'Chờ xử lý',
  'support.statusInReview': 'Đang xem xét',
  'support.statusResolved': 'Đã giải quyết',
  'support.queueCounts': '{pending} chờ xử lý, {inReview} đang xem xét',
  'support.queueDetail':
    'Trả lời ở đây là hành động operator duy nhất mà gia đình nhìn thấy được.',
  'support.truncated':
    'Đang hiện {count} báo cáo mới nhất — các báo cáo cũ hơn không được liệt kê',
  'support.emptyFilter': 'Không có gì trong bộ lọc này.',
  'support.shotCount': '{count} ảnh · ',
  'support.replyLabel': 'Trả lời gia đình',
  'support.replyHint':
    'Phụ huynh đọc nội dung này ngay trong ứng dụng của họ, bên cạnh báo cáo họ đã gửi.',
  'support.saving': 'Đang lưu…',
  'support.sendToFamily': 'Gửi cho gia đình',
  'support.updateStatusOnly': 'Chỉ cập nhật trạng thái',
  'support.shotNumber': 'Ảnh chụp màn hình {index}',
  'support.shotPrefix': 'Ảnh chụp màn hình {index}: ',
  'support.shotEmptyKnown':
    'Tải lên rỗng — lưu 0 byte, dù báo cáo khai {size}. Việc tải lên của ứng dụng đã thất bại.',
  'support.shotEmptyUnknown':
    'Tải lên rỗng — lưu 0 byte, dù báo cáo khai có kích thước. Việc tải lên của ứng dụng đã thất bại.',
  'support.shotMissing': 'Tệp đã lưu không còn nữa.',
  'support.shotNoPath': 'Ảnh chụp màn hình {index} không có đường dẫn lưu trữ',
  'support.account': 'Tài khoản',
  'support.noFamilyName': 'chưa đặt tên gia đình',
  'support.noEmail': 'không có email',
  'support.plan': 'Gói',
  'support.trialFrom': 'dùng thử từ {date}',
  'support.noTrial': 'chưa bắt đầu dùng thử',
  'support.customerSince': 'Khách hàng từ',
  'support.deviceSplit': '{child} thiết bị trẻ · {parent} thiết bị phụ huynh',
  'support.settings': 'Cài đặt',
  'support.pinSet': 'PIN đã đặt',
  'support.pinNotSet': 'PIN chưa đặt',
  'support.aiConsentNeverAsked': 'Chưa hỏi đồng ý AI',
  'support.aiConsentOn': 'Đồng ý AI: bật',
  'support.aiConsentOff': 'Đồng ý AI: tắt',
  'support.accountGone': 'Tài khoản không còn tồn tại',
  'support.accountGoneDetailBefore':
    'Báo cáo sống lâu hơn tài liệu gia đình — đã bị xoá, hoặc bị dọn bởi ',
  'support.accountGoneDetailAfter': '.',
  'support.unknownPlatform': 'nền tảng không rõ',
  'support.appVersion': 'ứng dụng {version}',
  'support.langKnown': 'ngôn ngữ {code}',
  'support.langUnknown': 'ngôn ngữ không rõ',
  'support.unnamedDevice': 'thiết bị chưa đặt tên',
  'support.filed': 'gửi lúc {when}',
  'support.uid': 'uid {uid}',
  'support.sentAt': 'Đã gửi {when}',
};

const PACKS = { en, vi };

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return PACKS[stored] ? stored : null;
  } catch {
    // Private window, blocked storage. Falling back to the browser is fine.
    return null;
  }
}

function readBrowserLanguage() {
  try {
    for (const tag of navigator.languages ?? [navigator.language]) {
      const code = String(tag).toLowerCase().split('-')[0];
      if (PACKS[code]) {
        return code;
      }
    }
  } catch {
    // No `navigator` (a test, a prerender).
  }
  return null;
}

let current = readStoredLanguage() ?? readBrowserLanguage() ?? DEFAULT_LANGUAGE;
const listeners = new Set();

function applyDocumentLanguage() {
  try {
    document.documentElement.lang = current;
  } catch {
    // No DOM. Nothing to keep in sync.
  }
}

applyDocumentLanguage();

export function getLanguage() {
  return current;
}

export function getLocaleTag() {
  return LOCALE_TAGS[current] ?? LOCALE_TAGS[DEFAULT_LANGUAGE];
}

export function setLanguage(code) {
  if (!PACKS[code] || code === current) {
    return;
  }
  current = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // The choice still holds for this tab; it just will not survive a reload.
  }
  applyDocumentLanguage();
  for (const listener of listeners) {
    listener(code);
  }
}

/**
 * `{name}` placeholders, and a `_one`/`_other` pair when a count decides the
 * wording.
 *
 * English defines both plural forms; Vietnamese defines the bare key, since the
 * noun does not inflect. The lookup tries the suffixed key first and falls
 * through to the bare one, so neither pack has to carry the other's shape.
 *
 * A key missing from the active pack falls back to English rather than
 * rendering blank, and to the key itself if it is missing there too — a raw
 * key on screen is a bug report, an empty span is a mystery.
 */
export function t(key, vars) {
  const pack = PACKS[current] ?? en;
  const count = vars?.count;
  const plural =
    typeof count === 'number' ? `${key}_${count === 1 ? 'one' : 'other'}` : null;

  // The active pack is exhausted — plural form *and* bare key — before English
  // is consulted at all. Trying `en[plural]` first would hand a Vietnamese
  // reader the English sentence for every counted string, since English is the
  // pack that carries the `_one`/`_other` pair.
  const template =
    (plural ? pack[plural] : undefined) ??
    pack[key] ??
    (plural ? en[plural] : undefined) ??
    en[key] ??
    key;

  if (!vars) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (whole, name) =>
    name in vars ? String(vars[name]) : whole,
  );
}

/** Thousands separators follow the language on screen, not the browser's. */
export function formatNumber(value) {
  return Number.isFinite(value) ? value.toLocaleString(getLocaleTag()) : '—';
}

/**
 * Re-render this component when the language changes.
 *
 * Returns `t` rather than exporting only the module function so a component
 * that translates is also a component that subscribes — forgetting the hook
 * and calling `t` directly leaves stale English on screen, and that failure is
 * invisible until someone switches language.
 */
export function useT() {
  const [language, setLanguageState] = useState(current);

  useEffect(() => {
    const listener = code => setLanguageState(code);
    listeners.add(listener);
    // A switch between this render and the subscription would be missed.
    if (current !== language) {
      setLanguageState(current);
    }
    return () => listeners.delete(listener);
  }, [language]);

  return { t, language, setLanguage, formatNumber, localeTag: getLocaleTag() };
}
