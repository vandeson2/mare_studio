import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
}

// Para el hero — dos tiempos: imagen primero, texto después
export const heroImage: Variants = {
  hidden:  { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
  },
}

export const heroText: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 },
  },
}
