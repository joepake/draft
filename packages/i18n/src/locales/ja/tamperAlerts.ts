export const tamperAlerts = {
  title: '保護アラート',
  fallbackDeviceName: '子どものデバイス',
  heroTitle: '保護がオフにされたら通知',
  heroSubtitle:
    'このデバイスで重要な権限がオンからオフに変わると、KidGateがここに記録し、通知でお知らせできます。',
  statusOn: '監視中',
  emptyTitle: '権限の変更はまだありません',
  emptySubtitle:
    '監視中の権限はすべてオンで、保護は正常に機能しています。お子様のデバイスで権限がオフになると、ここに表示されます。',
  recentTitle: '最近',
  watchedTitle: '監視対象の権限',
  watchedOverlay: '他のアプリの上に表示',
  watchedAccessibility: 'ユーザー補助',
  watchedUsage: '使用状況へのアクセス',
  watchedScreenTime: 'スクリーンタイム',
  watchedBattery: 'バッテリー無制限',
  watchedExactAlarm: 'アラームとリマインダー',
  watchedNotifications: '通知',
  watchedLocation: '位置情報',
  watchedCamera: 'カメラ',
  watchedBackgroundRefresh: 'Appのバックグラウンド更新',
  infoTitle: '対処方法',
  infoLine1:
    'お子さまのデバイスでKidGateを開き、アラートに記載された権限を元に戻してください。',
  infoLine2:
    '保護設定を完全な状態に保つと、お子さまのデバイスのアプリが再開したときもアラートが機能し続けます。',
} as const;
