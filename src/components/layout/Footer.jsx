import { useWebsite } from '../../context/WebsiteContext'
import { siteContent } from '../../data/siteContent'
import FAQ from '../common/FAQ'
import TransparentLogo from '../common/TransparentLogo'

export default function Footer() {
  const { activeWebsite, currentSite } = useWebsite()
  const data = siteContent[activeWebsite]
  const isFire = activeWebsite === 'fireandsafety'

  return (
    <footer className={`${isFire ? 'bg-gray-950' : 'bg-gray-900'} text-white`}>
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

      <div className="section-padding !py-12">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="mb-5">
                <TransparentLogo
                  alt="DBI Logo"
                  className="object-contain w-auto h-12"
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
