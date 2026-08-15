export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate в браузере',
  title: 'Разрешить браузер',
  subtitle: 'Управляйте семьёй с компьютера',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Браузер получит доступ к вашей семье только после разрешения с этого телефона.',
  stepsTitle: 'На компьютере',
  step1: 'Откройте {{url}} в браузере.',
  step2: 'Выберите «Войти через приложение KidGate».',
  step3: 'Отсканируйте показанный код камерой ниже.',
  scanHint: 'Держите QR-код внутри рамки.',
  manualTitle: 'Введите код из 6 символов',
  manualHint: 'Код написан под QR-кодом на компьютере.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Продолжить',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Разрешить этот браузер?',
  confirmBody:
    'Он получит те же права, что и этот телефон: увидит, где дети, изменит лимиты, заблокирует устройства и одобрит запросы. Разрешайте, только если входите вы сами.',
  confirmCodeLabel: 'Код с вашего компьютера',
  approveButton: 'Разрешить',
  declineButton: 'Не разрешать',
  declinedToast: 'Браузер не разрешён.',
  approvedTitle: 'Браузер разрешён',
  approvedBody: 'Компьютер выполняет вход. Телефон можно отложить.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Это не код входа в веб-версию. Проверьте, открыт ли на компьютере экран входа.',
  expired: 'Срок действия кода истёк. Покажите новый на компьютере.',
  alreadyUsed: 'Этот код уже использован. Покажите новый на компьютере.',
  notFound: 'Код неверный. Проверьте шесть символов и попробуйте снова.',
  failed: 'Не удалось выполнить запрос. Попробуйте ещё раз.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Разрешённые браузеры',
  sessionsEmpty: 'В вашу учётную запись не вошёл ни один браузер.',
  sessionsRevoke: 'Выйти',
  sessionExpires: 'Истекает {{when}}',
  revokedToast: 'Этот браузер вышел из аккаунта.',
} as const;
