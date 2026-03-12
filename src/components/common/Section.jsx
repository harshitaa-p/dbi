import useScrollReveal from '../../hooks/useScrollReveal'

export default function Section({ id, headline, subtitle, children, className = '', bg = 'white', accentColor = 'primary' }) {
  const ref = useScrollReveal()

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    fire: 'bg-fire-50',
    dark: 'bg-gray-900 text-white',
  }

  const accentLine = {
    primary: 'bg-primary-500',
    fire: 'bg-fire-500',
  }

  return (
    <section id={id} className={`section-padding ${bgClasses[bg]} ${className}`} ref={ref}>
      <div className="max-w-[1700px] mx-auto">
        {(headline || subtitle) && (
          <div className="mb-12 reveal">
            <div className={`h-1 w-12 ${accentLine[accentColor] || accentLine.primary} rounded-full mb-6`} />
            {headline && (
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
                {headline}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-3xl leading-relaxed ${bg === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="reveal">
          {children}
        </div>
      </div>
    </section>
  )
}
