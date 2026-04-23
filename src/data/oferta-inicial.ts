import { interpolate } from "motion"

export type OfertaInicialItem = {
    label: string,
    value: string,
}

export type OfertaInicialData = {
    eyebrow: string
    title: string
    highlight: string
    introTitle: string
    introText: string
    items: OfertaInicialItem[]
    audienceLabel: string
    audience: string[]
    priceNote?: string
    ctaLabel: string
    ctaHref: string
}

export const ofertaInicial: OfertaInicialData = {
    eyebrow: 'Servicio adicional',
    title: 'Pack asesoría',
    highlight: 'para promoción, empresas y locales comerciales.',
    introTitle: 'Una solución clara y ágil',
    introText: 
        'Una propuesta pensada para negocios y espacios comerciales que necesitan una orientación, profesional, una línea estética definida y una solución de interiorismo bien enfocada desde el inicio.',
    items: [
        {
            label: 'Test de estilo',
            value: 'Incluido',
        },
        {
            label: 'Videollamada con interiorista profesional',
            value: '40 min',
        },
        {
            label: 'Lista de mobiliario y objetos de decoración',
            value: 'Incluida',
        },
        {
            label: 'Compra, entrega y montyaje',
            value: 'Opcional',
        },
    ],
    audienceLabel: 'Pensado para',
    audience: [
        'Empresas que necesitan una solución estética rápida y bien dirigida.',
        'Locales comerciales que buscan claridad antes de ejecutar.',
        'Proyectos que necesitan una propuesta profesional sin empezar desde cero.',
    ],
    priceNote: 'Desde 120€',
    ctaLabel: 'Solicitar información',
    ctaHref: '/contacto',
}
