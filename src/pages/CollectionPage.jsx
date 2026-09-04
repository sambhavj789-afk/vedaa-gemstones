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
            {/* The rule gives the standfirst something to hang from. Bare, it
                read as text stranded in the middle of the page. */}
            <div className="border-t border-porcelain/15 pt-6 lg:col-span-5">
              <p className="text-[0.95rem] leading-relaxed text-porcelain/70">
                What follows is a glimpse. Origin decides more about a gemstone
                than any other single factor, so we list it first, before
                colour, before carat, before price.
              </p>
              <p className="eyebrow mt-6 text-porcelain/40">
                GIA · IGI · SSEF certified
              </p>
            </div>
          </div>
        </div>
      </section>
      <Pedestal />
    </>
  )
}
