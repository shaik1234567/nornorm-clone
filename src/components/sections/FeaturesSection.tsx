'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import { FEATURES } from '@/lib/constants'

export default function FeaturesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} id="service" className="section-padding bg-gray-50">
      <Container>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            The smarter way to furnish
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.number}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-sm font-bold text-blue-500 mb-4">
                {feature.number}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <button className="mt-6 text-sm font-medium text-black hover:text-blue-500 transition-colors flex items-center gap-2">
                Learn more
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
