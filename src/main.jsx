import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//! Test rapide de la méthode du service (Hors React)
//? Uniquement pour le dev -> A viré par la suite :o
// fetchWeatherByCity('Bruxelles').then(result => console.log(result));