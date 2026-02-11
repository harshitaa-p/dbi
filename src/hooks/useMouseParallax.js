import { useState, useEffect, useRef } from 'react'

export default function useMouseParallax(strength = 20) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = ((e.clientX - centerX) / (rect.width / 2)) * strength
      const y = ((e.clientY - centerY) / (rect.height / 2)) * strength
      setOffset({ x, y })
    }

    function handleLeave() {
      setOffset({ x: 0, y: 0 })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return { ref, offset }
}
