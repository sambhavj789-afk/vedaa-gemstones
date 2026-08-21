const consults = ['India', 'China', 'United Kingdom', 'Germany', 'Vietnam', 'UAE']

export default function Reach() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-28">
        <div className="rule" />
        <div className="grid gap-12 pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow">Reach</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-porcelain md:text-4xl">
              Present in 18 countries.
            </h2>
          </div>

          <div className="reveal lg:col-span-8">
            <p className="text-[0.95rem] leading-relaxed text-porcelain/65">
              Offline consultations are held in person in the cities below.
              Elsewhere, we work by appointment — stones are shipped certified,
              insured and fully documented.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-3">
              {consults.map((place) => (
                <li
                  key={place}
                  className="font-display text-xl text-porcelain/85 md:text-2xl"
                >
                  {place}
                </li>
              ))}
            </ul>
            <p className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/45">
              <span>GIA certified</span>
              <span>IGI certified</span>
              <span>SSEF certified</span>
              <span>Lifetime authenticity guarantee</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
