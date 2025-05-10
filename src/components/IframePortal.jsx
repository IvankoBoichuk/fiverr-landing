import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function IframePortal({ children, ...props }) {
    const iframeRef = useRef(null);
    const [mountNode, setMountNode] = useState(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const onLoad = () => {
            const doc = iframe.contentDocument || iframe.contentWindow.document;

            // Записуємо повну HTML-структуру
            doc.open();
            doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>body { margin: 0; padding: 0; font-family: sans-serif; }</style>
          </head>
          <body></body>
        </html>
      `);
            doc.close();

            // Прокидування стилів з головного документу
            const parentLinks = Array.from(document.head.querySelectorAll('link[rel="stylesheet"], style'));
            parentLinks.forEach((el) => {
                const clone = el.cloneNode(true);
                doc.head.appendChild(clone);
            });

            const mount = doc.body;
            setMountNode(mount);

            // ResizeObserver для автоматичної висоти
            const resizeObserver = new ResizeObserver(() => {
                iframe.style.height = mount.scrollHeight + 'px';
            });

            resizeObserver.observe(mount);
        };

        iframe.addEventListener('load', onLoad);

        // Якщо iframe уже завантажено
        if (iframe.contentDocument?.readyState === 'complete') {
            onLoad();
        }

        return () => iframe.removeEventListener('load', onLoad);
    }, []);

    return (
        <iframe
            ref={iframeRef}
            {...props}
            style={{ width: '400px', border: 'none', margin: '0 auto' }}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
}
