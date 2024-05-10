import Link from 'next/link'

export default function LinkButton({ text, icon, href, type = 'primary' }: { text: string; href: string; icon?: React.ReactNode; type?: 'primary' | 'secondary' }) {
  return (
    <Link
      href={href}
      className={`font-medium flex gap-2.5 px-2.5 py-2 text-brown rounded-lg border-brown border-2 hover:scale-110 duration-150 ${type === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}
    >
      {icon && icon}
      {text}
    </Link>
  )
}
