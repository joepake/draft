export const appInventory = {
  title: 'Aplicativos neste dispositivo',
  subtitle: 'Tudo o que o KidGate encontrou instalado, não apenas o que mudou.',
  summaryFlagged: '{{flagged}} de {{total}} aplicativos merecem atenção',
  summaryClear: 'Nada sinalizado entre {{total}} aplicativos',
  flaggedTitle: 'Merecem atenção',
  otherTitle: 'Todo o resto',
  unclassifiedTitle: 'Ainda não identificados',
  scannedLabel: 'Última verificação',
  staleNote:
    'Esta lista está desatualizada. Ela é renovada quando o dispositivo se conectar de novo.',
  truncatedNote: 'Mostrando {{shown}} de {{total}} aplicativos encontrados.',
  firstScanNote:
    'Esta é a primeira verificação, então o KidGate não sabe quando cada um chegou.',
  newBadge: 'Novo',
  ageBadge: '{{age}}+',
  emptyTitle: 'Nada verificado ainda',
  emptySubtitle: 'O dispositivo publicará sua lista de aplicativos na próxima conexão.',
  unsupportedTitle: 'Este dispositivo não consegue listar seus aplicativos',
  unsupportedIos:
    'A Apple não permite que nenhum aplicativo leia o que está instalado em um iPhone ou iPad, então o KidGate só consegue relatar aplicativos conforme eles são usados.',
  unsupportedGeneric: 'Este dispositivo não relata os aplicativos instalados nele.',
  incompleteNote: 'Um aplicativo sem ícone na tela inicial pode não aparecer aqui.',
  blockHint:
    'Para bloquear um aplicativo, abra Aplicativos bloqueados no próprio dispositivo.',
  howItWorksLabel: 'Como esta lista funciona',
} as const;
