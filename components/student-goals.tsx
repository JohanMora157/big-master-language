import {
  MessageSquareHeart,
  Award,
  Baby,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

const goals: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageSquareHeart,
    title: 'Quiero hablar con más confianza',
    text: 'Para estudiantes que entienden algo de inglés, pero necesitan practicar conversación.',
  },
  {
    icon: Award,
    title: 'Necesito prepararme para un examen',
    text: 'Ideal para quienes buscan IELTS, TOEFL, PET u otra certificación.',
  },
  {
    icon: Baby,
    title: 'Quiero que mi hijo aprenda inglés',
    text: 'Programas para niños y jóvenes con actividades dinámicas.',
  },
  {
    icon: Briefcase,
    title: 'Necesito inglés para trabajar',
    text: 'Clases enfocadas en vocabulario, entrevistas, speaking y comunicación profesional.',
  },
]

export function StudentGoals() {
  return (
    <section className="relative overflow-hidden bg-muted/40">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -right-12 top-0 hidden h-[100%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[6deg] scale-x-[-1] md:block"
        loading="lazy"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Tus objetivos"
            title="Lo que buscan nuestros {estudiantes}"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group h-full rounded-2xl border-2 border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:border-brand-yellow hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-red group-hover:text-white shadow-sm">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <h3 className="font-heading text-lg leading-tight text-brand-navy">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-700">
                  {text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-heading text-xl text-brand-navy text-balance">
            ¿Te identificas con alguno? Escríbenos y te orientamos.
          </p>
          <CtaButton
            size="lg"
            message="Hola Big Master, me identifico con uno de los objetivos y quiero recibir orientación."
          >
            Recibir orientación por WhatsApp
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
