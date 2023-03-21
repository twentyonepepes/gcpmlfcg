import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gallery } from './Components/Gallery'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Dashboard/> */}
      {/* <h1>
        GCPMLFCG
      </h1>
      <h2>
        Google Cloud Platform Machine Learning Flashcard Game
      </h2>
       */}
       <Gallery/>
    </div>
  )
}

export default App
