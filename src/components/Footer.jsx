import { Link } from 'react-router-dom'
import { EMAIL, INSTAGRAM, PHONE_DISPLAY } from '../data/contact'

const pages = [
  { to: '/collection', label: 'Collection' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Enquire' },
]

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-shell px-6 py-14 md:px-10">
        <div className="rule" />
        {/* Three columns rather than two pushed to opposite edges: at the
            shell's full 84rem that left a dead gap down the middle. */}
        <div className="grid gap-10 pt-10 md:grid-cols-3 md:gap-16">
          <div>
            <p className="font-brand font-bold text-2xl tracking-[0.25em] text-porcelain">
              VEDAA
            </p>
            <p className="mt-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/45">
              Natural gemstones
            </p>
          </div>

          {/* Centred in its own track so it reads as the middle of the row,
              while the links stay left-aligned to each other. */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="flex flex-col gap-3">
              {pages.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/55 hover:text-porcelain"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:text-right">
            <p className="eyebrow">Contact</p>
            <div className="mt-4 flex flex-col gap-2 font-sans text-sm font-normal text-porcelain/75 md:items-end">
              <span>{EMAIL}</span>
              <span>{PHONE_DISPLAY}</span>
              {INSTAGRAM && (
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="mt-12 font-sans text-xs uppercase tracking-widest2 text-porcelain/45">
          © {new Date().getFullYear()} Vedaa Gems
        </p>
      </div>
    </footer>
  )
}
