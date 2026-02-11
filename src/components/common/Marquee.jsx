export default function Marquee({ items, speed = 30, variant = 'primary' }) {
  const colors = {
    primary: 'border-primary-200 text-primary-700 bg-primary-50',
    fire: 'border-fire-200 text-fire-700 bg-fire-50',
  }
  const c = colors[variant] || colors.primary

  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium ${c}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
