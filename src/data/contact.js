// Single place to change the business details used across the site.
export const EMAIL = 'vedaagemspvt@gmail.com'
export const PHONE_DISPLAY = '+91 63503 19428'
export const WHATSAPP_NUMBER = '916350319428' // country code + number, no symbols
export const INSTAGRAM = '' // add a URL to show the link in the footer

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// A plain mail link, for anywhere the address itself is shown. Hands off to
// whatever client the visitor actually uses — Outlook, Apple Mail, Gmail,
// Thunderbird — instead of forcing everyone through a Google login.
export const mailTo = (subject = '') =>
  `mailto:${EMAIL}` + (subject ? `?subject=${encodeURIComponent(subject)}` : '')

// Opens Gmail's compose window addressed to Vedaa.
export const gmailCompose = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` +
  (subject ? `&su=${encodeURIComponent(subject)}` : '') +
  (body ? `&body=${encodeURIComponent(body)}` : '')

// Opens WhatsApp with the stone already named. Used by the Enquire links in
// the catalogue and on a stone page, where tapping has already said which
// stone — sending them to a form to re-state it only loses people.
export const enquiryMessage = (stone = '') =>
  stone
    ? `Hi, I would like to enquire about the ${stone}.`
    : 'Hi, I would like to enquire about a gemstone.'

export const whatsappEnquiry = (stone = '') =>
  `${WHATSAPP_LINK}?text=${encodeURIComponent(enquiryMessage(stone))}`
