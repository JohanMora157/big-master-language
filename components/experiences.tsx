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

const cards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Mic,
    title: 'Stand-up comedy',
    text: 'Eventos para practicar escucha, vocabulario, humor y comprensión en inglés de una forma diferente.',
  },
  {
    icon: MessagesSquare,
    title: 'Conversation activities',
    text: 'Espacios para practicar speaking, pronunciación y confianza.',
  },
  {
    icon: Sun,
    title: 'Bilingual vacations',
    text: 'Programas de vacaciones para niños y jóvenes, con actividades educativas y recreativas.',
  },
  {
    icon: Presentation,
    title: 'Workshops',
    text: 'Talleres de lectura, pronunciación, vocabulario, música, cultura y conversación.',
  },
]

export function Experiences() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-yellow/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          inverted
          eyebrow="Experiencias"
          title="Aprende inglés también con experiencias"
          subtitle="El idioma se aprende mejor cuando se usa en contextos reales y divertidos."
        />

        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-white/70">
          Big Master ha creado experiencias diferentes como stand-up comedy en
          inglés y español, actividades de conversación y espacios donde
          estudiantes y profesores aprenden mientras se divierten.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border-2 border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-brand-yellow"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white transition-colors group-hover:bg-brand-yellow group-hover:text-brand-navy">
                <Icon className="h-6 w-6" strokeWidth={2.1} />
              </span>
              <h3 className="font-heading text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaButton
            size="lg"
            variant="yellow"
            message="Hola Big Master, quiero preguntar por las próximas actividades y eventos."
          >
            <Ticket className="h-5 w-5" />
            Preguntar por próximas actividades
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
