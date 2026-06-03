import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Use VERCEL_ENV to check if we are in production
  const isProduction = process.env.VERCEL_ENV === 'production'
  const baseUrl = 'https://tourex-web-frontend.vercel.app'

  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
