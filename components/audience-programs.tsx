import { Baby, Backpack, Briefcase, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

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
    theme: 'bg-[#FBCC2E] text-[#054BAB]',
  },
  {
    icon: Backpack,
    title: 'Jóvenes',
    text: 'Refuerzo escolar, conversación, pronunciación, vocabulario y preparación para el futuro académico.',
    mention: 'También aplica para vacaciones bilingües y cursos intensivos.',
    theme: 'bg-[#ED0874] text-white',
  },
  {
    icon: Briefcase,
    title: 'Adultos',
    text: 'Inglés para trabajo, viajes, estudio, entrevistas, exámenes o crecimiento personal.',
    mention: 'Modalidad 100% online o presencial.',
    theme: 'bg-[#054BAB] text-white',
  },
]

export function AudiencePrograms() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading eyebrow="Por edades" title="Cursos para {cada etapa}" />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text, mention, theme }, idx) => (
            <ScrollReveal
              key={title}
              animation="scale-up"
              delay={idx * 150}
              className="h-full"
            >
              <article
                className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-brand-blue/15 bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ED0874] hover:shadow-xl"
              >
                <div className={`flex items-center gap-3 p-6 ${theme}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <h3 className="font-heading text-3xl font-black">{title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[15px] font-semibold leading-relaxed text-slate-700">{text}</p>
                  <p className="mt-4 rounded-xl bg-[#f0f4fa] px-3.5 py-2 text-[14px] font-bold text-[#054BAB] border border-[#054BAB]/10">
                    {mention}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} className="mt-10 text-center">
          <CtaButton
            size="lg"
            message="Hola Big Master, quiero consultar el programa ideal para mí o para mi hijo/a."
          >
            Consultar programa ideal
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
