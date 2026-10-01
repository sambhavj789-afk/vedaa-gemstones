import { Link } from 'react-router-dom'

// A background photograph again, but not the tray of stones: that one fell
// apart at full size, and the stones in it were the part that gave it away.
// The bench shot is the work rather than the product, holds up behind type,
// and its shallow focus hides what a 1536px file cannot otherwise carry.
export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src="/images/atelier.webp"
        alt="A gemstone held in tweezers and read under a loupe at the bench"
        width="1536"
        height="1024"
        fetchPriority="high"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />

      {/* Two layers, not one: a flat wash to sit the whole frame back, and a
          deep foot so the type below has its own ground to stand on. */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-ink via-ink/90 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/80 to-transparent" />

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
            className="border border-brass bg-ink/30 px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt backdrop-blur-sm transition-colors duration-500 hover:bg-brass hover:text-ink"
          >
            View the collection
          </Link>
          <p className="eyebrow text-porcelain/55">GIA · IGI · SSEF certified</p>
        </div>
      </div>
    </section>
  )
}
