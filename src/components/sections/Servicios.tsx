'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { servicios } from '@/data/servicios'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

export default function Servicios() {
  return (
    <section
      aria-labelledby="servicios-heading"
      className="bg-brand-sand"
      style={{
        paddingTop:    'clamp(7rem, 14vw, 13rem)',
        paddingBottom: 'clamp(7rem, 14vw, 13rem)',
      }}
    >

      {/* ── Cabecera — máximo aire ── */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        style={{ paddingLeft: 'clamp(2rem, 6vw, 6rem)', paddingRight: 'clamp(2rem, 6vw, 6rem)', marginBottom: 'clamp(4rem, 8vw, 8rem)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Etiqueta */}
          <p style={{ fontSize: '0.65rem', 
                      letterSpacing: '0.28em', 
                      marginBottom: '1.75rem' }}
             className="uppercase font-sans text-brand-smoke/60"
            >
            Servicios
          </p>
          {/* Titular */}
          <h2
            id="servicios-heading"
            className="font-serif font-light text-brand-smoke tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 0.95 }}
          >
            Todo lo que necesita
            <br />
            <em className="not-italic text-brand-smoke/45">una promoción.</em>
          </h2>
        </motion.div>

        {/* Subtítulo derecha */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="font-sans text-brand-smoke/70 md:text-right md:max-w-[180px] shrink-0"
          style={{ fontSize: '0.75rem', lineHeight: 1.9, letterSpacing: '0.01em' }}
        >
          En un solo estudio.<br />Sin intermediarios.
        </motion.p>
      </div>

      {/* ── Imagen protagonista ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="relative overflow-hidden bg-brand-cream border border-brand-smoke/10"
        style={{
          marginLeft:  'clamp(2rem, 6vw, 6rem)',
          marginRight: 'clamp(2rem, 6vw, 6rem)',
          aspectRatio: '16 / 6',
        }}
      >
        <PremiumPlaceholder
          label={servicios[0]?.title ?? 'Servicio'}
          note="Bloque editorial temporal"
          bordered
        />
      </motion.div>

      {/* ── Lista tipográfica — todos los servicios ── */}
      <div
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
          marginTop:    'clamp(5rem, 10vw, 10rem)',
        }}
      >
        {/* Línea inicial */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
          className="origin-left h-px bg-brand-smoke/20"
        />

        {servicios.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: i * 0.06, duration: 0.8 }}
          >
            {/* Fila de servicio */}
            <div
              className="group cursor-default"
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr auto',
                alignItems: 'baseline',
                columnGap: '2rem',
                paddingTop:    'clamp(1.4rem, 2.5vw, 2rem)',
                paddingBottom: 'clamp(1.4rem, 2.5vw, 2rem)',
              }}
            >
              {/* Número — */}
              <span
                className="font-serif font-light text-brand-smoke/80"
                style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}
              >
                {String(s.index).padStart(2, '0')}
              </span>

              {/* Nombre del servicio */}
              <h3
                className="font-serif font-light text-brand-smoke transition-colors duration-700 group-hover:text-[#A38F7F]"
                style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.6rem)', lineHeight: 1.1 }}
              >
                {s.title}
              </h3>

              {/* Descripción — solo desktop, muy discreta */}
              <p
                className="hidden lg:block font-sans text-brand-smoke/70 text-right"
                style={{ fontSize: '0.72rem', lineHeight: 1.7, maxWidth: '16rem' }}
              >
                {s.shortDescription}
              </p>
            </div>

            {/* Divisor */}
            <div className="h-px bg-brand-smoke/20" />
          </motion.div>
        ))}

        {/* Pie — link sin decoración excesiva */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ marginTop: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Link
            href="/servicios"
            className="group font-sans text-brand-smoke/70 hover:text-brand-smoke transition-colors duration-500"
            style={{ fontSize: '0.68rem', letterSpacing: '0.2em' }}
          >
            VER TODOS LOS SERVICIOS
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
