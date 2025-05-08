import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/stylesheet.css'
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'

import App from './App.jsx'
import Oferta from './pages/Oferta.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
