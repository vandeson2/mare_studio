'use client'

import { motion } from 'framer-motion'
import type { Servicio } from '@/data/servicios'

interface ServiceCardProps {
  servicio: Servicio
}

export default function ServiceCard({ servicio }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
      className="group"
    >
      {/* href={`/servicios/${servicio.slug}`} añadir cuando quiera más fotos  y cambiar el div por Link */}
      <div  className="block">
        <div className="relative overflow-hidden border border-brand-smoke/12 bg-brand-cream">
          <div
            className="relative"
            style={{ aspectRatio: '5 / 8' }}
          >
            <img
              src={servicio.image}
              alt={servicio.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,24,21,0.34),rgba(28,24,21,0.04))]" />
            <div className="absolute inset-[16px] border border-white/14" />

            <div className="absolute left-[16px] top-[16px] border border-white/18 bg-black/10 px-4 py-2 backdrop-blur-[2px]">
              <p
                className="font-sans uppercase text-white/92"
                style={{
                  fontSize: '0.64rem',
                  letterSpacing: '0.2em',
                }}
              >
                {servicio.title}
              </p>
            </div>

            <div className="absolute left-[16px] right-[16px] bottom-[16px] flex items-end justify-between gap-5">
              <div>
                <p
                  className="font-sans uppercase text-white/68"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    marginBottom: '0.55rem',
                  }}
                >
                  {String(servicio.index).padStart(2, '0')}
                </p>

                <p
                  className="font-sans uppercase text-white/88"
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    lineHeight: 1.45,
                    maxWidth: '20ch',
                  }}
                >
                  {servicio.shortDescription}
                </p>
              </div>

              <span
                className="mb-1 block h-px w-10 shrink-0 bg-white/72 transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}