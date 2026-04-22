'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros',  href: '/nosotros'  },
  { label: 'Contacto',  href: '/contacto'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const textColor    = scrolled ? 'rgba(28,28,26,0.85)'   : 'rgba(245,242,238,0.75)'
  const textHover    = scrolled ? '#1C1C1A'                : '#F5F2EE'
  const bgScrolled   = 'rgba(245,242,238,0.92)'

  return (
    <>
      <header
        style={{
          position:    'fixed',
          top:         0,
          left:        0,
          right:       0,
          zIndex:      50,
          height:      '4.5rem',
          display:     'flex',
          alignItems:  'center',
          padding:     '0 clamp(2rem, 6vw, 6rem)',
          justifyContent: 'space-between',
          background:  scrolled ? bgScrolled : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,203,191,0.5)' : 'none',
          transition:  'background 0.5s, border-color 0.5s, backdrop-filter 0.5s',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily:    'var(--font-cormorant), Georgia, serif',
            fontSize:      '1.1rem',
            fontWeight:    300,
            letterSpacing: '0.2em',
            color:         scrolled ? '#1C1C1A' : '#F5F2EE',
            textTransform: 'uppercase',
            transition:    'color 0.4s',
          }}
        >
          Maré Studio
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily:    'var(--font-inter), system-ui, sans-serif',
                fontSize:      '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         textColor,
                transition:    'color 0.35s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = textHover)}
              onMouseLeave={e => (e.currentTarget.style.color = textColor)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Hamburguesa — solo en móvil */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-1"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block bg-current"
              style={{ width: 24, height: 1, color: scrolled ? '#1C1C1A' : '#F5F2EE' }}
              animate={
                open
                  ? i === 0 ? { rotate: 45, y: 6 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position:   'fixed',
              inset:      0,
              zIndex:     40,
              background: '#1C1C1A',
              display:    'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding:    'clamp(2rem, 6vw, 6rem)',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily:    'var(--font-cormorant), Georgia, serif',
                      fontSize:      'clamp(2.2rem, 6vw, 3.5rem)',
                      fontWeight:    300,
                      color:         'rgba(245,242,238,0.7)',
                      letterSpacing: '-0.01em',
                      transition:    'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F5F2EE')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,238,0.7)')}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{
                position: 'absolute',
                bottom:   'clamp(2rem, 5vw, 4rem)',
                left:     'clamp(2rem, 6vw, 6rem)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,242,238,0.25)', marginBottom: '0.6rem', letterSpacing: '0.08em' }}>
                marestudio@gmail.es
              </p>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: 'rgba(245,242,238,0.25)', letterSpacing: '0.08em' }}>
                639 628 867
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
