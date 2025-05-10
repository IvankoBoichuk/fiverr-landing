import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import IframePortal from './components/IframePortal.jsx';
import './assets/stylesheet.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';
import App from './App.jsx';

function Root() {
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false);

  useEffect(() => {
    const update = () => setShouldRenderIframe(window.innerWidth > 640);
    update(); // первинна перевірка
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <StrictMode>
      {shouldRenderIframe ? (
        <IframePortal width={400}>
          <App />
        </IframePortal>
      ) : (
        <App />
      )}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
