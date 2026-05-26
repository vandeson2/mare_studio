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
    highlight: 'para particulares y diseño de tu hogar.',
    introTitle: 'Una solución clara y ágil',
    introText: 
        'Una propuesta pensada para personas que necesitan una orientación profesional para su vivienda, definiendo una línea estética clara y soluciones de interiorismo bien enfocadas desde el primer momento.',
    items: [
        {
            label: 'Videollamada con interiorista profesional',
            value: '40 min',
        },
        {
            label: 'Lista de mobiliario y objetos de decoración',
            value: 'Incluida',
        },
        {
            label: 'Compra, entrega y montaje',
            value: 'Opcional',
        },
    ],
    audienceLabel: 'Pensado para',
    audience: [
        'Particulares que buscan una solución estética clara, rápida y bien dirigida.',
        'Viviendas que necesitan definir su estilo y distribución antes de hacer cambios.',
        'Hogares que quieren una propuesta de decoración sin meterse en reformas.',
    ],
    priceNote: 'Desde 250€',
    ctaLabel: 'Solicitar información',
    ctaHref: '#contacto',
}
