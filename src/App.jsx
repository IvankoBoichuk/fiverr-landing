import './App.css'
import Offer from './sections/Offer'
import Timer from './sections/Timer'
import Gift from './sections/Gift'
import WhatIs from './sections/WhatIs'
import IfYou from './sections/IfYou'
import Speaker from './sections/Speaker'
import Bell from './sections/Bell'
import Thankyou from './sections/Thankyou'
import Benefits from './sections/Benefits'
import Program from './sections/Program'
import Results from './sections/Results'
import Reviews from './sections/Reviews'
import Procces from './sections/Procces'
import Refund from './sections/Refund'
import Price from './sections/Price'
import Faq from './sections/Faq'
import Payment from './sections/Payment'
import { useEffect } from 'react'

function App() {
  const isThankYouPage = window.location.pathname === '/thankyou'
  useEffect(() => {
    const hasSentPixelEvent = localStorage.getItem('fb_pixel_sent')

    if (isThankYouPage && !hasSentPixelEvent) {
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: 390.00,
          currency: 'UAH'
        })
        localStorage.setItem('fb_pixel_sent', 'true')
      } else {
        console.warn('Facebook Pixel не знайдено')
      }
    }
  }, [])

  if (isThankYouPage) {
    return <Thankyou />;
  }

  return (
    <>
      <Offer />
      <Timer />
      <Gift />
      <WhatIs />
      <IfYou />
      <Speaker />
      <Bell />
      <Program />
      <Results />
      <Benefits />
      <Procces />
      <Refund />
      <Price />
      <Reviews />
      <Faq />
      <Payment />
    </>
  )
}

export default App
