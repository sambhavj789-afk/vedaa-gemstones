import { Link } from 'react-router-dom'
import { latestColumns } from '../data/columns'

export default function ColumnsTeaser() {
  const latest = latestColumns(3)

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Columns of Vedaa</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              From the trade.
            </h2>
          </div>
          <Link
            to="/columns"
            className="link-underline font-sans text-[0.85rem] uppercase tracking-widest2 text-gilt"
          >
            All columns
          </Link>
        </div>

        <div className="mt-14 grid gap-px border-t border-porcelain/12 md:grid-cols-3">
          {latest.map((column, i) => (
            <article
              key={column.slug}
              className="reveal border-b border-porcelain/12 py-10 md:border-b-0 md:pr-10 md:pt-12"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <p className="font-sans text-[0.88rem] uppercase tracking-widest2 text-brass">
                {column.date || column.category}
              </p>
              <h3 className="mt-5 font-display text-2xl leading-tight text-porcelain">
                <Link
                  to={`/columns/${column.slug}`}
                  className="transition-colors duration-500 hover:text-gilt"
                >
                  {column.title}
                </Link>
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-porcelain/60">
                {column.standfirst}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
