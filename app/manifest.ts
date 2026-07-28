import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rótulos Salmozora | Señalética Arquitectónica de Alta Gama',
    short_name: 'Salmozora',
    description: 'Precisión arquitectónica en cada corte. Especialistas en soluciones de identidad visual para entornos de alta gama.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#fbf9f9',
    theme_color: '#121212',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
