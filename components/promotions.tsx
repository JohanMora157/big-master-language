import { Tag, ClipboardCheck, Zap, Info, ArrowRight } from 'lucide-react'
import { SectionHeading, Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import type { LucideIcon } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const promos: {
  icon: LucideIcon
  title: string
  text: string
  cta: string
  message: string
  featured?: boolean
}[] = [
  {
    icon: Tag,
    title: 'Clases desde $9.000',
    text: 'Promoción sujeta a disponibilidad, modalidad y horario.',
    cta: 'Preguntar por esta promo',
    message:
      'Hola Big Master, quiero preguntar por la promoción de clases desde $9.000.',
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: 'Inscripciones abiertas',
    text: 'Cursos para niños, jóvenes y adultos. Pregunta por grupos, niveles y horarios.',
    cta: 'Quiero inscribirme',
    message:
      'Hola Big Master, quiero inscribirme. ¿Me das información de grupos y horarios?',
  },
  {
    icon: Zap,
    title: 'Cursos intensivos',
    text: 'Ideal para vacaciones, refuerzo académico o preparación rápida.',
    cta: 'Ver intensivos',
    message:
      'Hola Big Master, quiero información sobre los cursos intensivos.',
  },
]

export function Promotions() {
  return (
    <section
      id="promociones"
      className="relative overflow-hidden bg-brand-yellow brand-texture"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Promociones"
            title="Promociones y {cupos disponibles}"
            subtitle="Pregunta por las ofertas activas y empieza con una inversión accesible."
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <Sticker variant="red">Cupos limitados</Sticker>
            <Sticker variant="navy">Pregunta hoy</Sticker>
            <Sticker variant="cream">Bogotá</Sticker>
            <Sticker variant="red">Online / Presencial</Sticker>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {promos.map(({ icon: Icon, title, text, cta, message, featured }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 150}
              className="h-full"
            >
              <article
                className={`group relative flex h-full flex-col rounded-3xl border-2 p-7 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl ${
                  featured
                    ? 'border-brand-navy bg-brand-navy text-white'
                    : 'border-brand-navy/10 bg-white text-brand-navy'
                }`}
              >
                {featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm animate-pulse-glow">
                    Más popular
                  </span>
                ) : null}
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    featured
                      ? 'bg-brand-yellow text-brand-navy'
                      : 'bg-brand-red text-white'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <h3 className="mt-4 font-heading text-2xl leading-tight">
                  {title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-[15px] font-medium leading-relaxed ${
                    featured ? 'text-white/90' : 'text-slate-700'
                  }`}
                >
                  {text}
                </p>
                <div className="mt-5">
                  <CtaButton
                    variant={featured ? 'yellow' : 'red'}
                    className="w-full"
                    message={message}
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" />
                  </CtaButton>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={500}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-[15px] font-semibold text-brand-navy/70">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            Los precios y promociones pueden cambiar. Confirma la información
            actual directamente por WhatsApp.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
