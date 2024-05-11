import Image from 'next/image'

export default function ExperienceCard({ headerIcon, headerTitle, headerSubtitle, image }: { headerIcon: React.ReactNode; headerTitle: string; headerSubtitle: string; image: { url: string; alt: string } }) {
  return (
    <div>
      <div className='flex gap-4'>
        <span className='text-6xl text-green'>{headerIcon}</span>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl'>{headerTitle}</h2>
          <p className='text-green'>{headerSubtitle}</p>
        </div>

        <Image
          src={image.url}
          alt={image.alt}
          width={3024}
          height={4032}
        ></Image>
      </div>
    </div>
  )
}
