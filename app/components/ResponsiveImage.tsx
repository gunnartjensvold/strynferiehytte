import Image from 'next/image'

export default function ResponsiveImage({ url, alt, sizes, width, height }: { url: string; alt: string; sizes: string; width: number; height: number }) {
  return (
    <Image
      src={url}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: 'auto'
      }}
    ></Image>
  )
}
