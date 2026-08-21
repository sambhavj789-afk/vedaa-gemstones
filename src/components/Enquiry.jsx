import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { gemstones } from '../data/gemstones'
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_LINK, gmailCompose, mailTo, enquiryMessage, OTHER_STONE } from '../data/contact'

const field =
  'w-full border-b border-ink/25 bg-transparent py-3 font-sans text-[0.95rem] text-ink placeholder-ink/40 focus:border-ink focus:outline-none'

export default function Enquiry() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('stone') || ''
  const [form, setForm] = useState({ stone: preselected, message: '' })

  // The pathname does not change between /contact?stone=A and ?stone=B, so the
  // component never remounts and the initial state above would go stale.
  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, stone: preselected }))
  }, [preselected])

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  const compose = () => {
    // The body is exactly what the visitor typed. Gmail sends from their own
    // account and WhatsApp from their number, so identity is already attached,
    // and the stone rides on the subject line instead of the body.
    return {
      subject: form.stone
        ? `Enquiry — ${form.stone}`
        : 'Enquiry — Vedaa gemstones',
      // Nothing typed: fall back to the same line the catalogue links use, so
      // picking a stone and sending straight away still reads as a sentence.
      body: form.message.trim() || enquiryMessage(form.stone),
    }
  }

  const sendEmail = () => {
    const composed = compose()
    window.open(gmailCompose(composed.subject, composed.body), '_blank', 'noopener')
  }

  const sendMailto = () => {
    const composed = compose()
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      composed.subject
    )}&body=${encodeURIComponent(composed.body)}`
  }

  const sendWhatsApp = () => {
    const composed = compose()
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        composed.body
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
                href={mailTo('Enquiry — Vedaa gemstones')}
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
                  <option value={OTHER_STONE}>{OTHER_STONE}</option>
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

              <div className="pt-2">
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={sendWhatsApp}
                    className="bg-ink px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-porcelain transition-opacity duration-500 hover:opacity-85"
                  >
                    Message on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={sendEmail}
                    className="border border-ink/30 px-8 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-ink transition-colors duration-500 hover:border-ink"
                  >
                    Send email
                  </button>
                </div>
                <button
                  type="button"
                  onClick={sendMailto}
                  className="link-underline mt-5 font-sans text-[0.66rem] uppercase tracking-widest2 text-ink/50"
                >
                  Not a Gmail user? Use your own mail app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
