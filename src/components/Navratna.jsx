import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

// The nine planets of the Vedic tradition and their stones.
// Stones not in the open catalogue are sourced privately — that's a feature.
const planets = [
  {
    planet: 'Sun',
    sanskrit: 'Surya',
    stoneName: 'Ruby',
    hindi: 'Manik',
    slug: 'ruby',
    line: 'Worn for the Sun — vitality, authority, and the strength to lead.',
  },
  {
    planet: 'Moon',
    sanskrit: 'Chandra',
    stoneName: 'Pearl',
    hindi: 'Moti',
    slug: 'pearl',
    line: 'Worn for the Moon — calm, clarity of mind, and emotional balance.',
  },
  {
    planet: 'Mars',
    sanskrit: 'Mangal',
    stoneName: 'Coral',
    hindi: 'Moonga',
    slug: 'white-coral',
    line: 'Worn for Mars — courage, energy, and protection.',
  },
  {
    planet: 'Mercury',
    sanskrit: 'Budh',
    stoneName: 'Emerald',
    hindi: 'Panna',
    slug: 'emerald',
    line: 'Worn for Mercury — intellect, speech, and sound judgement.',
  },
  {
    planet: 'Jupiter',
    sanskrit: 'Guru',
    stoneName: 'Yellow Sapphire',
    hindi: 'Pukhraj',
    slug: 'yellow-sapphire',
    line: 'Worn for Jupiter — wisdom, prosperity, and good fortune.',
  },
  {
    planet: 'Venus',
    sanskrit: 'Shukra',
    stoneName: 'Opal',
    hindi: 'Opal',
    slug: 'black-opal',
    line: 'Worn for Venus — love, beauty, and refinement.',
  },
  {
    planet: 'Saturn',
    sanskrit: 'Shani',
    stoneName: 'Blue Sapphire',
    hindi: 'Neelam',
    slug: 'blue-sapphire',
    line: 'Worn for Saturn — discipline, focus, and steady progress.',
  },
  {
    planet: 'Rahu',
    sanskrit: 'Rahu',
    stoneName: 'Hessonite',
    hindi: 'Gomed',
    slug: null,
    accent: '#B4622D',
    line: 'Worn for Rahu — sourced privately by Vedaa on request.',
  },
  {
    planet: 'Ketu',
    sanskrit: 'Ketu',
    stoneName: "Cat's Eye",
    hindi: 'Lehsunia',
    slug: null,
    accent: '#9C9A5E',
    line: 'Worn for Ketu — sourced privately by Vedaa on request.',
  },
]

export default function Navratna() {
  const [active, setActive] = useState(0)
  const entry = planets[active]
  const stone = entry.slug
    ? gemstones.find((s) => s.slug === entry.slug)
    : null
  const accent = stone ? stone.accent : entry.accent

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Navratna · The nine gems</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Which stone is yours?
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-porcelain/55">
              In the Vedic tradition, each of the nine planets has its gemstone.
              Choose a planet.
            </p>
          </div>
          <Link
            to="/collection"
            className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
          >
            Walk the collection
          </Link>
        </div>

        <div
          className="reveal mt-14 flex flex-wrap gap-x-8 gap-y-4 border-b border-porcelain/12 pb-6"
          role="tablist"
          aria-label="Planets of the Navratna"
        >
          {planets.map((p, i) => (
            <button
              key={p.planet}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`font-sans text-[0.7rem] uppercase tracking-widest2 transition-colors duration-300 ${
                i === active
                  ? 'text-gilt'
                  : 'text-porcelain/45 hover:text-porcelain/80'
              }`}
            >
              {p.planet}
            </button>
          ))}
        </div>

        <div key={entry.planet} className="fade-up mt-12 md:mt-16">
          <p className="eyebrow" style={{ color: accent }}>
            {entry.planet} · {entry.sanskrit}
          </p>
          <h3 className="mt-4 font-display text-5xl leading-none md:text-7xl">
            <span style={{ color: accent }}>{entry.stoneName}</span>
            <span className="ml-4 font-display text-2xl italic text-porcelain/45 md:text-3xl">
              {entry.hindi}
            </span>
          </h3>
          <p className="mt-6 max-w-md font-sans text-[0.95rem] leading-relaxed text-porcelain/65">
            {entry.line}
          </p>

          <div className="mt-9">
            {stone ? (
              <Link
                to={`/collection/${stone.slug}`}
                className="inline-block border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                View {stone.name}
              </Link>
            ) : (
              <Link
                to={`/contact?stone=${encodeURIComponent(entry.stoneName)}`}
                className="inline-block border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                Enquire — private sourcing
              </Link>
            )}
          </div>
        </div>

        <p className="mt-16 max-w-lg font-sans text-[0.7rem] leading-relaxed text-porcelain/35">
          Shared as tradition. For a recommendation suited to you, Vedaa offers
          a complimentary consultation with every purchase.
        </p>
      </div>
    </section>
  )
}
