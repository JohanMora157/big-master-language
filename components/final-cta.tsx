import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { Sticker, InstagramIcon } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { SITE } from '@/lib/site'

const contacts = [
  { icon: Phone, value: SITE.phoneDisplay },
  { icon: Mail, value: SITE.email },
  { icon: MapPin, value: SITE.city },
  { icon: InstagramIcon, value: SITE.instagram },
]

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow brand-texture">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <div className="flex flex-wrap justify-center gap-2">
          <Sticker variant="red">Cupos limitados</Sticker>
          <Sticker variant="navy">Desde $9.000</Sticker>
        </div>

        <h2 className="mt-5 font-heading text-4xl leading-[1.02] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
          Empieza hoy tu camino con el inglés
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-navy/80">
          Cursos para niños, jóvenes y adultos. Clases presenciales y virtuales,
          preparación para exámenes internacionales y promociones disponibles.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <CtaButton
            size="lg"
            message="Hola Big Master, quiero información por WhatsApp para empezar mi curso de inglés."
          >
            <MessageCircle className="h-5 w-5" />
            Quiero información por WhatsApp
          </CtaButton>
          <CtaButton size="lg" variant="navy" href="#cursos">
            Ver cursos
          </CtaButton>
        </div>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-brand-navy">
          {contacts.map(({ icon: Icon, value }) => (
            <li key={value} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand-red" />
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
