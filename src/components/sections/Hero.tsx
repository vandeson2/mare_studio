'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id='hero'
      ref={ref}
      className="relative h-[100svh] min-h-[560px] md:h-[92vh] overflow-hidden bg-brand-cream"
      aria-label="Maré Studio"
    >

      {/* Imagen  */}
      <motion.div
        className="absolute inset-0"
        //style={{ y }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.19, 1, 0.22, 1] }}
      >
        {/* Imagen desktop */}
        <Image
          src="/img/hero/hero-salon.webp"
          alt="Interiorismo residencial con salón, comedor y mobiliario a medida"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-[82%_center] sm:object-[72%_center] md:object-[60%_center]"
        />

        {/* Imagen Móvil */}
        <Image
          src="/img/hero/hero-salon-responsive.webp"
          alt='Interiorismo residencial con salón, comedor y mobiliario a medida'
          fill
          priority
          sizes='100vw'
          className='block md:hidden object-cover object-center'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-brand-smoke/10'/>

        {/* Overlay lateral */}
        <div
          className='absolute inset-0 bg-[linear-gradient(90deg, rgba(47,42,40,0.26), rgba(47,42,40,0.10), transparent_72%)]'
        />
        {/* Overlay vertical */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top, rgba(47,42,40,0.32), rgba(47,42,40,0.4))]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_24%_58%,rgba(47,42,40,0.46),rgba(47,42,40,0.22)_32%,transparent_62%)]"
        />

      </motion.div>
      
      {/* Marco */}
      <div
        className='pointer-events-none absolute left-4 right-4 top-16 bottom-10 border border-[rgba(220,205,190,0.30)] md:left-12 md:right-12 md:top-16 md:bottom-12'
        aria-hidden="true" 
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end sm:justify-end justify-end"
        style={{ opacity }}
      >
        <div 
          className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24"
          style={{ paddingBottom: 'clamp(5rem, 14vh, 7rem)' }}
        >
          {/*Titulo */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-[95%] sm:max-w-none">
            <div className="overflow-hidden leading-none">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="block font-serif font-light text-brand-cream tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.15rem, 9vw, 9.5rem)', lineHeight: 0.9, textShadow: '0 12px 42px rgba(47,42,40,0.24)', }}
              >
                
              </motion.h1>
            </div>

            <div className="overflow-hidden leading-none">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="block font-serif font-light tracking-[-0.03em]"
                aria-hidden="true"
                style={{
                  fontSize:          'clamp(2.15rem, 9vw, 9.5rem)',
                  lineHeight:        0.9,
                  color: 'rgba(247,243,238,0.08)', 
                  WebkitTextStroke: '1px rgba(220,205,190,0.92)', 
                  letterSpacing: '-0.04em',
                }}
              >
                
              </motion.h1>
            </div>
          </div>

          {/* Fila inferior */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.0 }}
            className="flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-[34rem]">
            <p
              className="font-sans font-light text-brand-cream leading-[1.3]"
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.85rem)',
                letterSpacing: '0.005em',
                textShadow: '0 8px 26px rgba(47,42,40,0.16)',
              }}
            >
              <span className="font-semibold block sm:inline">Interiorismo y equipamiento para</span>{' '}
              <span className="text-brand-cream/90 font-light italic">
                proyectos residenciales, comerciales y particulares.
              </span>
            </p>
              <p
                className="mt-5 max-w-[23rem] font-sans font-light leading-relaxed text-brand-cream/70"
                style={{
                  fontSize: 'clamp(0.78rem, 1.45vw, 0.92rem)',
                  letterSpacing: '0.015em',
                  textShadow: '0 8px 26px rgba(47,42,40,0.12)',
                }}
              >
                Diseño, fabricación e instalación con un único interlocutor.
              </p>
            </div>
            {/* CTA */}
            <Button href="#contacto">
              Solicitar presupuesto
            </Button>
          </motion.div>

        </div>
      </motion.div>


      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px overflow-hidden sm:block"
        style={{ height: 58 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-full bg-[rgba(220,205,190,0.45)]"
          animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.5 }}
          style={{ height: '100%' }}
        />
      </motion.div>

    </section>
  )
}
