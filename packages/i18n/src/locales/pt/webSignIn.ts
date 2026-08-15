export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate na web',
  title: 'Autorizar um navegador',
  subtitle: 'Gerencie a família pelo computador',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Um navegador só acessa sua família depois que você autoriza por este telefone.',
  stepsTitle: 'No seu computador',
  step1: 'Abra {{url}} em um navegador.',
  step2: 'Escolha “Entrar com o app do KidGate”.',
  step3: 'Escaneie o código exibido com a câmera abaixo.',
  scanHint: 'Mantenha o QR code dentro do quadro.',
  manualTitle: 'Digite o código de 6 caracteres',
  manualHint: 'O código aparece embaixo do QR code no computador.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Continuar',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Autorizar este navegador?',
  confirmBody:
    'Ele terá o mesmo controle deste telefone: verá onde seus filhos estão, mudará limites, bloqueará dispositivos e aprovará pedidos. Só autorize se for você quem está entrando.',
  confirmCodeLabel: 'Código do seu computador',
  approveButton: 'Autorizar',
  declineButton: 'Não autorizar',
  declinedToast: 'Navegador não autorizado.',
  approvedTitle: 'Navegador autorizado',
  approvedBody: 'Seu computador está entrando. Pode largar o telefone.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Esse QR code não é de login na web. Confira se o computador está na tela de login.',
  expired: 'Esse código expirou. Mostre um novo no computador.',
  alreadyUsed: 'Esse código já foi usado. Mostre um novo no computador.',
  notFound: 'Código inválido. Confira os seis caracteres e tente de novo.',
  failed: 'Não foi possível concluir a solicitação. Tente novamente.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Navegadores autorizados',
  sessionsEmpty: 'Nenhum navegador está conectado à sua conta.',
  sessionsRevoke: 'Sair',
  sessionExpires: 'Expira {{when}}',
  revokedToast: 'Esse navegador foi desconectado.',
} as const;
