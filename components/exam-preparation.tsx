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
    <section id="examenes" className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            inverted
            eyebrow="Exámenes Internacionales"
            title="Prepárate para {exámenes internacionales}"
            subtitle="Entrena con acompañamiento especializado para presentar tus pruebas con la máxima seguridad y puntuación."
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg font-semibold leading-relaxed text-white/95">
            Big Master ofrece preparación para exámenes internacionales de
            idiomas, con enfoque en habilidades, práctica, análisis de preguntas y
            estrategias efectivas para tu mejor desempeño.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam, idx) => (
            <ScrollReveal
              key={exam}
              animation="scale-up"
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="group flex h-full flex-col rounded-3xl border-2 border-white/20 bg-[#163A96] p-6 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-2xl"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ED0874] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                  <Award className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-2xl font-black text-white">
                  {exam}
                </h3>
                <p className="mt-2 text-[14px] font-medium text-white/85">
                  Preparación enfocada en tus objetivos.
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border-2 border-white/20 bg-[#163A96] p-7 shadow-xl">
            <h3 className="font-heading text-xl font-black text-[#FBCC2E]">
              Cada preparación incluye:
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {includes.map((item, idx) => (
                <ScrollReveal
                  key={item}
                  animation="fade-up"
                  delay={idx * 75}
                >
                  <li
                    className="flex items-start gap-2.5 text-[15px] font-semibold text-white/95"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ED0874] text-white shadow-sm">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
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
            variant="pink"
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
