export const messageMonitoring = {
  actionTitle: 'Message Alerts',
  actionDescription: 'Get alerted when concerning words appear in messages',
  title: 'Message alerts',
  heroTitle: 'Message safety',
  heroSubtitle:
    'KidGate flags concerning words in your child’s messages and alerts you. It never shows you the message — only the flagged word.',
  androidOnlyNote: 'Only available on Android devices.',
  recentTitle: 'Recent alerts',
  emptyTitle: 'No alerts yet',
  emptySubtitle: 'No concerning words have been seen in messages.',
  emptySubtitleNotWatching:
    'Messages are not being checked right now, so this list stays empty whatever happens.',
  flaggedTerm: 'Flagged word: “{{term}}”',
  flaggedTermPrefix: 'Flagged word: “',
  flaggedTermSuffix: '”',
  aiConfirmed: 'Confirmed by AI',
  checkedTitle: 'Checked and cleared',
  checkedSubtitle:
    'Watched words that appeared but read as harmless in context, so you were not alerted. Shown so you can see what is being filtered out on your behalf — and tell us if something here should have reached you.',
  categoryPredator: 'Possible grooming',
  categorySelfHarm: 'Possible self-harm',
  categoryExplicit: 'Explicit content',
  categoryViolence: 'Threat or violence',
  categoryBullying: 'Bullying',
  categoryDrugs: 'Drugs or substances',
  categoryAlcohol: 'Alcohol',
  categoryTobacco: 'Tobacco or vaping',
  categoryGambling: 'Gambling',
  categoryProfanity: 'Strong language',
  categoryUnknown: 'Flagged message',
  setupTitle: 'Message safety',
  setupBody:
    'Watch messages for concerning words. KidGate never shows you the message — only an alert if something worrying appears.',
  setupGrant: 'Allow notification access',
  setupEnable: 'Message safety',
  controlledByParentHint:
    'Turned on or off from the KidGate app on a parent’s phone, not here.',
  parentIncomingLabel: 'Scan messages they receive',
  parentOutgoingLabel: 'Scan messages they type',
  parentToggleHintGranted: 'On this phone.',
  parentToggleHintNotGranted:
    'Not allowed on this phone yet — open KidGate on their device to grant it.',
  parentToggleSaveFailed: 'Could not save that change.',
  settingsTitle: 'Message alert settings',
  consentTitle: 'AI message analysis',
  consentBody:
    'When on, messages a keyword flags as borderline are sent — with names, numbers and links removed — to an AI service to confirm whether they are truly concerning before you are alerted. High-risk words still alert instantly without sending anything.',
  consentEnable: 'Enable AI analysis',
  consentConfirmTitle: 'Enable AI message analysis?',
  consentConfirmBody:
    'Borderline messages, with personal details removed, will be sent to an AI service to check for concerns. You confirm you consent to this processing.',
  consentAgree: 'I agree',
  outgoingTitle: 'Messages you write',
  outgoingBody:
    'KidGate can also check what you type in chat apps. It looks for the same warning words, on this phone. Your messages are never sent anywhere.',
  outgoingEnable: 'Check what I write',
  outgoingGrant: 'Allow this',
  directionIncoming: 'Received',
  directionOutgoing: 'Sent',
  alertBodyIncoming: 'Message from app',
  alertBodyOutgoing: 'Message sent from app',
  aiLegend: 'An alert with this icon was confirmed by AI before you were notified.',
  setupRevoked:
    'Android has turned off the permission this needs. Allow it again to keep checking messages.',
  outgoingRevoked:
    'Android has turned this off. Allow it again to keep checking what you write.',
  outgoingDisclosureTitle: 'Before you allow',
  outgoingDisclosureBody:
    'KidGate reads what you type in chat apps only — never in any other app, and never in a password box. It checks for the same warning words on this phone. Your messages are never sent anywhere; only a flagged word reaches your parent.',
  outgoingRestrictedHint:
    'If the switch is greyed out, open Settings › Apps › KidGate, tap the ⋮ menu and choose “Allow restricted settings”, then come back.',
  notice: {
    revokedTitle: 'Message checking has stopped',
    revokedBody:
      'Android turned off a permission KidGate needs, so messages are no longer being checked. Open KidGate on your child’s device and allow it again.',
    offTitle: 'Message safety is not switched on',
    offBody:
      'Nothing is being checked on your child’s device, so no alert can appear here. Open KidGate on their device to set it up.',
    pendingTitle: 'Waiting for your child’s device to apply this',
    pendingBody:
      'You have switched this on. Your child’s device picks the change up the next time it checks in, which is usually within a couple of minutes — sooner if their phone is awake. Nothing for you to do.',
    unknownTitle: 'Waiting for your child’s device',
    unknownBody:
      'This device has not reported yet whether message safety is running, so an empty list does not tell you much. It should update the next time the device checks in.',
    outgoingAvailableTitle: 'Also check what your child writes',
    outgoingAvailableBody:
      'Messages your child receives are being checked. KidGate can check what they type in chat apps too — bullying and self-harm show up there far more often. Set it up on their device.',
  },
  languagesLabel: 'Languages scanned',
  languagesHint:
    'Which languages of concerning words this device looks for. Pick up to {{max}}.',
  languagesDefaultHint: 'Defaults to the language this device is set to.',
} as const;
