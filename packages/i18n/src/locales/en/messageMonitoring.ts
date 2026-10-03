export const messageMonitoring = {
  actionTitle: 'Message Alerts',
  actionDescription: 'Get alerted when concerning words appear in messages',
  title: 'Message Alerts',
  heroTitle: 'Message Alerts',
  heroSubtitle:
    'KidGate flags concerning words in your child’s messages and searches, and alerts you. You see only the flagged word or phrase, never the message or the search.',
  androidOnlyNote:
    'Messages can be checked only on Android devices. Searches can also be checked in the Chrome extension.',
  searchOnlyNote:
    'Only searches can be checked here. Messages can be checked only on Android devices.',
  recentTitle: 'Recent alerts',
  emptyTitle: 'No alerts yet',
  emptySubtitle: 'No concerning words have been seen in messages.',
  emptySubtitleNotWatching:
    'Messages are not being checked right now, so this list stays empty whatever happens.',
  flaggedTerm: 'Flagged: “{{term}}”',
  flaggedTermPrefix: 'Flagged: “',
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
  // saw more than the flagged word or phrase — the whole product promise is
  // that it did not. An AI-confirmed alert keeps the shortest phrase that
  // carries the concern, up to 60 characters, so "word" alone overstates it.
  guidanceToggle: 'What to do next',
  guidanceHide: 'Hide',
  guidanceFooter:
    'KidGate did not record the message — only this word or phrase. Anything more has to come from your child.',
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
      'This alert came from a device or word list this version no longer names. The flagged word or phrase above is what to ask about; nothing else about the message was kept.',
  },
  setupTitle: 'Message Alerts',
  // Read on the child's device (the setup wizard and `MessageSafetyCard`), so
  // it speaks to the child whose messages these are. The AI step is incoming
  // only: typed text and searches never leave the phone.
  setupBody:
    'When your parent turns this on, KidGate checks the messages you receive for warning words, right on this phone. Your parent sees only a flagged word or phrase, never your messages. If they also turn on AI message analysis, an unclear message can be sent to an AI service to check, with emails, phone numbers, links and @handles removed.',
  setupGrant: 'Allow notification access',
  setupEnable: 'Message Alerts',
  controlledByParentHint:
    'Turned on or off from the parent app or the web dashboard, not here.',
  parentIncomingLabel: 'Scan messages they receive',
  parentOutgoingLabel: 'Scan messages they type',
  parentSearchLabel: 'Scan what they search for',
  parentSearchHint:
    'Browsers and YouTube. Only the flagged word or phrase is reported, never the search itself.',
  // Android only: search is read by the same service as typed messages, and
  // the child's device offers that permission once receiving is switched on.
  parentSearchHintNotGranted:
    'Needs the same permission as Scan messages they type. Turn on Scan messages they receive, then allow it on their device.',
  parentToggleHintGranted: 'On this phone.',
  parentToggleHintNotGranted:
    'Not allowed on this phone yet — open KidGate on their device to grant it.',
  parentProfanityLabel: 'Also flag strong language',
  parentProfanityHint:
    'Off by default — plain swearing is common and this turns it into an alert too.',
  parentToggleSaveFailed: 'Could not save that change.',
  settingsTitle: 'Message Alerts settings',
  consentTitle: 'AI message analysis',
  consentBody:
    'When on, a message whose flagged word could be harmless, or matched only loosely, is sent to an AI service to confirm whether it is truly concerning before you are alerted. Emails, phone numbers, links and @handles are removed first; names and the rest of the message are not. A clear match alerts at once without sending anything.',
  consentEnable: 'Enable AI analysis',
  consentConfirmTitle: 'Enable AI message analysis?',
  consentConfirmBody:
    'Borderline messages will be sent to an AI service to check for concerns, with emails, phone numbers, links and @handles removed. Names and the rest of the message are not removed. You confirm you consent to this processing.',
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
  // The disclosure in front of the typing service's accessibility grant, and
  // that one grant also carries the search half (`KidGateSearchApps`), which
  // reads any field in those apps, not only a search box.
  outgoingDisclosureBody:
    'KidGate checks what you type in chat apps for the same warning words. If your parent turns on search alerts, it also checks what you type in browsers, YouTube and the Google app. It never reads a password box. The check happens on this phone: nothing you type is sent anywhere, and only a flagged word or phrase reaches your parent.',
  outgoingRestrictedHint:
    'If the switch is greyed out, open Settings › Apps › KidGate, tap the ⋮ menu and choose “Allow restricted settings”, then come back.',
  notice: {
    revokedTitle: 'Message checking has stopped',
    revokedBody:
      'Android turned off a permission KidGate needs, so messages are no longer being checked. Open KidGate on your child’s device and allow it again.',
    offTitle: 'Message Alerts are not switched on',
    // Never granted: the fix is on the child's device.
    offBody:
      'Nothing is being checked on your child’s device, so no alert can appear here. Open KidGate on their device to set it up.',
    // Granted, and the parent's switch is off: the fix is on this screen.
    switchedOffBody:
      'Nothing is being checked on your child’s device, so no alert can appear here. Turn on “Scan messages they receive” in the settings on this screen.',
    pendingTitle: 'Waiting for your child’s device to apply this',
    pendingBody:
      'You have switched this on. Your child’s device picks the change up the next time it checks in, which is usually within a couple of minutes — sooner if their phone is awake. Nothing for you to do.',
    unknownTitle: 'Waiting for your child’s device',
    unknownBody:
      'This device has not reported yet whether Message Alerts are running, so an empty list does not tell you much. It should update the next time the device checks in.',
    outgoingAvailableTitle: 'Also check what your child writes',
    outgoingAvailableBody:
      'Messages your child receives are being checked. KidGate can check what they type in chat apps too — bullying and self-harm show up there far more often. Set it up on their device.',
    outgoingSwitchedOffBody:
      'Messages your child receives are being checked. KidGate can check what they type in chat apps too — bullying and self-harm show up there far more often. Turn on “Scan messages they type” in the settings on this screen.',
  },
  languagesLabel: 'Languages scanned',
  languagesHint:
    'Which languages of concerning words this device looks for. Pick up to {{max}}.',
  languagesDefaultHint: 'Defaults to the language this device is set to.',
  setupStepFindKidGate: 'Find KidGate in the notification access list and turn it on.',
} as const;
