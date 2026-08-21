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
        <div className="flex flex-col gap-10 pt-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-brand font-bold text-2xl tracking-[0.25em] text-porcelain">
              VEDAA
            </p>
            <p className="mt-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/45">
              Natural gemstones
            </p>
            <nav aria-label="Footer" className="mt-6">
              <ul className="flex gap-8">
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
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <div className="mt-4 flex flex-col gap-2 font-sans text-sm font-normal text-porcelain/75">
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

        <p className="mt-12 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/30">
          © {new Date().getFullYear()} Vedaa Gems
        </p>
      </div>
    </footer>
  )
}
