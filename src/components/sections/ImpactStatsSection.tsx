'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import { STATS } from '@/lib/constants'

export default function ImpactStatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-black text-white">
      <Container>
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Scaling circularity - cutting CO₂ and waste
          </h2>
          <p
            className={`text-xl text-gray-400 transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Together, we&apos;re changing the norm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`text-center transition-all duration-1000 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">
                {stat.value}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
