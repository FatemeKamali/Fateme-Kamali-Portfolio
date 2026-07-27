import HeaderHero from "./components/HeaderHero"
import WhatIDoSection from "./components/WhatIDoSection"
import WorkExperienceSection from "./components/WorkExperienceSection"
import CertificatesSection from "./components/CertificatesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer" 

export default function App() {
  return (
    <div 
      className="min-h-screen w-full font-sans text-black overflow-x-hidden flex flex-col"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="w-full max-w-[1100px] mx-auto border-l-[1.5px] mb-24 border-black relative pt-12 flex-1">
        <HeaderHero />
        <WhatIDoSection />
        <WorkExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}