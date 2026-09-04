const pillars = [
  {
    title: 'Purity',
    body: 'Only 100% natural gemstones, individually inspected and guaranteed for authenticity for life.',
  },
  {
    title: 'Rarity',
    body: 'A global sourcing network that reaches investment-grade stones chosen for beauty and enduring value.',
  },
  {
    title: 'Service',
    body: 'Every purchase includes a consultation with our in-house designers and end-to-end assistance to final setting.',
  },
]

export default function Standard() {
  return (
    <section className="bg-ink text-porcelain">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Why Vedaa</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Nature’s finest,
              <br />
              chosen well.
            </h2>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-porcelain/70">
              Clients trust Vedaa because we pair a global sourcing network with
              standards we do not bend. Every stone is inspected and evaluated in
              the open, so what you buy holds its value and its integrity. From
              acquisition to final setting, the work is ours.
            </p>
            <p className="mt-6 font-sans text-xl font-light leading-snug text-gilt/85">
              Serving clients across 18 countries.
            </p>
          </div>

          <div className="reveal lg:col-span-7">
            <img
              src="/images/atelier.webp"
              alt="A loupe and tweezers on a workbench, examining loose stones"
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </div>

        <div className="rule mt-20 md:mt-28" />

        <div className="grid gap-12 pt-14 md:grid-cols-3 md:gap-10">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <h3 className="font-display text-2xl">{pillar.title}</h3>
              <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-porcelain/65">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
