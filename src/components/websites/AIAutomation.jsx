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

const aiImages = {
  hero: '/images/ai/hero.png',
  banner: '/images/ai/banner.png',
  vision: '/images/ai/vision.png',
  education: '/images/ai/education.png',
  msme: '/images/ai/msme.png',
  governance: '/images/ai/governance.png',
}

const focusAreas = [
  { title: 'Solutions', description: 'Custom AI solutions designed for specific industry challenges from predictive analytics to intelligent decision support systems.' },
  { title: 'Automation', description: 'Process automation that reduces manual effort, minimizes errors, and improves operational throughput across workflows.' },
  { title: 'Training', description: 'Practical AI training programs for teams and organizations building internal capability for sustainable AI adoption.' },
  { title: 'Consulting', description: 'Strategic AI consulting to help organizations identify high-impact use cases and build realistic implementation roadmaps.' },
  { title: 'Deployment', description: 'End-to-end deployment support from proof of concept to production-ready AI systems integrated with existing infrastructure.' },
  { title: 'Support', description: 'Ongoing monitoring, maintenance, and optimization of deployed AI systems to ensure sustained performance and reliability.' },
]

const applicationAreas = [
  { title: 'Education', description: 'AI-powered learning platforms, student performance analytics, automated assessment systems, and intelligent tutoring solutions.', image: aiImages.education },
  { title: 'Startups & MSMEs', description: 'Affordable AI tools for small businesses inventory optimization, customer insights, and operational automation.', image: aiImages.msme },
  { title: 'Industry', description: 'Predictive maintenance, quality control automation, supply chain optimization, and intelligent manufacturing systems.', image: aiImages.banner },
  { title: 'Governance & Safety', description: 'AI for public safety monitoring, resource allocation, citizen services automation, and data-driven policy support.', image: aiImages.governance },
]

const stats = [
  { value: 30, suffix: '+', label: 'AI Solutions Deployed' },
  { value: 15, suffix: '+', label: 'Industry Partners' },
  { value: 200, suffix: '+', label: 'Professionals Trained' },
  { value: 4, suffix: '', label: 'Sectors Served' },
]

const marqueeItems = [
  'Viksit Bharat 2047', 'IndiaAI Mission', 'Atmanirbhar Bharat', 'Digital India',
  'Machine Learning', 'Computer Vision', 'NLP Systems', 'Predictive Analytics',
  'Intelligent Automation', 'AI Consulting', 'Deep Learning', 'Data Engineering',
]

export default function AIAutomation() {
  const heroRef = useScrollReveal()
  const { ref: parallaxRef, offset } = useMouseParallax(25)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section id="home" className="overflow-hidden relative bg-gradient-to-br via-white to-indigo-50 section-padding-lg from-primary-50" ref={parallaxRef}>
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full blur-3xl bg-primary-200/20 animate-float-slow" style={{ transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)` }} />
        <div className="absolute left-10 bottom-20 w-64 h-64 rounded-full blur-3xl bg-indigo-300/15 animate-float" style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary-400/40 animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full bg-indigo-300/30 animate-float-delayed" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #01599f 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1700px] mx-auto relative" ref={heroRef}>
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="reveal">
                <p className="mb-3 text-sm font-medium tracking-wide uppercase text-primary-700">D.B. Infotech AI & Automation</p>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                  Practical AI.{' '}<span className="gradient-text-primary">Real-world impact.</span>
                </h1>
              </div>
              <div className="mb-8 space-y-4 leading-relaxed text-gray-600 reveal" style={{ transitionDelay: '0.15s' }}>
                <p>Aligned with Viksit Bharat 2047 and the IndiaAI Mission, D.B. Infotech's AI & Automation vertical focuses on building applied AI systems that improve efficiency, decision-making, and scalability across sectors.</p>
                <p>We believe AI should be accessible, purposeful, and grounded in real problems. Our work spans education, industry, governance, and safety always starting with the problem, not the technology.</p>
              </div>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <Button href="https://forms.gle/ha5xH7yz9t4YsazQ7">Discuss a Use Case<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
              </div>
            </div>
            <div className="hidden lg:block reveal-right">
              <TiltCard max={8} scale={1.03}>
                <div className="overflow-hidden relative rounded-2xl shadow-xl glow-primary img-zoom">
                  <img src={aiImages.banner} alt="Indian innovation team collaborating on AI systems" className="w-full h-[480px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-primary-900/30" />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="section-padding !py-0 -mt-8 relative z-10">
        <div className="max-w-[1700px] mx-auto"><Stats items={stats} variant="primary" /></div>
      </div>

      {/* Marquee */}
      <div className="bg-white border-gray-100 border-y">
        <div className="max-w-[1700px] mx-auto"><Marquee items={marqueeItems} variant="primary" speed={35} /></div>
      </div>

      {/* Focus Areas */}
      <Section id="focus" headline="What we do." subtitle="Six focused verticals that cover the full lifecycle of AI adoption from strategy and training to deployment and ongoing support." bg="white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <TiltCard key={area.title} max={5}>
              <Card variant="filled" {...area} />
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Visual break */}
      <ParallaxBanner image={aiImages.banner} alt="Indian innovation lab team reviewing AI systems" overlay="bg-gradient-to-r from-primary-900/80 via-primary-900/70 to-indigo-900/60">
        <div className="px-6 text-center text-white">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">AI that starts with the problem, not the technology.</h3>
          <p className="mx-auto max-w-2xl text-primary-200">We work across sectors to build systems that are purposeful, scalable, and aligned with India's development goals.</p>
        </div>
      </ParallaxBanner>

      {/* Application Areas */}
      <Section id="applications" headline="Where we apply it." subtitle="AI solutions tailored for the sectors that matter most from classrooms and small businesses to factories and government offices." bg="gray">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {applicationAreas.map((area) => (
            <TiltCard key={area.title} max={4}>
              <div className="overflow-hidden h-full rounded-xl border group bg-primary-50 border-primary-100 card-hover img-zoom">
                <img src={area.image} alt={area.title} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-700">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{area.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="vision" headline="Purpose-driven technology." bg="white">
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TiltCard max={6}>
              <div className="max-w-sm mx-auto p-4 rounded-xl border border-primary-100 shadow-sm transition-all duration-500 bg-gradient-to-b from-primary-50 to-white glow-primary-hover">
                <img src={aiImages.vision} alt="Indian technology leader reviewing AI insights" className="w-full h-[440px] rounded-lg object-contain object-center bg-white" />
              </div>
            </TiltCard>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2">
            <GradientBorderCard variant="primary">
              <div className="p-8">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Vision</h3>
                <p className="leading-relaxed text-gray-600">To be a trusted partner in India's AI journey building practical, responsible, and scalable systems that improve how organizations work, learn, and serve.</p>
              </div>
            </GradientBorderCard>
            <GradientBorderCard variant="primary">
              <div className="p-8">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Mission</h3>
                <p className="leading-relaxed text-gray-600">To democratize AI by making it accessible, understandable, and useful for organizations across India from small businesses to government institutions through applied solutions, training, and sustained support.</p>
              </div>
            </GradientBorderCard>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-gray-700">Aligned with:</span>
            <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium text-primary-700 border border-primary-100 transition-all hover:shadow-sm hover:border-primary-200 hover:scale-105">Viksit Bharat 2047</span>
            <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium text-primary-700 border border-primary-100 transition-all hover:shadow-sm hover:border-primary-200 hover:scale-105">IndiaAI Mission</span>
            <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium text-primary-700 border border-primary-100 transition-all hover:shadow-sm hover:border-primary-200 hover:scale-105">Atmanirbhar Bharat</span>
            <span className="px-4 py-1.5 bg-white rounded-full text-xs font-medium text-primary-700 border border-primary-100 transition-all hover:shadow-sm hover:border-primary-200 hover:scale-105">Digital India</span>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" headline="Let's explore what's possible." subtitle="Have a use case in mind, or want to understand how AI can work for your organization? We'd be happy to discuss." bg="gray">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <TiltCard max={8}>
            <a href="mailto:infodbinfotech@gmail.com" className="block p-6 text-center rounded-xl border transition-all duration-500 card-hover group glow-primary-hover bg-primary-700 border-primary-600 hover:bg-primary-800 shadow-lg shadow-primary-900/20">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 transition-colors text-primary-100 group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
              <div className="text-sm font-medium text-white">Email</div>
              <div className="mt-1 text-sm text-primary-100">infodbinfotech@gmail.com</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="tel:+918691082285" className="block p-6 text-center rounded-xl border transition-all duration-500 card-hover group glow-primary-hover bg-primary-700 border-primary-600 hover:bg-primary-800 shadow-lg shadow-primary-900/20">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 transition-colors text-primary-100 group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
              <div className="text-sm font-medium text-white">Phone</div>
              <div className="mt-1 text-sm text-primary-100">+918691082285</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="https://forms.gle/ha5xH7yz9t4YsazQ7" target="_blank" rel="noopener noreferrer" className="block p-6 text-center rounded-xl border transition-all duration-500 card-hover group glow-primary-hover bg-primary-700 border-primary-600 hover:bg-primary-800 shadow-lg shadow-primary-900/20">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 transition-colors text-primary-100 group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg></div>
              <div className="text-sm font-medium text-white">Use Case Form</div>
              <div className="mt-1 text-sm text-primary-100">Submit your requirements</div>
            </a>
          </TiltCard>
        </div>
      </Section>
    </div>
  )
}
