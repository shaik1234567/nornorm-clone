import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    Product: ['Service', 'Products', 'Pricing', 'Case Studies'],
    Company: ['About', 'Careers', 'Press', 'Contact'],
    Resources: ['Blog', 'Help Center', 'Community', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
  }

  return (
<footer id="contact" className="bg-black text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">NORNORM</h3>
            <p className="text-gray-400 text-sm">
              Circular office furniture subscription service
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NORNORM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
