'use client'

import Link from 'next/link'

const links = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros',  href: '/nosotros'  },
  { label: 'Contacto',  href: '/contacto'  },
]

export default function Footer() {
  return (
    <footer
      style={{
        background:   '#F5F2EE',
        borderTop:    '1px solid #D4CBBF',
        padding:      'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 6rem)',
      }}
    >
      <div
        style={{
          display:        'flex',
          flexWrap:       'wrap',
          justifyContent: 'space-between',
          alignItems:     'flex-end',
          gap:            '2rem',
        }}
      >
        {/* Marca */}
        <span
          style={{
            fontFamily:    'var(--font-cormorant), Georgia, serif',
            fontSize:      '1.05rem',
            fontWeight:    300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         '#1C1C1A',
          }}
        >
          Maré Studio
        </span>

        {/* Links — en línea */}
        <nav
          style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 3rem)', flexWrap: 'wrap' }}
          aria-label="Pie de página"
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily:    'var(--font-inter), system-ui, sans-serif',
                fontSize:      '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         '#9E9589',
                transition:    'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9E9589')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily:    'var(--font-inter), system-ui, sans-serif',
            fontSize:      '0.65rem',
            color:         '#D4CBBF',
            letterSpacing: '0.05em',
          }}
        >
          © {new Date().getFullYear()} Maré Studio
        </p>
      </div>
    </footer>
  )
}
