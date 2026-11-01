type Props = {
  name: string
  driveTime: string
  text: string
}

export default function PlaceCard({ name, driveTime, text }: Props) {
  return (
    <div className='flex flex-col gap-2 h-full bg-white drop-shadow-2xl p-6 rounded-xl'>
      <h3 className='text-2xl'>{name}</h3>
      <p className='text-success text-xl font-bold'>{driveTime}</p>
      <p className='text-green'>{text}</p>
    </div>
  )
}
