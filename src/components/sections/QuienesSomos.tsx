'use client'

import { motion } from 'framer-motion'
import ImageOverlay from '../ui/ImagenOverlay'
export default function QuienesSomos() {
  return (
    <section
      id='nosotros'
      aria-labelledby="quienes-somos-heading"
      className='bg-[#F0EBE4]'
      style={{
        paddingTop:    'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(6.5rem, 12vw, 12rem)',
      }}
    >
      <div
        style={{
          paddingLeft:  'clamp(1.25rem, 6vw, 6rem)',
          paddingRight: 'clamp(1.25rem, 6vw, 6rem)',
        }}
      >

        {/* etiqueta + titular izquierda, imagen + texto derecha */}
        <div  className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-[clamp(3rem,5vw,7rem)] md:items-start">

          {/* Columna izquierda — titular muy grande */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12 md:mb-0"
          >
            <p
              className="font-sans uppercase text-brand-smoke/48"
              style={{ fontSize: '0.62rem', letterSpacing: '0.32em', marginBottom: '2.2rem' }}
            >
              Sobre nosotros
            </p>

            <h2
              id="quienes-somos-heading"
              className="font-serif font-light text-brand-smoke tracking-[-0.035em]"
              style={{ fontSize: 'clamp(2.65rem, 4.8vw, 5rem)', lineHeight: 0.93 }}
            >
              Más de veinte
              <br />
              años equipando
              <br />
              <span className="text-brand-smoke/28">promociones.</span>
            </h2>

            {/* Tres datos*/}
            <div
              className="border-t border-brand-sand/70"
              style={{
                marginTop:   'clamp(3.5rem, 5vw, 5.5rem)',
                paddingTop:  '2rem',
                display:     'flex',
                flexDirection: 'column',
                gap:         '1.45rem',
                maxWidth:    '26rem',
              }}
            >
              {[
                ['+20', 'años en el sector'],
                ['01',  'único interlocutor'],
                ['6',   'líneas de servicio'],
              ].map(([val, label]) => (
                <div 
                  key={label} 
                  className='border-b border-brand-sand/35 pb-4 last:border-b-0 last:pb-0'
                  style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
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

          {/* Columna derecha — */}
          <div className="flex flex-col gap-8 lg:pt-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden shadow-[0_24px_70px_rgba(47,42,40,0.06)] max-w-[380px] max-h-[460px] max-auto w-full"
              style={{ aspectRatio: '4 / 5', padding: 'clamp(0.9rem, 1.8vw, 1.4rem', }}
            >
              <ImageOverlay
                  src='/img/quiensomos/quien_somos.webp'
                  alt='Imagen corporativa'
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="h-full w-full min-h-0"
                 
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="font-sans text-brand-smoke/70 max-w-[34rem]"
              style={{ fontSize: '0.88rem', lineHeight: 1.9, letterSpacing:'0.01em', maxWidth: '52ch' }}
            >
              Especialistas en equipamiento, carpintería integral e interiorismo para promociones inmobiliarias.
              <br/>
              Trabajamos directamente con promotoras para garantizar
              un servicio completo, eficiente y adaptado a cada proyecto. 
              <br/>
              Nuestro equipo incluye diseñadores de interiores que potencian 
              cada espacio para aumentar su valor percibido y favorecer su comercialización.
              <br/>
              Cocinas, suelos, puertas, armarios y estores — todo bajo
              un mismo paraguas. Sin dispersión. Sin sorpresas.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  )
}
