import { useState, useRef, useEffect } from 'react'

const data = {
  preincubation: [
    { q: 'What is pre-incubation?', a: 'Pre-incubation supports early startup ideas.' },
    { q: 'Who can join?', a: 'Students, innovators and entrepreneurs.' },
    { q: 'Program duration?', a: 'Usually 3 to 6 months.' },
    { q: 'Do I need a startup idea?', a: 'Yes an idea is required.' },
    { q: 'Is funding provided?', a: 'Some programs give seed funding.' },
    { q: 'What support is given?', a: 'Mentorship, workspace and training.' },
    { q: 'Is mentorship available?', a: 'Yes mentors guide startups.' },
    { q: 'Do I need a prototype?', a: 'Not necessary but useful.' },
    { q: 'How to apply?', a: 'Apply through application form.' },
    { q: 'Is there investor pitch?', a: 'Yes during demo day.' },
    { q: 'Can students join?', a: 'Yes students are encouraged.' },
    { q: 'Is there team requirement?', a: 'Solo founders are also allowed.' },
    { q: 'What training is provided?', a: 'Business model and startup training.' },
    { q: 'Is it free?', a: 'Many programs are free.' },
    { q: 'Do startups get office space?', a: 'Yes some incubators provide workspace.' },
    { q: 'What is startup incubation?', a: 'It helps startups grow faster.' },
    { q: 'What industries are accepted?', a: 'Technology, healthcare, education etc.' },
    { q: 'Is online program available?', a: 'Yes some programs are online.' },
    { q: 'Can I apply with idea only?', a: 'Yes idea stage is allowed.' },
    { q: 'What is demo day?', a: 'Startups present to investors.' },
    { q: 'Are workshops conducted?', a: 'Yes business workshops are common.' },
    { q: 'Is networking possible?', a: 'Yes with mentors and investors.' },
    { q: 'Is certificate given?', a: 'Some programs provide certificate.' },
    { q: 'Can startups get funding later?', a: 'Yes after incubation.' },
    { q: 'What is goal of pre-incubation?', a: 'Convert idea into startup.' },
  ],
  fireandsafety: [
    { q: 'What is fire safety?', a: 'Practices to prevent fire accidents.' },
    { q: 'Main cause of fires?', a: 'Electrical faults and gas leaks.' },
    { q: 'What is fire extinguisher?', a: 'Device used to stop small fires.' },
    { q: 'Types of extinguishers?', a: 'Water, Foam, CO2 and Dry Powder.' },
    { q: 'What is fire alarm?', a: 'Device alerting people during fire.' },
    { q: 'Emergency number?', a: 'Dial 101.' },
    { q: 'What is fire drill?', a: 'Practice emergency evacuation.' },
    { q: 'What is smoke detector?', a: 'Detects smoke early.' },
    { q: 'What is fire exit?', a: 'Emergency exit path.' },
    { q: 'How to prevent fire?', a: 'Maintain electrical systems.' },
    { q: 'What is Class A fire?', a: 'Fire from solid materials.' },
    { q: 'What is Class B fire?', a: 'Fire from flammable liquids.' },
    { q: 'What is Class C fire?', a: 'Fire from electrical equipment.' },
    { q: 'What is fire blanket?', a: 'Used to smother small fires.' },
    { q: 'Why fire drills important?', a: 'Prepare people for emergencies.' },
    { q: 'What should you do in fire?', a: 'Evacuate immediately.' },
    { q: 'How to use extinguisher?', a: 'Use PASS method.' },
    { q: 'What is PASS?', a: 'Pull, Aim, Squeeze, Sweep.' },
    { q: 'Why smoke detectors important?', a: 'Early warning saves lives.' },
    { q: 'Where install alarms?', a: 'Near bedrooms and kitchens.' },
    { q: 'What is fire hazard?', a: 'Anything that may cause fire.' },
    { q: 'What is evacuation plan?', a: 'Safe exit strategy.' },
    { q: 'Who handles fire emergencies?', a: 'Fire department.' },
    { q: 'What is sprinkler system?', a: 'Automatic fire control system.' },
    { q: 'What is fire safety training?', a: 'Training to handle fires.' },
  ],
  ai: [
    { q: 'What is AI?', a: 'Machines performing intelligent tasks.' },
    { q: 'What is Machine Learning?', a: 'Learning from data.' },
    { q: 'What is Deep Learning?', a: 'Neural network based learning.' },
    { q: 'What is chatbot?', a: 'AI program for conversation.' },
    { q: 'Examples of AI?', a: 'Alexa, Siri, ChatGPT.' },
    { q: 'AI in healthcare?', a: 'Disease detection.' },
    { q: 'AI in education?', a: 'Personalized learning.' },
    { q: 'AI in business?', a: 'Automation and analytics.' },
    { q: 'AI programming language?', a: 'Python is most popular.' },
    { q: 'Is AI replacing jobs?', a: 'AI changes job roles.' },
    { q: 'What is NLP?', a: 'Natural Language Processing.' },
    { q: 'What is computer vision?', a: 'Image understanding.' },
    { q: 'What is AI model?', a: 'Algorithm trained on data.' },
    { q: 'What is neural network?', a: 'Brain inspired algorithm.' },
    { q: 'What is dataset?', a: 'Collection of data.' },
    { q: 'What is supervised learning?', a: 'Training with labeled data.' },
    { q: 'What is unsupervised learning?', a: 'Finding patterns in data.' },
    { q: 'What is reinforcement learning?', a: 'Learning via rewards.' },
    { q: 'What is AI ethics?', a: 'Responsible AI usage.' },
    { q: 'What is generative AI?', a: 'AI creating new content.' },
    { q: 'What is robotics?', a: 'AI powered machines.' },
    { q: 'What is automation?', a: 'Tasks done automatically.' },
    { q: 'Future of AI?', a: 'AI will transform industries.' },
    { q: 'AI in cars?', a: 'Self driving technology.' },
    { q: 'What is AI assistant?', a: 'Digital helper software.' },
  ],
}

const siteLabels = {
  preincubation: 'Pre-Incubation',
  fireandsafety: 'Fire & Safety',
  ai: 'AI & Automation',
}

const accentMap = {
  preincubation: {
    btn: 'bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30',
    header: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    userMsg: 'bg-yellow-500 text-white',
    quick: 'border-yellow-200 text-yellow-700 hover:bg-yellow-50',
    sendBtn: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    ring: 'focus:border-yellow-300',
  },
  fireandsafety: {
    btn: 'bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30',
    header: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    userMsg: 'bg-yellow-500 text-white',
    quick: 'border-yellow-200 text-yellow-700 hover:bg-yellow-50',
    sendBtn: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    ring: 'focus:border-yellow-300',
  },
  ai: {
    btn: 'bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30',
    header: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    userMsg: 'bg-yellow-500 text-white',
    quick: 'border-yellow-200 text-yellow-700 hover:bg-yellow-50',
    sendBtn: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    ring: 'focus:border-yellow-300',
  },
}

function findAnswer(query, faqs) {
  const lower = query.toLowerCase().trim()
  if (!lower) return null

  let bestMatch = null
  let bestScore = 0

  for (const faq of faqs) {
    const qWords = faq.q.toLowerCase().replace(/[?]/g, '').split(/\s+/)
    const inputWords = lower.replace(/[?]/g, '').split(/\s+/)
    let score = 0
    for (const word of inputWords) {
      if (word.length < 2) continue
      if (qWords.some((w) => w.includes(word) || word.includes(w))) {
        score += word.length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = faq
    }
  }

  if (bestMatch && bestScore >= 3) return bestMatch.a
  return "Sorry, I couldn't find an answer to that. Please try rephrasing or pick from the suggested questions."
}

export default function Chatbot({ site = 'preincubation' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [showQuestions, setShowQuestions] = useState(true)
  const messagesEndRef = useRef(null)

  const faqs = data[site] || data.preincubation
  const colors = accentMap[site] || accentMap.preincubation
  const label = siteLabels[site] || 'Assistant'

  useEffect(() => {
    setMessages([{ from: 'bot', text: `Hi! I'm the ${label} assistant. Ask me anything or pick a question below.` }])
    setShowQuestions(true)
  }, [site, label])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (text) => {
    const query = text || input.trim()
    if (!query) return

    setMessages((prev) => [...prev, { from: 'user', text: query }])
    setInput('')
    setShowQuestions(false)

    setTimeout(() => {
      const answer = findAnswer(query, faqs)
      setMessages((prev) => [...prev, { from: 'bot', text: answer }, { from: 'action', text: 'more' }])
    }, 350)
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen && (
        <div className="flex overflow-hidden flex-col mb-4 w-80 bg-white rounded-2xl border border-gray-200 shadow-2xl sm:w-96" style={{ height: '500px' }}>
          {/* Header */}
          <div className={`${colors.header} text-white px-5 py-4 flex items-center justify-between shrink-0`}>
            <div className="flex gap-3 items-center">
              <div className="flex justify-center items-center w-9 h-9 bg-white/20 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-white/70">Ask me anything</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full transition hover:bg-white/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto flex-1 px-4 py-4 space-y-3">
            {messages.map((msg, i) => {
              if (msg.from === 'action' && msg.text === 'more') {
                const isLast = i === messages.length - 1
                if (!isLast) return null
                return (
                  <div key={i} className="flex justify-start">
                    <button
                      onClick={() => {
                        setMessages((prev) => prev.filter((_, idx) => idx !== i))
                        setShowQuestions(true)
                      }}
                      className={`px-4 py-2 text-xs font-medium rounded-full border transition ${colors.quick}`}
                    >
                      More questions
                    </button>
                  </div>
                )
              }
              return (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? `${colors.userMsg} rounded-br-sm`
                      : 'bg-gray-100 text-gray-700 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />

            {showQuestions && (
              <div className="pt-2 space-y-2">
                <p className="text-xs font-medium text-gray-400">Popular questions:</p>
                {faqs.slice(0, 5).map((faq) => (
                  <button
                    key={faq.q}
                    onClick={() => handleSend(faq.q)}
                    className={`block w-full text-left px-3 py-2 text-xs rounded-xl border transition ${colors.quick}`}
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2 items-center px-4 py-3 border-t border-gray-100 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className={`flex-1 px-4 py-2.5 text-sm bg-gray-50 rounded-full border border-gray-200 outline-none transition ${colors.ring}`}
            />
            <button onClick={() => handleSend()} className={`p-2.5 rounded-full transition ${colors.sendBtn}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`${colors.btn} text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
        </button>
      )}
    </div>
  )
}
