import { Quote, Star, BookOpen } from 'lucide-react'
import { Sticker } from '@/components/brand'
import { PlaceholderImage } from '@/components/placeholder-image'
import { GraduationCap } from 'lucide-react'

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
          <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
            Quiénes somos
          </span>
          <h2 className="mt-3 font-heading text-3xl leading-[1.05] text-brand-navy text-balance sm:text-4xl md:text-5xl">
            Big Master Language Center
          </h2>
          <p className="mt-3 text-lg font-semibold text-brand-red">
            Aprendizaje de idiomas con innovación, personalización y diversión.
          </p>
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

          <div className="mt-6 rounded-2xl border-2 border-brand-yellow bg-brand-cream p-5">
            <Quote className="h-6 w-6 text-brand-red" />
            <p className="mt-2 font-heading text-xl leading-snug text-brand-navy text-balance">
              ¡Ven, estudia y aprende con Big Master Language Center!
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Sticker variant="navy">
              <Star className="h-3.5 w-3.5" />
              Por algo nos están recomendando
            </Sticker>
          </div>
        </div>

        <div className="relative">
          <PlaceholderImage
            label="Estudiantes en clase de inglés en Bogotá"
            icon={GraduationCap}
            theme="yellow"
            className="aspect-[4/3]"
            tag="Big Master"
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <PlaceholderImage
              label="Recursos y material de aprendizaje"
              icon={BookOpen}
              theme="red"
              className="aspect-[4/3]"
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
            />
            <PlaceholderImage
              label="Clase grupal dinámica"
              icon={Quote}
              theme="navy"
              className="aspect-[4/3]"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
