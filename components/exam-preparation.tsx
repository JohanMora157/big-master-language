import { Check, Award } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const exams = ['IELTS', 'TOEFL', 'PET', 'Otros exámenes internacionales']

const includes = [
  'Diagnóstico de nivel',
  'Práctica guiada',
  'Simulacros o ejercicios tipo examen',
  'Estrategias de lectura, escucha, escritura y conversación',
  'Refuerzo de puntos débiles',
]

export function ExamPreparation() {
  return (
    <section id="examenes" className="bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            inverted
            eyebrow="Exámenes internacionales"
            title="Prepárate para {exámenes internacionales}"
            subtitle="Entrena con acompañamiento para presentar tus pruebas con más seguridad."
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] sm:text-[17px] font-medium leading-relaxed text-white/90">
            Big Master ofrece preparación para exámenes internacionales de
            idiomas, con enfoque en habilidades, práctica, análisis de preguntas y
            estrategias para mejorar tu desempeño.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam, idx) => (
            <ScrollReveal
              key={exam}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group h-full rounded-2xl bg-brand-yellow p-5 text-brand-navy shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-heading text-2xl leading-tight">
                  {exam}
                </h3>
                <p className="mt-1 text-[15px] font-semibold text-brand-navy/80">
                  Preparación enfocada en resultados.
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-white/10 bg-white/5 p-6">
            <h3 className="font-heading text-lg text-brand-yellow">
              Cada preparación incluye
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {includes.map((item, idx) => (
                <ScrollReveal
                  key={item}
                  animation="fade-up"
                  delay={idx * 75}
                >
                  <li
                    className="flex items-start gap-2 text-[15px] font-medium text-white/90"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-sm">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={400} className="mt-9 text-center">
          <CtaButton
            size="lg"
            variant="yellow"
            message="Hola Big Master, quiero prepararme para un examen internacional (IELTS / TOEFL / PET)."
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quiero prepararme para un examen
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
