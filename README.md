# Stryn Feriehytte

The website for [strynferiehytte.no](https://strynferiehytte.no), a holiday cabin for rent in Stryn, Norway.

## Search Console

How the site does in Google Search. The first measurement is from 1 November 2026, before Google had picked up the SEO changes (PRs #2–#9). The next is due in mid-December 2026.

All the numbers, and how to collect them the same way each time, are in [docs/search-console.md](docs/search-console.md). That file is in Norwegian.

| Period | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| 31 Jul – 30 Oct 2026 (3 months) | 9 | 735 | 1.2 % | 16.2 |
| Before: 1–30 Oct 2026 | 2 | 132 | 1.5 % | 16.2 |
| After: 15 Nov – 14 Dec 2026 | | | | |

Top searches. Position 1–10 is page 1 of Google, and 11–20 is page 2.

| Search | Impressions (3 months) | Position before | Position after |
|---|---:|---:|---:|
| hytteutleie stryn | 114 | 19.9 | |
| ferie stryn | 60 | 27.7 | |
| feriehus stryn | 53 | 27.3 | |
| skuten | 47 | 6.8 | |
| hiking stryn | 35 | 24.4 | |
| hytte stryn leie | 32 | 26.6 | |
| leie hytte stryn | 20 | 27.5 | |

- **The cabin-rental searches were on pages 2–3**, so they got views but no clicks.
- **Skuten was already on page 1**, but the people searching want the hike, not a cabin.
- **6 of the 9 clicks came from outside Norway, and all 9 from phones.** The Norwegian page at `/no` wasn't indexed yet.
- **Impressions fell from 383 in August to 132 in October** because of the season. Compare position and CTR between measurements, not impressions.

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
