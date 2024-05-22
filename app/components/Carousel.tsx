'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import ResponsiveImage from './ResponsiveImage'
import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './CarouselSelectedSnapDisplay'

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
    <div
      className='embla'
      ref={emblaRef}
    >
      <div className='embla__container'>
        <ResponsiveImage
          src='/images/desktop/hero.jpeg'
          alt='Cabin in the countryside'
          sizes='(min-width: 1280px) 50vw ,100vw'
          width={4032}
          height={3024}
        />
        <ResponsiveImage
          src='/images/desktop/hero.jpeg'
          alt='Cabin in the countryside'
          sizes=' (min-width: 1280px) 50vw , 100vw'
          width={4032}
          height={3024}
        />
      </div>

      <div className='flex py-4 px-1 justify-between items-center'>
        <div className='flex gap-2'>
          <Button
            type='secondary'
            onClick={scrollPrev}
            icon={<ArrowBackIosOutlinedIcon fontSize='inherit' />}
          />

          <Button
            type='secondary'
            onClick={scrollNext}
            icon={<ArrowForwardIosOutlinedIcon fontSize='inherit' />}
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
