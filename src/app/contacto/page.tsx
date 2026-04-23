import type { Metadata } from 'next'
import Contacto from '@/components/sections/Contacto'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Solicite presupuesto para equipar su próxima promoción inmobiliaria. Maré Studio — un único interlocutor para todo el equipamiento.',
}

export default function ContactoPage() {
  return <Contacto />
}
