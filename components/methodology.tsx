import {
  Target,
  Activity,
  Gamepad2,
  LineChart,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { ScrollReveal } from '@/components/scroll-reveal'

const cards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Target,
    title: 'Personalización',
    text: 'Las clases se adaptan a tus necesidades, edad, nivel y objetivos.',
  },
  {
    icon: Activity,
    title: 'Práctica real',
    text: 'Actividades para hablar, escuchar, leer y escribir en contextos reales.',
  },
  {
    icon: Gamepad2,
    title: 'Aprendizaje dinámico',
    text: 'Recursos, juegos, conversación, ejercicios y experiencias para aprender sin aburrirte.',
  },
  {
    icon: LineChart,
    title: 'Seguimiento',
    text: 'Acompañamiento para que avances con claridad y confianza.',
  },
]

const steps = [
  { n: '1', label: 'Diagnóstico' },
  { n: '2', label: 'Plan de aprendizaje' },
  { n: '3', label: 'Clases prácticas' },
  { n: '4', label: 'Avance y refuerzo' },
]

const labels = ['Speak', 'Listen', 'Write', 'Read', 'Practice']

export function Methodology() {
  return (
    <section id="metodologia" className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Metodología"
            title="Una metodología {práctica y divertida}"
            subtitle="No se trata solo de memorizar. Se trata de usar el idioma."
          />
        </ScrollReveal>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {labels.map((l, idx) => (
            <ScrollReveal
              key={l}
              animation="scale-up"
              delay={idx * 50}
            >
              <span
                className="inline-block rounded-full border-2 border-brand-navy/15 bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brand-navy shadow-sm transition-all duration-300 hover:bg-brand-navy hover:text-white"
              >
                {l}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group h-full rounded-2xl border-2 border-brand-navy/10 bg-white p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-brand-navy"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-red group-hover:text-white shadow-sm">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <h3 className="font-heading text-xl text-brand-navy">{title}</h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-700">
                  {text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Process */}
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <ScrollReveal
              key={s.n}
              animation="fade-up"
              delay={i * 150}
            >
              <li
                className="group relative flex items-center gap-4 rounded-2xl bg-brand-navy p-5 text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red font-heading text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {s.n}
                </span>
                <span className="font-bold text-[15px] leading-tight">{s.label}</span>
                {i < steps.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-brand-yellow lg:block" />
                ) : null}
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
