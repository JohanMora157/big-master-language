import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { Logo, InstagramIcon, FacebookIcon } from '@/components/brand'
import { SITE, whatsappLink, mailtoLink } from '@/lib/site'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Exámenes', href: '#examenes' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className="bg-[#0c1838] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-3 inline-block shadow-md">
              <Logo />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 font-medium">
              Academia de idiomas en Bogotá con cursos de inglés y otros idiomas para niños, jóvenes y adultos. Clases personalizadas 100% online desde $10.000 la hora, preparación de exámenes y más.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-[#ED0874] hover:text-white shadow-sm"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-[#ED0874] hover:text-white shadow-sm"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sitio web"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-[#ED0874] hover:text-white shadow-sm"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-yellow">Enlaces</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-yellow">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-yellow" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink()}
                  className="flex items-center gap-2 min-w-0 break-all [word-break:break-word] text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#FBCC2E]" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 text-brand-yellow" />
                {SITE.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© 2026 Big Master Language Center. Todos los derechos reservados.</p>
          <p>Website demo by Global Automate.</p>
        </div>
      </div>
    </footer>
  )
}
