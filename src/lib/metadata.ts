import type { Metadata } from 'next'

const BASE_URL = 'https://marestudio.es'
const SITE_NAME = 'Maré Studio'
const DEFAULT_DESCRIPTION =
  'Equipamiento y carpintería integral para promociones inmobiliarias. Cocinas, suelos, armarios, puertas y mobiliario a medida. Un único interlocutor. Plazos garantizados.'

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: {
  title: string
  description?: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
