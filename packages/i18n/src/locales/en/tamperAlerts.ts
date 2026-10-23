export const tamperAlerts = {
  title: 'Protection Alerts',
  fallbackDeviceName: 'Child device',
  statusOn: 'Watching',
  emptyTitle: 'No permission changes yet',
  emptySubtitle:
    'All watched permissions are on — protection is working. If one is ever turned off on the child device, it will show up here.',
  watchedTitle: 'Watched permissions',
  watchedOverlay: 'Display over other apps',
  watchedAccessibility: 'Accessibility',
  watchedUsage: 'Usage access',
  watchedScreenTime: 'Screen Time',
  watchedBattery: 'Unrestricted battery',
  watchedExactAlarm: 'Alarms & reminders',
  watchedNotifications: 'Notifications',
  watchedLocation: 'Location',
  watchedCamera: 'Camera',
  watchedMicrophone: 'Microphone',
  watchedBackgroundRefresh: 'Background App Refresh',
  infoTitle: 'What to do',
  infoLine1:
    'Open KidGate on the child device and restore the permission listed in the alert.',
  infoLine2:
    'Keep the protection setup complete so alerts keep working when the app on the child device wakes up.',
} as const;
