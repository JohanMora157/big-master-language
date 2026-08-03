import { MapPin, Phone, Mail } from 'lucide-react'
import { SectionHeading, InstagramIcon, FacebookIcon } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { SITE, mailtoLink } from '@/lib/site'

const contactItems = [
  { icon: MapPin, label: 'Ubicación', value: SITE.city },
  { icon: Phone, label: 'WhatsApp', value: SITE.phoneDisplay },
  { icon: Mail, label: 'Email', value: SITE.email },
  { icon: InstagramIcon, label: 'Instagram', value: SITE.instagram },
  { icon: FacebookIcon, label: 'Facebook', value: SITE.facebook },
]

export function Location() {
  return (
    <section id="contacto" className="bg-[#f0f4fa]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Contacto & Ubicación"
          title="Estamos en Bogotá y {100% Online}"
          subtitle="Big Master Language Center ofrece clases presenciales en Bogotá y clases virtuales desde cualquier ciudad de Colombia."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border-2 border-[#054BAB]/15 bg-white p-4 shadow-sm transition-all hover:border-[#ED0874]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ED0874] text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                      {label}
                    </span>
                    <span className="block font-extrabold text-[#054BAB] text-xs sm:text-sm leading-snug break-all [word-break:break-word]">
                      {value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton
                size="lg"
                variant="pink"
                message="Hola Big Master, quiero escribirles para recibir información sobre clases de inglés."
              >
                Escribir por WhatsApp
              </CtaButton>
              <CtaButton size="lg" variant="navy" href={mailtoLink()}>
                <Mail className="h-4 w-4" />
                Enviar correo
              </CtaButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-brand-navy/10 shadow-lg">
            <iframe
              title="Mapa de Bogotá, Colombia"
              src="https://www.google.com/maps?q=Bogot%C3%A1%2C%20Colombia&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
