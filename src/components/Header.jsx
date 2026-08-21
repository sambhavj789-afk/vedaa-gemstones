import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/collection', label: 'Collection' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Enquire' },
]

// Home needs `end`, or "/" would count as active on every route. The others
// match nested paths on purpose, so /collection/ruby still lights Collection.
const menu = [{ to: '/', label: 'Home', end: true }, ...links]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Only the home page has a full-bleed hero to float over.
  const floating = pathname === '/' && !solid

  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Safety net for the browser back/forward gesture. Tapping a menu link closes
  // the menu in its own click handler, so that path no longer relies on this —
  // which matters because tapping the page you are already on leaves the
  // pathname unchanged and this effect would never re-run.
  useEffect(close, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Layout effect so the scroll lock lifts in the same commit that closes the
  // menu, before App's scroll-to-top effect runs — otherwise the new page opens
  // frozen at the old scroll offset.
  useLayoutEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          floating ? 'bg-transparent' : 'bg-ink/92 backdrop-blur-sm'
        }`}
      >
        <div className="relative z-50 mx-auto flex max-w-shell items-center justify-between px-6 py-5 md:px-10">
          <Link
            to="/"
            onClick={close}
            className="font-brand font-bold text-lg tracking-[0.25em] text-porcelain"
            aria-label="Vedaa, home"
          >
            VEDAA
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `link-underline font-sans text-[0.66rem] uppercase tracking-widest2 transition-colors ${
                        isActive
                          ? 'text-gilt'
                          : 'text-porcelain/75 hover:text-porcelain'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-3 p-3 md:hidden"
          >
            <span
              className={`block h-px w-7 bg-porcelain transition-transform duration-300 ${
                open ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`mt-2 block h-px bg-porcelain transition-all duration-300 ${
                open ? 'w-7 -translate-y-[5px] -rotate-45' : 'w-4'
              }`}
            />
          </button>
        </div>

        <div
          className={`${floating ? 'opacity-0' : 'opacity-100'} rule transition-opacity duration-700`}
        />
      </header>

      {open && (
        <div className="fixed inset-0 z-[45] flex flex-col justify-center bg-ink px-8 md:hidden">
          <ul className="space-y-8">
            {menu.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center gap-4 font-display text-4xl transition-colors duration-300 ${
                      isActive ? 'text-gilt' : 'text-porcelain'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className={`h-px bg-brass transition-all duration-500 ${
                          isActive ? 'w-8 opacity-100' : 'w-0 opacity-0'
                        }`}
                      />
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-16">+91 63503 19428</p>
        </div>
      )}
    </>
  )
}
