import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Alis from '../components/Alis'
import StoneFinder from '../components/StoneFinder'

const pillars = [
  {
    title: 'Purity',
    body: 'Only 100% natural gemstones, individually inspected and guaranteed for authenticity for life.',
  },
  {
    title: 'Rarity',
    body: 'A global sourcing network that reaches investment-grade stones chosen for beauty and enduring value.',
  },
  {
    title: 'Service',
    body: 'Every purchase includes a consultation with our in-house designers and end-to-end assistance to final setting.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-basalt text-porcelain">
        <div className="mx-auto max-w-shell px-6 py-28 md:px-10 md:py-36">
          {/* The three used to begin with no label, which read as a feature
              grid rather than as the standard the house keeps. */}
          <div className="reveal max-w-2xl">
            <p className="eyebrow">The standard</p>
            <h3 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              What every stone
              <br />
              is held to.
            </h3>
          </div>

          <div className="rule mt-14 md:mt-20" />

          <div className="grid gap-12 pt-14 md:grid-cols-3 md:gap-10 md:pt-20">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <h2 className="font-display text-2xl">{pillar.title}</h2>
                <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-porcelain/65">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <div className="rule mt-16 md:mt-24" />

          <div className="reveal flex flex-wrap items-baseline justify-between gap-x-10 gap-y-5 pt-9">
            <p className="font-display text-lg text-porcelain/55">
              Serving clients across 18 countries.
            </p>
            <Link
              to="/about"
              className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
            >
              More about Vedaa
            </Link>
          </div>
        </div>
      </section>

      <StoneFinder />

      <Alis />
    </>
  )
}
