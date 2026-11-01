# Search Console – målinger

Tall fra Google Search Console for strynferiehytte.no, slik at vi kan se om SEO-endringene virker.

- **Første måling:** 1. november 2026, før endringene var fanget opp av Google.
- **Neste måling:** midten av desember 2026.

## Slik henter du tallene

Gjør det likt hver gang, så tallene kan sammenlignes.

1. Gå til **Ytelse → Søkeresultater**.
2. Slå på alle fire boksene øverst: **klikk**, **visninger**, **gjennomsnittlig klikkfrekvens** og **gjennomsnittlig plassering**.
3. Velg tidsrom under **Dato**:
   - Velg **Sammenlign → Egendefinert**.
   - Sammenlign **15.11.–14.12.2026** med **01.10.–30.10.2026**. Da står 30 dager før og 30 dager etter endringene side om side.
   - Endringene ble lagt ut 1. november. De to første ukene etterpå er hoppet over, fordi Google trenger tid til å oppdatere.
4. På fanen **Søk**: kopier tabellen, eller klikk **Eksporter → CSV** og legg filen i `docs/`.
5. På fanen **Sider**: sjekk at `/no` er med.
6. Under **Indeksering → Sider**: noter hvor mange sider som er indeksert. Målet er 2: `/` og `/no`.

Slik leser du plasseringen: 1–10 er side 1 i Google, 11–20 er side 2, 21–30 er side 3.

## Måling 1: 1. november 2026 (før)

Tidsrom: **3 måneder**, 31.07.–30.10.2026. Søketype: **Nett**.

| Klikk | Visninger | Klikkfrekvens | Plassering |
|---:|---:|---:|---:|
| 9 | 735 | 1,2 % | 16,2 |

- **Indekserte sider:** 1, den engelske. `/no` var ikke indeksert ennå.
- **Feriebolig (strukturerte data):** gyldig, med 3 valgfrie advarsler (bilder, anmeldelser, vurdering)
- **Søkeutseende:** ingen data

Dagstallene ligger i [`search-console-2026-11-01-dager.csv`](search-console-2026-11-01-dager.csv). Summert per måned, med plassering vektet etter visninger, som Search Console regner den:

| Måned | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| juli (bare 31.) | 0 | 13 | 0 % | 15,8 |
| august | 7 | 383 | 1,8 % | 16,1 |
| september | 0 | 207 | 0 % | 16,6 |
| oktober (1.–30.) | 2 | 132 | 1,5 % | 16,2 |

Enheter:

| Enhet | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| Mobil | 9 | 560 | 1,6 % | 15,9 |
| Datamaskin | 0 | 172 | 0 % | 17,4 |
| Nettbrett | 0 | 3 | 0 % | 21,3 |

Land med minst 5 visninger eller et klikk:

| Land | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| Norge | 3 | 496 | 0,6 % | 17,5 |
| Storbritannia | 0 | 64 | 0 % | 22,1 |
| USA | 2 | 23 | 8,7 % | 6,1 |
| Nederland | 2 | 23 | 8,7 % | 8,1 |
| Tyskland | 0 | 19 | 0 % | 6,5 |
| Danmark | 0 | 13 | 0 % | 11,8 |
| Belgia | 1 | 12 | 8,3 % | 5,8 |
| Italia | 0 | 9 | 0 % | 7,7 |
| Frankrike | 0 | 7 | 0 % | 10,4 |
| Sverige | 0 | 6 | 0 % | 9,3 |
| Romania | 0 | 6 | 0 % | 19,2 |
| Canada | 0 | 5 | 0 % | 7,2 |
| Irland | 1 | 1 | 100 % | 5,0 |
| 28 andre land | 0 | 51 | 0 % | |

Sider:

| Side | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| https://strynferiehytte.no/ | 9 | 735 | 1,2 % | 16,2 |

Alle 25 søk, slik Search Console viste dem. Noen få er støy, som søk på andre språk og ødelagte tegn.

| Søk | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| stryn hytteutleie | 1 | 1 | 100 % | 8,0 |
| hytteutleie stryn | 0 | 114 | 0 % | 19,9 |
| ferie stryn | 0 | 60 | 0 % | 27,7 |
| feriehus stryn | 0 | 53 | 0 % | 27,3 |
| skuten | 0 | 47 | 0 % | 6,8 |
| hiking stryn | 0 | 35 | 0 % | 24,4 |
| skuten viewpoint | 0 | 34 | 0 % | 7,4 |
| skuten stryn | 0 | 32 | 0 % | 8,5 |
| hytte stryn leie | 0 | 32 | 0 % | 26,6 |
| leie hytte stryn | 0 | 20 | 0 % | 27,5 |
| stryn hiking | 0 | 19 | 0 % | 26,6 |
| hytte stryn | 0 | 8 | 0 % | 16,1 |
| stryn hytte | 0 | 5 | 0 % | 25,0 |
| hytte i stryn | 0 | 5 | 0 % | 31,0 |
| hytter i stryn | 0 | 2 | 0 % | 26,0 |
| stryn hike | 0 | 2 | 0 % | 28,0 |
| strynevegen | 0 | 2 | 0 % | 30,5 |
| snerting ranch | 0 | 2 | 0 % | 61,0 |
| vieš mi ukázať fotky? | 0 | 1 | 0 % | 2,0 |
| dagsturhytte stryn | 0 | 1 | 0 % | 7,0 |
| stryn hytter | 0 | 1 | 0 % | 7,0 |
| hytter stryn | 0 | 1 | 0 % | 11,0 |
| hytte 酶strig | 0 | 1 | 0 % | 20,0 |
| hytte til leie stryn | 0 | 1 | 0 % | 28,0 |
| hogrenning feriehytter | 0 | 1 | 0 % | 36,0 |

Hva tallene viste:

- **Siden fikk 9 klikk av 735 visninger, en klikkfrekvens på 1,2 %.** Gjennomsnittlig plassering var 16,2, altså side 2.
- **Norge sto for 2 av 3 visninger** (496), men ga bare 3 klikk, med plassering 17,5. Den norske siden fantes ikke ennå, så nordmenn fikk den engelske.
- **6 av 9 klikk kom fra utlandet.** Der lå siden ofte på side 1, med plassering 5–8.
- **Alle 9 klikk kom fra mobil.**
- **Visningene falt fra 383 i august til 132 i oktober,** mens plasseringen holdt seg rundt 16. Fallet skyldes sesongen, ikke siden.
- **Hyttesøkene lå på side 2–3.** Der klikker nesten ingen, så det ble mange visninger og ingen klikk.
- **Det vanligste søket var «hytteutleie stryn»,** men ordet «hytteutleie» sto ikke på siden. Det er rettet i #9.
- **Skuten-søkene lå allerede på side 1,** men ingen klikket. Treffet handler om hytteutleie, mens de som søker er ute etter turen.

## Endringer mellom målingene

Alle disse ble lagt ut 1. november 2026.

| PR | Endring |
|---|---|
| #2 | Ett navn overalt: «Stryn Feriehytte» |
| #3 | Tittel, beskrivelse, overskrifter, nettkart, strukturerte data og delingsbilde |
| #4 | Norsk versjon på `/no` |
| #5 | «Opplevelser i Stryn» med kjøretider, og fakta om hytta |
| #6 | Strukturerte data gjort gyldige (Feriebolig) |
| #8 | Flere felt i strukturerte data; senger og bad i teksten |
| #9 | Norsk tittel «Hytteutleie i Stryn: hytte til leie for ferie», og beskrivelsen begynner med «Feriehus i Stryn» |

Endringer utenfor nettsiden, som lenker fra andre sider, skrives inn her med dato. Det gjør det lettere å se hva som virket.

| Dato | Endring |
|---|---|
| | |

## Måling 2: desember 2026

Fyll inn fra sammenligningen i Search Console. «Før» er 01.10.–30.10.2026, og «etter» er 15.11.–14.12.2026.

**Sammenlign plassering og klikkfrekvens, ikke antall visninger.** Desember er lavsesong, så visningene vil sannsynligvis falle uansett. Har Search Console tall for desember 2025 (den tar vare på 16 måneder), er det også nyttig å sammenligne med samme måned i fjor.

Oktober 2026 totalt, regnet ut fra dagstallene: 2 klikk, 132 visninger, 1,5 % klikkfrekvens, plassering 16,2.

| | Klikk | Visninger | Klikkfrekvens | Plassering |
|---|---:|---:|---:|---:|
| Før (oktober) | 2 | 132 | 1,5 % | 16,2 |
| Etter | | | | |

- **Indekserte sider:**

| Side | Plassering før | Plassering etter | Visninger før | Visninger etter | Klikk før | Klikk etter |
|---|---:|---:|---:|---:|---:|---:|
| https://strynferiehytte.no/ | | | | | | |
| https://strynferiehytte.no/no | – | | – | | – | |

| Søk | Plassering før | Plassering etter | Visninger før | Visninger etter | Klikk før | Klikk etter |
|---|---:|---:|---:|---:|---:|---:|
| hytteutleie stryn | | | | | | |
| ferie stryn | | | | | | |
| feriehus stryn | | | | | | |
| hytte stryn leie | | | | | | |
| leie hytte stryn | | | | | | |
| hytte stryn | | | | | | |
| stryn hytte | | | | | | |
| hytte i stryn | | | | | | |
| hiking stryn | | | | | | |
| stryn hiking | | | | | | |
| skuten | | | | | | |

| Land / enhet | Plassering før | Plassering etter | Klikk før | Klikk etter |
|---|---:|---:|---:|---:|
| Norge | | | | |
| Mobil | | | | |
| Datamaskin | | | | |

## Hvordan fant gjestene hytta?

Spør hver gjest, og legg til en strek.

| Kilde | Antall |
|---|---:|
| Google-søk | |
| Anbefalt av noen | |
| Har vært der før | |
| Annet | |
