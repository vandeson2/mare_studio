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
    default: 'Maré Studio — Equipamiento integral para promociones inmobiliarias',
    template: '%s | Maré Studio',
  },
  description:
    'Estudio especializado en equipamiento y carpintería integral para promotoras inmobiliarias. Cocinas, suelos, armarios, puertas y mobiliario a medida. Un único interlocutor. Plazos garantizados.',
  keywords: [
    'equipamiento promociones inmobiliarias',
    'carpintería a medida promotoras',
    'cocinas para promociones',
    'suelos laminados vinílicos',
    'armarios empotrados a medida',
    'estores toldos residencial',
    'servicio integral promotoras',
    'Maré Studio',
  ],
  authors: [{ name: 'Maré Studio' }],
  creator: 'Maré Studio',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Maré Studio',
    title: 'Maré Studio — Equipamiento integral para promociones inmobiliarias',
    description:
      'Carpintería, cocinas, suelos y mobiliario a medida para promotoras. Un único interlocutor. Plazos cumplidos. Resultado en ventas.',
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