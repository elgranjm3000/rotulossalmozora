import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rótulos Almozora | Fabricación de Rótulos',
    short_name: 'Almozora',
    description: 'Expertos en rotulación: rótulos para negocios, vehículos y señalética.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#fbf9f9',
    theme_color: '#121212',
    icons: [
      {
        src: '/favicon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  }
}
