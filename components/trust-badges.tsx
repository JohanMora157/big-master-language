import {
  Users,
  BarChart3,
  Laptop,
  Globe,
  Tag,
  type LucideIcon,
} from 'lucide-react'

const badges: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Users,
    title: 'Todas las edades',
    text: 'Cursos para niños, jóvenes y adultos.',
  },
  {
    icon: BarChart3,
    title: 'Todos los niveles',
    text: 'Desde principiantes hasta estudiantes avanzados.',
  },
  {
    icon: Laptop,
    title: 'Presencial y virtual',
    text: 'Aprende desde Bogotá o desde casa.',
  },
  {
    icon: Globe,
    title: 'Preparación internacional',
    text: 'IELTS, TOEFL, PET y otros exámenes.',
  },
  {
    icon: Tag,
    title: 'Clases accesibles',
    text: 'Pregunta por promociones desde $9.000.',
  },
]

export function TrustBadges() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {badges.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border-2 border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-1 hover:border-brand-yellow"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="font-heading text-base leading-tight text-white">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-snug text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
