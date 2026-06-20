import { Quote, Star, BookOpen } from 'lucide-react'
import { Sticker } from '@/components/brand'
import { PlaceholderImage } from '@/components/placeholder-image'
import { GraduationCap } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-transparent">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Tower"
        className="pointer-events-none absolute -left-10 bottom-0 hidden h-[90%] w-auto object-contain opacity-[0.15] mix-blend-multiply md:block"
        loading="lazy"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
              Quiénes somos
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="mt-3 font-heading text-3xl leading-[1.05] text-brand-navy text-balance sm:text-4xl md:text-5xl">
              Big Master Language Center
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-3 text-lg font-semibold text-brand-red">
              Aprendizaje de idiomas con innovación, personalización y diversión.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Big Master Language Center es una academia de idiomas en Bogotá que
              ayuda a estudiantes de diferentes edades a aprender inglés y otros
              idiomas de una forma práctica, dinámica y cercana.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Nuestro enfoque combina clases personalizadas, clases grupales,
              preparación para exámenes internacionales y experiencias educativas
              diferentes, como actividades de conversación y stand-up comedy en
              inglés.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <div className="mt-6 rounded-2xl border-2 border-brand-yellow bg-brand-cream p-5 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
              <Quote className="h-6 w-6 text-brand-red animate-pulse" />
              <p className="mt-2 font-heading text-xl leading-snug text-brand-navy text-balance">
                ¡Ven, estudia y aprende con Big Master Language Center!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <div className="mt-4 flex flex-wrap gap-2">
              <Sticker variant="navy">
                <Star className="h-3.5 w-3.5 text-brand-yellow animate-spin-slow" />
                Por algo nos están recomendando
              </Sticker>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative">
          <ScrollReveal animation="scale-up" delay={200}>
            <PlaceholderImage
              label="Estudiantes en clase de inglés en Bogotá"
              icon={GraduationCap}
              theme="yellow"
              className="aspect-[4/3] w-full"
              tag="Big Master"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
            />
          </ScrollReveal>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <ScrollReveal animation="scale-up" delay={350} className="h-full">
              <PlaceholderImage
                label="Recursos y material de aprendizaje"
                icon={BookOpen}
                theme="red"
                className="aspect-[4/3] h-full"
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={500} className="h-full">
              <PlaceholderImage
                label="Clase grupal dinámica"
                icon={Quote}
                theme="navy"
                className="aspect-[4/3] h-full"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
