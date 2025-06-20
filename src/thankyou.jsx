import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import IframePortal from './components/IframePortal.jsx';
import './index.css';
import Thankyou from './sections/Thankyou'

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
        <div className="h-96">
          <IframePortal width={400} className="!h-[600px]">
            <Thankyou />
          </IframePortal>
        </div>
      ) : (
        <Thankyou />
      )}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
