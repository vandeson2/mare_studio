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
      className="bg-brand-cream border-t border-brand-smoke/12"
      style={{
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
          className="text-brand-smoke"
          style={{
            fontFamily:    'var(--font-cormorant), Georgia, serif',
            fontSize:      '1.05rem',
            fontWeight:    300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Maré Studio
        </span>

        {/* Links*/}
        <nav
          style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 3rem)', flexWrap: 'wrap' }}
          aria-label="Pie de página"
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans uppercase text-brand-smoke/55 hover:text-brand-smoke transition-colors duration-300"
              style={{
                fontSize:      '0.68rem',
                letterSpacing: '0.15em',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="font-sans text-brand-smoke/30"
          style={{
            fontSize:      '0.65rem',
            letterSpacing: '0.05em',
          }}
        >
          © {new Date().getFullYear()} Maré Studio
        </p>
      </div>
    </footer>
  )
}
