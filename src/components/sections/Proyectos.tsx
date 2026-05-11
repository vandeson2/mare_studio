'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { proyectos } from '@/data/proyectos'
import ImageOverlay from '../ui/ImagenOverlay'
import Button from '../ui/Button'

export default function Proyectos() {
  const featured = proyectos.filter((p) => p.featured).slice(0, 4)

  return (
    <section
      id='proyectos'
      aria-labelledby="proyectos-heading"
      className='bg-brand-smoke'
      style={{
        paddingTop:    'clamp(8rem, 12vw, 11rem)',
        paddingBottom: 'clamp(7rem, 11vw, 910rem)',
      }}
    >

      {/* Cabecera */}
      <div
        style={{
          paddingLeft:   'clamp(2rem, 6vw, 6rem)',
          paddingRight:  'clamp(2rem, 6vw, 6rem)',
          marginBottom:  'clamp(5rem, 7vw, 7rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,  margin: '-80px' }}
          transition={{ duration: 1.05, ease: [0.19, 1, 0.22, 1] }}
        >
          <p
            className="font-sans uppercase, text-brand-cream/32"
            style={{ fontSize: '0.62rem', letterSpacing: '0.32em', marginBottom: '1.9rem' }}
          >
            Proyectos
          </p>
          <h2
            id="proyectos-heading"
            className="font-serif font-light tracking-[-0.035em] text-brand-cream"
            style={{ fontSize: 'clamp(3rem, 6vw, 6.4rem)', lineHeight: 0.92 }}
          >
            El resultado
            <br />
            <span className="text-brand-cream/30">habla por sí solo.</span>
          </h2>
        </motion.div>
      </div>

      {/* Imagen grande */}
      {featured[0] && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden"
          style={{
            paddingLeft:  'clamp(2rem, 6vw, 6rem)',
            paddingRight: 'clamp(2rem, 6vw, 6rem)',
          }}
        >
          <ImageOverlay
              src={featured[0].featuredImage ?? featured[0].image}
              alt={featured[0].type}
              label={featured[0].type}
              subtitle={featured[0].services.join(' · ')}
              priority
              sizes="100vw"
              className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[19/9] xl:aspect-[18/9] max-w-[1100px] mx-auto shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
            />
      </motion.div>
      )}

      {/* 3 imagen inferior  */}
      <div
        className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-0"
        style={{
          marginTop:    'clamp(4rem, 7vw, 7rem)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-10 lg:gap-14  items-start">
         {featured.slice(1, 4).map((project, index) =>(
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px'  }}
              transition={{
              delay: index * 0.1,
              duration: 1.05,
              ease: [0.19, 1, 0.22, 1],
            }}
            >
              <ImageOverlay
                src={project.featuredImage ?? project.image}
                alt={project.type}
                label={project.services[0]}
                subtitle={project.services.join(' · ')}
                sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(50vw - 3rem), 340px"
                className="aspect-[4/3] md:aspect-[4/5] xl:aspect-[3/4] shadow-[0_22px_70px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
         ))}
        </div>
      </div>

      {/* ── Pie de sección */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.19, 1, 0.22, 1]  }}
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          marginTop:    'clamp(4.5rem, 6vw, 6rem)',
          display:      'flex',
          justifyContent: 'flex-end',
        }}
      >
      <Button href="/proyectos" variant='light'>
        Ver todos los proyectos
      </Button>
      </motion.div>

    </section>
  )
}
