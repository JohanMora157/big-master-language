import { Tag, ClipboardCheck, Zap, Info, ArrowRight } from 'lucide-react'
import { SectionHeading, Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import type { LucideIcon } from 'lucide-react'

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
        <SectionHeading
          eyebrow="Promociones"
          title="Promociones y cupos disponibles"
          subtitle="Pregunta por las ofertas activas y empieza con una inversión accesible."
        />

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <Sticker variant="red">Cupos limitados</Sticker>
          <Sticker variant="navy">Pregunta hoy</Sticker>
          <Sticker variant="cream">Bogotá</Sticker>
          <Sticker variant="red">Online / Presencial</Sticker>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {promos.map(({ icon: Icon, title, text, cta, message, featured }) => (
            <article
              key={title}
              className={`relative flex flex-col rounded-3xl border-2 p-7 shadow-lg transition-transform hover:-translate-y-1 ${
                featured
                  ? 'border-brand-red bg-brand-navy text-white'
                  : 'border-brand-navy/10 bg-white text-brand-navy'
              }`}
            >
              {featured ? (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Más popular
                </span>
              ) : null}
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
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
                className={`mt-2 flex-1 text-sm leading-relaxed ${
                  featured ? 'text-white/80' : 'text-muted-foreground'
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
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-sm font-medium text-brand-navy/70">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          Los precios y promociones pueden cambiar. Confirma la información
          actual directamente por WhatsApp.
        </p>
      </div>
    </section>
  )
}
