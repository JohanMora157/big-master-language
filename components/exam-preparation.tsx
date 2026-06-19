import { Check, Award, MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'

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
        <SectionHeading
          inverted
          eyebrow="Exámenes internacionales"
          title="Prepárate para exámenes internacionales"
          subtitle="Entrena con acompañamiento para presentar tus pruebas con más seguridad."
        />

        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-white/75">
          Big Master ofrece preparación para exámenes internacionales de
          idiomas, con enfoque en habilidades, práctica, análisis de preguntas y
          estrategias para mejorar tu desempeño.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam) => (
            <article
              key={exam}
              className="rounded-2xl bg-brand-yellow p-5 text-brand-navy shadow-lg transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-heading text-2xl leading-tight">
                {exam}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-navy/70">
                Preparación enfocada en resultados.
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-white/10 bg-white/5 p-6">
          <h3 className="font-heading text-lg text-brand-yellow">
            Cada preparación incluye
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-white/85"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 text-center">
          <CtaButton
            size="lg"
            variant="yellow"
            message="Hola Big Master, quiero prepararme para un examen internacional (IELTS / TOEFL / PET)."
          >
            <MessageCircle className="h-5 w-5" />
            Quiero prepararme para un examen
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
