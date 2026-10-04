export const webHistory = {
  title: 'Lịch sử web',
  fallbackDeviceName: 'Thiết bị của trẻ',
  syncNote:
    'Lịch sử web có thể mất tối đa khoảng 15 phút để hiện trên màn hình này — lâu hơn nếu thiết bị không có kết nối mạng hoặc bị đóng đột ngột.',
  syncNoteTv:
    'TV này chỉ kết nối theo định kỳ, nên lịch sử web có thể mất tới một giờ để hiện trên màn hình này — lâu hơn nếu không có kết nối mạng.',
  summarySites: 'Trang truy cập',
  summaryBlocked: 'Trang bị chặn',
  sourceNoteFilter:
    'Dữ liệu này lấy từ bộ lọc của KidGate — những trang thiết bị này truy vấn, không phải mọi trang đã mở.',
  backgroundNote:
    'Khi không có ai dùng thiết bị, một số ứng dụng chạy ngầm vẫn truy cập internet — cập nhật, tải gợi ý và kiểm tra định kỳ tự chạy.',
  sourceNoteExtension:
    'Trong trình duyệt này KidGate thấy đúng những trang đã mở — chỉ trình duyệt này, không phải cả máy.',
  filterOffNoteAndroid:
    'Tính năng Chặn nội dung web đang tắt nên thiết bị này không ghi lại lượt truy cập, cũng không chặn trang nào. Bật lên để xem thiết bị truy cập vào những trang nào.',
  filterOffNoteMacos:
    'Tính năng Chặn nội dung web đang tắt nên Mac này không ghi lại lượt truy cập, cũng không chặn trang nào. Bật lên để xem máy này truy cập vào những trang nào.',
  filterAll: 'Tất cả',
  filterBlocked: 'Chỉ bị chặn',
  emptyTitle: 'Chưa ghi nhận gì',
  emptyBody:
    'Các trang sẽ xuất hiện ở đây khi con lướt web trên thiết bị này trong lúc KidGate đang chạy.',
  emptyBlockedBody: 'Chưa có trang nào bị chặn.',
  dayBlockedBadge: 'Chặn {{count}}',
  visitsMeta: '{{count}} lượt truy cập',
  blockedMeta: '{{category}} · Bị chặn {{count}} lần',
  categoryUnknown: 'Danh sách chặn',
  sectionUncategorized: 'Trang khác',
  blockCategory: 'Chặn {{category}}',
  blockCategoryConfirmTitle: 'Chặn {{category}}?',
  blockCategoryConfirmBody:
    'Mọi trang mà KidGate xếp vào {{category}} sẽ bị chặn trên máy này. Bạn có thể tắt lại trong mục Chặn nội dung web.',
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
    'Là số lượt truy cập, không phải số phút — một video dài chỉ vài lượt, mười phút lướt web là hàng chục.',
  rollupNoteAi:
    'Một số mục được suy ra từ tên trang chứ không khớp với trang đã biết, nên có thể lệch đôi chút.',
  rollupNoteExtension:
    'Là số trang, không phải phút — một video dài tính một lần, mười phút lướt web tính hàng chục.',
  hoursTitle: 'Lướt web vào lúc nào',
  hoursNote:
    'Số trang đã tải theo giờ, tính theo đồng hồ của máy. Một tab mở cả buổi chiều chỉ tính một lần.',
  hoursEmpty: 'Hôm nay chưa có trang nào.',
  sourceNoteChild:
    'Dữ liệu này gộp từ {{count}} thiết bị. Mỗi thiết bị chỉ ghi lại những trang mà bộ lọc trên đó thấy được.',
  filterOffNoteChild:
    'Bộ lọc web đang tắt trên mọi thiết bị nên lượt truy cập mới không được ghi lại.',
} as const;
