import { useState, useEffect } from 'react'
import { useWebsite } from '../../context/WebsiteContext'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const { activeWebsite } = useWebsite()
  const isFire = activeWebsite === 'fire'

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
      <div
        className={`h-full transition-all duration-150 ease-out ${
          isFire
            ? 'bg-gradient-to-r from-fire-500 via-fire-400 to-orange-400'
            : 'bg-gradient-to-r from-primary-500 via-primary-400 to-indigo-400'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
