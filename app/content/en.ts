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
      subtitle: '1.5 hour drive',
      imageAlt: 'View of Geiranger in Norway, a popular tourist destination a 1.5 hour drive from the cabin',
      text: 'The beautiful views of Geiranger can be experienced through a 1.5 hour drive.',
      link: 'https://www.visitnorway.no/reisemal/vestlandet/geirangerfjorden/'
    },
    lodalen: {
      subtitle: '45 minute drive',
      imageAlt: 'View of the glaciers in Lodalen, a popular tourist attraction close to the cabin',
      text: "Lodalen is one of the world's most popular tourist attractions.",
      link: 'https://www.nordfjord.no/lodalen'
    }
  },
  nearby: {
    title: 'Things to do in Stryn',
    intro: 'Stryn lies at the inner end of the Nordfjord, between fjords, glaciers and mountains. Driving times from the cabin:',
    places: [
      { name: 'Stryn town centre', driveTime: '5 minutes', text: 'Shops, cafés and grocery stores.' },
      {
        name: 'Loen Skylift',
        driveTime: '15 minutes',
        text: 'Cable car from the fjord in Loen to the top of Mount Hoven, 1,011 metres above sea level.'
      },
      { name: 'Olden', driveTime: '25 minutes', text: 'Village by the fjord, and the way into Oldedalen and Briksdalsbreen.' },
      {
        name: 'Gamle Strynefjellsvegen',
        driveTime: '40 minutes',
        text: "A narrow old mountain road over Strynefjellet and one of Norway's National Tourist Routes, open in summer."
      },
      { name: 'Stryn Sommerski', driveTime: '45 minutes', text: 'Summer ski centre on Strynefjellet, with skiing and snowboarding in early summer.' },
      {
        name: 'Briksdalsbreen',
        driveTime: '50 minutes',
        text: "An arm of Jostedalsbreen, mainland Europe's largest glacier. From Briksdal you walk up to the glacier."
      }
    ]
  },
  cabin: {
    title: 'The cabin',
    facts: [
      'The cabin has 3 bedrooms and room for up to 7 guests',
      'It is located in Stryn, a peaceful town in western Norway, address: Strynevegen 253',
      'Free parking at the cabin',
      'The cabin is rented out during the summer season',
      'There are many nearby mountain trails and tourist attractions, such as Loen Skylift and Geiranger'
    ],
    equipped:
      'The cabin is equipped with everything you need, including a dishwasher, washing machine, Wi-Fi, TV, fireplace and an outdoor grill',
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
