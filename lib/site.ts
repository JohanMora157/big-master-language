export const SITE = {
  name: 'Big Master Language Center',
  phoneDisplay: '315 2430707',
  phoneIntl: '573152430707',
  email: 'bigmasterlanguagecenter@gmail.com',
  instagram: '@bigmasterlanguagecenter',
  instagramUrl: 'https://instagram.com/bigmasterlanguagecenter',
  facebook: 'BIG Master Language Center',
  facebookUrl: 'https://facebook.com/bigmasterlanguagecenter',
  website: 'bigmaster.com.co',
  websiteUrl: 'https://bigmaster.com.co',
  city: 'Bogotá, Colombia',
} as const

const DEFAULT_MESSAGE =
  'Hola Big Master Language Center, quiero recibir información sobre los cursos de inglés.'

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`
}

export function mailtoLink() {
  return `mailto:${SITE.email}`
}
