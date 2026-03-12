import { useWebsite } from '../../context/WebsiteContext'
import FAQ from '../common/FAQ'

const footerData = {
  preincubation: {
    faq: [
      { question: 'Who can apply for the Pre-Incubation Program?', answer: 'Students, early-stage innovators, and aspiring entrepreneurs from any discipline can apply. The program is designed for individuals with ideas at the concept or early prototype stage.' },
      { question: 'Is prior startup experience required?', answer: 'No. The program is specifically designed for those who are new to the innovation ecosystem. We provide mentorship and guidance from the ground up.' },
      { question: 'What support does DBI provide during pre-incubation?', answer: 'We offer mentorship, access to tools and workspace, funding guidance, networking opportunities, workshops, and exposure to industry professionals.' },
      { question: 'How long is the pre-incubation program?', answer: 'The program duration varies based on the cohort and individual project needs. Typically, it runs for 3 to 6 months with continuous mentorship.' },
      { question: 'Is there a fee to join?', answer: 'Program fees, if any, are minimal and structured to be accessible. Some cohorts may be fully funded through government or institutional partnerships.' },
    ],
    links: [
      { label: 'Program Overview', href: '#program' },
      { label: 'Innovation Cell', href: '#innovation' },
      { label: 'Events', href: '#events' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  ai: {
    faq: [
      { question: 'What kind of AI solutions does DB infotech develop?', answer: 'We develop applied AI systems including intelligent automation, predictive analytics, computer vision solutions, and NLP-based tools tailored for education, governance, industry, and MSMEs.' },
      { question: 'Can DB infotech help integrate AI into our existing systems?', answer: 'Yes. Our consulting and deployment services are designed to integrate AI capabilities into your existing infrastructure with minimal disruption.' },
      { question: 'Do you provide AI training for organizations?', answer: 'We offer customized AI training programs for teams and organizations, covering practical applications, tools, and implementation strategies.' },
      { question: 'Is DB Infotech aligned with government AI initiatives?', answer: 'Yes. Our work aligns with Viksit Bharat 2047 and the IndiaAI Mission, focusing on responsible, scalable AI solutions for national development.' },
    ],
    links: [
      { label: 'Focus Areas', href: '#focus' },
      { label: 'Applications', href: '#applications' },
      { label: 'Vision & Mission', href: '#vision' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  fire: {
    faq: [
      { question: 'What industries do you serve?', answer: 'We serve manufacturing, warehousing, commercial real estate, educational institutions, healthcare facilities, government buildings, and industrial complexes.' },
      { question: 'Do you provide safety audits?', answer: 'Yes. We conduct comprehensive fire safety audits, risk assessments, and compliance reviews aligned with national safety standards and regulations.' },
      { question: 'Can you automate our existing safety systems?', answer: 'Absolutely. We specialize in retrofitting existing safety infrastructure with IoT sensors, automated alerts, and intelligent monitoring systems.' },
      { question: 'What certifications do you hold?', answer: 'Our team holds certifications aligned with national fire safety standards. We work in association with government safety bodies and regulatory authorities.' },
    ],
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Automation', href: '#automation' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
}

export default function Footer() {
  const { activeWebsite, currentSite } = useWebsite()
  const data = footerData[activeWebsite]
  const isFire = activeWebsite === 'fire'

  return (
    <footer className={`${isFire ? 'bg-gray-950' : 'bg-gray-900'} text-white`}>
      {/* FAQ Section */}
      <div className="border-b border-gray-800 section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="p-6 text-white rounded-2xl bg-gray-800/50 md:p-8">
            <FAQ
              items={data.faq}
              title="Frequently Asked Questions"
              dark
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding !py-12">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-5">
                <img
                  src="/logo/dbi-logo.png"
                  alt="DBI Logo"
                  className="w-auto h-12 opacity-90 brightness-0 invert"
                />
              </div>
              <p className="mb-2 text-sm font-medium leading-relaxed text-gray-400">
                {currentSite.brandName}
              </p>
              <p className="mb-4 text-xs leading-relaxed text-gray-500">
                {currentSite.fullName}
              </p>
              <p className="text-xs leading-relaxed text-gray-500">
                All partnerships, collaborations, and engagements are subject to mutual non-disclosure agreements to protect intellectual property and sensitive information.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5">
                {data.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm text-gray-400 transition-colors ${
                        isFire ? 'hover:text-fire-400' : 'hover:text-primary-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners & Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-300">Associations</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 bg-gray-800 rounded-md text-xs text-gray-400">
                  Govt. of India
                </span>
                <span className="px-3 py-1.5 bg-gray-800 rounded-md text-xs text-gray-400">
                  Startup India
                </span>
                <span className="px-3 py-1.5 bg-gray-800 rounded-md text-xs text-gray-400">
                  Atmanirbhar Bharat
                </span>
                {activeWebsite === 'ai' && (
                  <span className="px-3 py-1.5 bg-gray-800 rounded-md text-xs text-gray-400">
                    IndiaAI Mission
                  </span>
                )}
              </div>
              <div className="space-y-1 text-xs text-gray-500">
                <a href="#" className="block transition-colors hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="block transition-colors hover:text-gray-400">Terms of Service</a>
                <a href="#" className="block transition-colors hover:text-gray-400">Disclaimer</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 justify-between items-center pt-6 mt-10 border-t border-gray-800 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Darade Budhwant Infotech Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built with purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
