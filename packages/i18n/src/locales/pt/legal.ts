export const legal = {
  privacyPolicy: {
    title: 'Política de Privacidade',
    effectiveDate: 'Em vigor a partir de 20 de outubro de 2026',
    intro:
      'O aplicativo é operado sob o nome comercial e de produto KidGate. Esta política explica como o KidGate trata os dados quando os pais utilizam o serviço para gerenciar o dispositivo de um filho.\n\nEla abrange os aplicativos KidGate para iPhone, iPad e Android, o aplicativo KidGate para macOS e Windows, a extensão de navegador do KidGate, o aplicativo para Android TV, o painel dos pais e o site kidgate.app.\n\n### Resumo\n\n• O KidGate processa dados apenas para os recursos que os pais ativam e dentro das permissões concedidas pelo sistema operacional.\n• Mensagens e buscas são comparadas no próprio dispositivo. Só a palavra-chave encontrada é enviada, a menos que os pais consintam separadamente com a confirmação por IA (seção 3).\n• O Filtro da web funciona no dispositivo. O KidGate registra o domínio, não o endereço completo nem o conteúdo da página.\n• Não há anúncios, e o KidGate não vende dados pessoais.\n• A maior parte do histórico de atividades é excluída automaticamente após 30 dias, e os alertas de SOS após 90 dias (seção 11).\n• A equipe autorizada do KidGate só abre uma conta de família quando é necessário para o suporte, e cada abertura aparece no feed de atividades da família (seção 10).\n• Os pais podem solicitar a exclusão da conta a qualquer momento. Após 14 dias de espera, a conta e os dados da família são excluídos, exceto alguns registros mínimos indicados nas seções 11 e 12.',
    sections: [
      {
        title: '1. Âmbito e papel dos pais',
        body: 'A conta de pai/mãe faz a configuração, concede as permissões e gerencia os dispositivos dos filhos. As crianças não criam suas próprias contas KidGate; um dispositivo é gerenciado apenas por meio de uma conta de pai/mãe.\n\nO pai ou a mãe deve ter guarda legal ou autoridade válida antes de monitorar ou gerenciar um dispositivo. O KidGate não deve ser utilizado para monitoramento oculto de adultos ou de qualquer pessoa fora dos cuidados legais dos pais.',
      },
      {
        title: '2. Dados que processamos',
        body: 'O que o KidGate processa depende dos recursos que os pais ativam e das permissões que o sistema operacional concede ao aplicativo. Nem todos os tipos de dados abaixo são coletados em todos os dispositivos.\n\n### Conta e dispositivos\n\n• Identificadores da conta e o login do Google, da Apple ou por e-mail usado para criar a conta de pai/mãe.\n• Os nomes que um responsável dá a cada criança e os dispositivos atribuídos a ela.\n• Nome, modelo e tipo do dispositivo, versão do sistema operacional e do aplicativo, nível de bateria e status de emparelhamento.\n• As configurações: Limite diário, Horários bloqueados, Apps bloqueados, limites por app, categorias do Filtro da web e o PIN dos pais. O PIN é guardado apenas como hash unidirecional.\n\n### Tempo de tela e apps\n\n• Os totais de Tempo de tela, o detalhamento por app e um registro por minuto de quando o dispositivo esteve em uso.\n• Os apps instalados no dispositivo e as extensões adicionadas ao navegador.\n• Alertas quando um app novo é instalado, quando uma proteção é desligada ou quando o uso parece incomum, por exemplo um app novo ou uso durante os Horários bloqueados.\n\n### Web e vídeo\n\n• Os domínios que o dispositivo da criança solicitou e quais deles foram bloqueados, contados por dia e por hora.\n• Títulos e nomes de canais dos vídeos reproduzidos, nas plataformas que permitem ler essas informações, quando o histórico de vídeos está ativado.\n• Pedidos de sites e as informações necessárias para tratá-los.\n\n### Localização e segurança\n\n• Localização do dispositivo, histórico de localização, os lugares que um responsável salvou e alertas quando o dispositivo chega a um deles ou sai dele.\n• Alertas de SOS, Check-ins de segurança e a foto que a criança envia com eles, além de até 15 segundos de som gravados quando a criança envia um SOS de um celular ou tablet com o microfone permitido.\n• O nome e o endereço de e-mail dos contatos de confiança que um responsável adiciona, para que o KidGate possa enviar a eles cada SOS por e-mail.\n\n### Mensagens e buscas\n\n• Alertas quando uma mensagem ou uma busca corresponde a uma lista de palavras-chave ativada pelos pais. O funcionamento está descrito na seção 3.\n\n### Relatórios, suporte e pagamento\n\n• Pedidos de tempo extra, tarefas com recompensa e os totais semanais de estrelas do quadro de estrelas.\n• O relatório semanal que resume esses dados.\n• Mensagens enviadas ao suporte e capturas de tela anexadas a elas.\n• Relatórios de falhas e diagnósticos técnicos.\n• Dados de transações de assinatura fornecidos por uma loja de aplicativos.\n\nO KidGate não pede o nome real de uma criança quando um recurso não precisa dele.',
      },
      {
        title: '3. O que permanece no dispositivo da criança',
        body: '### Monitoramento de mensagens e buscas\n\nO monitoramento de mensagens é executado no próprio dispositivo Android. O monitoramento de buscas é executado no dispositivo Android e na extensão de navegador do KidGate. Ambos só funcionam quando os pais os ativam.\n\nO dispositivo compara o texto com listas de palavras-chave guardadas localmente. Quando há uma correspondência, o que é enviado é um alerta indicando a palavra ou expressão curta encontrada, sua categoria, o app ou o mecanismo de busca em que ela apareceu e o horário. A mensagem ou a busca em si, o restante da conversa e com quem ela foi trocada não são transmitidos nem armazenados pelo KidGate.\n\n### Confirmação por IA\n\nEsta é a única exceção, e ela exige um consentimento separado dos pais. Quando ativada, uma mensagem recebida cuja correspondência ficou ambígua é enviada ao modelo Gemini do Google para ser avaliada, para que os pais não sejam alertados por uma palavra comum. Antes do envio, endereços de e-mail, números de telefone e endereços da web contidos na mensagem são mascarados; o restante do texto é enviado mesmo assim e ainda pode conter informações privadas.\n\nO KidGate guarda apenas o veredicto e não armazena a mensagem depois que a avaliação termina. A forma como o Google Cloud trata os dados recebidos está descrita na seção 5. O texto que a criança escreve nunca é enviado para a confirmação por IA, qualquer que seja o consentimento dado pela família.\n\n### Web e vídeo\n\nO KidGate registra o domínio que um dispositivo solicitou e se ele foi bloqueado. O KidGate não registra o endereço completo de uma página nem o seu conteúdo, exceto qual vídeo foi reproduzido quando o histórico de vídeos está ativado. Os arquivos, as fotos e a navegação que nenhum recurso ativado precisa ler permanecem no dispositivo.\n\n### Gravação de som ao enviar um SOS\n\nO microfone é usado para uma única coisa: quando a criança envia um SOS de um celular ou tablet com o microfone permitido, até 15 segundos de som são gravados e enviados com o alerta. Fora desse momento, o KidGate não grava nada, ninguém ouve ao vivo e os pais não podem iniciar uma gravação à distância.\n\n### Filtro da web e DNS\n\nNo iPhone, no iPad, em celulares Android e no Android TV, o Filtro da web é uma VPN que funciona no próprio dispositivo. Essa VPN não passa o tráfego pelos servidores do KidGate: ela recebe apenas as consultas de nomes de sites do dispositivo, recusa as que são bloqueadas e passa o resto a um servidor DNS para que as responda.\n\n• No iPhone e no iPad: o servidor DNS da própria rede em uso, o Google Public DNS ou o 1.1.1.1 da Cloudflare.\n• No Android: o servidor DNS da própria rede em uso ou, quando ele não responde, o Google Public DNS.\n\nEm um celular ou tablet, antes de a VPN ser ativada pela primeira vez, o KidGate explica o que ela vê e pede permissão. O que a VPN registra é usado apenas para filtrar e para mostrar à família seu histórico da web; nunca é vendido, nunca é usado para nenhuma outra finalidade e só chega aos provedores da seção 7 na medida necessária para operar o serviço.',
      },
      {
        title: '4. Como os dados são utilizados',
        body: 'O KidGate utiliza os dados para:\n\n• Autenticar contas e emparelhar dispositivos.\n• Fornecer os controles parentais e sincronizar as configurações entre dispositivos.\n• Enviar alertas, mostrar o histórico de atividades e gerar relatórios.\n• Processar assinaturas e transações.\n• Proteger as contas e prevenir fraudes ou abusos.\n• Solucionar problemas, dar suporte aos usuários e melhorar a confiabilidade.\n\nO KidGate não vende dados pessoais e não utiliza dados de crianças para publicidade comportamental. Não há anúncios em nenhum aplicativo KidGate.',
      },
      {
        title: '5. Processamento automatizado e IA',
        body: 'O KidGate utiliza os modelos Gemini do Google, acessados por meio do Google Cloud, para três coisas:\n\n• Resumo do relatório semanal: um resumo escrito, gerado a partir dos próprios números de uso da família.\n• Classificação de apps e domínios: coloca-os nas categorias usadas pelo Filtro da web e pelas listas de apps. O resultado é guardado em uma tabela compartilhada que registra apenas um domínio e sua categoria, não qual família o visitou.\n• Confirmação por IA: avalia algumas mensagens recebidas cuja correspondência ficou ambígua, somente quando os pais consentiram, da forma descrita na seção 3.\n\nEsses modelos podem errar. Uma categoria, uma frase de resumo ou um alerta de mensagem é um convite para os pais verificarem, não uma constatação de fato, e o KidGate não toma com base neles nenhuma decisão com efeito jurídico ou similarmente significativo sobre uma criança.\n\nDe acordo com os termos do Google Cloud, o Google não utiliza os dados que o KidGate envia por esse serviço para treinar seus próprios modelos. O Google ainda pode guardar dados temporariamente conforme os mecanismos de operação e segurança desse serviço, portanto o fato de o KidGate não armazenar uma mensagem não significa que todas as cópias do lado do provedor desapareçam imediatamente.',
      },
      {
        title: '6. Bases legais e consentimento',
        body: 'Dependendo da legislação aplicável, o KidGate processa dados para prestar os serviços solicitados, cumprir obrigações legais, proteger interesses legítimos de segurança e proteção, ou com base no consentimento, quando exigido por lei. Os pais são responsáveis por fornecer os avisos exigidos e obter o consentimento necessário em nome de uma criança ou usuário do dispositivo.\n\nO monitoramento de mensagens e a confirmação por IA são duas opções de consentimento separadas, que podem ser retiradas a qualquer momento:\n\n• O monitoramento de mensagens é ativado por dispositivo.\n• A confirmação por IA é aceita uma vez para toda a família, e o KidGate registra quem aceitou e quando.',
      },
      {
        title: '7. Prestadores de serviços',
        body: 'O KidGate utiliza os seguintes provedores para operar o serviço. Cada um recebe apenas o que a sua tarefa exige.\n\n• Google Cloud e Firebase: autenticação, banco de dados, armazenamento de arquivos, funções de servidor, notificações push pelo Firebase Cloud Messaging, relatórios de falhas pelo Firebase Crashlytics e os modelos Gemini citados na seção 5.\n• Google Public DNS: no Android, no iPhone e no iPad, pode responder às consultas de nomes de sites que o Filtro da web deixa passar, portanto pode receber esses nomes de domínio.\n• Apple e Google: processam compras, renovações e reembolsos de assinatura por suas lojas de aplicativos.\n• Google Analytics: a medição descrita na seção 8.\n• HERE Technologies: converte a posição informada por um dispositivo em um endereço e desenha o mapa nas telas de localização, portanto recebe as coordenadas que o dispositivo informou.\n• Resend: entrega os e-mails que o KidGate envia, incluindo alertas de SOS a contatos de confiança e o relatório semanal.\n• Cloudflare: serve os instaladores para computador e, no iPhone e no iPad, pode responder às consultas de nomes de sites que o Filtro da web deixa passar, portanto pode receber esses nomes de domínio.\n• unpkg: rede de distribuição de conteúdo que serve a biblioteca de mapas aos aplicativos dos pais.\n\nOs dados são compartilhados com esses provedores apenas conforme necessário para fornecer, manter e proteger o serviço; com autoridades quando legalmente exigido; ou para prevenir riscos de segurança, fraude ou abuso. Os provedores têm seus próprios deveres e políticas em relação aos dados que processam, e nenhum deles está autorizado pelo KidGate a utilizar dados de crianças para fins de marketing próprios.',
      },
      {
        title: '8. Medição e cookies',
        body: '### Site kidgate.app\n\nO site mede com o Google Analytics as visitas às páginas e os cliques em cada link de download para computador. O armazenamento para análise é recusado por padrão, então nenhum cookie de análise é gravado e nada é guardado no navegador de quem lê; cada visita é contada a partir de uma requisição sem cookies, com o endereço IP truncado. O Google Signals e os identificadores de publicidade estão desligados, e o KidGate não envia por esse mecanismo nada que identifique quem lê ou uma família.\n\n### Aplicativos KidGate\n\nOs aplicativos KidGate enviam à mesma propriedade um conjunto reduzido de eventos para mostrar quais recursos são usados. Esses eventos carregam um identificador da instalação do aplicativo. Não é o identificador de publicidade do dispositivo, que os aplicativos não coletam, mas ele ainda distingue uma instalação de outra, portanto esses dados não são totalmente anônimos. Os eventos nunca carregam o nome de uma criança, suas mensagens, sua localização ou sua navegação.\n\nOs aplicativos e o site não utilizam nenhuma rede de publicidade ou de rastreamento.',
      },
      {
        title: '9. Onde os dados são armazenados e como são protegidos',
        body: 'Os dados da família são armazenados na região de Singapura do Google Cloud e podem ser processados em outros lugares pelos provedores citados na seção 7, o que significa que podem sair do país em que a família vive.\n\nO KidGate utiliza salvaguardas técnicas e organizacionais razoáveis, incluindo:\n\n• Controles de acesso e práticas de privilégio mínimo.\n• Regras no servidor que limitam cada leitura a uma única família.\n• Transporte seguro dos dados.\n• O PIN dos pais, guardado apenas como hash unidirecional, que não pode ser lido de volta.\n\nNenhum sistema é completamente seguro; o KidGate não pode garantir que os dados nunca serão perdidos, acessados sem autorização ou interrompidos.',
      },
      {
        title: '10. Acesso da equipe do KidGate para suporte',
        body: '### Quando\n\nSomente quando é necessário para tratar um pedido de suporte ou diagnosticar uma falha, e somente pela equipe autorizada pelo KidGate, com login por autenticação de dois fatores.\n\n### O que a equipe vê e pode fazer\n\nAo abrir uma conta de família, a pessoa da equipe vê exatamente o que os pais veem: a configuração, os dispositivos e a atividade dentro da conta, incluindo histórico de localização, histórico da web, alertas de mensagens e fotos anexadas a um SOS ou a um Check-in. Ela também pode alterar configurações e enviar comandos aos dispositivos, como os pais.\n\n### O que é registrado\n\n• Cada abertura de uma conta de família grava uma linha no feed de atividades da própria família, visível aos pais, com o horário e o chamado de suporte a que se refere.\n• Cada leitura dos registros de uma família pelas ferramentas do operador é registrada com o horário e o motivo declarado.\n• As ações individuais realizadas dentro de uma sessão de suporte, como alterar uma configuração ou enviar um comando, hoje não são registradas separadamente.',
      },
      {
        title: '11. Por quanto tempo os dados são mantidos',
        body: 'Os prazos abaixo são o mecanismo de retenção do próprio KidGate. Os provedores da seção 7 podem processar ou guardar dados conforme seus próprios termos.\n\n### Exclusão automática após um prazo\n\n• 30 dias: Tempo de tela e uso por app, histórico da web, histórico de vídeos, histórico de localização e o feed de atividades.\n• 90 dias: alertas de SOS e Check-ins de segurança, com suas fotos e gravações de som; pedidos de tempo extra.\n• 365 dias: relatórios semanais.\n• 90 dias após a solicitação ser resolvida: solicitações de suporte, respostas e capturas de tela anexadas.\n• 12 meses após a conclusão da exclusão da conta: um registro de que a exclusão foi solicitada e concluída, contendo apenas um hash do endereço de e-mail e as datas, para que uma exclusão contestada possa ser respondida.\n\nOs códigos de emparelhamento expiram em poucos minutos. Um login pelo navegador dura 7 dias quando concedido pelo app, ou 8 horas quando desbloqueado com o PIN dos pais.\n\n### Mantidos até a exclusão da conta de família\n\nOs seguintes dados hoje não têm prazo de exclusão automática próprio:\n\n• A conta e as configurações da família.\n• Os lugares salvos.\n• Os cadastros de crianças e dispositivos.\n• As tarefas com recompensa.\n• Os pedidos de sites.\n• Os quadros de estrelas e os quadros semanais de Tempo de tela.\n• A lista de apps instalados e de extensões de navegador adicionadas.\n\n### Exceções\n\nAlguns registros mínimos podem ser mantidos por mais tempo quando exigido por lei, por transações da loja de aplicativos, por uma contestação de exclusão ou para prevenção de fraudes, e apenas na medida necessária para essa finalidade.',
      },
      {
        title: '12. Exclusão da conta',
        body: 'Os pais podem solicitar a exclusão em Ajustes ou por e-mail para support@kidgate.app, a partir do endereço de e-mail da conta, como explica kidgate.app/delete-account.\n\nO pedido fica pendente por 14 dias e pode ser cancelado nesse período. Após 14 dias, a conta de família, cada criança e cada dispositivo sob ela e os arquivos armazenados são excluídos, e o login da conta também é removido. A exclusão é permanente e não há exportação depois dela.\n\nA conclusão da exclusão não significa que todos os registros relacionados desapareçam imediatamente: o registro que confirma a exclusão e as exceções da seção 11 continuam mantidos pelo prazo e no âmbito indicados ali.',
      },
      {
        title: '13. Direitos e escolhas',
        body: 'Dependendo da legislação aplicável, os usuários podem solicitar acesso, correção, exclusão, restrição ou oposição ao processamento dos dados, e retirar o consentimento quando o processamento se basear nele. Essas solicitações, inclusive de uma cópia dos dados que o KidGate mantém sobre uma família, devem ser enviadas a support@kidgate.app; hoje não há exportação por conta própria.\n\nO monitoramento de mensagens e a confirmação por IA podem ser desligados a qualquer momento sem afetar o restante do serviço.\n\nAs permissões de localização, notificação, câmera, microfone e dispositivo podem ser revogadas no sistema operacional. Nesse caso, os recursos que dependem delas vão parar de funcionar ou ficar incompletos, e o KidGate informa isso na tela dos pais em vez de exibir um controle que já não funciona.',
      },
      {
        title: '14. Dados de crianças',
        body: 'O KidGate processa dados de crianças apenas conforme a configuração e as instruções da conta de pai/mãe, dentro dos recursos que os pais ativaram e das permissões concedidas. Se dados de uma criança tiverem sido fornecidos sem a devida autoridade ou o consentimento exigido, o KidGate poderá restringir a conta e excluir os dados após verificação.',
      },
      {
        title: '15. Incidentes de dados',
        body: 'Ao confirmar um incidente de segurança envolvendo dados, o KidGate avaliará o incidente, adotará medidas de mitigação razoáveis e notificará os usuários ou as autoridades quando legalmente exigido. Os pais devem proteger suas contas, PINs e dispositivos, e relatar prontamente ao KidGate qualquer suspeita de acesso não autorizado.',
      },
      {
        title: '16. Alterações e contato',
        body: 'Esta política pode mudar conforme os recursos ou as leis mudam. Atualizações relevantes serão comunicadas no aplicativo ou por meio de um canal de distribuição apropriado.\n\nSolicitações e dúvidas relacionadas à privacidade devem ser enviadas a support@kidgate.app, o endereço também publicado nas páginas do KidGate nas lojas de aplicativos.',
      },
    ],
  },
  termsOfService: {
    title: 'Termos de Serviço',
    effectiveDate: 'Em vigor a partir de 6 de setembro de 2026',
    intro:
      'Ao entrar ou utilizar o KidGate, você confirma que leu e concorda com estes termos. KidGate é o nome comercial e de produto sob o qual o serviço é operado.',
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
        body: 'Um teste gratuito com acesso completo começa quando os seus primeiros dispositivos de responsável e de criança são emparelhados e dura o período indicado no aplicativo. Quando ele termina, as regras que você configurou continuam funcionando sem pagamento em um dispositivo da criança — Limite diário, Horários bloqueados, Apps bloqueados, limites por app, o Filtro da web, a pesquisa segura, o Bloqueio do dispositivo, os pedidos de tempo extra e as tarefas com recompensa — e você ainda pode pedir a esse dispositivo a posição atual dele um número limitado de vezes por dia. O SOS nunca fica atrás de um pagamento. A atividade ao vivo, o histórico, os relatórios semanais, o rastro de localização, os endereços, os alertas de locais e o monitoramento de mensagens passam a fazer parte do Premium. Quando uma família tem mais dispositivos de crianças do que o plano cobre, os dispositivos excedentes ficam pausados: eles continuam aplicando as regras já definidas, essas regras podem ser afrouxadas, mas não apertadas, e eles param de enviar atividade. Você escolhe qual dispositivo segue monitorado, e essa escolha pode ser alterada uma vez a cada sete dias. Remover um dispositivo da criança não reinicia o teste. Uma família pode ter um número limitado de dispositivos de crianças emparelhados ao mesmo tempo; o número depende do plano, e o aplicativo o informa quando ele é atingido.',
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
        body: 'O serviço pode mudar, ser pausado ou encerrado devido a manutenção, segurança, mudanças de plataforma, exigências legais ou razões operacionais. O KidGate pode ser descontinuado; se isso ocorrer, as assinaturas ativas e a compra única serão tratadas de acordo com as regras aplicáveis da loja de aplicativos — a compra única adquire o serviço enquanto ele estiver disponível, não uma promessa de que ele será oferecido para sempre. O KidGate busca uma disponibilidade razoável, mas não garante operação ininterrupta, isenta de erros ou compatibilidade com todos os dispositivos.',
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
