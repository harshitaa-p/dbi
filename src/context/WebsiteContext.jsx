import { createContext, useContext, useState, useCallback } from 'react'

const WEBSITES = {
  preincubation: {
    id: 'preincubation',
    label: 'Pre-Incubation',
    shortLabel: 'Pre-Incubation',
    color: 'primary',
    brandName: 'D.B. Infotech Pvt. Ltd.',
    fullName: 'Driven by Vision, Powered by Innovation',
  },
  fireandsafety: {
    id: 'fireandsafety',
    label: 'Fire Safety Services',
    shortLabel: 'Fire',
    color: 'fire',
    brandName: 'Fire Safety Services',
    fullName: 'Keeping Your Safe!',
  },
  ai: {
    id: 'ai',
    label: 'AI & Automation',
    shortLabel: 'AI & Auto',
    color: 'primary',
    brandName: 'D.B. Infotech Pvt. Ltd.',
    fullName: 'Driven by Vision, Powered by Innovation',
  },
  
}

const WebsiteContext = createContext(null)

export function WebsiteProvider({ children }) {
  const [activeWebsite, setActiveWebsite] = useState('preincubation')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const switchWebsite = useCallback((websiteId) => {
    if (websiteId === activeWebsite) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveWebsite(websiteId)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setTimeout(() => setIsTransitioning(false), 50)
    }, 200)
  }, [activeWebsite])

  const currentSite = WEBSITES[activeWebsite]

  return (
    <WebsiteContext.Provider value={{
      activeWebsite,
      switchWebsite,
      isTransitioning,
      currentSite,
      websites: WEBSITES,
    }}>
      {children}
    </WebsiteContext.Provider>
  )
}

export function useWebsite() {
  const context = useContext(WebsiteContext)
  if (!context) throw new Error('useWebsite must be used within WebsiteProvider')
  return context
}
