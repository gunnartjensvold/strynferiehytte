import type { Content } from './types'

const cabinImageAlt = 'Gul trehytte i Stryn med hage, uteplass og grønne fjell bak'

export const nb: Content = {
  locale: 'nb',
  homePath: '/no',
  ogLocale: 'nb_NO',
  meta: {
    title: 'Ferie i Stryn: hytte til leie | Stryn Feriehytte',
    description:
      'Hytte til leie i Stryn for opptil 7 personer – perfekt for ferie på Vestlandet. Turstier rett ved, og Loen Skylift og Geiranger i nærheten. Bestill direkte.',
    shareTitle: 'Stryn Feriehytte – hytte til leie i Stryn',
    shareImageAlt: 'Gul trehytte i Stryn med hage og grønne fjell bak'
  },
  nav: {
    home: 'Hjem',
    experiences: 'Opplevelser',
    cabin: 'Hytta',
    availability: 'Ledige datoer',
    prices: 'Priser',
    callUs: 'Ring oss',
    logoAlt: 'Stryn Feriehytte-logo',
    otherLanguage: { label: 'English', short: 'EN', href: '/', hrefLang: 'en' }
  },
  hero: {
    title: 'Hytte til leie i Stryn',
    subtitleStart: 'Opplev den vakreste',
    subtitleEnd: 'naturen Norge har å by på.',
    imageAlt: cabinImageAlt,
    findDates: 'Finn datoer'
  },
  experiences: {
    title: 'Vakker natur rett utenfor døra',
    readMore: 'Les mer om',
    skuten: {
      subtitle: 'Tursti i nærheten',
      imageAlt: 'Utsikt fra Skuten, en populær tursti i nærheten av hytta',
      text: 'Skuten er en av mange turstier i området. Turen tar rundt 30 til 60 minutter.',
      link: 'https://www.nordfjord.no/skuten'
    },
    geiranger: {
      subtitle: '2 timer med bil',
      imageAlt: 'Utsikt over Geiranger, et populært reisemål 2 timer med bil fra hytta',
      text: 'Den vakre utsikten i Geiranger er bare 2 timer unna med bil.',
      link: 'https://www.visitnorway.no/reisemal/vestlandet/geirangerfjorden/'
    },
    lodalen: {
      subtitle: '1 time med bil',
      imageAlt: 'Breene i Lodalen, en populær turistattraksjon i nærheten av hytta',
      text: 'Lodalen er en av de mest populære turistattraksjonene i verden.',
      link: 'https://www.nordfjord.no/lodalen'
    }
  },
  nearby: {
    title: 'Opplevelser i Stryn',
    intro: 'Stryn ligger innerst i Nordfjord, mellom fjord, isbreer og fjell. Kjøretid fra hytta:',
    places: [
      { name: 'Stryn sentrum', driveTime: '5 minutter', text: 'Butikker, kafeer og dagligvarebutikker.' },
      {
        name: 'Loen Skylift',
        driveTime: '15 minutter',
        text: 'Taubane fra fjorden i Loen til toppen av Hoven, 1011 meter over havet.'
      },
      { name: 'Olden', driveTime: '25 minutter', text: 'Bygd ved fjorden, og veien inn til Oldedalen og Briksdalsbreen.' },
      {
        name: 'Gamle Strynefjellsvegen',
        driveTime: '40 minutter',
        text: 'Smal, gammel fjellvei over Strynefjellet og en av Nasjonale turistveger, åpen om sommeren.'
      },
      { name: 'Stryn Sommerski', driveTime: '45 minutter', text: 'Sommerskisenter på Strynefjellet, med ski og snowboard tidlig på sommeren.' },
      {
        name: 'Briksdalsbreen',
        driveTime: '50 minutter',
        text: 'En arm av Jostedalsbreen, den største isbreen på det europeiske fastlandet. Fra Briksdal går du opp til breen.'
      }
    ]
  },
  cabin: {
    title: 'Hytta',
    facts: [
      'Hytta har 3 soverom og plass til opptil 7 personer',
      'Den ligger i Stryn, et fredelig sted på Vestlandet, adresse: Strynevegen 253',
      'Gratis parkering ved hytta',
      'Hytta leies ut i sommersesongen',
      'Det er mange turstier og turistattraksjoner i nærheten, som Loen Skylift og Geiranger'
    ],
    equipped: 'Hytta har alt du trenger, blant annet oppvaskmaskin, vaskemaskin, Wi-Fi, TV, peis og grill',
    carousel: {
      previous: 'Forrige bilde',
      next: 'Neste bilde',
      imageAlts: [
        cabinImageAlt,
        'Hyttas gule trevegger og overbygde inngang, med skog bak',
        'Hytta og grusgangen en solrik dag, med dalen og fjellene i Stryn i bakgrunnen'
      ]
    }
  },
  availability: {
    title: 'Ledige datoer',
    text: 'Finn datoene som passer for din neste ferie i kalenderen under. Ring eller send en e-post for å bestille hytta.',
    sendMail: 'Send e-post',
    mailSubject: 'Bestilling av Stryn Feriehytte',
    mailBody: 'Hei, jeg heter __ og vil gjerne leie Stryn Feriehytte fra __ til __.',
    calendar: {
      months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
      previousMonth: 'Forrige måned',
      nextMonth: 'Neste måned',
      error: 'Kunne ikke hente ledige datoer. Prøv igjen senere.'
    }
  },
  prices: {
    title: 'Priser',
    formatPrice: (nok) => `${nok},- kr`,
    cabin: { title: 'Leie av hytta', description: 'Prisen for å leie hytta én natt.' },
    cleaning: { title: 'Sluttrengjøring', description: 'Hvis du vil at vi skal vaske hytta etter oppholdet.' },
    sheets: { title: 'Sengetøy', description: 'Vi legger frem rent sengetøy når du kommer.' }
  }
}
