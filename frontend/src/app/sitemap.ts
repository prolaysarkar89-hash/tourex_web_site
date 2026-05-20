import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tourextravel.com'
  
  const landingPages = [
    'north-bengal-tour-package',
    'dooars-tour-package',
    'darjeeling-tour-package',
    'sikkim-tour-package',
    'silk-route-tour',
    'lataguri-resorts',
    'gangtok-tour-package',
    'bhutan-tour-package',
    'family-tour-package',
    'honeymoon-tour-package',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...landingPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ]
  
  return sitemapEntries
}
