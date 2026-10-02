// Single place to change the business details used across the site.
export const EMAIL = 'vedaagemspvt@gmail.com'
export const PHONE_DISPLAY = '+91 63503 19428'
export const WHATSAPP_NUMBER = '916350319428' // country code + number, no symbols
export const INSTAGRAM = '' // add a URL to show the link in the footer

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// A plain mail link, for anywhere the address itself is shown. Hands off to
// whatever client the visitor actually uses (Outlook, Apple Mail, Gmail,
// Thunderbird) instead of forcing everyone through a Google login.
export const mailTo = (subject = '') =>
  `mailto:${EMAIL}` + (subject ? `?subject=${encodeURIComponent(subject)}` : '')

// Alis by Vedaa is applied to, not bought, so its enquiry opens differently
// from a stone enquiry and never touches the stone dropdown.
export const MEMBERSHIP_SUBJECT = 'Application: Alis by Vedaa'
export const membershipMessage = () =>
  'Hi, I would like to apply for membership of Alis by Vedaa.'

// A composed message handed to whatever mail client this computer uses.
const q = (s) => encodeURIComponent(s)

export const mailtoCompose = (subject = '', body = '') =>
  `mailto:${EMAIL}?subject=${q(subject)}&body=${q(body)}`

// The dropdown's catch-all. Kept here so the option value and the sentence
// that handles it cannot drift apart.
export const OTHER_STONE = 'Something not listed'

export const enquiryMessage = (stone = '') => {
  // Neither the blank option nor the catch-all names an actual stone, and
  // "...about the Something not listed." would not be a sentence.
  if (!stone || stone === OTHER_STONE)
    return 'Hi, I would like to enquire about a gemstone.'
  return `Hi, I would like to enquire about the ${stone}.`
}

