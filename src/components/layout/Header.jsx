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
  fire: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Automation', href: '#automation' },
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
  const isFire = activeWebsite === 'fire'

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'glass shadow-sm border-b border-gray-200/50'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo/dbi-logo.png"
            alt="DBI — Driven by Vision, Powered by Innovation"
            className="h-10 sm:h-11 w-auto"
          />
          <div className="hidden md:block border-l border-gray-200 pl-3">
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              {currentSite.brandName}
            </div>
            <div className="text-[10px] text-gray-400 leading-tight">
              {currentSite.fullName}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
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
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
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
        <div className="lg:hidden border-t border-gray-100 glass animate-fade-in">
          <nav className="px-6 py-4 flex flex-col gap-1">
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
