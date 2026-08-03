import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Poppins, Montserrat } from 'next/font/google'
import './globals.css'

const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bigmaster.com.co'),
  title: 'Big Master Language Center | Cursos de inglés en Bogotá y 100% Online',
  description:
    'Aprende inglés en Bogotá y online con Big Master Language Center. Clases personalizadas desde $10.000 la hora. Cursos para niños, jóvenes y adultos, presenciales y virtuales.',
  keywords: [
    'cursos de inglés Bogotá',
    'clases personalizadas online',
    'academia de inglés Bogotá',
    'clases de inglés desde 10000',
    'inglés para niños Bogotá',
    'inglés para adultos Bogotá',
    'preparación IELTS Bogotá',
    'clases virtuales de inglés',
    'Big Master Language Center',
  ],
  openGraph: {
    title: 'Big Master Language Center | Cursos de inglés en Bogotá y Online',
    description:
      'Clases personalizadas 100% online desde $10.000 la hora. Cursos de inglés y otros idiomas para todas las edades.',
    locale: 'es_CO',
    type: 'website',
    siteName: 'Big Master Language Center',
  },
}

export const viewport: Viewport = {
  themeColor: '#054BAB',
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
      className={`${anton.variable} ${poppins.variable} ${montserrat.variable} bg-background light`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
