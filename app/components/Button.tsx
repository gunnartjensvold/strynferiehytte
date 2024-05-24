type Props = {
  text?: string
  srText?: string
  icon?: React.ReactNode
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function Button({ text, srText, icon, type = 'primary', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`font-medium flex gap-2.5 px-2.5 py-2 text-brown rounded-lg border-brown border-2 hover:scale-110 duration-150 ${type === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}
    >
      {icon && icon}
      {text}
      <span className='sr-only'>{srText}</span>
    </button>
  )
}
