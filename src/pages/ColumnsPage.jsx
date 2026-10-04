import { Link } from 'react-router-dom'
import { columns } from '../data/columns'

export default function ColumnsPage() {
  // Taken from the columns, not typed out beside them.
  const subjects = [...new Set(columns.map((c) => c.category))]

  return (
    <div className="pt-16 md:pt-[4.25rem]">
      <section className="bg-ink">
        <div className="mx-auto max-w-shell px-6 pt-28 md:px-10 md:pt-36">
          <div className="reveal grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">Columns of Vedaa</p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
                What we are reading
                <br />
                in the trade.
              </h1>
              <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-porcelain/70">
                Notes on sourcing, treatment and certification, and what moves in
                the gemstone market. Written for people who intend to own a stone
                for a long time.
              </p>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end lg:self-end lg:text-right">
              <p className="font-sans text-[0.88rem] uppercase tracking-widest2 text-porcelain/40">
                Subjects
              </p>
              <ul className="mt-5 space-y-3">
                {subjects.map((subject) => (
                  <li
                    key={subject}
                    className="font-display text-xl text-porcelain/75 md:text-2xl"
                  >
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 md:mt-28">
            {columns.map((column, i) => (
              <article
                key={column.slug}
                className="reveal border-t border-porcelain/12 py-12 md:py-16"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <p className="eyebrow">{column.date || column.category}</p>
                    {column.date && (
                      <p className="mt-3 font-sans text-[0.88rem] uppercase tracking-widest2 text-porcelain/40">
                        {column.category}
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="font-display text-3xl leading-tight text-porcelain md:text-4xl">
                      <Link
                        to={`/columns/${column.slug}`}
                        className="transition-colors duration-500 hover:text-gilt"
                      >
                        {column.title}
                      </Link>
                    </h2>
                    <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-porcelain/65">
                      {column.standfirst}
                    </p>
                    <Link
                      to={`/columns/${column.slug}`}
                      className="link-underline mt-7 inline-block font-sans text-[0.85rem] uppercase tracking-widest2 text-gilt"
                    >
                      Read the column
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            <div className="border-t border-porcelain/12" />
          </div>

          <div className="pb-28 pt-16 md:pb-36">
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-porcelain/70">
              We publish when there is something worth saying rather than to a
              schedule.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
