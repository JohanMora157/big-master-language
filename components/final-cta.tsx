import { Phone, Mail, MapPin } from 'lucide-react'
import { Sticker, InstagramIcon } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { SITE } from '@/lib/site'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const contacts = [
  { icon: Phone, value: SITE.phoneDisplay },
  { icon: Mail, value: SITE.email },
  { icon: MapPin, value: SITE.city },
  { icon: InstagramIcon, value: SITE.instagram },
]

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#054BAB] text-white brand-texture">
      {/* Decorative text watermark */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-10">
        <span className="watermark-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] sm:text-[220px]">
          BIG MASTER
        </span>
      </div>

      {/* Glowing background blob */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#ED0874]/30 bg-blob" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2">
            <Sticker variant="pink">Cupos limitados</Sticker>
            <Sticker variant="yellow">Desde $10.000 / hr</Sticker>
            <Sticker variant="pink">100% Online &amp; Presencial</Sticker>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <h2 className="mt-5 font-heading text-4xl font-black leading-[1.03] text-white text-balance sm:text-5xl lg:text-6xl">
            Empieza hoy tu camino para hablar inglés con <span className="text-[#FBCC2E]">confianza</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300}>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90 font-medium">
            Clases personalizadas y grupales para niños, jóvenes y adultos. Asesoría inmediata vía WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={400}>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap">
            <CtaButton
              size="lg"
              variant="pink"
              message="Hola Big Master, quiero información por WhatsApp para empezar mi curso de inglés."
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quiero información por WhatsApp
            </CtaButton>
            <CtaButton size="lg" variant="outline" href="#cursos">
              Ver todos los cursos
            </CtaButton>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={500}>
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-extrabold text-white/90">
            {contacts.map(({ icon: Icon, value }) => (
              <li key={value} className="flex items-center gap-2 max-w-full min-w-0 transition-transform duration-300 hover:scale-[1.05]">
                <Icon className="h-4 w-4 shrink-0 text-[#FBCC2E]" />
                <span className="break-all [word-break:break-word]">{value}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
