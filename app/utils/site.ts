import type { Metadata } from 'next'
import type { Content } from '@/app/content/types'

export const siteUrl = 'https://strynferiehytte.no'

export const siteName = 'Stryn Feriehytte'

export const contact = {
  phone: '+47 918 79 843',
  phoneHref: 'tel:+4791879843',
  email: 'Ytreeideferiehus@gmail.com'
}

// Prices in NOK, shared by both languages
export const pricesNok = {
  cabin: 1500,
  cleaning: 700,
  sheets: 120
}

export function pageMetadata(content: Content): Metadata {
  const shareImage = { url: '/images/og.jpg', width: 1200, height: 630, alt: content.meta.shareImageAlt }

  return {
    metadataBase: new URL(siteUrl),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: content.homePath,
      languages: { en: '/', nb: '/no', 'x-default': '/' }
    },
    openGraph: {
      type: 'website',
      url: content.homePath,
      siteName,
      title: content.meta.shareTitle,
      description: content.meta.description,
      locale: content.ogLocale,
      images: [shareImage]
    },
    twitter: {
      card: 'summary_large_image',
      images: [shareImage]
    },
    verification: {
      google: 'W9kXDo2eosdiX2mg31jsNGBFNZZebdFua5yjWWl-Wg8'
    }
  }
}

// schema.org description of the cabin, rendered as JSON-LD on the home page
export function vacationRentalJsonLd(content: Content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    // Google requires a stable ID for the property; it is the same on both language pages
    identifier: 'stryn-feriehytte',
    name: siteName,
    description: content.meta.description,
    url: siteUrl + (content.homePath === '/' ? '/' : content.homePath),
    image: [`${siteUrl}/images/desktop/hero.jpeg`, `${siteUrl}/images/desktop/1.jpeg`, `${siteUrl}/images/desktop/2.jpeg`],
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strynevegen 253',
      postalCode: '6783',
      addressLocality: 'Stryn',
      addressCountry: 'NO'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 61.9183,
      longitude: 6.7784
    },
    containsPlace: {
      '@type': 'Accommodation',
      additionalType: 'EntirePlace',
      occupancy: { '@type': 'QuantitativeValue', value: 7 },
      numberOfBedrooms: 3,
      amenityFeature: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Dishwasher', 'Shower', 'Fireplace', 'TV', 'Outdoor grill', 'Free parking'].map((name) => ({
        '@type': 'LocationFeatureSpecification',
        name,
        value: true
      }))
    }
  }
}
