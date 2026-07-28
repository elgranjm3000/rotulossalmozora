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
  title: {
    default: 'Rótulos Salmozora | Señalética Arquitectónica de Alta Gama',
    template: '%s | Rótulos Salmozora',
  },
  description: 'Rótulos Salmozora - Señalética arquitectónica de alta gama. Precisión milimétrica, materiales premium y diseño industrial para espacios exclusivos desde 1994.',
  keywords: ['rótulos arquitectónicos', 'señalética high-end', 'letreros corporativos', 'signage diseño', 'rótulos minimalistas', 'identidad visual'],
  authors: [{ name: 'Rótulos Salmozora' }],
  creator: 'Rótulos Salmozora',
  publisher: 'Rótulos Salmozora',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://rotulossalmozora.com',
    title: 'Rótulos Salmozora | Señalética Arquitectónica de Alta Gama',
    description: 'Transformamos su identidad en puntos de referencia. Precisión arquitectónica, materiales premium y diseño industrial minimalista.',
    siteName: 'Rótulos Salmozora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rótulos Salmozora | Señalética Arquitectónica de Alta Gama',
    description: 'Transformamos su identidad en puntos de referencia. Precisión arquitectónica, materiales premium y diseño industrial minimalista.',
  },
  verification: {
    google: 'your-google-verification-code',
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
    name: 'Rótulos Salmozora',
    description: 'Señalética arquitectónica de alta gama con precisión milimétrica y materiales premium',
    url: 'https://rotulossalmozora.com',
    telephone: '+34 XXX XXX XXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
      addressLocality: 'España',
    },
    foundingDate: '1994',
    priceRange: '$$$',
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://rotulossalmozora.com" />
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
