import Pedestal from '../components/Pedestal'

export default function CollectionPage() {
  return (
    <>
      <section className="bg-ink pt-28 md:pt-36">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="reveal">
            <p className="eyebrow">The collection</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-6xl">
              Chosen one at a time,
              <br />
              at the source.
            </h1>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
