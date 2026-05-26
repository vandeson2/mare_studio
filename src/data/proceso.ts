export type PasoProceso = {
    step: number
    title: string
    description: string
  }
  
  export const proceso: PasoProceso[] = [
    {
      step: 1,
      title: 'Visita y presupuesto',
      description:
      'Analizamos el espacio, la tipología de vivienda y el presupuesto disponible. Proponemos soluciones adaptadas sin compromiso.'
    },
    {
      step: 2,
      title: 'Fabricación',
      description:
        'Producimos optimizando los tiempos. Materiales, acabados y volumen ajustados a las necesidades de cada hogar o proyecto.',
    },
    {
      step: 3,
      title: 'Coordinación con obra',
      description:
        'Nos integramos con el equipo de obra para garantizar plazos y evitar interferencias. Un único punto de contacto para todo.',
    },
    {
      step: 4,
      title: 'Instalación',
      description:
        'Equipo propio. Acabados supervisados. Las viviendas quedan listas para entrar a vivir o para su comercialización.',
    },
  ]
  