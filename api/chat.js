// ══════════════════════════════════════════════════════════════════
//  PRICE ACTION ACADEMY — Vercel Serverless Function
//  /api/chat.js  →  https://SEU-PROJETO.vercel.app/api/chat
//
//  Powered by Google Gemini API
//  A GEMINI_API_KEY fica APENAS nas variáveis de ambiente do Vercel.
//  Nunca é exposta no código público do GitHub.
// ══════════════════════════════════════════════════════════════════

export default async function handler(req, res) {

    // ── CORS: permite requisições do GitHub Pages ──
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

    // ── Validar body ──
    const { messages, systemPrompt } = req.body || {};
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Campo "messages" inválido ou ausente.' });
    }

    // ── Verificar API Key ──
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key não configurada no servidor.' });
    }

    // ── Converter histórico para formato Gemini (roles: user / model) ──
    const geminiContents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
    }));

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: systemPrompt || 'Você é um assistente prestativo.' }]
                },
                contents: geminiContents,
                generationConfig: {
                    maxOutputTokens: 500,
                    temperature: 0.7
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error('Gemini API error:', errData);
            return res.status(response.status).json({
                error: errData?.error?.message || `Erro ${response.status} na API Gemini`
            });
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        return res.status(200).json({ reply });

    } catch (err) {
        console.error('Erro interno:', err);
        return res.status(500).json({ error: 'Erro interno do servidor. Tente novamente.' });
    }
}
