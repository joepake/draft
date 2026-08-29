/**
 * A janela do agente de desktop (macOS e Windows).
 * Contexto chave a chave: ver en/macos.ts.
 */
export const macos = {
  headingNow: 'Agora',
  headingEnforce: 'O que este Mac consegue aplicar',
  headingEnforceHint:
    'O que seus pais definiram e com que firmeza este Mac consegue manter.',
  headingRemovable: 'Quão fácil é remover',

  parentAccessBody:
    'Digite o PIN dos pais para escolher quais apps ficam bloqueados neste Mac.',
  checking: 'Verificando…',

  enforcing: 'Proteção em execução',
  enforcingYes: 'Sim',
  enforcingFailed: 'Não — {{count}} verificações seguidas falharam',
  enforcingFailed_one: 'Não — a última verificação falhou',

  lockState: 'Dispositivo bloqueado',
  lockStateNo: 'Não',
  stateNotChecked: 'Ainda não verificado',
  lockStateParent: 'Sim — bloqueado pelos pais',
  lockStateSchedule: 'Sim — Horários bloqueados',
  lockStateDailyLimit: 'Sim — Limite diário atingido',

  appBlocking: 'Bloqueio de apps',
  appBlockingBestEffort:
    'Melhor esforço — os apps são fechados depois de abrir, não impedidos de abrir',

  webFilterLabel: 'Filtro da web',
  webFilterUnavailable: 'Não disponível neste Mac',
  notSupportedOnThisDevice: 'Não compatível com este dispositivo',
  filterAwaitingApproval: 'Aguardando aprovação nos Ajustes do Sistema',
  filterSwitchedOff: 'Desativado nos Ajustes do Sistema',
  filterInterrupted: 'Parado após um problema — o KidGate vai restaurá-lo',
  setupFilterApprovalBody:
    'Ative o KidGate em Extensões de rede para o filtro da web começar.',
  setupFilterSwitchBody:
    'O Filter Network Content está desativado para o KidGate. Ative novamente para continuar filtrando.',
  setupOpenSettings: 'Abrir Ajustes',
  setupTitle: 'Concluir a configuração deste dispositivo',
  setupRowLabel: 'Permissões',
  setupRowHint: 'Veja o que este dispositivo ainda precisa que você permita.',
  setupStepBlockedNoPrompt:
    'Foi recusado, e este dispositivo não pergunta de novo — ative o KidGate em Configurações → Privacidade e segurança.',
  setupSubtitle:
    'O sistema pede permissão para cada um destes itens, e só quem está usando este dispositivo pode autorizar. Fazer isso agora evita que a pergunta chegue ao seu filho ou filha depois.',
  setupStepFilterApprovalTitle: 'Aprovar o filtro da web',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting:
    'Aparece nos Ajustes do Sistema assim que a etapa acima for aprovada.',
  setupStepLocationBody:
    'Permite que sua família veja onde este dispositivo está. Nada é compartilhado até você ativar “Compartilhar localização”.',
  setupStepCameraTitle: 'Câmera',
  setupStepCameraBody:
    'Anexa uma foto quando seu filho ou filha envia um SOS ou responde a um Check-in. Nenhuma foto é tirada agora.',
  setupStepDone: 'Configurado — não há mais nada a fazer aqui.',
  setupStepBlocked:
    'Foi recusado antes. O macOS só pergunta uma vez — ative o KidGate em “Privacidade e Segurança”.',

  scheduleLabel: 'Horários bloqueados',
  dailyLimitLabel: 'Limite diário',
  enforcedHere: 'Ativado, aplicado pelo KidGate',

  screenTimeLabel: 'Tempo de Uso',
  screenTimeAgentMeasured:
    'Contado pelo KidGate. O tempo em que o KidGate não está em execução não é contado.',

  batteryLabel: 'Bateria',
  batteryReported: 'Informada à família',
  batteryNone: 'Este Mac não tem bateria',

  locationLabel: 'Localização',
  locationOff: 'Desativada',
  locationCoarse: 'Aproximada — por Wi-Fi, não GPS',

  accountLabel: 'Conta da criança',
  accountStandard: 'Padrão',
  accountAdmin: 'Administrador — esta conta pode desligar o KidGate por completo',

  restartLabel: 'Reabre se for fechado',
  restartYes: 'Sim',
  restartNo: 'Não — a configuração não foi concluída',

  forceQuitLabel: 'Vezes que o KidGate foi fechado',

  startAtLoginSectionTitle: 'Inicialização',
  startAtLoginSectionDescription:
    'O KidGate mede o tempo de uso e aplica as regras somente enquanto está em execução.',
  startAtLoginLabel: 'Abrir o KidGate ao iniciar a sessão',
  startAtLoginHintOn:
    'O KidGate abre junto com este dispositivo e reabre se for fechado.',
  startAtLoginHintOff: 'Nada é medido ou bloqueado até alguém abrir o KidGate de novo.',
  startAtLoginUnavailable:
    'Este dispositivo não deixou o KidGate se adicionar à inicialização.',

  stillRunningTitle: 'O KidGate continua em execução',
  stillRunningBodyMac: 'Abra de novo pelo ícone do KidGate na barra de menus.',
  stillRunningBodyWindows: 'Abra de novo pelo ícone do KidGate na área de notificação.',

  updateAvailableTitle: 'Há uma versão mais recente do KidGate',
  updateAvailableBody: 'O KidGate {{version}} está pronto para download.',
  updateAction: 'Obter a atualização',

  chooseApps: 'Escolher apps para bloquear',
  chooseAppsHint:
    'Escolha os apps a bloquear neste Mac. Os pais podem ativar ou desativar o bloqueio pelo telefone.',
  saveSelection: 'Salvar',
  noAppsFound: 'Nenhum app encontrado na pasta Applications.',
};
