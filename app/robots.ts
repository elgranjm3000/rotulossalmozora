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
    sitemap: 'https://rotulosalmazora.vercel.app/sitemap.xml',
  }
}
