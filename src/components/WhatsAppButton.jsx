import { WHATSAPP_NUMBER } from '../data/contact'

const MESSAGE = 'Hello Vedaa, I would like to enquire about a gemstone.'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vedaa on WhatsApp"
      className="wa-in fixed bottom-5 right-5 z-40 border border-brass bg-ink/90 px-5 py-3 font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt backdrop-blur-sm transition-colors duration-500 hover:bg-brass hover:text-ink md:bottom-8 md:right-8"
    >
      WhatsApp
    </a>
  )
}
