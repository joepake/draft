export const userGuide = {
  title: 'Guia do usuário',
  subtitle:
    'Ajuda passo a passo sobre permissões, pareamento de dispositivos, controles diários e recursos de segurança.',
  stepLabel: 'Passo {{n}}',
  stepsSectionTitle: 'Passos',
  tipTitle: 'Dica',
  groups: {
    gettingStarted: {
      title: 'Primeiros passos',
      description: 'Configure os dispositivos dos pais e da criança pela primeira vez',
    },
    connection: {
      title: 'Conectar dispositivos',
      description: 'Pareie um dispositivo da criança ou convide outro responsável',
    },
    permissions: {
      title: 'Permissões do app',
      description:
        'Conceda as permissões que o KidGate precisa no dispositivo da criança',
    },
    controls: {
      title: 'Controles diários',
      description: 'Limites, horários, bloqueio de apps e bloqueio do dispositivo',
    },
    safety: {
      title: 'Segurança e monitoramento',
      description: 'Localização, Check-In, SOS, Filtro da web e proteção',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Configurar um dispositivo dos pais',
      summary:
        'Crie sua conta e sua família e, em seguida, conecte o primeiro dispositivo da criança.',
      tip: 'Defina o PIN dos pais logo no início. Você precisa dele para alterar configurações sensíveis e desbloquear controles no dispositivo da criança.',
      steps: {
        '1': 'Instale o KidGate no seu dispositivo. Abra o app e escolha Este é um dispositivo dos pais.',
        '2': 'Entre com Google ou Apple, ou crie uma conta de e-mail. Confirme que você é o dono da família nesta casa.',
        '3': 'Se solicitado, dê um nome à sua família (por exemplo, “Família Nguyen”). Esse nome aparece quando outros responsáveis entrarem.',
        '4': 'Defina um PIN dos pais (6 dígitos) em Ajustes → Segurança. Memorize-o ou guarde-o em local seguro e não o compartilhe com as crianças.',
        '5': 'Recomendado: ative o Bloqueio do app e o desbloqueio biométrico em Ajustes para que outras pessoas não abram o app dos pais no seu dispositivo.',
        '6': 'Abra Família (Dispositivos). Toque em + e escolha Conectar um dispositivo da criança. Deixe esta tela pronta para o código QR ou o código do dispositivo da criança.',
        '7': 'Depois que o dispositivo da criança se conectar, abra o cartão desse dispositivo. Defina o Limite diário e os Horários bloqueados e conclua as permissões junto com seu filho.',
      },
    },
    getStartedChild: {
      title: 'Configurar um dispositivo da criança',
      summary: 'Instale o KidGate no dispositivo da criança e conclua as permissões.',
      tip: 'Faça isso junto com um responsável. Muitas telas de permissão aparecem apenas uma vez e são fáceis de perder sozinho.',
      steps: {
        '1': 'Instale o KidGate no dispositivo da criança. Abra o app e escolha Este é um dispositivo da criança.',
        '2': 'Mantenha a tela de pareamento aberta. Mostre o código QR ao responsável ou leia em voz alta o código de 6 caracteres.',
        '3': 'No dispositivo dos pais, escaneie o código QR ou digite o código. No dispositivo da criança, confirme o responsável quando solicitado — aceite apenas alguém que você conhece.',
        '4': 'Aguarde até a tela inicial mostrar que o dispositivo está conectado. Não force o fechamento do KidGate durante a configuração.',
        '5': 'Na tela Status, conceda todas as permissões solicitadas pelo KidGate (notificações, localização, câmera e permissões específicas da plataforma). Toque em cada linha até que ela apareça como permitida.',
        '6': 'Deixe o KidGate instalado e com a sessão iniciada no dispositivo da criança. Depois disso, os responsáveis gerenciam os limites pelo próprio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar um dispositivo da criança',
      summary:
        'Pareie um novo dispositivo da criança à sua família com um código QR ou um código.',
      tip: 'Os códigos expiram. Se o pareamento falhar, selecione Novo código no dispositivo da criança e tente novamente.',
      steps: {
        '1': 'No dispositivo da criança: abra o KidGate → Este é um dispositivo da criança. Deixe a tela do código QR visível.',
        '2': 'No dispositivo dos pais: abra Família → toque em + → Conectar um dispositivo da criança.',
        '3': 'O código QR é recomendado: selecione Escanear código QR, permita o acesso à câmera se solicitado e alinhe o código QR do dispositivo da criança dentro da moldura.',
        '4': 'Ou use o código: selecione Digitar código manualmente, digite os 6 caracteres mostrados no dispositivo da criança e continue.',
        '5': 'No dispositivo da criança, leia a tela de confirmação com atenção. Selecione Sim, conectar somente se o nome do responsável estiver correto.',
        '6': 'Aguarde o dispositivo dos pais confirmar a conexão. O novo dispositivo aparece em Família.',
        '7': 'Abra o novo dispositivo e verifique se Última atividade está sendo atualizada. Se continuar offline, reabra o KidGate no dispositivo da criança e verifique a conexão de rede.',
        '8': 'Em seguida, conceda as permissões no dispositivo da criança (veja o grupo Permissões do app). Os controles não funcionarão totalmente até que essas permissões estejam ativas.',
      },
    },
    inviteParent: {
      title: 'Convidar outro responsável',
      summary:
        'Permita que um segundo responsável entre na mesma família e gerencie os mesmos dispositivos das crianças.',
      tip: 'Somente o dono da família pode aprovar solicitações de entrada. Aprove rapidamente, pois as solicitações podem expirar.',
      steps: {
        '1': 'No dispositivo do dono da família, abra Família → toque em + → Adicionar outro dispositivo dos pais (ou Convidar responsável).',
        '2': 'Se ainda não criou um nome de família, digite um e selecione Criar família.',
        '3': 'Mostre o código QR de convite ao outro responsável ou compartilhe o código de convite com ele.',
        '4': 'No dispositivo do outro responsável: abra o KidGate como responsável → Família → + → Entrar em uma família, depois escaneie o código QR ou digite o código.',
        '5': 'De volta ao dispositivo do dono, abra a solicitação pendente e selecione Aprovar. Recuse se não reconhecer a pessoa.',
        '6': 'O novo responsável verá os mesmos dispositivos das crianças e poderá ajudar a gerenciar os limites. Algumas ações, como renomear ou remover dispositivos, continuam exclusivas do dono.',
      },
    },
    joinFamily: {
      title: 'Entrar em uma família existente',
      summary: 'Use um convite do dono da família para se tornar um coresponsável.',
      tip: 'Se a solicitação de aprovação expirar, peça ao dono um novo código QR ou código de convite.',
      steps: {
        '1': 'Instale o KidGate e entre como responsável no seu dispositivo.',
        '2': 'Abra Família → toque em + → Entrar em uma família.',
        '3': 'Escaneie o código QR de convite do dono ou digite o código de convite de 6 caracteres.',
        '4': 'Aguarde a aprovação do dono. Mantenha o app aberto até ver que você entrou na família.',
        '5': 'Confirme se os dispositivos das crianças aparecem em Família. Abra um dispositivo para ver seu status e controles.',
      },
    },
    androidPermissions: {
      title: 'Permissões do Android (dispositivo da criança)',
      summary:
        'Ative o Acesso de uso, Exibir sobre outros apps, Acessibilidade, bateria e permissões relacionadas.',
      tip: 'A integridade importa mais do que a ordem. Toda linha vermelha ou não permitida na tela Status da criança deve ser corrigida antes de confiar no bloqueio ou nos Horários bloqueados.',
      steps: {
        '1': 'No dispositivo da criança, abra KidGate → Status e siga a lista de permissões de cima para baixo.',
        '2': 'Notificações: toque na linha → Permitir. Os responsáveis precisam de notificações push para comandos de bloqueio e pedidos de tempo.',
        '3': 'Acesso de uso: abra a tela do sistema → encontre o KidGate → ative. Isso é necessário para o acompanhamento do tempo de tela e dos limites.',
        '4': 'Exibir sobre outros apps: permita para o KidGate. Isso é necessário para que a tela de bloqueio apareça sobre outros apps.',
        '5': 'Assistente de bloqueio por Acessibilidade: Ajustes → Acessibilidade → Apps instalados / baixados → KidGate → Ativado. Isso mantém o bloqueio em vigor.',
        '6': 'Bateria sem restrições: selecione Permitir quando solicitado. Se nenhuma solicitação aparecer: Informações do app → Bateria → Sem restrições.',
        '7': 'Alarmes e lembretes: permita para que os Horários bloqueados comecem e terminem no horário certo.',
        '8': 'Localização e Câmera (se você usa Check-In ou fotos de SOS): permita conforme o KidGate solicitar. Volte a Status e confirme que todas as linhas estão permitidas.',
      },
    },
    iosScreenTime: {
      title: 'Tempo de tela do iOS (dispositivo da criança)',
      summary:
        'Permita o Uso de apps e sites para que o bloqueio, os horários e a seleção de apps funcionem.',
      tip: 'Se o botão Permitir não aparecer, abra Ajustes do iOS → Tempo de tela e confirme que o Tempo de tela está ativado no dispositivo da criança primeiro.',
      steps: {
        '1': 'No iPhone da criança, abra o KidGate e permaneça na tela Status / configuração.',
        '2': 'Selecione Permitir uso de apps e sites (ou o banner de Tempo de tela).',
        '3': 'Na caixa de diálogo do sistema, selecione Permitir. Não feche a caixa de diálogo sem escolher.',
        '4': 'Volte ao KidGate. O banner desaparece assim que a autorização for concluída.',
        '5': 'Se a autorização foi negada antes: abra Ajustes do iOS → encontre o KidGate → ative as opções relacionadas a Tempo de tela / Controle Parental, depois reabra o KidGate.',
        '6': 'Para escolher os apps bloqueados: no dispositivo da criança, abra Ajustes do KidGate → digite o PIN dos pais → Escolher apps para bloquear → salve.',
        '7': 'No dispositivo dos pais, abra o dispositivo → Apps bloqueados e confirme que a lista foi sincronizada. Ative o bloqueio quando estiver pronto.',
      },
    },
    oemKeepRunning: {
      title: 'Manter o KidGate em execução (ajustes do fabricante)',
      summary:
        'Dispositivos Xiaomi, Samsung, Oppo, Vivo, Huawei e similares costumam pausar apps em segundo plano.',
      tip: 'Depois de alterar as regras de bateria, reinicie o dispositivo da criança uma vez, reabra o KidGate e teste o bloqueio pelo dispositivo dos pais.',
      steps: {
        '1': 'No dispositivo Android da criança, abra KidGate → Status → Manter o KidGate em execução.',
        '2': 'Permita a inicialização automática do KidGate na tela de segurança do fabricante (o texto varia conforme o dispositivo).',
        '3': 'Defina o uso de bateria do KidGate como Sem restrições tanto nos ajustes do Android quanto no menu de bateria do fabricante, se ambos existirem.',
        '4': 'Desative listas de “apps em repouso”, “apps em repouso profundo” ou “colocar apps para dormir” que incluam o KidGate.',
        '5': 'Se um atalho não funcionar, abra manualmente o app Segurança / Cuidados do dispositivo e procure por KidGate, Inicialização automática ou Bateria.',
        '6': 'Marque cada linha como Concluído no KidGate depois de realizá-la, para ver o que ainda falta.',
      },
    },
    dailyLimit: {
      title: 'Definir um Limite diário',
      summary: 'Limite quantos minutos a criança pode usar o dispositivo por dia.',
      tip: 'Os dados de uso vêm do dispositivo da criança. Se o contador parecer travado, abra o KidGate no dispositivo da criança e aguarde uma sincronização.',
      steps: {
        '1': 'No dispositivo dos pais, abra Família → toque no dispositivo da criança.',
        '2': 'Em Controles essenciais, selecione Limite diário.',
        '3': 'Escolha um valor de minutos por dia (ou edite o limite existente) e salve.',
        '4': 'Confirme se o cartão do dispositivo mostra os minutos usados e o limite de hoje depois que o dispositivo da criança sincronizar.',
        '5': 'Quando o limite é atingido, o dispositivo bloqueia conforme as regras da plataforma. Selecione Desbloquear na tela do dispositivo se quiser restaurar o acesso antes do previsto.',
      },
    },
    blockedHours: {
      title: 'Definir Horários bloqueados',
      summary:
        'Agende até 3 intervalos de horário em que o dispositivo deve permanecer bloqueado.',
      tip: 'Defina primeiro os horários escolares e de dormir. Evite intervalos sobrepostos para manter a agenda clara.',
      steps: {
        '1': 'Abra o dispositivo da criança no dispositivo dos pais → Horários bloqueados.',
        '2': 'Selecione Definir horários bloqueados (ou Editar horários bloqueados). Adicione um intervalo com horário de início, horário de término e dias.',
        '3': 'Salve o intervalo. Você pode adicionar até 3 intervalos no total.',
        '4': 'Ative a agenda se um botão de ativação for exibido.',
        '5': 'No dispositivo da criança, confirme que as permissões de Alarmes e lembretes e Tempo de Uso continuam permitidas para que os horários funcionem pontualmente.',
        '6': 'Durante um intervalo ativo, o cartão do dispositivo mostra Horário bloqueado ativo · bloqueado. Use Desbloquear apenas quando quiser substituir a agenda intencionalmente.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicos',
      summary:
        'Escolha os apps no dispositivo da criança e depois ative o bloqueio pelo dispositivo dos pais.',
      tip: 'No iOS, a Apple pode ocultar os nomes exatos dos apps dos dispositivos dos pais. A seleção continua acontecendo no dispositivo da criança com o PIN dos pais.',
      steps: {
        '1': 'Use o dispositivo da criança diretamente. Abra KidGate → Ajustes.',
        '2': 'Digite o PIN dos pais quando solicitado.',
        '3': 'Abra Escolher apps para bloquear. Selecione os apps (e categorias, se exibidas) e salve no dispositivo da criança.',
        '4': 'No dispositivo dos pais, abra o dispositivo → Apps bloqueados e aguarde a lista selecionada aparecer.',
        '5': 'Ative Ativar bloqueio de apps. O status deve mostrar Bloqueio ativado.',
        '6': 'Teste abrindo um app bloqueado no dispositivo da criança. Ele deve ficar restrito conforme as regras da plataforma.',
        '7': 'Para alterar a lista depois, repita a seleção no dispositivo da criança com o PIN dos pais. O dispositivo dos pais sincronizará a nova lista.',
      },
    },
    lockUnlock: {
      title: 'Bloquear e desbloquear o dispositivo',
      summary: 'Bloqueie o dispositivo da criança imediatamente ou restaure o acesso.',
      tip: 'No Android, o bloqueio é mais eficaz quando Exibir sobre outros apps e Acessibilidade estão ativados. No iOS, o bloqueio depende da autorização do Tempo de tela.',
      steps: {
        '1': 'Abra o dispositivo da criança no dispositivo dos pais.',
        '2': 'Selecione Bloquear dispositivo (ou Bloquear no KidGate, dependendo das opções da plataforma exibidas).',
        '3': 'Aguarde alguns segundos. O status deve mudar para Bloqueado. Se nada mudar, abra o KidGate no dispositivo da criança e verifique as permissões novamente.',
        '4': 'Para restaurar o acesso, selecione Desbloquear na mesma tela do dispositivo e confirme.',
        '5': 'Opcional: você também pode bloquear ou desbloquear rapidamente pela tela Família, se esses atalhos aparecerem no cartão do dispositivo.',
      },
    },
    locationSharing: {
      title: 'Ativar o compartilhamento de localização',
      summary: 'Veja a última localização do seu filho no dispositivo dos pais.',
      tip: 'A localização exige permissão no dispositivo da criança e uma conexão de rede estável. O GPS em ambientes internos pode ser menos preciso.',
      steps: {
        '1': 'No dispositivo da criança, permita a Localização para o KidGate quando solicitado (ou nos Ajustes do sistema).',
        '2': 'No dispositivo dos pais, abra o dispositivo → Localização.',
        '3': 'Ative o compartilhamento se estiver desativado e aguarde a primeira atualização.',
        '4': 'Puxe para atualizar ou reabra a tela se o status continuar mostrando aguardando.',
        '5': 'Opcional: configure Alertas de local para ser notificado quando seu filho entrar ou sair de um local salvo.',
      },
    },
    checkIn: {
      title: 'Solicitar um Check-In',
      summary:
        'Peça ao seu filho para confirmar que está bem, com localização e uma foto opcional.',
      tip: 'A permissão de câmera no dispositivo da criança é necessária para Check-Ins com foto.',
      steps: {
        '1': 'Abra o dispositivo da criança no dispositivo dos pais.',
        '2': 'Selecione Check-In (a ação rápida ou a seção Segurança).',
        '3': 'O dispositivo da criança recebe uma notificação e tela de Check-In. A criança toca para confirmar que está bem ou para pedir ajuda.',
        '4': 'Se o acesso à câmera estiver permitido, o KidGate anexa uma foto junto com a localização quando possível.',
        '5': 'No dispositivo dos pais, abra o histórico de Check-In para revisar a última resposta e a foto.',
      },
    },
    sos: {
      title: 'Alertas de emergência SOS',
      summary: 'Entenda como uma criança envia um SOS e como os responsáveis revisam.',
      tip: 'Teste isso uma vez em casa para que o responsável e a criança conheçam o processo antes de uma emergência real.',
      steps: {
        '1': 'No dispositivo da criança, abra a aba ou tela de SOS no KidGate.',
        '2': 'Siga os passos na tela para enviar um SOS (localização e foto dependem das permissões concedidas).',
        '3': 'Os responsáveis recebem uma notificação push quando um SOS é enviado.',
        '4': 'No dispositivo dos pais, abra o dispositivo → Alertas de SOS para revisar o evento.',
        '5': 'Combine com seu filho quando usar o SOS e quando um Check-In normal é suficiente.',
      },
    },
    webFilter: {
      title: 'Limitar sites adultos',
      summary:
        'Ative o Filtro da web para conteúdo adulto onde a plataforma oferecer suporte.',
      tip: 'A filtragem da web depende dos recursos da plataforma. Combine-a com Apps bloqueados para uma proteção mais forte.',
      steps: {
        '1': 'Abra o dispositivo da criança no dispositivo dos pais → Filtro da web.',
        '2': 'Revise o status atual (sites adultos limitados ou filtragem desativada).',
        '3': 'Ative a filtragem e salve se um botão de ativação for exibido.',
        '4': 'Verifique novamente mais tarde na mesma tela. Se o status continuar Aguardando, reabra o KidGate no dispositivo da criança para que os ajustes sincronizem.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de proteção',
      summary:
        'Seja notificado quando uma permissão importante no dispositivo da criança for desativada.',
      tip: 'Um alerta de proteção significa que a proteção do KidGate enfraqueceu. Restaure a permissão no dispositivo da criança assim que possível.',
      steps: {
        '1': 'Abra o dispositivo da criança → Proteção (ou Alertas de proteção).',
        '2': 'Revise eventos recentes, como Exibir sobre outros apps, Acessibilidade, Acesso de uso, Câmera ou Localização terem sido desativados.',
        '3': 'No dispositivo da criança, abra KidGate → Status e reative a permissão indicada.',
        '4': 'Volte a Alertas de proteção e confirme que nenhum evento novo e inesperado aparece.',
        '5': 'Mantenha as notificações ativadas no dispositivo dos pais para saber das mudanças rapidamente.',
      },
    },
  },
} as const;
