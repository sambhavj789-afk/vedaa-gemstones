import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="reveal grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow">The collection</p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-6xl">
                Chosen one at a time,
                <br />
                at the source.
              </h1>
            </div>

            {/* A letterbox crop, not a full frame: tall enough to hold the
                right half, short enough that the masthead stays a header.
                The dissolve vignette carries its edges into the ground. */}
            <div className="dissolve relative h-48 w-full md:h-56 lg:col-span-6">
              <img
                src="/images/macro/emerald.webp"
                alt="A macro detail of an emerald, showing its internal garden"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
