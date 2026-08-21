import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gemstones } from '../data/gemstones'
import { whatsappEnquiry } from '../data/contact'

export default function StonePage() {
  const { slug } = useParams()
  const index = gemstones.findIndex((s) => s.slug === slug)

  const [loupe, setLoupe] = useState(null)
  const [fine, setFine] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    setFine(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  if (index === -1) return <Navigate to="/collection" replace />

  const stone = gemstones[index]
  const prev = gemstones[(index - 1 + gemstones.length) % gemstones.length]
  const next = gemstones[(index + 1) % gemstones.length]

  const moveLoupe = (e) => {
    if (!fine || !imgRef.current) return
    const rect = imgRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    if (x < 0 || x > 1 || y < 0 || y > 1) return setLoupe(null)
    setLoupe({ x, y, px: e.clientX - rect.left, py: e.clientY - rect.top })
  }

  return (
    <>
      <section className="relative bg-ink pt-24 md:pt-28">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            {/* The stone's own colour, as an aura behind the photograph */}
            <div
              aria-hidden="true"
              className="aura-pulse absolute inset-0 blur-3xl"
              style={{
                background: `radial-gradient(closest-side, ${stone.accent}, transparent 70%)`,
              }}
            />
            <div
              ref={imgRef}
              onMouseMove={moveLoupe}
              onMouseLeave={() => setLoupe(null)}
              className={`dissolve relative h-[56vh] lg:h-[86vh] ${
                fine ? 'cursor-crosshair' : ''
              }`}
            >
              <img
                src={stone.image}
                alt={`${stone.name} on the Vedaa stand`}
                className="h-full w-full object-cover"
              />
              {/* The loupe — examine the stone the way a dealer would */}
              {fine && loupe && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute z-20 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-porcelain/50 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
                  style={{
                    left: loupe.px,
                    top: loupe.py,
                    backgroundImage: `url(${stone.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '260% auto',
                    backgroundPosition: `${loupe.x * 100}% ${loupe.y * 100}%`,
                  }}
                />
              )}
            </div>
            {fine && (
              <p className="mt-4 font-sans text-[0.62rem] uppercase tracking-widest2 text-porcelain/35">
                Move over the photograph to examine the stone
              </p>
            )}
          </div>

          <div className="reveal relative py-14 lg:py-24">
            <p className="eyebrow">
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
            <p className="mt-6 font-display text-lg italic text-gilt/80">
              {stone.note}
            </p>

            <div className="mt-10">
              <a
                href={whatsappEnquiry(stone.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brass px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                Enquire about this stone
              </a>
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
          <div className="flex items-center justify-between pt-8">
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
