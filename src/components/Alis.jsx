import { Link } from 'react-router-dom'

// What membership actually gets you. Kept to three lines, each one something
// the rest of the site already stands behind.
const privileges = [
  'First sight of stones before they are catalogued, and on occasion stones that never are.',
  'A direct line to the sourcing desk, including stones sought to order at origin.',
  'Private viewings, and consultation through to the final setting.',
]

export default function Alis() {
  return (
    <section className="bg-basalt">
      <div className="mx-auto max-w-shell px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Alis by Vedaa</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              The stones that
              <br />
              never reach a catalogue.
            </h2>
            <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-porcelain/65">
              Beyond what is published, we hold a far more extensive collection of
              rare and exceptional stones, much of it reserved for our private
              circle, Alis by Vedaa. Every stone is certified by IGI, GIA or SSEF.
            </p>

            <div className="mt-10 border-t border-porcelain/12 pt-8">
              <p className="eyebrow text-porcelain/55">Membership</p>
              <ul className="mt-6 max-w-md space-y-4">
                {privileges.map((line, i) => (
                  <li key={line} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-px w-5 shrink-0 bg-brass"
                    />
                    <span className="text-[1.05rem] leading-relaxed text-porcelain/70">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/contact?about=membership"
                  className="border border-brass px-8 py-3 font-sans text-[0.85rem] uppercase tracking-widest2 text-gilt transition-colors duration-500 hover:bg-brass hover:text-ink"
                >
                  Become a member
                </Link>
                <Link
                  to="/contact"
                  className="link-underline font-sans text-[0.85rem] uppercase tracking-widest2 text-porcelain/55"
                >
                  Request an introduction
                </Link>
              </div>
              <p className="mt-6 max-w-md font-sans text-[0.95rem] leading-relaxed tracking-wide text-porcelain/55">
                Membership is by application and kept deliberately small. There is
                no fee; we ask only that we are a genuine fit for what you collect.
              </p>
            </div>
          </div>

          <div className="reveal">
            <img
              src="/images/packaging.webp"
              alt="A certified Vedaa stone in its presentation box with certificate"
              loading="lazy"
              width="1024"
              height="1024"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
