export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const variants = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 shadow-sm hover:shadow-md',
    secondary: 'bg-white text-primary-700 border border-primary-200 hover:bg-primary-50',
    fire: 'bg-fire-700 text-white hover:bg-fire-800 shadow-sm hover:shadow-md',
    fireSecondary: 'bg-white text-fire-700 border border-fire-200 hover:bg-fire-50',
    ghost: 'text-primary-700 hover:bg-primary-50',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm',
  }

  const classes = `btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
