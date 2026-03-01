// ══════════════════════════════════════════════════════════════════
//  PRICE ACTION ACADEMY — AI CHATBOT  v1.0
//  Powered by Groq API (llama-3.3-70b-versatile)
//
//  ✅ COMO CONFIGURAR:
//  1. Acesse https://console.groq.com e crie uma conta gratuita
//  2. Vá em "API Keys" → "Create API Key"
//  3. Copie a URL do Worker gerada e cole em GROQ_PROXY_URL abaixo
//  4. Salve o arquivo e faça upload no GitHub junto com os outros
//  5. Adicione no final do <body> do index.html:
//     <script src="chatbot-ia.js"></script>
// ══════════════════════════════════════════════════════════════════

// ── URL do seu Cloudflare Worker (proxy seguro) ──
// Após criar o Worker, cole a URL aqui:
const GROQ_PROXY_URL = 'https://isis-ai-site.vfshomevideo.workers.dev/';

// ── SYSTEM PROMPT — especialista em Price Action / Trading ──
const SYSTEM_PROMPT = `Você é a Isia, AI Agent educacional da Souza Produções.

IDENTIDADE:
- Nome: Isia (Inteligência Souza IA)
- Empresa: Souza Produções — referência em educação de Price Action no Brasil
- Tom: educado, inteligente, profissional, atencioso e extremamente acolhedor
- Missão: educar traders brasileiros com excelência metodológica e rigor técnico

Ao se apresentar pela primeira vez, diga: 
"Olá! Sou a Isia, AI Agent da Souza Produções. É um prazer recebê-lo(a)!"

ESPECIALIDADES EDUCACIONAIS:
- 43 padrões de Candlestick (Martelo, Engolfo, Doji, Estrela da Manhã, etc.)
- Padrões exclusivos do WINFUT (Mini-índice B3): Gap e Reversão, Teste MM, Movimento Direto
- ICT Metodologia: FVG, Order Blocks, BOS, CHoCH, Kill Zones, Premium/Discount
- Alinhamento de Fluxo: análise multi-timeframe e viés direcional
- Smart Money Concepts: liquidez, estrutura, CTZ, Market Maker Model

REGRAS INVIOLÁVEIS:
1. Responda SEMPRE em português brasileiro formal e claro
2. Seja extremamente profissional, didático e preciso em todas as respostas
3. Use emojis com moderação para enriquecer o aprendizado (📊 📈 ✅ 💡 📚)
4. Limite respostas a ~200 palavras para leitura confortável em mobile
5. Se perguntarem sobre temas fora de Price Action ou educação financeira, redirecione com cortesia e elegância
6. JAMAIS forneça indicações de operações, sinais de trading ou recomendações de investimentos
7. JAMAIS sugira comprar, vender ou operar qualquer ativo financeiro
8. JAMAIS faça projeções de preços ou resultados financeiros
9. Sempre que relevante, reforce: "Este conteúdo é exclusivamente educacional e não constitui recomendação de investimento."
10. Ao final de respostas complexas, ofereça aprofundamento: "Posso detalhar algum ponto específico?"

Você representa a excelência educacional da Souza Produções. Trate cada aluno com respeito, paciência e dedicação.`;

// ── ESTADO DO CHAT ──
let chatHistory = [];
let isOpen = false;
let isTyping = false;

// ── INJETAR CSS ──
(function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* ── CHATBOT CONTAINER ── */
    #pa-chatbot-wrap * { box-sizing: border-box; font-family: 'Inter', system-ui, sans-serif; }

    #pa-chat-btn {
        position: fixed;
        bottom: 28px;
        left: 28px;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #a855f7);
        border: none;
        cursor: pointer;
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(59,130,246,0.5);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        color: white;
        font-size: 1.5rem;
    }
    #pa-chat-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 28px rgba(59,130,246,0.7);
    }
    #pa-chat-btn .chat-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: #ef4444;
        color: white;
        font-size: 0.62rem;
        font-weight: 700;
        padding: 2px 5px;
        border-radius: 10px;
        line-height: 1;
        white-space: nowrap;
    }

    #pa-chat-window {
        position: fixed;
        bottom: 100px;
        left: 28px;
        width: 360px;
        max-width: calc(100vw - 40px);
        height: 520px;
        max-height: calc(100vh - 120px);
        background: #0a1628;
        border: 1px solid rgba(59,130,246,0.25);
        border-radius: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
        transform: translateY(20px) scale(0.95);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    #pa-chat-window.open {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: all;
    }

    /* ── HEADER ── */
    #pa-chat-header {
        background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(168,85,247,0.15));
        border-bottom: 1px solid rgba(255,255,255,0.08);
        padding: 14px 16px;
        border-radius: 20px 20px 0 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .chat-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #a855f7);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        flex-shrink: 0;
    }
    .chat-header-info { flex: 1; }
    .chat-header-name {
        font-weight: 700;
        font-size: 0.88rem;
        color: #f1f5f9;
        letter-spacing: 0.2px;
    }
    .chat-header-status {
        font-size: 0.72rem;
        color: #10b981;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .chat-header-status::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #10b981;
        animation: pulse-green 2s infinite;
    }
    @keyframes pulse-green {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
    }
    #pa-chat-close {
        background: none;
        border: none;
        color: #64748b;
        cursor: pointer;
        font-size: 1.1rem;
        padding: 4px;
        border-radius: 6px;
        transition: color 0.2s, background 0.2s;
    }
    #pa-chat-close:hover { color: #f1f5f9; background: rgba(255,255,255,0.08); }

    /* ── MESSAGES ── */
    #pa-chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.1) transparent;
    }
    #pa-chat-messages::-webkit-scrollbar { width: 4px; }
    #pa-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

    .chat-msg {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        animation: msgIn 0.25s ease;
    }
    @keyframes msgIn {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    .chat-msg.user { flex-direction: row-reverse; }

    .msg-avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
    }
    .msg-avatar.bot {
        background: linear-gradient(135deg, #3b82f6, #a855f7);
        color: white;
    }
    .msg-avatar.user {
        background: rgba(255,255,255,0.1);
        color: #94a3b8;
    }

    .msg-bubble {
        max-width: 80%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 0.83rem;
        line-height: 1.55;
        word-break: break-word;
    }
    .chat-msg.bot .msg-bubble {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        color: #e2e8f0;
        border-bottom-left-radius: 4px;
    }
    .chat-msg.user .msg-bubble {
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        color: white;
        border-bottom-right-radius: 4px;
    }

    /* ── TYPING INDICATOR ── */
    .typing-indicator {
        display: flex;
        gap: 4px;
        padding: 12px 14px;
        align-items: center;
    }
    .typing-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #3b82f6;
        animation: typingBounce 1.2s infinite;
    }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typingBounce {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
        30% { transform: translateY(-6px); opacity: 1; }
    }

    /* ── QUICK SUGGESTIONS ── */
    #pa-chat-suggestions {
        padding: 0 14px 10px;
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .suggestion-chip {
        background: rgba(59,130,246,0.1);
        border: 1px solid rgba(59,130,246,0.25);
        color: #60a5fa;
        font-size: 0.72rem;
        padding: 5px 10px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
    }
    .suggestion-chip:hover {
        background: rgba(59,130,246,0.2);
        border-color: rgba(59,130,246,0.5);
        color: #93c5fd;
    }

    /* ── INPUT AREA ── */
    #pa-chat-input-wrap {
        padding: 12px 14px;
        border-top: 1px solid rgba(255,255,255,0.07);
        display: flex;
        gap: 8px;
        align-items: flex-end;
    }
    #pa-chat-input {
        flex: 1;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        color: #f1f5f9;
        font-size: 0.83rem;
        padding: 10px 14px;
        resize: none;
        outline: none;
        font-family: inherit;
        max-height: 90px;
        min-height: 40px;
        line-height: 1.4;
        transition: border-color 0.2s;
    }
    #pa-chat-input::placeholder { color: #475569; }
    #pa-chat-input:focus { border-color: rgba(59,130,246,0.5); }

    #pa-chat-send {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, opacity 0.2s;
        flex-shrink: 0;
    }
    #pa-chat-send:hover { transform: scale(1.05); }
    #pa-chat-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    #pa-chat-send svg { width: 18px; height: 18px; fill: white; }

    /* ── API KEY WARNING ── */
    #pa-api-warning {
        background: rgba(245,158,11,0.1);
        border: 1px solid rgba(245,158,11,0.3);
        border-radius: 10px;
        padding: 10px 12px;
        margin: 10px 14px 0;
        font-size: 0.75rem;
        color: #fbbf24;
        display: none;
    }
    #pa-api-warning a { color: #fbbf24; font-weight: 700; }

    @media (max-width: 480px) {
        #pa-chat-window { left: 10px; right: 10px; width: auto; }
        #pa-chat-btn { bottom: 20px; left: 20px; }
    }
    `;
    document.head.appendChild(style);
})();

// ── CRIAR HTML DO CHATBOT ──
(function createHTML() {
    const wrap = document.createElement('div');
    wrap.id = 'pa-chatbot-wrap';
    wrap.innerHTML = `
    <!-- Botão flutuante -->
    <button id="pa-chat-btn" onclick="paChatToggle()" title="Falar com Isia — AI Agent Souza Produções">
        <span id="pa-chat-btn-icon">📊</span>
        <span class="chat-badge">IA</span>
    </button>

    <!-- Janela do chat -->
    <div id="pa-chat-window">
        <!-- Header -->
        <div id="pa-chat-header">
            <div class="chat-avatar">📊</div>
            <div class="chat-header-info">
                <div class="chat-header-name">Isia — AI Agent · Souza Produções</div>
                <div class="chat-header-status">Online · Agente Educacional IA</div>
            </div>
            <button id="pa-chat-close" onclick="paChatToggle()" title="Fechar">✕</button>
        </div>

        <!-- Aviso API key -->
        <div id="pa-api-warning">
            ⚠️ Worker não configurado. Siga o passo a passo em <strong>groq-proxy-worker.js</strong> para ativar a Isia.
        </div>

        <!-- Mensagens -->
        <div id="pa-chat-messages"></div>

        <!-- Sugestões rápidas -->
        <div id="pa-chat-suggestions">
            <button class="suggestion-chip" onclick="paSendSuggestion('O que é um Martelo?')">🔨 Martelo</button>
            <button class="suggestion-chip" onclick="paSendSuggestion('Explique FVG')">📐 FVG</button>
            <button class="suggestion-chip" onclick="paSendSuggestion('Como usar Kill Zones no WINFUT?')">🎯 Kill Zones</button>
            <button class="suggestion-chip" onclick="paSendSuggestion('O que é Smart Money?')">💰 Smart Money</button>
        </div>

        <!-- Input -->
        <div id="pa-chat-input-wrap">
            <textarea 
                id="pa-chat-input" 
                placeholder="Pergunte à Isia sobre Candlesticks, WINFUT, ICT, SMC..." 
                rows="1"
                onkeydown="paChatKeydown(event)"
                oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'"
            ></textarea>
            <button id="pa-chat-send" onclick="paSendMessage()" title="Enviar">
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
        </div>
    </div>
    `;
    document.body.appendChild(wrap);

    // Verificar API key
    if (!GROQ_PROXY_URL || GROQ_PROXY_URL.includes('SEU-USUARIO')) {
        document.getElementById('pa-api-warning').style.display = 'block';
    }

    // Mensagem de boas-vindas
    setTimeout(() => {
        paAddMessage('bot', '👋 Olá! Sou a **Isia**, AI Agent da **Souza Produções**.\n\nEstou aqui para apoiar sua jornada educacional em Price Action — Candlesticks, WINFUT, ICT, Smart Money e muito mais.\n\nComo posso contribuir com seu aprendizado hoje? 📊');
    }, 300);
})();

// ── TOGGLE CHAT ──
function paChatToggle() {
    isOpen = !isOpen;
    const win = document.getElementById('pa-chat-window');
    const icon = document.getElementById('pa-chat-btn-icon');

    if (isOpen) {
        win.classList.add('open');
        icon.textContent = '✕';
        document.getElementById('pa-chat-input').focus();
    } else {
        win.classList.remove('open');
        icon.textContent = '📊';
    }
}

// ── ADICIONAR MENSAGEM ──
function paAddMessage(role, text) {
    const msgs = document.getElementById('pa-chat-messages');

    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;

    const avatarText = role === 'bot' ? '🤖' : '👤';
    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

    div.innerHTML = `
        <div class="msg-avatar ${role}">${avatarText}</div>
        <div class="msg-bubble">${formattedText}</div>
    `;

    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
}

// ── TYPING INDICATOR ──
function paShowTyping() {
    const msgs = document.getElementById('pa-chat-messages');
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.id = 'pa-typing';
    div.innerHTML = `
        <div class="msg-avatar bot">🤖</div>
        <div class="msg-bubble">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}

function paHideTyping() {
    const t = document.getElementById('pa-typing');
    if (t) t.remove();
}

// ── ENVIAR SUGESTÃO ──
function paSendSuggestion(text) {
    document.getElementById('pa-chat-input').value = text;
    paSendMessage();
}

// ── KEYDOWN (Enter envia, Shift+Enter quebra linha) ──
function paChatKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        paSendMessage();
    }
}

// ── ENVIAR MENSAGEM ──
async function paSendMessage() {
    const input = document.getElementById('pa-chat-input');
    const sendBtn = document.getElementById('pa-chat-send');
    const text = input.value.trim();

    if (!text || isTyping) return;

    // Verificar API key
    if (!GROQ_PROXY_URL || GROQ_PROXY_URL.includes('SEU-USUARIO')) {
        paAddMessage('bot', '⚠️ Configure a URL do Cloudflare Worker em `chatbot-ia.js` na variável **GROQ_PROXY_URL**.');
        return;
    }

    // Adicionar mensagem do usuário
    paAddMessage('user', text);
    chatHistory.push({ role: 'user', content: text });

    // Limpar input
    input.value = '';
    input.style.height = 'auto';

    // Mostrar typing
    isTyping = true;
    sendBtn.disabled = true;
    paShowTyping();

    // Esconder sugestões após primeira mensagem
    document.getElementById('pa-chat-suggestions').style.display = 'none';

    try {
        // ── Chamada segura via Cloudflare Worker (chave protegida no servidor) ──
        const response = await fetch(GROQ_PROXY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Sem Authorization aqui — a chave fica segura no Worker!
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...chatHistory
                ],
                max_tokens: 400,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || `Erro ${response.status}`);
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;

        chatHistory.push({ role: 'assistant', content: reply });

        paHideTyping();
        paAddMessage('bot', reply);

    } catch (error) {
        paHideTyping();
        console.error('Groq API error:', error);

        if (error.message.includes('401') || error.message.includes('invalid_api_key')) {
            paAddMessage('bot', '❌ **Erro de autenticação.** Verifique a variável GROQ_API_KEY no Cloudflare Worker.');
        } else if (error.message.includes('429')) {
            paAddMessage('bot', '⏳ Muitas requisições. Aguarde alguns segundos e tente novamente.');
        } else {
            paAddMessage('bot', `❌ Erro ao conectar com a IA: ${error.message}\n\nVerifique sua conexão com a internet.`);
        }
    } finally {
        isTyping = false;
        sendBtn.disabled = false;
        input.focus();
    }
}

console.log('✅ Isia AI Agent (Souza Produções) carregada! Configure GROQ_PROXY_URL em chatbot-ia.js');
