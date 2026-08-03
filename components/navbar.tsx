'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { cn } from '@/lib/utils'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Exámenes', href: '#examenes' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          'border-b border-brand-navy/10 bg-white/90 backdrop-blur-md transition-shadow',
          scrolled && 'shadow-md',
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#inicio" aria-label="Big Master Language Center - Inicio">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-bold text-brand-blue-dark transition-all duration-200 hover:bg-brand-pink hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <CtaButton
              variant="pink"
              message="Hola Big Master, quiero información sobre los cursos de inglés."
            >
              <WhatsAppIcon className="h-4 w-4" />
              Quiero información
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-blue-dark hover:bg-brand-pink hover:text-white transition-colors lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-brand-blue/10 bg-white lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-bold text-brand-blue-dark hover:bg-brand-pink hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-1 py-3">
                <CtaButton
                  variant="pink"
                  className="w-full"
                  message="Hola Big Master, quiero información sobre los cursos de inglés."
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quiero información
                </CtaButton>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  )
}
