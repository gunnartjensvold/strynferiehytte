type Props = {
  icon: React.ReactNode
  title: string
  price: string
  description: string
}

export default function PriceCard({ icon, title, price, description }: Props) {
  return (
    <div className='flex flex-col gap-2 bg-white drop-shadow-2xl p-6 rounded-xl'>
      <div className='flex gap-2.5 items-center'>
        <span className='text-6xl text-green'>{icon}</span>
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <p className='text-success text-xl font-bold'>{price}</p>
      <p className='text-green'>{description}</p>
    </div>
  )
}
