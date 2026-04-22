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
        'Analizamos la promoción, la tipología de vivienda y el presupuesto disponible. Proponemos soluciones adaptadas sin compromiso.',
    },
    {
      step: 2,
      title: 'Fabricación',
      description:
        'Producimos con los tiempos de la obra. Materiales, acabados y volumen ajustados a cada proyecto y promotora.',
    },
    {
      step: 3,
      title: 'Coordinación con obra',
      description:
        'Nos integramos con la constructora para garantizar plazos y evitar interferencias. Un único punto de contacto para todo.',
    },
    {
      step: 4,
      title: 'Instalación',
      description:
        'Equipo propio. Acabados supervisados. Las viviendas quedan listas para la entrega al comprador.',
    },
  ]
  