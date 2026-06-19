import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Poppins } from 'next/font/google'
import './globals.css'

const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bigmaster.com.co'),
  title: 'Big Master Language Center | Cursos de inglés en Bogotá',
  description:
    'Aprende inglés en Bogotá con Big Master Language Center. Cursos para niños, jóvenes y adultos, clases presenciales y virtuales, preparación para IELTS, TOEFL, PET y promociones disponibles.',
  keywords: [
    'cursos de inglés Bogotá',
    'academia de inglés Bogotá',
    'clases de inglés Bogotá',
    'inglés para niños Bogotá',
    'inglés para adultos Bogotá',
    'preparación IELTS Bogotá',
    'preparación TOEFL Bogotá',
    'clases virtuales de inglés',
    'Big Master Language Center',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Big Master Language Center | Cursos de inglés en Bogotá',
    description:
      'Cursos de inglés y otros idiomas para todas las edades. Clases presenciales y virtuales, preparación para exámenes internacionales y promociones desde $9.000.',
    locale: 'es_CO',
    type: 'website',
    siteName: 'Big Master Language Center',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFD21A',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${poppins.variable} bg-background light`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
