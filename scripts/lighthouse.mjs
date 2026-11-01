// Runs Lighthouse (mobile) several times against a URL with the same settings as PageSpeed Insights,
// and prints each run's LCP breakdown and the medians.
// Usage: node scripts/lighthouse.mjs [url] [runs]
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const url = process.argv[2] ?? 'https://strynferiehytte.no'
const runs = Number(process.argv[3] ?? 5)
const outDir = mkdtempSync(join(tmpdir(), 'lighthouse-'))

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}

const rows = []
for (let run = 1; run <= runs; run++) {
  const output = join(outDir, `run-${run}.json`)
  execFileSync(
    'npx',
    [
      '-y',
      'lighthouse@13.6.0',
      url,
      '--only-categories=performance',
      '--output=json',
      `--output-path=${output}`,
      // PageSpeed Insights uses the mobile defaults (Moto G Power, slow 4G), but slows the CPU by
      // 1.2x instead of 4x, because its machines are already about as slow as the phone it emulates.
      // This Mac benchmarks about the same as PageSpeed's machines, so the same 1.2x applies here.
      '--throttling.cpuSlowdownMultiplier=1.2',
      '--chrome-flags=--headless=new',
      '--quiet'
    ],
    { stdio: 'inherit' }
  )
  const { audits, categories } = JSON.parse(readFileSync(output, 'utf8'))
  const subparts = Object.fromEntries(
    audits['lcp-breakdown-insight'].details.items[0].items.map(({ subpart, duration }) => [subpart, duration])
  )
  rows.push({
    run,
    score: Math.round(categories.performance.score * 100),
    'LCP (ms)': audits['largest-contentful-paint'].numericValue,
    'FCP (ms)': audits['first-contentful-paint'].numericValue,
    'TBT (ms)': audits['total-blocking-time'].numericValue,
    CLS: audits['cumulative-layout-shift'].numericValue,
    'TTFB (ms)': subparts.timeToFirstByte,
    'load delay (ms)': subparts.resourceLoadDelay,
    'download (ms)': subparts.resourceLoadDuration,
    'render delay (ms)': subparts.elementRenderDelay
  })
}

const round = (value) => (Number.isInteger(value) ? value : Number(value.toFixed(value < 1 ? 3 : 0)))
const table = rows.map((row) => Object.fromEntries(Object.entries(row).map(([key, value]) => [key, round(value)])))
table.push(
  Object.fromEntries(
    Object.keys(rows[0]).map((key) => [key, key === 'run' ? 'median' : round(median(rows.map((row) => row[key])))])
  )
)
console.table(table)
console.log(`Reports: ${outDir}`)
