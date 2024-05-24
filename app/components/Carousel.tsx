'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './CarouselSelectedSnapDisplay'
import ResponsiveImage from './ResponsiveImage'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <div>
      <div
        className='embla rounded-2xl'
        ref={emblaRef}
      >
        <div className='embla__container cursor-pointer'>
          <ResponsiveImage
            src='/images/desktop/hero.jpeg'
            alt='Cabin in the countryside'
            sizes='(min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
          <ResponsiveImage
            src='/images/desktop/1.jpeg'
            alt='Cabin in the countryside'
            sizes=' (min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
          <ResponsiveImage
            src='/images/desktop/2.jpeg'
            alt='Cabin in the countryside'
            sizes=' (min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
        </div>
      </div>
      <div className='flex pt-4 pb-1 px-1 justify-between items-center text-xl'>
        <div className='flex gap-2'>
          <Button
            srText='Previous image'
            type='secondary'
            onClick={scrollPrev}
            icon={<ArrowBackIosOutlinedIcon />}
          />

          <Button
            srText='Next image'
            type='secondary'
            onClick={scrollNext}
            icon={<ArrowForwardIosOutlinedIcon />}
          />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  )
}
