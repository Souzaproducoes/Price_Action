// ════════════════════════════════════════════════════════════
//  quiz-engine.js — Motor de Quiz Compartilhado
//  Price Action Academy | Souza Produções — v5.0
//  Usado por: winfut.html, ict-fvg-order-blocks.html,
//             ICT_Estudo_Avancado.html, alinhamento-de-fluxo.html,
//             smart-money-concepts.html
// ════════════════════════════════════════════════════════════

// ── BANCO DE PERGUNTAS POR MÓDULO ──────────────────────────

const QUIZ_BANKS = {

  // ── WINFUT ──────────────────────────────────────────────
  winfut: [
    {
      q: "No WINFUT, o Padrão 1 (Gap e Reversão) é conhecido como:",
      opts: ["O Clássico Stop Hunt Matinal", "A Caçada aos Stops do Range", "Quando a Tendência Persiste", "O Movimento Explosivo"],
      correct: 0,
      tip: "O Padrão 1 busca um gap de abertura seguido de stop hunt e reversão."
    },
    {
      q: "Qual é a taxa de acerto aproximada do Padrão 2 (Teste Máxima/Mínima)?",
      opts: ["~50%", "~60%", "~70%", "~80%"],
      correct: 2,
      tip: "O Padrão 2 tem a maior taxa de acerto: ~70%."
    },
    {
      q: "No WINFUT, o período das 9h–10h equivale a qual sessão internacional?",
      opts: ["Sessão Asiática", "Sessão de Londres (Stop Hunt)", "Sessão de Nova York (Expansão)", "Sessão de Frankfurt"],
      correct: 1,
      tip: "A abertura 9h–10h é equivalente à sessão de Londres, com forte manipulação de stops."
    },
    {
      q: "Qual é o tamanho típico de gap para o Padrão 1 (Gap e Reversão)?",
      opts: ["0–100 pts", "300–600 pts", "700–1000 pts", "200–300 pts"],
      correct: 1,
      tip: "O Gap e Reversão requer gap de 300–600 pontos para ser considerado válido."
    },
    {
      q: "No checklist diário, em qual fase NÃO se deve operar nos primeiros 5 minutos?",
      opts: ["Pré-Mercado (8h–9h)", "Abertura (9h–9h30)", "Principal (10h–17h)", "Pós-Trading"],
      correct: 1,
      tip: "Os primeiros 5 min da abertura têm alta volatilidade e são perigosos."
    },
    {
      q: "O que é 'Stop Hunt' no contexto do WINFUT?",
      opts: ["Uma estratégia de compra agressiva", "Movimento rápido do preço para varrer stops de traders", "Uma ordem de stop loss muito grande", "O fechamento da sessão americana"],
      correct: 1,
      tip: "Stop Hunt é quando grandes players movem o preço para acionar stops dos varejistas."
    },
    {
      q: "O Padrão 3 (Movimento Direto) tem entrada ideal em qual horário?",
      opts: ["9h00–9h15", "9h45–10h00", "10h30–11h00", "12h00–12h30"],
      correct: 0,
      tip: "O Padrão 3 é agressivo — entrada logo na abertura, entre 9h e 9h15."
    },
    {
      q: "Qual é a frequência aproximada do Padrão 2 (Teste Máxima/Mínima) nos dias de trading?",
      opts: ["10–15%", "25–30%", "50–60%", "70–80%"],
      correct: 1,
      tip: "O Padrão 2 ocorre em 25–30% dos dias de trading."
    },
    {
      q: "Segundo as regras de ouro do WINFUT, qual percentual máximo do capital deve ser arriscado por operação?",
      opts: ["5%", "10%", "2%", "0,5%"],
      correct: 2,
      tip: "A regra de ouro limita o risco a no máximo 2% do capital por operação."
    },
    {
      q: "Na fase de gerenciamento (10h–17h), o que deve ser feito após atingir 1:1 de lucro?",
      opts: ["Fechar toda a posição", "Adicionar mais contratos", "Aplicar trailing stop", "Ignorar e aguardar o target final"],
      correct: 2,
      tip: "Após 1:1, aplica-se trailing stop para proteger lucros e deixar o restante correr."
    },
    {
      q: "O que significa 'Expansão' no fluxograma de psicologia do WINFUT?",
      opts: ["A fase de acumulação pré-mercado", "O período de leilão de abertura", "O movimento direcional sustentado após a manipulação", "A consolidação do meio do dia"],
      correct: 2,
      tip: "A Expansão é o movimento real — onde o dinheiro é feito, após a manipulação."
    },
    {
      q: "O que é 'backtest' segundo o glossário WINFUT?",
      opts: ["Uma ordem de venda a descoberto", "Teste de estratégia em dados históricos", "O fechamento de posição no final do dia", "Um tipo de gap de continuação"],
      correct: 1,
      tip: "Backtest é testar a estratégia em dados passados para validar sua eficácia."
    }
  ],

  // ── ICT FVG & ORDER BLOCKS ───────────────────────────────
  ict: [
    {
      q: "O que é um FVG (Fair Value Gap)?",
      opts: ["Uma zona de suporte estático", "Uma ineficiência formada entre a máxima do 1º candle e a mínima do 3º candle", "O ponto médio de um Order Block", "Uma linha de tendência ascendente"],
      correct: 1,
      tip: "FVG é o espaço vazio entre a máxima do C1 e a mínima do C3 em 3 candles consecutivos."
    },
    {
      q: "O que significa 'mitigar' um FVG?",
      opts: ["Ignorar o FVG como zona inválida", "O preço retornou e interagiu com a zona do FVG", "Criar um novo FVG maior", "Colocar stop loss dentro do FVG"],
      correct: 1,
      tip: "Mitigar = o preço retornou ao FVG. FVGs virgens (não mitigados) têm maior poder."
    },
    {
      q: "Um Order Block Altista válido é formado por:",
      opts: ["O primeiro candle de alta antes de uma queda", "O último candle de BAIXA antes de um movimento impulsivo de alta que quebra estrutura", "Três candles verdes consecutivos", "Um gap de alta no pré-mercado"],
      correct: 1,
      tip: "O OB Altista é sempre o último candle contrário (bearish) antes do impulso que forma o BOS."
    },
    {
      q: "O que é BOS no contexto ICT?",
      opts: ["Break of Structure — quebra de estrutura de mercado", "Block of Signals — bloco de sinais institucionais", "Base of Support — zona de suporte base", "Bullish Order Setup — configuração de compra"],
      correct: 0,
      tip: "BOS (Break of Structure) é quando o preço quebra uma máxima ou mínima significativa."
    },
    {
      q: "O que é o 'Consequent Encroachment' de um FVG?",
      opts: ["O candle central do FVG", "O ponto médio (50%) do FVG — entrada mais precisa com menor stop", "A borda superior do FVG", "O preenchimento total do FVG"],
      correct: 1,
      tip: "Consequent Encroachment é o 50% do FVG — ponto de entrada com risco reduzido."
    },
    {
      q: "Segundo o princípio central do ICT, o que o preço busca primariamente?",
      opts: ["Médias móveis", "Liquidez (stops acumulados)", "Linhas de tendência", "Fibonacci 61.8%"],
      correct: 1,
      tip: "\"O preço busca liquidez\" — os stops dos varejistas são o alvo das instituições."
    },
    {
      q: "O que é um 'Breaker Block'?",
      opts: ["Um OB que nunca foi testado", "Um FVG de alta intensidade", "Um OB que foi rompido e inverteu sua função", "O primeiro candle de uma tendência"],
      correct: 2,
      tip: "Breaker Block = OB rompido. Suporte vira resistência (e vice-versa)."
    },
    {
      q: "Qual é a Kill Zone mais importante para operar FVG e OB no horário brasileiro?",
      opts: ["Ásia: 20h–00h", "London: 04h–07h", "New York: 09h30–11h (BRT)", "Dead Zone: 12h–14h"],
      correct: 2,
      tip: "A Kill Zone de Nova York (09h30–11h BRT) é marcada como '★ MELHOR SESSÃO ★'."
    },
    {
      q: "O que é Premium & Discount na metodologia ICT?",
      opts: ["Nomes de contas em corretoras", "Zonas acima (Premium = vender) e abaixo (Discount = comprar) do equilíbrio de preço", "Tipos de Order Blocks", "Classificação de FVGs por tamanho"],
      correct: 1,
      tip: "Nunca compre em Premium. Compre em Discount. Venda em Premium."
    },
    {
      q: "Qual é o Ciclo de 4 Fases do ICT na ordem correta?",
      opts: ["Expansão → Retração → Consolidação → Reversão", "Consolidação → Expansão → Retração → Reversão", "Reversão → Consolidação → Expansão → Retração", "Retração → Expansão → Reversão → Consolidação"],
      correct: 1,
      tip: "O ciclo ICT: Consolidação (acúmulo) → Expansão (impulso) → Retração (pullback) → Reversão."
    },
    {
      q: "O 'Propulsion Block' se diferencia dos demais OBs por:",
      opts: ["Ter sido rompido pelo preço", "Ser formado por um candle de volume muito acima da média", "Estar em zona de Premium", "Ser sempre um candle de alta"],
      correct: 1,
      tip: "Propulsion Block tem volume extremamente alto — reação mais forte ao ser retestado."
    },
    {
      q: "Qual é o R:R (Risco:Retorno) mínimo recomendado pela metodologia ICT?",
      opts: ["1:1", "2:1", "5:1", "10:1"],
      correct: 1,
      tip: "ICT recomenda no mínimo 2:1. Em confluências fortes, buscar 3:1 a 5:1."
    }
  ],

  // ── ICT ESTUDO AVANÇADO ──────────────────────────────────
  ictAvancado: [
    {
      q: "O que é MSS (Market Structure Shift)?",
      opts: ["Uma nova máxima histórica no mercado", "Uma quebra de estrutura que sinaliza mudança de tendência", "O volume médio de uma sessão", "Um padrão de 3 candles específico"],
      correct: 1,
      tip: "MSS sinaliza que a tendência vigente está mudando — diferente do BOS que confirma continuação."
    },
    {
      q: "O que são 'Equal Highs / Equal Lows' no ICT?",
      opts: ["Médias móveis de mesmo período", "Topos ou fundos duplos que representam zonas de liquidez a serem varridas", "Candles com mesmo tamanho de corpo", "Níveis de Fibonacci coincidentes"],
      correct: 1,
      tip: "Equal Highs/Lows são ímãs de liquidez — o preço tende a varrê-los antes de reverter."
    },
    {
      q: "O que é 'Inducement' (IDM) na metodologia ICT?",
      opts: ["Um tipo de Order Block", "Movimento falso que induz traders a entrar na direção errada antes da real", "O volume de abertura de sessão", "Um FVG de baixa intensidade"],
      correct: 1,
      tip: "Inducement é a armadilha — o preço finge romper um nível para pegar stops antes de reverter."
    },
    {
      q: "Em qual timeframe superior (HTF) a direção macro do trade deve ser determinada?",
      opts: ["1 minuto", "5 minutos", "Mensal/Semanal/Diário", "15 minutos"],
      correct: 2,
      tip: "HTF (Higher Time Frame) define o bias macro. LTF é usado apenas para entradas precisas."
    },
    {
      q: "O que é 'Raid on Liquidity'?",
      opts: ["Uma ordem de compra institucional", "Movimento do preço para varrer zonas de liquidez antes de inverter", "A fase de consolidação semanal", "Um padrão de reversão específico"],
      correct: 1,
      tip: "Raid on Liquidity = o preço vai buscar stops acumulados e depois reverte na direção real."
    },
    {
      q: "O que é PD Array (Premium/Discount Array)?",
      opts: ["Uma lista de Order Blocks inválidos", "Conjunto de ferramentas ICT para identificar zonas de oferta e demanda", "O spread entre bid e ask", "Uma média de preços do dia anterior"],
      correct: 1,
      tip: "PD Array inclui OBs, FVGs, Mitigation Blocks, etc. — ferramentas para encontrar zonas de reação."
    },
    {
      q: "Qual é o conceito de 'CISD' (Change in State of Delivery)?",
      opts: ["Mudança no volume de negociação", "Mudança no comportamento de entrega de preços — sinal de reversão no LTF", "Um tipo de gap de continuação", "O horário de fechamento da B3"],
      correct: 1,
      tip: "CISD é o sinal no LTF que confirma que o preço mudou de direção dentro de uma zona."
    },
    {
      q: "O que é 'Time & Price Theory' no ICT?",
      opts: ["Análise gráfica baseada em suporte e resistência", "A correlação entre horários específicos e reações de preço em zonas ICT", "Um indicador de volume tempo-ponderado", "O cálculo de médias móveis adaptativas"],
      correct: 1,
      tip: "Tempo importa tanto quanto preço. Kill Zones definem os horários mais prováveis de reação."
    },
    {
      q: "O que é 'SMT Divergence' (Smart Money Tool Divergence)?",
      opts: ["Divergência entre dois ativos correlacionados para confirmar viés", "Um indicador de volume divergente", "A diferença entre preço spot e futuro", "Uma divergência clássica de MACD"],
      correct: 0,
      tip: "SMT Divergence: quando WINFUT e S&P500 (por ex.) divergem, indica manipulação e possível reversão."
    },
    {
      q: "O que é 'OTE' (Optimal Trade Entry)?",
      opts: ["O primeiro tick após o BOS", "Zona entre 62%–79% de retração de Fibonacci dentro de um impulso ICT", "O ponto médio de qualquer FVG", "O fechamento do dia anterior"],
      correct: 1,
      tip: "OTE é a zona de entrada ótima — entre 62% e 79% do retracement após um impulso com BOS."
    },
    {
      q: "No modelo ICT, 'sell-side liquidity' se encontra tipicamente:",
      opts: ["Acima dos topos recentes", "Abaixo dos fundos recentes (onde stops de compradores ficam)", "No ponto médio do range", "Em zonas de FVG preenchidas"],
      correct: 1,
      tip: "Sell-side liquidity = stops de comprados acumulados abaixo de mínimas. O preço vai buscá-los."
    },
    {
      q: "O que define uma 'Turtle Soup' setup no ICT?",
      opts: ["Um OB formado após 3 candles verdes consecutivos", "Falso rompimento de máxima/mínima recente seguido de reversão rápida", "Um FVG de 4 candles", "Entrada na abertura do gap"],
      correct: 1,
      tip: "Turtle Soup = falso rompimento que armadilha breakout traders antes de reverter na direção oposta."
    }
  ],

  // ── ALINHAMENTO DE FLUXO ─────────────────────────────────
  alinhamento: [
    {
      q: "O que é 'Alinhamento de Fluxo' no contexto de Price Action?",
      opts: ["Operar apenas em uma direção independente do cenário", "Negociar na direção concordante entre múltiplos timeframes e sessões de mercado", "Usar médias móveis para filtrar entradas", "Seguir o volume médio diário"],
      correct: 1,
      tip: "Alinhamento de fluxo = bias macro, médio e micro apontando na mesma direção."
    },
    {
      q: "Qual é o princípio básico do alinhamento de timeframes?",
      opts: ["O gráfico de 1 minuto define a direção principal", "O timeframe maior define o bias e o menor é usado apenas para entrada", "Todos os timeframes têm o mesmo peso", "Só o gráfico diário importa"],
      correct: 1,
      tip: "HTF (Diário/Semanal) define o caminho. LTF (5M/1M) define onde entrar."
    },
    {
      q: "O que significa 'fluxo institucional' estar alinhado com sua operação?",
      opts: ["O volume do dia está acima da média", "As grandes mãos estão operando na mesma direção que você", "A média móvel de 200 períodos está ascendente", "O spread bid-ask está reduzido"],
      correct: 1,
      tip: "Quando você está com o fluxo institucional, a probabilidade da operação aumenta."
    },
    {
      q: "Quando há conflito de direção entre o timeframe diário e o de 5 minutos, qual deve prevalecer?",
      opts: ["O de 5 minutos, pois é mais recente", "O diário, pois representa o fluxo maior e mais relevante", "Ambos têm o mesmo peso", "Depende do volume do momento"],
      correct: 1,
      tip: "Sempre respeite o HTF. Operar contra o diário é nadar contra a correnteza."
    },
    {
      q: "O que é 'bias de mercado' no contexto do alinhamento de fluxo?",
      opts: ["O viés direcional macro definido pela análise do timeframe superior", "O histórico de operações do trader", "A diferença entre máxima e mínima do dia", "O volume médio de 20 sessões"],
      correct: 0,
      tip: "Bias é a direção esperada baseada na estrutura de mercado HTF — altista ou baixista."
    },
    {
      q: "Em qual situação o alinhamento de fluxo está COMPLETO para uma operação de compra?",
      opts: ["Preço caindo em todos os timeframes", "Semanal em alta, Diário em alta, e LTF em zona de demanda confirmando", "Apenas o gráfico de 15M mostrando alta", "Volume acima da média em candle de alta no 1M"],
      correct: 1,
      tip: "Alinhamento completo: HTF altista + preço em zona de demanda + confirmação LTF."
    },
    {
      q: "O que é 'confluência' no alinhamento de fluxo?",
      opts: ["Dois indicadores apontando na mesma direção", "Múltiplos fatores (timeframes, zonas ICT, sessões) concordando para o mesmo setup", "A interseção de duas médias móveis", "O cruzamento de volume com preço"],
      correct: 1,
      tip: "Confluência = quanto mais fatores alinhados, maior a probabilidade do setup funcionar."
    },
    {
      q: "Por que é arriscado operar contra o fluxo do mercado?",
      opts: ["Porque o spread aumenta", "Porque você está contra a direção das instituições que têm mais capital e informação", "Porque a plataforma pode ter lentidão", "Porque o volume diminui"],
      correct: 1,
      tip: "Operar contra o fluxo = competir contra bancos e fundos. A probabilidade cai drasticamente."
    },
    {
      q: "O que é 'dead zone' no alinhamento de fluxo e sessões?",
      opts: ["Uma zona de suporte muito forte", "Período de baixa liquidez e sem direcionalidade — evitar operações", "Um FVG preenchido", "O horário de abertura da B3"],
      correct: 1,
      tip: "Dead Zone (12h–14h BRT aprox.) tem baixo volume e movimentos aleatórios — melhor não operar."
    },
    {
      q: "Como o conceito de 'alinhamento de fluxo' ajuda na gestão de risco?",
      opts: ["Permite usar stops maiores", "Filtra setups de baixa probabilidade, melhorando a taxa de acerto e o R:R", "Elimina completamente o risco", "Permite operar com maior alavancagem"],
      correct: 1,
      tip: "Com fluxo alinhado, você filtra ruído e opera só os setups de maior probabilidade."
    },
    {
      q: "O que é 'estrutura de mercado' no contexto do alinhamento de fluxo?",
      opts: ["O horário de funcionamento da bolsa", "A sequência de topos e fundos que define se o mercado está em tendência ou range", "O número de participantes no mercado", "A volatilidade histórica do ativo"],
      correct: 1,
      tip: "Estrutura: HH/HL = tendência de alta. LH/LL = tendência de baixa. Saber isso define o bias."
    },
    {
      q: "Qual é o principal benefício de operar APENAS na direção do fluxo institucional?",
      opts: ["Operações mais rápidas", "Probabilidade estatisticamente maior de sucesso pois você vai com o 'dinheiro inteligente'", "Menos imposto a pagar", "Spreads menores"],
      correct: 1,
      tip: "Alinhar-se ao Smart Money é como ter o vento a favor — a tendência trabalha por você."
    }
  ],

  // ── SMART MONEY CONCEPTS ─────────────────────────────────
  smc: [
    {
      q: "O que é 'Smart Money' no contexto de SMC?",
      opts: ["Dinheiro aplicado em renda fixa", "Capital de investidores institucionais (bancos, fundos) que movem o mercado", "Criptomoedas com alto retorno", "Operações de day trade lucrativas"],
      correct: 1,
      tip: "Smart Money = grandes players institucionais que têm informação e capital suficientes para mover preços."
    },
    {
      q: "O que é 'liquidez' no SMC?",
      opts: ["A velocidade de execução de ordens", "Concentração de stop losses em níveis específicos que o mercado busca", "O volume médio diário do ativo", "A diferença entre preço de compra e venda"],
      correct: 1,
      tip: "Liquidez = stops acumulados acima de topos e abaixo de fundos. O Smart Money precisa deles."
    },
    {
      q: "O que é 'CTZ' na metodologia SMC?",
      opts: ["Central Trade Zone — zona central de trading", "Confirmação / Tendência / Zona — sistema de checklist para validar operações", "Ciclo de Trading Zero — ausência de oportunidades", "Candle Trading Zone — padrão de velas"],
      correct: 1,
      tip: "CTZ: C = Confirmação de estrutura, T = Tendência alinhada, Z = Zona de demanda/oferta."
    },
    {
      q: "O que são 'Kill Zones' no SMC?",
      opts: ["Zonas de suporte muito fortes que 'matam' o movimento", "Janelas de tempo de alta liquidez onde as instituições mais operam", "Regiões de preço onde o stop deve ser colocado", "Períodos de baixo volume a evitar"],
      correct: 1,
      tip: "Kill Zones são os horários das sessões de Londres e Nova York — máxima atividade institucional."
    },
    {
      q: "O que é 'Change of Character' (CHoCH)?",
      opts: ["Mudança no tamanho dos candles", "Quebra de estrutura que indica possível reversão de tendência", "Aumento repentino de volume", "Mudança no comportamento do trader"],
      correct: 1,
      tip: "CHoCH = primeiro sinal de reversão. Diferente do BOS que confirma continuação."
    },
    {
      q: "O que é 'Market Maker Model' no SMC?",
      opts: ["Um robô que faz operações automáticas", "O padrão cíclico de como os market makers acumulam, manipulam e distribuem posições", "Uma corretora especializada", "Um indicador de fluxo de ordens"],
      correct: 1,
      tip: "Market Maker Model: Acumulação → Manipulação (stop hunt) → Distribuição (movimento real)."
    },
    {
      q: "No SMC, onde ficam tipicamente os 'buy stops' (liquidez para cima)?",
      opts: ["Abaixo de mínimas recentes", "Acima de máximas recentes e igual highs", "No ponto médio do range", "Nos níveis de Fibonacci 38.2%"],
      correct: 1,
      tip: "Buy stops ficam ACIMA dos topos — são os stops de quem vendeu e os alvos das instituições."
    },
    {
      q: "O que é 'NDOG' (New Day Opening Gap) no SMC?",
      opts: ["Um padrão de 3 candles de alta", "O gap entre o fechamento do dia anterior e a abertura do novo dia", "O volume da abertura de mercado", "Uma zona de FVG específica"],
      correct: 1,
      tip: "NDOG é uma zona de liquidez formada pelo gap entre fechamento e abertura — o preço tende a fechá-la."
    },
    {
      q: "O que é 'Power of 3' (PO3) no SMC?",
      opts: ["Operar apenas 3 contratos", "Acumulação, Manipulação e Distribuição — o ciclo de 3 fases do Smart Money", "Os 3 melhores padrões de candlestick", "Confluência de 3 timeframes"],
      correct: 1,
      tip: "PO3: o preço acumula, manipula (stop hunt) e então distribui na direção real."
    },
    {
      q: "O que é 'Displacement' no SMC?",
      opts: ["Abertura de conta em corretora", "Movimento impulsivo e rápido que deixa FVGs e indica forte presença institucional", "A diferença entre dois Order Blocks", "Um padrão de reversão de 5 candles"],
      correct: 1,
      tip: "Displacement = impulso agressivo com candles grandes e FVGs — assinatura do Smart Money."
    },
    {
      q: "Qual é a essência do checklist CTZ com 15 itens?",
      opts: ["Verificar indicadores técnicos como MACD e RSI", "Validar estrutura, tendência e zona antes de entrar — garantindo alta confluência", "Analisar 15 candles consecutivos", "Confirmar o volume em 15 timeframes"],
      correct: 1,
      tip: "CTZ força o trader a validar múltiplos critérios antes de entrar — eliminando operações impulsivas."
    },
    {
      q: "O que é 'Sellside Liquidity Run' no SMC?",
      opts: ["Uma corrida de alta que rompe resistências", "O preço cai para varrer stops abaixo de fundos antes de reverter para cima", "Uma estratégia de venda em aberto", "O volume médio da sessão americana"],
      correct: 1,
      tip: "Sellside Liquidity Run: o preço desce, pega os stops dos comprados abaixo dos fundos, depois sobe."
    }
  ]
};

// ════════════════════════════════════════════════════════════
//  MOTOR DE QUIZ — funções compartilhadas
// ════════════════════════════════════════════════════════════

let _quizPool = [];
let _quizIndex = 0;
let _quizScore = 0;
const _quizTotal = 10;
let _quizModuleKey = '';

function startModuleQuiz(moduleKey) {
  _quizModuleKey = moduleKey;
  const bank = QUIZ_BANKS[moduleKey];
  if (!bank) { console.error('Quiz bank not found:', moduleKey); return; }

  // Shuffle and pick up to _quizTotal questions
  _quizPool = [...bank].sort(() => Math.random() - 0.5).slice(0, _quizTotal);
  _quizIndex = 0;
  _quizScore = 0;

  const modal = document.getElementById('quizModal');
  if (modal) {
    modal.style.display = 'flex';
    _renderModuleQuestion();
  }
}

function _renderModuleQuestion() {
  const container = document.getElementById('quizContent');
  if (!container) return;

  if (_quizIndex >= _quizPool.length) {
    _renderQuizResult(container);
    return;
  }

  const item = _quizPool[_quizIndex];
  const pct = Math.round((_quizIndex / _quizTotal) * 100);

  container.innerHTML = `
    <div style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:0.82rem;color:#94a3b8;font-weight:700;">Pergunta ${_quizIndex + 1} de ${_quizPool.length}</span>
      <span style="font-size:0.82rem;color:#f5c842;font-weight:700;">✅ ${_quizScore} acertos</span>
    </div>
    <div style="background:#172038;border-radius:12px;height:6px;margin-bottom:24px;overflow:hidden;">
      <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#3b82f6,#a855f7);border-radius:12px;transition:width 0.4s;"></div>
    </div>
    <p style="color:#94a3b8;font-size:0.82rem;margin-bottom:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Qual é a resposta correta?</p>
    <p style="color:#f1f5f9;font-size:1.05rem;font-weight:700;line-height:1.5;margin-bottom:20px;">${item.q}</p>
    <div style="display:flex;flex-direction:column;gap:10px;" id="quizOpts">
      ${item.opts.map((opt, i) => `
        <button
          onclick="_checkModuleAnswer(${i}, ${item.correct}, this)"
          style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
                 color:#f1f5f9;padding:13px 16px;border-radius:10px;cursor:pointer;
                 font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s;line-height:1.4;width:100%;">
          <span style="color:#94a3b8;margin-right:10px;font-family:monospace;">${String.fromCharCode(65+i)})</span>${opt}
        </button>`).join('')}
    </div>`;
}

function _checkModuleAnswer(selected, correct, btn) {
  const opts = document.querySelectorAll('#quizOpts button');
  opts.forEach(b => b.disabled = true);

  const item = _quizPool[_quizIndex];

  if (selected === correct) {
    _quizScore++;
    btn.style.background = 'rgba(16,185,129,0.18)';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#10b981';
    btn.innerHTML = `<span style="margin-right:10px;">✓</span>${item.opts[selected]}`;
  } else {
    btn.style.background = 'rgba(239,68,68,0.18)';
    btn.style.borderColor = '#ef4444';
    btn.style.color = '#ef4444';
    btn.innerHTML = `<span style="margin-right:10px;">✗</span>${item.opts[selected]}`;
    opts[correct].style.background = 'rgba(16,185,129,0.18)';
    opts[correct].style.borderColor = '#10b981';
    opts[correct].style.color = '#10b981';
  }

  // Show tip
  const tipDiv = document.createElement('div');
  tipDiv.style.cssText = 'margin-top:14px;padding:12px 16px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:10px;font-size:0.84rem;color:#94a3b8;line-height:1.5;';
  tipDiv.innerHTML = `<span style="color:#60a5fa;font-weight:700;">💡 Dica: </span>${item.tip}`;
  document.getElementById('quizOpts').appendChild(tipDiv);

  setTimeout(() => { _quizIndex++; _renderModuleQuestion(); }, 1800);
}

function _renderQuizResult(container) {
  const pct = Math.round((_quizScore / _quizPool.length) * 100);
  let emoji, msg, color;
  if (pct >= 90)      { emoji = '🏆'; msg = 'Excelente! Você domina este módulo!';   color = '#f5c842'; }
  else if (pct >= 70) { emoji = '👍'; msg = 'Muito bom! Continue praticando.';        color = '#10b981'; }
  else if (pct >= 50) { emoji = '📚'; msg = 'Bom esforço! Revise o conteúdo.';        color = '#0ea5e9'; }
  else                { emoji = '💪'; msg = 'Continue estudando — você consegue!';    color = '#a855f7'; }

  container.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:4rem;margin-bottom:16px;">${emoji}</div>
      <h3 style="font-size:1.4rem;font-weight:900;color:#fff;margin-bottom:8px;">${msg}</h3>
      <p style="color:#94a3b8;margin-bottom:24px;">
        Você acertou
        <strong style="color:${color};font-size:1.6rem;margin:0 6px;">${_quizScore}/${_quizPool.length}</strong>
        — ${pct}%
      </p>
      <div style="background:#172038;border-radius:14px;padding:20px;margin-bottom:24px;">
        <div style="height:12px;background:#0d1526;border-radius:10px;overflow:hidden;margin-bottom:10px;">
          <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#10b981,#f5c842);
                      border-radius:10px;transition:width 1s ease;"></div>
        </div>
        <span style="font-size:0.82rem;color:#94a3b8;">Taxa de acerto: ${pct}%</span>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="startModuleQuiz('${_quizModuleKey}')"
          style="background:linear-gradient(135deg,#3b82f6,#a855f7);color:#fff;border:none;
                 padding:13px 28px;border-radius:12px;font-weight:700;cursor:pointer;font-size:0.9rem;">
          🔄 Jogar Novamente
        </button>
        <button onclick="closeModuleQuiz()"
          style="background:rgba(255,255,255,0.06);color:#94a3b8;border:1px solid rgba(255,255,255,0.1);
                 padding:13px 28px;border-radius:12px;font-weight:700;cursor:pointer;font-size:0.9rem;">
          Fechar
        </button>
      </div>
    </div>`;
}

function closeModuleQuiz(e) {
  const modal = document.getElementById('quizModal');
  if (!modal) return;
  if (!e || e.target === modal) modal.style.display = 'none';
}
