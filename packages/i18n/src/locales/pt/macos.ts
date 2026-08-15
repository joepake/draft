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
  lockStateNotChecked: 'Ainda não verificado',
  lockStateParent: 'Sim — bloqueado pelos pais',
  lockStateSchedule: 'Sim — Horários bloqueados',
  lockStateDailyLimit: 'Sim — Limite diário atingido',

  appBlocking: 'Bloqueio de apps',
  appBlockingBestEffort:
    'Melhor esforço — os apps são fechados depois de abrir, não impedidos de abrir',

  webFilterLabel: 'Filtro da web',
  webFilterUnavailable: 'Não disponível neste Mac',
  notSupportedOnThisDevice: 'Não compatível com este dispositivo',

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
