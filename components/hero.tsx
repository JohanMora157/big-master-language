import {
  Check,
  MapPin,
  Mic,
  Headphones,
  Sparkles,
} from 'lucide-react'
import { Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { PlaceholderImage } from '@/components/placeholder-image'
import { Users, GraduationCap, Laptop } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const bullets = [
  'Cursos para todas las edades y niveles',
  'Clases personalizadas y grupales',
  'Modalidad presencial y virtual',
  'Preparación IELTS, TOEFL, PET y más',
  'Promociones desde $9.000',
]

const floatingWords = [
  { text: 'Speak', className: 'top-6 left-4 rotate-[-6deg]' },
  { text: 'Listen', className: 'top-2 right-10 rotate-[5deg]' },
  { text: 'Practice', className: 'bottom-10 left-2 rotate-[4deg]' },
  { text: "Let's learn!", className: 'bottom-2 right-6 rotate-[-4deg]' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-yellow brand-texture"
    >
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Tower"
        className="pointer-events-none absolute -right-6 top-0 hidden h-[120%] w-auto object-contain opacity-[0.15] mix-blend-multiply lg:block"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow shadow-sm">
              <MapPin className="h-3.5 w-3.5 animate-pulse" />
              Academia de idiomas en Bogotá
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="mt-5 font-heading text-4xl leading-[1.02] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
              Aprende inglés con clases dinámicas, personalizadas y{' '}
              <span className="relative inline-block text-brand-red">
                accesibles
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-navy/80 text-pretty sm:text-lg">
              Cursos de inglés para niños, jóvenes y adultos. Clases presenciales
              y virtuales, preparación para exámenes internacionales y una
              metodología práctica para hablar con más confianza.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm font-medium text-brand-navy"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-sm">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton
                size="lg"
                message="Hola Big Master, quiero información por WhatsApp sobre los cursos de inglés."
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quiero información por WhatsApp
              </CtaButton>
              <CtaButton size="lg" variant="outline" href="#cursos">
                Ver cursos
              </CtaButton>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <p className="mt-4 text-sm font-medium text-brand-navy/70">
              Respuesta por WhatsApp · Bogotá y clases online
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Sticker variant="red">English for everyone</Sticker>
              <Sticker variant="navy">Desde $9.000</Sticker>
              <Sticker variant="cream">Online &amp; presencial</Sticker>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ScrollReveal animation="scale-up" delay={200} className="h-full">
              <PlaceholderImage
                label="Estudiante practicando con su cuaderno"
                icon={GraduationCap}
                theme="navy"
                className="aspect-[4/5] h-full"
                tag="Speaking"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={350} className="h-full">
              <PlaceholderImage
                label="Profesor explicando en clase"
                icon={Users}
                theme="red"
                className="mt-6 aspect-[4/5] h-full"
                tag="Práctica"
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={500} className="h-full">
              <PlaceholderImage
                label="Práctica de conversación y pronunciación"
                icon={Mic}
                theme="cream"
                className="aspect-[4/5] h-full"
                tag="Confidence"
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={650} className="h-full">
              <PlaceholderImage
                label="Clase virtual desde casa"
                icon={Laptop}
                theme="navy"
                className="mt-6 aspect-[4/5] h-full"
                tag="Online"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
          </div>

          {/* Floating English words */}
          {floatingWords.map((w, idx) => {
            const floatClass = idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-medium'
            return (
              <ScrollReveal
                key={w.text}
                animation="fade-in"
                delay={800 + idx * 100}
                className={`absolute z-10 ${w.className}`}
              >
                <span className={`pointer-events-none inline-block rounded-full bg-white px-3 py-1 text-xs font-extrabold text-brand-navy shadow-lg ring-1 ring-brand-navy/10 ${floatClass}`}>
                  {w.text}
                </span>
              </ScrollReveal>
            )
          })}

          <ScrollReveal
            animation="scale-up"
            delay={900}
            className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold text-white shadow-lg animate-float-fast">
              <Sparkles className="h-3.5 w-3.5" />
              <Headphones className="h-3.5 w-3.5" />
              Practice makes progress
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
