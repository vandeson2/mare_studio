'use client'

import { motion } from 'framer-motion'
import type { Servicio } from '@/data/servicios'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

interface ServiceCardProps {
  servicio: Servicio
}

export default function ServiceCard({ servicio }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9 }}
      className="flex flex-col gap-0 cursor-default"
    >
      <div 
        className="relative overflow-hidden bg-brand-sand border border-brand-smoke/10" 
        style={{ aspectRatio: '16 / 10' }}>
        <PremiumPlaceholder
          label={servicio.title}
          note="Servicio disponible"
          bordered
        />
      </div>

      {/* Texto */}
      <div className="pt-8 border-t border-brand-smoke/14 mt-8">
        <p className="font-sans text-[0.58rem] tracking-[0.28em] uppercase text-brand-smoke/35 mb-4">
          {String(servicio.index).padStart(2, '0')}
        </p>
        <h3
          className="font-serif font-light text-brand-smoke leading-tight mb-4"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
        >
          {servicio.title}
        </h3>
        <p className="font-sans text-xs text-brand-smoke/65 leading-relaxed">
          {servicio.shortDescription}
        </p>
      </div>
    </motion.article>
  )
}
