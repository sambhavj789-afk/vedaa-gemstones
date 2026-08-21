import { Link } from 'react-router-dom'
import { EMAIL, INSTAGRAM, PHONE_DISPLAY, WHATSAPP_LINK, mailTo } from '../data/contact'

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
        <div className="flex flex-col gap-10 pt-10 md:flex-row md:items-end md:justify-between">
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

          <div className="flex flex-wrap gap-x-10 gap-y-3 font-sans text-sm font-normal text-porcelain/75">
            <a href={mailTo('Enquiry — Vedaa gemstones')} className="link-underline">
              {EMAIL}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {PHONE_DISPLAY}
            </a>
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

        <p className="mt-12 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain/30">
          © {new Date().getFullYear()} Vedaa Gems
        </p>
      </div>
    </footer>
  )
}
