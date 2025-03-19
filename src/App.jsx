import './App.css'
import Header from './containers/header/header.jsx';
import Weather from './containers/weather/weather-app.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <Weather />
      </main>
    </>
  )
}

export default App
