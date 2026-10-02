import {
  Mic,
  MessagesSquare,
  Sun,
  Presentation,
  Ticket,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

const cards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Mic,
    title: 'Stand-up comedy',
    text: 'Una experiencia para interactuar con el inglés a través del humor, la escucha y el vocabulario.',
  },
  {
    icon: MessagesSquare,
    title: 'Conversation activities',
    text: 'Espacios para practicar conversación real, pronunciación y comunicación en diferentes contextos.',
  },
  {
    icon: Sun,
    title: 'Bilingual vacations',
    text: 'Programas y actividades bilingües y vacacionales de acuerdo con la programación disponible.',
  },
  {
    icon: Presentation,
    title: 'Workshops',
    text: 'Talleres de pronunciación, lectura, vocabulario, música y cultura.',
  },
]

export function Experiences() {
  return (
    <section className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-16 sm:py-20">
      {/* Background glowing blob */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#ED0874]/25 bg-blob" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            inverted
            eyebrow="Experiencias"
            title="Aprende el idioma también {fuera de la clase}"
            subtitle="Desarrollamos actividades que permiten utilizar el inglés en contextos diferentes y de una manera más dinámica."
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg font-semibold leading-relaxed text-white/95">
            Las experiencias complementan el proceso de aprendizaje y ofrecen
            oportunidades para practicar, participar y disfrutar el idioma.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group flex h-full flex-col rounded-3xl border-2 border-white/20 bg-[#163A96] p-6 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:border-[#ED0874] hover:shadow-2xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED0874] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#FBCC2E] group-hover:text-[#054BAB]">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="font-heading text-xl font-extrabold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-[14px] sm:text-[15px] font-medium leading-relaxed text-white/90">
                  {text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} className="mt-10 text-center">
          <CtaButton
            size="lg"
            variant="pink"
            message="Hola Big Master, quiero preguntar por las próximas actividades, talleres y eventos de experiencias."
          >
            <Ticket className="h-5 w-5" />
            Preguntar por próximas actividades
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
