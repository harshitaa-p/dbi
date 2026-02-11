import useTilt from '../../hooks/useTilt'

export default function TiltCard({ children, className = '', max = 6, scale = 1.02 }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max, scale })

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
