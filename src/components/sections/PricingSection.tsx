'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ContactModal from '@/components/ui/ContactModal'

export default function PricingSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center transition-all duration-1000 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Cheaper than a cup of coffee per employee a day
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                A monthly flexible furniture subscription. Only pay for what you need, when you need it.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold text-black">$</span>
                  <span className="text-8xl font-bold text-black">3</span>
                  <span className="text-2xl text-gray-600">/employee/day</span>
                </div>
                <p className="text-gray-600">Full service furniture subscription</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">Flexible</h4>
                    <p className="text-sm text-gray-600">Change anytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">Sustainable</h4>
                    <p className="text-sm text-gray-600">70% less CO₂</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">All-inclusive</h4>
                    <p className="text-sm text-gray-600">Full service included</p>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Get your free design
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
