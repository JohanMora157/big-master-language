'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/brand'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'

const faqs = [
  {
    q: '¿Qué idiomas enseñan?',
    a: 'El enfoque principal es inglés, pero también puedes preguntar por francés, alemán y otros idiomas disponibles.',
  },
  {
    q: '¿Las clases son presenciales o virtuales?',
    a: 'Big Master ofrece opciones presenciales en Bogotá y clases virtuales, según disponibilidad de horarios y programas.',
  },
  {
    q: '¿Tienen cursos para niños?',
    a: 'Sí. Hay opciones para niños, jóvenes y adultos. También puedes preguntar por programas de vacaciones bilingües.',
  },
  {
    q: '¿Puedo empezar desde cero?',
    a: 'Sí. Los cursos están pensados para diferentes edades y niveles, desde principiantes hasta estudiantes que quieren reforzar o avanzar.',
  },
  {
    q: '¿Preparan para exámenes internacionales?',
    a: 'Sí. Big Master ofrece preparación para IELTS, TOEFL, PET y otros exámenes internacionales.',
  },
  {
    q: '¿Cuánto cuestan las clases?',
    a: 'Hay promociones desde $9.000, pero los precios pueden variar según modalidad, horario y disponibilidad. Lo mejor es confirmar por WhatsApp.',
  },
  {
    q: '¿Las clases son individuales o grupales?',
    a: 'Puedes preguntar por clases personalizadas y grupales, según tu objetivo y disponibilidad.',
  },
  {
    q: '¿Cómo me inscribo?',
    a: 'Escríbenos por WhatsApp al 315 2430707 y te orientamos con cursos, horarios y promociones activas.',
  },
  {
    q: '¿Tienen actividades diferentes a clases tradicionales?',
    a: 'Sí. Big Master ha trabajado experiencias como stand-up comedy, talleres, conversación y actividades para practicar el idioma de forma divertida.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-transparent">
      <img
        src="/images/big-ben-clock.png"
        alt="Big Ben Watermark"
        className="pointer-events-none absolute -left-16 bottom-0 hidden h-[95%] w-auto object-contain opacity-[0.15] mix-blend-multiply md:block"
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
                      ? 'border-brand-red bg-brand-cream shadow-md'
                      : 'border-border bg-card hover:border-brand-yellow',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[16px] sm:text-[17px] text-brand-navy">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-brand-red transition-transform duration-300',
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
