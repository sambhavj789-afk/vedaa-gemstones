import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 pb-6 md:px-10 md:pb-8">
          {/* The heading alone left the right half of the shell empty, so the
              standfirst sits beside it and settles onto the same baseline. */}
          <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">The collection</p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-6xl">
                Chosen one at a time,
                <br />
                at the source.
              </h1>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-porcelain/60 lg:col-span-5">
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
