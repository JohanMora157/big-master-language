import {
  Check,
  MapPin,
  Mic,
  Headphones,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { PlaceholderImage } from '@/components/placeholder-image'
import { Users, GraduationCap, Laptop } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const heroHighlights = [
  'Aprende a tu propio ritmo con lecciones 1 a 1',
  'Horarios adaptados a tu trabajo o estudio',
  'Enfoque 100% conversacional desde la primera clase',
  'Profesores con amplia experiencia pedagógica',
]

const floatingWords = [
  { text: 'Speak English!', className: 'top-4 left-2 rotate-[-4deg]' },
  { text: '100% Online', className: 'top-2 right-6 rotate-[4deg]' },
  { text: 'Listen & Practice', className: 'bottom-12 left-2 rotate-[3deg]' },
  { text: "Let's learn!", className: 'bottom-2 right-4 rotate-[-3deg]' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative text watermarks in background */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-10">
        <span className="watermark-text absolute -top-10 -left-10 text-[140px] sm:text-[180px]">
          INGLÉS
        </span>
        <span className="watermark-text absolute top-1/2 -right-20 -translate-y-1/2 text-[120px] sm:text-[160px]">
          ONLINE
        </span>
        <span className="watermark-text absolute -bottom-10 left-1/4 text-[130px] sm:text-[170px]">
          CLASSES
        </span>
      </div>

      {/* Glowing background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-[#ED0874]/30 bg-blob" />
        <div className="absolute top-1/2 -right-20 h-[600px] w-[600px] rounded-full bg-[#FBCC2E]/20 bg-blob" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#FBCC2E] backdrop-blur-md ring-1 ring-white/20 shadow-md">
              <MapPin className="h-3.5 w-3.5 animate-pulse text-[#ED0874]" />
              Academia de Idiomas · Bogotá &amp; Online
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white text-balance tracking-tight">
              Aprende inglés con clases personalizadas y{' '}
              <span className="inline-block text-[#FBCC2E] font-black">
                100% online
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <div className="mt-5 inline-flex items-center gap-3.5 rounded-2xl border-2 border-[#ED0874] bg-[#163A96]/95 p-3.5 sm:px-5 sm:py-3.5 shadow-2xl text-white">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ED0874] text-[#FBCC2E] shadow-md">
                <Zap className="h-6 w-6 animate-bounce" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white/90">
                    Tarifa promocional desde
                  </span>
                  <span className="rounded-full bg-[#ED0874] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-black uppercase text-white shadow-sm">
                    ¡La más económica!
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#FBCC2E] leading-tight mt-0.5">
                  $10.000 <span className="text-xs sm:text-sm font-bold text-white/90">/ hora</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-5 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/95 text-pretty font-semibold">
              Desarrolla tu fluidez de forma práctica. Diseñamos un plan de estudio a tu medida con profesores calificados y horarios totalmente adaptables.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-white/95"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ED0874] text-white shadow-md">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <CtaButton
                size="lg"
                variant="pink"
                message="Hola Big Master, quiero recibir información por WhatsApp sobre las clases personalizadas online desde $10.000 la hora."
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quiero información por WhatsApp
              </CtaButton>
              <CtaButton size="lg" variant="outline" href="#promociones">
                Ver promociones
              </CtaButton>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Sticker variant="pink">100% Online</Sticker>
              <Sticker variant="yellow">Desde $10.000 / hr</Sticker>
              <Sticker variant="cream">Presencial en Bogotá</Sticker>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual collage */}
        <div className="relative lg:col-span-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ScrollReveal animation="scale-up" delay={200} className="h-full">
              <PlaceholderImage
                label="Práctica individual 1 a 1"
                icon={GraduationCap}
                theme="navy"
                className="aspect-[4/5] h-full ring-4 ring-[#ED0874]/30 shadow-xl"
                tag="Speaking"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={350} className="h-full">
              <PlaceholderImage
                label="Profesores calificados"
                icon={Users}
                theme="red"
                className="mt-6 aspect-[4/5] h-full ring-4 ring-[#FBCC2E]/40 shadow-xl"
                tag="Personalizado"
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={500} className="h-full">
              <PlaceholderImage
                label="Pronunciación y fluidez"
                icon={Mic}
                theme="cream"
                className="aspect-[4/5] h-full ring-4 ring-white/30 shadow-xl"
                tag="Fluidez"
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={650} className="h-full">
              <PlaceholderImage
                label="Aprende desde casa"
                icon={Laptop}
                theme="navy"
                className="mt-6 aspect-[4/5] h-full ring-4 ring-[#ED0874]/40 shadow-xl"
                tag="Online"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
              />
            </ScrollReveal>
          </div>

          {/* Floating English words badges */}
          {floatingWords.map((w, idx) => {
            const floatClass = idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-medium'
            return (
              <ScrollReveal
                key={w.text}
                animation="fade-in"
                delay={800 + idx * 100}
                className={`absolute z-10 ${w.className}`}
              >
                <span className={`pointer-events-none inline-block rounded-full bg-white px-3.5 py-1.5 text-xs font-black text-[#054BAB] shadow-xl ring-2 ring-[#ED0874]/30 ${floatClass}`}>
                  {w.text}
                </span>
              </ScrollReveal>
            )
          })}

          <ScrollReveal
            animation="scale-up"
            delay={900}
            className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED0874] px-4 py-2 text-xs font-extrabold text-white shadow-2xl ring-4 ring-white/30 animate-float-fast">
              <Sparkles className="h-4 w-4 text-[#FBCC2E]" />
              <Headphones className="h-4 w-4" />
              Practice makes progress
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
