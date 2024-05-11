import ResponsiveImage from './ResponsiveImage'

ResponsiveImage

export default function ExperienceCard({ headerIcon, headerTitle, headerSubtitle, image }: { headerIcon: React.ReactNode; headerTitle: string; headerSubtitle: string; image: { url: string; alt: string; width: number; height: number } }) {
  return (
    <div className='flex flex-col gap-6 py-6 bg-white rounded-2xl'>
      <div className='flex gap-4 px-4'>
        <span className='text-6xl text-green'>{headerIcon}</span>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl'>{headerTitle}</h2>
          <p className='text-green'>{headerSubtitle}</p>
        </div>
      </div>
      <ResponsiveImage
        sizes='25vw'
        url={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      ></ResponsiveImage>
    </div>
  )
}
