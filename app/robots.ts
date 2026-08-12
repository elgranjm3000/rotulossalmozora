import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/.git/'],
      },
    ],
    sitemap: 'https://rotulosalmazora.com/sitemap.xml',
  }
}
