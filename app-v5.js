// ── app-v5.js — Price Action Academy v5.0 (Modular / Iframe architecture) ──

// ── TAB SWITCHING ──
function switchTab(tabName, btn) {
    // Deactivate all tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Activate clicked tab
    if (btn) btn.classList.add('active');
    else document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');

    const tabEl = document.getElementById('tab-' + tabName);
    if (tabEl) tabEl.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Adjust iframe height after load
    const iframeId = 'iframe-' + tabName;
    const iframe = document.getElementById(iframeId);
    if (iframe) {
        const adjustHeight = () => {
            try {
                const body = iframe.contentDocument.body;
                const html = iframe.contentDocument.documentElement;
                const h = Math.max(
                    body.scrollHeight, body.offsetHeight,
                    html.scrollHeight, html.offsetHeight
                );
                iframe.style.height = Math.max(h, window.innerHeight - 54) + 'px';
            } catch (e) {
                // Cross-origin or not loaded yet — set a safe tall height
                iframe.style.height = Math.max(window.innerHeight * 2, 1200) + 'px';
            }
        };

        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
            adjustHeight();
        } else {
            iframe.addEventListener('load', adjustHeight, { once: true });
        }
    }
}

// ── PROGRESS BAR ON SCROLL ──
window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const pb = document.getElementById('progressBar');
    if (pb) pb.style.width = pct + '%';

    const bt = document.getElementById('backTop');
    if (bt) {
        if (window.scrollY > 400) bt.classList.add('visible');
        else bt.classList.remove('visible');
    }
});

// ── INIT: adjust iframe height for the default active tab (candlesticks) ──
window.addEventListener('DOMContentLoaded', () => {
    const firstIframe = document.getElementById('iframe-candlesticks');
    if (firstIframe) {
        const adjustFirst = () => {
            try {
                const body = firstIframe.contentDocument.body;
                const html = firstIframe.contentDocument.documentElement;
                const h = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight);
                firstIframe.style.height = Math.max(h, window.innerHeight - 54) + 'px';
            } catch(e) {
                firstIframe.style.height = Math.max(window.innerHeight * 2, 1400) + 'px';
            }
        };
        if (firstIframe.contentDocument && firstIframe.contentDocument.readyState === 'complete') {
            adjustFirst();
        } else {
            firstIframe.addEventListener('load', adjustFirst, { once: true });
        }
    }
});
