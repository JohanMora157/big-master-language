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
    <section id="metodologia" className="bg-[#f0f4fa]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Metodología"
            title="Una metodología {práctica y divertida}"
            subtitle="No se trata solo de memorizar gramática. Se trata de hablar y usar el idioma desde la primera clase."
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
                className="inline-block rounded-full border-2 border-[#054BAB]/15 bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#054BAB] shadow-sm transition-all duration-300 hover:bg-[#ED0874] hover:text-white hover:border-[#ED0874]"
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
                className="group flex h-full flex-col rounded-3xl border-2 border-brand-blue/15 bg-white p-6 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED0874] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#FBCC2E] group-hover:text-[#054BAB]">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="font-heading text-xl font-black text-[#054BAB]">{title}</h3>
                <p className="mt-2 text-[15px] font-semibold leading-relaxed text-slate-700">
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
                className="group relative flex items-center gap-4 rounded-2xl bg-[#054BAB] p-5 text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ED0874] font-heading text-lg font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {s.n}
                </span>
                <span className="font-extrabold text-[15px] leading-tight text-white">{s.label}</span>
                {i < steps.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#FBCC2E] lg:block" />
                ) : null}
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
