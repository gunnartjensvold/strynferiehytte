export type CalendarLabels = {
  months: string[]
  previousMonth: string
  nextMonth: string
  error: string
}

export type CarouselLabels = {
  previous: string
  next: string
  imageAlts: [string, string, string]
}

type Experience = {
  subtitle: string
  imageAlt: string
  text: string
}

type PriceText = {
  title: string
  description: string
}

// All text on the home page, one object per language
export type Content = {
  locale: 'en' | 'nb'
  homePath: '/' | '/no'
  ogLocale: string
  meta: {
    title: string
    description: string
    shareTitle: string
    shareImageAlt: string
  }
  nav: {
    home: string
    experiences: string
    cabin: string
    availability: string
    prices: string
    callUs: string
    logoAlt: string
    // Link to the same page in the other language; short is shown on phones
    otherLanguage: { label: string; short: string; href: string; hrefLang: string }
  }
  hero: {
    title: string
    subtitleStart: string
    subtitleEnd: string
    imageAlt: string
    findDates: string
  }
  experiences: {
    title: string
    readMore: string
    skuten: Experience
    geiranger: Experience
    lodalen: Experience
  }
  cabin: {
    title: string
    facts: string[]
    equipped: string
    carousel: CarouselLabels
  }
  availability: {
    title: string
    text: string
    sendMail: string
    mailSubject: string
    mailBody: string
    calendar: CalendarLabels
  }
  prices: {
    title: string
    formatPrice: (nok: number) => string
    cabin: PriceText
    cleaning: PriceText
    sheets: PriceText
  }
}
