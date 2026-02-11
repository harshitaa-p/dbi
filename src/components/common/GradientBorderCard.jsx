import TiltCard from './TiltCard'

export default function GradientBorderCard({ children, className = '', variant = 'primary' }) {
  const gradients = {
    primary: 'from-primary-400 via-indigo-400 to-primary-600',
    fire: 'from-fire-400 via-orange-400 to-fire-600',
  }

  return (
    <TiltCard max={5} scale={1.01}>
      <div className={`relative group rounded-xl ${className}`}>
        {/* Animated gradient border */}
        <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${gradients[variant]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
        <div className="relative bg-white rounded-xl h-full">
          {children}
        </div>
      </div>
    </TiltCard>
  )
}
