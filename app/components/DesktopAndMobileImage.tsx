import { getImageProps } from 'next/image'

export default function DesktopAndMobileImage({ swapPictureBreakpoint, sharedProps, desktopProps, mobileProps }: { swapPictureBreakpoint: number; sharedProps: { alt: string; sizes: string; priority: boolean }; desktopProps: { url: string }; mobileProps: { url: string } }) {
  const {
    props: { srcSet: desktop }
  } = getImageProps({
    ...sharedProps,
    // src: '/images/desktop/hero.jpeg'
    priority: sharedProps.priority,
    src: desktopProps.url,
    fill: true
  })
  const {
    props: { srcSet: mobile, ...rest }
  } = getImageProps({
    ...sharedProps,
    priority: sharedProps.priority,
    src: mobileProps.url,
    fill: true
    // src: '/images/mobile/hero.jpeg'
  })
  return (
    <div className='relative'>
      <picture>
        <source
          media={`(min-width: ${swapPictureBreakpoint}px)`}
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
