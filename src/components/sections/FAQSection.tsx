'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Accordion from '@/components/ui/Accordion'
import { FAQS } from '@/lib/constants'

export default function FAQSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our service
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {FAQS.map((faq) => (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
