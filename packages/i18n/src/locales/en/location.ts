export const location = {
  title: 'Location',
  fallbackDeviceName: 'Child device',
  toastUpdateFailed: 'Unable to update location sharing. Try again.',
  toggleLabel: 'Share location',
  toggleHint: 'Open KidGate once on this device after turning this on.',
  toggleAccessibilityLabel: 'Share location',
  lastKnownLocation: 'Last known location',
  noLocationHint: 'Turn on sharing, then open KidGate once on this device.',
  waitingForLocation: 'Waiting for location',
  updatedAt: 'Updated {{date}}',
  openInMaps: 'Open in Maps',
  openInMapsAccessibility: 'Open in Maps',
  refreshButton: 'Refresh location',
  refreshingButton: 'Refreshing…',
  refreshAccessibility: 'Refresh location',
  toastEnableSharingFirst: 'Turn on location sharing before requesting a refresh.',
  activityTitleRefreshRequested: 'Location refresh requested',
  activityDescriptionRefreshRequested:
    'Asked {{deviceName}} to send an updated location.',
  toastRefreshSent:
    '{{deviceName}} will update its location as soon as it receives the request.',
  toastRefreshFailed: 'Unable to request a location refresh. Try again.',
  toastChildNeedsNotifications:
    'Open KidGate on the child device and allow Notifications so location refresh requests can reach it.',
  checkInBadge: 'Check-In',
  movementHistoryTitle: 'Movement history',
  historyEmpty: 'No history yet. Points appear after location updates or Check-Ins.',
  historyHighlightAccessibility: 'Highlight {{place}} on the map',
  historyOpenMapsAccessibility: 'Open {{place}} in Maps',
  latestBadge: 'Latest',
  unableToRequestLocationRefresh: 'Unable to request a location refresh',
  locationBannerTitle: 'Turn on location',
  locationBannerBody:
    'Your parent would like to see where this device is, so they know you arrived safely.',
  allowLocationButton: 'Allow location',
  locationNotAllowed:
    'Location is not allowed yet. Open Settings → KidGate → Location (or turn on Location Services first). Select Allow location again if the Location entry is missing.',
  locationServicesOff:
    'Location Services is turned off for the whole device. Open Settings → Privacy & Security → Location Services, turn it on, then return to KidGate and select Allow location.',
  locationDeniedInSettings:
    'Location was denied for KidGate. Open Settings → KidGate → Location and choose While Using the App or Always.',
  locationEnabled:
    'Location is on. Choose “Always Allow” so KidGate can update even when the app is closed.',
  backgroundLocationTitle: 'Allow location while the app is closed',
  backgroundLocationBody:
    'KidGate needs background location so parents can see where this device is when the app is closed, for family safety.',
  locationNote: 'Shows the child location when sharing is enabled on the child device.',
  placeAlertsNote: 'Sends location alerts for home, school, and other safe places.',
  mapNoLocationsEmpty: 'No locations to show yet',
  mapUnavailable: 'Map unavailable. Check your connection and try again.',
  historyShowMore: 'Show {{count}} more places',
  historyShowMore_one: 'Show 1 more place',
} as const;
