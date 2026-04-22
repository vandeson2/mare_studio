export type Proyecto = {
    id: string
    image: string
    type: string
    services: string[]
    featured: boolean
    aspectRatio?: 'portrait' | 'landscape' | 'square'
  }
  
  export const proyectos: Proyecto[] = [
    {
      id: 'promocion-residencial-01',
      image: '/images/proyectos/proyecto-01.jpg',
      type: 'Cocina · Promoción residencial',
      services: ['Cocinas', 'Suelos', 'Puertas'],
      featured: true,
      aspectRatio: 'landscape',
    },
    {
      id: 'promocion-residencial-02',
      image: '/images/proyectos/proyecto-02.jpg',
      type: 'Armarios · Vestidor a medida',
      services: ['Armarios', 'Carpintería'],
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'piso-piloto-01',
      image: '/images/proyectos/proyecto-03.jpg',
      type: 'Piso piloto · Equipamiento completo',
      services: ['Cocinas', 'Suelos', 'Armarios', 'Estores'],
      featured: true,
      aspectRatio: 'portrait',
    },
    {
      id: 'promocion-residencial-03',
      image: '/images/proyectos/proyecto-04.jpg',
      type: 'Salón · Carpintería a medida',
      services: ['Carpintería', 'Suelos'],
      featured: true,
      aspectRatio: 'landscape',
    },
  ]
  