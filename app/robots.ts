import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/.git/'],
      },
    ],
    sitemap: 'https://rotulossalmozora.com/sitemap.xml',
  }
}
