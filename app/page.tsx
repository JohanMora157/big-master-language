import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Courses } from '@/components/courses'
import { Methodology } from '@/components/methodology'
import { ExamPreparation } from '@/components/exam-preparation'
import { AudiencePrograms } from '@/components/audience-programs'
import { Promotions } from '@/components/promotions'
import { Experiences } from '@/components/experiences'
import { StudentGoals } from '@/components/student-goals'
import { Location } from '@/components/location'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Glowing background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[8%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#054BAB]/15 bg-blob" />
          <div className="absolute top-[22%] right-[-15%] h-[700px] w-[700px] rounded-full bg-[#ED0874]/15 bg-blob" />
          <div className="absolute top-[35%] left-[-15%] h-[650px] w-[650px] rounded-full bg-[#FBCC2E]/15 bg-blob" />
          <div className="absolute top-[48%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#054BAB]/15 bg-blob" />
          <div className="absolute top-[60%] left-[-15%] h-[700px] w-[700px] rounded-full bg-[#ED0874]/15 bg-blob" />
          <div className="absolute top-[72%] right-[-15%] h-[650px] w-[650px] rounded-full bg-[#FBCC2E]/15 bg-blob" />
          <div className="absolute top-[85%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#054BAB]/15 bg-blob" />
        </div>

        <Hero />
        <About />
        <Courses />
        <AudiencePrograms />
        <Methodology />
        <ExamPreparation />
        <Experiences />
        <StudentGoals />
        <Promotions />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
