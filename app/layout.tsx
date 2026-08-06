import type { Metadata } from 'next'
import { Montserrat, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const hanken = Hanken_Grotesk({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
})

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    default: 'Rótulos Almazora | Fabricación e Instalación de Rótulos',
    template: '%s | Rótulos Almazora',
  },
  description: 'Rótulos Almazora - Rotulistas en Almazora. Fabricación e instalación de rótulos, rotulación de fachadas, rotulación de vehículos y señalética corporativa. Servicio rápido, materiales de alta calidad y presupuesto sin compromiso.',
  keywords: ['Rótulos Almazora', 'fabricación rótulos Almazora', 'rotulación Almazora', 'rotulación de fachadas Almazora', 'rotulación de vehículos en Almazora', 'rotulistas Almazora', 'rótulos', 'rotulación', 'letreros corporativos', 'señalética', 'rótulos luminosos', 'fabricación de rótulos', 'impresión digital'],
  authors: [{ name: 'Rótulos Almazora' }],
  creator: 'Rótulos Almazora',
  publisher: 'Rótulos Almazora',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://rotulosalmazora.vercel.app',
    title: 'Rótulos Almazora | Fabricación de Rótulos y Rotulación',
    description: 'Rotulistas en Almazora. Fabricación de rótulos, rotulación de fachadas y vehículos. Presupuesto sin compromiso, materiales de calidad.',
    siteName: 'Rótulos Almazora',
    images: [
      {
        url: 'https://rotulosalmazora.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Rótulos Almazora - Fabricación e Instalación de Rótulos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rótulos Almazora | Fabricación e Instalación de Rótulos',
    description: 'Expertos en rotulación: rótulos para negocios, vehículos y señalética. Dale visibilidad a tu marca.',
    images: ['https://rotulosalmazora.vercel.app/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Rótulos Almazora',
    description: 'Fabricación e instalación profesional de rótulos, letreros corporativos, rotulación de vehículos y señalética. Expertos en rotulación desde 1994.',
    url: 'https://rotulosalmazora.vercel.app',
    telephone: '+34 XXX XXX XXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
      addressLocality: 'España',
    },
    foundingDate: '1994',
    priceRange: '$$',
    image: [
      'https://rotulosalmazora.vercel.app/images/hero-banner.webp',
      'https://rotulosalmazora.vercel.app/images/trabajo-1.webp',
      'https://rotulosalmazora.vercel.app/images/trabajo-2.webp',
      'https://rotulosalmazora.vercel.app/images/trabajo-3.webp',
    ],
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://rotulosalmazora.vercel.app" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${hanken.variable} ${jetbrains.variable} font-body bg-background text-primary antialiased selection:bg-accent selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
