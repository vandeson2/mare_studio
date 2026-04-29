'use client'

import { motion } from 'framer-motion'
import { proceso } from '@/data/proceso'

export default function Proceso() {
  return (
    <section
      aria-labelledby="proceso-heading"
      className='bg-[#F0EBE4]'
      style={{
        paddingTop:    'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(6rem, 10vw, 10rem)',
      }}
    >
      <div
        className='max-w-content mx-auto'
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1] }}
          style={{ marginBottom: 'clamp(4rem, 6vw, 6rem)' }}
        >
          <p
            className="font-sans uppercase text-brand-smoke/45"
            style={{ fontSize: '0.66rem', letterSpacing: '0.32em', marginBottom: '1.8rem' }}
          >
            Cómo trabajamos
          </p>
          <h2
            id="proceso-heading"
            className="font-serif font-light text-brand-smoke tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5.4rem)', lineHeight: 0.92 }}
          >
            De la visita
            <br />
            <span className="text-brand-smoke/32">a la entrega.</span>
          </h2>
        </motion.div>

       
        <div className="border-t border-brand-smoke/75">
          {proceso.map((paso, i) => (
            <motion.div
              key={paso.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
              className='group'
            >
              <div
                className="
                  grid
                  grid-cols-[2.2rem_1fr]
                  md:grid-cols-[3rem_0.9fr_1.1fr]
                  transition-colors duration-500
                  group-hover:bg-brand-cream/22
                "
                style={{
                  alignItems:    'start',
                  gap:           'clamp(1.5rem, 3vw, 4rem)',
                  paddingTop:    'clamp(2rem, 3.2vw, 3rem)',
                  paddingBottom: 'clamp(2rem, 3.2vw, 3rem)',
                }}
              >
              
                <span
                  className="font-sans text-brand-smoke/28 transition-colors duration-500  group-hover:text-brand-clay/80"
                  style={{ fontSize: '0.6.8rem', letterSpacing: '0.12em', paddingTop: '0.42rem' }}
                >
                  {String(paso.step).padStart(2, '0')}
                </span>

                {/* Título */}
                <h3
                  className="font-serif font-light text-brand-smoke/92 transition-colors duration-500 group-hover:text-brand-smoke"
                  style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)', lineHeight: 1.12 }}
                >
                  {paso.title}
                </h3>

                {/* Descripción */}
                <p
                  className="col-start-2 mt-4 font-sans text-brand-smoke/62 md:col-start-auto md:mt-0"
                  style={{ fontSize: 'clamp(0.84rem, 0.95vw, 0.95rem)', lineHeight: 1.85, maxWidth: '58ch' }}
                >
                  {paso.description}
                </p>
              </div>
              <div  className="h-px bg-brand-sand/70" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
