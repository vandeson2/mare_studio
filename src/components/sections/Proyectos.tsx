'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { proyectos } from '@/data/proyectos'
import Image from 'next/image'
import ImageOverlay from '../ui/ImagenOverlay'

export default function Proyectos() {
  const featured = proyectos.filter((p) => p.featured).slice(0, 4)

  return (
    <section
      aria-labelledby="proyectos-heading"
      className='bg-brand-smoke'
      style={{
        paddingTop:    'clamp(7rem, 10vw, 9rem)',
        paddingBottom: 'clamp(7rem, 10vw, 9rem)',
      }}
    >

      {/* Cabecera */}
      <div
        style={{
          paddingLeft:   'clamp(2rem, 6vw, 6rem)',
          paddingRight:  'clamp(2rem, 6vw, 6rem)',
          marginBottom:  'clamp(4.5rem, 5vw, 5rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
        >
          <p
            className="font-sans uppercase, text-brand-cream/28"
            style={{ fontSize: '0.65rem', letterSpacing: '0.28em', marginBottom: '1.75rem' }}
          >
            Proyectos
          </p>
          <h2
            id="proyectos-heading"
            className="font-serif font-light tracking-[-0.02em] text-brand-cream"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 0.95 }}
          >
            El resultado
            <br />
            <span className="text-brand-cream/40">habla por sí solo.</span>
          </h2>
        </motion.div>
      </div>

      {/* Imagen grande */}
      {featured[0] && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
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
              className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[19/9] xl:aspect-[18/9] max-w-[1100px] mx-auto"
            />
      </motion.div>
      )}

      {/* 3 imagen inferior  */}
      <div
        className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-0"
        style={{
          marginTop:    'clamp(3rem, 6vw, 6rem)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-8 lg:gap-10  items-start">
         {featured.slice(1, 4).map((project, index) =>(
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
              delay: index * 0.12,
              duration: 1.0,
              ease: [0.19, 1, 0.22, 1],
            }}
            >
              <ImageOverlay
                src={project.featuredImage ?? project.image}
                alt={project.type}
                label={project.services[0]}
                subtitle={project.services.join(' · ')}
                sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(50vw - 3rem), 340px"
                className="aspect-[4/3] md:aspect-[4/5] xl:aspect-[3/4]"
              />
            </motion.div>
         ))}
        </div>
      </div>

      {/* ── Pie de sección */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          marginTop:    'clamp(4rem, 5vw, 5rem)',
          display:      'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Link
          href="/proyectos"
          className="font-sans text-brand-cream/40 hover:text-brand-cream transition-colors duration-500"
          style={{
            fontSize:      '0.68rem',
            letterSpacing: '0.2em',
          }}
        >
          VER TODOS LOS PROYECTOS
        </Link>
      </motion.div>

    </section>
  )
}
