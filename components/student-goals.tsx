import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { ScrollReveal } from '@/components/scroll-reveal'

const testimonials = [
  {
    name: 'Estudiante Big Master',
    role: 'Clases individuales 100% online',
    text: 'Las clases personalizadas me ayudaron a soltar el miedo al hablar. El profesor adapta cada lección a situaciones reales de mi trabajo y he avanzado muchísimo en fluidez.',
    stars: 5,
  },
  {
    name: 'Estudiante Big Master',
    role: 'Preparación examen internacional',
    text: 'La orientación con simulacros y estrategias específicas para cada sección de la prueba fue clave para lograr el puntaje que necesitaba para mi maestría.',
    stars: 5,
  },
  {
    name: 'Estudiante Big Master',
    role: 'Conversación y pronunciación',
    text: 'Excelente metodología y mucha paciencia. En poco tiempo mejoré mi pronunciación y ahora puedo participar en reuniones en inglés sin dudar.',
    stars: 5,
  },
  {
    name: 'Familia Big Master',
    role: 'Programa para niños y jóvenes',
    text: 'Las clases son dinámicas y motivantes. Mi hijo se conecta con gusto y ha desarrollado mucho vocabulario y confianza con el idioma.',
    stars: 5,
  },
]

export function StudentGoals() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#f0f4fa] py-16 sm:py-24 border-t border-[#054BAB]/10">
      <img
        src="/images/big-ben-clock.png"
        alt=""
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 hidden h-[86%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[6deg] scale-x-[-1] md:block"
        loading="lazy"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Testimonios"
            title="Historias de {nuestros estudiantes}"
            subtitle="Conoce las experiencias de estudiantes que han formado parte de Big Master y descubre qué destacan de su proceso de aprendizaje."
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {testimonials.map((t, index) => (
            <ScrollReveal
              key={index}
              animation="scale-up"
              delay={150 + index * 100}
              className="h-full"
            >
              <article className="group flex h-full flex-col justify-between rounded-3xl border-2 border-[#054BAB]/15 bg-white p-7 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:border-[#ED0874] hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-1 text-[#FBCC2E]">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ED0874]/10 text-[#ED0874] transition-transform duration-300 group-hover:scale-110">
                      <Quote className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] sm:text-[16px] font-medium leading-relaxed text-slate-700 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#054BAB] font-heading font-black text-white text-sm shadow-sm">
                    {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-[#054BAB] text-base leading-snug">
                      {t.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#ED0874]">
                      {t.role}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
