export const messageMonitoring = {
  actionTitle: 'Message Alerts',
  actionDescription: 'Get alerted when concerning words appear in messages',
  title: 'Content alerts',
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
  flaggedTermMeaning: 'Meaning: {{gloss}}',
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
  // An alert with no advice hands a parent a category and a word and leaves
  // them to work out what either means at the worst possible moment. One entry
  // per `MESSAGE_ALERT_CATEGORIES` id plus the unknown fallback; the row looks
  // it up as `messageMonitoring.guidance.<category>`, so a category added to
  // the schema without a line here renders no block rather than a raw key.
  //
  // Two sentences each, and the second is an action. Neither may imply KidGate
  // saw more than the word — the whole product promise is that it did not.
  guidanceToggle: 'What to do next',
  guidanceHide: 'Hide',
  guidanceFooter:
    'KidGate did not record the message — only this word. Anything more has to come from your child.',
  guidance: {
    predator:
      'Grooming usually starts friendly, from someone a child believes is their own age. Ask who they have been talking to lately and how the two met, before mentioning the alert — a child who feels caught stops answering.',
    selfHarm:
      'Words like these are far more often a signal than a plan, and asking about them directly does not plant the idea. Say what you noticed and that you are not angry, and if the answer frightens you, contact a local crisis line the same day.',
    explicit:
      'This may be something sent to your child, something they were shown, or something they typed. Find out which before you react — being sent explicit content is a different conversation from sending it.',
    violence:
      'A threat is worth taking seriously even when it reads like a joke between friends. Ask whether it came from someone at school; if it did, the school is the fastest way to stop it.',
    bullying:
      'Children rarely raise this themselves, and the same words appear whether your child was the target or joined in. Ask what happened rather than whose fault it was, and note the dates in case the school needs them.',
    drugs:
      'One flagged word is not proof of use — curiosity, songs and jokes all trip this. Ask openly rather than searching their room; what matters most is that they keep telling you things.',
    alcohol:
      'Common in ordinary teenage conversation, so read this as context rather than evidence. It is a good moment to say plainly what your rule is, before a party makes it urgent.',
    tobacco:
      'Vaping spreads through friend groups and is usually social rather than secretive. Ask what their friends are using — naming the specific thing lands better than a general warning.',
    gambling:
      'Loot boxes, card packs and skin betting all count, and rarely feel like gambling to a child. Look at what they are spending inside games before treating it as a money problem.',
    profanity:
      'Strong language on its own is common and usually says nothing about safety. If these alerts are noise for your family, turn “Also flag strong language” off in the settings on this screen.',
    unknown:
      'This alert came from a device or word list this version no longer names. The flagged word above is what to ask about; nothing else about the message was kept.',
  },
  setupTitle: 'Message safety',
  setupBody:
    'Watch messages for concerning words. KidGate never shows you the message — only an alert if something worrying appears.',
  setupGrant: 'Allow notification access',
  setupEnable: 'Message safety',
  controlledByParentHint:
    'Turned on or off from the KidGate app on a parent’s phone, not here.',
  parentIncomingLabel: 'Scan messages they receive',
  parentOutgoingLabel: 'Scan messages they type',
  parentSearchLabel: 'Scan what they search for',
  parentSearchHint:
    'Browsers and YouTube. Only the flagged word is reported, never the search itself.',
  parentToggleHintGranted: 'On this phone.',
  parentToggleHintNotGranted:
    'Not allowed on this phone yet — open KidGate on their device to grant it.',
  parentProfanityLabel: 'Also flag strong language',
  parentProfanityHint:
    'Off by default — plain swearing is common and this turns it into an alert too.',
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
  directionSearch: 'Searched',
  alertBodyIncoming: 'Message from app',
  alertBodyOutgoing: 'Message sent from app',
  alertBodySearch: 'Search made on',
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
  setupStepFindKidGate:
    'Find KidGate in the notification access list and turn it on. KidGate can be listed twice — the other one is night call alerts, so if this step is still not done when you come back, turn the other one on.',
} as const;
