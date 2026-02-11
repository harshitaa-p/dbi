import useParallax from '../../hooks/useParallax'

export default function ParallaxBanner({ image, alt, overlay, children }) {
  const { ref, offset } = useParallax(0.3)

  return (
    <div ref={ref} className="relative overflow-hidden h-72 md:h-96">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-[130%] object-cover"
        style={{
          transform: `translateY(${-offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div className={`absolute inset-0 ${overlay || 'bg-gray-900/70'} flex items-center justify-center`}>
        {children}
      </div>
    </div>
  )
}
