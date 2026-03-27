import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const gold = '#C4A265'
const bg = '#0a0a0a'
const silver = '#B8C0CC'

const ORDER_MODELS = [
  {
    name: 'Purebred',
    sku: 'PB-L540',
    type: '4-Seat Forward · Non-Lifted',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Purebred Lifted',
    sku: 'PB-H540',
    type: '4-Seat Forward · Lifted',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Stallion',
    sku: 'CLYD-6-NLFT-RB',
    type: '6-Seat · Non-Lifted',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Stallion Lifted',
    sku: 'CLYD-6-LFT-RB',
    type: '6-Seat · Lifted',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Colt',
    sku: 'STL-4-SEAT-NLFT',
    type: '4-Seat · Non-Lifted',
    colors: ['White Gloss', 'Timeless Grey', 'Bright Blue', 'Black Gloss', 'Rich Green', 'Ferrari Red', 'Dark Blue', 'Deep Orange', 'Purple', 'Bright Teal', 'Candy Apple'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Colt Lifted',
    sku: 'STL-4-SEAT-LFT',
    type: '4-Seat · Lifted',
    colors: ['White Gloss', 'Timeless Grey', 'Bright Blue', 'Black Gloss', 'Rich Green', 'Ferrari Red', 'Dark Blue', 'Deep Orange', 'Purple', 'Bright Teal', 'Candy Apple'],
    battery: ['48V 105AH', '48V 150AH'],
  },
  {
    name: 'Mare',
    sku: 'MARE-WHITE',
    type: 'Golf Cart',
    colors: ['White'],
    battery: ['48V 105AH', '48V 150AH'],
  },
]

function initModelOrders() {
  return ORDER_MODELS.map((m) => ({
    ...m,
    colorQtys: Object.fromEntries(m.colors.map((c) => [c, 0])),
    selectedBattery: m.battery[0],
  }))
}

export default function Order() {
  const [dealer, setDealer] = useState({ name: '', phone: '', address: '', email: '', contact: '', date: '' })
  const [models, setModels] = useState(initModelOrders)
  const [instructions, setInstructions] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [summaryData, setSummaryData] = useState(null)
  const summaryRef = useRef(null)

  function updateDealer(field, value) {
    setDealer((prev) => ({ ...prev, [field]: value }))
  }

  function updateColorQty(modelIdx, color, qty) {
    setModels((prev) => {
      const next = [...prev]
      next[modelIdx] = {
        ...next[modelIdx],
        colorQtys: { ...next[modelIdx].colorQtys, [color]: Math.max(0, parseInt(qty) || 0) },
      }
      return next
    })
  }

  function updateBattery(modelIdx, battery) {
    setModels((prev) => {
      const next = [...prev]
      next[modelIdx] = { ...next[modelIdx], selectedBattery: battery }
      return next
    })
  }

  function getModelTotal(model) {
    return Object.values(model.colorQtys).reduce((sum, q) => sum + q, 0)
  }

  function getGrandTotal() {
    return models.reduce((sum, m) => sum + getModelTotal(m), 0)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const orderLines = []
    models.forEach((m) => {
      Object.entries(m.colorQtys).forEach(([color, qty]) => {
        if (qty > 0) {
          orderLines.push({ model: m.name, sku: m.sku, type: m.type, color, qty, battery: m.selectedBattery })
        }
      })
    })
    if (orderLines.length === 0) {
      alert('Please select at least one cart to order.')
      return
    }
    setSummaryData({ dealer, orderLines, instructions, total: getGrandTotal(), date: new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' }) })
    setSubmitted(true)
    setTimeout(() => summaryRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  function handlePrint() {
    window.print()
  }

  const inputStyle = {
    borderColor: 'rgba(255,255,255,0.08)',
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: bg, color: '#fff' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(10,10,10,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-base font-bold tracking-[0.2em] uppercase" style={{ color: gold }}>
            Boca EV
          </Link>
          <span className="text-[13px] font-medium uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Dealer Order Form
          </span>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium uppercase tracking-[0.35em] mb-4" style={{ color: gold }}>
              PDG Powersports
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-3" style={{ fontFamily: '"Outfit", sans-serif' }}>
              Dealer <span style={{ color: gold }}>Order Form</span>
            </h1>
            <p className="text-base font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Select models, colors, and quantities to place your order.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Dealer Info */}
            <div className="mb-10 p-6 sm:p-8" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: gold }}>
                Dealer Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  ['name', 'Dealer Name', 'text', 'ABC Golf Carts'],
                  ['phone', 'Phone', 'tel', '(555) 000-0000'],
                  ['address', 'Address', 'text', '123 Main St, City, ST 00000'],
                  ['email', 'Email', 'email', 'dealer@example.com'],
                  ['contact', 'Contact Name', 'text', 'John Smith'],
                  ['date', 'Requested Delivery Date', 'date', ''],
                ].map(([field, label, type, ph]) => (
                  <div key={field}>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] mb-2"
                           style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</label>
                    <input type={type} required value={dealer[field]}
                      onChange={(e) => updateDealer(field, e.target.value)}
                      className="w-full bg-transparent border-b text-white text-sm font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = gold}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder={ph} />
                  </div>
                ))}
              </div>
            </div>

            {/* Model Selection */}
            <div className="mb-10">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: gold }}>
                Model Selection &amp; Color / Quantity
              </h2>

              <div className="space-y-6">
                {models.map((model, modelIdx) => {
                  const total = getModelTotal(model)
                  return (
                    <div key={model.sku} className="p-6" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <h3 className="text-lg font-bold uppercase tracking-wide" style={{ fontFamily: '"Outfit", sans-serif' }}>
                            {model.name}
                          </h3>
                          <p className="text-[12px] font-medium uppercase tracking-[0.15em]" style={{ color: gold }}>
                            {model.type}
                          </p>
                          <p className="text-[11px] font-light mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
                            SKU: {model.sku}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                            Subtotal
                          </div>
                          <div className="text-xl font-bold" style={{ color: total > 0 ? gold : 'rgba(255,255,255,0.15)' }}>
                            {total} {total === 1 ? 'cart' : 'carts'}
                          </div>
                        </div>
                      </div>

                      {/* Battery Option */}
                      <div className="mb-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          Battery Option
                        </div>
                        <div className="flex gap-3">
                          {model.battery.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => updateBattery(modelIdx, b)}
                              className="text-[12px] font-medium px-4 py-2 transition cursor-pointer"
                              style={{
                                background: model.selectedBattery === b ? gold : 'transparent',
                                color: model.selectedBattery === b ? bg : 'rgba(255,255,255,0.4)',
                                border: model.selectedBattery === b ? `1px solid ${gold}` : '1px solid rgba(255,255,255,0.1)',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color/Qty Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {model.colors.map((color) => (
                          <div key={color} className="flex items-center gap-3 p-2.5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                            <span className="text-[12px] font-medium flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                              {color}
                            </span>
                            <input
                              type="number"
                              min="0"
                              max="999"
                              value={model.colorQtys[color] || ''}
                              onChange={(e) => updateColorQty(modelIdx, color, e.target.value)}
                              placeholder="0"
                              className="w-14 text-center bg-transparent border-b text-sm font-medium text-white focus:outline-none placeholder-white/15"
                              style={{ borderColor: model.colorQtys[color] > 0 ? gold : 'rgba(255,255,255,0.08)' }}
                              onFocus={(e) => e.target.style.borderColor = gold}
                              onBlur={(e) => e.target.style.borderColor = model.colorQtys[color] > 0 ? gold : 'rgba(255,255,255,0.08)'}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-8 p-6" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
                     style={{ color: 'rgba(255,255,255,0.3)' }}>Special Instructions</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={3}
                className="w-full bg-transparent border text-sm font-light text-white p-3 focus:outline-none transition placeholder-white/15 resize-none"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                onFocus={(e) => e.target.style.borderColor = gold}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                placeholder="Any special requests or delivery instructions..."
              />
            </div>

            {/* Order Total & Submit */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 p-6" style={{ background: '#111', border: `1px solid ${gold}33` }}>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Total Carts Requested
                </div>
                <div className="text-3xl font-bold" style={{ color: gold }}>
                  {getGrandTotal()}
                </div>
              </div>
              <button
                type="submit"
                className="px-10 py-4 text-[13px] font-bold uppercase tracking-[0.25em] transition cursor-pointer"
                style={{ background: gold, color: bg }}
                onMouseEnter={(e) => e.target.style.background = '#d4b275'}
                onMouseLeave={(e) => e.target.style.background = gold}
              >
                Review &amp; Submit Order
              </button>
            </div>
          </form>

          {/* Order Summary */}
          {submitted && summaryData && (
            <div ref={summaryRef} className="mt-12 p-8" id="order-summary" style={{ background: '#111', border: `1px solid ${gold}33` }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    Order <span style={{ color: gold }}>Summary</span>
                  </h2>
                  <p className="text-[12px] font-light mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {summaryData.date}
                  </p>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition cursor-pointer"
                  style={{ border: `1px solid ${gold}`, color: gold }}
                  onMouseEnter={(e) => { e.target.style.background = gold; e.target.style.color = bg }}
                  onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = gold }}
                >
                  Print / Save PDF
                </button>
              </div>

              {/* Dealer Info Summary */}
              <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: gold }}>Dealer</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>Name:</span> {summaryData.dealer.name}</div>
                  <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>Contact:</span> {summaryData.dealer.contact}</div>
                  <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>Email:</span> {summaryData.dealer.email}</div>
                  <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>Phone:</span> {summaryData.dealer.phone}</div>
                  <div className="sm:col-span-2"><span style={{ color: 'rgba(255,255,255,0.3)' }}>Address:</span> {summaryData.dealer.address}</div>
                  <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>Delivery Date:</span> {summaryData.dealer.date}</div>
                </div>
              </div>

              {/* Order Lines */}
              <div className="mb-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: gold }}>Order Details</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${gold}33` }}>
                      <th className="text-left py-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>Model</th>
                      <th className="text-left py-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>SKU</th>
                      <th className="text-left py-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>Color</th>
                      <th className="text-left py-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>Battery</th>
                      <th className="text-right py-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: gold }}>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryData.orderLines.map((line, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td className="py-2.5 font-medium">{line.model}</td>
                        <td className="py-2.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{line.sku}</td>
                        <td className="py-2.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{line.color}</td>
                        <td className="py-2.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{line.battery}</td>
                        <td className="py-2.5 text-right font-bold" style={{ color: gold }}>{line.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ borderTop: `1px solid ${gold}33` }}>
                      <td colSpan={4} className="py-3 text-right text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Total Carts
                      </td>
                      <td className="py-3 text-right text-xl font-bold" style={{ color: gold }}>
                        {summaryData.total}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Special Instructions */}
              {summaryData.instructions && (
                <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2" style={{ color: gold }}>Special Instructions</h3>
                  <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>{summaryData.instructions}</p>
                </div>
              )}

              <p className="text-center text-[12px] font-light mt-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Use "Print / Save PDF" to generate a PDF of this order. A copy will be sent to the sales team.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10" style={{ background: bg, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-[14px] font-bold uppercase tracking-[0.2em]" style={{ color: gold }}>
            Boca EV
          </Link>
          <span className="text-[13px] font-light italic" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Elegance, Electrified.
          </span>
        </div>
      </footer>
    </div>
  )
}
