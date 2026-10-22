export const webSignIn = {
  title: 'Войти через браузер',
  subtitle: 'Управляйте семьёй с компьютера',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Браузер получит доступ к вашей семье только после разрешения с этого телефона.',
  stepsTitle: 'На компьютере',
  step1: 'Откройте {{url}} в браузере.',
  step2: 'Дождитесь, пока на странице входа появится QR-код.',
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
    'Он получит те же права, что и этот телефон: увидит, где дети, изменит лимиты, заблокирует устройства и одобрит запросы. Вносить изменения он сможет 7 дней, а удалить его можно в любой момент в разделе Семья → Родители. Разрешайте, только если входите вы сами.',
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
  sessionsTitle: 'Панель',
  sessionRow: '{{browser}} на {{os}}',
  sessionRowUnknown: 'Веб-браузер',
  sessionExpires: 'Может вносить изменения до {{date}}',
  sessionViaQr: 'Разрешён с помощью QR-кода',
  sessionViaPin: 'Разрешён с помощью PIN родителя',
  thisBrowser: 'Этот браузер',
  sessionsRevoke: 'Удалить',
  sessionsRevokeConfirmTitle: 'Удалить этот браузер?',
  sessionsRevokeConfirmBody:
    'Он больше не сможет менять настройки и управлять устройствами. До указанной даты он ещё может менять некоторые данные устройств, например название. Но он может по-прежнему показывать информацию о вашей семье, пока кто-нибудь не выйдет из аккаунта в этом браузере.',
  revokedToast: 'Браузер удалён.',
  revokeFailed: 'Не удалось удалить этот браузер. Попробуйте ещё раз.',
} as const;
