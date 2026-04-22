export type Servicio = {
    id: string
    index: number
    title: string
    shortDescription: string
    description: string
    image: string
    slug: string
  }
  
  export const servicios: Servicio[] = [
    {
      id: 'cocinas',
      index: 1,
      title: 'Cocinas para promociones',
      shortDescription: 'Diseño, fabricación e instalación adaptados a volumen y tipología.',
      description:
        'Cocinas completas optimizadas para el presupuesto de la promoción. Diseñadas para maximizar el atractivo del espacio y acelerar la decisión de compra.',
      image: '/images/servicios/cocinas.jpg',
      slug: 'cocinas',
    },
    {
      id: 'suelos',
      index: 2,
      title: 'Suelos laminados y vinílicos',
      shortDescription: 'Instalación sin obra. Rapidez, acabado y durabilidad.',
      description:
        'Colocación de tarimas y suelos vinílicos sin necesidad de obra. Solución ágil que encaja en los tiempos de cualquier promoción.',
      image: '/images/servicios/suelos.jpg',
      slug: 'suelos',
    },
    {
      id: 'puertas',
      index: 3,
      title: 'Puertas de paso',
      shortDescription: 'Acabados que elevan la percepción de calidad del conjunto.',
      description:
        'Selección e instalación de puertas interiores adaptadas a cada tipología de vivienda, con acabados coherentes con el resto del equipamiento.',
      image: '/images/servicios/puertas.jpg',
      slug: 'puertas',
    },
    {
      id: 'armarios',
      index: 4,
      title: 'Armarios y vestidores',
      shortDescription: 'Soluciones a medida. Cada centímetro aprovechado.',
      description:
        'Armarios empotrados y vestidores a medida diseñados para cada plano. Fabricación propia y acabados personalizados según la gama de la promoción.',
      image: '/images/servicios/armarios.jpg',
      slug: 'armarios',
    },
    {
      id: 'estores',
      index: 5,
      title: 'Estores y toldos',
      shortDescription: 'Manuales y motorizados. Asesoramiento, medición e instalación.',
      description:
        'Soluciones de protección solar para espacios residenciales. Nos encargamos de todo: asesoramiento, toma de medidas, fabricación e instalación.',
      image: '/images/servicios/estores.jpg',
      slug: 'estores',
    },
    {
      id: 'carpinteria',
      index: 6,
      title: 'Carpintería a medida',
      shortDescription: 'Mobiliario singular que diferencia la promoción.',
      description:
        'Muebles y elementos de carpintería diseñados específicamente para cada proyecto. Desde el piso piloto hasta la entrega en serie.',
      image: '/images/servicios/carpinteria.jpg',
      slug: 'carpinteria',
    },
  ]
  