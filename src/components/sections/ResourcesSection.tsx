'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function ResourcesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const resources = [
    {
      type: 'Case Studies',
      title: 'How Spotify Scaled with NORNORM',
      description: 'Learn how we helped Spotify furnish 5 offices across Europe in 3 months.',
      tag: 'Read Story'
    },
    {
      type: 'Guide',
      title: 'The Ultimate Office Design Guide',
      description: 'Best practices for creating productive and sustainable workspaces.',
      tag: 'Download PDF'
    },
    {
      type: 'Webinar',
      title: 'Circular Economy in Practice',
      description: 'Join our monthly webinar on sustainable business practices.',
      tag: 'Register Now'
    },
    {
      type: 'Blog',
      title: 'Latest Updates & Insights',
      description: 'Stay updated with trends in workplace design and sustainability.',
      tag: 'Read Blog'
    }
  ]

  return (
    <section ref={ref} id="resources" className="section-padding bg-gray-50">
      <Container>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Resources
          </h2>
          <p className="text-xl text-gray-600">
            Learn more about circular furniture and sustainable workspaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-sm font-semibold text-blue-600 mb-3">
                {resource.type}
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>
              <Button variant="outline" size="sm">
                {resource.tag} →
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
