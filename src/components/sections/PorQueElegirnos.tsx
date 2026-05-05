'use client'

import { motion } from 'framer-motion'
import { razones } from '@/data/razones'
import ImageOverlay from '../ui/ImagenOverlay'

export default function PorQueElegirnos() {
  return (
    <section
      aria-labelledby="porque-heading"
      className='bg-brand-sand'
      style={{
        paddingTop:    'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(6rem, 10vw, 10rem)',
      }}
    >
      <div
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >

        {/* Titular  */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1] }}
          style={{ marginBottom: 'clamp(4.5rem, 7vw, 7rem)' }}
        >
          <p
            className="font-sans uppercase text-brand-smoke/48"
            style={{ fontSize: '0.62rem', letterSpacing: '0.32em', marginBottom: '1.8rem' }}
          >
            Por qué elegirnos
          </p>
          <h2
            id="porque-heading"
            className="font-serif font-light text-brand-smoke tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5.4rem)', lineHeight: 0.95 }}
          >
            No solo diseño.
            <br />
            <span className="text-brand-smoke/34">Resultado en ventas.</span>
          </h2>
        </motion.div>

        {/* Layout: imagen izquierda fija, argumentos derecha */}
        <div
          className="block md:grid"
          style={{
            display:             'grid',
            gridTemplateColumns: '0.95fr 1fr',
            gap:                 'clamp(4rem, 8vw, 10rem)',
            alignItems:          'start',
          }}
        >

          {/* Imagen  */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.15, ease: [0.19, 1, 0.22, 1] }}
            className="relative mb-12 overflow-hidden md:sticky md:top-28 md:mb-0"
            style={{ aspectRatio: '4 / 3', width: '100%' }}
          >
            <ImageOverlay
                src="/img/cocina4.jpg"
                alt="Cocina moderna blanca con isla central"
                label='Piso piloto'
                subtitle='Espacio diseñado para vender'
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-full w-full min-h-0"
              />
          </motion.div>

          {/* Argumentos */}
          <div className="border-t border-brand-smoke/16">
            {razones.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 18}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.7, duration: 0.85, ease: [0.19, 1, 0.22, 1], }}
              >
                <div
                  className="transition-colors duration-500 group-hover:bg-brand-cream/18"
                  style={{
                    paddingTop:    'clamp(2rem, 3vw, 3rem)',
                    paddingBottom: 'clamp(2rem, 3vw, 3rem)',
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '1rem',
                  }}
                >
                  <h3
                    className="font-serif font-light text-brand-smoke/92 transition-colors duration-500 group-hover:text-brand-smoke"
                    style={{ fontSize: 'clamp(1.35rem, 2vw, 1.8rem)', lineHeight: 1.08}}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="font-sans text-brand-smoke/76"
                    style={{ fontSize: '0.88rem', lineHeight: 1.85, maxWidth: '42ch' }}
                  >
                    {r.description}
                  </p>
                </div>
                <div className="h-px bg-brand-smoke/14" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
