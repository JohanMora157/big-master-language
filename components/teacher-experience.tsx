import { Check, UserRound } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const highlights = [
  'Más de 15 años de experiencia docente',
  'Experiencia en colegios y universidades',
  'Preparación IELTS, TOEFL, PET y otros exámenes',
  'Clases individuales y grupales',
  'Enfoque personalizado y dinámico',
]

export function TeacherExperience() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div className="relative">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow to-[#ffbf00] shadow-2xl">
            <UserRound
              className="h-28 w-28 text-brand-navy/70"
              strokeWidth={1.4}
              aria-hidden
            />
            <span className="sr-only">
              Retrato del profesor Nelson Pérez Rojas
            </span>
          </div>
          <span className="absolute -bottom-4 left-4 rounded-2xl bg-brand-red px-4 py-2 font-heading text-lg text-white shadow-lg">
            +15 años enseñando
          </span>
        </div>

        <div>
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
            Nuestro equipo
          </span>
          <h2 className="mt-3 font-heading text-3xl leading-[1.05] text-white text-balance sm:text-4xl md:text-5xl">
            Experiencia que guía tu aprendizaje
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/75">
            Big Master Language Center fue impulsado por el profesor Nelson
            Pérez Rojas, docente con amplia experiencia en enseñanza del inglés,
            clases con niños, jóvenes y adultos, preparación para exámenes
            internacionales y trabajo en instituciones educativas.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-xl border-2 border-white/10 bg-white/5 p-3 text-sm text-white/90"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <CtaButton variant="yellow" size="lg" href="#metodologia">
              Conoce nuestra metodología
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
