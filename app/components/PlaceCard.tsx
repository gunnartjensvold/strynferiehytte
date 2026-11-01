type Props = {
  name: string
  driveTime: string
  text: string
  link: string
  readMore: string
}

export default function PlaceCard({ name, driveTime, text, link, readMore }: Props) {
  return (
    <div className='flex flex-col gap-2 h-full bg-white drop-shadow-2xl p-6 rounded-xl'>
      <h3 className='text-2xl'>{name}</h3>
      <p className='text-success text-xl font-bold'>{driveTime}</p>
      <div className='flex grow flex-col gap-1 justify-between text-green'>
        <p>{text}</p>
        <p>
          {readMore}{' '}
          <a
            className='font-bold underline underline-offset-4'
            href={link}
          >
            {name}
          </a>
        </p>
      </div>
    </div>
  )
}
