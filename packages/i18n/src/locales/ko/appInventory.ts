export const appInventory = {
  title: '이 기기의 앱',
  pendingTitle: '승인을 기다리는 중',
  pendingBadge: '허용할 때까지 차단됨',
  approvedBadge: '허용함',
  installedAtLabel: '{{when}} 설치됨',
  allowApp: '허용',
  subtitle: '변경된 것만이 아니라 KidGate가 설치된 상태로 찾은 모든 것.',
  summaryFlagged: '{{total}}개 앱 중 {{flagged}}개는 확인해 볼 만합니다',
  summaryClear: '{{total}}개 앱 중 표시된 항목이 없습니다',
  flaggedTitle: '확인해 볼 만함',
  otherTitle: '그 외 전부',
  scannedLabel: '마지막 검사',
  staleNote: '이 목록은 오래되었습니다. 기기가 다음에 연결되면 갱신됩니다.',
  truncatedNote: '찾은 {{total}}개 중 {{shown}}개를 표시하고 있습니다.',
  firstScanNote:
    '첫 번째 검사이므로 KidGate는 이 앱들이 언제 추가되었는지 알 수 없습니다.',
  newBadge: '신규',
  ageBadge: '{{age}}+',
  browserExtension: 'Chrome 확장 프로그램',
  titleExtension: '이 브라우저의 확장 프로그램',
  subtitleExtension:
    '변경된 것뿐 아니라 KidGate가 브라우저에서 찾은 모든 확장 프로그램입니다.',
  summaryFlaggedExtension:
    '{{total}}개 Chrome 확장 프로그램 중 {{flagged}}개는 확인해 보세요',
  summaryClearExtension:
    '{{total}}개 Chrome 확장 프로그램 중 문제될 만한 것은 없습니다',
  incompleteNoteExtension:
    '여기에는 브라우저 확장 프로그램만 표시됩니다. 기기에 설치된 앱은 브라우저가 볼 수 없습니다.',
  blockHintExtension:
    '확장 프로그램을 지우려면 해당 기기에서 브라우저의 확장 프로그램 페이지를 여세요.',
  emptyTitleExtension: '아직 검사한 적 없음',
  emptySubtitleExtension: '다음 연결 때 브라우저가 확장 프로그램 목록을 보냅니다.',
  emptyTitle: '아직 검사한 적 없음',
  emptySubtitle: '기기가 다음에 연결될 때 앱 목록을 보냅니다.',
  unsupportedTitle: '이 기기는 앱을 나열할 수 없습니다',
  unsupportedIos:
    'Apple은 어떤 앱도 iPhone이나 iPad에 설치된 항목을 읽지 못하게 합니다. 그래서 KidGate는 앱이 사용될 때만 보고할 수 있습니다.',
  unsupportedGeneric: '이 기기는 설치된 앱을 보고하지 않습니다.',
  incompleteNote: '홈 화면에 아이콘이 없는 앱은 여기에 나타나지 않을 수 있습니다.',
  blockHint: '앱을 막으려면 기기에서 직접 차단된 앱을 여세요.',
  howItWorksLabel: '이 목록이 작동하는 방식',
  markSafe: '안전함',
  dismissedTitle: '안전하다고 표시함',
  undoSafe: '실행 취소',
  howToBlock: '차단하는 방법',
} as const;
