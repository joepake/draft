export const webFilter = {
  title: 'Web Filter',
  fallbackDeviceName: 'Child device',
  toastUpdateFailed: 'Unable to update the Web Filter. Try again.',
  heroTitle: 'Filter adult websites',
  heroSubtitleIos:
    'Uses Apple’s Screen Time content filter to limit adult content in Safari and in-app browsers on the child device.',
  heroSubtitleAndroid:
    'Runs a private connection on the child Android device to block known adult sites in browsers and many apps.',
  toggleLabel: 'Enable Web Filter',
  toggleHintIos: 'Requires the Screen Time permission on the child device.',
  toggleHintAndroid:
    'The child must approve the KidGate VPN connection once. Keep the VPN on for filtering to work.',
  toggleAccessibilityLabel: 'Enable Web Filter',
  infoTitle: 'How it works',
  infoLine1Ios: 'Apple automatically filters adult websites.',
  infoLine2Ios:
    'This uses Apple’s adult-content filter in Safari and does not block everything inside other apps.',
  infoLine3Ios:
    'KidGate applies the setting automatically when the app on the child device syncs controls.',
  infoLine1Android:
    'KidGate runs a private connection on the device that checks which sites are being looked up, and blocks the ones on your categories.',
  infoLine2Android:
    'Turn off Private DNS on the child device. If Private DNS is on, browsers can bypass the filter.',
  infoLine3Android:
    'The child device shows a VPN icon while filtering. Turning the VPN off stops the filter — reopen KidGate to restore it.',
  infoLine4Android: 'Go to Settings → Network & internet → Private DNS → Off.',
  privateDnsBannerTitle: 'Turn off Private DNS',
  privateDnsBannerBody:
    'Private DNS is on, so adult web filtering may be bypassed. Turn it off for the filter to work.',
  privateDnsBannerButton: 'Open DNS settings',
  vpnConsentBannerTitle: 'Restore the Web Filter VPN',
  vpnConsentBannerBody:
    'The KidGate VPN is off. Adult web filtering needs the VPN to stay connected.',
  vpnConsentBannerButton: 'Enable VPN',
  iosOnlyNote: 'Uses Screen Time on iOS',
  androidVpnNote: 'Uses a private connection on Android',
  webFilteringNote:
    'iOS uses the Screen Time adult filter. Android uses KidGate’s own blocklist.',
  safeSearchAlertsNote:
    'Safari does not share search terms; keyword alerts require a managed safe browser.',
  webHistoryNote: 'Requires a filtered browser or DNS/VPN-style reporting.',
  categoriesTitle: 'What to block',
  categoriesSubtitle:
    'KidGate comes with its own domain lists. They cover the sites children actually reach, not the whole web — pair them with the lists below.',
  androidOnlyCategory: 'Android only — iOS has no per-category web control',
  iosCategoryNote:
    'iPhone only supports {{category}}, using Apple’s own filter. The other categories apply to Android child devices.',
  allowListTitle: 'Always allow',
  allowListSubtitle: 'Sites that stay reachable even when a category would block them.',
  allowListEmpty: 'No exceptions yet.',
  allowListInputAccessibility: 'Add an always-allowed site',
  blockListTitle: 'Always block',
  blockListSubtitle: 'Sites refused whatever the categories say.',
  blockListEmpty: 'No blocked sites yet.',
  blockListInputAccessibility: 'Add an always-blocked site',
  allowListOnlyLabel: 'Allowed sites only',
  allowListOnlyHintAndroid:
    'Everything except your allow list is refused. This applies to the whole device, so other apps lose their connections too.',
  allowListOnlyHintIos:
    'Safari and in-app browsers can only open the sites in your allow list.',
  allowListOnlyNeedsEntries: 'Add at least one allowed site before turning this on.',
  domainPlaceholder: 'example.com',
  addDomain: 'Add site',
  removeDomain: 'Remove {{domain}}',
  invalidDomain: 'Enter a site address, like example.com',
  listFull: 'You can save up to {{max}} sites in this list.',
  openHistory: 'Web History',
  openHistorySubtitle: 'See which sites this phone reached, and what was blocked',
  category: {
    adult: 'Adult content',
    gambling: 'Gambling',
    dating: 'Dating',
    drugs: 'Drugs & alcohol',
    violence: 'Violence & extremism',
    piracy: 'Piracy',
    social: 'Social networks',
    videoStreaming: 'Video streaming',
    gaming: 'Games',
    shopping: 'Shopping',
  },
  categoryHint: {
    adult: 'Explicit and adult sites',
    gambling: 'Casinos, betting, loot boxes',
    dating: 'Dating and stranger-chat apps',
    drugs: 'Cannabis, vaping, alcohol shops',
    violence: 'Gore and extremist forums',
    piracy: 'Torrents and pirate streaming',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, game portals',
    shopping: 'Amazon, Shopee, fast fashion',
  },
} as const;
