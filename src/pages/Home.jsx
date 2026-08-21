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

      <section className="bg-linen text-ink">
        <div className="mx-auto max-w-shell px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="reveal"
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <h2 className="font-display text-2xl">{pillar.title}</h2>
                <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-ink/70">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="link-underline mt-14 inline-block font-sans text-[0.66rem] uppercase tracking-widest2 text-ink/70"
          >
            More about Vedaa
          </Link>
        </div>
      </section>

      <StoneFinder />

      <Alis />
    </>
  )
}
