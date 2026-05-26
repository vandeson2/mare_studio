export type Proyecto = {
    id: string
    image: string
    featuredImage?: string
    gallery?: string[]
    type: string
    services: string[]
    featured: boolean
    aspectRatio?: 'portrait' | 'landscape' | 'square'
  }
  
  export const proyectos: Proyecto[] = [
    {
      id: 'promocion-residencial-01',
      image: '/img/proyecto/proyecto-cocina.webp',
      type: 'Cocina · Proyectos residencial',
      services: ['Cocinas', 'Suelos', 'Puertas'],
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'promocion-residencial-02',
      image: '/img/proyecto/proyecto-armario.webp',
      type: 'Armarios · Vestidor a medida',
      services: ['Armarios', 'Carpintería'],
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'piso-piloto-01',
      image: '/img/proyecto/proyecto-muebles.webp',
      type: 'Piso piloto · Equipamiento completo',
      services: ['Salón', 'Suelos', 'Armarios', 'Estores'],
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'promocion-residencial-03',
      image: '/img/proyecto/proyecto-cocina-negra.webp',
      type: 'Cocina · Carpintería a medida',
      services: ['Carpintería', 'Suelos'],
      featured: true,
      aspectRatio: 'landscape',
    },
  ]
  