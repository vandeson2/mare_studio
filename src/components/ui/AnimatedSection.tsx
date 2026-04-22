'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animation'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variants?: typeof fadeInUp
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  variants = fadeInUp,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(typeof variants.visible === 'object' && 'transition' in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
