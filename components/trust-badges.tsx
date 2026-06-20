import {
  Users,
  BarChart3,
  Laptop,
  Globe,
  Tag,
  type LucideIcon,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

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
          {badges.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="group h-full rounded-2xl border-2 border-white/10 bg-white/5 p-4 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:border-brand-yellow hover:shadow-lg hover:shadow-brand-yellow/10">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="font-heading text-base leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-white/70">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
