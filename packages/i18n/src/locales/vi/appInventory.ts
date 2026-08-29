export const appInventory = {
  title: 'Ứng dụng trên thiết bị này',
  subtitle:
    'Tất cả ứng dụng KidGate thấy đã cài trên máy, không chỉ những thay đổi gần đây.',
  summaryFlagged: '{{flagged}} trong {{total}} ứng dụng đáng để xem lại',
  summaryClear: 'Không có gì đáng ngại trong {{total}} ứng dụng',
  flaggedTitle: 'Đáng để xem lại',
  otherTitle: 'Còn lại',
  unclassifiedTitle: 'Chưa nhận diện được',
  scannedLabel: 'Lần quét gần nhất',
  staleNote: 'Danh sách này đã cũ. Nó sẽ được làm mới khi thiết bị kết nối lần tới.',
  truncatedNote: 'Đang hiện {{shown}} trong {{total}} ứng dụng tìm được.',
  firstScanNote:
    'Đây là lần quét đầu tiên, nên KidGate chưa biết các ứng dụng này xuất hiện khi nào.',
  newBadge: 'Mới',
  ageBadge: '{{age}}+',
  emptyTitle: 'Chưa quét lần nào',
  emptySubtitle: 'Thiết bị sẽ gửi danh sách ứng dụng trong lần kết nối tới.',
  unsupportedTitle: 'Thiết bị này không liệt kê được ứng dụng',
  unsupportedIos:
    'Apple không cho phép ứng dụng nào đọc danh sách đã cài trên iPhone hay iPad, nên KidGate chỉ báo được ứng dụng khi chúng được dùng.',
  unsupportedGeneric: 'Thiết bị này không báo cáo các ứng dụng đã cài trên nó.',
  incompleteNote:
    'Ứng dụng không có biểu tượng ngoài màn hình chính có thể không xuất hiện ở đây.',
  blockHint: 'Để chặn một ứng dụng, hãy mở Ứng dụng bị chặn ngay trên thiết bị đó.',
  howItWorksLabel: 'Danh sách này hoạt động thế nào',
} as const;
