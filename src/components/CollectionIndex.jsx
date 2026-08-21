import { Link } from 'react-router-dom'
import { gemstones } from '../data/gemstones'

const featured = ['emerald', 'ruby', 'blue-sapphire', 'black-opal', 'tanzanite']

/** Five signature stones, names only. The full thirteen live on /collection. */
export default function CollectionIndex() {
  const stones = featured
    .map((slug) => gemstones.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
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
            Walk the collection
          </Link>
        </div>

        <ul className="reveal mt-16 border-t border-porcelain/12">
          {stones.map((stone) => (
            <li key={stone.slug} className="border-b border-porcelain/12">
              <Link
                to={`/collection/${stone.slug}`}
                style={{ '--ac': stone.accent }}
                className="group flex items-baseline justify-between gap-6 py-5 md:py-6"
              >
                <span className="font-display text-3xl leading-tight text-porcelain/85 transition-colors duration-500 group-hover:text-[color:var(--ac)] md:text-5xl">
                  {stone.name}
                </span>
                <span className="hidden shrink-0 font-sans text-[0.62rem] uppercase tracking-widest2 text-porcelain/35 lg:block">
                  {stone.origins.join(' · ')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
