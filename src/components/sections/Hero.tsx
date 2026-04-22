'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden bg-[#14140F]"
      aria-label="Maré Studio"
    >

      {/* Imagen — protagonista absoluta */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <PremiumPlaceholder
          label="Residencial premium"
          note="Hero temporal hasta entrega de fotografía final"
          tone="dark"
        />
        {/* Un único overlay direccional — oscuro abajo, transparente arriba */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(20,20,15,0.88) 0%, rgba(20,20,15,0.18) 55%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Contenido — todo en la parte inferior, sin saturar */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ opacity }}
      >
        <div className="px-8 md:px-16 lg:px-24 pb-14 md:pb-20">

          {/* Titular — las dos líneas con el contraste sólido / outline */}
          <div className="mb-10 md:mb-14">
            <div className="overflow-hidden leading-none">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="block font-serif font-light text-[#F5F2EE] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(3.6rem, 8.5vw, 9.5rem)', lineHeight: 0.9 }}
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
                  fontSize:          'clamp(3.6rem, 8.5vw, 9.5rem)',
                  lineHeight:        0.9,
                  color:             'transparent',
                  WebkitTextStroke:  '1px rgba(245,242,238,0.32)',
                }}
              >
                que se venden.
              </motion.h1>
            </div>
          </div>

          {/* Fila inferior — copy izquierda, CTA derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.0 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          >
            {/* Copy — una sola frase */}
            <p
              className="font-sans text-[#F5F2EE]/50 leading-relaxed max-w-xs"
              style={{ fontSize: '0.8rem', letterSpacing: '0.01em' }}
            >
              Equipamiento integral para promotoras.<br />
              Un único interlocutor.
            </p>

            {/* CTA — texto puro, sin forma */}
            <Link
              href="/contacto"
              className="group flex items-center gap-5 w-fit shrink-0"
            >
              <span
                className="block h-px bg-[#F5F2EE]/25 transition-all duration-700"
                style={{ width: 36 }}
                aria-hidden="true"
              />
              <span
                className="font-sans text-[#F5F2EE]/60 group-hover:text-[#F5F2EE] transition-colors duration-500"
                style={{ fontSize: '0.68rem', letterSpacing: '0.22em' }}
              >
                SOLICITAR PRESUPUESTO
              </span>
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Línea de scroll — centrada, mínima */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px overflow-hidden"
        style={{ height: 56 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-full bg-[#F5F2EE]/30"
          animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut', delay: 0.5 }}
          style={{ height: '100%' }}
        />
      </motion.div>

    </section>
  )
}
