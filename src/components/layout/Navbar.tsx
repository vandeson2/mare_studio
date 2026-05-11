'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros',  href: '#nosotros'  },
  { label: 'Contacto',  href: '#contacto'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const headerTextClass = scrolled ? 'text-brand-smoke/90' : 'text-brand-cream'
  const navTextClass = scrolled
    ? 'text-brand-smoke/68 hover:text-brand-smoke'
    : 'text-brand-cream/76 hover:text-brand-cream'

  return (
    <>
      <header
        style={{
          position:    'fixed',
          top:         0,
          left:        0,
          right:       0,
          zIndex:      50,
          height: scrolled ? '4.5rem' : '5.6rem',
          display:     'flex',
          alignItems:  'center',
          padding:     '0 clamp(2rem, 6vw, 6rem)',
          justifyContent: 'space-between',
          background:  scrolled ? 'rgba(247,243,238,0.88' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(220,205,190,0.42)' : '1px solid transparent',
          transition:  ' height 0.55s ease, background 0.55s ease, border-color 0.55s, box-shadow 0.55s ease, backdrop-filter 0.55s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className={`${headerTextClass} transition-colors duration-400`}
          style={{
            fontFamily:    'var(--font-cormorant), Georgia, serif',
            fontSize:      '1.6rem',
            fontWeight:    600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          Maré Studio
        </a>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14" aria-label="Navegación principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`
                 relative font-sans uppercase transition-all duration-500 
                 ${navTextClass}
                 after:absolute after:left-0 after:-bottom-2
                 after:h-[0.5px] after:w-0 after:bg-current after:opacity-80
                 after:transition-all after:duration-500
                 hover:after:w-full
              `}
              style={{
                fontSize:      '0.68rem',
                letterSpacing: '0.24em',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburguesa  */}
        <button
          onClick={() => setOpen(o => !o)}
          className={`md:hidden flex flex-col justify-center gap-[5px] p-1 ${headerTextClass}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block bg-current"
              style={{ width: 24, height: 1}}
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
            className="bg-brand-smoke"
            style={{
              position:   'fixed',
              inset:      0,
              zIndex:     40,
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
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif font-light text-brand-cream/72 hover:text-brand-cream transition-colors duration-300"
                    style={{
                      fontSize:      'clamp(2.2rem, 6vw, 3.5rem)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {l.label}
                  </a>
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
              <p 
                className="font-sans text-brand-cream/28"
                style={{fontSize: '0.72rem', marginBottom: '0.6rem', letterSpacing: '0.08em' }}
              >
                marestudio@gmail.es
              </p>
              <p 
                className="font-sans text-brand-cream/28"
                style={{fontSize: '0.72rem',letterSpacing: '0.08em' }}
              >
                639 628 867
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
