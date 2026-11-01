import type { MetadataRoute } from 'next'
import { siteUrl } from '@/app/utils/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      en: `${siteUrl}/`,
      nb: `${siteUrl}/no`
    }
  }

  return [
    { url: `${siteUrl}/`, alternates },
    { url: `${siteUrl}/no`, alternates }
  ]
}
