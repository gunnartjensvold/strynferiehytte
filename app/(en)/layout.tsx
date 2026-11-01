import RootDocument from '@/app/components/RootDocument'
import { en } from '@/app/content/en'

export default function EnglishLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootDocument content={en}>{children}</RootDocument>
}
