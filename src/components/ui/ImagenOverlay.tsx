'use client'

import Image from 'next/image'

interface ImageOverlayProps {
  src: string
  alt: string

  label?: string
  subtitle?: string

  priority?: boolean
  sizes?: string

  className?: string
}

export default function ImageOverlay({
  src,
  alt,
  label,
  subtitle,
  priority = false,
  sizes = '100vw',
  className = '',
}: ImageOverlayProps) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>

      {/* Imagen */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,24,21,0.34),rgba(28,24,21,0.04))]" />

      {/* Marco */}
      <div className="absolute inset-[16px] border border-white/30 pointer-events-none" />

      {/* Label arriba */}
      {label && (
        <div className="absolute left-[16px] top-[16px] border border-white/18 bg-black/10 px-4 py-2 backdrop-blur-[2px]">
          <p
            className="font-sans uppercase text-white/92"
            style={{
              fontSize: '0.64rem',
              letterSpacing: '0.2em',
            }}
          >
            {label}
          </p>
        </div>
      )}

      {/* Texto abajo */}
      {(subtitle) && (
        <div className="absolute left-[16px] right-[16px] bottom-[16px] flex items-end justify-between gap-5">

          <p
            className="font-sans uppercase text-white/80"
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              lineHeight: 1.45,
              maxWidth: '40ch',
            }}
          >
            {subtitle}
          </p>

          <span className="block h-px w-10 bg-white/70 transition-all duration-500 group-hover:w-16" />
        </div>
      )}

    </div>
  )
}