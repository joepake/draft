export const webSignIn = {
  title: 'Entrar na web',
  subtitle: 'Gerencie a família pelo computador',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Um navegador só acessa sua família depois que você autoriza por este telefone.',
  stepsTitle: 'No seu computador',
  step1: 'Abra {{url}} em um navegador.',
  step2: 'Aguarde a página de login mostrar um QR code.',
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
    'Ele terá o mesmo controle deste telefone: verá onde seus filhos estão, mudará limites, bloqueará dispositivos e aprovará pedidos. Poderá fazer alterações por 7 dias, e você pode removê-lo a qualquer momento em Família → Responsáveis. Só autorize se for você quem está entrando.',
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
  sessionsTitle: 'Navegadores que podem fazer alterações',
  sessionsHint:
    'Estes navegadores estão conectados ao painel web com sua conta e podem fazer alterações. Um navegador que apenas mostra sua família não aparece na lista.',
  sessionsEmpty:
    'Nenhum navegador pode fazer alterações. Quando você autorizar um, ele aparecerá aqui.',
  sessionRow: '{{browser}} em {{os}}',
  sessionRowUnknown: 'Navegador web',
  sessionExpires: 'Pode fazer alterações até {{date}}',
  sessionViaQr: 'Autorizado com um código QR',
  sessionViaPin: 'Autorizado com o PIN dos pais',
  thisBrowser: 'Este navegador',
  sessionsRevoke: 'Remover',
  sessionsRevokeConfirmTitle: 'Remover este navegador?',
  sessionsRevokeConfirmBody:
    'Ele não poderá mais alterar configurações nem controlar dispositivos. Até a data mostrada, ele ainda pode alterar alguns detalhes dos dispositivos, como o nome. Mas ainda pode mostrar as informações da sua família até que alguém se desconecte nele.',
  revokedToast: 'Navegador removido.',
  revokeFailed: 'Não foi possível remover esse navegador. Tente novamente.',
} as const;
