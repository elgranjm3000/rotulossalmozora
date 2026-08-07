import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rotulosalmazora.vercel.app'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog/rotulacion-negocios/fabricacion-de-rotulos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-negocios/atrae-mas-clientes`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-negocios/refuerza-tu-marca`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-negocios/inversion-que-se-paga-sola`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-vehiculos/publicidad-movil-sin-limites`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-vehiculos/protege-la-pintura`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog/rotulacion-vehiculos/imagen-profesional`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]
}
