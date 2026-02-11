export default function Card({ icon, title, description, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-white border border-gray-100 hover:border-gray-200',
    filled: 'bg-gray-50 border border-gray-100 hover:bg-white',
    accent: 'bg-primary-50 border border-primary-100',
    fire: 'bg-fire-50 border border-fire-100',
  }

  return (
    <div className={`rounded-xl p-6 card-hover ${variants[variant]} ${className}`}>
      {icon && (
        <div className="mb-4 text-2xl">{icon}</div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  )
}
