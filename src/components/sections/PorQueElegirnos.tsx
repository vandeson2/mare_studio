'use client'

import { motion } from 'framer-motion'
import { razones } from '@/data/razones'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

export default function PorQueElegirnos() {
  return (
    <section
      aria-labelledby="porque-heading"
      className='bg-brand-sand'
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

        {/* Titular — ocupa toda la anchura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
          style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}
        >
          <p
            className="font-sans uppercase text-brand-smoke/48"
            style={{ fontSize: '0.65rem', letterSpacing: '0.28em', marginBottom: '1.75rem' }}
          >
            Por qué elegirnos
          </p>
          <h2
            id="porque-heading"
            className="font-serif font-light text-brand-smoke tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', lineHeight: 0.95 }}
          >
            No solo diseño.
            <br />
            <span className="text-brand-smoke/52">Resultado en ventas.</span>
          </h2>
        </motion.div>

        {/* Layout: imagen izquierda fija, argumentos derecha */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 'clamp(4rem, 8vw, 11rem)',
            alignItems:          'start',
          }}
          className="block md:grid"
        >

          {/* Imagen  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            className="relative mb-12 overflow-hidden bg-brand-cream border border-brand-smoke/10 md:sticky md:top-28 md:mb-0 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            style={{ aspectRatio: '5 / 4' }}
          >
            <PremiumPlaceholder
              label="Piso piloto"
              note="Referencia visual temporal"
              bordered
            />
          </motion.div>

          {/* Argumentos */}
          <div className="border-t border-brand-smoke/20">
            {razones.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.1, duration: 0.9 }}
              >
                <div
                  style={{
                    paddingTop:    'clamp(1.8rem, 3vw, 2.8rem)',
                    paddingBottom: 'clamp(1.8rem, 3vw, 2.8rem)',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '0.85rem',
                  }}
                >
                  <h3
                    className="font-serif font-light text-brand-smoke"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.1 }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="font-sans text-brand-smoke/72"
                    style={{ fontSize: '0.8rem', lineHeight: 1.85, maxWidth: '38ch' }}
                  >
                    {r.description}
                  </p>
                </div>
                <div className="h-px bg-brand-smoke/20" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
