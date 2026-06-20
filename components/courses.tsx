import {
  Check,
  ArrowRight,
  Languages,
  MessagesSquare,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading, Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

const englishFeatures = [
  'Conversación',
  'Pronunciación',
  'Gramática aplicada',
  'Vocabulario real',
  'Preparación académica y laboral',
]

const secondary: {
  title: string
  icon: LucideIcon
  text: string
  cta: string
  message: string
}[] = [
  {
    title: 'Francés',
    icon: Languages,
    text: 'Clases para estudiantes que quieren empezar, reforzar o avanzar en francés.',
    cta: 'Preguntar por francés',
    message:
      'Hola Big Master, quiero información sobre los cursos de francés.',
  },
  {
    title: 'Alemán',
    icon: MessagesSquare,
    text: 'Aprende bases, vocabulario y estructuras de alemán con acompañamiento.',
    cta: 'Preguntar por alemán',
    message:
      'Hola Big Master, quiero información sobre los cursos de alemán.',
  },
  {
    title: 'Otros idiomas',
    icon: Globe,
    text: 'Pregunta por disponibilidad de portugués, español u otros programas.',
    cta: 'Consultar disponibilidad',
    message:
      'Hola Big Master, quiero consultar disponibilidad de otros idiomas.',
  },
]

export function Courses() {
  return (
    <section id="cursos" className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Cursos"
            title="Cursos para aprender a {tu ritmo}"
            subtitle="Aprende inglés y otros idiomas con clases adaptadas a tus objetivos."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 items-start lg:grid-cols-2">
          {/* Main course: English */}
          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <article className="group relative overflow-hidden rounded-3xl border-2 border-brand-navy bg-brand-navy p-7 text-white shadow-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl">
              <div className="absolute right-4 top-4">
                <Sticker variant="yellow">Curso principal</Sticker>
              </div>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-brand-yellow">
                Learn English
              </span>
              <h3 className="mt-1 font-heading text-4xl text-white">Inglés</h3>
              <p className="mt-3 max-w-md text-[16px] sm:text-[17px] font-medium leading-relaxed text-white/90">
                Mejora tu speaking, listening, reading y writing con clases
                prácticas para tu nivel.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {englishFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[15px] font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  message="Hola Big Master, quiero aprender inglés. ¿Me das información de los cursos?"
                >
                  Quiero aprender inglés
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </article>
          </ScrollReveal>

          {/* Secondary languages */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((c, idx) => (
              <ScrollReveal
                key={c.title}
                animation="fade-up"
                delay={200 + idx * 100}
                className="h-full"
              >
                <article
                  className="group flex h-full flex-col rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-red hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <c.icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="font-heading text-2xl text-brand-navy">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-2 flex-1 text-[15px] font-medium leading-relaxed text-slate-700">
                    {c.text}
                  </p>
                  <div className="mt-4">
                    <CtaButton variant="outline" message={c.message}>
                      {c.cta}
                    </CtaButton>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
