'use client'

import { motion } from 'framer-motion'
import { servicios } from '@/data/servicios'
import ServiceCard from '../cards/ServiceCard'

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-brand-sand text-brand-smoke"
      style={{
        paddingTop: 'clamp(6rem, 12vw, 10rem)',
        paddingBottom: 'clamp(6rem, 12vw, 10rem)',
      }}
    >
      <div
        className="max-w-content mx-auto"
        style={{
          paddingLeft: 'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div>
            <p
              className="font-sans uppercase text-brand-smoke/60"
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.28em',
                marginBottom: '1.5rem',
              }}
            >
              Servicios
            </p>

            <h2
              className="font-serif font-light tracking-[-0.03em]"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.8rem)',
                lineHeight: 0.94,
              }}
            >
              Todo lo que necesita
              <br />
              <span className="text-brand-smoke/45">una promoción.</span>
            </h2>
          </div>

          <p
            className="font-sans text-brand-smoke/70 md:max-w-[280px] md:text-right"
            style={{
              fontSize: '0.88rem',
              lineHeight: 1.85,
            }}
          >
            Soluciones coordinadas para promociones inmobiliarias,
            pensadas como un conjunto, no como piezas aisladas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.85 }}
            >
              <ServiceCard servicio={servicio} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}