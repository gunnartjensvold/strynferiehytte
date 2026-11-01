import { getImageProps, type ImageLoader } from 'next/image'

// Netlify's Image CDN serves WebP for /_next/image even when the browser accepts AVIF, so on
// Netlify the AVIF versions are requested from the CDN directly. AVIF at q=40 is less than half the
// size of WebP at q=75 and looks the same. It only exists on Netlify, so local builds skip it.
const avifLoader: ImageLoader | undefined =
  process.env.NETLIFY === 'true'
    ? ({ src, width }) => `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=40&fm=avif`
    : undefined

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
  const desktopMedia = `(min-width: ${desktopImage.breakPoint}px)`
  const srcSet = (image: Props['mobileImage'], loader?: ImageLoader) =>
    getImageProps({ ...shared, ...image, loader }).props.srcSet
  const {
    props: { srcSet: mobile, ...rest }
  } = getImageProps({
    ...shared,
    ...mobileImage
  })
  return (
    <div className='relative'>
      <picture>
        {avifLoader && (
          <source
            media={desktopMedia}
            type='image/avif'
            srcSet={srcSet(desktopImage, avifLoader)}
          />
        )}
        <source
          media={desktopMedia}
          srcSet={srcSet(desktopImage)}
        />
        {avifLoader && (
          <source
            type='image/avif'
            srcSet={srcSet(mobileImage, avifLoader)}
          />
        )}
        <source srcSet={mobile} />
        <img
          {...rest}
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    </div>
  )
}
