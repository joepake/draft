export const userGuide = {
  title: 'Guia do usuário',
  subtitle:
    'Ajuda passo a passo sobre permissões, pareamento de dispositivos, controles diários e recursos de segurança.',
  stepLabel: 'Passo {{n}}',
  stepsSectionTitle: 'Passos',
  tipTitle: 'Dica',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'Ver como fazer',
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
        'Limite diário, Horários bloqueados, Apps bloqueados, Limites de apps, Bloqueio do dispositivo, Solicitações de tempo e Tarefas com recompensa',
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
        '2': 'Selecione “Junte-se ao KidGate” e entre com Google ou Apple, ou crie uma conta de e-mail.',
        '3': 'Em Família, selecione Criar família e dê um nome à sua família (por exemplo, “Família Nguyen”). Esse nome aparece quando outros responsáveis entrarem. Se outro responsável já tiver criado sua família, selecione Entrar em uma família.',
        '4': 'Se você é o dono da família, defina um PIN dos pais (6 dígitos) em Ajustes, depois Segurança. Memorize-o ou guarde-o em local seguro e não o compartilhe com as crianças.',
        '5': 'Recomendado: ative o Bloqueio do app e o desbloqueio biométrico em Ajustes para que outras pessoas não abram o app dos pais no seu dispositivo.',
        '6': 'Abra Família e toque no ícone de escanear (Escanear código). A câmera abre imediatamente: escaneie o código QR mostrado no dispositivo da criança ou selecione Digitar código manualmente e digite o código.',
        '7': 'Depois que o dispositivo da criança se conectar, o KidGate pergunta quem o usa: escolha seu filho (ou adicione um) ou “Ninguém” para um dispositivo compartilhado. Em seguida, abra o perfil da criança em Família (ou o dispositivo, se não estiver atribuído a nenhuma criança). Defina o Limite diário e os Horários bloqueados e conclua as permissões junto com seu filho.',
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
        '5': 'Na tela “Status”, selecione “Continuar configuração” no cartão “Termine a configuração com um responsável”. Em seguida, “Configurar proteção” pede cada permissão de que o KidGate precisa (notificações, localização, câmera e permissões específicas da plataforma), uma etapa por vez. Permita cada uma ou pule uma etapa opcional por enquanto.',
        '6': 'Deixe o KidGate instalado e conectado no dispositivo da criança. Depois disso, os responsáveis gerenciam os limites pelo próprio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar o celular ou tablet da criança',
      summary:
        'Pareie um novo dispositivo da criança à sua família com um código QR ou um código.',
      tip: 'Os códigos expiram. Se o pareamento falhar, selecione Novo código no dispositivo da criança e tente novamente. O plano gratuito envia relatórios de um único dispositivo e só permite endurecer as regras nele, então outro dispositivo que você parear começa pausado.',
      steps: {
        '1': 'No dispositivo da criança: abra o KidGate, depois Este é um dispositivo de uma criança. Deixe a tela do código QR visível.',
        '2': 'No dispositivo dos pais: abra Família e toque no ícone de escanear (Escanear código).',
        '3': 'A câmera abre imediatamente: permita o acesso à câmera se solicitado e alinhe o código QR do dispositivo da criança dentro da moldura.',
        '4': 'Ou use o código: selecione Digitar código manualmente, digite os 6 caracteres mostrados no dispositivo da criança e continue.',
        '5': 'No dispositivo da criança, leia a tela de confirmação com atenção. Selecione Sim, conectar somente se o nome do responsável estiver correto.',
        '6': 'Aguarde o dispositivo dos pais confirmar a conexão. Em seguida, o KidGate pergunta ao dono da família quem usa o novo dispositivo: escolha uma criança ou “Ninguém” para um dispositivo compartilhado. O dispositivo aparece em “Família”.',
        '7': 'Abra o novo dispositivo e verifique se ele mostra um horário em “Última atividade” (Última conexão em um iPhone). Estar online significa que alguém usou o dispositivo nos últimos 10 minutos, então um dispositivo que ninguém está usando aparece como offline mesmo estando conectado. Se nenhum horário aparecer, reabra o KidGate no dispositivo da criança e verifique a conexão de rede.',
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
        '3': 'Abra o KidGate no computador. Ele mostra um código QR e um código de 6 caracteres; não é preciso entrar em nenhuma conta. Se a janela estiver fechada, clique no ícone do KidGate na barra de menus (Mac) ou na área de notificação (Windows).',
        '4': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR, ou selecione Digitar código manualmente e digite o código.',
        '5': 'No computador, confira o nome do responsável e selecione Sim, conectar.',
        '6': 'Siga os passos de “Concluir a configuração deste dispositivo”. No Mac, selecione “Abrir Ajustes” ao lado de “Aprovar o filtro da web” e ative o KidGate na página que abrir — o Filtro da web só funciona depois disso. No Mac, selecione “Permitir” para Localização e Câmera. No Windows, ative o KidGate para as duas em Configurações, em Privacidade e segurança, se o passo pedir.',
        '7': 'De volta ao seu dispositivo, o dono da família escolhe qual criança usa o computador. Em um Mac ou PC com Windows, você bloqueia apps em “Aplicativos instalados”.',
      },
    },
    updateComputer: {
      title: 'Atualizar o KidGate em um computador',
      summary:
        'Instale uma nova versão no Mac ou no PC com Windows do seu filho. Isso é feito no próprio computador, com a senha de administrador do computador — não pelo seu dispositivo.',
      keywords:
        'upgrade, update, versão antiga, última versão, reinstalar, admin, controle de conta de usuário, uac, macbook, imac, notebook, laptop',
      tip: 'Com uma conta padrão (sem privilégios de administrador) para o seu filho, como recomendado ao conectar o computador, a atualização exige o nome de usuário e a senha de um administrador, então seu filho não consegue instalá-la sozinho. Não é preciso trocar de conta: digite-os na solicitação que aparecer. O computador continua conectado e mantém as regras; não é preciso fazer o pareamento de novo.',
      steps: {
        '1': 'Você recebe uma notificação para cada computador que precisa da atualização, e a página do computador mostra que ele está desatualizado. Não há nada a instalar pelo seu dispositivo: vá até o computador.',
        '2': 'No computador, abra o KidGate. Se a janela estiver fechada, clique no ícone do KidGate na barra de menus (Mac) ou na área de notificação (Windows). Perto do topo da tela Status aparece o aviso Há uma versão mais recente do KidGate — em vermelho, com Atualização importante, quando a atualização não deve esperar.',
        '3': 'Selecione Obter a atualização. O KidGate baixa a nova versão e abre o instalador. Se o download falhar, kidgate.app/download é aberto: baixe o KidGate lá e execute o instalador, como na primeira instalação.',
        '4': 'No Mac, siga o instalador e digite o nome de usuário e a senha do administrador quando for pedido. No Windows, primeiro aparece uma mensagem perguntando se você deseja permitir que o app faça alterações: digite a senha do administrador, se for pedida, selecione Sim e depois siga o instalador.',
        '5': 'Mantenha o computador ligado até o KidGate abrir de novo sozinho. De volta ao seu dispositivo, o computador deixa de aparecer como desatualizado (no painel web, recarregue a página).',
      },
    },
    connectTv: {
      title: 'Conectar uma Android TV',
      summary:
        'Instale o KidGate em uma Android TV e faça o pareamento pelo seu dispositivo, sem digitar nada no controle remoto.',
      keywords: 'android tv, google tv, televisão, tv, box',
      tip: 'A TV não tem Localização, SOS, Check-in nem Solicitações de tempo, e um app bloqueado é fechado depois de abrir, não impedido de abrir. O tempo de tela pode chegar com até uma hora de atraso. Uma TV sem os serviços do Google Play não recebe push, então um bloqueio, um desbloqueio ou uma mudança de regra pode levar até 30 minutos para chegar.',
      steps: {
        '1': 'Na TV, abra o Google Play, pesquise KidGate e instale o app.',
        '2': 'Abra o KidGate na TV. Ele mostra um código QR e um código de 6 caracteres; não é preciso entrar em nenhuma conta.',
        '3': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR da TV, ou selecione Digitar código manualmente e digite o código.',
        '4': 'A TV se conecta sozinha em alguns segundos. Não é preciso confirmar nada no controle remoto.',
        '5': 'Siga os passos de “Configurar proteção” na TV: selecione “Concordar” para ativar Acessibilidade, “Abrir Ajustes” para Acesso de uso e Exibir sobre outros apps e, depois, “Ativar VPN” e aprove a conexão para que o Filtro da web funcione.',
        '6': 'Se uma configuração não continuar ativada, reinicie a TV e tente novamente. Você pode reabrir Configurar proteção na tela principal do KidGate na TV.',
        '7': 'De volta ao seu dispositivo, o dono da família escolhe qual criança usa a TV. Você bloqueia os apps da TV em “Aplicativos instalados”.',
      },
    },
    connectChrome: {
      title: 'Conectar a extensão do Chrome',
      summary:
        'Adicione o filtro da web do KidGate ao Chrome em um Chromebook, Mac ou PC. Ela aparece como um dispositivo próprio.',
      keywords: 'chromebook, extensão do chrome, extensão do navegador',
      tip: 'A extensão filtra apenas o Chrome: não filtra outros navegadores nem janelas anônimas, a menos que você permita. Em chrome://extensions, abra os Detalhes do KidGate e ative Permitir no modo anônimo. Ela não tem Limite diário, Horários bloqueados, Bloqueio do dispositivo, Apps bloqueados nem tempo de tela; isso exige um celular, um computador ou uma TV.',
      steps: {
        '1': 'No Chrome do computador do seu filho, abra a Chrome Web Store, pesquise KidGate e selecione Usar no Chrome.',
        '2': 'Selecione o ícone do KidGate na barra de ferramentas do Chrome. Se não o encontrar, fixe-o pelo menu Extensões (ícone de quebra-cabeça). O pop-up mostra um código QR e um código de 6 caracteres; mantenha-o aberto durante o pareamento.',
        '3': 'No seu dispositivo, abra Família, toque no ícone de escanear (Escanear código) e escaneie o código QR, ou selecione Digitar código manualmente e digite o código.',
        '4': 'No pop-up do KidGate, confira o nome do responsável e selecione Sim, conectar.',
        '5': 'De volta ao seu dispositivo, o dono da família escolhe qual criança usa a extensão; depois, ative o Filtro da web para ela. Até lá, a extensão mostra “Inativo”.',
        '6': 'Opcional, com o Premium: para saber quais vídeos seu filho assiste, abra “Vídeos assistidos” e ative “Registrar vídeos assistidos” para a extensão.',
      },
    },
    inviteParent: {
      title: 'Convidar outro responsável',
      summary:
        'Permita que um segundo responsável entre na mesma família e gerencie os mesmos dispositivos das crianças.',
      tip: 'Somente o dono da família pode aprovar solicitações de entrada. Aprove rapidamente, pois as solicitações podem expirar. Uma família pode ter até 3 responsáveis no plano gratuito e durante o teste, e até 6 com o Premium.',
      steps: {
        '1': 'No dispositivo do dono da família, abra Família. Se sua família ainda não tem nome, toque em +, escolha Criar família e dê um nome a ela.',
        '2': 'Toque em + e escolha Convidar um responsável.',
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
      tip: 'Somente o dono da família pode renomear ou remover dispositivos. A remoção não pode ser desfeita: o tempo de tela, a localização, o histórico da web e de vídeos, a atividade, a lista de apps, os alertas de SOS, os Check-ins, os pedidos e as tarefas com recompensa do dispositivo são apagados. Para protegê-lo de novo, conecte-o como um dispositivo novo.',
      steps: {
        '1': 'Para renomear um dispositivo, abra-o em Família ou no perfil do seu filho e selecione Editar ao lado do nome.',
        '2': 'Digite um nome que todos os responsáveis reconheçam de relance e salve.',
        '3': 'Para remover um dispositivo, abra-o, selecione Remover dispositivo no fim da tela e confirme. Na aba Dispositivos das crianças do cartão da família, você também pode deslizar um dispositivo para a esquerda.',
        '4': 'O dispositivo sai da sua família. Um celular mostra que ele foi removido; um computador, uma TV ou a extensão do Chrome volta para a tela de pareamento.',
        '5': 'Para usar o dispositivo de novo, por exemplo depois de redefini-lo ou se ele passar para outro filho, conecte-o como novo: abra Família e toque no ícone de escanear (Escanear código).',
      },
    },
    androidPermissions: {
      title: 'Permissões do Android (dispositivo da criança)',
      summary:
        'Ative o Acesso de uso, Exibir sobre outros apps, Acessibilidade, bateria e permissões relacionadas.',
      keywords:
        'acessibilidade, acesso de uso, sobrepor a outros apps, notificações, administrador do dispositivo, proteção contra desinstalação, microfone, vpn, permitir',
      tip: 'O importante é concluir tudo, não a ordem. Faça todas as etapas que o assistente oferece, inclusive as opcionais, antes de confiar no bloqueio ou nos Horários bloqueados. Uma etapa que você pular continua na tela Status até ser concluída.',
      steps: {
        '1': 'Abra o KidGate no dispositivo da criança e vá em “Status”. No cartão “Termine a configuração com um responsável”, selecione “Continuar configuração” (quando os passos indispensáveis estiverem concluídos, o cartão mostra “A proteção principal está ativada”, com “Reforçar agora”). “Configurar proteção” então percorre as permissões uma de cada vez, na ordem abaixo.',
        '2': '“Acesso de uso”: abra a tela do sistema, encontre o KidGate e ative a opção. Isso é necessário para o acompanhamento do tempo de tela e dos limites.',
        '3': 'Assistente de bloqueio por “Acessibilidade”: leia o aviso e selecione “Concordar”; isso abre a página de Acessibilidade. Se abrir uma lista, encontre o KidGate em “Apps instalados / baixados”, ative a opção e selecione “Permitir” na confirmação do Android. Isso mantém o bloqueio em vigor.',
        '4': '“Exibir sobre outros apps”: permita para o KidGate, para que a tela de bloqueio apareça sobre outros apps. Depois, “Notificações”: selecione “Permitir”. O KidGate precisa das notificações deste dispositivo para aprovações de tempo e lembretes.',
        '5': '“Localização”: escolha “Permitir o tempo todo”; do contrário, o mapa só é atualizado enquanto o KidGate está aberto. Se o Filtro da web estiver ativado, o próximo passo pede a VPN dele: selecione “Ativar VPN” e aprove o pedido do Android.',
        '6': 'Bateria sem restrições: selecione Permitir quando solicitado. Se nenhuma solicitação aparecer: Informações do app, depois Bateria, depois Sem restrições.',
        '7': '“Alarmes e lembretes”: permita para que os Horários bloqueados comecem e terminem no horário certo. Depois, “Impedir desinstalação”: selecione “Permitir” e, na tela de confirmação do Android, toque em Ativar. Para remover o KidGate será preciso desativar isso primeiro, e os pais são avisados.',
        '8': '“Alertas de mensagens”: selecione “Permitir acesso às notificações” e ative o KidGate na lista que abrir; isso só importa quando um dos pais ativa os Alertas de mensagens. Depois, “Câmera” (para Check-in e fotos de SOS) e o microfone (para o som do SOS): permita durante o uso do app. Quando o assistente mostrar “Tudo pronto”, a configuração está concluída.',
      },
    },
    iosScreenTime: {
      title: 'Tempo de tela do iOS (dispositivo da criança)',
      summary:
        'Permita o Uso de apps e sites para que o bloqueio, os horários e a seleção de apps funcionem.',
      keywords: 'tempo de uso, tempo de tela, family controls, iphone, ipad, autorizar',
      tip: 'Se a autorização falhar, o KidGate diz o motivo: o dispositivo precisa de um código, outro app já controla o Tempo de Uso, ou uma restrição impede o KidGate de usá-lo. Corrija isso nos Ajustes do iOS e tente novamente.',
      steps: {
        '1': 'Abra o KidGate no dispositivo da criança e vá em “Status”. No cartão “Termine a configuração com um responsável”, selecione “Continuar configuração” (quando os passos indispensáveis estiverem concluídos, o cartão mostra “A proteção principal está ativada”, com “Reforçar agora”).',
        '2': 'No assistente “Configurar proteção”, selecione “Permitir uso de apps e sites”.',
        '3': 'Na caixa de diálogo do sistema, selecione Permitir. Não feche a caixa de diálogo sem escolher.',
        '4': 'Volte ao KidGate. O assistente passa para a próxima etapa assim que a autorização for concluída.',
        '5': 'Se a autorização foi negada antes: abra Ajustes do iOS, encontre o KidGate, ative Tempo de Uso nessa página e reabra o KidGate.',
        '6': 'Para escolher os apps bloqueados: no dispositivo da criança, abra Ajustes do KidGate, depois selecione Desbloquear com o PIN dos pais, depois abra Apps bloqueados e salve.',
        '7': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Aplicativos, e confirme que a lista foi sincronizada. Ative o bloqueio quando estiver pronto.',
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
        '1': 'Abra o KidGate, vá em “Status” e abra “Configurar proteção”. Procure a etapa “Permitir inicialização automática”; ela aparece apenas em dispositivos cujo fabricante precisa dela.',
        '2': 'Permita a inicialização automática do KidGate na tela de segurança do fabricante (o texto varia conforme o dispositivo).',
        '3': 'Defina o uso de bateria do KidGate como Sem restrições tanto nos ajustes do Android quanto no menu de bateria do fabricante, se ambos existirem.',
        '4': 'Desative listas de “apps em repouso”, “apps em repouso profundo” ou “colocar apps para dormir” que incluam o KidGate.',
        '5': 'Se um atalho não funcionar, abra manualmente o app Segurança / Cuidados do dispositivo e procure por KidGate, Inicialização automática ou Bateria.',
        '6': 'O KidGate não consegue ler as configurações do fabricante; por isso, selecione “Concluído” na etapa “Permitir inicialização automática” depois de permiti-la lá.',
      },
    },
    dailyLimit: {
      title: 'Definir um Limite diário',
      summary:
        'Limite quantos minutos uma criança pode usar seus dispositivos por dia.',
      keywords: 'tempo de tela, horas por dia, tempo esgotado, limite, estender',
      tip: 'Os dados de uso vêm do dispositivo da criança. Se o contador parecer travado, abra o KidGate no dispositivo da criança e aguarde uma sincronização.',
      steps: {
        '1': 'No dispositivo dos pais, abra Família, depois toque no perfil da criança (ou no dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Em Controles principais, selecione Limite diário.',
        '3': 'Escolha um valor de minutos por dia (ou edite o limite existente) e salve. Para uma criança, é um total único, compartilhado por todos os dispositivos dela.',
        '4': 'Depois que o dispositivo da criança sincronizar, confira se os minutos usados hoje aparecem ao lado do limite.',
        '5': 'Quando o limite é atingido, o dispositivo bloqueia até a meia-noite. Para dar mais tempo hoje, aprove um pedido de tempo ou aumente o Limite diário. “Desbloquear” só remove um bloqueio que você mesmo definiu.',
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
        '2': 'Ative a chave “Ativar Horários bloqueados”. Enquanto ela estiver desligada, a tela não mostra nenhuma faixa de horário nem como adicionar uma.',
        '3': 'Uma nova agenda começa com uma faixa, das 22:00 às 07:00. Toque em uma faixa para definir os horários dela no círculo e os dias em que se repete. Para outra faixa, selecione “Adicionar faixa” ou uma das opções de “Adição rápida”.',
        '4': 'Cada alteração é salva assim que você a faz. Para remover uma faixa, deslize-a para a esquerda, ou abra-a e selecione “Remover”.',
        '5': 'Em um dispositivo Android da criança, confirme que “Alarmes e lembretes” continua permitido para que as faixas comecem e terminem no horário certo. Em um iPhone ou iPad, confirme que “Tempo de Uso” continua permitido.',
        '6': 'Durante uma faixa ativa, o cartão de Horários bloqueados mostra Horário bloqueado ativo · dispositivo bloqueado. “Desbloquear” não encerra uma faixa: para encerrar uma mais cedo, desative “Ativar Horários bloqueados” ou mude os horários dela.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicos',
      summary:
        'Bloqueie apps em “Aplicativos instalados”. Em um iPhone, escolha-os no próprio iPhone.',
      keywords:
        'bloquear app, bloquear aplicativo, tiktok, facebook, instagram, jogos, roblox, esconder app',
      tip: 'Um dispositivo da criança conectado recebe cada mudança em um minuto. No iOS, a Apple pode ocultar os nomes exatos dos apps dos dispositivos dos pais, e os apps são escolhidos no iPhone com o PIN dos pais.',
      steps: {
        '1': 'No seu dispositivo, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois “Aplicativos” e então “Aplicativos instalados”.',
        '2': 'Toque em um app e escolha “Bloquear”. Bloquear um novo app precisa do Premium.',
        '3': 'O app fecha no dispositivo da criança assim que abre. Para permitir de novo, toque nele e escolha “Desbloquear”.',
        '4': 'Em um iPhone, escolha os apps no próprio iPhone: abra KidGate, depois Ajustes, selecione “Desbloquear com o PIN dos pais” e abra “Apps bloqueados”.',
        '5': 'Depois, ative “Ativar Apps bloqueados” no seu dispositivo. O status deve mostrar “Bloqueio ativado”.',
        '6': 'Teste abrindo um app bloqueado no dispositivo da criança. Ele deve ficar restrito conforme as regras da plataforma.',
        '7': 'Para alterar depois a lista de um iPhone, repita a seleção no iPhone com o PIN dos pais.',
      },
    },
    appLimits: {
      title: 'Definir Limites de apps',
      summary:
        'Defina um tempo diário próprio para apps específicos, além do Limite diário.',
      keywords: 'limite de tempo por app, minutos por app, tiktok, youtube, jogos',
      tip: 'Os Limites de apps não estão disponíveis no iPhone nem no iPad. Em um computador ou TV, um app que atinge o limite é fechado depois de abrir, não impedido de abrir.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Aplicativos. Cada dispositivo tem seus próprios limites; com mais de um dispositivo, cada app mostra em qual deles está.',
        '2': 'Abra “Aplicativos instalados”, toque no app e selecione “Definir um limite de tempo”. Um novo limite começa em 60 minutos.',
        '3': 'Ajuste cada limite com o seletor ou um valor predefinido, de 5 minutos a 8 horas por dia. Você pode limitar até 20 apps.',
        '4': 'Selecione “Salvar limite”. Ele vale na hora, e os limites reiniciam à meia-noite no dispositivo da criança.',
        '5': 'O Limite diário continua valendo para o dispositivo inteiro, então um app pode ser bloqueado antes de esgotar o próprio limite. Para remover um limite, abra “Visão geral”, toque nele em “Limites atuais” e selecione “Remover limite”.',
      },
    },
    lockUnlock: {
      title: 'Bloquear e desbloquear o dispositivo',
      summary: 'Bloqueie o dispositivo da criança imediatamente ou restaure o acesso.',
      tip: 'No Android, o bloqueio é mais eficaz quando Exibir sobre outros apps e Acessibilidade estão ativados. No iOS, o bloqueio depende da autorização do Tempo de Uso, e, se o KidGate foi fechado no iPhone, o bloqueio aparece quando o KidGate voltar a ser executado.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Selecione Bloquear tudo para bloquear todos os dispositivos dessa criança, ou abra um único dispositivo e selecione Bloquear dispositivo.',
        '3': 'Aguarde alguns segundos. O status deve mudar para Bloqueado. Se nada mudar, abra o KidGate no dispositivo da criança e verifique as permissões novamente.',
        '4': 'Para restaurar o acesso, selecione Desbloquear tudo (ou Desbloquear na tela do dispositivo).',
        '5': 'Opcional: você também pode bloquear ou desbloquear rapidamente pela tela Família, se esses atalhos aparecerem no cartão do dispositivo.',
        '6': 'Um celular ou computador bloqueado ainda deixa seu filho enviar um SOS. No Android, as chamadas sempre funcionam, e o SOS também abre mapas e mensagens por 5 minutos enquanto todo o resto continua bloqueado; o SOS aparece em “Atividades”.',
      },
    },
    siri: {
      title: 'Usar a Siri no iPhone',
      summary:
        'Por voz, bloqueie ou desbloqueie os dispositivos de uma criança, dê minutos extras e ouça o tempo de uso de hoje.',
      keywords: 'voz, comando de voz, falar, mãos livres, assistente, Atalhos, voice',
      tip: 'Os comandos de voz funcionam no iPhone de um dos pais, para todos os pais da família, no idioma definido para a Siri. Em alguns idiomas, a Siri não reconhece o nome KidGate falado (em vietnamita não reconhece): digite o comando para a Siri, ou execute-o pelo app Atalhos. Celulares Android e o painel web não têm comandos de voz.',
      steps: {
        '1': 'Entre no KidGate no seu iPhone e abra o app uma vez. É assim que a Siri aprende os nomes dos seus filhos, e uma criança ou dispositivo adicionado depois chega à Siri na próxima vez que você abrir o KidGate. Se a Siri disser “Entre no KidGate primeiro.”, abra o KidGate neste iPhone.',
        '2': 'Diga à Siri “KidGate, bloquear Ana”, com o nome da criança. Todos os dispositivos dela são bloqueados, como em Bloquear tudo. Um dispositivo sem criança atribuída atende pelo próprio nome.',
        '3': 'Diga “KidGate, desbloquear Ana” para devolver o acesso. Para todos os dispositivos da família de uma vez, diga “KidGate, bloquear tudo” ou “KidGate, desbloquear tudo”.',
        '4': 'Diga “KidGate, dar minutos extras a Ana” para adicionar 15 minutos hoje em todos os dispositivos da criança. O tempo extra termina à meia-noite.',
        '5': 'Diga “KidGate Tempo de Uso de Ana” para ouvir o tempo de uso de hoje. A Siri lê os últimos dados que o KidGate mostrou a você, então abra o KidGate antes para ter os mais recentes.',
        '6': 'O app Atalhos lista os mesmos comandos em KidGate, prontos para rodar com um toque. Para dar outra quantidade, de 5 a 180 minutos, adicione a ação Dar minutos extras a um filho a um atalho seu e ajuste os minutos ali.',
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
        '3': 'A web fica bloqueada nesse dispositivo até o tempo acabar. As configurações do Filtro da web não mudam, e a pausa funciona mesmo com o Filtro da web desativado. Em um computador, os navegadores são fechados até a pausa terminar.',
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
        '5': 'As solicitações respondidas aparecem em “Atividades”. Para parar de receber essas notificações no seu dispositivo, desative “Solicitações de tempo” em “Notificações push”, nos Ajustes.',
      },
    },
    rewardTasks: {
      title: 'Configurar Tarefas com recompensa',
      summary:
        'Crie pequenas tarefas que seu filho pode concluir para ganhar minutos extras hoje.',
      tip: 'Os minutos extras só contam quando o dispositivo tem um Limite diário. Eles vão para o dispositivo que seu filho usou para marcar a tarefa como feita. Tarefas com recompensa não estão disponíveis na Android TV nem na extensão do Chrome.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Tarefas com recompensa.',
        '2': 'Selecione “Nova tarefa” (enquanto a lista estiver vazia, você também pode começar com um modelo). Digite a tarefa, escolha a recompensa em minutos (de 5 a 240), a dificuldade e se ela se repete “Todos os dias” ou “Uma vez”; depois selecione “Criar tarefa”.',
        '3': 'No dispositivo da criança, a tarefa aparece em Ganhe tempo extra. Quando terminar, seu filho seleciona Já fiz.',
        '4': 'Você recebe uma notificação. A tarefa aparece em Precisa de aprovação (em Família e no perfil da criança) e em Prontas para revisar (na tela Tarefas com recompensa). Selecione Aprovar para somar os minutos ao dia de hoje, ou Devolver para que seu filho tente de novo.',
        '5': 'Toque em uma tarefa para editá-la ou excluí-la. O plano gratuito permite até 10 tarefas ativas ao mesmo tempo; o Premium permite 20.',
        '6': 'Cada tarefa vale de 1 a 3 estrelas conforme a dificuldade, e as estrelas contam quando você aprova a tarefa. Em uma família com 2 ou mais filhos, cada filho vê o Quadro de estrelas desta semana no KidGate do próprio dispositivo; ele recomeça toda semana. Para ocultá-lo, o dono da família abre “Família”, depois o cartão da família, e desativa o “Quadro de estrelas” na aba “Filhos”.',
      },
    },
    locationSharing: {
      title: 'Ativar o compartilhamento de localização',
      summary: 'Veja a última localização do seu filho no dispositivo dos pais.',
      keywords: 'gps, mapa, onde está meu filho, encontrar o celular, lugares',
      tip: 'A localização exige permissão no dispositivo da criança e uma conexão de rede estável. O GPS em ambientes internos pode ser menos preciso.',
      steps: {
        '1': 'No dispositivo da criança, permita a Localização para o KidGate quando solicitado (ou nos Ajustes do sistema). Escolha “Permitir o tempo todo” no Android ou “Sempre” no iPhone ou iPad; do contrário, a localização só é atualizada enquanto o KidGate está aberto.',
        '2': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Localização.',
        '3': 'Ative o compartilhamento se estiver desativado e aguarde a primeira atualização.',
        '4': 'Se o status continuar mostrando aguardando, toque no botão de atualizar ou reabra a tela.',
        '5': 'Opcional e parte do Premium: abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois a seção “Alertas”, e selecione “Locais” para configurar Alertas de locais quando seu filho entrar ou sair de um local salvo.',
        '6': 'Se o celular foi perdido por perto, abra Localização e toque em Fazer o dispositivo tocar. Um iPhone fica em silêncio enquanto estiver no modo silencioso ou com um Foco ativado.',
      },
    },
    checkIn: {
      title: 'Solicitar um Check-in',
      summary:
        'Peça ao seu filho para confirmar que está bem, com a localização e, no Premium, uma foto.',
      tip: 'A foto faz parte do Premium; o plano gratuito pede apenas a localização. A permissão de câmera no dispositivo da criança é necessária para a foto.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança).',
        '2': 'Selecione Check-in na seção Monitoramento de segurança e depois “Enviar” ao lado do dispositivo.',
        '3': 'O dispositivo da criança recebe uma notificação e tela de Check-in. A criança toca para confirmar que está bem ou para pedir ajuda.',
        '4': 'Com o Premium, se o acesso à câmera estiver permitido, o KidGate anexa uma foto junto com a localização quando possível. No plano gratuito, só a localização é enviada.',
        '5': 'No dispositivo dos pais, o “Histórico de Check-in” na mesma tela mostra a última resposta e a foto, se houver.',
      },
    },
    sos: {
      title: 'Alertas de emergência SOS',
      summary:
        'Como uma criança envia um SOS, o que ele inclui e como os responsáveis respondem.',
      keywords:
        'botão de pânico, ajuda, perigo, inseguro, áudio, voz, microfone, sirene, e-mail, avós, vizinho',
      tip: 'O SOS funciona em celulares e computadores, não em uma TV nem na extensão do Chrome. O som só é gravado em celulares. Teste uma vez em casa, antes de adicionar Contatos de confiança ou depois de avisá-los, porque cada SOS envia um e-mail para eles. Combine com seu filho quando usar o SOS e quando um Check-in basta.',
      steps: {
        '1': 'No dispositivo da criança, abra o SOS no KidGate. Em um celular, é o botão no meio da barra inferior.',
        '2': 'Toque e segure o botão SOS por 5 segundos. Soltar antes cancela o envio.',
        '3': 'O alerta é enviado assim que o KidGate obtém a localização, o que pode levar até meio minuto; sem ela, é enviado mesmo assim. Em um celular, a câmera abre em seguida para uma foto, que pode ser pulada. Se o microfone foi permitido durante a configuração, até 15 segundos de som são gravados a partir do momento em que o SOS é enviado.',
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
        'bloquear site, bloquear link, url, conteúdo adulto, pesquisa segura, modo restrito do youtube, categorias, dns, dns privado, vpn, iphone, ipad',
      tip: 'O filtro lê nomes de sites, não páginas, e seu alcance depende do dispositivo. Os celulares filtram navegadores e muitos apps. Um Mac não consegue verificar sites cujo nome o navegador oculta, cerca de metade das visitas. O Windows verifica Chrome, Edge e Firefox, apenas pelo nome do site. A extensão do Chrome filtra apenas o Chrome. Escolher categorias, usar suas próprias listas e responder a pedidos de sites fazem parte do Premium. Combine o Filtro da web com os Apps bloqueados para uma proteção mais forte.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Filtro da web.',
        '2': 'Ative “Filtrar sites inadequados” no topo. Ele vale na hora, então não há nada para salvar. “Forçar SafeSearch”, na mesma tela, também fixa o Google, o Bing e o DuckDuckGo em resultados seguros e o YouTube no Modo restrito, no Android, na Android TV e no Chrome. No YouTube, o Modo restrito também oculta os comentários e bloqueia alguns vídeos comuns, por isso o KidGate pede confirmação antes de ativá-lo.',
        '3': 'Em “O que bloquear”, escolha as categorias a recusar. Adicione sites em “Sempre permitir” ou “Sempre bloquear”, ou ative “Só sites permitidos” para recusar tudo, exceto a sua lista de permitidos. Quando seu filho pede para abrir um site bloqueado, o pedido fica aguardando em “Pedidos de sites”. Esses controles fazem parte do Premium; o plano gratuito usa um conjunto fixo de categorias.',
        '4': 'Verifique novamente mais tarde na mesma tela. Uma alteração chega ao dispositivo da criança em poucos minutos, e um site já aberto nele pode continuar carregando até o navegador ser fechado. Se até lá ela não tiver chegado, reabra o KidGate no dispositivo da criança para que os ajustes sincronizem.',
        '5': 'No dispositivo da criança, abra o KidGate e aprove o filtro uma vez. Em um iPhone ou iPad, selecione Permitir quando o iOS pedir para adicionar configurações de VPN e depois digite o código do dispositivo. No Android, aprove o pedido de VPN, depois abra Configurações, Rede e internet, DNS privado, e escolha Desativado, porque os navegadores podem contornar o filtro enquanto o DNS privado estiver ativado. No Mac, selecione “Abrir Ajustes” ao lado de “Aprovar o filtro da web” e ative o KidGate.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de proteção',
      summary:
        'Seja notificado quando uma permissão importante no dispositivo da criança for desativada.',
      tip: 'Um alerta de proteção significa que a proteção do KidGate enfraqueceu. Restaure a permissão no dispositivo da criança assim que possível.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois a seção “Alertas”, e selecione “Alertas de proteção”.',
        '2': 'A seção “Permissões monitoradas” mostra se cada permissão de que o KidGate precisa continua ativada. Logo abaixo, a lista dos últimos 30 dias traz cada mudança, como a desativação de Acessibilidade ou Localização.',
        '3': 'No dispositivo da criança, abra KidGate, depois Status e reative a permissão indicada.',
        '4': 'Volte a Alertas de proteção e confira se a permissão aparece de novo como ativada em “Permissões monitoradas”.',
        '5': 'Mantenha as notificações ativadas no dispositivo dos pais para saber das mudanças rapidamente.',
      },
    },
    usageReports: {
      title: 'Ver relatórios de uso',
      summary:
        'Veja por quanto tempo cada dispositivo foi usado hoje e nos últimos 30 dias, também por criança, e em um relatório toda segunda-feira.',
      tip: 'No plano gratuito, você vê o total de hoje e os 3 apps principais, atualizados quando você consulta o KidGate. O Premium adiciona 30 dias de histórico, quando cada dispositivo foi usado, os 10 apps principais, um relatório para cada criança e um novo relatório semanal toda segunda-feira. iPhone e iPad informam apenas o total. No dia em que um dispositivo entra na família, o uso antes disso pode estar incompleto ou contado em “Outros apps”.',
      steps: {
        '1': 'Abra Relatórios. A seção Hoje soma todos os dispositivos; abaixo dela ficam o Relatório semanal, cada criança (Por criança) e cada dispositivo (Por dispositivo).',
        '2': 'Toque em um dispositivo para ver o Relatório de uso dele: o uso de hoje em relação ao Limite diário, os últimos 30 dias, “Quando a tela esteve ligada” e “Mais usados”. Você também pode abri-lo em Uso de hoje, na tela do dispositivo.',
        '3': 'Toque no perfil de uma criança para ver um único relatório com todos os dispositivos dela, em Hoje, 7 dias ou 30 dias. O uso de duas telas ao mesmo tempo conta uma só vez, então o total pode ser menor que a soma dos dispositivos.',
        '4': 'Com o Premium, um novo “Relatório semanal” chega toda segunda-feira de manhã, com uma notificação, para qualquer semana em que um dispositivo foi usado. Quando um dispositivo se destaca, ele sugere uma mudança e abre a configuração certa.',
        '5': 'Ao abrir o KidGate, cada dispositivo recebe um pedido de números atualizados, então eles podem levar alguns minutos para mudar. Um dispositivo sem conexão com a internet envia os dados quando volta a ficar online.',
      },
    },
    screenTimeCounting: {
      title: 'Como o tempo de tela é contado',
      summary:
        'O que soma minutos ao Limite diário e aos relatórios de uso, inclusive um vídeo tocando em uma pequena janela flutuante.',
      keywords:
        'picture-in-picture, pip, imagem em imagem, vídeo flutuante, miniplayer, janela pequena, youtube, música, pausado, segundo plano',
      tip: 'No iPhone e no iPad, o Tempo de Uso da Apple decide o que conta. Em um Mac, o som de um vídeo pode continuar tocando por trás do bloqueio.',
      steps: {
        '1': 'O tempo conta enquanto um app está aberto na tela da criança. A tela inicial, a área de trabalho do computador, a tela de bloqueio e o próprio KidGate não contam.',
        '2': 'Em um celular Android ou em um computador, um vídeo tocando em uma pequena janela flutuante (picture-in-picture, PIP) conta para o app que o reproduz, mesmo quando outro app está em primeiro plano.',
        '3': 'Quando esse vídeo flutuante toca sobre outro app, os dois apps mostram esse tempo em “Mais usados”, mas o total do dia o conta só uma vez.',
        '4': 'Um vídeo pausado deixado na janela flutuante continua contando enquanto a janela estiver na tela. Feche a janela para parar a contagem.',
        '5': 'Em um computador, o tempo por trás do bloqueio não conta. Em um computador com Windows, o bloqueio também pausa vídeos e músicas na maioria dos apps, e eles continuam pausados quando o bloqueio termina.',
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
        '3': 'Cada linha mostra o tempo de tela de hoje de uma criança em relação ao Limite diário dela, e quem já o atingiu aparece primeiro. Cabem até 2 crianças no iPhone e até 3 no Android. Dispositivos não atribuídos a uma criança não aparecem.',
        '4': 'Ele é atualizado quando você abre o KidGate. Com o app fechado, e com o Premium, é atualizado no máximo a cada 20 minutos, e só enquanto uma criança está usando um dispositivo.',
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
        '5': 'A tela mostra os últimos 7 dias. Quando seu filho pede para abrir um site bloqueado, o pedido aparece em “Precisa de aprovação”, não aqui.',
      },
    },
    videoHistory: {
      title: 'Ver os Vídeos assistidos',
      summary:
        'Mantenha uma lista dos vídeos do YouTube que seu filho assiste, com o canal e o horário.',
      keywords: 'youtube, shorts, vídeos assistidos, histórico de visualização',
      tip: 'Vídeos assistidos faz parte do Premium e cobre apenas o YouTube. Funciona em celulares Android e na extensão do Chrome, não no iPhone nem no iPad. Em um Mac ou PC, adicione a extensão do Chrome. Uma Android TV só registra vídeos depois que o KidGate tiver acesso às notificações nela, algo que nenhuma tela de TV consegue conceder por enquanto; mesmo assim, os Shorts não aparecem na lista.',
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
      tip: 'Aprovar novos apps e a lista de apps instalados são gratuitos; o histórico de instalações e o bloqueio de um app novo fazem parte do Premium. iPhone e iPad não conseguem informar instalações; neles, Aprovar novos apps oculta a App Store em vez disso.',
      steps: {
        '1': 'No dispositivo dos pais, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Aplicativos.',
        '2': 'Mudanças recentes lista os apps instalados e removidos, dos mais recentes aos mais antigos. Você também recebe uma notificação para cada um.',
        '3': 'Aplicativos instalados lista o que há no dispositivo, e Visão geral mostra o grupo Merecem atenção. Selecione Marcar como seguro para tirar um app desse grupo. Para impedir que um app seja usado, toque nele e selecione “Bloquear”.',
        '4': 'Para manter apps novos bloqueados até você permiti-los, abra Visão geral e ative Aprovar novos apps. Qualquer app instalado depois disso fica bloqueado no dispositivo.',
        '5': 'Quando um app novo estiver aguardando, selecione Permitir ao lado dele para liberá-lo.',
      },
    },
    messageAlerts: {
      title: 'Ativar os Alertas de mensagens',
      summary:
        'Receba um alerta quando uma palavra ou frase preocupante aparecer em mensagens ou buscas no celular Android do seu filho. Você vê a palavra ou frase sinalizada, nunca a mensagem.',
      keywords: 'sms, messenger, whatsapp, palavras-chave, bullying, ler mensagens',
      tip: 'Os Alertas de mensagens fazem parte do Premium. As mensagens são verificadas apenas em celulares Android; as buscas também são verificadas na extensão do Chrome. Só a categoria e a palavra ou frase sinalizada chegam até você. A análise com IA fica desativada, a menos que um responsável a ative para a família.',
      steps: {
        '1': 'No celular Android da criança, abra os Ajustes do KidGate, selecione Desbloquear com o PIN dos pais, depois Permitir acesso às notificações na seção Alertas de mensagens, e ative o KidGate na lista que abrir.',
        '2': 'No seu dispositivo, abra o perfil da criança (ou o dispositivo, se não estiver atribuído a nenhuma criança), depois Alertas de mensagens na seção Alertas, e toque no ícone de configurações no topo. Se seu filho tiver vários dispositivos, selecione primeiro o celular Android.',
        '3': 'Ative Verificar mensagens recebidas. Também sinalizar palavrões é opcional, e você pode escolher até 3 idiomas em Idiomas verificados.',
        '4': 'Para verificar também o que seu filho digita e busca: depois que “Verificar mensagens recebidas” estiver ativado, o dispositivo da criança mostra “Antes de permitir” na seção “Alertas de mensagens”. Selecione “Concordar” ali e depois ative “Verificar mensagens digitadas” e “Verificar buscas” no seu dispositivo.',
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
        '2': 'Depois de parear um dispositivo novo, o KidGate pergunta ao dono da família quem o usa. Escolha seu filho, ou “Ninguém” para um dispositivo compartilhado. Se você escolheu uma criança, o KidGate oferece um conjunto inicial de proteções: selecione “Ativar proteção” ou “Agora não”.',
        '3': 'Um dispositivo para o qual ninguém foi escolhido aparece em Sem atribuição, na tela Família. Selecione Atribuir a uma criança… no cartão dele.',
        '4': 'Depois que um dispositivo é atribuído, o Limite diário, os Horários bloqueados, o Filtro da web, o Check-in, o SOS, os Alertas de locais e as Tarefas com recompensa são definidos no perfil da criança e valem para todos os dispositivos dela. O Limite diário vira um total único para esses dispositivos.',
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
        '2': 'O teste de 7 dias começa quando o primeiro dispositivo da criança é pareado e inclui todos os recursos do Premium. O único limite que permanece é o de responsáveis: até 3 durante o teste e até 6 com o Premium.',
        '3': 'No plano gratuito, todas as regras continuam funcionando, mas só um dispositivo envia relatórios: o total de hoje e os 3 apps principais, atualizados quando você consulta o KidGate. O Premium adiciona atualizações ao vivo, todos os dispositivos, 30 dias de histórico, histórico da web e de vídeos, e relatórios semanais.',
        '4': 'Se o teste terminar com mais de um dispositivo da criança, o KidGate abre a tela “Escolha o dispositivo que reporta”. O escolhido continua enviando relatórios; os outros mostram “Pausado” e mantêm as regras, mas nesses uma regra só pode ser afrouxada, não endurecida. Qualquer um dos pais pode mudar a escolha uma vez a cada 7 dias.',
        '5': 'Para assinar, escolha um plano e selecione “Assinar o Premium” ou “Comprar Vitalício” para a compra única. Ao assinar, todos os dispositivos pausados voltam a enviar relatórios. Se você já pagou antes, selecione “Restaurar compras”.',
      },
    },
    notificationSettings: {
      title: 'Escolher quais alertas receber',
      summary:
        'Ative ou desative cada tipo de alerta e defina um horário silencioso em cada celular dos responsáveis.',
      tip: 'O SOS sempre chega, mesmo com tudo desativado e durante o horário silencioso. Estas configurações valem apenas para este celular; os outros responsáveis escolhem as deles.',
      steps: {
        '1': 'Abra Ajustes, depois Notificações push.',
        '2': 'Na seção “Alertas”, desative os tipos de alerta que você não quer receber neste celular, por exemplo “Solicitações de tempo” ou “Apps instalados ou removidos”.',
        '3': 'A opção “Relatório semanal” controla a notificação de segunda-feira de que há um novo relatório pronto.',
        '4': 'Ative Horário silencioso, depois arraste as duas pontas do círculo para definir quando os alertas ficam em silêncio. Os horários seguem o relógio deste celular.',
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
    appearance: {
      title: 'Mudar a aparência do app',
      summary: 'Escolha o modo escuro, um estilo e uma cor do tema em cada celular.',
      keywords: 'tema, modo noturno, cores, rosa, fundo escuro, personalizar',
      tip: 'Cada celular mantém a própria aparência, então uma mudança no celular da criança nunca muda o seu.',
      steps: {
        '1': 'No celular de um responsável, abra Ajustes. O modo escuro, o estilo e a cor do tema ficam na seção Aparência.',
        '2': 'Ative Modo escuro para ter telas mais escuras, que cansam menos a vista à noite.',
        '3': 'Selecione Estilo do tema e escolha Clássico ou Doce, que traz tons pastel quentes e um visual mais suave e divertido.',
        '4': 'Selecione Cor do tema e escolha a cor dos botões e destaques. As cores disponíveis dependem do estilo: Doce oferece só tons de rosa.',
        '5': 'A criança pode fazer as mesmas escolhas no próprio celular, em Ajustes, na seção Preferências, sem o PIN dos pais.',
        '6': 'No painel web, ative Modo escuro na seção da conta do menu lateral. A mudança vale só para esse navegador.',
      },
    },
    webSignIn: {
      title: 'Usar o KidGate no computador',
      summary: 'Entre no painel web e gerencie sua família pelo navegador.',
      tip: 'Só autorize um navegador em que você mesmo esteja entrando: ele recebe o mesmo controle que o seu celular. O painel web não pode parear um dispositivo de criança nem comprar um plano. Para desconectar um navegador, use Sair no painel. Para impedir que um navegador faça alterações, abra Família, depois Responsáveis e remova-o em “Painel”; ele ainda poderá mostrar sua família até ser desconectado.',
      steps: {
        '1': 'No computador, abra dashboard.kidgate.app. Um código QR aparece imediatamente.',
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
        '5': 'Depois que o KidGate responder, você pode escrever abaixo do relato, uma mensagem por resposta, até ele ficar “Resolvido”. Para outro problema, envie um novo relato.',
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
        '3': 'Confirme que é você (com sua senha ou entrando novamente com Google ou Apple), digite OK e selecione “Agendar exclusão”. Isso apenas agenda a exclusão: nada é removido ainda.',
        '4': 'A conta é excluída após 14 dias. Até lá, abra o KidGate e selecione Cancelar exclusão para manter tudo.',
        '5': 'Quando um responsável que não é o dono exclui a conta, só a conta dele é removida; a família continua. Para sair de uma família sem excluir sua conta, abra o cartão da família em Família e selecione Sair da família.',
      },
    },
  },
  onChildDevice: 'No dispositivo da criança',
  onParentDevice: 'No seu dispositivo',
  onParentPhone: 'No app do seu celular',
  handoffHint:
    'O KidGate pode orientar estes passos no próprio dispositivo da criança: abra-o lá, vá em “Status” e selecione “Continuar configuração” no cartão “Termine a configuração com um responsável”. Cada passo tem um botão que abre a tela certa.',
} as const;
