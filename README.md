# Price Action Academy — Souza Produções v5.0

Site educacional gratuito sobre Price Action, Candlesticks, WINFUT, ICT e Smart Money Concepts (SMC).

🔗 **Site ao vivo:** [https://souzaproducoes.github.io/Price_Action](https://souzaproducoes.github.io/Price_Action)

---

## 📁 Estrutura de Arquivos — v5.0 (Modular)

```
/
├── index.html                    ← Página principal (5 abas via iframe) ← ATUALIZADO
├── candlesticks.html             ← Módulo: 43 Padrões de Candlestick ← NOVO
├── winfut.html                   ← Módulo: Padrões WINFUT ← NOVO
├── ict-fvg-order-blocks.html     ← Módulo: FVG & Order Blocks ICT ← NOVO
├── ICT_Estudo_Avancado.html      ← Módulo: ICT Estudo Avançado (não alterar)
├── alinhamento-de-fluxo.html     ← Módulo: Alinhamento de Fluxo (não alterar)
├── smart-money-concepts.html     ← Módulo: Smart Money Concepts (não alterar)
├── style.css                     ← Todos os estilos compartilhados ← ATUALIZADO
├── app.js                        ← JS do módulo Candlesticks (quiz, filtros) ← inalterado
├── app-v5.js                     ← JS do index principal (troca de iframes) ← NOVO
├── favicon.svg                   ← Ícone do site
├── sitemap.xml                   ← Mapa do site atualizado ← ATUALIZADO
├── robots.txt                    ← SEO robots
├── logo-souza.png                ← Logo (não alterar)
└── 1.png … 43.png                ← Imagens dos padrões de candlestick (não alterar)
```

---

## 🗂️ Arquitetura v5.0 — Modular

```
┌─────────────────────────────────────────────────────────────────────┐
│                          index.html                                 │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Topbar com 6 abas                                          │   │
│  │  [Candlesticks][WINFUT][ICT FVG][ICT Avançado][Fluxo][SMC] │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Cada aba carrega via <iframe> o HTML do módulo correspondente:     │
│  ┌──────────────┐ ┌──────────┐ ┌────────────┐ ┌──────┐ ┌──────┐   │
│  │candlesticks  │ │winfut    │ │ict-fvg-ob  │ │fluxo │ │ smc  │   │
│  │.html         │ │.html     │ │.html       │ │.html │ │.html │   │
│  └──────────────┘ └──────────┘ └────────────┘ └──────┘ └──────┘   │
│                                                                      │
│  style.css ← estilos compartilhados   app.js ← quiz candlesticks   │
│  app-v5.js ← troca de iframes                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### Conteúdo por módulo

| Aba | Arquivo | Conteúdo |
|---|---|---|
| **Candlesticks** | `candlesticks.html` | 43 padrões com filtros, busca e quiz |
| **WINFUT** | `winfut.html` | Padrões exclusivos do WIN$, timeline, checklist |
| **FVG & Order Blocks** | `ict-fvg-order-blocks.html` | ICT: FVG, OB, BOS, CHoCH, Kill Zones |
| **ICT Estudo Avançado** | `ICT_Estudo_Avancado.html` | Metodologia ICT avançada |
| **Alinhamento de Fluxo** | `alinhamento-de-fluxo.html` | Alinhamento de fluxo de mercado |
| **Smart Money** | `smart-money-concepts.html` | SMC: liquidez, estrutura, CTZ, Kill Zones |

---

## ✅ Arquivos a atualizar (versão 5.0)

| Arquivo | Por quê atualizar |
|---|---|
| `index.html` | Nova arquitetura de iframes com 6 abas |
| `candlesticks.html` | **Novo** — módulo autônomo extraído do index |
| `winfut.html` | **Novo** — módulo autônomo extraído do index |
| `ict-fvg-order-blocks.html` | **Novo** — módulo autônomo extraído do index |
| `style.css` | Atualizado com estilos das novas abas |
| `app-v5.js` | **Novo** — lógica de iframes para o index |
| `sitemap.xml` | Inclui todos os módulos com datas |
| `README.md` | Este arquivo atualizado |

## 🔒 Arquivos que NÃO devem ser alterados

| Arquivo | Status |
|---|---|
| `ICT_Estudo_Avancado.html` | Mantido como está |
| `alinhamento-de-fluxo.html` | Mantido como está |
| `smart-money-concepts.html` | Mantido como está |
| `app.js` | Mantido (usado pelo módulo candlesticks) |
| `favicon.svg` | Mantido |
| `logo-souza.png` | Mantido |
| `1.png … 43.png` | Mantidos |

---

## 🚀 Como publicar no GitHub Pages

### Opção A — Upload direto pelo navegador (mais fácil)

1. Acesse [github.com](https://github.com) e faça login
2. Vá ao repositório `Price_Action`
3. Clique em **"Add file" → "Upload files"**
4. Arraste **todos os arquivos** da seção "Arquivos a atualizar"
5. Clique em **"Commit changes"**
6. Aguarde ~1 minuto e o site estará atualizado

### Opção B — Via Git no terminal

```bash
git clone https://github.com/SEU-USUARIO/Price_Action.git
cd Price_Action

# Copie os novos arquivos para a pasta

git add index.html candlesticks.html winfut.html ict-fvg-order-blocks.html
git add style.css app-v5.js sitemap.xml README.md
git commit -m "feat: arquitetura modular v5.0 — 6 abas em HTMLs independentes"
git push origin main
```

---

## 📦 O que há de novo na versão 5.0

| Recurso | Descrição |
|---|---|
| ✅ **Arquitetura modular** | Cada aba é um HTML independente — mais fácil de manter |
| ✅ **candlesticks.html** | Módulo autônomo com 43 padrões, quiz e filtros |
| ✅ **winfut.html** | Módulo autônomo com padrões WINFUT e checklist |
| ✅ **ict-fvg-order-blocks.html** | Módulo ICT FVG & Order Blocks standalone |
| ✅ **app-v5.js** | JS separado para lógica de iframe do index |
| ✅ **6 abas no index** | Candlesticks + WINFUT + ICT FVG + ICT Avançado + Fluxo + SMC |
| ✅ **SEO otimizado** | Cada módulo tem suas próprias meta tags |
| ✅ **sitemap.xml** | Inclui todos os 7 arquivos HTML |

---

## 📬 Contato

- Instagram: [@souza.producoes.2012](https://www.instagram.com/souza.producoes.2012)
- Facebook: [Souza.Producoes.2012](https://www.facebook.com/Souza.Producoes.2012)
- YouTube: [@vfshomevideo](https://www.youtube.com/@vfshomevideo)

---

*Versão 5.0 — Março 2026 | Souza Produções*
