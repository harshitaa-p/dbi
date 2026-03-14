import { useState, useEffect, useCallback } from 'react'
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

const serviceHighlights = [
  { icon: '🔥', title: 'Fire Hydrant System', desc: 'Supply & Installation' },
  { icon: '💧', title: 'Sprinkler System', desc: 'Design & Installation' },
  { icon: '🔔', title: 'Fire Alarm System', desc: 'Supply & Installation' },
  { icon: '🔧', title: 'AMC Services', desc: 'All Fire Fighting Equipment' },
  { icon: '🧯', title: 'Fire Extinguisher', desc: 'Supply & Refilling' },
]

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 24, suffix: '/7', label: 'Support Available' },
]

const strengths = [
  { title: 'Consultancy', description: 'Expert guidance on fire safety systems, regulatory compliance, and risk assessment for your facility.' },
  { title: 'System Design', description: 'Custom-engineered fire protection systems tailored to your building layout and safety requirements.' },
  { title: 'Installation', description: 'Professional installation by certified engineers ensuring all systems meet national safety standards.' },
  { title: 'Execution', description: 'End-to-end project execution with strict adherence to timelines and quality benchmarks.' },
  { title: 'Maintenance', description: 'Ongoing maintenance and AMC services to keep your fire safety systems in peak working condition.' },
]

const qualityTests = [
  'Hydraulic Pressure Test',
  'Caking Test',
  'Anti-Corrosive Test',
  'Quality Checking Tests',
]

const hydrantFeatures = [
  'Effective for large buildings',
  'Can reach up to 7 floors',
  'Industrial and commercial use',
  'High-pressure water delivery',
]

const sprinklerServices = [
  'Hazard evaluation and classification',
  'Supply of sprinkler systems',
  'Water supply evaluation',
  'Installation and commissioning',
  'System maintenance',
]

const alarmSystems = [
  'Heat detection',
  'Smoke detection',
  'VESDA early warning systems',
  'Voice evacuation',
  'Emergency lighting',
  'Exit lighting',
  'Fire curtains',
]

const alarmDevices = [
  'Remote communicators',
  'Bells & Sounders',
  'Strobes',
  'Call points',
  'Control modules',
]

const extinguisherTypes = [
  'Stored pressure extinguishers',
  'Modular automatic extinguishers',
  'Clean agent extinguishers',
  'Halotron extinguishers',
]

const industries = [
  { title: 'Residential Buildings', image: px(323780) },
  { title: 'Hospitals', image: px(668300) },
  { title: 'Schools', image: px(256395) },
  { title: 'Industrial Plants', image: px(3862632) },
  { title: 'Oil & Gas Companies', image: px(247763) },
  { title: 'Shopping Malls', image: px(1114690) },
]

const clients = [
  { name: 'Delta', logo: '/logo/delta.png' },
  { name: 'MIT ADT University', logo: '/logo/mit.png' },
  { name: 'Bhairaav', logo: '/logo/bhairaav.png' },
  { name: 'Ramsheth', logo: '/logo/ramsheth.png' },
  { name: 'Progress Builders', logo: '/logo/progress.png' },
  { name: 'Shah Group', logo: '/logo/shah.png' },
  { name: 'Bhagwati Group', logo: '/logo/bhagwati.png' },
  { name: 'Balaji Group', logo: '/logo/balaji.png' },
  { name: 'Raheja', logo: '/logo/raheja.png' },
  { name: 'Delta Builders', logo: '/logo/delta-builders.png' },
  { name: 'Indian Oil', logo: '/logo/inidanoil.png' },
  { name: 'Little Words Projects', logo: '/logo/little-words-projects.png' },
  { name: 'Kukreja Group', logo: '/logo/kukreja.png' },
  { name: 'Ansari Brothers', logo: '/logo/ansari.png' },
  { name: 'Toll', logo: '/logo/toll.png' },
  { name: 'Reliable Builders', logo: '/logo/reliable.png' },
  { name: 'Vista Group', logo: '/logo/vista.png' },
  { name: 'Safal Group', logo: '/logo/safal.png' },
]

const marqueeItems = [
  'Fire Hydrant Systems', 'Sprinkler Systems', 'Fire Alarms', 'AMC Services',
  'Fire Extinguishers', 'ISO 9001 Certified', 'Govt. Authorised', 'Since 2008',
  'Industrial Safety', 'Residential Safety', 'Emergency Response', '24/7 Support',
]

const hydrantImages = [
  { src: '/images/fire/hydrant.png', alt: 'Fire hydrant system' },
  { src: '/images/fire/hydrant1.png', alt: 'Fire hydrant pipeline' },
  { src: '/images/fire/hydrant2.png', alt: 'Fire pump room' },
  { src: '/images/fire/hydrant3.png', alt: 'Hydrant pump system' },
  { src: '/images/fire/hydrant4.png', alt: 'Hydrant system diagram' },
]

const sprinklerImages = [
  { src: '/images/fire/sprinkler.png', alt: 'Sprinkler system' },
  { src: '/images/fire/sprinkler1.png', alt: 'Sprinkler components' },
  { src: '/images/fire/sprinkler2.png', alt: 'Sprinkler system diagram' },
]

const alarmImages = [
  { src: '/images/fire/alarm.png', alt: 'Fire alarm system' },
  { src: '/images/fire/alarm1.png', alt: 'Fire alarm panel' },
]

const extinguisherImages = [
  { src: '/images/fire/extinguisher.png', alt: 'Fire extinguisher' },
  { src: '/images/fire/extinguisher1.png', alt: 'Fire extinguisher refilling' },
]

function ImageSlider({ images, height = 'h-[500px]' }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="overflow-hidden relative rounded-xl border border-fire-100">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`object-cover w-full ${height} shrink-0`}
          />
        ))}
      </div>
      <button onClick={prev} className="flex absolute left-3 top-1/2 justify-center items-center w-9 h-9 text-gray-700 rounded-full shadow backdrop-blur-sm transition -translate-y-1/2 bg-white/80 hover:bg-white">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <button onClick={next} className="flex absolute right-3 top-1/2 justify-center items-center w-9 h-9 text-gray-700 rounded-full shadow backdrop-blur-sm transition -translate-y-1/2 bg-white/80 hover:bg-white">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
      <div className="flex absolute bottom-3 left-1/2 gap-2 -translate-x-1/2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-fire-600 scale-110' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function FireAndSafety() {
  const heroRef = useScrollReveal()
  const { ref: parallaxRef, offset } = useMouseParallax(25)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section id="home" className="overflow-hidden relative bg-gradient-to-br via-white to-orange-50 section-padding-lg from-fire-50" ref={parallaxRef}>
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full blur-3xl bg-fire-200/20 animate-float" style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }} />
        <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full blur-3xl bg-orange-200/20 animate-float-slow" style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }} />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-fire-400/30 animate-pulse-soft" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-orange-400/30 animate-float-delayed" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ba2419 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1700px] mx-auto relative" ref={heroRef}>
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="reveal">
                <p className="mb-3 text-sm font-medium tracking-wide uppercase text-fire-700">
                  Govt. Authorised License Company
                </p>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                  DB Fire & Safety{' '}
                  <span className="gradient-text-fire">Services</span>
                </h1>
                <p className="mb-2 text-2xl font-semibold text-gray-700 md:text-3xl">Keeping You Safe!</p>
              </div>
              <div className="mb-8 space-y-4 leading-relaxed text-gray-600 reveal" style={{ transitionDelay: '0.15s' }}>
                <p>
                  Complete solutions for all fire and safety requirements. From fire hydrant systems to annual maintenance contracts — we protect what matters most.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {serviceHighlights.map((s) => (
                    <span key={s.title} className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium bg-white rounded-full border shadow-sm border-fire-100 text-fire-800">
                      <span>{s.icon}</span> {s.title}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
                <Button variant="fire" href="#contact">
                  Get a Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Button>
                <Button variant="fireSecondary" href="#services">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="hidden lg:block reveal-right">
              <TiltCard max={8} scale={1.03}>
                <div className="overflow-hidden relative rounded-2xl border shadow-xl border-fire-100 glow-fire img-zoom">
                  <img src="/images/fire/main-fire.png" alt="Fire safety professionals" className="w-full h-[480px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-fire-900/40" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <div className="px-4 py-3 rounded-xl backdrop-blur-sm bg-white/90">
                      <p className="text-xs font-semibold text-fire-700">ISO 9001:2015 Certified</p>
                      <p className="text-xs text-gray-500">Established since 2008</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="section-padding !py-0 -mt-8 relative z-10">
        <div className="max-w-[1700px] mx-auto">
          <Stats items={stats} variant="fire" />
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-white border-gray-100 border-y">
        <div className="max-w-[1700px] mx-auto">
          <Marquee items={marqueeItems} variant="fire" speed={35} />
        </div>
      </div>

      {/* About Us */}
      <Section id="about" headline="About DB Fire & Safety Services" subtitle="An ISO 9001 certified organization established in 2008 — a pioneer in the firefighting industry in India." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <TiltCard max={6}>
              <div className="overflow-hidden rounded-xl border transition-all duration-500 border-fire-100 img-zoom glow-fire-hover">
                <img src={px(4805958, 600)} alt="Fire safety equipment showroom" className="w-full object-cover h-[300px]" />
              </div>
            </TiltCard>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-4 leading-relaxed text-gray-600">
              We are pleased to introduce DB Fire & Safety Services. We provide complete solutions for all fire and safety requirements. Our mission is to spread awareness about fire safety, understand the safety requirements of clients, and deliver effective solutions.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              Our services ensure that fire extinguishers and fire protection systems remain in peak working condition 24x7 throughout the year. We provide fire safety solutions for industrial sectors, commercial spaces, offices, and residential environments.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <GradientBorderCard variant="fire">
                <div className="p-5">
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Our Mission</h4>
                  <p className="text-sm text-gray-600">To spread awareness about fire safety, understand client requirements, and deliver effective, reliable solutions.</p>
                </div>
              </GradientBorderCard>
              <GradientBorderCard variant="fire">
                <div className="p-5">
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">Our Vision</h4>
                  <p className="text-sm text-gray-600">To deliver maximum value by offering expertise, high quality products, professional services, and customer-friendly support.</p>
                </div>
              </GradientBorderCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Commitments */}
      <Section id="commitments" headline="To Our Customers" subtitle="We aim to deliver maximum value by offering expertise and excellent service." bg="gray" accentColor="fire">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {['High Quality Products', 'Professional Services', 'Timely Completion', 'Customer-friendly Support', 'Skilled Professionals'].map((item) => (
            <TiltCard key={item} max={6}>
              <div className="flex justify-center items-center p-6 h-full text-center bg-white rounded-xl border border-gray-100 card-hover">
                <p className="text-sm font-semibold text-gray-800">{item}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Our Strength */}
      <Section id="strength" headline="Our Strength" subtitle="Our company has a qualified team of engineers and technicians delivering end-to-end fire safety solutions." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <TiltCard key={s.title} max={5}>
              <div className="p-6 h-full rounded-xl border bg-fire-50 border-fire-100 card-hover">
                <div className="flex gap-3 items-start">
                  <span className="text-fire-700 font-bold text-lg mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{s.description}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h4 className="mb-4 text-lg font-semibold text-gray-900">Quality Assurance Tests</h4>
          <div className="flex flex-wrap gap-3">
            {qualityTests.map((test) => (
              <span key={test} className="px-4 py-2 text-sm font-medium rounded-full bg-fire-100 text-fire-800">{test}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Visual Break */}
      <ParallaxBanner image={px(257636, 1400)} alt="Fire safety operations" overlay="bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-fire-900/60">
        <div className="px-6 text-center text-white">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">Protection that never takes a day off.</h3>
          <p className="mx-auto max-w-2xl text-gray-300">Serving industrial, commercial, residential, and government facilities across India since 2008.</p>
        </div>
      </ParallaxBanner>

      {/* Services - Fire Hydrant */}
      <Section id="services" headline="Fire Hydrant System" subtitle="Fire hydrant systems are commonly used in residential and industrial projects. The system allows firefighters to control fire quickly by delivering high-pressure water through hydrant pipelines." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ImageSlider images={hydrantImages} />
          <div className="flex flex-col justify-center">
            <h4 className="mb-4 text-lg font-semibold text-gray-900">Key Features</h4>
            <div className="space-y-3">
              {hydrantFeatures.map((f) => (
                <div key={f} className="flex gap-3 items-center">
                  <div className="w-2 h-2 rounded-full shrink-0 bg-fire-500" />
                  <p className="text-gray-600">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services - Sprinkler System */}
      <Section headline="Sprinkler System" subtitle="Our engineers provide design and installation of fire sprinkler systems according to BS EN 12845 and NFPA regulations." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col order-2 justify-center lg:order-1">
            <h4 className="mb-4 text-lg font-semibold text-gray-900">Services Included</h4>
            <div className="space-y-3">
              {sprinklerServices.map((s) => (
                <div key={s} className="flex gap-3 items-center">
                  <div className="w-2 h-2 rounded-full shrink-0 bg-fire-500" />
                  <p className="text-gray-600">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">System Types</h4>
              <div className="flex flex-wrap gap-2">
                {['Water mist systems', 'High velocity spray', 'Hydrant systems', 'Foam/water monitors'].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-fire-50 text-fire-700 border border-fire-100">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ImageSlider images={sprinklerImages} />
          </div>
        </div>
      </Section>

      {/* Services - Fire Alarm System */}
      <Section headline="Fire Alarm System" subtitle="We supply a wide range of addressable fire alarm systems, from simple analog systems to fully integrated systems for large buildings." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <ImageSlider images={alarmImages} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Systems Include</h4>
              <div className="space-y-2">
                {alarmSystems.map((s) => (
                  <div key={s} className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full shrink-0 bg-fire-500" />
                    <p className="text-sm text-gray-600">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-900">Additional Devices</h4>
              <div className="flex flex-wrap gap-2">
                {alarmDevices.map((d) => (
                  <span key={d} className="px-3 py-1.5 text-xs font-medium rounded-full bg-fire-50 text-fire-700 border border-fire-100">{d}</span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">Compliant with UL (United States), LPCB (United Kingdom), and Civil Defense & Fire Directorate standards.</p>
          </div>
        </div>
      </Section>

      {/* Services - AMC */}
      <Section headline="AMC for Fire Fighting Equipment" subtitle="We provide Annual Maintenance Contracts (AMC) for all firefighting equipment to ensure your systems remain operational at all times." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Regular Maintenance', desc: 'Scheduled maintenance visits to keep all fire safety systems in peak condition.' },
            { title: 'Quick Response', desc: 'Rapid response support for emergency repairs and system troubleshooting.' },
            { title: 'Advanced Servicing', desc: 'Comprehensive servicing using advanced tools and certified equipment.' },
            { title: 'On-call Service', desc: '24/7 on-call support to address urgent fire safety system needs.' },
          ].map((item) => (
            <TiltCard key={item.title} max={6}>
              <GradientBorderCard variant="fire">
                <div className="p-6 h-full">
                  <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </GradientBorderCard>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Services - Fire Extinguisher */}
      <Section headline="Fire Extinguisher Supply & Refilling" subtitle="We provide supply, installation, testing, and refilling of all fire extinguishers. All products are ISI certified." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h4 className="mb-4 text-lg font-semibold text-gray-900">Types Available</h4>
            <div className="mb-6 space-y-3">
              {extinguisherTypes.map((t) => (
                <div key={t} className="flex gap-3 items-center">
                  <div className="w-2 h-2 rounded-full shrink-0 bg-fire-500" />
                  <p className="text-gray-600">{t}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl border bg-fire-50 border-fire-100">
              <p className="text-sm text-gray-700"><span className="font-semibold">Maintenance:</span> Follows IS 2190 standards. We also provide fire safety training sessions for employees.</p>
            </div>
          </div>
          <div>
            <ImageSlider images={extinguisherImages} />
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" headline="Certifications & License" subtitle="Fully licensed and certified to deliver fire safety solutions across Maharashtra and India." bg="white" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <TiltCard max={5}>
            <div className="p-8 h-full bg-gradient-to-br to-orange-50 rounded-xl border from-fire-50 border-fire-200">
              <div className="flex gap-3 items-center mb-4">
                <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-fire-100">
                  <svg className="w-6 h-6 text-fire-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Maharashtra Fire Service License</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold text-gray-800">Licensed by:</span> Directorate of Maharashtra Fire Service</p>
                <p><span className="font-semibold text-gray-800">License Number:</span> MFS / LA / RF-117 / RD-112</p>
                <p><span className="font-semibold text-gray-800">Valid:</span> 19 February 2024 - 18 February 2026</p>
              </div>
              <div className="pt-4 mt-4 border-t border-fire-200">
                <p className="mb-2 text-xs font-semibold text-gray-700">Authorized for:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-fire-100 text-fire-800">Fire Fighting & Sprinkler Systems</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-fire-100 text-fire-800">Detection & Fire Suppression Systems</span>
                </div>
              </div>
            </div>
          </TiltCard>
          <TiltCard max={5}>
            <div className="p-8 h-full bg-gradient-to-br from-gray-50 rounded-xl border border-gray-200 to-fire-50">
              <div className="flex gap-3 items-center mb-4">
                <div className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-xl">
                  <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">ISO 9001:2015</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">Certified quality management system covering all fire safety operations.</p>
              <div className="space-y-2">
                <p className="mb-2 text-xs font-semibold text-gray-700">Scope:</p>
                {['Fire extinguisher supply and refilling', 'Fire hydrant system installation', 'Fire alarm systems', 'Sprinkler systems', 'AMC services'].map((s) => (
                  <div key={s} className="flex gap-2 items-center">
                    <svg className="w-4 h-4 shrink-0 text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <p className="text-sm text-gray-600">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {[
            { label: 'GST Certificate', file: '/files/GST CERTIFICATE - New.pdf', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg> },
            { label: 'ISO', file: '/files/ISO NEW.pdf', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
            { label: 'License', file: '/files/LICENCE COPY.pdf', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg> },
            { label: 'Udyog', file: '/files/Udyog Adhar.pdf', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg> },
            { label: 'Udyam', file: '/files/Udyam Registration Certificate-  new (MSME).pdf', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg> },
          ].map((item) => (
            <a
              key={item.label}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-5 py-2.5 text-sm font-semibold rounded-full border transition-all duration-300 bg-fire-50 text-fire-700 border-fire-200 hover:bg-fire-600 hover:text-white hover:border-fire-600"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section id="industries" headline="Industries We Serve" subtitle="We provide fire safety solutions across diverse sectors — protecting people, property, and operations." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <TiltCard key={ind.title} max={5}>
              <div className="overflow-hidden h-full rounded-xl border border-gray-100 hover:border-fire-200 card-hover img-zoom">
                <img src={ind.image} alt={ind.title} className="object-cover w-full h-40" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{ind.title}</h3>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section id="clients" headline="Our Valued Clients" subtitle="Trusted by leading organizations across industries." bg="white" accentColor="fire">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <TiltCard key={client.name} max={6}>
              <div className="flex items-center justify-center p-5 h-full bg-gray-50 rounded-xl border border-gray-100 card-hover hover:border-fire-200 min-h-[80px]">
                <img src={client.logo} alt={client.name} className="object-contain max-h-16 mix-blend-multiply" />
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" headline="Contact Us" subtitle="Whether you need an audit, consultation, or complete fire safety system — reach out and we'll respond promptly." bg="gray" accentColor="fire">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="p-6 h-full bg-gradient-to-br to-orange-50 rounded-xl border from-fire-50 border-fire-200">
              <h3 className="mb-4 text-lg font-bold text-gray-900">Head Office</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="font-semibold text-gray-800">Woodwala Corporation</p>
                <p>Plot No. 10, Sector 24</p>
                <p>Behind ICICI Bank</p>
                <p>Turbhe, Navi Mumbai - 400705</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-3 sm:grid-cols-3">
            <TiltCard max={8}>
              <a href="mailto:safety@sbfiresafety.com" className="block p-6 h-full text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
                <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
                <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">Email</div>
                <div className="mt-1 text-xs text-gray-500">safety@sbfiresafety.com</div>
              </a>
            </TiltCard>
            <TiltCard max={8}>
              <a href="tel:+919999999999" className="block p-6 h-full text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
                <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
                <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">Phone</div>
                <div className="mt-1 text-xs text-gray-500">+91 99999 99999</div>
              </a>
            </TiltCard>
            <TiltCard max={8}>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block p-6 h-full text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-fire-hover">
                <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-fire-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg></div>
                <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-fire-700">WhatsApp</div>
                <div className="mt-1 text-xs text-gray-500">Chat with us</div>
              </a>
            </TiltCard>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button variant="fire" href="mailto:safety@sbfiresafety.com">
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Button>
        </div>
      </Section>
    </div>
  )
}
