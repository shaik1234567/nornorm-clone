// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { NAV_LINKS } from '@/lib/constants'
// import Button from '@/components/ui/Button'
// import Container from '@/components/ui/Container'

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <Container>
//         <div className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-black">
//             NORNORM
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Button size="sm">Get Started</Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <div className="w-6 h-5 flex flex-col justify-between">
//               <span
//                 className={`block h-0.5 w-full bg-black transition-all ${
//                   isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-full bg-black transition-all ${
//                   isMobileMenuOpen ? 'opacity-0' : ''
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-full bg-black transition-all ${
//                   isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
//                 }`}
//               />
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden pb-4 animate-fade-in">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="block py-3 text-gray-700 hover:text-black transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Button size="sm" className="w-full mt-4">
//               Get Started
//             </Button>
//           </div>
//         )}
//       </Container>
//     </nav>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Service', href: '#service' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Resources', href: '#resources' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            NORNORM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
<Button size="sm" href="#design" asLink>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-black transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-gray-700 hover:text-black transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-4" href="#design" asLink>
  Get Started
</Button>

          </div>
        )}
      </Container>
    </nav>
  )
}
