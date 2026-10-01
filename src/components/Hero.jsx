import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

// The hero leads on one stone rather than the wide tray photograph. That shot
// was 1536px stretched across the whole viewport, and nothing in it read as a
// cut gem close up. The macro crops are the only frames where the stone itself
// is the subject, so the hero shows one at a size its resolution supports.
const LEAD = 'black-opal'

export default function Hero() {
  const stone = gemstones.find((s) => s.slug === LEAD) || gemstones[0]

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="mx-auto flex min-h-[100svh] max-w-shell flex-col justify-center px-6 py-28 md:px-10 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="hero-item d1 eyebrow">Natural gemstones</p>
            <h1 className="hero-item d1 mt-7 font-brand text-[15vw] font-extrabold leading-[0.9] tracking-[0.2em] text-porcelain sm:text-[11vw] lg:text-[6.5rem]">
              VEDAA
            </h1>
            <p className="hero-item d2 mt-10 max-w-md font-display text-2xl leading-snug text-porcelain/90 md:text-3xl">
              Natural gemstones of uncompromising purity, curated for legacy.
            </p>
            <p className="hero-item d2 mt-7 max-w-sm text-[0.95rem] leading-relaxed text-porcelain/60">
              Every stone sourced at origin, inspected without exception, and
              guaranteed natural for life.
            </p>

            <div className="hero-item d3 mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                to="/collection"
                className="border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                View the collection
              </Link>
              <p className="eyebrow text-porcelain/50">GIA · IGI · SSEF certified</p>
            </div>
          </div>

          <div className="hero-item d2 lg:col-span-6">
            <figure className="relative mx-auto w-full max-w-[30rem]">
              {/* The stone's own colour, carried into the ground behind it */}
              <div
                aria-hidden="true"
                className="aura-pulse absolute -inset-12 blur-3xl"
                style={{
                  background: `radial-gradient(closest-side, ${stone.accent}, transparent 72%)`,
                }}
              />
              <img
                src={stone.macro}
                alt={`A ${stone.name.toLowerCase()} on the Vedaa stand, photographed close`}
                fetchPriority="high"
                width="700"
                height="700"
                className="relative w-full"
              />
              <figcaption className="relative mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-porcelain/12 pt-5">
                <span className="font-display text-lg text-porcelain/85">
                  {stone.name}
                </span>
                <span className="font-sans text-[0.72rem] uppercase tracking-widest2 text-porcelain/45">
                  {stone.origins.join(' · ')}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
