import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── 7 Cart Models ── */
const MODELS = [
  {
    name: 'Purebred Lowered',
    sku: 'PB-L540',
    type: '4-Seat Forward · Lowered',
    badge: 'Classic',
    seats: 4,
    category: '4-Seat',
    image: 'placeholder',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '4 Forward-Facing',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Standard',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      'Backup Camera',
      'LED Headlights & Taillights',
      'All Forward-Facing Seats',
      'Synthetic Leather Seats',
      'USB Charging Ports',
    ],
  },
  {
    name: 'Purebred Lifted',
    sku: 'PB-H540',
    type: '4-Seat Forward · Lifted',
    badge: 'Adventure',
    seats: 4,
    category: '4-Seat',
    image: 'placeholder',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '4 Forward-Facing',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Lifted',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      'Lifted Suspension',
      'All-Terrain Tires',
      'All Forward-Facing Seats',
      'Backup Camera',
      'In-Seat Storage',
    ],
  },
  {
    name: 'Stallion Lowered',
    sku: 'CLYD-6-NLFT-RB',
    type: '6-Seat · Lowered',
    badge: 'Flagship',
    seats: 6,
    category: '6-Seat',
    image: 'placeholder',
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '6',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Standard',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      '6-Passenger Seating',
      'Extended Roof',
      'Backup Camera',
      'Full LED Lighting Package',
      'Premium Synthetic Leather',
    ],
  },
  {
    name: 'Stallion Lifted',
    sku: 'CLYD-6-LFT-RB',
    type: '6-Seat · Lifted',
    badge: 'Beast',
    seats: 6,
    category: '6-Seat',
    image: '/images/stallion-black.jpg',
    colorImages: {
      White: '/images/stallion-white.jpg',
      Grey: '/images/stallion-grey.jpg',
      Blue: '/images/stallion-blue.jpg',
      Black: '/images/stallion-black.jpg',
      Orange: '/images/stallion-orange.jpg',
      Red: '/images/stallion-red.jpg',
      Teal: '/images/stallion-teal.jpg',
    },
    colors: ['White', 'Grey', 'Blue', 'Black', 'Orange', 'Red', 'Teal'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '6',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Lifted',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      'Lifted Suspension',
      '6-Passenger Seating',
      'Extended Roof',
      'Premium All-Terrain Tires',
      'Full LED Lighting Package',
    ],
  },
  {
    name: 'Colt Lowered',
    sku: 'STL-4-SEAT-NLFT',
    type: '4-Seat · Lowered',
    badge: 'Versatile',
    seats: 4,
    category: '4-Seat',
    image: 'placeholder',
    colors: ['White Gloss', 'Timeless Grey', 'Bright Blue', 'Black Gloss', 'Rich Green', 'Ferrari Red', 'Dark Blue', 'Deep Orange', 'Purple', 'Bright Teal', 'Candy Apple'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '4',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Standard',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      '11 Color Options',
      'Backup Camera',
      'Synthetic Leather Seats',
      'LED Headlights & Taillights',
      'USB Charging Ports',
    ],
  },
  {
    name: 'Colt Lifted',
    sku: 'STL-4-SEAT-LFT',
    type: '4-Seat · Lifted',
    badge: 'Rugged',
    seats: 4,
    category: '4-Seat',
    image: 'placeholder',
    colors: ['White Gloss', 'Timeless Grey', 'Bright Blue', 'Black Gloss', 'Rich Green', 'Ferrari Red', 'Dark Blue', 'Deep Orange', 'Purple', 'Bright Teal', 'Candy Apple'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '4',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Lifted',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      'Lifted Suspension',
      '11 Color Options',
      'All-Terrain Tires',
      'Backup Camera',
      'LED Light Bar',
    ],
  },
  {
    name: 'Mare',
    sku: 'MARE-WHITE',
    type: 'Golf Cart',
    badge: 'Pure',
    seats: 4,
    category: 'Golf',
    image: 'placeholder',
    colors: ['White'],
    battery: ['48V 105AH', '48V 150AH'],
    specs: {
      Seats: '4',
      Motor: '48V 5KW AC',
      Range: 'Up to 40 mi',
      Display: '10.1" Touchscreen',
      Suspension: 'Standard',
      Brakes: 'Hydraulic Disc',
    },
    features: [
      'Apple CarPlay & Android Auto',
      'Classic Golf Cart Design',
      'Backup Camera',
      'LED Headlights & Taillights',
      'Synthetic Leather Seats',
      'USB Charging Ports',
    ],
  },
]

const PILLARS = [
  {
    title: 'Premium Craftsmanship',
    description: 'Every Boca EV is built with meticulous attention to detail — from hand-stitched leather to precision-machined components.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Advanced Technology',
    description: '10.1" touchscreen display with Apple CarPlay, Android Auto, backup camera, and integrated GPS — all standard.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Dealer Support',
    description: 'Comprehensive dealer resources, training programs, marketing materials, and dedicated account management.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Zero Emissions',
    description: 'All-electric, whisper-quiet powertrains. Up to 40 miles of range on a single charge with a 48V 5KW AC motor.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const CATEGORIES = ['All', '4-Seat', '6-Seat', 'Golf']
const LIFT_OPTIONS = ['All', 'Lowered', 'Lifted']

function modelLiftStatus(model) {
  if (/lifted/i.test(model.type)) return 'Lifted'
  if (/lowered/i.test(model.type)) return 'Lowered'
  return null
}

const COLOR_HEX = {
  // Stallion / Purebred palette
  White: '#f5f5f5',
  Grey: '#8a8a8a',
  Blue: '#2563eb',
  Black: '#1a1a1a',
  Orange: '#f97316',
  Red: '#dc2626',
  Teal: '#14b8a6',
  // Colt palette
  'White Gloss': '#f5f5f5',
  'Timeless Grey': '#7a7d82',
  'Bright Blue': '#1e7dd0',
  'Black Gloss': '#111111',
  'Rich Green': '#2d5f3f',
  'Ferrari Red': '#c1121f',
  'Dark Blue': '#10264a',
  'Deep Orange': '#d95a0f',
  Purple: '#6b21a8',
  'Bright Teal': '#0fb5a0',
  'Candy Apple': '#a50000',
}

function colorFor(name) {
  return COLOR_HEX[name] || '#666'
}

function isLightColor(name) {
  const hex = colorFor(name).replace('#', '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 150
}

export default function Home() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', model: '' })
  const [submitted, setSubmitted] = useState(false)
  const [specCart, setSpecCart] = useState(null)
  const [filter, setFilter] = useState('All')
  const [liftFilter, setLiftFilter] = useState('All')
  const [selectedColors, setSelectedColors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const gold = '#C0C0C0'
  const bg = '#000000'
  const silver = '#6E6E6E'
  const deepBlue = '#0A2A4A'
  const charcoal = '#2B2B2B'

  const filteredModels = MODELS.filter(m => {
    if (filter !== 'All' && m.category !== filter) return false
    if (liftFilter !== 'All' && modelLiftStatus(m) !== liftFilter) return false
    return true
  })

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: bg, color: '#fff' }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(10,10,10,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/boca-logo-silver.png" alt="Boca EV" className="h-6" />
          </a>
          <div className="hidden sm:flex items-center gap-8 text-[14px] font-medium uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <a href="#models" className="hover:text-white transition">Models</a>
            <a href="#why-boca" className="hover:text-white transition">Why Boca</a>
            <a href="#contact" className="hover:text-white transition">Become a Dealer</a>
            <a href="/dealer-login"
              className="px-4 py-2 transition border"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = gold }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}>
              Dealer Login
            </a>
          </div>
          <a href="/dealer-login" className="sm:hidden px-4 py-2 text-[14px] font-medium uppercase tracking-wider"
             style={{ border: `1px solid ${gold}44`, color: gold }}>
            Dealers
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 40%, #111111 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 50%, rgba(10,10,10,0.7) 100%)',
          }} />
        </div>

        {/* Subtle gold glow */}
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
             style={{ background: `radial-gradient(circle, ${gold} 0%, transparent 70%)` }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-24">
          <p className="animate-fade-up text-[14px] font-medium uppercase tracking-[0.35em] mb-2"
             style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
            Boca EV — by PDG Powersports
          </p>
          <p className="animate-fade-up text-[14px] font-medium uppercase tracking-[0.3em] mb-8"
             style={{ color: 'rgba(255,255,255,0.4)' }}>
            Premium Electric Golf Carts
          </p>

          <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.04em' }}>
            Elegance,
            <br />
            <span style={{ color: gold }}>Electrified.</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg sm:text-xl font-light leading-relaxed mb-3 max-w-lg"
             style={{ color: 'rgba(255,255,255,0.55)' }}>
            Luxury meets innovation. Boca EV crafts premium electric carts
            <br />
            with cutting-edge technology and timeless design.
          </p>

          <p className="animate-fade-up delay-200 text-[15px] font-medium uppercase tracking-[0.2em] mb-10"
             style={{ color: silver }}>
            7 Models &mdash; 4 &amp; 6 Seat Configurations
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-16">
            <a href="#models"
              className="inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.2em] px-8 py-4 transition"
              style={{ background: gold, color: bg }}
              onMouseEnter={(e) => e.target.style.background = '#d0d0d0'}
              onMouseLeave={(e) => e.target.style.background = gold}>
              Explore the Collection
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-3 text-[14px] font-medium uppercase tracking-[0.2em] px-8 py-4 transition border"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
              Become a Dealer
            </a>
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${gold}33, transparent)` }} />
      </div>

      {/* ── Models ── */}
      <section id="models" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[14px] font-medium uppercase tracking-[0.35em] mb-4"
               style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
              The Collection
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: '"Outfit", sans-serif' }}>
              Choose Your <span style={{ color: gold }}>Boca</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="space-y-3 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] mr-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Type
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="text-[14px] font-semibold uppercase tracking-[0.2em] px-5 py-2.5 transition cursor-pointer"
                  style={{
                    background: filter === cat ? gold : 'transparent',
                    color: filter === cat ? bg : 'rgba(255,255,255,0.35)',
                    border: filter === cat ? `1px solid ${gold}` : '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => { if (filter !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { if (filter !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] mr-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Stance
              </span>
              {LIFT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setLiftFilter(opt)}
                  className="text-[14px] font-semibold uppercase tracking-[0.2em] px-5 py-2.5 transition cursor-pointer"
                  style={{
                    background: liftFilter === opt ? gold : 'transparent',
                    color: liftFilter === opt ? bg : 'rgba(255,255,255,0.35)',
                    border: liftFilter === opt ? `1px solid ${gold}` : '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => { if (liftFilter !== opt) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { if (liftFilter !== opt) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <div key={model.name}
                className="group flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
                style={{ background: '#2B2B2B', border: '1px solid rgba(255,255,255,0.06)' }}>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#111111' }}>
                  {model.colorImages ? (
                    <img
                      src={model.colorImages[selectedColors[model.name] || model.colors[0]] || model.image}
                      alt={`${model.name} ${selectedColors[model.name] || model.colors[0]}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  ) : model.image.startsWith('/images') ? (
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                         style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2B2B2B 50%, #1a1a1a 100%)' }}>
                      <div className="text-center">
                        <span className="text-4xl font-extrabold uppercase tracking-tight block" style={{ color: 'rgba(255,255,255,0.06)' }}>
                          {model.name}
                        </span>
                        <span className="text-[14px] uppercase tracking-[0.3em] mt-2 block" style={{ color: 'rgba(255,255,255,0.15)' }}>
                          Image Coming Soon
                        </span>
                      </div>
                    </div>
                  )}
                  {model.badge && (
                    <div className="absolute top-3 left-3 text-[14px] font-bold uppercase tracking-[0.2em] px-3 py-1"
                         style={{ background: gold, color: bg }}>
                      {model.badge}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="text-[14px] font-medium uppercase tracking-[0.2em] mb-1" style={{ color: gold }}>
                      {model.type}
                    </p>
                    <h3 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Outfit", sans-serif' }}>
                      {model.name}
                    </h3>
                  </div>

                  {/* Key specs */}
                  <div className="grid grid-cols-3 gap-2 mb-4 py-4"
                       style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {Object.entries(model.specs).slice(0, 6).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[14px] font-medium uppercase tracking-[0.12em] mb-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{key}</div>
                        <div className="text-[14px] font-medium" style={{ color: silver }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Available colors — swatch dots */}
                  <div className="mb-4">
                    <div className="text-[14px] font-medium uppercase tracking-[0.12em] mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {model.colors.length} Color{model.colors.length > 1 ? 's' : ''} Available
                      {model.colorImages && (
                        <span className="ml-2 font-normal normal-case tracking-normal" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          — {selectedColors[model.name] || model.colors[0]}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {model.colors.map((c) => {
                        const active = model.colorImages && (selectedColors[model.name] || model.colors[0]) === c
                        const clickable = !!model.colorImages
                        const hex = colorFor(c)
                        const light = isLightColor(c)
                        return (
                          <button
                            key={c}
                            type="button"
                            disabled={!clickable}
                            onClick={(e) => {
                              if (!clickable) return
                              e.stopPropagation()
                              setSelectedColors(prev => ({ ...prev, [model.name]: c }))
                            }}
                            className={`text-[14px] font-medium px-3 py-1.5 rounded-sm transition-all duration-200 ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
                            style={{
                              background: hex,
                              color: light ? '#0a0a0a' : '#f5f5f5',
                              border: active ? `1.5px solid ${gold}` : '1px solid rgba(255,255,255,0.15)',
                              transform: active ? 'scale(1.05)' : 'scale(1)',
                              boxShadow: active ? `0 0 10px ${gold}55` : 'none',
                            }}
                            aria-label={c}
                          >
                            {c}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Battery & SKU */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[14px] font-medium uppercase tracking-[0.1em] px-2 py-0.5"
                          style={{ background: 'rgba(192,192,192,0.08)', color: gold, border: `1px solid ${gold}20` }}>
                      {model.sku}
                    </span>
                    <span className="text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {model.battery.join(' / ')}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSpecCart(model)}
                    className="block w-full mt-auto py-3 text-center text-[14px] font-semibold uppercase tracking-[0.2em] transition cursor-pointer"
                    style={{ background: 'transparent', color: gold, border: `1px solid ${gold}` }}
                    onMouseEnter={(e) => { e.target.style.background = gold; e.target.style.color = bg }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = gold }}>
                    View Full Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${gold}33, transparent)` }} />
      </div>

      {/* ── Why Boca EV ── */}
      <section id="why-boca" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[14px] font-medium uppercase tracking-[0.35em] mb-4"
               style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
              The Boca Difference
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: '"Outfit", sans-serif' }}>
              Why <span style={{ color: gold }}>Boca EV</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title}
                className="animate-fade-up group p-8 transition-all duration-500 hover:translate-y-[-4px]"
                style={{
                  animationDelay: `${i * 100}ms`,
                  background: '#2B2B2B',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                <div className="mb-6 transition-colors duration-300" style={{ color: gold }}>
                  {pillar.icon}
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-3"
                    style={{ fontFamily: '"Outfit", sans-serif' }}>
                  {pillar.title}
                </h3>
                <p className="text-[14px] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${gold}33, transparent)` }} />
      </div>

      {/* ── Dealer Inquiry Form ── */}
      <section id="contact" className="px-6 py-24 relative" style={{ background: '#080808' }}>
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
             style={{ background: `radial-gradient(ellipse, ${gold} 0%, transparent 70%)` }} />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[14px] font-medium uppercase tracking-[0.35em] mb-5"
               style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
              Dealer Opportunities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-4"
                style={{ fontFamily: '"Outfit", sans-serif' }}>
              Become a
              <br />
              <span style={{ color: gold }}>Boca EV Dealer</span>
            </h2>
            <p className="text-base font-light leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Join our growing network of authorized dealers. Premium product, premium margins, premium support.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: `rgba(192,192,192,0.1)`, border: `1px solid ${gold}33` }}>
                <svg className="w-7 h-7" style={{ color: gold }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3"
                  style={{ fontFamily: '"Outfit", sans-serif' }}>
                Inquiry Received
              </h3>
              <p className="text-base font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
                A Boca EV representative will contact you within 24 hours to discuss dealer opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative p-8 sm:p-10" style={{ border: `1px solid ${gold}22` }}>
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: gold }} />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: gold }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: gold }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: gold }} />

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    {[['firstName', 'First Name', 'text', 'John'], ['lastName', 'Last Name', 'text', 'Smith']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[14px] font-semibold uppercase tracking-[0.2em] mb-2"
                               style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>{label}</label>
                        <input type={type} required value={form[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                          onFocus={(e) => e.target.style.borderColor = gold}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                          placeholder={ph} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Dealership / Company</label>
                    <input type="text" required value={form.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => e.target.style.borderColor = gold}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder="Your dealership name" />
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => e.target.style.borderColor = gold}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder="dealer@example.com" />
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Phone</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => e.target.style.borderColor = gold}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder="(555) 000-0000" />
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Model Interest</label>
                    <select value={form.model}
                      onChange={(e) => updateField('model', e.target.value)}
                      className="w-full bg-transparent border-b text-base font-light pb-2 focus:outline-none transition appearance-none cursor-pointer"
                      style={{ borderColor: 'rgba(255,255,255,0.08)', color: form.model ? '#fff' : 'rgba(255,255,255,0.15)' }}
                      onFocus={(e) => e.target.style.borderColor = gold}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}>
                      <option value="" style={{ background: '#2B2B2B', color: '#888' }}>Select a model or full lineup...</option>
                      {MODELS.map(m => (
                        <option key={m.name} value={m.name} style={{ background: '#2B2B2B', color: '#fff' }}>{m.name} &mdash; {m.type}</option>
                      ))}
                      <option value="full-lineup" style={{ background: '#2B2B2B', color: '#fff' }}>Full Lineup</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full mt-4 py-4 text-[14px] font-bold uppercase tracking-[0.25em] transition cursor-pointer"
                    style={{ fontFamily: '"Outfit", sans-serif', background: gold, color: bg }}
                    onMouseEnter={(e) => e.target.style.background = '#d0d0d0'}
                    onMouseLeave={(e) => e.target.style.background = gold}>
                    Submit Dealer Inquiry
                  </button>
                </div>
              </div>
              <p className="text-center text-[14px] font-light mt-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-10" style={{ background: bg, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img src="/images/boca-logo-silver.png" alt="Boca EV" className="h-5" />
          </Link>
          <div className="flex gap-6 text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.2)' }}>
            <Link to="/privacy" className="hover:text-white/40 transition">Privacy Policy</Link>
          </div>
          <span className="text-[14px] font-light italic" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Elegance, Electrified.
          </span>
        </div>
      </footer>

      {/* ── Spec Modal ── */}
      {specCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
             onClick={() => setSpecCart(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
               style={{ background: '#2B2B2B', border: `1px solid ${gold}22` }}
               onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#0a0a0a' }}>
              <div className="w-full h-full flex items-center justify-center"
                   style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2B2B2B 50%, #1a1a1a 100%)' }}>
                <span className="text-5xl font-extrabold uppercase tracking-tight" style={{ color: 'rgba(255,255,255,0.04)' }}>
                  {specCart.name}
                </span>
              </div>
              {specCart.badge && (
                <div className="absolute top-3 left-3 text-[14px] font-bold uppercase tracking-[0.2em] px-3 py-1"
                     style={{ background: gold, color: bg }}>
                  {specCart.badge}
                </div>
              )}
              <button onClick={() => setSpecCart(null)}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-lg transition cursor-pointer"
                      style={{ background: 'rgba(10,10,10,0.7)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                &times;
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-16"
                   style={{ background: 'linear-gradient(transparent, #2B2B2B)' }} />
            </div>

            {/* Name */}
            <div className="px-6 pt-5 pb-4"
                 style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[14px] font-medium uppercase tracking-[0.2em] mb-1" style={{ color: gold }}>
                {specCart.type}
              </p>
              <h3 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Outfit", sans-serif' }}>
                {specCart.name}
              </h3>
            </div>

            {/* Full specs */}
            <div className="px-6 py-5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
                Specifications
              </h4>
              <div className="space-y-0">
                {Object.entries(specCart.specs).map(([label, value]) => (
                  <div key={label} className="flex py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span className="w-28 shrink-0 text-[14px] font-medium uppercase tracking-wide"
                          style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {label}
                    </span>
                    <span className="text-[14px] font-medium" style={{ color: silver }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="px-6 pb-5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
                Available Colors
              </h4>
              <div className="flex flex-wrap gap-2">
                {specCart.colors.map((c) => {
                  const hex = colorFor(c)
                  const light = isLightColor(c)
                  return (
                    <span key={c}
                          className="text-[14px] font-medium px-3 py-1.5 rounded-sm flex items-center gap-2"
                          style={{
                            background: hex,
                            color: light ? '#0a0a0a' : '#f5f5f5',
                            border: '1px solid rgba(255,255,255,0.15)',
                          }}>
                      {c}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Battery Options */}
            <div className="px-6 pb-5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
                Battery Options
              </h4>
              <div className="flex gap-3">
                {specCart.battery.map((b) => (
                  <span key={b} className="text-[14px] font-medium px-3 py-1.5"
                        style={{ background: 'rgba(192,192,192,0.08)', color: gold, border: `1px solid ${gold}20` }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="px-6 pb-5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: gold }}>
                Standard Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {specCart.features.map((f) => (
                  <span key={f} className="text-[14px] font-light px-3 py-1.5"
                        style={{ background: 'rgba(192,192,192,0.06)', color: 'rgba(255,255,255,0.55)', border: `1px solid ${gold}15` }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="#contact"
                 onClick={() => setSpecCart(null)}
                 className="block w-full py-3.5 text-center text-[14px] font-bold uppercase tracking-[0.2em] transition"
                 style={{ fontFamily: '"Outfit", sans-serif', background: gold, color: bg }}
                 onMouseEnter={(e) => e.target.style.background = '#d0d0d0'}
                 onMouseLeave={(e) => e.target.style.background = gold}>
                Inquire About This Model
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
