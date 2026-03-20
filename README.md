# Price Action Academy — Souza Produções v7.0

Site educacional gratuito sobre Price Action, Candlesticks, WINFUT, ICT e Smart Money Concepts (SMC).

🔗 **Site ao vivo:** [https://souzaproducoes.github.io/Price_Action](https://souzaproducoes.github.io/Price_Action)

---

## 📁 Estrutura de Arquivos — v7.0 (Modular · 6 Abas · IA via Vercel)

```
Price_Action/                         ← Repositório GitHub Pages (site público)
├── index.html                        ← Página principal (6 abas via iframe)
├── tres-candles.html                 ← Módulo: Padrão dos 3 Candles (Negação de Liquidez)
├── smart-money-concepts.html         ← Módulo: Smart Money Concepts
├── alinhamento-de-fluxo.html         ← Módulo: Alinhamento de Fluxo
├── ICT_Estudo_Avancado.html          ← Módulo: ICT Estudo Avançado
├── winfut.html                       ← Módulo: Padrões WINFUT
├── candlesticks.html                 ← Módulo: 43 Padrões de Candlestick
├── style.css                         ← Todos os estilos compartilhados
├── app.js                            ← JS do módulo Candlesticks (quiz, filtros)
├── app-v5.js                         ← JS do index principal (troca de iframes)
├── chatbot-ia.js                     ← JS do chatbot IA ← ATUALIZADO v7.0
├── quiz-engine.js                    ← JS do motor de quiz
├── favicon.svg                       ← Ícone do site
├── sitemap.xml                       ← Mapa do site
├── robots.txt                        ← SEO robots
├── logo-souza.png                    ← Logo
└── 1.png … 43.png                    ← Imagens dos padrões de candlestick

price-action-vercel/                  ← Repositório Vercel (proxy seguro da API) ← NOVO v7.0
├── api/
│   └── chat.js                       ← Serverless function — chama a API do Gemini
└── vercel.json                       ← Configuração do Vercel
```

---

## 🗂️ Arquitetura v7.0 — Modular + IA

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              index.html                                      │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │  Topbar com 6 abas — ordem cronológica invertida (mais novo primeiro)  │  │
│  │  [3 Candles][Smart Money][Alinhamento][ICT][WINFUT][Candlesticks]      │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  Cada aba carrega via <iframe> o HTML do módulo correspondente               │
│                                                                               │
│  style.css ← estilos compartilhados     app.js ← quiz candlesticks          │
│  app-v5.js ← troca de iframes           chatbot-ia.js ← chatbot Isia        │
└──────────────────────────────────────────────────────────────────────────────┘
                              │ fetch POST
                              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│              Vercel Serverless Function (price-action-vercel)                │
│                        /api/chat.js                                          │
│   Recebe mensagens → injeta GEMINI_API_KEY → repassa ao Gemini              │
│   A chave da API NUNCA fica exposta no repositório público                  │
└──────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    Google Gemini API
                  (gemini-2.0-flash · gratuito)
```

### Conteúdo por módulo — ordem das abas

| Posição | Aba | Arquivo | Conteúdo | Status |
|:---:|---|---|---|:---:|
| 1 | **3 Candles** | `tres-candles.html` | Padrão dos 3 Candles: Alvo, Sweep e Negação de Liquidez (SMC) | ✅ |
| 2 | **Smart Money** | `smart-money-concepts.html` | SMC: liquidez, estrutura, CTZ, Kill Zones | ✅ |
| 3 | **Alinhamento de Fluxo** | `alinhamento-de-fluxo.html` | Alinhamento de fluxo de mercado multi-timeframe | ✅ |
| 4 | **ICT Metodologia** | `ICT_Estudo_Avancado.html` | Metodologia ICT avançada: FVG, OB, BOS, CHoCH | ✅ |
| 5 | **WINFUT** | `winfut.html` | Padrões exclusivos do WIN$, timeline, checklist | ✅ |
| 6 | **Candlesticks** | `candlesticks.html` | 43 padrões com filtros, busca e quiz interativo | ✅ |

---

## ✅ Arquivos atualizados nesta versão (v7.0)

| Arquivo | Repositório | Por quê atualizar |
|---|---|---|
| `chatbot-ia.js` | `Price_Action` | Migração do Cloudflare Worker (Groq) para Vercel (Gemini) · v2.0 |
| `api/chat.js` | `price-action-vercel` | **Novo** — serverless function proxy da API Gemini |
| `vercel.json` | `price-action-vercel` | **Novo** — configuração de rotas do Vercel |
| `README.md` | `Price_Action` | Este arquivo — versão 7.0 |

## 🔒 Arquivos que NÃO devem ser alterados

| Arquivo | Motivo |
|---|---|
| `index.html` | Página principal estável |
| `tres-candles.html` | Módulo estável |
| `smart-money-concepts.html` | Módulo estável |
| `alinhamento-de-fluxo.html` | Módulo estável |
| `ICT_Estudo_Avancado.html` | Módulo estável |
| `winfut.html` | Módulo estável |
| `candlesticks.html` | Módulo estável |
| `app-v5.js` | Compatível com 6 abas sem alteração |
| `app.js` | Usado exclusivamente pelo módulo candlesticks |
| `quiz-engine.js` | Motor de quiz estável |
| `style.css` | Estilos compatíveis com todos os módulos |
| `sitemap.xml` | SEO estável |
| `robots.txt` | SEO estável |
| `favicon.svg` | Mantido |
| `logo-souza.png` | Mantido |
| `1.png … 43.png` | Mantidos |

---

## 🚀 Como publicar — v7.0

### Pré-requisito único: configurar o Vercel (uma única vez)

1. Crie a chave Gemini gratuita em [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Crie um repositório `price-action-vercel` no GitHub e faça upload de `api/chat.js` e `vercel.json`
3. Acesse [vercel.com](https://vercel.com) → importe o repositório → Settings → Environment Variables → adicione `GEMINI_API_KEY` com sua chave → Redeploy
4. Copie a URL gerada (ex: `https://price-action-vercel.vercel.app`)
5. No `chatbot-ia.js`, substitua `SEU-PROJETO` pela URL real na variável `VERCEL_API_URL`

> Guia completo com todos os passos detalhados no arquivo `DEPLOY.md` do repositório `price-action-vercel`.

### Atualizar o site (GitHub Pages)

**Opção A — Upload direto pelo navegador**

1. Acesse [github.com](https://github.com) e vá ao repositório `Price_Action`
2. Clique em **"Add file" → "Upload files"**
3. Faça upload do único arquivo atualizado:
   - `chatbot-ia.js`
4. Clique em **"Commit changes"**
5. Aguarde ~1 minuto — a Isia estará ativa com Gemini

**Opção B — Via Git no terminal**

```bash
cd Price_Action
git add chatbot-ia.js README.md
git commit -m "feat: v7.0 — chatbot Isia migrado para Gemini via Vercel"
git push origin main
```

---

## 🆓 Custos — tudo gratuito

| Serviço | Plano gratuito |
|---|---|
| GitHub Pages | Gratuito (repositório público) |
| Vercel | Gratuito (100GB bandwidth/mês, serverless functions ilimitadas) |
| Gemini API | Gratuito (gemini-2.0-flash: 1.500 req/dia · 1M tokens/min) |

---

## 📦 Histórico de versões

| Versão | Data | O que mudou |
|---|---|---|
| **v7.0** | Mar 2026 | Chatbot Isia migrado para Gemini (Google AI) via Vercel Serverless · chave de API 100% segura · custo zero |
| v6.0 | Mar 2026 | Módulo "Padrão dos 3 Candles" · 6 abas · ordem cronológica invertida · SEO Schema.org aprimorado |
| v5.0 | Fev 2026 | Arquitetura modular com 5 abas via iframe · `app-v5.js` · `chatbot-ia.js` com Groq/Cloudflare Worker |
| v4.x | 2025 | Módulos ICT, Alinhamento de Fluxo e Smart Money |
| v3.x | 2025 | WINFUT adicionado |
| v1–2 | 2025 | Candlesticks com 43 padrões, quiz e filtros |

---

## 🔍 SEO — O que está configurado

- `<meta description>` com palavras-chave de todos os 6 módulos
- `<meta keywords>` expandido com termos de SMC e 3 Candles
- **Open Graph** e **Twitter Card** para compartilhamento em redes sociais
- **Schema.org** `EducationalOrganization` + `Course` com todos os módulos listados como `CourseInstance`
- `sitemap.xml` com 7 URLs e prioridade decrescente
- `robots.txt` apontando para o sitemap
- `canonical` definido para a URL correta do GitHub Pages
- `aria` roles e `alt` texts em todas as imagens e botões

---

## 📬 Contato

- Instagram: [@souza.producoes.2012](https://www.instagram.com/souza.producoes.2012)
- Facebook: [Souza.Producoes.2012](https://www.facebook.com/Souza.Producoes.2012)
- YouTube: [@vfshomevideo](https://www.youtube.com/@vfshomevideo)

---

*Versão 7.0 — Março 2026 | Souza Produções*
