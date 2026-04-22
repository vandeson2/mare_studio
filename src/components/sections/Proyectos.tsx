'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { proyectos } from '@/data/proyectos'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

export default function Proyectos() {
  const featured = proyectos.filter((p) => p.featured).slice(0, 3)

  return (
    <section
      aria-labelledby="proyectos-heading"
      style={{
        background:    '#1C1C1A',
        paddingTop:    'clamp(7rem, 14vw, 13rem)',
        paddingBottom: 'clamp(7rem, 14vw, 13rem)',
      }}
    >

      {/* ── Cabecera — mínima ── */}
      <div
        style={{
          paddingLeft:   'clamp(2rem, 6vw, 6rem)',
          paddingRight:  'clamp(2rem, 6vw, 6rem)',
          marginBottom:  'clamp(4.5rem, 9vw, 9rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
        >
          <p
            className="font-sans uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'rgba(245,242,238,0.25)', marginBottom: '1.75rem' }}
          >
            Proyectos
          </p>
          <h2
            id="proyectos-heading"
            className="font-serif font-light tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 0.95, color: '#F5F2EE' }}
          >
            El resultado
            <br />
            <span style={{ color: 'rgba(245,242,238,0.35)' }}>habla por sí solo.</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Imagen 1 — ancha, a sangre de márgenes ── */}
      {featured[0] && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden"
          style={{
            marginLeft:  'clamp(2rem, 6vw, 6rem)',
            marginRight: 'clamp(2rem, 6vw, 6rem)',
            aspectRatio: '16 / 9',
          }}
        >
          <PremiumPlaceholder
            label={featured[0].services[0] ?? 'Proyecto'}
            note={featured[0].type}
            tone="dark"
          />
        </motion.div>
      )}

      {/* Pie imagen 1 — etiqueta tipográfica, no overlay */}
      {featured[0] && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            paddingLeft:  'clamp(2rem, 6vw, 6rem)',
            paddingRight: 'clamp(2rem, 6vw, 6rem)',
            marginTop:    '2.2rem',
            display:      'flex',
            justifyContent: 'space-between',
            alignItems:   'baseline',
          }}
        >
          <p
            className="font-serif font-light"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(245,242,238,0.5)' }}
          >
            {featured[0].type}
          </p>
          <p
            className="font-sans uppercase"
            style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(245,242,238,0.2)' }}
          >
            {featured[0].services.join(' · ')}
          </p>
        </motion.div>
      )}

      {/* ── Par de imágenes asimétricas ── */}
      {/* Imagen 2: desplazada a la derecha — imagen 3: anclada a la izquierda */}
      <div
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          marginTop:    'clamp(5rem, 8vw, 9rem)',
          display:      'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:          'clamp(1.8rem, 3vw, 3rem)',
          alignItems:   'end',
        }}
      >

        {/* Imagen 2 — cuadrada, con margin superior para crear desequilibrio */}
        {featured[1] && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
            style={{ aspectRatio: '16 / 10', marginTop: 'clamp(2rem, 4vw, 4rem)' }}
          >
            <div className="relative w-full h-full">
              <PremiumPlaceholder
                label={featured[1].services[0] ?? 'Proyecto'}
                note={featured[1].type}
                tone="dark"
                bordered
              />
            </div>
          </motion.div>
        )}

        {/* Imagen 3 — más alta, portrait */}
        {featured[2] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
            style={{ aspectRatio: '16 / 10' }}
          >
            <div className="relative w-full h-full">
              <PremiumPlaceholder
                label={featured[2].services[0] ?? 'Proyecto'}
                note={featured[2].type}
                tone="dark"
                bordered
              />
            </div>
          </motion.div>
        )}

      </div>

      {/* ── Pie de sección — link y nada más ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          marginTop:    'clamp(4rem, 7vw, 7rem)',
          display:      'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link
          href="/proyectos"
          className="font-sans hover:text-[#F5F2EE] transition-colors duration-500"
          style={{
            fontSize:      '0.68rem',
            letterSpacing: '0.2em',
            color:         'rgba(245,242,238,0.3)',
          }}
        >
          VER TODOS LOS PROYECTOS
        </Link>
      </motion.div>

    </section>
  )
}
