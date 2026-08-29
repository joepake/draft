export const webHistory = {
  title: 'Lịch sử web',
  fallbackDeviceName: 'Thiết bị của con',
  syncNote:
    'Lịch sử web có thể mất vài phút để hiện trên màn hình này — lâu hơn nếu thiết bị không có kết nối mạng hoặc bị đóng đột ngột.',
  syncNoteTv:
    'TV này chỉ kết nối theo định kỳ, nên lịch sử web có thể mất tới 30 phút để hiện trên màn hình này — lâu hơn nếu không có kết nối mạng.',
  summarySites: 'Trang đã thấy',
  summaryBlocked: 'Trang bị chặn',
  sourceNoteIos:
    'Trên iPhone, dữ liệu này lấy từ báo cáo Thời gian sử dụng của Apple — những trang con dành thời gian vào, không phải mọi trang đã mở.',
  sourceNoteAndroid:
    'Trên Android, dữ liệu này lấy từ bộ lọc DNS của KidGate — những trang máy này truy vấn, không phải mọi trang đã mở.',
  sourceNoteMacos:
    'Trên Mac, dữ liệu này lấy từ bộ lọc của KidGate — những trang Mac này truy vấn, không phải mọi trang đã mở.',
  sourceNoteExtension:
    'Trong trình duyệt này KidGate thấy đúng những trang đã mở — chỉ trình duyệt này, không phải cả máy.',
  filterOffNoteAndroid:
    'Bộ lọc web đang tắt nên máy này không ghi nhận và cũng không chặn gì. Bật lên để xem máy vào đâu.',
  filterOffNoteMacos:
    'Bộ lọc web đang tắt nên Mac này không ghi nhận và cũng không chặn gì. Bật lên để xem máy vào đâu.',
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
  blockedMeta: '{{category}} · Bị chặn {{count}} lần',
  categoryUnknown: 'Danh sách chặn',
  sectionUncategorized: 'Trang khác',
  blockCategory: 'Chặn {{category}}',
  blockCategoryConfirmTitle: 'Chặn {{category}}?',
  blockCategoryConfirmBody:
    'Mọi trang KidGate xếp vào {{category}} sẽ bị từ chối trên máy này. Bạn có thể tắt lại trong Chặn nội dung web.',
  blockCategoryConfirmAction: 'Chặn',
  blockCategoryDone: 'Đã chặn {{category}}.',
  unblockCategory: 'Bỏ chặn {{category}}',
  unblockCategoryConfirmTitle: 'Bỏ chặn {{category}}?',
  unblockCategoryConfirmBody:
    'Các trang KidGate xếp vào {{category}} sẽ vào lại được trên máy này.',
  unblockCategoryConfirmAction: 'Bỏ chặn',
  unblockCategoryDone: 'Đã bỏ chặn {{category}}.',
  serviceSites: '{{count}} trang',
  serviceNote:
    'Các trang mà một dịch vụ tự tải về được gộp vào chung một dòng — mở YouTube một lần là chạm tới vài trang. Chạm vào dòng để xem đầy đủ.',
  showMoreDays: 'Xem thêm {{count}} ngày',
  rollupTitle: 'Lượt truy cập theo loại trang',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Là lượt tra cứu, không phải phút — một video dài chỉ vài lượt, mười phút lướt web là hàng chục.',
  rollupNoteAi:
    'Một số mục được suy ra từ tên trang chứ không khớp với trang đã biết, nên có thể lệch đôi chút.',
  rollupNoteExtension:
    'Là số trang, không phải phút — một video dài tính một lần, mười phút lướt web tính hàng chục.',
  hoursTitle: 'Lướt web vào lúc nào',
  hoursNote:
    'Số trang đã tải theo giờ, tính theo đồng hồ của máy. Một tab mở cả buổi chiều chỉ tính một lần.',
  hoursEmpty: 'Hôm nay chưa có trang nào.',
  sourceNoteChild:
    'Gộp từ {{count}} thiết bị. Mỗi máy chỉ ghi những gì bộ lọc của nó thấy được.',
  filterOffNoteChild:
    'Bộ lọc web đang tắt trên mọi thiết bị nên lượt truy cập mới không được ghi lại.',
} as const;
