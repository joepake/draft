export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: '웹에서 KidGate',
  title: '브라우저 허용',
  subtitle: '컴퓨터에서 가족 관리',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: '브라우저는 이 휴대폰에서 허용한 뒤에만 가족 정보를 볼 수 있습니다.',
  stepsTitle: '컴퓨터에서',
  step1: '브라우저에서 {{url}} 을(를) 엽니다.',
  step2: '“KidGate 앱으로 로그인”을 선택합니다.',
  step3: '화면에 뜬 QR 코드를 아래 카메라로 스캔합니다.',
  scanHint: 'QR 코드를 사각형 안에 맞춰 주세요.',
  manualTitle: '6자리 코드 입력',
  manualHint: '코드는 컴퓨터의 QR 코드 아래에 적혀 있습니다.',
  manualPlaceholder: 'K7M2QP',
  continueButton: '계속',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: '이 브라우저를 허용할까요?',
  confirmBody:
    '이 휴대폰과 같은 권한을 갖습니다. 아이의 위치를 보고, 제한을 바꾸고, 기기를 잠그고, 요청을 승인할 수 있습니다. 본인이 로그인하는 경우에만 허용하세요.',
  confirmCodeLabel: '컴퓨터에 표시된 코드',
  approveButton: '허용',
  declineButton: '허용 안 함',
  declinedToast: '브라우저를 허용하지 않았습니다.',
  approvedTitle: '브라우저를 허용했습니다',
  approvedBody: '컴퓨터가 로그인하고 있습니다. 휴대폰은 내려놓아도 됩니다.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    '이 QR 코드는 웹 로그인 코드가 아닙니다. 컴퓨터에 로그인 화면이 열려 있는지 확인하세요.',
  expired: '코드가 만료되었습니다. 컴퓨터에서 새 코드를 표시하세요.',
  alreadyUsed: '이미 사용한 코드입니다. 컴퓨터에서 새 코드를 표시하세요.',
  notFound: '유효하지 않은 코드입니다. 여섯 자리를 확인하고 다시 시도하세요.',
  failed: '요청을 완료하지 못했습니다. 다시 시도해 주세요.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: '허용된 브라우저',
  sessionsEmpty: '계정에 로그인한 브라우저가 없습니다.',
  sessionsRevoke: '로그아웃',
  sessionExpires: '만료 {{when}}',
  revokedToast: '해당 브라우저를 로그아웃했습니다.',
} as const;
