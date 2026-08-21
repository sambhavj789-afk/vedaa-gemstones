import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { gemstones } from '../data/gemstones'
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_LINK, gmailCompose } from '../data/contact'

const field =
  'w-full border-b border-ink/25 bg-transparent py-3 font-sans text-[0.95rem] text-ink placeholder-ink/40 focus:border-ink focus:outline-none'

export default function Enquiry() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('stone') || ''
  const [form, setForm] = useState({
    name: '',
    email: '',
    stone: preselected,
    message: '',
  })
  const [error, setError] = useState('')

  // The pathname does not change between /contact?stone=A and ?stone=B, so the
  // component never remounts and the initial state above would go stale.
  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, stone: preselected }))
  }, [preselected])

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (error) setError('')
  }

  const compose = () => {
    if (!form.name.trim() || !form.message.trim()) {
      setError('Add your name and a short message, then send.')
      return null
    }
    const lines = [
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.stone && `Stone of interest: ${form.stone}`,
      '',
      form.message,
    ].filter(Boolean)
    return {
      subject: form.stone
        ? `Enquiry — ${form.stone}`
        : 'Enquiry — Vedaa gemstones',
      body: lines.join('\n'),
    }
  }

  const sendEmail = () => {
    const composed = compose()
    if (!composed) return
    window.open(gmailCompose(composed.subject, composed.body), '_blank', 'noopener')
  }

  const sendWhatsApp = () => {
    const composed = compose()
    if (!composed) return
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `${composed.subject}\n\n${composed.body}`
      )}`,
      '_blank',
      'noopener'
    )
  }

  return (
    <section className="bg-linen text-ink">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Enquire</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Tell us what
              <br />
              you are looking for.
            </h2>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-ink/70">
              Send the stone, the size and the setting you have in mind. We reply
              with what is currently available, certification details and price.
            </p>

            <div className="mt-12 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline block font-sans text-xl font-normal tracking-wide"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={gmailCompose('Enquiry — Vedaa gemstones')}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline block font-sans text-sm text-ink/70"
              >
                {EMAIL}
              </a>
              <p className="pt-2 font-sans text-[0.66rem] uppercase tracking-widest2 text-ink/50">
                India
              </p>
            </div>
          </div>

          <div className="reveal lg:col-span-7">
            <div className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow text-ink/60">
                    Name
                  </label>
                  <input
                    id="name"
                    className={`${field} mt-3`}
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-ink/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`${field} mt-3`}
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="stone" className="eyebrow text-ink/60">
                  Stone of interest
                </label>
                <select
                  id="stone"
                  className={`${field} mt-3`}
                  value={form.stone}
                  onChange={update('stone')}
                >
                  <option value="">No preference yet</option>
                  {gemstones.map((stone) => (
                    <option key={stone.slug} value={stone.name}>
                      {stone.name}
                    </option>
                  ))}
                  <option value="Something not listed">
                    Something not listed
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-ink/60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${field} mt-3 resize-none`}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Carat range, colour, certification, timeline"
                />
              </div>

              {error && (
                <p role="alert" className="font-sans text-sm text-[#8a3324]">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={sendEmail}
                  className="bg-ink px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain transition-opacity duration-500 hover:opacity-85"
                >
                  Send email
                </button>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="border border-ink/30 px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-ink transition-colors duration-500 hover:border-ink"
                >
                  Message on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
