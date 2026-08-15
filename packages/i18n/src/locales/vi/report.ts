export const report = {
  title: 'Báo cáo tuần',
  subtitle: 'Những gì KidGate ghi nhận trong tuần.',
  weekOf: 'Tuần {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Gửi Chủ nhật',
  triggerManual: 'Bạn tạo',

  statScreenTime: 'Thời gian sử dụng',
  statDailyAverage: 'Trung bình mỗi ngày',
  statBlockedApps: 'Ứng dụng bị chặn',
  statBlockedWebVisits: 'Trang web bị lọc',

  trendUp: 'nhiều hơn tuần trước {{value}}',
  trendDown: 'ít hơn tuần trước {{value}}',
  trendFlat: 'Gần như tuần trước',
  trendFirstWeek: 'Tuần đầu tiên có số liệu',
  barThisWeek: 'Tuần này',
  barLastWeek: 'Tuần trước',

  highlights: 'Đáng chú ý',
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
  findingLimitHit: 'Chạm giới hạn {{limit}} mỗi ngày trong {{count}} ngày.',
  findingBlockedApps: '{{count}} lần mở ứng dụng bị chặn, tuần trước là {{previous}}.',
  findingBlockedWeb: '{{count}} trang web bị lọc, tuần trước là {{previous}}.',
  findingQuietWeek: 'Một tuần yên ắng — tổng {{total}}, và không có gì cần bạn xử lý.',

  narrativeTitle: 'Tóm lại',
  finePrint:
    'Số liệu tính từ {{from}} đến {{to}}, gộp mọi thiết bị trong gia đình. Thời gian sử dụng là những gì thiết bị báo về; những phút không đo được không nằm trong tổng nào cả.',

  generate: 'Viết báo cáo tuần này',
  generating: 'Đang viết…',
  share: 'Chia sẻ',
  copySummary: 'Chép tóm tắt',
  copied: 'Đã chép tóm tắt.',
  shareFailed: 'Không mở được bảng chia sẻ.',

  emptyTitle: 'Chưa có báo cáo',
  emptyBody:
    'Báo cáo về vào tối Chủ nhật hằng tuần. Bạn cũng có thể viết báo cáo tuần này ngay — nó tính bảy ngày gần nhất.',
  noUsage:
    'Hai tuần qua không ghi nhận thời gian sử dụng nào nên chưa có gì để báo cáo. Thiết bị tắt máy thì không báo gì cả, và điều đó khác với một tuần yên ắng.',
  rateLimited: 'Thử quá nhiều lần. Đợi một phút.',
  failed: 'Không viết được báo cáo. Thử lại sau giây lát.',

  historyTitle: 'Các tuần trước',
  historyEmpty: 'Báo cáo từ nay sẽ được giữ ở đây trong một năm.',
} as const;
