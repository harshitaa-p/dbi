import { useWebsite } from './context/WebsiteContext'
import WebsiteSwitcher from './components/layout/WebsiteSwitcher'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/common/ScrollProgress'
import Chatbot from './components/common/Chatbot'
import PreIncubation from './components/websites/PreIncubation'
import AIAutomation from './components/websites/AIAutomation'
import FireAndSafety from './components/websites/FireAndSafety'

const websiteComponents = {
  preincubation: PreIncubation,
  ai: AIAutomation,
  fireandsafety: FireAndSafety,
}

export default function App() {
  const { activeWebsite, isTransitioning } = useWebsite()

  const ActiveSite = websiteComponents[activeWebsite]

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <WebsiteSwitcher />
      <Header />
      <main
        className={`flex-1 transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
      >
        <ActiveSite />
      </main>
      <Footer />
      <Chatbot site={activeWebsite} />
    </div>
  )
}
