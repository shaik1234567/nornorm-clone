'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <Container>
        <div
          className={`text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
            Don&apos;t buy your <br />
            office furniture,{' '}
            <span className="relative inline-block">
              subscribe
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></span>
            </span>{' '}
            to it.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The world&apos;s leading companies subscribe to NORNORM&apos;s circular furniture
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="primary" href="#service" asLink>
              Explore the service
            </Button>
            <Button size="lg" variant="outline" href="#about" asLink>
              Learn more
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-black rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
