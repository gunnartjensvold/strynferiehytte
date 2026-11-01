// Generates AVIF versions of the hero photos into public/generated/ before `next dev` and `next build`.
// Netlify's Image CDN takes about half a second longer to answer than a static file, and has to
// re-create each version after every deploy, so the hero (the LCP image) is served as static files.
// The paths must match avifSrc in app/components/DesktopAndMobileImage.tsx.
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import sharp from 'sharp'
import nextImageConfig from 'next/dist/shared/lib/image-config.js'

const sources = ['/images/mobile/hero.jpeg', '/images/desktop/hero.jpeg']
// The same widths next/image puts in the srcset for sizes='100vw'
const widths = nextImageConfig.imageConfigDefault.deviceSizes
// AVIF at q=40 is less than half the size of WebP at q=75 and looks the same under the hero's overlay
const quality = 40

const publicDir = join(import.meta.dirname, '..', 'public')

for (const src of sources) {
  for (const width of widths) {
    const out = join(publicDir, 'generated', src.replace(/\.\w+$/, `-${width}.avif`))
    // Keep files from earlier runs, so `next dev` starts quickly; delete public/generated to rebuild them
    if (existsSync(out)) continue
    mkdirSync(dirname(out), { recursive: true })
    await sharp(join(publicDir, src))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality })
      .toFile(out)
    console.log(`Generated ${out}`)
  }
}
