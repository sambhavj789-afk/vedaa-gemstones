import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

// Every stone already carries an accent colour in the data, used one at a time
// behind a photograph. Shown together they are the catalogue at a glance, and
// that is something no other part of the site does: the whole range in one
// look, with every band a way in.
//
// Raw accents are far too dark on the ink ground (ruby sits at 2.4:1), so each
// is mixed toward ivory the way StoneFinder already does, then faded out at the
// foot so the colour rises from the page instead of sitting on it as a block.
function tint(hex, amount = 0.3) {
  const n = parseInt(hex.slice(1), 16)
  const mix = (c, t) => Math.round(c + (t - c) * amount)
  return `rgb(${mix((n >> 16) & 255, 243)}, ${mix((n >> 8) & 255, 238)}, ${mix(n & 255, 232)})`
}

export default function Spectrum() {
  return (
    <section className="overflow-hidden bg-basalt text-porcelain">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="rule" />

        <div className="reveal pt-14 md:pt-16">
          <p className="eyebrow">The range</p>
          <p className="mt-6 max-w-4xl font-display text-3xl leading-[1.22] md:text-5xl">
            A short catalogue is a decision,
            <br className="hidden md:block" /> not a limitation.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 md:mt-20 md:grid-cols-6 lg:grid-cols-12 lg:gap-x-2">
          {gemstones.map((stone, i) => (
            <Link
              key={stone.slug}
              to={`/collection/${stone.slug}`}
              className="group block"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div
                className="h-[22vh] min-h-[150px] w-full opacity-80 transition-all duration-700 ease-out group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to top, transparent, ${tint(stone.accent)} 85%)`,
                }}
              />
              <p className="mt-4 font-sans text-[0.8rem] uppercase leading-snug tracking-[0.1em] text-porcelain/55 transition-colors duration-500 group-hover:text-porcelain">
                {stone.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
