'use client'

import { FaWhatsapp } from 'react-icons/fa'

type WhatsappButtonProps = {
  /** Número en formato internacional, con o sin + (ej. 34600123456) */
  phone?: string
  message?: string
  /** Etiqueta para lectores de pantalla */
  'aria-label'?: string
}

function waHref(phone: string, message?: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (!digits) return null
  const base = `https://wa.me/${digits}`
  if (!message?.trim()) return base
  return `${base}?text=${encodeURIComponent(message.trim())}`
}

export default function WhatsappButton({
  phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? '',
  message,
  'aria-label': ariaLabel = 'Escribir por WhatsApp',
}: WhatsappButtonProps) {
  const href = waHref(phone, message)
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        fixed bottom-5 right-5 z-[120]
        flex h-12 w-12 items-center justify-center
        rounded-full border border-brand-cream/20
        bg-[rgba(47,42,40,0.82)] backdrop-blur-md
        text-brand-cream transition-all duration-500
        hover:scale-105 hover-bg-brand-smoke
      "
    >
      <FaWhatsapp className="size-8" aria-hidden />
    </a>
  )
}
