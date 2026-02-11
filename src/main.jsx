import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WebsiteProvider } from './context/WebsiteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebsiteProvider>
      <App />
    </WebsiteProvider>
  </React.StrictMode>,
)
