import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

const featured = [
  'emerald',
  'ruby',
  'blue-sapphire',
  'aquamarine',
  'black-opal',
  'tanzanite',
]

function StoneCard({ stone }) {
  return (
    <Link
      to={`/collection/${stone.slug}`}
      className="group relative block w-[78vw] shrink-0 snap-center sm:w-[24rem] lg:w-[26rem]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
        style={{
          background: `radial-gradient(closest-side, ${stone.accent}, transparent 70%)`,
        }}
      />
      <div className="dissolve relative h-[56vh] lg:h-[60vh]">
        <img
          src={stone.image}
          alt={`${stone.name} on the Vedaa stand`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mt-5 flex items-baseline justify-between gap-4">
        <span className="font-display text-3xl text-porcelain transition-colors duration-500 group-hover:text-gilt">
          {stone.name}
        </span>
        <span
          className="h-px flex-1 opacity-60"
          style={{ backgroundColor: stone.accent }}
        />
        <span className="font-sans text-[0.62rem] uppercase tracking-widest2 text-porcelain/45">
          {stone.origins[0]}
        </span>
      </div>
    </Link>
  )
}

/**
 * The gallery walk. On desktop the section pins to the screen and scrolling
 * carries you sideways past the stones — the same scroll-driven language as
 * the pedestal on the collection page. On touch, it's a natural swipe strip.
 */
export default function FeaturedStones() {
  const stones = featured
    .map((slug) => gemstones.find((s) => s.slug === slug))
    .filter(Boolean)

  const [pinned, setPinned] = useState(false)
  const wrapRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)
  const distRef = useRef(0)

  useEffect(() => {
    const decide = () =>
      setPinned(
        window.matchMedia('(min-width: 1024px)').matches &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
    decide()
    window.addEventListener('resize', decide)
    return () => window.removeEventListener('resize', decide)
  }, [])

  useEffect(() => {
    if (!pinned) return

    const measure = () => {
      if (!trackRef.current || !viewportRef.current || !wrapRef.current) return
      distRef.current = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth
      )
      // The vertical scroll budget equals the horizontal distance to cover.
      wrapRef.current.style.height = `calc(100vh + ${distRef.current}px)`
    }

    const onScroll = () => {
      if (!wrapRef.current || !trackRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const total = wrapRef.current.offsetHeight - window.innerHeight
      if (total <= 0) return
      const progress = Math.min(1, Math.max(0, -rect.top / total))
      trackRef.current.style.transform = `translate3d(${
        -progress * distRef.current
      }px, 0, 0)`
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }

    measure()
    onScroll()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      if (wrapRef.current) wrapRef.current.style.height = ''
    }
  }, [pinned])

  const heading = (
    <div className="reveal flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="eyebrow">The collection</p>
        <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
          Thirteen stones,
          <br />
          each taken at its source.
        </h2>
      </div>
      <Link
        to="/collection"
        className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
      >
        View all thirteen
      </Link>
    </div>
  )

  if (!pinned) {
    // Touch and reduced-motion: a native swipe strip.
    return (
      <section className="overflow-hidden bg-ink">
        <div className="mx-auto max-w-shell px-6 pt-24 md:px-10 md:pt-32">
          {heading}
        </div>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-24 md:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {stones.map((stone) => (
            <StoneCard key={stone.slug} stone={stone} />
          ))}
          <Link
            to="/collection"
            className="flex w-[60vw] shrink-0 snap-center items-center justify-center sm:w-[20rem]"
          >
            <span className="link-underline font-display text-2xl text-gilt">
              All thirteen →
            </span>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section ref={wrapRef} className="relative bg-ink">
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        <div className="mx-auto w-full max-w-shell px-10">{heading}</div>

        <div
          ref={trackRef}
          style={{ willChange: 'transform' }}
          className="mt-12 flex items-start gap-10 pl-10 pr-[38vw]"
        >
          {stones.map((stone) => (
            <StoneCard key={stone.slug} stone={stone} />
          ))}
          <Link
            to="/collection"
            className="flex h-[60vh] w-[22rem] shrink-0 items-center justify-center"
          >
            <span className="link-underline font-display text-3xl text-gilt">
              All thirteen →
            </span>
          </Link>
        </div>

        <div className="mx-auto mt-10 w-full max-w-shell px-10">
          <div className="h-px w-full bg-porcelain/12">
            <div
              ref={barRef}
              style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
              className="h-px bg-brass"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
