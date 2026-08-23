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
    <section className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <ScrollReveal animation="scale-up" delay={200} className="relative">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#163A96] to-[#054BAB] border-4 border-[#ED0874] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <UserRound
              className="h-28 w-28 text-white/80 transition-transform duration-500 hover:scale-110"
              strokeWidth={1.4}
              aria-hidden
            />
            <span className="sr-only">
              Retrato del profesor Nelson Pérez Rojas
            </span>
          </div>
          <span className="absolute -bottom-4 left-4 rounded-2xl bg-[#ED0874] px-4 py-2 font-heading text-lg font-black text-white shadow-xl animate-float-fast ring-2 ring-white/20">
            +15 años enseñando
          </span>
        </ScrollReveal>

        <div>
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="inline-block rounded-full bg-[#FBCC2E] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#054BAB] shadow-sm">
              Liderazgo Académico
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-white text-balance">
              Experiencia real que impulsa <span className="text-[#FBCC2E]">tu aprendizaje</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-4 max-w-xl text-base sm:text-lg font-semibold leading-relaxed text-white/95">
              Big Master Language Center fue impulsado por el profesor Nelson
              Pérez Rojas, docente con más de 15 años de trayectoria en la enseñanza del inglés,
              liderando programas en colegios, universidades y preparación de exámenes internacionales.
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
                  className="group flex items-start gap-2.5 rounded-2xl border-2 border-white/20 bg-[#163A96] p-3.5 text-sm sm:text-base font-semibold text-white/95 transition-all duration-300 hover:border-[#ED0874]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ED0874] text-white transition-transform duration-300 group-hover:scale-110 shadow-md">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal animation="fade-up" delay={500} className="mt-8">
            <CtaButton variant="pink" size="lg" href="#metodologia">
              Conoce nuestra metodología
            </CtaButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
