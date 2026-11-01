import { getImageProps } from 'next/image'

type Props = {
  shared: {
    alt: string
    sizes: string
    priority: boolean
  }
  desktopImage: {
    src: string
    width: number
    height: number
    breakPoint: number
  }
  mobileImage: {
    src: string
    width: number
    height: number
  }
}

export default function DesktopAndMobileImage({ shared, desktopImage, mobileImage }: Props) {
  const {
    props: { srcSet: desktop }
  } = getImageProps({
    ...shared,
    ...desktopImage
  })
  const {
    props: { srcSet: mobile, ...rest }
  } = getImageProps({
    ...shared,
    ...mobileImage
  })
  return (
    <div className='relative'>
      <picture>
        <source
          media={`(min-width: ${desktopImage.breakPoint}px)`}
          srcSet={desktop}
        />
        <source srcSet={mobile} />
        <img
          {...rest}
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    </div>
  )
}
