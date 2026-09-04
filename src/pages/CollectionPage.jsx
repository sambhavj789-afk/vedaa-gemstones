import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 pb-6 md:px-10 md:pb-8">
          {/* The heading runs the full measure rather than sitting in a column,
              so there is no empty half beside it to account for. It wraps on
              its own at narrow widths; no forced break. */}
          <div className="reveal">
            <p className="eyebrow">The collection</p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-porcelain md:text-6xl lg:text-7xl">
              Chosen one at a time, at the source.
            </h1>

            <div className="rule mt-10 md:mt-12" />

            <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-porcelain/70">
              What follows is a glimpse. Origin decides more about a gemstone
              than any other single factor, so we list it first, before colour,
              before carat, before price.
            </p>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
