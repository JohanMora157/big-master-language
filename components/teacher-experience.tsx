import { Check, UserRound } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'

const highlights = [
  'Más de 15 años de experiencia docente',
  'Experiencia en colegios y universidades',
  'Preparación IELTS, TOEFL, PET y otros exámenes',
  'Clases individuales y grupales',
  'Enfoque personalizado y dinámico',
]

export function TeacherExperience() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <ScrollReveal animation="scale-up" delay={200} className="relative">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow to-[#ffbf00] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <UserRound
              className="h-28 w-28 text-brand-navy/70 transition-transform duration-500 hover:scale-110"
              strokeWidth={1.4}
              aria-hidden
            />
            <span className="sr-only">
              Retrato del profesor Nelson Pérez Rojas
            </span>
          </div>
          <span className="absolute -bottom-4 left-4 rounded-2xl bg-brand-red px-4 py-2 font-heading text-lg text-white shadow-lg animate-float-fast">
            +15 años enseñando
          </span>
        </ScrollReveal>

        <div>
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
              Nuestro equipo
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="mt-3 font-heading text-3xl leading-[1.05] text-white text-balance sm:text-4xl md:text-5xl">
              Experiencia que guía <span className="text-brand-yellow">tu aprendizaje</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-4 max-w-xl text-[16px] sm:text-[17px] font-medium leading-relaxed text-white/90">
              Big Master Language Center fue impulsado por el profesor Nelson
              Pérez Rojas, docente con amplia experiencia en enseñanza del inglés,
              clases con niños, jóvenes y adultos, preparación para exámenes
              internacionales y trabajo en instituciones educativas.
            </p>
          </ScrollReveal>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, idx) => (
              <ScrollReveal
                key={h}
                animation="fade-up"
                delay={idx * 100}
              >
                <li
                  className="group flex items-start gap-2 rounded-xl border-2 border-white/10 bg-white/5 p-3 text-[15px] font-medium text-white/95 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-yellow"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-navy transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal animation="fade-up" delay={500} className="mt-7">
            <CtaButton variant="yellow" size="lg" href="#metodologia">
              Conoce nuestra metodología
            </CtaButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
