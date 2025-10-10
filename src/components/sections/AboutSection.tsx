'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'

export default function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const values = [
    {
      title: 'Circular by Design',
      description: 'We keep furniture in circulation, extending its lifespan and reducing waste.',
    },
    {
      title: 'Quality First',
      description: 'Only the best furniture that lasts 20+ years, refurbished to like-new condition.',
    },
    {
      title: 'Customer Success',
      description: 'Your office should evolve with your business. We make changes simple.',
    },
  ]

  return (
    <section ref={ref} id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About NORNORM
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;re on a mission to make office furniture sustainable through circularity.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded with the belief that businesses shouldn&apos;t have to choose between quality, 
              flexibility, and sustainability. We&apos;ve helped 1200+ companies across 17 markets 
              create better workspaces while reducing their environmental impact by up to 70%.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">2020</div>
                <p className="text-sm text-gray-600">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">17</div>
                <p className="text-sm text-gray-600">Markets</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">150+</div>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
