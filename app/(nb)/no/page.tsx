import HomePage from '@/app/components/HomePage'
import { nb } from '@/app/content/nb'
import { pageMetadata } from '@/app/utils/site'

export const metadata = pageMetadata(nb)

export default function NorwegianHome() {
  return <HomePage content={nb} />
}
