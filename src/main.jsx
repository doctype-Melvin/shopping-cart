import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Footer from './components/Footer'
import RouteSwitch from './RouteSwitch'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouteSwitch />
   <Footer />
  </React.StrictMode>,
)
