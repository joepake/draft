export const webHistory = {
  title: 'Lịch sử web',
  fallbackDeviceName: 'Thiết bị của con',
  summarySites: 'Trang đã thấy',
  summaryBlocked: 'Trang bị chặn',
  sourceNoteIos:
    'Trên iPhone, dữ liệu này lấy từ báo cáo Thời gian sử dụng của Apple — những trang con dành thời gian vào, không phải mọi trang đã mở.',
  sourceNoteAndroid:
    'Trên Android, dữ liệu này lấy từ bộ lọc DNS của KidGate — những trang máy này truy vấn, không phải mọi trang đã mở.',
  filterOffNoteAndroid:
    'Bộ lọc web đang tắt nên máy này không ghi nhận và cũng không chặn gì. Bật lên để xem máy vào đâu.',
  filterOffNoteIos:
    'Bộ lọc web đang tắt nên không có gì bị chặn. Danh sách này chỉ cho biết máy đã vào đâu.',
  filterAll: 'Tất cả',
  filterBlocked: 'Chỉ bị chặn',
  emptyTitle: 'Chưa ghi nhận gì',
  emptyBody:
    'Các trang sẽ xuất hiện ở đây khi thiết bị của con lướt web và KidGate đang chạy.',
  emptyBlockedBody: 'Chưa có trang nào bị chặn.',
  dayBlockedBadge: 'Chặn {{count}}',
  visitsMeta: '{{count}} lượt truy cập',
  blockedMeta: 'Bị chặn {{count}} lần · {{category}}',
  categoryUnknown: 'Danh sách chặn',
  showMoreDays: 'Xem thêm {{count}} ngày',
  rollupTitle: 'Thời gian đi đâu',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Tỷ lệ lượt truy cập theo loại trang. Chỉ Android — iPhone không cho KidGate biết một tên miền thuộc loại nào.',
} as const;
