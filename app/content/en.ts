import type { Content } from './types'

const cabinImageAlt = 'Yellow wooden holiday cabin in Stryn with a garden, outdoor seating and green mountains behind'

export const en: Content = {
  locale: 'en',
  homePath: '/',
  ogLocale: 'en_US',
  meta: {
    title: 'Holiday cabin for rent in Stryn, Norway | Stryn Feriehytte',
    description:
      'Holiday cabin for up to 7 guests in Stryn, Norway. Hiking nearby, with Loen Skylift, Lodalen and Geiranger within reach. Book directly by phone or email.',
    shareTitle: 'Stryn Feriehytte – holiday cabin in Stryn, Norway',
    shareImageAlt: 'Yellow wooden holiday cabin in Stryn with a garden and green mountains behind'
  },
  nav: {
    home: 'Home',
    experiences: 'Experiences',
    cabin: 'Cabin',
    availability: 'Availability',
    prices: 'Prices',
    callUs: 'Call us',
    logoAlt: 'Stryn Feriehytte logo',
    otherLanguage: { label: 'Norsk', short: 'NO', href: '/no', hrefLang: 'nb' }
  },
  hero: {
    title: 'Holiday cabin in Stryn, Norway',
    subtitleStart: 'Experience the most beautiful',
    subtitleEnd: 'nature Norway has to offer.',
    imageAlt: cabinImageAlt,
    findDates: 'Find dates'
  },
  experiences: {
    title: 'Beautiful scenery at your doorstep',
    readMore: 'Read more about',
    skuten: {
      subtitle: 'Nearby hiking trail',
      imageAlt: 'View of Skuten in Norway, a popular hiking trail close to the cabin',
      text: 'Skuten is one of many hiking trails in the area. The trip takes around 30 to 60 minutes.',
      link: 'https://www.nordfjord.no/en/skuten'
    },
    geiranger: {
      subtitle: '2 hour drive',
      imageAlt: 'View of Geiranger in Norway, a popular tourist destination a 2 hour drive from the cabin',
      text: 'The beautiful views of Geiranger can be experienced through a 2 hour drive.',
      link: 'https://www.visitnorway.no/reisemal/vestlandet/geirangerfjorden/'
    },
    lodalen: {
      subtitle: '1 hour drive',
      imageAlt: 'View of the glaciers in Lodalen, a popular tourist attraction close to the cabin',
      text: "Lodalen is one of the world's most popular tourist attractions.",
      link: 'https://www.nordfjord.no/lodalen'
    }
  },
  cabin: {
    title: 'The cabin',
    facts: [
      'The cabin accommodates up to 7 people',
      'It is located in Stryn, a peaceful town in western Norway, address: strynevegen 253',
      'There are many nearby mountain trails and tourist attractions, such as Loen Skylift and Geiranger'
    ],
    equipped: 'The cabin is equipped with everything you need',
    carousel: {
      previous: 'Previous image',
      next: 'Next image',
      imageAlts: [
        cabinImageAlt,
        "The cabin's yellow wooden walls and covered entrance, with forest behind",
        'The cabin and its gravel path on a sunny day, with the Stryn valley and mountains in the background'
      ]
    }
  },
  availability: {
    title: 'Availability Calendar',
    text: 'Find the dates suited for your next holiday in the calendar below. Please call or send an email to book the cabin.',
    sendMail: 'Send mail',
    mailSubject: 'Stryn Feriehytte booking',
    mailBody: 'Hello, my name is __ and I would like to book Stryn Feriehytte from __ to __.',
    calendar: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      previousMonth: 'Previous month',
      nextMonth: 'Next month',
      error: 'Could not load the available dates. Please try again later.'
    }
  },
  prices: {
    title: 'Prices',
    formatPrice: (nok) => `${nok},- NOK`,
    cabin: { title: 'Cabin rental', description: 'The cost of renting the cabin one night.' },
    cleaning: { title: 'Final cleaning', description: 'If you need us to clean the cabin after your stay.' },
    sheets: { title: 'Fresh sheets', description: "We'll provide you with fresh sheets at the beginning of your stay." }
  }
}
