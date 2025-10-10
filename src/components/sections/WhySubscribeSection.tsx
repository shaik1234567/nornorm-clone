'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import { WHY_SUBSCRIBE } from '@/lib/constants'

export default function WhySubscribeSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <Container>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Subscribe
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {WHY_SUBSCRIBE.map((item, index) => (
            <div
              key={item.number}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl font-bold text-gray-200">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
