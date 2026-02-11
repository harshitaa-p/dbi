import { useRef, useCallback } from 'react'

export default function useTilt({ max = 8, speed = 400, scale = 1.02 } = {}) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -max
    const rotateY = ((x - centerX) / centerX) * max

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    el.style.transition = `transform ${speed / 4}ms ease-out`
  }, [max, speed, scale])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    el.style.transition = `transform ${speed}ms ease-out`
  }, [speed])

  return { ref, onMouseMove, onMouseLeave }
}
