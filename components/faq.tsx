'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'

const faqs = [
  {
    q: '¿Qué idiomas ofrece Big Master?',
    a: 'Ofrecemos principalmente formación en inglés, y contamos con opciones en otros idiomas como francés y alemán según disponibilidad.',
  },
  {
    q: '¿Las clases son virtuales o presenciales?',
    a: 'Contamos con opciones 100% online y clases presenciales en Bogotá, según el programa que elijas.',
  },
  {
    q: '¿La promoción de $10.000 aplica para todas las clases?',
    a: 'La tarifa promocional desde $10.000 COP por hora corresponde a clases individuales y personalizadas 100% online. Las clases grupales y presenciales corresponden a modalidades diferentes.',
  },
  {
    q: '¿Puedo empezar desde cero?',
    a: 'Sí. Los contenidos y el ritmo de aprendizaje se adaptan a tu nivel, ideales si estás comenzando desde las bases.',
  },
  {
    q: '¿Tienen clases para niños y jóvenes?',
    a: 'Sí. Disponemos de programas especializados para niños, jóvenes y adultos con actividades acordes a cada etapa.',
  },
  {
    q: '¿Preparan para exámenes internacionales?',
    a: 'Sí. Ofrecemos preparación para exámenes como IELTS, TOEFL, PET y FCE, sujeta a la disponibilidad del programa.',
  },
  {
    q: '¿Cómo puedo conocer los horarios disponibles?',
    a: 'Escríbenos por WhatsApp y nuestro equipo te orientará con los horarios disponibles de acuerdo con tu objetivo y modalidad.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-transparent">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 hidden h-[82%] sm:h-[86%] w-auto object-contain opacity-[0.12] mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] md:block"
        loading="lazy"
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus {dudas}" />
        </ScrollReveal>

        <ul className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal
                key={item.q}
                animation="fade-up"
                delay={i * 75}
              >
                <li
                  className={cn(
                    'overflow-hidden rounded-2xl border-2 transition-all duration-300',
                    isOpen
                      ? 'border-[#ED0874] bg-[#fff] shadow-md'
                      : 'border-slate-200 bg-white hover:border-[#FBCC2E]',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[16px] sm:text-[17px] text-[#054BAB]">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-[#ED0874] transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-350 ease-in-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[15px] font-medium leading-relaxed text-slate-700">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
