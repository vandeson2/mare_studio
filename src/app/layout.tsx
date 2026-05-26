import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "./globals.css"

//  TIPOGRAFÍAS
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

// SEO GLOBAL
export const metadata: Metadata = {
  title: {
    default: 'Maré Studio — Interiorismo, carpintería integral y proyectos a medida',
    template: '%s | Maré Studio',
  },
  description:
  'Estudio especializado en diseño de interiores, equipamiento y carpintería integral para viviendas particulares y promociones inmobiliarias. Cocinas, suelos, armarios y mobiliario a medida sin sorpresas',
  keywords: [
    'estudio interiorismo residencial',
    'carpintería a medida alta gama',
    'diseño cocinas particulares promotoras',
    'suelos laminados vinílicos instalacion',
    'armarios empotrados vestidores a medida',
    'estores toldos residencial',
    'reformas integrales llave en mano',
    'equipamiento promociones inmobiliarias',
    'Maré Studio interiorismo',
  ],
  authors: [{ name: 'Maré Studio' }],
  creator: 'Maré Studio',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Maré Studio',
    title: 'Maré Studio — Interiorismo, carpintería integral y proyectos a medida',
    description:
    'Diseño, fabricación e instalación de cocinas, suelos y mobiliario a medida. La tranquilidad que buscas para tu hogar y la solvencia técnica que exigen las promotoras.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}


// lAYOUT
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-brand-cream text-brand-smoke antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}