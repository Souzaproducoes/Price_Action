// ── PATTERNS DATA ──
const patterns = [
    { id:1,  name:"Martelo (Hammer)",             subtitle:"Reversão de Alta — Sombra inferior longa",         type:"bullish",      image:"1.png",  description:"Vela com corpo pequeno na parte superior e sombra inferior longa (pelo menos 2x o corpo). Aparece após tendência de baixa.",                                                                                       psychology:"Vendedores empurram o preço para baixo, mas compradores recuperam e fecham próximo à abertura, mostrando rejeição de preços mais baixos.", reliability:4 },
    { id:2,  name:"Martelo Invertido",             subtitle:"Reversão de Alta — Sombra superior longa",         type:"bullish",      image:"2.png",  description:"Similar ao martelo, mas com sombra longa superior. Corpo pequeno na base da vela.",                                                                                                                       psychology:"Compradores tentam empurrar preços para cima. Embora sejam rejeitados, a tentativa mostra interesse comprador emergente.", reliability:3 },
    { id:3,  name:"Engolfo de Alta",               subtitle:"Candle verde engole o vermelho anterior",           type:"bullish",      image:"3.png",  description:"Padrão de duas velas: primeira vermelha pequena, segunda verde maior que 'engole' completamente o corpo da primeira.",                                                                                  psychology:"Mudança drástica no sentimento. Compradores assumem controle total, anulando as perdas do dia anterior.", reliability:4 },
    { id:4,  name:"Linha Perfurante",              subtitle:"Recuperação de mais de 50% do candle anterior",     type:"bullish",      image:"4.png",  description:"Vela vermelha longa seguida por vela verde que abre abaixo do mínimo anterior mas fecha acima do meio do corpo da primeira.",                                                                      psychology:"Compradores conseguem recuperar mais da metade das perdas do dia anterior, mostrando força significativa.", reliability:4 },
    { id:5,  name:"Estrela da Manhã",              subtitle:"Padrão de 3 candles — Reversão de alta",            type:"bullish",      image:"5.png",  description:"Padrão de três velas: vela vermelha longa, vela pequena (doji ou spinning top) que gaba para baixo, e vela verde longa.",                                                                       psychology:"Transição da venda para indecisão e finalmente para compra agressiva. Um dos padrões mais confiáveis.", reliability:5 },
    { id:6,  name:"Três Soldados Brancos",         subtitle:"Três candles de alta consecutivos",                 type:"bullish",      image:"6.png",  description:"Três velas verdes consecutivas com corpos longos, cada uma fechando mais alto que a anterior.",                                                                                                   psychology:"Pressão compradora sustentada e crescente. Compradores estão em controle total do mercado.", reliability:4 },
    { id:7,  name:"Harami de Alta",                subtitle:"Candle pequeno dentro do corpo do candle grande",   type:"bullish",      image:"7.png",  description:"Vela vermelha grande seguida por vela verde pequena completamente contida dentro do corpo da primeira.",                                                                                        psychology:"A vela pequena mostra que a pressão vendedora está diminuindo e o mercado está perdendo momentum de baixa.", reliability:3 },
    { id:8,  name:"Doji Libélula",                 subtitle:"Doji com longa sombra inferior",                    type:"bullish",      image:"8.png",  description:"Doji com sombra inferior longa e sem sombra superior. Formato de 'T'.",                                                                                                                                psychology:"Vendedores empurram preços para baixo, mas compradores recuperam completamente. Forte rejeição de preços baixos.", reliability:4 },
    { id:9,  name:"Pinça de Fundo",                subtitle:"Duas velas com mínimas iguais",                     type:"bullish",      image:"9.png",  description:"Duas velas consecutivas com mínimos idênticos (ou muito próximos). Primeira vermelha, segunda verde.",                                                                                          psychology:"O mercado testa um nível de suporte duas vezes e é rejeitado, mostrando força compradora naquele nível.", reliability:3 },
    { id:10, name:"Kicker de Alta",                subtitle:"Gap seguido de forte reversão para cima",           type:"bullish",      image:"10.png", description:"Vela vermelha seguida por gap de alta e vela verde longa. Raro mas muito forte.",                                                                                                                    psychology:"Mudança abrupta no sentimento, geralmente causada por notícias importantes. Compradores assumem controle total.", reliability:5 },
    { id:11, name:"Marubozu de Alta",              subtitle:"Candle verde sem sombras",                          type:"bullish",      image:"11.png", description:"Vela verde longa que abre no mínimo (ou próximo) e fecha no máximo, sem sombra inferior.",                                                                                                        psychology:"Compradores assumem controle desde a abertura e mantêm o preço subindo durante toda a sessão.", reliability:3 },
    { id:12, name:"Bebê Abandonado de Alta",       subtitle:"Doji com gaps — padrão raro",                       type:"bullish",      image:"12.png", description:"Vela vermelha, doji com gap para baixo, e vela verde com gap para cima. Três gaps separados.",                                                                                                    psychology:"Extrema exaustão da venda seguida por capitulação e reversão violenta. Padrão raro mas extremamente confiável.", reliability:5 },
    { id:13, name:"Três Interna de Alta",          subtitle:"Padrão de confirmação de reversão",                 type:"bullish",      image:"13.png", description:"Harami de alta seguido por terceira vela verde que fecha acima da máxima da primeira vela.",                                                                                                     psychology:"Confirmação do Harami. A terceira vela valida que compradores tomaram controle.", reliability:4 },
    { id:14, name:"Cinturão de Alta",              subtitle:"Abre na mínima e fecha na máxima",                  type:"bullish",      image:"14.png", description:"Vela verde longa que abre no mínimo (ou próximo) e fecha no máximo, sem sombra inferior.",                                                                                                        psychology:"Compradores assumem controle desde a abertura e mantêm o preço subindo durante toda a sessão.", reliability:3 },
    { id:15, name:"Três Métodos de Alta",          subtitle:"Continuação de tendência de alta",                  type:"continuation", image:"15.png", description:"Vela verde longa, três velas vermelhas pequenas dentro do range da primeira, e vela verde final que fecha acima da primeira.",                                                                 psychology:"Pausa na tendência de alta onde vendedores não conseguem fazer progresso. Compradores retomam controle.", reliability:4 },
    { id:16, name:"Colchão de Alta",               subtitle:"Padrão de continuação com gap",                     type:"continuation", image:"16.png", description:"Vela verde longa, três velas vermelhas pequenas que não fecham abaixo da abertura da primeira, e quinta vela verde forte.",                                                                    psychology:"Consolidação controlada em tendência de alta. Compradores mantêm controle durante a pausa.", reliability:4 },
    { id:17, name:"Contra-ataque de Alta",         subtitle:"Dois candles fecham no mesmo preço",                type:"bullish",      image:"17.png", description:"Vela vermelha longa seguida por vela verde que fecha exatamente no fechamento da vela anterior.",                                                                                               psychology:"Compradores conseguem recuperar todas as perdas da sessão anterior, mostrando força igualadora.", reliability:3 },
    { id:18, name:"Tri-Estrela de Alta",           subtitle:"Três dojis consecutivos",                           type:"bullish",      image:"18.png", description:"Três dojis consecutivos em tendência de baixa, cada um com corpo menor que o anterior.",                                                                                                         psychology:"Extrema indecisão e exaustão da tendência atual. Mercado está prestes a explodir para cima.", reliability:3 },
    { id:19, name:"Fundo Arredondado",             subtitle:"Padrão em formato de U — acumulação",               type:"bullish",      image:"19.png", description:"Padrão em formato de U com candles de baixa gradualmente menores seguidos por candles de alta crescentes.",                                                                                   psychology:"Transição gradual da venda para a compra. Acumulação silenciosa antes de movimento de alta.", reliability:4 },
    { id:20, name:"Pombo Correio",                 subtitle:"Dois candles de baixa, segundo menor",              type:"bullish",      image:"20.png", description:"Duas velas vermelhas consecutivas, sendo a segunda menor que a primeira, indicando exaustão da venda.",                                                                                       psychology:"A segunda vela menor mostra que vendedores estão perdendo força, preparando reversão para alta.", reliability:3 },
    { id:21, name:"Sanduíche",                     subtitle:"Suporte sendo testado",                             type:"bullish",      image:"21.png", description:"Vela vermelha, doji no meio, e vela verde, todas com mínimas próximas indicando suporte forte.",                                                                                              psychology:"Teste triplo de suporte com rejeição. Compradores defendem o nível agressivamente.", reliability:4 },
    { id:22, name:"Armadilha de Alta",             subtitle:"Falso rompimento de baixa",                         type:"bullish",      image:"22.png", description:"Falso rompimento para baixo seguido por recuperação rápida e fechamento positivo.",                                                                                                              psychology:"Vendedores são atraídos para armadilha e depois forçados a cobrir posições, acelerando a alta.", reliability:4 },
    { id:23, name:"Andorinha Oculta",              subtitle:"Padrão complexo de 4 candles",                      type:"bullish",      image:"23.png", description:"Três velas vermelhas decrescentes seguidas por vela verde forte que engloba a última vermelha.",                                                                                              psychology:"Exaustão progressiva da venda culminando em reversão violenta quando compradores entram.", reliability:4 },
    { id:24, name:"Três Rios Únicos",              subtitle:"Três candles com longas sombras",                    type:"bullish",      image:"24.png", description:"Vela vermelha longa, vela vermelha pequena com sombra inferior longa, e vela verde.",                                                                                                        psychology:"Versão mais fraca mas válida do Morning Star. Mostra exaustão gradual da venda.", reliability:3 },
    { id:25, name:"Homem Enforcado",               subtitle:"Reversão de Baixa — aparece em tendência de alta",  type:"bearish",      image:"25.png", description:"Mesma forma do martelo mas aparece em tendência de alta.",                                                                                                                                      psychology:"Vendedores começam a pressionar o mercado. Alerta de que a tendência de alta pode estar perdendo força.", reliability:3 },
    { id:26, name:"Estrela Cadente",               subtitle:"Sombra superior longa em tendência de alta",         type:"bearish",      image:"26.png", description:"Vela com corpo pequeno na base e sombra superior longa (2–3x o corpo). Aparece em tendência de alta.",                                                                                     psychology:"Compradores tentam empurrar preços mais alto mas são rejeitados fortemente pelos vendedores.", reliability:3 },
    { id:27, name:"Engolfo de Baixa",              subtitle:"Candle vermelho engole o verde anterior",            type:"bearish",      image:"27.png", description:"Vela verde pequena seguida por vela vermelha maior que engloba completamente a primeira.",                                                                                                   psychology:"Vendedores assumem controle total, anulando todos os ganhos do dia anterior. Mudança de sentimento drástica.", reliability:4 },
    { id:28, name:"Nuvem Negra",                   subtitle:"Candle vermelho cobre mais de 50% do verde",         type:"bearish",      image:"28.png", description:"Vela verde longa seguida por vela vermelha que abre acima da máxima anterior mas fecha abaixo do meio da primeira.",                                                                       psychology:"Vendedores conseguem anular mais da metade dos ganhos do dia anterior, mostrando força significativa.", reliability:4 },
    { id:29, name:"Estrela da Noite",              subtitle:"Padrão de 3 candles — Reversão de baixa",            type:"bearish",      image:"29.png", description:"Vela verde longa, seguida por vela pequena com gap para cima, e vela vermelha longa que fecha no meio da primeira.",                                                                       psychology:"Transição da compra para indecisão e finalmente venda agressiva. Um dos padrões mais confiáveis de reversão de baixa.", reliability:5 },
    { id:30, name:"Três Corvos Negros",            subtitle:"Três candles de baixa consecutivos",                 type:"bearish",      image:"30.png", description:"Três velas vermelhas consecutivas com corpos longos, fechando progressivamente mais baixo.",                                                                                                 psychology:"Pressão vendedora sustentada e forte. Vendedores estão completamente no controle.", reliability:4 },
    { id:31, name:"Harami de Baixa",               subtitle:"Candle pequeno dentro do corpo do candle grande",   type:"bearish",      image:"31.png", description:"Vela verde grande seguida por vela vermelha pequena contida dentro do corpo da primeira.",                                                                                                  psychology:"A vela pequena indica que a pressão compradora está diminuindo e o mercado pode estar perdendo momentum.", reliability:3 },
    { id:32, name:"Doji Lápide",                   subtitle:"Doji com longa sombra superior",                    type:"bearish",      image:"32.png", description:"Doji com sombra superior longa e sem sombra inferior. Formato de 'T' invertido.",                                                                                                            psychology:"Compradores tentam empurrar preços para cima mas são completamente rejeitados. Forte sinal de reversão.", reliability:4 },
    { id:33, name:"Pinça de Topo",                 subtitle:"Duas velas com máximas iguais",                      type:"bearish",      image:"33.png", description:"Duas velas consecutivas com máximos idênticos. Primeira verde, segunda vermelha.",                                                                                                          psychology:"O mercado testa um nível de resistência duas vezes e é rejeitado, mostrando força vendedora.", reliability:3 },
    { id:34, name:"Kicker de Baixa",               subtitle:"Gap down seguido de forte queda",                    type:"bearish",      image:"34.png", description:"Vela verde seguida por gap de baixa e vela vermelha longa. Raro mas muito forte.",                                                                                                          psychology:"Mudança abrupta no sentimento. Vendedores assumem controle total do mercado.", reliability:5 },
    { id:35, name:"Marubozu de Baixa",             subtitle:"Candle vermelho sem sombras",                        type:"bearish",      image:"35.png", description:"Vela vermelha longa sem sombras, abrindo no máximo e fechando no mínimo.",                                                                                                                   psychology:"Vendedores dominam completamente a sessão desde a abertura até o fechamento.", reliability:4 },
    { id:36, name:"Bebê Abandonado de Baixa",      subtitle:"Doji com gaps — padrão raro",                        type:"bearish",      image:"36.png", description:"Vela verde, doji com gap para cima, e vela vermelha com gap para baixo.",                                                                                                                   psychology:"Extrema exaustão da compra seguida por reversão violenta. Padrão raro mas extremamente confiável.", reliability:5 },
    { id:37, name:"Três Interna de Baixa",         subtitle:"Padrão de confirmação de reversão",                  type:"bearish",      image:"37.png", description:"Harami de baixa seguido por terceira vela vermelha que fecha abaixo do mínimo da primeira vela.",                                                                                          psychology:"Confirmação do Harami de baixa. Vendedores confirmam controle do mercado.", reliability:4 },
    { id:38, name:"Três Métodos de Baixa",         subtitle:"Continuação de tendência de baixa",                  type:"continuation", image:"38.png", description:"Vela vermelha longa, três velas verdes pequenas, e vela vermelha final que fecha abaixo da primeira.",                                                                                    psychology:"Pausa na tendência de baixa onde compradores não conseguem reverter. Vendedores retomam controle.", reliability:4 },
    { id:39, name:"Colchão de Baixa",              subtitle:"Padrão de continuação com gap",                      type:"continuation", image:"39.png", description:"Vela vermelha longa, três velas verdes pequenas, e vela vermelha final com gap para baixo.",                                                                                              psychology:"Consolidação em tendência de baixa seguida por continuação da queda com momentum renovado.", reliability:4 },
    { id:40, name:"Contra-ataque de Baixa",        subtitle:"Dois candles fecham no mesmo preço",                 type:"bearish",      image:"40.png", description:"Vela verde longa seguida por vela vermelha que fecha exatamente no fechamento da vela anterior.",                                                                                          psychology:"Vendedores recuperam todas as perdas da sessão anterior, igualando a pressão compradora.", reliability:3 },
    { id:41, name:"Tri-Estrela de Baixa",          subtitle:"Três dojis consecutivos",                            type:"bearish",      image:"41.png", description:"Três dojis consecutivos em tendência de alta, indicando exaustão e potencial reversão.",                                                                                                   psychology:"Extrema indecisão em topo de mercado. Compradores e vendedores em equilíbrio antes da queda.", reliability:3 },
    { id:42, name:"Deliberação",                   subtitle:"Enfraquecimento gradual da tendência",               type:"bearish",      image:"42.png", description:"Duas velas verdes longas seguidas por terceira vela verde pequena com sombra superior longa.",                                                                                             psychology:"O momentum de alta está desacelerando. O mercado está 'deliberando' antes de potencial reversão.", reliability:3 },
    { id:43, name:"Bloqueio de Avanço",            subtitle:"Compradores perdendo força",                         type:"bearish",      image:"43.png", description:"Três velas verdes consecutivas com corpos progressivamente menores, indicando fraqueza.",                                                                                                 psychology:"Compradores tentam empurrar preço mais alto mas perdem momentum a cada tentativa.", reliability:3 }
];

// ── TAB SWITCHING ──
function switchTab(tabName, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    else document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
    document.getElementById('tab-' + tabName).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // SMC iframe: ajuste de altura dinâmica
    if (tabName === 'smc') {
        const iframe = document.getElementById('smc-iframe');
        if (iframe) {
            // Tenta ajustar altura ao conteúdo após carregar
            iframe.onload = function() {
                try {
                    const body = iframe.contentDocument.body;
                    const html = iframe.contentDocument.documentElement;
                    const h = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight);
                    iframe.style.height = h + 'px';
                } catch(e) {
                    // Cross-origin fallback: usa viewport alto
                    iframe.style.height = Math.max(window.innerHeight * 2, 1200) + 'px';
                }
            };
            // Força trigger se já carregado
            if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                iframe.onload();
            }
        }
    }
}

// ── RENDER PATTERNS ──
function renderPatterns(filter) {
    const grid = document.getElementById('patternsGrid');
    const highlights = document.getElementById('highlightsArea');
    grid.innerHTML = '';
    highlights.innerHTML = '';

    let items = patterns;
    if (filter === 'top5') {
        const top = patterns.filter(p => p.reliability === 5);
        const cats = { bullish: top.filter(p=>p.type==='bullish'), bearish: top.filter(p=>p.type==='bearish'), continuation: top.filter(p=>p.type==='continuation') };
        highlights.innerHTML = `
        <div class="highlights-wrap">
          <div class="highlights-box">
            <div class="highlights-title">⭐ Padrões 5 Estrelas — Os Mais Confiáveis</div>
            <div class="highlights-grid">
              ${cats.bullish.length  ? `<div class="highlight-item" style="border-left:3px solid #10b981;"><span class="highlight-icon">🟢</span><div><h4>Reversão Alta (${cats.bullish.length})</h4><p>${cats.bullish.map(p=>p.name).join(', ')}</p></div></div>` : ''}
              ${cats.bearish.length  ? `<div class="highlight-item" style="border-left:3px solid #ef4444;"><span class="highlight-icon">🔴</span><div><h4>Reversão Baixa (${cats.bearish.length})</h4><p>${cats.bearish.map(p=>p.name).join(', ')}</p></div></div>` : ''}
              ${cats.continuation.length ? `<div class="highlight-item" style="border-left:3px solid #f59e0b;"><span class="highlight-icon">🟡</span><div><h4>Continuação (${cats.continuation.length})</h4><p>${cats.continuation.map(p=>p.name).join(', ')}</p></div></div>` : ''}
            </div>
          </div>
        </div>`;
        items = top;
    } else if (filter !== 'all') {
        items = patterns.filter(p => p.type === filter);
    }

    items.forEach((p, i) => {
        const stars   = '★'.repeat(p.reliability) + '☆'.repeat(5-p.reliability);
        const relText = { 5:'Muito Alta', 4:'Alta', 3:'Média', 2:'Baixa' }[p.reliability] || 'Média';
        const typeLabel = { bullish:'Reversão Alta', bearish:'Reversão Baixa', continuation:'Continuação' }[p.type];
        const badge5 = p.reliability === 5 ? '<div class="top-badge">⭐ 5★</div>' : '';
        const card = document.createElement('div');
        card.className = `pattern-card ${p.type}`;
        card.style.animationDelay = `${Math.min(i * 0.04, 0.5)}s`;
        card.innerHTML = `
            ${badge5}
            <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
            <div class="card-body">
                <div class="card-meta">
                    <span class="card-num">#${String(p.id).padStart(2,'0')}</span>
                    <span class="card-badge">${typeLabel}</span>
                </div>
                <div class="card-name">${p.name}</div>
                <div class="card-sub">${p.subtitle}</div>
                <div class="card-desc">${p.description}</div>
                <div class="psych-box">
                    <div class="psych-label">🧠 Psicologia do Mercado</div>
                    <div class="psych-text">${p.psychology}</div>
                </div>
                <div class="card-footer">
                    <span class="stars">${stars}</span>
                    <span class="reliability-label">Confiabilidade: ${relText}</span>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

// ── FILTER PATTERNS ──
function filterPatterns(filter, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPatterns(filter);
}

// ── MODAL ──
const modals = {
    about: `<h3 style="font-size:1.3rem;font-weight:800;color:#fff;margin-bottom:14px;">📊 Price Action Academy</h3>
            <p style="color:#94a3b8;line-height:1.7;">Desenvolvido por Souza Produções. Educação financeira de qualidade para traders de todos os níveis.<br><br>Inclui 43 padrões de candlestick, padrões exclusivos do WINFUT e o guia completo de FVG & Order Blocks da metodologia ICT.</p>
            <p style="color:#f5c842;font-size:0.82rem;margin-top:14px;font-weight:700;">Versão 3.0 | Fevereiro 2026</p>`,
    contact: `<h3 style="font-size:1.3rem;font-weight:800;color:#fff;margin-bottom:14px;">📬 Contato</h3>
              <p style="color:#94a3b8;line-height:1.9;">Email: contato@souzaproducoes.com.br<br>Instagram: @souzaproducoes<br>YouTube: Souza Produções<br>GitHub: souzaproducoes</p>`,
    disclaimer: `<h3 style="font-size:1.3rem;font-weight:800;color:#ef4444;margin-bottom:14px;">⚠️ Disclaimer</h3>
                 <p style="color:#94a3b8;line-height:1.7;">Este material tem caráter educativo e informativo. Não constitui recomendação de compra ou venda de ativos financeiros. O trading envolve riscos substanciais e pode resultar em perdas financeiras significativas. Consulte um profissional credenciado antes de investir.</p>`
};

function showModal(key) {
    document.getElementById('modalContent').innerHTML = modals[key] || '';
    document.getElementById('modal').style.display = 'flex';
}

function closeModal(e) {
    if (!e || e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

// ── PROGRESS BAR ON SCROLL ──
window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
    // Back to top visibility
    const bt = document.getElementById('backTop');
    if (window.scrollY > 400) bt.classList.add('visible');
    else bt.classList.remove('visible');
});

// ── SEARCH PATTERNS ──
function searchPatterns(q) {
    if (!q.trim()) { renderPatterns('all'); return; }
    const query = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const filtered = patterns.filter(p => {
        const name = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const sub  = p.subtitle.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const desc = p.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return name.includes(query) || sub.includes(query) || desc.includes(query);
    });
    const grid = document.getElementById('patternsGrid');
    const highlights = document.getElementById('highlightsArea');
    highlights.innerHTML = '';
    grid.innerHTML = '';
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8;">
            <div style="font-size:3rem;margin-bottom:14px;">🔍</div>
            <p style="font-size:1.1rem;">Nenhum padrão encontrado para "<strong style="color:#fff">${q}</strong>"</p>
            <p style="font-size:0.88rem;margin-top:8px;">Tente: Martelo, Engolfo, Doji, Harami...</p>
        </div>`;
        return;
    }
    filtered.forEach((p, i) => {
        const stars = '★'.repeat(p.reliability) + '☆'.repeat(5-p.reliability);
        const relText = { 5:'Muito Alta', 4:'Alta', 3:'Média', 2:'Baixa' }[p.reliability] || 'Média';
        const typeLabel = { bullish:'Reversão Alta', bearish:'Reversão Baixa', continuation:'Continuação' }[p.type];
        const badge5 = p.reliability === 5 ? '<div class="top-badge">⭐ 5★</div>' : '';
        const card = document.createElement('div');
        card.className = `pattern-card ${p.type}`;
        card.style.animationDelay = `${Math.min(i * 0.04, 0.5)}s`;
        card.innerHTML = `
            ${badge5}
            <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
            <div class="card-body">
                <div class="card-meta">
                    <span class="card-num">#${String(p.id).padStart(2,'0')}</span>
                    <span class="card-badge">${typeLabel}</span>
                </div>
                <div class="card-name">${p.name}</div>
                <div class="card-sub">${p.subtitle}</div>
                <div class="card-desc">${p.description}</div>
                <div class="psych-box">
                    <div class="psych-label">🧠 Psicologia do Mercado</div>
                    <div class="psych-text">${p.psychology}</div>
                </div>
                <div class="card-footer">
                    <span class="stars">${stars}</span>
                    <span class="reliability-label">Confiabilidade: ${relText}</span>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

// ── QUIZ ──
let quizPool = [], quizIndex = 0, quizScore = 0, quizTotal = 10;

function startQuiz() {
    quizPool = [...patterns].sort(() => Math.random() - 0.5).slice(0, quizTotal);
    quizIndex = 0; quizScore = 0;
    document.getElementById('quizModal').style.display = 'flex';
    renderQuestion();
}

function renderQuestion() {
    const qm = document.getElementById('quizContent');
    if (quizIndex >= quizPool.length) {
        const pct = Math.round((quizScore/quizTotal)*100);
        const msg = pct >= 80 ? '🏆 Excelente!' : pct >= 60 ? '👍 Bom trabalho!' : '📚 Continue estudando!';
        qm.innerHTML = `
            <div style="text-align:center">
                <div style="font-size:4rem;margin-bottom:16px">${msg.split(' ')[0]}</div>
                <h3 style="font-size:1.5rem;font-weight:900;color:#fff;margin-bottom:8px">${msg.slice(2)}</h3>
                <p style="color:#94a3b8;margin-bottom:24px">Você acertou <strong style="color:#f5c842;font-size:1.4rem">${quizScore}/${quizTotal}</strong> — ${pct}%</p>
                <div style="background:rgba(245,200,66,0.06);border:1px solid rgba(245,200,66,0.2);border-radius:14px;padding:20px;margin-bottom:24px">
                    <div style="height:10px;background:#172038;border-radius:10px;overflow:hidden">
                        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#10b981,#f5c842);border-radius:10px;transition:width 1s ease"></div>
                    </div>
                </div>
                <button onclick="startQuiz()" style="background:linear-gradient(135deg,#3b82f6,#a855f7);color:#fff;border:none;padding:13px 28px;border-radius:12px;font-weight:700;cursor:pointer;font-size:0.95rem;margin-right:10px">🔄 Jogar Novamente</button>
                <button onclick="closeQuizModal()" style="background:rgba(255,255,255,0.06);color:#94a3b8;border:1px solid rgba(255,255,255,0.1);padding:13px 28px;border-radius:12px;font-weight:700;cursor:pointer;font-size:0.95rem">Fechar</button>
            </div>`;
        return;
    }
    const p = quizPool[quizIndex];
    const opts = [p, ...patterns.filter(x=>x.id!==p.id).sort(()=>Math.random()-0.5).slice(0,3)].sort(()=>Math.random()-0.5);
    qm.innerHTML = `
        <div style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:0.82rem;color:#94a3b8;font-weight:700">Pergunta ${quizIndex+1} de ${quizTotal}</span>
            <span style="font-size:0.82rem;color:#f5c842;font-weight:700">✅ ${quizScore} acertos</span>
        </div>
        <div style="background:#172038;border-radius:12px;height:6px;margin-bottom:24px;overflow:hidden">
            <div style="height:100%;width:${(quizIndex/quizTotal)*100}%;background:linear-gradient(90deg,#3b82f6,#a855f7);border-radius:12px;transition:width 0.4s"></div>
        </div>
        <p style="color:#94a3b8;font-size:0.88rem;margin-bottom:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px">Qual padrão de candlestick está representado?</p>
        <img src="${p.image}" alt="Padrão de candlestick" style="width:100%;max-height:200px;object-fit:contain;background:#080d18;border-radius:12px;padding:12px;margin-bottom:20px;display:block">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px" id="quizOpts">
            ${opts.map(o=>`<button onclick="checkAnswer(${o.id},${p.id},this)" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#f1f5f9;padding:13px 14px;border-radius:10px;cursor:pointer;font-size:0.88rem;font-weight:600;text-align:left;transition:all 0.2s;line-height:1.4">${o.name}</button>`).join('')}
        </div>`;
}

function checkAnswer(selected, correct, btn) {
    document.querySelectorAll('#quizOpts button').forEach(b => b.disabled = true);
    if (selected === correct) {
        quizScore++;
        btn.style.background = 'rgba(16,185,129,0.2)';
        btn.style.borderColor = '#10b981';
        btn.style.color = '#10b981';
        btn.textContent = '✓ ' + btn.textContent;
    } else {
        btn.style.background = 'rgba(239,68,68,0.2)';
        btn.style.borderColor = '#ef4444';
        btn.style.color = '#ef4444';
        btn.textContent = '✗ ' + btn.textContent;
        document.querySelectorAll('#quizOpts button').forEach(b => {
            const p = patterns.find(p => p.name === b.textContent.replace('✗ ',''));
            if (p && p.id === correct) {
                b.style.background = 'rgba(16,185,129,0.2)';
                b.style.borderColor = '#10b981';
                b.style.color = '#10b981';
            }
        });
    }
    setTimeout(() => { quizIndex++; renderQuestion(); }, 1200);
}

function closeQuizModal(e) {
    if (!e || e.target === document.getElementById('quizModal')) {
        document.getElementById('quizModal').style.display = 'none';
    }
}

// ── INIT ──
renderPatterns('all');