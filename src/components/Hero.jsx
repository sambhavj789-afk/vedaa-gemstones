import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

// A case of stones rather than one photograph. Six macro crops tiled across
// the viewport, each rendered at roughly half its source width, so the hero is
// the only full-bleed image on the site that is genuinely sharp. The hairline
// gaps read as the dividers in a dealer's tray.
const SHOWCASE = [
  'black-opal',
  'aquamarine',
  'ruby',
  'tanzanite',
  'yellow-sapphire',
  'blue-sapphire',
]

export default function Hero() {
  const tiles = SHOWCASE.map((slug) =>
    gemstones.find((s) => s.slug === slug)
  ).filter(Boolean)

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="hero-zoom absolute inset-0 grid grid-cols-2 grid-rows-3 gap-px sm:grid-cols-3 sm:grid-rows-2"
      >
        {tiles.map((stone) => (
          <img
            key={stone.slug}
            src={stone.macro}
            alt=""
            width="700"
            height="700"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        ))}
      </div>

      {/* Deep enough that the stones glow rather than shout, and the wordmark
          never has to compete with a facet behind it. */}
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/88 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink via-ink/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <p className="hero-item d1 eyebrow">Natural gemstones</p>

        <h1 className="hero-item d1 mt-6 font-brand text-[15vw] font-extrabold leading-[0.9] tracking-[0.2em] text-porcelain sm:text-[11vw] md:text-[8rem]">
          VEDAA
        </h1>

        <div className="hero-item d2 mt-9 max-w-xl">
          <p className="font-display text-2xl leading-snug text-porcelain/95 md:text-3xl">
            Natural gemstones of uncompromising purity, curated for legacy.
          </p>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-porcelain/70">
            Every stone sourced at origin, inspected without exception, and
            guaranteed natural for life.
          </p>
        </div>

        <div className="hero-item d3 mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link
            to="/collection"
            className="border border-brass bg-ink/40 px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt backdrop-blur-sm transition-colors duration-500 hover:bg-brass hover:text-ink"
          >
            View the collection
          </Link>
          <p className="eyebrow text-porcelain/55">GIA · IGI · SSEF certified</p>
        </div>
      </div>
    </section>
  )
}
