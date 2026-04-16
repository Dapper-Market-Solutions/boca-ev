import { useState, useEffect } from 'react'

const gold = '#C4A265'
const bg = '#0a0a0a'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!document.cookie.includes('boca_cookie_consent=')) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    document.cookie = 'boca_cookie_consent=accepted;path=/;max-age=31536000;SameSite=Lax'
    setVisible(false)
    if (window.bocaLoadGTM) window.bocaLoadGTM()
  }

  function decline() {
    document.cookie = 'boca_cookie_consent=declined;path=/;max-age=31536000;SameSite=Lax'
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 z-[9999] max-w-sm"
      style={{ animation: 'bocaSlideUp 0.4s ease forwards' }}
    >
      <div
        className="p-5 shadow-2xl"
        style={{ background: '#111', border: `1px solid ${gold}33`, fontFamily: '"Outfit", sans-serif' }}
      >
        <p className="text-white text-[14px] font-semibold mb-2">We value your privacy</p>
        <p className="text-[14px] font-light leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
          We use cookies to analyze site traffic and improve your experience.
          By clicking "Accept", you consent to analytics and marketing cookies.{' '}
          <a href="/privacy" className="underline transition" style={{ color: 'rgba(255,255,255,0.6)' }}
             onMouseEnter={(e) => e.target.style.color = '#fff'}
             onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="flex-1 py-2.5 text-[14px] font-medium uppercase tracking-[0.15em] transition cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)', background: 'transparent' }}
            onMouseEnter={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.color = '#fff' }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'rgba(255,255,255,0.4)' }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 py-2.5 text-[14px] font-bold uppercase tracking-[0.15em] transition cursor-pointer"
            style={{ background: gold, color: bg }}
            onMouseEnter={(e) => e.target.style.background = '#d4b275'}
            onMouseLeave={(e) => e.target.style.background = gold}
          >
            Accept
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bocaSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
