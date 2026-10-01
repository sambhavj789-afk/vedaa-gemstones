import { Link, Navigate, useParams } from 'react-router-dom'
import { columns } from '../data/columns'

export default function ColumnPage() {
  const { slug } = useParams()
  const index = columns.findIndex((c) => c.slug === slug)

  if (index === -1) return <Navigate to="/columns" replace />

  const column = columns[index]
  const next = columns[(index + 1) % columns.length]

  return (
    <div className="pt-16 md:pt-[4.25rem]">
      <article className="bg-ink">
        <div className="mx-auto max-w-shell px-6 pt-28 md:px-10 md:pt-36">
          {/* A column is a reading column: one measure, nothing beside it. */}
          <header className="reveal mx-auto max-w-2xl">
            <p className="eyebrow">{column.date || column.category}</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain md:text-5xl">
              {column.title}
            </h1>
            <p className="mt-8 font-display text-xl leading-snug text-gilt/90 md:text-2xl">
              {column.standfirst}
            </p>
            <div className="mt-10 h-px w-16 bg-brass" />
          </header>

          <div className="reveal mx-auto mt-12 max-w-2xl space-y-7">
            {column.body.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-[1.02rem] leading-[1.85] text-porcelain/75"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl border-t border-porcelain/12 pb-28 pt-8 md:pb-36">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <Link
                to="/columns"
                className="link-underline font-sans text-[0.85rem] uppercase tracking-widest2 text-porcelain/60 hover:text-porcelain"
              >
                ← All columns
              </Link>
              <Link
                to={`/columns/${next.slug}`}
                className="link-underline max-w-[18rem] text-right font-sans text-[0.85rem] uppercase tracking-widest2 text-gilt"
              >
                {next.title} →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
