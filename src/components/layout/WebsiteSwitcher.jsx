import { useWebsite } from '../../context/WebsiteContext'

export default function WebsiteSwitcher() {
  const { activeWebsite, switchWebsite, websites } = useWebsite()

  const siteKeys = Object.keys(websites)

  return (
    <div className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2">
          <img src="/logo/dbi-logo.png" alt="DBI" className="h-6 brightness-0 invert opacity-70" />
        </div>
        <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-1 mx-auto sm:mx-0">
          {siteKeys.map((key) => {
            const site = websites[key]
            const isActive = activeWebsite === key
            return (
              <button
                key={key}
                onClick={() => switchWebsite(key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? key === 'fire'
                      ? 'bg-fire-700 text-white shadow-sm'
                      : 'bg-primary-700 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="hidden md:inline">{site.label}</span>
                <span className="md:hidden">{site.shortLabel}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
