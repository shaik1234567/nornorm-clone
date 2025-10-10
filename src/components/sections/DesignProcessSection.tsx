'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ContactModal from '@/components/ui/ContactModal'

export default function DesignProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const steps = [
    {
      number: '01',
      title: 'Upload floor plan',
      description: 'Share your office layout with us',
      icon: '📐',
      detail: 'Simply upload your floor plan or sketch, and we\'ll work with it'
    },
    {
      number: '02',
      title: 'We design your office',
      description: 'Our team creates a tailored design',
      icon: '✨',
      detail: 'Expert designers craft a custom 3D layout matching your needs'
    },
    {
      number: '03',
      title: 'Receive your 3D office design',
      description: 'Get your design in 48 hours',
      icon: '🎨',
      detail: 'Review your interactive 3D design and request any changes'
    },
  ]

  return (
    <>
      <section ref={ref} id="design" className="section-padding bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <Container>
          <div
            className={`text-center mb-16 relative z-10 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FREE • NO COMMITMENT
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get your office designed for free in 48 hours
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              No strings attached. Just tell us what you need, and we'll create a professional 3D design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-1000 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connection Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-white/30">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full border border-white/20">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 text-4xl">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-200 mb-3 text-center">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-blue-100 text-center mb-4">{step.description}</p>
                  <p className="text-sm text-blue-200 text-center">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center relative z-10">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsModalOpen(true)}
              className="shadow-xl hover:shadow-2xl"
            >
              Start your free design →
            </Button>
            <p className="text-sm text-blue-100 mt-4">
              ⚡ Average response time: 2 hours • 🎨 100% free, no credit card required
            </p>
          </div>
        </Container>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
