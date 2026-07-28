import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rotulossalmozora.com',
      lastModified: new Date('2024-07-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
