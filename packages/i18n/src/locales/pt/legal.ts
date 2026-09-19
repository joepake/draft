export const legal = {
  privacyPolicy: {
    title: 'Política de Privacidade',
    effectiveDate: 'Em vigor a partir de 6 de setembro de 2026',
    intro:
      'KidGate é o nome comercial e de produto utilizado pelo desenvolvedor independente que opera o aplicativo. Esta política explica como o KidGate trata os dados quando os pais utilizam o serviço para gerenciar o dispositivo de um filho. Ela abrange os aplicativos KidGate para iPhone, iPad e Android, o agente KidGate para macOS e Windows, a extensão de navegador do KidGate, o aplicativo para Android TV, o painel dos pais e o site kidgate.app.',
    sections: [
      {
        title: '1. Âmbito e autoridade parental',
        body: 'A conta de pai/mãe configura as permissões e gerencia os dispositivos dos filhos. As crianças não criam suas próprias contas KidGate; um dispositivo é gerenciado apenas por meio de uma conta de pai/mãe. O pai ou a mãe deve ter guarda legal ou autoridade válida antes de monitorar ou gerenciar um dispositivo. O KidGate não deve ser utilizado para monitoramento oculto de adultos ou de qualquer pessoa fora dos cuidados legais dos pais.',
      },
      {
        title: '2. Dados que processamos',
        body: 'O que o KidGate processa depende dos recursos que os pais ativam e das permissões concedidas pelo sistema operacional. Os dados podem incluir: identificadores da conta e o login do Google, da Apple ou por e-mail usado para criar a conta de pai/mãe; os nomes que um responsável dá a cada criança e os dispositivos atribuídos a elas; nome, modelo e tipo do dispositivo, versão do sistema operacional e do aplicativo, nível de bateria e status de emparelhamento; as próprias configurações — Limite diário, Horários bloqueados, Apps bloqueados, limites por app, categorias do Filtro da web e o PIN dos pais, guardado apenas como hash unidirecional; os totais de Tempo de tela, o detalhamento por app e um registro por minuto de quando o dispositivo esteve em uso; os apps instalados no dispositivo e as extensões adicionadas ao navegador; os domínios que o dispositivo da criança solicitou e quais deles o Filtro da web recusou, contados por dia e por hora; títulos e nomes de canais de vídeos assistidos, onde a plataforma os torna visíveis; localização, histórico de localização, os lugares que um responsável salvou e alertas quando um dispositivo chega a um deles ou sai dele; alertas de SOS, Check-ins de segurança e a foto que a criança envia com qualquer um deles; o nome e o endereço de e-mail de qualquer contato de confiança que um responsável adiciona, para que o KidGate possa enviar a ele cada SOS por e-mail; alertas gerados quando uma proteção é desligada, quando um app é instalado, quando o uso parece incomum — um app novo, ou uso durante os Horários bloqueados — ou quando uma mensagem ou uma busca corresponde a uma lista de palavras-chave ativada pelos pais; pedidos de tempo extra, pedidos de sites, tarefas com recompensa e os totais semanais de estrelas do quadro de estrelas; o relatório semanal que resume tudo isso; mensagens enviadas ao suporte e qualquer captura de tela anexada a elas; relatórios de falhas e diagnósticos técnicos; e os dados de transações de assinatura fornecidos por uma loja de aplicativos. O KidGate não pede o nome real de uma criança quando um recurso não precisa dele.',
      },
      {
        title: '3. O que permanece no dispositivo da criança',
        body: 'O monitoramento de mensagens e buscas é executado no próprio dispositivo, apenas no Android e somente quando os pais o ativam. O dispositivo compara o texto com listas de palavras-chave guardadas localmente; o que é enviado é um alerta indicando a palavra ou expressão curta encontrada, sua categoria, o app em que ela apareceu e o horário. A mensagem em si, o restante da conversa e com quem ela foi trocada não são transmitidos nem armazenados pelo KidGate. Existe uma única exceção, e ela exige um consentimento separado: quando os pais também concordaram com a confirmação por IA, uma mensagem recebida cuja correspondência ficou ambígua é enviada ao modelo Gemini do Google para ser avaliada, com endereços de e-mail, números de telefone e endereços da web mascarados antes, para que os pais não sejam alertados por uma palavra comum. Apenas o veredicto é guardado; a mensagem é descartada assim que avaliada. O texto que a criança escreve nunca é enviado para a confirmação por IA, qualquer que seja o consentimento dado pela família. Fora desse caminho, o KidGate registra o domínio que um dispositivo solicitou e se ele foi recusado — não o endereço de uma página nem o seu conteúdo — e os arquivos, as fotos e a navegação que nenhum recurso ativado lê permanecem no dispositivo.',
      },
      {
        title: '4. Como os dados são utilizados',
        body: 'Os dados dão suporte à autenticação, ao pareamento de dispositivos, aos controles parentais, à sincronização de configurações, a alertas, relatórios, assinaturas, prevenção de fraudes, segurança da conta, solução de problemas e confiabilidade. O KidGate não vende dados pessoais e não utiliza dados de crianças para publicidade comportamental. Não há anúncios em nenhum aplicativo KidGate.',
      },
      {
        title: '5. Processamento automatizado e IA',
        body: 'Três recursos utilizam os modelos Gemini do Google, acessados por meio do Google Cloud: o resumo escrito do relatório semanal, gerado a partir dos próprios números de uso da família; a classificação de apps e domínios de sites nas categorias usadas pelo Filtro da web e pelas listas de apps, guardada em uma tabela compartilhada que registra um domínio e sua categoria, não qual família o visitou; e a etapa de confirmação descrita na seção 3, que só é executada quando os pais consentiram com ela. Esses modelos produzem julgamentos que podem estar errados. Uma categoria, uma frase de resumo ou um alerta de mensagem é um convite a verificar, não uma constatação de fato, e o KidGate não toma com base nisso nenhuma decisão com efeito jurídico ou similarmente significativo sobre uma criança. O resultado dos modelos não é utilizado para treinar os modelos do Google.',
      },
      {
        title: '6. Bases legais e consentimento',
        body: 'O KidGate processa dados para prestar os serviços solicitados, cumprir obrigações legais, proteger interesses legítimos de segurança e proteção, ou com base no consentimento, quando exigido. Os pais são responsáveis por fornecer os avisos exigidos e obter o consentimento válido em nome de uma criança ou usuário do dispositivo. O monitoramento de mensagens e a confirmação por IA são duas ativações separadas e explícitas e podem ser retiradas a qualquer momento: o monitoramento de mensagens é ligado por dispositivo, e a confirmação por IA é aceita uma vez para a família e registrada com quem aceitou e quando.',
      },
      {
        title: '7. Prestadores de serviços',
        body: 'O KidGate é construído sobre o Google Cloud e o Firebase, que fornecem a autenticação, o banco de dados, o armazenamento de arquivos, as funções de servidor, as notificações push pelo Firebase Cloud Messaging, os relatórios de falhas pelo Firebase Crashlytics e os modelos Gemini citados na seção 5. A Apple e o Google também processam compras, renovações e reembolsos de assinatura por suas lojas de aplicativos, e o Google Analytics processa a medição descrita na seção 8. Outros quatro provedores veem cada um uma única coisa: a HERE Technologies converte uma posição informada em um endereço e desenha o mapa por trás das telas de localização, portanto recebe as coordenadas que um dispositivo informou; o Resend entrega os e-mails que o KidGate envia — um alerta de SOS a um contato de confiança e o relatório semanal; a Cloudflare serve os instaladores para computador; e a rede de conteúdo unpkg serve a biblioteca de mapas aos aplicativos dos pais. Os dados são divulgados a esses provedores apenas conforme necessário para operar o serviço; a autoridades quando legalmente exigido; ou para tratar de questões de segurança, fraude ou abuso. Os provedores têm seus próprios deveres e políticas, e nenhum deles está autorizado pelo KidGate a utilizar dados de crianças para fins de marketing independente.',
      },
      {
        title: '8. Medição do site e cookies',
        body: 'O site kidgate.app mede três coisas com o Google Analytics: as visitas às páginas e os cliques em cada um dos dois links de download para computador. O armazenamento para análise é recusado por padrão, então nenhum cookie de análise é gravado e nada é guardado no navegador de quem lê; cada visita é contada a partir de uma requisição sem cookies, com o endereço IP truncado. O Google Signals e os identificadores de publicidade estão desligados, e nada que identifique quem lê ou uma família é enviado. Os aplicativos KidGate enviam à mesma propriedade um conjunto reduzido de eventos para mostrar quais recursos são usados; esses eventos carregam um identificador da instalação do aplicativo — nunca o identificador de publicidade do dispositivo, que os aplicativos não coletam — e nunca o nome de uma criança, suas mensagens, sua localização ou sua navegação. Os aplicativos e o site não utilizam nenhuma rede de publicidade ou de rastreamento.',
      },
      {
        title: '9. Onde os dados são armazenados e como são protegidos',
        body: 'Os dados da família são armazenados na região de Singapura do Google Cloud e podem ser processados em outros lugares pelos provedores citados na seção 7, o que significa que podem sair do país em que a família vive. O KidGate utiliza salvaguardas técnicas e organizacionais razoáveis, incluindo controles de acesso, práticas de privilégio mínimo, regras no servidor que limitam cada leitura a uma única família e transporte seguro. O PIN dos pais é guardado apenas como hash unidirecional e não pode ser lido de volta. Nenhum sistema é completamente seguro; o KidGate não pode garantir que os dados nunca serão perdidos, acessados sem autorização ou interrompidos.',
      },
      {
        title: '10. Acesso da equipe do KidGate para suporte',
        body: 'Quando é necessário para responder a um pedido de suporte ou diagnosticar uma falha, a equipe autorizada do KidGate pode abrir uma conta de família e ver o que os pais veem: sua configuração e seus dispositivos, e a atividade dentro dela — incluindo histórico de localização, histórico da web, alertas de conteúdo e fotos anexadas a um SOS ou a um Check-in. Ela também pode alterar configurações e enviar comandos aos dispositivos. Esse acesso é limitado à equipe autorizada, exige autenticação de dois fatores e é utilizado exclusivamente para suporte. Abrir uma conta de família grava uma linha no feed de atividades da própria família, visível aos seus pais, com o horário e o chamado de suporte a que se refere; cada leitura dos registros de uma família pelas ferramentas do operador é registrada com o horário e um motivo declarado. As ações individuais realizadas dentro de uma sessão de suporte hoje não são registradas separadamente.',
      },
      {
        title: '11. Por quanto tempo os dados são mantidos',
        body: 'Os registros expiram conforme um cronograma e são excluídos automaticamente: Tempo de tela e uso por app, histórico da web, histórico de vídeos, histórico de localização e o feed de atividades após 30 dias; alertas de SOS, Check-ins de segurança e pedidos de tempo extra após 90 dias; relatórios semanais após 365 dias. Os códigos de emparelhamento expiram em poucos minutos e um login pelo navegador dura 7 dias quando concedido pelo app, ou 8 horas quando desbloqueado com o PIN dos pais. Alguns registros hoje não têm prazo de expiração e são mantidos até a exclusão da conta de família: a conta e suas configurações, os lugares salvos, os cadastros de crianças e dispositivos, as tarefas com recompensa, os pedidos de sites, os quadros de estrelas e os quadros de tempo de tela, e a lista de apps. As solicitações de suporte, as respostas e qualquer captura de tela anexada são excluídas 90 dias após a solicitação ser resolvida. Um registro de que a exclusão de uma conta foi solicitada e concluída — um hash do endereço de e-mail e as datas, nada mais — é mantido por 12 meses após a conclusão, para que uma exclusão contestada possa ser respondida. Registros limitados também podem permanecer quando exigido por lei, para prevenção de fraudes ou transações da loja de aplicativos.',
      },
      {
        title: '12. Exclusão da conta',
        body: 'Os pais podem solicitar a exclusão em Ajustes, em kidgate.app ou por e-mail para support@kidgate.app, a partir do endereço cadastrado na conta. O pedido fica pendente por 14 dias e pode ser cancelado nesse período; depois disso, a conta de família, cada criança e cada dispositivo sob ela e os arquivos armazenados que lhe pertencem são excluídos, e o próprio login é removido. A exclusão é permanente e não há exportação depois dela.',
      },
      {
        title: '13. Direitos e escolhas',
        body: 'Dependendo da legislação aplicável, os usuários podem solicitar acesso, correção, exclusão, restrição, oposição ou retirada do consentimento. Essas solicitações, inclusive de uma cópia dos dados mantidos sobre uma família, devem ser enviadas a support@kidgate.app; hoje não há exportação por conta própria. O monitoramento de mensagens e a confirmação por IA podem ser desligados a qualquer momento sem afetar o restante do serviço. As permissões de localização, notificação, câmera e dispositivo podem ser desativadas no sistema operacional, mas os recursos que dependem delas vão parar de funcionar ou ficar incompletos, e o KidGate informa isso na tela dos pais em vez de exibir um controle que já não funciona.',
      },
      {
        title: '14. Dados de crianças',
        body: 'O KidGate processa dados de crianças apenas conforme a configuração e as instruções da conta de pai/mãe. Se dados de uma criança tiverem sido fornecidos sem a devida autoridade ou consentimento, o KidGate poderá restringir a conta e excluir os dados após verificação.',
      },
      {
        title: '15. Incidentes de dados',
        body: 'O KidGate avaliará incidentes de segurança confirmados, adotará medidas de mitigação razoáveis e notificará os usuários ou as autoridades quando legalmente exigido. Os pais devem proteger contas, PINs e dispositivos, e relatar prontamente qualquer suspeita de acesso não autorizado.',
      },
      {
        title: '16. Alterações e contato',
        body: 'Esta política pode mudar conforme os recursos ou as leis mudam. Atualizações relevantes serão comunicadas no aplicativo ou por meio de um canal de distribuição apropriado. Solicitações e dúvidas relacionadas à privacidade devem ser enviadas a support@kidgate.app, o endereço também publicado nas páginas do KidGate nas lojas de aplicativos.',
      },
    ],
  },
  termsOfService: {
    title: 'Termos de Serviço',
    effectiveDate: 'Em vigor a partir de 6 de setembro de 2026',
    intro:
      'Ao entrar ou utilizar o KidGate, você confirma que leu e concorda com estes termos. KidGate é o nome comercial e de produto utilizado pelo desenvolvedor independente que opera o serviço.',
    sections: [
      {
        title: '1. Elegibilidade',
        body: 'Você deve ter idade suficiente para celebrar um contrato de acordo com a legislação aplicável e possuir autoridade legal sobre cada criança, conta e dispositivo que gerenciar. Não utilize o serviço se não concordar com estes termos.',
      },
      {
        title: '2. O que o KidGate é e o que ele não é',
        body: 'O KidGate fornece ferramentas que ajudam os pais a gerenciar dispositivos, definir limites, visualizar o status e receber alertas. Ele não substitui a supervisão direta, o aconselhamento médico, os serviços de emergência, a aplicação da lei ou serviços profissionais de proteção infantil. O SOS avisa você; ele não aciona os serviços de emergência e não funciona quando o dispositivo está sem rede.',
      },
      {
        title: '3. Software instalado em um dispositivo gerenciado',
        body: 'Aplicar uma regra exige software no dispositivo a que ela se refere, e cada plataforma o permite de um jeito: o framework Tempo de Uso da Apple no iPhone e no iPad, um serviço de acessibilidade e uma permissão de administrador do dispositivo no Android, um serviço de acessibilidade no Android TV, uma extensão de sistema e um agente em segundo plano no macOS, um serviço em segundo plano no Windows e uma extensão de navegador no Chrome. É você quem o instala, em um dispositivo que tem o direito de gerenciar, e pode removê-lo a qualquer momento naquele dispositivo. Removê-lo, ou retirar uma permissão de que ele depende, interrompe a aplicação das regras naquele dispositivo — o KidGate vai avisar você que isso aconteceu, mas não pode impedir.',
      },
      {
        title: '4. Responsabilidades dos pais',
        body: 'Você deve dar o aviso adequado às crianças, obter o consentimento exigido, configurar as permissões corretamente, testar os recursos e cumprir as leis de privacidade, monitoramento, trabalho, educação e proteção infantil. O monitoramento de mensagens e a confirmação por IA são duas ativações separadas e a decisão é sua, com o aviso que essa decisão exige na sua jurisdição. Não utilize o KidGate para monitoramento oculto, assédio, controle ilegal ou violação dos direitos de terceiros.',
      },
      {
        title: '5. Segurança da conta e o PIN dos pais',
        body: 'Você é responsável pela atividade da conta e por proteger dispositivos, PINs e métodos de login. O PIN dos pais protege as configurações sensíveis em um dispositivo da criança e não pode ser recuperado a partir do dispositivo — ele é guardado como hash unidirecional. Relate prontamente qualquer suspeita de acesso não autorizado. O KidGate pode restringir temporariamente contas ou dispositivos para proteger os usuários ou investigar abusos.',
      },
      {
        title: '6. Permissões de plataforma e limitações técnicas',
        body: 'Os recursos dependem de permissões do sistema operacional, acesso à rede, estado da bateria, configurações do fabricante, serviços de localização e plataformas de terceiros, e o que cada plataforma permite é diferente. Algumas formas de aplicação são, por projeto, o melhor esforço possível — fechar um app bloqueado em um computador em vez de impedir que ele abra — e o KidGate indica quais na tela que as oferece. Os alertas podem ser atrasados, incompletos ou imprecisos. Você deve verificar os dispositivos diretamente e não deve depender exclusivamente do KidGate para segurança ou emergências.',
      },
      {
        title: '7. Planos, teste gratuito e nível gratuito',
        body: 'Um teste gratuito com acesso completo começa quando os seus primeiros dispositivos de responsável e de criança são emparelhados e dura o período indicado no aplicativo. Quando ele termina, as regras que você configurou continuam funcionando sem pagamento em um dispositivo da criança — Limite diário, Horários bloqueados, Apps bloqueados, limites por app, o Filtro da web, a pesquisa segura, o Bloqueio do dispositivo, os pedidos de tempo extra, as tarefas com recompensa e o monitoramento de mensagens — e você ainda pode pedir a esse dispositivo a posição atual dele um número limitado de vezes por dia. O SOS nunca fica atrás de um pagamento. A atividade ao vivo, o histórico, os relatórios semanais, o rastro de localização, os endereços e os alertas de locais passam a fazer parte do Premium. Quando uma família tem mais dispositivos de crianças do que o plano cobre, os dispositivos excedentes ficam pausados: eles continuam aplicando as regras já definidas, essas regras podem ser afrouxadas, mas não apertadas, e eles param de enviar atividade. Você escolhe qual dispositivo segue monitorado, e essa escolha pode ser alterada uma vez a cada sete dias. Remover um dispositivo da criança não reinicia o teste. Uma família pode emparelhar um número limitado de dispositivos de crianças ao longo da vida da conta; o número depende do plano, o aplicativo o informa quando ele é atingido, e um dispositivo que foi removido continua contando.',
      },
      {
        title: '8. Assinaturas e pagamentos',
        body: 'Compras, renovações, cancelamentos e reembolsos são tratados de acordo com os termos da Apple App Store ou do Google Play, e uma assinatura só pode ser comprada ou restaurada pelo aplicativo KidGate para iPhone, iPad ou Android — uma família cujos dispositivos são todos computadores, televisores ou Chromebooks precisa de um deles para pagar. Uma assinatura cobre a família inteira e somente o dono da família pode comprá-la ou restaurá-la; uma compra tentada a partir da conta de outro responsável é recusada. Os planos mensal e anual renovam automaticamente, a menos que você cancele pela loja pelo menos 24 horas antes do fim do período. A compra única não renova, cobre o número de dispositivos de crianças indicado no aplicativo e vale enquanto o KidGate estiver disponível; a seção 12 diz o que acontece se isso terminar. Os preços e recursos dos planos podem mudar após o aviso exigido por lei e pelas regras das lojas.',
      },
      {
        title: '9. Conteúdo automatizado e gerado por IA',
        body: 'Os resumos dos relatórios semanais, as categorias atribuídas a apps e sites e a etapa de confirmação no monitoramento de mensagens são produzidos por modelos automáticos e podem errar nas duas direções: um site pode ser classificado na categoria errada, um resumo pode descrever mal uma semana, e um alerta pode disparar por uma mensagem inofensiva ou deixar de disparar por uma nociva. Trate tudo isso como um convite a verificar, e não como uma constatação, e não o use como base única de uma decisão sobre uma criança.',
      },
      {
        title: '10. Licença e propriedade',
        body: 'O KidGate concede uma licença limitada, pessoal, não exclusiva, intransferível e revogável para uso do aplicativo, de acordo com estes termos. Você não pode revender, fazer engenharia reversa, burlar proteções, automatizar extração de dados, ou utilizar a marca, o código-fonte ou o conteúdo além do que a lei permite.',
      },
      {
        title: '11. Conduta proibida',
        body: 'Não comprometa sistemas, distribua malware, se passe por outra pessoa, acesse dados não autorizados, sobrecarregue os serviços, contorne limites, cause danos ou infrinja a lei. O KidGate pode restringir ou encerrar o acesso quando acreditar razoavelmente que ocorreu uma violação.',
      },
      {
        title: '12. Disponibilidade e alterações',
        body: 'O serviço pode mudar, ser pausado ou encerrado devido a manutenção, segurança, mudanças de plataforma, exigências legais ou razões operacionais. O KidGate é operado por um desenvolvedor independente e pode ser descontinuado; se isso ocorrer, as assinaturas ativas e a compra única serão tratadas de acordo com as regras aplicáveis da loja de aplicativos — a compra única adquire o serviço enquanto ele estiver disponível, não uma promessa de que ele será oferecido para sempre. O KidGate busca uma disponibilidade razoável, mas não garante operação ininterrupta, isenta de erros ou compatibilidade com todos os dispositivos.',
      },
      {
        title: '13. Isenções de responsabilidade',
        body: 'Na medida permitida por lei, o serviço é fornecido “como está” e “conforme disponível”, sem garantias implícitas de comercialização, adequação a uma finalidade específica, precisão ou não violação. Nada aqui exclui direitos obrigatórios do consumidor ou responsabilidades que a lei não permite excluir.',
      },
      {
        title: '14. Limitação de responsabilidade',
        body: 'Na medida permitida por lei, o KidGate não será responsável por danos indiretos, incidentais, especiais, punitivos, por perda de dados, lucros ou oportunidades decorrentes do uso ou da incapacidade de usar o serviço. A responsabilidade total por reclamações relacionadas ao serviço não excederá o valor pago ao KidGate nos 12 meses anteriores ao evento, salvo disposição legal em contrário.',
      },
      {
        title: '15. Indenização',
        body: 'Na medida permitida por lei, você concorda em indenizar o KidGate contra reclamações de terceiros decorrentes de uso ilegal, monitoramento não autorizado, violação dos direitos de outra pessoa ou descumprimento destes termos. Isso não abrange danos legalmente atribuíveis diretamente ao KidGate.',
      },
      {
        title: '16. Rescisão e disputas',
        body: 'Você pode deixar de utilizar o serviço e solicitar a exclusão da conta. A exclusão fica pendente por 14 dias e pode ser cancelada nesse intervalo; depois disso, a conta de família e seus dados são removidos permanentemente. O KidGate pode suspender ou encerrar o serviço em caso de violações, riscos à segurança ou exigências legais. As partes devem primeiro tentar resolver disputas de boa-fé, começando por um e-mail a support@kidgate.app. Estes termos são regidos pelas leis do Vietnã, e as disputas são levadas aos tribunais competentes do Vietnã, exceto quando as regras obrigatórias de proteção ao consumidor do país em que você vive lhe garantem o direito a outra lei ou a outro tribunal.',
      },
      {
        title: '17. Disposições gerais',
        body: 'Se qualquer disposição for considerada inexequível, as demais disposições permanecerão em vigor. A falta de aplicação de uma disposição não constitui renúncia a ela. Estes termos, juntamente com a Política de Privacidade e quaisquer termos da loja, constituem o acordo integral sobre o serviço. O KidGate pode ceder estes termos como parte de uma transferência do aplicativo; seus direitos garantidos por lei obrigatória não serão afetados.',
      },
      {
        title: '18. Software de terceiros',
        body: 'O KidGate inclui duas fontes tipográficas, ambas usadas sob a SIL Open Font License 1.1: Plus Jakarta Sans, da Tokotype, e Baloo 2, da Ek Type. As métricas verticais da Baloo 2 foram reajustadas para as alturas de linha deste app; os traços e o nome da família permanecem inalterados, e a licença permite essa modificação. Nenhuma das duas é vendida separadamente. Fontes e licença:',
        links: [
          {
            label: 'Plus Jakarta Sans no GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 no GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Alterações e contato',
        body: 'Estes termos podem ser atualizados. Alterações relevantes serão comunicadas de forma apropriada; o uso continuado após a data de vigência implica aceitação dos termos atualizados, quando permitido por lei. Dúvidas devem ser enviadas a support@kidgate.app.',
      },
    ],
  },
} as const;
