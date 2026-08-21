// Single place to change the business details used across the site.
export const EMAIL = 'vedaagemspvt@gmail.com'
export const PHONE_DISPLAY = '+91 63503 19428'
export const WHATSAPP_NUMBER = '916350319428' // country code + number, no symbols
export const INSTAGRAM = '' // add a URL to show the link in the footer

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// Opens Gmail's compose window addressed to Vedaa.
export const gmailCompose = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` +
  (subject ? `&su=${encodeURIComponent(subject)}` : '') +
  (body ? `&body=${encodeURIComponent(body)}` : '')
