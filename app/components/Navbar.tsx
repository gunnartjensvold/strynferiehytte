import Link from 'next/link'
import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'
import Button from './Button'

const BaiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '600' })

export default function Navbar() {
  return (
    <nav className='flex h-20 px-3 sm:px-8 items-center justify-between text-white'>
      <Link
        href={'/'}
        className={BaiJamjuree.className + ' flex items-center gap-2.5 group'}
      >
        <Image
          className=''
          src='/logo.svg'
          alt='Next.js Logo'
          width={60}
          height={47}
          priority
        />
        <span className='font-semibold tracking-wide group-hover:text-primary'>Stryn Ferie Hytte</span>
      </Link>

      <div className='gap-8 font-semibold md:flex hidden'>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
      </div>

      <Button text='Call us' />
    </nav>
  )
}
