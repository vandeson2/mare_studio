import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/cards/ProjectCard'
import { proyectos } from '@/data/proyectos'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Trabajos reales de Maré Studio: cocinas, suelos, armarios y mobiliario a medida en promociones inmobiliarias.',
}

export default function ProyectosPage() {
  return (
    <div className="bg-brand-sand min-h-screen pt-32 pb-24">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <SectionLabel className="mb-6">Proyectos</SectionLabel>
        <SectionHeading className="mb-16 max-w-2xl">
          Trabajos reales.
          <br />
          Resultados concretos.
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {proyectos.map((p) => (
            <div key={p.id} className="relative">
              <ProjectCard proyecto={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
