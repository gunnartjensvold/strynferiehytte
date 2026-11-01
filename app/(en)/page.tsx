import HomePage from '@/app/components/HomePage'
import { en } from '@/app/content/en'
import { pageMetadata } from '@/app/utils/site'

export const metadata = pageMetadata(en)

export default function Home() {
  return <HomePage content={en} />
}
