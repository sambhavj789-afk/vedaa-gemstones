import { Link } from 'react-router-dom'
import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="reveal">
            <p className="eyebrow">The collection</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Chosen one at a time,
              <br />
              at the source.
            </h1>
            <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-porcelain/70">
              What follows is a glimpse. Origin decides more about a gemstone
              than any other single factor, so we list it first, before colour,
              before carat, before price.
            </p>
          </div>
        </div>
      </section>
      <Pedestal />

      {/* The catalogue is what we keep photographed, not the limit of what
          we can reach. Said plainly at the end of the walk, where someone
          who did not find their stone is standing. */}
      <section className="bg-ink">
        <div className="mx-auto max-w-shell px-6 pb-28 md:px-10 md:pb-36">
          <div className="rule" />
          <div className="reveal grid gap-10 pt-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Beyond the twelve</p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-porcelain md:text-4xl">
                Looking for a stone
                <br />
                we have not shown?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-lg text-[1.05rem] leading-relaxed text-porcelain/70">
                These twelve are the stones we keep photographed. The sourcing
                network behind them reaches a good deal further, and most
                requests are answered from stones already in hand or at origin.
                Tell us the stone, the carat range and the certification you
                need, and we will tell you what is available.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-block border border-brass px-8 py-3 font-sans text-[0.85rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                Ask for another stone
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
