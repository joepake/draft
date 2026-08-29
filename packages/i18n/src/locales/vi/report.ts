export const report = {
  title: 'Báo cáo tuần',
  subtitle: 'Những gì KidGate ghi nhận trong tuần.',
  weekOf: 'Tuần {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Đã gửi Chủ nhật',
  triggerManual: 'Do bạn tạo',

  statScreenTime: 'Thời gian sử dụng',
  statDailyAverage: 'Trung bình mỗi ngày',
  statBlockedApps: 'Ứng dụng bị chặn',
  statBlockedWebVisits: 'Trang web bị lọc',

  trendUp: 'Nhiều hơn tuần trước {{value}}',
  trendDown: 'Ít hơn tuần trước {{value}}',
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
  findingLateNight: 'Có {{count}} đêm dùng máy sau 23h — hôm muộn nhất tới {{time}}.',
  findingNewTopApp: '{{app}} mới xuất hiện tuần này và đã chiếm {{duration}}.',
  findingAppSurge: '{{app}} tăng {{delta}} so với tuần trước — tổng {{duration}}.',
  findingLimitHit: 'Có {{count}} ngày chạm Giới hạn hằng ngày ({{limit}}).',
  findingBlockedApps: '{{count}} lần mở ứng dụng bị chặn, tuần trước là {{previous}}.',
  findingBlockedWeb: '{{count}} trang web bị lọc, tuần trước là {{previous}}.',
  findingQuietWeek:
    'Một tuần yên ắng — tổng cộng {{total}}, và không có gì cần bạn xử lý.',

  // Nửa tích cực của báo cáo. Mỗi câu nói việc đã xảy ra kèm con số đứng sau
  // nó, cùng giọng với các dòng trên — bạn phải nói lại được câu đó với con.
  // Không câu nào khen: `docs/COPY_STYLE.md` cấm nịnh ngang với cấm hù dọa.
  // Tên tính năng khớp `controls.dailyLimit` ('Giới hạn hằng ngày').
  findingLimitRespected: 'Giới hạn hằng ngày ({{limit}}) được giữ trọn {{count}} ngày.',
  findingLateNightGone:
    'Tuần này không có đêm nào dùng máy muộn, tuần trước có {{count}} đêm.',
  findingBlockedAppsDown:
    '{{count}} lần mở ứng dụng bị chặn, giảm từ {{previous}} tuần trước.',
  findingBlockedWebDown: '{{count}} trang web bị lọc, giảm từ {{previous}} tuần trước.',
  findingLearningTime: '{{duration}} ở ứng dụng học tập, phần lớn là {{app}}.',
  findingTasksDone: '{{count}} nhiệm vụ hoàn thành, nhận {{bonus}}.',
  findingAskedFirst: '{{count}} lần con gửi yêu cầu thay vì tự ý dùng thêm.',
  findingCheckedIn: 'Trả lời đủ {{asked}} lần Báo an toàn.',

  narrativeTitle: 'Tóm lại',
  // Tên tính năng phải khớp `blockedHours.title` ('Giờ khóa thiết bị') và
  // `controls.dailyLimit` ('Giới hạn hằng ngày') — xem chú thích bản `en`.
  actionTitle: 'Một việc bạn có thể làm',
  actionDailyLimit: 'Đặt Giới hạn hằng ngày {{duration}}',
  actionDailyLimitWhy: 'Đó là mức trung bình mỗi ngày của tuần trước.',
  actionBlockedHours: 'Đặt Giờ khóa thiết bị',
  actionBlockedHoursLateNight: 'Khóa thiết bị trong khung giờ khuya',
  actionOnDevice: 'Trên {{device}}',
  finePrint:
    'Số liệu tính từ {{from}} đến {{to}}, gộp mọi thiết bị trong gia đình. Thời gian sử dụng là những gì thiết bị báo về; những phút không đo được không nằm trong tổng nào cả.',

  generate: 'Viết báo cáo tuần này',
  generating: 'Đang viết…',
  share: 'Chia sẻ',
  copySummary: 'Sao chép tóm tắt',
  copied: 'Đã sao chép tóm tắt.',
  shareFailed: 'Không mở được bảng chia sẻ.',

  emptyTitle: 'Chưa có báo cáo',
  emptyBody:
    'Báo cáo mới về vào tối Chủ nhật hằng tuần. Bạn cũng có thể viết ngay báo cáo tuần này — tính bảy ngày gần nhất.',
  noUsage:
    'Hai tuần qua không ghi nhận thời gian sử dụng nào nên chưa có gì để báo cáo. Thiết bị không kết nối mạng thì không báo gì cả, và điều đó khác với một tuần yên ắng.',
  rateLimited: 'Thử quá nhiều lần. Đợi một phút rồi thử lại.',
  loadFailedTitle: 'Không tải được báo cáo',
  loadFailed: 'Không mở được báo cáo. Kéo xuống để thử lại.',
  failed: 'Không viết được báo cáo. Thử lại trong giây lát.',

  historyTitle: 'Các tuần trước',
  historyEmpty: 'Báo cáo bạn nhận từ nay sẽ được lưu ở đây trong một năm.',

  hubToday: 'Hôm nay',
  hubTodayEmpty: 'Chưa thiết bị nào báo về hôm nay.',
  hubByChild: 'Theo trẻ',
  hubByDevice: 'Theo thiết bị',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Từng con',
  childrenNote:
    'Cùng hai tuần ở trên, tính theo từng thiết bị. Phần trăm so với tổng cả nhà.',
  colChild: 'Con',
  colScreenTime: 'Thời gian sử dụng',
  colShare: 'Tỉ lệ',
  colChange: 'So tuần trước',
  colLimit: 'Vượt giới hạn',
  colLateNights: 'Đêm muộn',
  colTopApp: 'Dùng nhiều nhất',
  unnamedChild: 'Chưa đặt tên',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'gần như không đổi',
  noLimit: 'Không đặt',
  noTopApp: '—',
  limitDays: '{{count}} ngày',
  lateNightsNone: 'không có',
  busiest: 'Dùng nhiều nhất trong nhà',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Bạn sẽ thấy những gì',
  guestPreviewHint: 'Ví dụ minh họa — số liệu thật hiển thị sau khi kết nối thiết bị',
  guestTitle: 'Xem cả tuần đã trôi đi đâu',
  guestDescription:
    'Đăng nhập để so hôm nay với một ngày bình thường, đối chiếu các con cạnh nhau và nhận báo cáo mỗi Chủ nhật.',
  guestBenefitTrendTitle: 'Hôm nay, so với ngày thường',
  guestBenefitTrendBody:
    'Một con số đứng riêng thì không nói lên điều gì. Hôm nay luôn được đặt cạnh mức trung bình mỗi ngày của chính gia đình bạn.',
  guestBenefitChildTitle: 'Từng con, cạnh nhau',
  guestBenefitChildBody:
    'Phần thời gian trong ngày của mỗi con, theo màu riêng, trên mọi thiết bị con dùng.',
  guestBenefitWeeklyTitle: 'Báo cáo mỗi Chủ nhật',
  guestBenefitWeeklyBody:
    'Điều gì đã thay đổi, ứng dụng nào tăng lên và những đêm thức khuya — lưu trong một năm.',
  guestSignInButton: 'Đăng nhập',
  guestCreateAccount: 'Tạo tài khoản phụ huynh',
} as const;
