// 'use client'

// import { useInView } from '@/hooks/useInView'
// import Container from '@/components/ui/Container'

// export default function CircularOfficesSection() {
//   const { ref, isInView } = useInView({ threshold: 0.1 })

//   return (
//     <section ref={ref} className="section-padding bg-white">
//       <Container>
//         <div
//           className={`text-center mb-12 transition-all duration-1000 ${
//             isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
//             Circular offices, furnished by NORNORM
//           </h2>
//           <p className="text-xl text-gray-600">
//             1200+ businesses subscribing to our circular furniture service across 17 markets
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ${
//                 isInView
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${item * 100}ms` }}
//             >
//               <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">
//                 {item}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }

'use client'

import { useInView } from '@/hooks/useInView'
import Container from '@/components/ui/Container'

export default function CircularOfficesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const offices = [
    {
      id: 1,
      company: 'Tech Startup HQ',
      location: 'Stockholm',
      employees: '120 employees',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      company: 'Creative Agency',
      location: 'Copenhagen',
      employees: '85 employees',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      company: 'Finance Office',
      location: 'Oslo',
      employees: '200 employees',
      color: 'from-green-400 to-green-600'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <Container>
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Circular offices, furnished by NORNORM
          </h2>
          <p className="text-xl text-gray-600">
            1200+ businesses subscribing to our circular furniture service across 17 markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div
              key={office.id}
              className={`group relative aspect-square bg-gradient-to-br ${office.color} rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{office.company}</h3>
                  <p className="text-sm text-white/80 mb-1">{office.location}</p>
                  <p className="text-sm text-white/80">{office.employees}</p>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-4 gap-4 p-8">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats below gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-black mb-2">1200+</div>
            <p className="text-sm text-gray-600">Businesses</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">17</div>
            <p className="text-sm text-gray-600">Markets</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">36,000</div>
            <p className="text-sm text-gray-600">Daily Users</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <p className="text-sm text-gray-600">Companies</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
