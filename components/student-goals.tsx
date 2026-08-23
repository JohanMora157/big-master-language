import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const testimonials = [
  {
    name: 'Carolina Mendoza',
    role: 'Estudiante de Clases Personalizadas Online',
    location: 'Bogotá, Colombia',
    rating: 5,
    quote: 'Empecé las clases 1 a 1 para perder el miedo a hablar en mi trabajo. La flexibilidad de horarios y la paciencia del profesor me permitieron pasar mi primera entrevista de trabajo totalmente en inglés.',
    achievement: 'Aprobó entrevista laboral en inglés',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Mateo & familia',
    role: 'Padres de estudiante (11 años)',
    location: 'Bogotá, Colombia',
    rating: 5,
    quote: 'Buscábamos un lugar dinámico para nuestro hijo donde no se aburriera con gramática tradicional. Las clases son súper interactivas y su pronunciación ha mejorado muchísimo en pocos meses.',
    achievement: 'Mejor promedio en colegio bilingüe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Santiago Ríos',
    role: 'Preparación IELTS Acelerada',
    location: 'Modalidad Virtual',
    rating: 5,
    quote: 'Necesitaba el certificado IELTS para mi maestría en el exterior en tiempo récord. Con los simulacros y la estrategia de Big Master logré el puntaje que me exigían.',
    achievement: 'Puntaje de 7.5 en examen IELTS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Valeria Gómez',
    role: 'Experiencias & Stand-up Comedy',
    location: 'Bogotá, Colombia',
    rating: 5,
    quote: 'Asistir a los workshops y noches de conversación me ayudó a soltarme a hablar sin pensar en traducir en mi mente. ¡Es la forma más divertida de aprender!',
    achievement: 'Fluidez y soltura conversacional',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
  },
]

export function StudentGoals() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#f0f4fa] py-16 sm:py-24 border-t border-[#054BAB]/10">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 hidden h-[82%] sm:h-[86%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[6deg] scale-x-[-1] [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] md:block"
        loading="lazy"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Historias Reales"
            title="Lo que dicen nuestros {estudiantes}"
            subtitle="Conoce las experiencias de alumnos que han alcanzado sus metas personales y profesionales con Big Master."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={t.name}
              animation="scale-up"
              delay={idx * 120}
              className="h-full"
            >
              <article className="group flex h-full flex-col justify-between rounded-3xl border-2 border-[#054BAB]/15 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-2xl">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-13 w-13 rounded-full object-cover ring-2 ring-[#ED0874] shadow-md"
                      />
                      <div>
                        <h3 className="font-heading text-xl font-black text-[#054BAB]">
                          {t.name}
                        </h3>
                        <p className="text-xs font-bold text-slate-500">{t.role} · {t.location}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-[#ED0874]/30 shrink-0" />
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FBCC2E] text-[#FBCC2E]" />
                    ))}
                  </div>

                  <p className="mt-4 text-base sm:text-lg font-semibold leading-relaxed text-slate-700 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#054BAB]/10 px-3.5 py-2 text-xs sm:text-sm font-extrabold text-[#054BAB]">
                  <CheckCircle2 className="h-4 w-4 text-[#ED0874] shrink-0" />
                  <span>Logro: {t.achievement}</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={500} className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-3xl border-2 border-[#ED0874] bg-[#054BAB] p-8 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
              ¿Listo para escribir tu propia historia de éxito?
            </h3>
            <p className="text-base font-semibold text-white/90">
              Inicia con clases personalizadas desde $10.000 la hora y alcanza tu fluidez.
            </p>
            <CtaButton
              size="lg"
              variant="pink"
              message="Hola Big Master, leí los testimonios y quiero comenzar mi proceso de lecciones de inglés."
            >
              <WhatsAppIcon className="h-5 w-5" />
              Comenzar mi proceso por WhatsApp
            </CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
