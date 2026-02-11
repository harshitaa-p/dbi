import { useState } from 'react'

function FAQItem({ question, answer, isOpen, onToggle, dark }) {
  return (
    <div className={`border-b last:border-0 ${dark ? 'border-gray-700' : 'border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-sm font-medium transition-colors pr-4 ${
          dark ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-primary-700'
        }`}>
          {question}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${dark ? 'text-gray-500' : 'text-gray-400'}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ items, title = 'Frequently Asked Questions', dark = false }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      {title && (
        <h3 className={`text-xl font-semibold mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      )}
      <div className="divide-y-0">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            dark={dark}
          />
        ))}
      </div>
    </div>
  )
}
