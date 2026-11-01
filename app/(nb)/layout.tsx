import RootDocument from '@/app/components/RootDocument'
import { nb } from '@/app/content/nb'

export default function NorwegianLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootDocument content={nb}>{children}</RootDocument>
}
