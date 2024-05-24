import Link from 'next/link'
import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'
import LinkButton from './LinkButton'

const BaiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '600' })

export default function Navbar() {
  return (
    <nav className='flex h-20 px-3 sm:px-8 items-center justify-between text-white'>
      <Link
        href={'/#hero'}
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

      <div className='gap-8 font-semibold lg:flex hidden'>
        <Link
          className='hover:text-primary'
          href={'/#hero'}
        >
          Home
        </Link>
        <Link
          href={'/#experiences'}
          className='hover:text-primary'
        >
          Experiences
        </Link>
        <Link
          href={'/#cabin'}
          className='hover:text-primary'
        >
          Cabin
        </Link>
        <Link
          className='hover:text-primary'
          href={'/#availability'}
        >
          Availability
        </Link>
        <Link
          className='hover:text-primary'
          href={'/'}
        >
          Home
        </Link>
      </div>

      <LinkButton
        href='tel:+47 918 79 843'
        text='Call us'
      />
    </nav>
  )
}
