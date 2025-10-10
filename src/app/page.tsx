import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CompanyLogoSection from '@/components/sections/CompanyLogoSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import CircularOfficesSection from '@/components/sections/CircularOfficesSection'
import PricingSection from '@/components/sections/PricingSection'
import ImpactStatsSection from '@/components/sections/ImpactStatsSection'
import WhySubscribeSection from '@/components/sections/WhySubscribeSection'
import ProductsSection from '@/components/sections/ProductsSection'
import AboutSection from '@/components/sections/AboutSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import DesignProcessSection from '@/components/sections/DesignProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <CompanyLogoSection />
        <FeaturesSection />
        <CircularOfficesSection />
        <PricingSection />
        <ImpactStatsSection />
        <WhySubscribeSection />
        <ProductsSection />
        <AboutSection />
        <ResourcesSection />
        <DesignProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
