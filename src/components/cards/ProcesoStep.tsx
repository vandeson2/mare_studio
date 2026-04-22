import Divider from '@/components/ui/Divider'
import type { PasoProceso } from '@/data/proceso'

interface ProcesoStepProps {
  paso: PasoProceso
  isLast?: boolean
}

export default function ProcesoStep({ paso, isLast = false }: ProcesoStepProps) {
  const stepStr = String(paso.step).padStart(2, '0')

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr_1fr] gap-x-8 gap-y-2 py-8 md:py-10 items-start">
        {/* Número */}
        <span className="font-serif text-5xl md:text-6xl font-light text-graphite/15 leading-none select-none mt-1">
          {stepStr}
        </span>

        {/* Título */}
        <h3 className="font-serif text-xl md:text-2xl font-light text-graphite leading-tight self-center md:col-start-2">
          {paso.title}
        </h3>

        {/* Descripción */}
        <p className="font-sans text-sm text-muted leading-relaxed col-span-2 md:col-span-1 md:col-start-3 md:self-center pl-0 md:pl-4">
          {paso.description}
        </p>
      </div>

      {!isLast && <Divider />}
    </div>
  )
}
