'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'

export default function CompanyLogoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const companies = ['Google', 'Microsoft', 'Stripe', 'Spotify', 'Netflix', 'Airbnb']

  return (
    <section ref={ref} className="section-padding bg-white">
      <Container>
        <div
          className={`text-center transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
            Trusted by 1200+ businesses across 17 markets
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center h-20 text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
