export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'ウェブ版 KidGate',
  title: 'ブラウザを許可',
  subtitle: 'パソコンから家族を管理',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro: 'ブラウザは、このスマートフォンで許可したあとにだけ家族の情報を見られます。',
  stepsTitle: 'パソコンでの操作',
  step1: 'ブラウザで {{url}} を開きます。',
  step2: '「KidGate アプリでログイン」を選びます。',
  step3: '表示された QR コードを下のカメラで読み取ります。',
  scanHint: 'QR コードを枠の中に収めてください。',
  manualTitle: '6文字のコードを入力',
  manualHint: 'コードはパソコンの QR コードのすぐ下に表示されています。',
  manualPlaceholder: 'K7M2QP',
  continueButton: '続ける',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'このブラウザを許可しますか？',
  confirmBody:
    'このスマートフォンと同じ権限になります。お子さまの居場所を見る、制限を変える、デバイスをロックする、リクエストを承認する、すべてできます。自分でログインしているときだけ許可してください。',
  confirmCodeLabel: 'パソコンに表示されているコード',
  approveButton: '許可',
  declineButton: '許可しない',
  declinedToast: 'ブラウザを許可しませんでした。',
  approvedTitle: 'ブラウザを許可しました',
  approvedBody: 'パソコンがログインしています。スマートフォンは置いて大丈夫です。',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'これはウェブログイン用の QR コードではありません。パソコンにログイン画面が表示されているか確認してください。',
  expired: 'このコードは期限切れです。パソコンで新しいコードを表示してください。',
  alreadyUsed:
    'このコードはすでに使用されています。パソコンで新しいコードを表示してください。',
  notFound: 'このコードは無効です。6文字を確認してもう一度お試しください。',
  failed: 'リクエストを完了できませんでした。もう一度お試しください。',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: '許可したブラウザ',
  sessionsEmpty: 'アカウントにログイン中のブラウザはありません。',
  sessionsRevoke: 'ログアウト',
  sessionExpires: '有効期限 {{when}}',
  revokedToast: 'そのブラウザをログアウトしました。',
} as const;
