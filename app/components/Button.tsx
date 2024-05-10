export default function Button({ text, icon, type = 'primary' }: { text: string; icon?: React.ReactNode; type?: 'primary' | 'secondary' }) {
  return (
    <button className={`font-medium flex gap-2.5 px-2.5 py-2 text-brown rounded-lg border-brown border-2 hover:scale-110 duration-150 ${type === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}>
      {icon && icon}
      {text}
    </button>
  )
}
