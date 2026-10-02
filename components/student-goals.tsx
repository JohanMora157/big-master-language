import { MessageCircle, Target, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { ScrollReveal } from '@/components/scroll-reveal'

const storyTopics = [
  { icon: Target, title: 'Sus objetivos', text: 'Cada estudiante comienza su proceso con un objetivo diferente.' },
  { icon: MessageCircle, title: 'Sus experiencias', text: 'Compartiremos cómo ha sido su proceso de aprendizaje en Big Master.' },
  { icon: Quote, title: 'Sus opiniones', text: 'Conocerás sus opiniones sobre las clases y actividades realizadas.' },
]

export function StudentGoals() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-[#f0f4fa] py-16 sm:py-24 border-t border-[#054BAB]/10">
      <img src="/images/big-ben-clock.png" alt="" className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 hidden h-[86%] w-auto object-contain opacity-[0.12] mix-blend-multiply rotate-[6deg] scale-x-[-1] md:block" loading="lazy" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Historias de nuestros estudiantes"
            title="Conoce las experiencias de {nuestra comunidad}"
            subtitle="En esta sección compartiremos testimonios y experiencias reales de estudiantes que han formado parte de Big Master y quieren contar cómo ha sido su proceso de aprendizaje."
          />
        </ScrollReveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {storyTopics.map(({ icon: Icon, title, text }, index) => (
            <ScrollReveal key={title} animation="scale-up" delay={200 + index * 100} className="h-full">
              <article className="flex h-full flex-col items-center rounded-3xl border-2 border-[#054BAB]/15 bg-white p-6 text-center shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED0874] text-white shadow-md"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-heading text-xl font-black text-[#054BAB]">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
