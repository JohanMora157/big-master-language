import { User, Users, School, Laptop, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'

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
        <SectionHeading
          eyebrow="Modalidades"
          title="Escoge cómo quieres aprender"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border-2 border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white transition-colors group-hover:bg-brand-navy">
                <Icon className="h-6 w-6" strokeWidth={2.1} />
              </span>
              <h3 className="font-heading text-xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaButton
            size="lg"
            variant="navy"
            message="Hola Big Master, quiero preguntar por los horarios disponibles."
          >
            Preguntar por horarios
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
