import { Tag, ClipboardCheck, Zap, Info, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { SectionHeading, Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Promotions() {
  return (
    <section
      id="promociones"
      className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-16 sm:py-20"
    >
      {/* Background glowing blob */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#ED0874]/25 bg-blob" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Promociones Especiales"
            title="Aprende al precio {más accesible del mercado}"
            subtitle="Invierte en tu futuro bilingüe con ofertas diseñadas para adaptarse a tu presupuesto y horario."
            inverted
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Sticker variant="pink">100% Online</Sticker>
            <Sticker variant="yellow">Desde $10.000 / hr</Sticker>
            <Sticker variant="cream">Presencial en Bogotá</Sticker>
            <Sticker variant="pink">Cupos Limitados</Sticker>
          </div>
        </ScrollReveal>

        {/* Featured Main Promo Banner inspired by flyer */}
        <ScrollReveal animation="scale-up" delay={300} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#ED0874] bg-[#163A96] p-6 sm:p-10 shadow-2xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ED0874]/30 blur-2xl pointer-events-none" />
            
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ED0874] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg animate-pulse">
                  <Sparkles className="h-4 w-4 text-[#FBCC2E]" />
                  Promoción Destacada
                </span>

                <h3 className="mt-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  CLASES PERSONALIZADAS <span className="text-[#FBCC2E]">100% ONLINE</span>
                </h3>

                <p className="mt-3 text-base sm:text-lg font-medium text-white/90">
                  Aprende inglés de forma individual, acelerada y con horarios flexibles. La mejor calidad pedagógica con el precio más bajo.
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FBCC2E]" />
                    Atención 1 a 1 con el profesor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FBCC2E]" />
                    Horarios 100% flexibles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FBCC2E]" />
                    Para todos los niveles (A1 a C1)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FBCC2E]" />
                    Enfoque en speaking y fluidez
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center text-center lg:col-span-5 rounded-2xl border-2 border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <span className="text-xs font-extrabold uppercase tracking-widest text-white/80">
                  Tarifa Especial Promocional
                </span>
                
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-white/80">desde</span>
                  <span className="font-heading text-5xl font-black text-[#FBCC2E] sm:text-6xl">$10.000</span>
                  <span className="text-sm font-bold text-white/80">/ hora</span>
                </div>

                <span className="mt-1 text-xs font-bold text-[#ED0874] bg-white px-3 py-1 rounded-full shadow-sm">
                  ¡Las más económicas del mercado!
                </span>

                <div className="mt-6 w-full">
                  <CtaButton
                    variant="pink"
                    size="lg"
                    className="w-full"
                    message="Hola Big Master, quiero aprovechar la promoción de Clases Personalizadas 100% Online desde $10.000 la hora."
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Aprovechar esta promo en WhatsApp
                  </CtaButton>
                </div>

                <p className="mt-3 text-[11px] font-semibold text-white/70">
                  *Aplican términos y condiciones. Sujeto a disponibilidad de agenda.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary Promo Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ScrollReveal animation="scale-up" delay={400} className="h-full">
            <article className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-white/20 bg-[#163A96] p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#ED0874] hover:shadow-2xl">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED0874] text-white shadow-md transition-transform group-hover:scale-110">
                  <ClipboardCheck className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h4 className="mt-4 font-heading text-2xl font-black text-white">
                  Inscripciones Abiertas 2026
                </h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/85">
                  Cursos grupales y semipersonalizados para niños, jóvenes y adultos. Modalidad presencial en Bogotá y virtual.
                </p>
              </div>
              <div className="mt-6">
                <CtaButton
                  variant="yellow"
                  className="w-full"
                  message="Hola Big Master, quiero información de inscripciones abiertas y horarios para niños/jóvenes/adultos."
                >
                  Consultar horarios e inscripciones
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={500} className="h-full">
            <article className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-white/20 bg-[#163A96] p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#FBCC2E] hover:shadow-2xl">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBCC2E] text-[#054BAB] shadow-md transition-transform group-hover:scale-110">
                  <Zap className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h4 className="mt-4 font-heading text-2xl font-black text-white">
                  Cursos Intensivos y Vacacionales
                </h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/85">
                  Aprende rápido para viajes, empleo o refuerzo académico en módulos intensivos acelerados.
                </p>
              </div>
              <div className="mt-6">
                <CtaButton
                  variant="pink"
                  className="w-full"
                  message="Hola Big Master, quiero información de los cursos intensivos y acelerados."
                >
                  Preguntar por Cursos Intensivos
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={600}>
          <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold text-white/70">
            <Info className="h-4 w-4 shrink-0 text-[#FBCC2E]" />
            Las promociones y disponibilidad de cupos pueden variar. Asesoría directa e inmediata por WhatsApp.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
