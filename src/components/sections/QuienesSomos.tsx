'use client'

import { motion } from 'framer-motion'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

export default function QuienesSomos() {
  return (
    <section
      aria-labelledby="quienes-somos-heading"
      className='bg-brand-cream'
      style={{
        paddingTop:    'clamp(7rem, 14vw, 13rem)',
        paddingBottom: 'clamp(7rem, 14vw, 13rem)',
      }}
    >
      <div
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >

        {/* Layout asimétrico: etiqueta + titular izquierda, imagen + texto derecha */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 'clamp(3rem, 6vw, 8rem)',
            alignItems:          'start',
          }}
          className="block md:grid"
        >

          {/* Columna izquierda — titular muy grande con mucho aire abajo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12 md:mb-0"
          >
            <p
              className="font-sans uppercase text-brand-smoke/55"
              style={{ fontSize: '0.65rem', letterSpacing: '0.28em', marginBottom: '2rem' }}
            >
              Sobre nosotros
            </p>

            <h2
              id="quienes-somos-heading"
              className="font-serif font-light text-brand-smoke tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', lineHeight: 0.95 }}
            >
              Más de veinte
              <br />
              años equipando
              <br />
              <span className="text-brand-smoke/40">promociones.</span>
            </h2>

            {/* Tres datos — sin cajas, solo tipografía con separador fino */}
            <div
              className="border-t border-brand-smoke/14"
              style={{
                marginTop:   'clamp(3.5rem, 6vw, 6rem)',
                paddingTop:  '2rem',
                display:     'flex',
                flexDirection: 'column',
                gap:         '1.6rem',
              }}
            >
              {[
                ['+20', 'años en el sector'],
                ['01',  'único interlocutor'],
                ['6',   'líneas de servicio'],
              ].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                  <span
                    className="font-serif font-light text-brand-smoke"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1, minWidth: '3.5rem' }}
                  >
                    {val}
                  </span>
                  <span
                    className="font-sans text-brand-smoke/55"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.05em' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha — imagen primero, texto debajo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 4vw, 4rem)' }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden bg-brand-sand border border-brand-smoke/10"
              style={{ aspectRatio: '4 / 3' }}
            >
              <PremiumPlaceholder
                label="Equipo Maré Studio"
                note="Retrato corporativo temporal"
                bordered
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="font-sans text-brand-smoke-70"
              style={{ fontSize: '0.85rem', lineHeight: 1.9, maxWidth: '36ch' }}
            >
              Trabajamos directamente con promotoras para garantizar
              un servicio completo, eficiente y adaptado a cada proyecto.
              Cocinas, suelos, puertas, armarios y estores — todo bajo
              un mismo paraguas. Sin dispersión. Sin sorpresas.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  )
}
