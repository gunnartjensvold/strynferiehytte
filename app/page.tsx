import Button from './components/Button'
import DesktopAndMobileImage from './components/DesktopAndMobileImage'
import ExperienceCard from './components/ExperienceCard'
import LinkButton from './components/LinkButton'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        id='hero'
        className='flex min-h-[calc(100vw*4/3)] md:min-h-[min(calc(100vw*3/4),1060px)] bg-black/30'
      >
        <div className='w-full flex relative pt-20 pb-8 items-center justify-center'>
          <div className='absolute inset-0 flex items-center overflow-hidden -z-10'>
            <div className='absolute inset-0 z-10 bg-black/50'></div>
            <DesktopAndMobileImage
              swapPictureBreakpoint={768}
              sharedProps={{ alt: 'Cabin in the countryside', sizes: '100vw', priority: true }}
              desktopProps={{ url: '/images/desktop/hero.jpeg' }}
              mobileProps={{ url: '/images/mobile/hero.jpeg' }}
            ></DesktopAndMobileImage>
          </div>
          <div className='px-8 flex flex-col gap-2 xs:gap-4 items-center justify-center text-center text-white'>
            <h1 className=' text-4xl xs:text-5xl  md:text-6xl'>Experience Norway</h1>
            <p className=' xs:text-xl  md:text-2xl '>
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
      {/* <section
        id='experiences'
        className='flex flex-col items-center justify-center gap-12 px-8 pt-12'
      >
        <h1 className='text-4xl'>Beautiful secenery at your doorstep</h1>
        <div className='flex justify-between'>
          <ExperienceCard
            headerIcon={<CallOutlinedIcon fontSize='inherit' />}
            headerTitle='Experience Norway'
            headerSubtitle='Call us'
            image={{
              url: '/images/skuten.jpeg',
              alt: 'View of Skuten in Norway, a popular hiking trail close to the cabin'
            }}
          ></ExperienceCard>
        </div>
      </section> */}
    </main>
  )
}
