
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { Scroll } from 'lucide-react'
import ScrollToTop from './components/ScrollToTop.jsx'
import Clicktotop from './components/Clicktotop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ScrollToTop />
    <Clicktotop />
  </BrowserRouter>,
)
