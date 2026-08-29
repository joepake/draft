export const messageMonitoring = {
  actionTitle: '메시지 경고',
  actionDescription: '메시지에 우려되는 단어가 나타나면 알림을 받으세요',
  title: '메시지 경고',
  heroTitle: '메시지 안전',
  heroSubtitle:
    'KidGate는 자녀의 메시지에서 우려되는 단어를 표시하고 알려줍니다. 메시지 내용은 표시하지 않고 표시된 단어만 보여줍니다.',
  androidOnlyNote: 'Android 기기에서만 사용할 수 있습니다.',
  recentTitle: '최근 경고',
  emptyTitle: '아직 경고 없음',
  emptySubtitle: '메시지에서 우려되는 단어가 발견되지 않았습니다.',
  emptySubtitleNotWatching:
    '지금은 메시지를 검사하지 않으므로 무슨 일이 있어도 이 목록은 비어 있습니다.',
  flaggedTerm: '표시된 단어: “{{term}}”',
  flaggedTermPrefix: '표시된 단어: “',
  flaggedTermSuffix: '”',
  aiConfirmed: 'AI가 확인함',
  categoryPredator: '그루밍 의심',
  categorySelfHarm: '자해 의심',
  categoryExplicit: '노골적 콘텐츠',
  categoryViolence: '위협 또는 폭력',
  categoryBullying: '괴롭힘',
  categoryDrugs: '마약 또는 약물',
  categoryAlcohol: '술',
  categoryTobacco: '담배 또는 전자담배',
  categoryGambling: '도박',
  categoryProfanity: '부적절한 언어',
  categoryUnknown: '표시된 메시지',
  setupTitle: '메시지 안전',
  setupBody:
    '메시지에 우려되는 단어가 있는지 확인합니다. KidGate는 메시지를 표시하지 않고 걱정스러운 내용이 나타날 때만 알립니다.',
  setupGrant: '알림 접근 허용',
  setupEnable: '메시지 안전',
  controlledByParentHint:
    '켜고 끄는 것은 여기가 아니라 부모님 휴대폰의 KidGate 앱에서 합니다.',
  parentIncomingLabel: '받은 메시지 검사',
  parentOutgoingLabel: '입력한 메시지 검사',
  parentToggleHintGranted: '이 휴대폰에서 사용 중입니다.',
  parentToggleHintNotGranted:
    '이 휴대폰에서는 아직 허용되지 않았습니다. 자녀 기기에서 KidGate를 열어 허용해 주세요.',
  parentToggleSaveFailed: '변경 내용을 저장하지 못했습니다.',
  settingsTitle: '메시지 알림 설정',
  checkedTitle: '확인함, 문제 없음',
  checkedSubtitle:
    '감시 대상 단어가 나왔지만 문맥상 문제가 없다고 판단해 알리지 않았습니다. 무엇이 대신 걸러지고 있는지 볼 수 있도록 보여 드립니다. 알림이 왔어야 할 항목이 있다면 알려 주세요.',
  consentTitle: 'AI 메시지 분석',
  consentBody:
    '켜면 키워드가 경계로 표시한 메시지가 이름·번호·링크를 제거한 상태로 AI 서비스에 전송되어, 알림 전에 실제로 우려되는지 확인합니다. 고위험 단어는 아무것도 전송하지 않고 즉시 알립니다.',
  consentEnable: 'AI 분석 켜기',
  consentConfirmTitle: 'AI 메시지 분석을 켤까요?',
  consentConfirmBody:
    '개인정보를 제거한 경계 메시지가 확인을 위해 AI 서비스로 전송됩니다. 이 처리에 동의함을 확인합니다.',
  consentAgree: '동의합니다',
  outgoingTitle: '내가 쓰는 메시지',
  outgoingBody:
    'KidGate는 채팅 앱에서 입력하는 내용도 확인할 수 있습니다. 같은 경고 단어를 이 휴대폰 안에서 찾습니다. 메시지 내용은 어디로도 전송되지 않습니다.',
  outgoingEnable: '내가 쓴 내용 확인',
  outgoingGrant: '허용하기',
  directionIncoming: '받음',
  directionOutgoing: '보냄',
  alertBodyIncoming: '앱에서 온 메시지',
  alertBodyOutgoing: '앱에서 보낸 메시지',
  aiLegend: '이 아이콘이 있는 알림은 알림을 보내기 전에 AI가 확인한 것입니다.',
  setupRevoked:
    'Android가 이 기능에 필요한 권한을 껐습니다. 메시지 검사를 계속하려면 다시 허용해 주세요.',
  outgoingRevoked:
    'Android가 이 기능을 껐습니다. 작성한 내용 검사를 계속하려면 권한을 다시 허용해 주세요.',
  outgoingDisclosureTitle: '허용하기 전에',
  outgoingDisclosureBody:
    'KidGate는 메시지 앱에 입력한 내용만 읽습니다. 다른 앱은 읽지 않고, 비밀번호 입력란은 절대 읽지 않습니다. 주의 단어 검사는 이 휴대폰 안에서 이루어집니다. 메시지는 어디로도 전송되지 않으며, 표시된 단어만 보호자에게 전달됩니다.',
  outgoingRestrictedHint:
    '스위치가 흐리게 표시되면 설정 › 앱 › KidGate를 열고 ⋮ 메뉴에서 “제한된 설정 허용”을 선택한 뒤 다시 돌아오세요.',
  notice: {
    revokedTitle: '메시지 검사가 중단되었습니다',
    revokedBody:
      'KidGate에 필요한 권한이 Android에서 꺼져 메시지가 더 이상 검사되지 않습니다. 자녀 기기에서 KidGate를 열고 다시 허용해 주세요.',
    offTitle: '메시지 보호가 켜져 있지 않습니다',
    offBody:
      '자녀 기기에서 아무것도 검사하지 않으므로 여기에 알림이 표시될 수 없습니다. 설정하려면 자녀 기기에서 KidGate를 열어 주세요.',
    pendingTitle: '자녀 기기에 적용되기를 기다리는 중',
    pendingBody:
      '켜 두셨습니다. 자녀 기기가 다음에 연결될 때 반영되며, 보통 몇 분 안에, 휴대폰을 쓰는 중이면 더 빨리 적용됩니다. 따로 하실 일은 없습니다.',
    unknownTitle: '자녀 기기의 응답을 기다리는 중',
    unknownBody:
      '이 기기는 메시지 보호가 작동 중인지 아직 알려오지 않았습니다. 따라서 목록이 비어 있어도 판단하기 어렵습니다. 기기가 다음에 연결되면 갱신됩니다.',
    outgoingAvailableTitle: '자녀가 쓰는 내용도 검사하기',
    outgoingAvailableBody:
      '받은 메시지는 이미 검사되고 있습니다. KidGate는 자녀가 메시지 앱에서 입력하는 내용도 검사할 수 있습니다. 괴롭힘과 자해는 그쪽에서 훨씬 자주 나타납니다. 자녀 기기에서 설정해 주세요.',
  },
  languagesLabel: '검색할 언어',
  languagesHint:
    '이 기기가 우려되는 단어를 찾을 언어입니다. 최대 {{max}}개까지 선택할 수 있습니다.',
  languagesDefaultHint: '기본값은 기기의 언어입니다.',
} as const;
