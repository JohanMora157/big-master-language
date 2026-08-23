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
    text: 'Lecciones adaptadas 1 a 1 según tus metas, ritmo y nivel actual.',
  },
  {
    icon: Activity,
    title: 'Práctica real',
    text: 'Diálogos activos y conversación real desde el primer día.',
  },
  {
    icon: Gamepad2,
    title: 'Aprendizaje dinámico',
    text: 'Recursos interactivos y experiencias para aprender con motivación.',
  },
  {
    icon: LineChart,
    title: 'Seguimiento',
    text: 'Evaluación de avances continuos con retroalimentación clara.',
  },
]

const steps = [
  { n: '1', label: 'Diagnóstico Inicial' },
  { n: '2', label: 'Plan a tu Medida' },
  { n: '3', label: 'Clases Prácticas' },
  { n: '4', label: 'Evaluación y Avance' },
]

const labels = ['Speak', 'Listen', 'Write', 'Read', 'Practice']

export function Methodology() {
  return (
    <section id="metodologia" className="bg-[#f0f4fa] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Metodología Práctica"
            title="Metodología 100% {interactiva y efectiva}"
            subtitle="Nos enfocamos en el uso real del idioma. Habla inglés con fluidez y seguridad desde tu primera lección."
          />
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {labels.map((l, idx) => (
            <ScrollReveal
              key={l}
              animation="scale-up"
              delay={idx * 50}
            >
              <span
                className="inline-block rounded-full border-2 border-[#054BAB]/20 bg-white px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#054BAB] shadow-sm transition-all duration-300 hover:bg-[#ED0874] hover:text-white hover:border-[#ED0874]"
              >
                {l}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group flex h-full flex-col justify-between rounded-3xl border-3 border-brand-blue/15 bg-white p-7 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-2xl"
              >
                <div>
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ED0874] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#FBCC2E] group-hover:text-[#054BAB]">
                    <Icon className="h-7 w-7" strokeWidth={2.3} />
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-black text-[#054BAB] tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg font-bold leading-snug text-slate-700">
                    {text}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Process */}
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <ScrollReveal
              key={s.n}
              animation="fade-up"
              delay={i * 150}
            >
              <li
                className="group relative flex items-center gap-4 rounded-2xl bg-[#054BAB] p-5 text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ED0874] font-heading text-xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {s.n}
                </span>
                <span className="font-black text-base sm:text-lg leading-tight text-white">{s.label}</span>
                {i < steps.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#FBCC2E] lg:block" />
                ) : null}
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
