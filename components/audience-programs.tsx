import { Baby, Backpack, Briefcase, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'

const audiences: {
  icon: LucideIcon
  title: string
  text: string
  mention: string
  theme: string
}[] = [
  {
    icon: Baby,
    title: 'Niños',
    text: 'Clases dinámicas, visuales y participativas para que los más pequeños se acerquen al inglés de forma natural.',
    mention: 'Programas para pequeños de casa, según disponibilidad.',
    theme: 'bg-brand-yellow text-brand-navy',
  },
  {
    icon: Backpack,
    title: 'Jóvenes',
    text: 'Refuerzo escolar, conversación, pronunciación, vocabulario y preparación para el futuro académico.',
    mention: 'También aplica para vacaciones bilingües y cursos intensivos.',
    theme: 'bg-brand-red text-white',
  },
  {
    icon: Briefcase,
    title: 'Adultos',
    text: 'Inglés para trabajo, viajes, estudio, entrevistas, exámenes o crecimiento personal.',
    mention: 'Modalidad presencial o virtual.',
    theme: 'bg-brand-navy text-white',
  },
]

export function AudiencePrograms() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="Por edades" title="Cursos para cada etapa" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text, mention, theme }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-3xl border-2 border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`flex items-center gap-3 p-6 ${theme}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <h3 className="font-heading text-3xl">{title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="leading-relaxed text-muted-foreground">{text}</p>
                <p className="mt-3 rounded-lg bg-brand-cream px-3 py-2 text-sm font-medium text-brand-navy">
                  {mention}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaButton
            size="lg"
            message="Hola Big Master, quiero consultar el programa ideal para mí o para mi hijo/a."
          >
            Consultar programa ideal
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
