'use client'

import { motion } from 'framer-motion'
import { servicios } from '@/data/servicios'
import ServiceCard from '../cards/ServiceCard'

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-brand-sand/85 text-brand-smoke"
      style={{
        paddingTop: 'clamp(7rem, 12vw, 11rem)',
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
              className="font-sans uppercase text-brand-smoke/55"
              style={{
                fontSize: '0.64rem',
                letterSpacing: '0.32em',
                marginBottom: '1.7rem',
              }}
            >
              Servicios
            </p>

            <h2
              className="font-serif font-light tracking-[-0.04em]"
              style={{
                fontSize: 'clamp(3rem, 6.2vw, 6.6rem)',
                lineHeight: 0.92,
              }}
            >
              Todo lo que necesita
              <br />
              <span className="text-brand-smoke/35">una promoción.</span>
            </h2>
          </div>

          <p
            className="font-sans text-brand-smoke/68 md:max-w-[32ch] md:text-right"
            style={{
              fontSize: 'calmp(0.9rem, 1vw, 1rem',
              lineHeight: 1.75,
              letterSpacing: '0.01em',
            }}
          >
            Soluciones coordinadas para promociones inmobiliarias,
            pensadas como un conjunto, no como piezas aisladas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 md:gap-11">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.055, duration: 0.95, ease: [0.19, 1, 0.22, 1], }}
            >
              <ServiceCard servicio={servicio} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}