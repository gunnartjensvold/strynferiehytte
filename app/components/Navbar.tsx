import Link from 'next/link'
import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'
import LinkButton from './LinkButton'
import type { Content } from '@/app/content/types'
import { contact } from '@/app/utils/site'

const BaiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '600' })

export default function Navbar({ content }: { content: Content }) {
  const { nav, homePath } = content

  return (
    <nav className='flex h-20 px-3 sm:px-8 items-center justify-between text-white'>
      <Link
        href={`${homePath}#hero`}
        className={BaiJamjuree.className + ' flex items-center gap-2.5 group'}
      >
        <Image
          className=''
          src='/logo.svg'
          alt={nav.logoAlt}
          width={60}
          height={47}
          priority
        />
        <span className='font-semibold tracking-wide group-hover:text-primary'>Stryn Feriehytte</span>
      </Link>

      <div className='gap-8 font-semibold lg:flex hidden'>
        <Link
          className='hover:text-primary'
          href={`${homePath}#hero`}
        >
          {nav.home}
        </Link>
        <Link
          href={`${homePath}#experiences`}
          className='hover:text-primary'
        >
          {nav.experiences}
        </Link>
        <Link
          href={`${homePath}#cabin`}
          className='hover:text-primary'
        >
          {nav.cabin}
        </Link>
        <Link
          className='hover:text-primary'
          href={`${homePath}#availability`}
        >
          {nav.availability}
        </Link>
        <Link
          className='hover:text-primary'
          href={`${homePath}#prices`}
        >
          {nav.prices}
        </Link>
      </div>

      <div className='flex items-center gap-3 sm:gap-6'>
        <a
          className='font-semibold hover:text-primary'
          href={nav.otherLanguage.href}
          hrefLang={nav.otherLanguage.hrefLang}
          lang={nav.otherLanguage.hrefLang}
        >
          <span className='hidden sm:inline'>{nav.otherLanguage.label}</span>
          <span className='sm:hidden'>{nav.otherLanguage.short}</span>
        </a>
        <LinkButton
          href={contact.phoneHref}
          text={nav.callUs}
        />
      </div>
    </nav>
  )
}
