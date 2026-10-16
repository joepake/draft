export const webSignIn = {
  title: '웹에서 로그인',
  subtitle: '컴퓨터에서 가족 관리',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: '브라우저는 이 휴대폰에서 허용한 뒤에만 가족 정보를 볼 수 있습니다.',
  stepsTitle: '컴퓨터에서',
  step1: '브라우저에서 {{url}} 을(를) 엽니다.',
  step2: '로그인 페이지에 QR 코드가 표시될 때까지 기다립니다.',
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
    '이 휴대폰과 같은 권한을 갖습니다. 아이의 위치를 보고, 제한을 바꾸고, 기기를 잠그고, 요청을 승인할 수 있습니다. 7일 동안 변경할 수 있으며, 가족 → 부모에서 언제든 삭제할 수 있습니다. 본인이 로그인하는 경우에만 허용하세요.',
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
  sessionsTitle: '변경할 수 있는 브라우저',
  sessionsHint:
    '이 브라우저들은 이 계정으로 웹 대시보드에 로그인되어 있으며 변경할 수 있습니다. 가족 정보만 볼 수 있는 브라우저는 여기에 표시되지 않습니다.',
  sessionsEmpty:
    '변경할 수 있는 브라우저가 없습니다. 브라우저를 허용하면 여기에 표시됩니다.',
  sessionRow: '{{os}}의 {{browser}}',
  sessionRowUnknown: '웹 브라우저',
  sessionExpires: '{{date}}까지 변경할 수 있습니다',
  sessionViaQr: 'QR 코드로 허용했습니다',
  sessionViaPin: '부모 PIN으로 허용했습니다',
  thisBrowser: '이 브라우저',
  sessionsRevoke: '삭제',
  sessionsRevokeConfirmTitle: '이 브라우저를 삭제할까요?',
  sessionsRevokeConfirmBody:
    '이 브라우저는 더 이상 설정을 변경하거나 기기를 제어할 수 없습니다. 표시된 날짜까지는 이름 등 기기의 일부 정보를 계속 변경할 수 있습니다. 다만 누군가 그 브라우저에서 로그아웃할 때까지는 가족 정보가 계속 표시될 수 있습니다.',
  revokedToast: '브라우저를 삭제했습니다.',
  revokeFailed: '해당 브라우저를 삭제하지 못했습니다. 다시 시도해 주세요.',
} as const;
