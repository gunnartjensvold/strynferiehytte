import Image from 'next/image'

export type ResponsiveImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}

export default function ResponsiveImage({ src, alt, sizes, width, height }: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: 'auto'
      }}
    />
  )
}
