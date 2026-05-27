import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import QuienesSomos from "@/components/sections/QuienesSomos"
import Proyectos from "@/components/sections/Proyectos"
import Contacto from "@/components/sections/Contacto"
import Servicios from "@/components/sections/Servicios"
import Proceso from "@/components/sections/Proceso"
import PorQueElegirnos from "@/components/sections/PorQueElegirnos"
import OfertaInicial from "@/components/sections/OfertaInicial"
import WhatsappButton from "@/components/ui/WhatsappButton"

export const metadata: Metadata = {
  title: 'Maré Studio — Interiorismo, carpintería integral y proyectos a medida',
  description:
    'Estudio especializado en diseño de interiores, equipamiento y carpintería integral para viviendas particulares y promociones inmobiliarias. Cocinas, suelos, armarios y mobiliario a medida sin sorpresas',
  alternates: {
    canonical: 'https://marestudio.es',
  },
}
export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <OfertaInicial />
      <WhatsappButton />
      <Proyectos />
      <Proceso />
      <PorQueElegirnos />
      <QuienesSomos />
      <Contacto />
    </>
  )
}
