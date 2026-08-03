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
    text: 'Desde principiantes hasta nivel avanzado.',
  },
  {
    icon: Laptop,
    title: 'Presencial y virtual',
    text: 'Aprende en Bogotá o 100% online.',
  },
  {
    icon: Globe,
    title: 'Exámenes globales',
    text: 'IELTS, TOEFL, PET y certificaciones.',
  },
  {
    icon: Tag,
    title: 'Clases accesibles',
    text: 'Clases personalizadas desde $10.000 / hr.',
  },
]

export function TrustBadges() {
  return (
    <section className="bg-[#054BAB] text-white border-y border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {badges.map(({ icon: Icon, title, text }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="group h-full rounded-2xl border-2 border-white/20 bg-[#163A96] p-4.5 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:border-[#ED0874] hover:shadow-xl">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#ED0874] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="font-heading text-base font-black leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-1 text-xs font-medium leading-snug text-white/85">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
