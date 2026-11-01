import type { MetadataRoute } from 'next'
import { siteUrl } from '@/app/utils/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }]
}
