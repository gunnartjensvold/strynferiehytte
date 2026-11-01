import { getImageProps, type ImageLoader } from 'next/image'

// The AVIF versions are static files that scripts/generate-avif.mjs writes before each build, because
// Netlify's Image CDN serves WebP even when the browser accepts AVIF, and answers about half a second
// slower than a static file. The paths must match the ones that script writes.
const avifLoader: ImageLoader = ({ src, width }) => `/generated${src.replace(/\.\w+$/, `-${width}.avif`)}`

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
        <source
          media={desktopMedia}
          type='image/avif'
          srcSet={srcSet(desktopImage, avifLoader)}
        />
        <source
          media={desktopMedia}
          srcSet={srcSet(desktopImage)}
        />
        <source
          type='image/avif'
          srcSet={srcSet(mobileImage, avifLoader)}
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
