export const appInventory = {
  title: 'Ứng dụng trên thiết bị này',
  pendingTitle: 'Đang chờ bạn duyệt',
  pendingBadge: 'Bị chặn cho đến khi bạn cho phép',
  approvedBadge: 'Đã được bạn cho phép',
  installedAtLabel: 'Đã cài {{when}}',
  allowApp: 'Cho phép',
  subtitle:
    'Tất cả ứng dụng KidGate thấy đã cài trên máy, không chỉ những thay đổi gần đây.',
  summaryFlagged: '{{flagged}} trong {{total}} ứng dụng cần xem lại',
  summaryClear: 'Không có gì đáng ngại trong {{total}} ứng dụng',
  flaggedTitle: 'Cần xem lại',
  otherTitle: 'Còn lại',
  scannedLabel: 'Lần quét gần nhất',
  staleNote: 'Danh sách này đã cũ, sẽ được cập nhật khi thiết bị kết nối lần tới.',
  truncatedNote: 'Đang hiện {{shown}} trong {{total}} ứng dụng tìm được.',
  firstScanNote:
    'Đây là lần quét đầu tiên, nên KidGate chưa biết các ứng dụng này xuất hiện khi nào.',
  newBadge: 'Mới',
  ageBadge: '{{age}}+',
  browserExtension: 'Tiện ích Chrome',
  titleExtension: 'Tiện ích mở rộng trên trình duyệt này',
  subtitleExtension:
    'Tất cả tiện ích mở rộng KidGate thấy đã cài trong trình duyệt, không chỉ những thay đổi gần đây.',
  summaryFlaggedExtension:
    '{{flagged}} trong {{total}} tiện ích mở rộng của Chrome cần xem lại',
  summaryClearExtension:
    'Không có gì đáng ngại trong {{total}} tiện ích mở rộng của Chrome',
  incompleteNoteExtension:
    'Ở đây chỉ liệt kê tiện ích mở rộng — ứng dụng cài trên máy thì trình duyệt không nhìn thấy được.',
  blockHintExtension:
    'Để gỡ một tiện ích mở rộng, hãy mở trang tiện ích mở rộng của trình duyệt ngay trên thiết bị đó.',
  emptyTitleExtension: 'Chưa quét lần nào',
  emptySubtitleExtension:
    'Trình duyệt sẽ gửi danh sách tiện ích mở rộng trong lần kết nối tới.',
  emptyTitle: 'Chưa quét lần nào',
  emptySubtitle: 'Thiết bị sẽ gửi danh sách ứng dụng trong lần kết nối tới.',
  unsupportedTitle: 'Thiết bị này không liệt kê được ứng dụng',
  unsupportedIos:
    'Apple không cho phép ứng dụng nào đọc danh sách đã cài trên iPhone hay iPad, nên KidGate chỉ báo được ứng dụng khi chúng được dùng.',
  unsupportedGeneric: 'Thiết bị này không báo cáo các ứng dụng đã cài trên nó.',
  incompleteNote:
    'Những ứng dụng không có biểu tượng trên màn hình chính có thể không xuất hiện trong danh sách này.',
  blockHint: 'Để chặn một ứng dụng, hãy mở Ứng dụng bị chặn ngay trên thiết bị đó.',
  howItWorksLabel: 'Danh sách này hoạt động thế nào',
  markSafe: 'An toàn',
  dismissedTitle: 'Bạn đã đánh dấu an toàn',
  undoSafe: 'Bỏ đánh dấu',
  howToBlock: 'Cách chặn',
} as const;
