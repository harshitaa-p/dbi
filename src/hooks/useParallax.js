import { useState, useEffect, useRef } from 'react'

export default function useParallax(speed = 0.3) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onScroll() {
      const rect = el.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(scrolled * speed)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return { ref, offset }
}
