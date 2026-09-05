export const webFilter = {
  title: 'Web Filter',
  fallbackDeviceName: 'Child device',
  appliesToAll: 'Applies to all {{count}} of {{name}}’s devices',
  coverageLine: 'Enforced on {{enforcing}} of {{total}} devices',
  mergeNotice:
    '{{name}}’s devices had different web filter settings. Saving here applies one set to all of them, combined toward the stricter choice.',
  mergeLoosened: 'Now allowed on every device: {{domains}}',
  toastUpdateFailed: 'Unable to update the Web Filter. Try again.',
  heroTitle: 'Filter adult websites',
  heroSubtitleIos:
    'Uses Apple’s Screen Time content filter to limit adult content in Safari and in-app browsers on the child device.',
  heroSubtitleAndroid:
    'Runs a private connection on the child Android device to block known adult sites in browsers and many apps.',
  heroSubtitleMacos:
    'Runs KidGate’s content filter on the child’s Mac to block known adult sites in browsers and many apps.',
  toggleHintIos: 'Requires the Screen Time permission on the child device.',
  toggleHintAndroid:
    'The child must approve the KidGate VPN connection once. Keep the VPN on for filtering to work.',
  toggleHintMacos:
    'The child must approve the KidGate filter extension once in System Settings. Keep it approved for filtering to work.',
  toggleAccessibilityLabel: 'Enable Web Filter',
  safeSearchSectionTitle: 'Safe search & YouTube',
  safeSearchSectionSubtitle:
    'Force Google, Bing and DuckDuckGo to safe results and lock YouTube to Restricted Mode. Needs the web filter on.',
  safeSearchLabel: 'Force SafeSearch',
  safeSearchHint:
    'Locks Google SafeSearch, YouTube Restricted Mode, Bing and DuckDuckGo to their strict settings. Android, Android TV and Chrome.',
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
  infoLine1Macos:
    'KidGate runs a content filter on the Mac that checks which sites are being looked up, and blocks the ones on your categories.',
  infoLine2Macos:
    'If the filter shows as not approved on the child’s Mac, open System Settings → General → Login Items & Extensions to approve it.',
  infoLine3Macos:
    'The child’s Mac shows the filter as active once approved. If it gets switched off there, reopen KidGate to restore it.',
  infoLine4Macos:
    'The filter reads site names, which modern browsers hide on roughly half of visits — those sites are not checked against your categories. It still stops most sites children reach this way.',
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
  macosFilterNote: 'Uses KidGate’s content filter on Mac',
  webFilteringNote:
    'iOS uses the Screen Time adult filter. Android and Mac use KidGate’s own blocklist.',
  safeSearchAlertsNote:
    'Safari does not share search terms; keyword alerts require a managed safe browser.',
  webHistoryNote: 'Requires a filtered browser or DNS/VPN-style reporting.',
  categoriesTitle: 'What to block',
  categoriesSubtitle:
    'KidGate comes with its own domain lists. They cover the sites children actually reach, not the whole web — pair them with the lists below.',
  androidOnlyCategory: 'Not available on iPhone — works on Android and Mac',
  iosCategoryNote:
    'iPhone only supports {{category}}, using Apple’s own filter. The other categories apply to Android and Mac child devices.',
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
  openHistorySubtitle: 'See which sites this device reached, and what was blocked',
  blockedPageTitle: 'Site blocked',
  blockedPageBody:
    'KidGate blocked this site for your family. If you think this is a mistake, ask your parent.',
  category: {
    adult: 'Adult content',
    selfHarm: 'Self-harm & eating disorders',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Education',
    utility: 'Utilities',
    browser: 'Web browsers',
    devTools: 'Coding & developer tools',
    messaging: 'Messaging & calls',
    community: 'Forums & communities',
    shortVideo: 'Short video feeds',
    creative: 'Photo, video & art',
    productivity: 'Notes & productivity',
    reading: 'Books & comics',
    fileSharing: 'File sharing & downloads',
    bypass: 'Control bypass tools',
    gambling: 'Gambling',
    gameGambling: 'Loot boxes & skin betting',
    dating: 'Dating',
    strangerChat: 'Stranger chat',
    drugs: 'Drugs & alcohol',
    violence: 'Violence & gore',
    extremism: 'Extremism & hate',
    piracy: 'Piracy',
    social: 'Social networks',
    videoStreaming: 'Video streaming',
    music: 'Music',
    gaming: 'Games',
    shopping: 'Shopping',
    aiCompanion: 'AI companions',
    aiAssistant: 'AI assistants',
    cryptoTrading: 'Crypto & trading',
    vpn: 'VPN apps',
  },
  categoryHint: {
    adult: 'Explicit and adult sites',
    selfHarm: 'Pro-ana and pro-suicide forums',
    gambling: 'Casinos, sports betting, poker',
    gameGambling: 'Case opening, skin and Roblox betting',
    dating: 'Dating and hookup apps',
    strangerChat: 'Omegle clones, random video chat',
    drugs: 'Cannabis, vaping, alcohol shops',
    violence: 'Gore and shock sites',
    extremism: 'Hate forums and extremist sites',
    piracy: 'Torrents and pirate streaming',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, game portals',
    shopping: 'Amazon, Shopee, fast fashion',
    aiCompanion: 'Character.AI, Replika, roleplay bots',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, trading apps',
    vpn: 'VPN download pages. Not one already installed.',
  },
  categoryGroup: {
    harm: 'Harmful content',
    contact: 'Strangers',
    bypass: 'Filter bypass',
    ai: 'AI',
    entertainment: 'Entertainment & social',
    money: 'Shopping & money',
  },
  categoriesOnCount: '{{on}} of {{total}} on',
  askToOpen: 'Ask a parent',
  askToOpenSubtitle: 'If they allow it, this site will open.',
  askToOpenDomainLabel: 'Which site?',
  askToOpenBlockedLabel: 'Blocked recently',
  askToOpenPending: 'You already asked for a site. Wait for an answer.',
  askToOpenTooSoon: 'You just asked. Try again in a minute.',
  askToOpenTooMany: 'You can only ask for a few sites at a time.',
  requestsTitle: 'Site requests',
  requestsSubtitle: 'Sites this device asked you to allow.',
  siteRequestApproved: 'Site allowed',
  siteRequestApprovedDescription:
    '{{domain}} was added to Always allow on {{deviceName}}.',
  siteRequestDenied: 'Site request declined',
  siteRequestDeniedDescription: '{{domain}} stays blocked on {{deviceName}}.',
  siteRequestReceived: 'Site request',
  siteRequestReceivedDescription: '{{deviceName}} asked to open {{domain}}.',
} as const;
