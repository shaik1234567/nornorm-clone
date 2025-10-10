'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
      <Container>
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to transform your workspace?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1200+ companies already subscribed to circular furniture
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" variant="secondary" href="#design" asLink>
    Get your free design
  </Button>
  <Button size="lg" variant="outline" href="#contact" asLink>
    Talk to our team
  </Button>
</div>

        </div>
      </Container>
    </section>
  )
}
