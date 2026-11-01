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
    // A tiny version of the photo, shown blurred until the photo has loaded
    blurDataURL?: string
    blurWidth?: number
    blurHeight?: number
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
    // Passed like a static import, so Next.js scales the blur to the tiny image instead of the full photo
    src: mobileImage,
    placeholder: mobileImage.blurDataURL ? 'blur' : 'empty'
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
          // getImageProps only uses priority to turn off lazy loading, so ask the browser for the image first here
          fetchPriority={shared.priority ? 'high' : undefined}
          style={{ ...rest.style, width: '100%', height: 'auto' }}
        />
      </picture>
    </div>
  )
}
