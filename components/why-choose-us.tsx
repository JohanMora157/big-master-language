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
    title: 'Plan 100% a tu medida',
    text: 'Avanzas según tu velocidad de aprendizaje y objetivos profesionales o personales.',
  },
  {
    icon: Smile,
    title: 'Clases conversacionales',
    text: 'Aprenderás a expresarte con fluidez sin depender de traducciones mentales estresantes.',
  },
  {
    icon: GraduationCap,
    title: 'Docentes calificados',
    text: 'Profesores capacitados pedagógicamente para hacer cada sesión dinámica e interactiva.',
  },
  {
    icon: Rocket,
    title: 'Acompañamiento continuo',
    text: 'Seguimiento de tu progreso con retroalimentación constante en cada módulo.',
  },
  {
    icon: Shuffle,
    title: 'Flexibilidad de horario',
    text: 'Reprograma o agenda tus lecciones según tu disponibilidad semanal.',
  },
  {
    icon: PiggyBank,
    title: 'Inversión transparente',
    text: 'Planes económicos desde $10.000 / hr sin cláusulas ocultas ni amarres.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4fa] py-16 sm:py-20">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 hidden h-[82%] sm:h-[86%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[-6deg] [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] md:block"
        loading="lazy"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Ventajas Exclusivas"
            title="¿Por qué elegir {Big Master}?"
            subtitle="Diseñamos una experiencia educativa transparente, enfocada en resultados reales y en tu tranquilidad."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group flex h-full gap-4 rounded-3xl border-2 border-[#054BAB]/15 bg-white p-6 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ED0874] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#FBCC2E] group-hover:text-[#054BAB] shadow-md">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-extrabold text-[#054BAB] leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] font-semibold leading-relaxed text-slate-700">
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
