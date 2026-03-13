import { useState, useEffect } from 'react'
import { useWebsite } from '../../context/WebsiteContext'

const navItems = {
  preincubation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Learn', href: '#learn' },
    { label: 'Innovation Cell', href: '#innovation' },
    { label: 'Program', href: '#program' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ],
  ai: [
    { label: 'Home', href: '#home' },
    { label: 'Focus Areas', href: '#focus' },
    { label: 'Applications', href: '#applications' },
    { label: 'Vision', href: '#vision' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  fireandsafety: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Strength', href: '#strength' },
    { label: 'Services', href: '#services' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Industries', href: '#industries' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Header() {
  const { activeWebsite, currentSite } = useWebsite()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = navItems[activeWebsite] || []
  const isFire = activeWebsite === 'fireandsafety'

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'border-b shadow-sm glass border-gray-200/50'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-[1700px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex gap-3 items-center shrink-0">
          <img
            src="/logo/dbi-logo.png"
            alt="DB Infotech — Driven by Vision, Powered by Innovation"
            className="w-auto h-10 sm:h-11"
          />
          <div className="hidden pl-3 border-l border-gray-200 md:block">
            <div className="text-sm font-semibold leading-tight text-gray-900">
              {currentSite.brandName}
            </div>
            <div className="text-[10px] text-gray-400 leading-tight">
              {currentSite.fullName}
            </div>
          </div>
        </a>

        <nav className="hidden gap-1 items-center lg:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-3 py-2 text-sm text-gray-600 rounded-md transition-all duration-200 ${
                isFire ? 'hover:text-fire-700 hover:bg-fire-50' : 'hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-600 lg:hidden hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 lg:hidden glass animate-fade-in">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-sm text-gray-600 rounded-md transition-colors ${
                  isFire ? 'hover:text-fire-700 hover:bg-fire-50' : 'hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
