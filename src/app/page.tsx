import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import QuienesSomos from "@/components/sections/QuienesSomos"
import Proyectos from "@/components/sections/Proyectos"
import Contacto from "@/components/sections/Contacto"
import Servicios from "@/components/sections/Servicios"
import Proceso from "@/components/sections/Proceso"
import PorQueElegirnos from "@/components/sections/PorQueElegirnos"
import OfertaInicial from "@/components/sections/OfertaInicial"

export const metadata: Metadata = {
  title: 'Maré Studio — Viviendas que se venden antes',
  description:
    'Equipamiento y carpintería integral para promociones inmobiliarias. Cocinas, suelos, armarios y mobiliario a medida. Un único interlocutor. Plazos garantizados. Resultado en ventas.',
  alternates: {
    canonical: 'https://marestudio.es',
  },
}
export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Servicios />
      <OfertaInicial />
      <Proyectos />
      <Proceso />
      <PorQueElegirnos />
      <Contacto />
    </>
  )
}
