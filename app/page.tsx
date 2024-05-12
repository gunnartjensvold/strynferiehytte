import Button from './components/Button'
import DesktopAndMobileImage from './components/DesktopAndMobileImage'
import ExperienceCard from './components/ExperienceCard'
import LinkButton from './components/LinkButton'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import HikingIcon from '@mui/icons-material/Hiking'
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined'

export default function Home() {
  return (
    <main>
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
              <Button
                text='Find dates'
                type='secondary'
              ></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section
        id='experiences'
        className='flex flex-col items-center justify-center gap-12 px-8 pt-12'
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
              sizes: '25vw',
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
              sizes: '25vw',
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
              sizes: '25vw',
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
    </main>
  )
}
