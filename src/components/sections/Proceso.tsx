'use client'

import { motion } from 'framer-motion'
import { proceso } from '@/data/proceso'

export default function Proceso() {
  return (
    <section
      aria-labelledby="proceso-heading"
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

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
          style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}
        >
          <p
            className="font-sans uppercase text-brand-smoke/45"
            style={{ fontSize: '0.65rem', letterSpacing: '0.28em', marginBottom: '1.75rem' }}
          >
            Cómo trabajamos
          </p>
          <h2
            id="proceso-heading"
            className="font-serif font-light text-brand-smoke tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', lineHeight: 0.95 }}
          >
            De la visita
            <br />
            <span className="text-brand-smoke/45">a la entrega.</span>
          </h2>
        </motion.div>

       
        <div className="border-t border-brand-smoke/14">
          {proceso.map((paso, i) => (
            <motion.div
              key={paso.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.08, duration: 0.9 }}
            >
              <div
                style={{
                  display:       'grid',
                  gridTemplateColumns: '2.5rem 1fr 1fr',
                  alignItems:    'start',
                  gap:           'clamp(1.5rem, 3vw, 4rem)',
                  paddingTop:    'clamp(1.8rem, 3vw, 2.8rem)',
                  paddingBottom: 'clamp(1.8rem, 3vw, 2.8rem)',
                }}
                className="grid-cols-[2rem_1fr] md:!grid-cols-[2.5rem_1fr_1fr]"
              >
              
                <span
                  className="font-sans text-brand-smoke/22"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.08em', paddingTop: '0.35rem' }}
                >
                  {String(paso.step).padStart(2, '0')}
                </span>

                {/* Título */}
                <h3
                  className="font-serif font-light text-brand-smoke"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.15 }}
                >
                  {paso.title}
                </h3>

                {/* Descripción */}
                <p
                  className="hidden md:block font-sans text-brand-smoke/60"
                  style={{ fontSize: '0.8rem', lineHeight: 1.85 }}
                >
                  {paso.description}
                </p>
              </div>
              <div  className="h-px bg-brand-smoke/14" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
