'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  //const y       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[560px] md:h-[92vh] overflow-hidden bg-brand-smoke"
      aria-label="Maré Studio"
    >

      {/* Imagen  */}
      <motion.div
        className="absolute inset-0"
        //style={{ y }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <Image
          src="/img/hero/hero-salon.webp"
          alt="Interiorismo residencial con salón, comerdor y mobiliario a medida"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-[82%_center] sm:object-[72%_center] md:object-[60%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(47,42,40,0.09) 0%, rgba(47,42,40,0.2) 55%, rgba(47,42,40,0.05) 75%, transparent 100%)',
          }}
        />
      </motion.div>

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
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="block font-serif font-light text-brand-cream tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.15rem, 9vw, 9.5rem)', lineHeight: 0.9 }}
              >
                Viviendas
              </motion.h1>
            </div>

            <div className="overflow-hidden leading-none">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="block font-serif font-light tracking-[-0.03em]"
                aria-hidden="true"
                style={{
                  fontSize:          'clamp(2.15rem, 9vw, 9.5rem)',
                  lineHeight:        0.9,
                  color:             'transparent',
                  WebkitTextStroke:  '1px rgba(247,243,238,0.32)',
                }}
              >
                que se venden.
              </motion.h1>
            </div>
          </div>

          {/* Fila inferior */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.0 }}
            className="flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
        
            <p
              className="font-sans text-brand-cream/60 leading-relaxed max-w-[16rem] sm:max-w-xs"
              style={{ fontSize: 'clamp(0.78rem, 1.8vw, 0.9rem)', letterSpacing: '0.01em' }}
            >
              Equipamiento integral para promotoras.<br />
              Un único interlocutor.
            </p>
            {/* CTA */}
            <Link
              href="/contacto"
              className="group flex items-center gap-3 sm:gap-5 w-fit shrink-0"
            >
              <span
                className="block h-px bg-brand-cream/25 transition-all duration-700 group-hover:w-12"
                style={{ width: 28 }}
                aria-hidden="true"
              />
              <span
                className="font-sans text-brand-cream/80 group-hover:text-brand-cream transition-colors duration-500"
                style={{ fontSize: 'clamp(0.62rem, 1.5vw, 0.7rem)', letterSpacing: '0.2em' }}
              >
                SOLICITAR PRESUPUESTO
              </span>
            </Link>
          </motion.div>

        </div>
      </motion.div>


      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px overflow-hidden sm:block"
        style={{ height: 56 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-full bg-brand-cream/30"
          animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.5 }}
          style={{ height: '100%' }}
        />
      </motion.div>

    </section>
  )
}
