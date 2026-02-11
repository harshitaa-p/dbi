import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe the element itself and any children with reveal classes
    const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    revealEls.forEach((child) => observer.observe(child))

    // Also observe the element if it has a reveal class
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right') || el.classList.contains('reveal-scale')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
