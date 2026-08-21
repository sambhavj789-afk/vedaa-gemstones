import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src="/images/hero.webp"
        alt="A tray of loose natural gemstones — emerald, ruby, sapphire, opal and pearl"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
        <h1 className="rise-1 font-brand font-extrabold text-[14vw] leading-none tracking-[0.22em] text-porcelain md:text-[7.75rem]">
          VEDAA
        </h1>

        <div className="rise-2 mt-8 max-w-xl md:mt-10">
          <p className="font-display text-2xl leading-snug text-porcelain/90 md:text-3xl">
            Natural gemstones of uncompromising purity, curated for legacy.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-porcelain/65">
            Loose stones sourced at origin, inspected without exception, and
            guaranteed natural for life.
          </p>
        </div>

        <div className="rise-3 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-16">
          <Link
            to="/collection"
            className="border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
          >
            View the collection
          </Link>
          <p className="eyebrow text-porcelain/50">
            GIA · IGI · SSEF certified
          </p>
        </div>
      </div>
    </section>
  )
}
