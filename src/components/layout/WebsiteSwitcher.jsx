import { useWebsite } from '../../context/WebsiteContext'

export default function WebsiteSwitcher() {
  const { activeWebsite, switchWebsite, websites } = useWebsite()

  const siteKeys = Object.keys(websites)

  return (
    <div className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-[1700px] mx-auto px-6 py-3 flex items-center justify-center">
        <div className="flex gap-1.5 items-center p-1.5 mx-auto bg-gray-800 rounded-xl">
          {siteKeys.map((key) => {
            const site = websites[key]
            const isActive = activeWebsite === key
            return (
              <button
                key={key}
                onClick={() => switchWebsite(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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
