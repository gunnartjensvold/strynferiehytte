import Image from 'next/image'
import Button from './components/Button'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import { getImageProps } from 'next/image'

export default function Home() {
  const common = { alt: 'Cabin in the countryside', sizes: '100vw' }
  const {
    props: { srcSet: desktop }
  } = getImageProps({
    ...common,
    height: 3024,
    width: 4032,
    priority: true,
    src: '/images/desktop/hero.jpeg'
  })
  const {
    props: { srcSet: mobile, ...rest }
  } = getImageProps({
    ...common,
    width: 3024,
    height: 4032,
    priority: true,
    src: '/images/mobile/hero.jpeg'
  })

  return (
    <main>
      <section
        id='hero'
        className='max-h-[min(90vh,1016px)] flex relative'
      >
        <div className='flex-1 flex items-center overflow-hidden before:content-[""] before:absolute before:inset-0 before:bg-black/50 '>
          <picture>
            <source
              media='(min-width: 1000px)'
              srcSet={desktop}
            />
            <source
              media='(min-width: 0px)'
              srcSet={mobile}
            />
            <img
              {...rest}
              style={{ width: '100%', height: 'auto' }}
            />
          </picture>
          <div className='absolute px-2 pt-14 sm:pt-0 inset-0 flex flex-col gap-4 items-center justify-center text-center z-10 text-white'>
            <h1 className='text-3xl sm:text-5xl  md:text-6xl'>Experience Norway</h1>
            <p className=' text-lg sm:text-xl  md:text-2xl'>
              At an idyllic cabin surrounded by the most beautiful <br></br> nature Norway has to offer.
            </p>
            <div className='flex gap-3'>
              <Button
                text='Call us'
                icon={<CallOutlinedIcon />}
              ></Button>
              <Button
                text='Find dates'
                type='secondary'
              ></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
