'use client'

import { motion } from 'framer-motion'
import type { Proyecto } from '@/data/proyectos'

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
      {/* Añadir la imagen oel componente imagenOverlay con las fotos */}
    </motion.article>
  )
}
