import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

function Origins({ list, className = '' }) {
  return (
    <p className={`eyebrow ${className}`}>
      {list.map((origin, i) => (
        <span key={origin}>
          {i > 0 && <span className="mx-2 text-brass/50">·</span>}
          {origin}
        </span>
      ))}
    </p>
  )
}

export default function Pedestal({ stones = gemstones }) {
  const [active, setActive] = useState(0)
  const blockRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            if (!Number.isNaN(index)) setActive(index)
          }
        })
      },
      // Fires when a block crosses the middle of the viewport.
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    blockRefs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-ink">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* The pedestal. Every stone is photographed on the same stand, so
            crossfading them reads as one stone being replaced by the next. */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div
              aria-hidden="true"
              className="aura-pulse absolute inset-y-16 inset-x-0 blur-3xl transition-colors duration-1000"
              style={{
                background: `radial-gradient(closest-side, ${stones[active].accent}, transparent 70%)`,
              }}
            />
            <div className="dissolve relative h-[80vh] w-full">
              {stones.map((stone, i) => (
                <img
                  key={stone.slug}
                  src={stone.image}
                  alt={`${stone.name} on the Vedaa stand`}
                  loading="lazy"
                  aria-hidden={i !== active}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          {stones.map((stone, i) => (
            <article
              key={stone.slug}
              data-index={i}
              ref={(node) => (blockRefs.current[i] = node)}
              className="flex flex-col justify-center border-b border-porcelain/10 py-14 last:border-b-0 lg:min-h-[60vh] lg:border-b-0 lg:py-12"
            >
              {/* Mobile keeps the same photograph inline. */}
              <div className="dissolve relative mb-8 h-[52vh] w-full lg:hidden">
                <img
                  src={stone.image}
                  alt={`${stone.name} on the Vedaa stand`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="reveal">
                <Origins list={stone.origins} />
                <h3 className="mt-5 font-display text-5xl leading-none text-porcelain md:text-6xl">
                  <Link to={`/collection/${stone.slug}`} className="transition-colors hover:text-gilt">
                    {stone.name}
                  </Link>
                </h3>
                <p className="mt-4 font-sans text-xs uppercase tracking-widest2 text-porcelain/40">
                  {stone.species}
                </p>

                <div className="mt-8 h-px w-16 bg-brass" />

                <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-porcelain/70">
                  {stone.description}
                </p>
                <p className="mt-6 font-display text-lg italic text-gilt/80">
                  {stone.note}
                </p>

                {/* One action only. An Enquire link here let people write in
                    without ever seeing the stone's own page, so the enquiry
                    arrived from someone who had read three lines about it. */}
                <div className="mt-8">
                  <Link
                    to={`/collection/${stone.slug}`}
                    className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
                  >
                    View {stone.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
