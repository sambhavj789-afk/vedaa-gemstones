import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

// Mix a hex colour toward ivory so it stays readable on the dark ground.
function brighten(hex, amount = 0.55) {
  const n = parseInt(hex.slice(1), 16)
  const mix = (c, t) => Math.round(c + (t - c) * amount)
  const r = mix((n >> 16) & 255, 243)
  const g = mix((n >> 8) & 255, 238)
  const b = mix(n & 255, 232)
  return `rgb(${r}, ${g}, ${b})`
}

const planets = [
  { label: 'Sun', slug: 'ruby', line: 'Worn for the Sun — vitality, authority, and the strength to lead.' },
  { label: 'Moon', slug: 'pearl', line: 'Worn for the Moon — calm, clarity of mind, and emotional balance.' },
  { label: 'Mars', slug: 'white-coral', line: 'Worn for Mars — courage, energy, and protection.' },
  { label: 'Mercury', slug: 'emerald', line: 'Worn for Mercury — intellect, speech, and sound judgement.' },
  { label: 'Jupiter', slug: 'yellow-sapphire', line: 'Worn for Jupiter — wisdom, prosperity, and good fortune.' },
  { label: 'Venus', slug: 'black-opal', line: 'Worn for Venus — love, beauty, and refinement.' },
  { label: 'Saturn', slug: 'blue-sapphire', line: 'Worn for Saturn — discipline, focus, and steady progress.' },
]

export default function StoneFinder() {
  const [index, setIndex] = useState(0)
  const entry = planets[index]
  const stone = gemstones.find((s) => s.slug === entry.slug)
  // Raw accents are far too dark to read on the ink ground (ruby lands at
  // 2.4:1). Mixed toward ivory they clear 7:1 and keep the stone's hue.
  const tint = brighten(stone.accent)

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Find your stone</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Which stone is yours?
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-porcelain/55">
              The seven classical planets of the old sky — the seven lights
              the ancients could see — each carry a stone. Choose yours.
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
          aria-label="Planets"
        >
          {planets.map((p, i) => (
            <button
              key={p.label}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`-my-2 py-2 font-sans text-[0.7rem] uppercase tracking-widest2 transition-colors duration-300 ${
                i === index
                  ? 'text-gilt'
                  : 'text-porcelain/45 hover:text-porcelain/80'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div key={entry.label} className="relative mt-12 md:mt-14">
          <div
            aria-hidden="true"
            className="glow-in absolute -left-16 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: stone.accent }}
          />
          <p className="fade-up eyebrow relative" style={{ color: tint }}>
            {entry.label}
          </p>
          <h3
            className="name-in relative mt-4 font-display text-5xl leading-none md:text-7xl"
            style={{ color: tint }}
          >
            {stone.name}
          </h3>
          <p className="fade-up relative mt-6 max-w-md font-sans text-[0.95rem] leading-relaxed text-porcelain/65" style={{ animationDelay: '0.15s' }}>
            {entry.line}
          </p>

          <div className="fade-up relative mt-9" style={{ animationDelay: '0.25s' }}>
            <Link
              to={`/collection/${stone.slug}`}
              className="inline-block border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
            >
              View {stone.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
