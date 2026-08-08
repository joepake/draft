import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { initI18n } from './i18n/index.js'
import './index.css'

// The active language pack is fetched before the first paint, so a French
// visitor never sees an English frame that then swaps under them.
initI18n().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
})
