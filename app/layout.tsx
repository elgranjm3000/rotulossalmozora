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
    default: 'Rótulos Almozora | Fabricación e Instalación de Rótulos',
    template: '%s | Rótulos Almozora',
  },
  description: 'Rótulos Almozora - Expertos en fabricación e instalación de rótulos, letreros corporativos, señalética y rotulación de vehículos. Materiales de alta calidad, servicio rápido y personalizado.',
  keywords: ['rótulos', 'rotulación', 'letreros corporativos', 'rotulación de vehículos', 'señalética', 'rótulos luminosos', 'fabricación de rótulos', 'letreros', 'impresión digital', 'decoración de negocios'],
  authors: [{ name: 'Rótulos Almozora' }],
  creator: 'Rótulos Almozora',
  publisher: 'Rótulos Almozora',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://rotulosalmazora.vercel.app',
    title: 'Rótulos Almozora | Fabricación e Instalación de Rótulos',
    description: 'Expertos en rotulación: rótulos para negocios, vehículos y señalética. Dale visibilidad a tu marca con los mejores materiales.',
    siteName: 'Rótulos Almozora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rótulos Almozora | Fabricación e Instalación de Rótulos',
    description: 'Expertos en rotulación: rótulos para negocios, vehículos y señalética. Dale visibilidad a tu marca.',
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
    name: 'Rótulos Almozora',
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
