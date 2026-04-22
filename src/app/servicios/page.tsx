import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/cards/ServiceCard'
import { servicios } from '@/data/servicios'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Cocinas, suelos laminados y vinílicos, puertas, armarios, estores y carpintería a medida para promociones inmobiliarias.',
}

export default function ServiciosPage() {
  return (
    <div className="bg-bone min-h-screen pt-32 pb-24">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel className="mb-6">Servicios</SectionLabel>
        <SectionHeading className="mb-16 max-w-2xl">
          Equipamiento completo
          <br />
          para su promoción.
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {servicios.map((s) => (
            <ServiceCard key={s.id} servicio={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
