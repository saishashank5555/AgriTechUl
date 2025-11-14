import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter basename="/AgriTechUl/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
