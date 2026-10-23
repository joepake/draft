/**
 * Xem `en/childReport.ts` — cùng giọng văn, và hai tổng số không được gộp làm một.
 *
 * `heroScreenOn` ngắn có lý do: `ScreenTimeSplit` đặt nhãn này cạnh một khoảng
 * hai đầu ("17g 28p – 22g 46p") trên cùng một dòng `numberOfLines={1}`, nên
 * nhãn dài hơn là bị cắt. "Dùng thực tế" vs "Tổng các thiết bị" cũng chính là
 * cặp đối lập cả màn hình này sinh ra để nói.
 */
export const childReport = {
  title: 'Báo cáo',
  devicesCount: '{{count}} thiết bị',

  periodToday: 'Hôm nay',
  periodWeek: '7 ngày',
  periodMonth: '30 ngày',

  heroScreenOn: 'Dùng thực tế',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'Là con số ước lượng — có thiết bị chỉ báo dùng bao lâu, không báo dùng lúc nào.',
  heroEmpty: 'Chưa có dữ liệu sử dụng',

  trendUp: 'Nhiều hơn kỳ trước {{value}}',
  trendDown: 'Ít hơn kỳ trước {{value}}',
  trendFlat: 'Gần bằng kỳ trước',
  trendFirst: 'Chưa có kỳ trước để so sánh',

  coverage: 'Theo dõi được {{percent}}% thời gian kỳ này',
  wellLateNights: 'Đêm thức khuya',
  coverageNone: 'Không thiết bị nào ở đây báo được thời điểm màn hình bật',

  barCombined: 'Tổng các thiết bị',

  sectionDays: 'Theo từng ngày',
  backToPeriod: 'Xem lại cả kỳ',
  sectionWhen: 'Thời điểm màn hình bật',
  bandMerged: 'Tất cả thiết bị',
  bandTooThin: 'Ngày này đo được quá ít nên chưa vẽ được biểu đồ giờ.',

  sectionDevices: 'Theo thiết bị',
  openDeviceReport: 'Mở báo cáo của {{name}}',
  deviceNoScreenTime: 'Không đo thời gian sử dụng',

  sectionApps: 'Dùng nhiều nhất',
  appOnDevices: 'Trên {{count}} thiết bị',
  appsEmpty: 'Chưa có số liệu theo từng ứng dụng.',
  deviceJoinedNote:
    '{{device}} vào gia đình lúc {{time}}. Thời gian sử dụng trước đó có thể chưa đầy đủ hoặc được tính vào “Ứng dụng khác”.',

  emptyNoDevices: 'Chưa gán thiết bị nào cho con này.',
  emptyAssign: 'Gán thiết bị',
  partialError:
    'Có một thiết bị không đọc được. Số liệu dưới đây không tính thiết bị đó.',
};
