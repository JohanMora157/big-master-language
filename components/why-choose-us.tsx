import {
  Sparkles,
  Smile,
  GraduationCap,
  Rocket,
  Shuffle,
  PiggyBank,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { ScrollReveal } from '@/components/scroll-reveal'

const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sparkles,
    title: 'Clases adaptadas a ti',
    text: 'No todos aprenden igual. Por eso cada proceso debe responder a tu nivel, ritmo y objetivo.',
  },
  {
    icon: Smile,
    title: 'Aprendizaje sin aburrimiento',
    text: 'Clases dinámicas, conversación y experiencias para que aprender sea más natural.',
  },
  {
    icon: GraduationCap,
    title: 'Profesores con experiencia',
    text: 'Acompañamiento de docentes con experiencia en enseñanza de idiomas.',
  },
  {
    icon: Rocket,
    title: 'Preparación para el futuro',
    text: 'Inglés para estudios, trabajo, viajes, exámenes y nuevas oportunidades.',
  },
  {
    icon: Shuffle,
    title: 'Modalidad flexible',
    text: 'Opciones presenciales y virtuales según disponibilidad.',
  },
  {
    icon: PiggyBank,
    title: 'Precios accesibles',
    text: 'Promociones y programas pensados para que más personas puedan empezar.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-muted/40">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -left-12 bottom-0 hidden h-[85%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[-6deg] md:block"
        loading="lazy"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Razones"
            title="¿Por qué estudiar con {Big Master}?"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group flex h-full gap-4 rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:border-brand-red hover:shadow-xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-red group-hover:text-white shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-heading text-lg leading-tight text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium leading-relaxed text-slate-700">
                    {text}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
