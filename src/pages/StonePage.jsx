import { Link, Navigate, useParams } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

export default function StonePage() {
  const { slug } = useParams()
  const index = gemstones.findIndex((s) => s.slug === slug)

  if (index === -1) return <Navigate to="/collection" replace />

  const stone = gemstones[index]
  const prev = gemstones[(index - 1 + gemstones.length) % gemstones.length]
  const next = gemstones[(index + 1) % gemstones.length]

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 md:pt-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* The macro crop, not the full stand shot: it is the only frame
              where the stone itself is the subject, and at this size it is
              shown within the resolution it actually has. */}
          <figure className="relative mx-auto w-full max-w-[44rem] lg:col-span-7">
            <div
              aria-hidden="true"
              className="aura-pulse absolute -inset-12 blur-3xl"
              style={{
                background: `radial-gradient(closest-side, ${stone.accent}, transparent 72%)`,
              }}
            />
            <img
              src={stone.macro}
              alt={`${stone.name} on the Vedaa stand, photographed close`}
              width="700"
              height="700"
              fetchPriority="high"
              className="relative w-full"
            />
          </figure>

          <div className="reveal relative py-16 lg:col-span-5 lg:py-24">
            <p className="eyebrow flex flex-wrap">
              {stone.origins.map((origin, i) => (
                <span key={origin}>
                  {i > 0 && <span className="mx-2 text-brass/50">·</span>}
                  {origin}
                </span>
              ))}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-none text-porcelain md:text-7xl">
              {stone.name}
            </h1>
            <p className="mt-4 font-sans text-xs uppercase tracking-widest2 text-porcelain/40">
              {stone.species}
            </p>

            <div
              className="mt-8 h-px w-16"
              style={{ backgroundColor: stone.accent }}
            />

            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-porcelain/70">
              {stone.description}
            </p>
            <p className="mt-6 font-display text-lg leading-snug text-gilt/90">
              {stone.note}
            </p>

            <div className="mt-10">
              <Link
                to={`/contact?stone=${encodeURIComponent(stone.name)}`}
                className="inline-block border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                Enquire about this stone
              </Link>
            </div>

            <p className="mt-12 max-w-md border-t border-porcelain/10 pt-6 font-sans text-[0.72rem] leading-relaxed tracking-wide text-porcelain/45">
              Certified by GIA, IGI or SSEF. Lifetime authenticity guarantee.
              Complimentary design consultation with every purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-shell px-6 pb-24 md:px-10">
          <div className="rule" />
          <div className="flex items-center justify-between gap-4 pt-8">
            <Link
              to={`/collection/${prev.slug}`}
              className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/60 hover:text-porcelain"
            >
              ← {prev.name}
            </Link>
            <Link
              to="/collection"
              className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
            >
              All stones
            </Link>
            <Link
              to={`/collection/${next.slug}`}
              className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/60 hover:text-porcelain"
            >
              {next.name} →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
