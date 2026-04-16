import { Link } from 'react-router-dom'

const gold = '#C4A265'
const bg = '#0a0a0a'

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: bg, color: '#fff' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(10,10,10,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/images/boca-logo-silver.png" alt="Boca EV" className="h-6" />
          </Link>
          <Link to="/" className="text-[14px] font-medium uppercase tracking-[0.15em] hover:text-white transition"
                style={{ color: 'rgba(255,255,255,0.35)' }}>
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[14px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: gold }}>
            Legal
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-12"
              style={{ fontFamily: '"Outfit", sans-serif' }}>
            Privacy <span style={{ color: gold }}>Policy</span>
          </h1>

          <div className="space-y-8 text-[15px] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Information We Collect</h2>
              <p>
                When you submit a dealer inquiry or contact form on our website, we collect your name, email address,
                phone number, company/dealership name, and model interest. We may also collect usage data such as
                IP address, browser type, and pages visited through standard analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to dealer inquiries, provide product information,
                facilitate dealer onboarding, and improve our website experience. We do not sell, rent, or share
                your personal information with third parties for their marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience
                and analyze website traffic. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Third-Party Services</h2>
              <p>
                We may use third-party services such as analytics providers and hosting platforms that may collect
                information on our behalf. These services are bound by their own privacy policies and operate
                under industry-standard data protection practices.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal information.
                To exercise these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-[0.15em] text-white mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page
                with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.3)' }}>
                Last updated: March 2026
              </p>
              <p className="mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                If you have questions about this privacy policy, please contact us through the dealer inquiry form on our homepage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10" style={{ background: bg, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img src="/images/boca-logo-silver.png" alt="Boca EV" className="h-5" />
          </Link>
          <span className="text-[14px] font-light italic" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Elegance, Electrified.
          </span>
        </div>
      </footer>
    </div>
  )
}
