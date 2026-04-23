import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Más de veinte años equipando promociones inmobiliarias. Conoce al equipo de Maré Studio.',
}

export default function NosotrosPage() {
  return (
    <div className="bg-brand-sand min-h-screen pt-32 pb-24">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel className="mb-6">Sobre nosotros</SectionLabel>
        <SectionHeading className="mb-12 max-w-2xl">
          Más de veinte años
          <br />
          equipando promociones.
        </SectionHeading>
        <p className="font-sans text-muted text-base leading-[1.8] max-w-prose">
          Somos un equipo de profesionales especializados en equipamiento
          y carpintería integral para el sector inmobiliario. Trabajamos
          directamente con promotoras para garantizar un servicio completo,
          eficiente y adaptado a cada proyecto.
        </p>
      </div>
    </div>
  )
}
