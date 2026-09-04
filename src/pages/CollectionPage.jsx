import Pedestal from '../components/Pedestal'
import { gemstones } from '../data/gemstones'

// Derived rather than typed out, so adding a stone from a new origin puts it
// on the list on its own. Alphabetical, so it reads as an index.
const origins = [...new Set(gemstones.flatMap((stone) => stone.origins))].sort()

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 pb-6 md:px-10 md:pb-8">
          {/* Both columns hang from an eyebrow on the same line, so the right
              side reads as a second block rather than text left over. */}
          <div className="reveal grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow">The collection</p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-6xl">
                Chosen one at a time,
                <br />
                at the source.
              </h1>
              <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-porcelain/70">
                What follows is a glimpse. Origin decides more about a gemstone
                than any other single factor, so we list it first, before
                colour, before carat, before price.
              </p>
            </div>

            <div className="lg:col-span-6">
              <p className="eyebrow">Sourced from</p>
              <ul className="mt-7 grid grid-cols-2 gap-x-8 gap-y-2.5">
                {origins.map((origin) => (
                  <li
                    key={origin}
                    className="font-display text-lg text-porcelain/75"
                  >
                    {origin}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
