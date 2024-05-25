// Components
import DesktopAndMobileImage from './components/DesktopAndMobileImage'
import ExperienceCard from './components/ExperienceCard'
import LinkButton from './components/LinkButton'
import { EmblaCarousel } from './components/Carousel'

// Icons
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import HikingIcon from '@mui/icons-material/Hiking'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined'
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined'
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined'
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined'
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined'
import TvOutlinedIcon from '@mui/icons-material/TvOutlined'
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined'
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined'
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined'
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { Calendar } from './components/Calendar'
import PriceCard from './components/PriceCard'
import CabinOutlinedIcon from '@mui/icons-material/CabinOutlined'
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'

export default function Home() {
  return (
    <main className='flex flex-col gap-24'>
      {/* Hero */}
      <section
        id='hero'
        className='flex min-h-[min(100vw/3*4-50px,max(80vh,700px))] md:min-h-[min(100vw/4*3-50px,max(80vh,700px))] bg-black/30'
      >
        <div className='w-full flex relative pt-20 pb-8 items-center justify-center'>
          <div className='absolute inset-0 flex items-center overflow-hidden -z-10'>
            <div className='absolute inset-0 z-10 bg-black/50'></div>
            <DesktopAndMobileImage
              shared={{ alt: 'Cabin in the countryside', sizes: '100vw', priority: true }}
              desktopImage={{ src: '/images/desktop/hero.jpeg', breakPoint: 768, width: 4032, height: 3024 }}
              mobileImage={{ src: '/images/mobile/hero.jpeg', width: 3024, height: 4032 }}
            ></DesktopAndMobileImage>
          </div>
          <div className='px-8 flex flex-col gap-2 xs:gap-4 items-center justify-center text-center text-white'>
            <h1 className='text-4xl xs:text-5xl  md:text-6xl'>Experience Norway</h1>
            <p className='xs:text-xl md:text-2xl text-balance'>
              At an idyllic cabin surrounded by the most beautiful <br></br> nature Norway has to offer.
            </p>
            <div className='flex gap-3'>
              <LinkButton
                text='Call us'
                href='tel:+47 918 79 843'
                icon={<CallOutlinedIcon />}
              ></LinkButton>
              <LinkButton
                text='Find dates'
                type='secondary'
                href='/#availability'
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
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center'>Beautiful secenery at your doorstep</h1>
        <div className='w-full flex justify-between flex-wrap gap-8'>
          <ExperienceCard
            header={{
              icon: <HikingIcon fontSize='inherit' />,
              title: 'Skuten',
              subtitle: 'Nearby hiking trail'
            }}
            image={{
              src: '/images/skuten.jpeg',
              alt: 'View of Skuten in Norway, a popular hiking trail close to the cabin',
              sizes: '(min-width: 640px)33vw, (min-width: 768px) 50vw, 100vw',
              width: 3024,
              height: 4032
            }}
            footer={{
              text: 'Skuten is one of many hiking trails in the area. The trip takes around 30 to 60 minutes.',
              link: 'https://ut.no/turforslag/116929377/skuten-pa-kirkeeide'
            }}
          />
          <ExperienceCard
            header={{
              icon: <DirectionsCarOutlinedIcon fontSize='inherit' />,
              title: 'Geiranger',
              subtitle: '2 hour drive'
            }}
            image={{
              src: '/images/geiranger.jpeg',
              alt: 'View of Geiranger in Norway, a popular hiking trail 2 hour drive from the cabin',
              sizes: '(min-width: 640px)33vw, (min-width: 768px) 50vw, 100vw',
              width: 3024,
              height: 4032
            }}
            footer={{
              text: 'The beautiful views of geiranger can be experienced through a short 1 hour drive.',
              link: 'https://www.visitnorway.no/reisemal/vestlandet/geirangerfjorden/'
            }}
          />
          <ExperienceCard
            header={{
              icon: <DirectionsCarOutlinedIcon fontSize='inherit' />,
              title: 'Lodalen',
              subtitle: '1 hour drive'
            }}
            image={{
              src: '/images/lodalen.jpeg',
              alt: 'View of the glaciers in Lodalen, a popular tourist attraction close to the cabin',
              sizes: '(min-width: 640px)33vw, (min-width: 768px) 50vw, 100vw',
              width: 3024,
              height: 4032
            }}
            footer={{
              text: 'Lodalen is one of the worlds most popular tourist attractions.',
              link: 'https://www.nordfjord.no/lodalen'
            }}
          />
        </div>
      </section>

      {/* Cabin */}
      <section
        id='cabin'
        className='flex flex-col xl:flex-row xl:items-center lg:gap-12 gap-8 px-4 sm:px-8'
      >
        <div className='flex flex-col gap-8 py-8 basis-1/3 grow shrink'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-left'>The cabin</h1>
          <ul className='text-xl flex flex-col gap-6 break-words text-green'>
            <li>The cabin acommodates up to 7 people</li>
            <li>It is located in Stryn, a peaceful town in western Norway, address: strynevegen 253</li>
            <li>There are many nearby mountain trails and tourist attractions, such as Loen Skylift and Geiranger</li>
            <li>
              <p>The cabin is equipped with everything you need</p>
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

        <div className='items-center basis-1/2 shrink-0 max-w-screen-lg'>
          <EmblaCarousel />
        </div>
      </section>

      {/* Availability */}
      <section
        id='availability'
        className='flex flex-col justify-center gap-12 px-4 sm:px-8'
      >
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-left'>Availability Calendar</h1>
          <p className='text-xl text-green'>Find the dates suited for your next holiday in the calendar below. Please call or send an email to book the cabin.</p>
          <div className='flex gap-4'>
            <LinkButton
              icon={<CallOutlinedIcon />}
              href='tel:+4791879843'
              text='Call us'
            />
            <LinkButton
              icon={<AlternateEmailOutlinedIcon />}
              href='mailto:Ytreeideferiehus@gmail.com?subject=Ytreeide Feriehus booking&body=Hello, my name is __ and i would like to book ytreeide feriehus from __ to __.'
              text='Send mail'
              type='secondary'
            />
          </div>
        </div>
        <div className='flex justify-between flex-wrap gap-8'>
          <Calendar />
        </div>
      </section>

      {/* Prices */}
      <section
        id='experiences'
        className='flex flex-col items-center justify-center gap-12 px-4 sm:px-8'
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center'>Prices</h1>
        <div className='w-full grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-8'>
          <PriceCard
            title='Cabin rental'
            icon={<CabinOutlinedIcon fontSize='inherit' />}
            price='1400,- NOK'
            description='The cost of renting the cabin one night.'
          />
          <PriceCard
            title='Final cleaning'
            icon={<CleaningServicesOutlinedIcon fontSize='inherit' />}
            price='500,- NOK'
            description='If you need us to clean the cabin after your stay.'
          />
          <PriceCard
            title='Fresh sheets'
            icon={<BedOutlinedIcon fontSize='inherit' />}
            price='120,- NOK'
            description="We'll provide you with fresh sheets at the beginning of your stay."
          />
        </div>
      </section>

      <div className='py-8'></div>
    </main>
  )
}
