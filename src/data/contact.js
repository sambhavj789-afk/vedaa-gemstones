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

