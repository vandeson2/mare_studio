'use client'

import { motion } from 'framer-motion'
import type { Proyecto } from '@/data/proyectos'
import PremiumPlaceholder from '@/components/ui/PremiumPlaceholder'

interface ProjectCardProps {
  proyecto: Proyecto
  className?: string
}

export default function ProjectCard({ proyecto, className = '' }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9 }}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: '16 / 10' }}
    >
      <PremiumPlaceholder
        label={proyecto.services[0] ?? 'Proyecto'}
        note={proyecto.type}
        tone="dark"
        bordered
      />
    </motion.article>
  )
}
