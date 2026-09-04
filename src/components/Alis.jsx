import { Link } from 'react-router-dom'

export default function Alis() {
  return (
    <section className="bg-basalt">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Alis by Vedaa</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              The stones that
              <br />
              never reach a catalogue.
            </h2>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-porcelain/65">
              Beyond what is published, we hold a far more extensive collection of
              rare and exceptional stones, much of it reserved for our private
              circle, Alis by Vedaa. Every stone is certified by IGI, GIA or SSEF.
            </p>
            <Link
              to="/contact"
              className="link-underline mt-10 inline-block font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
            >
              Request an introduction
            </Link>
          </div>

          <div className="reveal">
            <img
              src="/images/packaging.webp"
              alt="A certified Vedaa stone in its presentation box with certificate"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
