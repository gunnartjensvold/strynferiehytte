export const siteUrl = 'https://strynferiehytte.no'

export const siteName = 'Stryn Feriehytte'

export const siteDescription =
  'Holiday cabin for up to 7 guests in Stryn, Norway. Hiking nearby, with Loen Skylift, Lodalen and Geiranger within reach. Book directly by phone or email.'

// schema.org description of the cabin, rendered as JSON-LD on the home page
export const vacationRentalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  name: siteName,
  description: siteDescription,
  url: `${siteUrl}/`,
  image: [`${siteUrl}/images/desktop/hero.jpeg`, `${siteUrl}/images/desktop/1.jpeg`, `${siteUrl}/images/desktop/2.jpeg`],
  telephone: '+47 918 79 843',
  email: 'Ytreeideferiehus@gmail.com',
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
    occupancy: { '@type': 'QuantitativeValue', maxValue: 7 },
    amenityFeature: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Shower', 'Fireplace', 'TV', 'Outdoor grill'].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true
    }))
  }
}
