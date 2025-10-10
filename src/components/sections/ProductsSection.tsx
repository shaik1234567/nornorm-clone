'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'

export default function ProductsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const products = [
    {
      category: 'Seating',
      items: ['Office Chairs', 'Lounge Chairs', 'Stools', 'Sofas'],
      icon: '💺'
    },
    {
      category: 'Desks',
      items: ['Standing Desks', 'Workstations', 'Meeting Tables', 'Benches'],
      icon: '🖥️'
    },
    {
      category: 'Storage',
      items: ['Cabinets', 'Shelving', 'Lockers', 'Mobile Units'],
      icon: '📦'
    },
    {
      category: 'Collaboration',
      items: ['Meeting Rooms', 'Phone Booths', 'Breakout Areas', 'Whiteboards'],
      icon: '🤝'
    }
  ]

  return (
    <section ref={ref} id="products" className="section-padding bg-white">
      <Container>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for a functional, beautiful workspace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.category}
              className={`bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {product.category}
              </h3>
              <ul className="space-y-2">
                {product.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
