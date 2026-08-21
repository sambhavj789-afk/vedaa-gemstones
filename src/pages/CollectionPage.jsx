import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-32 md:pt-40">
        <div className="mx-auto max-w-shell px-6 pb-16 md:px-10">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">The collection</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-6xl">
              Chosen one at a time,
              <br />
              at the source.
            </h1>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-porcelain/60">
              What follows is a glimpse. Origin decides more about a gemstone
              than any other single factor, so we list it first — before colour,
              before carat, before price.
            </p>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
