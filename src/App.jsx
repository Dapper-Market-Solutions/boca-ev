import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Order from './pages/Order'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <CookieConsent />
    </>
  )
}
