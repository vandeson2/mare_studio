export type Servicio = {
    id: string
    index: number
    title: string
    shortDescription: string
    description: string
    image: string
    slug: string
    featured?: boolean
  }
  
  export const servicios: Servicio[] = [
    {
      id: 'cocinas',
      index: 1,
      title: 'Cocinas integrales',
      shortDescription: 'Diseño, fabricación e instalación adaptados a volumen y tipología.',
      description:
      'Cocinas integrales a medida que optimizan el espacio. Diseñadas para maximizar el atractivo visual de tu hogar o revalorizar cualquier proyecto residencial.',
      image: '/img/servicio/servicio-cocinas.webp',
      slug: 'cocinas',
      featured: true,
    },
    {
      id: 'suelos',
      index: 2,
      title: 'Suelos laminados y vinílicos',
      shortDescription: 'Instalación sin obra. Rapidez, acabado y durabilidad.',
      description:
      'Colocación de tarimas y suelos vinílicos sin necesidad de obra. Una solución ágil y limpia que optimiza los plazos de cualquier hogar o proyecto.',
      image: '/img/servicio/servicio-suelos.webp',
      slug: 'suelos',
      featured: true,
    },
    {
      id: 'puertas',
      index: 3,
      title: 'Puertas de paso',
      shortDescription: 'Acabados que elevan la percepción de calidad del conjunto.',
      description:
        'Selección e instalación de puertas interiores adaptadas a cada tipología de vivienda, con acabados coherentes con el resto del equipamiento.',
      image: '/img/servicio/servicio-puerta.webp',
      slug: 'puertas',
      featured: true,
    },
    {
      id: 'armarios',
      index: 4,
      title: 'Armarios y vestidores',
      shortDescription: 'Soluciones a medida. Cada centímetro aprovechado.',
      description:
      'Armarios empotrados y vestidores a medida diseñados para optimizar el espacio. Fabricación propia con acabados personalizados que se adaptan al estilo de cada hogar o proyecto.',
      image: '/img/servicio/servicio-armario.webp',
      slug: 'armarios',
      featured: true,
    },
    {
      id: 'estores',
      index: 5,
      title: 'Estores y toldos',
      shortDescription: 'Manuales y motorizados. Asesoramiento, medición e instalación.',
      description:
        'Soluciones de protección solar para espacios residenciales. Nos encargamos de todo: asesoramiento, toma de medidas, fabricación e instalación.',
      image: '/img/servicio/servicio-estores.webp',
      slug: 'estores',
      featured: true,
    },
    {
      id: 'carpinteria',
      index: 6,
      title: 'Carpintería a medida',
      shortDescription: 'Mobiliario singular que reinventa cada espacio.',
      description:
        'Muebles y elementos de carpintería diseñados específicamente para cada proyecto. Desde el piso piloto hasta la entrega en serie.',
      image: '/img/servicio/servicio-entrada.webp',
      slug: 'carpinteria',
      featured: true,
    },
  ]
  