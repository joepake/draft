export const appLimits = {
  title: 'Giới hạn ứng dụng',
  intro:
    'Đặt thời lượng tối đa mỗi ngày cho từng ứng dụng. Áp dụng thêm, ngoài giới hạn chung của thiết bị.',
  emptyTitle: 'Chưa có giới hạn nào',
  emptySubtitle: 'Chọn một ứng dụng bên dưới để đặt hạn mức riêng.',
  usedToday: '{{used}} / {{limit}} hôm nay',
  addSectionTitle: 'Thêm giới hạn',
  addSectionSubtitle: 'Các ứng dụng con vừa dùng.',
  candidateUsage: '{{duration}} hôm nay',
  noUsageYet:
    'Chưa có dữ liệu sử dụng. Khi thiết bị của trẻ báo về, danh sách ứng dụng sẽ hiện ở đây.',
  footnote: 'Giới hạn tự đặt lại lúc nửa đêm trên máy con.',
  toastSaved: 'Đã lưu giới hạn ứng dụng.',
  toastSaveFailed: 'Không lưu được. Vui lòng thử lại.',
  removeAccessibility: 'Bỏ giới hạn cho {{app}}',
  increaseAccessibility: 'Tăng giới hạn cho {{app}}',
  decreaseAccessibility: 'Giảm giới hạn cho {{app}}',
  addAccessibility: 'Thêm giới hạn ngày cho {{app}}',
} as const;
