// Components
import DesktopAndMobileImage from './DesktopAndMobileImage'
import ExperienceCard from './ExperienceCard'
import LinkButton from './LinkButton'
import { EmblaCarousel } from './Carousel'
import { Calendar } from './Calendar'
import PriceCard from './PriceCard'
import PlaceCard from './PlaceCard'

// Icons
import {
  CallOutlinedIcon,
  HikingIcon,
  DirectionsCarOutlinedIcon,
  LocalLaundryServiceOutlinedIcon,
  KitchenOutlinedIcon,
  CountertopsOutlinedIcon,
  ShowerOutlinedIcon,
  OutdoorGrillOutlinedIcon,
  FireplaceOutlinedIcon,
  TvOutlinedIcon,
  DeckOutlinedIcon,
  NaturePeopleOutlinedIcon,
  FenceOutlinedIcon,
  WifiOutlinedIcon,
  AlternateEmailOutlinedIcon,
  CabinOutlinedIcon,
  CleaningServicesOutlinedIcon,
  BedOutlinedIcon
} from './icons'

import type { Content } from '@/app/content/types'
import { contact, pricesNok, vacationRentalJsonLd } from '@/app/utils/site'

const experienceImageSizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'

export default function HomePage({ content }: { content: Content }) {
  const { hero, experiences, nearby, cabin, availability, prices } = content
  const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent(availability.mailSubject)}&body=${encodeURIComponent(availability.mailBody)}`

  return (
    <main className='flex flex-col gap-24'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalJsonLd(content)).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <section
        id='hero'
        className='flex min-h-[min(100vw/3*4-50px,max(80vh,700px))] md:min-h-[min(100vw/4*3-50px,max(80vh,700px))] bg-black/30'
      >
        <div className='w-full flex relative pt-20 pb-8 items-center justify-center'>
          <div className='absolute inset-0 flex items-center overflow-hidden -z-10'>
            <div className='absolute inset-0 z-10 bg-black/50'></div>
            <DesktopAndMobileImage
              shared={{ alt: hero.imageAlt, sizes: '100vw', priority: true }}
              desktopImage={{ src: '/images/desktop/hero.jpeg', breakPoint: 768, width: 4032, height: 3024 }}
              mobileImage={{ src: '/images/mobile/hero.jpeg', width: 3024, height: 4032 }}
            ></DesktopAndMobileImage>
          </div>
          <div className='px-8 flex flex-col gap-2 xs:gap-4 items-center justify-center text-center text-white'>
            <h1 className='text-4xl xs:text-5xl  md:text-6xl'>{hero.title}</h1>
            <p className='xs:text-xl md:text-2xl text-balance'>
              {hero.subtitleStart} <br></br> {hero.subtitleEnd}
            </p>
            <div className='flex gap-3'>
              <LinkButton
                text={content.nav.callUs}
                href={contact.phoneHref}
                icon={<CallOutlinedIcon />}
              ></LinkButton>
              <LinkButton
                text={hero.findDates}
                type='secondary'
                href={`${content.homePath}#availability`}
              ></LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section
        id='experiences'
        className='flex flex-col items-center justify-center gap-12 px-4 sm:px-8'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl text-center'>{experiences.title}</h2>
        <div className='w-full flex justify-between flex-wrap gap-8'>
          <ExperienceCard
            header={{
              icon: <HikingIcon fontSize='inherit' />,
              title: 'Skuten',
              subtitle: experiences.skuten.subtitle
            }}
            image={{
              src: '/images/skuten.jpeg',
              alt: experiences.skuten.imageAlt,
              sizes: experienceImageSizes,
              width: 3024,
              height: 4032
            }}
            footer={{
              text: experiences.skuten.text,
              readMore: experiences.readMore,
              link: experiences.skuten.link
            }}
          />
          <ExperienceCard
            header={{
              icon: <DirectionsCarOutlinedIcon fontSize='inherit' />,
              title: 'Geiranger',
              subtitle: experiences.geiranger.subtitle
            }}
            image={{
              src: '/images/geiranger.jpeg',
              alt: experiences.geiranger.imageAlt,
              sizes: experienceImageSizes,
              width: 3024,
              height: 4032
            }}
            footer={{
              text: experiences.geiranger.text,
              readMore: experiences.readMore,
              link: experiences.geiranger.link
            }}
          />
          <ExperienceCard
            header={{
              icon: <DirectionsCarOutlinedIcon fontSize='inherit' />,
              title: 'Lodalen',
              subtitle: experiences.lodalen.subtitle
            }}
            image={{
              src: '/images/lodalen.jpeg',
              alt: experiences.lodalen.imageAlt,
              sizes: experienceImageSizes,
              width: 3024,
              height: 4032
            }}
            footer={{
              text: experiences.lodalen.text,
              readMore: experiences.readMore,
              link: experiences.lodalen.link
            }}
          />
        </div>
      </section>

      {/* Nearby */}
      <section
        id='nearby'
        className='flex flex-col gap-12 px-4 sm:px-8'
      >
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-left'>{nearby.title}</h2>
          <p className='text-xl text-green'>{nearby.intro}</p>
        </div>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {nearby.places.map((place) => (
            <li key={place.name}>
              <PlaceCard
                {...place}
                readMore={experiences.readMore}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Cabin */}
      <section
        id='cabin'
        className='flex flex-col xl:flex-row xl:items-center lg:gap-12 gap-8 px-4 sm:px-8'
      >
        <div className='flex flex-col gap-8 py-8 basis-1/3 grow shrink'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-left'>{cabin.title}</h2>
          <ul className='text-xl flex flex-col gap-6 wrap-break-word text-green'>
            {cabin.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
            <li>
              <p>{cabin.equipped}</p>
              <div className='text-4xl sm:text-5xl flex flex-wrap gap-4 mt-4 text-brown'>
                <LocalLaundryServiceOutlinedIcon fontSize='inherit' />
                <KitchenOutlinedIcon fontSize='inherit' />
                <WifiOutlinedIcon fontSize='inherit' />
                <CountertopsOutlinedIcon fontSize='inherit' />
                <ShowerOutlinedIcon fontSize='inherit' />
                <OutdoorGrillOutlinedIcon fontSize='inherit' />
                <FireplaceOutlinedIcon fontSize='inherit' />
                <TvOutlinedIcon fontSize='inherit' />
                <DeckOutlinedIcon fontSize='inherit' />
                <NaturePeopleOutlinedIcon fontSize='inherit' />
                <FenceOutlinedIcon fontSize='inherit' />
              </div>
            </li>
          </ul>
        </div>

        <div className='items-center basis-1/2 shrink-0 max-w-(--breakpoint-lg)'>
          <EmblaCarousel labels={cabin.carousel} />
        </div>
      </section>

      {/* Availability */}
      <section
        id='availability'
        className='flex flex-col justify-center gap-12 px-4 sm:px-8'
      >
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-left'>{availability.title}</h2>
          <p className='text-xl text-green'>{availability.text}</p>
          <div className='flex gap-4'>
            <LinkButton
              icon={<CallOutlinedIcon />}
              href={contact.phoneHref}
              text={content.nav.callUs}
            />
            <LinkButton
              icon={<AlternateEmailOutlinedIcon />}
              href={mailHref}
              text={availability.sendMail}
              type='secondary'
            />
          </div>
        </div>
        <div className='flex justify-between flex-wrap gap-8'>
          <Calendar labels={availability.calendar} />
        </div>
      </section>

      {/* Prices */}
      <section
        id='prices'
        className='flex flex-col items-center justify-center gap-12 px-4 sm:px-8'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl text-center'>{prices.title}</h2>
        <div className='w-full grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-8'>
          <PriceCard
            title={prices.cabin.title}
            icon={<CabinOutlinedIcon fontSize='inherit' />}
            price={prices.formatPrice(pricesNok.cabin)}
            description={prices.cabin.description}
          />
          <PriceCard
            title={prices.cleaning.title}
            icon={<CleaningServicesOutlinedIcon fontSize='inherit' />}
            price={prices.formatPrice(pricesNok.cleaning)}
            description={prices.cleaning.description}
          />
          <PriceCard
            title={prices.sheets.title}
            icon={<BedOutlinedIcon fontSize='inherit' />}
            price={prices.formatPrice(pricesNok.sheets)}
            description={prices.sheets.description}
          />
        </div>
      </section>

      <div className='py-8'></div>
    </main>
  )
}
