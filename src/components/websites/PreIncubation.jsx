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

// Pexels CDN helper
const px = (id, w = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const learningDomains = [
  { title: 'Engineering & Technology', description: 'Explore embedded systems, IoT, robotics, and practical engineering challenges with hands-on project-based learning.', image: px(3861958) },
  { title: 'Software & Digital', description: 'Web development, mobile applications, cloud computing, and emerging software technologies for modern problem-solving.', image: px(5668838) },
  { title: 'AI & Data Science', description: 'Machine learning fundamentals, data analytics, and applied AI — accessible to beginners and intermediate learners alike.', image: px(5496464) },
  { title: 'Manufacturing & Safety', description: 'Industrial processes, quality control, fire safety systems, and automation in manufacturing environments.', image: px(3862632) },
  { title: 'Sustainability & Social', description: 'Green technology, social entrepreneurship, and community-driven innovation for sustainable development.', image: px(3184418) },
  { title: 'Business & Strategy', description: 'Lean startup methodology, business model design, market research, and financial planning for early ventures.', image: px(7688454) },
]

const innovationFeatures = [
  { title: 'Tools & Resources', description: 'Access to prototyping tools, digital platforms, and workspace facilities designed for early-stage experimentation.' },
  { title: 'Mentorship', description: 'Guidance from experienced entrepreneurs, industry professionals, and academic mentors who understand the journey.' },
  { title: 'Funding Guidance', description: 'Assistance navigating grants, government schemes, seed funding, and early-stage investment opportunities.' },
  { title: 'Networking', description: 'Connect with fellow innovators, industry partners, potential collaborators, and institutional supporters.' },
  { title: 'Workshops & Challenges', description: 'Regularly organized problem-solving workshops, design challenges, and innovation sprints to sharpen skills.' },
]

const programSections = [
  { title: 'Pre-Incubation Center', description: 'A structured environment within institutions where students can explore, validate, and refine their ideas under guided mentorship before formal incubation.' },
  { title: 'Digital Platforms', description: 'Online tools and collaboration spaces that extend learning beyond physical boundaries — enabling remote mentorship, progress tracking, and resource access.' },
  { title: 'Field-level Engagement', description: 'Real-world exposure through industry visits, community engagement, and on-ground problem identification that grounds innovation in actual needs.' },
  { title: 'Continuous Mentorship', description: 'Ongoing support from idea stage through prototype development, ensuring no student innovator is left without direction at critical stages.' },
]

const events = [
  { title: 'Hackathons', description: 'Intensive innovation sprints where teams build solutions to real challenges within defined timeframes.', image: px(7414283) },
  { title: 'Kumbhathon', description: 'A unique innovation event focused on solving challenges related to large-scale gatherings and public management.', image: px(8278898) },
  { title: 'Workshops', description: 'Hands-on sessions covering design thinking, prototyping, business planning, and technical skill development.', image: px(3153199) },
  { title: 'Demo Days', description: 'Showcase events where student teams present their projects to mentors, investors, and industry professionals.', image: px(7793645) },
]

const stats = [
  { value: 500, suffix: '+', label: 'Students Mentored' },
  { value: 50, suffix: '+', label: 'Projects Pre-Incubated' },
  { value: 25, suffix: '+', label: 'Partner Institutions' },
  { value: 100, suffix: '+', label: 'Events Conducted' },
]

const marqueeItems = [
  'Startup India', 'Atmanirbhar Bharat', 'Digital India', 'Govt. of India',
  'Innovation Cell', 'Design Thinking', 'Mentorship', 'Prototyping',
  'Incubation Support', 'Industry Connect', 'Hackathons', 'Skill Development',
]

export default function PreIncubation() {
  const heroRef = useScrollReveal()
  const { ref: parallaxRef, offset } = useMouseParallax(25)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section id="home" className="overflow-hidden relative bg-gradient-to-br via-white to-blue-50 section-padding-lg from-primary-50" ref={parallaxRef}>
        {/* Floating decoratives — respond to mouse */}
        <div
          className="absolute left-10 top-20 w-72 h-72 rounded-full blur-3xl bg-primary-200/20 animate-float"
          style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
        />
        <div
          className="absolute right-10 bottom-10 w-96 h-96 rounded-full blur-3xl bg-indigo-200/20 animate-float-slow"
          style={{ transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)` }}
        />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-primary-400/30 animate-pulse-soft" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-indigo-400/30 animate-float-delayed" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #01599f 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1700px] mx-auto relative" ref={heroRef}>
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="reveal">
                <p className="mb-3 text-sm font-medium tracking-wide uppercase text-primary-700">
                  Darade Budhwant Infotech Pvt. Ltd.
                </p>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                  Driven by vision.{' '}
                  <span className="gradient-text-primary">Powered by innovation.</span>
                </h1>
              </div>
              <div className="mb-8 space-y-4 leading-relaxed text-gray-600 reveal" style={{ transitionDelay: '0.15s' }}>
                <p>
                  Every meaningful innovation begins quietly as an idea shaped by curiosity.
                  Yet, many ideas never leave the classroom, not due to lack of potential, but because guidance, resources, and exposure are missing.
                </p>
                <p>
                  The DB Infotech Pre-Incubation Center exists to bridge this gap. We help students and institutions build structured environments where ideas can be explored, refined, and transformed into working prototypes.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <Button href="#">
                  Explore the Program
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block reveal-right">
              <TiltCard max={8} scale={1.03}>
                <div className="overflow-hidden relative rounded-2xl shadow-xl glow-primary img-zoom">
                  <img
                    src="/images/student.jpeg"
                    alt="Students collaborating on campus"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-primary-900/30" />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="section-padding !py-0 -mt-8 relative z-10">
        <div className="max-w-[1700px] mx-auto">
          <Stats items={stats} variant="primary" />
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-white border-gray-100 border-y">
        <div className="max-w-[1700px] mx-auto">
          <Marquee items={marqueeItems} variant="primary" speed={40} />
        </div>
      </div>

      {/* About */}
      <Section id="about" headline="Building ecosystems where early ideas find direction." bg="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <TiltCard max={6}>
              <div className="overflow-hidden rounded-xl transition-all duration-500 img-zoom glow-primary-hover">
                <img src={px(3184611, 600)} alt="Indian professionals in a team discussion" className="w-full h-full object-cover min-h-[240px]" />
              </div>
            </TiltCard>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2">
            <GradientBorderCard variant="primary">
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Vision</h3>
                <p className="text-sm leading-relaxed text-gray-600">To enable innovation by supporting startups, strengthening safety, and developing practical, AI-driven solutions that serve communities and industries across India.</p>
              </div>
            </GradientBorderCard>
            <GradientBorderCard variant="primary">
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Our Mission</h3>
                <p className="text-sm leading-relaxed text-gray-600">To empower students and early-stage innovators through mentorship, technology, and real-world exposure — creating pathways from curiosity to capability.</p>
              </div>
            </GradientBorderCard>
          </div>
        </div>
      </Section>

      {/* Learn */}
      <Section id="learn" headline="Learning beyond disciplines." subtitle="Students explore innovation across multiple domains through workshops, talks, and hands-on sessions designed to build both understanding and capability." bg="gray">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningDomains.map((domain) => (
            <TiltCard key={domain.title} max={5}>
              <div className="overflow-hidden h-full bg-white rounded-xl border border-gray-100 hover:border-gray-200 card-hover img-zoom">
                <img src={domain.image} alt={domain.title} className="object-cover w-full h-40" />
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{domain.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{domain.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Innovation Cell */}
      <Section id="innovation" headline="A space designed for exploration." subtitle="The Innovation Cell provides the infrastructure, guidance, and community that early innovators need to move from concept to creation." bg="white">
        <ParallaxBanner image="/images/lab.jpeg" alt="Innovation lab workspace" overlay="bg-gradient-to-r from-primary-900/60 to-indigo-900/40">
          <div className="px-6 text-center text-white">
            <h3 className="mb-3 text-2xl font-bold md:text-3xl">Where curiosity meets capability.</h3>
            <p className="mx-auto max-w-2xl text-primary-200">A structured space for experimentation, collaboration, and growth.</p>
          </div>
        </ParallaxBanner>
        <div className="grid grid-cols-1 gap-6 mt-10 mb-10 sm:grid-cols-2 lg:grid-cols-3">
          {innovationFeatures.map((feature) => (
            <Card key={feature.title} variant="filled" {...feature} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="secondary" href="#">
            Join an Innovation Activity
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Pre-Incubation Program */}
      <Section id="program" headline="From idea to intent." subtitle="Aligned with the Atmanirbhar Bharat vision, our pre-incubation program focuses on indigenous, scalable innovation — building capability from the ground up." bg="gray">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <TiltCard max={6}>
              <div className="overflow-hidden rounded-xl transition-all duration-500 img-zoom glow-primary-hover">
                <img src={px(5699475, 600)} alt="Mentoring session with Indian professionals" className="w-full h-full object-cover min-h-[300px]" />
              </div>
            </TiltCard>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:col-span-3 sm:grid-cols-2">
            {programSections.map((section, i) => (
              <GradientBorderCard key={section.title} variant="primary">
                <div className="p-6">
                  <div className="flex gap-4 items-start">
                    <span className="text-primary-700 font-bold text-lg mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{section.description}</p>
                    </div>
                  </div>
                </div>
              </GradientBorderCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Events */}
      <Section id="events" headline="Where ideas meet momentum." subtitle="Regular events that bring together students, mentors, and industry professionals in spaces designed for collaboration and growth." bg="white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <TiltCard key={event.title} max={4}>
              <div className="overflow-hidden h-full rounded-xl border group bg-primary-50 border-primary-100 card-hover img-zoom">
                <img src={event.image} alt={event.title} className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-700">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{event.description}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" headline="Let's start a conversation." subtitle="Whether you're a student with an idea, an institution looking to build innovation capacity, or a partner interested in collaboration — we'd like to hear from you." bg="gray">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <TiltCard max={8}>
            <a href="mailto:contact@dbi.co.in" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-primary-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-primary-700">Email</div>
              <div className="mt-1 text-xs text-gray-500">contact@dbi.co.in</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="tel:+919999999999" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-primary-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-primary-700">Phone</div>
              <div className="mt-1 text-xs text-gray-500">+91 99999 99999</div>
            </a>
          </TiltCard>
          <TiltCard max={8}>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block p-6 text-center bg-white rounded-xl border border-gray-100 transition-all duration-500 card-hover group glow-primary-hover">
              <div className="flex justify-center mb-3"><svg className="w-6 h-6 text-gray-400 transition-colors group-hover:text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg></div>
              <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-primary-700">WhatsApp</div>
              <div className="mt-1 text-xs text-gray-500">Chat with us</div>
            </a>
          </TiltCard>
        </div>
      </Section>
    </div>
  )
}
