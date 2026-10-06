export const userGuide = {
  title: 'Guia do usuário',
  subtitle:
    'Ajuda passo a passo sobre permissões, pareamento de dispositivos, controles diários e recursos de segurança.',
  stepLabel: 'Passo {{n}}',
  stepsSectionTitle: 'Passos',
  tipTitle: 'Dica',
  searchPlaceholder: 'Buscar no guia…',
  searchClear: 'Limpar busca',
  searchEmpty: 'Nada no guia corresponde a isso. Tente outra palavra.',
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
      description:
        'Limites, horários, bloqueio de apps, bloqueio do dispositivo, tempo extra e recompensas',
    },
    safety: {
      title: 'Segurança e monitoramento',
      description: 'Localização, Check-in, SOS, Filtro da web e proteção',
    },
    reports: {
      title: 'Relatórios e histórico',
      description:
        'Relatórios de tempo de tela, histórico da web e de vídeos, e alertas de apps e de mensagens',
    },
    account: {
      title: 'Conta e plano',
      description:
        'Premium, alertas, idioma, painel web, PINs, suporte e exclusão da conta',
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
        '2': 'Entre com Google ou Apple, ou crie uma conta de e-mail.',
        '3': 'Em Família, selecione Criar família e dê um nome à sua família (por exemplo, “Família Nguyen”). Esse nome aparece quando outros responsáveis entrarem. Se outro responsável já tiver criado sua família, selecione Entrar em uma família.',
        '4': 'Defina um PIN dos pais (6 dígitos) em Ajustes, depois Segurança. Memorize-o ou guarde-o em local seguro e não o compartilhe com as crianças.',
        '5': 'Recomendado: ative o Bloqueio do app e o desbloqueio biométrico em Ajustes para que outras pessoas não abram o app dos pais no seu dispositivo.',
        '6': 'Abra Família, toque em + e escolha Adicionar dispositivo da criança. Deixe esta tela aberta para o código QR ou o código mostrado no dispositivo da criança.',
        '7': 'Depois que o dispositivo da criança se conectar, abra o perfil da criança em Família (ou o dispositivo, se não estiver atribuído a nenhuma criança). Defina o Limite diário e os Horários bloqueados e conclua as permissões junto com seu filho.',
      },
    },
    getStartedChild: {
      title: 'Configurar um dispositivo da criança',
      summary: 'Instale o KidGate no dispositivo da criança e conclua as permissões.',
      tip: 'Faça isso junto com um responsável. Muitas telas de permissão aparecem apenas uma vez e são fáceis de perder sozinho.',
      steps: {
        '1': 'Instale o KidGate no dispositivo da criança. Abra o app e escolha Este é um dispositivo de uma criança.',
        '2': 'Mantenha a tela de pareamento aberta. Mostre o código QR ao responsável ou leia em voz alta o código de 6 caracteres.',
        '3': 'No dispositivo dos pais, escaneie o código QR ou digite o código. No dispositivo da criança, confirme o responsável quando solicitado — aceite apenas alguém que você conhece.',
        '4': 'Aguarde até a tela inicial mostrar que o dispositivo está conectado. Não force o fechamento do KidGate durante a configuração.',
        '5': 'Na tela Status, conceda todas as permissões solicitadas pelo KidGate (notificações, localização, câmera e permissões específicas da plataforma). Toque em cada linha até que ela apareça como permitida.',
        '6': 'Deixe o KidGate instalado e com a sessão iniciada no dispositivo da criança. Depois disso, os responsáveis gerenciam os limites pelo próprio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar o celular ou tablet da criança',
      summary:
        'Pareie um novo dispositivo da criança à sua família com um código QR ou um código.',
      tip: 'Os códigos expiram. Se o pareamento falhar, selecione Novo código no dispositivo da criança e tente novamente.',
      steps: {
        '1': 'No dispositivo da criança: abra o KidGate, depois Este é um dispositivo de uma criança. Deixe a tela do código QR visível.',
        '2': 'No dispositivo dos pais: abra Família e toque no ícone de escanear (Escanear código).',
        '3': 'A câmera abre imediatamente: permita o acesso à câmera se solicitado e alinhe o código QR do dispositivo da criança dentro da moldura.',
        '4': 'Ou use o código: selecione Digitar código manualmente, digite os 6 caracteres mostrados no dispositivo da criança e continue.',
        '5': 'No dispositivo da criança, leia a tela de confirmação com atenção. Selecione Sim, conectar somente se o nome do responsável estiver correto.',
        '6': 'Aguarde o dispositivo dos pais confirmar a conexão. O novo dispositivo aparece em Família.',
        '7': 'Abra o novo dispositivo e verifique se Última atividade está sendo atualizada. Se continuar offline, reabra o KidGate no dispositivo da criança e verifique a conexão de rede.',
        '8': 'Em seguida, conceda as permissões no dispositivo da criança (veja o grupo Permissões do app). Os controles não funcionarão totalmente até que essas permissões estejam ativas.',
      },
    },
    connectComputer: {
      title: 'Conectar um computador (Mac ou Windows)',
      summary:
        'Instale o KidGate no Mac ou no PC com Windows do seu filho e faça o pareamento da mesma forma que em um celular.',
      keywords: 'mac, macbook, windows, pc, notebook, computador',
      tip: 'Configure o KidGate enquanto a própria conta do seu filho estiver conectada no computador e faça dela uma conta padrão (sem privilégios de administrador). Uma conta de administrador pode remover o KidGate.',
      steps: {
        '1': 'No computador, abra kidgate.app/download e baixe o KidGate para Mac ou Windows.',
        '2': 'Execute o instalador e aprove a solicitação de administrador. No Windows, se aparecer uma mensagem dizendo que o Windows protegeu seu PC, escolha Mais informações e depois Executar assim mesmo.',
        '3': 'Abra o KidGate no computador. Ele mostra um código QR e um código de 6 caracteres; não é preciso entrar em nenhuma conta.',
        '4': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR, ou selecione Digitar código manualmente e digite o código.',
        '5': 'No computador, confira o nome do responsável e selecione Sim, conectar.',
        '6': 'Siga os passos de Concluir a configuração deste dispositivo. No Mac, selecione Abrir Ajustes ao lado de Aprovar o filtro da web e ative o KidGate na página que abrir — o Filtro da web só funciona depois disso. Selecione Permitir para Localização e Câmera.',
        '7': 'De volta ao seu dispositivo, escolha qual criança usa o computador. Os apps a bloquear são escolhidos no próprio computador, com o PIN dos pais (Escolher apps para bloquear).',
      },
    },
    connectTv: {
      title: 'Conectar uma Android TV',
      summary:
        'Instale o KidGate em uma Android TV e faça o pareamento pelo seu dispositivo, sem digitar nada no controle remoto.',
      keywords: 'android tv, google tv, televisão, tv, fire tv, box',
      tip: 'A TV não tem Localização, SOS, Check-in nem Solicitações de tempo, e um app bloqueado é fechado depois de abrir, não impedido de abrir. O tempo de tela pode chegar com até uma hora de atraso.',
      steps: {
        '1': 'Na TV, abra o Google Play, pesquise KidGate e instale o app.',
        '2': 'Abra o KidGate na TV. Ele mostra um código QR e um código de 6 caracteres; não é preciso entrar em nenhuma conta.',
        '3': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR da TV, ou selecione Digitar código manualmente e digite o código.',
        '4': 'A TV se conecta sozinha em alguns segundos. Não é preciso confirmar nada no controle remoto.',
        '5': 'Siga os passos de Configurar proteção na TV: selecione Abrir Ajustes para ativar Acessibilidade, Acesso de uso e Exibir sobre outros apps e, depois, aprove a conexão VPN para que o Filtro da web funcione.',
        '6': 'Se uma configuração não continuar ativada, reinicie a TV e tente novamente. Você pode reabrir Configurar proteção na tela principal do KidGate na TV.',
        '7': 'De volta ao seu dispositivo, escolha qual criança usa a TV. Os apps a bloquear são escolhidos na própria TV, com o PIN dos pais.',
      },
    },
    connectChrome: {
      title: 'Conectar a extensão do Chrome',
      summary:
        'Adicione o filtro da web do KidGate ao Chrome em um Chromebook, Mac ou PC. Ela aparece como um dispositivo próprio.',
      keywords: 'chromebook, extensão do chrome, extensão do navegador',
      tip: 'A extensão filtra apenas o Chrome: não filtra outros navegadores nem janelas anônimas, a menos que você permita. Em chrome://extensions, abra os Detalhes do KidGate e ative Permitir no modo anônimo.',
      steps: {
        '1': 'No Chrome do computador do seu filho, abra a Chrome Web Store, pesquise KidGate e selecione Usar no Chrome.',
        '2': 'Selecione o ícone do KidGate na barra de ferramentas do Chrome. Se não o encontrar, fixe-o pelo menu Extensões (ícone de quebra-cabeça). O pop-up mostra um código QR e um código de 6 caracteres; mantenha-o aberto durante o pareamento.',
        '3': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR, ou selecione Digitar código manualmente e digite o código.',
        '4': 'No pop-up do KidGate, confira o nome do responsável e selecione Sim, conectar.',
        '5': 'De volta ao seu dispositivo, escolha qual criança usa a extensão e ative o Filtro da web para ela. Até lá, a extensão mostra Inativo.',
        '6': 'Opcional: para saber quais vídeos seu filho assiste, abra Vídeos assistidos e ative Registrar vídeos assistidos para a extensão.',
      },
    },
    inviteParent: {
      title: 'Convidar outro responsável',
      summary:
        'Permita que um segundo responsável entre na mesma família e gerencie os mesmos dispositivos das crianças.',
      tip: 'Somente o dono da família pode aprovar solicitações de entrada. Aprove rapidamente, pois as solicitações podem expirar. Uma família pode ter até 3 responsáveis no plano gratuito e durante o teste, e até 6 com o Premium.',
      steps: {
        '1': 'No dispositivo do dono da família, abra Família, depois toque em +, depois Convidar um responsável.',
        '2': 'Se ainda não criou um nome de família, digite um e selecione Criar família.',
        '3': 'Mostre o código QR de convite ao outro responsável ou compartilhe o código de convite com ele.',
        '4': 'No dispositivo do outro responsável: abra o KidGate como responsável, abra Família e toque no ícone de escanear (Escanear código). Depois escaneie o código QR de convite ou digite o código.',
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
        '2': 'Abra Família e toque no ícone de escanear (Escanear código).',
        '3': 'Escaneie o código QR de convite do dono ou selecione Digitar código manualmente e digite o código de convite de 6 caracteres.',
        '4': 'Aguarde a aprovação do dono. Mantenha o app aberto até ver que você entrou na família.',
        '5': 'Confirme se os dispositivos das crianças aparecem em Família. Abra um dispositivo para ver seu status e controles.',
      },
    },
    manageDevices: {
      title: 'Renomear ou remover um dispositivo',
      summary:
        'Dê a um dispositivo um nome que todos reconheçam, ou desconecte um que seu filho não usa mais.',
      keywords:
        'desvincular, desconectar, apagar dispositivo, celular antigo, celular novo, vendido, mudar nome, redefinir',
      tip: 'Somente o dono da família pode renomear ou remover dispositivos. A remoção não pode ser desfeita: os pedidos de tempo e o histórico de atividades do dispositivo são apagados. Para protegê-lo de novo, conecte-o como um dispositivo novo.',
      steps: {
        '1': 'Para renomear um dispositivo, abra-o em Família ou no perfil do seu filho e selecione Editar ao lado do nome.',
        '2': 'Digite um nome que todos os responsáveis reconheçam de relance e salve.',
        '3': 'Para remover um dispositivo, abra-o, selecione Remover dispositivo no fim da tela e confirme. Na aba Dispositivos das crianças do cartão da família, você também pode deslizar um dispositivo para a esquerda.',
        '4': 'O dispositivo sai da sua família, e o KidGate nesse dispositivo mostra que ele foi removido.',
        '5': 'Para usar o dispositivo de novo, por exemplo depois de redefini-lo ou se ele passar para outro filho, conecte-o como novo com Adicionar dispositivo da criança em Família.',
      },
    },
    androidPermissions: {
      title: 'Permissões do Android (dispositivo da criança)',
      summary:
        'Ative o Acesso de uso, Exibir sobre outros apps, Acessibilidade, bateria e permissões relacionadas.',
      keywords:
        'acessibilidade, acesso de uso, sobrepor a outros apps, notificações, administrador do dispositivo, vpn, permitir',
      tip: 'A integridade importa mais do que a ordem. Toda linha vermelha ou não permitida na tela Status da criança deve ser corrigida antes de confiar no bloqueio ou nos Horários bloqueados.',
      steps: {
        '1': 'No dispositivo da criança, abra KidGate, depois Status e siga a lista de permissões de cima para baixo.',
        '2': 'Notificações: toque na linha, depois Permitir. Os responsáveis precisam de notificações push para comandos de bloqueio e pedidos de tempo.',
        '3': 'Acesso de uso: abra a tela do sistema, depois encontre o KidGate, depois ative. Isso é necessário para o acompanhamento do tempo de tela e dos limites.',
        '4': 'Exibir sobre outros apps: permita para o KidGate. Isso é necessário para que a tela de bloqueio apareça sobre outros apps.',
        '5': 'Assistente de bloqueio por Acessibilidade: abra Configurações, depois Acessibilidade, encontre o KidGate em Apps instalados / baixados e ative a opção. Isso mantém o bloqueio em vigor.',
        '6': 'Bateria sem restrições: selecione Permitir quando solicitado. Se nenhuma solicitação aparecer: Informações do app, depois Bateria, depois Sem restrições.',
        '7': 'Alarmes e lembretes: permita para que os Horários bloqueados comecem e terminem no horário certo.',
        '8': 'Localização e Câmera (se você usa Check-in ou fotos de SOS): permita conforme o KidGate solicitar. Volte a Status e confirme que todas as linhas estão permitidas.',
      },
    },
    iosScreenTime: {
      title: 'Tempo de tela do iOS (dispositivo da criança)',
      summary:
        'Permita o Uso de apps e sites para que o bloqueio, os horários e a seleção de apps funcionem.',
      keywords: 'tempo de uso, tempo de tela, family controls, iphone, ipad, autorizar',
      tip: 'Se o botão Permitir não aparecer, abra Ajustes do iOS, depois Tempo de tela e confirme que o Tempo de tela está ativado no dispositivo da criança primeiro.',
      steps: {
        '1': 'Abra o KidGate e permaneça na tela “Status”.',
        '2': 'Selecione Permitir uso de apps e sites (ou o banner de Tempo de tela).',
        '3': 'Na caixa de diálogo do sistema, selecione Permitir. Não feche a caixa de diálogo sem escolher.',
        '4': 'Volte ao KidGate. O banner desaparece assim que a autorização for concluída.',
        '5': 'Se a autorização foi negada antes: abra Ajustes do iOS, encontre o KidGate, ative Tempo de Uso nessa página e reabra o KidGate.',
        '6': 'Para escolher os apps bloqueados: no dispositivo da criança, abra Ajustes do KidGate, depois selecione Desbloquear com o PIN dos pais, depois abra Apps bloqueados e salve.',
        '7': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Apps bloqueados, e confirme que a lista foi sincronizada. Ative o bloqueio quando estiver pronto.',
      },
    },
    oemKeepRunning: {
      title: 'Manter o KidGate em execução (ajustes do fabricante)',
      summary:
        'Dispositivos Xiaomi, Samsung, Oppo, Vivo, Huawei e similares costumam pausar apps em segundo plano.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, economia de bateria, início automático, para de funcionar, fechado em segundo plano',
      tip: 'Depois de alterar as regras de bateria, reinicie o dispositivo da criança uma vez, reabra o KidGate e teste o bloqueio pelo dispositivo dos pais.',
      steps: {
        '1': 'No dispositivo Android da criança, abra KidGate, depois Status, e procure a etapa Permitir inicialização automática. Ela aparece apenas em dispositivos cujo fabricante precisa dela.',
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
      keywords: 'tempo de tela, horas por dia, tempo esgotado, limite, estender',
      tip: 'Os dados de uso vêm do dispositivo da criança. Se o contador parecer travado, abra o KidGate no dispositivo da criança e aguarde uma sincronização.',
      steps: {
        '1': 'No dispositivo dos pais, abra Família, depois toque no perfil da criança (ou no dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Em Controles principais, selecione Limite diário.',
        '3': 'Escolha um valor de minutos por dia (ou edite o limite existente) e salve.',
        '4': 'Confirme se o cartão do dispositivo mostra os minutos usados e o limite de hoje depois que o dispositivo da criança sincronizar.',
        '5': 'Quando o limite é atingido, o dispositivo bloqueia conforme as regras da plataforma. Selecione Desbloquear na tela do dispositivo se quiser restaurar o acesso antes do previsto.',
      },
    },
    blockedHours: {
      title: 'Definir Horários bloqueados',
      summary:
        'Agende os intervalos de horário em que o dispositivo deve permanecer bloqueado.',
      keywords: 'hora de dormir, noite, horário escolar, agenda, pausa',
      tip: 'Defina primeiro os horários escolares e de dormir. Evite intervalos sobrepostos para manter a agenda clara.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Horários bloqueados.',
        '2': 'Selecione Adicionar faixa e depois defina o horário de início, o horário de término e os dias em que se repete.',
        '3': 'Salve o intervalo. Repita o processo para adicionar outro intervalo.',
        '4': 'Ative a agenda se um botão de ativação for exibido.',
        '5': 'No dispositivo da criança, confirme que as permissões de Alarmes e lembretes e Tempo de Uso continuam permitidas para que os horários funcionem pontualmente.',
        '6': 'Durante um intervalo ativo, o cartão do dispositivo mostra Horário bloqueado ativo · dispositivo bloqueado. Use Desbloquear apenas quando quiser substituir a agenda intencionalmente.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicos',
      summary:
        'Escolha os apps no dispositivo da criança e depois ative o bloqueio pelo dispositivo dos pais.',
      keywords:
        'bloquear app, bloquear aplicativo, tiktok, facebook, instagram, jogos, roblox, esconder app',
      tip: 'No iOS, a Apple pode ocultar os nomes exatos dos apps dos dispositivos dos pais. A seleção continua acontecendo no dispositivo da criança com o PIN dos pais.',
      steps: {
        '1': 'Use o dispositivo da criança diretamente. Abra KidGate, depois Ajustes.',
        '2': 'Selecione Desbloquear com o PIN dos pais e digite o PIN dos pais.',
        '3': 'Abra Apps bloqueados (em um computador ou TV: Escolher apps para bloquear). Selecione os apps (e categorias, se exibidas) e salve no dispositivo da criança.',
        '4': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Apps bloqueados, e aguarde a lista selecionada aparecer.',
        '5': 'Ative Ativar o bloqueio de apps. O status deve mostrar Bloqueio ativado.',
        '6': 'Teste abrindo um app bloqueado no dispositivo da criança. Ele deve ficar restrito conforme as regras da plataforma.',
        '7': 'Para alterar a lista depois, repita a seleção no dispositivo da criança com o PIN dos pais. O dispositivo dos pais sincronizará a nova lista.',
      },
    },
    appLimits: {
      title: 'Definir Limites de apps',
      summary:
        'Defina um tempo diário próprio para apps específicos, além do Limite diário.',
      keywords: 'limite de tempo por app, minutos por app, tiktok, youtube, jogos',
      tip: 'Os Limites de apps não estão disponíveis no iPhone nem no iPad. Em um computador ou TV, um app que atinge o limite é fechado depois de abrir, não impedido de abrir.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Limites de apps. Se seu filho usa mais de um dispositivo, escolha qual: cada dispositivo tem sua própria lista.',
        '2': 'Em Adicionar um limite, toque em um app. Só aparecem os apps usados hoje nesse dispositivo, e cada um começa com um limite de 60 minutos.',
        '3': 'Ajuste cada limite com o seletor ou um valor predefinido, de 5 minutos a 8 horas por dia. Você pode limitar até 20 apps.',
        '4': 'Selecione Salvar. Os limites reiniciam à meia-noite no dispositivo da criança.',
        '5': 'O Limite diário continua valendo para o dispositivo inteiro, então um app pode ser bloqueado antes de esgotar o próprio limite. Para remover um limite, selecione Remover no cartão dele e salve.',
      },
    },
    lockUnlock: {
      title: 'Bloquear e desbloquear o dispositivo',
      summary: 'Bloqueie o dispositivo da criança imediatamente ou restaure o acesso.',
      tip: 'No Android, o bloqueio é mais eficaz quando Exibir sobre outros apps e Acessibilidade estão ativados. No iOS, o bloqueio depende da autorização do Tempo de tela.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Selecione Bloquear tudo para bloquear todos os dispositivos dessa criança, ou abra um único dispositivo e selecione Bloquear dispositivo.',
        '3': 'Aguarde alguns segundos. O status deve mudar para Bloqueado. Se nada mudar, abra o KidGate no dispositivo da criança e verifique as permissões novamente.',
        '4': 'Para restaurar o acesso, selecione Desbloquear tudo (ou Desbloquear na tela do dispositivo) e confirme.',
        '5': 'Opcional: você também pode bloquear ou desbloquear rapidamente pela tela Família, se esses atalhos aparecerem no cartão do dispositivo.',
        '6': 'Um celular ou computador bloqueado ainda deixa seu filho enviar um SOS. No Android, o SOS também abre chamadas, mapas e mensagens por 5 minutos enquanto todo o resto continua bloqueado, e isso aparece em Atividades.',
      },
    },
    pauseBrowsing: {
      title: 'Pausar a navegação por um tempo',
      summary:
        'Bloqueie a web em um dispositivo por 5 minutos a 8 horas. Chamadas e apps offline continuam funcionando.',
      keywords: 'desligar internet, pausar wifi, sem rede, offline, pausa',
      tip: 'Na extensão do Chrome, a pausa vale apenas para o Chrome. Para uma pausa que se repete todos os dias, use os Horários bloqueados.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Pausar a navegação na seção Monitoramento de segurança.',
        '2': 'Escolha a duração com o seletor ou um atalho rápido (30, 60 ou 120 minutos) e confirme.',
        '3': 'A web fica bloqueada nesse dispositivo até o tempo acabar. As configurações do Filtro da web não mudam, e a pausa funciona mesmo com o Filtro da web desativado.',
        '4': 'Para encerrar antes, abra o dispositivo, toque no cartão Pausar a navegação e selecione Retomar. Os minutos restantes não são mantidos.',
        '5': 'Pelo perfil da criança, a pausa vale para um único dispositivo. Se seu filho usa vários, pause cada um na tela do próprio dispositivo.',
      },
    },
    timeRequests: {
      title: 'Responder às Solicitações de tempo',
      summary:
        'Seu filho pode pedir minutos extras quando o Limite diário estiver acabando, e você aprova ou recusa pelo seu dispositivo.',
      tip: 'As solicitações só aparecem quando o dispositivo tem um Limite diário. Os minutos aprovados valem para hoje, no dispositivo que pediu, e não suspendem um bloqueio feito por você nem os Horários bloqueados. A Android TV e a extensão do Chrome não podem enviar solicitações.',
      steps: {
        '1': 'No dispositivo da criança, seu filho seleciona Pedir mais tempo na tela inicial do KidGate (no Android, também na tela de bloqueio quando o limite é atingido), escolhe os minutos, adiciona um motivo se quiser e envia.',
        '2': 'Você recebe uma notificação. Abra o KidGate: a solicitação aguarda no cartão Precisa de aprovação em Família, no perfil da criança e no dispositivo.',
        '3': 'Confira os minutos e o motivo e selecione Aprovar para adicionar exatamente esses minutos para hoje, ou Agora não para recusar.',
        '4': 'O dispositivo da criança recebe a resposta, e os minutos aprovados valem na hora. Cada dispositivo pode ter uma solicitação pendente por vez.',
        '5': 'As solicitações respondidas aparecem em Atividades. Para parar de receber essas notificações no seu dispositivo, desative Pedidos de tempo extra em Notificações push, nos Ajustes.',
      },
    },
    rewardTasks: {
      title: 'Configurar Tarefas com recompensa',
      summary:
        'Crie pequenas tarefas que seu filho pode concluir para ganhar minutos extras hoje.',
      tip: 'Os minutos extras só contam quando o dispositivo tem um Limite diário. Eles vão para o dispositivo que seu filho usou para marcar a tarefa como feita. Tarefas com recompensa não estão disponíveis na Android TV nem na extensão do Chrome.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Tarefas com recompensa.',
        '2': 'Selecione Nova tarefa ou comece com um modelo. Digite a tarefa, escolha a recompensa em minutos (de 5 a 240), a dificuldade e se ela se repete Todos os dias ou Uma vez; depois selecione Criar tarefa.',
        '3': 'No dispositivo da criança, a tarefa aparece em Ganhe tempo extra. Quando terminar, seu filho seleciona Já fiz.',
        '4': 'Você recebe uma notificação. Em Prontas para revisar (na tela Tarefas com recompensa, em Família ou no perfil da criança), selecione Aprovar para somar os minutos ao dia de hoje, ou Devolver para que seu filho tente de novo.',
        '5': 'Toque em uma tarefa para editá-la ou excluí-la. O plano gratuito permite até 10 tarefas ativas ao mesmo tempo; o Premium permite 20.',
        '6': 'Cada tarefa vale de 1 a 3 estrelas conforme a dificuldade, e as estrelas contam quando você aprova a tarefa. Para seus filhos compararem as estrelas da semana, o dono da família abre Família, depois o cartão da família, e ativa o Quadro de estrelas na aba Filhos. Cada filho passa a vê-lo no KidGate do próprio dispositivo. Ele recomeça toda semana.',
      },
    },
    locationSharing: {
      title: 'Ativar o compartilhamento de localização',
      summary: 'Veja a última localização do seu filho no dispositivo dos pais.',
      keywords: 'gps, mapa, onde está meu filho, encontrar o celular, lugares',
      tip: 'A localização exige permissão no dispositivo da criança e uma conexão de rede estável. O GPS em ambientes internos pode ser menos preciso.',
      steps: {
        '1': 'No dispositivo da criança, permita a Localização para o KidGate quando solicitado (ou nos Ajustes do sistema).',
        '2': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Localização.',
        '3': 'Ative o compartilhamento se estiver desativado e aguarde a primeira atualização.',
        '4': 'Se o status continuar mostrando aguardando, toque no botão de atualizar ou reabra a tela.',
        '5': 'Opcional: abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois a seção Alertas, e selecione Locais para configurar Alertas de locais quando seu filho entrar ou sair de um local salvo.',
        '6': 'Se o celular foi perdido por perto, abra Localização e toque em Fazer o dispositivo tocar. Um iPhone fica em silêncio enquanto estiver no modo silencioso ou com um Foco ativado.',
      },
    },
    checkIn: {
      title: 'Solicitar um Check-in',
      summary:
        'Peça ao seu filho para confirmar que está bem, com localização e uma foto opcional.',
      tip: 'A permissão de câmera no dispositivo da criança é necessária para Check-ins com foto.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Selecione Check-in (a ação rápida ou a linha da seção Monitoramento de segurança).',
        '3': 'O dispositivo da criança recebe uma notificação e tela de Check-in. A criança toca para confirmar que está bem ou para pedir ajuda.',
        '4': 'Se o acesso à câmera estiver permitido, o KidGate anexa uma foto junto com a localização quando possível.',
        '5': 'No dispositivo dos pais, abra o histórico de Check-in para revisar a última resposta e a foto.',
      },
    },
    sos: {
      title: 'Alertas de emergência SOS',
      summary:
        'Como uma criança envia um SOS, o que ele inclui e como os responsáveis respondem.',
      keywords:
        'botão de pânico, ajuda, perigo, inseguro, áudio, voz, microfone, sirene, e-mail, avós, vizinho',
      tip: 'O SOS funciona em celulares e computadores, não em uma TV nem na extensão do Chrome. O som só é gravado em celulares. Teste uma vez em casa e combine com seu filho quando usar o SOS e quando um Check-in basta.',
      steps: {
        '1': 'No dispositivo da criança, abra o SOS no KidGate. Em um celular, é o botão no meio da barra inferior.',
        '2': 'Toque e segure o botão SOS por 5 segundos. Soltar antes cancela o envio.',
        '3': 'O alerta é enviado na hora, com a localização se estiver disponível. Em um celular, a câmera abre em seguida para uma foto, que pode ser pulada. Se o microfone foi permitido durante a configuração, até 15 segundos de som são gravados a partir do momento em que o SOS é enviado.',
        '4': 'Os responsáveis recebem uma notificação urgente, mesmo durante o Horário silencioso. Se o KidGate estiver aberto, o alerta aparece na tela, com a Sirene de SOS, a menos que ela esteja desativada em Ajustes.',
        '5': 'Abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois a seção Alertas, e selecione SOS. Cada alerta mostra a localização (Abrir no Mapas), a foto e a Gravação de áudio, que pode chegar um pouco depois do alerta. Selecione Deixa comigo para marcá-lo como atendido.',
        '6': 'Para avisar por e-mail também pessoas de fora da família, abra Família, depois o cartão da família, e escolha Contatos de confiança. Selecione Adicionar contato para adicionar até 5. A cada SOS, elas recebem por e-mail o nome do dispositivo e a última localização conhecida, nunca a foto nem o som. Avise-as antes.',
      },
    },
    webFilter: {
      title: 'Limitar sites inadequados',
      summary:
        'Ative o Filtro da web para conteúdo inadequado onde a plataforma oferecer suporte.',
      keywords:
        'bloquear site, bloquear link, url, conteúdo adulto, pesquisa segura, dns, vpn, iphone, ipad',
      tip: 'A filtragem da web depende dos recursos da plataforma. Combine-a com Apps bloqueados para uma proteção mais forte.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Filtro da web.',
        '2': 'Revise o status atual (sites inadequados limitados ou filtragem desativada).',
        '3': 'Ative a filtragem e salve se um botão de ativação for exibido.',
        '4': 'Verifique novamente mais tarde na mesma tela. Se o status continuar Aguardando, reabra o KidGate no dispositivo da criança para que os ajustes sincronizem.',
        '5': 'Em um iPhone ou iPad, abra o KidGate no dispositivo da criança e selecione Permitir quando o iOS pedir para adicionar configurações de VPN; depois, digite o código do dispositivo. Isso só é pedido uma vez.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de proteção',
      summary:
        'Seja notificado quando uma permissão importante no dispositivo da criança for desativada.',
      tip: 'Um alerta de proteção significa que a proteção do KidGate enfraqueceu. Restaure a permissão no dispositivo da criança assim que possível.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois a seção Alertas, e selecione Proteção para abrir os Alertas de proteção.',
        '2': 'Revise eventos recentes, como Exibir sobre outros apps, Acessibilidade, Acesso de uso, Câmera ou Localização terem sido desativados.',
        '3': 'No dispositivo da criança, abra KidGate, depois Status e reative a permissão indicada.',
        '4': 'Volte a Alertas de proteção e confirme que nenhum evento novo e inesperado aparece.',
        '5': 'Mantenha as notificações ativadas no dispositivo dos pais para saber das mudanças rapidamente.',
      },
    },
    usageReports: {
      title: 'Ver relatórios de uso',
      summary:
        'Veja por quanto tempo cada dispositivo foi usado hoje e nos últimos 30 dias, também por criança, e em um relatório toda segunda-feira.',
      tip: 'No plano gratuito, você vê o total de hoje e os 3 apps principais, atualizados quando você consulta o KidGate. O Premium adiciona 30 dias de histórico, quando cada dispositivo foi usado, todos os apps, um relatório para cada criança e um novo relatório semanal toda segunda-feira. iPhone e iPad informam apenas o total.',
      steps: {
        '1': 'Abra Relatórios. A seção Hoje soma todos os dispositivos; abaixo dela ficam o Relatório semanal, cada criança (Por criança) e cada dispositivo (Por dispositivo).',
        '2': 'Toque em um dispositivo para ver o Relatório de uso dele: o uso de hoje em relação ao Limite diário, Últimos 30 dias, Quando foi usado e Apps mais usados. Você também pode abri-lo em Uso de hoje, na tela do dispositivo.',
        '3': 'Toque no perfil de uma criança para ver um único relatório com todos os dispositivos dela, em Hoje, 7 dias ou 30 dias. O uso de duas telas ao mesmo tempo conta uma só vez, então o total pode ser menor que a soma dos dispositivos.',
        '4': 'Um novo Relatório semanal chega toda segunda-feira de manhã, com uma notificação. Ele sugere uma mudança que você pode fazer e abre a configuração certa.',
        '5': 'Ao abrir o KidGate, cada dispositivo recebe um pedido de números atualizados, então eles podem levar alguns minutos para mudar. Um dispositivo sem conexão com a internet envia os dados quando volta a ficar online.',
      },
    },
    widget: {
      title: 'Adicionar um widget de tempo de tela',
      summary:
        'Veja o tempo de tela de cada criança na tela de início e deixe seu filho ver, na dele, quanto tempo ainda resta.',
      keywords:
        'tela inicial, launcher, de relance, tempo restante, minutos restantes, iphone, android',
      tip: 'Os widgets funcionam em iPhone, iPad e Android, não em computadores nem em TVs. Um widget mostra os últimos dados recebidos pelo KidGate e o horário dessa atualização.',
      steps: {
        '1': 'Abra Ajustes e selecione Adicionar widget à tela de início. Na maioria dos celulares Android, basta confirmar onde ele vai ficar. Caso contrário, o KidGate mostra os passos para adicioná-lo manualmente.',
        '2': 'Para adicioná-lo manualmente, toque e segure um espaço vazio na tela de início. No iPhone, toque em Editar (ou + em versões anteriores) e depois em Adicionar Widget. No Android, toque em Widgets. Encontre o KidGate e escolha o widget Tempo de tela.',
        '3': 'Cada linha mostra o tempo de tela de hoje de uma criança em relação ao Limite diário dela, e quem já o atingiu aparece primeiro. Cabem até 2 crianças no iPhone e até 3 no Android.',
        '4': 'Ele é atualizado quando você abre o KidGate. Com o app fechado, é atualizado no máximo a cada 20 minutos, e só enquanto uma criança está usando um dispositivo.',
        '5': 'No celular do seu filho, adicione o widget Tempo restante do mesmo jeito. Ele mostra quanto tempo resta hoje, ou por que o dispositivo está bloqueado, e é atualizado enquanto o KidGate está aberto naquele celular.',
      },
    },
    webHistory: {
      title: 'Ver o Histórico da web',
      summary:
        'Veja quais sites um dispositivo acessou e quais o Filtro da web bloqueou, dia a dia.',
      keywords: 'histórico de navegação, sites visitados, navegador, chrome, safari',
      tip: 'O Histórico da web faz parte do Premium. Ele lista sites, não páginas nem minutos, e algumas linhas são tráfego de apps em segundo plano. Na Android TV, pode haver um atraso de até uma hora.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Histórico da web na seção Monitoramento de segurança. Pelo perfil da criança, ele reúne todos os dispositivos dela.',
        '2': 'Cada dia lista os sites por tipo, com quantas vezes cada um foi acessado. Selecione Só bloqueados para ver apenas o que o Filtro da web barrou.',
        '3': 'Para bloquear um tipo inteiro de site, abra a seção dele e selecione o botão Bloquear no final. Pelo perfil da criança, isso vale para todos os dispositivos dela.',
        '4': 'O histórico vem do Filtro da web, então só é preenchido enquanto o filtro está funcionando nesse dispositivo.',
        '5': 'O histórico fica guardado por 30 dias. Quando seu filho pede para abrir um site bloqueado, o pedido aparece em Precisa de aprovação, não aqui.',
      },
    },
    videoHistory: {
      title: 'Ver os Vídeos assistidos',
      summary:
        'Mantenha uma lista dos vídeos do YouTube que seu filho assiste, com o canal e o horário.',
      keywords: 'youtube, shorts, vídeos assistidos, histórico de visualização',
      tip: 'Vídeos assistidos faz parte do Premium e cobre apenas o YouTube. Funciona em celulares Android, na Android TV e na extensão do Chrome, não no iPhone nem no iPad. Em um Mac ou PC, adicione a extensão do Chrome. Na TV, os Shorts não aparecem na lista.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Vídeos assistidos na seção Monitoramento de segurança.',
        '2': 'Ative Registrar vídeos assistidos. A opção fica desativada até você ativá-la e, pelo perfil da criança, vale para todos os dispositivos dela.',
        '3': 'Em um celular Android, o KidGate também precisa de acesso às notificações: no dispositivo da criança, abra os Ajustes do KidGate, selecione Desbloquear com o PIN dos pais e depois Permitir acesso às notificações na seção Alertas de mensagens. Os Shorts também precisam de Acessibilidade.',
        '4': 'Os vídeos aparecem por dia, com o canal e quantas vezes cada um foi reproduzido. Toque em um deles para encontrá-lo no YouTube.',
        '5': 'Em um Mac ou PC, a tela mostra como adicionar a extensão do Chrome em vez disso. A extensão registra os vídeos como um dispositivo próprio.',
      },
    },
    appAlerts: {
      title: 'Acompanhar instalações de apps',
      summary:
        'Veja quando apps são instalados ou removidos, confira o que há em um dispositivo e mantenha apps novos bloqueados até você permitir.',
      tip: 'Aprovar novos apps é gratuito. A tela Aplicativos, com o histórico de instalações e a lista de apps instalados, faz parte do Premium. iPhone e iPad não conseguem informar instalações; neles, Aprovar novos apps oculta a App Store em vez disso.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Aplicativos na seção Alertas.',
        '2': 'Mudanças recentes lista os apps instalados e removidos, dos mais recentes aos mais antigos. Você também recebe uma notificação para cada um.',
        '3': 'Aplicativos instalados lista o que há no dispositivo, com o grupo Merecem atenção no topo. Selecione Seguro para tirar um app desse grupo. Para impedir que um app seja usado, use Apps bloqueados.',
        '4': 'Para manter apps novos bloqueados até você permiti-los, abra Apps bloqueados e ative Aprovar novos apps. Qualquer app instalado depois disso fica bloqueado no dispositivo.',
        '5': 'Quando um app novo estiver aguardando, selecione Permitir ao lado dele para liberá-lo.',
      },
    },
    messageAlerts: {
      title: 'Ativar os Alertas de mensagens',
      summary:
        'Receba um alerta quando uma palavra ou frase preocupante aparecer em mensagens ou buscas no celular Android do seu filho. Você vê a palavra ou frase sinalizada, nunca a mensagem.',
      keywords: 'sms, messenger, whatsapp, palavras-chave, bullying, ler mensagens',
      tip: 'Os Alertas de mensagens fazem parte do Premium e funcionam apenas em celulares Android. Só a categoria e a palavra ou frase sinalizada chegam até você. A análise com IA fica desativada, a menos que um responsável a ative para a família.',
      steps: {
        '1': 'No celular Android da criança, abra os Ajustes do KidGate, selecione Desbloquear com o PIN dos pais, depois Permitir acesso às notificações na seção Alertas de mensagens, e ative o KidGate na lista que abrir.',
        '2': 'No seu dispositivo, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Alertas de mensagens na seção Alertas, e toque no ícone de configurações no topo. Se seu filho tiver vários dispositivos, selecione primeiro o celular Android.',
        '3': 'Ative Verificar mensagens recebidas. Também sinalizar palavrões é opcional, e você pode escolher até 3 idiomas em Idiomas verificados.',
        '4': 'Para verificar também o que seu filho digita e busca: no dispositivo da criança, selecione Permitir na seção Alertas de mensagens e depois ative Verificar mensagens digitadas e Verificar buscas no seu dispositivo.',
        '5': 'Os alertas aparecem em Alertas recentes, com a categoria e a palavra ou frase sinalizada. Selecione O que fazer agora para ver dicas de como conversar sobre isso com seu filho.',
      },
    },
    childProfiles: {
      title: 'Adicionar um filho e atribuir dispositivos',
      summary:
        'Crie um perfil para cada criança e atribua os dispositivos que ela usa, para que as regras e o tempo de tela a acompanhem.',
      tip: 'Somente o dono da família pode adicionar filhos e atribuir dispositivos. Um dispositivo novo não fica atribuído a ninguém até você escolher.',
      steps: {
        '1': 'Em Família, toque em + e escolha Adicionar filho. Digite um nome e salve.',
        '2': 'Depois de parear um dispositivo novo, o KidGate pergunta quem o usa. Escolha seu filho, ou Ninguém para um dispositivo compartilhado. Em seguida, o KidGate oferece um conjunto inicial de proteções: selecione Ativar proteção ou Agora não.',
        '3': 'Um dispositivo para o qual ninguém foi escolhido aparece em Sem atribuição, na tela Família. Selecione Atribuir a uma criança… no cartão dele.',
        '4': 'Depois que um dispositivo é atribuído, o Limite diário, os Horários bloqueados, o Filtro da web, o Check-in, o SOS, os locais e as Tarefas com recompensa são definidos no perfil da criança e valem para todos os dispositivos dela. O Limite diário vira um total único para esses dispositivos.',
        '5': 'Para mover um dispositivo, selecione Atribuir outro dispositivo… no perfil da criança que deve ficar com ele. Para desfazer a atribuição, deslize o dispositivo no perfil da criança e selecione Remover. Se você remover o perfil de uma criança, os dispositivos dela continuam pareados.',
      },
    },
    plans: {
      title: 'Premium e o plano gratuito',
      summary: 'O que o teste, o plano gratuito e o Premium incluem, e como assinar.',
      keywords:
        'premium, preço, assinatura, teste grátis, cancelar, reembolso, upgrade',
      tip: 'Somente o dono da família pode assinar ou restaurar uma compra, e apenas no app do celular. Um plano cobre a família inteira e todos os responsáveis dela.',
      steps: {
        '1': 'Abra Ajustes. O cartão no topo mostra seu plano atual; selecione Ver planos.',
        '2': 'O teste de 7 dias começa quando o primeiro dispositivo da criança é pareado e inclui tudo o que o Premium oferece.',
        '3': 'No plano gratuito, todas as regras continuam funcionando, mas só um dispositivo envia relatórios: o total de hoje e os 3 apps principais, atualizados quando você consulta o KidGate. O Premium adiciona atualizações ao vivo, todos os dispositivos, 30 dias de histórico, histórico da web e de vídeos, e relatórios semanais.',
        '4': 'Se o teste terminar com mais de um dispositivo da criança, o KidGate abre a tela Escolha seu dispositivo principal. O escolhido continua enviando relatórios; os outros mostram Pausado, mas mantêm as regras. Você pode mudar a escolha uma vez a cada 7 dias.',
        '5': 'Para assinar, escolha um plano e selecione Assinar o Premium. Ao assinar, todos os dispositivos pausados voltam a enviar relatórios. Se você já pagou antes, selecione Restaurar compras.',
      },
    },
    notificationSettings: {
      title: 'Escolher quais alertas receber',
      summary:
        'Ative ou desative cada tipo de alerta e defina um horário silencioso em cada celular dos responsáveis.',
      tip: 'O SOS sempre chega, mesmo com tudo desativado e durante o horário silencioso. Estas configurações valem apenas para este celular; os outros responsáveis escolhem as deles.',
      steps: {
        '1': 'Abra Ajustes, depois Notificações push.',
        '2': 'Na seção Alertas, desative os tipos de alerta que você não quer receber neste celular, por exemplo Pedidos de tempo extra e Apps instalados ou removidos.',
        '3': 'A opção Resumo semanal controla a notificação de segunda-feira sobre o relatório semanal.',
        '4': 'Ative Horário silencioso e preencha os campos Das e Às para silenciar os alertas durante a noite. Os horários seguem o relógio deste celular.',
        '5': 'Em Ajustes, Alertas no app e Sirene de SOS são opções separadas: controlam o aviso dentro do app e o som alto de SOS neste celular.',
      },
    },
    appLanguage: {
      title: 'Mudar o idioma do app',
      summary: 'Escolha qual idioma o KidGate usa em cada celular e no painel web.',
      keywords: 'português, inglês, tradução, idioma errado, idioma de exibição',
      tip: 'Cada celular mantém o próprio idioma. As notificações e o widget dele seguem esse idioma.',
      steps: {
        '1': 'No celular de um responsável ou de uma criança, abra Ajustes e selecione Idioma.',
        '2': 'Escolha um idioma para fixá-lo, ou Idioma do dispositivo para seguir a configuração do celular. Se o KidGate não oferecer o idioma do celular, ele usa inglês.',
        '3': 'O app muda na hora. As notificações para este celular e o widget dele também passam a usar o novo idioma.',
        '4': 'No painel web, mude o idioma na seção da conta do menu lateral. A mudança vale só para esse navegador.',
      },
    },
    webSignIn: {
      title: 'Usar o KidGate no computador',
      summary: 'Entre no painel web e gerencie sua família pelo navegador.',
      tip: 'Só autorize um navegador em que você mesmo esteja entrando: ele recebe o mesmo controle que o seu celular. O painel web não pode parear dispositivos nem comprar um plano. Para desconectar um navegador, use Sair no painel.',
      steps: {
        '1': 'No computador, abra dashboard.kidgate.app e escolha Entrar com o app do KidGate. Um código QR aparece.',
        '2': 'No seu celular, abra Ajustes e depois Entrar na web. Você também pode escanear pela tela Família, com o ícone de escanear.',
        '3': 'Escaneie o código QR que aparece no navegador. Se a câmera não conseguir lê-lo, digite o código de 6 caracteres.',
        '4': 'Confira se o código é o mesmo e selecione Autorizar. Selecione Não autorizar se não for você quem está entrando.',
        '5': 'O navegador entra em alguns segundos e pode fazer alterações por 7 dias. Depois desse prazo, ele continua mostrando sua família; para mudar algo, selecione Desbloquear alterações no painel e digite seu PIN dos pais, ou autorize o navegador de novo pelo seu celular.',
      },
    },
    securityPins: {
      title: 'PIN dos pais e Bloqueio do app',
      summary:
        'Dois PINs diferentes: o PIN dos pais protege as configurações no dispositivo do seu filho, e o Bloqueio do app protege o app dos pais no seu celular.',
      tip: 'Somente o dono da família pode definir ou redefinir o PIN dos pais. Nunca o compartilhe com seu filho.',
      steps: {
        '1': 'Abra Ajustes. Em Segurança, selecione PIN dos pais para criar um PIN de 6 dígitos ou para alterá-lo.',
        '2': 'O dispositivo do seu filho pede o PIN dos pais antes de permitir alterar os Apps bloqueados ou sair do KidGate nele.',
        '3': 'Se você esquecer o PIN, selecione Esqueceu o PIN? no mesmo lugar para definir um novo como dono da família.',
        '4': 'Se o PIN ficar bloqueado em um dispositivo da criança após 5 tentativas incorretas, a seção Segurança mostra uma linha de desbloqueio para esse dispositivo. Selecione-a para zerar as tentativas.',
        '5': 'Para proteger o app dos pais neste celular, ative o Bloqueio do app e crie um PIN próprio de 6 dígitos. Você também pode permitir o desbloqueio com Face ID, Touch ID ou impressão digital.',
      },
    },
    reportProblem: {
      title: 'Relatar um problema',
      summary:
        'Conte à equipe do KidGate o que deu errado, anexe capturas de tela e leia a resposta no app.',
      keywords:
        'bug, erro, contato, feedback, não funciona, quebrado, atendimento, ajuda, e-mail',
      tip: 'Você recebe uma notificação quando o KidGate responde. Se perdeu, a linha Suporte em Ajustes mostra Nova resposta.',
      steps: {
        '1': 'Abra Ajustes e selecione Suporte. No painel web, Suporte fica no menu.',
        '2': 'Selecione Relatar um problema, ou Novo relato se você já enviou algum.',
        '3': 'Descreva o que aconteceu e em qual dispositivo, anexe até 5 capturas de tela se ajudarem e selecione Enviar relato.',
        '4': 'Cada relato mostra seu status: Recebido, Em análise ou Resolvido. A resposta do KidGate aparece abaixo do relato.',
        '5': 'Você pode responder abaixo do relato até ele ser fechado. Para outro problema, envie um novo relato.',
      },
    },
    deleteAccount: {
      title: 'Excluir sua conta',
      summary:
        'Remova sua conta do KidGate e os dados dela, com 14 dias para mudar de ideia.',
      tip: 'Excluir sua conta não cancela uma assinatura da App Store ou do Google Play; cancele-a na loja. Um responsável que não é o dono e só quer deixar de gerenciar a família pode sair dela.',
      steps: {
        '1': 'Abra Ajustes e, em Conta, selecione Excluir conta.',
        '2': 'Leia o que será removido. Se você for o dono da família, todos os outros responsáveis e todos os dispositivos das crianças também perdem o acesso.',
        '3': 'Confirme que é você (com sua senha ou entrando novamente com Google ou Apple), digite OK e selecione Excluir permanentemente.',
        '4': 'A conta é excluída após 14 dias. Até lá, abra o KidGate e selecione Cancelar exclusão para manter tudo.',
        '5': 'Quando um responsável que não é o dono exclui a conta, só a conta dele é removida; a família continua. Para sair de uma família sem excluir sua conta, abra o cartão da família em Família e selecione Sair da família.',
      },
    },
  },
  onChildDevice: 'No dispositivo da criança',
  onParentDevice: 'No seu dispositivo',
  handoffHint:
    'O KidGate pode orientar estes passos no próprio dispositivo da criança: abra-o lá, vá em Status e escolha Concluir configuração com um responsável. Cada passo tem um botão que abre a tela certa.',
} as const;
