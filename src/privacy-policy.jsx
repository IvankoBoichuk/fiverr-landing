import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/stylesheet.css'
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'

import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>
)
