import { CheckCircle2, Info, Sparkles } from 'lucide-react'
import { SectionHeading, Sticker } from '@/components/brand'
import { CtaButton } from '@/components/cta-button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

const modalities = [
  'Clases grupales', 'Programas para niños, jóvenes y adultos', 'Clases presenciales en Bogotá',
  'Programas intensivos', 'Programas vacacionales', 'Preparación para exámenes internacionales', 'Formación en otros idiomas',
]

export function Promotions() {
  return (
    <section id="promociones" className="relative overflow-hidden bg-[#054BAB] text-white brand-texture py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#ED0874]/25 bg-blob" /></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading eyebrow="Promociones" title="Clases personalizadas de inglés {desde $10.000 por hora}" subtitle="Aprovecha nuestra tarifa promocional para clases individuales y personalizadas 100% online desde $10.000 COP por hora." inverted />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-6 flex flex-wrap justify-center gap-2"><Sticker variant="pink">Clases individuales</Sticker><Sticker variant="yellow">Desde $10.000 / hora</Sticker><Sticker variant="cream">100% online</Sticker></div>
        </ScrollReveal>
        <ScrollReveal animation="scale-up" delay={300} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#ED0874] bg-[#163A96] p-6 shadow-2xl sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ED0874] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg"><Sparkles className="h-4 w-4 text-[#FBCC2E]" />Tarifa promocional</span>
                <h3 className="mt-4 font-heading text-3xl font-black leading-tight text-white sm:text-4xl">Clases adaptadas a tu nivel, objetivos y disponibilidad</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/90 sm:text-lg">Aprende inglés con clases individuales y personalizadas. Esta modalidad promocional está disponible 100% online desde $10.000 COP por hora.</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-md lg:col-span-5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-white/80">Desde</span>
                <div className="mt-2 flex items-baseline gap-1"><span className="font-heading text-5xl font-black text-[#FBCC2E] sm:text-6xl">$10.000</span><span className="text-sm font-bold text-white/80">COP / hora</span></div>
                <CtaButton variant="pink" size="lg" className="mt-6 w-full" message="Hola Big Master, quiero conocer las promociones disponibles."><WhatsAppIcon className="h-5 w-5" />Quiero conocer las promociones</CtaButton>
                <p className="mt-3 text-[11px] font-semibold text-white/70">Aplican términos, condiciones y disponibilidad.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border-2 border-white/20 bg-[#163A96] p-7 shadow-xl">
            <h3 className="font-heading text-2xl font-black text-[#FBCC2E]">También contamos con otras modalidades</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/85">Big Master ofrece diferentes programas según la edad, los objetivos y la disponibilidad:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">{modalities.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-white/95"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FBCC2E]" />{item}</li>)}</ul>
            <p className="mt-6 flex items-start gap-2 text-xs font-semibold text-white/70"><Info className="h-4 w-4 shrink-0 text-[#FBCC2E]" />Las tarifas, horarios y condiciones dependen del programa seleccionado.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
