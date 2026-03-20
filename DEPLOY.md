# Price Action Academy — Deploy com IA (Gemini + Vercel + GitHub Pages)

## 🗂️ Dois repositórios separados

```
GitHub:  souzaproducoes/Price_Action      ← site público (GitHub Pages)
GitHub:  souzaproducoes/price-action-vercel ← proxy da API (Vercel)
```

A chave da API fica **somente** no Vercel. O site público não tem segredo nenhum.

---

## PASSO 1 — Chave da API Gemini (gratuita)

1. Acesse [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Clique em **"Create API key"**
3. Copie a chave (começa com `AIza...`) e guarde — você vai usar no Passo 3

---

## PASSO 2 — Criar repositório do proxy no GitHub

1. Acesse [github.com](https://github.com) e clique em **"New repository"**
2. Nome: `price-action-vercel`
3. Deixe **Public** (necessário para o Vercel gratuito)
4. Clique em **"Create repository"**
5. Faça upload dos dois arquivos deste pacote:
   - `api/chat.js`
   - `vercel.json`

---

## PASSO 3 — Deploy no Vercel

1. Acesse [https://vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Selecione o repositório `price-action-vercel`
4. Clique em **"Deploy"** (sem alterar nada)
5. Após o deploy, vá em **Settings → Environment Variables**
6. Clique em **"Add"** e preencha:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `AIza...` (sua chave do Passo 1)
7. Clique em **Save**
8. Vá em **Deployments → clique nos 3 pontinhos → Redeploy** para aplicar a variável
9. Copie a URL do projeto (ex: `https://price-action-vercel.vercel.app`)

---

## PASSO 4 — Configurar o chatbot no site

1. Abra o arquivo `chatbot-ia.js` (do repositório Price_Action)
2. Na linha 20, substitua:
   ```
   const VERCEL_API_URL = 'https://SEU-PROJETO.vercel.app/api/chat';
   ```
   pela URL real:
   ```
   const VERCEL_API_URL = 'https://price-action-vercel.vercel.app/api/chat';
   ```
3. Salve o arquivo

---

## PASSO 5 — Atualizar o GitHub Pages

Faça upload do `chatbot-ia.js` atualizado no repositório `Price_Action`:

1. Acesse o repositório `Price_Action` no GitHub
2. Clique em `chatbot-ia.js` → ícone de lápis (editar) → cole o conteúdo novo
3. Clique em **"Commit changes"**
4. Aguarde ~1 minuto e teste em: [https://souzaproducoes.github.io/Price_Action/](https://souzaproducoes.github.io/Price_Action/)

---

## ✅ Lista de arquivos — o que vai em cada repositório

### Repositório `price-action-vercel` (Vercel) — NOVO
| Arquivo | Ação |
|---|---|
| `api/chat.js` | Upload — proxy seguro da API Gemini |
| `vercel.json` | Upload — configuração do Vercel |

### Repositório `Price_Action` (GitHub Pages) — ATUALIZAR
| Arquivo | Ação |
|---|---|
| `chatbot-ia.js` | Substituir — versão v2.0 com Gemini via Vercel |

Todos os outros arquivos do site (`index.html`, `style.css`, `app.js`, etc.) **não precisam ser alterados**.

---

## 🔒 Segurança

- A `GEMINI_API_KEY` existe **apenas** nas variáveis de ambiente do Vercel
- O código público no GitHub **não contém** a chave em nenhum momento
- O CORS do `api/chat.js` aceita apenas requisições de `souzaproducoes.github.io`

---

## 🆓 Custos

| Serviço | Plano gratuito |
|---|---|
| GitHub Pages | Gratuito (repositório público) |
| Vercel | Gratuito (100GB bandwidth/mês, funções ilimitadas) |
| Gemini API | Gratuito (gemini-2.0-flash: 1500 req/dia, 1M tokens/min) |

---

*Price Action Academy v6.0 — Souza Produções*
