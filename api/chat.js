// ══════════════════════════════════════════════════════════════════
//  PRICE ACTION ACADEMY — Vercel Serverless Function
//  /api/chat.js  →  https://price-action-azure.vercel.app/api/chat
//
//  Powered by Groq API (llama-3.3-70b-versatile) — GRATUITO
//  A GROQ_API_KEY fica APENAS nas variáveis de ambiente do Vercel.
// ══════════════════════════════════════════════════════════════════

export default async function handler(req, res) {

    // ── CORS ──
    const allowed = [
        'https://souzaproducoes.github.io',
        'http://localhost',
        'http://127.0.0.1'
    ];
    const origin = req.headers.origin || '';
    const isAllowed = allowed.some(o => origin.startsWith(o));

    res.setHeader('Access-Control-Allow-Origin', isAllowed ? origin : 'https://souzaproducoes.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

    const { messages, systemPrompt } = req.body || {};
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Campo "messages" inválido ou ausente.' });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key não configurada no servidor.' });
    }

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt || 'Você é um assistente prestativo.' },
                    ...messages
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error('Groq API error:', errData);
            return res.status(response.status).json({
                error: errData?.error?.message || `Erro ${response.status} na API Groq`
            });
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || '';

        return res.status(200).json({ reply });

    } catch (err) {
        console.error('Erro interno:', err);
        return res.status(500).json({ error: 'Erro interno do servidor. Tente novamente.' });
    }
}
