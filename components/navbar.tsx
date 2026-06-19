'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { cn } from '@/lib/utils'

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
                  className="rounded-full px-3 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <CtaButton message="Hola Big Master, quiero información sobre los cursos.">
              <MessageCircle className="h-4 w-4" />
              Quiero información
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy hover:bg-brand-yellow lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-brand-navy/10 bg-white lg:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-brand-navy hover:bg-brand-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-1 py-3">
                <CtaButton
                  className="w-full"
                  message="Hola Big Master, quiero información sobre los cursos."
                >
                  <MessageCircle className="h-4 w-4" />
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
