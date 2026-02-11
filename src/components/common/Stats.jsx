import { useState, useEffect, useRef } from 'react'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true
          const start = 0
          const startTime = performance.now()

          function animate(currentTime) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * (end - start) + start))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats({ items, variant = 'primary' }) {
  const colors = {
    primary: {
      bg: 'bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900',
      number: 'text-white',
      label: 'text-primary-200',
      divider: 'bg-primary-700/50',
    },
    fire: {
      bg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-fire-950',
      number: 'text-white',
      label: 'text-fire-300',
      divider: 'bg-fire-800/50',
    },
  }

  const c = colors[variant] || colors.primary

  return (
    <div className={`${c.bg} rounded-2xl p-8 md:p-12`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className={`text-3xl md:text-4xl font-bold ${c.number} mb-2`}>
              <CountUp end={item.value} suffix={item.suffix || ''} />
            </div>
            <div className={`text-sm ${c.label}`}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
