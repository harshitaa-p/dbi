import Section from '../common/Section'
import Card from '../common/Card'
import Button from '../common/Button'
import Stats from '../common/Stats'
import TiltCard from '../common/TiltCard'
import GradientBorderCard from '../common/GradientBorderCard'
import ParallaxBanner from '../common/ParallaxBanner'
import Marquee from '../common/Marquee'
import useScrollReveal from '../../hooks/useScrollReveal'
import useMouseParallax from '../../hooks/useMouseParallax'

const px = (id, w = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const services = [
  { title: 'Fire Safety Audits', description: 'Comprehensive assessment of fire risks, safety compliance, and infrastructure readiness across commercial and industrial facilities.' },
  { title: 'Fire Protection Systems', description: 'Design, installation, and maintenance of fire detection, suppression, and alarm systems tailored to facility requirements.' },
  { title: 'Compliance & Licensing', description: 'End-to-end support for fire safety compliance, NOC procurement, and regulatory licensing aligned with national standards.' },
  { title: 'Safety Training', description: 'Structured training programs for staff, including fire drill coordination, evacuation procedures, and emergency response protocols.' },
  { title: 'Industrial Safety Consulting', description: 'Risk assessment and safety planning for manufacturing, warehousing, and industrial environments to prevent accidents and ensure compliance.' },
  { title: 'Safety Equipment Supply', description: 'Procurement and installation of certified fire safety equipment — extinguishers, hydrant systems, sprinklers, and protective gear.' },
]

const automationFeatures = [
  { title: 'IoT-based Fire Detection', description: 'Networked sensors that detect smoke, heat, and gas anomalies in real-time — providing early warnings before situations escalate.', image: px(1115823) },
  { title: 'Automated Alert Systems', description: 'Instant multi-channel alerts — SMS, app notifications, and control room dashboards — triggered automatically when thresholds are breached.', image: px(4916620) },
  { title: 'Intelligent Monitoring', description: 'AI-powered surveillance that identifies safety hazards, monitors compliance, and flags irregularities without constant human oversight.', image: px(1749900) },
  { title: 'Predictive Maintenance', description: 'Data-driven scheduling of equipment checks and replacements, ensuring fire safety systems remain operational at all times.', image: px(8853474) },
]

const stats = [
  { value: 150, suffix: '+', label: 'Facilities Secured' },
  { value: 500, suffix: '+', label: 'Safety Audits Done' },
  { value: 20, suffix: '+', label: 'Years Legacy Experience' },
  { value: 50, suffix: '+', label: 'Trained Safety Officers' },
]

const marqueeItems = [
  'Fire Safety Audits', 'Atmanirbhar Bharat', 'NOC Compliance', 'Industrial Safety',
  'IoT Sensors', 'Automated Alerts', 'Safety Training', 'Equipment Supply',
  'Risk Assessment', 'Emergency Response', 'Smart Monitoring', 'Govt. Certified',
]

export default function FireSafety() {
  const heroRef = useScrollReveal()
  const { ref: parallaxRef, offset } = useMouseParallax(25)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section id="home" className="overflow-hidden relative bg-gradient-to-br via-white to-orange-50 section-padding-lg from-fire-50" ref={parallaxRef}>
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full blur-3xl bg-fire-200/15 animate-float" style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }} />
        <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full blur-3xl bg-orange-200/15 animate-float-slow" style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }} />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-fire-400/30 animate-pulse-soft" />
        <div className="absolute right-1/3 bottom-1/3 w-3 h-3 rounded-full bg-orange-300/30 animate-float-delayed" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ba2419 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1700px] mx-auto relative" ref={heroRef}>
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="reveal">
                <p className="mb-3 text-sm font-medium tracking-wide uppercase text-fire-700">D.B. Infotech Fire & Industrial Safety</p>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                  Safety, planned —{' '}<span className="gradient-text-fire">not reactive.</span>
                </h1>
              </div>
              <div className="mb-8 space-y-4 leading-relaxed text-gray-600 reveal" style={{ transitionDelay: '0.15s' }}>
                <p>Strong safety systems don't call attention to themselves. They work quietly in the background, protecting people, assets, and operations.</p>
                <p>D.B. Infotech's Fire & Industrial Safety division combines decades of on-ground experience with modern automation to build safety infrastructure that organizations can rely on — consistently and confidently.</p>
              </div>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <Button variant="fire" href="#">Request a Safety Consultation<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
              </div>
            </div>
            <div className="hidden lg:block reveal-right">
              <TiltCard max={8} scale={1.03}>
                <div className="overflow-hidden relative rounded-2xl border shadow-lg border-fire-100 glow-fire img-zoom">
                  <img src={px(2030190, 800)} alt="Firefighter in action with fire hose" className="w-full h-[480px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-fire-900/30" />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="section-padding !py-0 -mt-8 relative z-10">
        <div className="max-w-[1700px] mx-auto"><Stats items={stats} variant="fire" /></div>
      </div>

      {/* Marquee */}
      <div className="bg-white border-gray-100 border-y">
        <div className="max-w-[1700px] mx-auto"><Marquee items={marqueeItems} variant="fire" speed={35} /></div>
      </div>

      {/* About */}
      <Section id="about" headline="Rooted in experience. Evolved for the future." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <TiltCard max={6}>
              <div className="overflow-hidden rounded-xl border transition-all duration-500 border-fire-100 img-zoom glow-fire-hover">
                <img src={px(4805958, 600)} alt="Fire safety equipment and extinguisher" className="w-full h-full object-cover min-h-[300px]" />
              </div>
            </TiltCard>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-4 leading-relaxed text-gray-600">D.B. Infotech's Fire & Industrial Safety division has evolved from the legacy of S.B Fire & Safety — carrying forward years of on-ground expertise in fire protection, industrial safety, and regulatory compliance.</p>
            <p className="mb-6 leading-relaxed text-gray-600">Aligned with the Atmanirbhar Bharat mission, we focus on indigenous safety solutions that meet national standards while incorporating modern automation and monitoring technologies.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <GradientBorderCard variant="fire">
                <div className="p-5">
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Government Association</h4>
                  <p className="text-sm text-gray-600">Registered and compliant with national fire safety regulatory bodies. Documentation available upon request.</p>
                </div>
              </GradientBorderCard>
              <GradientBorderCard variant="fire">
                <div className="p-5">
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Certifications</h4>
                  <p className="text-sm text-gray-600">Team certified in fire safety engineering, industrial risk assessment, and safety system design per national standards.</p>
                </div>
              </GradientBorderCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual break */}
      <ParallaxBanner image={px(257636, 1400)} alt="Fire and industrial safety operations" overlay="bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-fire-900/60">
        <div className="px-6 text-center text-white">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">Protection that never takes a day off.</h3>
          <p className="mx-auto max-w-2xl text-gray-300">Serving manufacturing, warehousing, healthcare, education, and government facilities across India.</p>
        </div>
      </ParallaxBanner>

      {/* Services */}
      <Section id="services" headline="What we deliver." subtitle="Comprehensive fire and industrial safety services — from audits and training to system design and equipment supply." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <TiltCard key={service.title} max={5}>
              <Card variant="default" {...service} />
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Automation */}
      <Section id="automation" headline="When safety meets automation." subtitle="Modern safety infrastructure should be intelligent, responsive, and proactive. We integrate automation to make safety systems smarter." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {automationFeatures.map((feature, i) => (
            <TiltCard key={feature.title} max={4}>
              <div className="overflow-hidden h-full rounded-xl border group bg-fire-50 border-fire-100 card-hover img-zoom">
                <img src={feature.image} alt={feature.title} className="object-cover w-full h-52 border-b border-fire-100" />
                <div className="p-6">
                  <div className="flex gap-4 items-start">
                    <span className="text-fire-700 font-bold text-lg mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-fire-700">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" headline="Plan for safety today." subtitle="Whether you need an audit, a consultation, or a complete safety system design — reach out and we'll respond promptly." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-3">
          <TiltCard max={8}>
            <a href="mailto:infodbinfotech@gmail.com" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">Email</div>
              <div className="mt-1 text-sm text-gray-700">infodbinfotech@gmail.com</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="tel:+917021970004" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">Phone</div>
              <div className="mt-1 text-sm text-gray-700">+917021970004</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="https://wa.me/917021970004" target="_blank" rel="noopener noreferrer" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">WhatsApp</div>
              <div className="mt-1 text-sm text-gray-700">Chat with us</div>
            </a>
          </TiltCard>
        </div>
        <div className="text-center">
          <Button variant="fire" href="#">Request a Safety Consultation<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
        </div>
      </Section>
    </div>
  )
}
