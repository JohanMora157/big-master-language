import { User, Users, School, Laptop, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

const modalities: {
  icon: LucideIcon
  title: string
  text: string
}[] = [
  {
    icon: User,
    title: 'Clases personalizadas',
    text: 'Un plan adaptado a tu nivel, ritmo y objetivo. Ideal si necesitas avanzar rápido o prepararte para una meta específica.',
  },
  {
    icon: Users,
    title: 'Clases grupales',
    text: 'Aprende con otros estudiantes, practica conversación y mantén la motivación.',
  },
  {
    icon: School,
    title: 'Clases presenciales',
    text: 'Modalidad presencial en Bogotá, según disponibilidad de horarios y grupos.',
  },
  {
    icon: Laptop,
    title: 'Clases virtuales',
    text: 'Estudia desde casa con acompañamiento y actividades prácticas.',
  },
]

export function Modalities() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -right-16 bottom-0 hidden h-[95%] w-auto object-contain opacity-[0.15] mix-blend-multiply scale-x-[-1] md:block"
        loading="lazy"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Modalidades"
            title="Escoge cómo {quieres aprender}"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group h-full rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:border-brand-yellow hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-navy shadow-sm">
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

        <ScrollReveal animation="fade-up" delay={500} className="mt-10 text-center">
          <CtaButton
            size="lg"
            variant="navy"
            message="Hola Big Master, quiero preguntar por los horarios disponibles."
          >
            Preguntar por horarios
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
