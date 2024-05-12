import ResponsiveImage, { ResponsiveImageProps } from './ResponsiveImage'

type Props = {
  header: {
    icon: React.ReactNode
    title: string
    subtitle: string
  }
  image: ResponsiveImageProps
  footer: {
    text: string
    link: string
  }
}

export default function ExperienceCard({ header, image, footer }: Props) {
  return (
    <div className='flex drop-shadow-2xl basis-full sm:basis-[calc(50%-1rem)] sm:last-of-type:mx-auto lg:basis-[calc(33%-2rem*2/3)] lg:last-of-type:mx-0 flex-col gap-6 py-6 bg-white rounded-2xl'>
      {/* Header */}
      <div className='flex gap-4 px-4'>
        <span className='text-6xl text-green'>{header.icon}</span>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl'>{header.title}</h2>
          <p className='text-green'>{header.subtitle}</p>
        </div>
      </div>
      {/* Image */}
      <div className='aspect-square flex items-center overflow-hidden'>
        <ResponsiveImage {...image}></ResponsiveImage>
      </div>
      {/* Footer */}
      <div className='flex grow flex-col px-4 gap-1 justify-between text-green'>
        <p>{footer.text}</p>
        <a
          className='font-bold underline underline-offset-4'
          href={footer.link}
        >
          Read more
        </a>
      </div>
    </div>
  )
}
